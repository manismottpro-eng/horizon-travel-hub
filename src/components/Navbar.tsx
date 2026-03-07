import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import logo from "/newlogo.png";

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

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { 
    label: "Services", 
    href: "#services",
    dropdown: [
      { name: "Visa Services", href: "#visa-services" },
      { name: "Tours & Packages", href: "#tours" },
      { name: "Air Ticketing", href: "#air-ticketing" },
      { name: "Hotel Booking", href: "#hotel-booking" },
      { name: "Travel Insurance", href: "#travel-insurance" }
    ]
  },
  { label: "Destinations", href: "#destinations" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visaDropdown, setVisaDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary font-body text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-3 w-3" /> +1 (234) 567-890
            </a>
            <a href="mailto:info@smartprovisa.com" className="hidden sm:flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="h-3 w-3" /> info@smartprovisa.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground/80">
            <span className="hidden md:inline">Mon - Sat: 9AM - 7PM</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md shadow-card border-b border-primary-foreground/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Smart Pro Visa" className="h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 font-body">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">
                      {link.label} <ChevronDown className="h-3 w-3" />
                    </button>
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-elevated border border-border p-2"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-muted transition-colors"
                            >
                              <span>{item.name}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                >
                  {link.label}
                </a>
              );
            })}
            <div
              className="relative"
              onMouseEnter={() => setVisaDropdown(true)}
              onMouseLeave={() => setVisaDropdown(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">
                Visa Services <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {visaDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full right-0 mt-1 w-64 bg-card rounded-xl shadow-elevated border border-border p-2"
                  >
                    {visaCountries.map((country) => (
                      <a
                        key={country.name}
                        href="#services"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-muted transition-colors"
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span>{country.name} Visa</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-secondary text-secondary-foreground font-body font-semibold text-sm rounded-full hover:opacity-90 transition-all shadow-gold"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-primary-foreground/10 bg-primary/95"
            >
              <div className="px-4 py-4 space-y-1 font-body">
                {navLinks.map((link) => {
                  if (link.dropdown) {
                    return (
                      <div key={link.label}>
                        <div className="pt-2 pb-1 px-4 text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider">
                          {link.label}
                        </div>
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2.5 text-sm rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-2 pb-1 px-4 text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider">
                  Visa Services
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {visaCountries.map((country) => (
                    <a
                      key={country.name}
                      href="#services"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </a>
                  ))}
                </div>
                <div className="pt-3">
                  <a
                    href="#contact"
                    className="block text-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
