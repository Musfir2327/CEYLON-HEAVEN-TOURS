export const ANIMAL_CATEGORIES = [
  {
    id: 'horses',
    name: 'Horses',
    count: 14,
    image: '/assets/hero.jpg',
    description: 'Majestic thoroughbreds and gentle therapeutic trail horses.',
    residents: [
      {
        name: 'Barnaby',
        breed: 'Quarter Horse',
        age: '8 yrs',
        role: 'Therapy & Gentle Trails',
        bio: 'Calm, empathetic, and loves oats. Barnaby specializes in equine-assisted wellness sessions.',
        image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80',
        traits: ['Gentle', 'Empathetic', 'Child-Friendly']
      },
      {
        name: 'Sienna',
        breed: 'Arabian Cross',
        age: '6 yrs',
        role: 'Sunset Trail Leader',
        bio: 'Energetic and affectionate, Sienna loves leading guests across our meadow trails.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        traits: ['Spirited', 'Friendly', 'Photogenic']
      }
    ]
  },
  {
    id: 'cows',
    name: 'Cows',
    count: 22,
    image: '/assets/calf.jpg',
    description: 'Friendly Highland, Jersey, and Angus cattle residing in our green pastures.',
    residents: [
      {
        name: 'Buttercup',
        breed: 'Jersey Cow',
        age: '4 yrs',
        role: 'Pasture Ambassador',
        bio: 'Buttercup is famous for her sweet nature and enjoying morning neck scratches.',
        image: '/assets/calf.jpg',
        traits: ['Curious', 'Calm', 'Loves Scratches']
      },
      {
        name: 'Clover',
        breed: 'Scottish Highland',
        age: '3 yrs',
        role: 'Photo Favorite',
        bio: 'Known for his fluffy coat and gentle demeanor around visitors.',
        image: 'https://images.unsplash.com/photo-1570042707222-2634d618d7bc?auto=format&fit=crop&w=800&q=80',
        traits: ['Fluffy', 'Gentle', 'Photogenic']
      }
    ]
  },
  {
    id: 'birds',
    name: 'Birds',
    count: 45,
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    description: 'Rescued barn owls, songbirds, wild ducks, and colorful heritage chickens.',
    residents: [
      {
        name: 'Pip & Squeak',
        breed: 'Heritage Chickens',
        age: '2 yrs',
        role: 'Morning Welcome Committee',
        bio: 'Friendly free-roaming hens who greet visitors near the cabin gardens.',
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
        traits: ['Social', 'Active', 'Sweet']
      },
      {
        name: 'Orion',
        breed: 'Barn Owl (Sanctuary)',
        age: '5 yrs',
        role: 'Educational Sanctuary',
        bio: 'Rescued owl receiving sanctuary care and contributing to wildlife education.',
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        traits: ['Wise', 'Peaceful', 'Protected']
      }
    ]
  },
  {
    id: 'donkeys',
    name: 'Donkeys',
    count: 8,
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80',
    description: 'Loyal mini donkeys who bring smiles and calming energy to all guests.',
    residents: [
      {
        name: 'Waffles',
        breed: 'Miniature Donkey',
        age: '5 yrs',
        role: 'Therapy Assistant',
        bio: 'Waffles loves hugging visitors and walking side-by-side with young guests.',
        image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80',
        traits: ['Affectionate', 'Playful', 'Loyal']
      }
    ]
  },
  {
    id: 'goats',
    name: 'Goats',
    count: 18,
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80',
    description: 'Playful Nigerian Dwarf and Pygmy goats who love climbing and petting sessions.',
    residents: [
      {
        name: 'Ziggy',
        breed: 'Pygmy Goat',
        age: '2 yrs',
        role: 'Ranch Entertainer',
        bio: 'Ziggy loves jumping on wooden platforms and getting treats from friendly guests.',
        image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80',
        traits: ['Playful', 'Energetic', 'Love Snacks']
      }
    ]
  }
];

export const RANCH_ACTIVITIES = [
  {
    id: 'equine-wellness',
    title: 'Equine Assisted Healing',
    duration: '90 Min',
    description: 'Guided non-riding sessions focusing on mindfulness, stress relief, and bonding with our gentle therapy horses.',
    image: '/assets/hero.jpg'
  },
  {
    id: 'pasture-tours',
    title: 'Guided Pasture Walk & Feeding',
    duration: '60 Min',
    description: 'Walk amongst our peaceful herd of cows, goats, and donkeys while learning about animal care and nutrition.',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sunset-trails',
    title: 'Sunset Meadow Rides',
    duration: '120 Min',
    description: 'Scenic horseback trail ride through golden valley meadows guided by experienced ranch wranglers.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'
  }
];

export const CABIN_RENTALS = [
  {
    id: 'pinewood-lodge',
    title: 'The Whispering Pines Cabin',
    capacity: '2 - 4 Guests',
    price: '$240 / night',
    description: 'A cozy timber log cabin with floor-to-ceiling windows, stone fireplace, and private view of horse pastures.',
    image: '/assets/cabin-interior.jpg',
    exteriorImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    features: ['King Feather Bed', 'Stone Fireplace', 'Private Porch', 'High-speed Starlink WiFi', 'Full Kitchenette']
  },
  {
    id: 'meadow-loft',
    title: 'Highland Meadow Haven',
    capacity: '4 - 6 Guests',
    price: '$310 / night',
    description: 'Modern rustic architectural cabin with outdoor cedar hot tub, wrap-around deck, and stargazing skylights.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    exteriorImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    features: ['2 Master Suites', 'Cedar Hot Tub', 'Panoramic Pasture Views', 'Wood Burning Stove', 'Organic Coffee Bar']
  }
];

export const RANCH_RESOURCES = [
  {
    id: 'equine-guide',
    title: 'Equine Wellness & Connection Guide',
    type: 'PDF Guidebook (24 Pages)',
    description: 'Learn the psychology of horse language and body signals for a deeper bond during your visit.'
  },
  {
    id: 'visitor-handbook',
    title: 'Ranch Visitor & Cabin Welcome Kit',
    type: 'Digital Handbook',
    description: 'Everything you need to know about pasture safety, feeding times, local trails, and dining.'
  },
  {
    id: 'animal-therapy',
    title: 'The Science of Animal-Assisted Healing',
    type: 'Research Summary',
    description: 'Insights into how time spent with gentle farm animals lowers cortisol and elevates emotional wellbeing.'
  }
];
