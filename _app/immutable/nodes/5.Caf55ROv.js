import{a as p,t as _,b as F}from"../chunks/disclose-version.B1p64p34.js";import{p as k,t as c,s as d,T as n,a as w,c as s,n as y,r as t}from"../chunks/runtime.BZB4EjX6.js";import{s as A}from"../chunks/render.BJ6YWK3J.js";import{e as D,i as I}from"../chunks/string.CQq22TTE.js";import{s as f}from"../chunks/attributes.BNql9Ezu.js";import{b as T}from"../chunks/paths.HSCMn7tT.js";import{F as $,t as q}from"../chunks/Feed_Item_Date.DTW-wwCr.js";import{b as z}from"../chunks/blog.B0lOs6YJ.js";var B=_('<li class="blog_card svelte-pn6xaj"><a> </a> <div class="date svelte-pn6xaj"><!></div></li>'),C=_('<section class="blog svelte-pn6xaj"><ol class="panel svelte-pn6xaj" reversed></ol> <a class="feed_link chip svelte-pn6xaj" download="">Atom feed</a></section>');function O(x,b){w(b,!0);const m=z.get(),g=m.items.slice().reverse();var o=C(),r=s(o);D(r,21,()=>g,I,(l,e)=>{var i=B(),a=s(i);c(()=>f(a,"href",q(n(e).url,m.home_page_url)));var u=s(a,!0);t(a);var v=d(a,2),j=s(v);$(j,{get item(){return n(e)}}),t(v),t(i),c(()=>A(u,n(e).title)),p(l,i)},l=>{y();var e=F("no blog posts yet!");p(l,e)}),t(r);var h=d(r,2);f(h,"href",`${T??""}/blog/feed.xml`),t(o),p(x,o),k()}export{O as component};
