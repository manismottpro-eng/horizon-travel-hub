import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import travelersImg from "@/assets/travelers.jpg";

const highlights = [
  "10+ Years of Experience in Visa Processing",
  "Trusted by 5000+ Happy Travelers",
  "99% Visa Approval Success Rate",
  "Dedicated Support Team Available 24/7",
  "Specialization in US, Schengen, Australia, UK, Dubai Visa & OCI",
  "Transparent Pricing with No Hidden Fees",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={travelersImg} alt="Happy travelers" className="w-full h-[450px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-gold font-body">
              <div className="text-3xl font-display font-bold">10+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">About Smotvisa</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3 mb-4">
              India’s Trusted Visa Experts
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              At Smotvisa, we simplify your international travel dreams with expert visa assistance trusted across India. 
              Whether you’re traveling for business, tourism, or family visits, our mission is to make your visa experience 
              smooth, fast, and stress-free.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              With a pan-India presence and a decade of proven expertise, we’ve helped thousands of travelers successfully 
              secure visas for destinations around the world. Our specialization includes US B1/B2 Visa, Schengen Visa, 
              Australia Visa, UK Visa, Dubai Visa, and OCI (Overseas Citizen of India) services.
            </p>
            <div className="space-y-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-full hover:opacity-90 transition-all"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;