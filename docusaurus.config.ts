import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Binsk's karma",
  tagline: "For good software",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://binsklee.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "binsklee", // Usually your GitHub org/user name.
  projectName: "binsklee.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "second-blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "trouble-shootings",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./trouble-shootings",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          path: "blog",
          blogTitle: "Binsk's Karma",
          blogDescription: "Tech blog by Binsk",
          routeBasePath: "/",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            "https://github.com/BinskLee",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        gtag: {
          trackingID: "G-59T6VNWJWS",
          anonymizeIP: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Binsk's Karma",
      items: [
        { to: "/", label: "Posts", position: "left" },
        {
          to: "/trouble-shootings",
          label: "Trouble-shootings",
          position: "left",
        },
        {
          href: "https://github.com/BinskLee",
          label: "GitHub Profile",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Profile",
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/yongjoon-lee-binsk",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Binsk's karma.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
