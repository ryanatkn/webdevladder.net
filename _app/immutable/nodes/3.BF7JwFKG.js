import{v as Ue,a as i,t as b,o as S,b as a,f as C,c as o,r as oe,s as I}from"../chunks/disclose-version.CuiJ47FC.js";import{n as ae,C as Ge,am as Je,an as Ke,z as Qe,A as Xe,ao as Ze,X as He,Q as Ve,q as Ye,ap as $e,aq as ea,Z as aa,ad as ta,p as te,t as x,a as re,B as s,M as q,ar as L}from"../chunks/runtime.DV--gxMp.js";import{p as ra,i as N}from"../chunks/props.CFqUhD2w.js";import{t as X,e as ve,i as we,s as sa}from"../chunks/class.DQ01czB2.js";import{e as P,c as je,s as M,d as H,f as ie,a as xe,b as ke}from"../chunks/string.DSLw2xFN.js";import{u as Fe,s as Ee}from"../chunks/store.DUURJ3yn.js";import{p as Te}from"../chunks/stores.mAJB7x43.js";import{f as na,p as ia,a as $,L as oa,s as va}from"../chunks/package.CalTynSC.js";import{b as _a}from"../chunks/paths._eO4dJrp.js";const Ne=typeof window<"u",da=Ne?requestAnimationFrame:ae,la=Ne?()=>performance.now():()=>Date.now(),J={tick:_=>da(_),now:()=>la(),tasks:new Set};function Ce(_){J.tasks.forEach(e=>{e.c(_)||(J.tasks.delete(e),e.f())}),J.tasks.size!==0&&J.tick(Ce)}function ca(_){let e;return J.tasks.size===0&&J.tick(Ce),{promise:new Promise(n=>{J.tasks.add(e={c:_,f:n})}),abort(){J.tasks.delete(e)}}}function ee(_,e){_.dispatchEvent(new CustomEvent(e))}function ua(_){const e=_.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function pa(_){const e={},n=_.split(";");for(const u of n){const[v,d]=u.split(":");if(!v||d===void 0)break;const l=ua(v.trim());e[l]=d.trim()}return e}const ga=_=>_;function ma(_,e,n,u){var v=(_&Ze)!==0,d=(_&$e)!==0,l=(_&ea)!==0,A=v&&d?"both":v?"in":"out",z,p=e.inert,m,y,w;function F(){return z??(z=n()(e,u==null?void 0:u(),{direction:A}))}var k={is_global:l,in(){e.inert=p,v?(ee(e,"introstart"),m=_e(e,F(),y,1,()=>{ee(e,"introend"),m=z=void 0})):(y==null||y.abort(),w==null||w())},out(f){d?(e.inert=!0,ee(e,"outrostart"),y=_e(e,F(),m,0,()=>{ee(e,"outroend"),y=z=void 0,f==null||f()}),w=y.reset):f==null||f()},stop:()=>{m==null||m.abort(),y==null||y.abort()}},E=He;if((E.transitions??(E.transitions=[])).push(k),v&&Ue){let f=l;if(!f){for(var T=E.parent;T&&T.f&Ge;)for(;(T=T.parent)&&!(T.f&Je););f=!T||(T.f&Ke)!==0}f&&Qe(()=>{Xe(()=>k.in())})}}function _e(_,e,n,u,v){if(Ve(e)){var d;return Ye(()=>{var O=e({direction:u===1?"in":"out"});d=_e(_,O,n,u,v)}),{abort:()=>d.abort(),deactivate:()=>d.deactivate(),reset:()=>d.reset(),t:O=>d.t(O)}}if(n==null||n.deactivate(),!(e!=null&&e.duration))return v==null||v(),{abort:ae,deactivate:ae,reset:ae,t:()=>u};var{delay:l=0,duration:A,css:z,tick:p,easing:m=ga}=e,y=J.now()+l,w=(n==null?void 0:n.t(y))??1-u,F=u-w;A*=Math.abs(F);var k=y+A,E,T;if(z){for(var f=[],R=Math.ceil(A/16.666666666666668),W=0;W<=R;W+=1){var D=w+F*m(W/R),Q=z(D,1-D);f.push(pa(Q))}E=_.animate(f,{delay:l,duration:A,easing:"linear",fill:"forwards"}),E.finished.then(()=>{v==null||v(),u===1&&E.cancel()}).catch(O=>{if(E.startTime!==null&&E.currentTime!==null)throw O})}else w===0&&(p==null||p(0,1)),T=ca(O=>{if(O>=k)return p==null||p(u,1-u),v==null||v(),!1;if(O>=y){var U=w+F*m((O-y)/A);p==null||p(U,1-U)}return!0});return{abort:()=>{E==null||E.cancel(),T==null||T.abort()},deactivate:()=>{v=void 0},reset:()=>{u===0&&(p==null||p(1,0))},t:O=>{var U=w+F*m((O-y)/A);return Math.min(1,Math.max(0,U))}}}function fa(_,e,n,u,v){var d=()=>{u(n[_])};n.addEventListener(e,d),v?aa(()=>{n[_]=v()}):d(),(n===document.body||n===window||n===document)&&ta(()=>{n.removeEventListener(e,d)})}function ha(_){const e=_-1;return e*e*e+1}function ya(_,{delay:e=0,duration:n=400,easing:u=ha,axis:v="y"}={}){const d=getComputedStyle(_),l=+d.opacity,A=v==="y"?"height":"width",z=parseFloat(d[A]),p=v==="y"?["top","bottom"]:["left","right"],m=p.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),y=parseFloat(d[`padding${m[0]}`]),w=parseFloat(d[`padding${m[1]}`]),F=parseFloat(d[`margin${m[0]}`]),k=parseFloat(d[`margin${m[1]}`]),E=parseFloat(d[`border${m[0]}Width`]),T=parseFloat(d[`border${m[1]}Width`]);return{delay:e,duration:n,easing:u,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*l};${A}: ${f*z}px;padding-${p[0]}: ${f*y}px;padding-${p[1]}: ${f*w}px;margin-${p[0]}: ${f*F}px;margin-${p[1]}: ${f*k}px;border-${p[0]}-width: ${f*E}px;border-${p[1]}-width: ${f*T}px;`}}var ja=b("<div><!></div>"),xa=b("<details><summary><!></summary> <!></details>");function ka(_,e){te(e,!0);let n=ra(e,"open",7);var u=xa();let v;var d=o(u);let l;var A=o(d);P(()=>e.summary,A);var z=a(a(d,!0));N(z,()=>e.eager,p=>{var m=S(),y=C(m);P(()=>e.children,y),i(p,m)},p=>{var m=S(),y=C(m);N(y,n,w=>{var F=ja();ma(3,F,()=>ya);var k=o(F);P(()=>e.children,k),i(w,F)},null,!0),i(p,m)}),x(()=>{v=je(u,v,{...e.attrs},!0,""),l=je(d,l,{...e.summary_attrs},!0,"")}),fa("open","toggle",u,p=>n(p),n),i(_,u),re()}var ba=b('<div class="repo_name svelte-19y7aej"> <!></div>'),wa=b('<div class="description svelte-19y7aej"> </div>'),Fa=b('<div class="motto svelte-19y7aej"> </div>'),Ea=b('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),Ta=b('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),Na=b('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),Ca=b('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),Aa=b('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),Oa=b('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),qa=b('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),za=b("<li> </li>"),Ia=b('<ul class="declarations unstyled svelte-19y7aej"></ul>'),La=b('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),Sa=b('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),Ma=b("raw data for <code>pkg: Package_Meta</code>",1),Wa=b("<pre><code> </code></pre>"),Ra=b('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <div class="logo svelte-19y7aej"><img></div></div> <!> <section class="svelte-19y7aej"><!></section></div>');function Pa(_,e){te(e,!0);const n={};Fe(n);const u=()=>Ee(Te,"$page",n),v=q(()=>e.pkg),d=q(()=>{let{package_json:c,src_json:r}=s(v);return[c,r]}),l=q(()=>s(d)[0]),A=q(()=>s(d)[1]),z=q(()=>s(A)),p=q(()=>{let{modules:c}=s(z);return[c]}),m=q(()=>s(p)[0]),y=q(()=>s(l).repository?xe(ke(ke(typeof s(l).repository=="string"?s(l).repository:s(l).repository.url,".git"),"/"),"git+"):null),w=q(()=>s(l).license&&s(y)?s(y)+"/blob/main/LICENSE":null),F=(c,r)=>c+"/blob/main/src/lib/"+(r.endsWith(".js")?r.slice(0,-3)+".ts":r),k=q(()=>s(l).exports&&Object.keys(s(l).exports)),E=q(()=>s(l).exports?Object.keys(s(l).exports).map(c=>{const r=xe(c,"./");return r==="."?"index.js":r}):null);var T=Ra(),f=o(T),R=o(f),W=o(R),D=o(W),Q=o(D);N(Q,()=>e.repo_name,c=>{var r=S(),j=C(r);P(()=>e.repo_name,j,()=>e.pkg.repo_name),i(c,r)},c=>{var r=ba(),j=o(r),g=a(j);N(g,()=>s(l).icon,t=>{var h=oe(t);x(()=>I(h,` ${s(l).icon??""}`)),i(t,h)}),x(()=>I(j,e.pkg.repo_name)),i(c,r)});var O=a(a(D,!0));N(O,()=>e.children,c=>{var r=S(),j=C(r);P(()=>e.children,j,()=>e.pkg),i(c,r)});var U=a(a(O,!0));N(U,()=>s(l).description,c=>{var r=S(),j=C(r);N(j,()=>e.description,g=>{var t=S(),h=C(t);P(()=>e.description,h,()=>s(l).description),i(g,t)},g=>{var t=wa(),h=o(t);x(()=>I(h,s(l).description)),i(g,t)}),i(c,r)});var de=a(a(U,!0));N(de,()=>s(l).motto,c=>{var r=S(),j=C(r);N(j,()=>e.motto,g=>{var t=S(),h=C(t);P(()=>e.motto,h,()=>s(l).motto),i(g,t)},g=>{var t=Fa(),h=o(t);x(()=>I(h,s(l).motto)),i(g,t)}),i(c,r)});var le=a(a(de,!0));N(le,()=>e.pkg.npm_url,c=>{var r=S(),j=C(r);N(j,()=>e.npm_url,g=>{var t=S(),h=C(t);P(()=>e.npm_url,h,()=>e.pkg.npm_url),i(g,t)},g=>{var t=Ea(),h=o(t);x(()=>I(h,`npm i -D ${s(l).name??""}`)),i(g,t)}),i(c,r)});var Ae=a(a(le,!0)),ce=o(Ae);N(ce,()=>e.pkg.homepage_url,c=>{var r=S(),j=C(r);N(j,()=>e.homepage_url,g=>{var t=S(),h=C(t);P(()=>e.homepage_url,h,()=>e.pkg.homepage_url),i(g,t)},g=>{var t=Ta(),h=C(t),K=a(a(h,!0)),Z=o(K),G=o(Z);x(()=>M(G,"src",`${ie(e.pkg.homepage_url,"/")??""}favicon.png`));var Y=a(G,!0);x(()=>I(Y,` ${na(e.pkg.homepage_url)??""}`)),x(()=>{M(Z,"href",e.pkg.homepage_url),X(Z,"selected",e.pkg.homepage_url===u().url.href),M(G,"alt",`favicon to homepage at ${e.pkg.homepage_url??""}`),H(G,"width","16px"),H(G,"height","16px"),H(G,"margin-right","var(--space_xs)")}),i(g,t)}),i(c,r)});var ue=a(a(ce,!0));N(ue,()=>e.pkg.repo_url,c=>{var r=Na(),j=C(r),g=a(a(j,!0)),t=o(g),h=o(t);x(()=>{M(t,"href",e.pkg.repo_url),I(h,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),i(c,r)});var pe=a(a(ue,!0));N(pe,()=>e.pkg.npm_url,c=>{var r=Ca(),j=C(r),g=a(a(j,!0)),t=o(g),h=o(t);x(()=>{M(t,"href",e.pkg.npm_url),I(h,s(l).name)}),i(c,r)});var ge=a(a(pe,!0));N(ge,()=>e.pkg.changelog_url,c=>{var r=Aa(),j=C(r),g=a(a(j,!0)),t=o(g),h=o(t);x(()=>{M(t,"href",e.pkg.changelog_url),I(h,s(l).version)}),i(c,r)});var me=a(a(ge,!0));N(me,()=>s(w),c=>{var r=Oa(),j=C(r),g=a(a(j,!0)),t=o(g),h=o(t);x(()=>{M(t,"href",s(w)),I(h,s(l).license)}),i(c,r)});var Oe=a(a(me,!0));N(Oe,()=>e.pkg.homepage_url,c=>{var r=qa(),j=C(r),g=a(a(j,!0)),t=o(g);x(()=>M(t,"href",`${ie(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var h=a(a(t,!0));x(()=>M(h,"href",`${ie(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),i(c,r)});var qe=a(a(R,!0)),V=o(qe),fe=a(a(f,!0));N(fe,()=>s(E)&&e.pkg.repo_url,c=>{var r=Sa(),j=o(r);ve(j,79,()=>s(E),(g,t)=>L(g),(g,t,h)=>{var K=La();const Z=q(()=>F(e.pkg.repo_url,L(t))),G=q(()=>{var B;return(B=s(k))==null?void 0:B[L(h)]}),Y=q(()=>{var B;return s(G)&&((B=s(m))==null?void 0:B[s(G)])});x(()=>X(K,"ts",L(t).endsWith(".js"))),x(()=>X(K,"svelte",L(t).endsWith(".svelte"))),x(()=>X(K,"css",L(t).endsWith(".css"))),x(()=>X(K,"json",L(t).endsWith(".json")));var Se=o(K),se=o(Se),Me=o(se),We=a(a(se,!0));N(We,()=>{var B;return(B=s(Y))==null?void 0:B.declarations.length},B=>{var he=Ia();ve(he,73,()=>s(Y).declarations,we,(Re,ye,Ha)=>{let Pe=()=>L(L(ye)).name,Be=()=>L(L(ye)).kind;var ne=za(),De=o(ne);x(()=>{sa(ne,`declaration chip ${Be()??""}_declaration svelte-19y7aej`),I(De,Pe())}),i(Re,ne)}),i(B,he)}),x(()=>{M(se,"href",s(Z)),I(Me,L(t))}),i(g,K)}),i(c,r)});var ze=a(a(fe,!0)),Ie=o(ze);{var Le=c=>{var r=Ma();i(c,r)};ka(Ie,{summary:Le,children:(c,r)=>{var j=Wa(),g=o(j),t=o(g);x(()=>I(t,JSON.stringify(e.pkg,null,"	"))),i(c,j)},$$slots:{default:!0}})}x(()=>{M(V,"src",`${e.pkg.homepage_url??""}/favicon.png`),M(V,"alt",`logo for ${e.pkg.repo_name??""}`),H(V,"width","var(--size, var(--icon_size_xl3))"),H(V,"height","var(--size, var(--icon_size_xl3))")}),i(_,T),re()}const Ba=_=>_.split("/").filter(e=>e&&e!=="."&&e!==".."),Da=_=>{const e=[],n=Ba(_);n.length&&e.push({type:"separator",path:"/"});let u="";for(let v=0;v<n.length;v++){const d=n[v];u+="/"+d,e.push({type:"piece",name:d,path:u}),v!==n.length-1&&e.push({type:"separator",path:u})}return e};var Ua=b("•",1),Ga=b('<a class="svelte-44vg7j"> </a>'),Ja=b("/",1),Ka=b('<span class="separator svelte-44vg7j"><!></span>'),Qa=b('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function be(_,e){te(e,!0);const n={};Fe(n);const u=()=>Ee(Te,"$page",n),v=q(()=>e.path??u().url.pathname),d=q(()=>e.selected_path===null?null:e.selected_path===void 0?s(v):e.selected_path),l=q(()=>e.base_path??_a),A=q(()=>Da(s(v))),z=q(()=>s(l)||"/");var p=Qa(),m=o(p),y=o(m);N(y,()=>e.children,F=>{var k=S(),E=C(k);P(()=>e.children,E),i(F,k)},F=>{var k=Ua();i(F,k)});var w=a(m);ve(w,65,()=>s(A),we,(F,k,E)=>{var T=S(),f=C(T);N(f,()=>L(k).type==="piece",R=>{var W=Ga(),D=o(W);x(()=>{M(W,"href",s(l)+L(k).path),X(W,"selected",L(k).path===s(d)),I(D,L(k).name)}),i(R,W)},R=>{var W=Ka(),D=o(W);N(D,()=>e.separator,Q=>{var O=S(),U=C(O);P(()=>e.separator,U),i(Q,O)},Q=>{var O=Ja();i(Q,O)}),i(R,W)}),i(F,T)}),x(()=>{M(m,"href",s(z)),X(m,"selected",s(z)===s(d))}),i(_,p),re()}var Xa=b('<div class="mb_xl"><!></div>'),Za=b('<main class="width_md svelte-1pyh03k"><section class="box svelte-1pyh03k"><header class="box"><h1 class="my_xl3 svelte-1pyh03k">webdevladder</h1></header> <!></section> <section class="box w_100 mb_lg svelte-1pyh03k"><div class="panel p_md width_md"><!></div></section> <section class="box svelte-1pyh03k"><!></section></main>');function it(_,e){te(e,!0);const n=ia($.homepage,$,va);var u=Za(),v=o(u),d=o(v),l=a(a(d,!0));be(l,{children:(w,F)=>{var k=oe(w);x(()=>I(k,$.icon)),i(w,k)},$$slots:{default:!0}});var A=a(a(v,!0)),z=o(A),p=o(z);Pa(p,{pkg:n});var m=a(a(A,!0)),y=o(m);oa(y,{pkg:n,children:(w,F)=>{var k=Xa(),E=o(k);be(E,{children:(T,f)=>{var R=oe(T);x(()=>I(R,$.icon)),i(T,R)},$$slots:{default:!0}}),i(w,k)},$$slots:{default:!0}}),i(_,u),re()}export{it as component};