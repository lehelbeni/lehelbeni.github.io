// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [require.resolve("docusaurus-lunr-search")],
  title: "lehelbeni.md",
  tagline: "Dinosaurs are cool",
  url: "https://lehelbeni.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lehelbeni", // Usually your GitHub org/user name.
  projectName: "lehelbeni.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/lehelbeni/lehelbeni.github.io/tree/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/lehelbeni/lehelbeni.github.io/tree/main/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: {
          light: "forest",
          dark: "forest",
        },
      },
      navbar: {
        title: "lehelbeni.md",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "docs/intro",
            position: "left",
            label: "Documentation",
          },
          {
            type: "doc",
            docId: "neurosurgery/intro",
            position: "left",
            label: "Neurosurgery",
          },
          {
            type: "doc",
            docId: "webdev/intro",
            position: "left",
            label: "WebDev",
          },
          {
            type: "doc",
            docId: "mindcast/intro",
            position: "left",
            label: "Mindcast",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/lehelbeni/",
            label: "GitHub",
            position: "right",
          },
        ],
        // algolia: {
        //   // The application ID provided by Algolia
        //   appId: "YOUR_APP_ID",

        //   // Public API key: it is safe to commit it
        //   apiKey: "YOUR_SEARCH_API_KEY",

        //   indexName: "YOUR_INDEX_NAME",

        //   // Optional: see doc section below
        //   contextualSearch: true,

        //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //   externalUrlRegex: "external\\.com|domain\\.com",

        //   // Optional: Algolia search parameters
        //   searchParameters: {},

        //   // Optional: path for search page that enabled by default (`false` to disable it)
        //   searchPagePath: "search",

        //   //... other Algolia params
        // },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              // {
              //   label: "Tutorial",
              //   to: "/docs/intro",
              // },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/lehelbeni/lehelbeni.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
