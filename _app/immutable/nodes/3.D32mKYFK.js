var ee=(d,t,o)=>{if(!t.has(d))throw TypeError("Cannot "+o)};var L=(d,t,o)=>(ee(d,t,"read from private field"),o?o.call(d):t.get(d)),V=(d,t,o)=>{if(t.has(d))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(d):t.set(d,o)};var te=(d,t,o)=>(ee(d,t,"access private method"),o);import{h as W,i as ae,m as J,F as we,l as re,k as oe,X as se,K as ge,p as ye,o as ne,a as b,f as M,r,t as S,s as K,b as e,c as i,V as me,W as ie}from"../chunks/disclose-version.Dc6zEuSM.js";import{o as ke,E as xe,q as Se,v as ze,r as Te,N as Fe,F as Ce,p as R,b as B,g as n,d as m,t as N,C as Ee,h as We,u as je,w as U}from"../chunks/runtime.BDNHvMFG.js";import{b as le,c as de,d as qe,a as fe,e as ce}from"../chunks/attributes.CoS6NOJA.js";import{b as ve}from"../chunks/paths.CbU95fnW.js";import{Z as Le,M as Me,F as Ne,G as Ae,a as Ge,p as Ie,b as ue,C as Pe,L as Ve,s as Ue}from"../chunks/Fuzling.rnfR1G-o.js";import{W as Ze}from"../chunks/Webdevladder_Logo.CCdgqd7O.js";import{i as Z}from"../chunks/if.CjV6Wno5.js";import{t as j,a as _e}from"../chunks/style.DLZnfHKe.js";import{p as Ke}from"../chunks/props.DJIaoLBR.js";import{s as Oe,a as Re,p as Be}from"../chunks/stores.O4iJEG3k.js";function De(d,t,o,s,u,a){let _=W;W&&ae();var l,p,v=null;W&&J.nodeType===1&&(v=J,ae());var w=W?J:d,c,h=de;ke(()=>{const f=t()||null;var g=u?u():o||f==="svg"?we:null;if(f!==l){var x=de;le(h),c&&(f===null?ze(c,()=>{c=null,p=null}):f===p?Te(c):(Fe(c),se(!1))),f&&f!==p&&(c=Se(()=>{if(v=W?v:g?document.createElementNS(g,f):document.createElement(f),ge(v,v),s){var z=W?v.firstChild:v.appendChild(ye());W&&(z===null?re(!1):oe(z)),s(v,z)}Ce.nodes.end=v,w.before(v)})),l=f,l&&(p=l),se(!0),le(x)}},xe),_&&(re(!0),oe(w))}var He=S('<div class="icon svelte-kpg6il"><!></div>'),Je=S('<!> <div class="content svelte-kpg6il"><!></div> <!>',1);function Ye(d,t){R(t,!0);const o=Oe(),s=()=>Re(Be,"$page",o),u=y=>{var E=He(),T=i(E);Z(T,()=>typeof n(x)=="string",F=>{var k=me();N(()=>K(k,n(x))),b(F,k)},F=>{var k=ne(),C=M(k);_e(C,()=>n(x)),b(F,k)}),r(E),b(y,E)},a=Ke(t,"align",3,"left"),_=m(()=>!!t.href),l=m(()=>n(_)&&s().url.pathname===t.href),p=m(()=>t.tag??(n(_)?"a":"div")),v=m(()=>n(_)?{href:t.href}:void 0),w=m(()=>a()==="left"),c=m(()=>a()==="right"),h=m(()=>a()==="above"),f=m(()=>a()==="below"),g=m(()=>n(_)?"🔗":"🪧"),x=m(()=>t.icon??n(g));var z=ne(),D=M(z);De(D,()=>n(p),!1,(y,E)=>{let T;N(()=>{T=qe(y,T,{class:"card",...t.attrs,...n(v)},"svelte-kpg6il"),j(y,"link",n(_)),j(y,"selected",n(l)),j(y,"left",n(w)),j(y,"right",n(c)),j(y,"above",n(h)),j(y,"below",n(f))});var F=Je(),k=M(F);Z(k,()=>a()==="left"||a()==="above",q=>{u(q)});var C=e(e(k,!0)),H=i(C);_e(H,()=>t.children),r(C);var I=e(e(C,!0));Z(I,()=>a()==="right"||a()==="below",q=>{u(q)}),b(E,F)}),b(d,z),B()}var Qe=S('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function Xe(d){const t="var(--icon_size_lg)";var o=Qe(),s=M(o),u=i(s);Le(u,{size:t}),r(s);var a=e(e(s,!0)),_=i(a);Me(_,{size:t}),r(a);var l=e(e(a,!0)),p=i(l);Ne(p,{size:t}),r(l);var v=e(e(l,!0)),w=i(v);Ae(w,{size:t}),r(v);var c=e(e(v,!0)),h=i(c);Ge(h,{size:t}),r(c),b(d,o)}var pe=!1,A,G,O,be;const Q=class Q extends Date{constructor(...o){super(...o);V(this,O);V(this,A,Ee(super.getTime()));V(this,G,new Map);pe||te(this,O,be).call(this)}};A=new WeakMap,G=new WeakMap,O=new WeakSet,be=function(){pe=!0;var o=Q.prototype,s=Date.prototype,u=Object.getOwnPropertyNames(s);for(const a of u)(a.startsWith("get")||a.startsWith("to"))&&(o[a]=function(..._){var l=L(this,G).get(a);return l===void 0&&(l=m(()=>(n(L(this,A)),s[a].apply(this,_))),L(this,G).set(a,l)),n(l)}),a.startsWith("set")&&(o[a]=function(..._){var l=s[a].apply(this,_);return We(L(this,A),s.getTime.call(this)),l})};let Y=Q;var $e=S("<span><!> </span>");function et(d,t){R(t,!0);const o=new Y(t.duration);je(()=>{o.setTime(t.duration)});const s=m(()=>o.getUTCHours()),u=m(()=>o.getUTCMinutes()),a=m(()=>o.getUTCSeconds()),_=m(()=>n(s)?n(u).toString().padStart(2,"0"):n(u)),l=m(()=>n(u)?n(a).toString().padStart(2,"0"):n(a));var p=$e(),v=i(p);Z(v,()=>n(s),c=>{var h=me();N(()=>K(h,`${n(s)??""}:`)),b(c,h)});var w=e(v,!0);r(p),N(()=>K(w,`${n(_)??""}:${n(l)??""}`)),b(d,p),B()}var tt=S('<div class="panel p_md mb_lg"><a> </a> <div><!></div></div>');function he(d,t){R(t,!0);var o=tt(),s=i(o),u=i(s);r(s);var a=e(e(s,!0)),_=i(a);et(_,{get duration(){return t.video.duration}}),r(a),r(o),N(()=>{fe(s,"href",t.video.url),K(u,t.video.title)}),b(d,o),B()}const at=[{title:"How Svelte runes syntax is better than plain JavaScript with signals",url:"https://www.youtube.com/watch?v=IsJtmbvW2SI",duration:1389e3}],rt=[{title:"Svelte 5 refactoring to reactive SvelteSet in my ear trainer Earbetter",url:"https://www.youtube.com/watch?v=bE-BYtepFr8",duration:1367e3},{title:"Embedding Mastodon toots with rules to control reply visibility with Svelte components",url:"https://www.youtube.com/watch?v=5w9iUZ5TesE",duration:6537e3},{title:"Refactoring my messy Mastodon library",url:"https://www.youtube.com/watch?v=QET2GbcW9ww",duration:5392e3},{title:"Programming my channel's website using Svelte, adding videos with reactive durations",url:"https://www.youtube.com/watch?v=A8u5_0mNEO8",duration:3231e3},{title:"Coding a blog creation library for SvelteKit developers from scratch",url:"https://www.youtube.com/watch?v=wP9qghWkTLc",duration:3585e3},{title:"Extracting fuz_blog from my personal blog and publishing to npm",url:"https://www.youtube.com/watch?v=dh_6Vyjbuiw",duration:8504e3},{title:"Creating my channel's blog and adding Mastodon comments",url:"https://www.youtube.com/watch?v=V4Fg3-B6Su8",duration:2784e3}];var ot=S("<li><!></li>"),st=S("<li><!></li>"),nt=S('<h2 class="mt_md">videos</h2> <section><h3><a href="https://www.youtube.com/@webdevladder">@webdevladder</a></h3> <blockquote>technical videos about realworld topics in TypeScript and <a href="https://svelte.dev/">Svelte</a></blockquote> <ol></ol></section> <section><h3><a href="https://www.youtube.com/@webdevladder_vods">@webdevladder_vods</a></h3> <blockquote>raw realworld programming in TypeScript and Svelte</blockquote> <ol></ol></section>',1);function it(d){var t=nt(),o=M(t),s=e(e(o,!0)),u=i(s);r(u);var a=e(e(u,!0));r(a);var _=e(e(a,!0));ce(_,77,()=>at,(c,h)=>U(c).url,(c,h,f)=>{var g=ot(),x=i(g);he(x,{get video(){return U(h)}}),r(g),b(c,g)}),r(_),r(s);var l=e(e(s,!0)),p=i(l);r(p);var v=e(e(p,!0)),w=e(e(v,!0));ce(w,77,()=>rt,(c,h)=>U(c).url,(c,h,f)=>{var g=st(),x=i(g);he(x,{get video(){return U(h)}}),r(g),b(c,g)}),r(w),r(l),b(d,t)}var lt=S("blog",1),dt=S('<a class="mb_md">about</a>'),ct=S(`<main class="width_md svelte-aa2n4y"><section class="box"><header class="box"><!> <h1 class="my_xl3">webdevladder</h1> <blockquote class="shadow_inset_xs px_xl">climbing together 🪜</blockquote></header></section> <section class="panel p_md shadow_outset_xs w_100"><div class="panel shadow_inset_xs bg px_xl3 py_xl"><h2 class="mt_md">welcome</h2> <p>Webdevladder is a blog and collection of YouTube channels for <a href="https://www.ryanatkn.com/">my realworld webdev work</a>. The blog will be created soon, and I'll post videos here about the process of making it.</p> <ul><li><a href="https://www.youtube.com/@webdevladder">@webdevladder</a> - technical videos about
					realworld topics in TypeScript and <a href="https://svelte.dev/">Svelte</a></li> <li><a href="https://www.youtube.com/@webdevladder_vods">@webdevladder_vods</a> - raw realworld
					programming in TypeScript and Svelte</li></ul> <p>While working on free and open source software, I'm making these videos on the realworld
				technical topics I find most interesting, often advanced and very niche.</p> <p>Some videos will have an accompanying blog post here - Atom feed coming soon.</p> <aside><!></aside> <nav class="size_xl5 box row wrap"><!></nav></div></section> <section class="box"><!></section> <section class="panel p_md shadow_outset_xs w_100"><div class="panel shadow_inset_xs bg px_xl3 py_xl"><!></div></section> <section class="mb_xl7"><!></section></main>`);function kt(d,t){R(t,!0);const o=Ie(ue.homepage,ue,Ue);var s=ct(),u=i(s),a=i(u),_=i(a);Ze(_,{size:"var(--icon_size_xl2)",classes:"mt_xl5"}),r(a),r(u);var l=e(e(u,!0)),p=i(l),v=i(p),w=e(e(v,!0));ie(),r(w);var c=e(e(w,!0)),h=i(c);r(h);var f=e(e(h,!0));ie(),r(f),r(c);var g=e(e(c,!0)),x=e(e(g,!0)),z=e(e(x,!0)),D=i(z);Pe(D,{}),r(z);var y=e(e(z,!0)),E=i(y);Xe(E),r(y),r(p),r(l);var T=e(e(l,!0)),F=i(T);Ye(F,{href:`${ve??""}/blog`,icon:"🖊️",children:(X,$)=>{var P=lt();b(X,P)},$$slots:{default:!0}}),r(T);var k=e(e(T,!0)),C=i(k),H=i(C);it(H),r(C),r(k);var I=e(e(k,!0)),q=i(I);Ve(q,{pkg:o,logo_header:$=>{var P=dt();fe(P,"href",`${ve??""}/about`),b($,P)}}),r(I),r(s),b(d,s),B()}export{kt as component};