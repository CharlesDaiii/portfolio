import{r as _,j as n}from"./jsx-runtime-Lfnj0zCF.js";import{a as r,b as k}from"./heading-DBM6cEeA.js";import{L as g}from"./components-InTK3wdF.js";import{c as j}from"./config-DFiBtguG.js";const y="_link_1h1qj_2",E={link:y},L=["txt","png","jpg"];function $(t){const o=L.includes(t==null?void 0:t.split(".").pop());return(t==null?void 0:t.includes("://"))||(t==null?void 0:t[0])==="#"||o}const b=_.forwardRef(({rel:t,target:o,children:e,secondary:c,className:d,href:s,...m},x)=>{const i=s==null?void 0:s.includes("://"),u=t||(i?"noreferrer noopener":void 0),p=o||(i?"_blank":void 0),l={className:r(E.link,d),"data-secondary":c,rel:u,href:s,target:p,ref:x,...m};return $(s)?n.jsx("a",{...l,href:s,children:e}):n.jsx(g,{unstable_viewTransition:!0,prefetch:"intent",...l,to:s,children:e})}),z="_footer_gmxrz_2",N="_link_gmxrz_16",V="_date_gmxrz_20",a={footer:z,link:N,date:V},A=({className:t})=>n.jsx("footer",{className:r(a.footer,t),children:n.jsxs(k,{size:"s",align:"center",children:[n.jsx("span",{className:a.date,children:`© ${new Date().getFullYear()} ${j.name}.`}),n.jsx(b,{secondary:!0,className:a.link,href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})});export{A as F,b as L};
