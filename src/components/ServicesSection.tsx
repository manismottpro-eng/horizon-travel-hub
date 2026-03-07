import { motion } from "framer-motion";
import { FileText, Plane, MapPin, Ticket, CreditCard, Headphones } from "lucide-react";

const visaCountries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Schengen", flag: "🇪🇺" },
];

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Best deals on domestic and international flights with flexible booking options.",
    features: ["Best Prices", "All Airlines", "Group Deals", "Flexible Changes"],
  },
  {
    icon: MapPin,
    title: "Tour Packages",
    description: "Curated travel packages to world-famous destinations with accommodation and guides.",
    features: ["Custom Itinerary", "Hotel Booking", "Local Guides", "All-Inclusive"],
  },
  {
    icon: Ticket,
    title: "Event Tickets",
    description: "Get tickets to top attractions, theme parks, shows and events worldwide.",
    features: ["Theme Parks", "Concerts", "City Tours", "Experiences"],
  },
  {
    icon: CreditCard,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance plans to protect you throughout your journey.",
    features: ["Medical Cover", "Trip Cancel", "Lost Baggage", "24/7 Support"],
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your travel needs, before and during your trip.",
    features: ["Live Chat", "Phone Support", "Email", "WhatsApp"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From visa processing to tour packages, we handle everything so you can focus on enjoying your trip.
          </p>
        </motion.div>

        {/* Visa Services */}
        <div id="visa-services" className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Visa Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {visaCountries.map((country, idx) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-4 bg-card rounded-xl shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h4 className="text-lg font-display font-bold text-foreground mb-1">{country.name}</h4>
                <p className="text-sm font-body text-muted-foreground">Visa Services</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tours & Packages */}
        <div id="tours" className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Tours & Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(service => service.title === "Tour Packages").map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Air Ticketing */}
        <div id="air-ticketing" className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Air Ticketing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(service => service.title === "Flight Booking").map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hotel Booking */}
        <div id="hotel-booking" className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Hotel Booking</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* We can add hotel-specific service here if needed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Hotel Booking</h3>
              <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">
                Find the best hotel deals worldwide with our comprehensive booking service.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full">
                  Best Prices
                </span>
                <span className="px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full">
                  All Hotels
                </span>
                <span className="px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full">
                  24/7 Support
                </span>
                <span className="px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full">
                  Flexible Booking
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Travel Insurance */}
        <div id="travel-insurance" className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Travel Insurance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(service => service.title === "Travel Insurance").map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
