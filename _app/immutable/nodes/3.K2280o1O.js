import{s as $,f as _,l as h,g as v,h as g,m as d,d as u,j as b,i as w,u as c,n as x,A as E,x as S}from"../chunks/scheduler.fHUatWhO.js";import{S as j,i as q}from"../chunks/index.-ldY5RpZ.js";import{p as y}from"../chunks/stores.zdDfz029.js";function A(i){var f;let e,t,s=i[0].status+"",n,p,l=((f=i[0].error)==null?void 0:f.message)+"",m;return{c(){e=_("div"),t=_("h1"),n=h(s),p=h(" | "),m=h(l),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=g(e);t=v(r,"H1",{});var o=g(t);n=d(o,s),p=d(o," | "),m=d(o,l),o.forEach(u),r.forEach(u),this.h()},h(){b(e,"class","main svelte-1iwd6ow")},m(a,r){w(a,e,r),c(e,t),c(t,n),c(t,p),c(t,m)},p(a,[r]){var o;r&1&&s!==(s=a[0].status+"")&&x(n,s),r&1&&l!==(l=((o=a[0].error)==null?void 0:o.message)+"")&&x(m,l)},i:E,o:E,d(a){a&&u(e)}}}function C(i,e,t){let s;return S(i,y,n=>t(0,s=n)),[s]}class V extends j{constructor(e){super(),q(this,e,C,A,$,{})}}export{V as component};
