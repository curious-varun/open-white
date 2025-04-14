import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

const BlogCard = ({ post, index, featured = false }: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationDelay = `animate-delay-${(index % 5) * 100}`;

  return (
    <article
      className={`blog-card group rounded-xl overflow-hidden opacity-0 animate-fade-in ${animationDelay} ${featured ? "lg:col-span-2 md:grid md:grid-cols-2 gap-6" : ""
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden ${featured ? "h-full max-h-[330px] md:max-h-none" : "h-48 sm:h-60"}`}>
        <div className={`absolute inset-0 bg-black/20 z-10 transition-opacity ${isHovered ? 'opacity-40' : 'opacity-0'}`}></div>
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 text-xs font-medium bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full z-20">
          {post.category}
        </span>
        {isHovered && (
          <div className="absolute right-4 bottom-4 z-20">
            <span className="flex items-center justify-center w-10 h-10 bg-blog-600 text-white rounded-full animate-scale-in">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        )}
      </div>

      <div className={`p-5 ${featured ? "md:p-0" : ""}`}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className={`font-serif font-semibold transition-colors group-hover:text-blog-600 ${featured ? "text-2xl" : "text-xl"}`}>
          {post.title}
        </h3>

        <p className="mt-2 text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center mt-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
