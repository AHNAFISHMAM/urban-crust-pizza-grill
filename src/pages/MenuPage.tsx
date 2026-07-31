import { HalalBadge } from '../components/HalalBadge'
import { MenuCategoryNav } from '../components/MenuCategoryNav'
import { MenuItemCard } from '../components/MenuItemCard'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SITE } from '../lib/constants'
import { MENU_CATEGORIES } from '../lib/menu'

export function MenuPage() {
  return (
    <div className="page-urban-crust menu-page">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-white)] focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="menu-hero border-0" aria-label="Menu introduction">
          <div className="wrap">
            <span className="eyebrow">{SITE.address.neighborhood}</span>
            <h1>Our Menu</h1>
            <HalalBadge variant="hero" />
            <p className="menu-hero-lede">
              100% Zabiha halal-certified pizza, burgers, wings, sides, fried
              chicken, and drinks — made fresh on Liberty Avenue in East NY.
            </p>
            <a
              className="btn"
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.orderLabel}
            </a>
          </div>
        </section>

        <MenuCategoryNav />

        {MENU_CATEGORIES.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`menu-section border-0${index % 2 === 1 ? ' menu-section--alt' : ''}`}
            aria-labelledby={`${category.id}-heading`}
          >
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">{category.eyebrow}</span>
                <h2 id={`${category.id}-heading`}>{category.name}</h2>
                <div className="rule" />
                {category.intro && <p className="sub">{category.intro}</p>}
              </div>
              <div className="menu-card-grid">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="menu-order-band border-0" aria-label="Order online">
          <div className="wrap menu-order-band-inner">
            <div>
              <span className="eyebrow">Ready to order?</span>
              <h2>Get it delivered or pick it up</h2>
              <p className="menu-price-note">
                Menu prices shown for reference. Final pricing and availability on
                DoorDash may vary.
              </p>
            </div>
            <a
              className="btn"
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.orderLabel}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
