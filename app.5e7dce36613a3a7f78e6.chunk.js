(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6rIQ":function(t,e,n){"use strict";n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var r=n("XzT5"),o=n("Fugr"),s=n("9kay"),a=n("eCV1"),u={en:{common:{hello:"world"},home:{title:"HI , I\u2019M JIM",text1:"I am dedicated to create something beautiful",text2:"Welcome to my portfolio website",press:"Press Anything to Continue"}},"zh-TW":{common:{hello:"\u4e16\u754c"},home:{title:"\u6211\u662f\u53ef\u756a",text1:"",text2:"",press:""}}},c=n("K2Fo");n.d(e,"b",function(){return j}),n.d(e,"c",function(){return l}),n.d(e,"a",function(){return d});var i={"zh-tw":"zh-TW",en:"en"},j=function(t){return Object.keys(i).includes(t)},l=function(t){var e=Object.keys(i).filter(function(e){return i[e]===t})[0];return void 0===e?"en":e},f={name:"urlDetect",lookup:function(){var t,e,n=window.location.pathname.split("/");return n.length>=2?(t=n[1],void 0===(e=Object.keys(i).filter(function(e){return e===t}).map(function(t){return i[t]})[0])?"en":e):"en"}},d=function(t){var e=new o.a;return e.addDetector(f),r.a.use(e).use(s.b).init({fallbackLng:"en",ns:["common"],defaultNS:"common",debug:!1,interpolation:{escapeValue:!1},detection:{order:["urlDetect","localStorage","cookie","navigator","htmlTag"],lookupLocalStorage:Object(c.b)()},caches:["localStorage"],resources:u},function(){t.dispatch(Object(a.a)(r.a.language))}),r.a.on("languageChanged",function(){t.dispatch(Object(a.a)(r.a.language))}),r.a}},AQSi:function(t,e,n){},IkSG:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("ANjH"),o=n("/MKj"),s=function(t){return t},a=function(t,e,n){void 0===n&&(n={});var a="function"!==typeof t?s:t,u=Object(o.c)(a,n.shouldHooksUpdate),c=Object(o.b)();return"undefined"===typeof e||null===e?[u,c]:[u,"function"===typeof e?e(c):Object(r.b)(e,c)]}},K2Fo:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return s});var r=function(t){return"curfan-portfolio-"+t},o=function(){return r("i18nextLng")},s=function(){try{window.localStorage.setItem("test","1"),window.localStorage.removeItem("test")}catch(t){console.warn("Does not support localStorage",t),!1}}},RnhZ:function(t,e,n){var r={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id="RnhZ"},eCV1:function(t,e,n){"use strict";n.d(e,"a",function(){return j}),n.d(e,"c",function(){return d});n("91GP");var r=n("aWKK"),o=n("e7SQ"),s=n("peh1"),a=n("wd/R"),u=n.n(a),c=n("IkSG"),i=n("6rIQ"),j=Object(r.a)("CHANGE_LANGUAGE",function(t){return u.a.locale(t),document.body.setAttribute("lang",t),{lang:t}}),l={i18n:Object(o.a)({CHANGE_LANGUAGE:function(t,e){return Object.assign({},t,{lang:e.payload.lang})}},{lang:"en"})},f=Object(s.createSelector)(function(t){return t.i18n.lang},function(t){return{lang:t,routeLang:Object(i.c)(t)}}),d=function(){return Object(c.a)(f)};e.b={reducer:l}},tjUo:function(t,e,n){"use strict";n.r(e);n("bZMm");var r=n("q1tI"),o=n.n(r),s=n("i8i4"),a=n.n(s),u=n("9kay"),c=n("L3Ur"),i=(n("9d8Q"),n("AQSi"),n("6rIQ")),j=n("K2Fo"),l=n("ANjH"),f=n("Igns"),d=n("+avQ"),m=n.n(d),b=(n("91GP"),n("eCV1")),h=Object(l.c)(Object.assign({routing:c.routerReducer},b.b.reducer)),p=n("dtw8"),g=n("3IgV"),v=Object(p.c)(g.createHistory)({basename:"/curfan_portfolio"}),y=[Object(c.routerMiddleware)(v),m.a,f.a],k=l.d;n("VRzm"),n("Btvt"),n("KKXr"),n("ls82");var O=n("wSuE"),w=n("/MKj"),z=function(t){var e=t.children;return o.a.createElement("div",null,e)};function x(t,e,n,r,o,s,a){try{var u=t[s](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function E(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var s=t.apply(e,n);function a(t){x(s,r,o,a,u,"next",t)}function u(t){x(s,r,o,a,u,"throw",t)}a(void 0)})}}var S,R=function(t){return{path:"/",component:z,indexRoute:{component:null,onEnter:function(){var e=E(regeneratorRuntime.mark(function e(n,r,o){var s,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=t.getState(),a=s.i18n.lang,r("/"+Object(i.c)(a)+"/"),o();case 3:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()},childRoutes:[{path:":lang",indexRoute:{getComponent:function(t,e){return Promise.all([n.e(1),n.e(3),n.e(34),n.e(0),n.e(6)]).then(function(t){var r=n("M9y8").default;e(null,r)}.bind(null,n)).catch(n.oe)}},onEnter:function(){var e=E(regeneratorRuntime.mark(function e(n,r,o){var s,a,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=n.params.lang,a=n.location.pathname,u=t.getState(),c=u.i18n.lang,Object(i.b)(s)||r("/"+Object(i.c)(c)+"/"+a.split("/")[2]),o();case 4:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),childRoutes:[{path:"portfolio",indexRoute:{getComponent:function(t,e){return Promise.all([n.e(2),n.e(1),n.e(4),n.e(0),n.e(7)]).then(function(t){var r=n("cSey").default;e(null,r)}.bind(null,n)).catch(n.oe)}}},{path:"about",indexRoute:{getComponent:function(t,e){return Promise.all([n.e(2),n.e(1),n.e(4),n.e(0),n.e(5)]).then(function(t){var r=n("Hl/v").default;e(null,r)}.bind(null,n)).catch(n.oe)}}},{path:"*",component:null,indexRoute:{component:null,onEnter:function(){}},onEnter:function(t,e){return e("/")}}]},{path:"*",component:null,indexRoute:{component:null,onEnter:function(){}},onEnter:function(e,n){var r=e.location.pathname,o=t.getState().i18n.lang;n("/"+Object(i.c)(o)+r)}}]}},D=Object(O.hot)(function(t){var e=t.store,n=t.history;return o.a.createElement(w.a,{store:e},o.a.createElement(p.b,{history:n,routes:R(e)}))}),C=(S={},Object(l.e)(h,S,k(l.a.apply(void 0,y)))),I=Object(c.syncHistoryWithStore)(v,C),V=Object(i.a)(C);Object(j.a)();var Q=o.a.createElement(u.a,{i18n:V},o.a.createElement(D,{store:C,history:I}));a.a.render(o.a.createElement(function(){return Q},null),document.getElementById("content"))}},[["tjUo",49,2,3,21,32,31,11,29,14,37,33,13,12,15,25,47,9,10,22,27,30,26,38,42,44,16,17,18,19,20,23,24,28,35,39,36,40,41,43,45,46,48]]]);