import { Plane, MapPin, Headphones, Ticket, Users, Briefcase } from "lucide-react";

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
    description: "Best deals on domestic and international flights with flexible booking options.",
    features: ["Best Prices", "All Airlines", "Group Deals", "Flexible Changes"],
    href: "/services/air-ticketing"
  }
];
