import{T as V,q as W,K as B,j as F,h as q,W as Z,n as b,X as P,Y as G,Z as K,_ as X,k as j,p as Q,a as z,O as J}from"./runtime.BwWrdJXt.js";function ee(e){console.warn("hydration_mismatch")}const fe=1,de=2,_e=4,he=8,pe=16,ve=64,me=1,Ee=2,Te=4,ye=8,ge=1,we=2,Ie=4,M=1,ne=2,R="[",te="[!",H="]",S={},Se=Symbol(),Ce=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],re=["touchstart","touchmove","touchend"],Ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Ne="http://www.w3.org/2000/svg";function be(e,n="exclude-on"){return e.endsWith("capture")?n=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let u=!1;function I(e){u=e}let i;function m(e){return i=e}function O(){return i=i.nextSibling}function Re(e){u&&(i=e)}function Oe(){u&&O()}function Le(){for(var e=0,n=i;;){if(n.nodeType===8){var t=n.data;if(t===H){if(e===0)return n;e-=1}else(t===R||t===te)&&(e+=1)}var o=n.nextSibling;n.remove(),n=o}}var D,ae;function k(){if(D===void 0){D=window,ae=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function E(){return document.createTextNode("")}function De(e){if(!u)return e.firstChild;var n=i.firstChild;return n===null&&(n=i.appendChild(E())),m(n),n}function Pe(e,n){if(!u){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}if(n&&(i==null?void 0:i.nodeType)!==3){var o=E();return i==null||i.before(o),m(o),o}return i}function Me(e,n=!1){if(!u)return e.nextSibling;var t=i.nextSibling,o=t.nodeType;if(n&&o!==3){var r=E();return t==null||t.before(r),m(r),r}return m(t),t}function oe(e){e.textContent=""}function ie(e,n,t,o){function r(a){if(o.capture||y.call(n,a),!a.cancelBubble)return t.call(this,a)}return e.startsWith("pointer")||e==="wheel"?W(()=>{n.addEventListener(e,r,o)}):n.addEventListener(e,r,o),r}function He(e,n,t,o,r){var a={capture:o,passive:r},s=ie(e,n,t,a);(n===document.body||n===window||n===document)&&V(()=>{n.removeEventListener(e,s,a)})}function ke(e){for(var n=0;n<e.length;n++)x.add(e[n]);for(var t of C)t(e)}function y(e){var L;var n=this,t=n.ownerDocument,o=e.type,r=((L=e.composedPath)==null?void 0:L.call(e))||[],a=r[0]||e.target,s=0,_=e.__root;if(_){var c=r.indexOf(_);if(c!==-1&&(n===document||n===window)){e.__root=n;return}var l=r.indexOf(n);if(l===-1)return;c<=l&&(s=c)}if(a=r[s]||e.target,a!==n){B(e,"currentTarget",{configurable:!0,get(){return a||t}});try{for(var v,f=[];a!==null;){var T=a.parentNode||a.host||null;try{var h=a["__"+o];if(h!==void 0&&!a.disabled)if(F(h)){var[g,...$]=h;g.apply(a,[e,...$])}else h.call(a,e)}catch(w){v?f.push(w):v=w}if(e.cancelBubble||T===n||T===null)break;a=T}if(v){for(let w of f)queueMicrotask(()=>{throw w});throw v}}finally{e.__root=n,a=n}}}let p;function se(){p=void 0}function Ue(e){let n=null,t=u;var o;if(u){for(n=i,p===void 0&&(p=document.head.firstChild);p.nodeType!==8||p.data!==R;)p=p.nextSibling;p=m(p.nextSibling)}else o=document.head.appendChild(E());try{q(()=>e(o),Z)}finally{t&&m(n)}}function U(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function d(e,n){var t;(t=b).nodes??(t.nodes={start:e,end:n})}function xe(e,n){var t=(n&M)!==0,o=(n&ne)!==0,r,a=!e.startsWith("<!>");return()=>{if(u)return d(i,null),i;r||(r=U(a?e:"<!>"+e),t||(r=r.firstChild));var s=o?document.importNode(r,!0):r.cloneNode(!0);if(t){var _=s.firstChild,c=s.lastChild;d(_,c)}else d(s,s);return s}}function Ye(e,n,t="svg"){var o=!e.startsWith("<!>"),r=(n&M)!==0,a=`<${t}>${o?e:"<!>"+e}</${t}>`,s;return()=>{if(u)return d(i,null),i;if(!s){var _=U(a),c=_.firstChild;if(r)for(s=document.createDocumentFragment();c.firstChild;)s.appendChild(c.firstChild);else s=c.firstChild}var l=s.cloneNode(!0);if(r){var v=l.firstChild,f=l.lastChild;d(v,f)}else d(l,l);return l}}function $e(){if(!u){var e=E();return d(e,e),e}var n=i;return n.nodeType!==3&&(n.before(n=E()),m(n)),d(n,n),n}function Ve(){if(u)return d(i,null),i;var e=document.createDocumentFragment(),n=document.createComment(""),t=E();return e.append(n,t),d(n,t),e}function We(e,n){if(u){b.nodes.end=i,O();return}e!==null&&e.before(n)}const x=new Set,C=new Set;let A=!0;function Be(e){A=e}function Fe(e,n){(e.__t??(e.__t=e.nodeValue))!==n&&(e.nodeValue=e.__t=n)}function ue(e,n){const t=n.anchor??n.target.appendChild(E());return P(()=>Y(e,{...n,anchor:t}),!1)}function qe(e,n){n.intro=n.intro??!1;const t=n.target,o=u;try{return P(()=>{for(var r=t.firstChild;r&&(r.nodeType!==8||r.data!==R);)r=r.nextSibling;if(!r)throw S;I(!0),m(r),O();const a=Y(e,{...n,anchor:r});if(i.nodeType!==8||i.data!==H)throw ee(),S;return I(!1),a},!1)}catch(r){if(r===S)return n.recover===!1&&G(),k(),oe(t),I(!1),ue(e,n);throw r}finally{I(o),se()}}function Y(e,{target:n,anchor:t,props:o={},events:r,context:a,intro:s=!0}){k();const _=new Set,c=f=>{for(let T=0;T<f.length;T++){const h=f[T],g=re.includes(h);_.has(h)||(_.add(h),n.addEventListener(h,y,{passive:g}),document.addEventListener(h,y,{passive:g}))}};c(K(x)),C.add(c);let l;const v=X(()=>(j(()=>{if(a){Q({});var f=J;f.c=a}r&&(o.$$events=r),u&&d(t,null),A=s,l=e(t,o)||{},A=!0,u&&(b.nodes.end=i),a&&z()}),()=>{for(const f of _)n.removeEventListener(f,y),document.removeEventListener(f,y);C.delete(c),N.delete(l)}));return N.set(l,v),l}let N=new WeakMap;function Ze(e){const n=N.get(e);n==null||n()}const ce="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);export{D as $,ie as A,ke as B,Ae as C,Ne as D,he as E,Ce as F,Ve as G,te as H,qe as I,ue as J,Ze as K,$e as L,Be as M,d as N,Oe as O,Te as P,A as Q,we as R,Ie as S,ge as T,Se as U,ee as V,S as W,U as X,Ue as Y,He as Z,ae as _,We as a,Me as b,De as c,me as d,Ee as e,Pe as f,ye as g,E as h,u as i,m as j,O as k,Le as l,I as m,Ye as n,i as o,H as p,fe as q,Re as r,Fe as s,xe as t,de as u,ve as v,oe as w,pe as x,_e as y,be as z};