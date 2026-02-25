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

// ──────────────────── localStorage helpers ────────────────────
function storageKey(day: number) {
  return `quiz_progress_day${day}`
}

type SavedProgress = {
  currentIndex: number
  firstAttemptAnswers: Record<string, string>
  correctlyAnswered: string[]
}

function loadProgress(day: number): SavedProgress | null {
  try {
    const raw = localStorage.getItem(storageKey(day))
    return raw ? (JSON.parse(raw) as SavedProgress) : null
  } catch {
    return null
  }
}

function saveProgress(day: number, p: SavedProgress) {
  try {
    localStorage.setItem(storageKey(day), JSON.stringify(p))
  } catch { /* ignore */ }
}

function clearProgress(day: number) {
  try {
    localStorage.removeItem(storageKey(day))
  } catch { /* ignore */ }
}
// ──────────────────────────────────────────────────────────────

export default function QuizPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(() => parseDayNumber(params.dayNumber), [params.dayNumber])

  // Data
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [progressState, setProgressState] = useState({
    recapCompleted: false,
    interviewCompleted: false,
    scenarioCompleted: false,
    quizCompleted: false,
  })

  // Quiz interaction state
  const [currentIndex, setCurrentIndex] = useState(0)
  // What the user has selected for the CURRENT question (resets on navigation)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  // 'correct' | 'wrong' | null – feedback shown below the options
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  // First answer per question – used for final score
  const [firstAttemptAnswers, setFirstAttemptAnswers] = useState<Record<string, string>>({})
  // IDs of questions the user has answered correctly (for score tracking)
  const [correctlyAnswered, setCorrectlyAnswered] = useState<Set<string>>(new Set())
  // IDs of questions the user has attempted at least once (gate for Next / Finish)
  const [attempted, setAttempted] = useState<Set<string>>(new Set())

  // Results
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [reviewRows, setReviewRows] = useState<AttemptReview[]>([])

  // ── fetch questions + restore saved progress ──
  useEffect(() => {
    let active = true

    const fetchQuiz = async () => {
      if (dayNumber === null) { setLoading(false); return }

      setLoading(true)
      const { data: userData } = await supabase.auth.getUser()
      if (!userData.user) { if (active) setLoading(false); return }

      setUserId(userData.user.id)
      await ensureDayProgressRow(userData.user.id, dayNumber)

      const { data: progress, error: progressError } = await supabase
        .from('student_day_progress')
        .select('recap_completed,interview_completed,scenario_completed,quiz_completed')
        .eq('student_id', userData.user.id)
        .eq('day_number', dayNumber)
        .maybeSingle()

      if (progressError) console.error('Failed to load progress', progressError)

      const unlocked = Boolean(progress?.scenario_completed)
      setIsUnlocked(unlocked)
      setProgressState({
        recapCompleted: Boolean(progress?.recap_completed),
        interviewCompleted: Boolean(progress?.interview_completed),
        scenarioCompleted: Boolean(progress?.scenario_completed),
        quizCompleted: Boolean(progress?.quiz_completed),
      })

      if (!unlocked) { if (active) setLoading(false); return }

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
      if (error) console.error('Failed to load quiz questions', error)

      const loaded = (data as QuizQuestion[] | null) || []
      setQuestions(loaded)

      // Restore saved progress
      const saved = loadProgress(dayNumber)
      if (saved && loaded.length > 0) {
        const validIds = new Set(loaded.map((q) => q.id))

        const validFirst: Record<string, string> = {}
        for (const [id, ans] of Object.entries(saved.firstAttemptAnswers)) {
          if (validIds.has(id)) validFirst[id] = ans
        }
        const validCorrect = new Set(saved.correctlyAnswered.filter((id) => validIds.has(id)))

        setFirstAttemptAnswers(validFirst)
        setCorrectlyAnswered(validCorrect)
        // Any question with a recorded first attempt was already attempted
        setAttempted(new Set(Object.keys(validFirst)))

        const idxClamped = Math.max(0, Math.min(saved.currentIndex, loaded.length - 1))
        setCurrentIndex(idxClamped)

        // Pre-fill feedback for the restored question
        const restoredQ = loaded[idxClamped]
        if (restoredQ && validCorrect.has(restoredQ.id)) {
          setSelectedOption(restoredQ.correct_answer ?? null)
          setFeedback('correct')
        } else if (restoredQ && validFirst[restoredQ.id]) {
          // Was attempted but answered wrong — show the wrong selection
          setSelectedOption(validFirst[restoredQ.id])
          setFeedback('wrong')
        }
      }

      setLoading(false)
    }

    fetchQuiz()
    return () => { active = false }
  }, [dayNumber])

  // ── auto-save to localStorage on every relevant change ──
  useEffect(() => {
    if (dayNumber === null || questions.length === 0 || submitted) return
    saveProgress(dayNumber, {
      currentIndex,
      firstAttemptAnswers,
      correctlyAnswered: Array.from(correctlyAnswered),
    })
  }, [currentIndex, firstAttemptAnswers, correctlyAnswered, dayNumber, questions.length, submitted])

  // ── derived ──
  const currentQuestion = questions[currentIndex]
  const currentOptions = normalizeStringArray(currentQuestion?.options)
  const isCurrentCorrect = currentQuestion ? correctlyAnswered.has(currentQuestion.id) : false
  const isCurrentAttempted = currentQuestion ? attempted.has(currentQuestion.id) : false
  const allAttempted = questions.length > 0 && questions.every((q) => attempted.has(q.id))
  const allAnsweredCorrectly = questions.length > 0 && questions.every((q) => correctlyAnswered.has(q.id))

  // ── handlers ──
  const handleSelect = (option: string) => {
    if (!currentQuestion) return
    // Allow re-selecting on an already-correct question (just visual), no state change
    if (correctlyAnswered.has(currentQuestion.id)) {
      setSelectedOption(option)
      return
    }

    setSelectedOption(option)

    // Record first attempt only once per question
    if (!firstAttemptAnswers[currentQuestion.id]) {
      setFirstAttemptAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }))
    }

    // Mark as attempted
    setAttempted((prev) => {
      const next = new Set(prev)
      next.add(currentQuestion.id)
      return next
    })

    const isCorrect = option === currentQuestion.correct_answer
    if (isCorrect) {
      setFeedback('correct')
      setCorrectlyAnswered((prev) => {
        const next = new Set(prev)
        next.add(currentQuestion.id)
        return next
      })
    } else {
      setFeedback('wrong')
    }
  }

  const navigateTo = (newIndex: number) => {
    const targetQ = questions[newIndex]
    if (!targetQ) return
    setCurrentIndex(newIndex)
    // Restore visual state for the target question
    if (correctlyAnswered.has(targetQ.id)) {
      setSelectedOption(targetQ.correct_answer ?? null)
      setFeedback('correct')
    } else {
      setSelectedOption(null)
      setFeedback(null)
    }
  }

  const goPrev = () => { if (currentIndex > 0) navigateTo(currentIndex - 1) }
  const goNext = () => { if (isCurrentAttempted && currentIndex < questions.length - 1) navigateTo(currentIndex + 1) }

  const handleSubmit = async () => {
    if (!userId || dayNumber === null || !allAttempted) return

    let totalScore = 0
    const rows: AttemptReview[] = questions.map((q) => {
      const firstAns = firstAttemptAnswers[q.id] ?? null
      const correct = q.correct_answer ?? null
      const isCorrect = firstAns !== null && firstAns === correct
      if (isCorrect) totalScore++
      return { questionId: q.id, prompt: q.prompt, selected: firstAns, correct, isCorrect }
    })

    setReviewRows(rows)
    setScore(totalScore)
    setSubmitted(true)
    clearProgress(dayNumber)

    const { error } = await supabase
      .from('student_day_progress')
      .upsert(
        { student_id: userId, day_number: dayNumber, quiz_completed: true, quiz_score: totalScore },
        { onConflict: 'student_id,day_number' }
      )

    if (error) console.error('Failed to save quiz score', error)
    else setProgressState((prev) => ({ ...prev, quizCompleted: true }))
  }

  // ── early returns ──
  if (dayNumber === null) return <p>Invalid day number.</p>
  if (loading) return <p>Loading quiz...</p>

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />
        <div className="surface-card p-5">
          <h1 className="text-2xl font-bold">Quiz - Day {dayNumber}</h1>
          <p className="mt-2 muted-text">Complete scenario target to unlock quiz.</p>
          <Link href={`/dashboard/day/${dayNumber}/scenario`} className="quick-btn mt-4 inline-block">
            Go to Scenario
          </Link>
        </div>
      </div>
    )
  }

  if (questions.length === 0) return <p>No quiz questions found for this day.</p>

  // ── results screen ──
  if (submitted) {
    const mistakes = reviewRows.filter((r) => !r.isCorrect)
    return (
      <div className="space-y-8">
        <LearningPathNav
          dayNumber={dayNumber}
          currentSection="quiz"
          progress={{ ...progressState, quizCompleted: true }}
        />

        <div className="surface-card p-5 md:p-6">
          <h1 className="text-2xl font-bold md:text-3xl">Quiz Complete — Day {dayNumber}</h1>
          <p className="mt-3 text-lg font-semibold">
            First-attempt score:{' '}
            <span className={score === questions.length ? 'text-green-600' : 'text-[var(--primary)]'}>
              {score}/{questions.length}
            </span>
          </p>
          <p className="text-sm muted-text mt-1">
            Score is based on how many you got right on the first try.
          </p>
        </div>

        {mistakes.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">❌ Questions you missed first time</h2>
            {mistakes.map((row, idx) => (
              <div key={row.questionId} className="surface-card p-4 border-l-4 border-red-400">
                <p className="font-medium">{idx + 1}. {row.prompt}</p>
                <p className="text-red-600 mt-2 text-sm">Your first answer: {row.selected ?? 'Not attempted'}</p>
                <p className="text-green-700 text-sm">Correct answer: {row.correct ?? '—'}</p>
              </div>
            ))}
          </div>
        )}

        {mistakes.length === 0 && (
          <div className="surface-card p-5 text-center text-green-700 font-semibold text-lg">
            🎉 Perfect score! You got every question right on the first try.
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">All Questions</h2>
          {reviewRows.map((row, idx) => (
            <div
              key={row.questionId}
              className={`surface-card p-4 border-l-4 ${row.isCorrect ? 'border-green-400' : 'border-red-400'}`}
            >
              <p className="font-medium">{idx + 1}. {row.prompt}</p>
              <p className="mt-2 text-sm">Your first answer: {row.selected ?? 'Not attempted'}</p>
              <p className="text-sm">Correct answer: {row.correct ?? '—'}</p>
              <p className={`text-sm font-semibold mt-1 ${row.isCorrect ? 'text-green-700' : 'text-red-600'}`}>
                {row.isCorrect ? '✓ Correct' : '✗ Incorrect'}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── quiz in progress ──
  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Quiz — Day {dayNumber}</h1>
        <p className="mt-1 text-sm muted-text">
          Answer each question to proceed. Your score is based on first-attempt accuracy.
        </p>
      </div>

      <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />

      {/* Progress bar */}
      <div className="surface-card p-4">
        <div className="flex justify-between text-sm muted-text mb-2">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{attempted.size} / {questions.length} answered</span>
        </div>
        <div className="w-full bg-[var(--bg-soft)] rounded-full h-2">
          <div
            className="h-2 rounded-full bg-[var(--primary)] transition-all duration-300"
            style={{ width: `${(attempted.size / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className={`surface-card p-5 border-l-4 transition-colors duration-200 ${feedback === 'correct' ? 'border-green-500' :
        feedback === 'wrong' ? 'border-red-500' :
          'border-transparent'
        }`}>
        <p className="font-semibold text-base mb-5 leading-snug">
          {currentIndex + 1}. {currentQuestion.prompt}
        </p>

        <div className="space-y-3">
          {currentOptions.map((option) => {
            const isSelected = selectedOption === option
            const isTheCorrectAnswer = option === currentQuestion.correct_answer

            let optionStyle = 'border-2 border-[var(--border)] bg-[var(--bg-soft)]'

            if (isSelected) {
              if (feedback === 'correct') {
                optionStyle = 'border-2 border-green-500 bg-green-50 text-green-800'
              } else if (feedback === 'wrong') {
                optionStyle = 'border-2 border-red-500 bg-red-50 text-red-700'
              } else {
                optionStyle = 'border-2 border-[var(--primary)] bg-[color-mix(in_oklab,var(--primary)_8%,white)]'
              }
            }

            // After a wrong answer, highlight the correct option in green
            if (feedback === 'wrong' && isTheCorrectAnswer && !correctlyAnswered.has(currentQuestion.id)) {
              optionStyle = 'border-2 border-green-500 bg-green-50 text-green-800'
            }

            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                disabled={correctlyAnswered.has(currentQuestion.id) && feedback === 'correct' && !isSelected}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-150 ${optionStyle}`}
              >
                {option}
              </button>
            )
          })}
        </div>

        {/* Inline feedback */}
        {feedback === 'correct' && (
          <div className="mt-4 flex items-center gap-2 text-green-700 font-semibold">
            <span className="text-xl">✅</span>
            <span>Correct! You may proceed to the next question.</span>
          </div>
        )}

        {feedback === 'wrong' && (
          <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200">
            <p className="text-red-700 font-semibold flex items-center gap-2">
              <span>❌</span> That&apos;s not correct.
            </p>
            <p className="text-sm text-red-600 mt-1">
              The correct answer is highlighted in green. You can still proceed to the next question.
            </p>
          </div>
        )}

        {!feedback && (
          <p className="mt-4 text-xs muted-text italic">Select an answer to continue.</p>
        )}
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="rounded-xl border-2 border-[var(--border)] px-4 py-2 font-semibold transition-opacity disabled:opacity-40"
        >
          ← Previous
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            onClick={goNext}
            disabled={!isCurrentAttempted}
            title={!isCurrentAttempted ? 'Select an answer to proceed' : ''}
            className="quick-btn disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAttempted}
            title={!allAttempted ? 'Answer all questions to finish' : ''}
            className="quick-btn success disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Finish Quiz
          </button>
        )}

        {!isCurrentAttempted && (
          <span className="text-xs muted-text italic">
            Select an answer to proceed.
          </span>
        )}
      </div>

      {/* All complete banner */}
      {allAttempted && !submitted && (
        <div className="surface-card p-4 text-center border-2 border-green-500 rounded-xl text-green-700 font-semibold">
          🎉 All questions answered! Navigate to the last question and click <strong>Finish Quiz</strong>.
        </div>
      )}
    </div>
  )
}
