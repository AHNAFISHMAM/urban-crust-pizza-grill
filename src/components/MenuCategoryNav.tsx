import { useEffect, useState } from 'react'
import { MENU_CATEGORY_NAV } from '../lib/menu'

export function MenuCategoryNav() {
  const [activeId, setActiveId] = useState(MENU_CATEGORY_NAV[0]?.id ?? '')

  useEffect(() => {
    const sections = MENU_CATEGORY_NAV.map(({ id }) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-120px 0px -55% 0px',
        threshold: [0, 0.15, 0.4],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="menu-cat-nav" aria-label="Menu categories">
      <div className="menu-cat-nav-inner wrap">
        {MENU_CATEGORY_NAV.map(({ id, name }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? 'is-active' : undefined}
            aria-current={activeId === id ? 'true' : undefined}
            onClick={() => setActiveId(id)}
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  )
}
