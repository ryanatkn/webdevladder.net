import{a as d,t as k,p as J,o as z}from"../chunks/disclose-version.tiXKnEBk.js";import{t as I,p as S,s as N,R as l,a as V,c as v,f as G,r as m,az as B,a1 as w,T as P,af as L}from"../chunks/runtime.CdcJ3TD1.js";import{s as E}from"../chunks/render.DC06klNu.js";import{s as K}from"../chunks/style.BXO6zDSB.js";import{p as O,L as R,s as U,a as q}from"../chunks/package.CH56SSjh.js";import{B as F}from"../chunks/Breadcrumb.Dr0xVpoD.js";import{i as T}from"../chunks/if.CVSmFsw-.js";import{a as W,r as X}from"../chunks/attributes.w3HBHoux.js";import{b as Y}from"../chunks/input.UuVHzDkR.js";import{C as A}from"../chunks/Code.CC1mE0LM.js";import{s as D}from"../chunks/snippet.ZuVh7Bd3.js";var H=k('<small class="indicator color_b_5 svelte-fqik3v">copied!</small>'),M=k('<small class="indicator color_c_5 svelte-fqik3v">failed</small>'),Q=k("<button><!><!><!></button>");function Z(p,e){V(e,!0);let r=B(!1),a=B(!1);const _=async t=>{var s,x;if(e.text!==null){w(r,!1),w(a,!1);try{await navigator.clipboard.writeText(e.text)}catch{w(a,!0),(s=e.onclick)==null||s.call(e,null,t);return}w(r,!0),(x=e.onclick)==null||x.call(e,e.text,t)}};var i=Q();let o;var n=v(i);{var c=t=>{var s=J(),x=G(s);D(x,()=>e.children,()=>l(r),()=>l(a)),d(t,s)},f=t=>{var s=z("📋");d(t,s)};T(n,t=>{e.children?t(c):t(f,!1)})}var b=N(n);{var h=t=>{var s=H();d(t,s)};T(b,t=>{l(r)&&t(h)})}var g=N(b);{var y=t=>{var s=M();d(t,s)};T(g,t=>{l(a)&&t(y)})}m(i),I(()=>{var t;return o=W(i,o,{...e.attrs,type:"button",class:e.classes??(e.children?void 0:"icon_button size_lg"),onclick:_,disabled:((t=e.attrs)==null?void 0:t.disabled)??e.text===null},"svelte-fqik3v")}),d(p,i),S()}const $=p=>{const[e,r,a]=p.split(":").map(h=>h.trim()).reverse(),[_,i=null]=e.split("."),o=parseInt(_,10),n=i===null?NaN:parseInt(i.padEnd(3,"0"),10),c=Number.isNaN(n)?0:n,f=parseInt(a,10),b=parseInt(r,10);return Number.isNaN(o)&&Number.isNaN(c)?null:{hours:Number.isNaN(f)?0:f,minutes:Number.isNaN(b)?0:b,seconds:Number.isNaN(o)?0:o,ms:Number.isNaN(c)?0:c}},tt=({hours:p,minutes:e,seconds:r,ms:a})=>(p*60*60+e*60+r)*1e3+a;var et=k('<label><div class="title">Time converter</div> <input> <p>Paste or type in a time like <code>1:23:45.999</code>.</p></label> <div class="panel p_sm my_sm relative pr_xl7"><div class="size_xl"><!></div> <small class="block text_color_3">milliseconds</small> <div class="copy svelte-te2gam"><!></div></div> <!>',1);function at(p,e){V(e,!0);let r=B("");const a=L(()=>$(l(r))),_=L(()=>l(a)?tt(l(a)):null);var i=et(),o=G(i),n=N(v(o),2);X(n),P(2),m(o);var c=N(o,2),f=v(c),b=v(f);{var h=u=>{var C=z();I(()=>E(C,l(_))),d(u,C)},g=u=>{var C=z("null");d(u,C)};T(b,u=>{l(_)!=null?u(h):u(g,!1)})}m(f);var y=N(f,4),t=v(y),s=L(()=>l(_)+"");Z(t,{get text(){return l(s)}}),m(y),m(c);var x=N(c,2),j=L(()=>`const time = ${JSON.stringify(l(a),null,"	")}`);A(x,{get content(){return l(j)},lang:"ts"}),Y(n,()=>l(r),u=>w(r,u)),d(p,i),S()}var st=k('<div class="mb_xl"><!></div>'),rt=k('<main class="width_md box mx_auto px_lg pt_xl5 pb_xl9"><header><div class="mb_xl5"><!></div></header> <section><div class="mb_lg"><!></div> <p><a href="https://www.youtube.com/watch?v=tNoG-CLLWXc&amp;list=PLio_5jgyVNVlYerzp8npCg8mUs2zKEavS">video</a> of me making this</p></section> <section class="box"><!></section></main>');function bt(p,e){V(e,!0);const r=O(q,U);var a=rt(),_=v(a),i=v(_);K(i,"--size","var(--size_xl)");var o=v(i);F(o,{children:(g,y)=>{P();var t=z();I(()=>E(t,q.glyph)),d(g,t)},$$slots:{default:!0}}),m(i),m(_);var n=N(_,2),c=v(n),f=v(c);at(f,{}),m(c),P(2),m(n);var b=N(n,2),h=v(b);R(h,{pkg:r,children:(g,y)=>{var t=st(),s=v(t);F(s,{children:(x,j)=>{P();var u=z();I(()=>E(u,q.glyph)),d(x,u)},$$slots:{default:!0}}),m(t),d(g,t)},$$slots:{default:!0}}),m(b),m(a),d(p,a),S()}export{bt as component};
