import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Globe } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import InquiryForm from "./InquiryForm";
import { Link } from "react-router-dom";

const stats = [
  { icon: Shield, value: "99%", label: "Success Rate" },
  { icon: Clock, value: "24h", label: "Fast Processing" },
  { icon: Globe, value: "50+", label: "Countries" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Travel destination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 border border-secondary/30 rounded-full text-sm font-body font-medium text-primary-foreground mb-6">
                <Globe className="h-4 w-4" />
                Trusted by 5000+ Travelers Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              Your Journey{" "}
              <span className="text-gradient-gold">Starts Here</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/80 font-body leading-relaxed mb-8 max-w-xl"
            >
              We make visa applications, tour bookings, and ticket reservations effortless.
              Travel anywhere in the world without the hassle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
              >
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact?branch=cv-raman-nagar-bangalore"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm rounded-full hover:bg-primary-foreground/10 transition-all"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <stat.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-primary-foreground">{stat.value}</div>
                    <div className="text-xs font-body text-primary-foreground/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block relative">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
