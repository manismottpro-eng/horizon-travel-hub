import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { visaData } from "@/data/visaData";
import { CheckCircle2, Clock, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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

            {/* Visa Types */}
            {data.id === "australia" && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Australia Visa Types</h2>
                            
                            {/* Tourist Visa */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Australia Tourist Visa (Subclass 600 – Tourist Stream)</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    Australia offers a Tourist Visa for Indians who want to:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Explore cities like Sydney, Melbourne, Perth, Gold Coast & Brisbane</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Visit family & friends living in Australia</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Enjoy beaches, wildlife, road trips, and attractions</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Attend non-business, leisure activities</span>
                                    </div>
                                </div>
                                <p className="text-sm font-body text-muted-foreground mt-6">
                                    Validity usually ranges from 3 months to 12 months, depending on your travel plan and profile.
                                </p>
                            </div>

                            {/* Business Visa */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Australia Business Visa (Subclass 600 – Business Stream)</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    This visa is for Indian travelers who need to visit Australia for:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Business meetings</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Industry events or exhibitions</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Conferences or seminars</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Negotiations or short business trips</span>
                                    </div>
                                </div>
                                <p className="text-sm font-body text-muted-foreground mt-6">
                                    It does not permit employment. Smotvisa ensures your documentation clearly reflects your business purpose to avoid delays.
                                </p>
                            </div>

                            {/* Why Choose Smotvisa */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Why Choose Smotvisa for Your Australia Visa?</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    Smotvisa – India’s Trusted Visa Agents
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Pan-India branches for local support</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">6+ years of visa expertise</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">High success rate due to correct documentation</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Zero guesswork — only clear, step-by-step guidance</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Transparent pricing</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Fast processing with complete file preparation</span>
                                    </div>
                                </div>
                                <p className="text-sm font-body text-muted-foreground mt-6">
                                    We ensure your application is professionally prepared to avoid delays or refusals.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* UK Visa Types */}
            {data.id === "uk" && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">UK Visa Types</h2>
                            
                            {/* Tourist Visa */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">UK Tourist Visa for Indians</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    The UK Standard Visitor Visa (Tourist Stream) allows Indian travellers to:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Explore the UK for holidays and sightseeing</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Visit family and friends</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Attend cultural events, ceremonies, or non-business activities</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Take short leisure trips across England, Scotland, Wales & Northern Ireland</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <span className="font-semibold text-foreground">Visa Type:</span>
                                            <span className="text-muted-foreground ml-2">Standard Visitor Visa (Tourist Stream)</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-foreground">Validity:</span>
                                            <span className="text-muted-foreground ml-2">6 months / 2 years / 5 years / 10 years (multiple-entry)</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-foreground">Stay Duration:</span>
                                            <span className="text-muted-foreground ml-2">Up to 6 months per visit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Visa */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">UK Business Visitor Visa for Indians</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    The Business Visitor Visa (Standard Visitor – Business) is ideal for:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Attending business meetings</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Participating in conferences, seminars, or events</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Signing contracts or negotiations</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Industry exhibitions and trade fairs</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Short official training sessions (non-paid)</span>
                                    </div>
                                </div>
                                <p className="text-sm font-body text-muted-foreground mt-6 font-semibold">
                                    Important: This visa does not allow employment or paid work in the UK.
                                </p>
                            </div>

                            {/* Why Choose Smotvisa */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Why Choose Smotvisa?</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    Smotvisa – India’s Trusted UK Visa Consultants
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Expert UK visa consultants with multiple years of experience</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Pan-India branch presence for easy access</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">100% personalized support — no automated templates</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Strong documentation preparation for higher approval chances</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Fast turnaround and transparent service</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">End-to-end handling: forms, documents, biometrics & tracking</span>
                                    </div>
                                </div>
                                <p className="text-sm font-body text-muted-foreground mt-6">
                                    Your UK visa process becomes effortless with our guidance.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Canada Visa Types */}
            {data.id === "canada" && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Canada Visa Types</h2>
                            
                            {/* Tourist Visa */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Canada Tourist Visa (Visitor Visa)</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    A Canada Tourist Visa allows Indian travellers to:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Visit Canada for holidays and tourism</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Explore cities, attractions & natural landscapes</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Visit family and friends</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Attend non-business events or leisure activities</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <span className="font-semibold text-foreground">Visa Type:</span>
                                            <span className="text-muted-foreground ml-2">Temporary Resident Visa (TRV)</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-foreground">Entry Type:</span>
                                            <span className="text-muted-foreground ml-2">Single or Multiple-entry (valid up to 10 years)</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-foreground">Stay Duration:</span>
                                            <span className="text-muted-foreground ml-2">Usually up to 6 months per visit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Visa */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Canada Business Visitor Visa</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    This visa is for Indians traveling to Canada for short business-related activities such as:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Attending business meetings</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Participating in conferences or seminars</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Attending trade fairs, exhibitions, or industry events</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Negotiating or discussing contracts</span>
                                    </div>
                                </div>
                                <p className="text-sm font-body text-muted-foreground mt-6 font-semibold">
                                    Important: This visa does not allow employment or paid work in Canada.
                                </p>
                            </div>

                            {/* Why Choose Smotvisa */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Why Choose Smotvisa?</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                                    Smotvisa – India’s Trusted Visa Consultants
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Experienced visa experts for Canada applications</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Pan-India branch support for easy access</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">End-to-end assistance from document prep to biometrics</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Clear, transparent guidance with no hidden fees</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">High success rate due to accurate file preparation</span>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-body text-foreground">Fast processing with error-free applications</span>
                                    </div>
                                </div>
                                <p className="text-sm font-body text-muted-foreground mt-6">
                                    Your application is treated professionally from start to finish.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Why Choose Us */}
            {data.id === "us" && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Why Choose SmotVisa for Your USA Visa?</h2>
                            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 text-center">
                                Your Trusted Partner for USA Visa Assistance. Dreaming of visiting the United States for business, tourism or for family reunions? 
                                At SmotVisa, we make the complex USA visa process simple, transparent, and stress-free for Indian applicants. 
                                With years of expertise and a proven track record, our team ensures you get end-to-end guidance tailored to your visa needs.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-card rounded-2xl shadow-card border border-border">
                                    <h3 className="text-xl font-display font-bold text-foreground mb-4">Expert Consultation</h3>
                                    <p className="text-sm font-body text-muted-foreground">Personalized guidance on the right visa type (B1/B2).</p>
                                </div>
                                <div className="p-6 bg-card rounded-2xl shadow-card border border-border">
                                    <h3 className="text-xl font-display font-bold text-foreground mb-4">Hassle-Free Documentation</h3>
                                    <p className="text-sm font-body text-muted-foreground">We help you prepare error-free applications and supporting papers.</p>
                                </div>
                                <div className="p-6 bg-card rounded-2xl shadow-card border border-border">
                                    <h3 className="text-xl font-display font-bold text-foreground mb-4">Mock Interviews & Preparation</h3>
                                    <p className="text-sm font-body text-muted-foreground">Boost your confidence with our one-on-one training sessions.</p>
                                </div>
                                <div className="p-6 bg-card rounded-2xl shadow-card border border-border">
                                    <h3 className="text-xl font-display font-bold text-foreground mb-4">Step-by-Step Support</h3>
                                    <p className="text-sm font-body text-muted-foreground">From DS-160 form filling to appointment scheduling, we handle it all.</p>
                                </div>
                                <div className="p-6 bg-card rounded-2xl shadow-card border border-border md:col-span-2">
                                    <h3 className="text-xl font-display font-bold text-foreground mb-4">High Success Rate</h3>
                                    <p className="text-sm font-body text-muted-foreground">Trusted by thousands of applicants across India.</p>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4 text-center">Simple, Transparent, and Reliable</h3>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed text-center">
                                    Applying for a U.S. visa can feel overwhelming, but with SmotVisa, you are never alone. 
                                    Our experts walk you through every step, ensuring accuracy and increasing your chances of approval.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

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
                    <Accordion type="single" collapsible className="space-y-4">
                        {data.faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                                <AccordionTrigger className="px-6 text-left hover:no-underline">
                                    <span className="text-lg font-display font-bold text-foreground">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="px-6">
                                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
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
