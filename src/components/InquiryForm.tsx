import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const InquiryForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-lg lg:ml-auto"
        >
            <form onSubmit={handleSubmit} className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10 space-y-5">
                <h3 className="text-2xl font-display font-bold text-foreground">Send an Inquiry</h3>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Phone Number</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="+91 00000 00000"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Service Needed</label>
                    <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all appearance-none cursor-pointer"
                    >
                        <option value="">Select a service</option>
                        <option value="passport">Passport Services</option>
                        <option value="visa-consulting">Visa Consulting</option>
                        <option value="tourist-visa">Tourist Visa</option>
                        <option value="business-visa">Business Visa</option>
                        <option value="flight">Flight Booking</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Detail Message</label>
                    <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                        placeholder="Tell us about your requirements..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-secondary text-secondary-foreground font-body font-bold text-base rounded-2xl shadow-gold hover:opacity-90 transition-all group mt-2"
                >
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Submit Inquiry
                </button>
            </form>
        </motion.div>
    );
};

export default InquiryForm;
