_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"94VV":function(e,t,n){e.exports={navbar:"Nav_navbar__3WUPJ",menu:"Nav_menu__-y5zM",item:"Nav_item__3QrC4",cantos:"Nav_cantos__tMqIl",logo:"Nav_logo__11byI"}},IDYa:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("nKUr"),r=n("94VV"),c=n.n(r),o=n("YFqc"),s=n.n(o);function i(){return Object(a.jsxs)("nav",{className:c.a.navbar,children:[Object(a.jsx)("div",{className:c.a.cantos,children:Object(a.jsx)(s.a,{href:"/",children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{className:c.a.logo,src:"/icon/safari-pinned-tab.svg",width:50,height:50})})})}),Object(a.jsxs)("div",{className:c.a.menu,children:[Object(a.jsx)(s.a,{href:"/",children:Object(a.jsx)("a",{className:c.a.item,children:"Home"})}),Object(a.jsx)(s.a,{href:"https://github.com/PIGDevUff/PigDev",children:Object(a.jsx)("a",{className:c.a.item,target:"blank",children:"Downloads"})}),Object(a.jsx)(s.a,{href:"/docs",children:Object(a.jsx)("a",{className:c.a.item,children:"Documenta\xe7\xe3o"})}),Object(a.jsx)(s.a,{href:"/tutorial",children:Object(a.jsx)("a",{className:c.a.item,children:"Tutorial"})}),Object(a.jsx)(s.a,{href:"/install",children:Object(a.jsx)("a",{className:c.a.item,children:"Instala\xe7\xe3o"})})]}),Object(a.jsx)("div",{className:c.a.cantos})]})}},YD4I:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return n("bNlt")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},bNlt:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("nKUr"),r=n("IDYa");function c(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(r.a,{}),Object(a.jsx)("h1",{children:"Downloads"})]})}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var c=r(n("q1tI")),o=n("elyg"),s=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,a){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,o.resolveHref)(r,e.href,!0),n=a(t,2),c=n[0],s=n[1];return{href:c,as:e.as?(0,o.resolveHref)(r,e.as):s||c}}),[r,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,b=e.shallow,j=e.scroll,m=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var _=c.Children.only(h),N=_&&"object"===typeof _&&_.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),g=a(O,2),x=g[0],y=g[1],w=c.default.useCallback((function(e){x(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[N,x]);(0,c.useEffect)((function(){var e=y&&t&&(0,o.isLocalURL)(d),a="undefined"!==typeof m?m:n&&n.locale,r=l[d+"%"+v+(a?"%"+a:"")];e&&!r&&u(n,d,v,{locale:a})}),[v,d,y,m,t,n]);var E={ref:w,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,c,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:c,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,d,v,p,b,j,m)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(n,d,v,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var I="undefined"!==typeof m?m:n&&n.locale,M=(0,o.getDomainLocale)(v,I,n&&n.locales,n&&n.domainLocales);E.href=M||(0,o.addBasePath)((0,o.addLocale)(v,I,n&&n.defaultLocale))}return c.default.cloneElement(_,E)};t.default=f},vNVm:function(e,t,n){"use strict";var a=n("J4zp"),r=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,r=(0,c.useRef)(),l=(0,c.useState)(!1),u=a(l,2),f=u[0],d=u[1],v=(0,c.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||f||e&&e.tagName&&(r.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,c=a.observer,o=a.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){s||f||(0,o.default)((function(){return d(!0)}))}),[f]),[v,f]};var c=n("q1tI"),o=r(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map}},[["YD4I",0,2,1]]]);