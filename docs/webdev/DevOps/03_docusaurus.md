---
sidebar_position: 3
---
# Docusaurus 
## Creating a docusaurus docuemntation 

## Publish Docusaurus to GitHub Pages
1. Create new Git Repository and  git push origin main the new git repo

2. Edith docusaurus.config.js
```js
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
```

## Building and deploying to github pages
 First ajust the settings in the project directory *Settings->Pages-> deploy from branch -> gh-pages* #gh-pages