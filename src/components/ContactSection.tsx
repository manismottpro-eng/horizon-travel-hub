import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Globe, Star } from "lucide-react";
import { useState } from "react";
import { offices, Office } from "@/data/officeData";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [activeOffice, setActiveOffice] = useState<Office>(offices[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your inquiry has been sent. We'll get back to you soon.",
          variant: "default",
        });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send your inquiry. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error",
        description: "Failed to send your inquiry. Please check your internet connection.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Connect With Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Our Global Presence
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            The status of the customer needs is monitored online with the help of our state of technology.
          </p>
        </motion.div>

        {/* Office Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {offices.map((office) => (
            <button
              key={office.id}
              onClick={() => setActiveOffice(office)}
              className={`px-6 py-3 rounded-full font-body font-bold text-sm transition-all shadow-sm ${activeOffice.id === office.id
                ? "bg-secondary text-secondary-foreground shadow-gold"
                : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
            >
              {office.city} Office
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info & Map */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-primary rounded-3xl p-8 text-primary-foreground shadow-card relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Globe className="w-24 h-24" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{activeOffice.name}</h3>
                <p className="text-primary-foreground/60 text-sm mb-8 font-body">{activeOffice.city} Location</p>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-foreground/10 rounded-xl">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 font-body mb-1">Address</p>
                      <p className="text-sm font-body leading-relaxed">{activeOffice.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-foreground/10 rounded-xl">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 font-body mb-1">Phone</p>
                      {activeOffice.phone.map((p, i) => (
                        <p key={i} className="text-sm font-body font-medium">{p}</p>
                      ))}
                    </div>
                  </div>

                  {activeOffice.email && (
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary-foreground/10 rounded-xl">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-primary-foreground/60 font-body mb-1">Email</p>
                        <p className="text-sm font-body font-medium">{activeOffice.email}</p>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary text-xs font-bold rounded-lg transition-colors border border-secondary/30"
                    >
                      <Star className="h-3 w-3 fill-secondary" /> Add Review
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Map embed */}
            <motion.div
              key={`map-${activeOffice.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl overflow-hidden shadow-card border border-border h-64 relative"
            >
              <iframe
                src={activeOffice.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`${activeOffice.city} Office Location`}
              />
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl shadow-card border border-border p-8 md:p-10 space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground">Send an Inquiry</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="us-visa">Passport Services</option>
                    <option value="uk-visa">Visa Consulting</option>
                    <option value="gcc-visa">Tourist Visa</option>
                    <option value="schengen-visa">Business Visa</option>
                    <option value="flight">Flight Booking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider">Detail Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-secondary text-secondary-foreground font-body font-bold text-base rounded-2xl shadow-gold hover:opacity-90 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
