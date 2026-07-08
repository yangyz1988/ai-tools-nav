'use client';
import { useState } from 'react';

export function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="搜索 AI 工具... (ChatGPT、绘画、编程...)"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-3.5 pl-12 text-sm shadow-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
      />
      <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}
