!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.a3d492534a84e3d01c2ce69a20cb7077.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.aa96af9e2f5ed7553a0664269425494c.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.78456f13f59d6341a764379d4a0aa8eb.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.a0092a9b6d9c06bf965e6c41a81f2c09.js",a.body.appendChild(c)}();