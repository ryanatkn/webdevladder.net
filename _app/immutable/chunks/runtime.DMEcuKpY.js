const Sn=!1;var gn=Array.isArray,On=Array.from,Rn=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Nn=Object.prototype,kn=Array.prototype,Vt=Object.getPrototypeOf;function Dn(t){return typeof t=="function"}const xn=()=>{};function ft(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,_t=4,C=8,ct=16,I=32,Z=64,O=128,U=256,h=512,m=1024,M=2048,x=4096,H=8192,Gt=16384,vt=32768,Cn=65536,Kt=1<<18,pt=1<<19,ot=Symbol("$state"),qn=Symbol("");function ht(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Jt(t){throw new Error("effect_orphan")}function Wt(){throw new Error("effect_update_depth_exceeded")}function bn(){throw new Error("hydration_failed")}function Pn(t){throw new Error("props_invalid_value")}function Fn(){throw new Error("state_descriptors_fixed")}function Ln(){throw new Error("state_prototype_fixed")}function Xt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Mn(t){return tn(rt(t))}function Hn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function tn(t){return l!==null&&l.f&w&&(E===null?hn([t]):E.push(t)),t}function nn(t,n){return l!==null&&tt()&&l.f&w&&(E===null||!E.includes(t))&&Qt(),t.equals(n)||(t.v=n,t.version=Pt(),Et(t,m),tt()&&u!==null&&u.f&h&&!(u.f&I)&&(p!==null&&p.includes(t)?(y(u,m),J(u)):A===null?dn([t]):A.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),s=r.length,a=0;a<s;a++){var o=r[a],f=o.f;f&m||!e&&o===u||(y(o,n),f&(h|O)&&(f&w?Et(o,M):J(o)))}}const Yn=1,jn=2,Bn=4,Un=8,Vn=16,Gn=1,Kn=2,$n=4,Zn=8,zn=16,Jn=1,Wn=2,Xn=4,Qn=1,tr=2,rn="[",en="[!",sn="]",yt={},nr=Symbol(),rr="http://www.w3.org/2000/svg";function wt(t){console.warn("hydration_mismatch")}let g=!1;function er(t){g=t}let _;function P(t){if(t===null)throw wt(),yt;return _=t}function sr(){return P(R(_))}function ar(t){if(g){if(R(_)!==null)throw wt(),yt;_=t}}function or(t=1){if(g){for(var n=t,r=_;n--;)r=R(r);_=r}}function ur(){for(var t=0,n=_;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=R(n);n.remove(),n=e}}var ut,an,Tt,At;function lr(){if(ut===void 0){ut=window,an=document;var t=Element.prototype,n=Node.prototype;Tt=at(n,"firstChild").get,At=at(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function W(t){return Tt.call(t)}function R(t){return At.call(t)}function ir(t){if(!g)return W(t);var n=W(_);return n===null&&(n=_.appendChild(et())),P(n),n}function fr(t,n){if(!g){var r=W(t);return r instanceof Comment&&r.data===""?R(r):r}if(n&&(_==null?void 0:_.nodeType)!==3){var e=et();return _==null||_.before(e),P(e),e}return _}function _r(t,n=1,r=!1){let e=g?_:t;for(;n--;)e=R(e);if(!g)return e;var s=e.nodeType;if(r&&s!==3){var a=et();return e==null||e.before(a),P(a),a}return P(e),e}function cr(t){t.textContent=""}function mt(t){u===null&&l===null&&Jt(),l!==null&&l.f&O&&zt(),st&&Zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Z)!==0,a=u,o={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|m,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=k;try{lt(!0),z(o),o.f|=Gt}catch(T){throw Y(o),T}finally{lt(f)}}else n!==null&&J(o);var c=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&pt)===0;if(!c&&!s&&e&&(a!==null&&on(o,a),l!==null&&l.f&w)){var v=l;(v.children??(v.children=[])).push(o)}return o}function vr(t){const n=q(C,null,!1);return y(n,h),n.teardown=t,n}function pr(t){mt();var n=u!==null&&(u.f&C)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:l})}else{var e=It(t);return e}}function hr(t){return mt(),St(t)}function dr(t){const n=q(Z,t,!0);return()=>{Y(n)}}function It(t){return q(_t,t,!1)}function St(t){return q(C,t,!0)}function Er(t){return St(t)}function yr(t,n=0){return q(C|ct|n,t,!0)}function wr(t,n=!0){return q(C|I,t,!0,n)}function gt(t){var n=t.teardown;if(n!==null){const r=st,e=l;it(!0),K(null);try{n.call(null)}finally{it(r),K(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Lt(t,n&&!r),L(t,0),y(t,H);var o=t.transitions;if(o!==null)for(const c of o)c.stop();gt(t);var f=t.parent;f!==null&&f.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tr(t,n){var r=[];Rt(t,r,!0),un(r,()=>{Y(t),n&&n()})}function un(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Rt(t,n,r){if(!(t.f&x)){if(t.f^=x,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&I)!==0;Rt(e,n,a?r:!1),e=s}}}function Ar(t){Nt(t,!0)}function Nt(t,n){if(t.f&x){t.f^=x,j(t)&&z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&I)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const ln=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,X=[],Q=[];function kt(){V=!1;const t=X.slice();X=[],ft(t)}function Dt(){G=!1;const t=Q.slice();Q=[],ft(t)}function mr(t){V||(V=!0,queueMicrotask(kt)),X.push(t)}function Ir(t){G||(G=!0,ln(Dt)),Q.push(t)}function fn(){V&&kt(),G&&Dt()}function _n(t){let n=w|m;u===null?n|=O:u.f|=pt;const r={children:null,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(l!==null&&l.f&w){var e=l;(e.children??(e.children=[])).push(r)}return r}function Sr(t){const n=_n(t);return n.equals=dt,n}function xt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?cn(e):Y(e)}}}function Ct(t){var n,r=u;$(t.parent);try{xt(t),n=Ft(t)}finally{$(r)}var e=(N||t.f&O)&&t.deps!==null?M:h;y(t,e),t.equals(n)||(t.v=n,t.version=Pt())}function cn(t){xt(t),L(t,0),y(t,H),t.children=t.deps=t.reactions=t.fn=null}function vn(t){throw new Error("lifecycle_outside_component")}const qt=0,pn=1;let B=qt,F=!1,k=!1,st=!1;function lt(t){k=t}function it(t){st=t}let S=[],D=0;let l=null;function K(t){l=t}let u=null;function $(t){u=t}let E=null;function hn(t){E=t}let p=null,d=0,A=null;function dn(t){A=t}let bt=0,N=!1,i=null;function Pt(){return++bt}function tt(){return i!==null&&i.l===null}function j(t){var o,f;var n=t.f;if(n&m)return!0;if(n&M){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&Ct(a),e&&u!==null&&!N&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||y(t,h)}return!1}function En(t,n,r){throw t}function Ft(t){var T;var n=p,r=d,e=A,s=l,a=N,o=E;p=null,d=0,A=null,l=t.f&(I|Z)?null:t,N=!k&&(t.f&O)!==0,E=null;try{var f=(0,t.fn)(),c=t.deps;if(p!==null){var v;if(L(t,d),c!==null&&d>0)for(c.length=d+p.length,v=0;v<p.length;v++)c[d+v]=p[v];else t.deps=c=p;if(!N)for(v=d;v<c.length;v++)((T=c[v]).reactions??(T.reactions=[])).push(t)}else c!==null&&d<c.length&&(L(t,d),c.length=d);return f}finally{p=n,d=r,A=e,l=s,N=a,E=o}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(p===null||!p.includes(n))&&(y(n,M),n.f&(O|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function z(t){var n=t.f;if(!(n&H)){y(t,h);var r=u,e=i;u=t,i=t.ctx;try{n&ct||Lt(t),gt(t);var s=Ft(t);t.teardown=typeof s=="function"?s:null,t.version=bt}catch(a){En(a)}finally{u=r,i=e}}}function Mt(){D>1e3&&(D=0,Wt()),D++}function Ht(t){var n=t.length;if(n!==0){Mt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var a=[];Yt(s,a),wn(a)}}finally{k=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|x))&&j(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}}function Tn(){if(F=!1,D>1001)return;const t=S;S=[],Ht(t),F||(D=0)}function J(t){B===qt&&(F||(F=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|I)){if(!(r&h))return;n.f^=h}}S.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&I)!==0,o=a&&(s&h)!==0;if(!o&&!(s&x))if(s&C){a?r.f^=h:j(r)&&z(r);var f=r.first;if(f!==null){r=f;continue}}else s&_t&&e.push(r);var c=r.next;if(c===null){let b=r.parent;for(;b!==null;){if(t===b)break t;var v=b.next;if(v!==null){r=v;continue t}b=b.parent}}r=c}for(var T=0;T<e.length;T++)f=e[T],n.push(f),Yt(f,n)}function jt(t){var n=B,r=S;try{Mt();const s=[];B=pn,S=s,F=!1,Ht(r);var e=t==null?void 0:t();return fn(),(S.length>0||s.length>0)&&jt(),D=0,e}finally{B=n,S=r}}async function gr(){await Promise.resolve(),jt()}function An(t){var n=t.f;if(n&H)return t.v;if(l!==null){E!==null&&E.includes(t)&&Xt();var r=l.deps;p===null&&r!==null&&r[d]===t?d++:p===null?p=[t]:p.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&I)&&A.includes(t)&&(y(u,m),J(u))}if(n&w){var e=t;j(e)&&Ct(e)}return t.v}function Or(t){const n=l;try{return l=null,t()}finally{l=n}}const mn=~(m|M|h);function y(t,n){t.f=t.f&mn|n}function Rr(t){return Bt().get(t)}function Nr(t,n){return Bt().set(t,n),n}function Bt(t){return i===null&&vn(),i.c??(i.c=new Map(In(i)||void 0))}function In(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function kr(t,n=1){var r=+An(t);return nn(t,r+n),r}function Dr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:rt(!1)})}function xr(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const o=n.e;if(o!==null){var r=u,e=l;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];$(a.effect),K(a.reaction),It(a.fn)}}finally{$(r),K(e)}}i=n.p,n.m=!0}return t||{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ot in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ot in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{gn as $,yt as A,sn as B,wt as C,bn as D,vt as E,cr as F,On as G,en as H,dr as I,et as J,u as K,i as L,An as M,vr as N,Nr as O,Rr as P,tt as Q,Nn as R,ot as S,kn as T,rt as U,Fn as V,nn as W,nr as X,at as Y,Ln as Z,Vt as _,xr as a,Pn as a0,Cn as a1,$n as a2,dt as a3,Gn as a4,Kn as a5,Zn as a6,_n as a7,Sr as a8,zn as a9,vn as aA,pr as aB,hr as aC,gr as aD,an as aE,rr as aF,H as aG,$t as aH,Cr as aI,Sn as aJ,kr as aK,Hn as aa,Y as ab,xn as ac,Bn as ad,x as ae,Yn as af,jn as ag,Vn as ah,Rt as ai,un as aj,Un as ak,qn as al,Ut as am,Ir as an,ct as ao,Gt as ap,Jn as aq,Dn as ar,Wn as as,Xn as at,Mn as au,Rn as av,Kt as aw,Qn as ax,tr as ay,jt as az,St as b,ir as c,yr as d,It as e,fr as f,sr as g,g as h,ur as i,P as j,er as k,Ar as l,wr as m,or as n,Tr as o,Dr as p,mr as q,ar as r,_r as s,Er as t,Or as u,_ as v,lr as w,W as x,rn as y,R as z};