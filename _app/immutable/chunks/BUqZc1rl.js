import{j as ee,b as ae,a9 as J,k as H,h as x,i as re,d as ne,Y as X,aa as ie,t as fe,v as z,s as R,f as w,z as le,n as K,g as P,p as te,ab as S,D as Q,q as se,m as B,ac as M,ad as U,ae as y,X as ue,af as F,ag as ve,ah as de,C as _e,ai as he,o as oe,aj as ce,x as Ee,ak as ge}from"./BMLtCLay.js";function Ae(a,e,r,s){for(var v=[],_=e.length,u=0;u<_;u++)de(e[u].e,v,!0);var h=_>0&&v.length===0&&r!==null;if(h){var A=r.parentNode;_e(A),A.append(r),s.clear(),p(a,e[0].prev,e[_-1].next)}he(v,()=>{for(var c=0;c<_;c++){var d=e[c];h||(s.delete(d.k),p(a,d.prev,d.next)),oe(d.e,!h)}})}function pe(a,e,r,s,v,_=null){var u=a,h={flags:e,items:new Map,first:null},A=(e&J)!==0;if(A){var c=a;u=x?H(re(c)):c.appendChild(ee())}x&&ne();var d=null,b=!1,f=ie(()=>{var t=r();return ge(t)?t:t==null?[]:Q(t)});ae(()=>{var t=X(f),n=t.length;if(b&&n===0)return;b=n===0;let I=!1;if(x){var E=u.data===fe;E!==(n===0)&&(u=z(),H(u),R(!1),I=!0)}if(x){for(var g=null,T,o=0;o<n;o++){if(w.nodeType===8&&w.data===le){u=w,I=!0,R(!1);break}var i=t[o],l=s(i,o);T=Z(w,h,g,null,i,l,o,v,e,r),h.items.set(l,T),g=T}n>0&&H(z())}x||Te(t,h,u,v,e,s,r),_!==null&&(n===0?d?K(d):d=P(()=>_(u)):d!==null&&te(d,()=>{d=null})),I&&R(!0),X(f)}),x&&(u=w)}function Te(a,e,r,s,v,_,u){var O,q,W,Y;var h=(v&ve)!==0,A=(v&(M|y))!==0,c=a.length,d=e.items,b=e.first,f=b,t,n=null,I,E=[],g=[],T,o,i,l;if(h)for(l=0;l<c;l+=1)T=a[l],o=_(T,l),i=d.get(o),i!==void 0&&((O=i.a)==null||O.measure(),(I??(I=new Set)).add(i));for(l=0;l<c;l+=1){if(T=a[l],o=_(T,l),i=d.get(o),i===void 0){var $=f?f.e.nodes_start:r;n=Z($,e,n,n===null?e.first:n.next,T,o,l,s,v,u),d.set(o,n),E=[],g=[],f=n.next;continue}if(A&&Ie(i,T,l,v),(i.e.f&S)!==0&&(K(i.e),h&&((q=i.a)==null||q.unfix(),(I??(I=new Set)).delete(i))),i!==f){if(t!==void 0&&t.has(i)){if(E.length<g.length){var N=g[0],m;n=N.prev;var L=E[0],k=E[E.length-1];for(m=0;m<E.length;m+=1)G(E[m],N,r);for(m=0;m<g.length;m+=1)t.delete(g[m]);p(e,L.prev,k.next),p(e,n,L),p(e,k,N),f=N,n=k,l-=1,E=[],g=[]}else t.delete(i),G(i,f,r),p(e,i.prev,i.next),p(e,i,n===null?e.first:n.next),p(e,n,i),n=i;continue}for(E=[],g=[];f!==null&&f.k!==o;)(f.e.f&S)===0&&(t??(t=new Set)).add(f),g.push(f),f=f.next;if(f===null)continue;i=f}E.push(i),n=i,f=i.next}if(f!==null||t!==void 0){for(var C=t===void 0?[]:Q(t);f!==null;)(f.e.f&S)===0&&C.push(f),f=f.next;var D=C.length;if(D>0){var j=(v&J)!==0&&c===0?r:null;if(h){for(l=0;l<D;l+=1)(W=C[l].a)==null||W.measure();for(l=0;l<D;l+=1)(Y=C[l].a)==null||Y.fix()}Ae(e,C,j,d)}}h&&se(()=>{var V;if(I!==void 0)for(i of I)(V=i.a)==null||V.apply()}),B.first=e.first&&e.first.e,B.last=n&&n.e}function Ie(a,e,r,s){(s&M)!==0&&U(a.v,e),(s&y)!==0?U(a.i,r):a.i=r}function Z(a,e,r,s,v,_,u,h,A,c){var d=(A&M)!==0,b=(A&ce)===0,f=d?b?ue(v):F(v):v,t=(A&y)===0?u:F(u),n={i:t,v:f,k:_,a:null,e:null,prev:r,next:s};try{return n.e=P(()=>h(a,f,t,c),x),n.e.prev=r&&r.e,n.e.next=s&&s.e,r===null?e.first=n:(r.next=n,r.e.next=n.e),s!==null&&(s.prev=n,s.e.prev=n.e),n}finally{}}function G(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,v=e?e.e.nodes_start:r,_=a.e.nodes_start;_!==s;){var u=Ee(_);v.before(_),_=u}}function p(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}const xe=(a,e)=>!e||!a.startsWith(e)?a:a.substring(e.length),be=(a,e)=>!e||!a.endsWith(e)?a:a.substring(0,a.length-e.length),Ce=(a,e)=>a.endsWith(e)?a:a+e;export{Ce as a,be as b,pe as e,xe as s};
