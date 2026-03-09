import { Plane, MapPin, Headphones, Ticket } from "lucide-react";

export const servicesData = [
    {
        id: "air-ticketing",
        icon: Plane,
        title: "Flight Booking",
        description: "Best deals on domestic and international flights with flexible booking options.",
        features: ["Best Prices", "All Airlines", "Group Deals", "Flexible Changes"],
        href: "/services/air-ticketing"
    },
    {
        id: "tours",
        icon: MapPin,
        title: "Tour Packages",
        description: "Curated travel packages to world-famous destinations with accommodation and guides.",
        features: ["Custom Itinerary", "Hotel Booking", "Local Guides", "All-Inclusive"],
        href: "/services/tours"
    },
    {
        id: "visa-services",
        icon: Ticket,
        title: "Visa Services",
        description: "Expert assistance for all types of visas, including US, UK, Schengen, and more.",
        features: ["Expert Consulting", "Document Review", "Live Updates", "High Success Rate"],
        href: "/services/visa-services"
    },
    {
        id: "support",
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock assistance for all your travel needs, before and during your trip.",
        features: ["Live Chat", "Phone Support", "Email", "WhatsApp"],
        href: "#contact"
    },
];
