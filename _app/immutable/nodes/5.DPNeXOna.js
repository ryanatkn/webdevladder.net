import{a as p,t as _,b as F}from"../chunks/disclose-version.CWxpwhlu.js";import{p as k,a as w,t as c,s as d,M as n,c as s,n as y,r as t}from"../chunks/runtime.Ddqx6cwc.js";import{s as A}from"../chunks/render.OQifweVI.js";import{e as D,i as I}from"../chunks/string.B0Lp8mO7.js";import{s as f}from"../chunks/attributes.OiSOqEOJ.js";import{b as M}from"../chunks/paths.BUXdUQbB.js";import{F as $,t as q}from"../chunks/Feed_Item_Date.BlsDZOKj.js";import{b as z}from"../chunks/blog.BndJCCzl.js";var B=_('<li class="blog_card svelte-pn6xaj"><a> </a> <div class="date svelte-pn6xaj"><!></div></li>'),C=_('<section class="blog svelte-pn6xaj"><ol class="panel svelte-pn6xaj" reversed></ol> <a class="feed_link chip svelte-pn6xaj" download="">Atom feed</a></section>');function P(x,b){k(b,!0);const m=z.get(),g=m.items.slice().reverse();var o=C(),r=s(o);D(r,21,()=>g,I,(l,e)=>{var i=B(),a=s(i);c(()=>f(a,"href",q(n(e).url,m.home_page_url)));var u=s(a,!0);t(a);var v=d(a,2),j=s(v);$(j,{get item(){return n(e)}}),t(v),t(i),c(()=>A(u,n(e).title)),p(l,i)},l=>{y();var e=F("no blog posts yet!");p(l,e)}),t(r);var h=d(r,2);f(h,"href",`${M??""}/blog/feed.xml`),t(o),p(x,o),w()}export{P as component};
