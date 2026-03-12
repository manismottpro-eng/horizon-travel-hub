import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navigationData";
import logo from "../assets/small.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md shadow-card border-b border-primary-foreground/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
            <img src={logo} alt="SMOT VISA" className="h-16 w-auto" />
            <div>
              <h1 className="font-display font-bold text-2xl text-primary-foreground">SMOT VISA</h1>
              <p className="text-xs font-body text-primary-foreground/70 uppercase tracking-wider">Visa & Travel Agency</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 font-body">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">
                      {link.label} <ChevronDown className="h-3 w-3" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-elevated border border-border p-2"
                        >
                          {link.dropdown.map((item: any) => (
                            <div
                              key={item.id}
                              className="relative"
                              onMouseEnter={() => item.submenu && setActiveSubmenu(item.id)}
                              onMouseLeave={() => item.submenu && setActiveSubmenu(null)}
                            >
                              <Link
                                to={item.href}
                                onClick={handleLinkClick}
                                className="flex items-center justify-between px-3 py-2.5 text-sm rounded-lg hover:bg-muted transition-colors text-foreground"
                              >
                                <span>{item.name}</span>
                                {item.submenu && <ChevronDown className="h-3 w-3 -rotate-90" />}
                              </Link>

                              <AnimatePresence>
                                {item.submenu && activeSubmenu === item.id && (
                                  <motion.div
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 8 }}
                                    className="absolute top-0 left-full ml-1 w-56 bg-card rounded-xl shadow-elevated border border-border p-2"
                                  >
                                    {item.submenu.map((sub: any) => (
                                      <Link
                                        key={sub.id}
                                        to={sub.href}
                                        onClick={handleLinkClick}
                                        className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-foreground"
                                      >
                                        <span className="text-lg">{sub.flag}</span>
                                        <span>{sub.name}</span>
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 transition-all shadow-gold"
            >
              Get a Quote
            </Link>
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
                        {link.dropdown.map((item: any) => (
                          <div key={item.id}>
                            {item.submenu ? (
                              <>
                                <button
                                  onClick={() => setActiveSubmenu(activeSubmenu === item.id ? null : item.id)}
                                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                                >
                                  <span>{item.name}</span>
                                  <ChevronDown className={`h-3 w-3 transition-transform ${activeSubmenu === item.id ? "rotate-180" : ""}`} />
                                </button>
                                {activeSubmenu === item.id && (
                                  <div className="pl-4 mt-1 grid grid-cols-2 gap-1">
                                    {item.submenu.map((sub: any) => (
                                      <Link
                                        key={sub.id}
                                        to={sub.href}
                                        onClick={handleLinkClick}
                                        className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                                      >
                                        <span>{sub.flag}</span>
                                        <span>{sub.name.replace(" Visa", "")}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={item.href}
                                onClick={handleLinkClick}
                                className="flex items-center justify-between w-full px-4 py-2.5 text-sm rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                              >
                                <span>{item.name}</span>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="p-4 pt-0">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;