import{c as h,s as J,a as r,t as v,S as j,f as y,r as d}from"./disclose-version.Bj_vd1bb.js";import{p as K,t as q,a as L,z as e,A as _}from"./runtime.B4H-8c15.js";import{s as M}from"./render.DpzM27lS.js";import{i as B}from"./if.BGd17UPc.js";import{e as N,i as O}from"./each.Bu-ATVPx.js";import{s as w}from"./snippet.DFQN8kyJ.js";import{a as C}from"./attributes.gh-1WHsy.js";import{t as D}from"./style.CkD1TKNl.js";import{s as P,a as Q,p as R}from"./stores.DpSGjuCK.js";import{b as T}from"./paths.CIQ8at0a.js";const U=p=>p.split("/").filter(a=>a&&a!=="."&&a!==".."),V=p=>{const a=[],n=U(p);n.length&&a.push({type:"separator",path:"/"});let i="";for(let o=0;o<n.length;o++){const l=n[o];i+="/"+l,a.push({type:"piece",name:l,path:i}),o!==n.length-1&&a.push({type:"separator",path:i})}return a};var W=v("•",1),X=v('<a class="svelte-44vg7j"> </a>'),Y=v("/",1),Z=v('<span class="separator svelte-44vg7j"><!></span>'),$=v('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function ma(p,a){K(a,!0);const n=P(),i=()=>Q(R,"$page",n),o=_(()=>a.path??i().url.pathname),l=_(()=>a.selected_path===null?null:a.selected_path??e(o)),k=_(()=>a.base_path??T),E=_(()=>V(e(o))),z=_(()=>e(k)||"/");var g=$(),m=h(g),F=h(m);B(F,()=>a.children,c=>{var t=j(),A=y(t);w(A,()=>a.children),r(c,t)},c=>{var t=W();r(c,t)}),d(m);var G=J(m);N(G,17,()=>e(E),O,(c,t,A)=>{var S=j(),H=y(S);B(H,()=>e(t).type==="piece",u=>{var s=X(),b=h(s);d(s),q(()=>{C(s,"href",e(k)+e(t).path),D(s,"selected",e(t).path===e(l)),M(b,e(t).name)}),r(u,s)},u=>{var s=Z(),b=h(s);B(b,()=>a.separator,x=>{var f=j(),I=y(f);w(I,()=>a.separator),r(x,f)},x=>{var f=Y();r(x,f)}),d(s),r(u,s)}),r(c,S)}),d(g),q(()=>{C(m,"href",e(z)),D(m,"selected",e(z)===e(l))}),r(p,g),L()}export{ma as B};
