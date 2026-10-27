// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 独立研究站：https://binbinao.github.io/insights/
// 与简历站 (base: '/resume') 完全分离，不互相链接。
export default defineConfig({
  site: 'https://binbinao.github.io',
  base: '/insights',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
