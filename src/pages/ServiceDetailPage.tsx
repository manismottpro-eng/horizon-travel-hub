import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plane, MapPin, Ticket, Headphones, CheckCircle2 } from "lucide-react";

const serviceData: Record<string, any> = {
    "air-ticketing": {
        title: "Premium Air Ticketing",
        icon: Plane,
        description: "Experience the convenience of seamless flight bookings with our premium air ticketing services. We partner with leading airlines worldwide to bring you the best fares and flexible travel options.",
        features: [
            { title: "Best Fare Guarantee", description: "We monitor prices constantly to ensure you get the most competitive rates for your flights." },
            { title: "24/7 Booking Support", description: "Need to change a flight at 3 AM? Our dedicated team is always here to assist you." },
            { title: "Group Reservations", description: "Planning a corporate trip or family reunion? We handle multi-passenger bookings with ease." },
            { title: "Flexible Cancellations", description: "Choose fares with lenient cancellation policies to travel with peace of mind." }
        ]
    },
    "tours": {
        title: "Curated Tours & Packages",
        icon: MapPin,
        description: "Discover the world's most breathtaking destinations with our hand-picked tour packages. Whether you're seeking adventure, relaxation, or culture, we have the perfect itinerary for you.",
        features: [
            { title: "Hand-Picked Hotels", description: "We only partner with top-rated hotels that meet our strict quality and service standards." },
            { title: "Local Expert Guides", description: "Our local guides don't just show you the sights; they tell the stories that make a place come alive." },
            { title: "Customized Itineraries", description: "Want to skip a temple and add a beach day? Your wish is our command." },
            { title: "Seamless Logistics", description: "From airport pickups to local transport, every detail is meticulously planned for your comfort." }
        ]
    },
    "visa-services": {
        title: "Expert Visa Consulting",
        icon: Ticket,
        description: "Navigating visa requirements can be complex. Our experienced consultants provide end-to-end support for a wide range of visa types, ensuring your application is accurate and timely.",
        features: [
            { title: "Detailed Document Review", description: "We meticulously check every document to minimize the risk of rejection." },
            { title: "Appointment Management", description: "We handle the stress of securing early interview slots and managing submissions." },
            { title: "Regular Status Updates", description: "Stay informed at every step of your application process with real-time notifications." },
            { title: "50+ Countries Supported", description: "Global reach with local expertise in US, UK, Schengen, and Commonwealth visas." }
        ]
    }
};

const ServiceDetailPage = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const data = serviceId ? serviceData[serviceId] : null;

    if (!data) {
        return (
            <div className="py-20 text-center container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Service Not Found</h2>
                <p className="text-muted-foreground mb-8">Sorry, we couldn't find the service you're looking for.</p>
                <Link to="/" className="text-secondary font-semibold hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-background">
            <section className="relative py-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                            <data.icon className="h-8 w-8 text-secondary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
                            {data.title}
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-body">
                            {data.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.features.map((feature: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-card rounded-[2rem] shadow-card border border-border group hover:shadow-elevated transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.title}</h3>
                                        <p className="text-sm font-body text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/50 border-y border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Why Choose Our {data.title}?</h2>
                    <div className="grid sm:grid-cols-3 gap-12 mt-16">
                        <div>
                            <div className="text-4xl font-display font-bold text-secondary mb-2">10k+</div>
                            <p className="text-sm font-body text-muted-foreground">Successful Bookings</p>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-secondary mb-2">99%</div>
                            <p className="text-sm font-body text-muted-foreground">Client Satisfaction</p>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-secondary mb-2">24/7</div>
                            <p className="text-sm font-body text-muted-foreground">Dedicated Support</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4 text-center">
                <div className="bg-primary p-12 rounded-[2.5rem] shadow-card relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Start Your Journey with Us</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-body">
                        Get a custom quote for our {data.title.toLowerCase()} today.
                    </p>
                    <a href="/#contact" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-body font-bold text-lg rounded-full hover:opacity-90 transition-all shadow-gold group">
                        Contact Us Now <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;
