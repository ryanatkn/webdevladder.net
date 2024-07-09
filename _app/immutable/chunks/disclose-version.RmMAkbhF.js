import{N as W,q as Y,C as B,i as F,b as q,T as G,e as N,U as P,V as X,W as K,X as Q,c as Z,p as j,a as z,H as J}from"./runtime.4uQF3gsJ.js";function ee(e){console.warn("hydration_mismatch")}const fe=1,de=2,_e=4,he=8,pe=16,ve=64,me=1,Ee=2,Te=4,ye=8,ge=1,Ie=2,we=4,H=1,ne=2,b="[",te="[!",M="]",S={},Se=Symbol(),Ce=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],re=["touchstart","touchmove","touchend"],Ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ne(e,n="exclude-on"){return e.endsWith("capture")?n=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let u=!1;function w(e){u=e}let i;function m(e){return i=e}function R(){return i=i.nextSibling}function be(e){u&&(i=e)}function Re(){u&&R()}function Oe(){for(var e=0,n=i;;){if(n.nodeType===8){var t=n.data;if(t===M){if(e===0)return n;e-=1}else(t===b||t===te)&&(e+=1)}var o=n.nextSibling;n.remove(),n=o}}var L,ae;function k(){if(L===void 0){L=window,ae=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function E(){return document.createTextNode("")}function Le(e){if(!u)return e.firstChild;var n=i.firstChild;return n===null&&(n=i.appendChild(E())),m(n),n}function De(e,n){if(!u){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}if(n&&(i==null?void 0:i.nodeType)!==3){var o=E();return i==null||i.before(o),m(o),o}return i}function Pe(e,n=!1){if(!u)return e.nextSibling;var t=i.nextSibling,o=t.nodeType;if(n&&o!==3){var r=E();return t==null||t.before(r),m(r),r}return m(t),t}function oe(e){e.textContent=""}function ie(e,n,t,o){function r(a){if(o.capture||y.call(n,a),!a.cancelBubble)return t.call(this,a)}return e.startsWith("pointer")||e==="wheel"?Y(()=>{n.addEventListener(e,r,o)}):n.addEventListener(e,r,o),r}function He(e,n,t,o,r){var a={capture:o,passive:r},s=ie(e,n,t,a);(n===document.body||n===window||n===document)&&W(()=>{n.removeEventListener(e,s,a)})}function Me(e){for(var n=0;n<e.length;n++)x.add(e[n]);for(var t of C)t(e)}function y(e){var O;var n=this,t=n.ownerDocument,o=e.type,r=((O=e.composedPath)==null?void 0:O.call(e))||[],a=r[0]||e.target,s=0,_=e.__root;if(_){var c=r.indexOf(_);if(c!==-1&&(n===document||n===window)){e.__root=n;return}var l=r.indexOf(n);if(l===-1)return;c<=l&&(s=c)}if(a=r[s]||e.target,a!==n){B(e,"currentTarget",{configurable:!0,get(){return a||t}});try{for(var v,f=[];a!==null;){var T=a.parentNode||a.host||null;try{var h=a["__"+o];if(h!==void 0&&!a.disabled)if(F(h)){var[g,...$]=h;g.apply(a,[e,...$])}else h.call(a,e)}catch(I){v?f.push(I):v=I}if(e.cancelBubble||T===n||T===null)break;a=T}if(v){for(let I of f)queueMicrotask(()=>{throw I});throw v}}finally{e.__root=n,a=n}}}let p;function se(){p=void 0}function ke(e){let n=null,t=u;var o;if(u){for(n=i,p===void 0&&(p=document.head.firstChild);p.nodeType!==8||p.data!==b;)p=p.nextSibling;p=m(p.nextSibling)}else o=document.head.appendChild(E());try{q(()=>e(o),G)}finally{t&&m(n)}}function U(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function d(e,n){var t;(t=N).nodes??(t.nodes={start:e,end:n})}function Ue(e,n){var t=(n&H)!==0,o=(n&ne)!==0,r,a=!e.startsWith("<!>");return()=>{if(u)return d(i,null),i;r||(r=U(a?e:"<!>"+e),t||(r=r.firstChild));var s=o?document.importNode(r,!0):r.cloneNode(!0);if(t){var _=s.firstChild,c=s.lastChild;d(_,c)}else d(s,s);return s}}function xe(e,n,t="svg"){var o=!e.startsWith("<!>"),r=(n&H)!==0,a=`<${t}>${o?e:"<!>"+e}</${t}>`,s;return()=>{if(u)return d(i,null),i;if(!s){var _=U(a),c=_.firstChild;if(r)for(s=document.createDocumentFragment();c.firstChild;)s.appendChild(c.firstChild);else s=c.firstChild}var l=s.cloneNode(!0);if(r){var v=l.firstChild,f=l.lastChild;d(v,f)}else d(l,l);return l}}function Ve(){if(!u){var e=E();return d(e,e),e}var n=i;return n.nodeType!==3&&(n.before(n=E()),m(n)),d(n,n),n}function $e(){if(u)return d(i,null),i;var e=document.createDocumentFragment(),n=document.createComment(""),t=E();return e.append(n,t),d(n,t),e}function We(e,n){if(u){N.nodes.end=i,R();return}e!==null&&e.before(n)}const x=new Set,C=new Set;let D=!0;function Ye(e,n){(e.__t??(e.__t=e.nodeValue))!==n&&(e.nodeValue=e.__t=n)}function ue(e,n){const t=n.anchor??n.target.appendChild(E());return P(()=>V(e,{...n,anchor:t}),!1)}function Be(e,n){n.intro=n.intro??!1;const t=n.target,o=u;try{return P(()=>{for(var r=t.firstChild;r&&(r.nodeType!==8||r.data!==b);)r=r.nextSibling;if(!r)throw S;w(!0),m(r),R();const a=V(e,{...n,anchor:r});if(i.nodeType!==8||i.data!==M)throw ee(),S;return w(!1),a},!1)}catch(r){if(r===S)return n.recover===!1&&X(),k(),oe(t),w(!1),ue(e,n);throw r}finally{w(o),se()}}function V(e,{target:n,anchor:t,props:o={},events:r,context:a,intro:s=!0}){k();const _=new Set,c=f=>{for(let T=0;T<f.length;T++){const h=f[T],g=re.includes(h);_.has(h)||(_.add(h),n.addEventListener(h,y,{passive:g}),document.addEventListener(h,y,{passive:g}))}};c(K(x)),C.add(c);let l;const v=Q(()=>(Z(()=>{if(a){j({});var f=J;f.c=a}r&&(o.$$events=r),u&&d(t,null),D=s,l=e(t,o)||{},D=!0,u&&(N.nodes.end=i),a&&z()}),()=>{for(const f of _)n.removeEventListener(f,y),document.removeEventListener(f,y);C.delete(c),A.delete(l)}));return A.set(l,v),l}let A=new WeakMap;function Fe(e){const n=A.get(e);n==null||n()}const ce="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);export{L as $,Ne as A,ie as B,Me as C,Ae as D,he as E,Ce as F,Be as G,te as H,ue as I,Fe as J,$e as K,Ve as L,D as M,Ie as N,we as O,Te as P,ee as Q,S as R,d as S,ge as T,Se as U,U as V,ke as W,He as X,ae as Y,We as a,Pe as b,Le as c,m as d,E as e,De as f,R as g,u as h,Oe as i,w as j,i as k,M as l,fe as m,de as n,ve as o,oe as p,pe as q,be as r,Ye as s,Ue as t,_e as u,me as v,Ee as w,ye as x,xe as y,Re as z};
