(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{M9y8:function(t,e,i){"use strict";i.r(e);i("VRzm"),i("Btvt"),i("ls82"),i("pIFo");var r=i("q1tI"),n=i.n(r),a=i("wSuE"),s=i("9kay"),o=i("wEEd"),c=i("8b5M"),h=i("eCV1"),f=(i("91GP"),i("rGqo"),i("yt8O"),i("RW0V"),function(t){Object(r.useEffect)(function(){return Object.keys(t).forEach(function(e){return window.addEventListener(e,t[e])}),function(){Object.keys(t).forEach(function(e){return window.removeEventListener(e,t[e])})}},[])}),m=i("TSYQ"),u=i.n(m),d=i("oXHN"),p=i.n(d),l=i("sXCI"),v=i.n(l),_=function(t){var e=t.className,i=Object(r.useRef)();return Object(r.useEffect)(function(){var t=i.current,e=t.getContext("2d"),r={};r.instance=new p.a;for(var n,a,s,o=[],c=navigator.userAgent.toLowerCase().indexOf("firefox")>-1?25:30,h=0,f=0;h<c;h+=1,f+=.02)o[h]=f;var m=function(){var e=document.documentElement,i=e.clientWidth,r=e.clientHeight;n=i,a=r,t.setAttribute("width",n),t.setAttribute("height",a),s=a/2};return m(),function t(){e.clearRect(0,0,n,a),function(){e.shadowColor="rgba(43, 205, 255, 1)",e.shadowBlur=0;try{if(r.instance)for(var t=0;t<=c;t+=1){e.beginPath(),e.moveTo(0,s);for(var i=void 0,a=0;a<=n;a+=1)i=r.instance.noise(.003*a+o[t],.003*a,0),e.lineTo(a,s+200*i);var h=Math.min(Math.abs(i),.8)+.1;e.strokeStyle="rgba(41,45,55,"+h+")",e.stroke(),e.closePath(),o[t]+=.005}}catch(t){console.log(t)}}(),requestAnimationFrame(t)}(),window.addEventListener("resize",m),function(){delete r.instance,window.removeEventListener("resize",m)}},[]),n.a.createElement("canvas",{ref:i,className:u()(v.a.waves,e)})},w=i("z8D4"),b=i.n(w);function g(t,e,i,r,n,a,s){try{var o=t[a](s),c=o.value}catch(t){return void i(t)}o.done?e(c):Promise.resolve(c).then(r,n)}e.default=Object(a.hot)(function(){var t,e,i,a=Object(s.c)("home").t,m=Object(c.a)()[1].replace,u=Object(h.c)()[0].routeLang,d=(t=Object(r.useState)(!1),e=t[0],i=t[1],f({keydown:function(t){var e=t.key;i(e)},keyup:function(){i(!1)}}),e);Object(r.useEffect)(function(){d&&m("/"+u+"/portfolio")},[d]);var p=Object(r.useRef)(),l=Object(o.d)({ref:p,from:{opacity:0,letterSpacing:0},to:(E=regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({opacity:1,letterSpacing:0});case 2:return t.next=4,e({opacity:1,letterSpacing:10});case 4:case"end":return t.stop()}},t)}),O=function(){var t=this,e=arguments;return new Promise(function(i,r){var n=E.apply(t,e);function a(t){g(n,i,r,a,s,"next",t)}function s(t){g(n,i,r,a,s,"throw",t)}a(void 0)})},function(t){return O.apply(this,arguments)}),config:o.b.molasses}),v=Object(r.useRef)(),w=Object(o.d)({ref:v,from:{opacity:0},to:{opacity:1},config:o.b.stiff}),y=Object(r.useRef)(),x=Object(o.d)({ref:y,from:{opacity:0},to:{opacity:.5},config:o.b.stiff});var E,O;return Object(o.c)([p,v,y],[2,6,7]),n.a.createElement("div",{className:b.a.home},n.a.createElement("div",{className:b.a.container},n.a.createElement(o.a.div,{className:b.a.title,style:l},a("title")),n.a.createElement(o.a.div,{className:b.a.description,style:w},a("text1")),n.a.createElement(o.a.div,{className:b.a.description,style:w},a("text2"))),n.a.createElement(o.a.div,{className:b.a.hint,style:x},a("press")),n.a.createElement(_,{className:b.a.waves}))})},oXHN:function(t,e){function i(t){var e=void 0===t?Math:t;this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var i=0;i<256;i+=1)this.p[i]=Math.floor(256*e.random());this.perm=[];for(var r=0;r<512;r+=1)this.perm[r]=this.p[255&r]}i.prototype.dot=function(t,e,i,r){return t[0]*e+t[1]*i+t[2]*r},i.prototype.mix=function(t,e,i){return(1-i)*t+i*e},i.prototype.fade=function(t){return t*t*t*(t*(6*t-15)+10)},i.prototype.noise=function(t,e,i){var r=t,n=e,a=i,s=Math.floor(r),o=Math.floor(n),c=Math.floor(a);r-=s,n-=o,a-=c,s&=255,o&=255,c&=255;var h=this.perm[s+this.perm[o+this.perm[c]]]%12,f=this.perm[s+this.perm[o+this.perm[c+1]]]%12,m=this.perm[s+this.perm[o+1+this.perm[c]]]%12,u=this.perm[s+this.perm[o+1+this.perm[c+1]]]%12,d=this.perm[s+1+this.perm[o+this.perm[c]]]%12,p=this.perm[s+1+this.perm[o+this.perm[c+1]]]%12,l=this.perm[s+1+this.perm[o+1+this.perm[c]]]%12,v=this.perm[s+1+this.perm[o+1+this.perm[c+1]]]%12,_=this.dot(this.grad3[h],r,n,a),w=this.dot(this.grad3[d],r-1,n,a),b=this.dot(this.grad3[m],r,n-1,a),g=this.dot(this.grad3[l],r-1,n-1,a),y=this.dot(this.grad3[f],r,n,a-1),x=this.dot(this.grad3[p],r-1,n,a-1),E=this.dot(this.grad3[u],r,n-1,a-1),O=this.dot(this.grad3[v],r-1,n-1,a-1),j=this.fade(r),k=this.fade(n),N=this.fade(a),R=this.mix(_,w,j),M=this.mix(y,x,j),C=this.mix(b,g,j),S=this.mix(E,O,j),A=this.mix(R,C,k),L=this.mix(M,S,k);return this.mix(A,L,N)},t.exports=i},sXCI:function(t,e,i){t.exports={waves:"index__waves___2KgW1"}},z8D4:function(t,e,i){t.exports={home:"index__home___2hfA8",waves:"index__waves___1GTXA",container:"index__container___21IZ_",title:"index__title___3Hs9a",description:"index__description___27dDC",hint:"index__hint___3JgjR"}}}]);