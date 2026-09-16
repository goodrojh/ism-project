"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { POSTS } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Blog() {
  const latest = POSTS.slice(0, 3);
  return (
    <section id="blog" className="w-full bg-paper px-4 py-[80px] md:px-6 md:py-[110px]">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          align="left"
          title="Полезное для заказчика, а не «новости компании»"
          text={`${POSTS.length} материалов от инженеров: экспертиза, ТУ, BIM, состав документации, стоимость. Читайте прямо на сайте.`}
          action={
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-navy-2"
            >
              Все статьи <span className="text-[16px] leading-none">→</span>
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
