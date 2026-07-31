import { Link } from 'react-router-dom'
import { FoodImage } from '../components/FoodImage'
import { HalalBadge } from '../components/HalalBadge'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ABOUT_PAGE, SITE } from '../lib/constants'

export function AboutPage() {
  const { hero, sections, title } = ABOUT_PAGE

  return (
    <div className="page-urban-crust about-page">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-white)] focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="about-intro border-0" aria-labelledby="about-title">
          <div className="wrap">
            <span className="eyebrow">{SITE.address.neighborhood}</span>
            <h1 id="about-title">{title}</h1>
            <HalalBadge variant="hero" />
          </div>
        </section>

        <section className="about-hero-banner border-0" aria-labelledby="about-hero-heading">
          <FoodImage
            className="about-hero-banner-bg"
            src={hero.image}
            alt={hero.imageAlt}
            loading="eager"
            fetchPriority="high"
          />
          <div className="wrap about-hero-banner-inner">
            <div className="about-hero-card">
              <h2 id="about-hero-heading">{hero.heading}</h2>
              <p>{hero.body}</p>
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`about-block border-0${index % 2 === 1 ? ' about-block--reverse' : ''}${index % 2 === 0 ? ' about-block--alt' : ''}`}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className="wrap about-block-inner">
              <div className="about-block-media">
                <FoodImage src={section.image} alt={section.imageAlt} />
              </div>
              <div className="about-block-copy">
                <h2 id={`${section.id}-heading`}>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="about-cta-band border-0" aria-label="Order or visit">
          <div className="wrap about-cta-band-inner">
            <div>
              <span className="eyebrow">Hungry yet?</span>
              <h2>Taste the neighborhood favorite</h2>
              <p className="sub">
                Browse the full menu or order for pickup and delivery through DoorDash.
              </p>
            </div>
            <div className="about-cta-actions">
              <Link className="btn ghost" to="/menu">
                View Menu
              </Link>
              <a
                className="btn"
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.orderLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
