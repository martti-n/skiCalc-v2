if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,s,r)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}})).then(e=>{const c=r(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/app.e8bcde84.css",revision:"19cd73804b6743d543fa7e12542dd4b3"},{url:"css/chunk-vendors.b4367cce.css",revision:"b7c4c770f3959e496efc326b6f360c6f"},{url:"icons/icon-skicalc-128.png",revision:"e22dbb8db76f08f7810945197854fb7d"},{url:"icons/icon-skicalc-144.png",revision:"030778a5a1eeeb4f8d7fb3d614ed63e2"},{url:"icons/icon-skicalc-152.png",revision:"da100e13983ad4a773649124e74488bb"},{url:"icons/icon-skicalc-192.png",revision:"d076c9d52413e0074cce456a786d67d1"},{url:"icons/icon-skicalc-384.png",revision:"cac0910f765546d1674866a26bccf191"},{url:"icons/icon-skicalc-512.png",revision:"0664997454a68143367336fe96b60cce"},{url:"icons/icon-skicalc-72.png",revision:"42007191e1272fef5b4b2db33b49a569"},{url:"icons/icon-skicalc-96.png",revision:"bf7947b7407f3171a0ff1c82221a5b9b"},{url:"icons/icons8-info-50.png",revision:"d97bc13f1c30e346c4b29d06f2485ce8"},{url:"index.html",revision:"10aa4b4318c9e18868615cfe3e9f3a97"},{url:"js/app.a968bfa4.js",revision:"29885521920662356d87f8f939e92288"},{url:"js/chunk-vendors.e28f173b.js",revision:"255c738d21cb10d41dea6dc00b3b83fd"},{url:"manifest.json",revision:"90ca72a30e388b7ba92062d562c48ff7"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map