import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { fetchBlogBySlug } from "@/data/blogData";
import { useState, useEffect } from "react";
import type { BlogPost } from "@/data/blogData";

const BlogDetailPage = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const [blog, setBlog] = useState<BlogPost | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlog = async () => {
            if (blogId) {
                const fetchedBlog = await fetchBlogBySlug(blogId);
                setBlog(fetchedBlog);
            }
            setLoading(false);
        };
        loadBlog();
    }, [blogId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="py-20 text-center container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Article Not Found</h2>
                <p className="text-muted-foreground mb-8">Sorry, we couldn't find the article you're looking for.</p>
                <Link to="/" className="text-secondary font-semibold hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <img
                    src={blog.image.startsWith('https://picsum.photos') ? blog.image : 'https://picsum.photos/seed/' + blog.id + '/1200/800'}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-primary/20" />

                <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-secondary font-body font-bold mb-6 hover:gap-3 transition-all"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
                        </Link>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body font-bold rounded-full mb-4 inline-block">
                            {blog.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-body text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                    <User className="h-4 w-4 text-secondary" />
                                </div>
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{blog.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg prose-slate max-w-none font-body text-muted-foreground leading-relaxed"
                             dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-foreground">Share this article:</span>
                                <button className="p-2 rounded-full bg-muted hover:bg-secondary/10 hover:text-secondary transition-colors">
                                    <Share2 className="h-4 w-4" />
                                </button>
                            </div>
                            <Link
                                to="/"
                                className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:bg-primary/90 transition-all"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailPage;