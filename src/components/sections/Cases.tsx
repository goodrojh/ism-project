"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Ruler, Clock, Layers, Award } from "lucide-react";
import { CASES, asset, type CaseTag } from "@/lib/site";
import { useLead } from "@/components/ui/ModalProvider";
import SectionHeading from "@/components/ui/SectionHeading";

const TAGS: ("Все" | CaseTag)[] = ["Все", "Промышленные", "Жилые", "Общественные", "Сети"];

export default function Cases() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>("Все");
  const { open } = useLead();
  const list = tag === "Все" ? CASES : CASES.filter((c) => c.tag === tag);

  return (
    <section id="cases" className="relative w-full overflow-hidden bg-navy px-4 py-[90px] text-white blueprint-grid md:px-6 md:py-[120px]">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-amber/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan/15 blur-[120px]" />
      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeading
          align="left"
          dark
          title="340+ объектов. Вот несколько с цифрами"
          text="Не «красивые картинки», а площадь, срок и результат экспертизы по каждому. Полное портфолио с контактами заказчиков — по запросу."
          action={
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition " +
                    (tag === t ? "bg-amber text-navy" : "border border-white/15 bg-white/5 text-white/75 hover:bg-white/10")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          }
        />

        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((c) => (
              <motion.article
                layout
                key={c.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img loading="lazy" decoding="async" src={asset(c.image)} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">{c.tag}</span>
                  <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-amber px-3 py-1 text-[11px] font-bold text-navy">
                    <Award size={12} /> {c.result}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[18px] font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-1 text-[13px] text-white/60">{c.type}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                    <div>
                      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/50"><Ruler size={11} /> Объём</div>
                      <div className="mt-0.5 text-[13px] font-semibold">{c.area}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/50"><Clock size={11} /> Срок</div>
                      <div className="mt-0.5 text-[13px] font-semibold">{c.term}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/50"><Layers size={11} /> Разделы</div>
                      <div className="mt-0.5 truncate text-[13px] font-semibold" title={c.sections}>{c.sections}</div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      open({
                        intent: "case-" + c.id,
                        title: "Похожий объект? Рассчитаем по аналогии",
                        subtitle: `Опираемся на опыт «${c.title}»: скажем срок и цену для вашего объекта уже на первом звонке.`,
                        fields: ["name", "phone", "area"],
                        submitLabel: "Рассчитать похожий объект",
                        prefill: { comment: "Похоже на кейс: " + c.title },
                      })
                    }
                    className="mt-5 flex items-center gap-1.5 text-[13px] font-bold text-amber underline-offset-4 hover:underline"
                  >
                    У меня похожий объект <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() =>
              open({
                intent: "cases-portfolio",
                title: "Получить полное портфолио",
                subtitle: "PDF на 40 страниц: объекты по типам, разделы, сроки, заключения экспертизы и контакты заказчиков для рекомендаций.",
                fields: ["name", "phone", "email"],
                submitLabel: "Прислать портфолио",
              })
            }
            className="w-full rounded-full bg-amber px-8 py-4 text-[15px] font-bold text-navy transition hover:bg-amber-dark sm:w-auto"
          >
            Получить полное портфолио (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
