'use client'

import { useState } from 'react'

type ThemeToggleProps = {
  className?: string
  darkLabel?: string
  lightLabel?: string
}

export default function ThemeToggle({
  className,
  darkLabel = 'Light Mode',
  lightLabel = 'Dark Mode',
}: ThemeToggleProps) {
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
      className={className ?? 'theme-toggle'}
      aria-label="Toggle dark mode"
    >
      {isDark ? darkLabel : lightLabel}
    </button>
  )
}
