import { Link } from 'react-router-dom'
import { SITE } from '../lib/constants'

export function OrderBar() {
  return (
    <div className="orderbar">
      <a className="call" href={SITE.phoneHref}>
        Call
      </a>
      <Link className="menu" to="/menu">
        Menu
      </Link>
      <a className="order" href={SITE.orderUrl} target="_blank" rel="noopener noreferrer">
        Order Now
      </a>
    </div>
  )
}
