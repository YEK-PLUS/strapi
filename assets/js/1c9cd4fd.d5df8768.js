"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3719],{6002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(3117),n=(r(7294),r(3905));const a={title:"useCollator",description:"API reference for the useCollator hook in Strapi",tags:["hooks","helper-plugin","i18n"]},l=void 0,i={unversionedId:"docs/core/helper-plugin/hooks/use-collator",id:"docs/core/helper-plugin/hooks/use-collator",title:"useCollator",description:"API reference for the useCollator hook in Strapi",source:"@site/docs/docs/01-core/helper-plugin/hooks/use-collator.mdx",sourceDirName:"docs/01-core/helper-plugin/hooks",slug:"/docs/core/helper-plugin/hooks/use-collator",permalink:"/docs/core/helper-plugin/hooks/use-collator",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/helper-plugin/hooks/use-collator.mdx",tags:[{label:"hooks",permalink:"/tags/hooks"},{label:"helper-plugin",permalink:"/tags/helper-plugin"},{label:"i18n",permalink:"/tags/i-18-n"}],version:"current",frontMatter:{title:"useCollator",description:"API reference for the useCollator hook in Strapi",tags:["hooks","helper-plugin","i18n"]},sidebar:"docs",previous:{title:"useCallbackRef",permalink:"/docs/core/helper-plugin/hooks/use-callback-ref"},next:{title:"useFetchClient",permalink:"/docs/core/helper-plugin/hooks/use-fetch-client"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Typescript",id:"typescript",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A custom hook that returns the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.Collator"))," native API.\nUseful for searching & sorting strings that are localised. The implementation method has a unique cache store to avoid creating a new instance of the\n",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.Collator")," for each call of the hook depending on the locale and options provided."),(0,n.kt)("p",null,"Borrowed from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/i18n/src/useCollator.ts"},(0,n.kt)("inlineCode",{parentName:"a"},"react-aria")),"."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { useIntl } from 'react-intl';\nimport { useCollator } from '@strapi/helper-plugin';\n\nconst MyComponent = () => {\n  const { locale } = useIntl();\n  const fruits = ['banana', 'apple', 'orange', 'kiwi'];\n\n  const formatter = useCollator(locale, { sensitivity: 'base' });\n\n  /**\n   * This would render the list of fruits in the following order:\n   * apple\n   * banana\n   * kiwi\n   * orange\n   */\n  return (\n    <div>\n      {fruits.sort(formatter.compare).map((fruit) => (\n        <h2 key={fruit}>{fruit}</h2>\n      ))}\n    </div>\n  );\n};\n")),(0,n.kt)("h2",{id:"typescript"},"Typescript"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"function useCollator(locale: string, options?: Intl.CollatorOptions): Intl.Collator;\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),h=n,d=f["".concat(s,".").concat(h)]||f[h]||u[h]||a;return r?o.createElement(d,l(l({ref:t},p),{},{components:r})):o.createElement(d,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);