import{q as L,ai as j,i as d,aj as p,ak as q,a8 as k,al as I}from"./runtime.DXydPg0t.js";import{j as M,k as w,l as S,m as B,o as C}from"./disclose-version.BsnlxLp3.js";function G(s,i){if(i){const r=document.body;s.autofocus=!0,L(()=>{document.activeElement===r&&s.focus()})}}let E=!1;function R(){E||(E=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var i;if(!s.defaultPrevented)for(const r of s.target.elements)(i=r.__on_r)==null||i.call(r)})},{capture:!0}))}function J(s){if(d){var i=!1,r=()=>{if(!i){if(i=!0,s.hasAttribute("value")){var a=s.value;n(s,"value",null),s.value=a}if(s.hasAttribute("checked")){var e=s.checked;n(s,"checked",null),s.checked=e}}};s.__on_r=r,p(r),R()}}function n(s,i,r,a){r=r==null?null:r+"";var e=s.__attributes??(s.__attributes={});d&&(e[i]=s.getAttribute(i),i==="src"||i==="href"||i==="srcset")||e[i]!==(e[i]=r)&&(i==="loading"&&(s[j]=r),r===null?s.removeAttribute(i):s.setAttribute(i,r))}function z(s,i,r){if(i in s){var a=s[i],e=typeof a=="boolean"&&r===""?!0:r;(typeof a!="object"||a!==e)&&(s[i]=e)}else n(s,i,r)}function D(s,i,r,a,e=!1,Y){var o=i||{},O=s.tagName==="OPTION";for(var g in i)g in r||(r[g]=null);a!==void 0&&(r.class=r.class?r.class+" "+a:a);var v=$.get(s.nodeName);v||$.set(s.nodeName,v=V(s));var P=s.__attributes??(s.__attributes={}),b=[];for(const t in r){let f=r[t];if(O&&t==="value"&&f==null){s.value=s.__value="",o[t]=f;continue}var h=o[t];if(f!==h){o[t]=f;var A=t[0]+t[1];if(A!=="$$")if(A==="on"){const _={},l="$$"+t;let u=t.slice(2);var y=C(u);if(M(u)&&(u=u.slice(0,-7),_.capture=!0),!y&&h){if(f!=null)continue;s.removeEventListener(u,o[l],_),o[l]=null}if(f!=null)if(y)s[`__${u}`]=f,S([u]);else{let N=function(T){o[t].call(this,T)};i?o[l]=w(u,s,N,_):b.push([t,f,()=>o[l]=w(u,s,N,_)])}}else if(f==null)P[t]=null,s.removeAttribute(t);else if(t==="style")s.style.cssText=f+"";else if(t==="autofocus")G(s,!!f);else if(t==="__value"||t==="value")s.value=s[t]=s.__value=f;else{var c=t;e||(c=B(c)),v.includes(c)?d&&(c==="src"||c==="href"||c==="srcset")||(s[c]=f):typeof f!="function"&&n(s,c,f)}}}return i||L(()=>{if(s.isConnected)for(const[t,f,_]of b)o[t]===f&&_()}),o}function K(s,i,r,a){if(s.tagName.includes("-")){for(var e in i)e in r||(r[e]=null);a!==void 0&&(r.class=r.class?r.class+" "+a:a);for(e in r)z(s,e,r[e]);return r}return D(s,i,r,a,s.namespaceURI!==q)}var U=["width","height","draggable"],$=new Map;function V(s){for(var i=[],r,a=k(s);a.constructor.name!=="Element";){r=I(a);for(var e in r)r[e].set&&!U.includes(e)&&i.push(e);a=k(a)}return i}export{n as a,R as b,K as c,J as r,D as s};
