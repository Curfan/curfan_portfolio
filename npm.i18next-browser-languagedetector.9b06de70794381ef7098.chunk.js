(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Fugr:function(e,o,t){"use strict";function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=[],i=a.forEach,r=a.slice;function u(e){return i.call(r.call(arguments,1),function(o){if(o)for(var t in o)void 0===e[t]&&(e[t]=o[t])}),e}var c,l=function(e,o,t,n){var a;if(t){var i=new Date;i.setTime(i.getTime()+60*t*1e3),a="; expires="+i.toGMTString()}else a="";n=n?"domain="+n+";":"",document.cookie=e+"="+o+a+";"+n+"path=/"},s=function(e){for(var o=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var a=t[n];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(o))return a.substring(o.length,a.length)}return null},g={name:"cookie",lookup:function(e){var o;if(e.lookupCookie&&"undefined"!==typeof document){var t=s(e.lookupCookie);t&&(o=t)}return o},cacheUserLanguage:function(e,o){o.lookupCookie&&"undefined"!==typeof document&&l(o.lookupCookie,e,o.cookieMinutes,o.cookieDomain)}},p={name:"querystring",lookup:function(e){var o;if("undefined"!==typeof window)for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var a=t[n].indexOf("=");if(a>0)t[n].substring(0,a)===e.lookupQuerystring&&(o=t[n].substring(a+1))}return o}};try{c="undefined"!==window&&null!==window.localStorage;window.localStorage.setItem("i18next.translate.boo","foo"),window.localStorage.removeItem("i18next.translate.boo")}catch(e){c=!1}var d={name:"localStorage",lookup:function(e){var o;if(e.lookupLocalStorage&&c){var t=window.localStorage.getItem(e.lookupLocalStorage);t&&(o=t)}return o},cacheUserLanguage:function(e,o){o.lookupLocalStorage&&c&&window.localStorage.setItem(o.lookupLocalStorage,e)}},f={name:"navigator",lookup:function(e){var o=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var t=0;t<navigator.languages.length;t++)o.push(navigator.languages[t]);navigator.userLanguage&&o.push(navigator.userLanguage),navigator.language&&o.push(navigator.language)}return o.length>0?o:void 0}},h={name:"htmlTag",lookup:function(e){var o,t=e.htmlTag||("undefined"!==typeof document?document.documentElement:null);return t&&"function"===typeof t.getAttribute&&(o=t.getAttribute("lang")),o}},v={name:"path",lookup:function(e){var o;if("undefined"!==typeof window){var t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(t instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof t[e.lookupFromPathIndex])return;o=t[e.lookupFromPathIndex].replace("/","")}else o=t[0].replace("/","")}return o}},k={name:"subdomain",lookup:function(e){var o;if("undefined"!==typeof window){var t=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);t instanceof Array&&(o="number"===typeof e.lookupFromSubdomainIndex?t[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):t[0].replace("http://","").replace("https://","").replace(".",""))}return o}};var m=function(){function e(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.type="languageDetector",this.detectors={},this.init(o,t)}var o,t,a;return o=e,(t=[{key:"init",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=u(o,this.options||{},{order:["querystring","cookie","localStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],checkWhitelist:!0}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=t,this.addDetector(g),this.addDetector(p),this.addDetector(d),this.addDetector(f),this.addDetector(h),this.addDetector(v),this.addDetector(k)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var o=this;e||(e=this.options.order);var t,n=[];if(e.forEach(function(e){if(o.detectors[e]){var t=o.detectors[e].lookup(o.options);t&&"string"===typeof t&&(t=[t]),t&&(n=n.concat(t))}}),n.forEach(function(e){if(!t){var n=o.services.languageUtils.formatLanguageCode(e);o.options.checkWhitelist&&!o.services.languageUtils.isWhitelisted(n)||(t=n)}}),!t){var a=this.i18nOptions.fallbackLng;"string"===typeof a&&(a=[a]),a||(a=[]),t="[object Array]"===Object.prototype.toString.apply(a)?a[0]:a[0]||a.default&&a.default[0]}return t}},{key:"cacheUserLanguage",value:function(e,o){var t=this;o||(o=this.options.caches),o&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||o.forEach(function(o){t.detectors[o]&&t.detectors[o].cacheUserLanguage(e,t.options)}))}}])&&n(o.prototype,t),a&&n(o,a),e}();m.type="languageDetector";o.a=m}}]);