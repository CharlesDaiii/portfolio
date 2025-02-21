import{r as l,j as e}from"./jsx-runtime-Lfnj0zCF.js";import{D as L}from"./divider-lsPzqSmL.js";import{F as C,L as W}from"./footer-n9IpUovb.js";import{T as N,m as w,b as g,H as u,c as H,t as S,n as B,B as $,I as y}from"./heading-DBM6cEeA.js";import{I as b}from"./image-NZsUV6ku.js";import{S as v,b as q}from"./meta-B_g4uubJ.js";import{u as D}from"./useParallax-BgijhgyP.js";import{u as M}from"./useScrollToHash-BQ8WfcVN.js";import{c as R}from"./clamp-e7DugykH.js";import{f as z}from"./date-DvyCAN0s.js";import{L as P,c as E,O}from"./components-InTK3wdF.js";import{u as A}from"./theme-provider-CGEkIZw1.js";import{a as F,L as T}from"./list-CiZQWnP7.js";import{M as U}from"./index-BW8I-Isz.js";import"./config-DFiBtguG.js";import"./useInViewport-DazAZXCp.js";import"./image-BvwpLhe9.js";const X="_post_kr7uo_20",G="_header_kr7uo_44",J="_headerText_kr7uo_55",K="_date_kr7uo_79",Q="_dateText_kr7uo_91",V="_titleWordWrapper_kr7uo_118",Y="_titleWord_kr7uo_118",Z="_banner_kr7uo_138",ee="_bannerImage_kr7uo_190",se="_bannerImageBlur_kr7uo_191",te="_details_kr7uo_202",ae="_arrow_kr7uo_209",oe="_timecode_kr7uo_233",re="_wrapper_kr7uo_254",ne="_content_kr7uo_266",o={post:X,header:G,headerText:J,date:K,dateText:Q,titleWordWrapper:V,titleWord:Y,banner:Z,bannerImage:ee,bannerImageBlur:se,details:te,arrow:ae,timecode:oe,wrapper:re,content:ne},ce=({children:s,title:t,date:a,banner:n,timecode:d})=>{const k=M(),m=l.useRef(),[_,x]=l.useState(null);l.useEffect(()=>{x(z(a))},[a,_]),D(.004,c=>{m.current&&m.current.style.setProperty("--blurOpacity",R(c,0,1))});const h=c=>{c.preventDefault(),k(c.currentTarget.href)},i=`${n==null?void 0:n.split(".")[0]}-placeholder.jpg`;return e.jsxs("article",{className:o.post,children:[e.jsxs(v,{children:[n&&e.jsxs("div",{className:o.banner,ref:m,children:[e.jsx("div",{className:o.bannerImage,children:e.jsx(b,{role:"presentation",src:n,placeholder:i,alt:""})}),e.jsx("div",{className:o.bannerImageBlur,children:e.jsx(b,{role:"presentation",src:i,placeholder:i,alt:""})})]}),e.jsx("header",{className:o.header,children:e.jsxs("div",{className:o.headerText,children:[e.jsx(N,{in:!0,timeout:w(S.base.durationM),children:({visible:c,nodeRef:p})=>e.jsxs("div",{className:o.date,ref:p,children:[e.jsx(L,{notchWidth:"64px",notchHeight:"8px",collapsed:!c}),e.jsx(g,{className:o.dateText,"data-visible":c,children:_})]})}),e.jsx(u,{level:2,as:"h1",className:o.title,"aria-label":t,children:t.split(" ").map((c,p)=>e.jsx("span",{className:o.titleWordWrapper,children:e.jsxs("span",{className:o.titleWord,style:H({delay:B(p*100+100)}),children:[c,p!==t.split(" ").length-1?" ":""]})},`${c}-${p}`))}),e.jsxs("div",{className:o.details,children:[e.jsx(P,{to:"#postContent",className:o.arrow,"aria-label":"Scroll to post content",onClick:h,children:e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})}),e.jsx("div",{className:o.timecode,children:d})]})]})})]}),e.jsx(v,{className:o.wrapper,id:"postContent",tabIndex:-1,children:e.jsx(g,{as:"div",size:"l",className:o.content,children:s})}),e.jsx(C,{})]})},le="_code_113ft_2",ie="_actions_113ft_159",de="_copyIcon_113ft_176",me="_lang_113ft_198",j={code:le,actions:ie,copyIcon:de,lang:me},he=s=>{var x;const[t,a]=l.useState(!1),{theme:n}=A(),d=l.useRef(),k=l.useRef(),m=(x=s.className)==null?void 0:x.split("-")[1],_=()=>{clearTimeout(k),navigator.clipboard.writeText(d.current.textContent),a(!0),setTimeout(()=>{a(!1)},2e3)};return e.jsxs("div",{className:j.code,"data-theme":n,children:[!!m&&e.jsx(g,{secondary:!0,size:"s",className:j.lang,children:m}),e.jsx("pre",{ref:d,...s}),e.jsx("div",{className:j.actions,children:e.jsx($,{iconOnly:!0,onClick:_,"aria-label":"Copy",children:e.jsxs("span",{className:j.copyIcon,children:[e.jsx(N,{in:!t,children:({visible:h,nodeRef:i})=>e.jsx(y,{ref:i,icon:"copy","data-visible":h})}),e.jsx(N,{in:t,children:({visible:h,nodeRef:i})=>e.jsx(y,{ref:i,icon:"check","data-visible":h})})]})})})]})},pe="_heading_69uyj_2",ue="_paragraph_69uyj_14",_e="_list_69uyj_14",xe="_image_69uyj_14",je="_headingLink_69uyj_19",ge="_code_69uyj_72",fe="_pre_69uyj_90",ke="_hr_69uyj_106",Ne="_blockquote_69uyj_120",ye="_strong_69uyj_139",be="_embed_69uyj_143",r={heading:pe,paragraph:ue,list:_e,image:xe,headingLink:je,code:ge,pre:fe,hr:ke,blockquote:Ne,strong:ye,embed:be},f=({id:s})=>e.jsx(P,{className:r.headingLink,to:`#${s}`,"aria-label":"Link to heading",children:e.jsx(y,{icon:"link"})}),ve=({children:s,id:t,...a})=>e.jsxs(u,{className:r.heading,id:t,level:2,as:"h1",...a,children:[e.jsx(f,{id:t}),s]}),Pe=({children:s,id:t,...a})=>e.jsxs(u,{className:r.heading,id:t,level:3,as:"h2",...a,children:[e.jsx(f,{id:t}),s]}),Te=({children:s,id:t,...a})=>e.jsxs(u,{className:r.heading,id:t,level:4,as:"h3",...a,children:[e.jsx(f,{id:t}),s]}),Ie=({children:s,id:t,...a})=>e.jsxs(u,{className:r.heading,id:t,level:5,as:"h4",...a,children:[e.jsx(f,{id:t}),s]}),Le=({children:s,...t})=>{const a=l.Children.count(s)===1,n=l.Children.toArray(s)[0];return a&&n.type===I?s:e.jsx(g,{className:r.paragraph,size:"l",as:"p",...t,children:s})},Ce=({...s})=>e.jsx(W,{...s}),We=s=>e.jsx(T,{className:r.list,...s}),we=s=>e.jsx(T,{className:r.list,ordered:!0,...s}),He=({children:s,...t})=>e.jsx(F,{...t,children:s}),Se=({children:s,...t})=>e.jsx("code",{className:r.code,...t,children:s}),Be=s=>e.jsx("div",{className:r.pre,children:e.jsx(he,{...s})}),$e=s=>e.jsx("blockquote",{className:r.blockquote,...s}),qe=s=>e.jsx("hr",{className:r.hr,...s}),De=s=>e.jsx("strong",{className:r.strong,...s}),I=({src:s,alt:t,width:a,height:n,...d})=>e.jsx("img",{className:r.image,src:s,loading:"lazy",alt:t,width:a,height:n,...d}),Me=({src:s})=>e.jsx("div",{className:r.embed,children:e.jsx("iframe",{src:s,loading:"lazy",title:"Embed"})}),Re={h1:ve,h2:Pe,h3:Te,h4:Ie,p:Le,a:Ce,ul:We,ol:we,li:He,pre:Be,code:Se,blockquote:$e,hr:qe,img:I,strong:De,Embed:Me};function as({data:s}){const{title:t,abstract:a}=s.frontmatter;return q({title:t,description:a,prefix:"",ogImage:s.ogImage})}function os(){const{frontmatter:s,timecode:t}=E();return e.jsx(U,{components:Re,children:e.jsx(ce,{...s,timecode:t,children:e.jsx(O,{})})})}export{os as default,as as meta};
