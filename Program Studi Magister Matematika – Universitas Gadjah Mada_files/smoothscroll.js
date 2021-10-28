!function(a,b){"function"==typeof define&&define.amd?define([],b(a)):"object"==typeof exports?module.exports=b(a):a.smoothScroll=b(a)}("undefined"!=typeof global?global:this.window||this.global,function(a){"use strict";var b,c,d,e,f,g={},h="querySelector"in document&&"addEventListener"in a,i={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},j=function(){var a={},b=!1,c=0,d=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],c++);for(var e=function(c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b&&"[object Object]"===Object.prototype.toString.call(c[d])?a[d]=j(!0,a[d],c[d]):a[d]=c[d])};c<d;c++){var f=arguments[c];e(f)}return a},k=function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},l=function(a,b){var c,d,e=b.charAt(0),f="classList"in document.documentElement;for("["===e&&(b=b.substr(1,b.length-2),c=b.split("="),c.length>1&&(d=!0,c[1]=c[1].replace(/"/g,"").replace(/'/g,"")));a&&a!==document&&1===a.nodeType;a=a.parentNode){if("."===e)if(f){if(a.classList.contains(b.substr(1)))return a}else if(new RegExp("(^|\\s)"+b.substr(1)+"(\\s|$)").test(a.className))return a;if("#"===e&&a.id===b.substr(1))return a;if("["===e&&a.hasAttribute(c[0])){if(!d)return a;if(a.getAttribute(c[0])===c[1])return a}if(a.tagName.toLowerCase()===b)return a}return null};g.escapeCharacters=function(a){"#"===a.charAt(0)&&(a=a.substr(1));for(var b,c=String(a),d=c.length,e=-1,f="",g=c.charCodeAt(0);++e<d;){if(b=c.charCodeAt(e),0===b)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");f+=b>=1&&b<=31||127==b||0===e&&b>=48&&b<=57||1===e&&b>=48&&b<=57&&45===g?"\\"+b.toString(16)+" ":b>=128||45===b||95===b||b>=48&&b<=57||b>=65&&b<=90||b>=97&&b<=122?c.charAt(e):"\\"+c.charAt(e)}return"#"+f};var m=function(a,b){var c;return"easeInQuad"===a&&(c=b*b),"easeOutQuad"===a&&(c=b*(2-b)),"easeInOutQuad"===a&&(c=b<.5?2*b*b:-1+(4-2*b)*b),"easeInCubic"===a&&(c=b*b*b),"easeOutCubic"===a&&(c=--b*b*b+1),"easeInOutCubic"===a&&(c=b<.5?4*b*b*b:(b-1)*(2*b-2)*(2*b-2)+1),"easeInQuart"===a&&(c=b*b*b*b),"easeOutQuart"===a&&(c=1- --b*b*b*b),"easeInOutQuart"===a&&(c=b<.5?8*b*b*b*b:1-8*--b*b*b*b),"easeInQuint"===a&&(c=b*b*b*b*b),"easeOutQuint"===a&&(c=1+--b*b*b*b*b),"easeInOutQuint"===a&&(c=b<.5?16*b*b*b*b*b:1+16*--b*b*b*b*b),c||b},n=function(a,b,c){var d=0;if(a.offsetParent)do d+=a.offsetTop,a=a.offsetParent;while(a);return d=Math.max(d-b-c,0),Math.min(d,p()-o())},o=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},p=function(){return Math.max(a.document.body.scrollHeight,a.document.documentElement.scrollHeight,a.document.body.offsetHeight,a.document.documentElement.offsetHeight,a.document.body.clientHeight,a.document.documentElement.clientHeight)},q=function(a){return a&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(a):{}},r=function(b,c){a.history.pushState&&(c||"true"===c)&&"file:"!==a.location.protocol&&a.history.pushState(null,null,[a.location.protocol,"//",a.location.host,a.location.pathname,a.location.search,b].join(""))},s=function(a){return null===a?0:k(a)+a.offsetTop};g.animateScroll=function(c,h,k){var l=q(h?h.getAttribute("data-options"):null),o=j(b||i,k||{},l),t="[object Number]"===Object.prototype.toString.call(c),u=t?null:g.escapeCharacters(c),v=t?null:"#"===u?a.document.documentElement:a.document.querySelector(u);if(t||v){var w=a.pageYOffset;d||(d=a.document.querySelector(o.selectorHeader)),e||(e=s(d));var x,y,z=t?c:n(v,e,parseInt(o.offset,10)),A=z-w,B=p(),C=0;t||r(c,o.updateURL);var D=function(b,d,e){var f=a.pageYOffset;(b==d||f==d||a.innerHeight+f>=B)&&(clearInterval(e),t||(v.focus(),document.activeElement.id!==v.id&&(v.setAttribute("tabindex","-1"),v.focus(),v.style.outline="none")),o.callback(c,h))},E=function(){C+=16,x=C/parseInt(o.speed,10),x=x>1?1:x,y=w+A*m(o.easing,x),a.scrollTo(0,Math.floor(y)),D(y,z,f)},F=function(){clearInterval(f),f=setInterval(E,16)};0===a.pageYOffset&&a.scrollTo(0,0),F()}};var t=function(c){if(0===c.button&&!c.metaKey&&!c.ctrlKey){var d=l(c.target,b.selector);if(d&&"a"===d.tagName.toLowerCase()){if(d.hostname!==a.location.hostname||d.pathname!==a.location.pathname||!/#/.test(d.href))return;c.preventDefault(),g.animateScroll(d.hash,d,b)}}},u=function(a){c||(c=setTimeout(function(){c=null,e=s(d)},66))};return g.destroy=function(){b&&(a.document.removeEventListener("click",t,!1),a.removeEventListener("resize",u,!1),b=null,c=null,d=null,e=null,f=null)},g.init=function(c){h&&(g.destroy(),b=j(i,c||{}),d=a.document.querySelector(b.selectorHeader),e=s(d),a.document.addEventListener("click",t,!1),d&&a.addEventListener("resize",u,!1))},g});