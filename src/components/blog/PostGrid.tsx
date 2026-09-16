"use client";
import React, { useState } from "react";
import { POSTS } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";

export default function PostGrid({ center = false }: { center?: boolean }) {
  const tags = ["Все", ...Array.from(new Set(POSTS.map((p) => p.tag)))];
  const [tag, setTag] = useState("Все");
  const list = tag === "Все" ? POSTS : POSTS.filter((p) => p.tag === tag);
  return (
    <div>
      <div className={"mb-8 flex flex-wrap gap-2 " + (center ? "justify-center" : "")}>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={
              "rounded-full px-4 py-2 text-[13px] font-semibold transition " +
              (tag === t ? "bg-navy text-white" : "border border-black/10 bg-white text-ink hover:border-amber")
            }
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
