---
sidebar_position: 2
---
# Docusaurus 
## Creating a docusaurus docuemntation 

## Publish Docusaurus to GitHub Pages
1. Create new Git Repository and git push origin main the new git repo

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
First ajust the settings in the project directory *Settings->Pages-> deploy from branch -> gh-pages*

## Updating the documentation is done by the following command
```bash
git add .
git commit -m "Update"
git push origin main
GIT_USER=lehelbeni yarn deploy
``` 
 ## Adding Searh to your docusaurus site
1. Install this package
```bash
npm i docusaurus-lunr-search  --save
```
2. Then run npm install to update, build, and link the packages
```bash
npm install
```
3. Add the docusaurus-lunr-search plugin to your docusaurus.config.js
```bash
module.exports = {
  // ...
    plugins: [require.resolve('docusaurus-lunr-search')],
}
```
4. Then run docusaurus swizzle
```bash
npm run swizzle docusaurus-lunr-search SearchBar -- --eject --danger
```
5. Then build your Docusaurus project
```bash
npm run build
```
6. Serve your application
```bash
npx http-server ./build
```