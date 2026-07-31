import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FoodImage } from '../components/FoodImage'
import { HalalBadge } from '../components/HalalBadge'
import {
  FAVORITES,
  HOURS,
  IMAGES,
  MENU_ITEMS,
  REVIEWS,
  SERVICES,
  SITE,
  STORY,
} from '../lib/constants'
import { FOOD_IMAGES } from '../lib/images'
import { LocationMap } from '../components/LocationMap'
import { OrderBar } from '../components/OrderBar'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

function HeroImage() {
  const [loaded, setLoaded] = useState(false)

  return (
    <FoodImage
      className={`bg${loaded ? ' loaded' : ''}`}
      src={IMAGES.hero}
      alt={FOOD_IMAGES.hero.alt}
      loading="eager"
      fetchPriority="high"
      onLoad={() => setLoaded(true)}
    />
  )
}

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace(/^#/, '')
    const target = document.getElementById(id)
    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth' })
    })
  }, [hash])

  return (
    <div className="page-urban-crust">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-white)] focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="top" aria-label="Hero">
          <HeroImage />
          <div className="inner">
            <p className="est">{SITE.address.neighborhood}</p>
            <h1>
              Urban Crust <span className="ital">Pizza &amp; Grill</span>
            </h1>
            <HalalBadge variant="hero" />
            <p className="lede">
              HMS Certified 100% halal-friendly pizza, smash burgers, wings, and
              grilled favorites — made fresh for East NY every day.
            </p>
            <div className="ctas">
              <a
                className="btn"
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.orderLabel}
              </a>
              <Link className="btn ghost" to="/menu">
                Explore the Menu
              </Link>
            </div>
            <p className="promo">Dine In · Takeout · Delivery</p>
          </div>
        </section>

        <div className="services border-0">
          <div className="wrap svc-grid" style={{ padding: 0 }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} className="svc">
                <span className="eyebrow">{svc.eyebrow}</span>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>

        <section id="menu" className="border-0">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">The Menu</span>
              <h2>
                Pizza, Grill &amp; <span className="ital">Desserts</span>
              </h2>
              <div className="rule" />
              <p className="sub">
                Everything made to order. Browse signatures below or order the full
                menu online.
              </p>
            </div>
            <div className="menu-grid">
              {MENU_ITEMS.map((item) => (
                <div key={item.title} className="dish">
                  <div className="ph">
                    <FoodImage src={item.image} alt={item.alt} />
                  </div>
                  <div className="body">
                    <span className="eyebrow">{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faves">
              {FAVORITES.map((fave) => (
                <Link key={fave.name} className="fave" to="/menu">
                  <span className="name">{fave.name}</span>
                  <span className="dots" />
                  <span className="price">{fave.tag}</span>
                </Link>
              ))}
            </div>
            <p className="note">
              A few neighborhood favorites — see the full menu for everything.
            </p>

            <div className="menu-cta">
              <Link className="btn ghost" to="/menu" style={{ marginRight: 10 }}>
                View Full Menu
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

        <section id="story" className="story-sec border-0">
          <div className="wrap story">
            <FoodImage src={IMAGES.story} alt={FOOD_IMAGES.meatLoverPizza.alt} />
            <div>
              <span className="eyebrow">{STORY.eyebrow}</span>
              <h2>
                {STORY.title} <span className="ital">{STORY.titleAccent}</span>
              </h2>
              {STORY.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className="btn ghost" to="/about">
                Read Our Full Story
              </Link>
            </div>
          </div>
        </section>

        <div className="gallery border-0">
          <div className="gal-grid">
            {IMAGES.gallery.map((image) => (
              <FoodImage key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>

        <section id="reviews" className="reviews-sec border-0">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">From the Neighborhood</span>
              <h2>
                What Brooklyn <span className="ital">Says</span>
              </h2>
              <div className="rule" />
            </div>
            <div className="rev-grid">
              {REVIEWS.map((review) => (
                <div key={review.name} className="rev">
                  <div className="stars">★★★★★</div>
                  <p>&ldquo;{review.quote}&rdquo;</p>
                  <span className="who">{review.name}</span>
                </div>
              ))}
            </div>
            <p className="rev-meta">Loved by our Brooklyn neighbors</p>
          </div>
        </section>

        <section id="catering" className="cater border-0">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Catering &amp; Events</span>
              <h2>
                For Every <span className="ital">Occasion</span>
              </h2>
              <div className="rule" />
              <p className="sub">
                Pies, trays, burgers, wings, and party packages for birthdays,
                office lunches, graduations, and game days.
              </p>
            </div>
            <div className="cater-grid">
              <div className="cell">
                <span className="eyebrow">Family &amp; Friends</span>
                <h3>Party Packages</h3>
                <p>
                  Mix and match pizzas, smash burgers, wings, fries, and desserts
                  for your next gathering. We&apos;ll help you build the perfect
                  spread.
                </p>
              </div>
              <div className="cell">
                <span className="eyebrow">Office &amp; Events</span>
                <h3>Large Orders</h3>
                <p>
                  Trays and bulk orders for teams and celebrations. Call ahead with
                  your headcount and we&apos;ll take care of the rest.
                </p>
              </div>
            </div>
            <div className="ctas">
              <Link className="btn" to="/menu">
                View Menu
              </Link>
              <a className="btn ghost" href={SITE.phoneHref}>
                Call for Catering
              </a>
            </div>
          </div>
        </section>

        <section id="visit" className="border-0">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Visit Us</span>
              <h2>
                Liberty Avenue, <span className="ital">Brooklyn</span>
              </h2>
              <div className="rule" />
            </div>
            <div className="visit-grid">
              <div className="vinfo">
                <div className="block">
                  <span className="eyebrow">Location</span>
                  <p>
                    <a
                      href={SITE.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SITE.address.line1}
                      <br />
                      {SITE.address.line2}
                    </a>
                  </p>
                </div>
                <div className="block">
                  <span className="eyebrow">Hours</span>
                  <ul className="hours-list">
                    {HOURS.map((row) => (
                      <li key={row.day}>
                        <span>{row.day}</span>
                        <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="block">
                  <span className="eyebrow">Contact</span>
                  <p>
                    <a href={SITE.phoneHref}>{SITE.phone}</a>
                  </p>
                </div>
                <div className="block">
                  <span className="eyebrow">Delivery</span>
                  <p className="delivery-note">{SITE.deliveryNote}</p>
                </div>
              </div>
              <LocationMap />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <OrderBar />
    </div>
  )
}
