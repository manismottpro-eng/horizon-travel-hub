// API Types for SMOT Visa Blog Posts
export interface ApiBlogPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  class_list: string[];
  _links: any;
}

// Application Blog Post Type (transformed from API response)
export interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

// Fetch blogs from SMOT Visa API
export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('https://smotvisa.com/wp-json/wp/v2/posts?per_page=100');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const apiPosts: ApiBlogPost[] = await response.json();
    
    // Transform API response to our application format
    return apiPosts.map(post => {
      // Extract categories from class_list or use default
      const categories = post.class_list.filter(cls => cls.startsWith('category-')).map(cls => 
        cls.replace('category-', '').split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
      );
      
      // Clean excerpt - remove HTML tags and [&hellip;]
      const cleanExcerpt = post.excerpt.rendered
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\[&\hellip;\]/g, '...') // Replace [&hellip;] with ...
        .trim();

      return {
        id: post.slug,
        image: post.featured_media > 0 
          ? `https://smotvisa.com/wp-json/wp/v2/media/${post.featured_media}?fields=source_url` 
          : 'https://picsum.photos/seed/blog' + post.id + '/800/450',
        category: categories.length > 0 ? categories[0] : 'Travel',
        title: post.title.rendered,
        excerpt: cleanExcerpt,
        content: post.content.rendered,
        author: 'SMOT Visa Team',
        date: new Date(post.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        }),
        readTime: `${Math.ceil(post.content.rendered.length / 200)} min read`
      };
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // Fallback to empty array if API fails
    return [];
  }
};

// Helper function to fetch a single blog by slug
export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    const blogs = await fetchBlogs();
    return blogs.find(blog => blog.id === slug);
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return undefined;
  }
};