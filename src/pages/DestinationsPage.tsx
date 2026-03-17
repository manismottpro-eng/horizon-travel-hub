import { motion } from "framer-motion";
import { ArrowRight, Globe, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import dubaiImg from "@/assets/dubai.jpg";
import londonImg from "@/assets/london.jpg";
import travelersImg from "@/assets/us.webp";
import visaImg from "@/assets/visa-services.jpg";

const destinations = [
    {
        id: "uae",
        name: "United Arab Emirates",
        flag: "🇦🇪",
        image: dubaiImg,
        category: "Middle East",
        visaType: "Tourist / Business Visa",
        processing: "3-5 Days",
        price: "From $89",
    },
    {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        image: londonImg,
        category: "Europe",
        visaType: "Standard Visitor Visa",
        processing: "15-20 Days",
        price: "From $199",
    },
    {
        id: "us",
        name: "United States",
        flag: "🇺🇸",
        image: travelersImg,
        category: "America",
        visaType: "B1/B2 Visitor Visa",
        processing: "Appointment Based",
        price: "From $249",
    },
    {
        id: "schengen",
        name: "Schengen (Europe)",
        flag: "🇪🇺",
        image: visaImg,
        category: "Europe",
        visaType: "Schengen Visa",
        processing: "10-15 Days",
        price: "From $179",
    },
];

const moreCountries = [
    { id: "canada", name: "Canada", flag: "🇨🇦", category: "America" },
    { id: "australia", name: "Australia", flag: "🇦🇺", category: "Oceania" },
    { id: "kuwait", name: "Kuwait", flag: "🇰🇼", category: "Middle East" },
    { id: "saudi", name: "Saudi Arabia", flag: "🇸🇦", category: "Middle East" },
    { id: "malaysia", name: "Malaysia", flag: "🇲🇾", category: "Asia" },
    { id: "singapore", name: "Singapore", flag: "🇸🇬", category: "Asia" },
    { id: "thailand", name: "Thailand", flag: "🇹🇭", category: "Asia" },
    { id: "turkey", name: "Turkey", flag: "🇹🇷", category: "Europe/Asia" },
    { id: "japan", name: "Japan", flag: "🇯🇵", category: "Asia" },
    { id: "france", name: "France", flag: "🇫🇷", category: "Europe" },
    { id: "germany", name: "Germany", flag: "🇩🇪", category: "Europe" },
    { id: "italy", name: "Italy", flag: "🇮🇹", category: "Europe" },
];

const DestinationsPage = () => {
    const [search, setSearch] = useState("");

    const filteredCountries = moreCountries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm font-body mb-8">
                    <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors">Home</Link>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-foreground font-semibold">Destinations</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Explore the World</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Global Visa Destinations
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                        Hassle-free visa processing for over 50+ countries. Choose your destination and let us handle the rest.
                    </p>
                </motion.div>

                {/* Featured Destinations */}
                <div className="mb-20">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-8">Featured Destinations</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {destinations.map((dest, idx) => (
                            <motion.div
                                key={dest.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                            >
                                <Link to={`/visa/${dest.id}`}>
                                    <div className="aspect-[3/4] relative">
                                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-body font-bold rounded-md mb-2 inline-block uppercase tracking-wider">
                                                {dest.category}
                                            </span>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-2xl">{dest.flag}</span>
                                                <h3 className="text-xl font-display font-bold text-primary-foreground">{dest.name}</h3>
                                            </div>
                                            <p className="text-xs font-body text-primary-foreground/70 mb-4">{dest.visaType}</p>
                                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                                <div className="text-primary-foreground">
                                                    <p className="text-[10px] uppercase font-body text-primary-foreground/50 tracking-widest">Starts From</p>
                                                    <p className="text-lg font-display font-bold">{dest.price.split(' ')[1]}</p>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                                                    <ArrowRight className="h-5 w-5 text-secondary group-hover:text-secondary-foreground" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* All Countries Search/Filter */}
                <section className="bg-card rounded-3xl shadow-card border border-border p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Globe className="w-64 h-64" />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-foreground">Discover More Countries</h2>
                            <p className="text-muted-foreground font-body mt-2">Find your next destination from our extensive list.</p>
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search country or region..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-muted/30 font-body text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10">
                        {filteredCountries.map((country, idx) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Link
                                    to="/contact"
                                    className="flex flex-col items-center gap-2 p-6 bg-muted/20 rounded-2xl border border-transparent hover:border-secondary/30 hover:bg-secondary/5 hover:shadow-sm transition-all text-center"
                                >
                                    <span className="text-4xl mb-1 transform group-hover:scale-110 transition-transform">{country.flag}</span>
                                    <span className="text-sm font-display font-bold text-foreground">{country.name}</span>
                                    <span className="text-[10px] font-body text-muted-foreground uppercase tracking-widest">{country.category}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredCountries.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground font-body italic">No countries found matching your search. Try another term or contact us!</p>
                        </div>
                    )}

                    <div className="mt-12 text-center pt-8 border-t border-border">
                        <p className="font-body text-sm text-foreground/70 mb-4">Don't see your destination? We process visas for 50+ countries.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-bold text-sm rounded-full shadow-card hover:opacity-90 transition-all">
                            Inquire Now
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DestinationsPage;
