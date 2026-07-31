import { FOOD_IMAGES } from './images'
import { SITE } from './constants'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export type MenuCategory = {
  id: string
  name: string
  eyebrow: string
  intro?: string
  items: MenuItem[]
}

/** Full menu catalog — update prices from DoorDash as needed */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'pizza',
    name: 'Pizza',
    eyebrow: 'Signature Pies',
    intro: 'Halal-friendly pies baked to order — by the slice or whole.',
    items: [
      {
        id: 'urban-special-pizza',
        name: 'Urban Special Pizza',
        description:
          'House signature pie with premium toppings, melted mozzarella, and our signature sauce.',
        price: '$18.99',
        image: FOOD_IMAGES.urbanSpecialPizza.src,
      },
      {
        id: 'meat-lover-pizza',
        name: 'Meat Lover Pizza',
        description:
          'Loaded with halal pepperoni, beef, and sausage on a crispy New York-style crust.',
        price: '$19.99',
        image: FOOD_IMAGES.meatLoverPizza.src,
      },
      {
        id: 'veggie-pizza',
        name: 'Veggie Pizza',
        description:
          'Fresh bell peppers, onions, mushrooms, olives, and mozzarella on hand-stretched dough.',
        price: '$17.99',
        image: FOOD_IMAGES.veggiePizza.src,
      },
    ],
  },
  {
    id: 'grill',
    name: 'Grill & Chicken',
    eyebrow: 'From the Grill',
    intro: 'Smash burgers and crispy fried chicken made fresh.',
    items: [
      {
        id: 'smash-burger',
        name: 'Smash Burger',
        description:
          'Double-smashed halal beef patty, American cheese, pickles, and special sauce on a toasted bun.',
        price: '$11.99',
        image: FOOD_IMAGES.smashBurger.src,
      },
      {
        id: 'fried-chicken',
        name: 'Fried Chicken',
        description:
          'Crispy golden halal fried chicken — juicy inside, seasoned and fried to perfection.',
        price: '$13.99',
        image: FOOD_IMAGES.friedChicken.src,
      },
    ],
  },
  {
    id: 'wings',
    name: 'Wings',
    eyebrow: 'Wings',
    intro: 'Tossed in bold sauces — perfect for sharing or solo.',
    items: [
      {
        id: 'sweet-chili-wings',
        name: 'Sweet Chili Wings',
        description:
          'Crispy wings glazed in a sweet and tangy chili sauce with a mild kick.',
        price: '$12.99',
        image: FOOD_IMAGES.sweetChiliWings.src,
      },
      {
        id: 'naga-wings',
        name: 'Naga Wings',
        description:
          'Fiery Naga pepper sauce for heat lovers — bold, spicy, and unforgettable.',
        price: '$12.99',
        image: FOOD_IMAGES.nagaWings.src,
      },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    eyebrow: 'Sides',
    intro: 'The perfect pairing for any pie, burger, or wing order.',
    items: [
      {
        id: 'seasoned-fries',
        name: 'Seasoned Fries',
        description:
          'Crispy fries tossed in our house seasoning — great solo or loaded.',
        price: '$5.99',
        image: FOOD_IMAGES.seasonedFries.src,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    eyebrow: 'Sweet Finishes',
    intro: 'Homemade-style desserts to end your meal on a high note.',
    items: [
      {
        id: 'berry-chantilly',
        name: 'Berry Chantilly',
        description:
          'Light sponge cake layered with fresh berries and chantilly cream.',
        price: '$7.99',
        image: FOOD_IMAGES.berryChantilly.src,
      },
      {
        id: 'tiramisu',
        name: 'Tiramisu',
        description:
          'Classic Italian layers of espresso-soaked ladyfingers and mascarpone.',
        price: '$7.99',
        image: FOOD_IMAGES.tiramisu.src,
      },
      {
        id: 'chocolate-tub-cake',
        name: 'Chocolate Tub Cake',
        description:
          'Rich, fudgy chocolate cake served in a generous portion — pure indulgence.',
        price: '$8.99',
        image: FOOD_IMAGES.chocolateTubCake.src,
      },
      {
        id: 'turkish-caramel-milk-cake',
        name: 'Turkish Caramel Milk Cake',
        description:
          'Soft milk-soaked cake with caramel notes — a Middle Eastern favorite.',
        price: '$8.99',
        image: FOOD_IMAGES.turkishCaramelMilkCake.src,
      },
      {
        id: 'tres-leches',
        name: 'Tres Leches',
        description:
          'Three-milk soaked sponge cake topped with whipped cream and cinnamon.',
        price: '$7.99',
        image: FOOD_IMAGES.tresLeches.src,
      },
      {
        id: 'red-velvet',
        name: 'Red Velvet',
        description:
          'Moist red velvet layers with cream cheese frosting — a timeless classic.',
        price: '$7.99',
        image: FOOD_IMAGES.redVelvet.src,
      },
    ],
  },
]

export const MENU_CATEGORY_NAV = MENU_CATEGORIES.map(({ id, name }) => ({
  id,
  name,
}))

export const MENU_ORDER_URL = SITE.orderUrl
