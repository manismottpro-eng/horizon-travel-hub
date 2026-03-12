import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import travelersImg from "@/assets/travelers.jpg";

const highlights = [
    "10+ Years of Experience in Visa Processing",
    "Trusted by 5000+ Happy Travelers",
    "99% Visa Approval Success Rate",
    "Dedicated Support Team Available 24/7",
    "Partnerships with Top Airlines & Hotels",
    "Transparent Pricing with No Hidden Fees",
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 mb-8">
                <nav className="flex items-center gap-2 text-sm font-body">
                    <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors">Home</Link>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-foreground font-semibold">About Us</span>
                </nav>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-elevated">
                            <img src={travelersImg} alt="Happy travelers" className="w-full h-[500px] object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-8 rounded-2xl shadow-gold font-body">
                            <div className="text-4xl font-display font-bold">10+</div>
                            <div className="text-sm font-medium uppercase tracking-wider">Years of Excellence</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Our Story</span>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                            Making Travel Dreams Come True Since 2018
                        </h1>
                        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                            Smart Pro Visa is a leading visa and travel consultancy dedicated to simplifying your travel experience.
                            Whether you need a visa for the US, UK, GCC countries, or anywhere else in the world — we handle the entire
                            process from documentation to approval, so you can focus on packing your bags.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                                    <span className="text-sm font-body text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-full hover:opacity-90 transition-all shadow-card"
                            >
                                Connect With Us <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Vision/Mission Section */}
                <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { title: "Our Mission", desc: "To provide hassle-free and transparent travel solutions to every client." },
                        { title: "Our Vision", desc: "To be the most trusted name in international travel and visa consultancy." },
                        { title: "Our Values", desc: "Integrity, transparency, and a customer-first approach in everything we do." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-card rounded-2xl border border-border hover:shadow-card transition-all"
                        >
                            <h3 className="text-xl font-display font-bold text-foreground mb-4">{item.title}</h3>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
