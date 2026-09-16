"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ShieldCheck, FileDown } from "lucide-react";
import { REVIEWS, LEGAL, asset } from "@/lib/site";
import { useLead } from "@/components/ui/ModalProvider";

const NUMBERS = [
  { v: 2025, label: "год регистрации ООО «ИСМ»", raw: true },
  { v: 25, label: "млн ₽ — уровень ответственности по СРО" },
  { v: 24, label: "часа до сметы по разделам", suffix: "ч" },
  { v: 14, label: "дней — промежуточная сдача" },
  { v: 3, label: "дня на ответ по замечаниям экспертизы" },
  { v: 0.1, label: "% в день — неустойка за срыв срока", dec: 1 },
  { v: 20, label: "разделов ПД по ПП №87 своими силами", suffix: "+" },
  { v: 1, label: "ГИП и один договор на весь объект" },
];

function Counter({ to, dec = 0, suffix = "", raw = false }: { to: number; dec?: number; suffix?: string; raw?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (raw) return;
    const start = performance.now();
    const dur = 1400;
    let id: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(to * e);
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, to, raw]);
  return (
    <span ref={ref}>
      {raw ? to : val.toFixed(dec).replace(".", ",")}
      <span className="text-amber">{suffix}</span>
    </span>
  );
}

export default function About() {
  const { open } = useLead();
  return (
    <section id="about" className="w-full bg-paper px-4 py-[80px] md:px-6 md:py-[110px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-[32px] font-semibold leading-[1.08] tracking-[-0.01em] text-ink md:text-[46px]">
              Проектная организация, которая отвечает за результат деньгами
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted md:text-lg">
              ООО «ИНЖСТРОЙМОНТАЖ» проектирует промышленные, жилые и общественные объекты и инженерные сети к ним. Все
              ключевые разделы делаем своими инженерами — поэтому за стыки между разделами отвечаем мы, а не «субподрядчик».
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted md:text-lg">
              Член СРО проектировщиков с правом подготовки проектной документации объектов капитального строительства.
              Ответственность по договорам обеспечена компенсационным фондом первого уровня — до 25 млн ₽.
            </p>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5">
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-muted">
                <ShieldCheck size={14} className="text-amber-dark" /> Членство в СРО
              </div>
              <div className="mt-2 text-[14px] font-semibold leading-snug text-ink">{LEGAL.sro.name}</div>
              <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-[13px] sm:grid-cols-2">
                <div className="flex justify-between gap-3 sm:block"><dt className="text-muted">Реестровый № СРО</dt><dd className="font-semibold text-ink">{LEGAL.sro.regNumber}</dd></div>
                <div className="flex justify-between gap-3 sm:block"><dt className="text-muted">№ члена</dt><dd className="font-semibold text-ink">{LEGAL.sro.memberNumber}</dd></div>
                <div className="flex justify-between gap-3 sm:block"><dt className="text-muted">В реестре с</dt><dd className="font-semibold text-ink">{LEGAL.sro.since}</dd></div>
                <div className="flex justify-between gap-3 sm:block"><dt className="text-muted">Уровень ответственности</dt><dd className="font-semibold text-ink">1-й, до 25 млн ₽</dd></div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={asset(LEGAL.docs.sro)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-[13px] font-semibold text-ink transition hover:border-amber">
                  <FileDown size={14} className="text-amber-dark" /> Выписка из реестра СРО (PDF)
                </a>
                <a href={asset(LEGAL.docs.card)} className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-[13px] font-semibold text-ink transition hover:border-amber">
                  <FileDown size={14} className="text-amber-dark" /> Карточка предприятия (DOCX)
                </a>
              </div>
            </div>
            <button
              onClick={() =>
                open({
                  intent: "about-docs",
                  title: "Получить пакет документов компании",
                  subtitle: "Выписка СРО, карточка предприятия, типовой договор с гарантиями и шаблон ТЗ — одним письмом.",
                  fields: ["name", "phone", "email"],
                  submitLabel: "Прислать документы",
                })
              }
              className="mt-7 rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-navy-2"
            >
              Запросить документы и типовой договор
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] shadow-2xl"
          >
            <img loading="lazy" decoding="async" src={asset("/img/team.webp")} alt="Команда инженеров ИСМ" className="aspect-[16/11] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
              {["Архитекторы", "Конструкторы", "ОВ · ВК", "ЭОМ · СС", "Сметчики", "BIM-координаторы"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {NUMBERS.map((n) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[24px] border border-black/5 bg-white p-5"
            >
              <div className="font-display text-[30px] font-semibold leading-none text-ink md:text-[38px]">
                <Counter to={n.v} dec={n.dec} suffix={n.suffix} raw={n.raw} />
              </div>
              <div className="mt-2 text-[13px] text-muted">{n.label}</div>
            </motion.div>
          ))}
        </div>

        {/* REVIEWS */}
        <div className="mt-20">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-[28px] font-semibold leading-tight text-ink md:text-[36px]">Что говорят заказчики</h3>
              <p className="mt-2 text-[15px] text-muted">Контакты каждого заказчика дадим для проверки — просто попросите.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3">
              <div className="flex text-amber">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-[13px] text-muted">Отзывы заказчиков наших инженеров</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col rounded-[24px] border border-black/5 bg-white p-6"
              >
                <Quote size={22} className="text-amber" />
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-gray-700">{r.text}</p>
                <div className="mt-5 border-t border-black/5 pt-4">
                  <div className="text-[14px] font-bold text-ink">{r.name}</div>
                  <div className="text-[12px] text-muted">{r.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
