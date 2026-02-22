'use client'

import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'
import { getAccessContext } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [checkingSession, setCheckingSession] = useState(true)
  const [guardError, setGuardError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    const checkStudentAccess = async () => {
      try {
        const access = await getAccessContext()

        if (!access.user) {
          if (active) router.replace('/login')
          return
        }

        if (access.role === 'admin') {
          if (active) router.replace('/admin')
          return
        }

        if (!access.allowedEmail) {
          await supabase.auth.signOut()
          if (active) router.replace('/login')
          return
        }

        if (active) {
          setGuardError(null)
          setCheckingSession(false)
        }
      } catch (error) {
        console.error('Failed to validate student access', error)
        if (active) {
          setGuardError('Unable to verify your session. Please try again.')
          setCheckingSession(false)
        }
      }
    }

    checkStudentAccess()
    return () => {
      active = false
    }
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace('/')
  }

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="muted-text">Checking your session...</p>
      </div>
    )
  }

  if (guardError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="surface-card max-w-md p-4 text-sm text-red-700">
          {guardError}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-5">
              <Link href="/" className="text-lg font-extrabold tracking-wide">
                Student LMS
              </Link>
              <nav className="hidden items-center gap-2 md:flex">
                <Link
                  href="/dashboard"
                  className={`nav-btn ${pathname === '/dashboard' ? 'active' : ''}`}
                >
                  All Days
                </Link>

              </nav>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button onClick={handleLogout} className="quick-btn secondary text-sm">
                Logout
              </button>
            </div>
          </div>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
            <Link
              href="/dashboard"
              className={`nav-btn ${pathname === '/dashboard' ? 'active' : ''}`}
            >
              All Days
            </Link>
            <span
              className="nav-btn pointer-events-none select-none opacity-50"
              aria-disabled="true"
              title="Home is disabled while logged in"
            >
              Home
            </span>
          </nav>
        </div>

        <div className="top-announcement">
          <div className="mx-auto max-w-7xl px-4 py-2 text-sm md:px-6">
            Student Dashboard: track your day-wise completion and keep learning momentum.
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">{children}</main>
    </div>
  )
}
