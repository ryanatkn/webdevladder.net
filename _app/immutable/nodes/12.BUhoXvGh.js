import{a as v,t as g,f as k,g as M}from"../chunks/disclose-version.BsnlxLp3.js";import{p as E,t as w,a as F,f as O,$ as l,s as p,c as m,r as d,at as z,M as y,au as B,a0 as C}from"../chunks/runtime.DXydPg0t.js";import{s as L}from"../chunks/render.D7CCJaHe.js";import{p as S,L as q,s as A,a as j}from"../chunks/package.DS3y-EYq.js";import{B as J}from"../chunks/Breadcrumb.CxOegiVH.js";import{i as T}from"../chunks/if.BRlOno9E.js";import{s as D,r as G}from"../chunks/attributes.D0oSGar9.js";import{b as H}from"../chunks/input.Bf9ZrVtM.js";import{C as K}from"../chunks/Code.DmTmYsQ6.js";import{s as Q}from"../chunks/snippet.BHe3b1nB.js";var R=g('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),U=g('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),V=g("<button><!><!><!></button>");function W(f,t){E(t,!0);let r=z(!1),s=z(!1);const _=async a=>{var e,h;y(r,!1),y(s,!1);try{await navigator.clipboard.writeText(t.text)}catch{y(s,!0),(e=t.onclick)==null||e.call(t,null,a);return}y(r,!0),(h=t.onclick)==null||h.call(t,t.text,a)};var o=V();let i;var n=m(o);T(n,()=>t.children,a=>{var e=M(),h=O(e);Q(h,()=>t.children,()=>l(r),()=>l(s)),v(a,e)},a=>{var e=k("📋");v(a,e)});var c=p(n);T(c,()=>l(r),a=>{var e=R();v(a,e)});var u=p(c);T(u,()=>l(s),a=>{var e=U();v(a,e)}),d(o),w(()=>i=D(o,i,{...t.attrs,type:"button",class:t.classes??(t.children?void 0:"icon_button size_lg"),onclick:_},"svelte-rumh1g")),v(f,o),F()}const X=f=>{const[t,r,s]=f.split(":").map(e=>e.trim()).reverse(),[_,o=null]=t.split("."),i=parseInt(_,10),n=o===null?NaN:parseInt(o.padEnd(3,"0"),10),c=Number.isNaN(n)?0:n,u=parseInt(s,10),a=parseInt(r,10);return Number.isNaN(i)&&Number.isNaN(c)?null:{hours:Number.isNaN(u)?0:u,minutes:Number.isNaN(a)?0:a,seconds:Number.isNaN(i)?0:i,ms:Number.isNaN(c)?0:c}},Y=({hours:f,minutes:t,seconds:r,ms:s})=>(f*60*60+t*60+r)*1e3+s;var Z=g('<div class="time_converter"><label><div class="title">Time converter</div> <input> <p>Paste or type in a time like <code>1:23:45.999</code>.</p></label> <div class="panel p_sm my_sm relative pr_xl7"><div class="size_xl"><!></div> <small class="block text_color_3">milliseconds</small> <div class="copy svelte-te2gam"><!></div></div> <!></div>');function $(f,t){E(t,!0);let r=z("");const s=C(()=>X(l(r))),_=C(()=>l(s)?Y(l(s)):null);var o=Z(),i=m(o),n=p(m(i),2);G(n),B(2),d(i);var c=p(i,2),u=m(c),a=m(u);T(a,()=>l(_)!=null,N=>{var x=k();w(()=>L(x,l(_))),v(N,x)},N=>{var x=k("null");v(N,x)}),d(u);var e=p(u,4),h=m(e),b=C(()=>l(_)+"");W(h,{get text(){return l(b)}}),d(e),d(c);var I=p(c,2),P=C(()=>`const time = ${JSON.stringify(l(s),null,"	")}`);K(I,{get content(){return l(P)},lang:"ts"}),d(o),H(n,()=>l(r),N=>y(r,N)),v(f,o),F()}var tt=g('<div class="mb_xl"><!></div>'),et=g('<main class="width_md box mx_auto px_lg"><header><h1 class="my_xl3">Tools</h1> <div class="mb_xl5"><!></div></header> <section><!></section> <section class="box"><!></section></main>');function vt(f,t){E(t,!0);const r=S(j,A);var s=et(),_=m(s),o=p(m(_),2),i=m(o);J(i,{children:(e,h)=>{B();var b=k();w(()=>L(b,j.glyph)),v(e,b)},$$slots:{default:!0}}),d(o),d(_);var n=p(_,2),c=m(n);$(c,{}),d(n);var u=p(n,2),a=m(u);q(a,{pkg:r,children:(e,h)=>{var b=tt(),I=m(b);J(I,{children:(P,N)=>{B();var x=k();w(()=>L(x,j.glyph)),v(P,x)},$$slots:{default:!0}}),d(b),v(e,b)},$$slots:{default:!0}}),d(u),d(s),v(f,s),F()}export{vt as component};
