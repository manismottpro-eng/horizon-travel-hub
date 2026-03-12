import { Facebook, Instagram, Twitter, Youtube, ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/small.png";
import { navLinks, services } from "../data/navigationData";
import { offices, seoLocations } from "../data/officeData";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-white" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Tagline */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="SMOT VISA" className="h-16 w-auto mb-2 brightness-200" />
              <h2 className="font-display font-bold text-xl text-primary-foreground">SMOT VISA</h2>
              <p className="text-xs font-body text-primary-foreground/70 uppercase tracking-wider">Visa & Travel Agency</p>
            </Link>
            <p className="text-sm font-body text-primary-foreground/70 leading-relaxed italic">
              "The status of the customer needs is monitored online with the help of our state of technology."
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/smotproindia/"
                  className="p-2.5 bg-primary-foreground/10 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
            <div>
              <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary mb-6">Explore</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm font-body text-primary-foreground/70 hover:text-secondary transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary mb-6">Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link to={service.href} className="text-sm font-body text-primary-foreground/70 hover:text-secondary transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Presence */}
          <div>
            <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary mb-6">Our Presence</h4>
            <ul className="space-y-5">
              {[
                "Maharashtra",
                "Delhi",
                "Andhra Pradesh",
                "Karnataka",
                "Ahmedabad",
                "Jaipur"
              ].map((location) => (
                <li key={location} className="group">
                  <Link to="/contact" className="flex gap-3" onClick={() => window.scrollTo(0, 0)}>
                    <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-body font-bold text-primary-foreground/90 group-hover:text-secondary transition-colors">{location}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 bg-black/20">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xs font-body text-primary-foreground/50">
              SmotPro visa
            </p>
            <p className="text-[10px] font-body text-primary-foreground/30">
              Managed by Smotpro visa Team.
            </p>
          </div>

          <div className="flex gap-8 text-[11px] font-body text-primary-foreground/40">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookies Settings</a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-1 text-[10px] font-body text-primary-foreground/30 hover:text-secondary transition-colors"
          >
            <div className="p-2 bg-primary-foreground/10 rounded-full group-hover:bg-secondary transition-colors">
              <ArrowUp className="h-4 w-4 text-primary-foreground" />
            </div>
            TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
