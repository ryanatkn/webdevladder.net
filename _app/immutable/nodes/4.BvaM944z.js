import{a as v,t as u,o as L,r as s,b as a,f as k,c as o,V as se,s as x,W as Ee}from"../chunks/disclose-version.McChYjuR.js";import{I as Ze,M as qe,p as X,t as g,b as Y,g as n,d as b,w as F}from"../chunks/runtime.DexRqzZb.js";import{i as p}from"../chunks/if.m0wG1wtt.js";import{s as fe,a as M,e as je,i as De}from"../chunks/attributes.CH-BdaPa.js";import{a as Z,t as V,s as J,b as Ie}from"../chunks/style.PTo_5qH6.js";import{s as Ne,a as Oe,p as Be}from"../chunks/stores.BY2vPJt6.js";import{e as te,s as re,a as be}from"../chunks/string.CAoGIR8s.js";import{f as Ke,Z as Ve,M as Je,F as Te,G as Ue,a as Ae,C as He,p as Qe,b as R,L as Re,s as Xe}from"../chunks/Fuzling.BB_W9PMr.js";import{t as Ye,s as $e}from"../chunks/index.tHMlF77t.js";import{p as ea}from"../chunks/props.iGxsdSpe.js";import{B as xe}from"../chunks/Breadcrumb.D6TE_CLL.js";function aa(S,e,m,y,f){var h=()=>{y(m[S])};m.addEventListener(e,h),f?Ze(()=>{m[S]=f()}):h(),(m===document.body||m===window||m===document)&&qe(()=>{m.removeEventListener(e,h)})}var ta=u("<div><!></div>"),ra=u("<details><summary><!></summary> <!></details>");function sa(S,e){X(e,!0);let m=ea(e,"open",7);var y=ra();let f;var h=o(y);let d;var w=o(h);Z(w,()=>e.summary),s(h);var z=a(a(h,!0));p(z,()=>e.eager,j=>{var W=L(),P=k(W);Z(P,()=>e.children),v(j,W)},j=>{var W=L(),P=k(W);p(P,m,I=>{var C=ta();Ye(3,C,()=>$e);var B=o(C);Z(B,()=>e.children),s(C),v(I,C)},null,!0),v(j,W)}),s(y),g(()=>{f=fe(y,f,{...e.attrs},!0,""),d=fe(h,d,{...e.summary_attrs},!0,"")}),aa("open","toggle",y,j=>m(j),m),v(S,y),Y()}var oa=u('<div class="repo_name svelte-19y7aej"> <!></div>'),na=u('<div class="description svelte-19y7aej"> </div>'),va=u('<div class="motto svelte-19y7aej"> </div>'),la=u('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),ia=u('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),_a=u('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),ca=u('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),da=u('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),ua=u('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),ga=u('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),ma=u('<div class="logo svelte-19y7aej"><img></div>'),pa=u("<li> </li>"),ha=u('<ul class="declarations unstyled svelte-19y7aej"></ul>'),ya=u('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),ka=u('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),fa=u("raw data for <code>pkg: Package_Meta</code>",1),ja=u("<pre><code> </code></pre>"),ba=u('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-19y7aej"><!></section></div>');function xa(S,e){X(e,!0);const m=Ne(),y=()=>Oe(Be,"$page",m),f=b(()=>e.pkg),h=b(()=>{let{package_json:i,src_json:r}=n(f);return[i,r]}),d=b(()=>n(h)[0]),w=b(()=>n(h)[1]),z=b(()=>n(w)),j=b(()=>{let{modules:i}=n(z);return[i]}),W=b(()=>n(j)[0]),P=b(()=>n(d).repository?re(be(be(typeof n(d).repository=="string"?n(d).repository:n(d).repository.url,".git"),"/"),"git+"):null),I=b(()=>n(d).license&&n(P)?n(P)+"/blob/main/LICENSE":null),C=(i,r)=>i+"/blob/main/src/lib/"+(r.endsWith(".js")?r.slice(0,-3)+".ts":r),B=b(()=>n(d).exports&&Object.keys(n(d).exports)),q=b(()=>n(d).exports?Object.keys(n(d).exports).map(i=>{const r=re(i,"./");return r==="."?"index.js":r}):null),K=b(()=>e.pkg.homepage_url?te(e.pkg.homepage_url,"/")+(e.pkg.package_json.logo?re(e.pkg.package_json.logo,"/"):"favicon.png"):void 0),T=e.pkg.package_json.logo_alt??`logo for ${e.pkg.repo_name}`;var U=ba(),N=o(U),$=o(N),oe=o($),ee=o(oe),we=o(ee);p(we,()=>e.repo_name,i=>{var r=L(),_=k(r);Z(_,()=>e.repo_name,()=>e.pkg.repo_name),v(i,r)},i=>{var r=oa(),_=o(r),l=a(_);p(l,()=>n(d).glyph,t=>{var c=se();g(()=>x(c,` ${n(d).glyph??""}`)),v(t,c)}),s(r),g(()=>x(_,e.pkg.repo_name)),v(i,r)}),s(ee);var ne=a(a(ee,!0));p(ne,()=>e.children,i=>{var r=L(),_=k(r);Z(_,()=>e.children,()=>e.pkg),v(i,r)});var ve=a(a(ne,!0));p(ve,()=>n(d).description,i=>{var r=L(),_=k(r);p(_,()=>e.description,l=>{var t=L(),c=k(t);Z(c,()=>e.description,()=>n(d).description),v(l,t)},l=>{var t=na(),c=o(t);s(t),g(()=>x(c,n(d).description)),v(l,t)}),v(i,r)});var le=a(a(ve,!0));p(le,()=>n(d).motto,i=>{var r=L(),_=k(r);p(_,()=>e.motto,l=>{var t=L(),c=k(t);Z(c,()=>e.motto,()=>n(d).motto),v(l,t)},l=>{var t=va(),c=o(t);s(t),g(()=>x(c,n(d).motto)),v(l,t)}),v(i,r)});var ie=a(a(le,!0));p(ie,()=>e.pkg.npm_url,i=>{var r=L(),_=k(r);p(_,()=>e.npm_url,l=>{var t=L(),c=k(t);Z(c,()=>e.npm_url,()=>e.pkg.npm_url),v(l,t)},l=>{var t=la(),c=o(t);s(t),g(()=>x(c,`npm i -D ${n(d).name??""}`)),v(l,t)}),v(i,r)});var _e=a(a(ie,!0)),ce=o(_e);p(ce,()=>e.pkg.homepage_url,i=>{var r=L(),_=k(r);p(_,()=>e.homepage_url,l=>{var t=L(),c=k(t);Z(c,()=>e.homepage_url,()=>e.pkg.homepage_url),v(l,t)},l=>{var t=ia(),c=k(t),G=a(a(c,!0)),O=o(G),D=o(O);M(D,"alt",T);var A=a(D,!0);g(()=>x(A,` ${Ke(e.pkg.homepage_url)??""}`)),s(O),s(G),g(()=>{M(O,"href",e.pkg.homepage_url),V(O,"selected",e.pkg.homepage_url===y().url.href),M(D,"src",n(K)),J(D,"width","16px"),J(D,"height","16px"),J(D,"margin-right","var(--space_xs)")}),v(l,t)}),v(i,r)});var de=a(a(ce,!0));p(de,()=>e.pkg.repo_url,i=>{var r=_a(),_=k(r),l=a(a(_,!0)),t=o(l),c=o(t);s(t),s(l),g(()=>{M(t,"href",e.pkg.repo_url),x(c,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),v(i,r)});var ue=a(a(de,!0));p(ue,()=>e.pkg.npm_url,i=>{var r=ca(),_=k(r),l=a(a(_,!0)),t=o(l),c=o(t);s(t),s(l),g(()=>{M(t,"href",e.pkg.npm_url),x(c,n(d).name)}),v(i,r)});var ge=a(a(ue,!0));p(ge,()=>e.pkg.changelog_url,i=>{var r=da(),_=k(r),l=a(a(_,!0)),t=o(l),c=o(t);s(t),s(l),g(()=>{M(t,"href",e.pkg.changelog_url),x(c,n(d).version)}),v(i,r)});var me=a(a(ge,!0));p(me,()=>n(I),i=>{var r=ua(),_=k(r),l=a(a(_,!0)),t=o(l),c=o(t);s(t),s(l),g(()=>{M(t,"href",n(I)),x(c,n(d).license)}),v(i,r)});var ze=a(a(me,!0));p(ze,()=>e.pkg.homepage_url,i=>{var r=ga(),_=k(r),l=a(a(_,!0)),t=o(l);g(()=>M(t,"href",`${te(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var c=a(a(t,!0));g(()=>M(c,"href",`${te(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),s(l),v(i,r)}),s(_e),s(oe),s($);var Le=a(a($,!0));p(Le,()=>n(K),i=>{var r=ma(),_=o(r);M(_,"alt",T),s(r),g(()=>{M(_,"src",n(K)),J(_,"width","var(--size, var(--icon_size_xl2))"),J(_,"height","var(--size, var(--icon_size_xl2))")}),v(i,r)}),s(N);var pe=a(a(N,!0));p(pe,()=>n(q)&&e.pkg.repo_url,i=>{var r=ka(),_=o(r);je(_,79,()=>n(q),(l,t)=>F(l),(l,t,c)=>{var G=ya();const O=b(()=>C(e.pkg.repo_url,F(t))),D=b(()=>{var E;return(E=n(B))==null?void 0:E[F(c)]}),A=b(()=>{var E;return n(D)&&((E=n(W))==null?void 0:E[n(D)])});g(()=>V(G,"ts",F(t).endsWith(".js"))),g(()=>V(G,"svelte",F(t).endsWith(".svelte"))),g(()=>V(G,"css",F(t).endsWith(".css"))),g(()=>V(G,"json",F(t).endsWith(".json")));var ye=o(G),H=o(ye),Pe=o(H);s(H);var Fe=a(a(H,!0));p(Fe,()=>{var E;return(E=n(A))==null?void 0:E.declarations.length},E=>{var ae=ha();je(ae,73,()=>n(A).declarations,De,(Me,ke,Wa)=>{let We=()=>F(F(ke)).name,Ce=()=>F(F(ke)).kind;var Q=pa(),Ge=o(Q);s(Q),g(()=>{Ie(Q,`declaration chip ${Ce()??""}_declaration svelte-19y7aej`),x(Ge,We())}),v(Me,Q)}),s(ae),v(E,ae)}),s(ye),s(G),g(()=>{M(H,"href",n(O)),x(Pe,F(t))}),v(l,G)}),s(_),s(r),v(i,r)});var he=a(a(pe,!0)),Se=o(he);sa(Se,{summary:r=>{Ee();var _=fa();v(r,_)},children:(r,_)=>{var l=ja(),t=o(l),c=o(t);g(()=>x(c,JSON.stringify(e.pkg,null,"	"))),s(t),s(l),v(r,l)},$$slots:{default:!0}}),s(he),s(U),v(S,U),Y()}var wa=u('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function za(S){const e="var(--icon_size_lg)";var m=wa(),y=k(m),f=o(y);Ve(f,{size:e}),s(y);var h=a(a(y,!0)),d=o(h);Je(d,{size:e}),s(h);var w=a(a(h,!0)),z=o(w);Te(z,{size:e}),s(w);var j=a(a(w,!0)),W=o(j);Ue(W,{size:e}),s(j);var P=a(a(j,!0)),I=o(P);Ae(I,{size:e}),s(P),v(S,m)}var La=u('<h2 class="mt_0 mb_lg">Links</h2>'),Sa=u('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Pa(S,e){X(e,!0);var m=Sa(),y=o(m);p(y,()=>e.children,w=>{var z=L(),j=k(z);Z(j,()=>e.children),v(w,z)},w=>{var z=La();v(w,z)});var f=a(a(y,!0));He(f,{});var h=a(a(f,!0)),d=o(h);za(d),s(h),s(m),v(S,m),Y()}var Fa=u('<div class="mb_xl"><!></div>'),Ma=u('<main class="width_md svelte-1pyh03k"><section class="box svelte-1pyh03k"><header class="box"><h1 class="my_xl3 svelte-1pyh03k">webdevladder</h1></header> <!></section> <!> <section class="box w_100 mb_lg svelte-1pyh03k"><div class="panel p_md width_md"><!></div></section> <section class="box svelte-1pyh03k"><!></section></main>');function Va(S,e){X(e,!0);const m=Qe(R.homepage,R,Xe);var y=Ma(),f=o(y),h=o(f);s(h);var d=a(a(h,!0));xe(d,{children:(C,B)=>{var q=se();g(()=>x(q,R.glyph)),v(C,q)},$$slots:{default:!0}}),s(f);var w=a(a(f,!0));Pa(w,{});var z=a(a(w,!0)),j=o(z),W=o(j);xa(W,{pkg:m}),s(j),s(z);var P=a(a(z,!0)),I=o(P);Re(I,{pkg:m,children:(C,B)=>{var q=Fa(),K=o(q);xe(K,{children:(T,U)=>{var N=se();g(()=>x(N,R.glyph)),v(T,N)},$$slots:{default:!0}}),s(q),v(C,q)},$$slots:{default:!0}}),s(P),s(y),v(S,y),Y()}export{Va as component};