import { motion } from "framer-motion";
import { FileText, Plane, MapPin, Ticket, CreditCard, Headphones } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Visa Processing",
    description: "Expert visa application handling for US, UK, GCC, Schengen, Canada, Australia and 50+ countries.",
    features: ["Tourist Visa", "Business Visa", "Student Visa", "Work Visa"],
  },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
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
    </section>
  );
};

export default ServicesSection;
