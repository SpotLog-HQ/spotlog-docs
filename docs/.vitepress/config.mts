import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SpotLog",
  description: "Knowledge base for SpotLog",
  head: [
    [
      "script",
      {
        defer: "",
        src: "https://stats.codenameowl.com/script.js",
        "data-website-id": "92d41c2f-f7cc-4221-942e-ba91a0606cc9",
      },
    ],
  ],
  themeConfig: {
    logo: "/images/icon.png",
     search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: [
      { text: "Home", link: "index" },
      {
        text: "Getting Started",
        link: "getting-started/index",
        items: [
          { text: "Quick Log", link: "getting-started/quick-log" },
          { text: "Stats", link: "getting-started/stats" },
          { text: "Calendar", link: "getting-started/calendar" },
          { text: "Gallery", link: "getting-started/gallery" },
          { text: "Searching", link: "getting-started/searching" },
          { text: "Achievements", link: "getting-started/achievements" },
        ],
      },
      {
        text: "Detailed Log",
        link: "detailed-log/index",
        items: [
          {
            text: "Locomotive Details",
            link: "detailed-log/locomotive-details",
          },
          { text: "Location Seen", link: "detailed-log/location-seen" },
          {
            text: "Onboard Information",
            link: "detailed-log/onboard-information",
          },
          { text: "Train Details", link: "detailed-log/train-details" },
          { text: "Notes", link: "detailed-log/notes" },
          { text: "Photos", link: "detailed-log/photos" },
        ],
      },
      {
        text: "My Spots",
        link: "my-spots/index",
        items: [
          { text: "Spot Details", link: "my-spots/spot-details" },
          { text: "Edit a Spot", link: "my-spots/edit-a-spot" },
          { text: "Delete a Spot", link: "my-spots/delete-a-spot" },
          { text: "Filtering", link: "my-spots/filtering" },
        ],
      },
      {
        text: "Settings",
        link: "settings/index",
        items: [
          {
            text: "Preferences",
            items: [
              { text: "Appearance", link: "settings/preferences/appearance" },
              { text: "Notifications", link: "settings/preferences/notifications" },
              { text: "Reminders", link: "settings/preferences/reminders" },
            ],
          },
          { text: "Widgets", link: "settings/widgets" },
          {
            text: "Import / Export",
            items: [
              { text: "Import / Restore", link: "settings/import-export/import" },
              { text: "Export as CSV", link: "settings/import-export/export-as-csv" },
              { text: "Full Backup", link: "settings/import-export/export-full" },
              { text: "Export Photos", link: "settings/import-export/export-photos" },
            ],
          },
          {
            text: "Reference Data",
            items: [
              { text: "Locomotive Details", link: "settings/reference-data/locomotive-details" },
              { text: "Locomotive Classes", link: "settings/reference-data/locomotive-classes" },
              { text: "Locations", link: "settings/reference-data/locations" },
              { text: "Operators", link: "settings/reference-data/operators" },
            ],
          },
          { text: "Delete All Spots", link: "settings/delete-all-spots" },
          { text: "Restart Tutorial", link: "settings/restart-tutorial" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/spotlog-hq/spotlog-docs" },
    ],
  },
});
