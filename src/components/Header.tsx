import Link from 'next/link';
import { categories } from '@/lib/data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
          <span>🐑</span>
          <span>AI工具导航</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <span>{categories.length} 个分类</span>
        </div>
      </nav>
    </header>
  );
}
