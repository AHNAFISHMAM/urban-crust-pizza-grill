import { useEffect, useState } from 'react'
import { FALLBACK_FOOD_IMAGE } from '../lib/images'

type FoodImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  onLoad?: () => void
}

export function FoodImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
  onLoad,
}: FoodImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  return (
    <img
      className={className}
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onLoad={onLoad}
      onError={() => {
        if (currentSrc !== FALLBACK_FOOD_IMAGE.src) {
          setCurrentSrc(FALLBACK_FOOD_IMAGE.src)
        }
      }}
    />
  )
}
