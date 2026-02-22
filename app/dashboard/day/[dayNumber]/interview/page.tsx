'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import { ensureDayProgressRow } from '@/lib/auth'
import {
  INTERVIEW_REQUIRED_COUNT,
  mergeUniqueById,
  normalizeStringArray,
  parseDayNumber,
} from '@/lib/helpers'
import { supabase } from '@/lib/supabase'

const PAGE_SIZE = 5

type Question = {
  id: string
  prompt: string
  correct_answer: string | null
  answer?: string | null
}

export default function InterviewPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(
    () => parseDayNumber(params.dayNumber),
    [params.dayNumber]
  )

  const [questions, setQuestions] = useState<Question[]>([])
  const [checked, setChecked] = useState<string[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  const targetCount = Math.min(INTERVIEW_REQUIRED_COUNT, totalCount)
  const hasMore = questions.length < totalCount
  const isComplete = targetCount > 0 && checked.length >= targetCount

  const loadQuestions = useCallback(
    async (offset: number, append: boolean) => {
      if (dayNumber === null) return

      const { data, error, count } = await supabase
        .from('questions')
        .select('*', { count: 'exact' })
        .eq('type', 'interview')
        .eq('day_number', dayNumber)
        .eq('active', true)
        .order('created_at', { ascending: true })
        .order('id', { ascending: true })
        .range(offset, offset + PAGE_SIZE - 1)

      if (error) {
        console.error('Failed to load interview questions', error)
        return
      }

      const incoming = (data as Question[] | null) ?? []
      setTotalCount(count ?? 0)
      setQuestions((prev) =>
        append ? mergeUniqueById(prev, incoming) : incoming
      )
    },
    [dayNumber]
  )

  useEffect(() => {
    let active = true

    const load = async () => {
      if (dayNumber === null) {
        setLoading(false)
        return
      }

      setLoading(true)
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        if (active) setLoading(false)
        return
      }

      await ensureDayProgressRow(data.user.id, dayNumber)

      const { data: progress, error } = await supabase
        .from('student_day_progress')
        .select('recap_completed,interview_checked')
        .eq('student_id', data.user.id)
        .eq('day_number', dayNumber)
        .maybeSingle()

      if (!active) return
      if (error) {
        console.error('Failed to load interview progress', error)
      }

      const unlocked = Boolean(progress?.recap_completed)
      setIsUnlocked(unlocked)
      setUserId(data.user.id)
      setChecked(normalizeStringArray(progress?.interview_checked))

      if (unlocked) {
        await loadQuestions(0, false)
      }

      if (active) setLoading(false)
    }

    load()
    return () => {
      active = false
    }
  }, [dayNumber, loadQuestions])

  useEffect(() => {
    const syncCompletion = async () => {
      if (!userId || dayNumber === null || !isUnlocked) return

      const { error } = await supabase
        .from('student_day_progress')
        .upsert(
          {
            student_id: userId,
            day_number: dayNumber,
            interview_checked: checked,
            interview_completed: isComplete,
          },
          { onConflict: 'student_id,day_number' }
        )

      if (error) {
        console.error('Failed to sync interview completion', error)
      }
    }

    syncCompletion()
  }, [checked, dayNumber, isComplete, isUnlocked, userId])

  const toggle = (questionId: string) => {
    setChecked((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    )
  }

  const loadMore = async () => {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    await loadQuestions(questions.length, true)
    setLoadingMore(false)
  }

  if (dayNumber === null) {
    return <p>Invalid day number.</p>
  }

  if (loading) {
    return <p>Loading interview questions...</p>
  }

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Interview - Day {dayNumber}</h1>
        <p>Complete all recap checkboxes to unlock interview.</p>
        <Link
          href={`/dashboard/day/${dayNumber}/recap`}
          className="text-blue-600 underline"
        >
          Go to Recap
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Interview - Day {dayNumber}</h1>
        <p className="mt-2 text-sm muted-text">
          Check completed questions to unlock scenario.
        </p>
      </div>
      <p className="text-sm muted-text">
        Completed {checked.length} of {targetCount || 0}
      </p>

      {questions.length === 0 && <p>No interview questions available.</p>}

      {questions.map((q, index) => {
        const answer = q.correct_answer ?? q.answer ?? null
        return (
          <div key={q.id} className="surface-card p-4">
            <h3 className="font-medium">
              {index + 1}. {q.prompt}
            </h3>

            {answer && (
              <p className="mt-2 muted-text">
                <span className="font-medium">Answer:</span> {answer}
              </p>
            )}

            <label className="mt-3 inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={checked.includes(q.id)}
                onChange={() => toggle(q.id)}
              />
              Mark as completed
            </label>
          </div>
        )
      })}

      {hasMore && questions.length < targetCount && (
        <button
          onClick={loadMore}
          disabled={loadingMore}
          className="quick-btn disabled:opacity-60"
        >
          {loadingMore ? 'Loading...' : 'Load More'}
        </button>
      )}

      <Link
        href={`/dashboard/day/${dayNumber}/scenario`}
        className={`inline-block rounded-xl px-4 py-2 font-semibold text-white ${
          isComplete ? 'bg-green-600' : 'bg-gray-400 pointer-events-none'
        }`}
      >
        Continue to Scenario
      </Link>
    </div>
  )
}
