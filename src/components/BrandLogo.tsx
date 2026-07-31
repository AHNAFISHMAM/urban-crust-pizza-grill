import { useId } from 'react'
import { SITE } from '../lib/constants'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  const gradientId = useId().replace(/:/g, '')
  const goldId = `brand-gold-${gradientId}`
  const subGold = '#a8863f'

  return (
    <svg
      className={className}
      viewBox="0 0 360 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={SITE.name}
    >
      <title>{SITE.name}</title>
      <defs>
        <linearGradient id={goldId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0d57a" />
          <stop offset="42%" stopColor="#c5a059" />
          <stop offset="100%" stopColor="#9a7835" />
        </linearGradient>
      </defs>
      <text
        x="180"
        y="42"
        textAnchor="middle"
        fill={`url(#${goldId})`}
        fontFamily="'Oswald', 'Arial Narrow', sans-serif"
        fontSize="38"
        fontWeight="600"
        letterSpacing="0.2em"
      >
        URBAN CRUST
      </text>
      <text
        x="180"
        y="66"
        textAnchor="middle"
        fill={subGold}
        fontFamily="'Public Sans', Arial, sans-serif"
        fontSize="11.5"
        fontWeight="600"
        letterSpacing="0.42em"
      >
        PIZZA &amp; GRILL
      </text>
    </svg>
  )
}
