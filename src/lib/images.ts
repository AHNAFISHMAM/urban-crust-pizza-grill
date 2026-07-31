export type FoodImageAsset = {
  src: string
  alt: string
}

const brand = 'Urban Crust Pizza & Grill, Brooklyn NY'

export const FOOD_IMAGES = {
  hero: {
    src: '/hero-pizza.jpg',
    alt: `Fresh pepperoni pizza with cheese pull at ${brand}`,
  },
  urbanSpecialPizza: {
    src: '/urban-special-pizza.jpg',
    alt: `Urban Special pizza at ${brand}`,
  },
  meatLoverPizza: {
    src: '/meat-lover-pizza.jpg',
    alt: `Meat Lover pizza at ${brand}`,
  },
  veggiePizza: {
    src: '/veggie-pizza.jpg',
    alt: `Veggie pizza at ${brand}`,
  },
  smashBurger: {
    src: '/smash-burger.jpg',
    alt: `Smash burger at ${brand}`,
  },
  friedChicken: {
    src: '/fried-chicken.jpg',
    alt: `Fried chicken at ${brand}`,
  },
  sweetChiliWings: {
    src: '/sweet-chili-wings.jpg',
    alt: `Sweet Chili wings at ${brand}`,
  },
  nagaWings: {
    src: '/naga-wings.jpg',
    alt: `Naga wings at ${brand}`,
  },
  seasonedFries: {
    src: '/seasoned-fries.jpg',
    alt: `Seasoned fries at ${brand}`,
  },
  berryChantilly: {
    src: '/berry-chantilly.jpg',
    alt: `Berry Chantilly dessert at ${brand}`,
  },
  tiramisu: {
    src: '/tiramisu.jpg',
    alt: `Tiramisu at ${brand}`,
  },
  chocolateTubCake: {
    src: '/chocolate-tub-cake.jpg',
    alt: `Chocolate tub cake at ${brand}`,
  },
  turkishCaramelMilkCake: {
    src: '/turkish-caramel-milk-cake.jpg',
    alt: `Turkish caramel milk cake at ${brand}`,
  },
  tresLeches: {
    src: '/tres-leches.jpg',
    alt: `Tres leches at ${brand}`,
  },
  redVelvet: {
    src: '/red-velvet.jpg',
    alt: `Red velvet cake at ${brand}`,
  },
} as const satisfies Record<string, FoodImageAsset>

export const FALLBACK_FOOD_IMAGE = FOOD_IMAGES.urbanSpecialPizza
