import { Plane, MapPin, Headphones, Ticket, Users, Briefcase, Luggage, Star, Heart, Camera } from "lucide-react";

export const servicesData = [
  {
    id: "tourist-visa",
    icon: Users,
    title: "Tourist Visa Assistance",
    description: "Turn your travel dreams into reality. Smotvisa helps you secure your tourist visa quickly and confidently — whether you’re planning a family vacation, honeymoon, or solo trip abroad.",
    features: ["Documentation Support", "Embassy Appointments", "Travel Insurance", "Fast Processing"],
    href: "/services/visa-services"
  },
  {
    id: "business-visa",
    icon: Briefcase,
    title: "Business Visa Assistance",
    description: "Travel abroad for meetings, conferences, or trade events without the stress of visa paperwork. Our experts prepare your business visa application precisely as per embassy standards.",
    features: ["Invitation Letters", "Travel Plans", "Financial Documents", "Professional Support"],
    href: "/services/visa-services"
  },
  {
    id: "air-ticketing",
    icon: Plane,
    title: "Flight Booking",
    description: "Best deals on domestic and international flights with flexible booking options. Get exclusive rates on flights to popular destinations worldwide.",
    features: ["Competitive Prices", "All Major Airlines", "Group Discounts", "Flexible Booking"],
    href: "/services/air-ticketing"
  },
  {
    id: "tour-packages",
    icon: Luggage,
    title: "International Tour Packages",
    description: "Complete travel solutions including flights, accommodation, sightseeing, and visa assistance. Choose from our handpicked packages or create your custom itinerary.",
    features: ["Flight + Hotel Combos", "Guided Tours", "Visa Assistance", "24/7 Support"],
    href: "/#tour-packages"
  },
  {
    id: "premium-travel",
    icon: Heart,
    title: "Premium Travel",
    description: "Luxury travel experience with business and first-class flights, 5-star accommodations, and exclusive sightseeing tours.",
    features: ["Business/First Class", "Lounge Access", "Private Transfers", "Concierge Service"],
    href: "/#tour-packages"
  },
  {
    id: "group-travel",
    icon: Users,
    title: "Group Travel",
    description: "Special rates and dedicated support for group travel bookings. Perfect for families, friends, corporate groups, and educational tours.",
    features: ["Custom Itineraries", "Best Group Rates", "Visa Coordination", "Group Transfers"],
    href: "/#tour-packages"
  }
];
