import{t as J,e as o,g as B,f as Y}from"./D4bv8F4E.js";import{G as R,O as j,I as S,Y as t,K as u,L as b,M as T,al as v,J as G}from"./BMLtCLay.js";import{a as U}from"./DsEF84c5.js";import{i as I}from"./DweDhUI7.js";import{e as V,a as W,s as X}from"./BUqZc1rl.js";import{s as q}from"./B-GZeXoY.js";import{s as w,b as z}from"./Dm6pbsMe.js";import{s as Z,a as $}from"./5ODNxAIt.js";import{b as aa}from"./CW7oSwZO.js";import{p as ea}from"./EdxSe4l9.js";const ta=_=>_.split("/").filter(a=>a&&a!=="."&&a!==".."),sa=_=>{const a=[],n=ta(_);n.length&&a.push({type:"separator",path:"/"});let m="";for(let p=0;p<n.length;p++){const l=n[p];m+="/"+l,a.push({type:"piece",name:l,path:m}),p!==n.length-1&&a.push({type:"separator",path:m})}return a};var ra=J("<a> </a>"),oa=J('<span class="separator svelte-c9k2g"><!></span>'),la=J('<div class="breadcrumb svelte-c9k2g"><a><!></a><!></div>');function ga(_,a){R(a,!0);const[n,m]=Z(),p=()=>$(ea,"$page",n),l=v(()=>a.base_path??aa),K=v(()=>a.path??X(p().url.pathname,t(l))),L=v(()=>a.selected_path===null?null:a.selected_path??t(K)),A=v(()=>sa(t(K))),M=v(()=>W(t(l),"/"));var x=la(),f=u(x);let O;var C=u(f);{var D=e=>{var s=B(),h=G(s);q(h,()=>a.children),o(e,s)},E=e=>{var s=Y("•");o(e,s)};I(C,e=>{a.children?e(D):e(E,!1)})}b(f);var F=T(f);V(F,16,()=>t(A),e=>e,(e,s)=>{var h=B(),H=G(h);{var N=c=>{var r=ra();let d;var k=u(r,!0);b(r),j(y=>{w(r,"href",t(l)+s.path),d=z(r,1,"svelte-c9k2g",null,d,y),U(k,s.name)},[()=>({selected:s.path===t(L)})]),o(c,r)},P=c=>{var r=oa(),d=u(r);{var k=i=>{var g=B(),Q=G(g);q(Q,()=>a.separator),o(i,g)},y=i=>{var g=Y("/");o(i,g)};I(d,i=>{a.separator?i(k):i(y,!1)})}b(r),o(c,r)};I(H,c=>{s.type==="piece"?c(N):c(P,!1)})}o(e,h)}),b(x),j(e=>{w(f,"href",t(M)),O=z(f,1,"svelte-c9k2g",null,O,e)},[()=>({selected:t(M)===t(l)+t(L)})]),o(_,x),S(),m()}export{ga as B};
