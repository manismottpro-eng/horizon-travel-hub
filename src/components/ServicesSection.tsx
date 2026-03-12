import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { visaCountries } from "@/data/navigationData";
import { servicesData } from "@/data/servicesData";

const ServicesSection = () => {
  return (
    <section id="services" className="py-6 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From visa processing to tour packages, we handle everything so you can focus on enjoying your trip.
          </p>
        </motion.div>

        {/* Visa Services Countries */}
        <div id="visa-services" className="mb-8">
          <h3 className="text-2xl font-display font-bold text-foreground mb-5 text-center">Popular Visa Destinations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {visaCountries.map((country, idx) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-2.5 bg-card rounded-xl shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <h4 className="text-lg font-display font-bold text-foreground mb-1">{country.name}</h4>
                <p className="text-sm font-body text-muted-foreground mb-2.5">Visa Services</p>
                <Link
                  to={country.href}
                  className="text-xs font-body font-bold text-secondary flex items-center justify-center gap-1 hover:underline"
                >
                  View Requirements <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SMOT VISA SERVICES */}
        <div className="mb-8">
          <h3 className="text-3xl font-display font-bold text-foreground mb-6 text-center">Smot Visa Services</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 bg-card rounded-2xl shadow-card border border-border group hover:shadow-elevated transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm font-body text-muted-foreground mb-3 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.href} className="text-xs font-body font-bold text-secondary flex items-center gap-1 hover:underline">
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
