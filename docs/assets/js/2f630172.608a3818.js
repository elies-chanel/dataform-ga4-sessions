"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),y=s,f=u["".concat(l,".").concat(y)]||u[y]||p[y]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8472:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_position:3},o="Intraday sessions",i={unversionedId:"sessions/intraday-sessions",id:"sessions/intraday-sessions",isDocsHomePage:!1,title:"Intraday sessions",description:"If you export from GA4 not only daily data but also intraday data, you could consider keeping daily and intraday data in separate tables for both sessions and events.",source:"@site/docs/sessions/intraday-sessions.md",sourceDirName:"sessions",slug:"/sessions/intraday-sessions",permalink:"/dataform-ga4-sessions/sessions/intraday-sessions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sessions/intraday-sessions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Session presets",permalink:"/dataform-ga4-sessions/sessions/session-presets"},next:{title:"Source / medium rules",permalink:"/dataform-ga4-sessions/sessions/source-medium"}},l=[{value:"How to filter intraday events",id:"how-to-filter-intraday-events",children:[]}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"intraday-sessions"},"Intraday sessions"),(0,s.kt)("p",null,"If you export from GA4 not only daily data but also intraday data, you could consider keeping daily and intraday data in separate tables for both sessions and events."),(0,s.kt)("p",null,"Mainly because the intraday data is not complete and could be updated later. When Google exports data to daily tables it also deletes the same day from intraday data. So you could get the ghost sessions or events that existed only in intraday data but not in daily data. And because the intrday data could be already deleted, you couldn't even check them."),(0,s.kt)("p",null,"If for some reports you need both daily and intraday data you could create a view that union both tables. And use this view for reporting."),(0,s.kt)("h2",{id:"how-to-filter-intraday-events"},"How to filter intraday events"),(0,s.kt)("p",null,"You need to filter intrday data only if you ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"events_*")," table. To filter intraday events you could use where statement like this ",(0,s.kt)("inlineCode",{parentName:"p"},"contains_substr(_TABLE_SUFFIX, 'intraday') is false"),"."),(0,s.kt)("p",null,"You could set this ",(0,s.kt)("inlineCode",{parentName:"p"},"WHERE")," statement for both incremental and non-incremental tables like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const ga4 = require("dataform-ga4-sessions");\nconst config = {\n  incrementalTableName: "events_*",\n  incrementalTableEventStepWhere:\n    "contains_substr(_TABLE_SUFFIX, \'intraday\') is false",\n  nonIncrementalTableName: "events_*",\n  nonIncrementalTableEventStepWhere:\n    "contains_substr(_TABLE_SUFFIX, \'intraday\') is false",\n};\n\nconst sessions = new ga4.Session(config);\nsessions.publish();\n')))}u.isMDXComponent=!0}}]);