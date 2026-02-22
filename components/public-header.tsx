'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import AppBrand from '@/components/app-brand'
import ThemeToggle from '@/components/theme-toggle'
import { getAccessContext } from '@/lib/auth'

export default function PublicHeader() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    let active = true

    const loadRole = async () => {
      const access = await getAccessContext()
      if (!active) return
      setIsAdmin(access.role === 'admin')
    }

    loadRole()
    return () => {
      active = false
    }
  }, [])

  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <AppBrand />

          <nav className="flex flex-wrap items-center gap-5 text-sm md:text-base">
            <Link href="/" className="nav-link active">
              Home
            </Link>
            <Link href="/register" className="nav-link">
              Programs
            </Link>
            <Link href="/dashboard" className="nav-link">
              Learning
            </Link>
            {isAdmin && (
              <Link href="/admin" className="nav-link">
                Admin
              </Link>
            )}
            <Link href="/login" className="nav-link">
              Login
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>

      <div className="top-announcement">
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm md:px-6 md:text-base">
          New: Build job-ready skills with guided day-wise learning and instant analytics.
        </div>
      </div>
    </header>
  )
}
