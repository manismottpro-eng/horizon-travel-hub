import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { fetchReviews } from "@/data/reviewData";
import { useState, useEffect } from "react";
import type { Review } from "@/data/reviewData";

const ReviewCards = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      const fetchedReviews = await fetchReviews();
      setReviews(fetchedReviews);
      setLoading(false);
    };
    loadReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">What Our Clients Say</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Client Testimonials
          </h2>
                  <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Hear from our satisfied clients about their experiences with Smot Visa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    "{review.comment}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-foreground truncate">
                        {review.name}
                      </h4>
                      <p className="text-sm font-body text-muted-foreground truncate">
                        {review.role}
                      </p>
                      <p className="text-xs font-body text-muted-foreground truncate">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;