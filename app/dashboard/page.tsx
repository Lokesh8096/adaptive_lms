'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { getOrderedDayNumbers } from '@/lib/helpers'
import { recapContent } from '@/lib/recapContent'
import { supabase } from '@/lib/supabase'

const BATCH_SIZE = 6

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

  const [progressByDay, setProgressByDay] = useState<Record<number, Progress>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProgress = async () => {
      const { data: userData } = await supabase.auth.getUser()
      if (!userData.user) { setLoading(false); return }

      const { data, error } = await supabase
        .from('student_day_progress')
        .select(
          'day_number,recap_completed,interview_completed,scenario_completed,quiz_completed'
        )
        .eq('student_id', userData.user.id)

      if (error) {
        console.error('Failed to load dashboard progress', error)
        setLoading(false)
        return
      }

      const mapped: Record<number, Progress> = {}
      if (data) {
        for (const row of data as Progress[]) {
          if (row.day_number && row.day_number > 0) {
            mapped[row.day_number] = row
          }
        }
      }

      setProgressByDay(mapped)
      setLoading(false)
    }

    loadProgress()
  }, [])

  // Count how many of the 4 steps are done for a day
  const getCompletedCount = (row?: Progress): number => {
    if (!row) return 0
    let count = 0
    if (row.recap_completed) count++
    if (row.interview_completed) count++
    if (row.scenario_completed) count++
    if (row.quiz_completed) count++
    return count
  }

  const isDayFullyDone = (dayNumber: number) =>
    getCompletedCount(progressByDay[dayNumber]) === 4

  // Split all days into batches of BATCH_SIZE
  const batches: number[][] = []
  for (let i = 0; i < days.length; i += BATCH_SIZE) {
    batches.push(days.slice(i, i + BATCH_SIZE))
  }

  // A batch is unlocked if it's the first batch OR the previous batch is 100% complete
  const isBatchUnlocked = (batchIndex: number): boolean => {
    if (batchIndex === 0) return true
    const prevBatch = batches[batchIndex - 1]
    return prevBatch.every((dayNum) => isDayFullyDone(dayNum))
  }

  // How many batches are currently visible (unlocked or the first locked one as "next up")
  const firstLockedBatchIndex = batches.findIndex((_, i) => !isBatchUnlocked(i))
  // Show all unlocked batches + 0 hidden (don't show any locked batch cards)
  const visibleBatches = firstLockedBatchIndex === -1
    ? batches                              // all unlocked
    : batches.slice(0, firstLockedBatchIndex) // only unlocked ones

  // Stats
  const totalDays = days.length
  const fullyCompletedDays = days.filter(isDayFullyDone).length
  const inProgressDays = days.filter((d) => {
    const c = getCompletedCount(progressByDay[d])
    return c > 0 && c < 4
  }).length

  // Next batch info (for the "locked next batch" teaser)
  const nextLockedBatch = firstLockedBatchIndex !== -1 ? batches[firstLockedBatchIndex] : null
  const currentBatch = firstLockedBatchIndex > 0
    ? batches[firstLockedBatchIndex - 1]
    : batches[0]
  const currentBatchDoneCount = currentBatch?.filter(isDayFullyDone).length ?? 0
  const currentBatchTotal = currentBatch?.length ?? 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Your Learning Days</h1>
        <p className="mt-2 text-sm muted-text">
          Complete all {BATCH_SIZE} days in a batch to unlock the next batch.
        </p>
      </div>

      {/* Stats row */}
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

      {loading ? (
        <div className="surface-card p-8 text-center muted-text">Loading your progress...</div>
      ) : (
        <>
          {/* Render each visible batch */}
          {visibleBatches.map((batch, batchIndex) => {
            const batchDone = batch.every(isDayFullyDone)

            return (
              <section key={batchIndex} className="space-y-3">
                {/* Batch label */}
                <div className="flex items-center gap-3">
                  <h2 className="text-base font-semibold">
                    Batch {batchIndex + 1}
                    <span className="ml-2 text-sm font-normal muted-text">
                      (Days {batch[0]}–{batch[batch.length - 1]})
                    </span>
                  </h2>
                  {batchDone && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      ✅ Complete
                    </span>
                  )}
                  {!batchDone && batchIndex < visibleBatches.length && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                      {batch.filter(isDayFullyDone).length}/{batch.length} days done
                    </span>
                  )}
                </div>

                {/* Day cards for this batch */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {batch.map((dayNumber, indexInBatch) => {
                    const globalIndex = batchIndex * BATCH_SIZE + indexInBatch
                    const progress = progressByDay[dayNumber]
                    const completedCount = getCompletedCount(progress)
                    const completionPct = Math.round((completedCount / 4) * 100)
                    const isFullyDone = completedCount === 4

                    // Within a batch: day 1 of each batch is unlocked when the batch is;
                    // subsequent days require the previous day within the batch to be complete
                    const prevDayNumber = globalIndex > 0 ? days[globalIndex - 1] : null
                    const prevDayCompleted =
                      prevDayNumber === null
                        ? true
                        : getCompletedCount(progressByDay[prevDayNumber]) === 4
                    const isUnlocked = globalIndex === 0 || prevDayCompleted

                    if (!isUnlocked) {
                      return (
                        <div
                          key={dayNumber}
                          className="surface-card p-4 opacity-40 cursor-not-allowed select-none"
                          title="Complete the previous day to unlock"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-lg font-semibold">Day {dayNumber}</span>
                            <span className="text-base">🔒</span>
                          </div>
                          <p className="mt-1 text-xs text-center muted-text">Locked</p>
                          <div className="mt-3 h-2 w-full rounded-full bg-gray-300">
                            <div className="h-2 rounded-full bg-gray-400" style={{ width: '0%' }} />
                          </div>
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={dayNumber}
                        href={`/dashboard/day/${dayNumber}`}
                        className={`surface-card p-4 hover:shadow-lg transition-shadow ${isFullyDone ? 'ring-2 ring-green-500' : ''
                          }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-lg font-semibold">Day {dayNumber}</p>
                          {isFullyDone && <span className="text-base">✅</span>}
                        </div>
                        <p className="mt-1 text-xs text-center muted-text">
                          {completedCount}/4 completed
                        </p>
                        <div className="mt-3 h-2 w-full rounded-full bg-gray-300">
                          <div
                            className={`h-2 rounded-full transition-all ${isFullyDone ? 'bg-green-500' : 'bg-blue-600'
                              }`}
                            style={{ width: `${completionPct}%` }}
                          />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}

          {/* Next batch teaser — shows what's coming and how close the user is */}
          {nextLockedBatch && (
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-[var(--muted)]">
                Batch {firstLockedBatchIndex + 1}
                <span className="ml-2 text-sm font-normal">
                  (Days {nextLockedBatch[0]}–{nextLockedBatch[nextLockedBatch.length - 1]})
                </span>
              </h2>

              <div className="surface-card p-6 text-center opacity-60 border-2 border-dashed">
                <p className="text-3xl mb-2">🔒</p>
                <p className="font-semibold">Next batch locked</p>
                <p className="mt-1 text-sm muted-text">
                  Complete all {currentBatchTotal} days in Batch {firstLockedBatchIndex} to unlock{' '}
                  {nextLockedBatch.length} more days.
                </p>

                {/* Progress towards unlocking */}
                <div className="mt-4 max-w-xs mx-auto">
                  <div className="flex justify-between text-xs muted-text mb-1">
                    <span>Batch {firstLockedBatchIndex} progress</span>
                    <span>{currentBatchDoneCount}/{currentBatchTotal}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-[var(--primary)] transition-all"
                      style={{ width: `${(currentBatchDoneCount / currentBatchTotal) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* All done! */}
          {!nextLockedBatch && fullyCompletedDays === totalDays && totalDays > 0 && (
            <div className="surface-card p-8 text-center">
              <p className="text-4xl mb-3">🎓</p>
              <p className="text-xl font-bold">All days completed!</p>
              <p className="mt-1 muted-text">You&apos;ve finished the entire curriculum.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
