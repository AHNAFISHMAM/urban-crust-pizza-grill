import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { BrandLogo } from './BrandLogo'
import { NAV_LINKS, SITE } from '../lib/constants'

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '')
  if (!id) return
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function parseNavHref(href: string) {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) {
    return { path: href, hash: '', isHashLink: false }
  }

  return {
    path: href.slice(0, hashIndex) || '/',
    hash: href.slice(hashIndex),
    isHashLink: true,
  }
}

function PhoneIcon() {
  return (
    <svg
      className="top-phone-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site border-0">
      <div className="wrap topbar">
        <div className="topbar-brand">
          <button
            type="button"
            className="navtoggle"
            aria-expanded={menuOpen}
            aria-controls="mnav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <Link className="logo" to="/" aria-label={`${SITE.name} home`}>
            <BrandLogo className="logo-image" />
          </Link>
        </div>

        <nav className="topbar-nav" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const { path, hash: linkHash, isHashLink } = parseNavHref(link.href)
            const isActive = isHashLink
              ? pathname === path && hash === linkHash
              : pathname === link.href

            const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
              if (isHashLink && pathname === path) {
                event.preventDefault()
                scrollToHash(linkHash)
                window.history.replaceState(null, '', link.href)
              }
              closeMenu()
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                className={isActive ? 'is-active' : undefined}
                aria-current={isActive ? 'page' : undefined}
                onClick={handleClick}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="topbar-actions">
          <a className="top-phone" href={SITE.phoneHref}>
            <PhoneIcon />
            <span className="top-phone-text">{SITE.phone}</span>
          </a>
          <a
            className="btn btn-order"
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-order-full">{SITE.orderLabel}</span>
            <span className="btn-order-short">{SITE.orderLabelShort}</span>
          </a>
        </div>
      </div>

      <nav
        className={`mobilemenu${menuOpen ? ' open' : ''}`}
        id="mnav"
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => {
          const { path, hash: linkHash, isHashLink } = parseNavHref(link.href)
          const isActive = isHashLink
            ? pathname === path && hash === linkHash
            : pathname === link.href

          const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
            if (isHashLink && pathname === path) {
              event.preventDefault()
              scrollToHash(linkHash)
              window.history.replaceState(null, '', link.href)
            }
            closeMenu()
          }

          return (
            <Link
              key={link.href}
              to={link.href}
              className={isActive ? 'is-active' : undefined}
              aria-current={isActive ? 'page' : undefined}
              onClick={handleClick}
            >
              {link.label}
            </Link>
          )
        })}
        <a className="mobilemenu-phone" href={SITE.phoneHref} onClick={closeMenu}>
          Call {SITE.phone}
        </a>
        <a
          className="mobilemenu-order"
          href={SITE.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {SITE.orderLabel}
        </a>
      </nav>
    </header>
  )
}
