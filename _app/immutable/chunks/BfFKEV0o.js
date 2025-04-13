import{m as A,E as z,am as L,an as M,e as U,u as W,ao as B,ap as P,q as j,V as b,aq as S,ar as I,as as G,at as K,au as V}from"./BMLtCLay.js";import{b as D}from"./DsEF84c5.js";import{w as H}from"./D4bv8F4E.js";const J=()=>performance.now(),y={tick:t=>requestAnimationFrame(t),now:()=>J(),tasks:new Set};function R(){const t=y.now();y.tasks.forEach(a=>{a.c(t)||(y.tasks.delete(a),a.f())}),y.tasks.size!==0&&y.tick(R)}function Q(t){let a;return y.tasks.size===0&&y.tick(R),{promise:new Promise(r=>{y.tasks.add(a={c:t,f:r})}),abort(){y.tasks.delete(a)}}}function T(t,a){H(()=>{t.dispatchEvent(new CustomEvent(a))})}function X(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function O(t){const a={},r=t.split(";");for(const e of r){const[d,s]=e.split(":");if(!d||s===void 0)break;const v=X(d.trim());a[v]=s.trim()}return a}const Y=t=>t;function ra(t,a,r,e){var d=(t&K)!==0,s=(t&V)!==0,v=d&&s,_=(t&B)!==0,$=v?"both":d?"in":"out",f,i=a.inert,w=a.style.overflow,n,c;function h(){var p=G,g=A;S(null),I(null);try{return f??(f=r()(a,(e==null?void 0:e())??{},{direction:$}))}finally{S(p),I(g)}}var u={is_global:_,in(){var p;if(a.inert=i,!d){c==null||c.abort(),(p=c==null?void 0:c.reset)==null||p.call(c);return}s||n==null||n.abort(),T(a,"introstart"),n=N(a,h(),c,1,()=>{T(a,"introend"),n==null||n.abort(),n=f=void 0,a.style.overflow=w})},out(p){if(!s){p==null||p(),f=void 0;return}a.inert=!0,T(a,"outrostart"),c=N(a,h(),n,0,()=>{T(a,"outroend"),p==null||p()})},stop:()=>{n==null||n.abort(),c==null||c.abort()}},l=A;if((l.transitions??(l.transitions=[])).push(u),d&&D){var o=_;if(!o){for(var m=l.parent;m&&(m.f&z)!==0;)for(;(m=m.parent)&&(m.f&L)===0;);o=!m||(m.f&M)!==0}o&&U(()=>{W(()=>u.in())})}}function N(t,a,r,e,d){var s=e===1;if(P(a)){var v,_=!1;return j(()=>{if(!_){var l=a({direction:s?"in":"out"});v=N(t,l,r,e,d)}}),{abort:()=>{_=!0,v==null||v.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(r==null||r.deactivate(),!(a!=null&&a.duration))return d(),{abort:b,deactivate:b,reset:b,t:()=>e};const{delay:$=0,css:f,tick:i,easing:w=Y}=a;var n=[];if(s&&r===void 0&&(i&&i(0,1),f)){var c=O(f(0,1));n.push(c,c)}var h=()=>1-e,u=t.animate(n,{duration:$});return u.onfinish=()=>{var l=(r==null?void 0:r.t())??1-e;r==null||r.abort();var o=e-l,m=a.duration*Math.abs(o),p=[];if(m>0){var g=!1;if(f)for(var k=Math.ceil(m/16.666666666666668),E=0;E<=k;E+=1){var C=l+o*w(E/k),x=O(f(C,1-C));p.push(x),g||(g=x.overflow==="hidden")}g&&(t.style.overflow="hidden"),h=()=>{var F=u.currentTime;return l+o*w(F/m)},i&&Q(()=>{if(u.playState!=="running")return!1;var F=h();return i(F,1-F),!0})}u=t.animate(p,{duration:m,fill:"forwards"}),u.onfinish=()=>{h=()=>e,i==null||i(e,1-e),d()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=b)},deactivate:()=>{d=b},reset:()=>{e===0&&(i==null||i(1,0))},t:()=>h()}}function q(t){const a=t-1;return a*a*a+1}function ia(t,{delay:a=0,duration:r=400,easing:e=q,axis:d="y"}={}){const s=getComputedStyle(t),v=+s.opacity,_=d==="y"?"height":"width",$=parseFloat(s[_]),f=d==="y"?["top","bottom"]:["left","right"],i=f.map(o=>`${o[0].toUpperCase()}${o.slice(1)}`),w=parseFloat(s[`padding${i[0]}`]),n=parseFloat(s[`padding${i[1]}`]),c=parseFloat(s[`margin${i[0]}`]),h=parseFloat(s[`margin${i[1]}`]),u=parseFloat(s[`border${i[0]}Width`]),l=parseFloat(s[`border${i[1]}Width`]);return{delay:a,duration:r,easing:e,css:o=>`overflow: hidden;opacity: ${Math.min(o*20,1)*v};${_}: ${o*$}px;padding-${f[0]}: ${o*w}px;padding-${f[1]}: ${o*n}px;margin-${f[0]}: ${o*c}px;margin-${f[1]}: ${o*h}px;border-${f[0]}-width: ${o*u}px;border-${f[1]}-width: ${o*l}px;min-${_}: 0`}}function ea(t,{delay:a=0,duration:r=400,easing:e=q,start:d=0,opacity:s=0}={}){const v=getComputedStyle(t),_=+v.opacity,$=v.transform==="none"?"":v.transform,f=1-d,i=_*(1-s);return{delay:a,duration:r,easing:e,css:(w,n)=>`
			transform: ${$} scale(${1-f*n});
			opacity: ${_-i*n}
		`}}export{ea as a,ia as s,ra as t};
