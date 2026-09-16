import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/components/ui/ModalProvider";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ИСМ Проект — проектирование зданий, сооружений и инженерных сетей",
  description:
    "Проектный институт: стадии П и Р, инженерные сети, изыскания, экспертиза с первого раза по договору, авторский надзор. Смета по разделам за 24 часа.",
  keywords: ["проектирование зданий", "проектирование инженерных сетей", "стадия П", "рабочая документация", "проектная организация", "СРО", "экспертиза проекта"],
  openGraph: {
    title: "ИСМ Проект — проектируем здания и инженерные сети, которые проходят экспертизу с первого раза",
    description: "Смета по разделам за 24 часа. Гарантия экспертизы в договоре. BIM без коллизий.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth" className={`${manrope.variable} ${unbounded.variable}`}>
      <body className="antialiased">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
