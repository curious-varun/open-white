import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All" },
  { id: "technology", name: "Technology" },
  { id: "design", name: "Design" },
  { id: "business", name: "Business" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "productivity", name: "Productivity" },
  { id: "health", name: "Health" },
];

const CategoryFilter = ({ onFilterChange }: { onFilterChange: (category: string) => void }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onFilterChange(categoryId);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Explore Topics</h2>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            className={`rounded-full px-4 transition-all ${activeCategory === category.id
              ? "bg-blog-600 hover:bg-blog-700 text-white"
              : "hover:border-blog-300 hover:text-blog-700"
              }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

