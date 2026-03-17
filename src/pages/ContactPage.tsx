import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Globe, Star, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { offices, Office } from "../data/officeData";
import { toast } from "../hooks/use-toast";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [activeOffice, setActiveOffice] = useState<Office>(offices[0]);
    const [isLoading, setIsLoading] = useState(false);
    const { branchId } = useParams<{ branchId: string }>();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);

    // Redirect from query parameter to SEO-friendly URL
    useEffect(() => {
        const branchParam = searchParams.get("branch");
        if (branchParam) {
            navigate(`/contact/${branchParam}`, { replace: true });
        }
    }, [navigate, searchParams]);

    // Set active office based on URL parameter
    useEffect(() => {
        if (branchId) {
            const office = offices.find(office => office.id === branchId);
            if (office) {
                setActiveOffice(office);
            }
        }
    }, [branchId]);

    // Update URL when active office changes
    const handleOfficeChange = (office: Office) => {
        setActiveOffice(office);
        navigate(`/contact/${office.id}`);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://smot-pro-backend-visa.vercel.app/api/send-email", {
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
        <div className="min-h-[80vh] flex flex-col pt-24 pb-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Connect With Us</span>
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">
                        Get in Touch
                    </h1>
                    <p className="text-muted-foreground font-body text-sm max-w-xl mx-auto">
                        We're here to help you with your visa and travel needs. Select an office to see contact details and location.
                    </p>
                </motion.div>

                {/* Office Switcher Tabs - More compact */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {offices.map((office) => (
                        <button
                            key={office.id}
                            onClick={() => handleOfficeChange(office)}
                            className={`px-4 py-2 rounded-full font-body font-bold text-xs transition-all shadow-sm ${activeOffice.id === office.id
                                ? "bg-secondary text-secondary-foreground shadow-gold"
                                : "bg-card text-muted-foreground hover:bg-muted border border-border"
                                }`}
                        >
                            {office.city}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-12 gap-6 items-start">
                    {/* Left Side: Info & Map (Visible together) */}
                    <div className="lg:col-span-4 space-y-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeOffice.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-primary rounded-2xl p-6 text-primary-foreground shadow-card relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Globe className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-display font-bold mb-1">{activeOffice.name}</h3>
                                <p className="text-primary-foreground/60 text-xs mb-4 font-body">{activeOffice.city} Office</p>

                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                                        <p className="text-xs font-body leading-relaxed">{activeOffice.address}</p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Phone className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                                        <div className="space-y-0.5">
                                            {activeOffice.phone.map((p, i) => (
                                                <p key={i} className="text-xs font-body font-medium">{p}</p>
                                            ))}
                                        </div>
                                    </div>

                                    {activeOffice.email && (
                                        <div className="flex items-start gap-3">
                                            <Mail className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                                            <p className="text-xs font-body font-medium">{activeOffice.email}</p>
                                        </div>
                                    )}

                                    <div className="pt-2">
                                        <Link
                                            to={`/offices/${activeOffice.id}`}
                                            className="inline-flex items-center gap-1.5 text-[10px] font-body font-bold text-secondary hover:text-white transition-colors"
                                            onClick={() => window.scrollTo(0, 0)}
                                        >
                                            <Info className="h-3 w-3" /> View Office Details
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Map embed - Reduced height for compact view */}
                        <motion.div
                            key={`map-${activeOffice.id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="rounded-2xl overflow-hidden shadow-card border border-border h-48 relative"
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

                    {/* Right Side: Form (Reduced size) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-8"
                    >
                        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card border border-border p-6 md:p-8 space-y-4">
                            <h3 className="text-xl font-display font-bold text-foreground mb-2">Send an Inquiry</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground font-body text-xs focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground font-body text-xs focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground font-body text-xs focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-wider">Service Needed</label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground font-body text-xs focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all appearance-none"
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
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-wider">Detail Message</label>
                                <textarea
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground font-body text-xs focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-xl shadow-gold hover:opacity-90 transition-all group mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Submit Inquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;