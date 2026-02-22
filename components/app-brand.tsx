import Link from 'next/link'

type AppBrandProps = {
  href?: string
  compact?: boolean
}

export default function AppBrand({ href = '/', compact = false }: AppBrandProps) {
  const className = compact ? 'text-2xl' : 'text-3xl'

  return (
    <Link href={href} className={`brand-wordmark ${className}`}>
      <span className="accent">NXT</span>
      <br />
      WAVE
    </Link>
  )
}
