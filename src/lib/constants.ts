import { FOOD_IMAGES } from './images'

export const SITE = {
  name: 'Urban Crust Pizza & Grill',
  shortName: 'Urban Crust',
  tagline: 'HMS Certified · 100% Halal-Friendly',
  phone: '(718) 314-6236',
  phoneHref: 'tel:+17183146236',
  address: {
    line1: '1150 Liberty Ave',
    line2: 'Brooklyn, NY 11208',
    neighborhood: 'East NY · Brooklyn',
    mapsUrl:
      'https://google.com/maps/place?q=Urban+Crust+Pizza+and+Grill,+1150+Liberty+Ave,+Brooklyn,+NY+11208',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Urban+Crust+Pizza+and+Grill,+1150+Liberty+Ave,+Brooklyn,+NY+11208&hl=en&z=16&output=embed',
  },
  orderUrl: 'https://order.online/business/urban-crust-pizza--grill-20534035',
  orderLabel: 'Order on DoorDash',
  orderLabelShort: 'Order Now',
  deliveryNote: 'Delivery via DoorDash — Brooklyn & surrounding areas',
  logoSrc: '/logo.svg',
} as const

export const HOURS = [
  { day: 'Monday', hours: '11:30 AM – 11:00 PM' },
  { day: 'Tuesday', hours: '11:30 AM – 11:00 PM' },
  { day: 'Wednesday', hours: '11:30 AM – 11:00 PM' },
  { day: 'Thursday', hours: '11:30 AM – 11:00 PM' },
  { day: 'Friday', hours: '2:30 PM – 12:00 AM' },
  { day: 'Saturday', hours: '11:30 AM – 12:00 AM' },
  { day: 'Sunday', hours: '11:30 AM – 11:00 PM' },
] as const

export const NAV_LINKS = [
  { label: 'Menu', href: '/menu' },
  { label: 'Our Story', href: '/about' },
  { label: 'Visit', href: '/#visit' },
] as const

export const IMAGES = {
  hero: FOOD_IMAGES.hero.src,
  pizza: FOOD_IMAGES.urbanSpecialPizza.src,
  grill: FOOD_IMAGES.smashBurger.src,
  desserts: FOOD_IMAGES.berryChantilly.src,
  story: FOOD_IMAGES.meatLoverPizza.src,
  gallery: [
    FOOD_IMAGES.smashBurger,
    FOOD_IMAGES.urbanSpecialPizza,
    FOOD_IMAGES.sweetChiliWings,
    FOOD_IMAGES.berryChantilly,
  ],
} as const

export const MENU_ITEMS = [
  {
    eyebrow: 'Signature pies',
    title: 'Pizza',
    description:
      'Urban Special, Meat Lover, Veggie, and classic slices — baked to order with premium toppings.',
    image: IMAGES.pizza,
    alt: 'Urban Special pizza at Urban Crust Pizza & Grill, Brooklyn NY',
  },
  {
    eyebrow: 'Flame-grilled favorites',
    title: 'Grill & Wings',
    description:
      'Smash burgers, fried chicken, Sweet Chili & Naga wings, and seasoned fries made fresh.',
    image: IMAGES.grill,
    alt: 'Smash burger at Urban Crust Pizza & Grill, Brooklyn NY',
  },
  {
    eyebrow: 'Sweet finishes',
    title: 'Desserts',
    description:
      'Berry Chantilly, Tiramisu, Turkish caramel milk cake, tres leches, red velvet, and more.',
    image: IMAGES.desserts,
    alt: 'Berry Chantilly at Urban Crust Pizza & Grill, Brooklyn NY',
  },
] as const

export const FAVORITES = [
  { name: 'Smash Burger', tag: 'Grill favorite' },
  { name: 'Urban Special Pizza', tag: 'House signature' },
  { name: 'Meat Lover Pizza', tag: 'Best seller' },
  { name: 'Sweet Chili Wings', tag: 'Fan favorite' },
  { name: 'Naga Wings', tag: 'Spicy pick' },
  { name: 'Seasoned Fries', tag: 'Side must-have' },
  { name: 'Berry Chantilly', tag: 'Top dessert' },
  { name: 'Tiramisu', tag: 'Classic sweet' },
] as const

export const REVIEWS = [
  {
    name: 'Tawkidul Islam',
    quote:
      'Great service, good food, the burgers and loaded fries i definitely recommend',
  },
  {
    name: 'Metui Bhuiyan',
    quote:
      'Great food, great prices, great seating area, and very friendly staff!',
  },
  {
    name: 'Ishrat Rahman',
    quote: 'I really enjoyed their pepperoni and Hawaiian slice.',
  },
] as const

export const SERVICES = [
  {
    eyebrow: 'To Your Door',
    title: 'Delivery',
    description: 'Order through DoorDash to Brooklyn and surrounding areas.',
  },
  {
    eyebrow: 'Skip the Line',
    title: 'Pickup',
    description: 'Order ahead online — your food is ready when you walk in.',
  },
  {
    eyebrow: 'Groups & Events',
    title: 'Catering',
    description: 'Party trays and large orders — call us to plan your event.',
  },
] as const

export const STORY = {
  eyebrow: 'Our Story',
  title: 'A Brooklyn Neighborhood',
  titleAccent: 'Favorite',
  paragraphs: [
    'Urban Crust Pizza & Grill is a neighborhood spot on Liberty Avenue in East NY, Brooklyn — serving HMS Certified 100% halal-friendly pizza, grilled dishes, and great taste for everyone.',
    'From smash burgers and loaded fries to specialty pies and homemade desserts, we\'re proud to welcome our community for dine-in, takeout, and delivery.',
  ],
} as const

export const ABOUT_PAGE = {
  title: 'A Taste of the Neighborhood',
  hero: {
    image: FOOD_IMAGES.meatLoverPizza.src,
    imageAlt: FOOD_IMAGES.meatLoverPizza.alt,
    heading: 'Pizza & Grill on Liberty Avenue',
    body: 'Urban Crust is a neighborhood spot in East NY, Brooklyn — serving HMS Certified 100% halal-friendly pizza, smash burgers, wings, and grilled favorites made fresh every day. From specialty pies and loaded fries to homemade desserts, we welcome our community for dine-in, takeout, and delivery.',
  },
  sections: [
    {
      id: 'mission',
      heading: 'Our Mission',
      body: 'At Urban Crust, our goal is simple — deliver great food, fair prices, and friendly service to everyone who walks through our door. We\'ve built our reputation one neighbor at a time, and we\'re grateful for the loyal customers who keep coming back.',
      image: FOOD_IMAGES.meatLoverPizza.src,
      imageAlt: FOOD_IMAGES.meatLoverPizza.alt,
    },
    {
      id: 'roots',
      heading: 'Who We Are',
      body: 'Urban Crust is a local Brooklyn restaurant on Liberty Avenue — a place where families, friends, and neighbors gather over pizza, burgers, wings, and desserts. No pretense, just honest cooking and a welcoming dining room.',
      image: FOOD_IMAGES.smashBurger.src,
      imageAlt: FOOD_IMAGES.smashBurger.alt,
    },
    {
      id: 'inspiration',
      heading: 'Our Inspiration',
      body: 'We believe great neighborhood food brings people together. Whether it\'s a quick slice after work, wings on game day, or a spread for the whole family, we cook the way we\'d want to eat — fresh, flavorful, and made with care.',
      image: FOOD_IMAGES.urbanSpecialPizza.src,
      imageAlt: FOOD_IMAGES.urbanSpecialPizza.alt,
    },
    {
      id: 'why',
      heading: 'Why Urban Crust?',
      body: 'From our signature Urban Special pizza to smash burgers, Sweet Chili wings, and Berry Chantilly, every dish is made to order. We\'re HMS Certified halal-friendly, so everyone in the community can enjoy our menu with confidence. Walk in hungry — leave with a full belly and a reason to come back.',
      image: FOOD_IMAGES.sweetChiliWings.src,
      imageAlt: FOOD_IMAGES.sweetChiliWings.alt,
    },
  ],
} as const
