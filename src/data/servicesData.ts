import { Plane, MapPin, Headphones, Ticket } from "lucide-react";

export const servicesData = [
     {
        id: "visa-services",
        icon: Ticket,
        title: "Visa Services",
        description: "Expert assistance for all types of visas, including US, UK, Schengen, and more.",
        features: ["Expert Consulting", "Document Review", "Live Updates", "High Success Rate"],
        href: "/services/visa-services"
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
        id: "air-ticketing",
        icon: Plane,
        title: "Flight Booking",
        description: "Best deals on domestic and international flights with flexible booking options.",
        features: ["Best Prices", "All Airlines", "Group Deals", "Flexible Changes"],
        href: "/services/air-ticketing"
    },


];
