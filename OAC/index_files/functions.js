jQuery.noConflict();

/*
 * Cufon.js START
 * Copyright (c) 2009 Simo Kinnunen. * Licensed under the MIT license. * @version 1.09
 */
//var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());
/*
 * Cufon.js END
 */	
 
/*
 * Cufon fonts START
 */
jQuery(document).bind('PAGE_CHANGE', function(e, pageId) {
	// Fonts substitution
		Cufon.registerFont({"w":243,"face":{"font-family":"Gotham Bold","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"0 0 0 0 0 0 0 0 0 0","ascent":"288","descent":"-72","x-height":"4","bbox":"-10 -287 393 59.223","underline-thickness":"18","underline-position":"-18","stemh":"58","stemv":"55","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":108},"A":{"d":"9,0r108,-254r51,0r108,254r-58,0r-23,-57r-107,0r-23,57r-56,0xm108,-105r67,0r-34,-82","w":284},"B":{"d":"30,-252v84,3,201,-20,200,66v0,28,-15,44,-33,54v29,11,47,28,47,63v0,86,-126,68,-214,69r0,-252xm84,-150v36,-1,91,8,91,-27v0,-35,-56,-25,-91,-26r0,53xm84,-49v40,-3,105,13,105,-28v0,-36,-67,-26,-105,-27r0,55","w":259,"k":{"?":2,"&":-5,"v":4,"X":7,"V":7,"T":4,"W":5,"Y":11,"w":4,"y":4}},"C":{"d":"148,4v-74,0,-129,-57,-129,-130v0,-72,54,-130,131,-130v48,0,77,16,100,39r-35,40v-46,-52,-138,-25,-138,51v0,43,30,79,73,79v29,0,46,-11,66,-29r36,35v-26,28,-55,45,-104,45","w":265,"k":{"V":2,"X":4,"v":4,"x":4,"W":2,"Y":4,"w":4,"y":4,"d":4,"g":4,"q":4,"c":4,"e":4,"o":4,"-":4,"C":7,"G":7,"O":7,"Q":7}},"D":{"d":"30,0r0,-252r99,0v79,0,133,54,133,126v0,71,-54,126,-133,126r-99,0xm86,-50v68,7,119,-13,118,-76v0,-61,-49,-84,-118,-76r0,152","w":281,"k":{"V":16,"X":20,"\\":14,"?":7,"x":4,"J":14,"}":7,"]":7,")":11,"\/":14,"T":14,"W":14,"Y":23,"A":18,"Z":14,".":14,",":14,"S":4}},"E":{"d":"30,0r0,-252r190,0r0,49r-135,0r0,51r119,0r0,50r-119,0r0,53r137,0r0,49r-192,0","w":241,"k":{"v":4,"w":4,"y":4,"d":4,"g":4,"q":4,"c":4,"e":4,"o":4}},"F":{"d":"30,0r0,-252r192,0r0,50r-136,0r0,54r120,0r0,50r-120,0r0,98r-56,0","w":236,"k":{"\/":25,"?":-4,"&":5,"v":5,"J":40,"w":4,"y":5,"A":29,"Z":4,".":36,",":36,"a":9,"d":4,"g":4,"q":4,"c":5,"e":5,"o":5,"s":4,"z":5}},"G":{"d":"152,4v-78,0,-133,-54,-133,-130v0,-72,56,-130,132,-130v45,0,73,12,99,34r-35,42v-45,-48,-138,-22,-138,54v0,68,76,101,129,65r0,-36r-56,0r0,-48r109,0r0,109v-26,22,-61,40,-107,40","w":282,"k":{"V":9,"X":4,"\\":5,"?":4,"v":2,"T":4,"W":7,"Y":11,"y":2,"a":-4}},"H":{"d":"30,0r0,-252r56,0r0,100r102,0r0,-100r55,0r0,252r-55,0r0,-101r-102,0r0,101r-56,0","w":273},"I":{"d":"33,0r0,-252r55,0r0,252r-55,0","w":120},"J":{"d":"177,-87v12,100,-132,114,-172,53r35,-39v23,32,80,40,80,-17r0,-162r57,0r0,165","w":203,"k":{"J":7,"A":9,".":5,",":5}},"K":{"d":"30,0r0,-252r56,0r0,110r102,-110r67,0r-103,107r108,145r-67,0r-78,-107r-29,30r0,77r-56,0","w":262,"k":{"V":11,"v":22,"T":4,"W":11,"Y":11,"w":18,"y":18,"A":7,"a":4,"d":9,"g":9,"q":9,"c":11,"e":11,"o":11,"f":7,"t":9,"u":7,"S":4,"-":18,"C":20,"G":20,"O":20,"Q":20,"U":5}},"L":{"d":"30,0r0,-252r56,0r0,202r125,0r0,50r-181,0","w":222,"k":{"V":41,"*":29,"\\":43,"?":22,"v":22,"T":36,"W":36,"Y":47,"w":18,"y":22,"d":2,"g":2,"q":2,"c":4,"e":4,"o":4,"f":7,"t":7,"-":14,"C":14,"G":14,"O":14,"Q":14,"U":7}},"M":{"d":"30,0r0,-252r60,0r66,107r66,-107r60,0r0,252r-55,0r0,-165r-72,108r-70,-106r0,163r-55,0","w":312},"N":{"d":"30,0r0,-252r51,0r118,155r0,-155r55,0r0,252r-47,0r-122,-160r0,160r-55,0","w":284},"O":{"d":"153,4v-78,0,-134,-57,-134,-130v0,-72,56,-130,134,-130v78,0,134,57,134,130v0,72,-56,130,-134,130xm153,-47v45,0,76,-35,76,-79v0,-43,-31,-79,-76,-79v-45,0,-76,35,-76,79v0,43,31,79,76,79","w":306,"k":{"V":16,"X":18,"\\":14,"?":7,"x":2,"J":11,"}":7,"]":7,")":11,"\/":14,"T":11,"W":14,"Y":22,"A":16,"Z":13,".":14,",":14,"S":2}},"P":{"d":"30,0r0,-252r103,0v60,0,97,36,97,88v-1,73,-64,94,-144,88r0,76r-56,0xm86,-125v42,2,88,1,88,-39v0,-41,-46,-39,-88,-38r0,77","w":240,"k":{"\/":22,"v":-4,"X":11,"V":4,"J":36,"W":2,"Y":4,"w":-4,"y":-4,"A":25,"Z":5,".":36,",":36,"a":4,"c":2,"e":2,"o":2,"f":-5,"t":-5,"u":-2}},"Q":{"d":"291,-32r-36,40r-27,-25v-87,56,-209,-7,-209,-109v0,-72,56,-130,134,-130v107,0,170,116,112,202xm77,-127v0,56,54,97,109,73r-41,-35r36,-39r41,37v22,-53,-11,-114,-69,-114v-45,0,-76,35,-76,78","w":306,"k":{")":4,"?":7,"V":16,"T":11,"W":14,"Y":23}},"R":{"d":"30,-252v97,0,210,-16,210,84v0,41,-22,66,-54,78r62,90r-65,0r-54,-81r-43,0r0,81r-56,0r0,-252xm86,-130v43,0,98,7,98,-36v0,-44,-55,-36,-98,-36r0,72","w":260,"k":{"V":7,"J":2,"W":5,"Y":9,"d":2,"g":2,"q":2,"c":4,"e":4,"o":4,"f":-4,"t":-4}},"S":{"d":"212,-75v0,98,-144,97,-199,38r33,-39v23,19,46,31,75,31v23,0,36,-9,36,-25v0,-14,-8,-21,-50,-32v-51,-13,-84,-27,-84,-78v0,-87,131,-95,182,-44r-29,42v-22,-15,-44,-25,-65,-25v-21,0,-33,10,-33,23v0,17,10,22,54,33v51,13,80,32,80,76","w":230,"k":{"V":11,"X":9,"\\":7,"?":4,"v":5,"x":5,"T":5,"W":9,"Y":11,"w":4,"y":5,"A":5,"Z":4,"z":2,"f":2,"t":2,"S":4}},"T":{"d":"89,0r0,-201r-77,0r0,-51r209,0r0,51r-77,0r0,201r-55,0","w":233,"k":{"v":18,"x":18,"J":40,"\/":32,"&":16,"j":4,"w":14,"y":18,"A":32,"Z":4,".":36,",":36,"a":38,"d":34,"g":34,"q":34,"c":38,"e":38,"o":38,"s":32,"z":29,"f":11,"t":7,"u":18,"S":5,":":4,";":4,"-":32,"b":2,"h":2,"k":2,"l":2,"m":22,"n":22,"p":22,"r":22,"i":4,"C":11,"G":11,"O":11,"Q":11}},"U":{"d":"135,4v-68,0,-109,-38,-109,-112r0,-144r56,0v7,77,-28,205,54,205v82,0,47,-129,54,-205r56,0r0,142v0,76,-43,114,-111,114","w":272,"k":{"X":4,"x":2,"J":7,"\/":5,"A":9,".":5,",":5}},"V":{"d":"111,2r-102,-254r61,0r66,177r66,-177r59,0r-102,254r-48,0","w":270,"k":{"\/":43,"&":14,"x":18,"v":14,"j":7,"X":7,"V":4,"J":43,"W":4,"Y":7,"w":13,"y":14,"A":36,"Z":4,".":43,",":43,"a":25,"d":23,"g":23,"q":23,"c":25,"e":25,"o":25,"s":22,"z":20,"f":9,"t":7,"u":14,"S":9,":":7,";":7,"-":14,"b":4,"h":4,"k":4,"l":4,"m":14,"n":14,"p":14,"r":14,"i":7,"C":16,"G":16,"O":16,"Q":16}},"W":{"d":"97,2r-86,-254r59,0r52,171r57,-172r47,0r57,172r52,-171r58,0r-86,254r-48,0r-57,-165r-57,165r-48,0","w":403,"k":{"V":4,"X":5,"v":13,"x":14,"J":38,"\/":36,"&":11,"j":5,"W":4,"Y":7,"w":13,"y":13,"A":32,"Z":4,".":36,",":36,"a":25,"d":22,"g":22,"q":22,"c":23,"e":23,"o":23,"s":22,"z":20,"f":11,"t":9,"u":13,"S":7,":":5,";":5,"-":13,"b":4,"h":4,"k":4,"l":4,"m":13,"n":13,"p":13,"r":13,"i":5,"C":14,"G":14,"O":14,"Q":14}},"X":{"d":"11,0r88,-128r-84,-124r65,0r52,82r54,-82r63,0r-84,123r87,129r-64,0r-57,-86r-57,86r-63,0","w":263,"k":{"?":5,"&":4,"v":18,"j":4,"V":7,"J":4,"W":5,"Y":11,"w":14,"y":14,"A":7,"a":4,"d":14,"g":14,"q":14,"c":16,"e":16,"o":16,"f":7,"t":7,"u":7,"S":11,"-":18,"b":4,"h":4,"k":4,"l":4,"i":4,"C":18,"G":18,"O":18,"Q":18,"U":4}},"Y":{"d":"101,0r0,-99r-97,-153r65,0r60,101r61,-101r63,0r-96,152r0,100r-56,0","w":257,"k":{"V":7,"X":11,"v":22,"x":25,"J":47,"\/":40,"&":20,"j":7,"W":7,"Y":7,"w":20,"y":22,"A":40,"Z":4,".":47,",":47,"a":36,"d":38,"g":38,"q":38,"c":40,"e":40,"o":40,"s":36,"z":29,"f":14,"t":11,"u":27,"S":13,":":14,";":14,"-":29,"b":4,"h":4,"k":4,"l":4,"m":27,"n":27,"p":27,"r":27,"i":7,"C":22,"G":22,"O":22,"Q":22}},"Z":{"d":"23,0r0,-42r138,-161r-134,0r0,-49r206,0r0,42r-139,161r139,0r0,49r-210,0","w":254,"k":{"v":7,"w":5,"y":5,"Z":4,"d":7,"g":7,"q":7,"c":9,"e":9,"o":9,"f":4,"S":4,"-":11,"C":13,"G":13,"O":13,"Q":13}},"a":{"d":"104,-195v58,-1,86,27,86,83r0,112r-52,0r0,-21v-30,41,-125,32,-125,-35v0,-59,75,-73,125,-54v5,-47,-62,-42,-95,-28r-13,-42v21,-9,41,-15,74,-15xm96,-34v30,-1,46,-15,43,-44v-22,-12,-73,-10,-73,20v0,15,12,24,30,24","w":213,"k":{"*":5,"\\":27,"?":13,"v":7,"w":7,"y":7,"t":2}},"b":{"d":"227,-97v0,95,-101,130,-148,72r0,25r-55,0r0,-263r55,0r0,98v43,-62,148,-27,148,68xm125,-43v26,0,47,-21,47,-54v0,-32,-21,-53,-47,-53v-26,0,-47,21,-47,54v0,32,21,53,47,53","k":{"*":5,"\\":25,"?":13,"v":9,"x":11,"}":5,"]":7,")":11,"w":7,"y":9,".":4,",":4,"z":5}},"c":{"d":"116,4v-58,0,-101,-44,-101,-100v0,-55,42,-101,101,-101v36,0,59,13,77,33r-33,36v-27,-38,-91,-20,-91,32v0,52,64,70,93,33r32,32v-19,21,-39,35,-78,35","w":205,"k":{"\\":14,"?":5,"v":2,"x":4,")":5,"w":2,"y":2,"d":4,"g":4,"q":4,"c":5,"e":5,"o":5}},"d":{"d":"164,-28v-44,62,-148,27,-148,-69v0,-95,101,-129,148,-71r0,-95r55,0r0,263r-55,0r0,-28xm118,-43v26,0,47,-21,47,-54v0,-32,-21,-53,-47,-53v-26,0,-47,21,-47,54v0,32,21,53,47,53"},"e":{"d":"195,-32v-49,67,-180,34,-180,-64v0,-55,40,-101,96,-101v69,0,96,54,93,120r-135,0v9,44,66,48,94,18xm69,-112r82,0v-3,-24,-17,-41,-40,-41v-23,0,-38,16,-42,41","w":220,"k":{"*":7,"\\":29,"?":14,"v":9,"x":11,"}":4,"]":7,")":11,"w":9,"y":9,".":4,",":4,"z":5}},"f":{"d":"34,-191v-10,-65,44,-85,98,-69r0,45v-21,-8,-49,-6,-44,24r44,0r0,45r-43,0r0,146r-55,0r0,-146r-23,0r0,-45r23,0","w":137,"k":{"*":-11,"\\":-11,"?":-13,"}":-11,"]":-7,")":-11,"\/":16,".":16,",":16,"a":5,"d":4,"g":4,"q":4,"c":4,"e":4,"o":4,"z":4}},"g":{"d":"219,-44v11,109,-118,120,-193,82r18,-41v42,28,132,29,121,-44v-44,59,-149,29,-149,-60v0,-89,105,-116,148,-61r0,-25r55,0r0,149xm117,-61v27,0,48,-19,48,-46v0,-26,-21,-44,-48,-44v-27,0,-46,18,-46,45v0,27,19,45,46,45","k":{"\\":18}},"h":{"d":"24,0r0,-263r55,0r0,97v29,-50,122,-36,122,41r0,125r-54,0v-6,-52,21,-147,-34,-147v-55,0,-28,95,-34,147r-55,0","w":224,"k":{"*":5,"\\":27,"?":11,"v":7,"w":5,"y":5}},"i":{"d":"26,-214r0,-49r57,0r0,49r-57,0xm27,0r0,-193r55,0r0,193r-55,0","w":108},"j":{"d":"26,-214r0,-49r57,0r0,49r-57,0xm82,-3v2,51,-37,69,-86,60r0,-43v18,4,31,-1,31,-22r0,-185r55,0r0,190","w":108},"k":{"d":"24,0r0,-263r55,0r0,140r64,-70r66,0r-74,76r76,117r-62,0r-51,-79r-19,20r0,59r-55,0","w":213,"k":{"\\":14,"v":7,"w":7,"y":5,"a":4,"d":9,"g":9,"q":9,"c":9,"e":9,"o":9,"t":4,"u":4,"-":7}},"l":{"d":"27,0r0,-263r55,0r0,263r-55,0","w":108},"m":{"d":"24,0r0,-193r55,0r0,27v19,-36,93,-43,111,0v36,-50,129,-40,129,40r0,126r-55,0v-6,-51,21,-147,-32,-147v-54,0,-26,96,-33,147r-55,0v-6,-51,21,-147,-32,-147v-54,0,-26,96,-33,147r-55,0","w":342,"k":{"*":5,"\\":27,"?":11,"v":7,"w":5,"y":5}},"n":{"d":"24,0r0,-193r55,0r0,27v29,-50,122,-36,122,41r0,125r-54,0v-6,-52,21,-147,-34,-147v-55,0,-28,95,-34,147r-55,0","w":224,"k":{"*":5,"\\":27,"?":11,"v":7,"w":5,"y":5}},"o":{"d":"119,4v-60,0,-104,-44,-104,-100v0,-55,45,-101,105,-101v60,0,104,45,104,101v0,55,-45,100,-105,100xm120,-43v31,0,50,-24,50,-53v0,-28,-21,-53,-51,-53v-31,0,-50,24,-50,53v0,28,21,53,51,53","w":239,"k":{"*":7,"\\":29,"?":18,"v":11,"x":13,"}":5,"]":7,")":11,"w":9,"y":11,".":7,",":7,"z":7}},"p":{"d":"24,58r0,-251r55,0r0,28v44,-62,148,-27,148,69v0,95,-101,129,-148,71r0,83r-55,0xm125,-43v26,0,47,-21,47,-54v0,-32,-21,-53,-47,-53v-26,0,-47,21,-47,54v0,32,21,53,47,53","k":{"*":5,"\\":25,"?":13,"v":9,"x":11,"}":5,"]":7,")":11,"w":7,"y":9,".":4,",":4,"z":5}},"q":{"d":"164,58r0,-86v-44,62,-148,27,-148,-69v0,-95,101,-129,148,-71r0,-25r55,0r0,251r-55,0xm118,-43v26,0,47,-21,47,-54v0,-32,-21,-53,-47,-53v-26,0,-47,21,-47,54v0,32,21,53,47,53","k":{"\\":18}},"r":{"d":"24,0r0,-193r55,0r0,39v11,-27,30,-44,62,-43r0,58v-65,-8,-65,71,-62,139r-55,0","w":150,"k":{"*":-7,"\\":11,"\/":27,".":32,",":32,"a":9,"d":4,"g":4,"q":4,"c":5,"e":5,"o":5,"z":4}},"s":{"d":"166,-59v0,80,-108,76,-157,33r24,-36v21,15,43,23,61,23v16,0,23,-5,23,-15v0,-12,-19,-16,-40,-22v-27,-8,-59,-21,-58,-59v0,-70,96,-74,143,-39r-21,38v-19,-11,-38,-18,-52,-18v-13,0,-21,6,-21,14v0,11,19,16,40,23v27,9,58,23,58,58","w":180,"k":{"\\":27,"?":13,"v":7,"x":9,"}":4,"]":5,")":7,"w":5,"y":5,"s":4,"z":4,"t":4}},"t":{"d":"133,-8v-39,20,-100,18,-100,-47r0,-91r-23,0r0,-47r23,0r0,-49r55,0r0,49r46,0r0,47r-46,0r0,82v-2,26,30,20,45,12r0,44","w":149,"k":{"\\":14,"d":5,"g":5,"q":5,"c":5,"e":5,"o":5}},"u":{"d":"145,-27v-28,51,-122,35,-122,-41r0,-125r55,0v6,52,-21,147,33,147v55,0,28,-95,34,-147r55,0r0,193r-55,0r0,-27","w":224,"k":{"\\":18}},"v":{"d":"83,1r-76,-194r58,0r43,129r44,-129r57,0r-76,194r-50,0","w":216,"k":{"}":4,"]":7,"\\":18,"\/":25,"?":4,"x":4,"v":5,"w":5,"y":5,".":31,",":31,"a":9,"d":9,"g":9,"q":9,"c":11,"e":11,"o":11,"s":7,"z":2,"-":5}},"w":{"d":"68,1r-59,-194r55,0r31,117r36,-118r48,0r36,118r32,-117r54,0r-60,194r-49,0r-37,-118r-38,118r-49,0","w":309,"k":{"\\":18,"?":4,"v":5,"x":4,"}":4,"]":7,"\/":22,"w":4,"y":4,".":25,",":25,"a":7,"d":7,"g":7,"q":7,"c":9,"e":9,"o":9,"s":5,"z":2,"-":4}},"x":{"d":"143,0r-39,-60r-38,60r-58,0r68,-98r-65,-95r58,0r36,57r37,-57r57,0r-65,94r68,99r-59,0","w":210,"k":{"}":4,"]":4,"\\":18,"?":5,"v":4,"w":4,"y":4,"a":5,"d":11,"g":11,"q":11,"c":13,"e":13,"o":13,"s":7,"-":11}},"y":{"d":"134,5v-16,60,-67,64,-112,40r18,-39v15,7,35,14,43,-5r-76,-194r58,0r44,131r42,-131r57,0","w":216,"k":{"\\":18,"?":4,"v":5,"x":4,"}":4,"]":7,"\/":25,"w":4,"y":4,".":31,",":31,"a":9,"d":9,"g":9,"q":9,"c":11,"e":11,"o":11,"s":7,"z":2,"-":5}},"z":{"d":"18,0r0,-39r100,-110r-97,0r0,-44r165,0r0,39r-100,110r100,0r0,44r-168,0","w":202,"k":{"\\":16,"d":5,"g":5,"q":5,"c":5,"e":5,"o":5}},"0":{"d":"131,4v-67,0,-112,-56,-112,-130v0,-73,46,-130,113,-130v67,0,111,56,111,130v0,73,-45,130,-112,130xm132,-46v33,0,54,-34,54,-80v0,-46,-22,-80,-55,-80v-33,0,-55,34,-55,80v0,46,23,80,56,80","w":262,"k":{"\/":13,"7":9,"3":4,"2":4,"1":2,".":7,",":7}},"1":{"d":"64,0r0,-198r-44,11r-11,-45v35,-9,62,-26,110,-22r0,254r-55,0","w":151},"2":{"d":"18,0r0,-44r84,-69v31,-26,43,-39,43,-60v0,-21,-14,-33,-34,-33v-19,0,-32,11,-51,34r-39,-31v25,-34,49,-53,94,-53v52,0,87,31,87,79v0,55,-68,94,-108,129r110,0r0,48r-186,0","w":224,"k":{"7":2,"4":5}},"3":{"d":"112,4v-45,0,-76,-17,-98,-43r38,-37v17,19,35,31,61,31v21,0,35,-12,35,-32v0,-28,-36,-35,-72,-32r-9,-35r60,-60r-99,0r0,-48r171,0r0,42r-64,61v34,6,68,23,68,71v0,48,-35,82,-91,82","w":223,"k":{"\/":4,"9":2,"7":7,"5":2}},"4":{"d":"143,0r0,-54r-123,0r-9,-40r138,-160r47,0r0,155r34,0r0,45r-34,0r0,54r-53,0xm76,-99r67,0r0,-79","w":248,"k":{"\/":7,"9":4,"7":11,"1":7}},"5":{"d":"206,-84v0,98,-141,111,-191,51r34,-40v19,17,38,27,60,27v26,0,42,-13,42,-36v0,-39,-59,-40,-87,-25r-32,-21r8,-124r154,0r0,49r-107,0r-3,43v60,-14,122,7,122,76","w":226,"k":{"\/":7,"9":2,"7":11,"3":2,"2":4}},"6":{"d":"122,4v-74,0,-103,-38,-103,-123v0,-78,36,-137,111,-137v34,0,57,9,79,27r-29,43v-37,-36,-102,-22,-103,38v49,-34,141,-11,141,65v0,51,-41,87,-96,87xm120,-43v27,0,43,-15,43,-38v0,-21,-17,-37,-44,-37v-27,0,-43,16,-43,37v0,21,17,38,44,38","w":238,"k":{"\/":4,"9":4,"7":5,"3":4,"1":4}},"7":{"d":"30,0r113,-204r-119,0r0,-48r182,0r0,42r-113,210r-63,0","w":222,"k":{"\/":50,"9":5,"8":4,"6":7,"5":9,"4":31,"3":7,"2":5,"1":-4,"0":7,".":36,",":36,"-":11}},"8":{"d":"113,4v-56,0,-97,-29,-97,-74v0,-31,14,-49,41,-61v-60,-35,-29,-125,56,-125v84,0,118,89,57,125v26,13,41,30,41,60v0,47,-42,75,-98,75xm113,-149v22,0,36,-13,36,-31v0,-15,-13,-30,-36,-30v-23,0,-36,14,-36,30v0,18,14,31,36,31xm113,-42v27,0,44,-13,44,-32v0,-19,-19,-31,-44,-31v-25,0,-43,12,-43,32v0,17,16,31,43,31","w":226,"k":{"9":2,"7":4}},"9":{"d":"116,-256v74,0,103,38,103,123v0,82,-38,137,-110,137v-37,0,-62,-12,-83,-30r29,-42v38,37,104,27,106,-35v-49,39,-141,8,-141,-65v0,-51,39,-88,96,-88xm119,-132v27,0,43,-16,43,-38v0,-22,-16,-39,-44,-39v-27,0,-43,16,-43,39v0,22,17,38,44,38","w":238,"k":{"\/":9,"7":4,"5":2,"3":4,"2":4,".":4,",":4}},".":{"d":"22,0r0,-58r59,0r0,58r-59,0","w":102,"k":{"V":43,"v":31,"j":-5,"1":18,"7":7,"0":7,"T":36,"W":36,"Y":47,"w":25,"y":22,"d":4,"g":4,"q":4,"c":7,"e":7,"o":7,"f":5,"t":9,"C":14,"G":14,"O":14,"Q":14,"U":5}},",":{"d":"14,58r-5,-22v25,-3,38,-15,36,-36r-23,0r0,-58r59,0v5,66,-4,121,-67,116","w":102,"k":{"y":22,"V":43,"v":31,"j":-5,"1":18,"7":7,"0":7,"T":36,"W":36,"Y":47,"w":25,"d":4,"g":4,"q":4,"c":7,"e":7,"o":7,"f":5,"t":9,"C":14,"G":14,"O":14,"Q":14,"U":5}},":":{"d":"24,-135r0,-58r58,0r0,58r-58,0xm24,0r0,-58r58,0r0,58r-58,0","w":106,"k":{"V":7,"T":4,"W":5,"Y":14}},";":{"d":"24,-135r0,-58r58,0r0,58r-58,0xm16,58r-5,-22v25,-3,37,-15,35,-36r-22,0r0,-58r58,0v4,65,-3,121,-66,116","w":106,"k":{"V":7,"T":4,"W":5,"Y":14}},"&":{"d":"200,5r-29,-29v-47,48,-159,33,-159,-46v0,-32,17,-55,49,-69v-36,-50,-14,-117,59,-117v43,0,71,28,71,64v0,34,-22,54,-53,66r33,33v8,-13,17,-28,25,-43r41,22v-10,18,-21,37,-34,54r37,37xm109,-156v22,-8,34,-17,34,-34v0,-14,-10,-23,-24,-23v-31,1,-31,39,-10,57xm68,-72v-1,35,50,37,72,16r-49,-49v-17,9,-23,21,-23,33","w":250,"k":{"V":20,"T":18,"W":16,"Y":22}},"!":{"d":"43,-86r-17,-166r64,0r-17,166r-30,0xm29,0r0,-58r58,0r0,58r-58,0","w":116},"?":{"d":"63,-144v38,-7,67,-13,64,-35v-6,-40,-67,-29,-87,-1r-33,-36v38,-57,176,-55,176,36v0,46,-32,64,-71,72r-4,22r-37,0xm59,0r0,-58r58,0r0,58r-58,0","w":195},"-":{"d":"18,-85r0,-53r111,0r0,53r-111,0","w":146,"k":{"V":14,"X":18,"v":5,"x":11,"1":11,"7":14,"3":4,"T":32,"W":13,"Y":29,"w":4,"y":5,"A":14,"Z":11,"z":4}},"_":{"d":"-1,58r0,-42r218,0r0,42r-218,0","w":216},"\/":{"d":"-10,46r159,-333r47,0r-160,333r-46,0","w":190,"k":{"\/":58,"9":7,"8":5,"7":4,"6":13,"5":7,"4":34,"3":4,"2":7,"1":-4,"0":13,"x":18,"v":18,"J":47,"w":18,"y":18,"A":43,"Z":7,"a":23,"d":25,"g":25,"q":25,"c":29,"e":29,"o":29,"s":31,"z":22,"f":9,"t":7,"u":18,"S":11,"m":18,"n":18,"p":18,"r":18,"C":14,"G":14,"O":14,"Q":14}},"\\":{"d":"154,46r-159,-333r46,0r160,333r-47,0","w":190,"k":{"v":25,"j":-11,"V":43,"T":32,"W":36,"Y":40,"w":22,"y":22,"f":4,"t":11,"C":14,"G":14,"O":14,"Q":14,"U":5}},"|":{"d":"41,46r0,-333r44,0r0,333r-44,0","w":126},"(":{"d":"121,51v-133,-61,-133,-247,0,-308r24,36v-93,58,-93,177,0,235","w":160,"k":{"j":-11,"g":11,"J":5,"d":11,"q":11,"c":11,"e":11,"o":11,"s":5,"C":11,"G":11,"O":11,"Q":11}},")":{"d":"39,51r-24,-37v95,-58,94,-177,0,-235r24,-36v133,61,133,247,0,308","w":160},"[":{"d":"30,47r0,-299r116,0r0,43r-64,0r0,213r64,0r0,43r-116,0","w":167,"k":{"x":4,"v":7,"j":-11,"J":4,"w":7,"y":4,"a":4,"d":7,"g":7,"q":7,"c":7,"e":7,"o":7,"s":5,"C":7,"G":7,"O":7,"Q":7}},"]":{"d":"21,47r0,-43r64,0r0,-213r-64,0r0,-43r117,0r0,299r-117,0","w":167},"{":{"d":"150,51v-77,-17,-87,-36,-83,-96v2,-31,-17,-38,-49,-37r0,-42v44,6,48,-20,48,-62v0,-37,18,-59,84,-71r9,36v-50,14,-43,27,-42,69v0,26,-14,41,-38,49v33,9,37,35,37,75v0,22,5,31,43,42","w":176,"k":{"x":4,"v":4,"j":-13,"g":5,"J":4,"w":4,"y":4,"d":5,"q":5,"c":5,"e":5,"o":5,"s":4,"z":4,"C":7,"G":7,"O":7,"Q":7}},"}":{"d":"27,51r-10,-37v50,-14,44,-26,43,-69v0,-26,13,-40,37,-48v-33,-9,-36,-36,-36,-75v0,-22,-6,-32,-44,-43r10,-36v77,17,87,35,83,96v-2,32,17,38,49,37r0,42v-43,-6,-48,19,-48,61v0,37,-18,60,-84,72","w":176},"@":{"d":"180,58v-92,0,-161,-71,-161,-157v0,-86,70,-157,158,-157v88,0,157,68,157,142v0,90,-84,112,-127,69v-36,40,-119,22,-119,-48v0,-74,89,-120,130,-66r4,-19r43,7r-18,108v0,13,9,23,26,23v26,0,46,-26,46,-74v0,-67,-61,-128,-142,-128v-81,0,-143,64,-143,143v0,79,61,143,146,143v36,0,61,-8,88,-24r7,11v-28,17,-58,27,-95,27xm166,-60v23,0,43,-22,43,-52v0,-21,-14,-34,-33,-34v-23,0,-44,22,-44,51v0,22,14,35,34,35","w":352},"*":{"d":"63,-134r5,-43r-35,27r-15,-26r41,-17r-41,-17r15,-26r35,26r-5,-43r29,0r-6,43r35,-26r15,26r-40,17r40,17r-15,26r-35,-27r6,43r-29,0","w":154,"k":{"J":29,"A":36,"a":4,"d":5,"g":5,"q":5,"c":7,"e":7,"o":7,"s":4,"t":-4}},"$":{"d":"101,35r0,-36v-31,-4,-61,-16,-85,-34r28,-41v19,15,38,25,59,29r0,-57v-52,-14,-78,-34,-78,-77v0,-40,31,-66,76,-71r0,-21r37,0r0,22v26,3,47,12,67,26r-24,42v-14,-10,-30,-17,-45,-21r0,55v55,15,79,37,79,78v0,40,-32,66,-77,71r0,35r-37,0xm136,-45v36,-5,35,-42,0,-51r0,51xm103,-207v-35,4,-34,41,0,49r0,-49","w":232,"k":{"7":4}},"#":{"d":"227,-100r0,46r-40,0r-9,54r-48,0r9,-54r-52,0r-9,54r-47,0r9,-54r-27,0r0,-46r35,0r9,-53r-32,0r0,-46r40,0r9,-53r47,0r-9,53r53,0r9,-53r47,0r-9,53r27,0r0,46r-35,0r-9,53r32,0xm103,-155r-9,56r54,0r10,-56r-55,0","w":252},"%":{"d":"77,-126v-36,0,-61,-29,-61,-64v0,-36,25,-65,62,-65v36,0,61,29,61,65v0,35,-25,64,-62,64xm101,-190v0,-17,-10,-32,-24,-32v-15,0,-23,14,-23,32v0,17,10,31,24,31v15,0,23,-15,23,-31xm41,0r184,-252r43,0r-184,252r-43,0xm232,3v-36,0,-61,-29,-61,-65v0,-36,25,-64,62,-64v36,0,60,29,60,64v0,35,-24,65,-61,65xm233,-30v15,0,23,-15,23,-32v0,-17,-10,-31,-24,-31v-15,0,-23,14,-23,31v0,17,10,32,24,32","w":309},"\"":{"d":"105,-137r7,-115v19,2,45,-4,60,2r-39,113r-28,0xm21,-137r6,-115v19,2,45,-4,60,2r-39,113r-27,0","w":187},"'":{"d":"21,-137r6,-115v19,2,46,-4,61,2r-39,113r-28,0","w":102},"+":{"d":"90,-37r0,-65r-66,0r0,-50r66,0r0,-64r51,0r0,64r65,0r0,50r-65,0r0,65r-51,0","w":230},"=":{"d":"26,-149r0,-49r178,0r0,49r-178,0xm26,-55r0,-50r178,0r0,50r-178,0","w":230},"<":{"d":"199,-26r-175,-76r0,-50r175,-76r0,51r-122,50r122,50r0,51","w":230},">":{"d":"32,-26r0,-50r121,-50r-121,-50r0,-52r174,76r0,50","w":230},"^":{"d":"18,-177r53,-75r38,0r53,75r-40,0r-32,-43r-33,43r-39,0","w":180},"~":{"d":"47,-81r-29,-9v8,-30,19,-49,44,-49v34,1,61,33,75,-4r29,9v-8,30,-20,50,-45,50v-33,0,-61,-33,-74,3","w":183},"`":{"d":"86,-214r-46,-43r47,-21r40,64r-41,0","w":180},"\u00a0":{"w":108}}});
//		Cufon.replace('.modify h1, .wrapper h1 span, .tab-box span, .access-bar h2 span, .trial-bar h2 span, .activate-bar h2 span, .navigation span, .tabset span, #subscr-type-header4, .header-tab-your-radio h4, .header-tab-shopping-cart h4, .header-tab-faq h4'); 
		Cufon.replace('.apply-cufon');
		Cufon.registerFont({"w":241,"face":{"font-family":"Gotham Medium","font-weight":350,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 6 4 3 0 0 2 0 4","ascent":"288","descent":"-72","x-height":"4","bbox":"-9 -287 389 59.2312","underline-thickness":"7.2","underline-position":"-40.68","stemh":"40","stemv":"44","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":108},"A":{"d":"11,0r111,-254r41,0r111,254r-47,0r-26,-61r-119,0r-26,61r-45,0xm98,-100r87,0r-44,-101","w":284},"B":{"d":"32,-252v83,2,196,-19,196,65v0,30,-17,46,-36,56v86,29,54,131,-43,131r-117,0r0,-252xm76,-146v45,-1,108,9,108,-35v0,-41,-66,-31,-108,-32r0,67xm76,-39v48,-2,122,12,122,-36v0,-42,-77,-32,-122,-33r0,69","w":259,"k":{"?":2,"&":-4,"v":4,"X":7,"V":7,"T":5,"W":5,"Y":11,"w":4,"y":4}},"C":{"d":"149,4v-73,0,-128,-57,-128,-130v0,-72,54,-130,130,-130v46,0,75,16,99,39r-29,33v-48,-60,-153,-28,-153,58v0,49,35,90,83,90v31,0,50,-13,72,-33r29,29v-26,27,-56,44,-103,44","w":265,"k":{"V":1,"X":4,"v":4,"x":4,"W":1,"Y":4,"w":4,"y":4,"d":4,"g":4,"q":4,"c":4,"e":4,"o":4,"C":7,"G":7,"O":7,"Q":7,"-":4}},"D":{"d":"32,0r0,-252r94,0v79,0,134,54,134,126v0,71,-55,126,-134,126r-94,0xm77,-40v79,8,137,-17,137,-86v0,-67,-58,-96,-137,-86r0,172","w":281,"k":{"V":16,"X":20,"\\":14,"?":7,"x":4,"J":14,"}":7,"]":7,")":11,"\/":14,"T":16,"W":14,"Y":23,"A":17,"Z":15,".":14,",":14,"S":4}},"E":{"d":"32,0r0,-252r187,0r0,40r-142,0r0,65r126,0r0,40r-126,0r0,67r144,0r0,40r-189,0","k":{"v":4,"w":4,"y":4,"d":4,"g":4,"q":4,"c":4,"e":4,"o":4}},"F":{"d":"32,0r0,-252r188,0r0,40r-143,0r0,69r127,0r0,40r-127,0r0,103r-45,0","w":236,"k":{"\/":25,"?":-4,"&":7,"v":5,"J":40,"w":4,"y":5,"A":29,"Z":4,".":36,",":36,"a":9,"d":4,"g":4,"q":4,"c":5,"e":5,"o":5,"C":2,"G":2,"O":2,"Q":2,"s":4,"z":5}},"G":{"d":"152,4v-79,0,-131,-56,-131,-130v0,-71,54,-130,130,-130v44,0,71,12,97,34r-28,33v-19,-17,-39,-27,-71,-27v-46,0,-81,41,-81,90v0,79,89,115,146,71r0,-47r-64,0r0,-39r107,0r0,106v-25,21,-60,39,-105,39","w":282,"k":{"V":8,"X":4,"\\":5,"?":4,"v":2,"T":5,"W":6,"Y":11,"y":2,"a":-4}},"H":{"d":"32,0r0,-252r45,0r0,105r120,0r0,-105r44,0r0,252r-44,0r0,-106r-120,0r0,106r-45,0","w":273},"I":{"d":"35,0r0,-252r44,0r0,252r-44,0","w":114},"J":{"d":"173,-86v11,99,-128,115,-165,49r29,-30v24,41,91,44,90,-20r0,-165r46,0r0,166","w":201,"k":{"J":7,"A":9,".":5,",":5}},"K":{"d":"32,0r0,-252r45,0r0,127r120,-127r54,0r-105,108r110,144r-54,0r-86,-113r-39,40r0,73r-45,0","w":261,"k":{"V":11,"v":22,"&":1,"T":4,"W":11,"Y":12,"w":18,"y":18,"A":5,"a":4,"d":9,"g":9,"q":9,"c":11,"e":11,"o":11,"C":19,"G":19,"O":19,"Q":19,"f":7,"t":9,"u":7,"S":4,"-":18,"U":5}},"L":{"d":"32,0r0,-252r45,0r0,212r132,0r0,40r-177,0","w":222,"k":{"V":41,"*":29,"\\":43,"?":22,"v":22,"&":1,"T":36,"W":36,"Y":47,"w":18,"y":22,"d":2,"g":2,"q":2,"c":4,"e":4,"o":4,"C":14,"G":14,"O":14,"Q":14,"f":7,"t":7,"-":14,"U":7}},"M":{"d":"32,0r0,-252r48,0r76,119r77,-119r47,0r0,252r-44,0r0,-181r-81,119r-79,-118r0,180r-44,0","w":312},"N":{"d":"32,0r0,-252r41,0r135,174r0,-174r44,0r0,252r-37,0r-139,-179r0,179r-44,0","w":284},"O":{"d":"153,4v-77,0,-132,-58,-132,-130v0,-71,55,-130,132,-130v77,0,132,58,132,130v0,71,-55,130,-132,130xm153,-36v50,0,85,-40,85,-90v0,-49,-35,-90,-85,-90v-50,0,-85,40,-85,90v0,49,35,90,85,90","w":306,"k":{"V":15,"X":18,"\\":14,"?":7,"x":2,"J":11,"}":7,"]":7,")":11,"\/":14,"T":14,"W":14,"Y":22,"A":15,"Z":13,".":14,",":14,"S":2}},"P":{"d":"32,0r0,-252r100,0v59,0,96,33,96,85v-1,75,-70,92,-151,86r0,81r-45,0xm77,-121v51,3,106,0,106,-46v0,-49,-56,-47,-106,-45r0,91","w":240,"k":{"\/":22,"&":2,"v":-4,"X":11,"V":4,"J":36,"W":2,"Y":4,"w":-4,"y":-4,"A":25,"Z":5,".":36,",":36,"a":4,"c":2,"e":2,"o":2,"f":-5,"t":-5,"u":-2}},"Q":{"d":"260,8r-31,-27v-83,59,-208,-5,-208,-107v0,-71,55,-130,132,-130v109,0,170,124,106,207r29,25xm68,-127v0,67,72,115,129,78r-44,-36r29,-33r43,40v35,-57,-4,-138,-72,-138v-50,0,-85,40,-85,89","w":306,"k":{")":4,"?":7,"V":15,"T":14,"W":14,"Y":23}},"R":{"d":"145,-252v56,0,93,28,93,80v0,41,-25,67,-60,77r68,95r-52,0r-62,-88r-55,0r0,88r-45,0r0,-252r113,0xm77,-127v51,0,116,7,116,-43v0,-50,-65,-42,-116,-42r0,85","w":260,"k":{"V":7,"J":2,"T":1,"W":5,"Y":9,"d":2,"g":2,"q":2,"c":4,"e":4,"o":4,"f":-4,"t":-4}},"S":{"d":"211,-72v0,94,-144,94,-196,35r27,-31v24,21,49,32,80,32v27,0,44,-12,44,-32v0,-18,-10,-28,-57,-39v-54,-13,-83,-29,-83,-76v0,-82,129,-92,177,-41r-24,34v-23,-17,-45,-26,-68,-26v-26,0,-41,13,-41,30v0,19,12,28,60,40v53,13,81,32,81,74","w":230,"k":{"V":11,"X":9,"\\":7,"?":4,"v":5,"x":5,"T":5,"W":9,"Y":11,"w":4,"y":5,"A":5,"Z":4,"z":2,"f":2,"t":2,"S":4}},"T":{"d":"94,0r0,-211r-80,0r0,-41r205,0r0,41r-80,0r0,211r-45,0","w":233,"k":{"v":23,"x":23,"J":40,"\/":32,"&":19,"j":7,"w":21,"y":23,"A":32,"Z":5,".":36,",":36,"a":41,"d":37,"g":37,"q":37,"c":41,"e":41,"o":41,"C":14,"G":14,"O":14,"Q":14,"s":35,"z":32,"f":13,"t":10,"u":23,"S":5,":":8,";":8,"-":32,"b":4,"h":4,"k":4,"l":4,"m":26,"n":26,"p":26,"r":26,"i":7}},"U":{"d":"136,4v-66,0,-108,-38,-108,-111r0,-145r45,0v5,84,-27,215,63,215v39,0,64,-24,64,-70r0,-145r44,0r0,143v0,75,-42,113,-108,113","w":272,"k":{"X":4,"x":2,"J":7,"\/":5,"A":9,".":5,",":5}},"V":{"d":"116,2r-105,-254r49,0r76,194r75,-194r48,0r-105,254r-38,0","w":270,"k":{"\/":43,"&":16,"x":18,"v":14,"j":7,"X":7,"V":4,"J":43,"W":4,"Y":7,"w":13,"y":14,"A":36,"Z":4,".":43,",":43,"a":25,"d":23,"g":23,"q":23,"c":25,"e":25,"o":25,"C":15,"G":15,"O":15,"Q":15,"s":22,"z":20,"f":9,"t":7,"u":14,"S":9,":":7,";":7,"-":14,"b":4,"h":4,"k":4,"l":4,"m":14,"n":14,"p":14,"r":14,"i":7}},"W":{"d":"101,2r-88,-254r48,0r60,187r62,-188r37,0r62,188r60,-187r47,0r-88,254r-38,0r-62,-181r-62,181r-38,0","w":401,"k":{"V":4,"X":5,"v":13,"x":14,"J":38,"\/":36,"&":13,"j":5,"W":4,"Y":7,"w":13,"y":13,"A":32,"Z":4,".":36,",":36,"a":25,"d":22,"g":22,"q":22,"c":23,"e":23,"o":23,"C":14,"G":14,"O":14,"Q":14,"s":22,"z":20,"f":11,"t":9,"u":13,"S":7,":":5,";":5,"-":13,"b":4,"h":4,"k":4,"l":4,"m":13,"n":13,"p":13,"r":13,"i":5}},"X":{"d":"13,0r92,-128r-88,-124r52,0r63,90r63,-90r51,0r-88,123r91,129r-52,0r-66,-95r-67,95r-51,0","w":262,"k":{"?":5,"&":4,"v":18,"j":4,"V":7,"J":4,"W":5,"Y":10,"w":14,"y":14,"A":5,"a":4,"d":14,"g":14,"q":14,"c":16,"e":16,"o":16,"C":18,"G":18,"O":18,"Q":18,"f":7,"t":7,"u":7,"S":11,"-":18,"b":4,"h":4,"k":4,"l":4,"i":4,"U":4}},"Y":{"d":"107,0r0,-99r-101,-153r53,0r70,112r72,-112r50,0r-100,152r0,100r-44,0","w":257,"k":{"V":7,"X":10,"v":22,"x":25,"J":47,"\/":40,"&":22,"j":7,"W":7,"Y":5,"w":20,"y":22,"A":40,"Z":4,".":47,",":47,"a":36,"d":38,"g":38,"q":38,"c":40,"e":40,"o":40,"C":22,"G":22,"O":22,"Q":22,"s":36,"z":29,"f":14,"t":11,"u":27,"S":13,":":14,";":14,"-":29,"b":4,"h":4,"k":4,"l":4,"m":27,"n":27,"p":27,"r":27,"i":7}},"Z":{"d":"23,0r0,-33r149,-180r-144,0r0,-39r202,0r0,33r-149,180r149,0r0,39r-207,0","w":252,"k":{"v":7,"&":2,"w":5,"y":5,"Z":4,"d":7,"g":7,"q":7,"c":9,"e":9,"o":9,"C":13,"G":13,"O":13,"Q":13,"f":4,"S":4,"-":11}},"a":{"d":"187,0r-43,0r0,-23v-28,42,-130,36,-130,-32v0,-62,79,-74,130,-55v6,-52,-66,-51,-101,-32r-12,-35v21,-9,41,-16,72,-16v56,0,84,29,84,80r0,113xm94,-29v33,-1,55,-18,51,-51v-26,-11,-87,-12,-87,23v0,18,15,28,36,28","w":211,"k":{"*":5,"\\":27,"?":13,"v":7,"w":7,"y":7,"t":2}},"b":{"d":"224,-95v0,97,-111,129,-153,65r0,30r-44,0r0,-263r44,0r0,105v41,-66,153,-35,153,63xm125,-34v30,0,55,-24,55,-61v0,-37,-25,-61,-55,-61v-30,0,-55,25,-55,61v0,37,25,61,55,61","k":{"*":5,"\\":25,"?":13,"v":9,"x":11,"}":5,"]":7,")":11,"w":7,"y":9,".":4,",":4,"z":5}},"c":{"d":"115,4v-57,0,-98,-44,-98,-99v0,-54,42,-99,99,-99v36,0,58,14,76,33r-27,29v-30,-43,-105,-23,-105,37v0,60,75,82,107,38r26,26v-19,21,-41,35,-78,35","w":205,"k":{"\\":14,"?":5,"v":2,"x":4,")":5,"w":2,"y":2,"d":4,"g":4,"q":4,"c":5,"e":5,"o":5}},"d":{"d":"171,-32v-41,66,-153,35,-153,-63v0,-97,109,-128,153,-66r0,-102r43,0r0,263r-43,0r0,-32xm116,-34v29,0,55,-25,55,-61v0,-37,-26,-61,-55,-61v-30,0,-54,23,-54,61v0,37,24,61,54,61"},"e":{"d":"192,-31v-49,65,-175,34,-175,-64v0,-54,39,-99,93,-99v64,1,96,52,90,114r-140,0v7,55,75,63,107,26xm60,-108r98,0v-3,-28,-20,-50,-49,-50v-27,0,-45,20,-49,50","w":217,"k":{"*":7,"\\":29,"?":14,"v":9,"x":11,"}":4,"]":7,")":11,"w":9,"y":9,".":4,",":4,"z":5}},"f":{"d":"37,-189v-9,-63,40,-88,94,-71r0,37v-27,-11,-58,-5,-51,34r50,0r0,36r-49,0r0,153r-44,0r0,-153r-24,0r0,-36r24,0","w":135,"k":{"*":-11,"\\":-11,"?":-13,"}":-11,"]":-7,")":-11,"\/":16,".":16,",":16,"a":5,"d":4,"g":4,"q":4,"c":4,"e":4,"o":4,"z":4}},"g":{"d":"214,-39v11,103,-117,117,-187,75r16,-33v46,34,143,29,128,-53v-41,63,-153,36,-153,-55v0,-90,111,-115,153,-57r0,-28r43,0r0,151xm116,-52v30,0,55,-21,55,-53v0,-31,-25,-52,-55,-52v-30,0,-54,21,-54,53v0,31,24,52,54,52","k":{"\\":18}},"h":{"d":"27,0r0,-263r44,0r0,102v27,-54,127,-38,127,40r0,121r-44,0v-6,-57,22,-154,-40,-154v-62,0,-39,95,-43,154r-44,0","w":223,"k":{"*":5,"\\":27,"?":11,"v":7,"w":5,"y":5}},"i":{"d":"28,-219r0,-42r47,0r0,42r-47,0xm30,0r0,-190r43,0r0,190r-43,0","w":102},"j":{"d":"28,-219r0,-42r47,0r0,42r-47,0xm73,3v2,47,-32,62,-76,54r0,-35v18,3,33,0,33,-22r0,-190r43,0r0,193","w":102},"k":{"d":"27,0r0,-263r44,0r0,157r79,-84r53,0r-76,77r78,113r-50,0r-57,-82r-27,28r0,54r-44,0","w":209,"k":{"\\":14,"v":7,"w":7,"y":5,"a":4,"d":9,"g":9,"q":9,"c":9,"e":9,"o":9,"t":4,"u":4,"-":7}},"l":{"d":"30,0r0,-263r43,0r0,263r-43,0","w":102},"m":{"d":"27,0r0,-190r44,0r0,29v17,-39,98,-45,114,0v33,-53,131,-42,131,40r0,121r-43,0v-5,-57,20,-154,-39,-154v-59,0,-35,97,-40,154r-44,0v-5,-56,21,-154,-38,-154v-60,-1,-37,96,-41,154r-44,0","w":342,"k":{"*":5,"\\":27,"?":11,"v":7,"w":5,"y":5}},"n":{"d":"27,0r0,-190r44,0r0,29v27,-54,127,-38,127,40r0,121r-44,0v-6,-57,22,-154,-40,-154v-62,0,-39,95,-43,154r-44,0","w":223,"k":{"*":5,"\\":27,"?":11,"v":7,"w":5,"y":5}},"o":{"d":"118,4v-58,0,-101,-44,-101,-99v0,-54,43,-99,101,-99v58,0,102,45,102,99v0,54,-43,99,-102,99xm118,-33v35,0,58,-28,58,-62v0,-33,-24,-61,-58,-61v-35,0,-58,28,-58,61v0,33,24,62,58,62","w":236,"k":{"*":7,"\\":29,"?":18,"v":11,"x":13,"}":5,"]":7,")":11,"w":9,"y":11,".":7,",":7,"z":7}},"p":{"d":"27,58r0,-248r44,0r0,32v41,-66,153,-35,153,63v0,97,-111,129,-153,65r0,88r-44,0xm125,-34v30,0,55,-24,55,-61v0,-37,-25,-61,-55,-61v-30,0,-55,25,-55,61v0,37,25,61,55,61","k":{"*":5,"\\":25,"?":13,"v":9,"x":11,"}":5,"]":7,")":11,"w":7,"y":9,".":4,",":4,"z":5}},"q":{"d":"171,58r0,-90v-41,66,-153,35,-153,-63v0,-97,109,-128,153,-66r0,-29r43,0r0,248r-43,0xm116,-34v29,0,55,-25,55,-61v0,-37,-26,-61,-55,-61v-30,0,-54,23,-54,61v0,37,24,61,54,61","k":{"\\":18}},"r":{"d":"27,0r0,-190r44,0r0,43v12,-28,34,-48,67,-47v-2,14,4,36,-2,46v-38,0,-65,26,-65,76r0,72r-44,0","w":148,"k":{"*":-7,"\\":11,"\/":27,".":32,",":32,"a":9,"d":5,"g":5,"q":5,"c":6,"e":6,"o":6,"z":4}},"s":{"d":"163,-57v-1,77,-105,73,-151,32r19,-29v21,15,44,23,63,23v19,0,29,-7,29,-21v0,-15,-20,-20,-42,-27v-28,-8,-60,-20,-60,-56v0,-66,94,-71,138,-37r-18,31v-18,-11,-37,-18,-53,-18v-17,0,-27,8,-27,20v0,14,21,20,43,27v28,9,59,21,59,55","w":180,"k":{"\\":27,"?":13,"v":7,"x":9,"}":4,"]":5,")":7,"w":5,"y":5,"s":4,"z":4,"t":4}},"t":{"d":"130,-6v-39,18,-94,12,-94,-47r0,-100r-24,0r0,-37r24,0r0,-52r44,0r0,52r51,0r0,37r-51,0r0,94v-2,29,31,26,50,17r0,36","w":147,"k":{"\\":14,"d":5,"g":5,"q":5,"c":5,"e":5,"o":5}},"u":{"d":"152,-30v-26,55,-127,39,-127,-39r0,-121r44,0v6,57,-22,154,40,154v62,0,39,-95,43,-154r44,0r0,190r-44,0r0,-30","w":223,"k":{"\\":18}},"v":{"d":"87,1r-78,-191r47,0r51,140r52,-140r45,0r-77,191r-40,0","w":214,"k":{"}":4,"]":7,"\\":18,"\/":25,"?":4,"x":4,"v":5,"w":5,"y":5,".":31,",":31,"a":9,"d":9,"g":9,"q":9,"c":11,"e":11,"o":11,"s":7,"z":2,"-":5}},"w":{"d":"73,1r-61,-191r44,0r38,130r42,-131r38,0r42,131r39,-130r43,0r-62,191r-39,0r-42,-130r-43,130r-39,0","w":309,"k":{"\\":18,"?":4,"v":5,"x":4,"}":4,"]":7,"\/":22,"w":4,"y":4,".":25,",":25,"a":7,"d":7,"g":7,"q":7,"c":9,"e":9,"o":9,"s":5,"z":2,"-":4}},"x":{"d":"11,0r70,-96r-68,-94r48,0r44,63r44,-63r46,0r-67,92r70,98r-48,0r-46,-67r-47,67r-46,0","w":208,"k":{"}":4,"]":4,"\\":18,"?":5,"v":4,"w":4,"y":4,"a":5,"d":11,"g":11,"q":11,"c":13,"e":13,"o":13,"s":7,"-":11}},"y":{"d":"129,5v-17,58,-63,65,-108,42r15,-32v22,10,43,13,53,-15r-80,-190r47,0r54,141r49,-141r45,0","w":214,"k":{"\\":18,"?":4,"v":5,"x":4,"}":4,"]":7,"\/":25,"w":4,"y":4,".":31,",":31,"a":9,"d":9,"g":9,"q":9,"c":11,"e":11,"o":11,"s":7,"z":2,"-":5}},"z":{"d":"19,0r0,-30r110,-124r-106,0r0,-36r161,0r0,30r-110,124r110,0r0,36r-165,0","w":201,"k":{"\\":16,"d":5,"g":5,"q":5,"c":5,"e":5,"o":5}},"0":{"d":"130,4v-66,0,-109,-57,-109,-130v0,-72,44,-130,110,-130v66,0,109,57,109,130v0,72,-44,130,-110,130xm131,-36v39,0,63,-39,63,-90v0,-50,-25,-90,-64,-90v-39,0,-64,39,-64,90v0,50,26,90,65,90","w":260,"k":{"\/":13,"7":10,"3":4,"2":4,"1":2,".":7,",":7}},"1":{"d":"64,0r0,-209r-45,13r-10,-36v32,-8,56,-25,99,-22r0,254r-44,0","w":142},"2":{"d":"18,0r0,-35r86,-74v35,-29,48,-45,48,-68v0,-25,-18,-39,-41,-39v-23,0,-39,13,-58,38r-32,-25v24,-34,48,-53,93,-53v49,0,83,31,83,76v0,58,-77,104,-117,141r120,0r0,39r-182,0","w":220,"k":{"7":3,"4":7}},"3":{"d":"112,4v-44,0,-76,-18,-97,-44r31,-29v18,21,39,33,67,33v25,0,43,-15,43,-39v0,-31,-37,-41,-78,-38r-7,-28r68,-72r-109,0r0,-39r166,0r0,33r-70,72v38,5,74,24,74,72v0,46,-36,79,-88,79","w":222,"k":{"\/":4,"9":2,"7":8,"5":2}},"4":{"d":"148,0r0,-57r-127,0r-8,-31r140,-166r38,0r0,161r36,0r0,36r-36,0r0,57r-43,0xm66,-93r82,0r0,-100","w":245,"k":{"\/":7,"9":4,"7":12,"1":7}},"5":{"d":"203,-82v0,95,-138,109,-186,48r27,-32v31,39,111,44,115,-14v3,-45,-67,-50,-99,-31r-26,-18r7,-123r151,0r0,39r-113,0r-4,59v58,-20,128,4,128,72","w":223,"k":{"\/":7,"9":2,"7":11,"3":2,"2":4}},"6":{"d":"121,4v-72,0,-99,-39,-100,-123v0,-77,37,-137,108,-137v33,0,55,10,77,28r-24,34v-47,-44,-117,-18,-115,58v39,-47,148,-23,148,55v0,50,-41,85,-94,85xm120,-34v31,0,51,-20,51,-46v0,-25,-21,-44,-52,-44v-31,0,-51,20,-51,45v0,26,20,45,52,45","w":236,"k":{"\/":4,"9":4,"7":6,"3":4,"1":5}},"7":{"d":"38,0r113,-213r-127,0r0,-39r178,0r0,33r-114,219r-50,0","w":219,"k":{"\/":50,"9":5,"8":4,"6":7,"5":9,"4":31,"3":7,"2":5,"1":-4,"0":7,".":36,",":36,"-":11}},"8":{"d":"113,4v-55,0,-96,-29,-96,-73v0,-31,18,-50,46,-62v-21,-11,-37,-28,-37,-57v0,-39,37,-68,87,-68v50,0,88,29,88,69v0,28,-16,45,-37,56v27,13,46,31,46,62v0,45,-42,73,-97,73xm113,-145v26,0,45,-16,45,-38v0,-19,-18,-36,-45,-36v-27,0,-45,16,-45,36v0,22,19,38,45,38xm113,-33v33,0,53,-17,53,-39v0,-23,-23,-38,-53,-38v-30,0,-53,15,-53,39v0,21,20,38,53,38","w":226,"k":{"9":2,"7":4}},"9":{"d":"115,-256v72,0,101,40,101,123v0,81,-40,137,-108,137v-35,0,-60,-12,-81,-30r24,-34v47,47,121,22,119,-55v-40,51,-149,22,-149,-54v0,-49,38,-87,94,-87xm117,-126v32,0,51,-21,51,-46v0,-26,-20,-46,-52,-46v-31,0,-50,21,-50,47v0,26,20,45,51,45","w":236,"k":{"\/":9,"7":5,"5":2,"3":4,"2":4,".":4,",":4}},".":{"d":"24,0r0,-49r48,0r0,49r-48,0","w":96,"k":{"V":43,"v":31,"j":-5,"1":18,"7":7,"0":7,"T":36,"W":36,"Y":47,"w":25,"y":22,"d":4,"g":4,"q":4,"c":7,"e":7,"o":7,"C":14,"G":14,"O":14,"Q":14,"f":5,"t":9,"U":5}},",":{"d":"17,52r-5,-18v22,-4,33,-16,31,-34r-19,0r0,-49r48,0v4,56,-3,101,-55,101","w":96,"k":{"y":22,"V":43,"v":31,"j":-5,"1":18,"7":7,"0":7,"T":36,"W":36,"Y":47,"w":25,"d":4,"g":4,"q":4,"c":7,"e":7,"o":7,"C":14,"G":14,"O":14,"Q":14,"f":5,"t":9,"U":5}},":":{"d":"26,-141r0,-49r48,0r0,49r-48,0xm26,0r0,-49r48,0r0,49r-48,0","w":100,"k":{"V":7,"T":8,"W":5,"Y":14}},";":{"d":"26,-141r0,-49r48,0r0,49r-48,0xm19,52r-5,-18v22,-4,33,-16,31,-34r-19,0r0,-49r48,0v4,56,-3,101,-55,101","w":100,"k":{"V":7,"T":8,"W":5,"Y":14}},"&":{"d":"207,5r-33,-34v-44,53,-160,41,-160,-40v0,-32,19,-56,54,-71v-41,-46,-20,-116,51,-116v40,0,67,27,67,61v0,33,-22,53,-55,66r43,44v10,-14,19,-31,27,-49r33,18v-10,20,-21,39,-34,57r40,41xm107,-153v26,-9,40,-21,40,-40v0,-17,-12,-28,-29,-28v-37,0,-39,46,-11,68xm59,-71v0,44,65,49,89,16r-56,-57v-23,10,-33,25,-33,41","w":250,"k":{"V":21,"T":22,"W":17,"Y":23,"S":1}},"!":{"d":"42,-80r-13,-172r51,0r-13,172r-25,0xm31,0r0,-49r47,0r0,49r-47,0","w":108},"?":{"d":"67,-138v40,-7,72,-14,69,-43v-5,-47,-79,-40,-100,-5r-27,-29v36,-59,171,-53,171,34v0,45,-33,65,-73,72r-3,29r-29,0xm64,0r0,-49r48,0r0,49r-48,0","w":194},"-":{"d":"20,-89r0,-43r107,0r0,43r-107,0","w":146,"k":{"V":14,"X":18,"v":5,"x":11,"1":11,"7":14,"3":4,"T":32,"W":13,"Y":29,"w":4,"y":5,"A":14,"Z":11,"z":4}},"_":{"d":"-1,58r0,-34r218,0r0,34r-218,0","w":216},"\/":{"d":"-9,46r163,-333r38,0r-163,333r-38,0","w":187,"k":{"\/":59,"9":7,"8":5,"7":4,"6":13,"5":7,"4":34,"3":4,"2":7,"1":-4,"0":13,"x":18,"v":18,"J":47,"w":18,"y":18,"A":43,"Z":7,"a":23,"d":25,"g":25,"q":25,"c":29,"e":29,"o":29,"C":14,"G":14,"O":14,"Q":14,"s":31,"z":22,"f":9,"t":7,"u":18,"S":11,"m":18,"n":18,"p":18,"r":18}},"\\":{"d":"159,46r-163,-333r38,0r163,333r-38,0","w":187,"k":{"v":25,"j":-11,"V":43,"T":32,"W":36,"Y":40,"w":22,"y":22,"C":14,"G":14,"O":14,"Q":14,"f":4,"t":11,"U":5}},"|":{"d":"42,46r0,-333r35,0r0,333r-35,0","w":119},"(":{"d":"122,51v-132,-63,-132,-246,0,-308r19,29v-101,59,-100,191,0,250","w":158,"k":{"j":-11,"g":11,"J":5,"d":11,"q":11,"c":11,"e":11,"o":11,"C":11,"G":11,"O":11,"Q":11,"s":5}},")":{"d":"36,51r-19,-29v102,-59,101,-191,0,-250r19,-29v132,63,133,246,0,308","w":158},"[":{"d":"32,47r0,-299r110,0r0,34r-69,0r0,231r69,0r0,34r-110,0","w":163,"k":{"x":4,"v":7,"j":-11,"J":4,"w":7,"y":4,"a":4,"d":7,"g":7,"q":7,"c":7,"e":7,"o":7,"C":7,"G":7,"O":7,"Q":7,"s":5}},"]":{"d":"21,47r0,-34r69,0r0,-231r-69,0r0,-34r111,0r0,299r-111,0","w":163},"{":{"d":"150,51v-78,-17,-85,-37,-81,-98v2,-31,-16,-42,-50,-40r0,-33v46,6,49,-22,49,-65v0,-37,16,-60,82,-72r7,28v-55,16,-48,30,-48,76v0,28,-13,42,-37,50v33,8,36,36,36,76v0,26,6,37,49,49","w":175,"k":{"x":4,"v":4,"j":-13,"g":5,"J":4,"w":4,"y":4,"d":5,"q":5,"c":5,"e":5,"o":5,"C":7,"G":7,"O":7,"Q":7,"s":4,"z":4}},"}":{"d":"26,51r-8,-29v55,-15,50,-29,48,-76v0,-28,14,-41,38,-49v-33,-8,-37,-36,-37,-76v0,-26,-6,-38,-49,-50r8,-28v78,17,83,36,81,98v-1,32,16,41,50,39r0,33v-46,-5,-50,21,-50,66v0,37,-15,60,-81,72","w":175},"@":{"d":"180,58v-92,0,-161,-71,-161,-157v0,-86,70,-157,158,-157v88,0,157,67,157,142v0,90,-86,113,-123,65v-34,43,-121,28,-121,-43v0,-76,93,-120,132,-64r4,-21r35,5r-17,106v0,15,10,26,28,26v26,0,47,-25,47,-74v0,-66,-60,-129,-142,-129v-82,0,-144,65,-144,144v0,80,61,144,147,144v36,0,62,-8,89,-24r6,10v-28,17,-58,27,-95,27xm165,-55v49,0,73,-96,11,-96v-26,0,-50,25,-50,57v0,25,17,39,39,39","w":352},"*":{"d":"65,-138r5,-43r-36,26r-13,-22r41,-18r-41,-18r13,-22r36,26r-5,-44r25,0r-5,44r36,-26r13,22r-41,18r41,18r-13,22r-36,-26r5,43r-25,0","w":154,"k":{"J":29,"A":36,"a":4,"d":5,"g":5,"q":5,"c":7,"e":7,"o":7,"s":4,"t":-4}},"$":{"d":"103,35r0,-36v-31,-4,-61,-16,-85,-35r23,-33v21,17,40,27,63,31r0,-71v-53,-14,-77,-34,-77,-74v0,-39,31,-65,76,-69r0,-21r31,0r0,22v26,3,48,12,68,27r-21,34v-16,-12,-32,-19,-49,-23r0,68v55,14,79,35,79,75v0,39,-31,66,-77,70r0,35r-31,0xm104,-152r0,-64v-46,5,-50,54,0,64xm132,-37v47,-4,51,-56,0,-65r0,65","w":231,"k":{"7":4}},"#":{"d":"36,0r10,-58r-32,0r0,-37r39,0r10,-63r-36,0r0,-37r43,0r10,-57r38,0r-10,57r59,0r10,-57r38,0r-9,57r32,0r0,37r-39,0r-10,63r36,0r0,37r-43,0r-10,58r-38,0r10,-58r-59,0r-10,58r-39,0xm91,-95r59,0r11,-63r-59,0","w":252},"%":{"d":"76,-126v-35,0,-59,-29,-59,-64v0,-35,24,-65,60,-65v35,0,59,29,59,65v0,35,-24,64,-60,64xm43,0r184,-252r36,0r-185,252r-35,0xm229,3v-35,0,-59,-29,-59,-65v0,-35,23,-64,59,-64v35,0,59,29,59,64v0,35,-23,65,-59,65xm77,-154v17,0,27,-17,27,-36v0,-20,-12,-37,-28,-37v-17,0,-27,17,-27,37v0,21,12,36,28,36xm229,-25v17,0,27,-17,27,-37v0,-20,-11,-36,-27,-36v-17,0,-27,17,-27,36v0,21,11,37,27,37","w":305},"\"":{"d":"100,-144r9,-108v15,2,38,-4,49,2r-35,106r-23,0xm22,-144r8,-108v15,2,38,-4,49,2r-35,106r-22,0","w":175},"'":{"d":"22,-144r8,-108v16,2,38,-4,50,2r-35,106r-23,0","w":96},"+":{"d":"94,-38r0,-69r-70,0r0,-40r70,0r0,-68r41,0r0,68r69,0r0,40r-69,0r0,69r-41,0","w":228},"=":{"d":"27,-152r0,-40r174,0r0,40r-174,0xm27,-62r0,-40r174,0r0,40r-174,0","w":228},"<":{"d":"196,-28r-172,-79r0,-39r172,-80r0,42r-129,57r129,58r0,41","w":228},">":{"d":"32,-28r0,-41r129,-57r-129,-58r0,-42r172,80r0,39","w":228},"^":{"d":"20,-177r55,-75r30,0r55,75r-34,0r-36,-48r-37,48r-33,0","w":180},"~":{"d":"45,-82r-24,-8v8,-29,19,-45,41,-45v31,1,58,34,71,-3r24,7v-8,29,-18,45,-40,45v-32,-1,-59,-33,-72,4","w":178},"`":{"d":"89,-214r-44,-42r39,-17r38,59r-33,0","w":180},"\u00a0":{"w":108}}});
    	Cufon.replace('#head .nav li a');
 		/*
		 * The following copyright notice may not be removed under any circumstances.
		 * 
		 * Copyright:
		 * (c) Copyright 1997, 2001 Berthold LLC. All rights reserved.
		 * http://www.bertholdtypes.com
		 */
    /* Put this back for NissanConnect styling:
		Cufon.registerFont({"w":646,"face":{"font-family":"NissanAG","font-weight":600,"font-stretch":"normal","units-per-em":"1000","panose-1":"2 0 5 3 0 0 0 0 0 0","ascent":"754","descent":"-246","x-height":"20","bbox":"-35 -803 1040 240","underline-thickness":"50","underline-position":"-100","stemh":"148.264","stemv":"206.629","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":313},"!":{"d":"257,-706v-2,96,-1,196,-13,277r-26,171r-101,0r-29,-173v-23,-78,-11,-179,-14,-275r183,0xm257,0r-183,0r0,-188r183,0r0,188","w":292},"\"":{"d":"287,-743r-34,308r-40,0r-35,-308r109,0xm129,-743r-35,308r-39,0r-36,-308r110,0","w":306},"#":{"d":"632,-397r-109,0r-10,80r96,0r0,139r-116,0r-25,178r-143,0r26,-178r-82,0r-25,178r-142,0r24,-178r-92,0r0,-139r112,0r11,-80r-98,0r0,-139r117,0r24,-170r142,0r-24,170r83,0r23,-170r142,0r-23,170r89,0r0,139xm382,-397r-83,0r-11,80r82,0","w":668},"$":{"d":"59,-384v-83,-163,54,-317,234,-314r0,-65r96,0r0,68v92,11,140,28,217,77r-103,122v-41,-30,-63,-43,-114,-48r0,112v121,17,258,71,258,216v0,35,-9,74,-27,105v-52,91,-134,111,-231,124r0,101r-96,0r0,-101v-115,-13,-171,-25,-269,-85r106,-126v57,38,95,55,163,62r0,-132v-81,-19,-193,-35,-234,-116xm293,-449r0,-98v-30,3,-68,16,-68,53v0,35,42,40,68,45xm456,-201v0,-38,-38,-45,-67,-52r0,115v32,-7,67,-26,67,-63","w":667},"%":{"d":"783,-451v136,0,194,119,194,226v0,128,-64,235,-203,235v-136,0,-193,-107,-193,-229v0,-111,62,-232,202,-232xm699,-706r-302,706r-91,0r301,-706r92,0xm222,-694v137,0,194,118,194,225v0,128,-64,235,-203,235v-136,0,-193,-107,-193,-229v-1,-110,61,-231,202,-231xm838,-231v0,-38,-1,-124,-56,-124v-65,0,-62,97,-62,141v0,41,-3,125,57,125v66,0,61,-97,61,-142xm278,-468v0,-39,0,-131,-57,-131v-65,0,-62,97,-62,141v0,42,-3,125,58,125v64,0,61,-91,61,-135","w":1000},"&":{"d":"531,-555v1,84,-66,150,-140,177v28,34,56,68,86,101v11,-30,19,-58,25,-89r151,56v-18,57,-38,108,-69,159v29,16,53,18,91,14r0,136v-85,6,-153,16,-208,-36v-169,115,-450,36,-450,-173v0,-118,67,-173,164,-221v-30,-40,-47,-79,-47,-130v0,-113,100,-152,198,-152v104,0,199,40,199,158xm380,-553v0,-29,-24,-41,-50,-41v-66,-1,-42,80,-12,107v24,-13,62,-34,62,-66xm372,-150v-40,-48,-78,-99,-115,-150v-27,21,-52,45,-52,82v0,87,103,115,167,68","w":688},"'":{"d":"129,-743r-35,308r-39,0r-36,-308r110,0","w":148},"(":{"d":"199,-319v0,183,54,311,156,404r-64,81v-53,-41,-110,-93,-141,-129v-168,-189,-159,-513,3,-708v37,-44,80,-89,133,-132r69,70v-102,120,-156,222,-156,414","w":344},")":{"d":"53,-800v147,107,268,257,264,474v-4,238,-102,364,-259,495r-69,-69v102,-120,156,-222,156,-415v0,-174,-51,-306,-156,-404","w":344},"*":{"d":"423,-516r-100,34r61,78r-97,77r-68,-86r-64,87r-101,-74r59,-80r-100,-29r35,-119r105,30r-1,-107r125,0r0,107r106,-36","w":437},"+":{"d":"633,-258r-171,0r0,194r-200,0r0,-194r-171,0r0,-153r171,0r0,-189r200,0r0,189r171,0r0,153","w":724},",":{"d":"216,-188v-3,158,25,293,-107,347v-24,10,-50,14,-75,18r0,-88v47,-16,61,-39,62,-89r-62,0r0,-188r182,0","w":250},"-":{"d":"344,-230r-315,0r0,-171r315,0r0,171","w":374},".":{"d":"216,0r-182,0r0,-188r182,0r0,188","w":250},"\/":{"d":"497,-706r-301,706r-195,0r303,-706r193,0","w":500},"0":{"d":"623,-358v0,194,-92,375,-309,375v-203,0,-294,-165,-294,-349v0,-194,92,-368,308,-368v45,0,93,7,134,28v115,58,161,193,161,314xm420,-334v0,-80,-1,-230,-96,-230v-105,0,-100,181,-100,250v0,65,5,190,97,190v95,0,99,-144,99,-210"},"1":{"d":"463,0r-206,0r0,-456v-47,18,-97,16,-147,17r0,-155v83,3,148,-18,175,-93r178,0r0,687"},"2":{"d":"606,-476v0,166,-164,248,-289,319r280,-3r0,160r-570,0r0,-130v77,-51,295,-200,346,-270v41,-56,30,-153,-57,-153v-82,0,-101,79,-81,152r-203,-24v1,-35,2,-70,11,-104v36,-135,163,-168,288,-168v85,0,176,14,232,86v30,39,43,86,43,135"},"3":{"d":"621,-204v0,34,-9,72,-26,101v-58,103,-180,117,-287,117v-106,0,-215,-22,-272,-121v-18,-30,-26,-65,-33,-99r191,-37v8,74,35,116,117,116v55,0,101,-24,101,-86v0,-82,-96,-78,-166,-68r0,-136v71,7,158,8,158,-72v0,-53,-44,-72,-91,-72v-69,0,-91,41,-98,102r-189,-12v6,-39,13,-75,32,-110v52,-95,164,-118,264,-118v125,0,277,44,277,195v0,76,-41,121,-110,148v79,21,132,64,132,152"},"4":{"d":"622,-143r-87,0r0,143r-196,0r0,-143r-320,0r0,-137r312,-408r204,0r0,409r87,0r0,136xm344,-503v-50,78,-106,150,-161,224r156,0"},"5":{"d":"220,-229v-6,67,34,108,91,108v64,0,102,-43,102,-105v0,-66,-37,-108,-104,-108v-38,0,-65,11,-85,44r-172,-21r39,-372r509,0r-14,143r-350,0r-10,96v169,-82,396,8,395,200v0,45,-12,95,-36,134v-61,100,-163,127,-273,127v-100,0,-201,-24,-258,-114v-21,-34,-30,-72,-38,-111"},"6":{"d":"415,-494v-4,-75,-97,-91,-149,-47v-51,43,-56,95,-58,157v42,-54,113,-72,179,-72v135,0,240,92,240,230v0,223,-271,295,-457,207v-122,-58,-152,-180,-152,-306v0,-212,107,-376,333,-376v88,0,179,27,228,105v14,23,23,48,31,73xm430,-224v0,-60,-38,-102,-99,-102v-62,0,-105,44,-105,106v0,58,41,103,100,103v64,0,104,-43,104,-107"},"7":{"d":"594,-558v-136,137,-228,333,-259,558r-215,0v44,-196,140,-385,254,-533r-331,0r0,-156r551,0r0,131"},"8":{"d":"517,-363v67,23,110,91,109,165v-3,154,-173,212,-307,212v-132,0,-301,-58,-301,-209v0,-75,50,-145,119,-167v-93,-45,-110,-173,-43,-253v55,-67,148,-82,229,-82v86,0,187,11,241,87v58,81,40,201,-47,247xm411,-496v0,-53,-45,-70,-91,-70v-44,0,-86,21,-86,70v1,95,178,98,177,0xm426,-201v0,-61,-48,-89,-105,-89v-54,0,-102,30,-102,89v0,60,47,86,102,86v52,0,105,-28,105,-86"},"9":{"d":"436,-299v-31,47,-115,72,-179,71v-135,0,-240,-91,-240,-229v0,-156,141,-243,284,-243v222,0,325,124,325,342v0,213,-106,375,-333,375v-88,0,-180,-25,-229,-104v-14,-23,-22,-48,-30,-73r195,-30v3,76,97,92,149,48v52,-44,54,-95,58,-157xm417,-464v0,-57,-41,-103,-99,-103v-65,0,-104,43,-104,108v0,59,39,101,99,101v64,0,104,-43,104,-106"},":":{"d":"256,-330r-182,0r0,-188r182,0r0,188xm256,0r-182,0r0,-188r182,0r0,188","w":292},";":{"d":"256,-330r-182,0r0,-188r182,0r0,188xm256,-188v-3,158,25,293,-107,347v-24,10,-50,14,-75,18r0,-88v47,-16,61,-39,62,-89r-62,0r0,-188r182,0","w":292},"<":{"d":"577,-36r-465,-222r0,-179r465,-216r0,184r-284,115r284,124r0,194","w":724},"=":{"d":"625,-353r-525,0r0,-155r525,0r0,155xm625,-124r-525,0r0,-154r525,0r0,154","w":724},">":{"d":"605,-252r-464,216r0,-184r284,-115r-285,-124r1,-194r464,222r0,179","w":724},"?":{"d":"328,-718v119,0,265,59,265,193v0,122,-118,158,-189,220v-17,16,-22,24,-28,47r-173,0v0,-75,43,-111,88,-147v35,-27,100,-62,100,-113v0,-42,-35,-65,-74,-65v-73,0,-92,50,-101,111r-170,-57v33,-137,152,-189,282,-189xm380,0r-183,0r0,-188r183,0r0,188","w":604},"@":{"d":"430,124v-229,0,-399,-148,-399,-370v0,-260,208,-467,470,-467v189,0,310,116,310,296v0,190,-114,351,-247,351v-47,0,-82,-26,-91,-68v-37,45,-77,67,-124,67v-87,0,-146,-69,-146,-170v0,-152,105,-286,223,-286v56,0,77,17,107,60r10,-40r104,0r-42,196v-10,48,-17,91,-17,110v0,16,6,25,17,25v12,0,28,-15,46,-40v36,-52,59,-126,59,-194v0,-144,-93,-216,-227,-216v-191,0,-348,167,-348,370v0,172,118,282,300,282v110,0,216,-46,318,-140r57,71v-103,96,-220,163,-380,163xm382,-168v68,0,116,-103,116,-177v0,-47,-26,-77,-64,-77v-58,0,-112,84,-112,176v0,48,23,78,60,78","w":850},"A":{"d":"787,0r-240,0r-31,-99r-246,0r-31,99r-240,0r270,-706r254,0xm470,-256r-75,-249r-77,249r152,0","w":792},"B":{"d":"690,-527v0,71,-48,140,-111,161v117,23,162,148,109,262v-41,89,-123,104,-212,104r-432,0r0,-706r418,0v108,-7,228,49,228,179xm463,-497v0,-88,-116,-53,-196,-60r0,119v79,-7,196,29,196,-59xm482,-219v0,-100,-125,-65,-216,-71r0,138v89,-6,215,29,216,-67","w":729},"C":{"d":"396,22v-230,0,-369,-178,-369,-371v0,-211,147,-383,364,-383v141,0,288,79,345,197r-187,93v-30,-67,-67,-117,-148,-117v-108,0,-147,101,-147,194v0,95,33,207,147,207v75,0,124,-46,145,-116r191,92v-53,120,-195,204,-341,204","w":750},"D":{"d":"724,-349v0,140,-55,280,-197,330v-50,18,-112,19,-165,19r-318,0r0,-706v177,6,358,-25,501,29v139,53,179,190,179,328xm499,-353v0,-57,-15,-136,-66,-169v-43,-27,-102,-17,-165,-19r0,379r85,0v111,0,146,-96,146,-191","w":750},"E":{"d":"633,0r-589,0r0,-706r559,0r0,155r-335,0r0,105r313,0r0,153r-314,0r0,140r366,0r0,153"},"F":{"d":"602,-551r-336,0r0,127r314,0r0,153r-314,0r0,271r-222,0r0,-706r558,0r0,155","w":625},"G":{"d":"587,-49v-232,168,-560,9,-560,-299v0,-224,149,-387,377,-387v144,0,316,78,354,218r-200,57v-6,-69,-74,-106,-139,-106v-124,0,-165,98,-165,208v0,118,52,209,179,209v58,0,123,-32,127,-100r-131,0r0,-142r324,0r0,391r-166,0r0,-49","w":792},"H":{"d":"705,0r-225,0r0,-272r-213,0r0,272r-223,0r0,-706r223,0r0,257r213,0r0,-257r225,0r0,706","w":750},"I":{"d":"268,0r-224,0r0,-706r224,0r0,706","w":313},"J":{"d":"371,-196v0,158,-73,196,-222,196r-149,0r0,-174v73,14,148,13,148,-75r0,-457r223,0r0,510","w":417},"K":{"d":"779,0r-251,0r-156,-282r-105,115r0,167r-223,0r0,-706r223,0r0,267r222,-267r272,0r-245,268","w":771},"L":{"d":"540,0r-496,0r0,-706r223,0r0,528r273,0r0,178","w":542},"M":{"d":"911,0r-213,0r0,-408v0,-42,3,-83,6,-125v-8,38,-17,76,-28,114r-117,419r-166,0v-48,-176,-99,-352,-142,-529v3,32,4,63,4,95r0,434r-212,0r0,-706r320,0r86,326v13,49,22,99,29,150v23,-169,75,-320,113,-476r320,0r0,706","w":958},"N":{"d":"726,0r-241,0v-83,-142,-168,-282,-240,-430v12,136,5,284,7,430r-208,0r0,-706r237,0v82,144,177,282,245,440v-15,-138,-7,-290,-9,-440r209,0r0,706","w":771},"O":{"d":"584,-698v191,87,255,336,153,536v-67,131,-192,185,-335,185v-233,0,-376,-151,-376,-380v0,-57,11,-116,35,-168v66,-146,197,-207,351,-207v59,0,118,9,172,34xm559,-358v0,-100,-38,-196,-153,-196v-117,0,-156,101,-156,202v0,105,38,196,156,196v114,0,153,-105,153,-202","w":812},"P":{"d":"585,-685v135,58,160,246,74,367v-86,121,-220,81,-391,88r0,230r-224,0r0,-706r403,0v43,0,98,4,138,21xm486,-469v0,-61,-34,-89,-92,-89r-126,0r0,180r127,0v57,0,91,-34,91,-91","w":708},"Q":{"d":"407,-733v342,0,471,373,303,612v37,26,66,45,112,49r-68,155v-77,-14,-122,-36,-176,-94v-58,25,-116,35,-179,35v-229,0,-372,-152,-372,-377v0,-204,138,-380,380,-380xm557,-356v0,-101,-36,-198,-152,-198v-113,0,-152,105,-152,202v0,101,34,196,150,196v112,0,154,-103,154,-200","w":812},"R":{"d":"720,0r-250,0r-137,-249r-65,0r0,249r-224,0r0,-706r390,0v96,0,178,16,229,106v20,35,29,80,29,120v0,100,-52,164,-145,195xm469,-477v-2,-103,-108,-77,-201,-81r0,164v95,-1,202,18,201,-83","w":708},"S":{"d":"178,-244v27,62,123,94,197,93v33,0,107,-7,107,-54v0,-60,-106,-58,-156,-68v-133,-28,-261,-69,-260,-220v1,-174,164,-236,315,-236v115,0,253,46,315,125r-141,117v-41,-57,-118,-72,-185,-72v-28,0,-81,7,-81,45v0,14,8,24,18,33v19,16,147,34,178,41v118,27,215,74,215,212v-1,186,-178,249,-340,249v-136,0,-287,-56,-353,-156","w":729},"T":{"d":"581,-532r-179,0r0,532r-223,0r0,-532r-180,0r0,-174r582,0r0,174","w":583},"U":{"d":"686,-283v0,196,-135,302,-323,302v-126,0,-261,-47,-305,-176v-14,-39,-16,-88,-16,-130r0,-419r224,0r0,441v0,64,22,111,95,111v75,0,100,-44,100,-111r0,-441r225,0r0,423","w":729},"V":{"d":"708,-706r-239,706r-233,0r-236,-706r228,0v42,153,102,299,125,468v29,-166,84,-314,126,-468r229,0","w":708},"W":{"d":"1040,-706r-176,706r-239,0r-64,-256v-18,-72,-31,-145,-44,-219v-20,162,-64,317,-103,475r-240,0r-176,-706r218,0r69,308v14,62,25,122,31,185v25,-172,72,-331,108,-493r189,0v37,161,89,317,110,492v22,-173,66,-330,100,-492r217,0","w":1042},"X":{"d":"833,0r-263,0r-154,-254r-156,254r-262,0r273,-379r-229,-327r262,0r112,194r114,-194r255,0r-223,326","w":833},"Y":{"d":"788,-706r-284,409r0,297r-224,0r0,-297r-283,-409r258,0r139,235r136,-235r258,0","w":792},"Z":{"d":"654,-562r-356,390r355,0r0,172r-651,0r0,-141r362,-396r-341,0r0,-169r631,0r0,144","w":667},"[":{"d":"284,144r-240,0r0,-923r240,0r0,95r-84,0r0,733r84,0r0,95","w":299},"\\":{"d":"497,0r-193,0r-303,-706r195,0","w":500},"]":{"d":"255,144r-241,0r0,-95r85,0r0,-733r-85,0r0,-95r241,0r0,923","w":299},"^":{"d":"669,-279r-197,0r-102,-255r-106,255r-208,0r218,-427r184,0","w":724},"_":{"d":"510,240r-520,0r0,-127r520,0r0,127","w":500},"`":{"d":"301,-587r-127,0r-162,-137r213,0","w":313},"a":{"d":"580,0r-203,0r0,-40v-121,93,-362,67,-358,-114v0,-38,11,-73,35,-102v79,-91,200,-64,313,-100v0,-50,-29,-60,-73,-60v-40,0,-57,10,-65,49r-193,5v6,-25,10,-51,24,-74v52,-87,165,-99,257,-99v86,0,210,14,236,111v28,104,9,240,9,360v0,28,1,42,18,64xm260,-121v65,0,113,-53,106,-120v-20,7,-40,13,-60,19v-29,8,-96,19,-96,60v0,28,26,41,50,41","w":604},"b":{"d":"605,-281v0,149,-65,294,-234,294v-54,0,-94,-11,-130,-51r0,38r-199,0r0,-706r205,0r0,224v38,-37,79,-51,132,-51v145,0,226,117,226,252xm323,-386v-62,1,-81,73,-81,127v0,52,12,123,79,123v66,0,81,-67,81,-120v0,-54,-16,-130,-79,-130","w":625},"c":{"d":"18,-262v0,-181,131,-279,298,-279v104,0,190,44,244,135r-156,88v-12,-44,-39,-78,-88,-78v-75,0,-94,82,-94,142v0,58,20,117,88,117v53,0,79,-43,93,-88r158,86v-40,99,-157,159,-269,159v-169,0,-274,-116,-274,-282","w":562},"d":{"d":"582,0r-199,0r0,-38v-35,39,-79,51,-130,51v-169,0,-234,-145,-234,-294v0,-134,82,-252,226,-252v54,0,93,14,132,51r0,-224r205,0r0,706xm303,-136v60,0,79,-70,79,-123v0,-53,-13,-127,-81,-127v-60,-1,-79,74,-79,127v0,54,13,123,81,123","w":625},"e":{"d":"588,-223r-361,0v2,55,25,98,87,98v47,0,75,-27,94,-67r169,71v-60,94,-156,142,-266,142v-172,0,-294,-106,-294,-282v0,-172,118,-278,286,-278v124,0,238,62,272,186v12,43,12,86,13,130xm379,-331v-1,-46,-27,-78,-74,-78v-49,0,-68,36,-76,78r150,0","w":604},"f":{"d":"375,-394r-93,0r0,394r-206,0r0,-394r-77,0r0,-112r77,0v0,-38,-6,-86,11,-122v47,-104,175,-100,288,-76r0,141v-48,-19,-103,-1,-93,57r93,0r0,112","w":375},"g":{"d":"582,-29v0,67,-10,120,-64,165v-58,48,-161,59,-234,59v-90,0,-222,-9,-255,-112v-8,-24,-8,-51,-9,-76r187,0v-1,52,35,67,81,67v111,0,94,-70,98,-152v-28,42,-86,53,-133,53v-153,0,-235,-103,-235,-250v0,-152,82,-257,242,-257v61,0,106,15,145,63r-1,-49r178,0r0,489xm380,-289v0,-52,-20,-100,-80,-100v-68,0,-86,61,-86,118v0,58,13,110,82,110v77,0,84,-68,84,-128","w":625},"h":{"d":"603,0r-206,0r0,-295v0,-49,-22,-75,-74,-75v-53,0,-76,28,-76,78r0,292r-206,0r0,-706r205,0r0,240v61,-79,168,-96,265,-53v78,35,92,102,92,181r0,338"},"i":{"d":"248,-569r-206,0r0,-137r206,0r0,137xm248,0r-206,0r0,-518r206,0r0,518","w":292},"j":{"d":"249,-569r-206,0r0,-137r206,0r0,137xm249,-8v0,29,2,86,-10,112v-45,102,-163,90,-274,89r0,-150v44,0,78,-3,78,-56r0,-505r206,0r0,510","w":292},"k":{"d":"648,0r-235,0r-112,-197r-54,52r0,145r-206,0r0,-706r206,0r0,336r141,-148r251,0r-197,187"},"l":{"d":"248,0r-207,0r0,-706r207,0r0,706","w":292},"m":{"d":"757,-530v108,0,198,64,198,196r0,334r-206,0r0,-271v0,-50,-11,-90,-70,-90v-58,0,-77,33,-77,85r0,276r-206,0r0,-280v0,-46,-19,-81,-71,-81v-50,0,-77,30,-77,80r0,281r-207,0r0,-518r199,0r0,74v56,-121,291,-112,343,10v30,-66,105,-96,174,-96","w":1000},"n":{"d":"408,-532v114,0,189,72,189,205r0,327r-206,0r0,-283v0,-49,-15,-78,-70,-78v-57,0,-75,34,-75,85r0,276r-205,0r0,-518r194,0r0,69v31,-54,105,-83,173,-83"},"o":{"d":"624,-258v0,181,-137,278,-309,278v-172,0,-295,-98,-295,-275v0,-184,131,-285,306,-285v175,0,298,105,298,282xm416,-261v0,-64,-16,-134,-93,-134v-76,0,-98,67,-98,132v0,64,17,138,96,138v78,0,95,-73,95,-136"},"p":{"d":"606,-256v0,144,-66,269,-226,269v-55,0,-95,-10,-136,-48r0,223r-202,0r0,-706r201,0r0,40v35,-41,82,-54,135,-54v163,0,228,130,228,276xm323,-132v61,0,80,-68,80,-121v0,-54,-9,-129,-80,-129v-59,0,-81,68,-81,123v0,56,8,127,81,127","w":625},"q":{"d":"247,-532v48,-1,112,18,136,54r0,-40r201,0r0,706r-203,0r0,-223v-41,38,-81,48,-136,48v-159,0,-226,-125,-226,-269v0,-145,65,-276,228,-276xm222,-253v0,52,20,120,80,121v72,0,82,-71,82,-127v0,-57,-13,-123,-85,-123v-68,0,-77,78,-77,129","w":625},"r":{"d":"411,-355v-95,-10,-165,14,-165,111r0,244r-205,0r0,-521r198,0r0,48v56,-51,98,-56,172,-56r0,174","w":417},"s":{"d":"26,-361v0,-223,350,-213,482,-103r-111,101v-42,-28,-82,-50,-134,-50v-17,0,-43,5,-43,27v0,23,31,26,48,30v48,12,136,27,178,51v49,28,77,74,77,131v0,223,-305,236,-464,133v-21,-13,-40,-28,-60,-43r116,-106v43,42,100,70,161,70v19,0,53,-7,53,-32v0,-30,-40,-32,-62,-35v-51,-7,-152,-32,-190,-64v-32,-26,-51,-69,-51,-110","w":542},"t":{"d":"369,-4v-139,21,-301,27,-301,-135v0,-85,2,-170,3,-255r-71,0r0,-112r72,0r2,-163r207,0r-1,163r88,0r0,112r-90,0v-1,67,-3,134,-3,202v0,52,49,56,94,47r0,141","w":375},"u":{"d":"602,0r-196,0r0,-76v-48,98,-186,114,-282,62v-71,-38,-85,-107,-85,-183r0,-321r207,0r0,282v0,52,16,84,75,84v61,0,74,-39,74,-92r0,-274r207,0r0,518"},"v":{"d":"561,-518r-172,518r-219,0r-173,-518r218,0v23,112,53,224,63,347v11,-123,42,-236,67,-347r216,0","w":562},"w":{"d":"851,-518r-155,518r-205,0v-24,-117,-59,-230,-67,-361v-7,131,-43,243,-64,361r-205,0r-156,-518r210,0r40,195v11,54,18,108,24,163v13,-124,38,-235,63,-358r177,0v25,120,51,237,66,358v10,-121,37,-238,61,-358r211,0","w":854},"x":{"d":"606,0r-220,0r-85,-168r-84,168r-221,0r174,-272r-154,-246r221,0r64,155r68,-155r222,0r-157,245","w":604},"y":{"d":"581,-518r-189,548v-11,31,-23,62,-41,90v-58,90,-158,67,-273,60r0,-147v37,-1,94,19,102,-22v0,-12,-12,-41,-16,-53r-164,-476r215,0v26,122,61,242,75,375v13,-134,50,-254,77,-375r214,0","w":583},"z":{"d":"529,-400r-241,245r239,0r0,155r-519,0r0,-114r246,-250r-215,0r0,-154r490,0r0,118","w":542},"{":{"d":"169,-316v61,20,83,48,83,134v0,57,-5,159,5,198v6,26,29,40,63,38r0,94r-74,1v-99,3,-127,-19,-145,-79v-16,-53,-5,-162,-6,-232v-1,-86,-11,-95,-87,-106r0,-98v71,-10,84,-17,87,-106v4,-95,-19,-224,29,-275v26,-28,49,-36,120,-35r76,1r0,95v-64,2,-68,25,-68,108r0,127v0,82,-17,110,-83,135","w":332},"|":{"d":"210,144r-156,0r0,-923r156,0r0,923","w":264},"}":{"d":"237,-471v1,85,10,95,87,106r0,98v-70,10,-84,16,-87,106v-3,95,20,224,-29,275v-26,28,-48,35,-120,35r-76,0r0,-95v66,-2,68,-27,68,-108r0,-128v0,-82,17,-110,83,-135v-60,-19,-84,-48,-83,-134r0,-127v0,-46,1,-55,-4,-71v-7,-25,-30,-41,-64,-38r0,-94r75,0v97,-2,125,18,144,78v17,53,5,161,6,232","w":332},"~":{"d":"484,-382v61,0,83,-30,123,-79r48,159v-73,92,-155,130,-286,61v-52,-27,-114,-62,-172,-42v-22,7,-51,39,-80,74r-48,-161v47,-68,101,-113,200,-94v56,11,161,82,215,82","w":724},"\u00a0":{"w":313}}});
		Cufon.replace('.apply-cufon');
		Cufon.replace('#head .nav li a');
	*/

	});
/*
 * Cufon fonts END
 */

// IE
var isIE = /msie|MSIE/.test(navigator.userAgent);

// IE6
var isIE6 = /msie|MSIE 6/.test(navigator.userAgent);


/* Document ready */
jQuery(function(){
	
	// IE
	var isIE = /msie|MSIE/.test(navigator.userAgent);
	
	// IE6
	var isIE6 = /msie|MSIE 6/.test(navigator.userAgent);
	
	// PNGfix
	if(isIE6 && typeof(DD_belatedPNG) != 'undefined'){
		DD_belatedPNG.fix('.png');
	}
	
	/*
 	 * Tabs START
 	 */
	var tabSets = jQuery("ul.tablinks");
	if(tabSets.length){
		var links, thisLink, hash, tab, tabs = [], boxSelected;
		var getHash = function(href){
			return href.substr(href.indexOf("#") + 1);
		}
		tabSets.each(function(){
			links = jQuery(this).find("li a");
			links.each(function(){
				thisLink = jQuery(this);
				tab = jQuery('#'+getHash(thisLink.attr('href')));
				if(tab.length && thisLink.hasClass('active')){
					tab.show();
				} else {
					tab.hide();
				}
				thisLink.bind('click', function(){
					thisLink = jQuery(this);
					hash = getHash(thisLink.attr('href'));
					tab = jQuery('#'+hash);
					if(tab.length){
						links.removeClass('active');
						thisLink.addClass('active');
						jQuery('div.tab-content').hide();
						tab.show();
						
						// optimize!!!
						boxSelected = thisLink.closest('.gr-box-rounded-selected');
						if(boxSelected.length){
							if(hash != 'tab-1'){
								boxSelected.find('.bottom-selected').attr('class', 'bottom');
							} else {
								boxSelected.find('.bottom').attr('class', 'bottom-selected');
							}
						}
						// optimize!!!
					}
					
					return false;
				});
				
			});
			
		});
	}
	/*
 	 * Tabs END
 	 */

	/*
 	 * Tooltip START
 	 */
	var toolTip, toolTipTrigger;
	jQuery('a.open,  div#enablePopup button.click').bind('click', function(){ 
		
		toolTipTrigger = jQuery(this);
		toolTip = toolTipTrigger.next('div.popup');

		jQuery('a.open').parent().css({zIndex: 0});
		toolTipTrigger.parent().css({zIndex: 100});
		
		if(toolTip.length){
			
			if(toolTip.is(':hidden')){
				// close opened
				hideAllToolTips();

				if(toolTip.hasClass('polleft')){
					ttOffsetX = toolTipTrigger.width()-jQuery(this).width()-340; // left
				} else {
				   ttOffsetX = toolTipTrigger.width()+20; // right
				}
				ttOffsetY = (toolTip.height()/2)-10;
				// show
				showToolTip(toolTip, ttOffsetX, ttOffsetY);
				// hide
				toolTip.find('a.close').click(function(){
					hideToolTip(toolTip);
				});
			
			} else {
				// hide if visible
				hideToolTip(toolTip);
			}
			
		}
	});
	
	/*
 	 * <a> href hover tooltip - START
 	 */
	var toolTip, toolTipTrigger;
	
	// As of jQuery 1.7, the .live() method is deprecated. Use .on() to attach event handlers.
	if(vMinMet('1.7',jQuery.fn.jquery)) {
		jQuery('div.featureIcons a.open').on('mouseenter', function(){ 
				
			toolTipTrigger = jQuery(this);
					
			toolTip = toolTipTrigger.next('div.popup');
			if(toolTip.length){
				if(toolTip.hasClass('polleft')){
					ttOffsetX = toolTipTrigger.width()-jQuery(this).width()-340; // left
				} else {
				   ttOffsetX = toolTipTrigger.width()+20; // right
				}
				ttOffsetY = (toolTip.height()/2)-10;
				if(toolTip.hasClass('top15')){
					ttOffsetY-=15;
				}
				// show
				showToolTip(toolTip, ttOffsetX, ttOffsetY);
				// hide
				jQuery('div.featureIcons a.open').unbind('mouseout').bind('mouseout', function(){
					hideToolTip(toolTip);
				});
			}
		});
	}
	else {
		jQuery('div.featureIcons a.open').live('mouseenter', function(){ 
			
			toolTipTrigger = jQuery(this);
					
			toolTip = toolTipTrigger.next('div.popup');
			if(toolTip.length){
				if(toolTip.hasClass('polleft')){
					ttOffsetX = toolTipTrigger.width()-jQuery(this).width()-340; // left
				} else {
				   ttOffsetX = toolTipTrigger.width()+20; // right
				}
				ttOffsetY = (toolTip.height()/2)-10;
				if(toolTip.hasClass('top15')){
					ttOffsetY-=15;
				}
				// show
				showToolTip(toolTip, ttOffsetX, ttOffsetY);
				// hide
				jQuery('div.featureIcons a.open').unbind('mouseout').bind('mouseout', function(){
					hideToolTip(toolTip);
				});
			}
		});
	}
	
	
	
	/*
 	 *  <a> href hover tooltip - END
 	 */
	
	var showToolTip = function(ttObj, x, y){
		if(isIE){
			ttObj.css({left: x+'px', top: -y+'px'}).show();
		} else {
			ttObj.css({opacity: 1, left: x+'px', top: -y+'px'}).fadeIn(200);
		}
	}
	
	var hideToolTip = function(ttObj){
		if(isIE){
			ttObj.hide();
		} else {
			ttObj.fadeOut(200);
		}
	}
	
	var hideAllToolTips = function(){
		if(isIE){
			jQuery('div.popup:visible').hide();
		} else {
			jQuery('div.popup:visible').fadeOut(200);
		}
	}
	/*
 	 * Tooltip END
 	 */
	
    /*
 	 * Button tooltip START
 	 */
	var toolTip, toolTipTrigger;
	jQuery('button.open, input.open').bind('mouseenter', function(){ 
		
		toolTipTrigger = jQuery(this);
		if(!toolTipTrigger.hasClass('ui-state-disabled')){ 
			return false;
		}
		
		toolTip = toolTipTrigger.next('div.popup');
		if(toolTip.length){
			if(toolTip.hasClass('polleft')){
				ttOffsetX = toolTipTrigger.width()-jQuery(this).width()-340; // left
			} else {
			   ttOffsetX = toolTipTrigger.width()+20; // right
			}
			ttOffsetY = (toolTip.height()/2)-10;
			if(toolTip.hasClass('top15')){
				ttOffsetY-=15;
			}
			// show
			showToolTip(toolTip, ttOffsetX, ttOffsetY);
			// hide
			jQuery('button.open, input.open').unbind('mouseout').bind('mouseout', function(){
				hideToolTip(toolTip);
			});
		}
	});
	/*
 	 * Button tooltip END
 	 */
    
  
	//Switching languages in terms and conditions on verify-order.html  
    jQuery('a.language-es').bind('click', function(){
        jQuery("#language-eng").hide();
        jQuery("#language-esp").show();
    });
    jQuery('a.language-en').bind('click', function(){ 
		jQuery("#language-eng").show();
        jQuery("#language-esp").hide();
	});
    
        
	/*
 	 * Form Validator START
 	 */
	var thisForm, thisClass, controls, thisControl, thisParent, err, errFields, isError, equalTo, btn;
	// get forms
	var forms = jQuery('form.validate-this');
	if(forms.length){
		// init
		forms.each(function(){
			thisForm = jQuery(this);
			// get all required inputs
			controls = thisForm.find('.required').not('p, label');
			controls.each(function(){
				// set inner labels
				thisControl = jQuery(this);
				if(thisControl.attr('title') != '' && thisControl.attr('type') != 'select-one'){
					thisControl.val(thisControl.attr('title')).bind('focus', function(){
						thisControl = jQuery(this);
						if(thisControl.val() == thisControl.attr('title')){
							thisControl.val('');
							hideErrorMsg(thisControl);
						}
					}).bind('blur', function(){
						thisControl = jQuery(this);
						if(thisControl.val() == ''){
							thisControl.val(thisControl.attr('title'));
							showErrorMsg(thisControl);
						}
					});
				}
				// onblur
				thisControl.bind('blur', function(){
					validateControl(this);
					//
					prevalidateForm(jQuery(this).parents('form'));
				});
				// onchange
				if(thisControl.attr('type') == 'select-one'){
					thisControl.bind('change', function(){
						validateControl(this);
						//
						prevalidateForm(jQuery(this).parents('form'));
					});
				}
				// onfocus
				thisControl.bind('focus', function(){
					hideErrorMsg(this);
					//
					//prevalidateForm(jQuery(this).parents('form'));
				});
			});
			// form submit event
			thisForm.bind('submit', function(){
				isError = 0;
				thisForm = jQuery(this);
				thisForm.find('p.error-msg:visible').hide();
				hideAllErrorMsgs(thisForm);
				controls.each(function(){
					isError += validateControl(this);
				});
				//
				prevalidateForm(thisForm);
				//
				if(isError){
					return false;
				} else {
					thisForm.unbind('submit').submit();
					return false;
				}
			});
		});
		//
		// validatot functions
		//
		var validateControl = function(obj){
			err = 0;
			thisControl = jQuery(obj);
			//
			if(!thisControl.hasClass('required')){
				return 0;
			}
			// get form
			thisForm = thisControl.parents('form');
			// get control attributes
			thisControl.type = thisControl.attr('type');
			thisControl.name = thisControl.attr('name');
			thisControl.title = thisControl.attr('title');
			// is empty
			thisControl.val = thisControl.val();
			if(!validateNotEmpty(thisControl) && thisControl.type != 'select-one'){	
				showErrorMsg(thisControl);
				return ++err; //error
			}
			// classes
			thisControl.classes = thisControl.attr('class').split(/\s+/);
			// text inputs
			if(thisControl.type == 'text' || thisControl.type == 'textarea' || thisControl.type == 'password'){
				// 
				for(var i in thisControl.classes){
					if(!thisControl.classes[i]) continue;
					switch(thisControl.classes[i]){
						//
						case 'string':
							if(!validateString(thisControl.val)){
								err++;
							}
							break;
						case 'number':
							if(!validateNumber(thisControl.val)){
								err++;
							}
							break;
						case 'digits':
							if(!validateDigits(thisControl.val)){
								err++;
							}
							break;
						case 'password':
							if(!validateMinLength(thisControl.val, 6) || !validateMaxLength(thisControl.val, 20)){
								err++;
							}
							break;
						case 'email':
							if(!validateEmail(thisControl.val)){
								err++;
							}
							break;
						default:
							equalTo = /^equal-(\w+)/.exec(thisControl.classes[i]);
							if(equalTo){
								if(!validateEqual(equalTo[1])){
									err = 100;
									showEqualMsg(thisForm, thisControl.classes[i]);
								} else {
									hideEqualMsg(thisForm, thisControl.classes[i]);
								}
							}
							break;
					}
				}
			} else if(thisControl.type == 'select-one' && thisControl.title != ''){ // selects
				if(!validateSelect(thisControl)){
					err++;
				}
			}
			if(err){
				if(err < 100){
					showErrorMsg(thisControl);
				}
				return err;
			} else {
				return false;
			}
		} // end validate()
		
		//
		// rules 
		//
		// not empty
		var validateNotEmpty = function(obj){
			if(obj.val != '') {
				if(obj.title != '' && obj.title != 'undefined'){
					if(obj.val != obj.title){
						return true;
					} else {
						return false;
					}
				} else {
					return true;
				};
			}
			return false;
		}
		// min length
		var validateMinLength = function(val, len){
			return val.length >= len;
		}
		// min length
		var validateMaxLength = function(val, len){
			return val.length <= len;
		}
		// string (letters with basic punc)
		var validateString = function(val){
			return /^[a-z-.,()'\"\s]+$/i.test(val);
		}
		// numbers
		var validateNumber = function(val){
			return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(val);
		}
		// digits
		var validateDigits = function(val){
			return /^-?\d+$/.test(val);
		}
		// email
		var validateEmail = function(val){
			return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(val);
		}
		// equal to...
		var validateEqual = function(equalTo){
			if(jQuery('input.equal-'+equalTo+':eq(0)').val() != '' && jQuery('input.equal-'+equalTo+':eq(1)').val() != ''){
				return jQuery('input.equal-'+equalTo+':eq(0)').val() == jQuery('input.equal-'+equalTo+':eq(1)').val();
			}
			return true;
		}
		// selects
		var validateSelect = function(obj){
			return(obj.find('option:selected').text() != obj.title);
		}
		//
		// msgs
		//
		var showErrorMsg = function(obj){
			thisForm = obj.parents('form');
			thisForm.find('p.error-msg:hidden').slideDown(100);
			obj.addClass('error-field');
			obj.parent().find('div.field-error-msg').slideDown(100);
			obj.parents('div.form-item').find('label.required').addClass('error');
			//
			if(obj.hasClass('phone')){
				jQuery('input.phone').addClass('error-field');
			}
		};
		var hideErrorMsg = function(obj){
			obj = jQuery(obj);
			obj.removeClass('error-field').parent().find('div.field-error-msg').hide();
			//
			thisParent = jQuery(obj).parents('div.form-item');
			if(!thisParent.find('.error-field').length){
				thisParent.find('label.required').removeClass('error');
			}
			//
			thisForm = jQuery(obj).parents('form');
			hideEqualMsg(thisForm);
			//
			if(obj.hasClass('phone')){
				jQuery('input.phone').removeClass('error-field');
			}
		};
		var hideAllErrorMsgs = function(form){
			thisForm = jQuery(form);
			thisForm.find('.error-field').removeClass('error-field');
			thisForm.find('p.error-msg:visible, div.field-error-msg').hide();
			thisForm.find('label.required').removeClass('error');
			//
			hideEqualMsg(thisForm);
		};
		//
		var showEqualMsg = function(thisForm, thisClass){
			//alert(form);
			thisForm.find('input.'+thisClass).addClass('error-field');
			thisForm.find('div.'+thisClass+'-msg').slideDown(100);
			//
			thisParent = thisForm.find('div.'+thisClass+'-msg').parents('div.form-item');
			thisParent.find('label.required').addClass('error');
		};
		var hideEqualMsg = function(thisForm, thisClass){
			thisForm.find('input.'+thisClass).removeClass('error-field');
			thisForm.find('div.'+thisClass+'-msg').hide();
			//
			thisParent = thisForm.find('div.'+thisClass+'-msg').parents('div.form-item');
			thisParent.find('label.required').removeClass('error');
		};
		var hideAllEqualMsg = function(thisForm){
			thisForm.find('div.equal-msg').hide();
		};
		
		
		var prevalidateForm = function(form){
			// remove main error msg
			errFields = form.find('.error-field');
			if(!errFields.length){ 
				form.find('p.error-msg').hide();
			}
			// submit button state
			btn = form.find('button.open, input.open');
			if(btn.length){
				if(errFields.length){
					if(!btn.hasClass('disabled')){
						btn.addClass('disabled');
					}
				} else {
					btn.removeClass('disabled');
				}
			}
		}
		
	}
	/*
 	 * Form Validator END
 	 */
	
	
	var updateCart = function(plan, price){
		jQuery('#cart-plan').html(plan);
		jQuery('#cart-price').html(price);
	}
	
	var recalculateCart = function(){
		//
	}
	/*
 	 * Payment options & Shopping Cart END
 	 */
	 
	
	/*
 	 * Collapsible areas START
 	 */
	var collapsible = jQuery('div.open a');
	if(collapsible.length){
		
		var thisCollapsible, collapsibleClass, collapsibleState;
		collapsible.each(function(){
			// onload init
			thisCollapsible = jQuery(this);
			collapsibleClass = thisCollapsible.attr('class');
			collapsibleContent = jQuery('#'+thisCollapsible.attr('rel'));
			if(thisCollapsible.attr('class').indexOf("-open") == -1 && collapsibleContent.length){
				collapsibleContent.hide();
				collapsibleContent.find('div.popup-holder, div.popup-holder a.open').css({position:'static'});
			} else {
				thisCollapsible.parent('div').find('span').hide();
				collapsibleContent.css({overflow:'visible'});
			}
			// click event
			thisCollapsible.bind('click', function(){
				thisCollapsible = jQuery(this);
				collapsibleContent = jQuery('#'+thisCollapsible.attr('rel'));
				if(collapsibleContent.length){
					collapsibleClass = thisCollapsible.attr('class');
					collapsibleState = thisCollapsible.attr('class').indexOf("-open");
					if(collapsibleState < 0){
						collapsibleContent.slideDown(300, function(){
							collapsibleContent.css({overflow:'visible'});
							collapsibleContent.find('div.popup-holder, div.popup-holder a.open').css({position:'relative'});
						});
						thisCollapsible.attr('class', collapsibleClass+'-open');
						thisCollapsible.parent('div').find('span').fadeOut(100);
					} else if(collapsibleState > 0){
						collapsibleContent.find('div.popup-holder, div.popup-holder a.open').css({position:'static'});
						collapsibleContent.css({overflow:'hidden'}).slideUp(200, function(){
							collapsibleContent.find('div.popup').hide(); // hide inner popups
						});
						thisCollapsible.attr('class', collapsibleClass.replace("-open", ""));
						thisCollapsible.parent('div').find('span').fadeIn(300);
					}
				}
				return false;
			});
			
		});
	
	}
	 
	/*
 	 * Collapsible areas END
 	 */
	 
	/*
 	 * String trunkate START
 	 */
	var trunkate = jQuery('.trunkate');
	if(trunkate.length){
		var thisTrunkate, thisTxt, tClasses, tLength, maxLength;
		trunkate.each(function(){
			thisTrunkate = jQuery(this);
			//
			tClasses = thisTrunkate.attr('class').split(/\s+/);
			for(var i in tClasses){
				tLength = /^trunkate-(\w+)/.exec(tClasses[i]);
				if(tLength){
					maxLength = parseInt(tLength[1]);
					break;
				}
			}
			if(!maxLength){
				maxLength = 30;
			}
			thisTxt = thisTrunkate.text();
			if(thisTxt.length > maxLength-2){
				thisTrunkate.text(thisTxt.substr(0, maxLength) + '...');
			}
		});
	}
	/*
 	 * String trunkate END
 	 */
	
	
	/*
 	 * Terms check START
 	 */
	var termsCheckbox = jQuery('#check-terms');
	if(termsCheckbox.length){
		termsCheckbox.bind('change', function(e){
			if(termsCheckbox.is(':checked')){
				jQuery('button.new-account-submit.disabled').removeClass('disabled').bind('click',function(){
					jQuery(this).parents('form').submit();
				});
			} else {
				jQuery('button.new-account-submit').addClass('disabled').unbind('click');
			}
		});
		if(termsCheckbox.is(':checked')){
			jQuery('button.new-account-submit.disabled').removeClass('disabled').bind('click',function(){
				jQuery(this).parents('form').submit();
			});
		}
	}
	/*
 	 * Terms check END
 	 */
	 
	/*
 	 * Billing address START
 	 */
	var billingCheckbox = jQuery('#check-billing-address');
	if(billingCheckbox.length){
		var billingAddress = jQuery('#billing-address'),
			slideSpeed = 300;
		billingCheckbox.bind('change', function(e){
			if(billingCheckbox.is(':checked')){
				billingAddress.slideUp(slideSpeed/2);
				removeValidation();
			} else {
				billingAddress.slideDown(slideSpeed).find('textarea, input, select').addClass('required');
			}
		});
		if(billingCheckbox.is(':checked')){
			billingAddress.hide();
			removeValidation();
		}
		//
		var removeValidation = function(){
			billingAddress.find('textarea, input, select').removeClass('required error-field');
			billingAddress.find('label').removeClass('error');
			billingAddress.find('div.field-error-msg').hide();
			prevalidateForm(billingCheckbox.parents('form'));
		}
	}
	/*
 	 * Billing address END
 	 */
	 
	/*
 	 * Subscription-type validation START
 	 */
	var subscriptionForm = jQuery('form.form-subscription');
	if(subscriptionForm.length){
		var subscriptionType,
			radioIdInput = subscriptionForm.find('input.required');
		subscriptionForm.find('input:radio, a.radio').bind('click', function(){
			subscriptionType = jQuery('input:radio:checked').val();
			if(subscriptionType == 1){
				radioIdInput.not('required').addClass('required');
			} else {
				radioIdInput.removeClass('required');
				hideAllErrorMsgs(subscriptionForm);
				//
				prevalidateForm(subscriptionForm);
			}
		});
		if(subscriptionForm.find('input:radio:checked').val() != 1){
			radioIdInput.removeClass('required');
		}
	}
	/*
 	 * Subscription-type validation END
 	 */
	
}); 

function parseVersionString (str) {
    if (typeof(str) != 'string') { return false; }
    var x = str.split('.');
    // parse from string or default to 0 if can't parse
    var maj = parseInt(x[0]) || 0;
    var min = parseInt(x[1]) || 0;
    var pat = parseInt(x[2]) || 0;
    return {
        major: maj,
        minor: min,
        patch: pat
    }
}

function vMinMet(vmin, vcurrent) {
    minimum = parseVersionString(vmin);
    running = parseVersionString(vcurrent);
    if (running.major != minimum.major)
        return (running.major > minimum.major);
    else {
        if (running.minor != minimum.minor)
            return (running.minor > minimum.minor);
        else {
            if (running.patch != minimum.patch)
                return (running.patch > minimum.patch);
            else
                return true;
        }
    }
}
