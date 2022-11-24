"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||u;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,o=new Array(u);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<u;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const u={sidebar_position:2},o="Docusaurus",s={unversionedId:"webdev/docusaurus",id:"webdev/docusaurus",title:"Docusaurus",description:"Creating a docusaurus docuemntation",source:"@site/docs/webdev/02_docusaurus.md",sourceDirName:"webdev",slug:"/webdev/docusaurus",permalink:"/docs/webdev/docusaurus",draft:!1,editUrl:"https://github.com/lehelbeni/lehelbeni.github.io/tree/main/docs/webdev/02_docusaurus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"webdevSidebar",previous:{title:"The essentials",permalink:"/docs/webdev/intro"},next:{title:"Software Development Methods",permalink:"/docs/category/software-development-methods"}},i={},l=[{value:"Creating a docusaurus docuemntation",id:"creating-a-docusaurus-docuemntation",level:2},{value:"Updating the documentation",id:"updating-the-documentation",level:2},{value:"Publish Docusaurus to GitHub Pages",id:"publish-docusaurus-to-github-pages",level:2},{value:"Building and deploying to github pages",id:"building-and-deploying-to-github-pages",level:2},{value:"Adding Searh to your docusaurus site",id:"adding-searh-to-your-docusaurus-site",level:2},{value:"Docusaurus Mermaid",id:"docusaurus-mermaid",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docusaurus"},"Docusaurus"),(0,r.kt)("h2",{id:"creating-a-docusaurus-docuemntation"},"Creating a docusaurus docuemntation"),(0,r.kt)("h2",{id:"updating-the-documentation"},"Updating the documentation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Update"\ngit push origin main\nGIT_USER=lehelbeni yarn deploy\n')),(0,r.kt)("p",null,"... and then start here of course ..."),(0,r.kt)("h2",{id:"publish-docusaurus-to-github-pages"},"Publish Docusaurus to GitHub Pages"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create new Git Repository and git push origin main the new git repo")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edith docusaurus.config.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},' title: "lehelbeni.md",\n  tagline: "Dinosaurs are cool",\n  url: "https://lehelbeni.github.io",\n  baseUrl: "/",\n  onBrokenLinks: "throw",\n  onBrokenMarkdownLinks: "warn",\n  favicon: "img/favicon.ico",\n\n  // GitHub pages deployment config.\n  // If you aren\'t using GitHub pages, you don\'t need these.\n  organizationName: "lehelbeni", // Usually your GitHub org/user name.\n  projectName: "lehelbeni.github.io", // Usually your repo name.\n  deploymentBranch: "gh-pages",\n')),(0,r.kt)("h2",{id:"building-and-deploying-to-github-pages"},"Building and deploying to github pages"),(0,r.kt)("p",null,"First ajust the settings in the project directory ",(0,r.kt)("em",{parentName:"p"},"Settings->Pages-> deploy from branch -> gh-pages")),(0,r.kt)("h2",{id:"adding-searh-to-your-docusaurus-site"},"Adding Searh to your docusaurus site"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install this package")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i docusaurus-lunr-search  --save\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Then run npm install to update, build, and link the packages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add the docusaurus-lunr-search plugin to your docusaurus.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module.exports = {\n  // ...\n    plugins: [require.resolve('docusaurus-lunr-search')],\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Then run docusaurus swizzle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle docusaurus-lunr-search SearchBar -- --eject --danger\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Then build your Docusaurus project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Serve your application")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx http-server ./build\n")),(0,r.kt)("h2",{id:"docusaurus-mermaid"},"Docusaurus Mermaid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-mermaid\n")),(0,r.kt)("p",null,"docusaurus.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  markdown: {\n    mermaid: true,\n  },\n  themes: ['@docusaurus/theme-mermaid'],\n\n  themeConfig: {\n    mermaid: {\n      theme: {light: 'neutral', dark: 'forest'},\n       options: {\n        maxTextSize: 50,\n      },\n    },\n  },\n};\n")))}c.isMDXComponent=!0}}]);