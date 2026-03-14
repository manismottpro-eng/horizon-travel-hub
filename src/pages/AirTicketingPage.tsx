import { motion } from "framer-motion";
import { ArrowRight, Plane, Users, Ticket, Clock, Shield, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AirTicketingPage = () => {
  const faqs = [
    {
      question: "How can I book international flights from India with Smotvisa?",
      answer: "You can contact Smotvisa’s travel consultants who will help you choose the best flight options based on your destination, travel dates, and budget. Our team will assist you with the entire booking process and confirm your tickets quickly."
    },
    {
      question: "What are the best airlines for international flights from India?",
      answer: "The best airlines depend on your destination and travel preferences. Smotvisa helps travelers choose reliable airlines that offer comfortable travel, convenient routes, and competitive pricing."
    },
    {
      question: "When is the best time to book international flights from India?",
      answer: "Booking flights several weeks in advance often helps travelers secure better prices. However, flight prices depend on travel demand, season, and airline availability. Smotvisa helps you find the best booking time for your trip."
    },
    {
      question: "Can Smotvisa help with both flight booking and visa assistance?",
      answer: "Yes. Smotvisa specializes in both international flight booking and visa assistance, which makes it easier for travelers to plan their international journeys with proper travel timelines."
    },
    {
      question: "Do you provide group flight booking services?",
      answer: "Yes. Smotvisa assists with family travel, corporate travel, and group flight bookings, ensuring convenient travel schedules and competitive fares for multiple travelers."
    },
    {
      question: "Can I change my flight after booking?",
      answer: "Flight change options depend on the airline’s policy and ticket type. Smotvisa helps travelers choose tickets that offer flexible options whenever possible."
    }
  ];

  const features = [
    {
      icon: Plane,
      title: "Expert Travel Consultation",
      description: "Our experienced team analyzes flight routes, transit times, airline reliability, and travel convenience to help you choose the best international flights from India."
    },
    {
      icon: Ticket,
      title: "Competitive International Airfares",
      description: "Air ticket prices change frequently. Smotvisa helps travelers secure competitive international flight fares by identifying the best options available at the time of booking."
    },
    {
      icon: Clock,
      title: "Smooth Booking Experience",
      description: "From flight selection to ticket confirmation, Smotvisa manages the entire process with a focus on simplicity and efficiency."
    },
    {
      icon: Shield,
      title: "Visa-Aligned Travel Planning",
      description: "We help you select flights that align with your visa process and travel requirements, ensuring a seamless travel experience."
    },
    {
      icon: Users,
      title: "Group and Family Booking",
      description: "We assist with family vacation flight bookings, group travel arrangements, corporate travel planning, and educational or student group travel."
    },
    {
      icon: Globe,
      title: "Complete Travel Support",
      description: "Smotvisa offers more than just flight booking. We support travelers with visa assistance, tour packages, travel documentation, and travel insurance."
    }
  ];

  const destinations = [
    "United States",
    "United Kingdom",
    "Europe (Schengen countries)",
    "Australia",
    "Dubai and UAE",
    "Southeast Asia",
    "Canada"
  ];

  const services = [
    { icon: "✈️", title: "International Flight Booking", desc: "Helping travelers find the best flights for global destinations." },
    { icon: "📋", title: "Visa Assistance", desc: "Expert support for US B1/B2 visa, Schengen visa, UK visa, Australia visa, Dubai visa, and other visa applications." },
    { icon: "🏨", title: "International Tour Packages", desc: "Customized travel packages that include hotels, sightseeing, and guided experiences." },
    { icon: "📄", title: "Travel Documentation Guidance", desc: "Support with travel documents required for international journeys." },
    { icon: "🛡️", title: "Travel Insurance Assistance", desc: "Guidance on selecting travel insurance for international trips." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <Plane className="h-5 w-5 text-secondary" />
              <span className="text-sm font-body font-semibold text-secondary">International Flight Booking</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Best International Flights from India
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Book the Best International Flights from India with Smotvisa. Finding the right flights can be challenging, 
              but our experts simplify the process by helping you find the most convenient and affordable options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
              Why Choose Smotvisa for International Flight Booking?
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Booking international flights online can sometimes be confusing due to fluctuating prices, multiple airline 
              options, and travel restrictions. Smotvisa helps travelers navigate these challenges by providing expert 
              assistance and personalized flight recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-card border border-border p-6 hover:shadow-elevated transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              Popular International Destinations
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Smotvisa offers international air ticket booking services from India to popular global destinations
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {destinations.map((destination, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-body text-muted-foreground hover:bg-secondary/10 transition-all"
              >
                {destination}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              Complete Travel Support from Smotvisa
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Smotvisa offers more than just flight booking. Our goal is to support travelers with complete international travel services
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-border p-4 text-center"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="text-sm font-display font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-xs font-body text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-xl border border-border overflow-hidden"
                >
                  <details className="group">
                    <summary className="cursor-pointer flex items-center justify-between px-6 py-4 list-none">
                      <span className="font-body font-semibold text-foreground">{faq.question}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-90" />
                    </summary>
                    <div className="px-6 pb-4 text-sm font-body text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
              Book Your Flight Today!
            </h3>
            <p className="text-blue-100 font-body max-w-2xl mx-auto mb-6">
              Choose the right flight can make a huge difference in your travel experience. With Smotvisa, you receive 
              expert support, professional travel guidance, and a smooth booking process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-body font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Book Your Flight <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-body font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Contact Our Travel Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AirTicketingPage;