import { FoodImage } from './FoodImage'
import { MENU_ORDER_URL } from '../lib/menu'
import type { MenuItem } from '../lib/menu'

type MenuItemCardProps = {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const isSinglePrice = item.prices.length === 1

  return (
    <article className="menu-card">
      <div className="menu-card-ph">
        <FoodImage src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-title">{item.name}</h3>

        <div
          className={`menu-card-prices${isSinglePrice ? ' menu-card-prices--single' : ''}`}
          aria-label={`Pricing for ${item.name}`}
        >
          {item.prices.map((option) => (
            <div
              key={`${option.size}-${option.amount}`}
              className="menu-card-price-row"
            >
              {option.size ? (
                <span className="menu-card-size">{option.size}</span>
              ) : null}
              <span className="menu-card-amount">{option.amount}</span>
            </div>
          ))}
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
