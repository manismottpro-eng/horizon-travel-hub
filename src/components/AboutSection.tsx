import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import travelersImg from "@/assets/travelers.jpg";

const highlights = [
  "10+ Years of Experience in Visa Processing",
  "Trusted by 10,000+ Happy Travelers",
  "99% Visa Approval Success Rate",
  "Dedicated Support Team Available 24/7",
  "Partnerships with Top Airlines & Hotels",
  "Transparent Pricing with No Hidden Fees",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={travelersImg} alt="Happy travelers" className="w-full h-[450px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-gold font-body">
              <div className="text-3xl font-display font-bold">10+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3 mb-4">
              Making Travel Dreams Come True Since 2014
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Smot Visa is a leading visa and travel consultancy dedicated to simplifying your travel experience.
              Whether you need a visa for the US, UK, GCC countries, or anywhere else in the world — we handle the entire
              process from documentation to approval, so you can focus on packing your bags.
            </p>
            <div className="space-y-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-full hover:opacity-90 transition-all"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
