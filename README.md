# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

---

---

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/\*_ @type {import('@docusaurus/types').Config} _/
const config = {
title: "My Site",
tagline: "Dinosaurs are cool",
url: "https://github.com",
baseUrl: "/documentations/",
onBrokenLinks: "throw",
onBrokenMarkdownLinks: "warn",
favicon: "img/favicon.ico",

// GitHub pages deployment config.
// If you aren't using GitHub pages, you don't need these.
organizationName: "lehelbeni", // Usually your GitHub org/user name.
projectName: "documentations", // Usually your repo name.
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
"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
},
blog: {
showReadingTime: true,
// Please change this to your repo.
// Remove this to remove the "edit this page" links.
editUrl:
"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
},
theme: {
customCss: require.resolve("./src/css/custom.css"),
},
}),
],
],

themeConfig:
/\*_ @type {import('@docusaurus/preset-classic').ThemeConfig} _/
({
navbar: {
title: "My Site",
logo: {
alt: "My Site Logo",
src: "img/logo.svg",
},
items: [
{
type: "doc",
docId: "intro",
position: "left",
label: "Tutorial",
},
{ to: "/blog", label: "Blog", position: "left" },
{
href: "https://github.com/facebook/docusaurus",
label: "GitHub",
position: "right",
},
],
},
footer: {
style: "dark",
links: [
{
title: "Docs",
items: [
{
label: "Tutorial",
to: "/docs/intro",
},
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
{
label: "Blog",
to: "/blog",
},
{
label: "GitHub",
href: "https://github.com/facebook/docusaurus",
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
