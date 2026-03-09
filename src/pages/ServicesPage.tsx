import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { visaCountries } from "@/data/navigationData";
import { servicesData } from "@/data/servicesData";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm font-body mb-8">
                    <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors">Home</Link>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-foreground font-semibold">Services</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Our Expertise</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Premium Travel & Visa Services
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                        From expert visa processing to end-to-end tour planning, we take the stress out of travel.
                    </p>
                </motion.div>

                {/* Main Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {servicesData.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 bg-card rounded-2xl shadow-card border border-border group hover:shadow-elevated transition-all"
                        >
                            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                <service.icon className="h-7 w-7 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                            <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm font-body text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link to={service.href} className="inline-flex items-center gap-2 text-sm font-body font-bold text-secondary hover:underline group-hover:gap-3 transition-all">
                                Detailed Information <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Visa Services Detailed Grid */}
                <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-foreground">Global Visa Destinations</h2>
                        <p className="text-muted-foreground font-body mt-3">Comprehensive visa processing for over 50+ countries worldwide.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {visaCountries.map((country, idx) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group p-6 bg-card rounded-2xl shadow-sm border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{country.flag}</div>
                                <h4 className="text-xl font-display font-bold text-foreground mb-1">{country.name}</h4>
                                <p className="text-xs font-body text-muted-foreground mb-4 uppercase tracking-widest">Visa Assistance</p>
                                <Link
                                    to={country.href}
                                    className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-secondary hover:underline"
                                >
                                    Requirements <ArrowRight className="h-3 w-3" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-primary rounded-3xl p-12 text-primary-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <ArrowRight className="w-48 h-48 rotate-45" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-display font-bold mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-primary-foreground/70 font-body mb-8 max-w-xl mx-auto">
                            Contact our expert consultants today for a free evaluation of your visa eligibility or to book your next tour.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 transition-all shadow-gold">
                            Get Started Now <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
