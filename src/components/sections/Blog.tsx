"use client";
import React from "react";
import { motion } from "framer-motion";
import { POSTS, asset } from "@/lib/site";
import { useLead } from "@/components/ui/ModalProvider";

export default function Blog() {
  const { open } = useLead();
  return (
    <section className="w-full bg-paper px-4 py-[80px] md:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display m-0 text-[30px] font-semibold leading-[1.15] text-ink md:text-[44px]">
              Полезное для заказчика, а не «новости компании»
            </h2>
          </div>
          <div className="group relative self-start md:self-end">
            <div className="absolute -bottom-[6px] right-0 -z-10 h-[24px] w-[100px] rounded-full bg-[radial-gradient(circle,rgba(245,165,36,0.5),rgba(53,194,230,0.3))] blur-[14px]" />
            <button
              onClick={() =>
                open({
                  intent: "blog-checklist",
                  title: "Чек-лист: 12 ошибок ТЗ",
                  subtitle: "Пришлём PDF, по которому наши ГИПы проверяют техзадание перед стартом. Пригодится с любым подрядчиком.",
                  fields: ["name", "email", "phone"],
                  submitLabel: "Получить чек-лист",
                  note: "Отправим на e-mail в течение минуты.",
                })
              }
              className="flex items-center gap-2 rounded-[12px] bg-navy px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-navy-2"
            >
              Получить чек-лист ТЗ <span className="text-[14px] leading-none">↳</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex cursor-pointer flex-col rounded-[14px] border border-[#ebebea] bg-white p-5 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              onClick={() =>
                open({
                  intent: "blog-article",
                  title: "Прислать статью полностью",
                  subtitle: post.title,
                  fields: ["email", "phone"],
                  submitLabel: "Прислать на e-mail",
                })
              }
            >
              <div className="mb-[18px] h-[220px] w-full overflow-hidden rounded-[10px]">
                <img src={asset(post.image)} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mb-2.5 text-[17px] font-bold leading-[1.4] text-ink">{post.title}</h3>
              <p className="mb-5 line-clamp-3 text-[14px] leading-[1.6] text-muted">{post.desc}</p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink group-hover:underline">
                  Читать <span className="text-[16px] leading-none">↳</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
