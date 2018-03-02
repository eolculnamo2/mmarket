!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),c=null,l=0,u=[],f=t(0);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),u.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=u.indexOf(n);e>=0&&u.splice(e,1)}function v(n){var e=document.createElement("style");return n.attrs.type="text/css",g(e,n.attrs),h(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=c||(c=v(e)),r=x.bind(null,t,a,!1),o=x.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",g(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&d(p(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var w,y=(w=[],function(n,e){return w[n]=e,w.filter(Boolean).join("\n")});function x(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"body {\n  margin: 0;\n  padding: 0;\n  background-color: #eaeaea; }\n\n#top {\n  margin: 0;\n  top: 0;\n  left: 0;\n  background-color: #99738E;\n  min-height: 3vh;\n  width: 100%; }\n\nheader {\n  margin: 0;\n  background-color: #242582;\n  width: 100%;\n  display: flex; }\n  header h1 {\n    flex-grow: 2;\n    margin: 0;\n    padding: 25px;\n    font-size: 45px;\n    color: white;\n    font-family: 'Lobster', cursive; }\n    @media screen and (max-width: 700px) {\n      header h1 {\n        display: block;\n        width: 100%;\n        text-align: center;\n        padding: 25px 0; } }\n  header ul {\n    flex-grow: 1;\n    display: flex;\n    color: white;\n    width: 50vw;\n    list-style-type: none; }\n    header ul li {\n      padding: 25px;\n      cursor: pointer;\n      font-family: \"open sans\";\n      text-transform: uppercase; }\n      header ul li:hover {\n        color: #F64C72; }\n      @media screen and (max-width: 1200px) {\n        header ul li {\n          display: none; } }\n  @media screen and (max-width: 1000px) {\n    header {\n      display: block; }\n      header ul {\n        margin: 0;\n        padding: 0;\n        border: 0; } }\n\nnav {\n  margin: 0;\n  background-color: #2F2FA2;\n  min-height: 5vh;\n  width: 100%; }\n\n#home {\n  display: flex;\n  width: 80%;\n  min-height: 85vh;\n  background-color: #553D67;\n  justify-content: space-around;\n  margin: auto;\n  flex-wrap: wrap; }\n  #home h1 {\n    font-family: 'Lobster', cursive;\n    color: white;\n    padding: 20px;\n    font-size: 35px; }\n  #home img {\n    border: 4px solid #99738E;\n    width: 45%;\n    height: 45%;\n    margin: 50px 25px; }\n    @media screen and (max-width: 700px) {\n      #home img {\n        width: 90%; } }\n  #home h3 {\n    color: white; }\n  #home .form-container {\n    text-align: center; }\n  #home .form-row {\n    display: inline-block; }\n  #home input {\n    border-radius: 5px;\n    padding: 5px 10px; }\n  #home button {\n    padding: 5px 10px;\n    font-family: 'Lobster', cursive;\n    background-color: #242582;\n    color: white;\n    cursor: pointer;\n    font-size: 18px;\n    margin: 10px 5px; }\n    #home button:hover {\n      color: #F64C72; }\n  @media screen and (max-width: 700px) {\n    #home {\n      width: 100%; } }\n",""])},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Vue.component("page",{template:'\n    <div>\n    <div id = "top"></div>\n  <header>\n        <h1>\n                &#8594; Mamma Market &#8592;\n        </h1>\n        <ul>\n            <li>Home</li>\n            <li>Formula</li>\n            <li>Clothes</li>\n            <li>Equipment</li>\n            <li>Toys</li>\n            <li>About</li>\n        </ul>\n        </header>\n        <nav></nav>\n    </div>'})},function(n,e,t){"use strict";t(5);t(4),new Vue({el:"#app",data:{register:!0,newUser:"",newZip:0,newPassword:"",confirmPassword:"",existingUser:"",existingPassword:""},methods:{toggle:function(){!0===this.register?this.register=!1:this.register=!0},what:function(){alert("Called");var n={username:this.newUser,password:this.newPassword,zipCode:this.newZip};alert(JSON.stringify(n)),fetch("/register",{method:"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(n){return n.json()})}}})}]);