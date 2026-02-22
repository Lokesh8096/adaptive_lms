'use client'

import { useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    document.documentElement.classList.toggle('dark', nextDark)
    window.localStorage.setItem('theme', nextDark ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark mode"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
