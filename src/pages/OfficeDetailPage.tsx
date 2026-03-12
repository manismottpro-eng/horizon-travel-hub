import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { offices } from "@/data/officeData";
import { MapPin, Phone, Mail, Globe, ArrowLeft, CheckCircle2, Building2, Info } from "lucide-react";

const OfficeDetailPage = () => {
    const { officeId } = useParams<{ officeId: string }>();
    const office = offices.find((o) => o.id === officeId);

    if (!office) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <div className="text-center">
                    <h2 className="text-2xl font-display font-bold mb-4">Office not found</h2>
                    <Link to="/contact" className="text-secondary hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft className="h-4 w-4" /> Back to Contact
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section */}
            <section className="bg-primary py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Contact
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
                            {office.name}
                        </h1>
                        <div className="flex items-center gap-2 text-secondary font-body font-semibold uppercase tracking-wider text-sm">
                            <MapPin className="h-4 w-4" /> {office.city} Office
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 text-secondary mb-2">
                                <Info className="h-5 w-5" />
                                <h2 className="text-xl font-display font-bold uppercase tracking-widest text-foreground">Overview</h2>
                            </div>
                            <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                {office.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 pt-4">
                                {office.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                        <span className="font-body text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* About the Organization */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground relative overflow-hidden shadow-elevated"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Building2 className="w-32 h-32" />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <h2 className="text-3xl font-display font-bold">About Our Organization</h2>
                                <p className="text-primary-foreground/80 font-body leading-relaxed max-w-2xl">
                                    {office.aboutOrg}
                                </p>
                                <div className="pt-4">
                                    <Link
                                        to="/#about"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 transition-all"
                                    >
                                        Learn More About Us
                                    </Link>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar / Quick Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-3xl border border-border p-8 shadow-card sticky top-32"
                        >
                            <h3 className="text-xl font-display font-bold mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-xl">
                                        <MapPin className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-body font-bold uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-sm font-body leading-relaxed">{office.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-xl">
                                        <Phone className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-body font-bold uppercase tracking-wider mb-1">Phone</p>
                                        {office.phone.map((p, i) => (
                                            <p key={i} className="text-sm font-body font-medium">{p}</p>
                                        ))}
                                    </div>
                                </div>

                                {office.email && (
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary/10 rounded-xl">
                                            <Mail className="h-5 w-5 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-body font-bold uppercase tracking-wider mb-1">Email</p>
                                            <p className="text-sm font-body font-medium">{office.email}</p>
                                        </div>
                                    </div>
                                )}

                                {office.website && (
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary/10 rounded-xl">
                                            <Globe className="h-5 w-5 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-body font-bold uppercase tracking-wider mb-1">Website</p>
                                            <a href={`https://${office.website}`} target="_blank" rel="noopener noreferrer" className="text-sm font-body font-medium text-secondary hover:underline">
                                                {office.website}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-10 pt-8 border-t border-border">
                                <h4 className="text-sm font-body font-bold mb-4">Find us on Map</h4>
                                <div className="rounded-2xl overflow-hidden h-48 border border-border">
                                    <iframe
                                        src={office.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title={`${office.city} Office Map`}
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    to="/contact"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-secondary-foreground font-body font-bold rounded-xl shadow-gold hover:opacity-90 transition-all"
                                >
                                    Book a Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeDetailPage;
