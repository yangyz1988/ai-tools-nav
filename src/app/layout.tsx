import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI工具导航 | 最全AI工具合集",
  description: "收录 30+ 优质 AI 工具，涵盖大语言模型、编程、绘图、视频、音频、写作、办公等分类。每日更新。",
  keywords: "AI工具,人工智能,AI导航,ChatGPT,AI绘画,AI编程,AI写作",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        {/* Google AdSense 脚本 - 在获取发布商 ID 后替换 ca-pub-XXXXXXXXXXXXXXXX */}
        {/* 取消注释以下行并替换为你的实际发布商 ID */}
        {/* 
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        */}
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <Header />
        {children}
        <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-400 dark:border-zinc-800">
          © 2026 AI工具导航 · 亿只羊 🐑 出品
        </footer>
      </body>
    </html>
  );
}