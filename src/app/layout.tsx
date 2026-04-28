import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Zen_Kaku_Gothic_New } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteData } from "@/data/site";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ja",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
});

export const metadata: Metadata = {
  title: siteData.siteName,
  description:
    "上手さや完成度ではなく、その人自身が表現として立ち上がるライブイベント、LIFE ARTS LIVEのWebアーカイブです。",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
