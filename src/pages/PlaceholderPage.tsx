import { Link } from 'react-router-dom'

type PlaceholderPageProps = {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="page-urban-crust min-h-screen">
      <div className="wrap" style={{ padding: '120px 24px' }}>
        <span className="eyebrow">Coming soon</span>
        <h1
          className="font-serif"
          style={{ fontSize: 'clamp(36px, 5vw, 54px)', margin: '16px 0 24px' }}
        >
          {title}
        </h1>
        <p style={{ color: 'var(--color-gray)', maxWidth: 480, marginBottom: 32 }}>
          {description}
        </p>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
