// Local Image Imports from src/assets/images
import img1 from '../assets/images/1.webp';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.webp';
import img4 from '../assets/images/4.webp';
import img5 from '../assets/images/5.webp';
import img6 from '../assets/images/6.webp';
import img7 from '../assets/images/7.webp';
import img8 from '../assets/images/8.webp';
import img9 from '../assets/images/9.webp';
import img10 from '../assets/images/10.webp';
import img11 from '../assets/images/11.webp';
import img12 from '../assets/images/12.webp';
import img13 from '../assets/images/13.webp';
import img14 from '../assets/images/14.webp';
import img15 from '../assets/images/15.webp';
import img16 from '../assets/images/16.webp';
import img17 from '../assets/images/17.webp';
import img18 from '../assets/images/18.webp';
import img20 from '../assets/images/20.webp';

import colombo_dayTourImg from '../assets/images/colombo.webp';
import galle_dayTourImg from '../assets/images/galle.webp';

import ramayanaImg from '../assets/images/ramayana.webp';
import koneshvaramImg from '../assets/images/koneshvaram kovil.webp';
import eastCoastImg from '../assets/images/east coast.webp';
import elephantImg from '../assets/images/elephent.webp';
import ellaImg from '../assets/images/ella.webp';
import damroImg from '../assets/images/damro.webp';
import kandy1Img from '../assets/images/kandy 1.webp';
import kandy2Img from '../assets/images/kandy 2.webp';
import kandy3Img from '../assets/images/kandy 3.webp';
import mirissaImg from '../assets/images/mirissa.webp';
import maduImg from '../assets/images/madu.webp';
import nineArch2Img from '../assets/images/ninearch 2.webp';
import nineArchImg from '../assets/images/ninearch.webp';
import pinnawelaImg from '../assets/images/pinnawela.webp';
import rawanellaImg from '../assets/images/rawanella.webp';
import safari2Img from '../assets/images/safary 2.webp';
import safariImg from '../assets/images/safary.webp';
import sigiriya1Img from '../assets/images/sigiriya 1.webp';
import sigiriya2Img from '../assets/images/sigiriya 2.webp';
import sigiriya3Img from '../assets/images/sigiriya 3.webp';
import sigiriya6Img from '../assets/images/sigiriya 6.webp';
import sigiriya4Img from '../assets/images/sigirya 4.webp';

export const PACKAGE_CATEGORIES = [
  { id: 'pocket-friendly', label: 'Pocket Friendly', title: 'Budget-Friendly Adventures' },
  { id: 'round-tours', label: 'Round Tours', title: 'Grand Island Exploration' },
  { id: 'day-tours', label: 'Day Tours', title: 'One-Day Excursions & Highlights' }
];

export const PACKAGES_BY_CATEGORY = {
  'pocket-friendly': [
    {
      id: 'cultural-heritage-4d3n',
      title: '4 Days – 3 Nights Cultural Heritage Escape',
      category: 'pocket-friendly',
      duration: '4 Days / 3 Nights',
      badgeDuration: '4D/3N',
      price: 260,
      rating: 4.9,
      reviewsCount: 142,
      packageType: 'Culture & Heritage',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      travelers: '2-12 Travelers',
      image: sigiriya1Img,
      overview: 'This 4 Days – 3 Nights Cultural Heritage Escape is a perfect short tour for travelers who want to experience Sri Lanka’s most sacred and historic destinations in a limited time. Begin your journey in the hill capital Kandy, home to the world-famous Temple of the Tooth Relic, then continue to the iconic Sigiriya Rock Fortress and the ancient cave temples of Dambulla. The tour concludes in the sacred city of Anuradhapura, featuring UNESCO-listed ruins, towering stupas, and the revered Sri Maha Bodhi Tree. This package is ideal for culture lovers, history enthusiasts, and first-time visitors looking for a meaningful Sri Lankan experience.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Explore Kandy', detail: 'Arrive in Sri Lanka and transfer to Kandy. Visit the Temple of the Tooth Relic, enjoy a walk by Kandy Lake, explore Royal Botanical Gardens, and end the day with a Kandyan cultural dance show.' },
        { day: 'Day 2', title: 'Kandy to Sigiriya (Sigiriya Rock & Dambulla)', detail: 'Travel to Sigiriya and climb the UNESCO-listed Sigiriya Rock Fortress. After lunch, visit the Dambulla Cave Temple, then check in for an overnight stay in Sigiriya.' },
        { day: 'Day 3', title: 'Sigiriya to Anuradhapura Sacred City Tour', detail: 'After breakfast, travel to Anuradhapura and explore the ancient sacred city including Sri Maha Bodhi Tree, Ruwanwelisaya, Jetavanaramaya, Abhayagiri Monastery, Lankaramaya, and the Kuttam Pokuna twin baths.' },
        { day: 'Day 4', title: 'Anuradhapura to Airport (Departure)', detail: 'Enjoy breakfast and transfer to the airport for departure, concluding your cultural and heritage journey in Sri Lanka.' }
      ],
      included: [
        'Airport pickup and drop-off',
        'Private transportation in a comfortable air-conditioned vehicle',
        'Travel insurance',
        'English-speaking chauffeur guide',
        'All sightseeing transfers as mentioned in the itinerary',
        'Refreshments during the tour'
      ],
      notIncluded: [
        'International flight tickets',
        'Sri Lanka Visa fees',
        'Entrance tickets to attractions',
        'Lunch and dinner',
        'Personal expenses (shopping, laundry, minibar, etc.)',
        'Tips and gratuities (optional)',
        'Optional activities not mentioned in the itinerary'
      ],
      highlights: [
        'Warm airport welcome and private transfer to Kandy',
        'Visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa)',
        'Relaxing walk around the scenic Kandy Lake',
        'Explore the Royal Botanical Gardens in Peradeniya',
        'Enjoy a traditional Kandyan dance performance with drumming and fire acts',
        'Scenic drive through Sri Lanka’s cultural triangle landscapes',
        'Climb the iconic Sigiriya Rock Fortress (UNESCO World Heritage Site)',
        'See the Lion’s Gate, Mirror Wall, frescoes, and panoramic views from the summit',
        'Visit the Dambulla Cave Temple (UNESCO World Heritage Site)',
        'Discover the ancient sacred city of Anuradhapura (UNESCO World Heritage Site)',
        'Pay respects at the Sri Maha Bodhi Tree (one of the oldest recorded trees in the world)',
        'Explore major stupas including Ruwanwelisaya and Jetavanaramaya',
        'Visit Abhayagiri Monastery and the Samadhi Buddha Statue'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 10 days'
      ],
      gallery: [
        sigiriya1Img,
        kandy1Img,
        mirissaImg,
        nineArchImg
      ]
    },

    {
      id: 'grand-escape-5d4n',
      title: '5 Days – 4 Nights – Grand Escape',
      category: 'pocket-friendly',
      duration: '5 Days / 4 Nights',
      badgeDuration: '5D/4N',
      price: 340,
      rating: 4.95,
      reviewsCount: 188,
      packageType: 'Adventure & Nature',
      difficulty: 'Easy to Moderate',
      bestTime: 'Year-round',
      travelers: '2-10 Travelers',
      image: damroImg,
      overview: 'The 5 Days – 4 Nights Grand Escape combines ancient rock fortresses, authentic village safaris, mountain train rides through tea valleys, wild leopard game safaris, and golden beach sunsets into one incredible budget-friendly journey.',
      itinerary: [
        { day: 'Day 1', title: 'Sigiriya Lion Rock & Traditional Village Safari', detail: 'Greeting at airport, transfer to Habarana. Climb Sigiriya Rock Fortress, take a traditional bullock cart ride, and enjoy a traditional village buffet lunch.' },
        { day: 'Day 2', title: 'Matale Spice Garden & Kandy City', detail: 'Tour Matale spice garden with herbal tea tasting, pay respects at Temple of the Tooth, and enjoy scenic views over Kandy Lake.' },
        { day: 'Day 3', title: 'Iconic Scenic Train Ride to Ella', detail: 'Board the world-famous blue train through misty tea estates, walk across the Nine Arch Bridge, and hike Little Adam’s Peak.' },
        { day: 'Day 4', title: 'Yala Leopard Safari & Southern Coast', detail: 'Early morning 4x4 Jeep Safari in Yala National Park to spot wild leopards and elephants, then transfer to Mirissa beach.' },
        { day: 'Day 5', title: 'Galle Dutch Fort & Departure', detail: 'Explore UNESCO Galle Dutch Fort, stroll cobblestone ramparts, see stilt fishermen, and transfer to airport.' }
      ],
      included: [
        'Airport pickup and drop-off',
        'Private air-conditioned vehicle with dedicated driver-guide',
        'Daily breakfast and dinner at 4-star boutique hotels',
        'Scenic mountain train tickets to Ella',
        'Yala National Park 4x4 Jeep Safari rental and permits'
      ],
      notIncluded: [
        'International airfare',
        'Visa fees',
        'Lunches and personal shopping',
        'Tips and gratuities'
      ],
      highlights: [
        'Climb Sigiriya Lion Rock Fortress',
        'Experience authentic bullock cart ride and village lunch',
        'World-famous scenic train ride from Kandy to Ella',
        'Walk across Nine Arch Bridge',
        'Wild leopard 4x4 safari in Yala National Park',
        'Stroll historic Galle Dutch Fort'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 10 days'
      ],
      gallery: [
        kandy1Img,
        nineArchImg,
        safariImg,
        mirissaImg
      ]
    },

    {
      id: 'mini-discovery-3d2n',
      title: '3 Days – 2 Nights Mini Discovery',
      category: 'pocket-friendly',
      duration: '3 Days / 2 Nights',
      badgeDuration: '3D/2N',
      price: 185,
      rating: 4.88,
      reviewsCount: 96,
      packageType: 'Short Break & Relaxation',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      travelers: '1-8 Travelers',
      image: img11,
      overview: 'A short 3-day getaway designed for travelers with limited time who want to experience elephant care, tea garden heritage, and royal hill country landmarks.',
      itinerary: [
        { day: 'Day 1', title: 'Pinnawala Elephant Sanctuary & Kandy', detail: 'Visit Pinnawala Elephant Care Center during river bathing, check in to Kandy hill resort, and visit Tooth Relic Temple.' },
        { day: 'Day 2', title: 'Peradeniya Botanical Gardens & Tea Estate', detail: 'Stroll Royal Botanical Gardens in Peradeniya and tour Giragama tea factory with fresh tea tasting.' },
        { day: 'Day 3', title: 'Negombo Coastal Sunset & Airport Transfer', detail: 'Visit historic Negombo fish market, take a lagoon boat ride, and transfer to airport.' }
      ],
      included: [
        'Private vehicle with AC driver',
        'Daily breakfast',
        'Pinnawala & Botanical Garden tickets',
        'Airport transfers'
      ],
      notIncluded: [
        'International flights & visas',
        'Lunch & dinner',
        'Personal expenses'
      ],
      highlights: [
        'Pinnawala elephant river bath watching',
        'Temple of the Tooth Relic visit',
        'Royal Botanical Gardens tour',
        'Ceylon tea tasting'
      ],
      importantInfo: [
        'Customizations available upon request',
        '24/7 customer support',
        'Free cancellation up to 10 days'
      ],
      gallery: [
        mirissaImg,
        sigiriya1Img,
        kandy1Img,
        ellaImg
      ]
    }
  ],

  'round-tours': [
    {
      id: 'ramayana-tour-8d7n',
      title: '8 Days - 7 Nights Ramayana Tour Package',
      category: 'round-tours',
      duration: '8 Days / 7 Nights',
      badgeDuration: '8D/7N',
      price: 650,
      rating: 4.95,
      reviewsCount: 148,
      packageType: 'Cultural & Heritage',
      difficulty: 'Moderate',
      bestTime: 'December to April',
      travelers: '2-12 Travelers',
      image: ramayanaImg,
      overview: 'Discover the sacred land of Lanka on this 8 Days / 7 Nights Ramayana Tour Package with Ceylon Heaven Tours. This spiritually immersive pilgrimage follows the legendary journey of Lord Rama, Sita, and Hanuman, visiting the most important Ramayana-associated sites across Sri Lanka. The tour beautifully blends Hindu pilgrimage, Buddhist heritage, breathtaking scenic landscapes, enriching cultural experiences, and comfortable accommodation, making it an ideal choice for Ramayana devotees, families, and spiritual travelers.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival | Airport → Chilaw → Anuradhapura', detail: 'Upon arrival at Bandaranaike International Airport, meet our representative and begin your pilgrimage. Visit Munneswaram Temple and Manavari Temple, two important Ramayana-linked Shiva temples. Continue to Anuradhapura for dinner and overnight stay.' },
        { day: 'Day 2', title: 'Anuradhapura → Trincomalee', detail: 'Visit Atamasthana, the eight sacred Buddhist sites in Anuradhapura. Travel to Trincomalee and visit the ancient Thirukoneswaram Temple, one of the Pancha Ishwarams dedicated to Lord Shiva. Overnight stay in Trincomalee.' },
        { day: 'Day 3', title: 'Trincomalee → Kandy', detail: 'Proceed to Kandy via Dambulla Cave Temple (UNESCO World Heritage Site) and Matale Spice Garden. In the evening, visit the sacred Temple of the Tooth Relic. Overnight stay in Kandy.' },
        { day: 'Day 4', title: 'Kandy Sightseeing', detail: 'Explore Royal Botanical Garden, Peradeniya, followed by a visit to Pinnawala Elephant Orphanage. In the evening, enjoy a traditional Kandy Cultural Dance Show. Overnight stay in Kandy.' },
        { day: 'Day 5', title: 'Kandy → Nuwara Eliya', detail: 'Travel to the hill country and visit Sri Bhakta Hanuman Temple at Ramboda. Stop at Ramboda Waterfall and a tea factory. Continue to Nuwara Eliya for city sightseeing and overnight stay.' },
        { day: 'Day 6', title: 'Nuwara Eliya → Kataragama', detail: 'Visit Seetha Amman Temple and Ashoka Vatika (Hakgala Botanical Garden), believed to be where Sita was held captive. En route, visit Divurumpola Temple, Ravana Falls, and Ravana Caves. Overnight stay in Kataragama.' },
        { day: 'Day 7', title: 'Kataragama → Colombo', detail: 'Morning visit to Kataragama Temple. Travel to Colombo via Ussangoda Ramayana Site, Galle Fort, and Rumassala Sanjeevani Mountain, associated with Hanuman\'s search for healing herbs. Overnight stay in Colombo.' },
        { day: 'Day 8', title: 'Colombo → Departure', detail: 'Visit Sri Pancha Muga Anjaneya Temple and Kelaniya Raja Maha Vihara, subject to time availability. Transfer to Bandaranaike International Airport for departure, concluding your Ramayana pilgrimage.' }
      ],
      included: [
        'Airport pickup and drop-off',
        'Travel insurance',
        'Private air-conditioned vehicle for the entire tour',
        'English-speaking chauffeur guide',
        '7 nights hotel accommodation',
        'Daily breakfast and dinner',
        'All sightseeing and temple visits as per itinerary',
        'Fuel, parking, and highway tolls'
      ],
      notIncluded: [
        'International airfare',
        'Sri Lanka visa fees',
        'Lunch and beverages',
        'Entrance fees not mentioned as included',
        'Tips and gratuities',
        'Personal expenses (shopping, tips, laundry, etc.)'
      ],
      highlights: [
        'Visit major Ramayana sites linked to Lord Rama, Sita, Hanuman, and King Ravana',
        'Explore sacred Hindu and Buddhist temples across the island',
        'Experience Sri Lanka\'s hill country, waterfalls, and coastal landscapes',
        'Witness Kandy Cultural Dance Show',
        'Visit Pinnawala Elephant Orphanage',
        'Scenic drives through tea plantations and heritage cities',
        'Comfortable hotels with guided sightseeing'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        sigiriya1Img,
        kandy1Img,
        mirissaImg,
        nineArchImg
      ]
    },

    {
      id: 'ramayana-tour-11d10n',
      title: '11 Days / 10 Nights Ramayana Tour',
      category: 'round-tours',
      duration: '11 Days / 10 Nights',
      badgeDuration: '11D/10N',
      price: 960,
      rating: 4.97,
      reviewsCount: 182,
      packageType: 'Comprehensive Tour',
      difficulty: 'Moderate',
      bestTime: 'November to April',
      travelers: '2-12 Travelers',
       image: koneshvaramImg,
      overview: 'Embark on a spiritually enriching journey with the 11 Days / 10 Nights Ramayana Tour in Sri Lanka by Ceylon Heaven Tours. Sri Lanka, revered as the Island of Ravana, plays a vital role in the great epic Ramayana. This pilgrimage tour takes you through the most significant Ramayana sites across the island, blended with ancient Hindu temples, Buddhist heritage, scenic landscapes, and cultural experiences. Designed for Ramayana devotees, spiritual seekers, and families, this extended itinerary allows deeper exploration of sacred locations from Chilaw and Anuradhapura to Jaffna, Trincomalee, Kandy, Nuwara Eliya, Kataragama, and Colombo, ensuring a meaningful and memorable pilgrimage.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival | Airport → Chilaw → Anuradhapura', detail: 'Arrival at Bandaranaike International Airport and warm welcome by our representative. Travel to Chilaw and visit Munneswaram Hindu Temple and Manavari Hindu Temple, both deeply connected to the Ramayana. Continue to Anuradhapura for dinner and overnight stay.' },
        { day: 'Day 2', title: 'Anuradhapura → Jaffna', detail: 'Morning visit to Atamasthana, the eight sacred Buddhist sites in Anuradhapura. Proceed to Jaffna, the cultural capital of Northern Sri Lanka. Dinner and overnight stay in Jaffna.' },
        { day: 'Day 3', title: 'Full Day Jaffna Sightseeing', detail: 'Explore Jaffna\'s important religious and cultural landmarks including Nallur Kandaswamy Temple, Naguleswaram Temple, Keerimalai, Jaffna Public Library, and Nilavarai Well. Overnight stay in Jaffna.' },
        { day: 'Day 4', title: 'Jaffna → Trincomalee', detail: 'Travel to Trincomalee and visit the sacred Thirukoneswaram Temple, one of the Pancha Ishwarams dedicated to Lord Shiva. Dinner and overnight stay in Trincomalee.' },
        { day: 'Day 5', title: 'Trincomalee Sightseeing', detail: 'Enjoy a full day of sightseeing in Trincomalee, exploring its coastal beauty and religious significance. Overnight stay in Trincomalee.' },
        { day: 'Day 6', title: 'Trincomalee → Kandy', detail: 'Proceed to Kandy via Dambulla Cave Temple (UNESCO World Heritage Site) and Matale Spice Garden. In the evening, visit the sacred Temple of the Tooth Relic. Overnight stay in Kandy.' },
        { day: 'Day 7', title: 'Pinnawala & Kandy City Tour', detail: 'Visit Royal Botanical Garden – Peradeniya and Pinnawala Elephant Orphanage. In the evening, enjoy the Kandy Cultural Dance Show. Overnight stay in Kandy.' },
        { day: 'Day 8', title: 'Kandy → Nuwara Eliya', detail: 'Travel through the scenic hill country to Nuwara Eliya. En route, visit Sri Bhakta Hanuman Temple – Ramboda, a waterfall, and a tea factory. Sightseeing in Nuwara Eliya. Overnight stay.' },
        { day: 'Day 9', title: 'Nuwara Eliya → Kataragama', detail: 'Visit Seetha Amman Temple and Ashoka Vatika (Hakgala Botanical Garden). En route to Kataragama, stop at Divurumpola Temple, Ravana Falls, and Ravana Caves. Overnight stay in Kataragama.' },
        { day: 'Day 10', title: 'Kataragama → Colombo', detail: 'Morning visit to Kataragama Temple. Travel to Colombo via Ussangoda Ramayana Site, Galle Fort, and Rumassala Sanjeevani Mountain. Overnight stay in Colombo.' },
        { day: 'Day 11', title: 'Colombo → Departure', detail: 'Depending on flight time, visit Sri Pancha Muga Anjaneya Temple and Kelaniya Raja Maha Vihara. Transfer to Bandaranaike International Airport for departure, concluding your 11-day Ramayana pilgrimage.' }
      ],
      included: [
        'Airport pickup and drop-off',
        'Travel insurance',
        'Private air-conditioned vehicle for entire tour',
        'English-speaking chauffeur guide',
        '10 nights hotel accommodation',
        'Daily breakfast and dinner',
        'Sightseeing and temple visits as per itinerary',
        'Fuel, parking, and highway tolls'
      ],
      notIncluded: [
        'International flights',
        'Personal expenses',
        'Optional activities',
        'Tips and gratuities',
        'Personal expenses (shopping, laundry, tips, etc.)'
      ],
      highlights: [
        'Visit major Ramayana sites associated with Lord Rama, Sita, Hanuman, and King Ravana',
        'Explore sacred Hindu temples and Buddhist heritage sites',
        'Jaffna cultural tour including Nallur Kandaswamy Temple',
        'Scenic hill country journey through Nuwara Eliya and Ramboda',
        'Witness Kandy Cultural Dance Show',
        'Visit Pinnawala Elephant Orphanage',
        'Explore legendary sites such as Ashoka Vatika, Ravana Falls & Caves, Ussangoda, and Rumassala',
        'Comfortable hotels and guided sightseeing throughout the tour'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        kandy1Img,
        sigiriya1Img,
        mirissaImg,
        nineArchImg
      ]
    },

    {
      id: 'decade-adventure-10d9n',
      title: '10 Days – 9 Nights Decade Adventure Tour',
      category: 'round-tours',
      duration: '10 Days / 9 Nights',
      badgeDuration: '10D/9N',
      price: 870,
      rating: 4.96,
      reviewsCount: 168,
      packageType: 'Adventure & Culture',
      difficulty: 'Moderate',
      bestTime: 'Year-round',
      travelers: '2-12 Travelers',
      image: img6,
      overview: 'Experience a decade of memories in 10 unforgettable days! This comprehensive tour takes you through Sri Lanka’s ancient kingdoms, cultural heritage, misty tea mountains, wildlife safaris, and tropical beaches.',
      itinerary: [
        { day: 'Day 1-2', title: 'Arrival & Cultural Triangle', detail: 'Transfer to Habarana, climb Sigiriya Rock Fortress, visit Dambulla Cave Temple and Polonnaruwa ancient city.' },
        { day: 'Day 3-4', title: 'Sacred Kandy & Spice Gardens', detail: 'Visit Matale spice garden, Temple of the Tooth Relic, Royal Botanical Gardens, and enjoy a cultural dance show.' },
        { day: 'Day 5-6', title: 'Nuwara Eliya Tea Country & Scenic Train to Ella', detail: 'Explore tea factories, Ramboda falls, Gregory lake, and take the world-famous scenic train to Ella.' },
        { day: 'Day 7-8', title: 'Yala Safari & Mirissa Beaches', detail: '4x4 safari in Yala National Park for wild leopards, then relax at Mirissa beach and Coconut Tree Hill.' },
        { day: 'Day 9-10', title: 'Galle Dutch Fort & Departure', detail: 'Walk Galle Dutch Fort ramparts, turtle hatchery, Madu river boat safari, and Colombo airport transfer.' }
      ],
      included: [
        'Airport pickup and drop-off',
        'Private AC vehicle with driver-guide',
        '9 nights hotel accommodation with breakfast',
        'Scenic train tickets to Ella',
        'Yala safari jeep rental'
      ],
      notIncluded: [
        'International flights',
        'Visa fees',
        'Personal expenses',
        'Tips and gratuities'
      ],
      highlights: [
        'Sigiriya Lion Rock Fortress climb',
        'Dambulla Cave Temple',
        'Temple of the Tooth in Kandy',
        'Scenic train journey through tea estates',
        'Yala National Park 4x4 safari',
        'Galle Fort & coastal relaxation'
      ],
      importantInfo: [
        'Customizations available upon request',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        safariImg,
        sigiriya1Img,
        kandy1Img,
        ellaImg
      ]
    },

    {
      id: 'dozen-day-discover-12d11n',
      title: '12 Days - 11 Nights Dozen Day Discover Tour',
      category: 'round-tours',
      duration: '12 Days / 11 Nights',
      badgeDuration: '12D/11N',
      price: 1015,
      rating: 4.98,
      reviewsCount: 195,
      packageType: 'Mountain & Beach',
      difficulty: 'Moderate',
      bestTime: 'December to April',
      travelers: '2-12 Travelers',
       image: sigiriya6Img,
      overview: 'This 12-day tour offers a complete journey through Sri Lanka\'s cultural, historical, and natural highlights. Guests will explore Colombo, Galle, Yala National Park, Ella, Nuwara Eliya, Kandy, Sigiriya, Polonnaruwa, and Anuradhapura. Enjoy scenic train rides, wildlife safaris, ancient temples, sacred sites, and traditional village experiences. Ideal for travelers seeking adventure, cultural immersion, and relaxation.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival → Colombo', detail: 'Arrive at Bandaranaike International Airport and meet our representative. Transfer to your hotel in Colombo. Relax and enjoy the evening. Overnight stay in Colombo.' },
        { day: 'Day 2', title: 'Colombo → Galle', detail: 'Visit Gangaramaya Temple and Kelaniya Temple in Colombo. Take a boat ride on Madu River in Balapitiya and explore the Sea Turtle Hatchery in Galle. Overnight stay in Galle.' },
        { day: 'Day 3', title: 'Galle → Yala', detail: 'Visit the historic Galle Fort before heading to Yala National Park. Enjoy an exciting wildlife safari in Yala, home to elephants, leopards, and other wildlife. Overnight stay near Yala.' },
        { day: 'Day 4', title: 'Yala → Ella', detail: 'Visit Ravana Falls, the breathtaking Nine Arch Bridge, and climb Little Adam\'s Peak for stunning views of tea plantations. Overnight stay in Ella.' },
        { day: 'Day 5', title: 'Ella → Nuwara Eliya (Train Ride)', detail: 'Take the scenic train journey from Ella to Nuwara Eliya, enjoying lush green tea estates and mountains. Visit Gregory Lake, Nuwara Eliya Post Office, and Sita Amman Temple. Overnight stay in Nuwara Eliya.' },
        { day: 'Day 6', title: 'Nuwara Eliya → Ramboda → Kandy', detail: 'Travel to Kandy, stopping at Ramboda Falls and Damro Labookelle Tea Centre and Tea Garden. Explore Peradeniya Royal Botanical Gardens. Overnight stay in Kandy.' },
        { day: 'Day 7', title: 'Kandy City Tour', detail: 'Visit the Temple of the Tooth Relic, Kandy Lake, Bahirawakanda Temple, Kandy viewpoint, local markets, National Gems & Gemmological Museum, and enjoy a Kandy Cultural Dance Show. Overnight stay in Kandy.' },
        { day: 'Day 8', title: 'Kandy → Matale → Dambulla → Sigiriya', detail: 'Stop at Matale Hindu Temple and Spice Garden. Visit Dambulla Cave Temple and climb Sigiriya Rock Fortress. Overnight stay in Sigiriya.' },
        { day: 'Day 9', title: 'Sigiriya → Polonnaruwa → Minneriya → Sigiriya', detail: 'Tour the ancient city of Polonnaruwa, exploring ruins and royal sites. Continue to Minneriya National Park for a wildlife safari. Visit Hiriwadunna Village for a cultural experience. Overnight stay in Sigiriya.' },
        { day: 'Day 10', title: 'Sigiriya → Anuradhapura', detail: 'Travel to Anuradhapura and explore the ancient city with its iconic stupas and sacred landmarks. Overnight stay in Anuradhapura.' },
        { day: 'Day 11', title: 'Anuradhapura → Mihintale → Anuradhapura', detail: 'Visit Mihintale, the sacred Buddhist site where Buddhism was introduced in Sri Lanka. Explore Anuradhapura\'s holy sites including Jaya Sri Maha Bodhiya, Ruwanwelisaya, Thuparamaya, Lovamahapaya, Abhayagiri Dagaba, Jetavanaramaya, Mirisaveti Stupa, and Lankarama. Overnight stay in Anuradhapura.' },
        { day: 'Day 12', title: 'Anuradhapura → Colombo Airport', detail: 'After breakfast, check out from the hotel and transfer to Bandaranaike International Airport for departure, taking beautiful memories of Sri Lanka with you.' }
      ],
      included: [
        '12 nights accommodation',
        'Daily breakfast',
        'All transfers',
        'Travel insurance',
        'Entrance fees',
        'Whale watching tour',
        'Guide services'
      ],
      notIncluded: [
        'International flights',
        'Lunch and dinner',
        'Optional activities',
        'Personal expenses'
      ],
      highlights: [
        'Explore the ancient ruins of Anuradhapura Ancient City',
        'Discover the historic kingdom of Polonnaruwa Ancient City',
        'Enjoy a thrilling elephant safari at Minneriya National Park',
        'Climb the world-famous Sigiriya Rock Fortress for breathtaking views',
        'Visit the sacred Dambulla Cave Temple with stunning cave paintings',
        'Experience the spiritual atmosphere at the Temple of the Tooth Relic in Kandy',
        'Walk through the beautiful Peradeniya Royal Botanical Garden',
        'Relax by the scenic waters of Gregory Lake in Nuwara Eliya',
        'Enjoy the unforgettable Nanu Oya to Ella train ride through tea country',
        'Take photos at the iconic Nine Arch Bridge in Ella',
        'Capture amazing views from Coconut Tree Hill in Mirissa',
        'Join a memorable whale watching tour in Mirissa',
        'Explore the colonial charm of the historic Galle Fort'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        mirissaImg,
        sigiriya1Img,
        nineArchImg,
        ellaImg
      ]
    },

    {
      id: 'eastern-coast-exploration-11d10n',
      title: 'Eastern Coast Exploration - 2 Packages in 1',
      category: 'round-tours',
      duration: '11 Days / 10 Nights',
      badgeDuration: '11D/10N',
      price: 920,
      rating: 4.94,
      reviewsCount: 152,
      packageType: 'Beach & Culture Combo',
      difficulty: 'Easy',
      bestTime: 'May to September',
      travelers: '2-12 Travelers',
      image: eastCoastImg,
      overview: 'Combine the best of cultural heritage and pristine eastern coast beaches in one amazing 11-day package! Explore Pasikuda, Trincomalee, Sigiriya, Kandy, and Colombo.',
      itinerary: [
        { day: 'Day 1-3', title: 'Arrival & Pasikuda White Sand Beaches', detail: 'Relax at Pasikuda bay, enjoy water sports, coral reef diving, and serene beach resorts.' },
        { day: 'Day 4-5', title: 'Trincomalee Coastal & Koneswaram Temple', detail: 'Visit Thirukoneswaram Temple, Fort Frederick, Nilaveli beach, and Pigeon Island snorkeling.' },
        { day: 'Day 6-8', title: 'Cultural Triangle & Sigiriya Rock', detail: 'Climb Sigiriya Lion Rock, explore Dambulla Golden Cave Temple, and visit Matale spice garden.' },
        { day: 'Day 9-11', title: 'Hill Country Kandy & Colombo Airport', detail: 'Temple of the Tooth Relic, Royal Botanical Gardens, Colombo city sightseeing, and departure.' }
      ],
      included: [
        'Airport pickup and drop-off',
        '10 nights luxury beach resort & hotel stay',
        'Daily breakfast and dinner',
        'Private AC vehicle with driver-guide',
        'Pigeon island boat trip permits'
      ],
      notIncluded: [
        'International flights',
        'Visa charges',
        'Personal drinks & tips'
      ],
      highlights: [
        'Pristine Pasikuda white sand beaches',
        'Pigeon Island snorkeling in Trincomalee',
        'Thirukoneswaram Shiva Temple on Konesar Malai',
        'Sigiriya Lion Rock Fortress climb',
        'Temple of the Tooth in Kandy'
      ],
      importantInfo: [
        'Customizations available upon request',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        ellaImg,
        sigiriya1Img,
        kandy1Img,
        mirissaImg
      ]
    },

    {
      id: 'fortnight-expedition-14d13n',
      title: '14 Days - 13 Nights Fortnight Expedition',
      category: 'round-tours',
      duration: '14 Days / 13 Nights',
      badgeDuration: '14D/13N',
      price: 1200,
      rating: 4.99,
      reviewsCount: 220,
      packageType: 'Luxury & Premium',
      difficulty: 'Easy',
      bestTime: 'November to April',
      travelers: '2-12 Travelers',
      image: img18,
      overview: 'Experience the best of Sri Lanka in one unforgettable journey with Ceylon Heaven Tours. This 14-day expedition blends culture, history, wildlife, hill country landscapes, and beach relaxation. From Negombo\'s coastal charm and Anuradhapura\'s sacred ancient sites to the scenic train ride into Ella, thrilling Yala safari, whale watching in Mirissa, and relaxing river adventures in Bentota—this tour is designed for travelers who want a complete Sri Lankan experience in one package.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Negombo Relaxation', detail: 'Meet our representative at Bandaranaike International Airport and transfer to Negombo. Check into your hotel and enjoy a peaceful evening by the beach.' },
        { day: 'Day 2', title: 'Negombo City Sightseeing', detail: 'Explore Negombo\'s fishing village, visit the Dutch Fort and Dutch Clock Tower, then relax at Negombo Beach with optional water activities.' },
        { day: 'Day 3', title: 'Negombo to Anuradhapura Sacred Tour', detail: 'Travel to Anuradhapura with visits to Mihintale and the sacred Atamasthana sites including Sri Maha Bodhiya and Ruwanwelisaya.' },
        { day: 'Day 4', title: 'Polonnaruwa & Minneriya Safari Adventure', detail: 'Visit the ancient ruins of Polonnaruwa, then enjoy an exciting Minneriya National Park safari famous for wild elephants.' },
        { day: 'Day 5', title: 'Sigiriya Rock Fortress & Kandy Transfer', detail: 'Climb the iconic Sigiriya Rock Fortress and visit Dambulla Cave Temple on the way to Kandy with stops at spice gardens and Matale Hindu Temple.' },
        { day: 'Day 6', title: 'Kandy City Cultural Experience', detail: 'Discover Kandy highlights including Temple of the Tooth Relic, Kandy Lake, viewpoints, gem museum, tea factory, and cultural dance show.' },
        { day: 'Day 7', title: 'Pinnawala Elephant Orphanage Day Trip', detail: 'Visit Pinnawala Elephant Orphanage and explore Embekka Devalaya and Gadaladenyia Temple before returning to Kandy.' },
        { day: 'Day 8', title: 'Tea Country to Adam\'s Peak', detail: 'Stop at Damro Tea Estate for a tea tour and tasting, then transfer to Adam\'s Peak area for a spiritual and scenic mountain experience.' },
        { day: 'Day 9', title: 'Adam\'s Peak to Nuwara Eliya', detail: 'Travel to Nuwara Eliya with photo stops at St. Clair\'s Falls and Devon Falls while enjoying hill country scenery.' },
        { day: 'Day 10', title: 'Nuwara Eliya Tour & Scenic Train to Ella', detail: 'Visit Gregory Lake and Nuwara Eliya Post Office, then take the famous train ride from Nanu Oya to Ella through tea estates and mountains.' },
        { day: 'Day 11', title: 'Ella Highlights & Yala Safari Transfer', detail: 'Explore Little Adam\'s Peak, Nine Arch Bridge, and Ravana Falls before heading to Yala for an exciting wildlife safari experience.' },
        { day: 'Day 12', title: 'Yala to Mirissa Beach Escape', detail: 'Travel to Mirissa and visit Coconut Tree Hill for stunning ocean views. Relax and enjoy the beach atmosphere.' },
        { day: 'Day 13', title: 'Whale Watching, Galle Fort & Bentota River Safari', detail: 'Enjoy whale watching in the morning, explore Galle Fort and Turtle Hatchery, then experience a Madu River boat safari before reaching Bentota.' },
        { day: 'Day 14', title: 'Departure Day', detail: 'After breakfast, transfer to the airport for your departure, ending your 14-day Sri Lanka expedition with unforgettable memories.' }
      ],
      included: [
        'Airport pickup and drop-off',
        'Travel insurance',
        '13 nights accommodation in selected hotels',
        'Daily breakfast (as per hotel plan)',
        'Private air-conditioned vehicle for the entire tour',
        'Professional driver-guide service',
        'City tours and sightseeing as mentioned in the itinerary',
        'Scenic train journey (Nanu Oya to Ella)',
        'Wildlife safari experience (Yala National Park)',
        'Minneriya National Park safari experience',
        'Whale watching tour (Mirissa)',
        'Madu River boat safari',
        'All government taxes and service charges'
      ],
      notIncluded: [
        'International flight tickets',
        'Sri Lanka visa fees',
        'Lunch and dinner (unless specified by the hotel package)',
        'Entrance tickets to attractions (unless confirmed as included)',
        'Personal expenses (shopping, laundry, minibar, etc.)',
        'Tips and gratuities for driver/guide',
        'Optional activities and water sports not mentioned in inclusions'
      ],
      highlights: [
        'Airport pickup and smooth tour start in Negombo',
        'Negombo fishing village experience and beach relaxation',
        'Sacred city exploration in Anuradhapura and Mihintale',
        'Ancient Polonnaruwa ruins and heritage discoveries',
        'Minneriya National Park safari with wild elephants',
        'Climb the world-famous Sigiriya Rock Fortress',
        'Visit Dambulla Golden Cave Temple (UNESCO site)',
        'Kandy cultural city tour and traditional dance show',
        'Pinnawala Elephant Orphanage visit',
        'Tea plantation visit and tasting at Damro Tea Center',
        'Spiritual and scenic adventure at Adam\'s Peak',
        'Waterfalls tour including Devon Falls and St. Clair\'s Falls',
        'World-famous scenic train ride to Ella',
        'Ella attractions: Little Adam\'s Peak, Nine Arch Bridge, Ravana Falls',
        'Yala National Park safari (leopards, elephants, birds)',
        'Mirissa Coconut Tree Hill and beach vibes',
        'Whale watching experience in Mirissa',
        'Galle Fort tour and turtle hatchery visit',
        'Madu River boat safari through mangroves and islands',
        'Bentota coastal relaxation'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support'
      ],
      gallery: [
        nineArchImg,
        sigiriya1Img,
        safariImg,
        ellaImg
      ]
    },

    {
      id: 'seaside-serenity-10d',
      title: 'Seaside Serenity Beach Tour - 10 days',
      category: 'round-tours',
      duration: '10 Days / 9 Nights',
      badgeDuration: '10D/9N',
      price: 890,
      rating: 4.93,
      reviewsCount: 174,
      packageType: 'Beach & Nature',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      travelers: '2-12 Travelers',
       image: img5,
      overview: 'Enjoy the perfect mix of culture, hill-country scenery, wildlife adventure, and beach relaxation with the Seaside Serenity Beach Tour (10 Days) by Ceylon Heaven Tours. Begin your journey in the cultural heart of Kandy, experience the world-famous scenic train ride to Ella, enjoy a thrilling Yala National Park safari, and unwind on the stunning southern beaches of Tangalle and Weligama. This tour is ideal for travelers looking for nature, coastal beauty, and authentic Sri Lankan experiences in one unforgettable trip.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Transfer to Kandy', detail: 'Arrive at Bandaranaike International Airport and meet our representative. Travel to Kandy with a visit to Pinnawala Elephant Orphanage before checking into your hotel.' },
        { day: 'Day 2', title: 'Kandy City Tour', detail: 'Explore Kandy\'s top attractions including Temple of the Tooth Relic, Bahirawakanda Buddha Statue, Kandy viewpoint, local market, gem museum, cultural dance show, and shopping center.' },
        { day: 'Day 3', title: 'Scenic Highlands & Train Ride to Ella', detail: 'Travel through the hill country visiting Ramboda Falls, Damro Tea Centre, Gregory Lake, and Nuwara Eliya Post Office before boarding the scenic train from Nanu Oya to Ella.' },
        { day: 'Day 4', title: 'Ella Highlights & Yala Safari', detail: 'Visit Nine Arch Bridge, hike Little Adam\'s Peak, and stop at Ravana Falls before heading to Yala National Park for an exciting wildlife safari.' },
        { day: 'Day 5', title: 'Transfer to Tangalle & Beach Relaxation', detail: 'Travel to Tangalle and enjoy a relaxing evening on one of Sri Lanka\'s most peaceful beach destinations.' },
        { day: 'Day 6', title: 'Tangalle Beach Day', detail: 'Enjoy a full day at leisure in Tangalle with optional visits to nearby beaches such as Hiriketiya Beach, Rekawa Beach, and Silent Beach.' },
        { day: 'Day 7', title: 'Transfer to Weligama', detail: 'Head to Weligama, a popular coastal town known for surfing, swimming, snorkeling, and relaxing beach vibes.' },
        { day: 'Day 8', title: 'Weligama Beach & Activities', detail: 'Enjoy Weligama Beach with optional activities such as surfing lessons, snorkeling, visiting Jungle Beach, or an Ayurvedic wellness session at Good Spa.' },
        { day: 'Day 9', title: 'Weligama Leisure & Whale Watching (Optional)', detail: 'Spend another day enjoying the beach or choose an optional whale and dolphin watching experience (best season October to April).' },
        { day: 'Day 10', title: 'Departure', detail: 'After breakfast, transfer to the airport for your departure, ending your Seaside Serenity Beach Tour with unforgettable memories.' }
      ],
      included: [
        'Airport pickup and drop-off',
        'Travel insurance',
        '9 nights accommodation in selected hotels',
        'Daily breakfast (as per hotel plan)',
        'Private air-conditioned vehicle for the full tour',
        'Professional driver-guide service',
        'All transfers and sightseeing as mentioned in the itinerary',
        'Scenic train tickets (Nanu Oya to Ella) - subject to availability',
        'Yala National Park safari jeep experience',
        'All government taxes and service charges'
      ],
      notIncluded: [
        'International flight tickets',
        'Sri Lanka visa fees',
        'Lunch and dinner (unless specified by hotel package)',
        'Entrance fees to attractions (unless confirmed as included)',
        'Personal expenses (shopping, laundry, minibar, etc.)',
        'Tips and gratuities for driver/guide',
        'Optional activities (surfing lessons, whale watching, spa treatments, water sports)'
      ],
      highlights: [
        'Pinnawala Elephant Orphanage visit',
        'Temple of the Tooth Relic in Kandy',
        'Scenic train ride from Nanu Oya to Ella',
        'Nine Arch Bridge & Little Adam\'s Peak in Ella',
        'Yala National Park wild safari',
        'Relaxing beach days in Tangalle and Weligama',
        'Surfing, snorkeling, and coastal relaxation'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support'
      ],
      gallery: [
        ellaImg,
        sigiriya1Img,
        nineArchImg,
        mirissaImg
      ]
    },

    {
      id: 'week-long-adventure-8d7n',
      title: '8 Days – 7 Nights Week Long Adventure',
      category: 'round-tours',
      duration: '8 Days / 7 Nights',
      badgeDuration: '8D/7N',
      price: 665,
      rating: 4.91,
      reviewsCount: 155,
      packageType: 'Adventure & Nature',
      difficulty: 'Easy to Moderate',
      bestTime: 'Year-round',
      travelers: '2-12 Travelers',
      image: safariImg,
      overview: 'The 8 Days – 7 Nights Week Long Adventure by Ceylon Heaven Tours is a perfect blend of Sri Lanka\'s cultural heritage, hill-country beauty, scenic train rides, wildlife encounters, and beach relaxation. Starting from Kandy, the tour takes you through the iconic Sigiriya & Dambulla, the misty mountains of Nuwara Eliya and Ella, and the thrilling safari experience at Yala National Park. The journey ends with relaxing coastal experiences in Mirissa and Bentota, including whale watching, river safaris, and historic fort exploration—making it an ideal week-long getaway for adventure and sightseeing lovers.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Transfer to Kandy', detail: 'Arrive at Bandaranaike International Airport and meet our representative. Travel to Kandy with a visit to Pinnawala Elephant Orphanage before hotel check-in.' },
        { day: 'Day 2', title: 'Kandy to Sigiriya Day Tour', detail: 'Enjoy a full-day excursion to Sigiriya with visits to Matale Hindu Temple, Matale Spice Garden, Sigiriya Rock Fortress, and Dambulla Golden Cave Temple before returning to Kandy.' },
        { day: 'Day 3', title: 'Kandy to Nuwara Eliya', detail: 'Explore key attractions in Kandy including Temple of the Tooth Relic, Gem Museum, Kandy Lake, and Royal Botanical Gardens, then travel to Nuwara Eliya via Ramboda Falls and a tea factory visit.' },
        { day: 'Day 4', title: 'Nuwara Eliya to Ella (Train Experience)', detail: 'Visit Gregory Lake, Nuwara Eliya Post Office, and Seetha Amman Temple before taking the famous scenic train ride from Nanu Oya to Ella and checking into your hotel.' },
        { day: 'Day 5', title: 'Ella to Tissamaharama & Yala Safari', detail: 'Visit Nine Arch Bridge, hike Little Adam\'s Peak, and stop at Ravana Falls before heading to Yala National Park for an exciting wildlife safari and overnight stay in Tissamaharama.' },
        { day: 'Day 6', title: 'Tissamaharama to Mirissa', detail: 'Drive to Mirissa and enjoy coastal sightseeing including Coconut Tree Hill, local fish market visits, and free time to explore the beach town.' },
        { day: 'Day 7', title: 'Mirissa Whale Watching & Bentota Exploration', detail: 'Start with a whale watching cruise in Mirissa, then travel to Bentota with stops at Galle Dutch Fort, Turtle Hatchery, Madu River boat safari, and scenic mangrove experiences.' },
        { day: 'Day 8', title: 'Departure (Colombo / Airport Drop-off)', detail: 'After breakfast, transfer to Colombo or Bandaranaike International Airport to end your 8-day Sri Lanka adventure with wonderful memories.' }
      ],
      included: [
        'Airport pickup and drop-off (Colombo or airport transfer on departure day)',
        'Travel insurance',
        '7 nights accommodation in selected hotels',
        'Daily breakfast (as per hotel plan)',
        'Private air-conditioned vehicle for the full tour',
        'Professional driver-guide service',
        'All sightseeing and transfers mentioned in the itinerary',
        'Scenic train ride tickets (Nanu Oya to Ella) - subject to availability',
        'Yala National Park safari jeep experience',
        'All government taxes and service charges'
      ],
      notIncluded: [
        'International flight tickets',
        'Sri Lanka visa fees',
        'Lunch and dinner (unless mentioned in hotel meal plan)',
        'Entrance fees to attractions (unless confirmed as included)',
        'Whale watching cruise fees (if not included in your selected package plan)',
        'Personal expenses (shopping, laundry, minibar, etc.)',
        'Tips and gratuities for driver/guide',
        'Optional activities and water sports not listed as included'
      ],
      highlights: [
        'Pinnawala Elephant Orphanage',
        'Sigiriya Rock & Dambulla Cave Temple',
        'Scenic train ride Nanu Oya to Ella',
        'Yala Wildlife Safari',
        'Mirissa Whale Watching & Coconut Tree Hill',
        'Galle Dutch Fort & Madu River Safari'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support'
      ],
      gallery: [
        safariImg,
        kandy1Img,
        mirissaImg,
        ellaImg
      ]
    },

    {
      id: 'week-of-wanderlust-7d6n',
      title: '7 Days – 6 Nights Week of Wanderlust',
      category: 'round-tours',
      duration: '7 Days / 6 Nights',
      badgeDuration: '7D/6N',
      price: 570,
      rating: 4.90,
      reviewsCount: 160,
      packageType: 'Luxury & Premium',
      difficulty: 'Easy',
      bestTime: 'November to April',
      travelers: '2-12 Travelers',
      image: sigiriya1Img,
      overview: 'The 7 Days – 6 Nights Week of Wanderlust tour by Ceylon Heaven Tours is a perfect week-long escape covering Sri Lanka\'s most iconic cultural landmarks, hill-country landscapes, wildlife adventures, and golden beach experiences. Start your journey in the cultural capital Kandy, enjoy breathtaking mountain views and the famous scenic train-region charm in Ella, experience an unforgettable Yala National Park safari, and relax along the southern coastline in Mirissa and Bentota. This itinerary is ideal for travelers who want a balanced mix of sightseeing, nature, and beach relaxation within one week.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Transfer to Kandy', detail: 'Arrive at Bandaranaike International Airport and meet our representative. Travel to Kandy with a visit to Pinnawala Elephant Orphanage, then check in and relax overnight.' },
        { day: 'Day 2', title: 'Kandy City Tour', detail: 'Discover Kandy\'s cultural highlights including Temple of the Tooth Relic, Royal Botanical Gardens, Bahirawakanda Buddha statue, Gem Museum, Spice Garden, Kandy viewpoint, and a cultural dance show.' },
        { day: 'Day 3', title: 'Kandy to Ella via Nuwara Eliya', detail: 'Travel through Sri Lanka\'s hill country visiting Damro Tea Factory, Ramboda Waterfall, Ramboda viewpoint, Nuwara Eliya Post Office, Gregory Lake, and Seetha Eliya Temple before arriving in Ella.' },
        { day: 'Day 4', title: 'Ella Exploration & Transfer to Yala', detail: 'Start with Little Adam\'s Peak hike, visit Nine Arches Bridge and Ravana Waterfall, then travel to Yala and check in for your wildlife adventure.' },
        { day: 'Day 5', title: 'Yala Safari & Drive to Mirissa', detail: 'Enjoy an early morning safari in Yala National Park to spot wildlife, then travel to Mirissa and visit Coconut Tree Hill for stunning coastal views.' },
        { day: 'Day 6', title: 'Whale Watching & Bentota Experiences', detail: 'Go on a whale watching tour in Mirissa (seasonal), then drive to Bentota for a Madu River safari through mangroves and a visit to a Turtle Hatchery.' },
        { day: 'Day 7', title: 'Bentota to Airport (Departure)', detail: 'Enjoy your final breakfast in Bentota, then transfer to Bandaranaike International Airport for departure with unforgettable memories.' }
      ],
      included: [
        'Airport pickup and drop-off',
        '6 nights accommodation in selected hotels',
        'Travel insurance',
        'Daily breakfast (as per hotel plan)',
        'Private air-conditioned vehicle for the full tour',
        'Professional driver-guide service',
        'All transfers and sightseeing as mentioned in the itinerary',
        'Yala National Park safari jeep experience',
        'All government taxes and service charges'
      ],
      notIncluded: [
        'International flight tickets',
        'Sri Lanka visa fees',
        'Lunch and dinner (unless mentioned in the hotel plan)',
        'Entrance fees to attractions (unless confirmed as included)',
        'Whale watching tour fees (if not included in your selected package plan)',
        'Personal expenses (shopping, laundry, minibar, etc.)',
        'Tips and gratuities for driver/guide',
        'Optional activities and water sports not listed as included'
      ],
      highlights: [
        'Warm airport welcome and smooth private transfers',
        'Visit Pinnawala Elephant Orphanage and watch elephant feeding and bathing',
        'Explore the sacred Temple of the Tooth Relic in Kandy (UNESCO heritage)',
        'Walk through Royal Botanical Gardens in Peradeniya with exotic plant collections',
        'Enjoy panoramic views from Bahirawakanda Buddha statue and Kandy viewpoint',
        'Learn about Sri Lanka\'s gem heritage at the Gem and Gemological Museum',
        'Spice Garden experience with insights into Sri Lankan spices and remedies',
        'Hill-country adventure with tea estates, waterfalls, and viewpoints',
        'Visit Gregory Lake and colonial-style Nuwara Eliya Post Office',
        'Seetha Eliya Temple visit (important Ramayana heritage site)',
        'Ella highlights: Little Adam\'s Peak, Nine Arches Bridge, Ravana Waterfall',
        'Wildlife safari in Yala National Park (leopards, elephants, birds, and more)',
        'Relaxing beach time in Mirissa with Coconut Tree Hill views',
        'Whale and dolphin watching experience in Mirissa (seasonal best Nov–Apr)',
        'Madu River boat safari through mangroves and island ecosystems',
        'Visit a Turtle Hatchery supporting sea turtle conservation'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support'
      ],
      gallery: [
        sigiriya1Img,
        kandy1Img,
        mirissaImg,
        nineArchImg
      ]
    }
  ],

  'day-tours': [
    {
      id: 'colombo-city-tour-day',
      title: 'COLOMBO CITY TOUR',
      category: 'day-tours',
      duration: 'Full Day Tour',
      badgeDuration: '1 Day',
      price: 30,
      rating: 4.90,
      reviewsCount: 285,
      packageType: 'City Day Tour',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      travelers: '2-12 Travelers',
      image: colombo_dayTourImg,
      overview: 'The Colombo City Tour is a perfect introduction to Sri Lanka\'s vibrant commercial capital, combining heritage landmarks, cultural sites, markets, scenic lakeside views, and modern attractions. This tour takes you through Colombo\'s most iconic locations including temples, museums, colonial buildings, busy local markets, and the city\'s newest highlights like the Lotus Tower. Ideal for first-time visitors who want to explore Colombo in a single day.',
      itinerary: [
        { day: 'Morning', title: 'Galle Face Green', detail: 'A sprawling urban park along Colombo\'s coast, ideal for a leisurely stroll, kite flying, picnicking, and tasting local street food.' },
        { day: 'Morning', title: 'Gangaramaya Temple', detail: 'A significant Buddhist temple combining modern and traditional architecture, with a museum housing religious artifacts and ancient manuscripts.' },
        { day: 'Morning', title: 'Independence Memorial Hall', detail: 'An iconic monument commemorating Sri Lanka\'s independence, featuring an open-air pavilion, statues, and a serene surrounding park.' },
        { day: 'Morning', title: 'Colombo National Museum', detail: 'The largest and oldest museum in Sri Lanka, displaying royal regalia, ancient sculptures, and traditional art in a grand colonial building.' },
        { day: 'Morning', title: 'Pettah Market', detail: 'A bustling bazaar with narrow streets, offering spices, fresh produce, textiles, electronics, street food, and traditional herbal medicine shops.' },
        { day: 'Morning', title: 'Beira Lake', detail: 'A peaceful lake in the heart of Colombo with a serene temple on a small island, ideal for reflection, boat rides, and leisurely walks.' },
        { day: 'Morning', title: 'Old Parliament Building', detail: 'A neo-baroque architectural landmark in the Fort area, showcasing Sri Lanka\'s colonial-era history and grand design.' },
        { day: 'Morning', title: 'Sri Kailawasanathan Kovil', detail: 'A vibrant Hindu temple dedicated to Lord Shiva, adorned with intricate carvings and colorful sculptures depicting deities and mythology.' },
        { day: 'Afternoon', title: 'Colombo Harbour & Vihara Mahadevi Park', detail: 'One of South Asia\'s busiest ports, followed by Colombo\'s largest park featuring lawns, walking paths, and fountains.' },
        { day: 'Afternoon', title: 'Colombo Fort & Nelum Pokuna Theatre', detail: 'Historic colonial area with shops and cafes, plus the modern lotus-shaped performing arts venue.' },
        { day: 'Evening', title: 'Lotus Tower', detail: 'The tallest structure in Sri Lanka, designed like a blooming lotus flower, with an observation deck and panoramic views of Colombo.' }
      ],
      included: [
        'Transportation in a comfortable, air-conditioned vehicle',
        'English-speaking chauffeur guide',
        'Refreshments during the tour'
      ],
      notIncluded: [
        'Personal expenses',
        'Gratuities (optional)',
        'Entrance tickets'
      ],
      highlights: [
        'Explore Galle Face Green & Gangaramaya Temple',
        'Independence Memorial Hall & National Museum',
        'Pettah Market & Beira Lake',
        'Lotus Tower panoramic observation deck',
        'Colombo Fort colonial architecture'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support'
      ],
      gallery: [
        kandy1Img,
        sigiriya1Img,
        mirissaImg,
        nineArchImg
      ]
    },

    {
      id: 'kandy-city-tour-day',
      title: 'Kandy City Tour',
      category: 'day-tours',
      duration: 'Full Day Tour',
      badgeDuration: '1 Day',
      price: 25,
      rating: 4.88,
      reviewsCount: 310,
      packageType: 'Cultural Day Trip',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      travelers: '2-12 Travelers',
      image: img4,
      overview: 'Explore the cultural heart of Sri Lanka with this Kandy City Tour. Visit historic temples, serene lakes, lush botanical gardens, and experience vibrant Kandyan dance performances. This tour combines natural beauty, spiritual heritage, and cultural immersion in a single day.',
      itinerary: [
        { day: 'Morning', title: 'Royal Botanical Gardens', detail: 'Explore the expansive gardens with Orchid House, Great Lawn, Palm Avenues, Spice Garden, and Medicinal Garden. Best visited early to avoid crowds.' },
        { day: 'Morning', title: 'Temple of the Tooth Relic (Sri Dalada Maligawa)', detail: 'Visit the sacred temple housing the Buddha\'s tooth relic, admire Kandyan architecture, and explore the museum. Modest clothing required.' },
        { day: 'Late Morning', title: 'Kandy Lake & Spice Garden', detail: 'Take a leisurely stroll around the lake, enjoy bird watching, followed by a guided tour of aromatic spices and herbal products.' },
        { day: 'Afternoon', title: 'Bahirawakanda Temple & Kandy War Cemetery', detail: 'Visit the 88-foot-tall Buddha statue with panoramic city views, and pay respects at the Commonwealth WWII cemetery.' },
        { day: 'Afternoon', title: 'Gem Museum & Woodcraft Workshop', detail: 'View precious sapphires and learn about traditional wooden craft making from skilled artisans.' },
        { day: 'Evening', title: 'Kandy View Point & Cultural Dance Show', detail: 'Capture sunset views of Kandy city, followed by Kandyan dance, drumming, and fire-walking performances.' }
      ],
      included: [
        'Transportation in a comfortable, air-conditioned vehicle',
        'English-speaking chauffeur guide',
        'Refreshments during the tour'
      ],
      notIncluded: [
        'Personal expenses',
        'Gratuities (optional)',
        'Entrance tickets'
      ],
      highlights: [
        'Royal Botanical Gardens in Peradeniya',
        'Sacred Temple of the Tooth Relic',
        'Bahirawakanda Giant Buddha Statue',
        'Kandy View Point & Lake',
        'Traditional Kandyan Dance & Fire-walking show'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support'
      ],
      gallery: [
        sigiriya1Img,
        kandy1Img,
        mirissaImg,
        ellaImg
      ]
    },

    {
      id: 'nuwaraeliya-day-tour',
      title: 'NUWERAELIYA DAY TOUR',
      category: 'day-tours',
      duration: 'Full Day Tour',
      badgeDuration: '1 Day',
      price: 65,
      rating: 4.93,
      reviewsCount: 240,
      packageType: 'Mountain Day Tour',
      difficulty: 'Moderate',
      bestTime: 'December to March',
      travelers: '2-12 Travelers',
      image: img9,
      overview: 'Embark on a scenic day tour from Kandy to Nuwara Eliya, exploring Sri Lanka\'s lush highlands. Experience tea plantations, breathtaking waterfalls, Hindu temples, colonial architecture, and serene lakes, all while immersing yourself in the natural and cultural beauty of the region. This tour offers a perfect blend of history, spirituality, and nature in a single day.',
      itinerary: [
        { day: 'Morning', title: 'Tea Factory Visit & Ramboda View Point', detail: 'Visit Mackwoods Labookelle Tea Centre or Pedro Tea Estate, enjoy tea tasting, and stop at Ramboda View Point for panoramic hill views.' },
        { day: 'Late Morning', title: 'Ramboda Hanuman Temple & Ramboda Falls', detail: 'Explore the vibrant Hanuman Temple and admire multi-tiered Ramboda Falls with a short walk to the base.' },
        { day: 'Afternoon', title: 'Nuwara Eliya Post Office & Gregory Lake', detail: 'Visit historic British colonial post office and enjoy Gregory Lake with boating and strolling opportunities.' },
        { day: 'Late Afternoon', title: 'Seetha Amman Temple & Return to Kandy', detail: 'Visit Seetha Amman Temple linked to the Ramayana epic, then enjoy a scenic drive back to Kandy.' }
      ],
      included: [
        'Transportation in a comfortable, air-conditioned vehicle',
        'English-speaking chauffeur guide',
        'Refreshments during the tour',
        'All sightseeing and guided stops as per itinerary',
        'Tea tasting at the Tea Factory'
      ],
      notIncluded: [
        'Personal expenses',
        'Gratuities (optional)',
        'Entrance fees to temples, viewpoints, and other attractions unless specified',
        'Lunch and additional meals'
      ],
      highlights: [
        'Visit a working Tea Factory and taste fresh Ceylon tea',
        'Panoramic views from Ramboda View Point',
        'Explore Ramboda Hanuman Temple, a significant Hindu site',
        'Admire the multi-tiered Ramboda Falls',
        'Discover the historic Nuwara Eliya Post Office',
        'Relax and enjoy Gregory Lake with boating opportunities',
        'Visit Seetha Amman Temple, linked to the Ramayana epic',
        'Scenic drive back to Kandy through Sri Lanka\'s highlands'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        nineArchImg,
        sigiriya1Img,
        kandy1Img,
        mirissaImg
      ]
    },

    {
      id: 'sigiriya-day-tour-from-kandy',
      title: 'SIGIRIYA DAY TOUR FROM KANDY',
      category: 'day-tours',
      duration: 'Full Day Tour',
      badgeDuration: '1 Day',
      price: 70,
      rating: 4.95,
      reviewsCount: 320,
      packageType: 'Coastal Day Tour',
      difficulty: 'Easy',
      bestTime: 'November to April',
      travelers: '2-12 Travelers',
      image: img12,
      overview: 'Embark on a full-day excursion from Kandy to explore the cultural and natural wonders of central Sri Lanka. Visit the ancient Sigiriya Rock Fortress, Dambulla Rock Cave Temples, a traditional spice garden, and experience rural village life. Discover history, religion, and local traditions in one enriching day.',
      itinerary: [
        { day: 'Morning', title: 'Departure & Matale Hindu Temple', detail: 'Depart from Kandy hotel, visit Sri Muthumariamman Temple to explore Dravidian architecture and intricate carvings.' },
        { day: 'Morning', title: 'Spice Garden & Dambulla Rock Cave Temple', detail: 'Tour local spice garden with herbal tea tasting, then explore UNESCO Dambulla Cave Temple with ancient Buddha statues.' },
        { day: 'Afternoon', title: 'Lunch Break & Sigiriya Rock Fortress', detail: 'Enjoy traditional Sri Lankan lunch, ascend Lion Rock fortress, see frescoes, Mirror Wall, and royal palace ruins.' },
        { day: 'Afternoon', title: 'Village Tour in Sigiriya & Return', detail: 'Experience bullock cart and lake boat rides, visit a local home for traditional snacks, then return to Kandy.' }
      ],
      included: [
        'Transportation in a comfortable, air-conditioned vehicle',
        'English-speaking chauffeur guide',
        'Refreshments during the tour'
      ],
      notIncluded: [
        'Personal expenses',
        'Gratuities (optional)',
        'Entrance tickets'
      ],
      highlights: [
        'Visit Matale Hindu Temple with its vibrant Dravidian architecture',
        'Tour a traditional Spice Garden and taste fresh herbal tea',
        'Explore Dambulla Rock Cave Temple, a UNESCO World Heritage Site',
        'Climb Sigiriya Rock Fortress and see ancient frescoes and royal palace ruins',
        'Panoramic views of central Sri Lanka from Sigiriya summit',
        'Experience village life with bullock cart and boat rides',
        'Enjoy a traditional Sri Lankan snack in a local home'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        sigiriya1Img,
        kandy1Img,
        mirissaImg,
        nineArchImg
      ]
    },

    {
      id: 'galle-day-tour-itinerary',
      title: 'GALLE DAY TOUR ITERNARY',
      category: 'day-tours',
      duration: 'Full Day Tour',
      badgeDuration: '1 Day',
      price: 80,
      rating: 4.96,
      reviewsCount: 290,
      packageType: 'Cultural Day Tour',
      difficulty: 'Easy',
      bestTime: 'Year-round',
      travelers: '2-12 Travelers',
      image: galle_dayTourImg,
      overview: 'Explore the historic and scenic highlights of Galle on a full-day tour from Colombo. Visit the UNESCO World Heritage Galle Fort, enjoy a serene Madu River boat safari, and learn about sea turtle conservation at a local hatchery. Experience history, nature, and local culture all in one enriching day.',
      itinerary: [
        { day: 'Morning', title: 'Departure from Colombo & Galle Fort', detail: 'Early morning coastal drive from Colombo to historic UNESCO Galle Fort. Wander cobbled streets, visit Galle Lighthouse and Dutch Reformed Church.' },
        { day: 'Afternoon', title: 'Madu River Boat Safari & Turtle Hatchery', detail: '30-minute drive to Madu River for a motorboat safari through mangrove forests, followed by a visit to Kosgoda Turtle Hatchery.' },
        { day: 'Evening', title: 'Return to Colombo', detail: 'Travel back to Colombo in the evening, reflecting on the day\'s coastal experiences.' }
      ],
      included: [
        'Transportation in a comfortable, air-conditioned vehicle',
        'English-speaking chauffeur guide',
        'Lunch and refreshments during the tour'
      ],
      notIncluded: [
        'Personal expenses',
        'Gratuities (optional)',
        'Entrance fees to attractions'
      ],
      highlights: [
        'Visit the historic Galle Fort, a UNESCO World Heritage Site',
        'Admire colonial architecture, Galle Lighthouse, and Dutch Reformed Church',
        'Take a serene boat safari on the Madu River through mangrove forests',
        'Experience wildlife and learn about local ecosystems',
        'Explore a sea turtle hatchery and participate in hatchling release',
        'Enjoy scenic coastal views on the drive to and from Galle'
      ],
      importantInfo: [
        'Customizations available upon request',
        'Flexible payment options',
        '24/7 customer support',
        'Free cancellation up to 30 days'
      ],
      gallery: [
        mirissaImg,
        ellaImg,
        sigiriya1Img,
        kandy1Img
      ]
    }
  ]
};

// Export flattened PACKAGES array for quick search & modal lookups
export const PACKAGES = [
  ...PACKAGES_BY_CATEGORY['pocket-friendly'],
  ...PACKAGES_BY_CATEGORY['round-tours'],
  ...PACKAGES_BY_CATEGORY['day-tours']
];

export const DESTINATIONS = [
  {
    id: 'sigiriya',
    name: 'Sigiriya & Dambulla',
    country: 'Sri Lanka',
    category: 'Cultural Heritage',
    toursCount: '8 Packages',
    image: sigiriya1Img,
    tagline: 'Ancient UNESCO rock fortress, cave temples, and royal gardens.',
    highlights: ['Lion Rock Fortress', 'Golden Cave Temple', 'Village Safaris', 'Minneriya Elephant Gathering']
  },
  {
    id: 'kandy',
    name: 'Kandy & Nuwara Eliya',
    country: 'Sri Lanka',
    category: 'Mountain & Adventure',
    toursCount: '12 Packages',
    image: kandy1Img,
    tagline: 'Misty tea plantations, sacred Tooth Relic temple, and scenic mountain trains.',
    highlights: ['Temple of the Tooth', 'Scenic Blue Train Ride', 'Ceylon Tea Estates', 'Royal Botanical Gardens']
  },
  {
    id: 'ella',
    name: 'Ella & Nine Arch Bridge',
    country: 'Sri Lanka',
    category: 'Mountain & Adventure',
    toursCount: '10 Packages',
    image: nineArchImg,
    tagline: 'Iconic stone viaduct bridge, Little Adam’s Peak, and mountain waterfalls.',
    highlights: ['Nine Arch Bridge Walk', 'Little Adam’s Peak Hike', 'Ravana Waterfalls', 'Zip-lining & Cafes']
  },
  {
    id: 'yala',
    name: 'Yala & Udawalawe National Park',
    country: 'Sri Lanka',
    category: 'Wild Safaris',
    toursCount: '9 Packages',
    image: safariImg,
    tagline: 'Highest leopard density in the world, wild elephant herds, and sloth bears.',
    highlights: ['Leopard Game Safaris', 'Wild Elephant Herds', 'Bird Watching Lagoons', 'Campfire Luxury Glamping']
  },
  {
    id: 'galle',
    name: 'Galle Fort & Southern Coast',
    country: 'Sri Lanka',
    category: 'Beach & Tropical',
    toursCount: '15 Packages',
    image: mirissaImg,
    tagline: 'Preserved 17th century Dutch Fort, lighthouse, golden beaches, and stilt fishing.',
    highlights: ['Galle Dutch Fort Walk', 'Mirissa Whale Watching', 'Stilt Fishermen', 'Sunset Ocean Cafes']
  },
  {
    id: 'bentota',
    name: 'Bentota & Mirissa Beaches',
    country: 'Sri Lanka',
    category: 'Beach & Tropical',
    toursCount: '14 Packages',
    image: maduImg,
    tagline: 'Pristine golden sands, water sports, blue whale watching, and luxury resorts.',
    highlights: ['Blue Whale Safaris', 'Jet Skiing & Water Sports', 'Sea Turtle Hatcheries', 'Sunset Catamaran Cruises']
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Gaurang P',
    location: 'London, UK',
    date: 'May 25, 2025',
    rating: 5,
    avatar: img1,
    initials: 'GP',
    comment: 'I had the absolute pleasure of doing a six-day tour (West coast and South Sri Lanka) with Ceylon Heaven Tours in April 2025, guided by the wonderful Akeel – and what an unforgettable experience it was! From start to finish, the trip was seamless, inspiring, and deeply immersive. Akeel didn’t just take my wife and I to the popular must-see sites – though those were incredible – he also led us along offbeat routes that revealed the real Sri Lanka. We experienced the rich culture, sampled a variety of local cuisines (each more delicious than the last!), and truly felt the warmth and hospitality that this beautiful country is known for. Every day felt like a new adventure, full of surprises and authentic moments that went far beyond the surface-level tourism you sometimes get with big operators. Akeel\'s knowledge, passion, and genuine love for his country shone through in everything he did – he was more than a guide; he became a friend. If you\'re considering a trip to Sri Lanka and want a well priced and that unforgettable experience then choose Ceylon Heaven Tours as your tour operators. Thank you, Akeel for making this holiday for us a memorable one, that we’ll treasure forever! Gaurang and Surojeet'
  },
  {
    id: 2,
    name: 'Imtiaz Khadim',
    location: 'Abu Dhabi, United Arab Emirates',
    date: 'October 2, 2025',
    rating: 5,
    avatar: img2,
    initials: 'IK',
    comment: 'Our first trip to this beautiful country Sri Lanka got refreshingly even much better after everything was arranged by Ceylon Heaven Tour company so professionally and with full dedication. I highly recommend anyone who would like to visit Sri Lanka, please get in touch with them to try the best ever lifetime experience to visit this paradise on earth. This company is managed by Akeel who along with his cousin Shaan provide you their best services and ensure they are available for you for any inquiry throughout the trip. Thankfully they arranged for us the best selections of hotel which was liked by us, our family members, relatives and even friends in other countries who followed us throughout this journey. Added advantage you get from them is extra sensitive care for small kids, both Akeel and Shaan ensures that all little children with the family are handled with care, safety and complete love ❤️ We along with our kids surely got very attached to them during these 5 days of our remarkable trip 🤩 Highly recommend my friends, relatives, family members or any one reading this post to reach out to them on their social media handles for tourism related inquiries. Trust me you will be overwhelmed with the selections of set or customized plan offered by them 👌'
  },
  {
    id: 3,
    name: 'Abid M',
    location: 'Sydney, Australia',
    date: 'February 2025',
    rating: 5,
    avatar: img3,
    initials: 'AM',
    comment: 'Amazing Sri Lanka Tour with Akeel Jaazar & Ceylon Heaven Tours! We had an unforgettable 11-day, 10-night trip with Ceylon Heaven Tours, and we couldn’t have asked for a better experience! From the moment we arrived, everything was perfectly planned, making our journey smooth and stress-free. Our guide, Akeel Jaazar, was absolutely fantastic—knowledgeable, friendly, and always ready to go the extra mile to make our trip special. He shared so many insights about Sri Lanka’s history and culture, making each destination even more meaningful. Some of the highlights of our trip included: • Exploring the ancient wonders of Anuradhapura & Polonnaruwa • Witnessing elephants in their natural habitat at Minneriya National Park • Climbing the breathtaking Sigiriya Rock Fortress • Experiencing the spiritual beauty of the Kandy Tooth Temple • Enjoying the Cultural Dance Show and visiting the Gem Museum • Walking through lush Tea Plantations & Tea Factories in Nuwara Eliya • Spotting wildlife on an adventurous Yala Safari • Watching majestic whales in Mirissa • Exploring Madu River mangroves & a Turtle Hatchery Every moment of our trip was carefully curated, and we felt completely safe and comfortable throughout. Ceylon Heaven Tours provided excellent service, ensuring we had a hassle-free and memorable journey. If you’re planning a trip to Sri Lanka, I highly recommend booking with Ceylon Heaven Tours and requesting Akeel Jaazar as your guide—you won’t be disappointed! Thank you for an amazing experience! We can’t wait to visit again. ⭐⭐⭐⭐⭐'
  },
  {
    id: 4,
    name: 'Marcello Z',
    location: 'Seoul, South Korea',
    date: 'August 2025',
    rating: 5,
    avatar: img4,
    initials: 'MZ',
    comment: 'Amazing experience!! When we left we left a piece of heart and 2 new friends! Akeel and Shan treated us the entire trip with incredible respect. Even our anniversary fell during the holiday and we were organized a surprise! As for the tour perfectly organized to ensure that we could see all the major attractions of Sri Lanka, with treatments often by locals and not by tourists , always thanks to them. Restaurants and hotels always recommended very well , what if you have to go in the future to visit this magnificent country do not hesitate to contact them and have your trip organized!'
  },
  {
    id: 5,
    name: 'Barbara A',
    location: 'Berlin, Germany',
    date: 'Mar 2025',
    rating: 5,
    avatar: img5,
    initials: 'BA',
    comment: 'We had the nicest holiday with Akeel! We still dream about it today! The program was varied and exciting. We learned a lot about the culture, the country and people. The hotels were well selected, some remote. The rooms were large, both the breakfast and dinner buffets were rich. Akeel is a local guide, gave valuable tips and knew the best places, places and restaurants. His driving style was considerate and civilized. We always felt safe. He was very flexible, so we could adapt our program to our wishes at any time. You should be aware that there are additional costs for admissions that are more in line with Western standards. Tips are generally expected. The out-of-town lunches are relatively cheap.'
  },
  {
    id: 6,
    name: 'Sumaira A',
    location: 'Dubai, United Arab Emirates',
    date: 'Mar 2025',
    rating: 5,
    avatar: img6,
    initials: 'SA',
    comment: 'I had a wonderful experience with Ceylon Heaven Tour. Everything was very well organized, from planning to execution. The team was professional, friendly, and always ready to help. Our itinerary was perfectly managed, and we got to explore beautiful places comfortably without any stress. The guides were knowledgeable and made the trip even more enjoyable with their helpful attitude and local insights. Accommodation and transport were excellent, and special care was taken to ensure our comfort throughout the journey. I truly appreciate their dedication and customer service. I highly recommend Ceylon Heaven Tour to anyone looking for a memorable and hassle-free trip to Sri Lanka. Thank you for making our tour so special! 🌴✨'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Sigiriya Rock Fortress Sunrise',
    category: 'Cultural Heritage',
    image: sigiriya1Img
  },
  {
    id: 2,
    title: 'Scenic Ceylon Tea Plantation',
    category: 'Mountain & Adventure',
    image: img13
  },
  {
    id: 3,
    title: 'Galle Dutch Fort Lighthouse & Coast',
    category: 'Beach & Tropical',
    image: mirissaImg
  },
  {
    id: 4,
    title: 'Nine Arch Bridge Mountain Train',
    category: 'Mountain & Adventure',
    image: nineArchImg
  },
  {
    id: 5,
    title: 'Yala Wild Leopard Game Drive',
    category: 'Wild Safaris',
    image: safariImg
  },
  {
    id: 6,
    title: 'Pinnawala Elephant Bathing',
    category: 'Wild Safaris',
    image: elephantImg
  },
  {
    id: 7,
    title: 'Ravana Waterfalls Ella',
    category: 'Mountain & Adventure',
    image: rawanellaImg
  },
  {
    id: 8,
    title: 'Scenic Blue Train Ride Ella',
    category: 'Mountain & Adventure',
    image: nineArch2Img
  },
  {
    id: 9,
    title: 'Kandy Sacred Tooth Relic Temple',
    category: 'Cultural Heritage',
    image: kandy1Img
  }
];

export const FAQS = [
  {
    question: 'What is included in the tour package prices?',
    answer: 'All tour packages include private AC vehicle transport with dedicated driver-guide, hotel accommodations with daily breakfast (and dinner on round tours), all monument entry fees, safari jeep charges, and taxes.'
  },
  {
    question: 'Can we customize the days or itinerary of a package?',
    answer: 'Yes! All packages can be tailored to add extra beach days, upgrade hotel categories, or modify stops according to your arrival flight schedule.'
  },
  {
    question: 'How do I book a tour package?',
    answer: 'Simply click "View Details" on your preferred package, review the day-by-day itinerary, and click "Book Package Now". Our concierge will confirm availability and payment options instantly.'
  },
  {
    question: 'Do you provide airport pickup and drop-off?',
    answer: 'Yes, airport pickup upon arrival and drop-off before your return flight are fully included in all multi-day and round packages.'
  }
];
