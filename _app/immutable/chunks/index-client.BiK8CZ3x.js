import{y as O,S as M,z as r,H as S,J as T,K as g,o as m,j as D,e as o,b as w,g as y,n as E,u as b,F as I,M as N,N as j,q as k,O as h,P as R,Q as A}from"./runtime.BwWrdJXt.js";import{U as d}from"./disclose-version.DGruO7X3.js";function _(e,n=null,s){if(typeof e=="object"&&e!=null&&!O(e)&&!(M in e)){if(r in e){const t=e[r];if(t.t===e||t.p===e)return t.p}const i=I(e);if(i===S||i===T){const t=new Proxy(e,K);return g(e,r,{value:{s:new Map,v:m(0),a:D(e),p:t,t:e},writable:!0,enumerable:!1}),t}}return e}function x(e,n=1){o(e,e.v+n)}const K={defineProperty(e,n,s){if(s.value){const i=e[r],t=i.s.get(n);t!==void 0&&o(t,_(s.value,i))}return Reflect.defineProperty(e,n,s)},deleteProperty(e,n){const s=e[r],i=s.s.get(n),t=s.a,f=delete e[n];if(t&&f){const a=s.s.get("length"),l=e.length-1;a!==void 0&&a.v!==l&&o(a,l)}return i!==void 0&&o(i,d),f&&x(s.v),f},get(e,n,s){var f;if(n===r)return Reflect.get(e,r);const i=e[r];let t=i.s.get(n);if(t===void 0&&(!(n in e)||(f=w(e,n))!=null&&f.writable)&&(t=m(_(e[n],i)),i.s.set(n,t)),t!==void 0){const a=y(t);return a===d?void 0:a}return Reflect.get(e,n,s)},getOwnPropertyDescriptor(e,n){const s=Reflect.getOwnPropertyDescriptor(e,n);if(s&&"value"in s){const t=e[r].s.get(n);t&&(s.value=y(t))}return s},has(e,n){var f;if(n===r)return!0;const s=e[r],i=Reflect.has(e,n);let t=s.s.get(n);return(t!==void 0||E!==null&&(!i||(f=w(e,n))!=null&&f.writable))&&(t===void 0&&(t=m(i?_(e[n],s):d),s.s.set(n,t)),y(t)===d)?!1:i},set(e,n,s,i){const t=e[r];let f=t.s.get(n);f===void 0&&(b(()=>i[n]),f=t.s.get(n)),f!==void 0&&o(f,_(s,t));const a=t.a,l=!(n in e);if(a&&n==="length")for(let c=s;c<e.length;c+=1){const u=t.s.get(c+"");u!==void 0&&o(u,d)}if(e[n]=s,l){if(a){const c=t.s.get("length"),u=e.length;c!==void 0&&c.v!==u&&o(c,u)}x(t.v)}return!0},ownKeys(e){const n=e[r];return y(n.v),Reflect.ownKeys(e)}};function P(e,n){var i;var s=e&&((i=e[r])==null?void 0:i.t);return e===n||s===n}function B(e={},n,s,i){N(()=>{var t,f;return j(()=>{t=f,f=(i==null?void 0:i())||[],b(()=>{e!==s(...f)&&(n(e,...f),t&&P(s(...t),e)&&n(null,...t))})}),()=>{k(()=>{f&&P(s(...f),e)&&n(null,...f)})}})}function L(e){h===null&&R(),h.l!==null?q(h).m.push(e):A(()=>{const n=b(e);if(typeof n=="function")return n})}function F(e){h===null&&R(),L(()=>()=>b(e))}function q(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{F as a,B as b,L as o,_ as p};