'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseProps {
  client?: string;        // 发布商 ID，如：ca-pub-XXXXXXXXXXXXXXXX
  slot: string;           // 广告单元 ID
  format?: string;        // 广告格式：auto, horizontal, vertical, rectangle
  responsive?: boolean;   // 是否响应式
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Google AdSense 广告组件
 * 
 * 使用方法：
 * 1. 先在 Google AdSense 后台创建广告单元，获取 slot ID
 * 2. 在需要显示广告的地方引入组件
 * 
 * 示例：
 * <AdSense client="ca-pub-XXXXXXXXXXXXXXXX" slot="1234567890" />
 */
export function AdSense({
  client = 'ca-pub-XXXXXXXXXXXXXXXX', // 替换为你的发布商 ID
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  style = {},
}: AdSenseProps) {
  useEffect(() => {
    try {
      // 推送广告到 AdSense 队列
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

/**
 * 广告占位符组件 - 用于开发/测试时显示广告位置
 */
export function AdPlaceholder({
  width = '100%',
  height = '90px',
  label = '广告位',
}: {
  width?: string;
  height?: string;
  label?: string;
}) {
  return (
    <div
      className="flex items-center justify-center border-2 border-dashed border-zinc-300 bg-zinc-100 text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500"
      style={{ width, height, minHeight: height }}
    >
      <span className="text-sm">{label}</span>
    </div>
  );
}

/**
 * 页面底部横幅广告
 */
export function FooterAd({ client }: { client?: string }) {
  return (
    <div className="my-4 flex justify-center">
      <AdSense
        client={client}
        slot="FOOTER_SLOT_ID" // 替换为实际的广告单元 ID
        format="horizontal"
        className="w-full max-w-4xl"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
}

/**
 * 侧边栏广告（用于详情页）
 */
export function SidebarAd({ client }: { client?: string }) {
  return (
    <div className="sticky top-4">
      <AdSense
        client={client}
        slot="SIDEBAR_SLOT_ID" // 替换为实际的广告单元 ID
        format="vertical"
        className="w-full"
        style={{ minHeight: '250px', width: '300px' }}
      />
    </div>
  );
}

/**
 * 内容中插入广告
 */
export function InContentAd({ client }: { client?: string }) {
  return (
    <div className="my-6 flex justify-center">
      <AdSense
        client={client}
        slot="IN_CONTENT_SLOT_ID" // 替换为实际的广告单元 ID
        format="rectangle"
        className="w-full"
        style={{ minHeight: '250px' }}
      />
    </div>
  );
}
