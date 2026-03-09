import { motion } from "framer-motion";
import { Calendar, ArrowRight, User, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "@/data/blogData";
import { useState } from "react";

const BlogPage = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(blogs.map(b => b.category))];

    const filteredBlogs = blogs.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm font-body mb-8">
                    <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors">Home</Link>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-foreground font-semibold">Blog</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Our Blog</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Travel Tips & Insights
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                        Stay updated with the latest visa requirements, travel guides, and destination tips.
                    </p>
                </motion.div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-body font-bold transition-all ${selectedCategory === cat
                                        ? "bg-secondary text-secondary-foreground shadow-gold"
                                        : "bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredBlogs.map((blog, idx) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 flex flex-col"
                        >
                            <Link to={`/blog/${blog.id}`} className="block overflow-hidden aspect-video">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </Link>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-body font-bold rounded-full uppercase tracking-widest">
                                        {blog.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-body uppercase tracking-widest">
                                        <Calendar className="h-3 w-3" /> {blog.date}
                                    </div>
                                </div>

                                <Link to={`/blog/${blog.id}`}>
                                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                        {blog.title}
                                    </h3>
                                </Link>
                                <p className="text-sm font-body text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                                    {blog.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-body text-foreground/80">
                                        <User className="h-3 w-3 text-secondary" /> {blog.author}
                                    </div>
                                    <Link to={`/blog/${blog.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:gap-2.5 transition-all">
                                        Full Article <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredBlogs.length === 0 && (
                    <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border mb-16">
                        <p className="text-muted-foreground font-body italic">No articles found matching your criteria. Try another search!</p>
                    </div>
                )}

                {/* Newsletter / CTA */}
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-primary-foreground relative overflow-hidden shadow-elevated">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Calendar className="w-64 h-64" />
                    </div>
                    <div className="max-w-xl relative z-10">
                        <h2 className="text-3xl font-display font-bold mb-4 italic">Get Travel Updates Directly</h2>
                        <p className="text-primary-foreground/70 font-body mb-8 text-lg">
                            Join our community of travelers and receive the latest visa updates and travel guides right in your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body text-sm outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                            />
                            <button className="px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 shadow-gold transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
