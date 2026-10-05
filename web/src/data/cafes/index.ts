export type CafeTheme = 'classic-british' | 'modern-specialty' | 'boutique-brunch';

export type Cafe = {
  slug: string;
  name: string;
  themeId: CafeTheme;
  theme: {
    name: string;
    bg: string;
    ink: string;
    muted: string;
    accent: string;
    accentSoft: string;
    panel: string;
    typeClass: string;
    layout: 'sturdy' | 'editorial' | 'boutique';
  };
  summary: string;
  position: string;
  address: string;
  phone?: string;
  rating?: string;
  hours: string[];
  highlights: string[];
  menu: { name: string; detail: string; tag: string }[];
  menuSections?: { title: string; items: string[] }[];
  mealIllustrations?: { match: string; src: string }[];
  detailGroups?: { title: string; items: string[] }[];
  foodWall: string[];
  reviews: { name: string; rating: string; text: string; source: string }[];
  atmosphere: string[];
  services: string[];
  proof: { label: string; value: string }[];
  location: {
    mapUrl: string;
    directionsUrl: string;
    shareText: string;
  };
  sourceNotes: { label: string; url: string }[];
  assets: {
    hero: string;
    interior: string;
    food: string;
    gallery: string[];
    foodPhotos?: string[];
  };
};

export const cafes: Cafe[] = [
  {
    slug: 'hylton-cafe',
    name: 'Hylton Cafe',
    themeId: 'classic-british',
    theme: {
      name: 'Classic British',
      bg: '#f7f1e7',
      ink: '#211914',
      muted: '#6b5f55',
      accent: '#b42318',
      accentSoft: '#f7d8ce',
      panel: '#fffaf2',
      typeClass: 'font-serif',
      layout: 'sturdy'
    },
    summary: 'A cosy Jewellery Quarter cafe for proper breakfasts, hot sandwiches, great coffee, tea and quick bites.',
    position: 'Jewellery Quarter, Birmingham',
    address: '2 Hylton Street, Birmingham B18 6HN',
    phone: '+44 121 554 7005',
    rating: '4.7 Tripadvisor / 4.7 Google on public listings',
    hours: ['Monday: Closed', 'Tuesday: 8 AM-2 PM', 'Wednesday: 8 AM-2 PM', 'Thursday: 8 AM-2 PM', 'Friday: 8 AM-2 PM', 'Saturday: 8 AM-2 PM', 'Sunday: Closed'],
    highlights: ['Great coffee', 'Great tea selection', 'Popular for breakfast', 'Casual and cosy atmosphere'],
    menu: [
      { name: 'The Hylton Cafe Breakfast', detail: 'Sausage, bacon, baked beans, hash brown, fried egg, mushrooms, tomatoes and toast.', tag: 'breakfast' },
      { name: 'The Hylton Cafe Full English', detail: '2 sausages, 2 bacon, baked beans, 2 hash browns, fried egg, mushrooms, tomatoes, black pudding and toast.', tag: 'signature' },
      { name: 'Eggs Benedict', detail: 'Soft poached egg on a toasted muffin, bacon, hollandaise and chives.', tag: 'brunch' },
      { name: 'Smoked Salmon N Scrambled Eggs', detail: 'Served on granary toast with chives.', tag: 'lighter' },
      { name: 'Hot Sandwich', detail: 'Choose 1-4 fillings: sausage, bacon, fried egg, mushrooms, black pudding, tomato.', tag: 'quick bite' }
    ],
    menuSections: [
      {
        title: 'Breakfast',
        items: [
          'The Hylton Cafe Breakfast - sausage, bacon, baked beans, hash brown, fried egg, mushrooms, tomatoes and toast',
          'The Hylton Cafe Full English - 2 sausages, 2 bacon, baked beans, 2 hash browns, fried egg, mushrooms, tomatoes, black pudding and toast',
          'The Hylton Cafe Vegetarian Breakfast - veggie sausage, baked beans, fried egg, mushrooms, hash brown, tomatoes and toast',
          'Large Vegetarian Breakfast - 2 veggie sausages, baked beans, tomatoes, mushrooms, grilled halloumi, 2 hash browns, 2 fried eggs and toast',
          'Eggs Benedict - soft poached egg on a toasted muffin, bacon, hollandaise and chives',
          'Smoked Salmon N Scrambled Eggs - served on granary toast with chives',
          'Eggs On Toast - scrambled, fried or poached egg on thick hand-cut crusty bread, granary or farmhouse',
          'Tea N Toast - served with bitter orange marmalade or raspberry conserve and a mug of tea'
        ]
      },
      {
        title: 'Hot Sandwiches',
        items: [
          'On sliced white or super seeded bread',
          'Baguette add GBP 1.00',
          'Toast or crusty bread add 50p',
          'Choose 1-4 fillings: sausage, bacon, fried egg, mushrooms, black pudding, tomato'
        ]
      },
      {
        title: 'Lunch Plates And Toasties',
        items: [
          'Cheese Ploughmans',
          'Grilled Halloumi, Chilli Jam And Watercress',
          'Flash-Roasted Chicken, Baby Gem Lettuce, Lemon Mayo',
          'Yorkshire Ham, Vine Ripened Tomato N Rocket',
          'Yorkshire Ham N Cheese Ploughmans',
          'Tuna, Black Pepper, Mayo N Cucumber',
          'BLT On Toasted Granary',
          'Tuna, Mozzarella And Red Onion Toastie'
        ]
      }
    ],
    mealIllustrations: [
      { match: 'Full English', src: '/cafes/hylton-cafe/meals/full-english.svg' },
      { match: 'Hylton Cafe Breakfast', src: '/cafes/hylton-cafe/meals/full-english.svg' },
      { match: 'Vegetarian', src: '/cafes/hylton-cafe/meals/veggie-breakfast.svg' },
      { match: 'Eggs Benedict', src: '/cafes/hylton-cafe/meals/eggs-benedict.svg' },
      { match: 'Smoked Salmon', src: '/cafes/hylton-cafe/meals/salmon-eggs.svg' },
      { match: 'Eggs On Toast', src: '/cafes/hylton-cafe/meals/eggs-toast.svg' },
      { match: 'Tea N Toast', src: '/cafes/hylton-cafe/meals/tea-toast.svg' },
      { match: 'Hot Sandwich', src: '/cafes/hylton-cafe/meals/hot-sandwich.svg' },
      { match: 'fillings', src: '/cafes/hylton-cafe/meals/hot-sandwich.svg' },
      { match: 'Ploughmans', src: '/cafes/hylton-cafe/meals/ploughmans.svg' },
      { match: 'Halloumi', src: '/cafes/hylton-cafe/meals/ploughmans.svg' },
      { match: 'Chicken', src: '/cafes/hylton-cafe/meals/hot-sandwich.svg' },
      { match: 'Ham', src: '/cafes/hylton-cafe/meals/ploughmans.svg' },
      { match: 'Tuna', src: '/cafes/hylton-cafe/meals/hot-sandwich.svg' },
      { match: 'BLT', src: '/cafes/hylton-cafe/meals/hot-sandwich.svg' },
      { match: 'Toastie', src: '/cafes/hylton-cafe/meals/hot-sandwich.svg' }
    ],
    detailGroups: [
      { title: 'Service options', items: ['Outdoor seating', 'On-site services', 'Takeaway', 'Dine-in'] },
      { title: 'Highlights', items: ['Great coffee', 'Great tea selection'] },
      { title: 'Popular for', items: ['Breakfast', 'Solo dining'] },
      { title: 'Offerings', items: ['Coffee', 'Quick bite'] },
      { title: 'Dining options', items: ['Breakfast', 'Brunch', 'Lunch', 'Dessert', 'Seating', 'Table service'] },
      { title: 'Amenities', items: ['Toilet'] },
      { title: 'Atmosphere', items: ['Casual', 'Cosy'] },
      { title: 'Crowd', items: ['Groups'] },
      { title: 'Payments', items: ['Credit cards', 'Debit cards', 'NFC mobile payments'] },
      { title: 'Children', items: ['Good for kids', 'Kids menu'] }
    ],
    foodWall: [
      'Full English Breakfast',
      'The Hylton Cafe Breakfast',
      'The Hylton Cafe Full English',
      'Vegetarian Breakfast',
      'Large Vegetarian Breakfast',
      'Eggs Benedict',
      'Salmon N Scrambled Eggs',
      'Eggs On Toast',
      'Bacon, egg and mushroom sandwich',
      'Tea N Toast',
      'Cheese Ploughmans',
      'Grilled Halloumi',
      'Flash-Roasted Chicken',
      'Yorkshire Ham N Rocket',
      'Tuna Mayo N Cucumber',
      'BLT On Toasted Granary',
      'Tuna Mozzarella Toastie',
      'Latte',
      'Espresso',
      'Hot chocolate with marshmallows'
    ],
    reviews: [
      { name: 'Lee Botterill', rating: '5', text: 'Great little cafe. Good full English. Coffee is good and not bitter. Service with a smile.', source: 'Google review surfaced by Sluurpy' },
      { name: 'Simon', rating: '5', text: 'Fantastic little cafe; sizeable portions, prompt service, affordable prices.', source: 'Google review surfaced by Sluurpy' },
      { name: 'Michael Maple', rating: '5', text: 'Amazing food, owner and staff are really down to earth and friendly. Nice, laid back atmosphere.', source: 'Google review surfaced by Restaurant Guru' }
    ],
    atmosphere: ['Casual, cosy corner cafe feel', 'Jewellery Quarter regulars', 'Affordable, casual breakfast-lunch service'],
    services: ['Outdoor seating', 'On-site services', 'Takeaway', 'Dine-in', 'Table service', 'Good for kids', 'Kids menu', 'NFC mobile payments'],
    proof: [
      { label: 'Address', value: '2 Hylton Street, Birmingham B18 6HN' },
      { label: 'Cuisine', value: 'Cafe, British' },
      { label: 'Price signal', value: 'Restaurant Guru lists £1-£10' }
    ],
    location: {
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hylton%20Cafe%202%20Hylton%20Street%20Birmingham%20B18%206HN',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Hylton%20Cafe%202%20Hylton%20Street%20Birmingham%20B18%206HN',
      shareText: 'Hylton Cafe, 2 Hylton Street, Birmingham B18 6HN'
    },
    sourceNotes: [
      { label: 'Tripadvisor', url: 'https://www.tripadvisor.com/Restaurant_Review-g186402-d2477592-Reviews-The_Hylton_Cafe-Birmingham_West_Midlands_England.html' },
      { label: 'Sluurpy', url: 'https://www.sluurpy.co.uk/birmingham/restaurant/1653987/the-hylton-cafe' },
      { label: 'Restaurant Guru', url: 'https://restaurantguru.com/Hylton-Birmingham' },
      { label: 'BizSeek', url: 'https://www.bizseek.co.uk/hylton_3s-0121-554-7005' }
    ],
    assets: {
      hero: '/cafes/hylton-cafe/hero.svg',
      interior: '/cafes/hylton-cafe/interior.svg',
      food: '/cafes/hylton-cafe/food.jpg',
      gallery: [
        '/cafes/hylton-cafe/food.jpg',
        '/cafes/hylton-cafe/eggs-benedict.jpg',
        '/cafes/hylton-cafe/interior.svg',
        '/cafes/hylton-cafe/hero.svg'
      ],
      foodPhotos: [
        '/cafes/hylton-cafe/food.jpg',
        '/cafes/hylton-cafe/eggs-benedict.jpg'
      ]
    }
  },
  {
    slug: 'cafe-coffea',
    name: 'Cafe Coffea',
    themeId: 'boutique-brunch',
    theme: {
      name: 'Boutique Brunch',
      bg: '#fff7f4',
      ink: '#27151a',
      muted: '#765a63',
      accent: '#b95f74',
      accentSoft: '#f6d7df',
      panel: '#fffdfb',
      typeClass: 'font-sans',
      layout: 'boutique'
    },
    summary: 'A calm brunch-led concept for Burney Lane, drawing on public mentions of stylish interiors, coffee, French toast, and relaxed family visits.',
    position: 'Alum Rock / Burney Lane, Birmingham',
    address: '8 Burney Lane, Birmingham B8 2AH',
    rating: 'Google 4.3/5 noted by Restaurant Guru',
    hours: ['Sun 9AM-6PM', 'Mon Tue Thu Fri 9AM-4PM', 'Wed closed', 'Sat 9AM-6PM'],
    highlights: ['Brunch', 'Coffee and tea', 'Wheelchair accessible noted by Restaurant Guru', 'Registered UK cafe business'],
    menu: [
      { name: 'French toast', detail: 'Frequently mentioned by Restaurant Guru visitors.', tag: 'brunch' },
      { name: 'Shakshuka', detail: 'Restaurant Guru notes it among dishes visitors mention.', tag: 'warm plate' },
      { name: 'Avocado toast', detail: 'Named in Restaurant Guru review/menu signals.', tag: 'fresh' },
      { name: 'Croissants', detail: 'Mentioned in Restaurant Guru visitor signals.', tag: 'bakery' },
      { name: 'Spanish latte, karak and mint tea', detail: 'Listed among drink mentions on Restaurant Guru.', tag: 'drinks' }
    ],
    foodWall: [
      'French toast',
      'Shakshuka',
      'Avocado toast',
      'Croissants',
      'Eggs Benedict',
      'Lamb',
      'Sourdough toast',
      'Coffee',
      'Iced Spanish latte',
      'Spanish latte',
      'Karak',
      'Mint tea'
    ],
    reviews: [
      { name: 'Restaurant Guru visitors', rating: '4.3', text: 'Visitor signals repeatedly mention French toast, shakshuka, croissants, Spanish latte, karak and mint tea.', source: 'Restaurant Guru summary' },
      { name: 'Restaurants World summary', rating: 'Positive', text: 'Customers are described as praising shakshuka, eggs benedict and coffee selections, especially iced Spanish latte.', source: 'Restaurants World listing' },
      { name: 'Wheree summary', rating: 'Positive', text: 'The cafe is described as laid-back with diverse menu choices and inviting decor.', source: 'Wheree listing' }
    ],
    atmosphere: ['Stylish interiors noted by public reviews', 'Family-friendly brunch stop', 'Laid-back coffee and dessert pace'],
    services: ['Dine-in', 'Takeaway', 'Wheelchair accessible entrance noted', 'Outdoor seating not verified'],
    proof: [
      { label: 'Company', value: 'CAFE COFFEA LTD, active private limited company' },
      { label: 'SIC', value: '56102 - unlicensed restaurants and cafes' },
      { label: 'Address', value: '8 Burney Lane, Birmingham B8 2AH' }
    ],
    location: {
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cafe%20Coffea%208%20Burney%20Lane%20Birmingham%20B8%202AH',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Cafe%20Coffea%208%20Burney%20Lane%20Birmingham%20B8%202AH',
      shareText: 'Cafe Coffea, 8 Burney Lane, Birmingham B8 2AH'
    },
    sourceNotes: [
      { label: 'Restaurant Guru', url: 'https://restaurantguru.com/Cafe-Coffea-Birmingham' },
      { label: 'Companies House', url: 'https://find-and-update.company-information.service.gov.uk/company/14163153' },
      { label: 'Wheree', url: 'https://cafe-coffea-1.wheree.com/' }
    ],
    assets: {
      hero: '/cafes/cafe-coffea/hero.svg',
      interior: '/cafes/cafe-coffea/interior.svg',
      food: '/cafes/cafe-coffea/food.jpg',
      gallery: [
        '/cafes/cafe-coffea/food.jpg',
        '/cafes/cafe-coffea/matcha-latte.jpg',
        '/cafes/cafe-coffea/interior.svg',
        '/cafes/hylton-cafe/eggs-benedict.jpg'
      ],
      foodPhotos: [
        '/cafes/cafe-coffea/food.jpg',
        '/cafes/cafe-coffea/matcha-latte.jpg',
        '/cafes/hylton-cafe/eggs-benedict.jpg'
      ]
    }
  },
  {
    slug: 'nexus-cafe',
    name: 'Nexus Cafe',
    themeId: 'modern-specialty',
    theme: {
      name: 'Modern Specialty',
      bg: '#eef6f2',
      ink: '#10211d',
      muted: '#536861',
      accent: '#0f7b67',
      accentSoft: '#c7eadf',
      panel: '#fbfffd',
      typeClass: 'font-sans',
      layout: 'editorial'
    },
    summary: 'A neighbourhood cafe concept for Meriden Street, centred on strong coffee, lingering, and a relaxed Digbeth atmosphere.',
    position: 'Digbeth, Birmingham',
    address: '38 Meriden Street, Birmingham B5 5LS',
    phone: '+44 7742 149976',
    rating: '4.8/5 from 57 Urbanary reviews',
    hours: ['Public source did not expose full opening hours', 'Check the cafe before travelling'],
    highlights: ['WOC-owned speciality coffee shop noted by Independent Birmingham', 'Strong coffee', 'Neighbourhood feel', 'Meriden Street location'],
    menu: [
      { name: 'Speciality coffee', detail: 'Independent Birmingham says Nexus hunted down the best beans.', tag: 'coffee' },
      { name: 'Any bagel + hot drink', detail: 'Independent Birmingham member offer references this main-menu pairing.', tag: 'offer signal' },
      { name: 'Bagels', detail: 'Menu signal from Independent Birmingham member offer.', tag: 'lunch' },
      { name: 'Hot drinks', detail: 'Urbanary and Independent Birmingham both centre the cafe around coffee.', tag: 'drinks' }
    ],
    foodWall: [
      'Speciality coffee',
      'Latte',
      'Matcha',
      'Bagel',
      'Bagel + hot drink',
      'Breakfast',
      'Brunch',
      'Vegan options',
      'Vegetarian options',
      'Hot drinks',
      'Takeaway coffee',
      'Cafe bites'
    ],
    reviews: [
      { name: 'Urbanary summary', rating: '4.8', text: 'A proper neighbourhood cafe on Meriden Street where the coffee is decent and people actually want to linger.', source: 'Urbanary listing' },
      { name: 'WorldCafeMap summary', rating: '4.8', text: 'Recent Google review themes mention service most often and highlight cleanliness, ambiance, and food and drink quality.', source: 'WorldCafeMap Google review summary' },
      { name: 'Independent Birmingham', rating: 'Member offer', text: 'Any bagel + a hot drink from the main menu is called out as an Independent Birmingham member offer.', source: 'Independent Birmingham listing' }
    ],
    atmosphere: ['Tucked-away Digbeth spot', 'Independent neighbourhood energy', 'Designed for lingering over coffee'],
    services: ['Dine-in', 'Independent Birmingham member offer', 'Full opening hours not verified'],
    proof: [
      { label: 'Address', value: '38 Meriden Street, Birmingham B5 5LS' },
      { label: 'Phone', value: '+44 7742 149976' },
      { label: 'Location', value: 'Digbeth / Meriden Street' }
    ],
    location: {
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nexus%20Cafe%2038%20Meriden%20Street%20Birmingham%20B5%205LS',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Nexus%20Cafe%2038%20Meriden%20Street%20Birmingham%20B5%205LS',
      shareText: 'Nexus Cafe, 38 Meriden Street, Birmingham B5 5LS'
    },
    sourceNotes: [
      { label: 'Independent Birmingham', url: 'https://www.independent-birmingham.co.uk/profile/nexus-cafe/' },
      { label: 'Urbanary', url: 'https://www.urbanary.co.uk/venues/birmingham/nexus-cafe' }
    ],
    assets: {
      hero: '/cafes/nexus-cafe/hero.svg',
      interior: '/cafes/nexus-cafe/interior.svg',
      food: '/cafes/nexus-cafe/food.jpg',
      gallery: [
        '/cafes/nexus-cafe/food.jpg',
        '/cafes/nexus-cafe/iced-matcha.jpg',
        '/cafes/nexus-cafe/matcha-drinks.jpg',
        '/cafes/nexus-cafe/interior.svg'
      ],
      foodPhotos: [
        '/cafes/nexus-cafe/food.jpg',
        '/cafes/nexus-cafe/iced-matcha.jpg',
        '/cafes/nexus-cafe/matcha-drinks.jpg'
      ]
    }
  }
];

export function getCafe(slug: string) {
  return cafes.find((cafe) => cafe.slug === slug);
}
