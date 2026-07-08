import Link from 'next/link';
import type { AITool } from '@/lib/types';

export function ToolCard({ tool }: { tool: AITool }) {
  const pricingColor = {
    'Free': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Freemium': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'Paid': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'Open Source': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  }[tool.pricing];

  return (
    <Link href={`/tool/${tool.slug}`}
      className="group block rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {tool.name}
        </h3>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${pricingColor}`}>
          {tool.pricing === 'Open Source' ? '开源' : tool.pricing === 'Freemium' ? '免费增值' : tool.pricing === 'Free' ? '免费' : '付费'}
        </span>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
        {tool.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
