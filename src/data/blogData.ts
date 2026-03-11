// Application Blog Post Type
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

// Fetch blogs from Smot Pro backend API
export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('https://smot-pro-backend-visa.vercel.app/api/blogs');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blogs: BlogPost[] = await response.json();
    
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // Fallback to empty array if API fails
    return [];
  }
};

// Helper function to fetch a single blog by slug
export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    const response = await fetch(`https://smot-pro-backend-visa.vercel.app/api/blogs/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return undefined;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blog: BlogPost = await response.json();
    return blog;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return undefined;
  }
};
