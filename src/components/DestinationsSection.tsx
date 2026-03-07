import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dubaiImg from "@/assets/dubai.jpg";
import londonImg from "@/assets/london.jpg";
import travelersImg from "@/assets/travelers.jpg";
import visaImg from "@/assets/visa-services.jpg";

const destinations = [
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    image: dubaiImg,
    visaType: "Tourist / Business Visa",
    processing: "3-5 Days",
    price: "From $89",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: londonImg,
    visaType: "Standard Visitor Visa",
    processing: "15-20 Days",
    price: "From $199",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    image: travelersImg,
    visaType: "B1/B2 Visitor Visa",
    processing: "Appointment Based",
    price: "From $249",
  },
  {
    name: "Schengen (Europe)",
    flag: "🇪🇺",
    image: visaImg,
    visaType: "Schengen Visa",
    processing: "10-15 Days",
    price: "From $179",
  },
];

const moreCountries = [
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Japan", flag: "🇯🇵" },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Destinations</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Popular Visa Destinations
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We process visas for 50+ countries. Here are some of our most popular destinations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-[3/4] relative">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{dest.flag}</span>
                    <h3 className="text-lg font-display font-bold text-primary-foreground">{dest.name}</h3>
                  </div>
                  <p className="text-xs font-body text-primary-foreground/70 mb-3">{dest.visaType}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-body text-primary-foreground/60">Processing</span>
                      <p className="text-sm font-body font-semibold text-primary-foreground">{dest.processing}</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body font-bold rounded-full">
                      {dest.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-card border border-border p-8"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">
            We Also Process Visas For
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {moreCountries.map((country) => (
              <span
                key={country.name}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted rounded-full text-sm font-body font-medium hover:bg-secondary/10 hover:shadow-card transition-all cursor-pointer"
              >
                <span className="text-lg">{country.flag}</span>
                {country.name}
              </span>
            ))}
          </div>
          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-body font-semibold text-secondary hover:underline">
              Don't see your country? Contact us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
