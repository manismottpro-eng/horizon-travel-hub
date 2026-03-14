import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Users, MapPin, Camera, Heart, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { tourPackagesData, popularRoutes, travelTips } from "@/data/tourPackagesData";

const TourPackagesPage = () => {
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
              <span className="text-sm font-body font-semibold text-secondary">International Tour Packages</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Explore the World with Smotvisa
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From exotic destinations to cultural adventures, discover our handpicked international tour packages
              designed for an unforgettable travel experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tourPackagesData.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 bg-card border border-border"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body font-bold rounded-full">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{pkg.flag}</span>
                      <h3 className="text-lg font-display font-bold text-white">{pkg.destination}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-display font-bold text-foreground">{pkg.name}</h4>
                    <div className="flex items-center gap-2 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-body font-semibold">4.8/5</span>
                    </div>
                  </div>

                  <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <Users className="h-4 w-4 text-secondary" />
                      <span>{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>Best: {pkg.bestTime}</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    <h5 className="text-sm font-display font-bold text-foreground mb-2">Highlights:</h5>
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-body font-bold rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Packages Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <Plane className="h-5 w-5 text-secondary" />
              <span className="text-sm font-body font-semibold text-secondary">Flight + Tour Packages</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
              Fly with Comfort, Explore with Joy
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Choose from our exclusive flight packages with competitive prices and flexible options for your dream vacation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {popularRoutes.map((route, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-blue-100 hover:shadow-card transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-center">
                    <p className="text-xs font-body text-muted-foreground">From</p>
                    <p className="text-lg font-display font-bold text-foreground">{route.from}</p>
                  </div>
                  <Plane className="h-4 w-4 text-secondary" />
                  <div className="text-center">
                    <p className="text-xs font-body text-muted-foreground">To</p>
                    <p className="text-lg font-display font-bold text-foreground">{route.to}</p>
                  </div>
                </div>
                <div className="text-center pt-2 border-t border-blue-100">
                  <p className="text-xs font-body text-muted-foreground">Duration</p>
                  <p className="text-sm font-body font-semibold text-foreground">{route.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-body font-bold rounded-xl hover:bg-secondary/90 transition-colors"
            >
              View All Flight Packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-card border border-border p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">Travel Smart with Smotvisa</h3>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Expert tips to make your international travel experience smooth and enjoyable
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {travelTips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-secondary/5 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
              Ready for Your Next Adventure?
            </h3>
            <p className="text-blue-100 font-body max-w-2xl mx-auto mb-6">
              Let Smotvisa handle all your travel arrangements from flights and visas to accommodation and sightseeing.
              Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-body font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Book Your Package <ArrowRight className="h-4 w-4" />
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

export default TourPackagesPage;