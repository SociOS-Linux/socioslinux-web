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
      { text: 'Download', link: '/download' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'SourceOS', link: '/sourceos' },
      { text: 'Ecosystem', link: '/ecosystem' },
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
          { text: 'Download', link: '/download' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'SourceOS', link: '/sourceos' },
          { text: 'Ecosystem', link: '/ecosystem' },
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
      },
      {
        text: 'Project (IA & Backlog)',
        collapsed: true,
        items: [
          { text: 'Site Map', link: '/ia/site-map-v0.1' },
          { text: 'Messaging', link: '/ia/messaging-v0.1' },
          { text: 'Routing & Domains', link: '/ia/routing-v0.1' },
          { text: 'Decisions', link: '/backlog/decisions' },
          { text: 'Open Questions', link: '/backlog/open-questions' }
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
