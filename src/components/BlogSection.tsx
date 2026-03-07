import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import dubaiImg from "@/assets/dubai.jpg";
import londonImg from "@/assets/london.jpg";
import visaImg from "@/assets/visa-services.jpg";

const blogs = [
  {
    image: visaImg,
    category: "Visa Tips",
    title: "Complete Guide to US Tourist Visa Application in 2026",
    excerpt: "Everything you need to know about applying for a B1/B2 visa, from documents to interview tips.",
    author: "Smart Pro Team",
    date: "Mar 5, 2026",
  },
  {
    image: dubaiImg,
    category: "Destinations",
    title: "Top 10 Things to Do in Dubai on Your First Visit",
    excerpt: "From the Burj Khalifa to desert safaris, discover the best experiences Dubai has to offer.",
    author: "Travel Desk",
    date: "Feb 28, 2026",
  },
  {
    image: londonImg,
    category: "Travel Guide",
    title: "UK Visa Requirements: What Changed in 2026",
    excerpt: "Updated requirements and processing times for UK Standard Visitor Visa applications.",
    author: "Visa Expert",
    date: "Feb 20, 2026",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Our Blog</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Travel Tips & Insights
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Stay updated with the latest visa requirements, travel guides, and destination tips.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body font-bold rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-xs font-body text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {blog.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {blog.date}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#blog" className="inline-flex items-center gap-2 text-sm font-body font-semibold text-secondary hover:underline">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
