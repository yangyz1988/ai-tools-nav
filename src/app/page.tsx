'use client';
import { useState, useMemo } from 'react';
import { tools, categories } from '@/lib/data';
import { SearchBar } from '@/components/SearchBar';
import { ToolCard } from '@/components/ToolCard';
import { FooterAd } from '@/components/AdSense';

export default function Home() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('');

  const filtered = useMemo(() => tools.filter(t => {
    if (query && !t.name.toLowerCase().includes(query.toLowerCase()) 
        && !t.description.includes(query) && !t.tags.some(tag => tag.includes(query))) return false;
    if (activeCat && t.category !== activeCat) return false;
    return true;
  }), [query, activeCat]);

  const catToolCount = (slug: string) => tools.filter(t => t.category === slug).length;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 text-center dark:from-zinc-900 dark:to-zinc-950">
        <h1 className="mb-3 text-4xl font-bold text-zinc-900 dark:text-white">
          🐑 AI 工具导航
        </h1>
        <p className="mb-8 text-zinc-500">收录 {tools.length}+ 优质 AI 工具，助你高效工作</p>
        <SearchBar onSearch={setQuery} />
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setActiveCat('')}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${!activeCat ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'}`}
          >
            全部 ({tools.length})
          </button>
          {categories.map(cat => (
            <button key={cat.slug} onClick={() => setActiveCat(cat.slug)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeCat === cat.slug ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'}`}
            >
              {cat.icon} {cat.name} ({catToolCount(cat.slug)})
            </button>
          ))}
        </div>

        {/* Tool Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(tool => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-zinc-400">
            <p className="text-4xl mb-4">🔍</p>
            <p>没有找到匹配的工具，试试其他关键词？</p>
          </div>
        )}

        {/* 底部广告位 */}
        <FooterAd />
      </section>
    </main>
  );
}
