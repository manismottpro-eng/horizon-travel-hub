// This file will centralize the navigation data to be used across the app
export const visaCountries = [
    { id: "us", name: "United States", flag: "🇺🇸", href: "/visa/us" },
    { id: "uk", name: "United Kingdom", flag: "🇬🇧", href: "/visa/uk" },
    { id: "canada", name: "Canada", flag: "🇨🇦", href: "/visa/canada" },
    { id: "australia", name: "Australia", flag: "🇦🇺", href: "/visa/australia" },
    { id: "uae", name: "UAE", flag: "🇦🇪", href: "/visa/uae" },
    { id: "schengen", name: "Schengen", flag: "🇪🇺", href: "/visa/schengen" },
];

export const services = [
    {
        id: "visa-services",
        name: "Visa Services",
        href: "/services/visa-services",
        submenu: visaCountries.map(c => ({ id: c.id, name: `${c.name} Visa`, flag: c.flag, href: c.href }))
    },
    { id: "tours", name: "Tours & Packages", href: "/services/tours" },
    { id: "air-ticketing", name: "Air Ticketing", href: "/services/air-ticketing" }
];

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services", dropdown: services },
    { label: "Destinations", href: "/#destinations" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
];
