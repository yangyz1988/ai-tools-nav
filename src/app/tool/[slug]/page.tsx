import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tools } from '@/lib/data';
import type { Metadata } from 'next';

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return { title: '工具未找到' };
  return {
    title: `${tool.name} - AI工具导航`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) notFound();

  const pricingLabel = { 'Free': '免费', 'Freemium': '免费增值', 'Paid': '付费', 'Open Source': '开源' }[tool.pricing];

  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-blue-600">
        ← 返回首页
      </Link>

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{tool.name}</h1>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            {pricingLabel}
          </span>
        </div>

        <p className="mb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">{tool.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {tool.tags.map(tag => (
            <span key={tag} className="rounded-lg bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">核心功能</h2>
        <ul className="mb-8 space-y-2">
          {tool.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-blue-500">✦</span> {f}
            </li>
          ))}
        </ul>

        <a href={tool.url} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          访问官网
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </main>
  );
}
