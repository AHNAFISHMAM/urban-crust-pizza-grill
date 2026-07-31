import { FoodImage } from './FoodImage'
import { MENU_ORDER_URL } from '../lib/menu'
import type { MenuItem } from '../lib/menu'

type MenuItemCardProps = {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="menu-card">
      <div className="menu-card-ph">
        <FoodImage src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-body">
        <div className="menu-card-head">
          <h3>{item.name}</h3>
          <span className="menu-card-price">{item.price}</span>
        </div>
        <p className="menu-card-desc">{item.description}</p>
        <a
          className="btn menu-card-order"
          href={MENU_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Order
        </a>
      </div>
    </article>
  )
}
