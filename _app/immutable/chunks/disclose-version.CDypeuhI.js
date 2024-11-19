import{q as C,ay as y,a9 as g,ap as D,y as w,aB as B,a3 as V,v as E,d as W,aG as q,h as _,F as G,G as k,w as I,x as A,j as c,o as d,aH as M,aI as H,i as U}from"./runtime.BZB4EjX6.js";function ee(e,t){if(t){const r=document.body;e.autofocus=!0,C(()=>{document.activeElement===r&&e.focus()})}}let x=!1;function $(){x||(x=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function P(e){var t=D,r=w;y(null),g(null);try{return e()}finally{y(t),g(r)}}function te(e,t,r,o=r){e.addEventListener(t,()=>P(r));const a=e.__on_r;a?e.__on_r=()=>{a(),o()}:e.__on_r=o,$()}const j=new Set,z=new Set;function re(e,t,r,o){function a(n){if(o.capture||Y.call(t,n),!n.cancelBubble)return P(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function ae(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var r of z)r(e)}function Y(e){var N;var t=this,r=t.ownerDocument,o=e.type,a=((N=e.composedPath)==null?void 0:N.call(e))||[],n=a[0]||e.target,i=0,p=e.__root;if(p){var l=a.indexOf(p);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;l<=f&&(i=l)}if(n=a[i]||e.target,n!==t){B(e,"currentTarget",{configurable:!0,get(){return n||r}});var T=D,b=w;y(null),g(null);try{for(var v,L=[];n!==null;){var S=n.assignedSlot||n.parentNode||n.host||null;try{var h=n["__"+o];if(h!==void 0&&!n.disabled)if(V(h)){var[F,...R]=h;F.apply(n,[e,...R])}else h.call(n,e)}catch(m){v?L.push(m):v=m}if(e.cancelBubble||S===t||S===null)break;n=S}if(v){for(let m of L)queueMicrotask(()=>{throw m});throw v}}finally{e.__root=t,delete e.currentTarget,y(T),g(b)}}}let s;function ne(){s=void 0}function oe(e){let t=null,r=_;var o;if(_){for(t=c,s===void 0&&(s=d(document.head));s!==null&&(s.nodeType!==8||s.data!==G);)s=k(s);s===null?I(!1):s=A(k(s))}_||(o=document.head.appendChild(E()));try{W(()=>e(o),q)}finally{r&&(I(!0),s=c,A(t))}}function O(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var r=w;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ie(e,t){var r=(t&M)!==0,o=(t&H)!==0,a,n=!e.startsWith("<!>");return()=>{if(_)return u(c,null),c;a===void 0&&(a=O(n?e:"<!>"+e),r||(a=d(a)));var i=o?document.importNode(a,!0):a.cloneNode(!0);if(r){var p=d(i),l=i.lastChild;u(p,l)}else u(i,i);return i}}function se(e,t,r="svg"){var o=!e.startsWith("<!>"),a=(t&M)!==0,n=`<${r}>${o?e:"<!>"+e}</${r}>`,i;return()=>{if(_)return u(c,null),c;if(!i){var p=O(n),l=d(p);if(a)for(i=document.createDocumentFragment();d(l);)i.appendChild(d(l));else i=d(l)}var f=i.cloneNode(!0);if(a){var T=d(f),b=f.lastChild;u(T,b)}else u(f,f);return f}}function ue(e=""){if(!_){var t=E(e+"");return u(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=E()),A(r)),u(r,r),r}function ce(){if(_)return u(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=E();return e.append(t,r),u(t,r),e}function le(e,t){if(_){w.nodes_end=c,U();return}e!==null&&e.before(t)}function fe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const J=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function de(e){return J.includes(e)}const K={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function _e(e){return e=e.toLowerCase(),K[e]??e}const Q=["touchstart","touchmove"];function pe(e){return Q.includes(e)}const X="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(X);export{le as a,ue as b,u as c,$ as d,re as e,ae as f,ee as g,de as h,fe as i,j,ne as k,te as l,Y as m,_e as n,pe as o,ce as p,O as q,z as r,se as s,ie as t,oe as u};
