import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Visa Assistance for 50+ Countries",
      description: "Covering Europe, Asia, the Americas, and the Middle East."
    },
    {
      title: "Specialists in Tourist & Business Visas",
      description: "Focused expertise means higher accuracy and faster approvals."
    },
    {
      title: "Personalized End-to-End Support",
      description: "From choosing the right visa type to documentation, scheduling, and follow-ups — we handle it all."
    },
    {
      title: "Trusted Professionals",
      description: "Our consultants understand embassy procedures and ensure your file meets all requirements."
    },
    {
      title: "Transparent Process",
      description: "No hidden costs, no misleading promises — only clear steps and reliable service."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Why Choose Smotvisa?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;