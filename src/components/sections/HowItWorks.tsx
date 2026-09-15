"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPinned, FileText, CheckCircle, Layers3, Stamp, HardHat } from "lucide-react";
import { asset } from "@/lib/site";
import { useLead } from "@/components/ui/ModalProvider";

const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const TIMELINE = [
  { d: "День 1", t: "Звонок ГИПа, сбор исходных данных" },
  { d: "День 2", t: "КП: смета по разделам + график" },
  { d: "День 3–5", t: "Договор, ТЗ, старт изысканий" },
  { d: "Неделя 2+", t: "Проектирование, сдача каждые 14 дней" },
  { d: "Финал", t: "Экспертиза до положительного заключения" },
  { d: "Стройка", t: "Авторский надзор до ввода" },
];

export default function HowItWorks() {
  const { open } = useLead();
  return (
    <section id="process" className="relative w-full overflow-hidden bg-white px-4 py-[90px] md:px-12 md:py-[120px] lg:px-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-amber/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan/10 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-16 flex flex-col items-center gap-4 text-center"
      >
        <span className="inline-block rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-amber-dark">
          Как работаем
        </span>
        <h2 className="font-display max-w-3xl text-[32px] font-semibold leading-[1.1] text-ink md:text-[48px]">
          От пустого участка до разрешения на строительство — три этапа
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3"
      >
        {/* STEP 1 */}
        <motion.div variants={stepVariants} className="group flex cursor-default flex-col gap-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <img src={asset("/img/step1.webp")} alt="Инженерные изыскания на участке" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex w-full flex-col justify-center gap-2 overflow-hidden rounded-[15px] border border-white/30 bg-white/20 p-5 shadow-2xl backdrop-blur-2xl"
              >
                {[
                  { icon: MapPinned, t: "Топосъёмка и геология", d: "Аккредитованные партнёры", active: false },
                  { icon: FileText, t: "ГПЗУ и ТУ", d: "Проверяем исходные данные", active: true },
                  { icon: CheckCircle, t: "Техзадание", d: "Составим вместе за 2–3 дня", active: false },
                ].map((c, i) => (
                  <motion.div
                    key={c.t}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={
                      "relative flex items-center gap-2 overflow-hidden rounded-[8px] px-2.5 py-1.5 shadow-lg " +
                      (c.active ? "z-10 border border-amber/40 bg-white" : "border border-white/40 bg-white/40 backdrop-blur-md")
                    }
                  >
                    {c.active && (
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-amber/25 to-transparent"
                      />
                    )}
                    <div className={"flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] " + (c.active ? "bg-amber/15" : "bg-white/30")}>
                      <c.icon className={"h-3.5 w-3.5 " + (c.active ? "text-amber-dark" : "text-gray-700")} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold leading-none text-ink">{c.t}</span>
                      <span className="mt-1 text-[8px] leading-none text-gray-600">{c.d}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit rounded-full border border-amber px-3 py-1 text-xs font-bold text-amber-dark">Этап 01 · 5–15 дней</span>
            <h3 className="font-display text-2xl font-semibold leading-tight text-ink">Исходные данные и изыскания</h3>
            <p className="text-base leading-relaxed text-muted">
              Проверяем ГПЗУ, ТУ, ограничения участка. Делаем топосъёмку и геологию. Составляем ТЗ так, чтобы экспертиза
              потом не вернула проект.
            </p>
          </div>
        </motion.div>

        {/* STEP 2 */}
        <motion.div variants={stepVariants} className="group flex cursor-default flex-col gap-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <img src={asset("/img/step2.webp")} alt="BIM-модель здания с инженерными системами" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex w-full items-center justify-between overflow-hidden rounded-[15px] border border-white/30 bg-white/20 p-5 shadow-2xl backdrop-blur-2xl"
              >
                <div className="relative flex h-32 w-1/2 items-center justify-center">
                  <div className="relative flex h-28 w-28 items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber shadow-[0_0_20px_rgba(245,165,36,0.8)]"
                    >
                      <Layers3 className="h-4 w-4 text-navy" />
                    </motion.div>
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ scale: [0.2, 1.8], opacity: [0, 0.6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 0.9 }}
                        className="absolute h-full w-full rounded-full border border-white/50"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 pr-1">
                  {["АР · КР", "ОВ · ВК", "ЭОМ · СС"].map((text, i) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className={
                        "flex min-w-[85px] items-center justify-center rounded-[8px] border px-3 py-2 shadow-xl " +
                        (i === 1 ? "border-amber bg-amber text-navy" : "border-white bg-white text-gray-800")
                      }
                    >
                      <span className="text-[11px] font-bold leading-none tracking-tight">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit rounded-full border border-amber px-3 py-1 text-xs font-bold text-amber-dark">Этап 02 · 30–100 дней</span>
            <h3 className="font-display text-2xl font-semibold leading-tight text-ink">Проектирование в BIM</h3>
            <p className="text-base leading-relaxed text-muted">
              Все разделы в одной модели, проверка коллизий, промежуточные сдачи каждые 2 недели. Вы видите не «процесс
              идёт», а готовые разделы.
            </p>
          </div>
        </motion.div>

        {/* STEP 3 */}
        <motion.div variants={stepVariants} className="group flex cursor-default flex-col gap-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <img src={asset("/img/step3.webp")} alt="Тома проектной документации со штампами" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex w-full flex-col justify-center gap-3 overflow-hidden rounded-[15px] border border-white/30 bg-white/20 p-5 shadow-2xl backdrop-blur-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative flex items-center gap-3 overflow-hidden rounded-[8px] border border-white bg-white p-2.5 shadow-xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-amber/15">
                    <Stamp className="h-5 w-5 text-amber-dark" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold leading-none text-ink">Заключение экспертизы</span>
                    <span className="mt-1 text-[9px] leading-none text-emerald-600">Положительное · 38 дней</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 }}
                  className="flex items-center gap-3 rounded-[8px] border border-white bg-white/80 p-2.5 shadow-lg backdrop-blur-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-cyan/15">
                    <HardHat className="h-5 w-5 text-blue" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold leading-none text-ink">Разрешение на строительство</span>
                    <span className="mt-1 text-[9px] leading-none text-gray-600">Комплект РД передан подрядчику</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex w-fit items-center gap-2 rounded-[8px] border border-white bg-white px-3 py-1.5 shadow-lg"
                >
                  <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-amber" />
                  <span className="text-[10px] font-bold leading-none tracking-tight">Авторский надзор активен</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit rounded-full border border-amber px-3 py-1 text-xs font-bold text-amber-dark">Этап 03 · 30–45 дней</span>
            <h3 className="font-display text-2xl font-semibold leading-tight text-ink">Экспертиза и стройка</h3>
            <p className="text-base leading-relaxed text-muted">
              Сами загружаем комплект, сами отвечаем на замечания. Получаете заключение и разрешение. Дальше — авторский
              надзор до ввода объекта.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* TIMELINE */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mb-12 max-w-7xl overflow-hidden rounded-[28px] bg-navy p-6 text-white blueprint-grid md:p-8"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {TIMELINE.map((t, i) => (
            <div key={t.d} className="relative">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber text-[12px] font-bold text-navy">{i + 1}</span>
                <span className="hidden h-px flex-1 bg-white/15 lg:block" />
              </div>
              <div className="font-display text-[14px] font-semibold text-amber">{t.d}</div>
              <div className="mt-1 text-[13px] leading-snug text-white/75">{t.t}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            open({
              intent: "process-start",
              title: "Запустить проект за 2 дня",
              subtitle: "Завтра — звонок ГИПа и список исходных данных, послезавтра — КП с графиком.",
              fields: ["name", "phone", "objectType", "file"],
              submitLabel: "Запустить проект",
            })
          }
          className="w-full rounded-full bg-amber px-10 py-4 text-sm font-bold uppercase tracking-widest text-navy shadow-xl shadow-amber/25 transition-all hover:shadow-2xl sm:w-auto"
        >
          Запустить проект
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            open({
              intent: "process-audit",
              title: "Бесплатный аудит вашего проекта",
              subtitle: "Есть проект от другого бюро? Проверим на замечания экспертизы и коллизии — бесплатно, за 2 дня.",
              fields: ["name", "phone", "email", "file"],
              submitLabel: "Отправить на аудит",
              note: "Аудит бесплатный. Результат — список рисков по разделам в PDF.",
            })
          }
          className="w-full rounded-full border border-gray-200 bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-ink shadow-lg transition-all hover:shadow-xl sm:w-auto"
        >
          Аудит готового проекта
        </motion.button>
      </motion.div>
    </section>
  );
}
