(()=>{var D0=Object.defineProperty;var N0=(r,t,e)=>t in r?D0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Gt=(r,t,e)=>N0(r,typeof t!="symbol"?t+"":t,e);function sr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Lp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},na={duration:.5,overwrite:!1,delay:0},Hu,gn,Ue,bi=1e8,Ae=1/bi,Du=Math.PI*2,U0=Du/4,F0=0,Dp=Math.sqrt,O0=Math.cos,B0=Math.sin,sn=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},ar=function(t){return typeof t=="number"},Fl=function(t){return typeof t=="undefined"},qi=function(t){return typeof t=="object"},Qn=function(t){return t!==!1},Wu=function(){return typeof window!="undefined"},Al=function(t){return We(t)||sn(t)},Np=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,z0=/random\([^)]+\)/g,k0=/,\s*/g,Tp=/(?:-?\.?\d|\.)+/gi,Xu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Eu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yu=/[+-]=-?[.\d]+/,V0=/[^,'"\[\]\s]+/gi,G0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Xi,Nu,qu,si={},Il={},Up,Fp=function(t){return(Il=Ws(t,si))&&Tn},Ol=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ia=function(t,e){return!e&&console.warn(t)},Op=function(t,e){return t&&(si[t]=e)&&Il&&(Il[t]=e)||si},ra=function(){return 0},H0={suppressEvents:!0,isStart:!0,kill:!1},Cl={suppressEvents:!0,kill:!1},W0={suppressEvents:!0},Zu={},Cr=[],Uu={},Bp,$n={},Au={},wp=30,Rl=[],Ju="",$u=function(t){var e=t[0],n,i;if(qi(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Rl.length;i--&&!Rl[i].targetTest(e););n=Rl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new tf(t[i],n)))||t.splice(i,1);return t},Rr=function(t){return t._gsap||$u(Ti(t))[0]._gsap},Ku=function(t,e,n){return(n=t[e])&&We(n)?t[e]():Fl(n)&&t.getAttribute&&t.getAttribute(e)||n},zn=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},cs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},X0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ll=function(){var t=Cr.length,e=Cr.slice(0),n,i;for(Uu={},Cr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qu=function(t){return!!(t._initted||t._startAt||t.add)},zp=function(t,e,n,i){Cr.length&&!gn&&Ll(),t.render(e,n,i||!!(gn&&e<0&&Qu(t))),Cr.length&&!gn&&Ll()},kp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(V0).length<2?e:sn(t)?t.trim():t},Vp=function(t){return t},oi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Y0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ws=function(t,e){for(var n in e)t[n]=e[n];return t},Ep=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=qi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Dl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jo=function(t){var e=t.parent||Be,n=t.keyframes?Y0(bn(t.keyframes)):oi;if(Qn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},q0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Gp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Bl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Pr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ss=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Z0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Fu=function(t,e,n,i){return t._startAt&&(gn?t._startAt.revert(Cl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},J0=function r(t){return!t||t._ts&&r(t.parent)},Ap=function(t){return t._repeat?Xs(t._tTime,t=t.duration()+t._rDelay)*t:0},Xs=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},Nl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zl=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ae)||0))},kl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zl(t),n._dirty||ss(n,t)),t},Hp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Nl(t.rawTime(),e),(!e._dur||aa(0,e.totalDuration(),n)-e._tTime>Ae)&&e.render(n,!0)),ss(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ae}},Yi=function(t,e,n,i){return e.parent&&Pr(e),e._start=Oe((ar(n)?n:n||t!==Be?Mi(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Gp(t,e,"_first","_last",t._sort?"_start":0),Ou(e)||(t._recent=e),i||Hp(t,e),t._ts<0&&kl(t,t._tTime),t},Wp=function(t,e){return(si.ScrollTrigger||Ol("scrollTrigger",e))&&si.ScrollTrigger.create(e,t)},Xp=function(t,e,n,i,s){if(rf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bp!==Kn.frame)return Cr.push(t),t._lazy=[s,i],1},$0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ou=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},K0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&$0(t)&&!(!t._initted&&Ou(t))||(t._ts<0||t._dp._ts<0)&&!Ou(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=aa(0,t._tDur,e),h=Xs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Xs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||gn||i||t._zTime===Ae||!e&&t._zTime){if(!t._initted&&Xp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ae:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Fu(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Pr(t,1),!n&&!gn&&(ri(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Q0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ys=function(t,e,n,i){var s=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Oe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&kl(t,t._tTime=t._tDur*a),t.parent&&zl(t),n||ss(t.parent,t),t},Cp=function(t){return t instanceof Mn?ss(t):Ys(t,t._dur)},j0={_start:0,endTime:ra,totalDuration:ra},Mi=function r(t,e,n){var i=t.labels,s=t._recent||j0,o=t.duration()>=bi?s.endTime(!1):t._dur,a,l,c;return sn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ta=function(t,e,n){var i=ar(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;o.immediateRender=Qn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new $e(e[0],o,e[s+1])},Ir=function(t,e){return t||t===0?e(t):e},aa=function(t,e,n){return n<t?t:n>e?e:n},_n=function(t,e){return!sn(t)||!(e=G0.exec(t))?"":e[1]},tx=function(t,e,n){return Ir(n,function(i){return aa(t,e,i)})},Bu=[].slice,Yp=function(t,e){return t&&qi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&qi(t[0]))&&!t.nodeType&&t!==Xi},ex=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return sn(i)&&!e||Yp(i,1)?(s=n).push.apply(s,Ti(i)):n.push(i)})||n},Ti=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):sn(t)&&!n&&(Nu||!qs())?Bu.call((e||qu).querySelectorAll(t),0):bn(t)?ex(t,n):Yp(t)?Bu.call(t,0):t?[t]:[]},zu=function(t){return t=Ti(t)[0]||ia("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ti(e,n.querySelectorAll?n:n===t?ia("Invalid scope")||qu.createElement("div"):t)}},qp=function(t){return t.sort(function(){return .5-Math.random()})},Zp=function(t){if(We(t))return t;var e=qi(t)?t:{each:t},n=os(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return sn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||e).length,m=o[_],g,M,E,x,S,T,A,v,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,bi])[1],!w){for(A=-bi;A<(A=p[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(m=o[_]=[],g=l?Math.min(w,_)*h-.5:i%w,M=w===bi?0:l?_*d/w-.5:i/w|0,A=0,v=bi,T=0;T<_;T++)E=T%w-g,x=M-(T/w|0),m[T]=S=c?Math.abs(c==="y"?x:E):Dp(E*E+x*x),S>A&&(A=S),S<v&&(v=S);i==="random"&&qp(m),m.max=A-v,m.min=v,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=_n(e.amount||e.each)||0,n=n&&_<0?px(n):n}return _=(m[u]-m.min)/m.max||0,Oe(m.b+(n?n(_):_)*m.v)+m.u}},ku=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ar(n)?0:_n(n))}},Jp=function(t,e){var n=bn(t),i,s;return!n&&qi(t)&&(i=n=t.radius||bi,t.values?(t=Ti(t.values),(s=!ar(t[0]))&&(i*=i)):t=ku(t.increment)),Ir(e,n?We(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=bi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||ar(o)?h:h+_n(o)}:ku(t))},$p=function(t,e,n,i){return Ir(bn(t)?!e:n===!0?!!(n=0):!i,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},nx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},ix=function(t,e){return function(n){return t(parseFloat(n))+(e||_n(n))}},rx=function(t,e,n){return Qp(t,e,0,1,n)},Kp=function(t,e,n){return Ir(n,function(i){return t[~~e(i)]})},sx=function r(t,e,n){var i=e-t;return bn(t)?Kp(t,r(0,t.length),e):Ir(n,function(s){return(i+(s-t)%i)%i+t})},ox=function r(t,e,n){var i=e-t,s=i*2;return bn(t)?Kp(t,r(0,t.length-1),e):Ir(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Zs=function(t){return t.replace(z0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(k0);return $p(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qp=function(t,e,n,i,s){var o=e-t,a=i-n;return Ir(s,function(l){return n+((l-t)/o*a||0)})},ax=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=sn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=Ws(bn(t)?[]:{},t));if(!h){for(l in e)ef.call(a,t,l,"get",e[l]);s=function(p){return af(p,a)||(o?t.p:t)}}}return Ir(n,s)},Rp=function(t,e,n){var i=t.labels,s=bi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ri=function(t,e,n){var i=t.vars,s=i[e],o=Ue,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Cr.length&&Ll(),a&&(Ue=a),h=l?s.apply(c,l):s.call(c),Ue=o,h},Ko=function(t){return Pr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!gn),t.progress()<1&&ri(t,"onInterrupt"),t},Hs,jp=[],tm=function(t){if(t)if(t=!t.name&&t.default||t,Wu()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ra,render:af,add:ef,kill:Tx,modifier:bx,rawVars:0},o={targetTest:0,get:0,getSetter:Vl,aliases:{},register:0};if(qs(),t!==i){if($n[e])return;oi(i,oi(Dl(t,s),o)),Ws(i.prototype,Ws(s,Dl(t,o))),$n[i.prop=e]=i,t.targetTest&&(Rl.push(i),Zu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Op(e,i),t.register&&t.register(Tn,i,kn)}else jp.push(t)},Ee=255,Qo={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Cu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},em=function(t,e,n){var i=t?ar(t)?[t>>16,t>>8&Ee,t&Ee]:0:Qo.black,s,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qo[t])i=Qo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Tp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Cu(l+1/3,s,o),i[1]=Cu(l,s,o),i[2]=Cu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Xu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Tp)||Qo.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},nm=function(t){var e=[],n=[],i=-1;return t.split(or).forEach(function(s){var o=s.match(ls)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Pp=function(t,e,n){var i="",s=(t+i).match(or),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=em(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=nm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(or,"1").split(ls),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(or),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},or=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),lx=/hsl[a]?\(/,ju=function(t){var e=t.join(" "),n;if(or.lastIndex=0,or.test(e))return n=lx.test(e),t[1]=Pp(t[1],n),t[0]=Pp(t[0],n,nm(t[1])),!0},sa,Kn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function _(m){var g=r()-i,M=m===!0,E,x,S,T;if((g>t||g<0)&&(n+=g-e),i+=g,S=i-n,E=S-o,(E>0||M)&&(T=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=E+(E>=s?4:s-E),x=1),M||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](S,u,T,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Up&&(!Nu&&Wu()&&(Xi=Nu=window,qu=Xi.document||{},si.gsap=Tn,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(Tn.version),Fp(Il||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),jp.forEach(tm)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},sa=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),sa=0,c=ra},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,M){var E=g?function(x,S,T,A){m(x,S,T,A),d.remove(E)}:m;return d.remove(m),a[M?"unshift":"push"](E),qs(),E},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),qs=function(){return!sa&&Kn.wake()},ge={},cx=/^[\d.\-M][\d.\-,\s]/,hx=/["']/g,ux=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(hx,"").trim():+c,i=l.substr(a+1).trim();return e},fx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},dx=function(t){var e=(t+"").split("("),n=ge[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ux(e[1])]:fx(t).split(",").map(kp)):ge._CE&&cx.test(t)?ge._CE("",t):n},px=function(t){return function(e){return 1-t(1-e)}},os=function(t,e){return t&&(We(t)?t:ge[t]||dx(t))||e},hs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return zn(t,function(a){ge[a]=si[a]=s,ge[o=a.toLowerCase()]=n;for(var l in s)ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ge[a+"."+l]=s[l]}),s},im=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ru=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Du*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*B0((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:im(a);return s=Du/s,l.config=function(c,h){return r(t,c,h)},l},Pu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:im(n);return i.config=function(s){return r(t,s)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;hs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ge.Linear.easeNone=ge.none=ge.Linear.easeIn;hs("Elastic",Ru("in"),Ru("out"),Ru());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});hs("Circ",function(r){return-(Dp(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-O0(r*U0)+1});hs("Back",Pu("in"),Pu("out"),Pu());ge.SteppedEase=ge.steps=si.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ae;return function(a){return((i*aa(0,o,a)|0)+s)*n}}};na.ease=ge["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ju+=r+","+r+"Params,"});var tf=function(t,e){this.id=F0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ku,this.set=e?e.getSetter:Vl},oa=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ys(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),sa||Kn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kl(this,n),!s._dp||s.parent||Hp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ae||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ap(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ap(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ae?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ae?0:this._rts,this.totalTime(aa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),zl(this),Z0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ae&&(this._tTime-=Ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Yi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=W0);var i=gn;return gn=n,Qu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Mi(this,n),Qn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qn(i)),this._dur||(this._zTime=-Ae),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ae,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ae)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=We(n)?n:Vp,l=function(){var h=i.then;i.then=null,s&&s(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ko(this)},r})();oi(oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ae,_prom:0,_ps:!1,_rts:1});var Mn=(function(r){Lp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qn(n.sortChildren),Be&&Yi(n.parent||Be,sr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Wp(sr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ta(0,arguments,this),this},e.from=function(i,s,o){return ta(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ta(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,jo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $e(i,s,Mi(this,o),1),this},e.call=function(i,s,o){return Yi(this,$e.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new $e(i,o,Mi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,jo(o).immediateRender=Qn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,jo(a).immediateRender=Qn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,m,g,M,E,x,S,T,A;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Oe(h%m),h===l?(_=this._repeat,u=c):(S=Oe(h/m),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=Xs(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),T&&_&1&&(u=c-u,A=1),_!==S&&!this._lock){var v=T&&S&1,w=v===(T&&_&1);if(_<S&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(A?0:Oe(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Q0(this,Oe(a),Oe(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!S&&(ri(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){M=0,p&&(h+=this._zTime=-Ae);break}}f=p}else{f=this._last;for(var C=i<0?i:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||gn&&Qu(f)),u!==this._time||!this._ts&&!g){M=0,p&&(h+=this._zTime=C?-Ae:Ae);break}}f=p}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Ae)._zTime=u>=a?1:-1,this._ts))return this._start=x,zl(this),this.render(i,s,o);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Pr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ar(s)||(s=Mi(this,s,i)),!(i instanceof oa)){if(bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(sn(i))return this.addLabel(i,s);if(We(i))i=$e.delayedCall(0,i);else return this}return this!==i?Yi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $e?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return sn(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&Bl(this,i),i===this._recent&&(this._recent=this._last),ss(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Mi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=$e.delayedCall(0,s||ra,o);return a.data="isPause",this._hasPause=1,Yi(this,a,Mi(this,i))},e.removePause=function(i){var s=this._first;for(i=Mi(this,i);s;)s._start===i&&s.data==="isPause"&&Pr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ar!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Ti(i),l=this._first,c=ar(s),h;l;)l instanceof $e?X0(l._targets,a)&&(c?(!Ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Mi(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=$e.to(o,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ae,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Ys(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,oi({startAt:{time:Mi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Rp(this,Mi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Rp(this,Mi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ae)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ss(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ss(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=bi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Yi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ys(o,o===Be&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&(zp(Be,Nl(i,Be)),Bp=Kn.frame),Kn.frame>=wp){wp+=jn.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&jn.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},t})(oa);oi(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mx=function(t,e,n,i,s,o,a){var l=new kn(this._pt,t,e,0,1,of,null,s),c=0,h=0,d,u,f,p,_,m,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Zs(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(Eu)||[];d=Eu.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?cs(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Eu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Yu.test(i)||g)&&(l.e=0),this._pt=l,l},ef=function(t,e,n,i,s,o,a,l,c,h){We(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:We(d)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=We(d)?c?yx:om:sf,p;if(sn(i)&&(~i.indexOf("random(")&&(i=Zs(i)),i.charAt(1)==="="&&(p=cs(u,i)+(_n(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Vu)return!isNaN(u*i)&&i!==""?(p=new kn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Mx:am,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Ol(e,i),mx.call(this,t,e,u,i,f,l||jn.stringFilter,c))},gx=function(t,e,n,i,s){if(We(t)&&(t=ea(t,s,e,n,i)),!qi(t)||t.style&&t.nodeType||bn(t)||Np(t))return sn(t)?ea(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=ea(t[a],s,e,n,i);return o},nf=function(t,e,n,i,s,o){var a,l,c,h;if($n[t]&&(a=new $n[t]).init(s,a.rawVars?e[t]:gx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new kn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Hs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ar,Vu,rf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,M=g&&g.data==="nested"?g.vars.targets:m,E=t._overwrite==="auto"&&!Hu,x=t.timeline,S=i.easeReverse||d,T,A,v,w,C,D,I,k,L,z,H,V,Q;if(x&&(!u||!s)&&(s="none"),t._ease=os(s,na.ease),t._rEase=S&&(os(S)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||u&&!i.stagger){if(k=m[0]?Rr(m[0]).harness:0,V=k&&i[k.prop],T=Dl(i,Zu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?Cl:H0),_._lazy=0),o){if(Pr(t._startAt=$e.set(m,oi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Qn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn||!a&&!f)&&t._startAt.revert(Cl),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),v=oi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Qn(l),immediateRender:a,stagger:0,parent:g},T),V&&(v[k.prop]=V),Pr(t._startAt=$e.set(m,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn?t._startAt.revert(Cl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ae,Ae);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Qn(l)||l&&!p,A=0;A<m.length;A++){if(C=m[A],I=C._gsap||$u(m)[A]._gsap,t._ptLookup[A]=z={},Uu[I.id]&&Cr.length&&Ll(),H=M===m?A:M.indexOf(C),k&&(L=new k).init(C,V||T,t,H,M)!==!1&&(t._pt=w=new kn(t._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(q){z[q]=w}),L.priority&&(D=1)),!k||V)for(v in T)$n[v]&&(L=nf(v,T,t,H,C,M))?L.priority&&(D=1):z[v]=w=ef.call(t,C,v,"get",T[v],H,M,0,i.stringFilter);t._op&&t._op[A]&&t.kill(C,t._op[A]),E&&t._pt&&(Ar=t,Be.killTweensOf(C,z,t.globalTime(e)),Q=!t.parent,Ar=0),t._pt&&l&&(Uu[I.id]=1)}D&&lf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,u&&e<=0&&x.render(bi,!0,!0)},_x=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Vu=1,t.vars[e]="+=0",rf(t,a),Vu=0,l?ia(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Xe(n)+_n(d.e)),d.b&&(d.b=h.s+_n(d.b))},xx=function(t,e){var n=t[0]?Rr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ws({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},vx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(bn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ea=function(t,e,n,i,s){return We(t)?t.call(e,n,i,s):sn(t)&&~t.indexOf("random(")?Zs(t):t},rm=Ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sm={};zn(rm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return sm[r]=1});var $e=(function(r){Lp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:jo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Be,M=(bn(n)||Np(n)?ar(n[0]):"length"in i)?[n]:Ti(n),E,x,S,T,A,v,w,C;if(a._targets=M.length?$u(M):ia("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Al(c)||Al(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(E=a.timeline=new Mn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:M}),E.kill(),E.parent=E._dp=sr(a),E._start=0,u||Al(c)||Al(h)){if(T=M.length,w=u&&Zp(u),qi(u))for(A in u)~rm.indexOf(A)&&(C||(C={}),C[A]=u[A]);for(x=0;x<T;x++)S=Dl(i,sm),S.stagger=0,D&&(S.easeReverse=D),C&&Ws(S,C),v=M[x],S.duration=+ea(c,sr(a),x,v,M),S.delay=(+ea(h,sr(a),x,v,M)||0)-a._delay,!u&&T===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),E.to(v,S,w?w(x,v,M):0),E._ease=ge.none;E.duration()?c=h=0:a.timeline=0}else if(p){jo(oi(E.vars.defaults,{ease:"none"})),E._ease=os(p.ease||i.ease||"none");var I=0,k,L,z;if(bn(p))p.forEach(function(H){return E.to(M,H,">")}),E.duration();else{S={};for(A in p)A==="ease"||A==="easeEach"||vx(A,p[A],S,p.easeEach);for(A in S)for(k=S[A].sort(function(H,V){return H.t-V.t}),I=0,x=0;x<k.length;x++)L=k[x],z={ease:L.e,duration:(L.t-(x?k[x-1].t:0))/100*c},z[A]=L.v,E.to(M,z,I),I+=z.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!Hu&&(Ar=sr(a),Be.killTweensOf(M),Ar=0),Yi(g,sr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Oe(g._time)&&Qn(d)&&J0(sr(a))&&g.data!=="nested")&&(a._tTime=-Ae,a.render(Math.max(0,-h)||0)),m&&Wp(sr(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ae&&!h?l:i<Ae?0:i,u,f,p,_,m,g,M,E;if(!c)K0(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Oe(d%_),d===l?(p=this._repeat,u=c):(m=Oe(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=Xs(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Xp(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var S=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(x?-1:1)/S:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(ri(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Fu(this,i,s,o),ri(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Fu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Pr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){sa||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||rf(this,c),h=this._ease(c/this._dur),_x(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(kl(this,0),this.parent||Gp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ko(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ar&&Ar.vars.overwrite!==!0)._first||Ko(this),this.parent&&o!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ti(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!s||s==="all")&&q0(a,l))return s==="all"&&(this._pt=0),Ko(this);for(d=this._op=this._op||[],s!=="all"&&(sn(s)&&(_={},zn(s,function(M){return _[M]=1}),s=_),s=xx(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Bl(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ko(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ta(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ta(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Be.killTweensOf(i,s,o)},t})(oa);oi($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(r){$e[r]=function(){var t=new Mn,e=Bu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var sf=function(t,e,n){return t[e]=n},om=function(t,e,n){return t[e](n)},yx=function(t,e,n,i){return t[e](i.fp,n)},Sx=function(t,e,n){return t.setAttribute(e,n)},Vl=function(t,e){return We(t[e])?om:Fl(t[e])&&t.setAttribute?Sx:sf},am=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Mx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},of=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},af=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},bx=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Tx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Bl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},wx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},lf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},kn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||am,this.d=l||this,this.set=c||sf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=wx,this.m=n,this.mt=s,this.tween=i},r})();zn(Ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Zu[r]=1});si.TweenMax=si.TweenLite=$e;si.TimelineLite=si.TimelineMax=Mn;Be=new Mn({sortChildren:!1,defaults:na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=ju;var as=[],Pl={},Ex=[],Ip=0,Ax=0,Iu=function(t){return(Pl[t]||Ex).map(function(e){return e()})},Gu=function(){var t=Date.now(),e=[];t-Ip>2&&(Iu("matchMediaInit"),as.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Xi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Iu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ip=t,Iu("matchMedia"))},lm=(function(){function r(e,n){this.selector=n&&zu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ax++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){We(n)&&(s=i,i=n,n=We);var o=this,a=function(){var c=Ue,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=zu(s)),Ue=o,d=i.apply(o,arguments),We(d)&&o._r.push(d),Ue=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ue;Ue=null,n(this),Ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $e)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=as.length;o--;)as[o].id===this.id&&as.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Cx=(function(){function r(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){qi(n)||(n={matches:n});var o=new lm(0,s||this.scope),a=o.conditions={},l,c,h;Ue&&!o.selector&&(o.selector=Ue.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Xi.matchMedia(n[c]),l&&(as.indexOf(o)<0&&as.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Gu):l.addEventListener("change",Gu)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ul={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return tm(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){sn(t)&&(t=Ti(t)[0]);var s=Rr(t||{}).get,o=n?Vp:kp;return n==="native"&&(n=""),t&&(e?o(($n[e]&&$n[e].get||s)(t,e,n,i)):function(a,l,c){return o(($n[a]&&$n[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ti(t),t.length>1){var i=t.map(function(h){return Tn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=$n[e],a=Rr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Hs._pt=0,d.init(t,n?h+n:h,Hs,0,[t]),d.render(1,d),Hs._pt&&af(1,Hs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Tn.to(t,oi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=os(t.ease,na.ease)),Ep(na,t||{})},config:function(t){return Ep(jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!$n[a]&&!si[a]&&ia(e+" effect requires "+a+" plugin.")}),Au[e]=function(a,l,c){return n(Ti(a),oi(l||{},s),c)},o&&(Mn.prototype[e]=function(a,l,c){return this.add(Au[e](a,qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ge[t]=os(e)},parseEase:function(t,e){return arguments.length?os(t,e):ge},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,s;for(n.smoothChildTiming=Qn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof $e&&i.vars.onComplete===i._targets[0]))&&Yi(n,i,i._start-i._delay),i=s;return Yi(Be,n,0),n},context:function(t,e){return t?new lm(t,e):Ue},matchMedia:function(t){return new Cx(t)},matchMediaRefresh:function(){return as.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Gu()},addEventListener:function(t,e){var n=Pl[t]||(Pl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:sx,wrapYoyo:ox,distribute:Zp,random:$p,snap:Jp,normalize:rx,getUnit:_n,clamp:tx,splitColor:em,toArray:Ti,selector:zu,mapRange:Qp,pipe:nx,unitize:ix,interpolate:ax,shuffle:qp},install:Fp,effects:Au,ticker:Kn,updateRoot:Mn.updateRoot,plugins:$n,globalTimeline:Be,core:{PropTween:kn,globals:Op,Tween:$e,Timeline:Mn,Animation:oa,getCache:Rr,_removeLinkedListItem:Bl,reverting:function(){return gn},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return Hu=t}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ul[r]=$e[r]});Kn.add(Mn.updateRoot);Hs=Ul.to({},{duration:0});var Rx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Px=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Rx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Lu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(sn(s)&&(l={},zn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Px(a,s)}}}},Tn=Ul.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Lu("roundProps",ku),Lu("modifiers"),Lu("snap",Jp))||Ul;$e.version=Mn.version=Tn.version="3.15.0";Up=1;Wu()&&qs();var Ix=ge.Power0,Lx=ge.Power1,Dx=ge.Power2,Nx=ge.Power3,Ux=ge.Power4,Fx=ge.Linear,Ox=ge.Quad,Bx=ge.Cubic,zx=ge.Quart,kx=ge.Quint,Vx=ge.Strong,Gx=ge.Elastic,Hx=ge.Back,Wx=ge.SteppedEase,Xx=ge.Bounce,Yx=ge.Sine,qx=ge.Expo,Zx=ge.Circ;var cm,Lr,$s,pf,ps,Jx,hm,mf,$x=function(){return typeof window!="undefined"},cr={},ds=180/Math.PI,Ks=Math.PI/180,Js=Math.atan2,um=1e8,gf=/([A-Z])/g,Kx=/(left|right|width|margin|padding|x)/i,Qx=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},tv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ev=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},nv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ym=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},iv=function(t,e,n){return t.style[e]=n},rv=function(t,e,n){return t.style.setProperty(e,n)},sv=function(t,e,n){return t._gsap[e]=n},ov=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},av=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},lv=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",ti=ze+"Origin",cv=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in cr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=lr(i,a)}):this.tfm[t]=o.x?o[t]:lr(i,t),t===ti&&(this.tfm.zOrigin=o.zOrigin);else return Zi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ti,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},Sm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},hv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(gf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=mf(),(!s||!s.isStart)&&!n[ze]&&(Sm(n),i.zOrigin&&n[ti]&&(n[ti]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Mm=function(t,e){var n={target:t,props:[],revert:hv,save:cv};return t._gsap||Tn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},bm,uf=function(t,e){var n=Lr.createElementNS?Lr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Lr.createElement(t);return n&&n.style?n:Lr.createElement(t)},ai=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(gf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Qs(e)||e,1)||""},fm="O,Moz,ms,Ms,Webkit".split(","),Qs=function(t,e,n){var i=e||ps,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(fm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?fm[o]:"")+t},ff=function(){$x()&&window.document&&(cm=window,Lr=cm.document,$s=Lr.documentElement,ps=uf("div")||{style:{}},Jx=uf("div"),ze=Qs(ze),ti=ze+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bm=!!Qs("perspective"),mf=Tn.core.reverting,pf=1)},dm=function(t){var e=t.ownerSVGElement,n=uf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),$s.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),$s.removeChild(n),s},pm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tm=function(t){var e,n;try{e=t.getBBox()}catch{e=dm(t),n=1}return e&&(e.width||e.height)||n||(e=dm(t)),e&&!e.width&&!e.x&&!e.y?{x:+pm(t,["x","cx","x1"])||0,y:+pm(t,["y","cy","y1"])||0,width:0,height:0}:e},wm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tm(t))},Nr=function(t,e){if(e){var n=t.style,i;e in cr&&e!==ti&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(gf,"-$1").toLowerCase())):n.removeAttribute(e)}},Dr=function(t,e,n,i,s,o){var a=new kn(t._pt,e,n,0,1,o?ym:vm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},mm={deg:1,rad:1,turn:1},uv={grid:1,flex:1},Ur=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ps.style,l=Kx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,_,m,g;if(i===o||!s||mm[i]||mm[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&wm(t),(f||o==="%")&&(cr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Xe(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Lr||!_.appendChild)&&(_=Lr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Kn.time&&!m.uncache)return Xe(s/m.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,p=t[h],M?t.style[e]=M:Nr(t,e)}else(f||o==="%")&&!uv[ai(_,"display")]&&(a.position=ai(t,"position")),_===t&&(a.position="static"),_.appendChild(ps),p=ps[h],_.removeChild(ps),a.position="absolute";return l&&f&&(m=Rr(_),m.time=Kn.time,m.width=_[h]),Xe(u?p*s/d:p&&s?d/p*s:0)},lr=function(t,e,n,i){var s;return pf||ff(),e in Zi&&e!=="transform"&&(e=Zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),cr[e]&&e!=="transform"?(s=ha(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Hl(ai(t,ti))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gl[e]&&Gl[e](t,e,n)||ai(t,e)||Ku(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ur(t,e,s,n)+n:s},fv=function(t,e,n,i){if(!n||n==="none"){var s=Qs(e,t,1),o=s&&ai(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ai(t,"borderTopColor"))}var a=new kn(this._pt,t.style,e,0,1,of),l=0,c=0,h,d,u,f,p,_,m,g,M,E,x,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ai(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ai(t,e)||i,_?t.style[e]=_:Nr(t,e)),h=[n,i],ju(h),n=h[0],i=h[1],u=n.match(ls)||[],S=i.match(ls)||[],S.length){for(;d=ls.exec(i);)m=d[0],M=i.substring(l,d.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=cs(f,m)+x),g=parseFloat(m),E=m.substr((g+"").length),l=ls.lastIndex-E.length,E||(E=E||jn.units[e]||x,l===i.length&&(i+=E,a.e+=E)),x!==E&&(f=Ur(t,e,_,E)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?ym:vm;return Yu.test(i)&&(a.e=0),this._pt=a,a},gm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=gm[n]||n,e[1]=gm[i]||i,e.join(" ")},pv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],cr[a]&&(l=1,a=a==="transformOrigin"?ti:ze),Nr(n,a);l&&(Nr(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ha(n,1),o.uncache=1,Sm(i)))}},Gl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new kn(t._pt,e,n,0,0,pv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ca=[1,0,0,1,0,0],Em={},Am=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_m=function(t){var e=ai(t,ze);return Am(e)?ca:e.substr(7).match(Xu).map(Xe)},_f=function(t,e){var n=t._gsap||Rr(t),i=t.style,s=_m(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ca:s):(s===ca&&!t.offsetParent&&t!==$s&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,$s.appendChild(t)),s=_m(t),l?i.display=l:Nr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):$s.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},df=function(t,e,n,i,s,o){var a=t._gsap,l=s||_f(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],M=l[5],E=e.split(" "),x=parseFloat(E[0])||0,S=parseFloat(E[1])||0,T,A,v,w;n?l!==ca&&(A=f*m-p*_)&&(v=x*(m/A)+S*(-_/A)+(_*M-m*g)/A,w=x*(-p/A)+S*(f/A)-(f*M-p*g)/A,x=v,S=w):(T=Tm(t),x=T.x+(~E[0].indexOf("%")?x/100*T.width:x),S=T.y+(~(E[1]||E[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&a.smooth?(g=x-c,M=S-h,a.xOffset=d+(g*f+M*_)-g,a.yOffset=u+(g*p+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[ti]="0px 0px",o&&(Dr(o,a,"xOrigin",c,x),Dr(o,a,"yOrigin",h,S),Dr(o,a,"xOffset",d,a.xOffset),Dr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+S)},ha=function(t,e){var n=t._gsap||new tf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ai(t,ti)||"0",h,d,u,f,p,_,m,g,M,E,x,S,T,A,v,w,C,D,I,k,L,z,H,V,Q,q,P,$,ct,_t,zt,Vt;return h=d=u=_=m=g=M=E=x=0,f=p=1,n.svg=!!(t.getCTM&&wm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),A=_f(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),df(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,T=n.yOrigin||0,A!==ca&&(D=A[0],I=A[1],k=A[2],L=A[3],h=z=A[4],d=H=A[5],A.length===6?(f=Math.sqrt(D*D+I*I),p=Math.sqrt(L*L+k*k),_=D||I?Js(I,D)*ds:0,M=k||L?Js(k,L)*ds+_:0,M&&(p*=Math.abs(Math.cos(M*Ks))),n.svg&&(h-=S-(S*D+T*k),d-=T-(S*I+T*L))):(Vt=A[6],_t=A[7],P=A[8],$=A[9],ct=A[10],zt=A[11],h=A[12],d=A[13],u=A[14],v=Js(Vt,ct),m=v*ds,v&&(w=Math.cos(-v),C=Math.sin(-v),V=z*w+P*C,Q=H*w+$*C,q=Vt*w+ct*C,P=z*-C+P*w,$=H*-C+$*w,ct=Vt*-C+ct*w,zt=_t*-C+zt*w,z=V,H=Q,Vt=q),v=Js(-k,ct),g=v*ds,v&&(w=Math.cos(-v),C=Math.sin(-v),V=D*w-P*C,Q=I*w-$*C,q=k*w-ct*C,zt=L*C+zt*w,D=V,I=Q,k=q),v=Js(I,D),_=v*ds,v&&(w=Math.cos(v),C=Math.sin(v),V=D*w+I*C,Q=z*w+H*C,I=I*w-D*C,H=H*w-z*C,D=V,z=Q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Xe(Math.sqrt(D*D+I*I+k*k)),p=Xe(Math.sqrt(H*H+Vt*Vt)),v=Js(z,H),M=Math.abs(v)>2e-4?v*ds:0,x=zt?1/(zt<0?-zt:zt):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Am(ai(t,ze)),V&&t.setAttribute("transform",V))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Xe(f),n.scaleY=Xe(p),n.rotation=Xe(_)+a,n.rotationX=Xe(m)+a,n.rotationY=Xe(g)+a,n.skewX=M+a,n.skewY=E+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ti]=Hl(c)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?gv:bm?Cm:mv,n.uncache=0,n},Hl=function(t){return(t=t.split(" "))[0]+" "+t[1]},cf=function(t,e,n){var i=_n(e);return Xe(parseFloat(e)+parseFloat(Ur(t,"x",n+"px",i)))+i},mv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cm(t,e)},us="0deg",la="0px",fs=") ",Cm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,M=n.target,E=n.zOrigin,x="",S=g==="auto"&&t&&t!==1||g===!0;if(E&&(d!==us||h!==us)){var T=parseFloat(h)*Ks,A=Math.sin(T),v=Math.cos(T),w;T=parseFloat(d)*Ks,w=Math.cos(T),o=cf(M,o,A*w*-E),a=cf(M,a,-Math.sin(T)*-E),l=cf(M,l,v*w*-E+E)}m!==la&&(x+="perspective("+m+fs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(S||o!==la||a!==la||l!==la)&&(x+=l!==la||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),c!==us&&(x+="rotate("+c+fs),h!==us&&(x+="rotateY("+h+fs),d!==us&&(x+="rotateX("+d+fs),(u!==us||f!==us)&&(x+="skew("+u+", "+f+fs),(p!==1||_!==1)&&(x+="scale("+p+", "+_+fs),M.style[ze]=x||"translate(0, 0)"},gv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,M=n.forceCSS,E=parseFloat(o),x=parseFloat(a),S,T,A,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ks,c*=Ks,S=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ks,w=Math.tan(c-h),w=Math.sqrt(1+w*w),A*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),S*=w,T*=w)),S=Xe(S),T=Xe(T),A=Xe(A),v=Xe(v)):(S=d,v=u,T=A=0),(E&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(E=Ur(f,"x",o,"px"),x=Ur(f,"y",a,"px")),(p||_||m||g)&&(E=Xe(E+p-(p*S+_*A)+m),x=Xe(x+_-(p*T+_*v)+g)),(i||s)&&(w=f.getBBox(),E=Xe(E+i/100*w.width),x=Xe(x+s/100*w.height)),w="matrix("+S+","+T+","+A+","+v+","+E+","+x+")",f.setAttribute("transform",w),M&&(f.style[ze]=w)},_v=function(t,e,n,i,s){var o=360,a=sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*um)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*um)%o-~~(c/o)*o)),t._pt=u=new kn(t._pt,e,n,i,c,jx),u.e=h,u.u="deg",t._props.push(n),u},xm=function(t,e){for(var n in e)t[n]=e[n];return t},xv=function(t,e,n){var i=xm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=ha(n,1),Nr(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=ha(n,1),o[ze]=c);for(l in cr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=_n(c),p=_n(h),d=f!==p?Ur(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new kn(t._pt,a,l,d,u-d,hf),t._pt.u=p||0,t._props.push(l));xm(a,i)};zn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Gl[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return lr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var xf={name:"css",register:ff,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,m,g,M,E,x,S,T,A,v,w;pf||ff(),this.styles=this.styles||Mm(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!($n[_]&&nf(_,e,n,i,t,s)))){if(f=typeof h,p=Gl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Zs(h)),p)p(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",or.lastIndex=0,or.test(c)||(m=_n(c),g=_n(h),g?m!==g&&(c=Ur(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],sn(c)&&~c.indexOf("random(")&&(c=Zs(c)),_n(c+"")||c==="auto"||(c+=jn.units[_]||_n(lr(t,_))||""),(c+"").charAt(1)==="="&&(c=lr(t,_))):c=lr(t,_),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in Zi&&(_==="autoAlpha"&&(u===1&&lr(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),Dr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in cr,E){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ai(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ai(t,"perspective"),C?t.style.perspective=C:Nr(t,"perspective")}d=parseFloat(h)}if(x||(S=t._gsap,S.renderTransform&&!e.parseTransform||ha(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,x=this._pt=new kn(this._pt,a,ze,0,1,S.renderTransform,S,0,-1),x.dep=1),_==="scale")this._pt=new kn(this._pt,S,"scaleY",S.scaleY,(M?cs(S.scaleY,M+d):d)-S.scaleY||0,hf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ti,0,a[ti]),h=dv(h),S.svg?df(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&Dr(this,S,"zOrigin",S.zOrigin,g),Dr(this,a,_,Hl(c),Hl(h)));continue}else if(_==="svgOrigin"){df(t,h,1,T,0,this);continue}else if(_ in Em){_v(this,S,_,u,M?cs(u,M+h):h);continue}else if(_==="smoothOrigin"){Dr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){xv(this,h,t);continue}}else _ in a||(_=Qs(_)||_);if(E||(d||d===0)&&(u||u===0)&&!Qx.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),g=_n(h)||(_ in jn.units?jn.units[_]:m),m!==g&&(u=Ur(t,_,c,g)),this._pt=new kn(this._pt,E?S:a,_,u,(M?cs(u,M+d):d)-u,!E&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?nv:hf),this._pt.u=g||0,E&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=ev):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=tv);else if(_ in a)fv.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Ol(_,h);continue}E||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}A&&lf(this)},render:function(t,e){if(e.tween._time||!mf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:lr,aliases:Zi,getSetter:function(t,e,n){var i=Zi[e];return i&&i.indexOf(",")<0&&(e=i),e in cr&&e!==ti&&(t._gsap.x||lr(t,"x"))?n&&hm===n?e==="scale"?ov:sv:(hm=n||{})&&(e==="scale"?av:lv):t.style&&!Fl(t.style[e])?iv:~e.indexOf("-")?rv:Vl(t,e)},core:{_removeProperty:Nr,_getMatrix:_f}};Tn.utils.checkPrefix=Qs;Tn.core.getStyleSaver=Mm;(function(r,t,e,n){var i=zn(r+","+t+","+e,function(s){cr[s]=1});zn(t,function(s){jn.units[s]="deg",Em[s]=1}),Zi[i[13]]=r+","+t,zn(n,function(s){var o=s.split(":");Zi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jn.units[r]="px"});Tn.registerPlugin(xf);var ie=Tn.registerPlugin(xf)||Tn,H1=ie.core.Tween;function Rm(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function vv(r,t,e){return t&&Rm(r.prototype,t),e&&Rm(r,e),r}var xn,Yl,yv,li,Fr,Or,to,Im,ms,eo,Lm,hr,Ii,Dm,Nm=function(){return xn||typeof window!="undefined"&&(xn=window.gsap)&&xn.registerPlugin&&xn},Um=1,js=[],oe=[],Li=[],fa=Date.now,vf=function(t,e){return e},Sv=function(){var t=eo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Li),oe=n,Li=i,vf=function(o,a){return e[o](a)}},fr=function(t,e){return~Li.indexOf(t)&&Li[Li.indexOf(t)+1][e]},da=function(t){return!!~Lm.indexOf(t)},Gn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Wl="scrollLeft",Xl="scrollTop",yf=function(){return hr&&hr.isPressed||oe.cache++},ql=function(t,e){var n=function i(s){if(s||s===0){Um&&(li.history.scrollRestoration="manual");var o=hr&&hr.isPressed;s=i.v=Math.round(s)||(hr&&hr.iOS?1:0),t(s),i.cacheID=oe.cache,o&&vf("ss",s)}else(e||oe.cache!==i.cacheID||vf("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ql(function(r){return arguments.length?li.scrollTo(r,tn.sc()):li.pageXOffset||Fr[Wl]||Or[Wl]||to[Wl]||0})},tn={s:Xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:ql(function(r){return arguments.length?li.scrollTo(wn.sc(),r):li.pageYOffset||Fr[Xl]||Or[Xl]||to[Xl]||0})},Hn=function(t,e){return(e&&e._ctx&&e._ctx.selector||xn.utils.toArray)(t)[0]||(typeof t=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Mv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ur=function(t,e){var n=e.s,i=e.sc;da(t)&&(t=Fr.scrollingElement||Or);var s=oe.indexOf(t),o=i===tn.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+o]||Gn(t,"scroll",yf);var a=oe[s+o],l=a||(oe[s+o]=ql(fr(t,n),!0)||(da(t)?i:ql(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=xn.getProperty(t,"scrollBehavior")==="smooth"),l},Zl=function(t,e,n){var i=t,s=t,o=fa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=fa();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(p){var _=a,m=s,g=fa();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},ua=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Pm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Fm=function(){eo=xn.core.globals().ScrollTrigger,eo&&eo.core&&Sv()},Om=function(t){return xn=t||Nm(),!Yl&&xn&&typeof document!="undefined"&&document.body&&(li=window,Fr=document,Or=Fr.documentElement,to=Fr.body,Lm=[li,Fr,Or,to],yv=xn.utils.clamp,Dm=xn.core.context||function(){},ms="onpointerenter"in to?"pointer":"mouse",Im=Ye.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ii=Ye.eventTypes=("ontouchstart"in Or?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Or?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Um=0},500),Yl=1),eo||Fm(),Yl};wn.op=tn;oe.cache=0;var Ye=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Yl||Om(xn)||console.warn("Please gsap.registerPlugin(Observer)"),eo||Fm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,M=n.onDrag,E=n.onPress,x=n.onRelease,S=n.onRight,T=n.onLeft,A=n.onUp,v=n.onDown,w=n.onChangeX,C=n.onChangeY,D=n.onChange,I=n.onToggleX,k=n.onToggleY,L=n.onHover,z=n.onHoverEnd,H=n.onMove,V=n.ignoreCheck,Q=n.isNormalizer,q=n.onGestureStart,P=n.onGestureEnd,$=n.onWheel,ct=n.onEnable,_t=n.onDisable,zt=n.onClick,Vt=n.scrollSpeed,Qt=n.capture,J=n.allowClicks,et=n.lockAxis,pt=n.onLockAxis;this.target=a=Hn(a)||Or,this.vars=n,f&&(f=xn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Vt=Vt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(to).lineHeight)||22);var Xt,vt,Lt,Nt,j,rt,at,N=this,dt=0,kt=0,Ut=n.passive||!h&&n.passive!==!1,Ct=ur(a,wn),Jt=ur(a,tn),U=Ct(),ce=Jt(),qt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ii[0]==="pointerdown",R=da(a),y=a.ownerDocument||Fr,G=[0,0,0],W=[0,0,0],K=0,mt=function(){return K=fa()},ht=function(ot,Yt){return(N.event=ot)&&f&&Mv(ot.target,f)||Yt&&qt&&ot.pointerType!=="touch"||V&&V(ot,Yt)},tt=function(){N._vx.reset(),N._vy.reset(),vt.pause(),d&&d(N)},it=function(){var ot=N.deltaX=Pm(G),Yt=N.deltaY=Pm(W),lt=Math.abs(ot)>=i,Zt=Math.abs(Yt)>=i;D&&(lt||Zt)&&D(N,ot,Yt,G,W),lt&&(S&&N.deltaX>0&&S(N),T&&N.deltaX<0&&T(N),w&&w(N),I&&N.deltaX<0!=dt<0&&I(N),dt=N.deltaX,G[0]=G[1]=G[2]=0),Zt&&(v&&N.deltaY>0&&v(N),A&&N.deltaY<0&&A(N),C&&C(N),k&&N.deltaY<0!=kt<0&&k(N),kt=N.deltaY,W[0]=W[1]=W[2]=0),(Nt||Lt)&&(H&&H(N),Lt&&(m&&Lt===1&&m(N),M&&M(N),Lt=0),Nt=!1),rt&&!(rt=!1)&&pt&&pt(N),j&&($(N),j=!1),Xt=0},yt=function(ot,Yt,lt){G[lt]+=ot,W[lt]+=Yt,N._vx.update(ot),N._vy.update(Yt),c?Xt||(Xt=requestAnimationFrame(it)):it()},Dt=function(ot,Yt){et&&!at&&(N.axis=at=Math.abs(ot)>Math.abs(Yt)?"x":"y",rt=!0),at!=="y"&&(G[2]+=ot,N._vx.update(ot,!0)),at!=="x"&&(W[2]+=Yt,N._vy.update(Yt,!0)),c?Xt||(Xt=requestAnimationFrame(it)):it()},St=function(ot){if(!ht(ot,1)){ot=ua(ot,h);var Yt=ot.clientX,lt=ot.clientY,Zt=Yt-N.x,Ft=lt-N.y,te=N.isDragging;N.x=Yt,N.y=lt,(te||(Zt||Ft)&&(Math.abs(N.startX-Yt)>=s||Math.abs(N.startY-lt)>=s))&&(Lt||(Lt=te?2:1),te||(N.isDragging=!0),Dt(Zt,Ft))}},xt=N.onPress=function(ut){ht(ut,1)||ut&&ut.button||(N.axis=at=null,vt.pause(),N.isPressed=!0,ut=ua(ut),dt=kt=0,N.startX=N.x=ut.clientX,N.startY=N.y=ut.clientY,N._vx.reset(),N._vy.reset(),Gn(Q?a:y,Ii[1],St,Ut,!0),N.deltaX=N.deltaY=0,E&&E(N))},ft=N.onRelease=function(ut){if(!ht(ut,1)){Vn(Q?a:y,Ii[1],St,!0);var ot=!isNaN(N.y-N.startY),Yt=N.isDragging,lt=Yt&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Zt=ua(ut);!lt&&ot&&(N._vx.reset(),N._vy.reset(),h&&J&&xn.delayedCall(.08,function(){if(fa()-K>300&&!ut.defaultPrevented){if(ut.target.click)ut.target.click();else if(y.createEvent){var Ft=y.createEvent("MouseEvents");Ft.initMouseEvent("click",!0,!0,li,1,Zt.screenX,Zt.screenY,Zt.clientX,Zt.clientY,!1,!1,!1,!1,0,null),ut.target.dispatchEvent(Ft)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&Yt&&!Q&&vt.restart(!0),Lt&&it(),g&&Yt&&g(N),x&&x(N,lt)}},Ht=function(ot){return ot.touches&&ot.touches.length>1&&(N.isGesturing=!0)&&q(ot,N.isDragging)},$t=function(){return(N.isGesturing=!1)||P(N)},O=function(ot){if(!ht(ot)){var Yt=Ct(),lt=Jt();yt((Yt-U)*Vt,(lt-ce)*Vt,1),U=Yt,ce=lt,d&&vt.restart(!0)}},gt=function(ot){if(!ht(ot)){ot=ua(ot,h),$&&(j=!0);var Yt=(ot.deltaMode===1?l:ot.deltaMode===2?li.innerHeight:1)*p;yt(ot.deltaX*Yt,ot.deltaY*Yt,0),d&&!Q&&vt.restart(!0)}},nt=function(ot){if(!ht(ot)){var Yt=ot.clientX,lt=ot.clientY,Zt=Yt-N.x,Ft=lt-N.y;N.x=Yt,N.y=lt,Nt=!0,d&&vt.restart(!0),(Zt||Ft)&&Dt(Zt,Ft)}},Mt=function(ot){N.event=ot,L(N)},Tt=function(ot){N.event=ot,z(N)},st=function(ot){return ht(ot)||ua(ot,h)&&zt(N)};vt=N._dc=xn.delayedCall(u||.25,tt).pause(),N.deltaX=N.deltaY=0,N._vx=Zl(0,50,!0),N._vy=Zl(0,50,!0),N.scrollX=Ct,N.scrollY=Jt,N.isDragging=N.isGesturing=N.isPressed=!1,Dm(this),N.enable=function(ut){return N.isEnabled||(Gn(R?y:a,"scroll",yf),o.indexOf("scroll")>=0&&Gn(R?y:a,"scroll",O,Ut,Qt),o.indexOf("wheel")>=0&&Gn(a,"wheel",gt,Ut,Qt),(o.indexOf("touch")>=0&&Im||o.indexOf("pointer")>=0)&&(Gn(a,Ii[0],xt,Ut,Qt),Gn(y,Ii[2],ft),Gn(y,Ii[3],ft),J&&Gn(a,"click",mt,!0,!0),zt&&Gn(a,"click",st),q&&Gn(y,"gesturestart",Ht),P&&Gn(y,"gestureend",$t),L&&Gn(a,ms+"enter",Mt),z&&Gn(a,ms+"leave",Tt),H&&Gn(a,ms+"move",nt)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=Nt=Lt=!1,N._vx.reset(),N._vy.reset(),U=Ct(),ce=Jt(),ut&&ut.type&&xt(ut),ct&&ct(N)),N},N.disable=function(){N.isEnabled&&(js.filter(function(ut){return ut!==N&&da(ut.target)}).length||Vn(R?y:a,"scroll",yf),N.isPressed&&(N._vx.reset(),N._vy.reset(),Vn(Q?a:y,Ii[1],St,!0)),Vn(R?y:a,"scroll",O,Qt),Vn(a,"wheel",gt,Qt),Vn(a,Ii[0],xt,Qt),Vn(y,Ii[2],ft),Vn(y,Ii[3],ft),Vn(a,"click",mt,!0),Vn(a,"click",st),Vn(y,"gesturestart",Ht),Vn(y,"gestureend",$t),Vn(a,ms+"enter",Mt),Vn(a,ms+"leave",Tt),Vn(a,ms+"move",nt),N.isEnabled=N.isPressed=N.isDragging=!1,_t&&_t(N))},N.kill=N.revert=function(){N.disable();var ut=js.indexOf(N);ut>=0&&js.splice(ut,1),hr===N&&(hr=0)},js.push(N),Q&&da(a)&&(hr=N),N.enable(_)},vv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ye.version="3.15.0";Ye.create=function(r){return new Ye(r)};Ye.register=Om;Ye.getAll=function(){return js.slice()};Ye.getById=function(r){return js.filter(function(t){return t.vars.id===r})[0]};Nm()&&xn.registerPlugin(Ye);var It,so,ue,Se,ui,ve,Nf,hc,Aa,ya,ma,Jl,En,dc,Af,Xn,Bm,zm,oo,eg,Sf,ng,Wn,Cf,ig,rg,Br,Rf,Uf,ao,Ff,Sa,Pf,Mf,$l=1,An=Date.now,bf=An(),Ai=0,ga=0,km=function(t,e,n){var i=hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Vm=function(t,e){return e&&(!hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},bv=function r(){return ga&&requestAnimationFrame(r)},Gm=function(){return dc=1},Hm=function(){return dc=0},Ji=function(t){return t},_a=function(t){return Math.round(t*1e5)/1e5||0},sg=function(){return typeof window!="undefined"},og=function(){return It||sg()&&(It=window.gsap)&&It.registerPlugin&&It},Ss=function(t){return!!~Nf.indexOf(t)},ag=function(t){return(t==="Height"?Ff:ue["inner"+t])||ui["client"+t]||ve["client"+t]},lg=function(t){return fr(t,"getBoundingClientRect")||(Ss(t)?function(){return cc.width=ue.innerWidth,cc.height=Ff,cc}:function(){return dr(t)})},Tv=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=fr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?ag(s):t["client"+s])||0}},wv=function(t,e){return!e||~Li.indexOf(t)?lg(t):function(){return cc}},$i=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=fr(t,n))?o()-lg(t)()[s]:Ss(t)?(ui[n]||ve[n])-ag(i):t[n]-t["offset"+i])},Kl=function(t,e){for(var n=0;n<oo.length;n+=3)(!e||~e.indexOf(oo[n+1]))&&t(oo[n],oo[n+1],oo[n+2])},hi=function(t){return typeof t=="string"},Cn=function(t){return typeof t=="function"},xa=function(t){return typeof t=="number"},gs=function(t){return typeof t=="object"},pa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},no=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},io=Math.abs,cg="left",hg="top",Of="right",Bf="bottom",xs="width",vs="height",Ma="Right",ba="Left",Ta="Top",wa="Bottom",en="padding",wi="margin",co="Width",zf="Height",on="px",Ei=function(t){return ue.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Ev=function(t){var e=Ei(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Wm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},dr=function(t,e){var n=e&&Ei(t)[Af]!=="matrix(1, 0, 0, 1, 0, 0)"&&It.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},uc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},ug=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Av=function(t){return function(e){return It.utils.snap(ug(t),e)}},kf=function(t){var e=It.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Cv=function(t){return function(e,n){return kf(ug(t))(e,n.direction)}},Ql=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},dn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},jl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Xm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},tc={toggleActions:"play",anticipatePin:0},fc={top:0,left:0,center:.5,bottom:1,right:1},sc=function(t,e){if(hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in fc?fc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ec=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=Se.createElement("div"),_=Ss(n)||fr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?ve:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,E=M?c:h,x="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===tn?Of:Bf)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],oc(p,0,i,M),p},oc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+co]=1,s["border"+a+co]=0,s[n.p]=e+"px",It.set(t,s)},ae=[],If={},Ca,Ym=function(){return An()-Ai>34&&(Ca||(Ca=requestAnimationFrame(pr)))},ro=function(){(!Wn||!Wn.isPressed||Wn.startX>ve.clientWidth)&&(oe.cache++,Wn?Ca||(Ca=requestAnimationFrame(pr)):pr(),Ai||bs("scrollStart"),Ai=An())},Tf=function(){rg=ue.innerWidth,ig=ue.innerHeight},va=function(t){oe.cache++,(t===!0||!En&&!ng&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!Cf||rg!==ue.innerWidth||Math.abs(ue.innerHeight-ig)>ue.innerHeight*.25))&&hc.restart(!0)},Ms={},Rv=[],fg=function r(){return fn(ee,"scrollEnd",r)||_s(!0)},bs=function(t){return Ms[t]&&Ms[t].map(function(e){return e()})||Rv},ci=[],dg=function(t){for(var e=0;e<ci.length;e+=5)(!t||ci[e+4]&&ci[e+4].query===t)&&(ci[e].style.cssText=ci[e+1],ci[e].getBBox&&ci[e].setAttribute("transform",ci[e+2]||""),ci[e+3].uncache=1)},pg=function(){return oe.forEach(function(t){return Cn(t)&&++t.cacheID&&(t.rec=t())})},Vf=function(t,e){var n;for(Xn=0;Xn<ae.length;Xn++)n=ae[Xn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Sa=!0,e&&dg(e),e||bs("revert")},mg=function(t,e){oe.cache++,(e||!Yn)&&oe.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),hi(t)&&(ue.history.scrollRestoration=Uf=t)},Yn,ys=0,qm,Pv=function(){if(qm!==ys){var t=qm=ys;requestAnimationFrame(function(){return t===ys&&_s(!0)})}},gg=function(){ve.appendChild(ao),Ff=!Wn&&ao.offsetHeight||ue.innerHeight,ve.removeChild(ao)},Zm=function(t){return Aa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},_s=function(t,e){if(ui=Se.documentElement,ve=Se.body,Nf=[ue,Se,ui,ve],Ai&&!t&&!Sa){dn(ee,"scrollEnd",fg);return}gg(),Yn=ee.isRefreshing=!0,Sa||pg();var n=bs("refreshInit");eg&&ee.sort(),e||Vf(),oe.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ae.slice(0).forEach(function(i){return i.refresh()}),Sa=!1,ae.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Pf=1,Zm(!0),ae.forEach(function(i){var s=$i(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Zm(!1),Pf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),mg(Uf,1),hc.pause(),ys++,Yn=2,pr(2),ae.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=ee.isRefreshing=!1,bs("refresh")},Lf=0,ac=1,Ea,pr=function(t){if(t===2||!Yn&&!Sa){ee.isUpdating=!0,Ea&&Ea.update(0);var e=ae.length,n=An(),i=n-bf>=50,s=e&&ae[0].scroll();if(ac=Lf>s?-1:1,Yn||(Lf=s),i&&(Ai&&!dc&&n-Ai>200&&(Ai=0,bs("scrollEnd")),ma=bf,bf=n),ac<0){for(Xn=e;Xn-- >0;)ae[Xn]&&ae[Xn].update(0,i);ac=1}else for(Xn=0;Xn<e;Xn++)ae[Xn]&&ae[Xn].update(0,i);ee.isUpdating=!1}Ca=0},Df=[cg,hg,Bf,Of,wi+wa,wi+Ma,wi+Ta,wi+ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lc=Df.concat([xs,vs,"boxSizing","max"+co,"max"+zf,"position",wi,en,en+Ta,en+Ma,en+wa,en+ba]),Iv=function(t,e,n){lo(n);var i=t._gsap;if(i.spacerIsNative)lo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},wf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Df.length,o=e.style,a=t.style,l;s--;)l=Df[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Bf]=a[Of]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[xs]=uc(t,wn)+on,o[vs]=uc(t,tn)+on,o[en]=a[wi]=a[hg]=a[cg]="0",lo(i),a[xs]=a["max"+co]=n[xs],a[vs]=a["max"+zf]=n[vs],a[en]=n[en],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Lv=/([A-Z])/g,lo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||It.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Lv,"-$1").toLowerCase())}},nc=function(t){for(var e=lc.length,n=t.style,i=[],s=0;s<e;s++)i.push(lc[s],n[lc[s]]);return i.t=t,i},Dv=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},cc={left:0,top:0},Jm=function(t,e,n,i,s,o,a,l,c,h,d,u,f,p){Cn(t)&&(t=t(l)),hi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?sc("0"+t.substr(3),n):0));var _=f?f.time():0,m,g,M;if(f&&f.seek(0),isNaN(t)||(t=+t),xa(t))f&&(t=It.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&oc(a,n,i,!0);else{Cn(e)&&(e=e(l));var E=(t||"0").split(" "),x,S,T,A;M=Hn(e,l)||ve,x=dr(M)||{},(!x||!x.left&&!x.top)&&Ei(M).display==="none"&&(A=M.style.display,M.style.display="block",x=dr(M),A?M.style.display=A:M.style.removeProperty("display")),S=sc(E[0],x[i.d]),T=sc(E[1]||"0",n),t=x[i.p]-c[i.p]-h+S+s-T,a&&oc(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var v=t+n,w=o._isStart;m="scroll"+i.d2,oc(o,v,i,w&&v>20||!w&&(d?Math.max(ve[m],ui[m]):o.parentNode[m])<=v+1),d&&(c=dr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+on))}return f&&M&&(m=dr(M),f.seek(u),g=dr(M),f._caScrollDist=m[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Nv=/(webkit|moz|length|cssText|inset)/i,$m=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ve){t._stOrig=s.cssText,a=Ei(t);for(o in a)!+o&&!Nv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;It.core.getCache(t).uncache=1,e.appendChild(t)}},_g=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ic=function(t,e,n){var i={};i[e.p]="+="+n,It.set(t,i)},Km=function(t,e){var n=ur(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=_g(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&pr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=It.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(t,"wheel",n.wheelHandler),ee.isTouch&&dn(t,"touchmove",n.wheelHandler),s},ee=(function(){function r(e,n){so||r.register(It)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ga){this.update=this.refresh=this.kill=Ji;return}n=Wm(hi(n)||xa(n)||n.nodeType?{trigger:n}:n,tc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,M=s.onSnapComplete,E=s.once,x=s.snap,S=s.pinReparent,T=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:tn,D=!d&&d!==0,I=Hn(n.scroller||ue),k=It.core.getCache(I),L=Ss(I),z=("pinType"in n?n.pinType:fr(I,"pinType")||L&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=D&&n.toggleActions.split(" "),Q="markers"in n?n.markers:tc.markers,q=L?0:parseFloat(Ei(I)["border"+C.p2+co])||0,P=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ct=Tv(I,L,C),_t=wv(I,L),zt=0,Vt=0,Qt=0,J=ur(I,C),et,pt,Xt,vt,Lt,Nt,j,rt,at,N,dt,kt,Ut,Ct,Jt,U,ce,qt,R,y,G,W,K,mt,ht,tt,it,yt,Dt,St,xt,ft,Ht,$t,O,gt,nt,Mt,Tt;if(P._startClamp=P._endClamp=!1,P._dir=C,m*=45,P.scroller=I,P.scroll=A?A.time.bind(A):J,vt=J(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(eg=1,n.refreshPriority===-9999&&(Ea=P)),k.tweenScroll=k.tweenScroll||{top:Km(I,tn),left:Km(I,wn)},P.tweenTo=et=k.tweenScroll[C.p],P.scrubDuration=function(lt){Ht=xa(lt)&&lt,Ht?ft?ft.duration(lt):ft=It.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ht,paused:!0,onComplete:function(){return g&&g(P)}}):(ft&&ft.progress(1).kill(),ft=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),St=0,l||(l=i.vars.id)),x&&((!gs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ve.style&&It.set(L?[ve,ui]:I,{scrollBehavior:"auto"}),oe.forEach(function(lt){return Cn(lt)&&lt.target===(L?Se.scrollingElement||ui:I)&&(lt.smooth=!1)}),Xt=Cn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Av(i):x.snapTo==="labelsDirectional"?Cv(i):x.directional!==!1?function(lt,Zt){return kf(x.snapTo)(lt,An()-Vt<500?0:Zt.direction)}:It.utils.snap(x.snapTo),$t=x.duration||{min:.1,max:2},$t=gs($t)?ya($t.min,$t.max):ya($t,$t),O=It.delayedCall(x.delay||Ht/2||.1,function(){var lt=J(),Zt=An()-Vt<500,Ft=et.tween;if((Zt||Math.abs(P.getVelocity())<10)&&!Ft&&!dc&&zt!==lt){var te=(lt-Nt)/Ct,Ke=i&&!D?i.totalProgress():te,he=Zt?0:(Ke-xt)/(An()-ma)*1e3||0,Pe=It.utils.clamp(-te,1-te,io(he/2)*he/.185),hn=te+(x.inertia===!1?0:Pe),Ie,Te,me=x,Fn=me.onStart,Ce=me.onInterrupt,yn=me.onComplete;if(Ie=Xt(hn,P),xa(Ie)||(Ie=hn),Te=Math.max(0,Math.round(Nt+Ie*Ct)),lt<=j&&lt>=Nt&&Te!==lt){if(Ft&&!Ft._initted&&Ft.data<=io(Te-lt))return;x.inertia===!1&&(Pe=Ie-te),et(Te,{duration:$t(io(Math.max(io(hn-Ke),io(Ie-Ke))*.185/he/.05||0)),ease:x.ease||"power3",data:io(Te-lt),onInterrupt:function(){return O.restart(!0)&&Ce&&no(P,Ce)},onComplete:function(){P.update(),zt=J(),i&&!D&&(ft?ft.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),St=xt=i&&!D?i.totalProgress():P.progress,M&&M(P),yn&&no(P,yn)}},lt,Pe*Ct,Te-lt-Pe*Ct),Fn&&no(P,Fn,et.tween)}}else P.isActive&&zt!==lt&&O.restart(!0)}).pause()),l&&(If[l]=P),u=P.trigger=Hn(u||f!==!0&&f),Tt=u&&u._gsap&&u._gsap.stRevert,Tt&&(Tt=Tt(P)),f=f===!0?u:Hn(f),hi(a)&&(a={targets:u,className:a}),f&&(p===!1||p===wi||(p=!p&&f.parentNode&&f.parentNode.style&&Ei(f.parentNode).display==="flex"?!1:en),P.pin=f,pt=It.core.getCache(f),pt.spacer?Jt=pt.pinState:(T&&(T=Hn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),pt.spacerIsNative=!!T,T&&(pt.spacerState=nc(T))),pt.spacer=qt=T||Se.createElement("div"),qt.classList.add("pin-spacer"),l&&qt.classList.add("pin-spacer-"+l),pt.pinState=Jt=nc(f)),n.force3D!==!1&&It.set(f,{force3D:!0}),P.spacer=qt=pt.spacer,Dt=Ei(f),mt=Dt[p+C.os2],y=It.getProperty(f),G=It.quickSetter(f,C.a,on),wf(f,qt,Dt),ce=nc(f)),Q){kt=gs(Q)?Wm(Q,Xm):Xm,N=ec("scroller-start",l,I,C,kt,0),dt=ec("scroller-end",l,I,C,kt,0,N),R=N["offset"+C.op.d2];var st=Hn(fr(I,"content")||I);rt=this.markerStart=ec("start",l,st,C,kt,R,0,A),at=this.markerEnd=ec("end",l,st,C,kt,R,0,A),A&&(Mt=It.quickSetter([rt,at],C.a,on)),!z&&!(Li.length&&fr(I,"fixedMarkers")===!0)&&(Ev(L?ve:I),It.set([N,dt],{force3D:!0}),tt=It.quickSetter(N,C.a,on),yt=It.quickSetter(dt,C.a,on))}if(A){var ut=A.vars.onUpdate,ot=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),ut&&ut.apply(A,ot||[])})}if(P.previous=function(){return ae[ae.indexOf(P)-1]},P.next=function(){return ae[ae.indexOf(P)+1]},P.revert=function(lt,Zt){if(!Zt)return P.kill(!0);var Ft=lt!==!1||!P.enabled,te=En;Ft!==P.isReverted&&(Ft&&(gt=Math.max(J(),P.scroll.rec||0),Qt=P.progress,nt=i&&i.progress()),rt&&[rt,at,N,dt].forEach(function(Ke){return Ke.style.display=Ft?"none":"block"}),Ft&&(En=P,P.update(Ft)),f&&(!S||!P.isActive)&&(Ft?Iv(f,qt,Jt):wf(f,qt,Ei(f),ht)),Ft||P.update(Ft),En=te,P.isReverted=Ft)},P.refresh=function(lt,Zt,Ft,te){if(!((En||!P.enabled)&&!Zt)){if(f&&lt&&Ai){dn(r,"scrollEnd",fg);return}!Yn&&$&&$(P),En=P,et.tween&&!Ft&&(et.tween.kill(),et.tween=0),ft&&ft.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(bt){return bt.vars.immediateRender&&bt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ke=ct(),he=_t(),Pe=A?A.duration():$i(I,C),hn=Ct<=.01||!Ct,Ie=0,Te=te||0,me=gs(Ft)?Ft.end:n.end,Fn=n.endTrigger||u,Ce=gs(Ft)?Ft.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),yn=P.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,P),On=u&&Math.max(0,ae.indexOf(P))||0,Qe=On,He,rn,Hi,zs,un,Ze,yi,ks,b,B,Z,X,Y;for(Q&&gs(Ft)&&(X=It.getProperty(N,C.p),Y=It.getProperty(dt,C.p));Qe-- >0;)Ze=ae[Qe],Ze.end||Ze.refresh(0,1)||(En=P),yi=Ze.pin,yi&&(yi===u||yi===f||yi===yn)&&!Ze.isReverted&&(B||(B=[]),B.unshift(Ze),Ze.revert(!0,!0)),Ze!==ae[Qe]&&(On--,Qe--);for(Cn(Ce)&&(Ce=Ce(P)),Ce=km(Ce,"start",P),Nt=Jm(Ce,u,Ke,C,J(),rt,N,P,he,q,z,Pe,A,P._startClamp&&"_startClamp")||(f?-.001:0),Cn(me)&&(me=me(P)),hi(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(hi(Ce)?Ce.split(" ")[0]:"")+me:(Ie=sc(me.substr(2),Ke),me=hi(Ce)?Ce:(A?It.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Nt):Nt)+Ie,Fn=u)),me=km(me,"end",P),j=Math.max(Nt,Jm(me||(Fn?"100% 0":Pe),Fn,Ke,C,J()+Ie,at,dt,P,he,q,z,Pe,A,P._endClamp&&"_endClamp"))||-.001,Ie=0,Qe=On;Qe--;)Ze=ae[Qe]||{},yi=Ze.pin,yi&&Ze.start-Ze._pinPush<=Nt&&!A&&Ze.end>0&&(He=Ze.end-(P._startClamp?Math.max(0,Ze.start):Ze.start),(yi===u&&Ze.start-Ze._pinPush<Nt||yi===yn)&&isNaN(Ce)&&(Ie+=He*(1-Ze.progress)),yi===f&&(Te+=He));if(Nt+=Ie,j+=Ie,P._startClamp&&(P._startClamp+=Ie),P._endClamp&&!Yn&&(P._endClamp=j||-.001,j=Math.min(j,$i(I,C))),Ct=j-Nt||(Nt-=.01)&&.001,hn&&(Qt=It.utils.clamp(0,1,It.utils.normalize(Nt,j,gt))),P._pinPush=Te,rt&&Ie&&(He={},He[C.a]="+="+Ie,yn&&(He[C.p]="-="+J()),It.set([rt,at],He)),f&&!(Pf&&P.end>=$i(I,C)))He=Ei(f),zs=C===tn,Hi=J(),W=parseFloat(y(C.a))+Te,!Pe&&j>1&&(Z=(L?Se.scrollingElement||ui:I).style,Z={style:Z,value:Z["overflow"+C.a.toUpperCase()]},L&&Ei(ve)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+C.a.toUpperCase()]="scroll")),wf(f,qt,He),ce=nc(f),rn=dr(f,!0),ks=z&&ur(I,zs?wn:tn)(),p?(ht=[p+C.os2,Ct+Te+on],ht.t=qt,Qe=p===en?uc(f,C)+Ct+Te:0,Qe&&(ht.push(C.d,Qe+on),qt.style.flexBasis!=="auto"&&(qt.style.flexBasis=Qe+on)),lo(ht),yn&&ae.forEach(function(bt){bt.pin===yn&&bt.vars.pinSpacing!==!1&&(bt._subPinOffset=!0)}),z&&J(gt)):(Qe=uc(f,C),Qe&&qt.style.flexBasis!=="auto"&&(qt.style.flexBasis=Qe+on)),z&&(un={top:rn.top+(zs?Hi-Nt:ks)+on,left:rn.left+(zs?ks:Hi-Nt)+on,boxSizing:"border-box",position:"fixed"},un[xs]=un["max"+co]=Math.ceil(rn.width)+on,un[vs]=un["max"+zf]=Math.ceil(rn.height)+on,un[wi]=un[wi+Ta]=un[wi+Ma]=un[wi+wa]=un[wi+ba]="0",un[en]=He[en],un[en+Ta]=He[en+Ta],un[en+Ma]=He[en+Ma],un[en+wa]=He[en+wa],un[en+ba]=He[en+ba],U=Dv(Jt,un,S),Yn&&J(0)),i?(b=i._initted,Sf(1),i.render(i.duration(),!0,!0),K=y(C.a)-W+Ct+Te,it=Math.abs(Ct-K)>1,z&&it&&U.splice(U.length-2,2),i.render(0,!0,!0),b||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Sf(0)):K=Ct,Z&&(Z.value?Z.style["overflow"+C.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+C.a));else if(u&&J()&&!A)for(rn=u.parentNode;rn&&rn!==ve;)rn._pinOffset&&(Nt-=rn._pinOffset,j-=rn._pinOffset),rn=rn.parentNode;B&&B.forEach(function(bt){return bt.revert(!1,!0)}),P.start=Nt,P.end=j,vt=Lt=Yn?gt:J(),!A&&!Yn&&(vt<gt&&J(gt),P.scroll.rec=0),P.revert(!1,!0),Vt=An(),O&&(zt=-1,O.restart(!0)),En=0,i&&D&&(i._initted||nt)&&i.progress()!==nt&&i.progress(nt||0,!0).render(i.time(),!0,!0),(hn||Qt!==P.progress||A||_||i&&!i._initted)&&(i&&!D&&(i._initted||Qt||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Nt<-.001&&!Qt?It.utils.normalize(Nt,j,0):Qt,!0),P.progress=hn||(vt-Nt)/Ct===Qt?0:Qt),f&&p&&(qt._pinOffset=Math.round(P.progress*K)),ft&&ft.invalidate(),isNaN(X)||(X-=It.getProperty(N,C.p),Y-=It.getProperty(dt,C.p),ic(N,C,X),ic(rt,C,X-(te||0)),ic(dt,C,Y),ic(at,C,Y-(te||0))),hn&&!Yn&&P.update(),h&&!Yn&&!Ut&&(Ut=!0,h(P),Ut=!1)}},P.getVelocity=function(){return(J()-Lt)/(An()-ma)*1e3||0},P.endAnimation=function(){pa(P.callbackAnimation),i&&(ft?ft.progress(1):i.paused()?D||pa(i,P.direction<0,1):pa(i,i.reversed()))},P.labelToScroll=function(lt){return i&&i.labels&&(Nt||P.refresh()||Nt)+i.labels[lt]/i.duration()*Ct||0},P.getTrailing=function(lt){var Zt=ae.indexOf(P),Ft=P.direction>0?ae.slice(0,Zt).reverse():ae.slice(Zt+1);return(hi(lt)?Ft.filter(function(te){return te.vars.preventOverlaps===lt}):Ft).filter(function(te){return P.direction>0?te.end<=Nt:te.start>=j})},P.update=function(lt,Zt,Ft){if(!(A&&!Ft&&!lt)){var te=Yn===!0?gt:P.scroll(),Ke=lt?0:(te-Nt)/Ct,he=Ke<0?0:Ke>1?1:Ke||0,Pe=P.progress,hn,Ie,Te,me,Fn,Ce,yn,On;if(Zt&&(Lt=vt,vt=A?J():te,x&&(xt=St,St=i&&!D?i.totalProgress():he)),m&&f&&!En&&!$l&&Ai&&(!he&&Nt<te+(te-Lt)/(An()-ma)*m?he=1e-4:he===1&&j>te+(te-Lt)/(An()-ma)*m&&(he=.9999)),he!==Pe&&P.enabled){if(hn=P.isActive=!!he&&he<1,Ie=!!Pe&&Pe<1,Ce=hn!==Ie,Fn=Ce||!!he!=!!Pe,P.direction=he>Pe?1:-1,P.progress=he,Fn&&!En&&(Te=he&&!Pe?0:he===1?1:Pe===1?2:3,D&&(me=!Ce&&V[Te+1]!=="none"&&V[Te+1]||V[Te],On=i&&(me==="complete"||me==="reset"||me in i))),w&&(Ce||On)&&(On||d||!i)&&(Cn(w)?w(P):P.getTrailing(w).forEach(function(Hi){return Hi.endAnimation()})),D||(ft&&!En&&!$l?(ft._dp._time-ft._start!==ft._time&&ft.render(ft._dp._time-ft._start),ft.resetTo?ft.resetTo("totalProgress",he,i._tTime/i._tDur):(ft.vars.totalProgress=he,ft.invalidate().restart())):i&&i.totalProgress(he,!!(En&&(Vt||lt)))),f){if(lt&&p&&(qt.style[p+C.os2]=mt),!z)G(_a(W+K*he));else if(Fn){if(yn=!lt&&he>Pe&&j+1>te&&te+1>=$i(I,C),S)if(!lt&&(hn||yn)){var Qe=dr(f,!0),He=te-Nt;$m(f,ve,Qe.top+(C===tn?He:0)+on,Qe.left+(C===tn?0:He)+on)}else $m(f,qt);lo(hn||yn?U:ce),it&&he<1&&hn||G(W+(he===1&&!yn?K:0))}}x&&!et.tween&&!En&&!$l&&O.restart(!0),a&&(Ce||E&&he&&(he<1||!Mf))&&Aa(a.targets).forEach(function(Hi){return Hi.classList[hn||E?"add":"remove"](a.className)}),o&&!D&&!lt&&o(P),Fn&&!En?(D&&(On&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),o&&o(P)),(Ce||!Mf)&&(c&&Ce&&no(P,c),H[Te]&&no(P,H[Te]),E&&(he===1?P.kill(!1,1):H[Te]=0),Ce||(Te=he===1?1:3,H[Te]&&no(P,H[Te]))),v&&!hn&&Math.abs(P.getVelocity())>(xa(v)?v:2500)&&(pa(P.callbackAnimation),ft?ft.progress(1):pa(i,me==="reverse"?1:!he,1))):D&&o&&!En&&o(P)}if(yt){var rn=A?te/A.duration()*(A._caScrollDist||0):te;tt(rn+(N._isFlipped?1:0)),yt(rn)}Mt&&Mt(-te/A.duration()*(A._caScrollDist||0))}},P.enable=function(lt,Zt){P.enabled||(P.enabled=!0,dn(I,"resize",va),L||dn(I,"scroll",ro),$&&dn(r,"refreshInit",$),lt!==!1&&(P.progress=Qt=0,vt=Lt=zt=J()),Zt!==!1&&P.refresh())},P.getTween=function(lt){return lt&&et?et.tween:ft},P.setPositions=function(lt,Zt,Ft,te){if(A){var Ke=A.scrollTrigger,he=A.duration(),Pe=Ke.end-Ke.start;lt=Ke.start+Pe*lt/he,Zt=Ke.start+Pe*Zt/he}P.refresh(!1,!1,{start:Vm(lt,Ft&&!!P._startClamp),end:Vm(Zt,Ft&&!!P._endClamp)},te),P.update()},P.adjustPinSpacing=function(lt){if(ht&&lt){var Zt=ht.indexOf(C.d)+1;ht[Zt]=parseFloat(ht[Zt])+lt+on,ht[1]=parseFloat(ht[1])+lt+on,lo(ht)}},P.disable=function(lt,Zt){if(lt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Zt||ft&&ft.pause(),gt=0,pt&&(pt.uncache=1),$&&fn(r,"refreshInit",$),O&&(O.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!L)){for(var Ft=ae.length;Ft--;)if(ae[Ft].scroller===I&&ae[Ft]!==P)return;fn(I,"resize",va),L||fn(I,"scroll",ro)}},P.kill=function(lt,Zt){P.disable(lt,Zt),ft&&!Zt&&ft.kill(),l&&delete If[l];var Ft=ae.indexOf(P);Ft>=0&&ae.splice(Ft,1),Ft===Xn&&ac>0&&Xn--,Ft=0,ae.forEach(function(te){return te.scroller===P.scroller&&(Ft=1)}),Ft||Yn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,lt&&i.revert({kill:!1}),Zt||i.kill()),rt&&[rt,at,N,dt].forEach(function(te){return te.parentNode&&te.parentNode.removeChild(te)}),Ea===P&&(Ea=0),f&&(pt&&(pt.uncache=1),Ft=0,ae.forEach(function(te){return te.pin===f&&Ft++}),Ft||(pt.spacer=0)),n.onKill&&n.onKill(P)},ae.push(P),P.enable(!1,!1),Tt&&Tt(P),i&&i.add&&!Ct){var Yt=P.update;P.update=function(){P.update=Yt,oe.cache++,Nt||j||P.refresh()},It.delayedCall(.01,P.update),Ct=.01,Nt=j=0}else P.refresh();f&&Pv()},r.register=function(n){return so||(It=n||og(),sg()&&window.document&&r.enable(),so=ga),so},r.defaults=function(n){if(n)for(var i in n)tc[i]=n[i];return tc},r.disable=function(n,i){ga=0,ae.forEach(function(o){return o[i?"kill":"disable"](n)}),fn(ue,"wheel",ro),fn(Se,"scroll",ro),clearInterval(Jl),fn(Se,"touchcancel",Ji),fn(ve,"touchstart",Ji),Ql(fn,Se,"pointerdown,touchstart,mousedown",Gm),Ql(fn,Se,"pointerup,touchend,mouseup",Hm),hc.kill(),Kl(fn);for(var s=0;s<oe.length;s+=3)jl(fn,oe[s],oe[s+1]),jl(fn,oe[s],oe[s+2])},r.enable=function(){if(ue=window,Se=document,ui=Se.documentElement,ve=Se.body,It){if(Aa=It.utils.toArray,ya=It.utils.clamp,Rf=It.core.context||Ji,Sf=It.core.suppressOverwrites||Ji,Uf=ue.history.scrollRestoration||"auto",Lf=ue.pageYOffset||0,It.core.globals("ScrollTrigger",r),ve){ga=1,ao=document.createElement("div"),ao.style.height="100vh",ao.style.position="absolute",gg(),bv(),Ye.register(It),r.isTouch=Ye.isTouch,Br=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cf=Ye.isTouch===1,dn(ue,"wheel",ro),Nf=[ue,Se,ui,ve],It.matchMedia?(r.matchMedia=function(h){var d=It.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},It.addEventListener("matchMediaInit",function(){pg(),Vf()}),It.addEventListener("matchMediaRevert",function(){return dg()}),It.addEventListener("matchMedia",function(){_s(0,1),bs("matchMedia")}),It.matchMedia().add("(orientation: portrait)",function(){return Tf(),Tf})):console.warn("Requires GSAP 3.11.0 or later"),Tf(),dn(Se,"scroll",ro);var n=ve.hasAttribute("style"),i=ve.style,s=i.borderTopStyle,o=It.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=dr(ve),tn.m=Math.round(a.top+tn.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),Jl=setInterval(Ym,250),It.delayedCall(.5,function(){return $l=0}),dn(Se,"touchcancel",Ji),dn(ve,"touchstart",Ji),Ql(dn,Se,"pointerdown,touchstart,mousedown",Gm),Ql(dn,Se,"pointerup,touchend,mouseup",Hm),Af=It.utils.checkPrefix("transform"),lc.push(Af),so=An(),hc=It.delayedCall(.2,_s).pause(),oo=[Se,"visibilitychange",function(){var h=ue.innerWidth,d=ue.innerHeight;Se.hidden?(Bm=h,zm=d):(Bm!==h||zm!==d)&&va()},Se,"DOMContentLoaded",_s,ue,"load",_s,ue,"resize",va],Kl(dn),ae.forEach(function(h){return h.enable(0,1)}),l=0;l<oe.length;l+=3)jl(fn,oe[l],oe[l+1]),jl(fn,oe[l],oe[l+2])}else if(Se){var c=function h(){r.enable(),Se.removeEventListener("DOMContentLoaded",h)};Se.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Mf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Jl)||(Jl=i)&&setInterval(Ym,i),"ignoreMobileResize"in n&&(Cf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Kl(fn)||Kl(dn,n.autoRefreshEvents||"none"),ng=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Hn(n),o=oe.indexOf(s),a=Ss(s);~o&&oe.splice(o,a?6:2),i&&(a?Li.unshift(ue,i,ve,i,ui,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){ae.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(hi(n)?Hn(n):n).getBoundingClientRect(),a=o[s?xs:vs]*i||0;return s?o.right-a>0&&o.left+a<ue.innerWidth:o.bottom-a>0&&o.top+a<ue.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=Hn(n));var o=n.getBoundingClientRect(),a=o[s?xs:vs],l=i==null?a/2:i in fc?fc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ue.innerWidth:(o.top+l)/ue.innerHeight},r.killAll=function(n){if(ae.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ms.killAll||[];Ms={},i.forEach(function(s){return s()})}},r})();ee.version="3.15.0";ee.saveStyles=function(r){return r?Aa(r).forEach(function(t){if(t&&t.style){var e=ci.indexOf(t);e>=0&&ci.splice(e,5),ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),It.core.getCache(t),Rf())}}):ci};ee.revert=function(r,t){return Vf(!r,t)};ee.create=function(r,t){return new ee(r,t)};ee.refresh=function(r){return r?va(!0):(so||ee.register())&&_s(!0)};ee.update=function(r){return++oe.cache&&pr(r===!0?2:0)};ee.clearScrollMemory=mg;ee.maxScroll=function(r,t){return $i(r,t?wn:tn)};ee.getScrollFunc=function(r,t){return ur(Hn(r),t?wn:tn)};ee.getById=function(r){return If[r]};ee.getAll=function(){return ae.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ee.isScrolling=function(){return!!Ai};ee.snapDirectional=kf;ee.addEventListener=function(r,t){var e=Ms[r]||(Ms[r]=[]);~e.indexOf(t)||e.push(t)};ee.removeEventListener=function(r,t){var e=Ms[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ee.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=It.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Cn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Cn(s)&&(s=s(),dn(ee,"refresh",function(){return s=t.batchMax()})),Aa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ee.create(c))}),e};var Qm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ef=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ye.isTouch?" pinch-zoom":""):"none",t===ui&&r(ve,e)},rc={auto:1,scroll:1},Uv=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||It.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ve&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(rc[(l=Ei(s)).overflowY]||rc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ss(s)&&(rc[(l=Ei(s)).overflowY]||rc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},xg=function(t,e,n,i){return Ye.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Uv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&dn(Se,Ye.eventTypes[0],tg,!1,!0)},onDisable:function(){return fn(Se,Ye.eventTypes[0],tg,!0)}})},Fv=/(input|label|select|textarea)/i,jm,tg=function(t){var e=Fv.test(t.target.tagName);(e||jm)&&(t._gsapAllow=!0,jm=e)},Ov=function(t){gs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Hn(t.target)||ui,h=It.core.globals().ScrollSmoother,d=h&&h.get(),u=Br&&(t.content&&Hn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ur(c,tn),p=ur(c,wn),_=1,m=(Ye.isTouch&&ue.visualViewport?ue.visualViewport.scale*ue.visualViewport.width:ue.outerWidth)/ue.innerWidth,g=0,M=Cn(i)?function(){return i(a)}:function(){return i||2.8},E,x,S=xg(c,t.type,!0,s),T=function(){return x=!1},A=Ji,v=Ji,w=function(){l=$i(c,tn),v=ya(Br?1:0,l),n&&(A=ya(0,$i(c,wn))),E=ys},C=function(){u._gsap.y=_a(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(x){requestAnimationFrame(T);var Q=_a(a.deltaY/2),q=v(f.v-Q);if(u&&q!==f.v+f.offset){f.offset=q-f.v;var P=_a((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",f.cacheID=oe.cache,pr()}return!0}f.offset&&C(),x=!0},I,k,L,z,H=function(){w(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&It.set(u,{y:"+=0"}),t.ignoreCheck=function(V){return Br&&V.type==="touchmove"&&D(V)||_>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},t.onPress=function(){x=!1;var V=_;_=_a((ue.visualViewport&&ue.visualViewport.scale||1)/m),I.pause(),V!==_&&Ef(c,_>1.01?!0:n?!1:"x"),k=p(),L=f(),w(),E=ys},t.onRelease=t.onGestureStart=function(V,Q){if(f.offset&&C(),!Q)z.restart(!0);else{oe.cache++;var q=M(),P,$;n&&(P=p(),$=P+q*.05*-V.velocityX/.227,q*=Qm(p,P,$,$i(c,wn)),I.vars.scrollX=A($)),P=f(),$=P+q*.05*-V.velocityY/.227,q*=Qm(f,P,$,$i(c,tn)),I.vars.scrollY=v($),I.invalidate().duration(q).play(.01),(Br&&I.vars.scrollY>=l||P>=l-1)&&It.to({},{onUpdate:H,duration:q})}o&&o(V)},t.onWheel=function(){I._ts&&I.pause(),An()-g>1e3&&(E=0,g=An())},t.onChange=function(V,Q,q,P,$){if(ys!==E&&w(),Q&&n&&p(A(P[2]===Q?k+(V.startX-V.x):p()+Q-P[1])),q){f.offset&&C();var ct=$[2]===q,_t=ct?L+V.startY-V.y:f()+q-$[1],zt=v(_t);ct&&_t!==zt&&(L+=zt-_t),f(zt)}(q||Q)&&pr()},t.onEnable=function(){Ef(c,n?!1:"x"),ee.addEventListener("refresh",H),dn(ue,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),S.enable()},t.onDisable=function(){Ef(c,!0),fn(ue,"resize",H),ee.removeEventListener("refresh",H),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ye(t),a.iOS=Br,Br&&!f()&&f(1),Br&&It.ticker.add(Ji),z=a._dc,I=It.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:_g(f,f(),function(){return I.pause()})},onUpdate:pr,onComplete:z.vars.onComplete}),a};ee.sort=function(r){if(Cn(r))return ae.sort(r);var t=ue.pageYOffset||0;return ee.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ue.innerHeight}),ae.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ee.observe=function(r){return new Ye(r)};ee.normalizeScroll=function(r){if(typeof r=="undefined")return Wn;if(r===!0&&Wn)return Wn.enable();if(r===!1){Wn&&Wn.kill(),Wn=r;return}var t=r instanceof Ye?r:Ov(r);return Wn&&Wn.target===t.target&&Wn.kill(),Ss(t.target)&&(Wn=t),t};ee.core={_getVelocityProp:Zl,_inputObserver:xg,_scrollers:oe,_proxies:Li,bridge:{ss:function(){Ai||bs("scrollStart"),Ai=An()},ref:function(){return En}}};og()&&It.registerPlugin(ee);var vg="1.3.26";function Mg(r,t,e){return Math.max(r,Math.min(t,e))}function Bv(r,t,e){return(1-e)*r+e*t}function zv(r,t,e,n){return Bv(r,t,1-Math.exp(-e*n))}function kv(r,t){return(r%t+t)%t}var Vv=class{constructor(){Gt(this,"isRunning",!1);Gt(this,"value",0);Gt(this,"from",0);Gt(this,"to",0);Gt(this,"currentTime",0);Gt(this,"lerp");Gt(this,"duration");Gt(this,"easing");Gt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=Mg(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=zv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Gv(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Hv=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Gt(this,"width",0);Gt(this,"height",0);Gt(this,"scrollHeight",0);Gt(this,"scrollWidth",0);Gt(this,"debouncedResize");Gt(this,"wrapperResizeObserver");Gt(this,"contentResizeObserver");Gt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Gt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Gt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Gv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},bg=class{constructor(){Gt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Wv=100/6,zr={passive:!1};function yg(r,t){return r===1?Wv:r===2?t:1}var Xv=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Gt(this,"touchStart",{x:0,y:0});Gt(this,"lastDelta",{x:0,y:0});Gt(this,"window",{width:0,height:0});Gt(this,"emitter",new bg);Gt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Gt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Gt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Gt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=yg(n,this.window.width),s=yg(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Gt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zr),this.element.addEventListener("touchstart",this.onTouchStart,zr),this.element.addEventListener("touchmove",this.onTouchMove,zr),this.element.addEventListener("touchend",this.onTouchEnd,zr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,zr),this.element.removeEventListener("touchstart",this.onTouchStart,zr),this.element.removeEventListener("touchmove",this.onTouchMove,zr),this.element.removeEventListener("touchend",this.onTouchEnd,zr)}},Sg=r=>Math.min(1,1.001-2**(-10*r)),Tg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:M=!0,autoRaf:E=!1,anchors:x=!1,autoToggle:S=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:v=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:C=!0}={}){Gt(this,"_isScrolling",!1);Gt(this,"_isStopped",!1);Gt(this,"_isLocked",!1);Gt(this,"_preventNextNativeScrollEvent",!1);Gt(this,"_resetVelocityTimeout",null);Gt(this,"_rafId",null);Gt(this,"_isDraggingSelection",!1);Gt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Gt(this,"isTouching");Gt(this,"isIos");Gt(this,"time",0);Gt(this,"userData",{});Gt(this,"lastVelocity",0);Gt(this,"velocity",0);Gt(this,"direction",0);Gt(this,"options");Gt(this,"targetScroll");Gt(this,"animatedScroll");Gt(this,"animate",new Vv);Gt(this,"emitter",new bg);Gt(this,"dimensions");Gt(this,"virtualScroll");Gt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Gt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Gt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Gt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Gt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Gt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var _,m,g,M,E;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent"))||h==="vertical"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-horizontal"))||i&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-touch"))||s&&((E=p.hasAttribute)==null?void 0:E.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Gt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Gt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=vg,window.lenis||(window.lenis={}),window.lenis.version=vg,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Sg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:M,autoRaf:E,anchors:x,autoToggle:S,allowNestedScroll:T,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:C},this.dimensions=new Hv(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Xv(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=r.targetTouches[0])!=null?c:r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(p=u),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=Mg(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Sg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var T;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,p;if(n-((T=i.time)!=null?T:0)>2e3){i.time=Date.now();let A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),h=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,M,E,x,S;if(_==="horizontal")m=Math.round(r.scrollLeft),g=d-f,M=t,E=s,x=a,S=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=u-p,M=e,E=o,x=l,S=h;else return!1;return!S&&(m>=g||m<=0)?!0:(M>0?m<g:m>0)&&E&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?kv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var i_=0,Td=1,r_=2;var dl=1,s_=2,Go=3,jr=0,Jn=1,Ri=2,nr=0,Ho=1,Ds=2,wd=3,Ed=4,o_=5;var Ns=100,a_=101,l_=102,c_=103,h_=104,u_=200,f_=201,d_=202,p_=203,Ad=204,Cd=205,m_=206,g_=207,__=208,x_=209,v_=210,y_=211,S_=212,M_=213,b_=214,Wc=0,Xc=1,Yc=2,Ao=3,qc=4,Zc=5,Jc=6,$c=7,Rd=0,T_=1,w_=2,zi=0,Pd=1,Id=2,Ld=3,Dd=4,Nd=5,Ud=6,Fd=7;var Od=300,ts=301,Us=302,Ph=303,Ih=304,pl=306,Kc=1e3,Qi=1001,Qc=1002,mn=1003,E_=1004;var ml=1005;var vn=1006,Lh=1007;var es=1008;var _i=1009,Bd=1010,zd=1011,Wo=1012,Dh=1013,ki=1014,Vi=1015,Gi=1016,Nh=1017,Uh=1018,Xo=1020,kd=35902,Vd=35899,Gd=1021,Hd=1022,Pi=1023,ji=1026,ns=1027,Wd=1028,Fh=1029,is=1030,Oh=1031;var Bh=1033,gl=33776,_l=33777,xl=33778,vl=33779,zh=35840,kh=35841,Vh=35842,Gh=35843,Hh=36196,Wh=37492,Xh=37496,Yh=37488,qh=37489,yl=37490,Zh=37491,Jh=37808,$h=37809,Kh=37810,Qh=37811,jh=37812,tu=37813,eu=37814,nu=37815,iu=37816,ru=37817,su=37818,ou=37819,au=37820,lu=37821,cu=36492,hu=36494,uu=36495,fu=36283,du=36284,Sl=36285,pu=36286;var Ba=2300,jc=2301,Gc=2302,dd=2303,pd=2400,md=2401,gd=2402;var A_=3200;var Xd=0,C_=1,br="",pi="srgb",za="srgb-linear",ka="linear",ye="srgb";var Hc=7680;var R_=519,P_=512,I_=513,L_=514,mu=515,D_=516,N_=517,gu=518,U_=519,F_=35044;var Yd="300 es",Bi=2e3,Va=2001;function Yv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function O_(){let r=Ga("canvas");return r.style.display="block",r}var wg={},Co=null;function qd(...r){let t="THREE."+r.shift();Co?Co("log",t,...r):console.log(t,...r)}function B_(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Kt(...r){r=B_(r);let t="THREE."+r.shift();if(Co)Co("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function jt(...r){r=B_(r);let t="THREE."+r.shift();if(Co)Co("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Rs(...r){let t=r.join(" ");t in wg||(wg[t]=!0,Kt(...r))}function z_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var k_={[Wc]:Xc,[Yc]:Jc,[qc]:$c,[Ao]:Zc,[Xc]:Wc,[Jc]:Yc,[$c]:qc,[Zc]:Ao},tr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eg=1234567,wo=Math.PI/180,Ro=180/Math.PI;function Fs(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function fe(r,t,e){return Math.max(t,Math.min(e,r))}function Zd(r,t){return(r%t+t)%t}function Zv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Jv(r,t,e){return r!==t?(e-r)/(t-r):0}function Ua(r,t,e){return(1-e)*r+e*t}function $v(r,t,e,n){return Ua(r,t,1-Math.exp(-e*n))}function Kv(r,t=1){return t-Math.abs(Zd(r,t*2)-t)}function Qv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function jv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ty(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ey(r,t){return r+Math.random()*(t-r)}function ny(r){return r*(.5-Math.random())}function iy(r){r!==void 0&&(Eg=r);let t=Eg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ry(r){return r*wo}function sy(r){return r*Ro}function oy(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function ay(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ly(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cy(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function To(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yo={DEG2RAD:wo,RAD2DEG:Ro,generateUUID:Fs,clamp:fe,euclideanModulo:Zd,mapLinear:Zv,inverseLerp:Jv,lerp:Ua,damp:$v,pingpong:Kv,smoothstep:Qv,smootherstep:jv,randInt:ty,randFloat:ey,randFloatSpread:ny,seededRandom:iy,degToRad:ry,radToDeg:sy,isPowerOfTwo:oy,ceilPowerOfTwo:ay,floorPowerOfTwo:ly,setQuaternionFromProperEuler:cy,normalize:qn,denormalize:To},tp=class tp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;var wt=tp,er=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ep=class ep{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ag.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ag.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gf.copy(this).projectOnVector(t),this.sub(Gf)}reflect(t){return this.sub(Gf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ep.prototype.isVector3=!0;var F=ep,Gf=new F,Ag=new er,np=class np{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],E=i[4],x=i[7],S=i[2],T=i[5],A=i[8];return s[0]=o*_+a*M+l*S,s[3]=o*m+a*E+l*T,s[6]=o*g+a*x+l*A,s[1]=c*_+h*M+d*S,s[4]=c*m+h*E+d*T,s[7]=c*g+h*x+d*A,s[2]=u*_+f*M+p*S,s[5]=u*m+f*E+p*T,s[8]=u*g+f*x+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hf.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hf.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;var ne=np,Hf=new ne,Cg=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rg=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){let r={enabled:!0,workingColorSpace:za,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(i.r=Eo(i.r),i.g=Eo(i.g),i.b=Eo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===br?ka:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[za]:{primaries:t,whitePoint:n,transfer:ka,toXYZ:Cg,fromXYZ:Rg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Cg,fromXYZ:Rg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),r}var pe=hy();function Sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ho,th=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ho===void 0&&(ho=Ga("canvas")),ho.width=t.width,ho.height=t.height;let i=ho.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ho}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ga("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Sr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sr(e[n]/255)*255):e[n]=Sr(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uy=0,Po=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wf(i[o].image)):s.push(Wf(i[o]))}else s=Wf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Wf(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?th.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var fy=0,Xf=new F,Zn=class r extends tr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Qi,i=Qi,s=vn,o=es,a=Pi,l=_i,c=r.DEFAULT_ANISOTROPY,h=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Fs(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xf).x}get height(){return this.source.getSize(Xf).y}get depth(){return this.source.getSize(Xf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kc:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kc:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Od;Zn.DEFAULT_ANISOTROPY=1;var ip=class ip{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,x=(f+1)/2,S=(g+1)/2,T=(h+u)/4,A=(d+_)/4,v=(p+m)/4;return E>x&&E>S?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=T/n,s=A/n):x>S?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=v/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;var Ve=ip,eh=class extends tr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Zn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Po(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ha=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Rh=class Rh{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/uo.setFromMatrixColumn(t,0).length(),s=1/uo.setFromMatrixColumn(t,1).length(),o=1/uo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dy,t,py)}lookAt(t,e,n){let i=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),kr.crossVectors(n,fi),kr.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),kr.crossVectors(n,fi)),kr.normalize(),pc.crossVectors(fi,kr),i[0]=kr.x,i[4]=pc.x,i[8]=fi.x,i[1]=kr.y,i[5]=pc.y,i[9]=fi.y,i[2]=kr.z,i[6]=pc.z,i[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],E=n[7],x=n[11],S=n[15],T=i[0],A=i[4],v=i[8],w=i[12],C=i[1],D=i[5],I=i[9],k=i[13],L=i[2],z=i[6],H=i[10],V=i[14],Q=i[3],q=i[7],P=i[11],$=i[15];return s[0]=o*T+a*C+l*L+c*Q,s[4]=o*A+a*D+l*z+c*q,s[8]=o*v+a*I+l*H+c*P,s[12]=o*w+a*k+l*V+c*$,s[1]=h*T+d*C+u*L+f*Q,s[5]=h*A+d*D+u*z+f*q,s[9]=h*v+d*I+u*H+f*P,s[13]=h*w+d*k+u*V+f*$,s[2]=p*T+_*C+m*L+g*Q,s[6]=p*A+_*D+m*z+g*q,s[10]=p*v+_*I+m*H+g*P,s[14]=p*w+_*k+m*V+g*$,s[3]=M*T+E*C+x*L+S*Q,s[7]=M*A+E*D+x*z+S*q,s[11]=M*v+E*I+x*H+S*P,s[15]=M*w+E*k+x*V+S*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],M=l*f-c*u,E=a*f-c*d,x=a*u-l*d,S=o*f-c*h,T=o*u-l*h,A=o*d-a*h;return e*(_*M-m*E+g*x)-n*(p*M-m*S+g*T)+i*(p*E-_*S+g*A)-s*(p*x-_*T+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],M=e*a-n*o,E=e*l-i*o,x=e*c-s*o,S=n*l-i*a,T=n*c-s*a,A=i*c-s*l,v=h*_-d*p,w=h*m-u*p,C=h*g-f*p,D=d*m-u*_,I=d*g-f*_,k=u*g-f*m,L=M*k-E*I+x*D+S*C-T*w+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(a*k-l*I+c*D)*z,t[1]=(i*I-n*k-s*D)*z,t[2]=(_*A-m*T+g*S)*z,t[3]=(u*T-d*A-f*S)*z,t[4]=(l*C-o*k-c*w)*z,t[5]=(e*k-i*C+s*w)*z,t[6]=(m*x-p*A-g*E)*z,t[7]=(h*A-u*x+f*E)*z,t[8]=(o*I-a*C+c*v)*z,t[9]=(n*C-e*I-s*v)*z,t[10]=(p*T-_*x+g*M)*z,t[11]=(d*x-h*T-f*M)*z,t[12]=(a*w-o*D-l*v)*z,t[13]=(e*D-n*w+i*v)*z,t[14]=(_*E-p*S-m*M)*z,t[15]=(h*S-d*E+u*M)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,_=o*h,m=o*d,g=a*d,M=l*c,E=l*h,x=l*d,S=n.x,T=n.y,A=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+x)*S,i[2]=(p-E)*S,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+g))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(p+E)*A,i[9]=(m-M)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=uo.set(i[0],i[1],i[2]).length(),a=uo.set(i[4],i[5],i[6]).length(),l=uo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Di.copy(this);let c=1/o,h=1/a,d=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,e.setFromRotationMatrix(Di),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Bi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Bi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Va)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Bi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Bi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Va)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Rh.prototype.isMatrix4=!0;var Fe=Rh,uo=new F,Di=new Fe,dy=new F(0,0,0),py=new F(1,1,1),kr=new F,pc=new F,fi=new F,Pg=new Fe,Ig=new er,Xr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ig.setFromEuler(this),this.setFromQuaternion(Ig,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xr.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},my=0,Lg=new F,fo=new er,mr=new Fe,mc=new F,Ra=new F,gy=new F,_y=new er,Dg=new F(1,0,0),Ng=new F(0,1,0),Ug=new F(0,0,1),Fg={type:"added"},xy={type:"removed"},po={type:"childadded",child:null},Yf={type:"childremoved",child:null},ii=class r extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new F,e=new Xr,n=new er,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ne}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.multiply(fo),this}rotateOnWorldAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.premultiply(fo),this}rotateX(t){return this.rotateOnAxis(Dg,t)}rotateY(t){return this.rotateOnAxis(Ng,t)}rotateZ(t){return this.rotateOnAxis(Ug,t)}translateOnAxis(t,e){return Lg.copy(t).applyQuaternion(this.quaternion),this.position.add(Lg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dg,t)}translateY(t){return this.translateOnAxis(Ng,t)}translateZ(t){return this.translateOnAxis(Ug,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mc.copy(t):mc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Ra,mc,this.up):mr.lookAt(mc,Ra,this.up),this.quaternion.setFromRotationMatrix(mr),i&&(mr.extractRotation(i.matrixWorld),fo.setFromRotationMatrix(mr),this.quaternion.premultiply(fo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fg),po.child=t,this.dispatchEvent(po),po.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xy),Yf.child=t,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fg),po.child=t,this.dispatchEvent(po),po.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,_y,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ii.DEFAULT_UP=new F(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yr=class extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}},vy={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},V_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},gc={h:0,s:0,l:0};function qf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Zd(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=qf(o,s,t+1/3),this.g=qf(o,s,t),this.b=qf(o,s,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=pi){function n(s){s!==void 0&&parseFloat(s)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pi){let n=V_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return pe.workingToColorSpace(Pn.copy(this),t),Math.round(fe(Pn.r*255,0,255))*65536+Math.round(fe(Pn.g*255,0,255))*256+Math.round(fe(Pn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Pn.copy(this),e);let n=Pn.r,i=Pn.g,s=Pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=pi){pe.workingToColorSpace(Pn.copy(this),t);let e=Pn.r,n=Pn.g,i=Pn.b;return t!==pi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vr),this.setHSL(Vr.h+t,Vr.s+e,Vr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vr),t.getHSL(gc);let n=Ua(Vr.h,gc.h,e),i=Ua(Vr.s,gc.s,e),s=Ua(Vr.l,gc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new le;le.NAMES=V_;var Xa=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ya=class extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ni=new F,gr=new F,Zf=new F,_r=new F,mo=new F,go=new F,Og=new F,Jf=new F,$f=new F,Kf=new F,Qf=new Ve,jf=new Ve,td=new Ve,Oi=class r{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ni.subVectors(t,e),i.cross(Ni);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ni.subVectors(i,e),gr.subVectors(n,e),Zf.subVectors(t,e);let o=Ni.dot(Ni),a=Ni.dot(gr),l=Ni.dot(Zf),c=gr.dot(gr),h=gr.dot(Zf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Qf.setScalar(0),jf.setScalar(0),td.setScalar(0),Qf.fromBufferAttribute(t,e),jf.fromBufferAttribute(t,n),td.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Qf,s.x),o.addScaledVector(jf,s.y),o.addScaledVector(td,s.z),o}static isFrontFacing(t,e,n,i){return Ni.subVectors(n,e),gr.subVectors(t,e),Ni.cross(gr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Ni.cross(gr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;mo.subVectors(i,n),go.subVectors(s,n),Jf.subVectors(t,n);let l=mo.dot(Jf),c=go.dot(Jf);if(l<=0&&c<=0)return e.copy(n);$f.subVectors(t,i);let h=mo.dot($f),d=go.dot($f);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(mo,o);Kf.subVectors(t,s);let f=mo.dot(Kf),p=go.dot(Kf);if(p>=0&&f<=p)return e.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(go,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Og.subVectors(s,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(Og,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(mo,o).addScaledVector(go,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yr=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ui):Ui.fromBufferAttribute(s,o),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_c.copy(n.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pa),xc.subVectors(this.max,Pa),_o.subVectors(t.a,Pa),xo.subVectors(t.b,Pa),vo.subVectors(t.c,Pa),Gr.subVectors(xo,_o),Hr.subVectors(vo,xo),Ts.subVectors(_o,vo);let e=[0,-Gr.z,Gr.y,0,-Hr.z,Hr.y,0,-Ts.z,Ts.y,Gr.z,0,-Gr.x,Hr.z,0,-Hr.x,Ts.z,0,-Ts.x,-Gr.y,Gr.x,0,-Hr.y,Hr.x,0,-Ts.y,Ts.x,0];return!ed(e,_o,xo,vo,xc)||(e=[1,0,0,0,1,0,0,0,1],!ed(e,_o,xo,vo,xc))?!1:(vc.crossVectors(Gr,Hr),e=[vc.x,vc.y,vc.z],ed(e,_o,xo,vo,xc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xr=[new F,new F,new F,new F,new F,new F,new F,new F],Ui=new F,_c=new Yr,_o=new F,xo=new F,vo=new F,Gr=new F,Hr=new F,Ts=new F,Pa=new F,xc=new F,vc=new F,ws=new F;function ed(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ws.fromArray(r,s);let a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nn=new F,yc=new wt,yy=0,ei=class extends tr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=F_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yc.fromBufferAttribute(this,e),yc.applyMatrix3(t),this.setXY(e,yc.x,yc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=To(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=To(e,this.array)),e}setX(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=To(e,this.array)),e}setY(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=To(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=To(e,this.array)),e}setW(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var qa=class extends ei{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Za=class extends ei{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends ei{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sy=new Yr,Ia=new F,nd=new F,qr=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sy.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ia.subVectors(t,this.center);let e=Ia.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ia,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ia.copy(t.center).add(nd)),this.expandByPoint(Ia.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},My=0,Ci=new Fe,id=new ii,yo=new F,di=new Yr,La=new Yr,pn=new F,an=class r extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yv(t)?Za:qa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,e,n){return Ci.makeTranslation(t,e,n),this.applyMatrix4(Ci),this}scale(t,e,n){return Ci.makeScale(t,e,n),this.applyMatrix4(Ci),this}lookAt(t){return id.lookAt(t),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];di.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];La.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(di.min,La.min),di.expandByPoint(pn),pn.addVectors(di.max,La.max),di.expandByPoint(pn)):(di.expandByPoint(La.min),di.expandByPoint(La.max))}di.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)pn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(pn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pn.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(t,c),pn.add(yo)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new F,l[v]=new F;let c=new F,h=new F,d=new F,u=new wt,f=new wt,p=new wt,_=new F,m=new F;function g(v,w,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[v].add(_),a[w].add(_),a[C].add(_),l[v].add(m),l[w].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,w=M.length;v<w;++v){let C=M[v],D=C.start,I=C.count;for(let k=D,L=D+I;k<L;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let E=new F,x=new F,S=new F,T=new F;function A(v){S.fromBufferAttribute(i,v),T.copy(S);let w=a[v];E.copy(w),E.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(T,w);let D=x.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,w=M.length;v<w;++v){let C=M[v],D=C.start,I=C.count;for(let k=D,L=D+I;k<L;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ei(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new ei(u,h,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rd=new F,by=new F,Ty=new ne,Fi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=rd.subVectors(n,e).cross(by.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(rd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ty.getNormalMatrix(t),i=this.coplanarPoint(rd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wy=0,Mr=class extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Ho,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hc,this.stencilZFail=Hc,this.stencilZPass=Hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vr=new F,sd=new F,Sc=new F,Mc=new F,Lo=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vr.copy(this.origin).addScaledVector(this.direction,e),vr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sd.copy(t).add(e).multiplyScalar(.5),Sc.copy(e).sub(t).normalize(),Mc.copy(this.origin).sub(sd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Sc),a=Mc.dot(this.direction),l=-Mc.dot(Sc),c=Mc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sd).addScaledVector(Sc,u),f}intersectSphere(t,e){if(t.radius<0)return null;vr.subVectors(t.center,this.origin);let n=vr.dot(this.direction),i=vr.dot(vr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,M=n.y-o.y,E=n.z-o.z,x=Math.abs(l),S=Math.abs(c),T=Math.abs(h),A,v,w,C,D,I,k,L,z,H,V,Q;if(x>=S&&x>=T?(w=l,I=d,z=p,Q=g,l>=0?(A=c,v=h,C=u,D=f,k=_,L=m,H=M,V=E):(A=h,v=c,C=f,D=u,k=m,L=_,H=E,V=M)):S>=T?(w=c,I=u,z=_,Q=M,c>=0?(A=h,v=l,C=f,D=d,k=m,L=p,H=E,V=g):(A=l,v=h,C=d,D=f,k=p,L=m,H=g,V=E)):(w=h,I=f,z=m,Q=E,h>=0?(A=l,v=c,C=d,D=u,k=p,L=_,H=g,V=M):(A=c,v=l,C=u,D=d,k=_,L=p,H=M,V=g)),w===0)return null;let q=A/w,P=v/w,$=1/w,ct=C-q*I,_t=D-P*I,zt=k-q*z,Vt=L-P*z,Qt=H-q*Q,J=V-P*Q,et=Qt*Vt-J*zt,pt=ct*J-_t*Qt,Xt=zt*_t-Vt*ct;if(i){if(et<0||pt<0||Xt<0)return null}else if((et<0||pt<0||Xt<0)&&(et>0||pt>0||Xt>0))return null;let vt=et+pt+Xt;if(vt===0)return null;let Lt=$*(et*I+pt*z+Xt*Q);return(vt>0?Lt<0:Lt>0)?null:this.at(Lt/vt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ps=class extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bg=new Fe,Es=new Lo,bc=new qr,zg=new F,Tc=new F,wc=new F,Ec=new F,od=new F,Ac=new F,kg=new F,Cc=new F,Ln=class extends ii{constructor(t=new an,e=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ac.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(od.fromBufferAttribute(d,t),o?Ac.addScaledVector(od,h):Ac.addScaledVector(od.sub(e),h))}e.add(Ac)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(s),Es.copy(t.ray).recast(t.near),!(bc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(bc,zg)===null||Es.origin.distanceToSquared(zg)>(t.far-t.near)**2))&&(Bg.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Bg),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){let T=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);i=Rc(this,g,t,n,c,h,d,T,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);i=Rc(this,o,t,n,c,h,d,M,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){let T=x,A=x+1,v=x+2;i=Rc(this,g,t,n,c,h,d,T,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=m,E=m+1,x=m+2;i=Rc(this,o,t,n,c,h,d,M,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Ey(r,t,e,n,i,s,o,a){let l;if(t.side===Jn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===jr,a),l===null)return null;Cc.copy(a),Cc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Cc);return c<e.near||c>e.far?null:{distance:c,point:Cc.clone(),object:r}}function Rc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Tc),r.getVertexPosition(l,wc),r.getVertexPosition(c,Ec);let h=Ey(r,t,e,n,Tc,wc,Ec,kg);if(h){let d=new F;Oi.getBarycoord(kg,Tc,wc,Ec,d),i&&(h.uv=Oi.getInterpolatedAttribute(i,a,l,c,d,new wt)),s&&(h.uv1=Oi.getInterpolatedAttribute(s,a,l,c,d,new wt)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new F,materialIndex:0};Oi.getNormal(Tc,wc,Ec,u.normal),h.face=u,h.barycoord=d}return h}var ih=class extends Zn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=mn,h=mn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=new qr,Ay=new wt(.5,.5),Pc=new F,Ja=class{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,s=new Fi,o=new Fi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],M=s[12],E=s[13],x=s[14],S=s[15];if(i[0].setComponents(c-o,f-h,g-p,S-M).normalize(),i[1].setComponents(c+o,f+h,g+p,S+M).normalize(),i[2].setComponents(c+a,f+d,g+_,S+E).normalize(),i[3].setComponents(c-a,f-d,g-_,S-E).normalize(),n)i[4].setComponents(l,u,m,x).normalize(),i[5].setComponents(c-l,f-u,g-m,S-x).normalize();else if(i[4].setComponents(c-l,f-u,g-m,S-x).normalize(),e===Bi)i[5].setComponents(c+l,f+u,g+m,S+x).normalize();else if(e===Va)i[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=Ay.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Pc.x=i.normal.x>0?t.max.x:t.min.x,Pc.y=i.normal.y>0?t.max.y:t.min.y,Pc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Do=class extends Mr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},rh=new F,sh=new F,Vg=new Fe,Da=new Lo,Ic=new qr,ad=new F,Gg=new F,oh=class extends ii{constructor(t=new an,e=new Do){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)rh.fromBufferAttribute(e,i-1),sh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rh.distanceTo(sh);t.setAttribute("lineDistance",new be(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(i),Ic.radius+=s,t.ray.intersectsSphere(Ic)===!1)return;Vg.copy(i).invert(),Da.copy(t.ray).applyMatrix4(Vg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=h.getX(_),M=h.getX(_+1),E=Lc(this,t,Da,l,g,M,_);E&&e.push(E)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=Lc(this,t,Da,l,_,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=Lc(this,t,Da,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=Lc(this,t,Da,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Lc(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(rh.fromBufferAttribute(a,i),sh.fromBufferAttribute(a,s),e.distanceSqToSegment(rh,sh,ad,Gg)>n)return;ad.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ad);if(!(c<t.near||c>t.far))return{distance:c,point:Gg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Hg=new F,Wg=new F,No=class extends oh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Hg.fromBufferAttribute(e,i),Wg.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hg.distanceTo(Wg);t.setAttribute("lineDistance",new be(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Uo=class extends Mr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xg=new Fe,_d=new Lo,Dc=new qr,Nc=new F,Fo=class extends ii{constructor(t=new an,e=new Uo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(i),Dc.radius+=s,t.ray.intersectsSphere(Dc)===!1)return;Xg.copy(i).invert(),_d.copy(t.ray).applyMatrix4(Xg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let m=c.getX(p);Nc.fromBufferAttribute(d,m),Yg(Nc,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)Nc.fromBufferAttribute(d,p),Yg(Nc,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yg(r,t,e,n,i,s,o){let a=_d.distanceSqToPoint(r);if(a<e){let l=new F;_d.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var $a=class extends Zn{constructor(t=[],e=ts,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ka=class extends Zn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zr=class extends Zn{constructor(t,e,n=ki,i,s,o,a=mn,l=mn,c,h=ji,d=1){if(h!==ji&&h!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Po(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ah=class extends Zr{constructor(t,e=ki,n=ts,i,s,o=mn,a=mn,l,c=ji){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qa=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Oo=class r extends an{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function p(_,m,g,M,E,x,S,T,A,v,w){let C=x/A,D=S/v,I=x/2,k=S/2,L=T/2,z=A+1,H=v+1,V=0,Q=0,q=new F;for(let P=0;P<H;P++){let $=P*D-k;for(let ct=0;ct<z;ct++){let _t=ct*C-I;q[_]=_t*M,q[m]=$*E,q[g]=L,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[g]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(ct/A),d.push(1-P/v),V+=1}}for(let P=0;P<v;P++)for(let $=0;$<A;$++){let ct=u+$+z*P,_t=u+$+z*(P+1),zt=u+($+1)+z*(P+1),Vt=u+($+1)+z*P;l.push(ct,_t,Vt),l.push(_t,zt,Vt),Q+=6}a.addGroup(f,Q,w),f+=Q,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ja=class r extends an{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],p=0,_=[],m=n/2,g=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function M(){let x=new F,S=new F,T=0,A=(e-t)/n;for(let v=0;v<=s;v++){let w=[],C=v/s,D=C*(e-t)+t;for(let I=0;I<=i;I++){let k=I/i,L=k*l+a,z=Math.sin(L),H=Math.cos(L);S.x=D*z,S.y=-C*n+m,S.z=D*H,d.push(S.x,S.y,S.z),x.set(z,A,H).normalize(),u.push(x.x,x.y,x.z),f.push(k,1-C),w.push(p++)}_.push(w)}for(let v=0;v<i;v++)for(let w=0;w<s;w++){let C=_[w][v],D=_[w+1][v],I=_[w+1][v+1],k=_[w][v+1];(t>0||w!==0)&&(h.push(C,D,k),T+=3),(e>0||w!==s-1)&&(h.push(D,I,k),T+=3)}c.addGroup(g,T,0),g+=T}function E(x){let S=p,T=new wt,A=new F,v=0,w=x===!0?t:e,C=x===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let I=0;I<=i;I++){let L=I/i*l+a,z=Math.cos(L),H=Math.sin(L);A.x=w*H,A.y=m*C,A.z=w*z,d.push(A.x,A.y,A.z),u.push(0,C,0),T.x=z*.5+.5,T.y=H*.5*C+.5,f.push(T.x,T.y),p++}for(let I=0;I<i;I++){let k=S+I,L=D+I;x===!0?h.push(L,L+1,k):h.push(L+1,L,k),v+=3}c.addGroup(g,v,x===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Uc=new F,Fc=new F,ld=new F,Oc=new Oi,Bo=class extends an{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(wo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=Oc;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Oc.getNormal(ld),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let E=(M+1)%3,x=d[M],S=d[E],T=Oc[h[M]],A=Oc[h[E]],v=`${x}_${S}`,w=`${S}_${x}`;w in u&&u[w]?(ld.dot(u[w].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),u[w]=null):v in u||(u[v]={index0:c[M],index1:c[E],normal:ld.clone()})}}for(let p in u)if(u[p]){let{index0:_,index1:m}=u[p];Uc.fromBufferAttribute(a,_),Fc.fromBufferAttribute(a,m),f.push(Uc.x,Uc.y,Uc.z),f.push(Fc.x,Fc.y,Fc.z)}this.setAttribute("position",new be(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new wt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,i=[],s=[],o=[],a=new F,l=new Fe;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(fe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(fe(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zo=class extends mi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lh=class extends zo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jd(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var qg=new F,Zg=new F,cd=new Jd,hd=new Jd,ud=new Jd,ch=class extends mi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Zg.subVectors(i[0],i[1]).add(i[0]),c=Zg);let d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(qg.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=qg),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),cd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),hd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),ud.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(cd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ud.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(cd.calc(l),hd.calc(l),ud.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jg(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Cy(r,t){let e=1-r;return e*e*t}function Ry(r,t){return 2*(1-r)*r*t}function Py(r,t){return r*r*t}function Fa(r,t,e,n){return Cy(r,t)+Ry(r,e)+Py(r,n)}function Iy(r,t){let e=1-r;return e*e*e*t}function Ly(r,t){let e=1-r;return 3*e*e*r*t}function Dy(r,t){return 3*(1-r)*r*r*t}function Ny(r,t){return r*r*r*t}function Oa(r,t,e,n,i){return Iy(r,t)+Ly(r,e)+Dy(r,n)+Ny(r,i)}var tl=class extends mi{constructor(t=new wt,e=new wt,n=new wt,i=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new wt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oa(t,i.x,s.x,o.x,a.x),Oa(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hh=class extends mi{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oa(t,i.x,s.x,o.x,a.x),Oa(t,i.y,s.y,o.y,a.y),Oa(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},el=class extends mi{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uh=class extends mi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends mi{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fa(t,i.x,s.x,o.x),Fa(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fh=class extends mi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fa(t,i.x,s.x,o.x),Fa(t,i.y,s.y,o.y),Fa(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Jg(a,l.x,c.x,h.x,d.x),Jg(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new wt().fromArray(i))}return this}},xd=Object.freeze({__proto__:null,ArcCurve:lh,CatmullRomCurve3:ch,CubicBezierCurve:tl,CubicBezierCurve3:hh,EllipseCurve:zo,LineCurve:el,LineCurve3:uh,QuadraticBezierCurve:nl,QuadraticBezierCurve3:fh,SplineCurve:il}),dh=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new xd[i.type]().fromJSON(i))}return this}},rl=class extends dh{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new el(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new nl(this.currentPoint.clone(),new wt(t,e),new wt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new tl(this.currentPoint.clone(),new wt(t,e),new wt(n,i),new wt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new il(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new zo(t,e,n,i,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Is=class extends rl{constructor(t){super(t),this.uuid=Fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new rl().fromJSON(i))}return this}};function Uy(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=G_(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=ky(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=r[u],p=r[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return sl(s,o,e,a,l,c,0),o}function G_(r,t,e,n,i){let s;if(i===Ky(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=$g(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=$g(o/n|0,r[o],r[o+1],s);return s&&ko(s,s.next)&&(al(s),s=s.next),s}function Ls(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ko(e,e.next)||ke(e.prev,e,e.next)===0)){if(al(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sl(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Xy(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Oy(r,n,i,s):Fy(r)){t.push(l.i,r.i,c.i),al(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=By(Ls(r),t),sl(r,t,e,n,i,s,2)):o===2&&zy(r,t,e,n,i,s):sl(Ls(r),t,e,n,i,s,1);break}}}function Fy(r){let t=r.prev,e=r,n=r.next;if(ke(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),d=Math.min(a,l,c),u=Math.max(i,s,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Na(i,a,s,l,o,c,p.x,p.y)&&ke(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Oy(r,t,e,n){let i=r.prev,s=r,o=r.next;if(ke(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),m=Math.max(h,d,u),g=vd(f,p,t,e,n),M=vd(_,m,t,e,n),E=r.prevZ,x=r.nextZ;for(;E&&E.z>=g&&x&&x.z<=M;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Na(a,h,l,d,c,u,E.x,E.y)&&ke(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&Na(a,h,l,d,c,u,x.x,x.y)&&ke(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Na(a,h,l,d,c,u,E.x,E.y)&&ke(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&Na(a,h,l,d,c,u,x.x,x.y)&&ke(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function By(r,t){let e=r;do{let n=e.prev,i=e.next.next;!ko(n,i)&&W_(n,e,e.next,i)&&ol(n,i)&&ol(i,n)&&(t.push(n.i,e.i,i.i),al(e),al(e.next),e=r=i),e=e.next}while(e!==r);return Ls(e)}function zy(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zy(o,a)){let l=X_(o,a);o=Ls(o,o.next),l=Ls(l,l.next),sl(o,t,e,n,i,s,0),sl(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function ky(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=G_(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(qy(c))}i.sort(Vy);for(let s=0;s<i.length;s++)e=Gy(i[s],e);return e}function Vy(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Gy(r,t){let e=Hy(r,t);if(!e)return t;let n=X_(e,r);return Ls(n,n.next),Ls(e,e.next)}function Hy(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(ko(r,e))return e;do{if(ko(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&H_(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);ol(e,r)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Wy(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Wy(r,t){return ke(r.prev,r,t.prev)<0&&ke(t.next,r,r.next)<0}function Xy(r,t,e,n){let i=r;do i.z===0&&(i.z=vd(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Yy(i)}function Yy(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function vd(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function qy(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function H_(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Na(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&H_(r,t,e,n,i,s,o,a)}function Zy(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Jy(r,t)&&(ol(r,t)&&ol(t,r)&&$y(r,t)&&(ke(r.prev,r,t.prev)||ke(r,t.prev,t))||ko(r,t)&&ke(r.prev,r,r.next)>0&&ke(t.prev,t,t.next)>0)}function ke(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ko(r,t){return r.x===t.x&&r.y===t.y}function W_(r,t,e,n){let i=zc(ke(r,t,e)),s=zc(ke(r,t,n)),o=zc(ke(e,n,r)),a=zc(ke(e,n,t));return!!(i!==s&&o!==a||i===0&&Bc(r,e,t)||s===0&&Bc(r,n,t)||o===0&&Bc(e,r,n)||a===0&&Bc(e,t,n))}function Bc(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function zc(r){return r>0?1:r<0?-1:0}function Jy(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&W_(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ol(r,t){return ke(r.prev,r,r.next)<0?ke(r,t,r.next)>=0&&ke(r,r.prev,t)>=0:ke(r,t,r.prev)<0||ke(r,r.next,t)<0}function $y(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function X_(r,t){let e=yd(r.i,r.x,r.y),n=yd(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $g(r,t,e,n){let i=yd(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function al(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function yd(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ky(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Sd=class{static triangulate(t,e,n=2){return Uy(t,e,n)}},Cs=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Kg(t),Qg(n,t);let o=t.length;e.forEach(Kg);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Qg(n,e[l]);let a=Sd.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Kg(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Qg(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Vo=class r extends an{constructor(t=new Is([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Qy,E,x=!1,S,T,A,v;if(g){E=g.getSpacedPoints(h),x=!0,u=!1;let j=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,j),T=new F,A=new F,v=new F}u||(m=0,f=0,p=0,_=0);let w=a.extractPoints(c),C=w.shape,D=w.holes;if(!Cs.isClockWise(C)){C=C.reverse();for(let j=0,rt=D.length;j<rt;j++){let at=D[j];Cs.isClockWise(at)&&(D[j]=at.reverse())}}function k(j){let at=10000000000000001e-36,N=j[0];for(let dt=1;dt<=j.length;dt++){let kt=dt%j.length,Ut=j[kt],Ct=Ut.x-N.x,Jt=Ut.y-N.y,U=Ct*Ct+Jt*Jt,ce=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(N.x),Math.abs(N.y)),qt=at*ce*ce;if(U<=qt){j.splice(kt,1),dt--;continue}N=Ut}}k(C),D.forEach(k);let L=D.length,z=C;for(let j=0;j<L;j++){let rt=D[j];C=C.concat(rt)}function H(j,rt,at){return rt||jt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,at)}let V=C.length;function Q(j,rt,at){let N,dt,kt,Ut=j.x-rt.x,Ct=j.y-rt.y,Jt=at.x-j.x,U=at.y-j.y,ce=Ut*Ut+Ct*Ct,qt=Ut*U-Ct*Jt;if(Math.abs(qt)>Number.EPSILON){let R=Math.sqrt(ce),y=Math.sqrt(Jt*Jt+U*U),G=rt.x-Ct/R,W=rt.y+Ut/R,K=at.x-U/y,mt=at.y+Jt/y,ht=((K-G)*U-(mt-W)*Jt)/(Ut*U-Ct*Jt);N=G+Ut*ht-j.x,dt=W+Ct*ht-j.y;let tt=N*N+dt*dt;if(tt<=2)return new wt(N,dt);kt=Math.sqrt(tt/2)}else{let R=!1;Ut>Number.EPSILON?Jt>Number.EPSILON&&(R=!0):Ut<-Number.EPSILON?Jt<-Number.EPSILON&&(R=!0):Math.sign(Ct)===Math.sign(U)&&(R=!0),R?(N=-Ct,dt=Ut,kt=Math.sqrt(ce)):(N=Ut,dt=Ct,kt=Math.sqrt(ce/2))}return new wt(N/kt,dt/kt)}let q=[];for(let j=0,rt=z.length,at=rt-1,N=j+1;j<rt;j++,at++,N++)at===rt&&(at=0),N===rt&&(N=0),q[j]=Q(z[j],z[at],z[N]);let P=[],$,ct=q.concat();for(let j=0,rt=L;j<rt;j++){let at=D[j];$=[];for(let N=0,dt=at.length,kt=dt-1,Ut=N+1;N<dt;N++,kt++,Ut++)kt===dt&&(kt=0),Ut===dt&&(Ut=0),$[N]=Q(at[N],at[kt],at[Ut]);P.push($),ct=ct.concat($)}let _t;if(m===0)_t=Cs.triangulateShape(z,D);else{let j=[],rt=[];for(let at=0;at<m;at++){let N=at/m,dt=f*Math.cos(N*Math.PI/2),kt=p*Math.sin(N*Math.PI/2)+_;for(let Ut=0,Ct=z.length;Ut<Ct;Ut++){let Jt=H(z[Ut],q[Ut],kt);pt(Jt.x,Jt.y,-dt),N===0&&j.push(Jt)}for(let Ut=0,Ct=L;Ut<Ct;Ut++){let Jt=D[Ut];$=P[Ut];let U=[];for(let ce=0,qt=Jt.length;ce<qt;ce++){let R=H(Jt[ce],$[ce],kt);pt(R.x,R.y,-dt),N===0&&U.push(R)}N===0&&rt.push(U)}}_t=Cs.triangulateShape(j,rt)}let zt=_t.length,Vt=p+_;for(let j=0;j<V;j++){let rt=u?H(C[j],ct[j],Vt):C[j];x?(A.copy(S.normals[0]).multiplyScalar(rt.x),T.copy(S.binormals[0]).multiplyScalar(rt.y),v.copy(E[0]).add(A).add(T),pt(v.x,v.y,v.z)):pt(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<V;rt++){let at=u?H(C[rt],ct[rt],Vt):C[rt];x?(A.copy(S.normals[j]).multiplyScalar(at.x),T.copy(S.binormals[j]).multiplyScalar(at.y),v.copy(E[j]).add(A).add(T),pt(v.x,v.y,v.z)):pt(at.x,at.y,d/h*j)}for(let j=m-1;j>=0;j--){let rt=j/m,at=f*Math.cos(rt*Math.PI/2),N=p*Math.sin(rt*Math.PI/2)+_;for(let dt=0,kt=z.length;dt<kt;dt++){let Ut=H(z[dt],q[dt],N);pt(Ut.x,Ut.y,d+at)}for(let dt=0,kt=D.length;dt<kt;dt++){let Ut=D[dt];$=P[dt];for(let Ct=0,Jt=Ut.length;Ct<Jt;Ct++){let U=H(Ut[Ct],$[Ct],N);x?pt(U.x,U.y+E[h-1].y,E[h-1].x+at):pt(U.x,U.y,d+at)}}}Qt(),J();function Qt(){let j=i.length/3;if(u){let rt=0,at=V*rt;for(let N=0;N<zt;N++){let dt=_t[N];Xt(dt[2]+at,dt[1]+at,dt[0]+at)}rt=h+m*2,at=V*rt;for(let N=0;N<zt;N++){let dt=_t[N];Xt(dt[0]+at,dt[1]+at,dt[2]+at)}}else{for(let rt=0;rt<zt;rt++){let at=_t[rt];Xt(at[2],at[1],at[0])}for(let rt=0;rt<zt;rt++){let at=_t[rt];Xt(at[0]+V*h,at[1]+V*h,at[2]+V*h)}}n.addGroup(j,i.length/3-j,0)}function J(){let j=i.length/3,rt=0;et(z,rt),rt+=z.length;for(let at=0,N=D.length;at<N;at++){let dt=D[at];et(dt,rt),rt+=dt.length}n.addGroup(j,i.length/3-j,1)}function et(j,rt){let at=j.length;for(;--at>=0;){let N=at,dt=at-1;dt<0&&(dt=j.length-1);for(let kt=0,Ut=h+m*2;kt<Ut;kt++){let Ct=V*kt,Jt=V*(kt+1),U=rt+N+Ct,ce=rt+dt+Ct,qt=rt+dt+Jt,R=rt+N+Jt;vt(U,ce,qt,R)}}}function pt(j,rt,at){l.push(j),l.push(rt),l.push(at)}function Xt(j,rt,at){Lt(j),Lt(rt),Lt(at);let N=i.length/3,dt=M.generateTopUV(n,i,N-3,N-2,N-1);Nt(dt[0]),Nt(dt[1]),Nt(dt[2])}function vt(j,rt,at,N){Lt(j),Lt(rt),Lt(N),Lt(rt),Lt(at),Lt(N);let dt=i.length/3,kt=M.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);Nt(kt[0]),Nt(kt[1]),Nt(kt[3]),Nt(kt[1]),Nt(kt[2]),Nt(kt[3])}function Lt(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Nt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new xd[i.type]().fromJSON(i)),new r(n,t.options)}},Qy={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new wt(s,o),new wt(a,l),new wt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new wt(o,1-l),new wt(c,1-d),new wt(u,1-p),new wt(_,1-g)]:[new wt(a,1-l),new wt(h,1-d),new wt(f,1-p),new wt(m,1-g)]}};function jy(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Jr=class r extends an{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let M=g*u-o;for(let E=0;E<c;E++){let x=E*d-s;p.push(x,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let E=M+c*g,x=M+c*(g+1),S=M+1+c*(g+1),T=M+1+c*g;f.push(E,x,T),f.push(x,S,T)}this.setIndex(f),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var ll=class r extends an{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new F,f=new F,p=new F;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=i;g++){let M=g/i*s;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,M=(i+1)*(_-1)+m-1,E=(i+1)*(_-1)+m,x=(i+1)*_+m;l.push(g,M,x),l.push(M,E,x)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Os(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(jg(i))i.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(jg(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Nn(r){let t={};for(let e=0;e<r.length;e++){let n=Os(r[e]);for(let i in n)t[i]=n[i]}return t}function jg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function tS(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $d(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Y_={clone:Os,merge:Nn},eS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dn=class extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eS,this.fragmentShader=nS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=tS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(i.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ph=class extends Dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var mh=class extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gh=class extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function So(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function fd(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var $r=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_h=class extends $r{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pd,endingEnd:pd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case md:s=t,a=2*e-n;break;case gd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case md:o=t,l=2*n-e;break;case gd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,E=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+M*o[c+S]+E*o[l+S]+x*o[d+S];return s}},xh=class extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},vh=class extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},yh=class extends $r{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,M=d[g],E=d[g+1],x=t*u+p*2,S=h[x],T=h[x+1],A=rS(n,e,M,S,i);s[p]=q_(A,_,E,T,m)}return s}};function q_(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function iS(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function rS(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=q_(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=iS(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var gi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=So(e,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:So(t.times,Array),values:So(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),fd(t.settings)&&(n.settings={inTangents:So(t.settings.inTangents,Array),outTangents:So(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new yh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case jc:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break;case dd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return dd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;fd(this.settings)&&(t_(this.settings.inTangents,t),t_(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&qv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,fd(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function t_(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}gi.prototype.ValueTypeName="";gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=jc;var Kr=class extends gi{constructor(t,e,n){super(t,e,n)}};Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Ba;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}};Sh.prototype.ValueTypeName="color";var Mh=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}};Mh.prototype.ValueTypeName="number";var bh=class extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)er.slerpFlat(s,0,o,c-a,o,c,l);return s}},cl=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new bh(this.times,this.values,this.getValueSize(),t)}};cl.prototype.ValueTypeName="quaternion";cl.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends gi{constructor(t,e,n){super(t,e,n)}};Qr.prototype.ValueTypeName="string";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Ba;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Th=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}};Th.prototype.ValueTypeName="vector";var wh=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Z_=new wh,Eh=class{constructor(t){this.manager=t!==void 0?t:Z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Eh.DEFAULT_MATERIAL_NAME="__DEFAULT";var kc=new F,Vc=new er,Ki=new F,hl=class extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kc,Vc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Vc,Ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kc,Vc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Vc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wr=new F,e_=new wt,n_=new wt,In=class extends hl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wr.x,Wr.y).multiplyScalar(-t/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-t/Wr.z)}getViewSize(t,e){return this.getViewBounds(t,e_,n_),e.subVectors(n_,e_)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ul=class extends hl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Mo=-90,bo=1,Ah=class extends ii{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new In(Mo,bo,t,e);i.layers=this.layers,this.add(i);let s=new In(Mo,bo,t,e);s.layers=this.layers,this.add(s);let o=new In(Mo,bo,t,e);o.layers=this.layers,this.add(o);let a=new In(Mo,bo,t,e);a.layers=this.layers,this.add(a);let l=new In(Mo,bo,t,e);l.layers=this.layers,this.add(l);let c=new In(Mo,bo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ch=class extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},fl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=sS.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sS(){this._document.hidden===!1&&this.reset()}var Kd="\\[\\]\\.:\\/",oS=new RegExp("["+Kd+"]","g"),Qd="[^"+Kd+"]",aS="[^"+Kd.replace("\\.","")+"]",lS=/((?:WC+[\/:])*)/.source.replace("WC",Qd),cS=/(WCOD+)?/.source.replace("WCOD",aS),hS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qd),uS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qd),fS=new RegExp("^"+lS+cS+hS+uS+"$"),dS=["material","materials","bones","map"],Md=class{constructor(t,e,n){let i=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(oS,"")}static parseTrackName(t){let e=fS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);dS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Md;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eE=new Float32Array(1);var rp=class rp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};rp.prototype.isMatrix2=!0;var bd=rp;function jd(r,t,e,n){let i=pS(n);switch(e){case Gd:return r*t;case Wd:return r*t/i.components*i.byteLength;case Fh:return r*t/i.components*i.byteLength;case is:return r*t*2/i.components*i.byteLength;case Oh:return r*t*2/i.components*i.byteLength;case Hd:return r*t*3/i.components*i.byteLength;case Pi:return r*t*4/i.components*i.byteLength;case Bh:return r*t*4/i.components*i.byteLength;case gl:case _l:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xl:case vl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kh:case Gh:return Math.max(r,16)*Math.max(t,8)/4;case zh:case Vh:return Math.max(r,8)*Math.max(t,8)/2;case Hh:case Wh:case Yh:case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xh:case yl:case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case eu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case nu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case su:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ou:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case lu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case cu:case hu:case uu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fu:case du:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Sl:case pu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pS(r){switch(r){case _i:case Bd:return{byteLength:1,components:1};case Wo:case zd:case Gi:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case ki:case Dh:case Vi:return{byteLength:4,components:1};case kd:case Vd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function g0(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gS(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var _S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ES=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ub=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:_S,alphahash_pars_fragment:xS,alphamap_fragment:vS,alphamap_pars_fragment:yS,alphatest_fragment:SS,alphatest_pars_fragment:MS,aomap_fragment:bS,aomap_pars_fragment:TS,batching_pars_vertex:wS,batching_vertex:ES,begin_vertex:AS,beginnormal_vertex:CS,bsdfs:RS,iridescence_fragment:PS,bumpmap_pars_fragment:IS,clipping_planes_fragment:LS,clipping_planes_pars_fragment:DS,clipping_planes_pars_vertex:NS,clipping_planes_vertex:US,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:BS,color_vertex:zS,common:kS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:GS,displacementmap_pars_vertex:HS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:YS,colorspace_fragment:qS,colorspace_pars_fragment:ZS,envmap_fragment:JS,envmap_common_pars_fragment:$S,envmap_pars_fragment:KS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:cM,envmap_vertex:jS,fog_vertex:tM,fog_pars_vertex:eM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:hM,lights_toon_pars_fragment:uM,lights_phong_fragment:fM,lights_phong_pars_fragment:dM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:_M,lights_fragment_end:xM,lightprobes_pars_fragment:vM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:bM,map_fragment:TM,map_pars_fragment:wM,map_particle_fragment:EM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:IM,morphnormal_vertex:LM,morphtarget_pars_vertex:DM,morphtarget_vertex:NM,normal_fragment_begin:UM,normal_fragment_maps:FM,normal_pars_fragment:OM,normal_pars_vertex:BM,normal_vertex:zM,normalmap_pars_fragment:kM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:YM,premultiplied_alpha_fragment:qM,project_vertex:ZM,dithering_fragment:JM,dithering_pars_fragment:$M,roughnessmap_fragment:KM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:tb,shadowmap_vertex:eb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:rb,skinning_vertex:sb,skinnormal_vertex:ob,specularmap_fragment:ab,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:hb,transmission_fragment:ub,transmission_pars_fragment:fb,uv_pars_fragment:db,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:_b,background_frag:xb,backgroundCube_vert:vb,backgroundCube_frag:yb,cube_vert:Sb,cube_frag:Mb,depth_vert:bb,depth_frag:Tb,distance_vert:wb,distance_frag:Eb,equirect_vert:Ab,equirect_frag:Cb,linedashed_vert:Rb,linedashed_frag:Pb,meshbasic_vert:Ib,meshbasic_frag:Lb,meshlambert_vert:Db,meshlambert_frag:Nb,meshmatcap_vert:Ub,meshmatcap_frag:Fb,meshnormal_vert:Ob,meshnormal_frag:Bb,meshphong_vert:zb,meshphong_frag:kb,meshphysical_vert:Vb,meshphysical_frag:Gb,meshtoon_vert:Hb,meshtoon_frag:Wb,points_vert:Xb,points_frag:Yb,shadow_vert:qb,shadow_frag:Zb,sprite_vert:Jb,sprite_frag:$b},Et={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},rr={basic:{uniforms:Nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Nn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Nn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new le(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Nn([Et.points,Et.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Nn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Nn([Et.common,Et.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Nn([Et.sprite,Et.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Nn([Et.common,Et.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Nn([Et.lights,Et.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};rr.physical={uniforms:Nn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var _u={r:0,b:0,g:0},Kb=new Fe,_0=new ne;_0.set(-1,0,0,0,1,0,0,0,1);function Qb(r,t,e,n,i,s){let o=new le(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let x=M.backgroundBlurriness>0;E=t.get(E,x)}return E}function p(M){let E=!1,x=f(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===pl)?(c===void 0&&(c=new Ln(new Oo(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Os(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_0),c.material.toneMapped=pe.getTransfer(x.colorSpace)!==ye,(h!==x||d!==x.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ln(new Jr(2,2),new Dn({name:"BackgroundMaterial",uniforms:Os(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=pe.getTransfer(x.colorSpace)!==ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(_u,$d(r)),e.buffers.color.setClear(_u.r,_u.g,_u.b,E,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:_,dispose:g}}function jb(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(D,I,k,L,z){let H=!1,V=d(D,L,k,I);s!==V&&(s=V,c(s.object)),H=f(D,L,k,z),H&&p(D,L,k,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(D,I,k,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,k,L){let z=L.wireframe===!0,H=n[I.id];H===void 0&&(H={},n[I.id]=H);let V=D.isInstancedMesh===!0?D.id:0,Q=H[V];Q===void 0&&(Q={},H[V]=Q);let q=Q[k.id];q===void 0&&(q={},Q[k.id]=q);let P=q[z];return P===void 0&&(P=u(l()),q[z]=P),P}function u(D){let I=[],k=[],L=[];for(let z=0;z<e;z++)I[z]=0,k[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,k,L){let z=s.attributes,H=I.attributes,V=0,Q=k.getAttributes();for(let q in Q)if(Q[q].location>=0){let $=z[q],ct=H[q];if(ct===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),$===void 0||$.attribute!==ct||ct&&$.data!==ct.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function p(D,I,k,L){let z={},H=I.attributes,V=0,Q=k.getAttributes();for(let q in Q)if(Q[q].location>=0){let $=H[q];$===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let ct={};ct.attribute=$,$&&$.data&&(ct.data=$.data),z[q]=ct,V++}s.attributes=z,s.attributesNum=V,s.index=L}function _(){let D=s.newAttributes;for(let I=0,k=D.length;I<k;I++)D[I]=0}function m(D){g(D,0)}function g(D,I){let k=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;k[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),z[D]!==I&&(r.vertexAttribDivisor(D,I),z[D]=I)}function M(){let D=s.newAttributes,I=s.enabledAttributes;for(let k=0,L=I.length;k<L;k++)I[k]!==D[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function E(D,I,k,L,z,H,V){V===!0?r.vertexAttribIPointer(D,I,k,z,H):r.vertexAttribPointer(D,I,k,L,z,H)}function x(D,I,k,L){_();let z=L.attributes,H=k.getAttributes(),V=I.defaultAttributeValues;for(let Q in H){let q=H[Q];if(q.location>=0){let P=z[Q];if(P===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){let $=P.normalized,ct=P.itemSize,_t=t.get(P);if(_t===void 0)continue;let zt=_t.buffer,Vt=_t.type,Qt=_t.bytesPerElement,J=Vt===r.INT||Vt===r.UNSIGNED_INT||P.gpuType===Dh;if(P.isInterleavedBufferAttribute){let et=P.data,pt=et.stride,Xt=P.offset;if(et.isInstancedInterleavedBuffer){for(let vt=0;vt<q.locationSize;vt++)g(q.location+vt,et.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let vt=0;vt<q.locationSize;vt++)E(q.location+vt,ct/q.locationSize,Vt,$,pt*Qt,(Xt+ct/q.locationSize*vt)*Qt,J)}else{if(P.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)g(q.location+et,P.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let et=0;et<q.locationSize;et++)E(q.location+et,ct/q.locationSize,Vt,$,ct*Qt,ct/q.locationSize*et*Qt,J)}}else if(V!==void 0){let $=V[Q];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(q.location,$);break;case 3:r.vertexAttrib3fv(q.location,$);break;case 4:r.vertexAttrib4fv(q.location,$);break;default:r.vertexAttrib1fv(q.location,$)}}}}M()}function S(){w();for(let D in n){let I=n[D];for(let k in I){let L=I[k];for(let z in L){let H=L[z];for(let V in H)h(H[V].object),delete H[V];delete L[z]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let k in I){let L=I[k];for(let z in L){let H=L[z];for(let V in H)h(H[V].object),delete H[V];delete L[z]}}delete n[D.id]}function A(D){for(let I in n){let k=n[I];for(let L in k){let z=k[L];if(z[D.id]===void 0)continue;let H=z[D.id];for(let V in H)h(H[V].object),delete H[V];delete z[D.id]}}}function v(D){for(let I in n){let k=n[I],L=D.isInstancedMesh===!0?D.id:0,z=k[L];if(z!==void 0){for(let H in z){let V=z[H];for(let Q in V)h(V[Q].object),delete V[Q];delete z[H]}delete k[L],Object.keys(k).length===0&&delete n[I]}}}function w(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function tT(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function eT(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Pi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_i&&A!==Vi&&!v&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:S,samples:T}}function nT(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Fi,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,E=M*4,x=g.clippingState||null;l.value=x,x=h(p,u,E,f);for(let S=0;S!==E;++S)x[S]=e[S];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,x=f;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Zo=4,iT=6,rT=20,sT=256,Ml=new ul,J_=new le,sp=null,op=0,ap=0,lp=!1,oT=new F,Bs=new F,vu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=oT}=s;sp=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sp,op,ap),this._renderer.xr.enabled=lp,t.scissorTest=!1,qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sp=this._renderer.getRenderTarget(),op=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Gi,format:Pi,colorSpace:za,depthBuffer:!1},i=$_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=aT(s)),this._blurMaterial=cT(s,t,e),this._ggxMaterial=lT(s,t,e)}return i}_compileMaterial(t){let e=new Ln(new an,t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,n,i,s){let l=new In(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(J_),d.toneMapping=zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new Oo,new Ps({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,g=!0):(m.color.copy(J_),g=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));let S=this._cubeSize;qo(i,x*S,E>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ts||t.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Zo?n-p+Zo:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,qo(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,Ml),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,qo(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,Ml)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Zo?i-this._lodMax+Zo:0),u=4*(this._cubeSize-h);qo(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Ml)}};function aT(r){let t=[],e=[],n=r,i=r-Zo+1+iT;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let M=g%3*2/3-1,E=g>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];p.set(x,f*u*g);for(let S=0;S<u;S++){let T=h[S*2]*2-1,A=h[S*2+1]*2-1;g===0?Bs.set(1,A,T):g===1?Bs.set(-T,1,-A):g===2?Bs.set(-T,A,1):g===3?Bs.set(-1,A,-T):g===4?Bs.set(-T,-1,A):Bs.set(T,A,-1),Bs.toArray(_,(g*u+S)*f)}}let m=new an;m.setAttribute("position",new ei(p,f)),m.setAttribute("outputDirection",new ei(_,f)),e.push(new Ln(m,null)),n>Zo&&n--}return{lodMeshes:e,sizeLods:t}}function $_(r,t,e){let n=new ni(r,t,e);return n.texture.mapping=pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function lT(r,t,e){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function cT(r,t,e){return new Dn({name:"SphericalGaussianBlur",defines:{SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function K_(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Q_(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yu=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new $a(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Oo(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:nr});s.uniforms.tEquirect.value=e;let o=new Ln(i,s),a=e.minFilter;return e.minFilter===es&&(e.minFilter=vn),new Ah(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function hT(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ph||f===Ih)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new yu(p.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Ph||f===Ih,_=f===ts||f===Us;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new vu(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new vu(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Ph?u.mapping=ts:f===Ih&&(u.mapping=Us),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function uT(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Rs("WebGLRenderer: "+n+" extension not supported."),i}}}function fT(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let E=0,x=M.length;E<x;E+=3){let S=M[E+0],T=M[E+1],A=M[E+2];u.push(S,T,T,A,A,S)}}else{let M=p.array;_=p.version;for(let E=0,x=M.length/3-1;E<x;E+=3){let S=E+0,T=E+1,A=E+2;u.push(S,T,T,A,A,S)}}let m=new(p.count>=65535?Za:qa)(u,1);m.version=_;let g=s.get(d);g&&t.remove(g),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function dT(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pT(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mT(r,t,e){let n=new WeakMap,i=new Ve;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),_===!0&&(E=3);let x=a.attributes.position.count*E,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*S*4*d),A=new Ha(T,x,S,d);A.type=Vi,A.needsUpdate=!0;let v=E*4;for(let C=0;C<d;C++){let D=m[C],I=g[C],k=M[C],L=x*S*4*C;for(let z=0;z<D.count;z++){let H=z*v;f===!0&&(i.fromBufferAttribute(D,z),T[L+H+0]=i.x,T[L+H+1]=i.y,T[L+H+2]=i.z,T[L+H+3]=0),p===!0&&(i.fromBufferAttribute(I,z),T[L+H+4]=i.x,T[L+H+5]=i.y,T[L+H+6]=i.z,T[L+H+7]=0),_===!0&&(i.fromBufferAttribute(k,z),T[L+H+8]=i.x,T[L+H+9]=i.y,T[L+H+10]=i.z,T[L+H+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new wt(x,S)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function gT(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var _T={[Pd]:"LINEAR_TONE_MAPPING",[Id]:"REINHARD_TONE_MAPPING",[Ld]:"CINEON_TONE_MAPPING",[Dd]:"ACES_FILMIC_TONE_MAPPING",[Ud]:"AGX_TONE_MAPPING",[Fd]:"NEUTRAL_TONE_MAPPING",[Nd]:"CUSTOM_TONE_MAPPING"};function xT(r,t,e,n,i,s){let o=new ni(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new an;c.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new be([0,2,0,0,2,0],2));let h=new ph({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ln(c,h),u=new ul(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,M=[],E=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let T=0;T<M.length;T++){let A=M[T];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;let S=o.width,T=o.height;M.length>0&&a===null&&(a=new ni(S,T,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(S,T,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let v=M[A];v.setSize&&v.setSize(S,T)}},this.begin=function(x,S){if(_||x.toneMapping===zi&&M.length===0)return!1;if(g=S,S!==null){let T=S.width,A=S.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=zi,!0},this.hasRenderPass=function(){return E},this.end=function(x,S){x.toneMapping=m,_=!0;let T=o,A=a;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(x,A,T,S),w.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},pe.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let v=_T[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(g),x.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var x0=new Zn,up=new Zr(1,1),v0=new Ha,y0=new nh,S0=new $a,j_=[],t0=[],e0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function $o(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=j_[i];if(s===void 0&&(s=new Float32Array(i),j_[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ln(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function cn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function bu(r,t){let e=t0[t];e===void 0&&(e=new Int32Array(t),t0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function vT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function yT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2fv(this.addr,t),cn(e,t)}}function ST(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;r.uniform3fv(this.addr,t),cn(e,t)}}function MT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4fv(this.addr,t),cn(e,t)}}function bT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;i0.set(n),r.uniformMatrix2fv(this.addr,!1,i0),cn(e,n)}}function TT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;n0.set(n),r.uniformMatrix3fv(this.addr,!1,n0),cn(e,n)}}function wT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;e0.set(n),r.uniformMatrix4fv(this.addr,!1,e0),cn(e,n)}}function ET(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function AT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2iv(this.addr,t),cn(e,t)}}function CT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3iv(this.addr,t),cn(e,t)}}function RT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4iv(this.addr,t),cn(e,t)}}function PT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function IT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2uiv(this.addr,t),cn(e,t)}}function LT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3uiv(this.addr,t),cn(e,t)}}function DT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4uiv(this.addr,t),cn(e,t)}}function NT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(up.compareFunction=e.isReversedDepthBuffer()?gu:mu,s=up):s=x0,e.setTexture2D(t||s,i)}function UT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||y0,i)}function FT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||S0,i)}function OT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||v0,i)}function BT(r){switch(r){case 5126:return vT;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return bT;case 35675:return TT;case 35676:return wT;case 5124:case 35670:return ET;case 35667:case 35671:return AT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return PT;case 36294:return IT;case 36295:return LT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return OT}}function zT(r,t){r.uniform1fv(this.addr,t)}function kT(r,t){let e=$o(t,this.size,2);r.uniform2fv(this.addr,e)}function VT(r,t){let e=$o(t,this.size,3);r.uniform3fv(this.addr,e)}function GT(r,t){let e=$o(t,this.size,4);r.uniform4fv(this.addr,e)}function HT(r,t){let e=$o(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function WT(r,t){let e=$o(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function XT(r,t){let e=$o(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function YT(r,t){r.uniform1iv(this.addr,t)}function qT(r,t){r.uniform2iv(this.addr,t)}function ZT(r,t){r.uniform3iv(this.addr,t)}function JT(r,t){r.uniform4iv(this.addr,t)}function $T(r,t){r.uniform1uiv(this.addr,t)}function KT(r,t){r.uniform2uiv(this.addr,t)}function QT(r,t){r.uniform3uiv(this.addr,t)}function jT(r,t){r.uniform4uiv(this.addr,t)}function tw(r,t,e){let n=this.cache,i=t.length,s=bu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=up:o=x0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function ew(r,t,e){let n=this.cache,i=t.length,s=bu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||y0,s[o])}function nw(r,t,e){let n=this.cache,i=t.length,s=bu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||S0,s[o])}function iw(r,t,e){let n=this.cache,i=t.length,s=bu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||v0,s[o])}function rw(r){switch(r){case 5126:return zT;case 35664:return kT;case 35665:return VT;case 35666:return GT;case 35674:return HT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return ZT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return KT;case 36295:return QT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}var fp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=BT(e.type)}},dp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rw(e.type)}},pp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},cp=/(\w+)(\])?(\[|\.)?/g;function r0(r,t){r.seq.push(t),r.map[t.id]=t}function sw(r,t,e){let n=r.name,i=n.length;for(cp.lastIndex=0;;){let s=cp.exec(n),o=cp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){r0(e,c===void 0?new fp(a,r,t):new dp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new pp(a),r0(e,d)),e=d}}}var Jo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);sw(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function s0(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var ow=37297,aw=0;function lw(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var o0=new ne;function cw(r){pe._getMatrix(o0,pe.workingColorSpace,r);let t=`mat3( ${o0.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(r)){case ka:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function a0(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+lw(r.getShaderSource(t),a)}else return s}function hw(r,t){let e=cw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var uw={[Pd]:"Linear",[Id]:"Reinhard",[Ld]:"Cineon",[Dd]:"ACESFilmic",[Ud]:"AgX",[Fd]:"Neutral",[Nd]:"Custom"};function fw(r,t){let e=uw[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xu=new F;function dw(){pe.getLuminanceCoefficients(xu);let r=xu.x.toFixed(4),t=xu.y.toFixed(4),e=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function mw(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gw(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Tl(r){return r!==""}function l0(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function c0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(r){return r.replace(_w,vw)}var xw=new Map;function vw(r,t){let e=se[t];if(e===void 0){let n=xw.get(t);if(n!==void 0)e=se[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mp(e)}var yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(r){return r.replace(yw,Sw)}function Sw(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function u0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Mw={[dl]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function bw(r){return Mw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tw={[ts]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[pl]:"ENVMAP_TYPE_CUBE_UV"};function ww(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Tw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ew={[Us]:"ENVMAP_MODE_REFRACTION"};function Aw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cw={[Rd]:"ENVMAP_BLENDING_MULTIPLY",[T_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function Rw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[r.combine]||"ENVMAP_BLENDING_NONE"}function Pw(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Iw(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bw(e),c=ww(e),h=Aw(e),d=Rw(e),u=Pw(e),f=pw(e),p=mw(s),_=i.createProgram(),m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tl).join(`
`),g.length>0&&(g+=`
`)):(m=[u0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),g=[u0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?se.tonemapping_pars_fragment:"",e.toneMapping!==zi?fw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,hw("linearToOutputTexel",e.outputColorSpace),dw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tl).join(`
`)),o=mp(o),o=l0(o,e),o=c0(o,e),a=mp(a),a=l0(a,e),a=c0(a,e),o=h0(o),a=h0(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=M+m+o,x=M+g+a,S=s0(i,i.VERTEX_SHADER,E),T=s0(i,i.FRAGMENT_SHADER,x);i.attachShader(_,S),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(T)||"",z=I.trim(),H=k.trim(),V=L.trim(),Q=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,T);else{let P=a0(i,S,"vertex"),$=a0(i,T,"fragment");jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+P+`
`+$)}else z!==""?Kt("WebGLProgram: Program Info Log:",z):(H===""||V==="")&&(q=!1);q&&(D.diagnostics={runnable:Q,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(S),i.deleteShader(T),v=new Jo(i,_),w=gw(i,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,ow)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aw++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var Lw=0,gp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _p(t),e.set(t,n)),n}},_p=class{constructor(t){this.id=Lw++,this.code=t,this.usedTimes=0}};function Dw(r){return r===is||r===yl||r===Sl}function Nw(r,t,e,n,i,s){let o=new Wa,a=new gp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,D,I,k){let L=D.fog,z=I.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=t.get(v.envMap||H,V),q=Q&&Q.mapping===pl?Q.image.height:null,P=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Kt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let $=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=$!==void 0?$.length:0,_t=0;z.morphAttributes.position!==void 0&&(_t=1),z.morphAttributes.normal!==void 0&&(_t=2),z.morphAttributes.color!==void 0&&(_t=3);let zt,Vt,Qt,J;if(P){let Yt=rr[P];zt=Yt.vertexShader,Vt=Yt.fragmentShader}else{zt=v.vertexShader,Vt=v.fragmentShader;let Yt=a.getVertexShaderStage(v),lt=a.getFragmentShaderStage(v);a.update(v,Yt,lt),Qt=Yt.id,J=lt.id}let et=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Xt=I.isInstancedMesh===!0,vt=I.isBatchedMesh===!0,Lt=!!v.map,Nt=!!v.matcap,j=!!Q,rt=!!v.aoMap,at=!!v.lightMap,N=!!v.bumpMap&&v.wireframe===!1,dt=!!v.normalMap,kt=!!v.displacementMap,Ut=!!v.emissiveMap,Ct=!!v.metalnessMap,Jt=!!v.roughnessMap,U=v.anisotropy>0,ce=v.clearcoat>0,qt=v.dispersion>0,R=v.retroreflectivity>0,y=v.iridescence>0,G=v.sheen>0,W=v.transmission>0,K=U&&!!v.anisotropyMap,mt=ce&&!!v.clearcoatMap,ht=ce&&!!v.clearcoatNormalMap,tt=ce&&!!v.clearcoatRoughnessMap,it=y&&!!v.iridescenceMap,yt=y&&!!v.iridescenceThicknessMap,Dt=G&&!!v.sheenColorMap,St=G&&!!v.sheenRoughnessMap,xt=!!v.specularMap,ft=!!v.specularColorMap,Ht=!!v.specularIntensityMap,$t=W&&!!v.transmissionMap,O=W&&!!v.thicknessMap,gt=!!v.gradientMap,nt=!!v.alphaMap,Mt=v.alphaTest>0,Tt=!!v.alphaHash,st=!!v.extensions,ut=zi;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ut=r.toneMapping);let ot={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:zt,fragmentShader:Vt,defines:v.defines,customVertexShaderID:Qt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:vt,batchingColor:vt&&I._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&I.instanceColor!==null,instancingMorph:Xt&&I.morphTexture!==null,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Lt,matcap:Nt,envMap:j,envMapMode:j&&Q.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:at,bumpMap:N,normalMap:dt,displacementMap:kt,emissiveMap:Ut,normalMapObjectSpace:dt&&v.normalMapType===C_,normalMapTangentSpace:dt&&v.normalMapType===Xd,packedNormalMap:dt&&v.normalMapType===Xd&&Dw(v.normalMap.format),metalnessMap:Ct,roughnessMap:Jt,anisotropy:U,anisotropyMap:K,clearcoat:ce,clearcoatMap:mt,clearcoatNormalMap:ht,clearcoatRoughnessMap:tt,dispersion:qt,retroreflection:R,iridescence:y,iridescenceMap:it,iridescenceThicknessMap:yt,sheen:G,sheenColorMap:Dt,sheenRoughnessMap:St,specularMap:xt,specularColorMap:ft,specularIntensityMap:Ht,transmission:W,transmissionMap:$t,thicknessMap:O,gradientMap:gt,opaque:v.transparent===!1&&v.blending===Ho&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:Mt,alphaHash:Tt,combine:v.combine,mapUv:Lt&&p(v.map.channel),aoMapUv:rt&&p(v.aoMap.channel),lightMapUv:at&&p(v.lightMap.channel),bumpMapUv:N&&p(v.bumpMap.channel),normalMapUv:dt&&p(v.normalMap.channel),displacementMapUv:kt&&p(v.displacementMap.channel),emissiveMapUv:Ut&&p(v.emissiveMap.channel),metalnessMapUv:Ct&&p(v.metalnessMap.channel),roughnessMapUv:Jt&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:mt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(v.sheenRoughnessMap.channel),specularMapUv:xt&&p(v.specularMap.channel),specularColorMapUv:ft&&p(v.specularColorMap.channel),specularIntensityMapUv:Ht&&p(v.specularIntensityMap.channel),transmissionMapUv:$t&&p(v.transmissionMap.channel),thicknessMapUv:O&&p(v.thicknessMap.channel),alphaMapUv:nt&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(dt||U),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Lt||nt),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&dt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:_t,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:Lt&&v.map.isVideoTexture===!0&&pe.getTransfer(v.map.colorSpace)===ye,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&pe.getTransfer(v.emissiveMap.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ri,flipSided:v.side===Jn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(w,v),M(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let w=f[v.type],C;if(w){let D=rr[w];C=Y_.clone(D.uniforms)}else C=v.uniforms;return C}function x(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Iw(r,w,v,i),c.push(C),h.set(w,C)),C}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:A}}function Uw(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Fw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function f0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function d0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,f,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);let E=a(u,f,p,_,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function c(u,f,p,_,m,g){let M=a(u,f,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Fw),n.length>1&&n.sort(f||f0),i.length>1&&i.sort(f||f0)}function d(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Ow(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new d0,r.set(n,[o])):i>=s.length?(o=new d0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Bw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new le};break;case"SpotLight":e={position:new F,direction:new F,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function zw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var kw=0;function Vw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Gw(r){let t=new Bw,e=zw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,s=new Fe,o=new Fe;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,E=0,x=0,S=0,T=0,A=0,v=0,w=0,C=0;c.sort(Vw);for(let I=0,k=c.length;I<k;I++){let L=c[I],z=L.color,H=L.intensity,V=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===is?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],H);C++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let P=L.shadow,$=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=Q;let ct=P.getViewportCount();for(let _t=0;_t<ct;_t++)n.sunShadowMatrix[_+_t]=P.getMatrix(_t),n.sunShadowCascade[_+_t]=P._cascadeData[_t];_+=ct,p++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let P=L.shadow,$=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(z).multiplyScalar(H),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[M]=q;let P=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,P.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[M]=P.matrix,L.castShadow){let $=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=Q,A++}M++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(z).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=q,E++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let P=L.shadow,$=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,$.shadowCameraNear=P.camera.near,$.shadowCameraFar=P.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(H),q.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[x]=q,x++}}E>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==x||D.numSunShadows!==p||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=x,D.numSunShadows=p,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=C,n.version=kw++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let x=c[M];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),d++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(x.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function p0(r){let t=new Gw(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Hw(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new p0(r),t.set(i,[a])):s>=o.length?(a=new p0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yw=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],qw=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],m0=new Fe,bl=new F,hp=new F;function Zw(r,t,e){let n=new Ja,i=new wt,s=new wt,o=new Ve,a=new mh,l=new gh,c={},h=e.maxTextureSize,d={[jr]:Jn,[Jn]:jr,[Ri]:Ri},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new an;p.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ln(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let g=this.type;this.render=function(T,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===s_&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dl);let w=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(nr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=g!==this.type;k&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=T.length;L<z;L++){let H=T[L],V=H.shadow;if(V===void 0){Kt("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let Q=V.getFrameExtents();i.multiply(Q),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,V.mapSize.y=s.y));let q=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Go){if(H.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ni(i.x,i.y,{format:is,type:Gi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new Zr(i.x,i.y,Vi),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=ji,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=mn,V.map.depthTexture.magFilter=mn}else H.isPointLight?(V.map=new yu(i.x),V.map.depthTexture=new ah(i.x,ki)):(V.map=new ni(i.x,i.y),V.map.depthTexture=new Zr(i.x,i.y,ki)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=ji,this.type===dl?(V.map.depthTexture.compareFunction=q?gu:mu,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=mn,V.map.depthTexture.magFilter=mn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let P=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();H.isPointLight!==!0&&V.updateMatrices(H,v);for(let $=0;$<P;$++){let ct=V.getCamera($);if(H.isPointLight){let _t=V.camera,zt=V.matrix,Vt=H.distance||_t.far;Vt!==_t.far&&(_t.far=Vt,_t.updateProjectionMatrix()),bl.setFromMatrixPosition(H.matrixWorld),_t.position.copy(bl),hp.copy(_t.position),hp.add(Yw[$]),_t.up.copy(qw[$]),_t.lookAt(hp),_t.updateMatrixWorld(),zt.makeTranslation(-bl.x,-bl.y,-bl.z),m0.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),V._frustum.setFromProjectionMatrix(m0,_t.coordinateSystem,_t.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,$),r.clear();else{$===0&&(r.setRenderTarget(V.map),r.clear());let _t=V.getViewport($);o.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),I.viewport(o)}n=V.getFrustum($),x(A,v,ct,H,this.type)}V.isPointLightShadow!==!0&&this.type===Go&&M(V,v),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(w,C,D)};function M(T,A){let v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ni(i.x,i.y,{format:is,type:Gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,v,f,_,null)}function E(T,A,v,w){let C=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=C.uuid,k=A.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let z=L[k];z===void 0&&(z=C.clone(),L[k]=z,A.addEventListener("dispose",S)),C=z}if(C.visible=A.visible,C.wireframe=A.wireframe,w===Go?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=r.properties.get(C);I.light=v}return C}function x(T,A,v,w,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Go)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let k=t.update(T),L=T.material;if(Array.isArray(L)){let z=k.groups;for(let H=0,V=z.length;H<V;H++){let Q=z[H],q=L[Q.materialIndex];if(q&&q.visible){let P=E(T,q,w,C);T.onBeforeShadow(r,T,A,v,k,P,Q),r.renderBufferDirect(v,null,k,P,T,Q),T.onAfterShadow(r,T,A,v,k,P,Q)}}}else if(L.visible){let z=E(T,L,w,C);T.onBeforeShadow(r,T,A,v,k,z,null),r.renderBufferDirect(v,null,k,z,T,null),T.onAfterShadow(r,T,A,v,k,z,null)}}let I=T.children;for(let k=0,L=I.length;k<L;k++)x(I[k],A,v,w,C)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Jw(r,t){function e(){let O=!1,gt=new Ve,nt=null,Mt=new Ve(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!O&&(r.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){O=Tt},setClear:function(Tt,st,ut,ot,Yt){Yt===!0&&(Tt*=ot,st*=ot,ut*=ot),gt.set(Tt,st,ut,ot),Mt.equals(gt)===!1&&(r.clearColor(Tt,st,ut,ot),Mt.copy(gt))},reset:function(){O=!1,nt=null,Mt.set(-1,0,0,0)}}}function n(){let O=!1,gt=!1,nt=null,Mt=null,Tt=null;return{setReversed:function(st){if(gt!==st){let ut=t.get("EXT_clip_control");st?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),gt=st;let ot=Tt;Tt=null,this.setClear(ot)}},getReversed:function(){return gt},setTest:function(st){st?et(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(st){nt!==st&&!O&&(r.depthMask(st),nt=st)},setFunc:function(st){if(gt&&(st=k_[st]),Mt!==st){switch(st){case Wc:r.depthFunc(r.NEVER);break;case Xc:r.depthFunc(r.ALWAYS);break;case Yc:r.depthFunc(r.LESS);break;case Ao:r.depthFunc(r.LEQUAL);break;case qc:r.depthFunc(r.EQUAL);break;case Zc:r.depthFunc(r.GEQUAL);break;case Jc:r.depthFunc(r.GREATER);break;case $c:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Mt=st}},setLocked:function(st){O=st},setClear:function(st){Tt!==st&&(Tt=st,gt&&(st=1-st),r.clearDepth(st))},reset:function(){O=!1,nt=null,Mt=null,Tt=null,gt=!1}}}function i(){let O=!1,gt=null,nt=null,Mt=null,Tt=null,st=null,ut=null,ot=null,Yt=null;return{setTest:function(lt){O||(lt?et(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(lt){gt!==lt&&!O&&(r.stencilMask(lt),gt=lt)},setFunc:function(lt,Zt,Ft){(nt!==lt||Mt!==Zt||Tt!==Ft)&&(r.stencilFunc(lt,Zt,Ft),nt=lt,Mt=Zt,Tt=Ft)},setOp:function(lt,Zt,Ft){(st!==lt||ut!==Zt||ot!==Ft)&&(r.stencilOp(lt,Zt,Ft),st=lt,ut=Zt,ot=Ft)},setLocked:function(lt){O=lt},setClear:function(lt){Yt!==lt&&(r.clearStencil(lt),Yt=lt)},reset:function(){O=!1,gt=null,nt=null,Mt=null,Tt=null,st=null,ut=null,ot=null,Yt=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,E=null,x=null,S=null,T=null,A=null,v=new le(0,0,0),w=0,C=!1,D=null,I=null,k=null,L=null,z=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=Q>=2);let P=null,$={},ct=r.getParameter(r.SCISSOR_BOX),_t=r.getParameter(r.VIEWPORT),zt=new Ve().fromArray(ct),Vt=new Ve().fromArray(_t);function Qt(O,gt,nt,Mt){let Tt=new Uint8Array(4),st=r.createTexture();r.bindTexture(O,st),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<nt;ut++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(gt,0,r.RGBA,1,1,Mt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(gt+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return st}let J={};J[r.TEXTURE_2D]=Qt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(r.DEPTH_TEST),o.setFunc(Ao),N(!1),dt(Td),et(r.CULL_FACE),rt(nr);function et(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function pt(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Xt(O,gt){return u[O]!==gt?(r.bindFramebuffer(O,gt),u[O]=gt,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=gt),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=gt),!0):!1}function vt(O,gt){let nt=p,Mt=!1;if(O){nt=f.get(gt),nt===void 0&&(nt=[],f.set(gt,nt));let Tt=O.textures;if(nt.length!==Tt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let st=0,ut=Tt.length;st<ut;st++)nt[st]=r.COLOR_ATTACHMENT0+st;nt.length=Tt.length,Mt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,Mt=!0);Mt&&r.drawBuffers(nt)}function Lt(O){return _!==O?(r.useProgram(O),_=O,!0):!1}let Nt={[Ns]:r.FUNC_ADD,[a_]:r.FUNC_SUBTRACT,[l_]:r.FUNC_REVERSE_SUBTRACT};Nt[c_]=r.MIN,Nt[h_]=r.MAX;let j={[u_]:r.ZERO,[f_]:r.ONE,[d_]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[v_]:r.SRC_ALPHA_SATURATE,[__]:r.DST_COLOR,[m_]:r.DST_ALPHA,[p_]:r.ONE_MINUS_SRC_COLOR,[Cd]:r.ONE_MINUS_SRC_ALPHA,[x_]:r.ONE_MINUS_DST_COLOR,[g_]:r.ONE_MINUS_DST_ALPHA,[y_]:r.CONSTANT_COLOR,[S_]:r.ONE_MINUS_CONSTANT_COLOR,[M_]:r.CONSTANT_ALPHA,[b_]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(O,gt,nt,Mt,Tt,st,ut,ot,Yt,lt){if(O===nr){m===!0&&(pt(r.BLEND),m=!1);return}if(m===!1&&(et(r.BLEND),m=!0),O!==o_){if(O!==g||lt!==C){if((M!==Ns||S!==Ns)&&(r.blendEquation(r.FUNC_ADD),M=Ns,S=Ns),lt)switch(O){case Ho:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ds:r.blendFunc(r.ONE,r.ONE);break;case wd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ed:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:jt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case wd:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ed:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",O);break}E=null,x=null,T=null,A=null,v.set(0,0,0),w=0,g=O,C=lt}return}Tt=Tt||gt,st=st||nt,ut=ut||Mt,(gt!==M||Tt!==S)&&(r.blendEquationSeparate(Nt[gt],Nt[Tt]),M=gt,S=Tt),(nt!==E||Mt!==x||st!==T||ut!==A)&&(r.blendFuncSeparate(j[nt],j[Mt],j[st],j[ut]),E=nt,x=Mt,T=st,A=ut),(ot.equals(v)===!1||Yt!==w)&&(r.blendColor(ot.r,ot.g,ot.b,Yt),v.copy(ot),w=Yt),g=O,C=!1}function at(O,gt){O.side===Ri?pt(r.CULL_FACE):et(r.CULL_FACE);let nt=O.side===Jn;gt&&(nt=!nt),N(nt),O.blending===Ho&&O.transparent===!1?rt(nr):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let Mt=O.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function N(O){D!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),D=O)}function dt(O){O!==i_?(et(r.CULL_FACE),O!==I&&(O===Td?r.cullFace(r.BACK):O===r_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),I=O}function kt(O){O!==k&&(V&&r.lineWidth(O),k=O)}function Ut(O,gt,nt){O?(et(r.POLYGON_OFFSET_FILL),(L!==gt||z!==nt)&&(L=gt,z=nt,o.getReversed()&&(gt=-gt),r.polygonOffset(gt,nt))):pt(r.POLYGON_OFFSET_FILL)}function Ct(O){O?et(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function Jt(O){O===void 0&&(O=r.TEXTURE0+H-1),P!==O&&(r.activeTexture(O),P=O)}function U(O,gt,nt){nt===void 0&&(P===null?nt=r.TEXTURE0+H-1:nt=P);let Mt=$[nt];Mt===void 0&&(Mt={type:void 0,texture:void 0},$[nt]=Mt),(Mt.type!==O||Mt.texture!==gt)&&(P!==nt&&(r.activeTexture(nt),P=nt),r.bindTexture(O,gt||J[O]),Mt.type=O,Mt.texture=gt)}function ce(){let O=$[P];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function qt(){try{r.compressedTexImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function y(){try{r.texSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function G(){try{r.texSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function mt(){try{r.texStorage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function ht(){try{r.texStorage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function tt(){try{r.texImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function it(){try{r.texImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function yt(O){return d[O]!==void 0?d[O]:r.getParameter(O)}function Dt(O,gt){d[O]!==gt&&(r.pixelStorei(O,gt),d[O]=gt)}function St(O){zt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),zt.copy(O))}function xt(O){Vt.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Vt.copy(O))}function ft(O,gt){let nt=c.get(gt);nt===void 0&&(nt=new WeakMap,c.set(gt,nt));let Mt=nt.get(O);Mt===void 0&&(Mt=r.getUniformBlockIndex(gt,O.name),nt.set(O,Mt))}function Ht(O,gt){let Mt=c.get(gt).get(O);l.get(gt)!==Mt&&(r.uniformBlockBinding(gt,Mt,O.__bindingPointIndex),l.set(gt,Mt))}function $t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,$={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,E=null,x=null,S=null,T=null,A=null,v=new le(0,0,0),w=0,C=!1,D=null,I=null,k=null,L=null,z=null,zt.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:pt,bindFramebuffer:Xt,drawBuffers:vt,useProgram:Lt,setBlending:rt,setMaterial:at,setFlipSided:N,setCullFace:dt,setLineWidth:kt,setPolygonOffset:Ut,setScissorTest:Ct,activeTexture:Jt,bindTexture:U,unbindTexture:ce,compressedTexImage2D:qt,compressedTexImage3D:R,texImage2D:tt,texImage3D:it,pixelStorei:Dt,getParameter:yt,updateUBOMapping:ft,uniformBlockBinding:Ht,texStorage2D:mt,texStorage3D:ht,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:St,viewport:xt,reset:$t}}function $w(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):Ga("canvas")}function m(R,y,G){let W=1,K=qt(R);if((K.width>G||K.height>G)&&(W=G/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let mt=Math.floor(W*K.width),ht=Math.floor(W*K.height);u===void 0&&(u=_(mt,ht));let tt=y?_(mt,ht):u;return tt.width=mt,tt.height=ht,tt.getContext("2d").drawImage(R,0,0,mt,ht),Kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+mt+"x"+ht+")."),tt}else return"data"in R&&Kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function g(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,y,G,W,K,mt=!1){if(R!==null){if(r[R]!==void 0)return r[R];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ht;W&&(ht=t.get("EXT_texture_norm16"),ht||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=y;if(y===r.RED&&(G===r.FLOAT&&(tt=r.R32F),G===r.HALF_FLOAT&&(tt=r.R16F),G===r.UNSIGNED_BYTE&&(tt=r.R8),G===r.UNSIGNED_SHORT&&ht&&(tt=ht.R16_EXT),G===r.SHORT&&ht&&(tt=ht.R16_SNORM_EXT)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.R8UI),G===r.UNSIGNED_SHORT&&(tt=r.R16UI),G===r.UNSIGNED_INT&&(tt=r.R32UI),G===r.BYTE&&(tt=r.R8I),G===r.SHORT&&(tt=r.R16I),G===r.INT&&(tt=r.R32I)),y===r.RG&&(G===r.FLOAT&&(tt=r.RG32F),G===r.HALF_FLOAT&&(tt=r.RG16F),G===r.UNSIGNED_BYTE&&(tt=r.RG8),G===r.UNSIGNED_SHORT&&ht&&(tt=ht.RG16_EXT),G===r.SHORT&&ht&&(tt=ht.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.RG8UI),G===r.UNSIGNED_SHORT&&(tt=r.RG16UI),G===r.UNSIGNED_INT&&(tt=r.RG32UI),G===r.BYTE&&(tt=r.RG8I),G===r.SHORT&&(tt=r.RG16I),G===r.INT&&(tt=r.RG32I)),y===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),G===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),G===r.UNSIGNED_INT&&(tt=r.RGB32UI),G===r.BYTE&&(tt=r.RGB8I),G===r.SHORT&&(tt=r.RGB16I),G===r.INT&&(tt=r.RGB32I)),y===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),G===r.UNSIGNED_INT&&(tt=r.RGBA32UI),G===r.BYTE&&(tt=r.RGBA8I),G===r.SHORT&&(tt=r.RGBA16I),G===r.INT&&(tt=r.RGBA32I)),y===r.RGB&&(G===r.UNSIGNED_SHORT&&ht&&(tt=ht.RGB16_EXT),G===r.SHORT&&ht&&(tt=ht.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),y===r.RGBA){let it=mt?ka:pe.getTransfer(K);G===r.FLOAT&&(tt=r.RGBA32F),G===r.HALF_FLOAT&&(tt=r.RGBA16F),G===r.UNSIGNED_BYTE&&(tt=it===ye?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&ht&&(tt=ht.RGBA16_EXT),G===r.SHORT&&ht&&(tt=ht.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(R,y){let G;return R?y===null||y===ki||y===Xo?G=r.DEPTH24_STENCIL8:y===Vi?G=r.DEPTH32F_STENCIL8:y===Wo&&(G=r.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ki||y===Xo?G=r.DEPTH_COMPONENT24:y===Vi?G=r.DEPTH_COMPONENT32F:y===Wo&&(G=r.DEPTH_COMPONENT16),G}function T(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){let y=R.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(R){let y=R.target;y.removeEventListener("dispose",v),D(y)}function w(R){let y=n.get(R);if(y.__webglInit===void 0)return;let G=R.source,W=f.get(G);if(W){let K=W[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(R),Object.keys(W).length===0&&f.delete(G)}n.remove(R)}function C(R){let y=n.get(R);r.deleteTexture(y.__webglTexture);let G=R.source,W=f.get(G);delete W[y.__cacheKey],o.memory.textures--}function D(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let K=0;K<y.__webglFramebuffer[W].length;K++)r.deleteFramebuffer(y.__webglFramebuffer[W][K]);else r.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)r.deleteFramebuffer(y.__webglFramebuffer[W]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let G=R.textures;for(let W=0,K=G.length;W<K;W++){let mt=n.get(G[W]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(G[W])}n.remove(R)}let I=0;function k(){I=0}function L(){return I}function z(R){I=R}function H(){let R=I;return R>=i.maxTextures&&Kt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function V(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Q(R,y){let G=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let W=R.image;if(W===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(G,R,y);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function q(R,y){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){pt(G,R,y);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function P(R,y){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){pt(G,R,y);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function $(R,y){let G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Xt(G,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}let ct={[Kc]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[Qc]:r.MIRRORED_REPEAT},_t={[mn]:r.NEAREST,[E_]:r.NEAREST_MIPMAP_NEAREST,[ml]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[Lh]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},zt={[P_]:r.NEVER,[U_]:r.ALWAYS,[I_]:r.LESS,[mu]:r.LEQUAL,[L_]:r.EQUAL,[gu]:r.GEQUAL,[D_]:r.GREATER,[N_]:r.NOTEQUAL};function Vt(R,y){if(y.type===Vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===vn||y.magFilter===Lh||y.magFilter===ml||y.magFilter===es||y.minFilter===vn||y.minFilter===Lh||y.minFilter===ml||y.minFilter===es)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ct[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ct[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ct[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,_t[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,zt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mn||y.minFilter!==ml&&y.minFilter!==es||y.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));let W=y.source,K=f.get(W);K===void 0&&(K={},f.set(W,K));let mt=V(y);if(mt!==R.__cacheKey){K[mt]===void 0&&(K[mt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),K[mt].usedTimes++;let ht=K[R.__cacheKey];ht!==void 0&&(K[R.__cacheKey].usedTimes--,ht.usedTimes===0&&C(y)),R.__cacheKey=mt,R.__webglTexture=K[mt].texture}return G}function J(R,y,G){return Math.floor(Math.floor(R/G)/y)}function et(R,y,G,W){let mt=R.updateRanges;if(mt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,G,W,y.data);else{mt.sort((Dt,St)=>Dt.start-St.start);let ht=0;for(let Dt=1;Dt<mt.length;Dt++){let St=mt[ht],xt=mt[Dt],ft=St.start+St.count,Ht=J(xt.start,y.width,4),$t=J(St.start,y.width,4);xt.start<=ft+1&&Ht===$t&&J(xt.start+xt.count-1,y.width,4)===Ht?St.count=Math.max(St.count,xt.start+xt.count-St.start):(++ht,mt[ht]=xt)}mt.length=ht+1;let tt=e.getParameter(r.UNPACK_ROW_LENGTH),it=e.getParameter(r.UNPACK_SKIP_PIXELS),yt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Dt=0,St=mt.length;Dt<St;Dt++){let xt=mt[Dt],ft=Math.floor(xt.start/4),Ht=Math.ceil(xt.count/4),$t=ft%y.width,O=Math.floor(ft/y.width),gt=Ht,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(r.UNPACK_SKIP_ROWS,O),e.texSubImage2D(r.TEXTURE_2D,0,$t,O,gt,nt,G,W,y.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,it),e.pixelStorei(r.UNPACK_SKIP_ROWS,yt)}}function pt(R,y,G){let W=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=r.TEXTURE_3D);let K=Qt(R,y),mt=y.source;e.bindTexture(W,R.__webglTexture,r.TEXTURE0+G);let ht=n.get(mt);if(mt.version!==ht.__version||K===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let nt=pe.getPrimaries(pe.workingColorSpace),Mt=y.colorSpace===br?null:pe.getPrimaries(y.colorSpace),Tt=y.colorSpace===br||nt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let it=m(y.image,!1,i.maxTextureSize);it=ce(y,it);let yt=s.convert(y.format,y.colorSpace),Dt=s.convert(y.type),St=x(y.internalFormat,yt,Dt,y.normalized,y.colorSpace,y.isVideoTexture);Vt(W,y);let xt,ft=y.mipmaps,Ht=y.isVideoTexture!==!0,$t=ht.__version===void 0||K===!0,O=mt.dataReady,gt=T(y,it);if(y.isDepthTexture)St=S(y.format===ns,y.type),$t&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,St,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,St,it.width,it.height,0,yt,Dt,null));else if(y.isDataTexture)if(ft.length>0){Ht&&$t&&e.texStorage2D(r.TEXTURE_2D,gt,St,ft[0].width,ft[0].height);for(let nt=0,Mt=ft.length;nt<Mt;nt++)xt=ft[nt],Ht?O&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,xt.width,xt.height,yt,Dt,xt.data):e.texImage2D(r.TEXTURE_2D,nt,St,xt.width,xt.height,0,yt,Dt,xt.data);y.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(r.TEXTURE_2D,gt,St,it.width,it.height),O&&et(y,it,yt,Dt)):e.texImage2D(r.TEXTURE_2D,0,St,it.width,it.height,0,yt,Dt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,St,ft[0].width,ft[0].height,it.depth);for(let nt=0,Mt=ft.length;nt<Mt;nt++)if(xt=ft[nt],y.format!==Pi)if(yt!==null)if(Ht){if(O)if(y.layerUpdates.size>0){let Tt=jd(xt.width,xt.height,y.format,y.type);for(let st of y.layerUpdates){let ut=xt.data.subarray(st*Tt/xt.data.BYTES_PER_ELEMENT,(st+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,st,xt.width,xt.height,1,yt,ut)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,yt,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,St,xt.width,xt.height,it.depth,0,xt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,yt,Dt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,St,xt.width,xt.height,it.depth,0,yt,Dt,xt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(r.TEXTURE_2D,gt,St,ft[0].width,ft[0].height);for(let nt=0,Mt=ft.length;nt<Mt;nt++)xt=ft[nt],y.format!==Pi?yt!==null?Ht?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,St,xt.width,xt.height,0,xt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,xt.width,xt.height,yt,Dt,xt.data):e.texImage2D(r.TEXTURE_2D,nt,St,xt.width,xt.height,0,yt,Dt,xt.data)}else if(y.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,St,it.width,it.height,it.depth),O)if(y.layerUpdates.size>0){let nt=jd(it.width,it.height,y.format,y.type);for(let Mt of y.layerUpdates){let Tt=it.data.subarray(Mt*nt/it.data.BYTES_PER_ELEMENT,(Mt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,it.width,it.height,1,yt,Dt,Tt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Dt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,St,it.width,it.height,it.depth,0,yt,Dt,it.data);else if(y.isData3DTexture)Ht?($t&&e.texStorage3D(r.TEXTURE_3D,gt,St,it.width,it.height,it.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Dt,it.data)):e.texImage3D(r.TEXTURE_3D,0,St,it.width,it.height,it.depth,0,yt,Dt,it.data);else if(y.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(r.TEXTURE_2D,gt,St,it.width,it.height);else{let nt=it.width,Mt=it.height;for(let Tt=0;Tt<gt;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,St,nt,Mt,0,yt,Dt,null),nt>>=1,Mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),d.add(y),nt.onpaint=Mt=>{let Tt=Mt.changedElements;for(let st of d)Tt.includes(st.image)&&(st.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,it);else{let Tt=r.RGBA,st=r.RGBA,ut=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Tt,st,ut,it)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ft.length>0){if(Ht&&$t){let nt=qt(ft[0]);e.texStorage2D(r.TEXTURE_2D,gt,St,nt.width,nt.height)}for(let nt=0,Mt=ft.length;nt<Mt;nt++)xt=ft[nt],Ht?O&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,yt,Dt,xt):e.texImage2D(r.TEXTURE_2D,nt,St,yt,Dt,xt);y.generateMipmaps=!1}else if(Ht){if($t){let nt=qt(it);e.texStorage2D(r.TEXTURE_2D,gt,St,nt.width,nt.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Dt,it)}else e.texImage2D(r.TEXTURE_2D,0,St,yt,Dt,it);g(y)&&M(W),ht.__version=mt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Xt(R,y,G){if(y.image.length!==6)return;let W=Qt(R,y),K=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);let mt=n.get(K);if(K.version!==mt.__version||W===!0){e.activeTexture(r.TEXTURE0+G);let ht=pe.getPrimaries(pe.workingColorSpace),tt=y.colorSpace===br?null:pe.getPrimaries(y.colorSpace),it=y.colorSpace===br||ht===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=y.isCompressedTexture||y.image[0].isCompressedTexture,Dt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let st=0;st<6;st++)!yt&&!Dt?St[st]=m(y.image[st],!0,i.maxCubemapSize):St[st]=Dt?y.image[st].image:y.image[st],St[st]=ce(y,St[st]);let xt=St[0],ft=s.convert(y.format,y.colorSpace),Ht=s.convert(y.type),$t=x(y.internalFormat,ft,Ht,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,gt=mt.__version===void 0||W===!0,nt=K.dataReady,Mt=T(y,xt);Vt(r.TEXTURE_CUBE_MAP,y);let Tt;if(yt){O&&gt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,$t,xt.width,xt.height);for(let st=0;st<6;st++){Tt=St[st].mipmaps;for(let ut=0;ut<Tt.length;ut++){let ot=Tt[ut];y.format!==Pi?ft!==null?O?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,ot.width,ot.height,ft,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,$t,ot.width,ot.height,0,ot.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,ot.width,ot.height,ft,Ht,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,$t,ot.width,ot.height,0,ft,Ht,ot.data)}}}else{if(Tt=y.mipmaps,O&&gt){Tt.length>0&&Mt++;let st=qt(St[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Dt){O?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St[st].width,St[st].height,ft,Ht,St[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,St[st].width,St[st].height,0,ft,Ht,St[st].data);for(let ut=0;ut<Tt.length;ut++){let Yt=Tt[ut].image[st].image;O?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,Yt.width,Yt.height,ft,Ht,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,$t,Yt.width,Yt.height,0,ft,Ht,Yt.data)}}else{O?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ft,Ht,St[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,ft,Ht,St[st]);for(let ut=0;ut<Tt.length;ut++){let ot=Tt[ut];O?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,ft,Ht,ot.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,$t,ft,Ht,ot.image[st])}}}g(y)&&M(r.TEXTURE_CUBE_MAP),mt.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function vt(R,y,G,W,K,mt){let ht=s.convert(G.format,G.colorSpace),tt=s.convert(G.type),it=x(G.internalFormat,ht,tt,G.normalized,G.colorSpace),yt=n.get(y),Dt=n.get(G);if(Dt.__renderTarget=y,!yt.__hasExternalTextures){let St=Math.max(1,y.width>>mt),xt=Math.max(1,y.height>>mt);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,mt,it,St,xt,y.depth,0,ht,tt,null):e.texImage2D(K,mt,it,St,xt,0,ht,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Jt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,K,Dt.__webglTexture,0,Ct(y)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,K,Dt.__webglTexture,mt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(R,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){let W=y.depthTexture,K=W&&W.isDepthTexture?W.type:null,mt=S(y.stencilBuffer,K),ht=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Jt(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct(y),mt,y.width,y.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct(y),mt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,mt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,R)}else{let W=y.textures;for(let K=0;K<W.length;K++){let mt=W[K],ht=s.convert(mt.format,mt.colorSpace),tt=s.convert(mt.type),it=x(mt.internalFormat,ht,tt,mt.normalized,mt.colorSpace);Jt(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct(y),it,y.width,y.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct(y),it,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,it,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(R,y,G){let W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,y.depthTexture);let yt=s.convert(y.depthTexture.format),Dt=s.convert(y.depthTexture.type),St;y.depthTexture.format===ji?St=r.DEPTH_COMPONENT24:y.depthTexture.format===ns&&(St=r.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,St,y.width,y.height,0,yt,Dt,null)}}else Q(y.depthTexture,0);let mt=K.__webglTexture,ht=Ct(y),tt=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,it=y.depthTexture.format===ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===ji)Jt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,tt,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,it,tt,mt,0);else if(y.depthTexture.format===ns)Jt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,tt,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,it,tt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(R){let y=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=W}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let W=0;W<6;W++)Nt(y.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?Nt(y.__webglFramebuffer[0],R,0):Nt(y.__webglFramebuffer,R,0)}else if(G){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=r.createRenderbuffer(),Lt(y.__webglDepthbuffer[W],R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,mt)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Lt(y.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,mt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(R,y,G){let W=n.get(R);y!==void 0&&vt(W.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&j(R)}function at(R){let y=R.texture,G=n.get(R),W=n.get(y);R.addEventListener("dispose",v);let K=R.textures,mt=R.isWebGLCubeRenderTarget===!0,ht=K.length>1;if(ht||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=y.version,o.memory.textures++),mt){G.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[tt]=[];for(let it=0;it<y.mipmaps.length;it++)G.__webglFramebuffer[tt][it]=r.createFramebuffer()}else G.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)G.__webglFramebuffer[tt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ht)for(let tt=0,it=K.length;tt<it;tt++){let yt=n.get(K[tt]);yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Jt(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let tt=0;tt<K.length;tt++){let it=K[tt];G.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[tt]);let yt=s.convert(it.format,it.colorSpace),Dt=s.convert(it.type),St=x(it.internalFormat,yt,Dt,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),xt=Ct(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,St,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,G.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)vt(G.__webglFramebuffer[tt][it],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else vt(G.__webglFramebuffer[tt],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(y)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let tt=0,it=K.length;tt<it;tt++){let yt=K[tt],Dt=n.get(yt),St=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(St,Dt.__webglTexture),Vt(St,yt),vt(G.__webglFramebuffer,R,yt,r.COLOR_ATTACHMENT0+tt,St,0),g(yt)&&M(St)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,W.__webglTexture),Vt(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)vt(G.__webglFramebuffer[it],R,y,r.COLOR_ATTACHMENT0,tt,it);else vt(G.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,tt,0);g(y)&&M(tt),e.unbindTexture()}R.depthBuffer&&j(R)}function N(R){let y=R.textures;for(let G=0,W=y.length;G<W;G++){let K=y[G];if(g(K)){let mt=E(R),ht=n.get(K).__webglTexture;e.bindTexture(mt,ht),M(mt),e.unbindTexture()}}}let dt=[],kt=[];function Ut(R){if(R.samples>0){if(Jt(R)===!1){let y=R.textures,G=R.width,W=R.height,K=r.COLOR_BUFFER_BIT,mt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(R),tt=y.length>1;if(tt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let it=R.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[yt]);let Dt=n.get(y[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,G,W,0,0,G,W,K,r.NEAREST),l===!0&&(dt.length=0,kt.length=0,dt.push(r.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(dt.push(mt),kt.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[yt]);let Dt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ct(R){return Math.min(i.maxSamples,R.samples)}function Jt(R){let y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(R){let y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function ce(R,y){let G=R.colorSpace,W=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==za&&G!==br&&(pe.getTransfer(G)===ye?(W!==Pi||K!==_i)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",G)),y}function qt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=P,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kw(r,t){function e(n,i=br){let s,o=pe.getTransfer(i);if(n===_i)return r.UNSIGNED_BYTE;if(n===Nh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===kd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bd)return r.BYTE;if(n===zd)return r.SHORT;if(n===Wo)return r.UNSIGNED_SHORT;if(n===Dh)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Vi)return r.FLOAT;if(n===Gi)return r.HALF_FLOAT;if(n===Gd)return r.ALPHA;if(n===Hd)return r.RGB;if(n===Pi)return r.RGBA;if(n===ji)return r.DEPTH_COMPONENT;if(n===ns)return r.DEPTH_STENCIL;if(n===Wd)return r.RED;if(n===Fh)return r.RED_INTEGER;if(n===is)return r.RG;if(n===Oh)return r.RG_INTEGER;if(n===Bh)return r.RGBA_INTEGER;if(n===gl||n===_l||n===xl||n===vl)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zh||n===kh||n===Vh||n===Gh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hh||n===Wh||n===Xh||n===Yh||n===qh||n===yl||n===Zh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hh||n===Wh)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yh)return s.COMPRESSED_R11_EAC;if(n===qh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yl)return s.COMPRESSED_RG11_EAC;if(n===Zh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jh||n===$h||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===iu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ru)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ou)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cu||n===hu||n===uu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cu)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===du||n===Sl||n===pu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===fu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Dn({vertexShader:Qw,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ln(new Jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vp=class extends tr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding!="undefined",m=new xp,g={},M=e.getContextAttributes(),E=null,x=null,S=[],T=[],A=new wt,v=null,w=null,C=new In;C.viewport=new Ve;let D=new In;D.viewport=new Ve;let I=[C,D],k=new Ch,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=S[J];return et===void 0&&(et=new Io,S[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=S[J];return et===void 0&&(et=new Io,S[J]=et),et.getGripSpace()},this.getHand=function(J){let et=S[J];return et===void 0&&(et=new Io,S[J]=et),et.getHandSpace()};function H(J){let et=T.indexOf(J.inputSource);if(et===-1)return;let pt=S[et];pt!==void 0&&(pt.update(J.inputSource,J.frame,c||o),pt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Q);for(let J=0;J<S.length;J++){let et=T[J];et!==null&&(T[J]=null,S[J].disconnect(et))}L=null,z=null,m.reset();for(let J in g)delete g[J];if(t.setRenderTarget(E),f=null,u=null,d=null,i=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Xt=null,vt=null;M.depth&&(vt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?ns:ji,Xt=M.stencil?Xo:ki);let Lt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Lt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ni(u.textureWidth,u.textureHeight,{format:Pi,type:_i,depthTexture:new Zr(u.textureWidth,u.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ni(f.framebufferWidth,f.framebufferHeight,{format:Pi,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(J){for(let et=0;et<J.removed.length;et++){let pt=J.removed[et],Xt=T.indexOf(pt);Xt>=0&&(T[Xt]=null,S[Xt].disconnect(pt))}for(let et=0;et<J.added.length;et++){let pt=J.added[et],Xt=T.indexOf(pt);if(Xt===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=T.length){T.push(pt),Xt=Lt;break}else if(T[Lt]===null){T[Lt]=pt,Xt=Lt;break}if(Xt===-1)break}let vt=S[Xt];vt&&vt.connect(pt)}}let q=new F,P=new F;function $(J,et,pt){q.setFromMatrixPosition(et.matrixWorld),P.setFromMatrixPosition(pt.matrixWorld);let Xt=q.distanceTo(P),vt=et.projectionMatrix.elements,Lt=pt.projectionMatrix.elements,Nt=vt[14]/(vt[10]-1),j=vt[14]/(vt[10]+1),rt=(vt[9]+1)/vt[5],at=(vt[9]-1)/vt[5],N=(vt[8]-1)/vt[0],dt=(Lt[8]+1)/Lt[0],kt=Nt*N,Ut=Nt*dt,Ct=Xt/(-N+dt),Jt=Ct*-N;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Jt),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),vt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=Nt+Ct,ce=j+Ct,qt=kt-Jt,R=Ut+(Xt-Jt),y=rt*j/ce*U,G=at*j/ce*U;J.projectionMatrix.makePerspective(qt,R,y,G,U,ce),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ct(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let et=J.near,pt=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),k.near=D.near=C.near=et,k.far=D.far=C.far=pt,(L!==k.near||z!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,z=k.far),k.layers.mask=J.layers.mask|6,C.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Xt=J.parent,vt=k.cameras;ct(k,Xt);for(let Lt=0;Lt<vt.length;Lt++)ct(vt[Lt],Xt);vt.length===2?$(k,C,D):k.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),_t(J,k,Xt)};function _t(J,et,pt){pt===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ro*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return g[J]};let zt=null;function Vt(J,et){if(h=et.getViewerPose(c||o),p=et,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Xt=!1;pt.length!==k.cameras.length&&(k.cameras.length=0,Xt=!0);for(let j=0;j<pt.length;j++){let rt=pt[j],at=null;if(f!==null)at=f.getViewport(rt);else{let dt=d.getViewSubImage(u,rt);at=dt.viewport,j===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let N=I[j];N===void 0&&(N=new In,N.layers.enable(j),N.viewport=new Ve,I[j]=N),N.matrix.fromArray(rt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(rt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(at.x,at.y,at.width,at.height),j===0&&(k.matrix.copy(N.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Xt===!0&&k.cameras.push(N)}let vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let j=d.getDepthInformation(pt[0]);j&&j.isValid&&j.texture&&m.init(j,i.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let j=0;j<pt.length;j++){let rt=pt[j].camera;if(rt){let at=g[rt];at||(at=new Qa,g[rt]=at);let N=d.getCameraImage(rt);at.sourceTexture=N}}}}for(let pt=0;pt<S.length;pt++){let Xt=T[pt],vt=S[pt];Xt!==null&&vt!==void 0&&vt.update(Xt,et,c||o)}zt&&zt(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let Qt=new g0;Qt.setAnimationLoop(Vt),this.setAnimationLoop=function(J){zt=J},this.dispose=function(){}}},t1=new Fe,M0=new ne;M0.set(-1,0,0,0,1,0,0,0,1);function e1(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$d(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,E,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(M0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n1(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let T=S.program;n.uniformBlockBinding(x,T)}function c(x,S){let T=i[x.id];T===void 0&&(m(x),T=h(x),i[x.id]=T,x.addEventListener("dispose",M));let A=S.program;n.updateUBOMapping(x,A);let v=t.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){let S=d();x.__bindingPointIndex=S;let T=r.createBuffer(),A=x.__size,v=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,A,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,T),T}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=i[x.id],T=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let v=0,w=T.length;v<w;v++){let C=T[v];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)f(C[D],v,D,A);else f(C,v,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,S,T,A){if(_(x,S,T,A)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let I=w[D],k=g(I);p(I,x.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,x.__data)}}function p(x,S,T){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,T)}function _(x,S,T,A){let v=x.value,w=S+"_"+T;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let C=A[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(x){let S=x.uniforms,T=0,A=16;for(let w=0,C=S.length;w<C;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,k=D.length;I<k;I++){let L=D[I],z=Array.isArray(L.value)?L.value:[L.value];for(let H=0,V=z.length;H<V;H++){let Q=z[H],q=g(Q),P=T%A,$=P%q.boundary,ct=P+$;T+=$,ct!==0&&A-ct<q.storage&&(T+=A-ct),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=q.storage}}}let v=T%A;return v>0&&(T+=A-v),x.__size=T,x.__cache={},this}function g(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){let S=x.target;S.removeEventListener("dispose",M);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function E(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:E}}var i1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ir=null;function r1(){return ir===null&&(ir=new ih(i1,16,16,is,Gi),ir.name="DFG_LUT",ir.minFilter=vn,ir.magFilter=vn,ir.wrapS=Qi,ir.wrapT=Qi,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}var Su=class{constructor(t={}){let{canvas:e=O_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=_i}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([Bh,Oh,Fh]),g=new Set([_i,ki,Wo,Xo,Nh,Uh]),M=new Uint32Array(4),E=new Int32Array(4),x=new F,S=null,T=null,A=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,k=null,L=null,z=null;this._outputColorSpace=pi;let H=0,V=0,Q=null,q=-1,P=null,$=new Ve,ct=new Ve,_t=null,zt=new le(0),Vt=0,Qt=e.width,J=e.height,et=1,pt=null,Xt=null,vt=new Ve(0,0,Qt,J),Lt=new Ve(0,0,Qt,J),Nt=!1,j=new Ja,rt=!1,at=!1,N=new Fe,dt=new F,kt=new Ve,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Jt(){return Q===null?et:1}let U=n;function ce(b,B){return e.getContext(b,B)}let qt,R,y,G,W,K,mt,ht,tt,it,yt,Dt,St,xt,ft,Ht,$t,O,gt,nt,Mt,Tt,st;try{let b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",Zt,!1),U===null){let B="webgl2";if(U=ce(B,b),U===null)throw ce(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(b){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),jt("WebGLRenderer: "+b.message),b}function ut(){qt=new uT(U),qt.init(),Mt=new Kw(U,qt),R=new eT(U,qt,t,Mt),y=new Jw(U,qt),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),k=U.createFramebuffer(),L=U.createFramebuffer(),z=U.createFramebuffer(),G=new pT(U),W=new Uw,K=new $w(U,qt,y,W,R,Mt,G),mt=new hT(C),ht=new gS(U),Tt=new jb(U,ht),tt=new fT(U,ht,G,Tt),it=new gT(U,tt,ht,Tt,G),O=new mT(U,R,K),ft=new nT(W),yt=new Nw(C,mt,qt,R,Tt,ft),Dt=new e1(C,W),St=new Ow,xt=new Hw(qt),$t=new Qb(C,mt,y,it,p,l),Ht=new Zw(C,it,R),st=new n1(U,G,R,y),gt=new tT(U,qt,G),nt=new dT(U,qt,G),G.programs=yt.programs,C.capabilities=R,C.extensions=qt,C.properties=W,C.renderLists=St,C.shadowMap=Ht,C.state=y,C.info=G}_!==_i&&(w=new xT(_,e.width,e.height,a,i,s));let ot=new vp(C,U);this.xr=ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=qt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=qt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(Qt,J,!1))},this.getSize=function(b){return b.set(Qt,J)},this.setSize=function(b,B,Z=!0){if(ot.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=b,J=B,e.width=Math.floor(b*et),e.height=Math.floor(B*et),Z===!0&&(e.style.width=b+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Qt*et,J*et).floor()},this.setDrawingBufferSize=function(b,B,Z){Qt=b,J=B,et=Z,e.width=Math.floor(b*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(_===_i){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,B,Z,X){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,B,Z,X),y.viewport($.copy(vt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Lt)},this.setScissor=function(b,B,Z,X){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,B,Z,X),y.scissor(ct.copy(Lt).multiplyScalar(et).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(b){y.setScissorTest(Nt=b)},this.setOpaqueSort=function(b){pt=b},this.setTransparentSort=function(b){Xt=b},this.getClearColor=function(b){return b.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,Z=!0){let X=0;if(b){let Y=!1;if(Q!==null){let bt=Q.texture.format;Y=m.has(bt)}if(Y){let bt=Q.texture.type,Pt=g.has(bt),At=$t.getClearColor(),Ot=$t.getClearAlpha(),Wt=At.r,re=At.g,de=At.b;Pt?(M[0]=Wt,M[1]=re,M[2]=de,M[3]=Ot,U.clearBufferuiv(U.COLOR,0,M)):(E[0]=Wt,E[1]=re,E[2]=de,E[3]=Ot,U.clearBufferiv(U.COLOR,0,E))}else X|=U.COLOR_BUFFER_BIT}B&&(X|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),$t.dispose(),St.dispose(),xt.dispose(),W.dispose(),mt.dispose(),it.dispose(),Tt.dispose(),st.dispose(),yt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ie),ot.removeEventListener("sessionend",Te),me.stop()};function Yt(b){b.preventDefault(),qd("WebGLRenderer: Context Lost."),D=!0}function lt(){qd("WebGLRenderer: Context Restored."),D=!1;let b=G.autoReset,B=Ht.enabled,Z=Ht.autoUpdate,X=Ht.needsUpdate,Y=Ht.type;ut(),G.autoReset=b,Ht.enabled=B,Ht.autoUpdate=Z,Ht.needsUpdate=X,Ht.type=Y}function Zt(b){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ft(b){let B=b.target;B.removeEventListener("dispose",Ft),te(B)}function te(b){Ke(b),W.remove(b)}function Ke(b){let B=W.get(b).programs;B!==void 0&&(B.forEach(function(Z){yt.releaseProgram(Z)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,Z,X,Y,bt){B===null&&(B=Ut);let Pt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,At=un(b,B,Z,X,Y);y.setMaterial(X,Pt);let Ot=Z.index,Wt=1;if(X.wireframe===!0){if(Ot=tt.getWireframeAttribute(Z),Ot===void 0)return;Wt=2}let re=Z.drawRange,de=Z.attributes.position,Bt=re.start*Wt,xe=(re.start+re.count)*Wt;bt!==null&&(Bt=Math.max(Bt,bt.start*Wt),xe=Math.min(xe,(bt.start+bt.count)*Wt)),Ot!==null?(Bt=Math.max(Bt,0),xe=Math.min(xe,Ot.count)):de!=null&&(Bt=Math.max(Bt,0),xe=Math.min(xe,de.count));let je=xe-Bt;if(je<0||je===1/0)return;Tt.setup(Y,X,At,Z,Ot);let Le,we=gt;if(Ot!==null&&(Le=ht.get(Ot),we=nt,we.setIndex(Le)),Y.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*Jt()),we.setMode(U.LINES)):we.setMode(U.TRIANGLES);else if(Y.isLine){let Sn=X.linewidth;Sn===void 0&&(Sn=1),y.setLineWidth(Sn*Jt()),Y.isLineSegments?we.setMode(U.LINES):Y.isLineLoop?we.setMode(U.LINE_LOOP):we.setMode(U.LINE_STRIP)}else Y.isPoints?we.setMode(U.POINTS):Y.isSprite&&we.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))we.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Sn=Y._multiDrawStarts,Rt=Y._multiDrawCounts,Bn=Y._multiDrawCount,_e=Ot?ht.get(Ot).bytesPerElement:1,Si=W.get(X).currentProgram.getUniforms();for(let Wi=0;Wi<Bn;Wi++)Si.setValue(U,"_gl_DrawID",Wi),we.render(Sn[Wi]/_e,Rt[Wi])}else if(Y.isInstancedMesh)we.renderInstances(Bt,je,Y.count);else if(Z.isInstancedBufferGeometry){let Sn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Rt=Math.min(Z.instanceCount,Sn);we.renderInstances(Bt,je,Rt)}else we.render(Bt,je)};function he(b,B,Z,X){I!==null&&b.isNodeMaterial&&I.setObject(X,b),rt===!0&&ft.setState(b,Z,!1),b.transparent===!0&&b.side===Ri&&b.forceSinglePass===!1?(b.side=Jn,b.needsUpdate=!0,He(b,B,X),b.side=jr,b.needsUpdate=!0,He(b,B,X),b.side=Ri):He(b,B,X)}this.compile=function(b,B,Z=null){Z===null&&(Z=b),I!==null&&I.renderStart(b,B,Z),T=xt.get(Z),T.init(B),v.push(T),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),b!==Z&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),at=this.localClippingEnabled,rt=ft.init(this.clippingPlanes,at),rt===!0&&ft.setGlobalState(this.clippingPlanes,B),I!==null&&Ht.render(T.state.shadowsArray,Z,B);let X=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let bt=Y.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){let At=bt[Pt];he(At,Z,B,Y),X.add(At)}else he(bt,Z,B,Y),X.add(bt)}),T=v.pop(),I!==null&&I.renderEnd(),X},this.compileAsync=function(b,B,Z=null){let X=this.compile(b,B,Z);return new Promise(Y=>{function bt(){if(X.forEach(function(Pt){let Ot=W.get(Pt).currentProgram;(Ot===void 0||Ot.isReady())&&X.delete(Pt)}),X.size===0){Y(b);return}setTimeout(bt,10)}qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Pe=null;function hn(b){Pe&&Pe(b)}function Ie(){me.stop()}function Te(){me.start()}let me=new g0;me.setAnimationLoop(hn),typeof self!="undefined"&&me.setContext(self),this.setAnimationLoop=function(b){Pe=b,ot.setAnimationLoop(b),b===null?me.stop():me.start()},ot.addEventListener("sessionstart",Ie),ot.addEventListener("sessionend",Te),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(b,B);let Z=ot.enabled===!0&&ot.isPresenting===!0,X=w!==null&&(Q===null||Z)&&w.begin(C,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(B),B=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,B,Q),T=xt.get(b,v.length),T.init(B),T.state.textureUnits=K.getTextureUnits(),v.push(T),N.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(N,Bi,B.reversedDepth),at=this.localClippingEnabled,rt=ft.init(this.clippingPlanes,at),S=St.get(b,A.length),S.init(),A.push(S),ot.enabled===!0&&ot.isPresenting===!0){let Pt=C.xr.getDepthSensingMesh();Pt!==null&&Fn(Pt,B,-1/0,C.sortObjects)}Fn(b,B,0,C.sortObjects),S.finish(),I!==null&&I.updateLights(T.state.lightsArray),C.sortObjects===!0&&S.sort(pt,Xt),Ct=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ct&&$t.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&ft.beginShadows();let Y=T.state.shadowsArray;if(Ht.render(Y,b,B),rt===!0&&ft.endShadows(),(X&&w.hasRenderPass())===!1){let Pt=S.opaque,At=S.transmissive;if(T.setupLights(),B.isArrayCamera){let Ot=B.cameras;if(At.length>0)for(let Wt=0,re=Ot.length;Wt<re;Wt++){let de=Ot[Wt];yn(Pt,At,b,de)}Ct&&$t.render(b);for(let Wt=0,re=Ot.length;Wt<re;Wt++){let de=Ot[Wt];Ce(S,b,de,de.viewport)}}else At.length>0&&yn(Pt,At,b,B),Ct&&$t.render(b),Ce(S,b,B)}Q!==null&&V===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),X&&w.end(C),b.isScene===!0&&b.onAfterRender(C,b,B),Tt.resetDefaultState(),q=-1,P=null,v.pop(),v.length>0?(T=v[v.length-1],K.setTextureUnits(T.state.textureUnits),rt===!0&&ft.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,I!==null&&I.renderEnd()};function Fn(b,B,Z,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(j)){X&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(N);let Pt=it.update(b),At=b.material;At.visible&&S.push(b,Pt,At,Z,kt.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(j))){let Pt=it.update(b),At=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),kt.copy(Pt.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(N)),Array.isArray(At)){let Ot=Pt.groups;for(let Wt=0,re=Ot.length;Wt<re;Wt++){let de=Ot[Wt],Bt=At[de.materialIndex];Bt&&Bt.visible&&S.push(b,Pt,Bt,Z,kt.z,de,B)}}else At.visible&&S.push(b,Pt,At,Z,kt.z,null,B)}}let bt=b.children;for(let Pt=0,At=bt.length;Pt<At;Pt++)Fn(bt[Pt],B,Z,X)}function Ce(b,B,Z,X){let{opaque:Y,transmissive:bt,transparent:Pt}=b;T.setupLightsView(Z),rt===!0&&ft.setGlobalState(C.clippingPlanes,Z),X&&y.viewport($.copy(X)),Y.length>0&&On(Y,B,Z),bt.length>0&&On(bt,B,Z),Pt.length>0&&On(Pt,B,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function yn(b,B,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Bt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new ni(1,1,{generateMipmaps:!0,type:Bt?Gi:_i,minFilter:es,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let bt=T.state.transmissionRenderTarget[X.id],Pt=X.viewport||$;bt.setSize(Pt.z*C.transmissionResolutionScale,Pt.w*C.transmissionResolutionScale);let At=C.getRenderTarget(),Ot=C.getActiveCubeFace(),Wt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(zt),Vt=C.getClearAlpha(),Vt<1&&C.setClearColor(16777215,.5),C.clear(),Ct&&$t.render(Z);let re=C.toneMapping;C.toneMapping=zi;let de=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),rt===!0&&ft.setGlobalState(C.clippingPlanes,X),On(b,Z,X),K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let xe=0,je=B.length;xe<je;xe++){let Le=B[xe],{object:we,geometry:Sn,material:Rt,group:Bn}=Le;if(Rt.side===Ri&&we.layers.test(X.layers)){let _e=Rt.side;Rt.side=Jn,Rt.needsUpdate=!0,Qe(we,Z,X,Sn,Rt,Bn),Rt.side=_e,Rt.needsUpdate=!0,Bt=!0}}Bt===!0&&(K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt))}C.setRenderTarget(At,Ot,Wt),C.setClearColor(zt,Vt),de!==void 0&&(X.viewport=de),C.toneMapping=re}function On(b,B,Z){let X=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,bt=b.length;Y<bt;Y++){let Pt=b[Y],{object:At,geometry:Ot,group:Wt}=Pt,re=Pt.material;re.allowOverride===!0&&X!==null&&(re=X),At.layers.test(Z.layers)&&Qe(At,B,Z,Ot,re,Wt)}}function Qe(b,B,Z,X,Y,bt){I!==null&&Y.isNodeMaterial&&I.setObject(b,Y),b.onBeforeRender(C,B,Z,X,Y,bt),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(C,B,Z,X,b,bt),Y.transparent===!0&&Y.side===Ri&&Y.forceSinglePass===!1?(Y.side=Jn,Y.needsUpdate=!0,C.renderBufferDirect(Z,B,X,Y,b,bt),Y.side=jr,Y.needsUpdate=!0,C.renderBufferDirect(Z,B,X,Y,b,bt),Y.side=Ri):C.renderBufferDirect(Z,B,X,Y,b,bt),b.onAfterRender(C,B,Z,X,Y,bt)}function He(b,B,Z){B.isScene!==!0&&(B=Ut);let X=W.get(b),Y=T.state.lights,bt=T.state.shadowsArray,Pt=Y.state.version,At=yt.getParameters(b,Y.state,bt,B,Z,T.state.lightProbeGridArray),Ot=yt.getProgramCacheKey(At),Wt=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=mt.get(b.envMap||X.environment,re),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",Ft),Wt=new Map,X.programs=Wt);let de=Wt.get(Ot);if(de!==void 0){if(X.currentProgram===de&&X.lightsStateVersion===Pt)return Hi(b,At),de}else At.uniforms=yt.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,Z,At),b.onBeforeCompile(At,C),de=yt.acquireProgram(At,Ot),Wt.set(Ot,de),X.uniforms=At.uniforms;let Bt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=ft.uniform),Hi(b,At),X.needsLights=yi(b),X.lightsStateVersion=Pt,X.needsLights&&(Bt.ambientLightColor.value=Y.state.ambient,Bt.lightProbe.value=Y.state.probe,Bt.sunLights.value=Y.state.sun,Bt.sunLightShadows.value=Y.state.sunShadow,Bt.directionalLights.value=Y.state.directional,Bt.directionalLightShadows.value=Y.state.directionalShadow,Bt.spotLights.value=Y.state.spot,Bt.spotLightShadows.value=Y.state.spotShadow,Bt.rectAreaLights.value=Y.state.rectArea,Bt.ltc_1.value=Y.state.rectAreaLTC1,Bt.ltc_2.value=Y.state.rectAreaLTC2,Bt.pointLights.value=Y.state.point,Bt.pointLightShadows.value=Y.state.pointShadow,Bt.hemisphereLights.value=Y.state.hemi,Bt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Bt.sunShadowCascade.value=Y.state.sunShadowCascade,Bt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Bt.spotLightMatrix.value=Y.state.spotLightMatrix,Bt.spotLightMap.value=Y.state.spotLightMap,Bt.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=de,X.uniformsList=null,de}function rn(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Jo.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Hi(b,B){let Z=W.get(b);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function zs(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let Z=0,X=b.length;Z<X;Z++){let Y=b[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function un(b,B,Z,X,Y){B.isScene!==!0&&(B=Ut),K.resetTextureUnits();let bt=B.fog,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,At=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pe.workingColorSpace,Ot=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Wt=mt.get(X.envMap||Pt,Ot),re=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,de=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Bt=!!Z.morphAttributes.position,xe=!!Z.morphAttributes.normal,je=!!Z.morphAttributes.color,Le=zi;X.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=C.toneMapping);let we=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Sn=we!==void 0?we.length:0,Rt=W.get(X),Bn=T.state.lights;if(rt===!0&&(at===!0||b!==P)){let Re=b===P&&X.id===q;ft.setState(X,b,Re)}let _e=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Bn.state.version||Rt.outputColorSpace!==At||Y.isBatchedMesh&&Rt.batching===!1||!Y.isBatchedMesh&&Rt.batching===!0||Y.isBatchedMesh&&Rt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Rt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Rt.instancing===!1||!Y.isInstancedMesh&&Rt.instancing===!0||Y.isSkinnedMesh&&Rt.skinning===!1||!Y.isSkinnedMesh&&Rt.skinning===!0||Y.isInstancedMesh&&Rt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Rt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Rt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Rt.instancingMorph===!1&&Y.morphTexture!==null||Rt.envMap!==Wt||X.fog===!0&&Rt.fog!==bt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ft.numPlanes||Rt.numIntersection!==ft.numIntersection)||Rt.vertexAlphas!==re||Rt.vertexTangents!==de||Rt.morphTargets!==Bt||Rt.morphNormals!==xe||Rt.morphColors!==je||Rt.toneMapping!==Le||Rt.morphTargetsCount!==Sn||!!Rt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Rt.__version=X.version);let Si=Rt.currentProgram;_e===!0&&(Si=He(X,B,Y),I&&X.isNodeMaterial&&I.onUpdateProgram(X,Si,Rt));let Wi=!1,Tr=!1,Vs=!1,Me=Si.getUniforms(),Je=Rt.uniforms;if(y.useProgram(Si.program)&&(Wi=!0,Tr=!0,Vs=!0),X.id!==q&&(q=X.id,Tr=!0),Rt.needsLights){let Re=zs(T.state.lightProbeGridArray,Y);Rt.lightProbeGrid!==Re&&(Rt.lightProbeGrid=Re,Tr=!0)}if(Wi||P!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Me.setValue(U,"projectionMatrix",b.projectionMatrix),Me.setValue(U,"viewMatrix",b.matrixWorldInverse);let Er=Me.map.cameraPosition;Er!==void 0&&Er.setValue(U,dt.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Me.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,Tr=!0,Vs=!0)}if(Rt.needsLights&&(Bn.state.sunShadowMap.length>0&&Me.setValue(U,"sunShadowMap",Bn.state.sunShadowMap,K),Bn.state.directionalShadowMap.length>0&&Me.setValue(U,"directionalShadowMap",Bn.state.directionalShadowMap,K),Bn.state.spotShadowMap.length>0&&Me.setValue(U,"spotShadowMap",Bn.state.spotShadowMap,K),Bn.state.pointShadowMap.length>0&&Me.setValue(U,"pointShadowMap",Bn.state.pointShadowMap,K)),Y.isSkinnedMesh){Me.setOptional(U,Y,"bindMatrix"),Me.setOptional(U,Y,"bindMatrixInverse");let Re=Y.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Me.setValue(U,"boneTexture",Re.boneTexture,K))}Y.isBatchedMesh&&(Me.setOptional(U,Y,"batchingTexture"),Me.setValue(U,"batchingTexture",Y._matricesTexture,K),Me.setOptional(U,Y,"batchingIdTexture"),Me.setValue(U,"batchingIdTexture",Y._indirectTexture,K),Me.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Me.setValue(U,"batchingColorTexture",Y._colorsTexture,K));let wr=Z.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&O.update(Y,Z,Si),(Tr||Rt.receiveShadow!==Y.receiveShadow)&&(Rt.receiveShadow=Y.receiveShadow,Me.setValue(U,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Je.envMapIntensity.value=B.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=r1()),Tr){if(Me.setValue(U,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&Ze(Je,Vs),bt&&X.fog===!0&&Dt.refreshFogUniforms(Je,bt),Dt.refreshMaterialUniforms(Je,X,et,J,T.state.transmissionRenderTarget[b.id]),Rt.needsLights&&Rt.lightProbeGrid){let Re=Rt.lightProbeGrid;Je.probesSH.value=Re.texture,Je.probesMin.value.copy(Re.boundingBox.min),Je.probesMax.value.copy(Re.boundingBox.max),Je.probesResolution.value.copy(Re.resolution)}Jo.upload(U,rn(Rt),Je,K)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Jo.upload(U,rn(Rt),Je,K),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Me.setValue(U,"center",Y.center),Me.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Me.setValue(U,"normalMatrix",Y.normalMatrix),Me.setValue(U,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Re=X.uniformsGroups;for(let Er=0,Gs=Re.length;Er<Gs;Er++){let bp=Re[Er];st.update(bp,Si),st.bind(bp,Si)}}return Si}function Ze(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function yi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,B,Z){let X=W.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=B,W.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let Z=W.get(b);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,Z=0){Q=b,H=B,V=Z;let X=null,Y=!1,bt=!1;if(b){let At=W.get(b);if(At.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,At.__webglFramebuffer),$.copy(b.viewport),ct.copy(b.scissor),_t=b.scissorTest,y.viewport($),y.scissor(ct),y.setScissorTest(_t),q=-1;return}else if(At.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(At.__hasExternalTextures)K.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let re=b.depthTexture;if(At.__boundDepthTexture!==re){if(re!==null&&W.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);let Wt=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?X=Wt[B][Z]:X=Wt[B],Y=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?X=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?X=Wt[Z]:X=Wt,$.copy(b.viewport),ct.copy(b.scissor),_t=b.scissorTest}else $.copy(vt).multiplyScalar(et).floor(),ct.copy(Lt).multiplyScalar(et).floor(),_t=Nt;if(Z!==0&&(X=k),y.bindFramebuffer(U.FRAMEBUFFER,X)&&y.drawBuffers(b,X),y.viewport($),y.scissor(ct),y.setScissorTest(_t),Y){let At=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,Z)}else if(bt){let At=B;for(let Ot=0;Ot<b.textures.length;Ot++){let Wt=W.get(b.textures[Ot]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ot,Wt.__webglTexture,Z,At)}}else if(b!==null&&Z!==0){let At=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,Z)}q=-1};function ks(b){let B=W.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=R.textureFormatReadable(b.format),B.__typeReadable=R.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,Z,X,Y,bt,Pt,At=0){if(!(b&&b.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){y.bindFramebuffer(U.FRAMEBUFFER,Ot);try{let Wt=b.textures[At],re=Wt.format,de=Wt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At);let Bt=ks(Wt);if(Bt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&Z>=0&&Z<=b.height-Y&&U.readPixels(B,Z,X,Y,Mt.convert(re),Mt.convert(de),bt)}finally{let Wt=Q!==null?W.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(b,B,Z,X,Y,bt,Pt,At=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot)if(B>=0&&B<=b.width-X&&Z>=0&&Z<=b.height-Y){y.bindFramebuffer(U.FRAMEBUFFER,Ot);let Wt=b.textures[At],re=Wt.format,de=Wt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At);let Bt=ks(Wt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.bufferData(U.PIXEL_PACK_BUFFER,bt.byteLength,U.STREAM_READ),U.readPixels(B,Z,X,Y,Mt.convert(re),Mt.convert(de),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let je=Q!==null?W.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,je);let Le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await z_(U,Le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,bt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(xe),U.deleteSync(Le),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,Z=0){let X=Math.pow(2,-Z),Y=Math.floor(b.image.width*X),bt=Math.floor(b.image.height*X),Pt=B!==null?B.x:0,At=B!==null?B.y:0;K.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Pt,At,Y,bt),y.unbindTexture()},this.copyTextureToTexture=function(b,B,Z=null,X=null,Y=0,bt=0){let Pt,At,Ot,Wt,re,de,Bt,xe,je,Le=b.isCompressedTexture?b.mipmaps[bt]:b.image;if(Z!==null)Pt=Z.max.x-Z.min.x,At=Z.max.y-Z.min.y,Ot=Z.isBox3?Z.max.z-Z.min.z:1,Wt=Z.min.x,re=Z.min.y,de=Z.isBox3?Z.min.z:0;else{let Je=Math.pow(2,-Y);Pt=Math.floor(Le.width*Je),At=Math.floor(Le.height*Je),b.isDataArrayTexture?Ot=Le.depth:b.isData3DTexture?Ot=Math.floor(Le.depth*Je):Ot=1,Wt=0,re=0,de=0}X!==null?(Bt=X.x,xe=X.y,je=X.z):(Bt=0,xe=0,je=0);let we=Mt.convert(B.format),Sn=Mt.convert(B.type),Rt;B.isData3DTexture?(K.setTexture3D(B,0),Rt=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Rt=U.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Rt=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Bn=y.getParameter(U.UNPACK_ROW_LENGTH),_e=y.getParameter(U.UNPACK_IMAGE_HEIGHT),Si=y.getParameter(U.UNPACK_SKIP_PIXELS),Wi=y.getParameter(U.UNPACK_SKIP_ROWS),Tr=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Le.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Le.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Wt),y.pixelStorei(U.UNPACK_SKIP_ROWS,re),y.pixelStorei(U.UNPACK_SKIP_IMAGES,de);let Vs=b.isDataArrayTexture||b.isData3DTexture,Me=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Je=W.get(b),wr=W.get(B),Re=W.get(Je.__renderTarget),Er=W.get(wr.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,Re.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Gs=0;Gs<Ot;Gs++)Vs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(b).__webglTexture,Y,de+Gs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(B).__webglTexture,bt,je+Gs)),U.blitFramebuffer(Wt,re,Pt,At,Bt,xe,Pt,At,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||W.has(b)){let Je=W.get(b),wr=W.get(B);y.bindFramebuffer(U.READ_FRAMEBUFFER,L),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let Re=0;Re<Ot;Re++)Vs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Je.__webglTexture,Y,de+Re):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Je.__webglTexture,Y),Me?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wr.__webglTexture,bt,je+Re):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wr.__webglTexture,bt),Y!==0?U.blitFramebuffer(Wt,re,Pt,At,Bt,xe,Pt,At,U.COLOR_BUFFER_BIT,U.NEAREST):Me?U.copyTexSubImage3D(Rt,bt,Bt,xe,je+Re,Wt,re,Pt,At):U.copyTexSubImage2D(Rt,bt,Bt,xe,Wt,re,Pt,At);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Me?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Rt,bt,Bt,xe,je,Pt,At,Ot,we,Sn,Le.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,bt,Bt,xe,je,Pt,At,Ot,we,Le.data):U.texSubImage3D(Rt,bt,Bt,xe,je,Pt,At,Ot,we,Sn,Le):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,bt,Bt,xe,Pt,At,we,Sn,Le.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,bt,Bt,xe,Le.width,Le.height,we,Le.data):U.texSubImage2D(U.TEXTURE_2D,bt,Bt,xe,Pt,At,we,Sn,Le);y.pixelStorei(U.UNPACK_ROW_LENGTH,Bn),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Si),y.pixelStorei(U.UNPACK_SKIP_ROWS,Wi),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Tr),bt===0&&B.generateMipmaps&&U.generateMipmap(Rt),y.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){H=0,V=0,Q=null,y.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Ge=new Oi,Tu=new F,b0=new wt,T0=new wt,w0=new wt,wu=class{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){let t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,i=t?t.count/3:e.count/3,s=new Float32Array(i);for(let l=0;l<i;l++){let c=1,h=3*l,d=3*l+1,u=3*l+2;t&&(h=t.getX(h),d=t.getX(d),u=t.getX(u)),n&&(c=n.getX(h)+n.getX(d)+n.getX(u)),Ge.a.fromBufferAttribute(e,h),Ge.b.fromBufferAttribute(e,d),Ge.c.fromBufferAttribute(e,u),c*=Ge.getArea(),s[l]=c}let o=new Float32Array(i),a=0;for(let l=0;l<i;l++)a+=s[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,i){let s=this._sampleFaceIndex();return this._sampleFace(s,t,e,n,i)}_sampleFaceIndex(){let t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){let e=this.distribution,n=0,i=e.length-1,s=-1;for(;n<=i;){let o=Math.ceil((n+i)/2);if(o===0||e[o-1]<=t&&e[o]>t){s=o;break}else t<e[o]?i=o-1:n=o+1}return s}_sampleFace(t,e,n,i,s){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);let l=this.indexAttribute,c=t*3,h=t*3+1,d=t*3+2;return l&&(c=l.getX(c),h=l.getX(h),d=l.getX(d)),Ge.a.fromBufferAttribute(this.positionAttribute,c),Ge.b.fromBufferAttribute(this.positionAttribute,h),Ge.c.fromBufferAttribute(this.positionAttribute,d),e.set(0,0,0).addScaledVector(Ge.a,o).addScaledVector(Ge.b,a).addScaledVector(Ge.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Ge.a.fromBufferAttribute(this.normalAttribute,c),Ge.b.fromBufferAttribute(this.normalAttribute,h),Ge.c.fromBufferAttribute(this.normalAttribute,d),n.set(0,0,0).addScaledVector(Ge.a,o).addScaledVector(Ge.b,a).addScaledVector(Ge.c,1-(o+a)).normalize()):Ge.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(Ge.a.fromBufferAttribute(this.colorAttribute,c),Ge.b.fromBufferAttribute(this.colorAttribute,h),Ge.c.fromBufferAttribute(this.colorAttribute,d),Tu.set(0,0,0).addScaledVector(Ge.a,o).addScaledVector(Ge.b,a).addScaledVector(Ge.c,1-(o+a)),i.r=Tu.x,i.g=Tu.y,i.b=Tu.z),s!==void 0&&this.uvAttribute!==void 0&&(b0.fromBufferAttribute(this.uvAttribute,c),T0.fromBufferAttribute(this.uvAttribute,h),w0.fromBufferAttribute(this.uvAttribute,d),s.set(0,0).addScaledVector(b0,o).addScaledVector(T0,a).addScaledVector(w0,1-(o+a))),this}};var yp=new le("#ff2414"),o1=new le("#ff8a1f");function a1(){let r=new Is;r.moveTo(2.28,.3),r.lineTo(1.84,.3),r.absarc(1.4,.32,.44,0,Math.PI,!1),r.lineTo(-.96,.32),r.absarc(-1.4,.32,.44,0,Math.PI,!1),r.lineTo(-2.22,.32),r.bezierCurveTo(-2.34,.42,-2.34,.78,-2.24,.9),r.lineTo(-1.62,.96),r.lineTo(1.05,.94),r.bezierCurveTo(1.7,.9,2.18,.8,2.3,.66),r.bezierCurveTo(2.36,.52,2.34,.38,2.28,.3);let t=new Is;t.moveTo(-1.66,.9),t.bezierCurveTo(-1.4,1.2,-1.15,1.38,-.8,1.42),t.lineTo(.2,1.44),t.bezierCurveTo(.55,1.42,.85,1.2,1.2,.92),t.lineTo(-1.66,.9);let e=new Vo(r,{depth:1.66,bevelEnabled:!0,bevelThickness:.14,bevelSize:.08,bevelSegments:6,curveSegments:28});e.translate(0,0,-.83);let n=new Vo(t,{depth:1.18,bevelEnabled:!0,bevelThickness:.16,bevelSize:.06,bevelSegments:6,curveSegments:24});n.translate(0,0,-.59);let i=[];for(let s of[1.4,-1.4])for(let o of[.86,-.86]){let a=new ll(.29,.1,14,48);a.translate(s,.39,o),i.push(a);let l=new ja(.22,.22,.04,32,1,!1);l.rotateX(Math.PI/2),l.translate(s,.39,o+Math.sign(o)*.06),i.push(l)}return{bodyGeo:e,cabinGeo:n,wheels:i}}function l1(r,t){let e=r.map(d=>new Ln(d)),n=r.map(d=>{let u=d.attributes.position,f=d.index,p=new F,_=new F,m=new F,g=0,M=f?f.count:u.count;for(let E=0;E<M;E+=3){let x=f?f.getX(E):E,S=f?f.getX(E+1):E+1,T=f?f.getX(E+2):E+2;p.fromBufferAttribute(u,x),_.fromBufferAttribute(u,S),m.fromBufferAttribute(u,T),g+=_.sub(p).cross(m.sub(p)).length()/2}return g}),i=n.reduce((d,u)=>d+u,0),s=[],o=[],a=[],l=[],c=new F;e.forEach((d,u)=>{let f=new wu(d).build(),p=Math.round(t*n[u]/i),_=u>=2?1:0;for(let m=0;m<p;m++){f.sample(c),s.push(c.x,c.y,c.z);let g=6+Math.random()*10,M=Math.random()*Math.PI*2;o.push(Math.cos(M)*g,(Math.random()-.2)*8,Math.sin(M)*g),a.push(Math.random()),l.push(_)}});let h=new an;return h.setAttribute("position",new be(s,3)),h.setAttribute("aStart",new be(o,3)),h.setAttribute("aRand",new be(a,1)),h.setAttribute("aKind",new be(l,1)),h}var c1=`
  attribute vec3 aStart; attribute float aRand; attribute float aKind;
  uniform float uAssemble, uTime, uScan, uPixel, uSize, uScatter;
  varying float vScan, vSeen, vKind, vFade;
  float easeOut(float t){ return 1.0 - pow(1.0 - t, 3.0); }
  void main(){
    float t = clamp(uAssemble * 1.6 - aRand * 0.6, 0.0, 1.0);
    t = easeOut(t);
    vec3 p = mix(aStart, position, t);
    // leichtes Flimmern wie bei einem Live-Scan
    p += vec3(sin(uTime*1.7 + aRand*40.0), cos(uTime*1.3 + aRand*30.0), sin(uTime*1.1 + aRand*20.0)) * 0.006;
    // Zerstreuen beim Weiterscrollen
    p += normalize(position + vec3(0.0, 0.6, 0.0)) * uScatter * (0.6 + aRand * 2.4);
    p.y += uScatter * aRand * 1.5;
    vScan = 1.0 - smoothstep(0.0, 0.22, abs(position.x - uScan));
    vSeen = smoothstep(uScan - 0.05, uScan + 0.4, position.x);
    vKind = aKind;
    vFade = t;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixel * (1.0 + vScan * 2.2) * (0.7 + aRand * 0.6) / -mv.z;
  }
`,h1=`
  uniform vec3 uRed; uniform float uOpacity;
  varying float vScan, vSeen, vKind, vFade;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.1, d);
    vec3 steel = mix(vec3(0.55, 0.58, 0.64), vec3(0.95, 0.96, 0.98), vSeen * 0.7);
    steel = mix(steel, vec3(0.28, 0.29, 0.32), vKind * 0.6);
    vec3 col = mix(steel, uRed * 1.6, vScan);
    gl_FragColor = vec4(col, a * (0.55 + vScan * 0.45) * vFade * uOpacity);
  }
`,u1=`
  uniform float uTime; uniform vec3 uOrange; uniform vec3 uRed; uniform float uScan; uniform float uOpacity;
  varying vec3 vPos;
  float line(float x, float w){ float f = abs(fract(x) - 0.5); return smoothstep(w, 0.0, 0.5 - f); }
  void main(){
    float dist = length(vPos.xz);
    float fade = smoothstep(14.0, 2.0, dist);
    float g = max(line(vPos.x * 1.0, 0.02), line(vPos.z * 1.0, 0.02));
    vec3 col = vec3(0.16, 0.17, 0.19) * g * fade;
    // Rundumleuchte: zwei rotierende Lichtkegel
    float ang = atan(vPos.z - 0.0, vPos.x + 3.6);
    float beam = pow(max(0.0, cos(ang - uTime * 2.6)), 18.0) + pow(max(0.0, cos(ang - uTime * 2.6 + 3.14159)), 18.0);
    float fall = smoothstep(16.0, 0.0, length(vPos.xz - vec2(-3.6, 0.0)));
    col += uOrange * beam * fall * 0.55;
    // Schatten/Glanz unter dem Auto
    float under = smoothstep(2.8, 0.0, length(vPos.xz * vec2(0.55, 1.0)));
    col += vec3(0.05) * under;
    // Laserlinie auf dem Boden
    float laser = smoothstep(0.06, 0.0, abs(vPos.x - uScan)) * smoothstep(3.0, 0.5, abs(vPos.z));
    col += uRed * laser * 1.2;
    gl_FragColor = vec4(col, uOpacity);
  }
`,f1=`
  varying vec3 vPos;
  void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vPos = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`;function E0({canvas:r,labels:t=[],mobile:e=!1}){let n;try{n=new Su({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}let i=Math.min(window.devicePixelRatio||1,e?1.5:2);n.setPixelRatio(i),n.setClearColor("#070707",1);let s=new Ya;s.fog=new Xa("#070707",9,22);let o=new In(32,1,.1,60),{bodyGeo:a,cabinGeo:l,wheels:c}=a1(),h=l1([a,l,...c],e?12e3:26e3),d={uAssemble:{value:0},uTime:{value:0},uScan:{value:3.2},uPixel:{value:i},uSize:{value:e?26:22},uScatter:{value:0},uRed:{value:yp},uOpacity:{value:1}},u=new Fo(h,new Dn({vertexShader:c1,fragmentShader:h1,uniforms:d,transparent:!0,depthWrite:!1,blending:Ds})),f=new yr;f.add(u);let p=new Do({color:"#ff3b2a",transparent:!0,opacity:0,blending:Ds,depthWrite:!1});f.add(new No(new Bo(a,30),p)),f.add(new No(new Bo(l,30),p)),s.add(f);let _={uTime:d.uTime,uOrange:{value:o1},uRed:{value:yp},uScan:d.uScan,uOpacity:{value:1}},m=new Ln(new Jr(40,40),new Dn({vertexShader:f1,fragmentShader:u1,uniforms:_,transparent:!0,depthWrite:!1}));m.rotation.x=-Math.PI/2,s.add(m);let g=document.createElement("canvas");g.width=4,g.height=128;let M=g.getContext("2d"),E=M.createLinearGradient(0,0,0,128);E.addColorStop(0,"rgba(255,255,255,0)"),E.addColorStop(.55,"rgba(255,255,255,.55)"),E.addColorStop(1,"rgba(255,255,255,1)"),M.fillStyle=E,M.fillRect(0,0,4,128);let x=new Ka(g),S=new Ln(new Jr(2.8,2.4),new Ps({color:yp,alphaMap:x,transparent:!0,opacity:0,blending:Ds,side:Ri,depthWrite:!1}));S.rotation.y=Math.PI/2,S.position.y=1.2,s.add(S);let T=e?250:600,A=new Float32Array(T*3);for(let ct=0;ct<T;ct++)A[ct*3]=(Math.random()-.5)*18,A[ct*3+1]=Math.random()*6,A[ct*3+2]=(Math.random()-.5)*14;let v=new an;v.setAttribute("position",new ei(A,3));let w=new Fo(v,new Uo({color:"#8a8f99",size:.025,transparent:!0,opacity:.5,depthWrite:!1}));s.add(w);let C={progress:0,mx:0,my:0,tmx:0,tmy:0},D=ct=>{let _t=Yo.lerp(.62,-2.35,ct),zt=Yo.lerp(8.4,9.6,ct),Vt=Yo.lerp(2,3.6,ct*ct);return new F(Math.sin(_t)*zt,Vt,Math.cos(_t)*zt)},I=new F,k=new F,L=new F,z=new F(0,.7,0),H=new F(0,1,0),V=()=>{let ct=r.clientWidth,_t=r.clientHeight;!ct||!_t||(n.setSize(ct,_t,!1),o.aspect=ct/_t,o.fov=ct/_t<.8?46:32,o.updateProjectionMatrix())};V(),window.addEventListener("resize",V),window.addEventListener("pointermove",ct=>{C.tmx=ct.clientX/window.innerWidth-.5,C.tmy=ct.clientY/window.innerHeight-.5},{passive:!0});let Q=!0;new IntersectionObserver(([ct])=>{Q=ct.isIntersecting,Q&&$()}).observe(r);let q=new fl,P=0;function $(){if(cancelAnimationFrame(P),!Q)return;P=requestAnimationFrame($),q.update();let ct=q.getElapsed();d.uTime.value=ct,C.mx+=(C.tmx-C.mx)*.05,C.my+=(C.tmy-C.my)*.05;let _t=C.progress,zt=D(_t),Vt=r.clientWidth/r.clientHeight>1.1,Qt=Vt?Yo.lerp(2.5,0,Math.min(1,_t*2.2)):0;o.position.set(zt.x+C.mx*1.2,zt.y-C.my*.8,zt.z),k.subVectors(z,o.position).normalize().cross(H).normalize(),L.copy(z).addScaledVector(k,-Qt),L.y+=Vt?0:-.9,o.lookAt(L),f.rotation.y=Math.sin(ct*.25)*.04,S.position.x=d.uScan.value,w.rotation.y=ct*.02;for(let J of t){I.copy(J.pos).applyMatrix4(f.matrixWorld).project(o);let et=(I.x*.5+.5)*r.clientWidth,pt=(-I.y*.5+.5)*r.clientHeight;J.el.style.transform=`translate3d(${et}px, ${pt}px, 0)`}n.render(s,o)}return $(),{uniforms:d,edgeMat:p,laser:S,state:C,setProgress(ct){C.progress=ct,Q||$()}}}ie.registerPlugin(ee);var Ne=(r,t=document)=>t.querySelector(r),Un=(r,t=document)=>[...t.querySelectorAll(r)],qe=matchMedia("(prefers-reduced-motion: reduce)").matches,R0=matchMedia("(pointer: fine)").matches,d1=matchMedia("(max-width: 960px)").matches,P0=document.documentElement;qe&&P0.classList.add("reduced");var vi=null;qe||(vi=new Tg({lerp:.09,smoothWheel:!0}),vi.on("scroll",ee.update),ie.ticker.add(r=>vi.raf(r*1e3)),ie.ticker.lagSmoothing(0),vi.stop());var p1=r=>vi?vi.scrollTo(r,{offset:-70,duration:1.4}):r.scrollIntoView();Un('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{let e=r.getAttribute("href");if(e.length<2)return;let n=Ne(e);n&&(t.preventDefault(),Mp(!1),p1(n))}));function I0(r){let t=document.createElement("span");return t.className="sr-only",t.textContent=r.textContent.trim(),t}function m1(r){let t=r.textContent.trim(),e=document.createElement("span");e.className="split-line",e.setAttribute("aria-hidden","true"),t.split(" ").forEach((i,s,o)=>{let a=document.createElement("span");a.style.display="inline-block",a.style.whiteSpace="nowrap",[...i].forEach(l=>{let c=document.createElement("span");c.className="split-char",c.textContent=l,a.appendChild(c)}),e.appendChild(a),s<o.length-1&&e.appendChild(document.createTextNode(" "))});let n=I0(r);return r.textContent="",r.append(n,e),Un(".split-char",e)}function L0(r,t="split-word"){let e=r.textContent.trim(),n=document.createElement("span");n.setAttribute("aria-hidden","true");let i=[];e.split(/\s+/).forEach((o,a,l)=>{let c=document.createElement("span");c.className=t;let h=document.createElement("span");h.textContent=o,c.appendChild(h),n.appendChild(c),a<l.length-1&&n.appendChild(document.createTextNode(" ")),i.push(t==="w"?c:h)});let s=I0(r);return r.textContent="",r.append(s,n),i}var El=Ne(".menu-toggle"),A0=Ne("#nav");function Mp(r){El&&(El.setAttribute("aria-expanded",String(r)),El.setAttribute("aria-label",r?"Men\xFC schlie\xDFen":"Men\xFC \xF6ffnen"),A0.classList.toggle("is-open",r),vi&&(r?vi.stop():vi.start()),r&&!qe&&ie.from(Un("a",A0),{yPercent:120,opacity:0,rotate:4,stagger:.05,duration:.9,ease:"expo.out",delay:.15}))}El.addEventListener("click",()=>Mp(El.getAttribute("aria-expanded")!=="true"));document.addEventListener("keydown",r=>{r.key==="Escape"&&Mp(!1)});var C0=Ne(".site-header"),g1=Ne(".callbar"),Sp=0,_1=()=>{let r=window.scrollY,t=r>window.innerHeight*.9;C0.classList.toggle("is-hidden",t&&r>Sp+4),(r<Sp-4||!t)&&C0.classList.remove("is-hidden"),g1.classList.toggle("is-visible",t),Sp=r};window.addEventListener("scroll",_1,{passive:!0});var x1=Ne(".hero-canvas"),wl=Un(".hs"),v1=[[2.36,.52,.5],[1.4,.39,1],[-1.72,.86,.94]],xi=E0({canvas:x1,labels:wl.map((r,t)=>({el:r,pos:new F(...v1[t])})),mobile:d1});xi||P0.classList.add("no-webgl");var rs=xi?xi.uniforms:null,y1=Un("[data-split]").map(m1);function S1(){let r=ie.timeline();return xi&&r.to(rs.uAssemble,{value:1,duration:3.2,ease:"power3.out"},0).to(xi.edgeMat,{opacity:.16,duration:1.2},2.2).fromTo(rs.uScan,{value:3.2},{value:-3.2,duration:1.8,ease:"power2.inOut"},2).to(xi.laser.material,{opacity:.18,duration:.3},2).to(xi.laser.material,{opacity:0,duration:.3},3.5).set(rs.uScan,{value:3.2},3.85),r.from(".site-header",{yPercent:-150,duration:1.2,ease:"expo.out"},.2).from(".hero-kicker",{y:30,opacity:0,duration:1,ease:"expo.out"},.35),y1.forEach((t,e)=>{r.from(t,{yPercent:115,rotateX:-90,rotateY:20,opacity:0,transformOrigin:"50% 100% -40px",stagger:.025,duration:1.3,ease:"expo.out"},.4+e*.16)}),r.from(".hero-lead",{y:30,opacity:0,duration:1.1,ease:"expo.out"},1).from(".hero-actions .btn",{y:40,opacity:0,stagger:.1,duration:1.1,ease:"expo.out"},1.1).from(".scroll-hint",{opacity:0,duration:1},1.6),r}function M1(){if(!xi||qe)return;let r={p:0};ie.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:"+=200%",pin:".hero-stage",scrub:1.2,anticipatePin:1}}).to(r,{p:1,duration:1,ease:"none",onUpdate:()=>xi.setProgress(r.p)},0).to(".hero-content",{y:-120,opacity:0,filter:"blur(8px)",duration:.16,ease:"power2.in"},0).to(".scroll-hint",{opacity:0,duration:.05},0).fromTo(rs.uScan,{value:3.2},{value:-3.2,duration:.42,ease:"none",immediateRender:!1},.08).fromTo(xi.laser.material,{opacity:0},{opacity:.22,duration:.04,immediateRender:!1},.08).to(xi.laser.material,{opacity:0,duration:.04},.48).fromTo(wl[0],{opacity:0,scale:.6},{opacity:1,scale:1,duration:.05},.14).fromTo(wl[1],{opacity:0,scale:.6},{opacity:1,scale:1,duration:.05},.2).fromTo(wl[2],{opacity:0,scale:.6},{opacity:1,scale:1,duration:.05},.38).fromTo(".hero-phase2",{opacity:0,y:60},{opacity:1,y:0,duration:.12,ease:"power2.out"},.3).fromTo(".p2-big",{letterSpacing:"0.2em"},{letterSpacing:"-0.03em",duration:.2,ease:"power3.out"},.3).to(wl,{opacity:0,duration:.06},.78).to(".hero-phase2",{opacity:0,y:-60,duration:.08},.8).to(rs.uScatter,{value:3,duration:.2,ease:"power2.in"},.8).to(rs.uOpacity,{value:0,duration:.2},.8).to(xi.edgeMat,{opacity:0,duration:.1},.8)}function b1(){return new Promise(r=>{if(qe)return r();let t={v:0},e=Ne(".js-load"),n=Ne(".loader-bar span");ie.timeline().to(t,{v:100,duration:1.7,ease:"power3.inOut",onUpdate:()=>{e.textContent=String(Math.round(t.v)).padStart(3,"0"),n.style.transform=`scaleX(${t.v/100})`}}).to(".loader-inner",{scale:.85,opacity:0,duration:.45,ease:"power3.in"}).add(r,"-=0.15").to(".loader",{clipPath:"polygon(0 0, 100% 0, 100% 0%, 0 0%)",duration:1.1,ease:"expo.inOut"},"-=0.2").set(".loader",{display:"none"})})}function T1(){Un(".ticker-row").forEach(r=>{let t=Ne(".ticker-track",r);t.innerHTML+=t.innerHTML+t.innerHTML;let e=Number(r.dataset.dir)||-1,n=0,i=0;ie.ticker.add((s,o)=>{let a=vi?vi.velocity:0,l=1+Math.min(Math.abs(a)*.25,10),c=a<-.1?-1:1;n+=.07*o*l*e*c;let h=t.scrollWidth/3,d=(n%h+h)%h;i+=(ie.utils.clamp(-14,14,a*.7)-i)*.1,t.style.transform=`translate3d(${-d}px,0,0) skewX(${-i}deg)`})}),qe||ie.from(".ticker",{scaleX:.6,rotate:8,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:".ticker",start:"top 95%"}})}function w1(){Un("[data-split-words]").forEach(r=>{let t=L0(r);qe||ie.from(t,{yPercent:120,rotate:8,stagger:.07,duration:1.3,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 88%"}})}),!qe&&Un(".sec-head p, .about-copy p, .clock-copy p, .contact-lead").forEach(r=>{ie.from(r,{y:40,opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 90%"}})})}function E1(){qe||ie.from(".card",{y:180,rotateX:-50,rotateZ:r=>r%2?4:-4,opacity:0,transformOrigin:"50% 0%",transformPerspective:1200,stagger:.12,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".cards",start:"top 82%"}}),!(!R0||qe)&&Un(".tilt").forEach(r=>{r.addEventListener("pointermove",t=>{let e=r.getBoundingClientRect(),n=(t.clientX-e.left)/e.width,i=(t.clientY-e.top)/e.height;r.classList.add("is-tilting"),r.style.setProperty("--rx",`${(.5-i)*14}deg`),r.style.setProperty("--ry",`${(n-.5)*18}deg`),r.style.setProperty("--gx",`${n*100}%`),r.style.setProperty("--gy",`${i*100}%`)}),r.addEventListener("pointerleave",()=>{r.classList.remove("is-tilting"),r.style.setProperty("--rx","0deg"),r.style.setProperty("--ry","0deg")})})}function A1(){let r=Ne(".js-flaps"),t=Ne(".js-clock-text"),e=new Intl.DateTimeFormat("de-DE",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Berlin"}),n=()=>e.format(new Date).replace(/\D/g,"").padStart(4,"0"),i=[];for(let h=0;h<4;h++){if(h===2){let u=document.createElement("span");u.className="flap-sep",u.textContent=":",r.appendChild(u)}let d=document.createElement("div");d.className="flap",d.innerHTML='<div class="f-top"><span></span></div><div class="f-bot"><span></span></div><div class="leaf-front"><span></span></div><div class="leaf-back"><span></span></div>',r.appendChild(d),i.push(d)}let s=(h,d,u=!1)=>{let f=h.dataset.v,[p,_,m,g]=Un("span",h);return f===void 0||qe?(p.textContent=_.textContent=m.textContent=g.textContent=d,h.dataset.v=d,Promise.resolve()):f===d?Promise.resolve():(p.textContent=d,_.textContent=f,m.textContent=f,g.textContent=d,h.classList.toggle("fast",u),h.classList.remove("flip"),h.offsetWidth,h.classList.add("flip"),h.dataset.v=d,new Promise(M=>setTimeout(()=>{_.textContent=d,m.textContent=d,h.classList.remove("flip"),M()},u?280:920)))},o=(h,d)=>Promise.all(i.map((u,f)=>s(u,h[f],d))),a=n();i.forEach(h=>s(h,"0"));let l=h=>{t.textContent=`${h.slice(0,2)}:${h.slice(2)}`};l(a);let c=async()=>{for(let h=0;h<7;h++)await o(Array.from({length:4},()=>String(Math.floor(Math.random()*10))),!0);await o(n(),!1)};qe?o(a):ee.create({trigger:".clock",start:"top 70%",once:!0,onEnter:c}),setInterval(()=>{let h=n();l(h),i[0].dataset.v!==void 0&&o(h)},5e3),qe||ie.from(".flaps",{rotateY:-70,rotateX:40,z:-400,opacity:0,duration:1.8,ease:"expo.out",scrollTrigger:{trigger:".clock",start:"top 75%"}})}function C1(){let r=Ne(".reveal-words"),t=L0(r,"w"),e=["Sie","w\xE4hlen","den","Gutachter."],n=t.findIndex((i,s)=>e.every((o,a)=>t[s+a]&&t[s+a].textContent===o));if(n>=0&&e.forEach((i,s)=>t[n+s].classList.add("hot")),qe){t.forEach(i=>i.style.opacity=1);return}ie.to(t,{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:r,start:"top 78%",end:"bottom 40%",scrub:!0}}),ie.from(".costs-note",{x:-60,opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:".costs-note",start:"top 92%"}})}function R1(){if(qe)return;let r=ie.matchMedia();r.add("(min-width: 641px)",()=>{let t=Ne(".process-track"),e=Ne(".road"),n=()=>Math.max(0,t.scrollWidth-window.innerWidth+40),i=ie.timeline({scrollTrigger:{trigger:".process",start:"top top",end:()=>`+=${n()+window.innerHeight*.4}`,pin:".process-pin",scrub:1,invalidateOnRefresh:!0}});i.to(t,{x:()=>-n(),ease:"none"},0).to(".road-truck",{x:()=>e.clientWidth-110,ease:"none"},0).to(".road-line",{backgroundPositionX:"-800px",ease:"none"},0),Un(".pstep").forEach(s=>{ie.from(s,{rotateY:-55,rotateZ:-3,scale:.85,opacity:.2,transformPerspective:1e3,transformOrigin:"0% 50%",ease:"none",scrollTrigger:{trigger:s,containerAnimation:i,start:"left 100%",end:"left 55%",scrub:!0}}),ie.from(Ne(".pstep-no",s),{xPercent:60,ease:"none",scrollTrigger:{trigger:s,containerAnimation:i,start:"left 100%",end:"right 0%",scrub:!0}})})}),r.add("(max-width: 640px)",()=>{Un(".pstep").forEach(t=>ie.from(t,{y:100,rotateX:-30,opacity:0,transformPerspective:900,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 88%"}})),ie.to(".road-truck",{x:()=>Ne(".road").clientWidth-110,ease:"none",scrollTrigger:{trigger:".process-track",start:"top 70%",end:"bottom 60%",scrub:!0}})})}function P1(){qe||Un(".person").forEach((r,t)=>{ie.from(r,{y:160,rotate:t?6:-6,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 92%"}}),ie.fromTo(Ne("img",r),{yPercent:-12},{yPercent:0,ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})})}function I1(){Un(".faq-list details").forEach(r=>{let t=Ne("summary",r),e=Ne(".faq-a",r);t.addEventListener("click",n=>{qe||(n.preventDefault(),r.open?ie.to(e,{height:0,opacity:0,duration:.5,ease:"expo.inOut",onComplete:()=>{r.open=!1,ie.set(e,{clearProps:"all"}),ee.refresh()}}):(r.open=!0,ie.from(e,{height:0,opacity:0,duration:.7,ease:"expo.out",onComplete:()=>ee.refresh()})))})}),qe||ie.from(".faq-list details",{x:80,opacity:0,stagger:.08,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:".faq-list",start:"top 85%"}})}function L1(){qe||(ie.from(".contact-phone",{scale:.6,rotateX:-80,opacity:0,transformPerspective:800,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".contact-phone",start:"top 90%"}}),ie.from(".form",{y:120,rotateY:-25,opacity:0,transformPerspective:1200,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".form",start:"top 88%"}}),ie.from(".footer-giant span",{yPercent:110,skewX:-20,stagger:.12,ease:"none",scrollTrigger:{trigger:".footer-giant",start:"top bottom",end:"bottom bottom",scrub:!0}}))}function D1(){if(!R0||qe)return;Un(".magnetic").forEach(a=>{let l=ie.quickTo(a,"x",{duration:.6,ease:"power3"}),c=ie.quickTo(a,"y",{duration:.6,ease:"power3"});a.addEventListener("pointermove",h=>{let d=a.getBoundingClientRect();l((h.clientX-d.left-d.width/2)*.35),c((h.clientY-d.top-d.height/2)*.45)}),a.addEventListener("pointerleave",()=>{l(0),c(0)})});let r=Ne(".cursor"),t=Ne(".cursor-dot"),e=Ne(".cursor-ring"),n=ie.quickTo(t,"x",{duration:.1}),i=ie.quickTo(t,"y",{duration:.1}),s=ie.quickTo(e,"x",{duration:.5,ease:"power3"}),o=ie.quickTo(e,"y",{duration:.5,ease:"power3"});window.addEventListener("pointermove",a=>{n(a.clientX),i(a.clientY),s(a.clientX),o(a.clientY)},{passive:!0}),document.addEventListener("pointerover",a=>r.classList.toggle("is-hover",!!a.target.closest("a, button, summary, .card, label")))}function N1(){let r=Ne("#callback"),t=Ne(".form-msg",r);r.addEventListener("submit",e=>{e.preventDefault();let n=null;if(Un("[required]",r).forEach(i=>{let s=i.type==="checkbox"?!i.checked:!i.value.trim();i.setAttribute("aria-invalid",String(s)),s&&!n&&(n=i)}),n){t.className="form-msg err",t.textContent="Bitte Name, Telefonnummer und Einverst\xE4ndnis erg\xE4nzen.",n.focus(),qe||ie.fromTo(r,{x:-10},{x:0,duration:.6,ease:"elastic.out(1, 0.3)"});return}t.className="form-msg ok",t.textContent="R\xFCckruf angefordert. Wir melden uns sofort.",r.reset()})}Ne(".js-year").textContent=new Date().getFullYear();M1();T1();w1();E1();A1();C1();R1();P1();I1();L1();D1();N1();ee.sort();qe?rs&&(rs.uAssemble.value=1,xi.edgeMat.opacity=.16):(ie.set(".hero-content, .site-header",{visibility:"visible"}),b1().then(()=>{vi&&vi.start(),S1()}));document.fonts&&document.fonts.ready.then(()=>ee.refresh());window.addEventListener("load",()=>ee.refresh());})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
