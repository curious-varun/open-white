"use client";

import { getAllCategoryType } from "@/db/category";
import { getAllTagsType } from "@/db/tags";

export function WriteBlog({ categories, tags }: { categories: getAllCategoryType[], tags: getAllTagsType[] }) {
  console.log(tags);
  return (
    <div className="space-y-2 flex gap-2 ">
      <div>
        {categories.map((category) => (
          <div key={category.id} className="p-2 border rounded-md">
            {category.name}
          </div>
        ))}
      </div>
      <div className="bg-red-100">
        {tags.map((tag) => (
          <div key={tag.id} className="p-2 border rounded-md">
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}
