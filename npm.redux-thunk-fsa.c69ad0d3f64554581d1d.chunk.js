(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"+avQ":function(t,n,r){"use strict";n.__esModule=!0;var e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},a=r("bEIN");function u(t){return"function"===typeof t}function o(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return function(n){var r=n.dispatch,o=n.getState;return function(n){return function i(p){if(u(p)){var c=p(r,o,t.extraArgument);return t.next?i(c):c}if((0,a.isFSA)(p)&&u(p.payload)){var f=p.payload(r,o,t.extraArgument);return null===f&&t.interrupt?f:n(e({},p,{payload:f}))}return!t.interrupt||null!==p&&void 0!==p?n(p):p}}}}var i=o();i.withExtraArgument=o,i.withOpts=o,n.default=i}}]);