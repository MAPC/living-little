!function(){"use strict";var e,t,n,r,o,a,c,f={},u={};function i(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=f,e=[],i.O=function(t,n,r,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var c=!0,f=0;f<n.length;f++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[f])}))?n.splice(f--,1):(c=!1,o<a&&(a=o));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(o,a),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({112:"a9a7754c",141:"2ecbc78a3386327facbf37dafce34fd0da4495c7",185:"component---src-pages-cottage-jsx",191:"component---src-pages-mixeduse-jsx",230:"component---src-pages-index-jsx",251:"component---src-pages-adu-jsx",256:"component---src-pages-404-jsx",351:"commons",354:"component---src-pages-about-jsx",523:"cb1608f2",532:"styles",608:"component---src-pages-townhouse-jsx",662:"29107295",713:"component---src-templates-using-dsg-js",725:"component---src-pages-cohousing-jsx",857:"component---src-pages-tinyhouse-jsx",941:"component---src-pages-sfc-jsx"}[e]||e)+"-"+{112:"ff050dc459f5aa5ed328",141:"20b843c7d152adaa7211",175:"4f5eec3dd4c4a5e05eef",185:"e09fd68d1ca7e942f128",191:"f2a52e5bc5b3cafd5be5",230:"d572584513295b617337",231:"b2d35ff9bb1952aa22d1",251:"982529dbc2bd14720ffe",256:"11e03a627e2e8b05dc23",351:"4fb14ead1dd9877277b4",354:"23483ab41f01c6669cd9",503:"b802c0d13bba191fe982",523:"9339146b097abf69035f",532:"355f3a4a5b234877dc92",608:"aa54a00096432e2975d2",662:"57f1c04ffafa2dbffb6f",713:"f2bc97c913e164f808c7",725:"add70d27e9c0495b5c2b",857:"12a626b12c6fcd03aee5",941:"7077a65ce7a9b183f386"}[e]+".js"},i.miniCssF=function(e){return"styles.4ee22e47bd8ebe250aa3.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-default:",i.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var c,f;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){c=d;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),f&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="/",a=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var c;if((o=(c=a[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=f,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},c={658:0},i.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{532:1}[e]&&t.push(c[e]=a(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={658:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=i.p+i.u(t),c=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],f=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(f)var s=f(i)}for(t&&t(n);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return i.O(s)},n=self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-9749ab075a351b11631b.js.map