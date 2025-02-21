import{r as b,j as d,b as Je}from"./jsx-runtime-Lfnj0zCF.js";import{c as z,a as Re,T as M,m as I,I as ke,t as v,b as F,H as le,n as ce,B as ue}from"./heading-DBM6cEeA.js";import{D as Ye}from"./decoder-text-WfaU9JxB.js";import{D as qe}from"./divider-lsPzqSmL.js";import{S as Qe,b as Ze}from"./meta-B_g4uubJ.js";import{m as et,z as H,A as E,B as tt,C as rt,D as Ee,F as Y,G as nt,H as P,I as at,J as N,K as st,N as B,U as q,P as ot,Q as Ce,T as ee,V as it,W as lt,X as ct,Y as ut,Z as de,$ as fe,E as dt,a0 as ft,a1 as Te,a2 as ht,a3 as mt,a4 as pt,a5 as gt,a6 as yt,a7 as wt,w as _t,a8 as St}from"./components-InTK3wdF.js";import"./visually-hidden-CH9klrSA.js";import"./config-DFiBtguG.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var bt=Rt,xt=kt,vt=Object.prototype.toString,U=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Rt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var n={},r=t||{},a=r.decode||Et,s=0;s<e.length;){var i=e.indexOf("=",s);if(i===-1)break;var o=e.indexOf(";",s);if(o===-1)o=e.length;else if(o<i){s=e.lastIndexOf(";",i-1)+1;continue}var l=e.slice(s,i).trim();if(n[l]===void 0){var u=e.slice(i+1,o).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),n[l]=jt(u,a)}s=o+1}return n}function kt(e,t,n){var r=n||{},a=r.encode||Ct;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!U.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!U.test(s))throw new TypeError("argument val is invalid");var i=e+"="+s;if(r.maxAge!=null){var o=r.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(o)}if(r.domain){if(!U.test(r.domain))throw new TypeError("option domain is invalid");i+="; Domain="+r.domain}if(r.path){if(!U.test(r.path))throw new TypeError("option path is invalid");i+="; Path="+r.path}if(r.expires){var l=r.expires;if(!Tt(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+l.toUTCString()}if(r.httpOnly&&(i+="; HttpOnly"),r.secure&&(i+="; Secure"),r.partitioned&&(i+="; Partitioned"),r.priority){var u=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(u){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var c=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(c){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function Et(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Ct(e){return encodeURIComponent(e)}function Tt(e){return vt.call(e)==="[object Date]"||e instanceof Date}function jt(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const he={};function je(e,t){!e&&!he[t]&&(he[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Dt=({sign:e,unsign:t})=>(n,r={})=>{let{secrets:a=[],...s}={path:"/",sameSite:"lax",...r};return Ft(n,s.expires),{get name(){return n},get isSigned(){return a.length>0},get expires(){return typeof s.maxAge<"u"?new Date(Date.now()+s.maxAge*1e3):s.expires},async parse(i,o){if(!i)return null;let l=bt(i,{...s,...o});return n in l?l[n]===""?"":await Ot(t,l[n],a):null},async serialize(i,o){return xt(n,i===""?"":await Mt(e,i,a),{...s,...o})}}},te=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function Mt(e,t,n){let r=Nt(t);return n.length>0&&(r=await e(r,n[0])),r}async function Ot(e,t,n){if(n.length>0){for(let r of n){let a=await e(t,r);if(a!==!1)return me(a)}return null}return me(t)}function Nt(e){return btoa(At(encodeURIComponent(JSON.stringify(e))))}function me(e){try{return JSON.parse(decodeURIComponent(Ht(atob(e))))}catch{return{}}}function Ht(e){let t=e.toString(),n="",r=0,a,s;for(;r<t.length;)a=t.charAt(r++),/[\w*+\-./@]/.exec(a)?n+=a:(s=a.charCodeAt(0),s<256?n+="%"+pe(s,2):n+="%u"+pe(s,4).toUpperCase());return n}function pe(e,t){let n=e.toString(16);for(;n.length<t;)n="0"+n;return n}function At(e){let t=e.toString(),n="",r=0,a,s;for(;r<t.length;){if(a=t.charAt(r++),a==="%"){if(t.charAt(r)==="u"){if(s=t.slice(r+1,r+5),/^[\da-f]{4}$/i.exec(s)){n+=String.fromCharCode(parseInt(s,16)),r+=5;continue}}else if(s=t.slice(r,r+2),/^[\da-f]{2}$/i.exec(s)){n+=String.fromCharCode(parseInt(s,16)),r+=2;continue}}n+=a}return n}function Ft(e,t){je(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function X(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(n,r)=>t.charCodeAt(r))}function Ut(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function L(...e){const t=new Uint8Array(e.reduce((r,a)=>r+a.length,0));let n=0;for(const r of e)t.set(r,n),n+=r.length;return t}function It(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ge(e){return e instanceof Uint8Array?t=>e[t]:e}function K(e,t,n,r,a){const s=ge(e),i=ge(n);for(let o=0;o<a;++o)if(s(t+o)!==i(r+o))return!1;return!0}function Pt(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let n=0;n<e.length-1;n++)t[e[n]]=e.length-1-n;return t}const k=Symbol("Match");class re{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=X(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=Pt(t)}feed(t){let n=0,r;const a=[];for(;n!==t.length;)[n,...r]=this._feed(t,n),a.push(...r);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,n){const r=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const s=this._charAt(t,a+this._needle.length-1);if(s===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&r.push(this._lookbehind.slice(0,this._lookbehind.length+a)),r.push(k),this._lookbehind=new Uint8Array,[a+this._needle.length,...r];a+=this._occ[s]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)r.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const s=this._lookbehind.length+a;return s>0&&(r.push(this._lookbehind.slice(0,s)),this._lookbehind=this._lookbehind.slice(s)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(i,o)=>this._charAt(t,o-this._lookbehind.length)),[t.length,...r]}}for(a+=n;a<=t.length-this._needle.length;){const s=t[a+this._needle.length-1];if(s===this._lastChar&&t[a]===this._needle[0]&&K(this._needle,0,t,a,this._needle.length-1))return a>n&&r.push(t.slice(n,a)),r.push(k),[a+this._needle.length,...r];a+=this._occ[s]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!K(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&r.push(t.slice(n,a<t.length?a:t.length)),[t.length,...r]}_charAt(t,n){return n<0?this._lookbehind[this._lookbehind.length+n]:t[n]}_memcmp(t,n,r){return K(this._charAt.bind(this,t),n,this._needle,0,r)}}class Lt{constructor(t,n){this._readableStream=n,this._search=new re(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const r=await t.read();if(r.done)break;yield*this._search.feed(r.value)}const n=this._search.end();n.length&&(yield n)}finally{t.releaseLock()}}}const $t=Function.prototype.apply.bind(L,void 0),De=X("--"),O=X(`\r
`);function zt(e){const t=e.split(";").map(r=>r.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const n={};for(const r of t){const a=r.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+r+" in `"+e+"`");const[s,i]=a;if(i[0]==='"'&&i[i.length-1]==='"')n[s]=i.slice(1,-1).replace(/\\"/g,'"');else if(i[0]!=='"'&&i[i.length-1]!=='"')n[s]=i;else if(i[0]==='"'&&i[i.length-1]!=='"'||i[0]!=='"'&&i[i.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!n.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return n}function Bt(e){const t=[];let n=!1,r;for(;typeof(r=e.shift())<"u";){const a=r.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const s=r.slice(0,a).trim().toLowerCase(),i=r.slice(a+1).trim();switch(s){case"content-disposition":n=!0,t.push(...Object.entries(zt(i)));break;case"content-type":t.push(["contentType",i])}}if(!n)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function Xt(e,t){let n=!0,r=!1;const a=[[]],s=new re(O);for(;;){const i=await e.next();if(i.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(n&&i.value!==k&&It(i.value.slice(0,2),De))return[void 0,new Uint8Array];let o;if(i.value!==k)o=i.value;else if(!r)o=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!o.length)continue;n&&(n=!1);const l=s.feed(o);for(const[u,c]of l.entries()){const p=c===k;if(!(!p&&!c.length)){if(r&&p)return l.push(s.end()),[a.filter(h=>h.length).map($t).map(Ut),L(...l.slice(u+1).map(h=>h===k?O:h))];(r=p)?a.push([]):a[a.length-1].push(c)}}}}async function*Vt(e,t){const n=L(De,X(t)),r=new Lt(n,e)[Symbol.asyncIterator]();for(;;){const s=await r.next();if(s.done)return;if(s.value===k)break}const a=new re(O);for(;;){let u=function(f){const y=[];for(const m of a.feed(f))l&&y.push(O),(l=m===k)||y.push(m);return L(...y)};const[s,i]=await Xt(r,n);if(!s)return;async function o(){const f=await r.next();if(f.done)throw new Error("malformed multipart-form data: unexpected end of stream");return f}let l=!1,c=!1;async function p(){const f=await o();let y;if(f.value!==k)y=f.value;else if(!l)y=O;else return c=!0,{value:a.end()};return{value:u(y)}}const h=[{value:u(i)}];for(yield{...Bt(s),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const f=h.shift();if(!f)break;if(f.value.length>0)return f}for(;;){if(c)return{done:c,value:void 0};const f=await p();if(f.value.length>0)return f}}}};!c;)h.push(await p())}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wt(...e){return async t=>{for(let n of e){let r=await n(t);if(typeof r<"u"&&r!==null)return r}}}async function Kt(e,t){let n=e.headers.get("Content-Type")||"",[r,a]=n.split(/\s*;\s*boundary=/);if(!e.body||!a||r!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let s=new FormData,i=Vt(e.body,a);for await(let o of i){if(o.done)break;typeof o.filename=="string"&&(o.filename=o.filename.split(/[/\\]/).pop());let l=await t(o);typeof l<"u"&&l!==null&&s.append(o.name,l)}return s}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gt(e){return Object.keys(e).reduce((t,n)=>(t[n]=e[n].module,t),{})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ye(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Q(e,t,n){let r=et(e,t,n);return r?r.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function Jt({loadContext:e,action:t,params:n,request:r,routeId:a,singleFetch:s}){let i=await t({request:s?Oe($(r)):Me($(r)),context:e,params:n});if(i===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return s||E(i)?i:H(i)}async function Yt({loadContext:e,loader:t,params:n,request:r,routeId:a,singleFetch:s}){let i=await t({request:s?Oe($(r)):Me($(r)),context:e,params:n});if(i===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return tt(i)?i.init&&rt(i.init.status||200)?Ee(new Headers(i.init.headers).get("Location"),i.init):i:s||E(i)?i:H(i)}function $(e){let t=new URL(e.url),n=t.searchParams.getAll("index");t.searchParams.delete("index");let r=[];for(let s of n)s&&r.push(s);for(let s of r)t.searchParams.append("index",s);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function Me(e){let t=new URL(e.url);t.searchParams.delete("_data");let n={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return n.body&&(n.duplex="half"),new Request(t.href,n)}function Oe(e){let t=new URL(e.url);t.searchParams.delete("_routes");let n={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return n.body&&(n.duplex="half"),new Request(t.href,n)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(e){let t={};return Object.values(e).forEach(n=>{let r=n.parentId||"";t[r]||(t[r]=[]),t[r].push(n)}),t}function He(e,t="",n=Ne(e)){return(n[t]||[]).map(r=>({...r,children:He(e,r.id,n)}))}function Ae(e,t,n="",r=Ne(e)){return(r[n]||[]).map(a=>{let s={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?(i,o)=>Yt({request:i.request,params:i.params,loadContext:i.context,loader:a.module.loader,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,action:a.module.action?(i,o)=>Jt({request:i.request,params:i.params,loadContext:i.context,action:a.module.action,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,handle:a.module.handle};return a.index?{index:!0,...s}:{caseSensitive:a.caseSensitive,children:Ae(e,t,a.id,r),...s}})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const qt={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Qt=/[&><\u2028\u2029]/g;function Zt(e){return e.replace(Qt,t=>qt[t])}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(e){return Zt(JSON.stringify(e))}var er={};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function tr(e,t){if(t??(t=er.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let n=new URL(t);n.pathname="ping";let r=await fetch(n.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${n}`),a});if(!r.ok)throw console.error(`Could not reach Remix dev server at ${n} (${r.status})`),Error(await r.text())}function rr(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const Fe="__remix_devServerHooks";function nr(e){globalThis[Fe]=e}function _e(){return globalThis[Fe]}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(e,t){return`⚠️ REMIX FUTURE CHANGE: Externally-accessed resource routes will no longer be able to return raw JavaScript objects or \`null\` in React Router v7 when Single Fetch becomes the default. You can prepare for this change at your convenience by wrapping the data returned from your \`${e}\` function in the \`${t}\` route with \`json()\`.  For instructions on making this change, see https://remix.run/docs/en/v2.13.1/guides/single-fetch#resource-routes`}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ue=new Set([100,101,204,205,304]);function Se(e,t){var n,r;let a=He(e.routes),s=Ae(e.routes,e.future),i=ht(t)?t:N.Production,o=st(s,{basename:e.basename,future:{v7_relativeSplatPath:((n=e.future)===null||n===void 0?void 0:n.v3_relativeSplatPath)===!0,v7_throwAbortReason:((r=e.future)===null||r===void 0?void 0:r.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((u,{request:c})=>{i!==N.Test&&!c.signal.aborted&&console.error(B(u)&&u.error?u.error:u)});return{routes:a,dataRoutes:s,serverMode:i,staticHandler:o,errorHandler:l}}const sr=(e,t)=>{let n,r,a,s,i;return async function(l,u={}){if(n=typeof e=="function"?await e():e,t??(t=n.mode),typeof e=="function"){let g=Se(n,t);r=g.routes,a=g.serverMode,s=g.staticHandler,i=g.errorHandler}else if(!r||!a||!s||!i){let g=Se(n,t);r=g.routes,a=g.serverMode,s=g.staticHandler,i=g.errorHandler}let c=new URL(l.url),p={},h=g=>{if(t===N.Development){var _,x;(_=_e())===null||_===void 0||(x=_.processRequestError)===null||x===void 0||x.call(_,g)}i(g,{context:u,params:p,request:l})},f=`${n.basename??"/"}/__manifest`.replace(/\/+/g,"/");if(c.pathname===f)try{return await or(n,r,c)}catch(g){return h(g),new Response("Unknown Server Error",{status:500})}let y=Q(r,c.pathname,n.basename);y&&y.length>0&&Object.assign(p,y[0].params);let m;if(c.searchParams.has("_data")){n.future.v3_singleFetch&&h(new Error("Warning: Single fetch-enabled apps should not be making ?_data requests, this is likely to break in the future"));let g=c.searchParams.get("_data");m=await ir(a,n,s,g,l,u,h),n.entry.module.handleDataRequest&&(m=await n.entry.module.handleDataRequest(m,{context:u,params:p,request:l}),Y(m)&&(m=Le(m,n.basename)))}else if(n.future.v3_singleFetch&&c.pathname.endsWith(".data")){let g=new URL(l.url);g.pathname=g.pathname.replace(/\.data$/,"").replace(/^\/_root$/,"/");let _=Q(r,g.pathname,n.basename);if(m=await lr(a,n,s,l,g,u,h),n.entry.module.handleDataRequest&&(m=await n.entry.module.handleDataRequest(m,{context:u,params:_?_[0].params:{},request:l}),Y(m))){let x=nt(m.status,m.headers,n.basename);l.method==="GET"&&(x={[Te]:x});let D=new Headers(m.headers);return D.set("Content-Type","text/x-script"),new Response(P(x,l.signal,n.entry.module.streamTimeout,a),{status:at,headers:D})}}else if(y&&y[y.length-1].route.module.default==null&&y[y.length-1].route.module.ErrorBoundary==null)m=await ur(a,n,s,y.slice(-1)[0].route.id,l,u,h);else{var R,S;let g=t===N.Development?await((R=_e())===null||R===void 0||(S=R.getCriticalCss)===null||S===void 0?void 0:S.call(R,n,c.pathname)):void 0;m=await cr(a,n,s,l,u,h,g)}return l.method==="HEAD"?new Response(null,{headers:m.headers,status:m.status,statusText:m.statusText}):m}};async function or(e,t,n){let r={};if(n.searchParams.has("p")){for(let a of n.searchParams.getAll("p")){let s=Q(t,a,e.basename);if(s)for(let i of s){let o=i.route.id;r[o]=e.assets.routes[o]}}return H(r,{headers:{"Cache-Control":"public, max-age=31536000, immutable"}})}return new Response("Invalid Request",{status:400})}async function ir(e,t,n,r,a,s,i){try{let o=await n.queryRoute(a,{routeId:r,requestContext:s});if(Y(o))return Le(o,t.basename);if(q in o){let l=o[q],u=ot(l,a.signal,e),c=l.init||{},p=new Headers(c.headers);return p.set("Content-Type","text/remix-deferred"),p.set("X-Remix-Response","yes"),c.headers=p,new Response(u,c)}return o=Z(o,"X-Remix-Response","yes"),o}catch(o){if(E(o))return Z(o,"X-Remix-Catch","yes");if(B(o))return i(o),Ie(o,e);let l=o instanceof Error||o instanceof DOMException?o:new Error("Unexpected Server Error");return i(l),Ce(ee(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function lr(e,t,n,r,a,s,i){let{result:o,headers:l,status:u}=r.method!=="GET"?await lt(t,e,n,r,a,s,i):await ct(t,e,n,r,a,s,i),c=new Headers(l);return c.set("X-Remix-Response","yes"),Ue.has(u)?new Response(null,{status:u,headers:c}):(c.set("Content-Type","text/x-script"),new Response(P(o,r.signal,t.entry.module.streamTimeout,e),{status:u||200,headers:c}))}async function cr(e,t,n,r,a,s,i){let o;try{o=await n.query(r,{requestContext:a})}catch(h){return s(h),new Response(null,{status:500})}if(E(o))return o;let l=ut(t,o);if(Ue.has(o.statusCode))return new Response(null,{status:o.statusCode,headers:l});o.errors&&(Object.values(o.errors).forEach(h=>{(!B(h)||h.error)&&s(h)}),o.errors=de(o.errors,e));let u={loaderData:o.loaderData,actionData:o.actionData,errors:fe(o.errors,e)},c={manifest:t.assets,routeModules:Gt(t.routes),staticHandlerContext:o,criticalCss:i,serverHandoffString:we({basename:t.basename,criticalCss:i,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:u}}),...t.future.v3_singleFetch?{serverHandoffStream:P(u,r.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null,future:t.future,isSpaMode:t.isSpaMode,serializeError:h=>ee(h,e)},p=t.entry.module.default;try{return await p(r,o.statusCode,l,c,a)}catch(h){s(h);let f=h;if(E(h))try{let m=await dr(h);f=new dt(h.status,h.statusText,m)}catch{}o=ft(n.dataRoutes,o,f),o.errors&&(o.errors=de(o.errors,e));let y={loaderData:o.loaderData,actionData:o.actionData,errors:fe(o.errors,e)};c={...c,staticHandlerContext:o,serverHandoffString:we({basename:t.basename,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:y}}),...t.future.v3_singleFetch?{serverHandoffStream:P(y,r.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null};try{return await p(r,o.statusCode,l,c,a)}catch(m){return s(m),Pe(m,e)}}}async function ur(e,t,n,r,a,s,i){try{let o=await n.queryRoute(a,{routeId:r,requestContext:s});return typeof o=="object"&&o!==null&&ye(!(q in o),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`),t.future.v3_singleFetch&&!E(o)&&(console.warn(ar(a.method==="GET"?"loader":"action",r)),o=H(o)),ye(E(o),"Expected a Response to be returned from queryRoute"),o}catch(o){return E(o)?Z(o,"X-Remix-Catch","yes"):B(o)?(o&&i(o),Ie(o,e)):(i(o),Pe(o,e))}}function Ie(e,t){return Ce(ee(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Pe(e,t){let n="Unexpected Server Error";return t!==N.Production&&(n+=`

${String(e)}`),new Response(n,{status:500,headers:{"Content-Type":"text/plain"}})}function dr(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}function Le(e,t){let n=new Headers(e.headers),r=n.get("Location");return n.set("X-Remix-Redirect",t&&it(r,t)||r),n.set("X-Remix-Status",String(e.status)),n.delete("Location"),e.headers.get("Set-Cookie")!==null&&n.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:n})}function Z(e,t,n){let r=new Headers(e.headers);return r.set(t,n),new Response(e.body,{status:e.status,statusText:e.statusText,headers:r,duplex:e.body?"half":void 0})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function G(e){return`__flash_${e}__`}const ne=(e={},t="")=>{let n=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(n)},has(r){return n.has(r)||n.has(G(r))},get(r){if(n.has(r))return n.get(r);let a=G(r);if(n.has(a)){let s=n.get(a);return n.delete(a),s}},set(r,a){n.set(r,a)},flash(r,a){n.set(G(r),a)},unset(r){n.delete(r)}}},fr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",hr=e=>({cookie:t,createData:n,readData:r,updateData:a,deleteData:s})=>{let i=te(t)?t:e((t==null?void 0:t.name)||"__session",t);return $e(i),{async getSession(o,l){let u=o&&await i.parse(o,l),c=u&&await r(u);return ne(c||{},u||"")},async commitSession(o,l){let{id:u,data:c}=o,p=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:i.expires;return u?await a(u,c,p):u=await n(c,p),i.serialize(u,l)},async destroySession(o,l){return await s(o.id),i.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function $e(e){je(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mr=e=>({cookie:t}={})=>{let n=te(t)?t:e((t==null?void 0:t.name)||"__session",t);return $e(n),{async getSession(r,a){return ne(r&&await n.parse(r,a)||{})},async commitSession(r,a){let s=await n.serialize(r.data,a);if(s.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+s.length);return s},async destroySession(r,a){return n.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pr=e=>({cookie:t}={})=>{let n=new Map;return e({cookie:t,async createData(r,a){let s=Math.random().toString(36).substring(2,10);return n.set(s,{data:r,expires:a}),s},async readData(r){if(n.has(r)){let{data:a,expires:s}=n.get(r);if(!s||s>new Date)return a;s&&n.delete(r)}return null},async updateData(r,a,s){n.set(r,{data:a,expires:s})},async deleteData(r){n.delete(r)}})};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class ze extends Error{constructor(t,n){super(`Field "${t}" exceeded upload size of ${n} bytes.`),this.field=t,this.maxBytes=n}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr({filter:e,maxPartSize:t=3e6}={}){return async({filename:n,contentType:r,name:a,data:s})=>{if(e&&!await e({filename:n,contentType:r,name:a}))return;let i=0,o=[];for await(let l of s){if(i+=l.byteLength,i>t)throw new ze(a,t);o.push(l)}return typeof n=="string"?new File(o,n,{type:r}):await new Blob(o,{type:r}).text()}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yr=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:ze,UNSAFE_SingleFetchRedirectSymbol:Te,broadcastDevReady:tr,createCookieFactory:Dt,createCookieSessionStorageFactory:mr,createMemorySessionStorageFactory:pr,createRequestHandler:sr,createSession:ne,createSessionStorageFactory:hr,data:mt,defer:pt,isCookie:te,isSession:fr,json:H,logDevReady:rr,redirect:Ee,redirectDocument:gt,replace:yt,unstable_composeUploadHandlers:Wt,unstable_createMemoryUploadHandler:gr,unstable_parseMultipartFormData:Kt,unstable_setDevServerHooks:nr},Symbol.toStringTag,{value:"Module"}));function be(e=""){const[t,n]=b.useState(e),[r,a]=b.useState(),[s,i]=b.useState(!1);return{value:t,error:r,onChange:c=>{n(c.target.value),i(!0),r&&c.target.checkValidity()&&a(null)},onBlur:c=>{s&&c.target.checkValidity()},onInvalid:c=>{c.preventDefault(),a(c.target.validationMessage)}}}const wr="_textarea_1ly3z_2",_r={textarea:wr},Sr=({className:e,resize:t="none",value:n,onChange:r,minRows:a=1,maxRows:s,...i})=>{const[o,l]=b.useState(a),[u,c]=b.useState(),p=b.useRef();b.useEffect(()=>{const f=getComputedStyle(p.current),y=parseInt(f.lineHeight,10),m=parseInt(f.paddingTop,10)+parseInt(f.paddingBottom,10);c({lineHeight:y,paddingHeight:m})},[]);const h=f=>{r(f);const{lineHeight:y,paddingHeight:m}=u,R=f.target.rows;f.target.rows=a;const S=~~((f.target.scrollHeight-m)/y);S===R&&(f.target.rows=S),s&&S>=s&&(f.target.rows=s,f.target.scrollTop=f.target.scrollHeight),l(s&&S>s?s:S)};return d.jsx("textarea",{className:Re(_r.textarea,e),ref:p,onChange:h,style:z({resize:t}),rows:o,value:n,...i})},br="_container_1ukhq_2",xr="_content_1ukhq_16",vr="_input_1ukhq_21",Rr="_underline_1ukhq_55",kr="_label_1ukhq_73",Er="_error_1ukhq_95",Cr="_errorMessage_1ukhq_111",C={container:br,content:xr,input:vr,underline:Rr,label:kr,error:Er,errorMessage:Cr},J=({id:e,label:t,value:n,multiline:r,className:a,style:s,error:i,onBlur:o,autoComplete:l,required:u,maxLength:c,type:p,onChange:h,name:f,...y})=>{const[m,R]=b.useState(!1),S=b.useId(),g=b.useRef(),_=e||`${S}input`,x=`${_}-label`,D=`${_}-error`,We=r?Sr:"input",Ke=A=>{R(!1),o&&o(A)};return d.jsxs("div",{className:Re(C.container,a),"data-error":!!i,style:s,...y,children:[d.jsxs("div",{className:C.content,children:[d.jsx("label",{className:C.label,"data-focused":m,"data-filled":!!n,id:x,htmlFor:_,children:t}),d.jsx(We,{className:C.input,id:_,"aria-labelledby":x,"aria-describedby":i?D:void 0,onFocus:()=>R(!0),onBlur:Ke,value:n,onChange:h,autoComplete:l,required:u,maxLength:c,type:p,name:f}),d.jsx("div",{className:C.underline,"data-focused":m})]}),d.jsx(M,{unmount:!0,in:i,timeout:I(v.base.durationM),children:({visible:A,nodeRef:Ge})=>{var ie;return d.jsx("div",{ref:Ge,className:C.error,"data-visible":A,id:D,role:"alert",style:z({height:A?(ie=g.current)==null?void 0:ie.getBoundingClientRect().height:0}),children:d.jsxs("div",{className:C.errorMessage,ref:g,children:[d.jsx(ke,{icon:"error"}),i]})})}})]})};var Tr={},ae={},j={};const Be=Je(yr);var V={};/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(V,"__esModule",{value:!0});const se=new TextEncoder,jr=async(e,t)=>{let n=await Xe(t,["sign"]),r=se.encode(e),a=await crypto.subtle.sign("HMAC",n,r),s=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+s},Dr=async(e,t)=>{let n=e.lastIndexOf("."),r=e.slice(0,n),a=e.slice(n+1),s=await Xe(t,["verify"]),i=se.encode(r),o=Mr(atob(a));return await crypto.subtle.verify("HMAC",s,o,i)?r:!1};async function Xe(e,t){return await crypto.subtle.importKey("raw",se.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function Mr(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}V.sign=jr;V.unsign=Dr;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(j,"__esModule",{value:!0});var W=Be,xe=V;const oe=W.createCookieFactory({sign:xe.sign,unsign:xe.unsign}),Or=W.createCookieSessionStorageFactory(oe),Ve=W.createSessionStorageFactory(oe),Nr=W.createMemorySessionStorageFactory(Ve);j.createCookie=oe;j.createCookieSessionStorage=Or;j.createMemorySessionStorage=Nr;j.createSessionStorage=Ve;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(ae,"__esModule",{value:!0});var Hr=j;function Ar({cookie:e,kv:t}){return Hr.createSessionStorage({cookie:e,async createData(n,r){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let s=[...a].map(i=>i.toString(16).padStart(2,"0")).join("");if(!await t.get(s,"json"))return await t.put(s,JSON.stringify(n),{expiration:r?Math.round(r.getTime()/1e3):void 0}),s}},async readData(n){let r=await t.get(n);return r?JSON.parse(r):null},async updateData(n,r,a){await t.put(n,JSON.stringify(r),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(n){await t.delete(n)}})}ae.createWorkersKVSessionStorage=Ar;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ae,n=j,r=Be;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=n.createCookie,e.createCookieSessionStorage=n.createCookieSessionStorage,e.createMemorySessionStorage=n.createMemorySessionStorage,e.createSessionStorage=n.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return r.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return r.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return r.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return r.createSession}}),Object.defineProperty(e,"data",{enumerable:!0,get:function(){return r.data}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return r.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return r.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return r.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return r.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return r.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return r.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return r.redirectDocument}}),Object.defineProperty(e,"replace",{enumerable:!0,get:function(){return r.replace}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return r.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return r.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return r.unstable_parseMultipartFormData}})})(Tr);const Fr="_contact_1529k_1",Ur="_form_1529k_18",Ir="_title_1529k_30",Pr="_divider_1529k_60",Lr="_input_1529k_98",$r="_botkiller_1529k_140",zr="_button_1529k_144",Br="_complete_1529k_204",Xr="_completeTitle_1529k_215",Vr="_completeText_1529k_234",Wr="_completeButton_1529k_253",Kr="_formError_1529k_279",Gr="_formErrorContent_1529k_291",Jr="_formErrorMessage_1529k_295",Yr="_formErrorIcon_1529k_303",qr="_contactWrapper_1529k_316",Qr="_contactInfo_1529k_326",Zr="_contactText_1529k_350",en="_contactLink_1529k_366",tn="_emoji_1529k_380",w={contact:Fr,form:Ur,title:Ir,divider:Pr,input:Lr,botkiller:$r,button:zr,complete:Br,completeTitle:Xr,completeText:Vr,completeButton:Wr,formError:Kr,formErrorContent:Gr,formErrorMessage:Jr,formErrorIcon:Yr,contactWrapper:qr,contactInfo:Qr,contactText:Zr,contactLink:en,emoji:tn},fn=()=>Ze({title:"Contact",description:"Send me a message if you‘re interested in discussing a project or if you just want to say hi"}),ve=512,rn=4096,hn=()=>{const e=b.useRef(),t=be(""),n=be(""),r=v.base.durationS,a=wt(),{state:s}=_t(),i=s==="submitting";return d.jsx(Qe,{className:w.contact,children:d.jsxs("div",{className:w.contactWrapper,children:[d.jsx(M,{in:!0,appear:!0,children:({status:o})=>d.jsxs("div",{className:w.contactInfo,"data-status":o,children:[d.jsxs(F,{className:w.contactText,children:[d.jsx("span",{className:w.emoji,children:"👾"}),"Hey there—welcome to my little slice of the internet!",d.jsx("span",{className:w.emoji,children:"👾"})]}),d.jsx(F,{className:w.contactText,children:"I cooked this site up with React, Remix, Three.js, and Framer Motion."}),d.jsxs(F,{className:w.contactText,children:["Everything's open source on my"," ",d.jsx("a",{href:"https://github.com/Qiqicoder/portfolio",target:"_blank",rel:"noopener noreferrer",className:w.contactLink,children:"Github"}),", so if you're curious about the code or just want to chat about blending creativity and tech, let's connect!"]})]})}),d.jsxs("div",{children:[d.jsx(M,{unmount:!0,in:!(a!=null&&a.success),timeout:1600,children:({status:o,nodeRef:l})=>d.jsxs(St,{unstable_viewTransition:!0,className:w.form,method:"post",ref:l,children:[d.jsx(le,{className:w.title,"data-status":o,level:3,as:"h1",style:T(v.base.durationXS,r,.3),children:d.jsx(Ye,{text:"Let's chat!",start:o!=="exited",delay:300})}),d.jsx(qe,{className:w.divider,"data-status":o,style:T(v.base.durationXS,r,.4)}),d.jsx(J,{className:w.botkiller,label:"Name",name:"name",maxLength:ve}),d.jsx(J,{required:!0,className:w.input,"data-status":o,style:T(v.base.durationXS,r),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:ve,...t}),d.jsx(J,{required:!0,multiline:!0,className:w.input,"data-status":o,style:T(v.base.durationS,r),autoComplete:"off",label:"Message",name:"message",maxLength:rn,...n}),d.jsx(M,{unmount:!0,in:!i&&(a==null?void 0:a.errors),timeout:I(v.base.durationM),children:({status:u,nodeRef:c})=>{var p,h,f;return d.jsx("div",{className:w.formError,ref:c,"data-status":u,style:z({height:u?(p=e.current)==null?void 0:p.offsetHeight:0}),children:d.jsx("div",{className:w.formErrorContent,ref:e,children:d.jsxs("div",{className:w.formErrorMessage,children:[d.jsx(ke,{className:w.formErrorIcon,icon:"error"}),(h=a==null?void 0:a.errors)==null?void 0:h.email,(f=a==null?void 0:a.errors)==null?void 0:f.message]})})})}}),d.jsx(ue,{className:w.button,"data-status":o,"data-sending":i,style:T(v.base.durationM,r),disabled:i,loading:i,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),d.jsx(M,{unmount:!0,in:a==null?void 0:a.success,children:({status:o,nodeRef:l})=>d.jsxs("div",{className:w.complete,"aria-live":"polite",ref:l,children:[d.jsx(le,{level:3,as:"h3",className:w.completeTitle,"data-status":o,children:"Message Sent"}),d.jsx(F,{size:"l",as:"p",className:w.completeText,"data-status":o,style:T(v.base.durationXS),children:"I'll get back to you within a couple days, sit tight"}),d.jsx(ue,{secondary:!0,iconHoverShift:!0,className:w.completeButton,"data-status":o,style:T(v.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})})]})]})})};function T(e,t=ce(0),n=1){const r=I(e)*n;return z({delay:ce((I(t)+r).toFixed(0))})}export{hn as default,fn as meta};
