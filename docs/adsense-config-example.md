# AdSense 配置示例

## 环境变量方式（推荐）

创建 `.env.local` 文件：

```env
# Google AdSense 配置
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_FOOTER_SLOT=1234567890
NEXT_PUBLIC_ADSENSE_IN_CONTENT_SLOT=0987654321
```

## 代码中使用

```tsx
// src/components/AdSense.tsx
import { FooterAd, InContentAd } from '@/components/AdSense';

// 使用环境变量
<FooterAd client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT} />
<InContentAd client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT} />
```

## 直接配置方式

直接在组件中替换 ID：

```tsx
// src/components/AdSense.tsx

// FooterAd 组件
slot="YOUR_FOOTER_SLOT_ID"  // 替换为首页底部广告单元 ID

// InContentAd 组件  
slot="YOUR_IN_CONTENT_SLOT_ID"  // 替换为详情页广告单元 ID
```

## 获取 ID 的位置

1. **发布商 ID (ca-pub-XXX)**
   - AdSense 控制台 → 账户 → 账户信息
   
2. **广告单元 ID (slot)**
   - AdSense 控制台 → 广告 → 按广告单元 → 点击广告名称
   - 或创建新广告单元后查看代码中的 `data-ad-slot` 值
