import{U as h,P as U,I as q,J as B,K,L as j}from"./disclose-version.BYBXgRTm.js";import{C as z,S as u,D as Y,F as C,G,l as w,i as J,k as _,H as g,z as o,j as Z,u as T,J as $,K as F,L as H,M as V,A as L,N as k,m as Q}from"./runtime.DaMnY2TH.js";function I(e,n=null,r){if(typeof e=="object"&&e!=null&&!z(e)){if(u in e){const t=e[u];if(t.t===e||t.p===e)return t.p}const s=$(e);if(s===Y||s===C){const t=new Proxy(e,W);return G(e,u,{value:{s:new Map,v:w(0),a:J(e),p:t,t:e},writable:!0,enumerable:!1}),t}}return e}function N(e,n=1){_(e,e.v+n)}const W={defineProperty(e,n,r){if(r.value){const s=e[u],t=s.s.get(n);t!==void 0&&_(t,I(r.value,s))}return Reflect.defineProperty(e,n,r)},deleteProperty(e,n){const r=e[u],s=r.s.get(n),t=r.a,a=delete e[n];if(t&&a){const d=r.s.get("length"),v=e.length-1;d!==void 0&&d.v!==v&&_(d,v)}return s!==void 0&&_(s,h),a&&N(r.v),a},get(e,n,r){var a;if(n===u)return Reflect.get(e,u);const s=e[u];let t=s.s.get(n);if(t===void 0&&(!(n in e)||(a=g(e,n))!=null&&a.writable)&&(t=w(I(e[n],s)),s.s.set(n,t)),t!==void 0){const d=o(t);return d===h?void 0:d}return Reflect.get(e,n,r)},getOwnPropertyDescriptor(e,n){const r=Reflect.getOwnPropertyDescriptor(e,n);if(r&&"value"in r){const t=e[u].s.get(n);t&&(r.value=o(t))}return r},has(e,n){var a;if(n===u)return!0;const r=e[u],s=Reflect.has(e,n);let t=r.s.get(n);return(t!==void 0||Z!==null&&(!s||(a=g(e,n))!=null&&a.writable))&&(t===void 0&&(t=w(s?I(e[n],r):h),r.s.set(n,t)),o(t)===h)?!1:s},set(e,n,r,s){const t=e[u];let a=t.s.get(n);a===void 0&&(T(()=>s[n]),a=t.s.get(n)),a!==void 0&&_(a,I(r,t));const d=t.a,v=!(n in e);if(d&&n==="length")for(let f=r;f<e.length;f+=1){const l=t.s.get(f+"");l!==void 0&&_(l,h)}var c=Reflect.getOwnPropertyDescriptor(e,n);if(c!=null&&c.set?c.set.call(s,r):e[n]=r,v){if(d){const f=t.s.get("length"),l=e.length;f!==void 0&&f.v!==l&&_(f,l)}N(t.v)}return!0},ownKeys(e){const n=e[u];return o(n.v),Reflect.ownKeys(e)}};function ee(e,n,r,s){var A;var t=(r&q)!==0,a=(r&B)!==0,d=(r&K)!==0,v=(r&j)!==0,c=e[n],f=(A=g(e,n))==null?void 0:A.set,l=s,R=!0,D=()=>(v&&R&&(R=!1,l=T(s)),l);c===void 0&&s!==void 0&&(f&&a&&F(),c=D(),f&&f(c));var y;if(a)y=()=>{var i=e[n];return i===void 0?D():(R=!0,i)};else{var O=(t?L:k)(()=>e[n]);O.f|=H,y=()=>{var i=o(O);return i!==void 0&&(l=void 0),i===void 0?l:i}}if(!(r&U))return y;if(f){var x=e.$$legacy;return function(i,P){return arguments.length>0?((!a||!P||x)&&f(P?y():i),i):y()}}var S=!1,b=Q(c),m=L(()=>{var i=y(),P=o(b);return S?(S=!1,P):b.v=i});return t||(m.equals=V),function(i,P){var M=o(m);if(arguments.length>0){const E=P?o(m):a&&d?I(i):i;return m.equals(E)||(S=!0,_(b,E),o(m)),i}return M}}export{I as a,ee as p};
