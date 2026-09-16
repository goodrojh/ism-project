"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SITE, NAV, SERVICES, asset } from "@/lib/site";
import Logo from "@/components/ui/Logo";
import { formatPhone, isPhoneComplete, submitLead } from "@/lib/lead";
import { useLead } from "@/components/ui/ModalProvider";

export default function Footer() {
  const { open } = useLead();
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPhoneComplete(phone)) return;
    try {
      await submitLead({ intent: "footer-callback", phone });
    } catch {}
    setDone(true);
  };

  const socials = [
    {
      name: "Telegram",
      href: SITE.telegram,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M9.04 15.47 8.7 20.2c.48 0 .69-.21.94-.46l2.26-2.17 4.68 3.43c.86.47 1.47.22 1.7-.79l3.08-14.43c.28-1.3-.47-1.8-1.3-1.5L1.9 11.24c-1.27.5-1.25 1.2-.22 1.52l4.63 1.44 10.75-6.78c.5-.33.96-.15.58.18" /></svg>
      ),
    },
    {
      name: "WhatsApp",
      href: SITE.whatsapp,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.9 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" /></svg>
      ),
    },
    {
      name: "VK",
      href: "#",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12.79 18.05c-6.2 0-9.74-4.25-9.89-11.33h3.11c.1 5.19 2.39 7.39 4.2 7.84V6.72h2.93v4.48c1.79-.19 3.67-2.23 4.3-4.48h2.93c-.48 2.77-2.53 4.81-3.98 5.65 1.45.68 3.79 2.47 4.68 5.68h-3.23c-.7-2.16-2.43-3.83-4.7-4.06v4.06z" /></svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="relative m-2 flex min-h-[760px] flex-col overflow-hidden rounded-[20px] md:m-3">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${asset("/img/skyline.webp")}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 z-0 bg-navy/45" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-10 pt-20 text-center md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.02em] text-white md:text-[76px]"
          >
            Смета по разделам —<br />
            <span className="text-amber">за 24 часа.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-[520px] text-[15px] text-white/80 md:text-lg"
          >
            Оставьте телефон — ГИП перезвонит за 15 минут, уточнит исходные данные и завтра вы получите КП.
          </motion.p>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex h-16 w-full max-w-[520px] overflow-hidden rounded-full border border-white/25 bg-white/15 backdrop-blur-md"
          >
            {done ? (
              <div className="flex flex-1 items-center justify-center gap-2 text-[15px] font-semibold text-white">
                <CheckCircle2 size={18} className="text-amber" /> Принято! Перезвоним за 15 минут.
              </div>
            ) : (
              <>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className="min-w-0 flex-1 border-none bg-transparent px-6 text-[15px] text-white outline-none placeholder:text-white/60"
                />
                <button type="submit" className="flex h-full items-center gap-2 whitespace-nowrap rounded-full bg-amber px-5 text-[13px] font-bold tracking-[0.08em] text-navy transition-colors hover:bg-amber-dark md:px-8">
                  <Send size={14} /> <span className="hidden sm:inline">ПЕРЕЗВОНИТЕ</span>
                </button>
              </>
            )}
          </motion.form>
          <span className="mt-3 text-[12px] text-white/55">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 mx-3 mb-3 rounded-[24px] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl md:mx-5 md:mb-5 md:p-10"
        >
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="md:w-[30%]">
              <Logo />
              <p className="mt-3 max-w-[280px] text-[13px] leading-relaxed text-white/60">
                Проектирование зданий, сооружений и инженерных сетей. Стадии П и Р, экспертиза, авторский надзор. СРО, реестр НОПРИЗ.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-[13px] text-white/75">
                <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-white"><Phone size={14} className="text-amber" /> {SITE.phone}</a>
                <a href={"mailto:" + SITE.email} className="flex items-center gap-2 hover:text-white"><Mail size={14} className="text-amber" /> {SITE.email}</a>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-amber" /> {SITE.address}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber" /> {SITE.hours}</span>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-white">Услуги</h4>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <a href={asset("/") + "#services"} className="text-[13px] text-white/60 transition-colors hover:text-white">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-white">Навигация</h4>
              <ul className="space-y-2">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href.startsWith("/") ? n.href : asset("/") + n.href} className="text-[13px] text-white/60 transition-colors hover:text-white">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-white">Документы</h4>
              <ul className="space-y-2">
                {["Выписка СРО", "Реестр ГИПов", "Типовой договор", "Политика ПДн"].map((l) => (
                  <li key={l}>
                    <button
                      onClick={() =>
                        open({ intent: "footer-doc", title: "Прислать: " + l, subtitle: "Отправим документ на e-mail.", fields: ["email", "phone"], submitLabel: "Прислать" })
                      }
                      className="text-left text-[13px] text-white/60 transition-colors hover:text-white"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 md:flex-row">
            <div className="flex items-center gap-4">
              <span className="text-[12px] text-white/50">Мы на связи:</span>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <span className="text-[12px] text-white/40">© 2009–{new Date().getFullYear()} {SITE.name}. Все права защищены.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
