import Link from 'next/link'
import PublicHeader from '@/components/public-header'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <PublicHeader />

      <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <section className="surface-card-strong p-6 text-center md:p-12">
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
            Designed to transform you into a highly skilled software professional
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base muted-text md:text-lg">
            Register with your allowed email, learn day by day, and track your
            progress with a clean student and admin dashboard.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/register" className="quick-btn text-center">
              Student Register
            </Link>
            <Link href="/login" className="quick-btn secondary text-center">
              Student Login
            </Link>
            <Link href="/dashboard" className="quick-btn success text-center sm:col-span-2 lg:col-span-1">
              Go to Dashboard
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
