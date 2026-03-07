import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Smart Pro Visa" className="h-14 w-auto mb-4 brightness-200" />
            <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mb-6">
              Your trusted partner for hassle-free visa processing, flight bookings, and travel packages worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-bold uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Destinations", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-sm font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h4 className="text-sm font-body font-bold uppercase tracking-wider mb-5">Visa Services</h4>
            <ul className="space-y-3">
              {["🇺🇸 US Visa", "🇬🇧 UK Visa", "🇦🇪 UAE Visa", "🇨🇦 Canada Visa", "🇦🇺 Australia Visa", "🇪🇺 Schengen Visa", "🇸🇦 Saudi Visa", "🇶🇦 Qatar Visa"].map((visa) => (
                <li key={visa}>
                  <a href="#services" className="text-sm font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {visa}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-body font-bold uppercase tracking-wider mb-5">Stay Updated</h4>
            <p className="text-sm font-body text-primary-foreground/70 mb-4">
              Subscribe to get the latest travel deals and visa updates.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/40 focus:ring-2 focus:ring-secondary/50 outline-none"
              />
              <button className="px-6 py-3 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-xl hover:opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-primary-foreground/50">
            © 2026 Smart Pro Visa. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs font-body text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
