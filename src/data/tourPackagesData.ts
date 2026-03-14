import { Plane, MapPin, Users, Ticket, Star, Heart, Luggage, Camera } from "lucide-react";

export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  flag: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  bestTime: string;
  groupSize: string;
  difficulty: string;
}

export const tourPackagesData: TourPackage[] = [
  {
    id: "europe-grand-tour",
    name: "Europe Grand Tour",
    destination: "Europe",
    flag: "🇪🇺",
    duration: "14 Days",
    price: "From $2,999",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=600&fit=crop",
    description: "Experience the best of Europe with our Grand Tour package. Visit iconic cities, historic landmarks, and scenic countryside across 5 countries.",
    highlights: [
      "Paris - Eiffel Tower & Louvre Museum",
      "Switzerland - Swiss Alps & Chocolate Factory",
      "Rome - Colosseum & Vatican City",
      "Amsterdam - Canals & Van Gogh Museum",
      "Vienna - Classical Music & Palaces"
    ],
    inclusions: [
      "Return international flights from India",
      "4-star hotel accommodation",
      "Daily breakfast & 6 dinners",
      "Guided city tours",
      "Sightseeing entrance fees",
      "Transportation between destinations",
      "Travel insurance",
      "Schengen visa assistance"
    ],
    bestTime: "April - October",
    groupSize: "15-20 people",
    difficulty: "Easy"
  },
  {
    id: "dubai-luxury",
    name: "Dubai Luxury Escape",
    destination: "Dubai",
    flag: "🇦🇪",
    duration: "5 Days",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description: "Indulge in luxury and adventure with our Dubai Escape package. Experience the perfect mix of modern attractions and desert adventures.",
    highlights: [
      "Burj Khalifa - At the Top Observatory",
      "Desert Safari with BBQ Dinner",
      "Dhow Cruise Dinner on Dubai Creek",
      "Mall of the Emirates & Ski Dubai",
      "Abu Dhabi Day Trip - Sheikh Zayed Grand Mosque"
    ],
    inclusions: [
      "Return international flights from India",
      "5-star hotel accommodation",
      "Daily breakfast & 3 dinners",
      "Guided city tours",
      "Desert safari with activities",
      "Transportation in luxury vehicles",
      "Travel insurance",
      "UAE visa assistance"
    ],
    bestTime: "November - March",
    groupSize: "10-15 people",
    difficulty: "Easy"
  },
  {
    id: "australia-wilderness",
    name: "Australia Adventure",
    destination: "Australia",
    flag: "🇦🇺",
    duration: "10 Days",
    price: "From $2,499",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",
    description: "Explore the stunning landscapes and unique wildlife of Australia. From Sydney's iconic landmarks to the Great Barrier Reef.",
    highlights: [
      "Sydney Opera House & Harbour Bridge",
      "Great Barrier Reef Snorkeling",
      "Great Ocean Road Scenic Drive",
      "Melbourne City Tour",
      "Wildlife Parks - Kangaroos & Koalas"
    ],
    inclusions: [
      "Return international flights from India",
      "4-star hotel accommodation",
      "Daily breakfast & 5 dinners",
      "Guided tours & activities",
      "Sightseeing entrance fees",
      "Domestic flights within Australia",
      "Travel insurance",
      "Australia visa assistance"
    ],
    bestTime: "September - November, March - May",
    groupSize: "12-18 people",
    difficulty: "Moderate"
  },
  {
    id: "uk-royal-experience",
    name: "UK Royal Experience",
    destination: "United Kingdom",
    flag: "🇬🇧",
    duration: "8 Days",
    price: "From $1,899",
    image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&h=600&fit=crop",
    description: "Immerse yourself in British culture and royalty. Visit London's historic landmarks and explore the charming countryside.",
    highlights: [
      "London City Tour - Big Ben, Buckingham Palace",
      "Harry Potter Studio Tour",
      "Stonehenge & Salisbury",
      "Windsor Castle - Queen's Official Residence",
      "Cotswolds Villages Day Trip"
    ],
    inclusions: [
      "Return international flights from India",
      "4-star hotel accommodation",
      "Daily breakfast & 4 dinners",
      "Guided city tours",
      "Sightseeing entrance fees",
      "Transportation within UK",
      "Travel insurance",
      "UK visa assistance"
    ],
    bestTime: "May - September",
    groupSize: "10-15 people",
    difficulty: "Easy"
  },
  {
    id: "maldives-honeymoon",
    name: "Maldives Honeymoon",
    destination: "Maldives",
    flag: "🇲🇻",
    duration: "4 Days",
    price: "From $1,499",
    image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800&h=600&fit=crop",
    description: "Escape to paradise with our Maldives honeymoon package. Stay in overwater villas and enjoy pristine beaches and crystal-clear waters.",
    highlights: [
      "Overwater villa accommodation",
      "Snorkeling & diving adventures",
      "Sunset cruise with dinner",
      "Spa treatments for couples",
      "Water sports activities"
    ],
    inclusions: [
      "Return international flights from India",
      "4-star overwater villa",
      "All meals & beverages",
      "Speedboat transfers",
      "Snorkeling equipment",
      "Romantic dinner on the beach",
      "Travel insurance",
      "Maldives visa assistance"
    ],
    bestTime: "November - April",
    groupSize: "Couples only",
    difficulty: "Easy"
  },
  {
    id: "thailand-cultural",
    name: "Thailand Cultural Journey",
    destination: "Thailand",
    flag: "🇹🇭",
    duration: "7 Days",
    price: "From $999",
    image: "https://images.unsplash.com/photo-1548013146-8777a42871ab?w=800&h=600&fit=crop",
    description: "Discover the rich culture and stunning landscapes of Thailand. From bustling cities to ancient temples and beautiful beaches.",
    highlights: [
      "Bangkok Grand Palace & Wat Phra Kaew",
      "Chiang Mai Temple Tours",
      "Elephant Sanctuary Visit",
      "Ayutthaya Ancient City",
      "Phuket Beaches & Island Hopping"
    ],
    inclusions: [
      "Return international flights from India",
      "3-star hotel accommodation",
      "Daily breakfast & 4 dinners",
      "Guided temple tours",
      "Elephant sanctuary visit",
      "Domestic flights within Thailand",
      "Travel insurance",
      "Thailand visa assistance"
    ],
    bestTime: "November - February",
    groupSize: "15-20 people",
    difficulty: "Easy"
  }
];

export const flightPackagesData = [
  {
    id: "flight-deals",
    title: "Best Flight Deals",
    icon: Ticket,
    description: "Book your international flights with the best deals and flexible options.",
    features: ["Competitive Prices", "All Major Airlines", "Group Discounts", "Flexible Booking"],
    href: "/services/air-ticketing"
  },
  {
    id: "flight-combos",
    title: "Flight + Hotel Combos",
    icon: Luggage,
    description: "Save more with our flight and hotel combo packages for popular destinations.",
    features: ["Discounted Prices", "Free Cancellations", "Flexible Dates", "24/7 Support"],
    href: "/services/air-ticketing"
  },
  {
    id: "group-flights",
    title: "Group Flight Bookings",
    icon: Users,
    description: "Special rates and dedicated support for group travel bookings.",
    features: ["Custom Itineraries", "Best Group Rates", "Visa Coordination", "Group Transfers"],
    href: "/services/air-ticketing"
  },
  {
    id: "last-minute",
    title: "Last Minute Deals",
    icon: Star,
    description: "Great deals on last-minute international flights from major Indian cities.",
    features: ["Instant Confirmation", "Flash Sales", "Flexible Options", "Priority Support"],
    href: "/services/air-ticketing"
  },
  {
    id: "first-class",
    title: "Premium Travel",
    icon: Heart,
    description: "Luxury travel with business and first-class flight options.",
    features: ["Business Class", "First Class", "Lounge Access", "Priority Check-in"],
    href: "/services/air-ticketing"
  },
  {
    id: "student-flights",
    title: "Student Specials",
    icon: Camera,
    description: "Special discounts and flexible options for students studying abroad.",
    features: ["Student Discounts", "Extra Baggage", "Flexible Changes", "Study Visa Support"],
    href: "/services/air-ticketing"
  }
];

export const travelTips = [
  "Book flights 6-8 weeks in advance for best prices",
  "Travel during off-peak seasons for better deals",
  "Consider connecting flights for lower fares",
  "Check visa requirements before booking",
  "Book travel insurance for peace of mind",
  "Pack light and check baggage allowances",
  "Arrive at airport 3 hours before international flights"
];

export const popularRoutes = [
  { from: "Delhi", to: "London", duration: "9h 30m" },
  { from: "Mumbai", to: "Dubai", duration: "3h 45m" },
  { from: "Bangalore", to: "Singapore", duration: "4h 30m" },
  { from: "Chennai", to: "Dubai", duration: "3h 30m" },
  { from: "Kolkata", to: "Dubai", duration: "4h 15m" }
];