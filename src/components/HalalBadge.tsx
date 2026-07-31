import { SITE } from '../lib/constants'

type HalalBadgeProps = {
  variant?: 'header' | 'hero'
}

export function HalalBadge({ variant = 'header' }: HalalBadgeProps) {
  return (
    <span className={`halal-badge halal-badge--${variant}`}>{SITE.tagline}</span>
  )
}
