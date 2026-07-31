import { Link } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'
import { HOURS, SITE } from '../lib/constants'

export function SiteFooter() {
  return (
    <footer className="border-0">
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <BrandLogo className="footer-logo" />
            <p className="sub">{SITE.address.neighborhood}</p>
            <p>
              HMS Certified 100% halal-friendly pizza, smash burgers, wings, and
              grilled favorites on Liberty Avenue in Brooklyn.
            </p>
          </div>
          <div className="f-col">
            <h4>Explore</h4>
            <Link to="/menu">Menu</Link>
            <Link to="/about">Our Story</Link>
            <a href="#reviews">Reviews</a>
            <Link to="/catering">Catering</Link>
          </div>
          <div className="f-col">
            <h4>Order</h4>
            <a href={SITE.orderUrl} target="_blank" rel="noopener noreferrer">
              {SITE.orderLabel}
            </a>
            <a href={SITE.phoneHref}>Call {SITE.phone}</a>
            <Link to="/catering">Catering Inquiries</Link>
          </div>
          <div className="f-col">
            <h4>Find Us</h4>
            <p>
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>
            <p>{HOURS[0].hours} · See full hours on Visit</p>
          </div>
        </div>
        <p className="f-delivery">{SITE.deliveryNote}</p>
        <div className="f-bottom">
          <span>© 2026 {SITE.name}. All rights reserved.</span>
          <span>Dine In · Takeout · Delivery</span>
        </div>
      </div>
    </footer>
  )
}
