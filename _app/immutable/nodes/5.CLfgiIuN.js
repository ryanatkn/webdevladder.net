import{e as p,t as _,f as F}from"../chunks/disclose-version.Dn2LuS9l.js";import{I,G as k,O as c,K as f,P as n,L as s,Q as w,M as t}from"../chunks/runtime.WHH172tf.js";import{a as y}from"../chunks/render.DakY9b14.js";import{e as A,i as D}from"../chunks/string.va89mA_g.js";import{s as d}from"../chunks/attributes.QTCS8sk-.js";import{b as G}from"../chunks/paths.QEGOk4tA.js";import{F as K,t as L}from"../chunks/Feed_Item_Date.Bn7w-kpV.js";import{b as M}from"../chunks/blog.Dl6aY3Z4.js";var O=_('<li class="blog_card svelte-pn6xaj"><a> </a> <div class="date svelte-pn6xaj"><!></div></li>'),P=_('<section class="blog svelte-pn6xaj"><ol class="panel svelte-pn6xaj" reversed></ol> <a class="feed_link chip svelte-pn6xaj" download="">Atom feed</a></section>');function J(x,g){k(g,!0);const m=M.get(),b=m.items.slice().reverse();var o=P(),r=s(o);A(r,21,()=>b,D,(l,e)=>{var i=O(),a=s(i);c(()=>d(a,"href",L(n(e).url,m.home_page_url)));var u=s(a,!0);t(a);var v=f(a,2),j=s(v);K(j,{get item(){return n(e)}}),t(v),t(i),c(()=>y(u,n(e).title)),p(l,i)},l=>{w();var e=F("no blog posts yet!");p(l,e)}),t(r);var h=f(r,2);d(h,"href",`${G??""}/blog/feed.xml`),t(o),p(x,o),I()}export{J as component};
