import{G as P,i as M,q as x,b as H,$ as k,j as N}from"./runtime.DaMnY2TH.js";function y(e){console.warn("hydration_mismatch")}const X=1,J=2,K=4,Q=8,ee=16,te=1,ne=2,re=4,ae=8,ie=16,oe=1,se=2,ue=4,g=1,B=2,C="[",U="[!",V="]",b={},ce=Symbol(),le="http://www.w3.org/2000/svg";let u=!1;function A(e){u=e}let r;function _(e){if(e===null)throw y(),b;return r=e}function R(){return _(r.nextSibling)}function fe(e){if(u){if(r.nextSibling!==null)throw y(),b;r=e}}function de(){u&&R()}function _e(){for(var e=0,t=r;;){if(t.nodeType===8){var n=t.data;if(n===V){if(e===0)return t;e-=1}else(n===C||n===U)&&(e+=1)}var i=t.nextSibling;t.remove(),t=i}}var w,$;function he(){if(w===void 0){w=window,$=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function h(){return document.createTextNode("")}function pe(e){if(!u)return e.firstChild;var t=r.firstChild;return t===null&&(t=r.appendChild(h())),_(t),t}function ve(e,t){if(!u){var n=e.firstChild;return n instanceof Comment&&n.data===""?n.nextSibling:n}if(t&&(r==null?void 0:r.nodeType)!==3){var i=h();return r==null||r.before(i),_(i),i}return r}function me(e,t=!1){if(!u)return e.nextSibling;var n=r.nextSibling,i=n.nodeType;if(t&&i!==3){var a=h();return n==null||n.before(a),_(a),a}return _(n),n}function Ee(e){e.textContent=""}const F=new Set,G=new Set;function Te(e,t,n,i){function a(o){if(i.capture||W.call(t,o),!o.cancelBubble)return n.call(this,o)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?x(()=>{t.addEventListener(e,a,i)}):t.addEventListener(e,a,i),a}function Ie(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var n of G)n(e)}function W(e){var S;var t=this,n=t.ownerDocument,i=e.type,a=((S=e.composedPath)==null?void 0:S.call(e))||[],o=a[0]||e.target,s=0,p=e.__root;if(p){var f=a.indexOf(p);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var d=a.indexOf(t);if(d===-1)return;f<=d&&(s=f)}if(o=a[s]||e.target,o!==t){P(e,"currentTarget",{configurable:!0,get(){return o||n}});try{for(var v,m=[];o!==null;){var I=o.parentNode||o.host||null;try{var E=o["__"+i];if(E!==void 0&&!o.disabled)if(M(E)){var[L,...D]=E;L.apply(o,[e,...D])}else E.call(o,e)}catch(T){v?m.push(T):v=T}if(e.cancelBubble||I===t||I===null)break;o=I}if(v){for(let T of m)queueMicrotask(()=>{throw T});throw v}}finally{e.__root=t,o=t}}}let c;function Se(){c=void 0}function Ae(e){let t=null,n=u;var i;if(u){for(t=r,c===void 0&&(c=document.head.firstChild);c!==null&&(c.nodeType!==8||c.data!==C);)c=c.nextSibling;c===null?A(!1):c=_(c.nextSibling)}u||(i=document.head.appendChild(h()));try{H(()=>e(i),k)}finally{n&&(A(!0),c=r,_(t))}}function O(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function l(e,t){var n;(n=N).nodes??(n.nodes={start:e,end:t})}function we(e,t){var n=(t&g)!==0,i=(t&B)!==0,a,o=!e.startsWith("<!>");return()=>{if(u)return l(r,null),r;a||(a=O(o?e:"<!>"+e),n||(a=a.firstChild));var s=i?document.importNode(a,!0):a.cloneNode(!0);if(n){var p=s.firstChild,f=s.lastChild;l(p,f)}else l(s,s);return s}}function Ne(e,t,n="svg"){var i=!e.startsWith("<!>"),a=(t&g)!==0,o=`<${n}>${i?e:"<!>"+e}</${n}>`,s;return()=>{if(u)return l(r,null),r;if(!s){var p=O(o),f=p.firstChild;if(a)for(s=document.createDocumentFragment();f.firstChild;)s.appendChild(f.firstChild);else s=f.firstChild}var d=s.cloneNode(!0);if(a){var v=d.firstChild,m=d.lastChild;l(v,m)}else l(d,d);return d}}function ye(){if(!u){var e=h();return l(e,e),e}var t=r;return t.nodeType!==3&&(t.before(t=h()),_(t)),l(t,t),t}function ge(){if(u)return l(r,null),r;var e=document.createDocumentFragment(),t=document.createComment(""),n=h();return e.append(t,n),l(t,n),e}function Ce(e,t){if(u){N.nodes.end=r,R();return}e!==null&&e.before(t)}function be(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Y=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Re(e){return Y.includes(e)}const q={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Oe(e){return e=e.toLowerCase(),q[e]??e}const Z=["wheel","touchstart","touchmove","touchend","touchcancel"];function Le(e){return Z.includes(e)}const j="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(j);export{$,G as A,Se as B,W as C,Le as D,K as E,Ne as F,ge as G,b as H,te as I,ne as J,ae as K,ie as L,be as M,Te as N,Ie as O,re as P,Oe as Q,le as R,Re as S,oe as T,ce as U,se as V,ue as W,ye as X,de as Y,Ae as Z,Ce as a,r as b,pe as c,R as d,y as e,ve as f,l as g,u as h,_ as i,O as j,h as k,U as l,_e as m,A as n,V as o,X as p,J as q,fe as r,me as s,we as t,ee as u,Ee as v,Q as w,C as x,he as y,F as z};