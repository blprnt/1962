(function(){var j=void 0,k=!0,l=null,o=!1,p,r=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},s=function(a,b,c){s=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return s.apply(l,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var ea=document,fa=window;var t=function(a,b){this.width=a;this.height=b};t.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function u(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var v=function(a,b,c){a.addEventListener?a.addEventListener(b,c,o):a.attachEvent&&a.attachEvent("on"+b,c)},x=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,o):a.detachEvent&&a.detachEvent("on"+b,c)},ga=function(){var a=z;try{return!!a.location.href||""===a.location.href}catch(b){return o}};var ia=!!window.google_async_iframe_id,z=ia&&window.parent||window,A=function(){if(ia&&!ga()){for(var a="."+ea.domain;2<a.split(".").length&&!ga();)ea.domain=a=a.substr(a.indexOf(".")+1),z=window.parent;ga()||(z=window)}return z};var B=function(a,b){this.x=a!==j?a:0;this.y=b!==j?b:0};var D,ja,E,ka,la=function(){return r.navigator?r.navigator.userAgent:l};ka=E=ja=D=o;var ma;if(ma=la()){var na=r.navigator;D=0==ma.indexOf("Opera");ja=!D&&-1!=ma.indexOf("MSIE");E=!D&&-1!=ma.indexOf("WebKit");ka=!D&&!E&&"Gecko"==na.product}var F=D,G=ja,H=ka,I=E,oa;
a:{var pa="",J;if(F&&r.opera)var qa=r.opera.version,pa="function"==typeof qa?qa():qa;else if(H?J=/rv\:([^\);]+)(\)|;)/:G?J=/MSIE\s+([^\);]+)(\)|;)/:I&&(J=/WebKit\/(\S+)/),J)var ra=J.exec(la()),pa=ra?ra[1]:"";if(G){var sa,ta=r.document;sa=ta?ta.documentMode:j;if(sa>parseFloat(pa)){oa=String(sa);break a}}oa=pa}
var ua=oa,va={},K=function(a){var b;if(!(b=va[a])){b=0;for(var c=String(ua).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",i=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var m=i.exec(g)||["","",""],w=n.exec(h)||["","",""];if(0==m[0].length&&0==w[0].length)break;b=((0==m[1].length?0:parseInt(m[1],10))<(0==w[1].length?0:parseInt(w[1],10))?-1:(0==m[1].length?
0:parseInt(m[1],10))>(0==w[1].length?0:parseInt(w[1],10))?1:0)||((0==m[2].length)<(0==w[2].length)?-1:(0==m[2].length)>(0==w[2].length)?1:0)||(m[2]<w[2]?-1:m[2]>w[2]?1:0)}while(0==b)}b=va[a]=0<=b}return b},wa={},L=function(a){return wa[a]||(wa[a]=G&&!!document.documentMode&&document.documentMode>=a)};var xa;!G||L(9);!H&&!G||G&&L(9)||H&&K("1.9.1");G&&K("9");var za=function(a){return a?new ya(M(a)):xa||(xa=new ya)},M=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},ya=function(a){this.r=a||r.document||document};ya.prototype.createElement=function(a){return this.r.createElement(a)};var Aa=function(a){var b=a.r,a=!I&&"CSS1Compat"==b.compatMode?b.documentElement:b.body,b=b.parentWindow||b.defaultView;return new B(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};var N=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};var O=function(a,b){var c;a:{c=M(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,l))){c=c[b]||c.getPropertyValue(b)||"";break a}c=""}return c||(a.currentStyle?a.currentStyle[b]:l)||a.style&&a.style[b]},Ba=function(a){var b=a.getBoundingClientRect();G&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},Ca=function(a){if(G&&!L(8))return a.offsetParent;for(var b=M(a),c=O(a,"position"),
d="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=O(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return l},Da=function(a){var b,c=M(a),d=O(a,"position"),f=H&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),e=new B(0,0),g;b=c?M(c):document;if(g=G)if(g=!L(9))g="CSS1Compat"!=za(b).r.compatMode;
g=g?b.body:b.documentElement;if(a==g)return e;if(a.getBoundingClientRect)b=Ba(a),a=Aa(za(c)),e.x=b.left+a.x,e.y=b.top+a.y;else if(c.getBoxObjectFor&&!f)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),e.x=b.screenX-a.screenX,e.y=b.screenY-a.screenY;else{f=a;do{e.x+=f.offsetLeft;e.y+=f.offsetTop;f!=a&&(e.x+=f.clientLeft||0,e.y+=f.clientTop||0);if(I&&"fixed"==O(f,"position")){e.x+=c.body.scrollLeft;e.y+=c.body.scrollTop;break}f=f.offsetParent}while(f&&f!=a);if(F||I&&"absolute"==d)e.y-=c.body.offsetTop;
for(f=a;(f=Ca(f))&&f!=c.body&&f!=g;)if(e.x-=f.scrollLeft,!F||"TR"!=f.tagName)e.y-=f.scrollTop}return e},Ea=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var R=function(a,b,c,d,f,e){this.h=a;this.z=(a.bottom-a.top)*(a.right-a.left);this.s=this.e=-1;this.a=[0,0,0,0,0];this.j=[0,0,0,0,0];this.c=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.i="";this.n=o;this.w=k;this.A=c;this.g=this.b=-1;this.l=b;this.d=0;this.m=d;this.u=f||"";this.v=e||"";this.t=function(){};this.element=l;this.k=0;this.f=-1},Fa=new N(0,0,0,0);
R.prototype.update=function(a,b,c){var d=this.h,f=a-this.A||1;this.A=a;var e=Math.max(d.top,b.top),g=Math.min(d.bottom,b.bottom),h=-1,i=-1;if(e<=g){var n=Math.max(d.left,b.left),d=Math.min(d.right,b.right);if(n<=d&&(e=(g-e)*(d-n)/this.z,h=1<=e?0:0.75<=e?1:0.5<=e?2:0.25<=e?3:4,0>this.e&&(this.e=a),this.s=a,0.5<=e))i=100*this.z/((b.bottom-b.top)*(b.right-b.left)),i=20<=i?0:10<=i?1:5<=i?2:2.5<=i?3:4}-1!=this.b&&(this.a[this.b]+=f,2>=this.b&&-1!=this.g&&(this.zoom[this.g]+=f));for(a=this.b;0<=a&&4>=a;a++)if(this.c[a]+=
f,c||-1==h||a<h)this.c[a]>this.j[a]&&(this.j[a]=this.c[a]),this.c[a]=0;this.b=h;this.g=i;this.t(this,b)};R.prototype.B=function(a){this.f=a()};R.prototype.o=function(a){a=a();this.k+=a-this.f;this.f=-1};var Ga=function(a){Ga[" "](a);return a};Ga[" "]=function(){};!G||L(9);!G||L(9);var Ha=G&&!K("8");!I||K("528");H&&K("1.9b")||G&&K("8")||F&&K("9.5")||I&&K("528");H&&!K("8")||G&&K("9");var S=function(a,b){this.type=a;this.currentTarget=this.target=b};S.prototype.C=o;S.prototype.defaultPrevented=o;S.prototype.preventDefault=function(){this.defaultPrevented=k};var T=function(a,b){if(a){var c=this.type=a.type;S.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(H){var f;a:{try{Ga(d.nodeName);f=k;break a}catch(e){}f=o}f||(d=l)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=I||a.offsetX!==j?a.offsetX:a.layerX;this.offsetY=I||a.offsetY!==j?a.offsetY:a.layerY;this.clientX=a.clientX!==j?a.clientX:a.pageX;this.clientY=a.clientY!==j?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.q=a;a.defaultPrevented&&this.preventDefault();delete this.C}},Ia=function(){};Ia.prototype=S.prototype;T.D=S.prototype;T.prototype=new Ia;p=T.prototype;p.target=l;p.relatedTarget=l;p.offsetX=0;p.offsetY=0;p.clientX=0;p.clientY=0;p.screenX=0;
p.screenY=0;p.button=0;p.keyCode=0;p.charCode=0;p.ctrlKey=o;p.altKey=o;p.shiftKey=o;p.metaKey=o;p.q=l;p.preventDefault=function(){T.D.preventDefault.call(this);var a=this.q;if(a.preventDefault)a.preventDefault();else if(a.returnValue=o,Ha)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};p.p=function(){return this.q};var Ma=function(a){var b=fa;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new t(-1,-1);else{var d=(b||window).document,f="CSS1Compat"==d.compatMode?d.documentElement:d.body;c=new t(f.clientWidth,f.clientHeight)}return c}catch(e){return new t(-12245933,-12245933)}};var Oa=function(){Na(U,o)},Na=function(a,b){if(!(Pa||0==a.length)){var c=Ma(k);b||(Qa=c);if(!(-1==c.width||-1==c.height||-12245933==c.width||-12245933==c.height)){var d=l;try{d=Aa(za((window.top||r||window).document))}catch(f){return}for(var c=new N(d.y,d.x+c.width,d.y+c.height,d.x),d=V(),e=0;e<a.length;e++)a[e].update(d,c,b);Ra+=V()-d;Sa++}}},U=[],Pa=o,Ta=(new Date).getTime(),Ua=-1,Qa=l,V=function(){return(new Date).getTime()-Ta},Va=0,Wa=0,Ra=0,Sa=0,Xa=-1;var Za=function(){Y();Ya++},ab=function(){Y();$a++},cb=function(){Y();bb++},fb=function(){Y();db++;if("I"===Z||"B"===Z)eb=V();Z="F"},nb=function(){gb++;"F"===Z&&(mb+=V()-eb,eb=-1);Z="B"},ob,pb=-1,qb=-1,rb=-1;ob=function(a){Y();var b=V(),c=b-rb;if(-1===rb||500<c){rb=b;b=new T(a);a=b.clientX;b=b.clientY;if(-1!=pb&&-1!=qb){var c=a-pb,d=b-qb;sb+=Math.sqrt(c*c+d*d)}pb=a;qb=b}};
var Y=function(){var a=V();if(-1!==tb){var b=a-tb;if(0<b)for(var c=0;c<ub.length;c++)vb[c]+=Math.min(b,ub[c])}tb=a},wb=function(){var a=[];a.push("bc="+gb);a.push("cc="+$a);a.push("dcc="+bb);a.push("fc="+db);a.push("kp="+Ya);a.push("mmd="+sb);nb();a.push("ft="+mb);Y();for(var b=[],c=0;c<ub.length;c++)b.push(ub[c]);a.push("att="+b.join(","));b=[];for(c=0;c<vb.length;c++)b.push(vb[c]);a.push("at="+b.join(","));return a},vb=[0,0,0],ub=[5E3,1E4,3E4],gb=0,$a=0,bb=0,db=0,eb=-1,Z="I",mb=0,Ya=0,tb=-1,sb=
0;var $,xb=function(){if(2==$.getOseId())return k;for(var a=U,b=0;b<a.length;b++)if(!a[b].n)return k;return o},Cb=function(){try{var a=A(),b=V();Ua=b;Qa=Ma(k);var c;var d=A().document;!d.body||!d.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance?c=o:($=Goog_AdSense_getAdAdapterInstance(),c=k);if(c){Va=$.numBlocks();var f=[];Wa=0;$.getBlocks(function(a,c,d){Wa++;var e=a.getBoundingClientRect();try{var g=window.top,h=new B(0,0),i=M(a)?M(a).parentWindow||M(a).defaultView:
window,n=a;do{var Ja;if(i==g)Ja=Da(n);else{var q=n,C=new B;if(q.nodeType==1){if(q.getBoundingClientRect){var jb=Ba(q);C.x=jb.left;C.y=jb.top}else{var kb=Aa(za(q)),lb=Da(q);C.x=lb.x-kb.x;C.y=lb.y-kb.y}if(H&&!K(12)){var y=C,ha;var Q=j;G?Q="-ms-transform":I?Q="-webkit-transform":F?Q="-o-transform":H&&(Q="-moz-transform");var W=j;Q&&(W=O(q,Q));W||(W=O(q,"transform"));if(W){var Ka=W.match(Ea);ha=!Ka?new B(0,0):new B(parseFloat(Ka[1]),parseFloat(Ka[2]))}else ha=new B(0,0);C=new B(y.x+ha.x,y.y+ha.y)}}else{var Eb=
aa(q.p)=="function",y=q;q.targetTouches?y=q.targetTouches[0]:Eb&&q.p().targetTouches&&(y=q.p().targetTouches[0]);C.x=y.clientX;C.y=y.clientY}Ja=C}y=Ja;h.x=h.x+y.x;h.y=h.y+y.y}while(i&&i!=g&&(n=i.frameElement)&&(i=i.parent));var Fb=new N(Math.round(h.y),Math.round(e.right-e.left+h.x),Math.round(e.bottom-e.top+h.y),Math.round(h.x)),X=new R(Fb,c,b,d);X.element=a;X.t=yb;X.i=zb(Ab,c);var La=c.match(/[&\?](?:adk)=([0-9]+)/);X.d=La&&La.length==2?parseInt(La[1],10):0;f.push(X)}catch(Ob){f.push(new R(Fa,c,
b,d))}});U=f;Na(f,o);var e=2==$.getOseId();v(a,"scroll",Oa);v(a,"resize",Oa);if(e){var g;for(c=0;c<U.length;++c)if(g=U[c],g.element){var h=s(g.B,g,V);v(g.element,"mouseover",h);var i=s(g.o,g,V);v(g.element,"mouseout",i)}}e&&(v(a,"keyup",Za),v(a,"mousemove",ob),v(a,"click",ab),v(a,"dblclick",cb),v(a,"focus",fb),v(a,"blur",nb),fb());window.setTimeout(function(){Bb("t")},36E5);Xa=V()-b}else Bb("c")}catch(n){U=[],Bb("x")}},Bb=function(a){var b=A(),c=b.document;$||($=Goog_AdSense_getAdAdapterInstance());
if(!Pa){if(3!=$.getOseId()){"u"==a&&-1==Xa&&(a="l",U=[]);var d;d||(d="http");d=[[d,"://pagead2.googlesyndication.com/pagead/gen_204?id=osd"].join("")];try{var f=0<=Ua?V()-Ua:-1,e=U;if(0<e.length){Na(e,k);for(c=0;c<e.length;c++)if(0<e[c].d){0<e[c].f&&e[c].o(V);var g=e[c],h=g.h,i=["p:",h.top,h.left,h.bottom,h.right];i.push("tos:",g.a.join(","));i.push("mtos:",g.j.join(","));i.push("rs:",g.m);5!=g.m&&(i.push("zoom:",g.zoom.join(",")),i.push("ht:",g.k));0<=g.e&&i.push("tfs:",g.e,"tls:",g.s);g.i&&i.push("fp:",
g.i);5==g.m&&(g.v&&i.push("ord:",g.v),g.u&&i.push("amd:",g.u,";"),g.l&&i.push("req:",u(g.l).substring(0,500),";"));d.push("adk"+e[c].d+"="+u(i.join(",")))}g=k;h=Qa;d.push("bs="+h.width+","+h.height);var n;h=fa;g&&h.top!=h&&(h=h.top);try{var m=h.document;n=!h.scrollY&&"CSS1Compat"!=m.compatMode?new N(0,m.body.scrollWidth,m.body.scrollHeight,0):new N(0,m.body.offsetWidth,m.body.offsetHeight,0)}catch(w){n=new N(0,-12245933,-12245933,0)}d.push("ps="+n.right+","+n.bottom);d.push("ss="+screen.width+","+
screen.height);var P=zb(Gb,e[0].l);if(P&&("&"==P.charAt(0)||"?"==P.charAt(0)))P=P.slice(1);d.push("fp="+u(P))}else d.push("url="+u(b.location.href)),c.referrer&&d.push("referrer="+u(c.referrer)),$&&(d.push("correlator="+$.getCorrelator()),d.push("eid="+$.getOseExpId()),d.push("oid="+$.getOseId()));d.push("tt="+f);d.push("pt="+Ua);d.push("deb="+u([1,Va,Wa,Ra,Sa,Xa].join("-")));d.push("r="+a);d=d.concat(wb());x(b,"keyup",Za);x(b,"mousemove",ob);x(b,"click",ab);x(b,"dblclick",cb);x(b,"focus",fb);x(b,
"blur",nb);if(b.top!=b){d.push("iframe_loc="+u(b.location.href));var hb=Ma(o);d.push("is="+hb.width+","+hb.height)}}catch(Mb){d.push("error")}try{var Db=d.join("&");b.google_image_requests||(b.google_image_requests=[]);var ib=b.document.createElement("img");ib.src=Db;b.google_image_requests.push(ib)}catch(Nb){}}Pa=k}},Ab=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,Gb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,zb=function(a,b){var c=b.match(a);return c?c.join(""):""},Hb=function(a,b){if(b){a(b);
var c=b.frames;if(c){var d=c.length,f;for(f=0;f<d;++f)Hb(a,c[f])}}},Ib=function(a,b){try{b.postMessage(a,"*")}catch(c){}},yb=function(a,b){if(a&&!a.n){var c=1E3<=a.a[2]+a.a[1]+a.a[0];if(c||a.w){var d=c?"1":"0";a.w=o;var f=$.getCorrelator(),e=a.h,g=a.element.contentWindow;Hb(da(Ib,["{vi:",d,",cl:",f,",adk:",a.d,",pl:",e.left,",pr:",e.right,",pt:",e.top,",pb:",e.bottom,",vl:",b.left,",vr:",b.right,",vt:",b.top,",vb:",b.bottom,"}"].join("")),g);if(c&&(a.n=k,!xb()&&(c=2==$.getOseId(),d=A(),x(d,"scroll",
Oa),x(d,"resize",Oa),c)))for(d=0;d<U.length;++d)c=U[d],c.element&&(f=s(c.B,c,V),x(c.element,"mouseover",f),f=s(c.o,c,V),x(c.element,"mouseout",f))}}};var Jb=A();v(Jb,"unload",function(){Bb("u")});var Kb=A();if("complete"==Kb.document.readyState||Kb.google_onload_fired)Cb();else{var Lb=A();v(Lb,"load",function(){window.setTimeout(Cb,100)})};})();