import { FOOD_IMAGES } from './images'
import { SITE } from './constants'

export type MenuPriceOption = {
  size: string
  amount: string
}

export type MenuItem = {
  id: string
  name: string
  description: string
  prices: MenuPriceOption[]
  image: string
}

export type MenuCategory = {
  id: string
  name: string
  eyebrow: string
  intro?: string
  items: MenuItem[]
}

const img = FOOD_IMAGES
const spread = '/urban-crust-spread.jpg'
const cheesePizza = '/tommys-pizza-cheese-queens.jpg'

function pizzaPrices(in12: string, in18: string): MenuPriceOption[] {
  return [
    { size: '12"', amount: in12 },
    { size: '18"', amount: in18 },
  ]
}

function wingPrices(): MenuPriceOption[] {
  return [
    { size: '6 pcs', amount: '$7.99' },
    { size: '12 pcs', amount: '$15.49' },
  ]
}

function sidePrices(small: string, large: string): MenuPriceOption[] {
  return [
    { size: 'Small', amount: small },
    { size: 'Large', amount: large },
  ]
}

function singlePrice(amount: string): MenuPriceOption[] {
  return [{ size: '', amount }]
}

/** Full menu catalog — prices for in-store reference; order online for live pricing */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'pizza',
    name: 'Pizza',
    eyebrow: 'Handcrafted Pies',
    intro: '100% Zabiha halal-certified pizzas — available in 12" and 18".',
    items: [
      {
        id: 'cheese-pizza',
        name: 'Cheese Pizza',
        description: 'Classic mozzarella on our house crust and signature sauce.',
        prices: pizzaPrices('$10.99', '$17.99'),
        image: cheesePizza,
      },
      {
        id: 'pepperoni-pizza',
        name: 'Pepperoni Pizza',
        description: 'Halal pepperoni layered over melted mozzarella.',
        prices: pizzaPrices('$14.49', '$24.99'),
        image: img.meatLoverPizza.src,
      },
      {
        id: 'bbq-chicken-pizza',
        name: 'BBQ Chicken Pizza',
        description:
          'BBQ pizza starts with a smoky, tangy BBQ sauce base, topped with tender chicken, melted cheese, and a sprinkle of pepper flakes for extra flavor. Finished with a rich BBQ sauce drizzle on top, every bite is bold, savory, and delicious.',
        prices: pizzaPrices('$14.99', '$24.99'),
        image: img.urbanSpecialPizza.src,
      },
      {
        id: 'veggie-pizza',
        name: 'Veggie Pizza',
        description:
          'A colorful, fresh-packed pizza topped with your choice of four garden-fresh ingredients— green peppers, sweet onions, earthy mushrooms, tangy black olives, juicy pineapple, spicy jalapeños, or zesty banana peppers—bursting with flavor in every bite.',
        prices: pizzaPrices('$14.99', '$24.99'),
        image: img.veggiePizza.src,
      },
      {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        description: 'Sausage and pineapple on a classic cheese base.',
        prices: pizzaPrices('$14.99', '$24.99'),
        image: img.urbanSpecialPizza.src,
      },
      {
        id: 'meat-lover-pizza',
        name: 'Meat Lover Pizza',
        description:
          'A hearty, indulgent feast piled high with savory sausage, crispy bacon, tender fried chicken, and zesty pepperoni—perfect for those who crave bold, meaty flavors in every bite.',
        prices: pizzaPrices('$17.99', '$29.99'),
        image: img.meatLoverPizza.src,
      },
      {
        id: 'urban-special-pizza',
        name: 'Urban Special Pizza',
        description:
          'A bold and flavorful creation featuring savory sausage, garden fresh green peppers, and sweet, tender onions, all drizzled with our signature spicy-sweet hot honey for a perfect balance of heat and indulgence.',
        prices: pizzaPrices('$17.99', '$29.99'),
        image: img.urbanSpecialPizza.src,
      },
    ],
  },
  {
    id: 'toppings',
    name: 'Additional Toppings',
    eyebrow: 'Customize Your Pie',
    intro: 'Add extra toppings to any pizza — priced per topping.',
    items: [
      {
        id: 'meat-toppings',
        name: 'Meat Toppings',
        description:
          'Pepperoni, sausage, bacon bits, beef, or chicken — add to any pizza.',
        prices: [
          { size: '12"', amount: '$2 each' },
          { size: '18"', amount: '$4 each' },
        ],
        image: img.meatLoverPizza.src,
      },
      {
        id: 'veggie-toppings',
        name: 'Veggie Toppings',
        description:
          'Mushroom, onion, green pepper, olives, jalapeño, or pineapple.',
        prices: [
          { size: '12"', amount: '$1 each' },
          { size: '18"', amount: '$2 each' },
        ],
        image: img.veggiePizza.src,
      },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    eyebrow: 'From the Grill',
    intro: 'Smash burgers and sandwiches made fresh to order.',
    items: [
      {
        id: 'smash-burger',
        name: 'Smash Burger',
        description:
          'Includes meat patty, cheese, caramelized onion, and house sauce.',
        prices: singlePrice('$7.49'),
        image: img.smashBurger.src,
      },
      {
        id: 'urban-special-burger',
        name: 'Urban Special Burger',
        description:
          'Includes double beef, pepperjack cheese, bacon, jalapeño, and house sauce.',
        prices: singlePrice('$12.49'),
        image: img.smashBurger.src,
      },
      {
        id: 'classic-sandwich',
        name: 'Classic Sandwich',
        description:
          'Includes chicken patty, caramelized onion, and house sauce.',
        prices: singlePrice('$7.99'),
        image: img.smashBurger.src,
      },
    ],
  },
  {
    id: 'wings',
    name: 'Wings',
    eyebrow: 'Tossed & Sauced',
    intro: 'Available in 6- or 12-piece orders — pick your flavor.',
    items: [
      {
        id: 'hot-wings',
        name: 'Hot Wings',
        description: 'Classic heat — crispy wings tossed in our spicy sauce.',
        prices: wingPrices(),
        image: img.nagaWings.src,
      },
      {
        id: 'bbq-wings',
        name: 'BBQ Wings',
        description: 'Smoky, sweet BBQ glaze on crispy halal wings.',
        prices: wingPrices(),
        image: img.sweetChiliWings.src,
      },
      {
        id: 'sweet-chili-wings',
        name: 'Sweet Chili Wings',
        description: 'Sweet and tangy chili glaze with a mild kick.',
        prices: wingPrices(),
        image: img.sweetChiliWings.src,
      },
      {
        id: 'mango-habanero-wings',
        name: 'Mango Habanero Wings',
        description: 'Tropical mango balanced with habanero heat.',
        prices: wingPrices(),
        image: img.nagaWings.src,
      },
      {
        id: 'buffalo-wings',
        name: 'Buffalo Wings',
        description: 'Bold buffalo sauce — tangy, buttery, and classic.',
        prices: wingPrices(),
        image: img.nagaWings.src,
      },
      {
        id: 'lemon-pepper-wings',
        name: 'Lemon Pepper Wings',
        description: 'Zesty lemon pepper seasoning on crispy wings.',
        prices: wingPrices(),
        image: img.sweetChiliWings.src,
      },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    eyebrow: 'Perfect Pairings',
    intro: 'Fries, rings, tenders, and loaded favorites.',
    items: [
      {
        id: 'cajun-fries',
        name: 'Cajun Fries',
        description: 'Crispy fries tossed in bold cajun seasoning.',
        prices: sidePrices('$3.49', '$6.49'),
        image: img.seasonedFries.src,
      },
      {
        id: 'seasoned-fries',
        name: 'Seasoned Fries',
        description: 'House-seasoned fries — hot and crispy.',
        prices: sidePrices('$3.99', '$6.99'),
        image: img.seasonedFries.src,
      },
      {
        id: 'curly-fries',
        name: 'Curly Fries',
        description: 'Golden curly fries with our signature seasoning.',
        prices: sidePrices('$3.99', '$6.99'),
        image: img.seasonedFries.src,
      },
      {
        id: 'waffle-fries',
        name: 'Waffle Fries',
        description: 'Crispy waffle-cut fries, lightly seasoned.',
        prices: sidePrices('$3.99', '$6.99'),
        image: img.seasonedFries.src,
      },
      {
        id: 'onion-rings',
        name: 'Onion Rings',
        description: 'Beer-battered rings fried until golden.',
        prices: sidePrices('$3.99', '$6.99'),
        image: img.seasonedFries.src,
      },
      {
        id: 'mozzarella-sticks',
        name: 'Mozzarella Sticks',
        description: 'Stretchy mozzarella in a crispy breaded shell.',
        prices: sidePrices('$4.99', '$8.99'),
        image: spread,
      },
      {
        id: 'tenders',
        name: 'Tenders',
        description: 'Crispy halal chicken tenders — 3 pcs (S) or 6 pcs (L).',
        prices: sidePrices('$4.99', '$9.99'),
        image: img.friedChicken.src,
      },
      {
        id: 'loaded-fries',
        name: 'Loaded Fries',
        description:
          'Onion, green pepper, jalapeños, and cheese with your choice of chicken or beef. Extras: bacon bits +$1.99 · bacon jam +$2.99.',
        prices: singlePrice('$9.99'),
        image: img.seasonedFries.src,
      },
    ],
  },
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    eyebrow: 'Crispy & Juicy',
    intro: 'Family buckets or individual pieces — halal fried chicken.',
    items: [
      {
        id: 'bucket-6',
        name: '6 pc Bucket',
        description: 'Six pieces of crispy halal fried chicken.',
        prices: singlePrice('$9.99'),
        image: img.friedChicken.src,
      },
      {
        id: 'bucket-12',
        name: '12 pc Bucket',
        description: 'Twelve pieces — great for sharing.',
        prices: singlePrice('$18.99'),
        image: img.friedChicken.src,
      },
      {
        id: 'bucket-18',
        name: '18 pc Bucket',
        description: 'Eighteen pieces for the whole crew.',
        prices: singlePrice('$27.99'),
        image: img.friedChicken.src,
      },
      {
        id: 'bucket-24',
        name: '24 pc Bucket',
        description: 'Twenty-four pieces for parties and gatherings.',
        prices: singlePrice('$36.99'),
        image: img.friedChicken.src,
      },
      {
        id: 'bucket-30',
        name: '30 pc Bucket',
        description: 'Our largest bucket — feed the neighborhood.',
        prices: singlePrice('$46.99'),
        image: img.friedChicken.src,
      },
      {
        id: 'chicken-leg',
        name: 'Leg',
        description: 'Single crispy fried chicken leg.',
        prices: singlePrice('$1.49'),
        image: img.friedChicken.src,
      },
      {
        id: 'chicken-thigh',
        name: 'Thigh',
        description: 'Single juicy fried chicken thigh.',
        prices: singlePrice('$1.75'),
        image: img.friedChicken.src,
      },
      {
        id: 'chicken-wing-piece',
        name: 'Wing',
        description: 'Single fried chicken wing.',
        prices: singlePrice('$1.99'),
        image: img.friedChicken.src,
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    eyebrow: 'Beverages',
    intro: 'Cold drinks to pair with your meal.',
    items: [
      {
        id: 'bottle-water',
        name: 'Bottle Water',
        description: 'Chilled bottled water.',
        prices: singlePrice('$1.00'),
        image: spread,
      },
      {
        id: 'can-soda',
        name: 'Can Soda',
        description: 'Assorted canned sodas.',
        prices: singlePrice('$2.00'),
        image: spread,
      },
      {
        id: 'glass-bottle-soda',
        name: 'Glass Bottle Soda',
        description: 'Assorted glass bottle sodas.',
        prices: singlePrice('$3.00'),
        image: spread,
      },
    ],
  },
]

export const MENU_CATEGORY_NAV = MENU_CATEGORIES.map(({ id, name }) => ({
  id,
  name,
}))

export const MENU_ORDER_URL = SITE.orderUrl
