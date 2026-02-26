'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import LearningPathNav from '@/components/learning-path-nav'
import { ensureDayProgressRow } from '@/lib/auth'
import { QUIZ_QUESTION_COUNT, normalizeStringArray, parseDayNumber } from '@/lib/helpers'
import { supabase } from '@/lib/supabase'

const QUIZ_TIME = 40

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
  timedOut: boolean
}

// ─── localStorage ─────────────────────────────────────────────────────────────
function storageKey(day: number) { return `quiz_progress_day${day}` }

type SavedProgress = {
  currentIndex: number
  firstAttemptAnswers: Record<string, string>
  correctlyAnswered: string[]
  questionStartedAt?: number
}

function loadProgress(day: number): SavedProgress | null {
  try { const r = localStorage.getItem(storageKey(day)); return r ? JSON.parse(r) : null } catch { return null }
}
function saveProgress(day: number, p: SavedProgress) {
  try { localStorage.setItem(storageKey(day), JSON.stringify(p)) } catch { /** */ }
}
function clearProgress(day: number) {
  try { localStorage.removeItem(storageKey(day)) } catch { /** */ }
}
// ─────────────────────────────────────────────────────────────────────────────

export default function QuizPage() {
  const params = useParams<{ dayNumber: string }>()
  const dayNumber = useMemo(() => parseDayNumber(params.dayNumber), [params.dayNumber])

  // Data
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [progressState, setProgressState] = useState({
    recapCompleted: false, interviewCompleted: false, scenarioCompleted: false, quizCompleted: false,
  })

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [firstAttemptAnswers, setFirstAttemptAnswers] = useState<Record<string, string>>({})
  const [correctlyAnswered, setCorrectlyAnswered] = useState<Set<string>>(new Set())
  const [attempted, setAttempted] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [reviewRows, setReviewRows] = useState<AttemptReview[]>([])
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME)

  // Refs
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const questionStartedAt = useRef<number>(Date.now())

  // ── Derived ──────────────────────────────────────────────────────────────────
  const currentQuestion = questions[currentIndex]
  const currentOptions = normalizeStringArray(currentQuestion?.options)
  const isCurrentAttempted = currentQuestion ? attempted.has(currentQuestion.id) : false
  const allAttempted = questions.length > 0 && questions.every(q => attempted.has(q.id))
  const timerPct = (timeLeft / QUIZ_TIME) * 100
  const timerColor = timeLeft > 20 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500'
  const timerTextColor = timeLeft > 20 ? 'text-green-400' : timeLeft > 10 ? 'text-yellow-400' : 'text-red-400'

  // ── startTimer: start setInterval from a given value ─────────────────────────
  // Using setInterval means the timer runs completely independently of React
  // state changes — it will NOT stop when a student selects an option.
  const startTimer = useCallback((from: number) => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
    setTimeLeft(from)
    if (from <= 0) return
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(intervalRef.current!); intervalRef.current = null; return 0 }
        return prev - 1
      })
    }, 1000)
  }, [])

  // Cleanup interval on unmount
  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  // ── Fetch + restore ──────────────────────────────────────────────────────────
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
        .eq('student_id', userData.user.id).eq('day_number', dayNumber).maybeSingle()

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
        .from('questions').select('id,prompt,options,correct_answer')
        .eq('type', 'quiz').eq('day_number', dayNumber).eq('active', true)
        .order('created_at', { ascending: true }).order('id', { ascending: true })
        .limit(QUIZ_QUESTION_COUNT)

      if (!active) return
      if (error) console.error('Failed to load quiz questions', error)

      const loaded = (data as QuizQuestion[] | null) || []
      setQuestions(loaded)

      // ── Restore saved progress ───────────────────────────────────────────────
      const saved = loadProgress(dayNumber)
      if (saved && loaded.length > 0) {
        const validIds = new Set(loaded.map(q => q.id))
        const validFirst: Record<string, string> = {}
        for (const [id, ans] of Object.entries(saved.firstAttemptAnswers)) {
          if (validIds.has(id)) validFirst[id] = ans
        }
        const validCorrect = new Set(saved.correctlyAnswered.filter(id => validIds.has(id)))

        setFirstAttemptAnswers(validFirst)
        setCorrectlyAnswered(validCorrect)
        setAttempted(new Set(Object.keys(validFirst)))

        const idx = Math.max(0, Math.min(saved.currentIndex, loaded.length - 1))
        setCurrentIndex(idx)

        const rq = loaded[idx]
        if (rq && validCorrect.has(rq.id)) { setSelectedOption(rq.correct_answer ?? null); setFeedback('correct') }
        else if (rq && validFirst[rq.id] && validFirst[rq.id] !== '__TIMEOUT__') { setSelectedOption(validFirst[rq.id]); setFeedback('wrong') }
        else if (rq && validFirst[rq.id] === '__TIMEOUT__') { setSelectedOption(null); setFeedback('wrong') }

        // Restore timer: calculate how much time is left after reload
        if (saved.questionStartedAt) {
          const elapsed = Math.floor((Date.now() - saved.questionStartedAt) / 1000)
          const remaining = Math.max(0, QUIZ_TIME - elapsed)
          questionStartedAt.current = saved.questionStartedAt
          startTimer(remaining)
        } else {
          questionStartedAt.current = Date.now()
          startTimer(QUIZ_TIME)
        }
      } else {
        // Fresh start — begin timer for question 1
        questionStartedAt.current = Date.now()
        startTimer(QUIZ_TIME)
      }

      if (active) setLoading(false)
    }

    fetchQuiz()
    return () => { active = false }
  }, [dayNumber, startTimer])

  // ── Auto-save progress + timer timestamp ────────────────────────────────────
  useEffect(() => {
    if (dayNumber === null || questions.length === 0 || submitted) return
    saveProgress(dayNumber, {
      currentIndex,
      firstAttemptAnswers,
      correctlyAnswered: Array.from(correctlyAnswered),
      questionStartedAt: questionStartedAt.current,
    })
  }, [currentIndex, firstAttemptAnswers, correctlyAnswered, dayNumber, questions.length, submitted])

  // ── Auto-fail when timer hits 0 ─────────────────────────────────────────────
  useEffect(() => {
    if (timeLeft > 0 || submitted || !currentQuestion) return
    if (attempted.has(currentQuestion.id)) return
    const id = currentQuestion.id
    setFirstAttemptAnswers(prev => prev[id] ? prev : { ...prev, [id]: '__TIMEOUT__' })
    setAttempted(prev => { const s = new Set(prev); s.add(id); return s })
    setSelectedOption(null)
    setFeedback('wrong')
  }, [timeLeft, submitted, currentQuestion, attempted])

  // ── Auto-move to next question 1.5s after timeout ───────────────────────────
  useEffect(() => {
    if (submitted || !currentQuestion) return
    if (firstAttemptAnswers[currentQuestion.id] !== '__TIMEOUT__') return
    const t = setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1)
        setSelectedOption(null)
        setFeedback(null)
        questionStartedAt.current = Date.now()
        startTimer(QUIZ_TIME)
      }
    }, 1500)
    return () => clearTimeout(t)
  }, [firstAttemptAnswers, currentIndex, submitted, currentQuestion, questions.length, startTimer])

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const handleSelect = (option: string) => {
    if (!currentQuestion || attempted.has(currentQuestion.id)) return
    setSelectedOption(option)
    if (!firstAttemptAnswers[currentQuestion.id]) {
      setFirstAttemptAnswers(prev => ({ ...prev, [currentQuestion.id]: option }))
    }
    setAttempted(prev => { const s = new Set(prev); s.add(currentQuestion.id); return s })
    if (option === currentQuestion.correct_answer) {
      setFeedback('correct')
      setCorrectlyAnswered(prev => { const s = new Set(prev); s.add(currentQuestion.id); return s })
    } else {
      setFeedback('wrong')
    }
  }

  const navigateTo = (newIndex: number) => {
    const targetQ = questions[newIndex]
    if (!targetQ) return
    setCurrentIndex(newIndex)
    questionStartedAt.current = Date.now()
    startTimer(QUIZ_TIME) // fresh 40s for every new question
    if (correctlyAnswered.has(targetQ.id)) {
      setSelectedOption(targetQ.correct_answer ?? null); setFeedback('correct')
    } else if (attempted.has(targetQ.id)) {
      const prev = firstAttemptAnswers[targetQ.id]
      setSelectedOption(prev === '__TIMEOUT__' ? null : (prev ?? null)); setFeedback('wrong')
    } else {
      setSelectedOption(null); setFeedback(null)
    }
  }

  const goPrev = () => { if (currentIndex > 0) navigateTo(currentIndex - 1) }
  const goNext = () => { if (isCurrentAttempted && currentIndex < questions.length - 1) navigateTo(currentIndex + 1) }

  const handleSubmit = async () => {
    if (!userId || dayNumber === null || !allAttempted) return
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
    let totalScore = 0
    const rows: AttemptReview[] = questions.map(q => {
      const firstAns = firstAttemptAnswers[q.id] ?? null
      const timedOut = firstAns === '__TIMEOUT__'
      const correct = q.correct_answer ?? null
      const isCorrect = !timedOut && firstAns !== null && firstAns === correct
      if (isCorrect) totalScore++
      return { questionId: q.id, prompt: q.prompt, selected: timedOut ? null : firstAns, correct, isCorrect, timedOut }
    })
    setReviewRows(rows); setScore(totalScore); setSubmitted(true)
    clearProgress(dayNumber)
    const { error } = await supabase.from('student_day_progress')
      .upsert({ student_id: userId, day_number: dayNumber, quiz_completed: true, quiz_score: totalScore },
        { onConflict: 'student_id,day_number' })
    if (error) console.error('Failed to save quiz score', error)
    else setProgressState(prev => ({ ...prev, quizCompleted: true }))
  }

  // ── Early returns ─────────────────────────────────────────────────────────────
  if (dayNumber === null) return <p>Invalid day number.</p>
  if (loading) return <p>Loading quiz...</p>

  if (!isUnlocked) {
    return (
      <div className="space-y-4">
        <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />
        <div className="surface-card p-5">
          <h1 className="text-2xl font-bold">Quiz - Day {dayNumber}</h1>
          <p className="mt-2 muted-text">Complete scenario target to unlock quiz.</p>
          <Link href={`/dashboard/day/${dayNumber}/scenario`} className="quick-btn mt-4 inline-block">Go to Scenario</Link>
        </div>
      </div>
    )
  }

  if (questions.length === 0) return <p>No quiz questions found for this day.</p>

  // ── Results ──────────────────────────────────────────────────────────────────
  if (submitted) {
    const mistakes = reviewRows.filter(r => !r.isCorrect)
    return (
      <div className="space-y-8">
        <LearningPathNav dayNumber={dayNumber} currentSection="quiz"
          progress={{ ...progressState, quizCompleted: true }} />
        <div className="surface-card p-5 md:p-6">
          <h1 className="text-2xl font-bold md:text-3xl">Quiz Complete — Day {dayNumber}</h1>
          <p className="mt-3 text-lg font-semibold">
            Score:{' '}
            <span className={score === questions.length ? 'text-green-600' : 'text-[var(--primary)]'}>
              {score}/{questions.length}
            </span>
          </p>
          <p className="text-sm muted-text mt-1">Based on first-attempt accuracy.</p>
        </div>

        {mistakes.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">❌ Questions you missed</h2>
            {mistakes.map((row, idx) => (
              <div key={row.questionId} className="surface-card p-4 border-l-4 border-red-400">
                <p className="font-medium">{idx + 1}. {row.prompt}</p>
                {row.timedOut ? <p className="text-orange-500 mt-2 text-sm">⏰ Time ran out</p>
                  : <p className="text-red-600 mt-2 text-sm">Your answer: {row.selected ?? 'Not attempted'}</p>}
                <p className="text-green-700 text-sm">Correct: {row.correct ?? '—'}</p>
              </div>
            ))}
          </div>
        )}
        {mistakes.length === 0 && (
          <div className="surface-card p-5 text-center text-green-700 font-semibold text-lg">
            🎉 Perfect score! Every question correct on the first try.
          </div>
        )}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">All Questions</h2>
          {reviewRows.map((row, idx) => (
            <div key={row.questionId}
              className={`surface-card p-4 border-l-4 ${row.isCorrect ? 'border-green-400' : 'border-red-400'}`}>
              <p className="font-medium">{idx + 1}. {row.prompt}</p>
              {row.timedOut ? <p className="mt-2 text-sm text-orange-500">⏰ Time ran out</p>
                : <p className="mt-2 text-sm">Your answer: {row.selected ?? '—'}</p>}
              <p className="text-sm">Correct: {row.correct ?? '—'}</p>
              <p className={`text-sm font-semibold mt-1 ${row.isCorrect ? 'text-green-700' : 'text-red-600'}`}>
                {row.isCorrect ? '✓ Correct' : row.timedOut ? '⏰ Timed Out' : '✗ Incorrect'}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── Quiz in progress ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      <div className="surface-card p-5 md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl">Quiz — Day {dayNumber}</h1>
        <p className="mt-1 text-sm muted-text">Score is based on first-attempt accuracy.</p>
      </div>

      <LearningPathNav dayNumber={dayNumber} currentSection="quiz" progress={progressState} />

      {/* Progress + Timer */}
      <div className="surface-card p-4 space-y-3">
        <div className="flex justify-between text-sm muted-text">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{attempted.size} / {questions.length} answered</span>
        </div>
        <div className="w-full bg-[var(--bg-soft)] rounded-full h-2">
          <div className="h-2 rounded-full bg-[var(--primary)] transition-all duration-300"
            style={{ width: `${(attempted.size / questions.length) * 100}%` }} />
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-sm font-bold tabular-nums min-w-[3ch] ${timerTextColor}`}>{timeLeft}s</span>
          <div className="flex-1 bg-[var(--bg-soft)] rounded-full h-2 overflow-hidden">
            <div className={`h-2 rounded-full transition-all duration-1000 ${timerColor}`}
              style={{ width: `${timerPct}%` }} />
          </div>
          <span className="text-xs muted-text">⏱ Time left</span>
        </div>
      </div>

      {/* Question card */}
      <div className={`surface-card p-5 border-l-4 transition-colors duration-200 ${feedback === 'correct' ? 'border-green-500' :
          feedback === 'wrong' ? 'border-red-500' :
            !isCurrentAttempted && timeLeft <= 10 ? 'border-orange-400' : 'border-transparent'
        }`}>
        <p className="font-semibold text-base mb-5 leading-snug">
          {currentIndex + 1}. {currentQuestion.prompt}
        </p>
        <div className="space-y-3">
          {currentOptions.map(option => {
            const isSel = selectedOption === option
            const isCorrect = option === currentQuestion.correct_answer
            let s = 'border-2 border-[var(--border)] bg-[var(--bg-soft)]'
            if (isSel) {
              if (feedback === 'correct') s = 'border-2 border-green-500 bg-green-50 text-green-800'
              else if (feedback === 'wrong') s = 'border-2 border-red-500 bg-red-50 text-red-700'
              else s = 'border-2 border-[var(--primary)] bg-[color-mix(in_oklab,var(--primary)_8%,white)]'
            }
            if (feedback === 'wrong' && isCorrect && !correctlyAnswered.has(currentQuestion.id)) {
              s = 'border-2 border-green-500 bg-green-50 text-green-800'
            }
            return (
              <button key={option} onClick={() => handleSelect(option)}
                disabled={isCurrentAttempted}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-150 disabled:cursor-default ${s}`}>
                {option}
              </button>
            )
          })}
        </div>
        {feedback === 'wrong' && firstAttemptAnswers[currentQuestion.id] === '__TIMEOUT__' && (
          <div className="mt-4 p-3 rounded-xl bg-orange-50 border border-orange-200">
            <p className="text-orange-700 font-semibold">⏰ Time&apos;s up! Moving to next question...</p>
            <p className="text-sm text-orange-600 mt-1">The correct answer is highlighted in green.</p>
          </div>
        )}
        {feedback === 'correct' && (
          <div className="mt-4 flex items-center gap-2 text-green-700 font-semibold">
            <span className="text-xl">✅</span><span>Correct! Proceed to the next question.</span>
          </div>
        )}
        {feedback === 'wrong' && firstAttemptAnswers[currentQuestion.id] !== '__TIMEOUT__' && (
          <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200">
            <p className="text-red-700 font-semibold">❌ That&apos;s not correct.</p>
            <p className="text-sm text-red-600 mt-1">Correct answer highlighted. You can proceed.</p>
          </div>
        )}
        {!feedback && <p className="mt-4 text-xs muted-text italic">Select an answer to continue.</p>}
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={goPrev} disabled={currentIndex === 0}
          className="rounded-xl border-2 border-[var(--border)] px-4 py-2 font-semibold transition-opacity disabled:opacity-40">
          ← Previous
        </button>
        {currentIndex < questions.length - 1 ? (
          <button onClick={goNext} disabled={!isCurrentAttempted}
            className="quick-btn disabled:opacity-40 disabled:cursor-not-allowed">Next →</button>
        ) : (
          <button onClick={handleSubmit} disabled={!allAttempted}
            className="quick-btn success disabled:opacity-40 disabled:cursor-not-allowed">Finish Quiz</button>
        )}
        {!isCurrentAttempted && <span className="text-xs muted-text italic">Answer to proceed.</span>}
      </div>

      {allAttempted && (
        <div className="surface-card p-4 text-center border-2 border-green-500 rounded-xl text-green-700 font-semibold">
          🎉 All answered! Go to the last question and click <strong>Finish Quiz</strong>.
        </div>
      )}
    </div>
  )
}
