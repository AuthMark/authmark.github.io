import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AuthMark",
  description: "Official documentation for AuthMark, the free static site authentication tool.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/getstart/intro' },
      { text: 'Demo Site', link: 'https://authmark.github.io/AuthExample/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getstart/intro' },
          { text: 'Quick Start', link: '/getstart/quick-start' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AuthMark' }
    ],

    footer: {
      message: 'AuthMark is not affiliated with any of its authentication providers.',
      copyright: `Copyright © ${new Date().getFullYear()} AuthMark`
    }
  }
})
