import{E as q,an as k,ao as z,e as L,ap as U,K as B,u as K,aq as P,q as I,am as N,ar as W,as as j}from"./runtime.DXydPg0t.js";import{a as G}from"./render.D7CCJaHe.js";const D=requestAnimationFrame,H=()=>performance.now(),h={tick:r=>D(r),now:()=>H(),tasks:new Set};function O(r){h.tasks.forEach(a=>{a.c(r)||(h.tasks.delete(a),a.f())}),h.tasks.size!==0&&h.tick(O)}function J(r){let a;return h.tasks.size===0&&h.tick(O),{promise:new Promise(u=>{h.tasks.add(a={c:r,f:u})}),abort(){h.tasks.delete(a)}}}function T(r,a){r.dispatchEvent(new CustomEvent(a))}function Q(r){const a=r.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(u=>u[0].toUpperCase()+u.slice(1)).join("")}function M(r){const a={},u=r.split(";");for(const c of u){const[t,i]=c.split(":");if(!t||i===void 0)break;const l=Q(t.trim());a[l]=i.trim()}return a}const V=r=>r;function aa(r,a,u,c){var t=(r&U)!==0,i=(r&W)!==0,l=t&&i,f=(r&j)!==0,w=l?"both":t?"in":"out",d,p=a.inert,e,n,m;function $(){return d??(d=u()(a,c==null?void 0:c(),{direction:w}))}var _={is_global:f,in(){a.inert=p,n==null||n.abort(),e==null||e.abort(),t?(T(a,"introstart"),e=x(a,$(),n,1,()=>{T(a,"introend"),e==null||e.abort(),e=d=void 0},l?void 0:()=>{e=d=void 0})):m==null||m()},out(o){n==null||n.abort(),i?(a.inert=!0,T(a,"outrostart"),n=x(a,$(),e,0,()=>{T(a,"outroend"),n=d=void 0,o==null||o()},l?void 0:()=>{n=d=void 0}),m=n.reset):o==null||o()},stop:()=>{e==null||e.abort(),n==null||n.abort()}},y=B;if((y.transitions??(y.transitions=[])).push(_),t&&G){let o=f;if(!o){for(var s=y.parent;s&&s.f&q;)for(;(s=s.parent)&&!(s.f&k););o=!s||(s.f&z)!==0}o&&L(()=>{K(()=>_.in())})}}function x(r,a,u,c,t,i){var l=c===1;if(P(a)){var f,w=!1;return I(()=>{if(!w){var v=a({direction:l?"in":"out"});f=x(r,v,u,c,t,i)}}),{abort:()=>{w=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:v=>f.t(v)}}if(u==null||u.deactivate(),!(a!=null&&a.duration))return t==null||t(),{abort:N,deactivate:N,reset:N,t:()=>c};const{delay:d=0,css:p,tick:e,easing:n=V}=a;var m=h.now()+d,$=(u==null?void 0:u.t(m))??1-c,_=c-$,y=a.duration*Math.abs(_),s=m+y,o,F;return p?I(()=>{var v=[],g=Math.ceil(y/16.666666666666668);if(l&&d>0){let E=Math.ceil(d/16.666666666666668),S=M(p(0,1));for(let C=0;C<E;C+=1)v.push(S)}for(var b=0;b<=g;b+=1){var A=$+_*n(b/g),R=p(A,1-A);v.push(M(R))}o=r.animate(v,{delay:l?0:d,duration:y+(l?d:0),easing:"linear",fill:"forwards"}),o.finished.then(()=>{t==null||t(),c===1&&o.cancel()}).catch(E=>{if(o.startTime!==null&&o.currentTime!==null)throw E})}):($===0&&(e==null||e(0,1)),F=J(v=>{if(v>=s)return e==null||e(c,1-c),t==null||t(),!1;if(v>=m){var g=$+_*n((v-m)/y);e==null||e(g,1-g)}return!0})),{abort:()=>{o&&(o.cancel(),o.effect=null),F==null||F.abort(),i==null||i(),t=void 0,i=void 0},deactivate:()=>{t=void 0,i=void 0},reset:()=>{c===0&&(e==null||e(1,0))},t:v=>{var g=$+_*n((v-m)/y);return Math.min(1,Math.max(0,g))}}}function X(r){const a=r-1;return a*a*a+1}function ea(r,{delay:a=0,duration:u=400,easing:c=X,axis:t="y"}={}){const i=getComputedStyle(r),l=+i.opacity,f=t==="y"?"height":"width",w=parseFloat(i[f]),d=t==="y"?["top","bottom"]:["left","right"],p=d.map(s=>`${s[0].toUpperCase()}${s.slice(1)}`),e=parseFloat(i[`padding${p[0]}`]),n=parseFloat(i[`padding${p[1]}`]),m=parseFloat(i[`margin${p[0]}`]),$=parseFloat(i[`margin${p[1]}`]),_=parseFloat(i[`border${p[0]}Width`]),y=parseFloat(i[`border${p[1]}Width`]);return{delay:a,duration:u,easing:c,css:s=>`overflow: hidden;opacity: ${Math.min(s*20,1)*l};${f}: ${s*w}px;padding-${d[0]}: ${s*e}px;padding-${d[1]}: ${s*n}px;margin-${d[0]}: ${s*m}px;margin-${d[1]}: ${s*$}px;border-${d[0]}-width: ${s*_}px;border-${d[1]}-width: ${s*y}px;`}}export{ea as s,aa as t};
