import { defineConfig } from '@koishijs/vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'koishi-plugin-sudo',
  description: '模拟其他用户调用指令',

  head: [
    ['link', { rel: 'icon', href: 'https://koishi.chat/logo.png' }],
    ['link', { rel: 'manifest', href: 'https://koishi.chat/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5546a3' }],
  ],

  themeConfig: {
    sidebar: [{
      text: '指南',
      items: [
        { text: '介绍', link: './' },
        { text: '配置项', link: './config' },
      ],
    }, {
      text: '更多',
      items: [
        { text: 'Koishi 官网', link: 'https://koishi.chat' },
        { text: '支持作者', link: 'https://afdian.net/a/shigma' },
      ],
    }],
  },
})