import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SpotLog",
  description: "Knowledge base for SpotLog",
  head: [
    [
      'script',
      {
        defer: '',
        src: 'https://stats.codenameowl.com/script.js',
        'data-website-id': '92d41c2f-f7cc-4221-942e-ba91a0606cc9'
      }
    ]
  ],
  themeConfig: {
    logo: '/images/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Log', link: 'getting-started/quick-log' },
          { text: 'Stats', link: 'getting-started/stats' },
          { text: 'Calendar', link: 'getting-started/calendar' },
          { text: 'Gallery', link: 'getting-started/gallery' },
          { text: 'My Spots', link: 'getting-started/my-spots' },
          { text: 'Searching', link: 'getting-started/searching' }
        ]
      },
      {
        text: 'Detailed Log',
        items: [
          { text: 'Locomotive Details', link: 'detailed-log/locomotive-details' },
          { text: 'Location Seen', link: 'detailed-log/location-seen' },
          { text: 'Onboard Information', link: 'detailed-log/onboard-information' },
          { text: 'Train Details', link: 'detailed-log/train-details' },
          { text: 'Notes', link: 'detailed-log/notes' },
          { text: 'Photos', link: 'detailed-log/photos' }
        ]
      },
      {
        text: 'My Spots',
        items: [
          { text: 'Edit A Spot', link: 'my-spots/edit-a-spot' },
          { text: 'Delete A Spot', link: 'my-spots/delete-a-spot' },
          { text: 'Filtering', link: 'my-spots/filtering' }          
        ]
      },
      {
        text: 'Settings',
        items: [
          { text: 'Import', link: 'settings/import' },
          { text: 'Export', link: 'settings/export' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/spotlog-hq/spotlog-docs' }
    ]
  }
})
