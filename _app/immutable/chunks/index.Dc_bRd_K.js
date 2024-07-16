import{N as F,E as S,W as q,X as z,I as L,G as U,a as W,r as B,K as G}from"./runtime.B5t0gBws.js";import{M as K,T as P,N as j,O as D}from"./disclose-version.LuwIvMOo.js";const M=typeof window<"u",X=M?requestAnimationFrame:F,b=M?()=>performance.now():()=>Date.now(),y={tick:i=>X(i),now:()=>b(),tasks:new Set};function O(i){y.tasks.forEach(r=>{r.c(i)||(y.tasks.delete(r),r.f())}),y.tasks.size!==0&&y.tick(O)}function H(i){let r;return y.tasks.size===0&&y.tick(O),{promise:new Promise(n=>{y.tasks.add(r={c:i,f:n})}),abort(){y.tasks.delete(r)}}}function g(i,r){i.dispatchEvent(new CustomEvent(r))}function J(i){const r=i.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function I(i){const r={},n=i.split(";");for(const d of n){const[a,s]=d.split(":");if(!a||s===void 0)break;const v=J(a.trim());r[v]=s.trim()}return r}const Q=i=>i;function k(i,r,n,d){var a=(i&P)!==0,s=(i&j)!==0,v=(i&D)!==0,c=a&&s?"both":a?"in":"out",_,u=r.inert,e,f,h;function m(){return _??(_=n()(r,d==null?void 0:d(),{direction:c}))}var $={is_global:v,in(){r.inert=u,f==null||f.abort(),a?(g(r,"introstart"),e=E(r,m(),f,1,()=>{g(r,"introend"),e=_=void 0})):h==null||h()},out(t){s?(r.inert=!0,g(r,"outrostart"),f=E(r,m(),e,0,()=>{g(r,"outroend"),f=_=void 0,t==null||t()}),h=f.reset):t==null||t()},stop:()=>{e==null||e.abort(),f==null||f.abort()}},w=U;if((w.transitions??(w.transitions=[])).push($),a&&K){let t=v;if(!t){for(var o=w.parent;o&&o.f&S;)for(;(o=o.parent)&&!(o.f&q););t=!o||(o.f&z)!==0}t&&L(()=>{W(()=>$.in())})}}function E(i,r,n,d,a){var s=d===1;if(B(r)){var v;return G(()=>{var p=r({direction:s?"in":"out"});v=E(i,p,n,d,a)}),{abort:()=>v.abort(),deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:p=>v.t(p)}}if(n==null||n.deactivate(),!(r!=null&&r.duration))return a==null||a(),{abort:F,deactivate:F,reset:F,t:()=>d};var{delay:c=0,duration:_,css:u,tick:e,easing:f=Q}=r,h=y.now()+c,m=(n==null?void 0:n.t(h))??1-d,$=d-m;_*=Math.abs($);var w=h+_,o,t;if(u){var l=[],x=Math.ceil(_/16.666666666666668);if(s&&c>0){let p=Math.ceil(c/16.666666666666668),T=I(u(0,1));for(let C=0;C<p;C+=1)l.push(T)}for(var N=0;N<=x;N+=1){var A=m+$*f(N/x),R=u(A,1-A);l.push(I(R))}o=i.animate(l,{delay:s?0:c,duration:_+(s?c:0),easing:"linear",fill:"forwards"}),o.finished.then(()=>{a==null||a(),d===1&&o.cancel()}).catch(p=>{if(o.startTime!==null&&o.currentTime!==null)throw p})}else m===0&&(e==null||e(0,1)),t=H(p=>{if(p>=w)return e==null||e(d,1-d),a==null||a(),!1;if(p>=h){var T=m+$*f((p-h)/_);e==null||e(T,1-T)}return!0});return{abort:()=>{o==null||o.cancel(),t==null||t.abort()},deactivate:()=>{a=void 0},reset:()=>{d===0&&(e==null||e(1,0))},t:p=>{var T=m+$*f((p-h)/_);return Math.min(1,Math.max(0,T))}}}function V(i){const r=i-1;return r*r*r+1}function rr(i,{delay:r=0,duration:n=400,easing:d=V,axis:a="y"}={}){const s=getComputedStyle(i),v=+s.opacity,c=a==="y"?"height":"width",_=parseFloat(s[c]),u=a==="y"?["top","bottom"]:["left","right"],e=u.map(t=>`${t[0].toUpperCase()}${t.slice(1)}`),f=parseFloat(s[`padding${e[0]}`]),h=parseFloat(s[`padding${e[1]}`]),m=parseFloat(s[`margin${e[0]}`]),$=parseFloat(s[`margin${e[1]}`]),w=parseFloat(s[`border${e[0]}Width`]),o=parseFloat(s[`border${e[1]}Width`]);return{delay:r,duration:n,easing:d,css:t=>`overflow: hidden;opacity: ${Math.min(t*20,1)*v};${c}: ${t*_}px;padding-${u[0]}: ${t*f}px;padding-${u[1]}: ${t*h}px;margin-${u[0]}: ${t*m}px;margin-${u[1]}: ${t*$}px;border-${u[0]}-width: ${t*w}px;border-${u[1]}-width: ${t*o}px;`}}export{rr as s,k as t};