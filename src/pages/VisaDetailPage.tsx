import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { visaData } from "@/data/visaData";
import { CheckCircle2, Clock, Globe, ArrowRight, ShieldCheck } from "lucide-react";

const VisaDetailPage = () => {
    const { countryId } = useParams<{ countryId: string }>();
    const data = countryId ? visaData[countryId] : null;

    if (!data) {
        return (
            <div className="py-20 text-center container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Visa Information Not Found</h2>
                <p className="text-muted-foreground mb-8">Sorry, we couldn't find information for this destination.</p>
                <Link to="/" className="text-secondary font-semibold hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative py-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-5xl lg:text-6xl mb-4">{data.flag}</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
                            {data.name} Visa Services
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-body">
                            {data.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/#contact" className="px-8 py-3 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 transition-all shadow-gold">
                                Apply Now
                            </a>
                            <a href="#requirements" className="px-8 py-3 bg-primary-foreground/10 text-primary-foreground font-body font-bold rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all">
                                Requirements
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <Clock className="h-6 w-6 text-secondary mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Processing</p>
                            <p className="text-sm font-body font-semibold text-foreground">{data.processingTime}</p>
                        </div>
                        <div className="text-center">
                            <ShieldCheck className="h-6 w-6 text-secondary mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Validity</p>
                            <p className="text-sm font-body font-semibold text-foreground">{data.validity}</p>
                        </div>
                        <div className="text-center">
                            <Globe className="h-6 w-6 text-secondary mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Entry Type</p>
                            <p className="text-sm font-body font-semibold text-foreground">{data.entryType}</p>
                        </div>
                        <div className="text-center">
                            <div className="h-6 w-6 flex items-center justify-center mx-auto mb-2">
                                <span className="text-secondary font-bold">$</span>
                            </div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Starting From</p>
                            <p className="text-sm font-body font-semibold text-foreground">{data.price}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section id="requirements" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Requirements */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Requirements</h2>
                            <ul className="space-y-4">
                                {data.requirements.map(req => (
                                    <li key={req} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Steps */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Process Steps</h2>
                            <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-0 before:w-px before:bg-border">
                                {data.steps.map((step, idx) => (
                                    <div key={idx} className="relative pl-14">
                                        <div className="absolute left-0 top-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center font-display font-bold text-lg shadow-gold">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center text-primary">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {data.faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 bg-card rounded-2xl shadow-card border border-border">
                                <h4 className="text-lg font-display font-bold text-foreground mb-3">{faq.question}</h4>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 container mx-auto px-4 text-center">
                <div className="bg-primary p-12 rounded-[2.5rem] shadow-card relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-body">
                        Let our experts handle the paperwork. Get a free consultation for your {data.name} visa today.
                    </p>
                    <a href="/#contact" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-body font-bold text-lg rounded-full hover:opacity-90 transition-all shadow-gold group">
                        Consult with Experts <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default VisaDetailPage;
