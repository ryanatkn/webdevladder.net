import{b as L,C as P,e as R,v as W,q as w,a1 as q,a2 as B,a3 as D,a4 as F,a5 as M,Y as A,a6 as O,a7 as S}from"./runtime.DV--gxMp.js";import{h as N,l as E,m as Y}from"./disclose-version.CuiJ47FC.js";function H(s,t,...r){var f,o;L(()=>{f!==(f=s())&&(o&&(W(o),o=null),f&&(o=R(()=>f(t,...r))))},P)}function G(s,t){if(t){const r=document.body;s.autofocus=!0,w(()=>{document.activeElement===r&&s.focus()})}}function I(s,t,r){r=r==null?null:r+"";var f=s.__attributes??(s.__attributes={});N&&(f[t]=s.getAttribute(t),t==="src"||t==="href"||t==="srcset")||f[t]!==(f[t]=r)&&(t==="loading"&&(s[q]=r),r===null?s.removeAttribute(t):s.setAttribute(t,r))}function J(s,t,r,f,o){var _=o.length!==0,u=t||{};for(var h in t)h in r||(r[h]=null);_&&!r.class&&(r.class="");var v=B(T,s.nodeName);v||D(T,s.nodeName,v=j(s));var $=s.__attributes??(s.__attributes={}),d=[];for(const i in r){let a=r[i];var g=u[i];if(a!==g){u[i]=a;var p=i[0]+i[1];if(p!=="$$")if(p==="on"){const e={},l="$$"+i;let c=i.slice(2);var y=O.includes(c);if(F(c)&&(c=c.slice(0,-7),e.capture=!0),!y&&g){if(a!=null)continue;s.removeEventListener(c,u[l],e),u[l]=null}if(a!=null)if(y)s[`__${c}`]=a,Y([c]);else{let b=function(C){u[i].call(this,C)};t?u[l]=E(c,s,b,e):d.push([i,a,()=>u[l]=E(c,s,b,e)])}}else if(a==null)$[i]=null,s.removeAttribute(i);else if(i==="style")s.style.cssText=a+"";else if(i==="autofocus")G(s,!!a);else if(i==="__value"||i==="value")s.value=s[i]=s.__value=a;else{var n=i;f&&(n=n.toLowerCase(),n=M[n]||n),v.includes(n)?N&&(n==="src"||n==="href"||n==="srcset")||(s[n]=a):typeof a!="function"&&(_&&n==="class"&&(a&&(a+=" "),a+=o),I(s,n,a))}}}return t||w(()=>{if(s.isConnected)for(const[i,a,e]of d)u[i]===a&&e()}),u}var V=["width","height"],T=new Map;function j(s){for(var t=[],r,f=A(s);f.constructor.name!=="Element";){r=S(f);for(var o in r)r[o].set&&!V.includes(o)&&t.push(o);f=A(f)}return t}function K(s,t,r,f){const o=s.style,_=o.getPropertyValue(t);r==null?_!==""&&o.removeProperty(t):_!==r&&o.setProperty(t,r,f?"important":"")}const Q=(s,t)=>!t||!s.startsWith(t)?s:s.substring(t.length),U=(s,t)=>!t||!s.endsWith(t)?s:s.substring(0,s.length-t.length),X=(s,t)=>s.endsWith(t)?s:s+t;export{Q as a,U as b,J as c,K as d,H as e,X as f,I as s};