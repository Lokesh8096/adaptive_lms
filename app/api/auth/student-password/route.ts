import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

const DEFAULT_STUDENT_PASSWORD = '1234567890'
const LIST_USERS_PAGE_SIZE = 200
const LIST_USERS_MAX_PAGES = 25

const normalizeEmail = (value: unknown): string =>
  typeof value === 'string' ? value.trim().toLowerCase() : ''

type ProfileRoleRow = {
  role: string | null
}

const findAuthUserByEmail = async (
  email: string
): Promise<{ id: string | null; error: string | null }> => {
  const admin = getSupabaseAdmin()
  if (!admin) {
    return { id: null, error: 'Server auth is not configured.' }
  }

  for (let page = 1; page <= LIST_USERS_MAX_PAGES; page += 1) {
    const { data, error } = await admin.auth.admin.listUsers({
      page,
      perPage: LIST_USERS_PAGE_SIZE,
    })

    if (error) {
      return { id: null, error: error.message }
    }

    const users = data.users ?? []
    const foundUser = users.find((user) => normalizeEmail(user.email) === email)
    if (foundUser) {
      return { id: foundUser.id, error: null }
    }

    if (users.length < LIST_USERS_PAGE_SIZE) {
      break
    }
  }

  return { id: null, error: null }
}

export async function POST(request: Request) {
  const admin = getSupabaseAdmin()
  if (!admin) {
    return NextResponse.json(
      {
        error:
          'SUPABASE_SERVICE_ROLE_KEY is missing. Add it in env to enable default password recovery.',
      },
      { status: 500 }
    )
  }

  let payload: unknown = null
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const normalizedEmail = normalizeEmail(
    (payload as { email?: unknown } | null)?.email
  )

  if (!normalizedEmail) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const { data: allowedEmail, error: allowedError } = await admin
    .from('allowed_emails')
    .select('email')
    .ilike('email', normalizedEmail)
    .maybeSingle()

  if (allowedError) {
    return NextResponse.json({ error: allowedError.message }, { status: 500 })
  }

  if (!allowedEmail) {
    return NextResponse.json(
      { error: 'This email is not allowed for student access.' },
      { status: 403 }
    )
  }

  const { id: existingUserId, error: findUserError } =
    await findAuthUserByEmail(normalizedEmail)
  if (findUserError) {
    return NextResponse.json({ error: findUserError }, { status: 500 })
  }

  let authUserId = existingUserId

  if (!authUserId) {
    const { data: createdUserData, error: createError } =
      await admin.auth.admin.createUser({
        email: normalizedEmail,
        password: DEFAULT_STUDENT_PASSWORD,
        email_confirm: true,
      })

    if (createError || !createdUserData.user) {
      return NextResponse.json(
        { error: createError?.message ?? 'Failed to create student user.' },
        { status: 500 }
      )
    }

    authUserId = createdUserData.user.id
  }

  if (!authUserId) {
    return NextResponse.json(
      { error: 'Student auth user could not be created.' },
      { status: 500 }
    )
  }

  const { data: profileData, error: profileError } = await admin
    .from('profiles')
    .select('role')
    .eq('id', authUserId)
    .maybeSingle()
  const profile = (profileData as ProfileRoleRow | null) ?? null

  if (profileError) {
    console.error('Failed to load profile role in password recovery', profileError)
  }

  if (profile?.role === 'admin') {
    return NextResponse.json(
      { error: 'Admin password cannot be reset from student login.' },
      { status: 403 }
    )
  }

  const { error: updateError } = await admin.auth.admin.updateUserById(authUserId, {
    password: DEFAULT_STUDENT_PASSWORD,
    email_confirm: true,
  })

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  const { error: profileUpsertError } = await admin
    .from('profiles')
    .upsert({ id: authUserId, role: 'student' }, { onConflict: 'id' })

  if (profileUpsertError) {
    console.error('Failed to upsert student profile in password recovery', profileUpsertError)
  }

  const { error: usedEmailError } = await admin
    .from('allowed_emails')
    .update({ is_used: true })
    .ilike('email', normalizedEmail)

  if (usedEmailError) {
    console.error('Failed to update allowed email usage in password recovery', usedEmailError)
  }

  return NextResponse.json({
    ok: true,
    message: 'Password has been reset to default student password.',
  })
}
