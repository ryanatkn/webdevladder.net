import{x as $,h as j,y as J,i as N,o as S,j as ee,v as ae,z as re,A as K,B as ne,C as U,D as k,l as R,F as le,G as P,k as Q,I as fe,J as ie,q as ue,K as Y,L,M as z,N as O,O as se,P as te,Q as F,R as ve,T as _e,U as de,w as ce,V as oe,m as he}from"./runtime.DXydPg0t.js";let D=null;function Ie(l){D=l}function xe(l,e){return e}function Ee(l,e,a,s){for(var v=[],_=e.length,u=0;u<_;u++)ve(e[u].e,v,!0);var A=_>0&&v.length===0&&a!==null;if(A){var E=a.parentNode;_e(E),E.append(a),s.clear(),C(l,e[0].prev,e[_-1].next)}de(v,()=>{for(var o=0;o<_;o++){var d=e[o];A||(s.delete(d.k),C(l,d.prev,d.next)),ce(d.e,!A)}})}function Ce(l,e,a,s,v,_=null){var u=l,A={flags:e,items:new Map,first:null},E=(e&J)!==0;if(E){var o=l;u=N?S(ae(o)):o.appendChild($())}N&&ee();var d=null;j(()=>{var n=a(),c=re(n)?n:n==null?[]:K(n),f=c.length;let t=!1;if(N){var p=u.data===ne;p!==(f===0)&&(u=U(),S(u),k(!1),t=!0)}if(N){for(var T=null,I,h=0;h<f;h++){if(R.nodeType===8&&R.data===le){u=R,t=!0,k(!1);break}var r=c[h],i=s(r,h);I=X(R,A,T,null,r,i,h,v,e),A.items.set(i,I),T=I}f>0&&S(U())}N||pe(c,A,u,v,e,s),_!==null&&(f===0?d?P(d):d=Q(()=>_(u)):d!==null&&fe(d,()=>{d=null})),t&&k(!0)}),N&&(u=R)}function pe(l,e,a,s,v,_){var y,V,m,q;var u=(v&oe)!==0,A=(v&(L|O))!==0,E=l.length,o=e.items,d=e.first,n=d,c,f=null,t,p=[],T=[],I,h,r,i;if(u)for(i=0;i<E;i+=1)I=l[i],h=_(I,i),r=o.get(h),r!==void 0&&((y=r.a)==null||y.measure(),(t??(t=new Set)).add(r));for(i=0;i<E;i+=1){if(I=l[i],h=_(I,i),r=o.get(h),r===void 0){var W=n?n.e.nodes_start:a;f=X(W,e,f,f===null?e.first:f.next,I,h,i,s,v),o.set(h,f),p=[],T=[],n=f.next;continue}if(A&&Ae(r,I,i,v),r.e.f&ie&&(P(r.e),u&&((V=r.a)==null||V.unfix(),(t??(t=new Set)).delete(r))),r!==n){if(c!==void 0&&c.has(r)){if(p.length<T.length){var g=T[0],x;f=g.prev;var b=p[0],H=p[p.length-1];for(x=0;x<p.length;x+=1)G(p[x],g,a);for(x=0;x<T.length;x+=1)c.delete(T[x]);C(e,b.prev,H.next),C(e,f,b),C(e,H,g),n=g,f=H,i-=1,p=[],T=[]}else c.delete(r),G(r,n,a),C(e,r.prev,r.next),C(e,r,f===null?e.first:f.next),C(e,f,r),f=r;continue}for(p=[],T=[];n!==null&&n.k!==h;)(c??(c=new Set)).add(n),T.push(n),n=n.next;if(n===null)continue;r=n}p.push(r),f=r,n=r.next}if(n!==null||c!==void 0){for(var w=c===void 0?[]:K(c);n!==null;)w.push(n),n=n.next;var M=w.length;if(M>0){var Z=v&J&&E===0?a:null;if(u){for(i=0;i<M;i+=1)(m=w[i].a)==null||m.measure();for(i=0;i<M;i+=1)(q=w[i].a)==null||q.fix()}Ee(e,w,Z,o)}}u&&ue(()=>{var B;if(t!==void 0)for(r of t)(B=r.a)==null||B.apply()}),Y.first=e.first&&e.first.e,Y.last=f&&f.e}function Ae(l,e,a,s){s&L&&z(l.v,e),s&O?z(l.i,a):l.i=a}function X(l,e,a,s,v,_,u,A,E){var o=D;try{var d=(E&L)!==0,n=(E&se)===0,c=d?n?te(v):F(v):v,f=E&O?F(u):u,t={i:f,v:c,k:_,a:null,e:null,prev:a,next:s};return D=t,t.e=Q(()=>A(l,c,f),N),t.e.prev=a&&a.e,t.e.next=s&&s.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),s!==null&&(s.prev=t,s.e.prev=t.e),t}finally{D=o}}function G(l,e,a){for(var s=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==s;){var u=he(_);v.before(_),_=u}}function C(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{D as c,Ce as e,xe as i,Ie as s};
