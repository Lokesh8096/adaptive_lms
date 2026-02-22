'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import LearningPathNav from '@/components/learning-path-nav'
import { ensureDayProgressRow } from '@/lib/auth'
import {
  QUIZ_QUESTION_COUNT,
  normalizeStringArray,
  parseDayNumber,
} from '@/lib/helpers'
import { supabase } from '@/lib/supabase'

type QuizQuestion = {
  id: string
  prompt: string
  options: unknown
  correct_answer: string | null
}

type AttemptReview = {
  questionId: string
  prompt: string
  selected: string | null
  correct: string | null
  isCorrect: boolean
}

export default function QuizPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(
    () => parseDayNumber(params.dayNumber),
    [params.dayNumber]
  )

  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [reviewRows, setReviewRows] = useState<AttemptReview[]>([])
  const [score, setScore] = useState<number | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [progressState, setProgressState] = useState({
    recapCompleted: false,
    interviewCompleted: false,
    scenarioCompleted: false,
    quizCompleted: false,
  })

  useEffect(() => {
    let active = true

    const fetchQuiz = async () => {
      if (dayNumber === null) {
        setLoading(false)
        return
      }

      setLoading(true)
      const { data: userData } = await supabase.auth.getUser()
      if (!userData.user) {
        if (active) setLoading(false)
        return
      }
      setUserId(userData.user.id)
      await ensureDayProgressRow(userData.user.id, dayNumber)

      const { data: progress, error: progressError } = await supabase
        .from('student_day_progress')
        .select(
          'recap_completed,interview_completed,scenario_completed,quiz_completed'
        )
        .eq('student_id', userData.user.id)
        .eq('day_number', dayNumber)
        .maybeSingle()

      if (progressError) {
        console.error('Failed to load quiz prerequisite progress', progressError)
      }

      const unlocked = Boolean(progress?.scenario_completed)
      setIsUnlocked(unlocked)
      setProgressState({
        recapCompleted: Boolean(progress?.recap_completed),
        interviewCompleted: Boolean(progress?.interview_completed),
        scenarioCompleted: Boolean(progress?.scenario_completed),
        quizCompleted: Boolean(progress?.quiz_completed),
      })

      if (!unlocked) {
        if (active) setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('questions')
        .select('id,prompt,options,correct_answer')
        .eq('type', 'quiz')
        .eq('day_number', dayNumber)
        .eq('active', true)
        .order('created_at', { ascending: true })
        .order('id', { ascending: true })
        .limit(QUIZ_QUESTION_COUNT)

      if (!active) return

      if (error) {
        console.error('Failed to load quiz questions', error)
      }

      setQuestions((data as QuizQuestion[] | null) || [])
      setLoading(false)
    }

    fetchQuiz()
    return () => {
      active = false
    }
  }, [dayNumber])

  const currentQuestion = questions[currentIndex]
  const currentQuestionOptions = normalizeStringArray(currentQuestion?.options)
  const answeredCount = Object.keys(answers).length

  const handleSelect = (questionId: string, option: string) => {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [questionId]: option }))
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev < questions.length - 1 ? prev + 1 : prev
    )
  }

  const handleSubmit = async () => {
    if (!userId || dayNumber === null || questions.length === 0) return

    let totalScore = 0
    const rows: AttemptReview[] = questions.map((q) => {
      const selected = answers[q.id] ?? null
      const correct = q.correct_answer ?? null
      const isCorrect = selected !== null && selected === correct

      if (isCorrect) totalScore += 1

      return {
        questionId: q.id,
        prompt: q.prompt,
        selected,
        correct,
        isCorrect,
      }
    })

    setReviewRows(rows)
    setScore(totalScore)
    setSubmitted(true)

    const { error } = await supabase.from('student_day_progress').upsert(
      {
        student_id: userId,
        day_number: dayNumber,
        quiz_completed: true,
        quiz_score: totalScore,
      },
      { onConflict: 'student_id,day_number' }
    )

    if (error) {
      console.error('Failed to save quiz score', error)
      return
    }

    setProgressState((prev) => ({
      ...prev,
      quizCompleted: true,
    }))
  }

  if (dayNumber === null) {
    return <p>Invalid day number.</p>
  }

  if (loading) {
    return <p>Loading quiz...</p>
  }

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <LearningPathNav
          dayNumber={dayNumber}
          currentSection="quiz"
          progress={{
            recapCompleted: progressState.recapCompleted,
            interviewCompleted: progressState.interviewCompleted,
            scenarioCompleted: progressState.scenarioCompleted,
            quizCompleted: progressState.quizCompleted,
          }}
        />
        <div className="surface-card p-5">
          <h1 className="text-2xl font-bold">Quiz - Day {dayNumber}</h1>
          <p className="mt-2 muted-text">
            Complete scenario target to unlock quiz.
          </p>
          <Link
            href={`/dashboard/day/${dayNumber}/scenario`}
            className="quick-btn mt-4 inline-block"
          >
            Go to Scenario
          </Link>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return <p>No quiz questions found for this day.</p>
  }

  if (submitted) {
    const mistakes = reviewRows.filter((row) => !row.isCorrect)
    return (
      <div className="space-y-8">
        <LearningPathNav
          dayNumber={dayNumber}
          currentSection="quiz"
          progress={{
            recapCompleted: progressState.recapCompleted,
            interviewCompleted: progressState.interviewCompleted,
            scenarioCompleted: progressState.scenarioCompleted,
            quizCompleted: true,
          }}
        />

        <div className="surface-card p-5 md:p-6">
          <h1 className="text-2xl font-bold md:text-3xl">Quiz Review - Day {dayNumber}</h1>
          <p className="mt-2 text-lg font-semibold">
            Score: {score}/{questions.length}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Mistaken Questions</h2>
          {mistakes.length === 0 && <p>No mistakes. Great job.</p>}
          {mistakes.map((row, idx) => (
            <div key={row.questionId} className="surface-card p-4">
              <p className="font-medium">
                {idx + 1}. {row.prompt}
              </p>
              <p className="text-red-700 mt-2">
                Your answer: {row.selected ?? 'Not attempted'}
              </p>
              <p className="text-green-700">Correct answer: {row.correct ?? '-'}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">All Attempts</h2>
          {reviewRows.map((row, idx) => (
            <div key={row.questionId} className="surface-card p-4">
              <p className="font-medium">
                {idx + 1}. {row.prompt}
              </p>
              <p className="mt-2">Your answer: {row.selected ?? 'Not attempted'}</p>
              <p>Correct answer: {row.correct ?? '-'}</p>
              <p className={row.isCorrect ? 'text-green-700' : 'text-red-700'}>
                {row.isCorrect ? 'Correct' : 'Incorrect'}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Quiz - Day {dayNumber}</h1>
        <p className="mt-2 text-sm muted-text">
          Attempt all quiz questions and finish to save score.
        </p>
      </div>

      <LearningPathNav
        dayNumber={dayNumber}
        currentSection="quiz"
        progress={{
          recapCompleted: progressState.recapCompleted,
          interviewCompleted: progressState.interviewCompleted,
          scenarioCompleted: progressState.scenarioCompleted,
          quizCompleted: progressState.quizCompleted,
        }}
      />

      <p className="text-sm muted-text">
        Question {currentIndex + 1} of {questions.length} | Answered {answeredCount}
      </p>

      <div className="surface-card p-4">
        <p className="font-semibold mb-4">{currentQuestion.prompt}</p>

        <div className="space-y-2">
          {currentQuestionOptions.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name={currentQuestion.id}
                value={option}
                checked={answers[currentQuestion.id] === option}
                onChange={() => handleSelect(currentQuestion.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="rounded-xl bg-gray-300 px-4 py-2 font-semibold disabled:opacity-60"
        >
          Previous
        </button>

        {currentIndex < questions.length - 1 && (
          <button
            onClick={goNext}
            className="quick-btn"
          >
            Next
          </button>
        )}

        {currentIndex === questions.length - 1 && (
          <button
            onClick={handleSubmit}
            className="quick-btn success"
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  )
}
