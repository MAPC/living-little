!function(){"use strict";var e,t,n,r,o,c,a,f={},u={};function i(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return f[e].call(n.exports,n,n.exports,i),n.exports}i.m=f,e=[],i.O=function(t,n,r,o){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var a=!0,f=0;f<n.length;f++)(!1&o||c>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[f])}))?n.splice(f--,1):(a=!1,o<c&&(c=o));if(a){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},i.d(o,c),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({112:"a9a7754c",141:"2ecbc78a3386327facbf37dafce34fd0da4495c7",185:"component---src-pages-cottage-jsx",191:"component---src-pages-mixeduse-jsx",230:"component---src-pages-index-jsx",251:"component---src-pages-adu-jsx",256:"component---src-pages-404-jsx",351:"commons",354:"component---src-pages-about-jsx",523:"cb1608f2",532:"styles",608:"component---src-pages-townhouse-jsx",713:"component---src-templates-using-dsg-js",725:"component---src-pages-cohousing-jsx",857:"component---src-pages-tinyhouse-jsx",941:"component---src-pages-sfc-jsx"}[e]||e)+"-"+{112:"9c62b3ad5493ac41742e",141:"19383c5997c22ec5bda7",175:"4f5eec3dd4c4a5e05eef",185:"f3151afa35351427c605",191:"9b423054083f940f8111",230:"7665708abd8d653451e2",231:"b2d35ff9bb1952aa22d1",251:"c8e7697fcbc294228439",256:"aa9b61e386bf4b109ab9",351:"df4b9b0eccc700141d1e",354:"a76fa5848ca5ffd4dbb9",503:"b802c0d13bba191fe982",523:"9339146b097abf69035f",532:"355f3a4a5b234877dc92",608:"526dad1321b23481b538",713:"f031b4995908915c9ff0",725:"22e6ffaa0e137eef02d3",857:"d2f9a1a78280bdc68756",941:"2efcbaf9036f079e5903"}[e]+".js"},i.miniCssF=function(e){return"styles.f5a3b0c6d800bca4f58d.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-default:",i.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var a,f;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){a=d;break}}a||(f=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),f&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/living-little/",c=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){var a;if((o=(a=c[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)n();else{var a=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=f,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},a={658:0},i.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{532:1}[e]&&t.push(a[e]=c(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={658:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=i.p+i.u(t),a=new Error;i.l(c,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],a=n[1],f=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(f)var s=f(i)}for(t&&t(n);u<c.length;u++)o=c[u],i.o(e,o)&&e[o]&&e[o][0](),e[c[u]]=0;return i.O(s)},n=self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-1458317a8cf6b1d34409.js.map