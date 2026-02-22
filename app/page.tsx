'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'
import { getAccessContext } from '@/lib/auth'

export default function HomePage() {
  const router = useRouter()
  const [checkingSession, setCheckingSession] = useState(true)

  useEffect(() => {
    let active = true

    const redirectLoggedInUsers = async () => {
      try {
        const access = await getAccessContext()
        if (!active) return

        if (!access.user) {
          setCheckingSession(false)
          return
        }

        if (access.role === 'admin') {
          router.replace('/admin')
          return
        }

        if (access.allowedEmail) {
          router.replace('/dashboard')
          return
        }

        setCheckingSession(false)
      } catch (error) {
        console.error('Failed to verify home access', error)
        if (active) setCheckingSession(false)
      }
    }

    redirectLoggedInUsers()
    return () => {
      active = false
    }
  }, [router])

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="muted-text">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <header className="border-b border-white/10 px-6 py-4 backdrop-blur-lg md:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <h1 className="text-xl font-semibold tracking-wide">Adaptive LMS</h1>

          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/register" className="transition hover:text-white">
              Programs
            </Link>
            <Link href="/dashboard" className="transition hover:text-white">
              Learning
            </Link>
            <Link href="/login" className="transition hover:text-white">
              Login
            </Link>
          </nav>

          <ThemeToggle className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20" />
        </div>
      </header>

      <section className="flex min-h-[85vh] items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-indigo-400">
            Build Job-Ready Skills
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Designed to transform you into a{' '}
            <span className="text-indigo-400">highly skilled software professional</span>
          </h2>

          <p className="mb-10 text-lg text-gray-400">
            Register with your allowed email, learn day by day, and track your
            progress with a clean student and admin dashboard.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-medium shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-700"
            >
              Student Register
            </Link>

            <Link
              href="/login"
              className="rounded-xl bg-white/10 px-6 py-3 font-medium transition hover:bg-white/20"
            >
              Student Login
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-medium shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        (c) 2026 Adaptive LMS. All rights reserved.
      </footer>
    </div>
  )
}
