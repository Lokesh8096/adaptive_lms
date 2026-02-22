'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { getOrderedDayNumbers } from '@/lib/helpers'
import { recapContent } from '@/lib/recapContent'
import { supabase } from '@/lib/supabase'

type Progress = {
  day_number: number | null
  recap_completed: boolean | null
  interview_completed: boolean | null
  scenario_completed: boolean | null
  quiz_completed: boolean | null
}

export default function DashboardPage() {
  const days = useMemo(
    () => getOrderedDayNumbers(recapContent as Record<string, unknown>),
    []
  )
  const [progressByDay, setProgressByDay] = useState<Record<number, Progress>>(
    {}
  )

  useEffect(() => {
    const loadProgress = async () => {
      const { data: userData } = await supabase.auth.getUser()
      if (!userData.user) return

      const { data, error } = await supabase
        .from('student_day_progress')
        .select(
          'day_number,recap_completed,interview_completed,scenario_completed,quiz_completed'
        )
        .eq('student_id', userData.user.id)

      if (error) {
        console.error('Failed to load dashboard progress', error)
        return
      }

      const mapped: Record<number, Progress> = {}
      ;(data as Progress[] | null)?.forEach((row) => {
        if (row.day_number && row.day_number > 0) {
          mapped[row.day_number] = row
        }
      })

      setProgressByDay(mapped)
    }

    loadProgress()
  }, [])

  const getCompletedCount = (row?: Progress): number => {
    if (!row) return 0
    let count = 0
    if (row.recap_completed) count += 1
    if (row.interview_completed) count += 1
    if (row.scenario_completed) count += 1
    if (row.quiz_completed) count += 1
    return count
  }

  const totalDays = days.length
  const fullyCompletedDays = days.filter(
    (dayNumber) => getCompletedCount(progressByDay[dayNumber]) === 4
  ).length
  const inProgressDays = days.filter((dayNumber) => {
    const completed = getCompletedCount(progressByDay[dayNumber])
    return completed > 0 && completed < 4
  }).length

  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Your Learning Days</h1>
        <p className="mt-2 text-sm muted-text">
          Continue where you left off. Each day has recap, interview, scenario, and quiz.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="interactive-card reveal-up p-4">
          <p className="text-xs muted-text">Total Days</p>
          <p className="mt-1 text-2xl font-bold">{totalDays}</p>
        </div>
        <div className="interactive-card reveal-up p-4" style={{ animationDelay: '70ms' }}>
          <p className="text-xs muted-text">Completed</p>
          <p className="mt-1 text-2xl font-bold">{fullyCompletedDays}</p>
        </div>
        <div className="interactive-card reveal-up p-4" style={{ animationDelay: '140ms' }}>
          <p className="text-xs muted-text">In Progress</p>
          <p className="mt-1 text-2xl font-bold">{inProgressDays}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {days.map((dayNumber) => {
          const progress = progressByDay[dayNumber]
          const completedCount = getCompletedCount(progress)
          const completionPct = Math.round((completedCount / 4) * 100)

          return (
            <Link
              key={dayNumber}
              href={`/dashboard/day/${dayNumber}`}
              className="surface-card p-4 hover:shadow-lg"
            >
              <p className="text-center text-lg font-semibold">Day {dayNumber}</p>
              <p className="mt-1 text-xs text-center muted-text">
                {completedCount}/4 completed
              </p>
              <div className="mt-3 h-2 w-full rounded-full bg-gray-300">
                <div
                  className="h-2 rounded-full bg-blue-600 transition-all"
                  style={{ width: `${completionPct}%` }}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
