import{S as E,i as $,s as q,k as f,q as m,l as v,m as g,r as p,h as u,n as w,b as x,D as c,u as b,B as y,G as D}from"../../chunks/index-d76343ca.js";import{p as S}from"../../chunks/stores-0b713eab.js";function k(l){var d;let e,t,s=l[0].status+"",o,h,i=((d=l[0].error)==null?void 0:d.message)+"",_;return{c(){e=f("div"),t=f("h1"),o=m(s),h=m(" | "),_=m(i),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=g(e);t=v(r,"H1",{});var n=g(t);o=p(n,s),h=p(n," | "),_=p(n,i),n.forEach(u),r.forEach(u),this.h()},h(){w(e,"class","main svelte-1iwd6ow")},m(a,r){x(a,e,r),c(e,t),c(t,o),c(t,h),c(t,_)},p(a,[r]){var n;r&1&&s!==(s=a[0].status+"")&&b(o,s),r&1&&i!==(i=((n=a[0].error)==null?void 0:n.message)+"")&&b(_,i)},i:y,o:y,d(a){a&&u(e)}}}function B(l,e,t){let s;return D(l,S,o=>t(0,s=o)),[s]}class H extends E{constructor(e){super(),$(this,e,B,k,q,{})}}export{H as default};