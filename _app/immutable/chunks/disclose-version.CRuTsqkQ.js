import{aw as M,$ as x,q as D,y,h as I,ax as O,i as _,B as P,C as b,m as S,l as w,x as l,A as f,M as A,ay as N,az as R,j as B}from"./runtime.PCiCyhA1.js";const F=new Set,V=new Set;function z(e,t,r,i){function n(a){if(i.capture||W.call(t,a),!a.cancelBubble)return r.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?D(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function G(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var r of V)r(e)}function W(e){var T;var t=this,r=t.ownerDocument,i=e.type,n=((T=e.composedPath)==null?void 0:T.call(e))||[],a=n[0]||e.target,o=0,p=e.__root;if(p){var d=n.indexOf(p);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var c=n.indexOf(t);if(c===-1)return;d<=c&&(o=d)}if(a=n[o]||e.target,a!==t){M(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var h,m=[];a!==null;){var E=a.assignedSlot||a.parentNode||a.host||null;try{var v=a["__"+i];if(v!==void 0&&!a.disabled)if(x(v)){var[C,...L]=v;C.apply(a,[e,...L])}else v.call(a,e)}catch(g){h?m.push(g):h=g}if(e.cancelBubble||E===t||E===null)break;a=E}if(h){for(let g of m)queueMicrotask(()=>{throw g});throw h}}finally{e.__root=t,delete e.currentTarget}}}let s;function Y(){s=void 0}function J(e){let t=null,r=_;var i;if(_){for(t=l,s===void 0&&(s=f(document.head));s!==null&&(s.nodeType!==8||s.data!==P);)s=b(s);s===null?S(!1):s=w(b(s))}_||(i=document.head.appendChild(y()));try{I(()=>e(i),O)}finally{r&&(S(!0),s=l,w(t))}}function k(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var r=A;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function K(e,t){var r=(t&N)!==0,i=(t&R)!==0,n,a=!e.startsWith("<!>");return()=>{if(_)return u(l,null),l;n===void 0&&(n=k(a?e:"<!>"+e),r||(n=f(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var p=f(o),d=o.lastChild;u(p,d)}else u(o,o);return o}}function Q(e,t,r="svg"){var i=!e.startsWith("<!>"),n=(t&N)!==0,a=`<${r}>${i?e:"<!>"+e}</${r}>`,o;return()=>{if(_)return u(l,null),l;if(!o){var p=k(a),d=f(p);if(n)for(o=document.createDocumentFragment();f(d);)o.appendChild(f(d));else o=f(d)}var c=o.cloneNode(!0);if(n){var h=f(c),m=c.lastChild;u(h,m)}else u(c,c);return c}}function X(e=""){if(!_){var t=y(e+"");return u(t,t),t}var r=l;return r.nodeType!==3&&(r.before(r=y()),w(r)),u(r,r),r}function Z(){if(_)return u(l,null),l;var e=document.createDocumentFragment(),t=document.createComment(""),r=y();return e.append(t,r),u(t,r),e}function ee(e,t){if(_){A.nodes_end=l,B();return}e!==null&&e.before(t)}function te(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function re(e){return $.includes(e)}const q={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function ae(e){return e=e.toLowerCase(),q[e]??e}const H=["touchstart","touchmove"];function ne(e){return H.includes(e)}const U="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(U);export{ee as a,X as b,F as c,Y as d,u as e,Z as f,k as g,W as h,ne as i,te as j,z as k,G as l,re as m,ae as n,Q as o,J as p,V as r,K as t};
