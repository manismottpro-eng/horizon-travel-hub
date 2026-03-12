// This file will centralize the navigation data to be used across the app
import { offices } from "./officeData";

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

export const branches = [
    {
        id: "maharashtra",
        name: "Maharashtra",
        href: "/contact",
        submenu: [
            { id: "bandra-east-mumbai", name: "Bandra East, Mumbai", href: "/contact?branch=bandra-east-mumbai" },
            { id: "kandivali-mumbai", name: "Kandivali, Mumbai", href: "/contact?branch=kandivali-mumbai" },
            { id: "shivaji-nagar-pune", name: "Shivaji Nagar, Pune", href: "/contact?branch=shivaji-nagar-pune" },
            { id: "yerwada-pune", name: "Yerwada, Pune", href: "/contact?branch=yerwada-pune" }
        ]
    },
    {
        id: "delhi",
        name: "Delhi",
        href: "/contact?branch=delhi"
    },
    {
        id: "andhra-pradesh",
        name: "Andhra Pradesh",
        href: "/contact",
        submenu: [
            { id: "walter-visakhapatnam", name: "Walter, Visakhapatnam", href: "/contact?branch=walter-visakhapatnam" }
        ]
    },
    {
        id: "karnataka",
        name: "Karnataka",
        href: "/contact",
        submenu: [
            { id: "cv-raman-nagar-bangalore", name: "CV Raman Nagar, Bangalore", href: "/contact?branch=cv-raman-nagar-bangalore" }
        ]
    },
    {
        id: "ahmedabad",
        name: "Ahmedabad",
        href: "/contact?branch=ahmedabad"
    },
    {
        id: "jaipur",
        name: "Jaipur",
        href: "/contact?branch=jaipur"
    }
];

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", dropdown: services },
    { label: "Destinations", href: "/destinations" },
    { label: "Branches", href: "/contact", dropdown: branches },
    { label: "Blog", href: "/blog" },
    { label: "Visa Checker", href: "/visa-checker" },
];
