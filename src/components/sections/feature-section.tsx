import { useState } from "react";
import { Button } from "@/components/ui/button";
import CategoryFilter from "@/components/category-filter";
import BlogCard from "@/components/blog-card";
import type { BlogPost } from "@/components/blog-card";

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: What's Next for Developers",
    excerpt: "Exploring upcoming trends, technologies, and paradigms that will shape how we build for the web.",
    category: "Technology",
    date: "Apr 12, 2025",
    readTime: "8 min read",
    author: {
      name: "Alex Rivera",
      avatar: "/user.png"
    },
    coverImage: "/banner-1.png"
  },
  {
    id: "2",
    title: "Designing Intuitive User Experiences: A Guide for Modern Applications",
    excerpt: "Learn the principles and practices that lead to more natural, intuitive user interfaces and experiences.",
    category: "Design",
    date: "Apr 10, 2025",
    readTime: "6 min read",
    author: {
      name: "Maya Johnson",
      avatar: "/user.png"
    },
    coverImage: "/banner-2.png"
  },
  {
    id: "3",
    title: "How Daily Journaling Improved My Productivity and Mental Clarity",
    excerpt: "A personal story about establishing a daily writing habit and the unexpected benefits it brought.",
    category: "Productivity",
    date: "Apr 8, 2025",
    readTime: "5 min read",
    author: {
      name: "Sam Thompson",
      avatar: "/user.png"
    },
    coverImage: "/banner-3.png"
  },
  {
    id: "4",
    title: "Building a Sustainable Business Model in the Digital Economy",
    excerpt: "Strategies for creating businesses that thrive in the digital landscape while considering ethical implications.",
    category: "Business",
    date: "Apr 6, 2025",
    readTime: "7 min read",
    author: {
      name: "Jordan Lee",
      avatar: "/user.png"
    },
    coverImage: "/banner-1.png"
  },
  {
    id: "5",
    title: "The Mindful Approach to Technology: Finding Balance in a Digital World",
    excerpt: "Techniques and perspectives for maintaining a healthy relationship with technology in our lives.",
    category: "Lifestyle",
    date: "Apr 4, 2025",
    readTime: "9 min read",
    author: {
      name: "Robin Chen",
      avatar: "/user.png"
    },
    coverImage: "/banner-2.png"
  },
  {
    id: "6",
    title: "Essential Nutrition Principles for Busy Professionals",
    excerpt: "Practical nutrition advice for those with demanding careers and limited time for meal planning.",
    category: "Health",
    date: "Apr 2, 2025",
    readTime: "10 min read",
    author: {
      name: "Taylor Adams",
      avatar: "/user.png"
    },
    coverImage: "/banner-3.png"
  }
];


const FeaturedPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleFilterChange = (category: string) => {
    if (category === "all") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(
        post => post.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredPosts(filtered);
    }
  };

  return (

    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-blog-600 mb-3">Latest Articles</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Featured Stories</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover thought-provoking articles from our community of writers on topics that matter.
          </p>
        </div>

        <CategoryFilter onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                featured={index === 0}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-xl font-medium">No posts found</h3>
              <p className="text-muted-foreground mt-2">
                There are no posts in this category yet.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-blog-200 hover:border-blog-300 hover:bg-blog-50"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
