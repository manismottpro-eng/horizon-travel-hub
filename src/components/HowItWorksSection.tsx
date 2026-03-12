import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation & Profile Review",
      description: "Tell us your destination and travel purpose. We’ll guide you on the right visa category and requirements."
    },
    {
      number: "02",
      title: "Document Preparation & Submission",
      description: "We review, verify, and organize your documents to ensure 100% compliance."
    },
    {
      number: "03",
      title: "Tracking & Support Until Approval",
      description: "Stay updated at every stage — from embassy submission to visa stamping."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Simple 3 Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-12 -left-4 w-20 h-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-display font-bold text-2xl shadow-gold">
                {step.number}
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-card border border-border relative z-10">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-secondary" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;