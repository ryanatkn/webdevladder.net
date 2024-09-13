import{E as I,ao as S,ap as O,e as R,aq as q,L,u as z,ar as M,q as U,x as g,as as B,at as P}from"./runtime.BH2H5C-s.js";import{a as W}from"./render.mFJ6bDNm.js";const j=requestAnimationFrame,G=()=>performance.now(),h={tick:r=>j(r),now:()=>G(),tasks:new Set};function A(r){h.tasks.forEach(a=>{a.c(r)||(h.tasks.delete(a),a.f())}),h.tasks.size!==0&&h.tick(A)}function K(r){let a;return h.tasks.size===0&&h.tick(A),{promise:new Promise(i=>{h.tasks.add(a={c:r,f:i})}),abort(){h.tasks.delete(a)}}}function w(r,a){r.dispatchEvent(new CustomEvent(a))}function D(r){const a=r.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function x(r){const a={},i=r.split(";");for(const s of i){const[c,n]=s.split(":");if(!c||n===void 0)break;const _=D(c.trim());a[_]=n.trim()}return a}const H=r=>r;function X(r,a,i,s){var c=(r&q)!==0,n=(r&B)!==0,_=c&&n,m=(r&P)!==0,y=_?"both":c?"in":"out",f,e=a.inert,d,o;function $(){return f??(f=i()(a,(s==null?void 0:s())??{},{direction:y}))}var l={is_global:m,in(){var u;if(a.inert=e,!c){o==null||o.abort(),(u=o==null?void 0:o.reset)==null||u.call(o);return}n||d==null||d.abort(),w(a,"introstart"),d=T(a,$(),o,1,()=>{w(a,"introend"),d==null||d.abort(),d=f=void 0})},out(u){if(!n){u==null||u(),f=void 0;return}a.inert=!0,w(a,"outrostart"),o=T(a,$(),d,0,()=>{w(a,"outroend"),u==null||u()})},stop:()=>{d==null||d.abort(),o==null||o.abort()}},v=L;if((v.transitions??(v.transitions=[])).push(l),c&&W){var p=m;if(!p){for(var t=v.parent;t&&t.f&I;)for(;(t=t.parent)&&!(t.f&S););p=!t||(t.f&O)!==0}p&&R(()=>{z(()=>l.in())})}}function T(r,a,i,s,c){var n=s===1;if(M(a)){var _,m=!1;return U(()=>{if(!m){var p=a({direction:n?"in":"out"});_=T(r,p,i,s,c)}}),{abort:()=>{m=!0,_==null||_.abort()},deactivate:()=>_.deactivate(),reset:()=>_.reset(),t:()=>_.t()}}if(i==null||i.deactivate(),!(a!=null&&a.duration))return c(),{abort:g,deactivate:g,reset:g,t:()=>s};const{delay:y=0,css:f,tick:e,easing:d=H}=a;var o=[];if(n&&i===void 0&&(e&&e(0,1),f)){var $=x(f(0,1));o.push($,$)}var l=()=>1-s,v=r.animate(o,{duration:y});return v.onfinish=()=>{var p=(i==null?void 0:i.t())??1-s;i==null||i.abort();var t=s-p,u=a.duration*Math.abs(t),E=[];if(u>0){if(f)for(var N=Math.ceil(u/16.666666666666668),F=0;F<=N;F+=1){var k=p+t*d(F/N),C=f(k,1-k);E.push(x(C))}l=()=>{var b=v.currentTime;return p+t*d(b/u)},e&&K(()=>{if(v.playState!=="running")return!1;var b=l();return e(b,1-b),!0})}v=r.animate(E,{duration:u,fill:"forwards"}),v.onfinish=()=>{l=()=>s,e==null||e(s,1-s),c()}},{abort:()=>{v&&(v.cancel(),v.effect=null)},deactivate:()=>{c=g},reset:()=>{s===0&&(e==null||e(1,0))},t:()=>l()}}function J(r){const a=r-1;return a*a*a+1}function Y(r,{delay:a=0,duration:i=400,easing:s=J,axis:c="y"}={}){const n=getComputedStyle(r),_=+n.opacity,m=c==="y"?"height":"width",y=parseFloat(n[m]),f=c==="y"?["top","bottom"]:["left","right"],e=f.map(t=>`${t[0].toUpperCase()}${t.slice(1)}`),d=parseFloat(n[`padding${e[0]}`]),o=parseFloat(n[`padding${e[1]}`]),$=parseFloat(n[`margin${e[0]}`]),l=parseFloat(n[`margin${e[1]}`]),v=parseFloat(n[`border${e[0]}Width`]),p=parseFloat(n[`border${e[1]}Width`]);return{delay:a,duration:i,easing:s,css:t=>`overflow: hidden;opacity: ${Math.min(t*20,1)*_};${m}: ${t*y}px;padding-${f[0]}: ${t*d}px;padding-${f[1]}: ${t*o}px;margin-${f[0]}: ${t*$}px;margin-${f[1]}: ${t*l}px;border-${f[0]}-width: ${t*v}px;border-${f[1]}-width: ${t*p}px;`}}export{Y as s,X as t};
