import{s as v,a as A,b as S}from"./string.DmgXrFfO.js";import{a as k,t as G,p as H}from"./disclose-version.tiXKnEBk.js";import{t as x,p as Y,Y as z,s as g,a as q,c as d,f as C,r as u}from"./runtime.CdcJ3TD1.js";import{s as D}from"./render.DC06klNu.js";import{i as T}from"./if.CVSmFsw-.js";import{s as _}from"./snippet.ZuVh7Bd3.js";import{s as E}from"./attributes.w3HBHoux.js";import{p as F}from"./props.CrsQ1EOE.js";import{S as I,b as M}from"./logos.VwdIV5nU.js";const j=(e,t)=>{const{name:a}=e,o=(f=>f?S(v(S(f,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null);if(!o)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const s=e.homepage??null,n=!e.private&&!!e.exports&&e.version!=="0.0.1",l=n?"https://www.npmjs.com/package/"+e.name:null,b=n&&o?o+"/blob/main/CHANGELOG.md":null,m=N(a),h=o?v(o,"https://github.com/").split("/")[0]:null,w=s?A(s,"/")+(e.logo?v(e.logo,"/"):"favicon.png"):null,y=e.logo_alt??`logo for ${m}`;return{package_json:e,src_json:t,name:a,repo_name:m,repo_url:o,owner_name:h,homepage_url:s,logo_url:w,logo_alt:y,npm_url:l,changelog_url:b,published:n}},N=e=>e[0]==="@"?e.split("/")[1]:e,O=e=>S(v(v(e,"https://"),"www."),"/");var Q=G('<div class="root_url svelte-cs8o0f"><a> </a></div>'),R=G('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function $(e,t){q(t,!0);const a=F(t,"root_url",3,null);var c=R(),o=d(c);_(o,()=>t.children??z);var s=g(o,2),n=d(s);_(n,()=>t.logo_header??z);var l=g(n,2),b=d(l);{var m=r=>{var i=H(),p=C(i);_(p,()=>t.logo),k(r,i)},h=r=>{I(r,{data:M,size:"var(--icon_size_lg)"})};T(b,r=>{t.logo?r(m):r(h,!1)})}u(l);var w=g(l,2);_(w,()=>t.logo_footer??z),u(s);var y=g(s,2);{var f=r=>{var i=Q(),p=d(i),L=d(p,!0);x(()=>D(L,O(a()))),u(p),u(i),x(()=>E(p,"href",a())),k(r,i)};T(y,r=>{a()&&r(f)})}u(c),x(()=>E(l,"href",t.pkg.repo_url)),k(e,c),Y()}const ee={name:"webdevladder.net",version:"0.0.1",description:"a YouTube channel and blog for realworld webdev with TypeScript and Svelte",motto:"up ↗",glyph:"🪜",logo:"logo.svg",logo_alt:"a spider web between two rungs of a ladder",license:"MIT",public:!0,homepage:"https://www.webdevladder.net/",repository:"https://github.com/ryanatkn/webdevladder.net",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/webdevladder.net/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.17"},devDependencies:{"@ryanatkn/belt":"^0.29.0","@ryanatkn/eslint-config":"^0.6.0","@ryanatkn/fuz":"^0.131.2","@ryanatkn/fuz_blog":"^0.11.0","@ryanatkn/fuz_code":"^0.21.0","@ryanatkn/fuz_mastodon":"^0.28.0","@ryanatkn/gro":"^0.148.0","@ryanatkn/moss":"^0.20.2","@sveltejs/adapter-static":"^3.0.6","@sveltejs/kit":"^2.11.0","@sveltejs/vite-plugin-svelte":"^4.0.1",eslint:"^9.16.0","eslint-plugin-svelte":"^2.46.1",prettier:"^3.4.2","prettier-plugin-svelte":"^3.3.2",svelte:"^5.11.2","svelte-check":"^4.1.1",tslib:"^2.8.1",typescript:"^5.7.2","typescript-eslint":"^8.18.0",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"]},te={name:"webdevladder.net",version:"0.0.1"};export{$ as L,ee as a,O as f,j as p,te as s};
