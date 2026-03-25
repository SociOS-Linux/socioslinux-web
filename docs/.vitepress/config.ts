import { defineConfig } from 'vitepress'

const base = process.env.DOCS_BASE || '/'

export default defineConfig({
  title: 'Socios Linux',
  description: 'Immutable host core, customizable user space, and a separate agent plane.',
  base,
  lang: 'en-US',
  srcDir: '.',
  outDir: '.vitepress/dist',
  lastUpdated: true,
  themeConfig: {
    logo: '/mark.svg',
    nav: [
      { text: 'Architecture', link: '/architecture' },
      { text: 'SourceOS', link: '/sourceos' },
      { text: 'Agent Plane', link: '/agent-plane' },
      { text: 'Commons', link: '/commons' },
      { text: 'Organizations', link: '/organizations' },
      { text: 'Governments', link: '/governments' },
      { text: 'FAQ', link: '/faq' }
    ],
    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'SourceOS', link: '/sourceos' },
          { text: 'Agent Plane', link: '/agent-plane' }
        ]
      },
      {
        text: 'Target Surfaces',
        items: [
          { text: 'Commons', link: '/commons' },
          { text: 'Organizations', link: '/organizations' },
          { text: 'Governments', link: '/governments' }
        ]
      },
      {
        text: 'Platform Context',
        items: [
          { text: 'Connected Stack', link: '/connected-stack' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/socios-linux' }
    ],
    footer: {
      message: 'Local-first. Secure by design. Agentic by architecture.',
      copyright: 'Copyright © 2026'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `${base}mark.svg` }]
  ]
})
