/* Copyright (c) Microsoft Open Technologies, Inc. All rights reserved. See License.txt in the project root for license information.*/
(function(a){function b(a){for(var b=a.length,c=new Array(b),d=0;b>d;d++)c[d]=a[d];return c}function c(a,b){if(fa&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(ja)){for(var c=[],e=b;e;e=e.source)e.stack&&c.unshift(e.stack);c.unshift(a.stack);var f=c.join("\n"+ja+"\n");a.stack=d(f)}}function d(a){for(var b=a.split("\n"),c=[],d=0,g=b.length;g>d;d++){var h=b[d];e(h)||f(h)||!h||c.push(h)}return c.join("\n")}function e(a){var b=h(a);if(!b)return!1;var c=b[0],d=b[1];return c===ha&&d>=ia&&Ac>=d}function f(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function g(){if(fa)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=h(c);if(!d)return;return ha=d[0],d[1]}}function h(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function i(a){var b=[];if(!Sa(a))return b;Ra.nonEnumArgs&&a.length&&Ta(a)&&(a=Wa.call(a));var c=Ra.enumPrototypes&&"function"==typeof a,d=Ra.enumErrorProps&&(a===Ma||a instanceof Error);for(var e in a)c&&"prototype"==e||d&&("message"==e||"name"==e)||b.push(e);if(Ra.nonEnumShadows&&a!==Na){var f=a.constructor,g=-1,h=ya;if(a===(f&&f.prototype))var i=a===Oa?Ia:a===Ma?Da:Ja.call(a),j=Qa[i];for(;++g<h;)e=xa[g],j&&j[e]||!Ka.call(a,e)||b.push(e)}return b}function j(a,b,c){for(var d=-1,e=c(a),f=e.length;++d<f;){var g=e[d];if(b(a[g],g,a)===!1)break}return a}function k(a,b){return j(a,b,i)}function l(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}function m(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;var e=typeof a,f=typeof b;if(a===a&&(null==a||null==b||"function"!=e&&"object"!=e&&"function"!=f&&"object"!=f))return!1;var g=Ja.call(a),h=Ja.call(b);if(g==za&&(g=Ga),h==za&&(h=Ga),g!=h)return!1;switch(g){case Ba:case Ca:return+a==+b;case Fa:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case Ha:case Ia:return a==String(b)}var i=g==Aa;if(!i){if(g!=Ga||!Ra.nodeClass&&(l(a)||l(b)))return!1;var j=!Ra.argsObject&&Ta(a)?Object:a.constructor,n=!Ra.argsObject&&Ta(b)?Object:b.constructor;if(!(j==n||Ka.call(a,"constructor")&&Ka.call(b,"constructor")||ea(j)&&j instanceof j&&ea(n)&&n instanceof n||!("constructor"in a&&"constructor"in b)))return!1}c||(c=[]),d||(d=[]);for(var o=c.length;o--;)if(c[o]==a)return d[o]==b;var p=0,q=!0;if(c.push(a),d.push(b),i){if(o=a.length,p=b.length,q=p==o)for(;p--;){var r=b[p];if(!(q=m(a[p],r,c,d)))break}}else k(b,function(b,e,f){return Ka.call(f,e)?(p++,q=Ka.call(a,e)&&m(a[e],b,c,d)):void 0}),q&&k(a,function(a,b,c){return Ka.call(c,b)?q=--p>-1:void 0});return c.pop(),d.pop(),q}function n(a,b){for(var c=new Array(a),d=0;a>d;d++)c[d]=b();return c}function o(){try{return Ua.apply(this,arguments)}catch(a){return $a.e=a,$a}}function p(a){if(!ea(a))throw new TypeError("fn must be a function");return Ua=a,o}function q(a){throw a}function r(a,b){this.id=a,this.value=b}function t(a,b){this.scheduler=a,this.disposable=b,this.isDisposed=!1}function u(a,b){b.isDisposed||(b.isDisposed=!0,b.disposable.dispose())}function v(a){this.observer=a,this.a=[],this.isStopped=!1}function w(){this._s=s}function x(){this._s=s,this._l=s.length,this._i=0}function y(a){this._a=a}function z(a){this._a=a,this._l=D(a),this._i=0}function A(a){return"number"==typeof a&&T.isFinite(a)}function B(b){var c,d=b[ra];if(!d&&"string"==typeof b)return c=new w(b),c[ra]();if(!d&&b.length!==a)return c=new y(b),c[ra]();if(!d)throw new TypeError("Object is not iterable");return b[ra]()}function C(a){var b=+a;return 0===b?b:isNaN(b)?b:0>b?-1:1}function D(a){var b=+a.length;return isNaN(b)?0:0!==b&&A(b)?(b=C(b)*Math.floor(Math.abs(b)),0>=b?0:b>Yb?Yb:b):b}function E(a,b){this.observer=a,this.parent=b}function F(a,b){return qb(a)||(a=ub),new $b(b,a)}function G(a,b){this.observer=a,this.parent=b}function H(a,b){this.observer=a,this.parent=b}function I(a,b){return new vc(function(c){var d=new kb,e=new lb;return e.setDisposable(d),d.setDisposable(a.subscribe(function(a){c.onNext(a)},function(a){try{var d=b(a)}catch(f){return c.onError(f)}da(d)&&(d=Rb(d));var g=new kb;e.setDisposable(g),g.setDisposable(d.subscribe(c))},function(a){c.onCompleted(a)})),e},a)}function J(a,b){var c=this;return new vc(function(d){var e=0,f=a.length;return c.subscribe(function(c){if(f>e){var g,h=a[e++];try{g=b(c,h)}catch(i){return d.onError(i)}d.onNext(g)}else d.onCompleted()},function(a){d.onError(a)},function(){d.onCompleted()})},c)}function K(){return!1}function L(){return[]}function M(a,b,c){var d=wa(b,c,3);return a.map(function(b,c){var e=d(b,c,a);return da(e)&&(e=Rb(e)),(ua(e)||ta(e))&&(e=Zb(e)),e}).concatAll()}function N(a,b,c){for(var d=0,e=a.length;e>d;d++)if(c(a[d],b))return d;return-1}function O(a){this.comparer=a,this.set=[]}function P(a,b,c){this.observer=a,this.selector=b,this.source=c,this.i=0,this.isStopped=!1}function Q(a,b,c){var d=wa(b,c,3);return a.map(function(b,c){var e=d(b,c,a);return da(e)&&(e=Rb(e)),(ua(e)||ta(e))&&(e=Zb(e)),e}).mergeAll()}function R(a,b,c){this.observer=a,this.predicate=b,this.source=c,this.i=0,this.isStopped=!1}var S={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},T=S[typeof window]&&window||this,U=S[typeof exports]&&exports&&!exports.nodeType&&exports,V=S[typeof module]&&module&&!module.nodeType&&module,W=V&&V.exports===U&&U,X=S[typeof global]&&global;!X||X.global!==X&&X.window!==X||(T=X);var Y={internals:{},config:{Promise:T.Promise},helpers:{}},Z=Y.helpers.noop=function(){},$=(Y.helpers.notDefined=function(a){return"undefined"==typeof a},Y.helpers.identity=function(a){return a}),_=(Y.helpers.pluck=function(a){return function(b){return b[a]}},Y.helpers.just=function(a){return function(){return a}},Y.helpers.defaultNow=function(){return Date.now?Date.now:function(){return+new Date}}()),aa=Y.helpers.defaultComparer=function(a,b){return Va(a,b)},ba=Y.helpers.defaultSubComparer=function(a,b){return a>b?1:b>a?-1:0},ca=(Y.helpers.defaultKeySerializer=function(a){return a.toString()},Y.helpers.defaultError=function(a){throw a}),da=Y.helpers.isPromise=function(a){return!!a&&"function"==typeof a.then},ea=(Y.helpers.asArray=function(){return Array.prototype.slice.call(arguments)},Y.helpers.not=function(a){return!a},Y.helpers.isFunction=function(){var a=function(a){return"function"==typeof a||!1};return a(/x/)&&(a=function(a){return"function"==typeof a&&"[object Function]"==Ja.call(a)}),a}());Y.config.longStackSupport=!1;var fa=!1;try{throw new Error}catch(ga){fa=!!ga.stack}var ha,ia=g(),ja="From previous event:",ka=Y.EmptyError=function(){this.message="Sequence contains no elements.",Error.call(this)};ka.prototype=Error.prototype;var la=Y.ObjectDisposedError=function(){this.message="Object has been disposed",Error.call(this)};la.prototype=Error.prototype;var ma=Y.ArgumentOutOfRangeError=function(){this.message="Argument out of range",Error.call(this)};ma.prototype=Error.prototype;var na=Y.NotSupportedError=function(a){this.message=a||"This operation is not supported",Error.call(this)};na.prototype=Error.prototype;var oa=Y.NotImplementedError=function(a){this.message=a||"This operation is not implemented",Error.call(this)};oa.prototype=Error.prototype;var pa=Y.helpers.notImplemented=function(){throw new oa},qa=Y.helpers.notSupported=function(){throw new na},ra="function"==typeof Symbol&&Symbol.iterator||"_es6shim_iterator_";T.Set&&"function"==typeof(new T.Set)["@@iterator"]&&(ra="@@iterator");var sa=Y.doneEnumerator={done:!0,value:a},ta=Y.helpers.isIterable=function(b){return b[ra]!==a},ua=Y.helpers.isArrayLike=function(b){return b&&b.length!==a};Y.helpers.iterator=ra;var va,wa=Y.internals.bindCallback=function(a,b,c){if("undefined"==typeof b)return a;switch(c){case 0:return function(){return a.call(b)};case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}},xa=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],ya=xa.length,za="[object Arguments]",Aa="[object Array]",Ba="[object Boolean]",Ca="[object Date]",Da="[object Error]",Ea="[object Function]",Fa="[object Number]",Ga="[object Object]",Ha="[object RegExp]",Ia="[object String]",Ja=Object.prototype.toString,Ka=Object.prototype.hasOwnProperty,La=Ja.call(arguments)==za,Ma=Error.prototype,Na=Object.prototype,Oa=String.prototype,Pa=Na.propertyIsEnumerable;try{va=!(Ja.call(document)==Ga&&!({toString:0}+""))}catch(ga){va=!0}var Qa={};Qa[Aa]=Qa[Ca]=Qa[Fa]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Qa[Ba]=Qa[Ia]={constructor:!0,toString:!0,valueOf:!0},Qa[Da]=Qa[Ea]=Qa[Ha]={constructor:!0,toString:!0},Qa[Ga]={constructor:!0};var Ra={};!function(){var a=function(){this.x=1},b=[];a.prototype={valueOf:1,y:1};for(var c in new a)b.push(c);for(c in arguments);Ra.enumErrorProps=Pa.call(Ma,"message")||Pa.call(Ma,"name"),Ra.enumPrototypes=Pa.call(a,"prototype"),Ra.nonEnumArgs=0!=c,Ra.nonEnumShadows=!/valueOf/.test(b)}(1);var Sa=Y.internals.isObject=function(a){var b=typeof a;return a&&("function"==b||"object"==b)||!1},Ta=function(a){return a&&"object"==typeof a?Ja.call(a)==za:!1};La||(Ta=function(a){return a&&"object"==typeof a?Ka.call(a,"callee"):!1});var Ua,Va=Y.internals.isEqual=function(a,b){return m(a,b,[],[])},Wa=({}.hasOwnProperty,Array.prototype.slice),Xa=this.inherits=Y.internals.inherits=function(a,b){function c(){this.constructor=a}c.prototype=b.prototype,a.prototype=new c},Ya=Y.internals.addProperties=function(a){for(var b=[],c=1,d=arguments.length;d>c;c++)b.push(arguments[c]);for(var e=0,f=b.length;f>e;e++){var g=b[e];for(var h in g)a[h]=g[h]}},Za=Y.internals.addRef=function(a,b){return new vc(function(c){return new db(b.getDisposable(),a.subscribe(c))})},$a={e:{}};Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Wa.call(arguments,1),d=function(){function e(){}if(this instanceof d){e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(Wa.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(Wa.call(arguments)))};return d}),Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d;if(null==this)throw new TypeError(" this is null or not defined");var e=Object(this),f=e.length>>>0;if("function"!=typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(c=b),d=0;f>d;){var g;d in e&&(g=e[d],a.call(c,g,d,e)),d++}});var _a=Object("a"),ab="a"!=_a[0]||!(0 in _a);Array.prototype.every||(Array.prototype.every=function(a){var b=Object(this),c=ab&&{}.toString.call(this)==Ia?this.split(""):b,d=c.length>>>0,e=arguments[1];if({}.toString.call(a)!=Ea)throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&!a.call(e,c[f],f,b))return!1;return!0}),Array.prototype.map||(Array.prototype.map=function(a){var b=Object(this),c=ab&&{}.toString.call(this)==Ia?this.split(""):b,d=c.length>>>0,e=Array(d),f=arguments[1];if({}.toString.call(a)!=Ea)throw new TypeError(a+" is not a function");for(var g=0;d>g;g++)g in c&&(e[g]=a.call(f,c[g],g,b));return e}),Array.prototype.filter||(Array.prototype.filter=function(a){for(var b,c=[],d=new Object(this),e=0,f=d.length>>>0;f>e;e++)b=d[e],e in d&&a.call(arguments[1],b,e,d)&&c.push(b);return c}),Array.isArray||(Array.isArray=function(a){return{}.toString.call(a)==Aa}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!==d?d=0:0!==d&&d!=1/0&&d!==-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Object.prototype.propertyIsEnumerable||(Object.prototype.propertyIsEnumerable=function(a){for(var b in this)if(b===a)return!0;return!1}),Object.keys||(Object.keys=function(){"use strict";var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString");return function(c){if("object"!=typeof c&&("function"!=typeof c||null===c))throw new TypeError("Object.keys called on non-object");var d,e,f=[];for(d in c)a.call(c,d)&&f.push(d);if(b)for(e=0;ya>e;e++)a.call(c,xa[e])&&f.push(xa[e]);return f}}()),r.prototype.compareTo=function(a){var b=this.value.compareTo(a.value);return 0===b&&(b=this.id-a.id),b};var bb=Y.internals.PriorityQueue=function(a){this.items=new Array(a),this.length=0},cb=bb.prototype;cb.isHigherPriority=function(a,b){return this.items[a].compareTo(this.items[b])<0},cb.percolate=function(a){if(!(a>=this.length||0>a)){var b=a-1>>1;if(!(0>b||b===a)&&this.isHigherPriority(a,b)){var c=this.items[a];this.items[a]=this.items[b],this.items[b]=c,this.percolate(b)}}},cb.heapify=function(a){if(+a||(a=0),!(a>=this.length||0>a)){var b=2*a+1,c=2*a+2,d=a;if(b<this.length&&this.isHigherPriority(b,d)&&(d=b),c<this.length&&this.isHigherPriority(c,d)&&(d=c),d!==a){var e=this.items[a];this.items[a]=this.items[d],this.items[d]=e,this.heapify(d)}}},cb.peek=function(){return this.items[0].value},cb.removeAt=function(b){this.items[b]=this.items[--this.length],this.items[this.length]=a,this.heapify()},cb.dequeue=function(){var a=this.peek();return this.removeAt(0),a},cb.enqueue=function(a){var b=this.length++;this.items[b]=new r(bb.count++,a),this.percolate(b)},cb.remove=function(a){for(var b=0;b<this.length;b++)if(this.items[b].value===a)return this.removeAt(b),!0;return!1},bb.count=0;var db=Y.CompositeDisposable=function(){var a,b,c=[];if(Array.isArray(arguments[0]))c=arguments[0],b=c.length;else for(b=arguments.length,c=new Array(b),a=0;b>a;a++)c[a]=arguments[a];for(a=0;b>a;a++)if(!ib(c[a]))throw new TypeError("Not a disposable");this.disposables=c,this.isDisposed=!1,this.length=c.length},eb=db.prototype;eb.add=function(a){this.isDisposed?a.dispose():(this.disposables.push(a),this.length++)},eb.remove=function(a){var b=!1;if(!this.isDisposed){var c=this.disposables.indexOf(a);-1!==c&&(b=!0,this.disposables.splice(c,1),this.length--,a.dispose())}return b},eb.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;for(var a=this.disposables.length,b=new Array(a),c=0;a>c;c++)b[c]=this.disposables[c];for(this.disposables=[],this.length=0,c=0;a>c;c++)b[c].dispose()}};var fb=Y.Disposable=function(a){this.isDisposed=!1,this.action=a||Z};fb.prototype.dispose=function(){this.isDisposed||(this.action(),this.isDisposed=!0)};var gb=fb.create=function(a){return new fb(a)},hb=fb.empty={dispose:Z},ib=fb.isDisposable=function(a){return a&&ea(a.dispose)},jb=fb.checkDisposed=function(a){if(a.isDisposed)throw new la},kb=Y.SingleAssignmentDisposable=function(){this.isDisposed=!1,this.current=null};kb.prototype.getDisposable=function(){return this.current},kb.prototype.setDisposable=function(a){if(this.current)throw new Error("Disposable has already been assigned");var b=this.isDisposed;!b&&(this.current=a),b&&a&&a.dispose()},kb.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this.current;this.current=null}a&&a.dispose()};var lb=Y.SerialDisposable=function(){this.isDisposed=!1,this.current=null};lb.prototype.getDisposable=function(){return this.current},lb.prototype.setDisposable=function(a){var b=this.isDisposed;if(!b){var c=this.current;this.current=a}c&&c.dispose(),b&&a&&a.dispose()},lb.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this.current;this.current=null}a&&a.dispose()};var mb=Y.RefCountDisposable=function(){function a(a){this.disposable=a,this.disposable.count++,this.isInnerDisposed=!1}function b(a){this.underlyingDisposable=a,this.isDisposed=!1,this.isPrimaryDisposed=!1,this.count=0}return a.prototype.dispose=function(){this.disposable.isDisposed||this.isInnerDisposed||(this.isInnerDisposed=!0,this.disposable.count--,0===this.disposable.count&&this.disposable.isPrimaryDisposed&&(this.disposable.isDisposed=!0,this.disposable.underlyingDisposable.dispose()))},b.prototype.dispose=function(){this.isDisposed||this.isPrimaryDisposed||(this.isPrimaryDisposed=!0,0===this.count&&(this.isDisposed=!0,this.underlyingDisposable.dispose()))},b.prototype.getDisposable=function(){return this.isDisposed?hb:new a(this)},b}();t.prototype.dispose=function(){this.scheduler.scheduleWithState(this,u)};var nb=Y.internals.ScheduledItem=function(a,b,c,d,e){this.scheduler=a,this.state=b,this.action=c,this.dueTime=d,this.comparer=e||ba,this.disposable=new kb};nb.prototype.invoke=function(){this.disposable.setDisposable(this.invokeCore())},nb.prototype.compareTo=function(a){return this.comparer(this.dueTime,a.dueTime)},nb.prototype.isCancelled=function(){return this.disposable.isDisposed},nb.prototype.invokeCore=function(){return this.action(this.scheduler,this.state)};var ob=Y.Scheduler=function(){function a(a,b,c,d){this.now=a,this._schedule=b,this._scheduleRelative=c,this._scheduleAbsolute=d}function b(a,b){return b(),hb}a.isScheduler=function(b){return b instanceof a};var c=a.prototype;return c.schedule=function(a){return this._schedule(a,b)},c.scheduleWithState=function(a,b){return this._schedule(a,b)},c.scheduleWithRelative=function(a,c){return this._scheduleRelative(c,a,b)},c.scheduleWithRelativeAndState=function(a,b,c){return this._scheduleRelative(a,b,c)},c.scheduleWithAbsolute=function(a,c){return this._scheduleAbsolute(c,a,b)},c.scheduleWithAbsoluteAndState=function(a,b,c){return this._scheduleAbsolute(a,b,c)},a.now=_,a.normalize=function(a){return 0>a&&(a=0),a},a}(),pb=ob.normalize,qb=ob.isScheduler;!function(a){function b(a,b){function c(b){e(b,function(b){var d=!1,e=!1,g=a.scheduleWithState(b,function(a,b){return d?f.remove(g):e=!0,c(b),hb});e||(f.add(g),d=!0)})}var d=b[0],e=b[1],f=new db;return c(d),f}function c(a,b,c){function d(b){f(b,function(b,e){var f=!1,h=!1,i=a[c](b,e,function(a,b){return f?g.remove(i):h=!0,d(b),hb});h||(g.add(i),f=!0)})}var e=b[0],f=b[1],g=new db;return d(e),g}function d(a,b){a(function(c){b(a,c)})}a.scheduleRecursive=function(a){return this.scheduleRecursiveWithState(a,function(a,b){a(function(){b(a)})})},a.scheduleRecursiveWithState=function(a,c){return this.scheduleWithState([a,c],b)},a.scheduleRecursiveWithRelative=function(a,b){return this.scheduleRecursiveWithRelativeAndState(b,a,d)},a.scheduleRecursiveWithRelativeAndState=function(a,b,d){return this._scheduleRelative([a,d],b,function(a,b){return c(a,b,"scheduleWithRelativeAndState")})},a.scheduleRecursiveWithAbsolute=function(a,b){return this.scheduleRecursiveWithAbsoluteAndState(b,a,d)},a.scheduleRecursiveWithAbsoluteAndState=function(a,b,d){return this._scheduleAbsolute([a,d],b,function(a,b){return c(a,b,"scheduleWithAbsoluteAndState")})}}(ob.prototype),function(){ob.prototype.schedulePeriodic=function(a,b){return this.schedulePeriodicWithState(null,a,b)},ob.prototype.schedulePeriodicWithState=function(a,b,c){if("undefined"==typeof T.setInterval)throw new na;b=pb(b);var d=a,e=T.setInterval(function(){d=c(d)},b);return gb(function(){T.clearInterval(e)})}}(ob.prototype),function(a){a.catchError=a["catch"]=function(a){return new yb(this,a)}}(ob.prototype);var rb,sb,tb=(Y.internals.SchedulePeriodicRecursive=function(){function a(a,b){b(0,this._period);try{this._state=this._action(this._state)}catch(c){throw this._cancel.dispose(),c}}function b(a,b,c,d){this._scheduler=a,this._state=b,this._period=c,this._action=d}return b.prototype.start=function(){var b=new kb;return this._cancel=b,b.setDisposable(this._scheduler.scheduleRecursiveWithRelativeAndState(0,this._period,a.bind(this))),b},b}(),ob.immediate=function(){function a(a,b){return b(this,a)}return new ob(_,a,qa,qa)}()),ub=ob.currentThread=function(){function a(){for(;c.length>0;){var a=c.dequeue();!a.isCancelled()&&a.invoke()}}function b(b,d){var e=new nb(this,b,d,this.now());if(c)c.enqueue(e);else{c=new bb(4),c.enqueue(e);var f=p(a)();if(c=null,f===$a)return q(f.e)}return e.disposable}var c,d=new ob(_,b,qa,qa);return d.scheduleRequired=function(){return!c},d}(),vb=function(){var a,b=Z;if(T.setTimeout)a=T.setTimeout,b=T.clearTimeout;else{if(!T.WScript)throw new na;a=function(a,b){T.WScript.Sleep(b),a()}}return{setTimeout:a,clearTimeout:b}}(),wb=vb.setTimeout,xb=vb.clearTimeout;!function(){function a(b){if(f)wb(function(){a(b)},0);else{var c=e[b];if(c){f=!0;var d=p(c)();if(sb(b),f=!1,d===$a)return q(d.e)}}}function b(){if(!T.postMessage||T.importScripts)return!1;var a=!1,b=T.onmessage;return T.onmessage=function(){a=!0},T.postMessage("","*"),T.onmessage=b,a}function c(b){"string"==typeof b.data&&b.data.substring(0,i.length)===i&&a(b.data.substring(i.length))}var d=1,e={},f=!1;sb=function(a){delete e[a]};var g=RegExp("^"+String(Ja).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),h="function"==typeof(h=X&&W&&X.setImmediate)&&!g.test(h)&&h;if(ea(h))rb=function(b){var c=d++;return e[c]=b,h(function(){a(c)}),c};else if("undefined"!=typeof process&&"[object process]"==={}.toString.call(process))rb=function(b){var c=d++;return e[c]=b,process.nextTick(function(){a(c)}),c};else if(b()){var i="ms.rx.schedule"+Math.random();T.addEventListener?T.addEventListener("message",c,!1):T.attachEvent?T.attachEvent("onmessage",c):T.onmessage=c,rb=function(a){var b=d++;return e[b]=a,T.postMessage(i+currentId,"*"),b}}else if(T.MessageChannel){var j=new T.MessageChannel;j.port1.onmessage=function(b){a(b.data)},rb=function(a){var b=d++;return e[b]=a,j.port2.postMessage(b),b}}else rb="document"in T&&"onreadystatechange"in T.document.createElement("script")?function(b){var c=T.document.createElement("script"),f=d++;return e[f]=b,c.onreadystatechange=function(){a(f),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},T.document.documentElement.appendChild(c),f}:function(b){var c=d++;return e[c]=b,wb(function(){a(c)},0),c}}();var yb=(ob.timeout=ob["default"]=function(){function a(a,b){var c=this,d=new kb,e=rb(function(){!d.isDisposed&&d.setDisposable(b(c,a))});return new db(d,gb(function(){sb(e)}))}function b(a,b,c){var d=this,e=ob.normalize(b),f=new kb;if(0===e)return d.scheduleWithState(a,c);var g=wb(function(){!f.isDisposed&&f.setDisposable(c(d,a))},e);return new db(f,gb(function(){xb(g)}))}function c(a,b,c){return this.scheduleWithRelativeAndState(a,b-this.now(),c)}return new ob(_,a,b,c)}(),function(a){function b(a,b){return this._scheduler.scheduleWithState(a,this._wrap(b))}function c(a,b,c){return this._scheduler.scheduleWithRelativeAndState(a,b,this._wrap(c))}function d(a,b,c){return this._scheduler.scheduleWithAbsoluteAndState(a,b,this._wrap(c))}function e(e,f){this._scheduler=e,this._handler=f,this._recursiveOriginal=null,this._recursiveWrapper=null,a.call(this,this._scheduler.now.bind(this._scheduler),b,c,d)}return Xa(e,a),e.prototype._clone=function(a){return new e(a,this._handler)},e.prototype._wrap=function(a){var b=this;return function(c,d){try{return a(b._getRecursiveWrapper(c),d)}catch(e){if(!b._handler(e))throw e;return hb}}},e.prototype._getRecursiveWrapper=function(a){if(this._recursiveOriginal!==a){this._recursiveOriginal=a;var b=this._clone(a);b._recursiveOriginal=a,b._recursiveWrapper=b,this._recursiveWrapper=b}return this._recursiveWrapper},e.prototype.schedulePeriodicWithState=function(a,b,c){var d=this,e=!1,f=new kb;return f.setDisposable(this._scheduler.schedulePeriodicWithState(a,b,function(a){if(e)return null;try{return c(a)}catch(b){if(e=!0,!d._handler(b))throw b;return f.dispose(),null}})),f},e}(ob)),zb=Y.Notification=function(){function a(a,b,c,d,e,f){this.kind=a,this.value=b,this.exception=c,this._accept=d,this._acceptObservable=e,this.toString=f}return a.prototype.accept=function(a,b,c){return a&&"object"==typeof a?this._acceptObservable(a):this._accept(a,b,c)},a.prototype.toObservable=function(a){var b=this;return qb(a)||(a=tb),new vc(function(c){return a.scheduleWithState(b,function(a,b){b._acceptObservable(c),"N"===b.kind&&c.onCompleted()})})},a}(),Ab=zb.createOnNext=function(){function a(a){return a(this.value)}function b(a){return a.onNext(this.value)}function c(){return"OnNext("+this.value+")"}return function(d){return new zb("N",d,null,a,b,c)}}(),Bb=zb.createOnError=function(){function a(a,b){return b(this.exception)}function b(a){return a.onError(this.exception)}function c(){return"OnError("+this.exception+")"}return function(d){return new zb("E",null,d,a,b,c)}}(),Cb=zb.createOnCompleted=function(){function a(a,b,c){return c()}function b(a){return a.onCompleted()}function c(){return"OnCompleted()"}return function(){return new zb("C",null,null,a,b,c)}}(),Db=Y.internals.Enumerator=function(a){this._next=a};Db.prototype.next=function(){return this._next()},Db.prototype[ra]=function(){return this};var Eb=Y.internals.Enumerable=function(a){this._iterator=a};Eb.prototype[ra]=function(){return this._iterator()},Eb.prototype.concat=function(){var a=this;return new vc(function(b){var c,d=a[ra](),e=new lb,f=tb.scheduleRecursive(function(a){if(!c){try{var f=d.next()}catch(g){return b.onError(g)}if(f.done)return b.onCompleted();var h=f.value;da(h)&&(h=Rb(h));var i=new kb;e.setDisposable(i),i.setDisposable(h.subscribe(function(a){b.onNext(a)},function(a){b.onError(a)},a))}});return new db(e,f,gb(function(){c=!0}))})},Eb.prototype.catchError=function(){var a=this;return new vc(function(b){var c,d=a[ra](),e=new lb,f=tb.scheduleRecursiveWithState(null,function(a,f){if(!c){try{var g=d.next()}catch(h){return observer.onError(h)}if(g.done)return void(null!==a?b.onError(a):b.onCompleted());var i=g.value;da(i)&&(i=Rb(i));var j=new kb;e.setDisposable(j),j.setDisposable(i.subscribe(function(a){b.onNext(a)},f,function(){b.onCompleted()}))}});return new db(e,f,gb(function(){c=!0}))})},Eb.prototype.catchErrorWhen=function(a){var b=this;return new vc(function(c){var d,e,f=new yc,g=new yc,h=a(f),i=h.subscribe(g),j=b[ra](),k=new lb,l=tb.scheduleRecursive(function(a){if(!d){try{var b=j.next()}catch(h){return c.onError(h)}if(b.done)return void(e?c.onError(e):c.onCompleted());var i=b.value;da(i)&&(i=Rb(i));var l=new kb,m=new kb;k.setDisposable(new db(m,l)),l.setDisposable(i.subscribe(function(a){c.onNext(a)},function(b){m.setDisposable(g.subscribe(a,function(a){c.onError(a)},function(){c.onCompleted()})),f.onNext(b)},function(){c.onCompleted()}))}});return new db(i,k,l,gb(function(){d=!0}))})};var Fb=Eb.repeat=function(a,b){return null==b&&(b=-1),new Eb(function(){var c=b;return new Db(function(){return 0===c?sa:(c>0&&c--,{done:!1,value:a})})})},Gb=Eb.of=function(a,b,c){if(b)var d=wa(b,c,3);return new Eb(function(){var c=-1;return new Db(function(){return++c<a.length?{done:!1,value:b?d(a[c],c,a):a[c]}:sa})})},Hb=Y.Observer=function(){};Hb.prototype.toNotifier=function(){var a=this;return function(b){return b.accept(a)}},Hb.prototype.asObserver=function(){return new Lb(this.onNext.bind(this),this.onError.bind(this),this.onCompleted.bind(this))},Hb.prototype.checked=function(){return new Mb(this)};var Ib=Hb.create=function(a,b,c){return a||(a=Z),b||(b=ca),c||(c=Z),new Lb(a,b,c)};Hb.fromNotifier=function(a,b){return new Lb(function(c){return a.call(b,Ab(c))},function(c){return a.call(b,Bb(c))},function(){return a.call(b,Cb())})},Hb.prototype.notifyOn=function(a){return new Ob(a,this)},Hb.prototype.makeSafe=function(a){return new AnonymousSafeObserver(this._onNext,this._onError,this._onCompleted,a)};var Jb,Kb=Y.internals.AbstractObserver=function(a){function b(){this.isStopped=!1,a.call(this)}return Xa(b,a),b.prototype.next=pa,b.prototype.error=pa,b.prototype.completed=pa,b.prototype.onNext=function(a){this.isStopped||this.next(a)},b.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.error(a))},b.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.completed())},b.prototype.dispose=function(){this.isStopped=!0},b.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.error(a),!0)},b}(Hb),Lb=Y.AnonymousObserver=function(a){function b(b,c,d){a.call(this),this._onNext=b,this._onError=c,this._onCompleted=d}return Xa(b,a),b.prototype.next=function(a){this._onNext(a)},b.prototype.error=function(a){this._onError(a)},b.prototype.completed=function(){this._onCompleted()},b}(Kb),Mb=function(a){function b(b){a.call(this),this._observer=b,this._state=0}Xa(b,a);var c=b.prototype;return c.onNext=function(a){this.checkAccess();var b=p(this._observer.onNext).call(this._observer,a);this._state=0,b===$a&&q(b.e)},c.onError=function(a){this.checkAccess();var b=p(this._observer.onError).call(this._observer,a);this._state=2,b===$a&&q(b.e)},c.onCompleted=function(){this.checkAccess();var a=p(this._observer.onCompleted).call(this._observer);this._state=2,a===$a&&q(a.e)},c.checkAccess=function(){if(1===this._state)throw new Error("Re-entrancy detected");if(2===this._state)throw new Error("Observer completed");0===this._state&&(this._state=1)},b}(Hb),Nb=Y.internals.ScheduledObserver=function(a){function b(b,c){a.call(this),this.scheduler=b,this.observer=c,this.isAcquired=!1,this.hasFaulted=!1,this.queue=[],this.disposable=new lb}return Xa(b,a),b.prototype.next=function(a){var b=this;this.queue.push(function(){b.observer.onNext(a)})},b.prototype.error=function(a){var b=this;this.queue.push(function(){b.observer.onError(a)})},b.prototype.completed=function(){var a=this;this.queue.push(function(){a.observer.onCompleted()})},b.prototype.ensureActive=function(){var a=!1,b=this;!this.hasFaulted&&this.queue.length>0&&(a=!this.isAcquired,this.isAcquired=!0),a&&this.disposable.setDisposable(this.scheduler.scheduleRecursive(function(a){var c;if(!(b.queue.length>0))return void(b.isAcquired=!1);c=b.queue.shift();try{c()}catch(d){throw b.queue=[],b.hasFaulted=!0,d}a()}))},b.prototype.dispose=function(){a.prototype.dispose.call(this),this.disposable.dispose()},b}(Kb),Ob=function(a){function b(b,c,d){a.call(this,b,c),this._cancel=d}return Xa(b,a),b.prototype.next=function(b){a.prototype.next.call(this,b),this.ensureActive()},b.prototype.error=function(b){a.prototype.error.call(this,b),this.ensureActive()},b.prototype.completed=function(){a.prototype.completed.call(this),this.ensureActive()},b.prototype.dispose=function(){a.prototype.dispose.call(this),this._cancel&&this._cancel.dispose(),this._cancel=null},b}(Nb),Pb=Y.Observable=function(){function a(a){if(Y.config.longStackSupport&&fa){try{throw new Error}catch(b){this.stack=b.stack.substring(b.stack.indexOf("\n")+1)}var d=this;this._subscribe=function(b){var e=b.onError.bind(b);return b.onError=function(a){c(a,d),e(a)},a.call(d,b)}}else this._subscribe=a}return Jb=a.prototype,Jb.subscribe=Jb.forEach=function(a,b,c){return this._subscribe("object"==typeof a?a:Ib(a,b,c))},Jb.subscribeOnNext=function(a,b){return this._subscribe(Ib("undefined"!=typeof b?function(c){a.call(b,c)}:a))},Jb.subscribeOnError=function(a,b){return this._subscribe(Ib(null,"undefined"!=typeof b?function(c){a.call(b,c)}:a))},Jb.subscribeOnCompleted=function(a,b){return this._subscribe(Ib(null,null,"undefined"!=typeof b?function(){a.call(b)}:a))},a}(),Qb=Y.ObservableBase=function(a){function b(a){return a&&ea(a.dispose)?a:ea(a)?gb(a):hb}function c(a,c){var d=c[0],e=c[1],f=p(e.subscribeCore).call(e,d);return f!==$a||d.fail($a.e)?void d.setDisposable(b(f)):q($a.e)}function d(a){var b=new wc(a),d=[b,this];return ub.scheduleRequired()?ub.scheduleWithState(d,c):c(null,d),b}function e(){a.call(this,d)}return Xa(e,a),e.prototype.subscribeCore=pa,e}(Pb);Jb.observeOn=function(a){var b=this;return new vc(function(c){return b.subscribe(new Ob(a,c))},b)},Jb.subscribeOn=function(a){var b=this;return new vc(function(c){var d=new kb,e=new lb;return e.setDisposable(d),d.setDisposable(a.schedule(function(){e.setDisposable(new t(a,b.subscribe(c)))})),e},b)};var Rb=Pb.fromPromise=function(a){return Tb(function(){var b=new Y.AsyncSubject;return a.then(function(a){b.onNext(a),b.onCompleted()},b.onError.bind(b)),b})};Jb.toPromise=function(a){if(a||(a=Y.config.Promise),!a)throw new na("Promise type not provided nor in Rx.config.Promise");var b=this;return new a(function(a,c){var d,e=!1;b.subscribe(function(a){d=a,e=!0},c,function(){e&&a(d)})})};var Sb=function(a){
function b(b){this.source=b,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new v(a))},b}(Qb);v.prototype.onNext=function(a){this.isStopped||this.a.push(a)},v.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.observer.onError(a))},v.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.observer.onNext(this.a),this.observer.onCompleted())},v.prototype.dispose=function(){this.isStopped=!0},v.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.observer.onError(a),!0)},Jb.toArray=function(){return new Sb(this)},Pb.create=Pb.createWithDisposable=function(a,b){return new vc(a,b)};var Tb=Pb.defer=function(a){return new vc(function(b){var c;try{c=a()}catch(d){return ic(d).subscribe(b)}return da(c)&&(c=Rb(c)),c.subscribe(b)})},Ub=function(a){function b(b){this.scheduler=b,a.call(this)}function c(a,b){this.observer=a,this.parent=b}function d(a,b){b.onCompleted()}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new c(a,this);return b.run()},c.prototype.run=function(){return this.parent.scheduler.scheduleWithState(this.observer,d)},b}(Qb),Vb=Pb.empty=function(a){return qb(a)||(a=tb),new Ub(a)},Wb=function(a){function b(b,c,d){this.iterable=b,this.mapper=c,this.scheduler=d,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new Xb(a,this);return b.run()},b}(Qb),Xb=function(){function a(a,b){this.observer=a,this.parent=b}return a.prototype.run=function(){function a(a,b){try{var f=c.next()}catch(g){return d.onError(g)}if(f.done)return d.onCompleted();var h=f.value;if(e)try{h=e(h,a)}catch(g){return d.onError(g)}d.onNext(h),b(a+1)}var b=Object(this.parent.iterable),c=B(b),d=this.observer,e=this.parent.mapper;return this.parent.scheduler.scheduleRecursiveWithState(0,a)},a}(),Yb=Math.pow(2,53)-1;w.prototype[ra]=function(){return new x(this._s)},x.prototype[ra]=function(){return this},x.prototype.next=function(){return this._i<this._l?{done:!1,value:this._s.charAt(this._i++)}:sa},y.prototype[ra]=function(){return new z(this._a)},z.prototype[ra]=function(){return this},z.prototype.next=function(){return this._i<this._l?{done:!1,value:this._a[this._i++]}:sa};var Zb=Pb.from=function(a,b,c,d){if(null==a)throw new Error("iterable cannot be null.");if(b&&!ea(b))throw new Error("mapFn when provided must be a function");if(b)var e=wa(b,c,2);return qb(d)||(d=ub),new Wb(a,e,d)},$b=function(a){function b(b,c){this.args=b,this.scheduler=c,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new E(a,this);return b.run()},b}(Qb);E.prototype.run=function(){function a(a,e){d>a?(b.onNext(c[a]),e(a+1)):b.onCompleted()}var b=this.observer,c=this.parent.args,d=c.length;return this.parent.scheduler.scheduleRecursiveWithState(0,a)};var _b=Pb.fromArray=function(a,b){return qb(b)||(b=ub),new $b(a,b)};Pb.generate=function(a,b,c,d,e){return qb(e)||(e=ub),new vc(function(f){var g=!0;return e.scheduleRecursiveWithState(a,function(a,e){var h,i;try{g?g=!1:a=c(a),h=b(a),h&&(i=d(a))}catch(j){return f.onError(j)}h?(f.onNext(i),e(a)):f.onCompleted()})})};var ac=function(a){function b(){a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(){return hb},b}(Qb),bc=Pb.never=function(){return new ac};Pb.of=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return new $b(b,ub)},Pb.ofWithScheduler=function(a){for(var b=arguments.length,c=new Array(b-1),d=1;b>d;d++)c[d-1]=arguments[d];return new $b(c,a)};var cc=function(a){function b(b,c){this.obj=b,this.keys=Object.keys(b),this.scheduler=c,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new G(a,this);return b.run()},b}(Qb);G.prototype.run=function(){function a(a,f){if(e>a){var g=d[a];b.onNext([g,c[g]]),f(a+1)}else b.onCompleted()}var b=this.observer,c=this.parent.obj,d=this.parent.keys,e=d.length;return this.parent.scheduler.scheduleRecursiveWithState(0,a)},Pb.pairs=function(a,b){return b||(b=ub),new cc(a,b)};var dc=function(a){function b(b,c,d){this.start=b,this.count=c,this.scheduler=d,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new ec(a,this);return b.run()},b}(Qb),ec=function(){function a(a,b){this.observer=a,this.parent=b}return a.prototype.run=function(){function a(a,e){c>a?(d.onNext(b+a),e(a+1)):d.onCompleted()}var b=this.parent.start,c=this.parent.count,d=this.observer;return this.parent.scheduler.scheduleRecursiveWithState(0,a)},a}();Pb.range=function(a,b,c){return qb(c)||(c=ub),new dc(a,b,c)};var fc=function(a){function b(b,c,d){this.value=b,this.repeatCount=null==c?-1:c,this.scheduler=d,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new H(a,this);return b.run()},b}(Qb);H.prototype.run=function(){function a(a,d){return(-1===a||a>0)&&(b.onNext(c),a>0&&a--),0===a?b.onCompleted():void d(a)}var b=this.observer,c=this.parent.value;return this.parent.scheduler.scheduleRecursiveWithState(this.parent.repeatCount,a)},Pb.repeat=function(a,b,c){return qb(c)||(c=ub),new fc(a,b,c)};var gc=function(a){function b(b,c){this.value=b,this.scheduler=c,a.call(this)}function c(a,b){this.observer=a,this.parent=b}function d(a,b){var c=b[0],d=b[1];d.onNext(c),d.onCompleted()}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new c(a,this);return b.run()},c.prototype.run=function(){return this.parent.scheduler.scheduleWithState([this.parent.value,this.observer],d)},b}(Qb),hc=(Pb["return"]=Pb.just=Pb.returnValue=function(a,b){return qb(b)||(b=tb),new gc(a,b)},function(a){function b(b,c){this.error=b,this.scheduler=c,a.call(this)}function c(a,b){this.observer=a,this.parent=b}function d(a,b){var c=b[0],d=b[1];d.onError(c)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new c(a,this);return b.run()},c.prototype.run=function(){return this.parent.scheduler.scheduleWithState([this.parent.error,this.observer],d)},b}(Qb)),ic=Pb["throw"]=Pb.throwError=Pb.throwException=function(a,b){return qb(b)||(b=tb),new hc(a,b)};Pb.using=function(a,b){return new vc(function(c){var d,e,f=hb;try{d=a(),d&&(f=d),e=b(d)}catch(g){return new db(ic(g).subscribe(c),f)}return new db(e.subscribe(c),f)})},Jb.amb=function(a){var b=this;return new vc(function(c){function d(){f||(f=g,j.dispose())}function e(){f||(f=h,i.dispose())}var f,g="L",h="R",i=new kb,j=new kb;return da(a)&&(a=Rb(a)),i.setDisposable(b.subscribe(function(a){d(),f===g&&c.onNext(a)},function(a){d(),f===g&&c.onError(a)},function(){d(),f===g&&c.onCompleted()})),j.setDisposable(a.subscribe(function(a){e(),f===h&&c.onNext(a)},function(a){e(),f===h&&c.onError(a)},function(){e(),f===h&&c.onCompleted()})),new db(i,j)})},Pb.amb=function(){function a(a,b){return a.amb(b)}var b=bc(),c=[];if(Array.isArray(arguments[0]))c=arguments[0];else for(var d=0,e=arguments.length;e>d;d++)c.push(arguments[d]);for(var d=0,e=c.length;e>d;d++)b=a(b,c[d]);return b},Jb["catch"]=Jb.catchError=Jb.catchException=function(a){return"function"==typeof a?I(this,a):jc([this,a])};var jc=Pb.catchError=Pb["catch"]=Pb.catchException=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else for(var b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return Gb(a).catchError()};Jb.combineLatest=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return Array.isArray(b[0])?b[0].unshift(this):b.unshift(this),kc.apply(this,b)};var kc=Pb.combineLatest=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=b.pop();return Array.isArray(b[0])&&(b=b[0]),new vc(function(a){function c(b){if(h[b]=!0,i||(i=h.every($))){try{var c=d.apply(null,k)}catch(e){return a.onError(e)}a.onNext(c)}else j.filter(function(a,c){return c!==b}).every($)&&a.onCompleted()}function e(b){j[b]=!0,j.every($)&&a.onCompleted()}for(var f=b.length,g=function(){return!1},h=n(f,g),i=!1,j=n(f,g),k=new Array(f),l=new Array(f),m=0;f>m;m++)!function(d){var f=b[d],g=new kb;da(f)&&(f=Rb(f)),g.setDisposable(f.subscribe(function(a){k[d]=a,c(d)},function(b){a.onError(b)},function(){e(d)})),l[d]=g}(m);return new db(l)},this)};Jb.concat=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return a.unshift(this),lc.apply(null,a)};var lc=Pb.concat=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(arguments.length);for(var b=0,c=arguments.length;c>b;b++)a[b]=arguments[b]}return Gb(a).concat()};Jb.concatAll=Jb.concatObservable=function(){return this.merge(1)};var mc=function(a){function b(b,c){this.source=b,this.maxConcurrent=c,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new db;return b.add(this.source.subscribe(new nc(a,this.maxConcurrent,b))),b},b}(Qb),nc=function(){function a(a,b,c){this.o=a,this.max=b,this.g=c,this.done=!1,this.q=[],this.activeCount=0,this.isStopped=!1}function b(a,b){this.parent=a,this.sad=b,this.isStopped=!1}return a.prototype.handleSubscribe=function(a){var c=new kb;this.g.add(c),da(a)&&(a=Rb(a)),c.setDisposable(a.subscribe(new b(this,c)))},a.prototype.onNext=function(a){this.isStopped||(this.activeCount<this.max?(this.activeCount++,this.handleSubscribe(a)):this.q.push(a))},a.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},a.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.done=!0,0===this.activeCount&&this.o.onCompleted())},a.prototype.dispose=function(){this.isStopped=!0},a.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.o.onError(a),!0)},b.prototype.onNext=function(a){this.isStopped||this.parent.o.onNext(a)},b.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.parent.o.onError(a))},b.prototype.onCompleted=function(){if(!this.isStopped){this.isStopped=!0;var a=this.parent;a.g.remove(this.sad),a.q.length>0?a.handleSubscribe(a.q.shift()):(a.activeCount--,a.done&&0===a.activeCount&&a.o.onCompleted())}},b.prototype.dispose=function(){this.isStopped=!0},b.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.parent.o.onError(a),!0)},a}();Jb.merge=function(a){return"number"!=typeof a?oc(this,a):new mc(this,a)};var oc=Pb.merge=function(){var a,b,c=[],d=arguments.length;if(arguments[0])if(qb(arguments[0]))for(a=arguments[0],b=1;d>b;b++)c.push(arguments[b]);else for(a=tb,b=0;d>b;b++)c.push(arguments[b]);else for(a=tb,b=1;d>b;b++)c.push(arguments[b]);return Array.isArray(c[0])&&(c=c[0]),F(a,c).mergeAll()},pc=function(a){function b(b){this.source=b,a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){var b=new db,c=new kb;return b.add(c),c.setDisposable(this.source.subscribe(new qc(a,b))),b},b}(Qb),qc=function(){function a(a,b){this.o=a,this.g=b,this.isStopped=!1,this.done=!1}function b(a,b,c){this.parent=a,this.g=b,this.sad=c,this.isStopped=!1}return a.prototype.onNext=function(a){if(!this.isStopped){var c=new kb;this.g.add(c),da(a)&&(a=Rb(a)),c.setDisposable(a.subscribe(new b(this,this.g,c)))}},a.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},a.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.done=!0,1===this.g.length&&this.o.onCompleted())},a.prototype.dispose=function(){this.isStopped=!0},a.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.o.onError(a),!0)},b.prototype.onNext=function(a){this.isStopped||this.parent.o.onNext(a)},b.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.parent.o.onError(a))},b.prototype.onCompleted=function(){if(!this.isStopped){var a=this.parent;this.isStopped=!0,a.g.remove(this.sad),a.done&&1===a.g.length&&a.o.onCompleted()}},b.prototype.dispose=function(){this.isStopped=!0},b.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.parent.o.onError(a),!0)},a}();Jb.mergeAll=Jb.mergeObservable=function(){return new pc(this)};var rc=Y.CompositeError=function(a){this.name="NotImplementedError",this.innerErrors=a,this.message="This contains multiple errors. Check the innerErrors",Error.call(this)};rc.prototype=Error.prototype,Pb.mergeDelayError=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}var d=F(null,a);return new vc(function(a){function b(){0===g.length?a.onCompleted():a.onError(1===g.length?g[0]:new rc(g))}var c=new db,e=new kb,f=!1,g=[];return c.add(e),e.setDisposable(d.subscribe(function(d){var e=new kb;c.add(e),da(d)&&(d=Rb(d)),e.setDisposable(d.subscribe(function(b){a.onNext(b)},function(a){g.push(a),c.remove(e),f&&1===c.length&&b()},function(){c.remove(e),f&&1===c.length&&b()}))},function(a){g.push(a),f=!0,1===c.length&&b()},function(){f=!0,1===c.length&&b()})),c})},Jb.onErrorResumeNext=function(a){if(!a)throw new Error("Second observable is required");return sc([this,a])};var sc=Pb.onErrorResumeNext=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else for(var b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return new vc(function(b){var c=0,d=new lb,e=tb.scheduleRecursive(function(e){var f,g;c<a.length?(f=a[c++],da(f)&&(f=Rb(f)),g=new kb,d.setDisposable(g),g.setDisposable(f.subscribe(b.onNext.bind(b),e,e))):b.onCompleted()});return new db(d,e)})};Jb.skipUntil=function(a){var b=this;return new vc(function(c){var d=!1,e=new db(b.subscribe(function(a){d&&c.onNext(a)},function(a){c.onError(a)},function(){d&&c.onCompleted()}));da(a)&&(a=Rb(a));var f=new kb;return e.add(f),f.setDisposable(a.subscribe(function(){d=!0,f.dispose()},function(a){c.onError(a)},function(){f.dispose()})),e},b)},Jb["switch"]=Jb.switchLatest=function(){var a=this;return new vc(function(b){var c=!1,d=new lb,e=!1,f=0,g=a.subscribe(function(a){var g=new kb,h=++f;c=!0,d.setDisposable(g),da(a)&&(a=Rb(a)),g.setDisposable(a.subscribe(function(a){f===h&&b.onNext(a)},function(a){f===h&&b.onError(a)},function(){f===h&&(c=!1,e&&b.onCompleted())}))},function(a){b.onError(a)},function(){e=!0,!c&&b.onCompleted()});return new db(g,d)},a)},Jb.takeUntil=function(a){var b=this;return new vc(function(c){return da(a)&&(a=Rb(a)),new db(b.subscribe(c),a.subscribe(function(){c.onCompleted()},function(a){c.onError(a)},Z))},b)},Jb.withLatestFrom=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=b.pop(),e=this;if("undefined"==typeof e)throw new Error("Source observable not found for withLatestFrom().");if("function"!=typeof d)throw new Error("withLatestFrom() expects a resultSelector function.");return Array.isArray(b[0])&&(b=b[0]),new vc(function(a){for(var c=function(){return!1},f=b.length,g=n(f,c),h=!1,i=new Array(f),j=new Array(f+1),k=0;f>k;k++)!function(c){var d=b[c],e=new kb;da(d)&&(d=Rb(d)),e.setDisposable(d.subscribe(function(a){i[c]=a,g[c]=!0,h=g.every($)},a.onError.bind(a),function(){})),j[c]=e}(k);var l=new kb;return l.setDisposable(e.subscribe(function(b){var c,e=[b].concat(i);if(h){try{c=d.apply(null,e)}catch(f){return void a.onError(f)}a.onNext(c)}},a.onError.bind(a),function(){a.onCompleted()})),j[f]=l,new db(j)},this)},Jb.zip=function(){if(Array.isArray(arguments[0]))return J.apply(this,arguments);for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=this,e=b.pop();return b.unshift(d),new vc(function(a){function c(b){var c,f;if(h.every(function(a){return a.length>0})){try{f=h.map(function(a){return a.shift()}),c=e.apply(d,f)}catch(g){return void a.onError(g)}a.onNext(c)}else i.filter(function(a,c){return c!==b}).every($)&&a.onCompleted()}function f(b){i[b]=!0,i.every(function(a){return a})&&a.onCompleted()}for(var g=b.length,h=n(g,L),i=n(g,K),j=new Array(g),k=0;g>k;k++)!function(d){var e=b[d],g=new kb;da(e)&&(e=Rb(e)),g.setDisposable(e.subscribe(function(a){h[d].push(a),c(d)},function(b){a.onError(b)},function(){f(d)})),j[d]=g}(k);return new db(j)},d)},Pb.zip=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=b.shift();return d.zip.apply(d,b)},Pb.zipArray=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new vc(function(b){function c(a){if(f.every(function(a){return a.length>0})){var c=f.map(function(a){return a.shift()});b.onNext(c)}else if(g.filter(function(b,c){return c!==a}).every($))return void b.onCompleted()}function d(a){return g[a]=!0,g.every($)?void b.onCompleted():void 0}for(var e=a.length,f=n(e,function(){return[]}),g=n(e,function(){return!1}),h=new Array(e),i=0;e>i;i++)!function(e){h[e]=new kb,h[e].setDisposable(a[e].subscribe(function(a){f[e].push(a),c(e)},function(a){b.onError(a)},function(){d(e)}))}(i);return new db(h)})},Jb.asObservable=function(){var a=this;return new vc(function(b){return a.subscribe(b)},this)},Jb.bufferWithCount=function(a,b){return"number"!=typeof b&&(b=a),this.windowWithCount(a,b).selectMany(function(a){return a.toArray()}).where(function(a){return a.length>0})},Jb.dematerialize=function(){var a=this;return new vc(function(b){return a.subscribe(function(a){return a.accept(b)},function(a){b.onError(a)},function(){b.onCompleted()})},this)},Jb.distinctUntilChanged=function(a,b){var c=this;return b||(b=aa),new vc(function(d){var e,f=!1;return c.subscribe(function(c){var g=c;if(a)try{g=a(c)}catch(h){return void d.onError(h)}if(f)try{var i=b(e,g)}catch(h){return void d.onError(h)}f&&i||(f=!0,e=g,d.onNext(c))},function(a){d.onError(a)},function(){d.onCompleted()})},this)},Jb["do"]=Jb.tap=Jb.doAction=function(a,b,c){var d=this;return new vc(function(e){var f=!a||ea(a)?Ib(a||Z,b||Z,c||Z):a;return d.subscribe(function(a){try{f.onNext(a)}catch(b){e.onError(b)}e.onNext(a)},function(a){try{f.onError(a)}catch(b){e.onError(b)}e.onError(a)},function(){try{f.onCompleted()}catch(a){e.onError(a)}e.onCompleted()})},this)},Jb.doOnNext=Jb.tapOnNext=function(a,b){return this.tap("undefined"!=typeof b?function(c){a.call(b,c)}:a)},Jb.doOnError=Jb.tapOnError=function(a,b){return this.tap(Z,"undefined"!=typeof b?function(c){a.call(b,c)}:a)},Jb.doOnCompleted=Jb.tapOnCompleted=function(a,b){return this.tap(Z,null,"undefined"!=typeof b?function(){a.call(b)}:a)},Jb["finally"]=Jb.ensure=function(a){var b=this;return new vc(function(c){var d;try{d=b.subscribe(c)}catch(e){throw a(),e}return gb(function(){try{d.dispose()}catch(b){throw b}finally{a()}})},this)},Jb.finallyAction=function(a){return this.ensure(a)},Jb.ignoreElements=function(){var a=this;return new vc(function(b){return a.subscribe(Z,function(a){b.onError(a)},function(){b.onCompleted()})},a)},Jb.materialize=function(){var a=this;return new vc(function(b){return a.subscribe(function(a){b.onNext(Ab(a))},function(a){b.onNext(Bb(a)),b.onCompleted()},function(){b.onNext(Cb()),b.onCompleted()})},a)},Jb.repeat=function(a){return Fb(this,a).concat()},Jb.retry=function(a){return Fb(this,a).catchError()},Jb.retryWhen=function(a){return Fb(this).catchErrorWhen(a)},Jb.scan=function(){var a,b,c=!1,d=this;return 2===arguments.length?(c=!0,a=arguments[0],b=arguments[1]):b=arguments[0],new vc(function(e){var f,g,h;return d.subscribe(function(d){!h&&(h=!0);try{f?g=b(g,d):(g=c?b(a,d):d,f=!0)}catch(i){return void e.onError(i)}e.onNext(g)},function(a){e.onError(a)},function(){!h&&c&&e.onNext(a),e.onCompleted()})},d)},Jb.skipLast=function(a){if(0>a)throw new ma;var b=this;return new vc(function(c){var d=[];return b.subscribe(function(b){d.push(b),d.length>a&&c.onNext(d.shift())},function(a){c.onError(a)},function(){c.onCompleted()})},b)},Jb.startWith=function(){var a,b=0;arguments.length&&qb(arguments[0])?(a=arguments[0],b=1):a=tb;for(var c=[],d=b,e=arguments.length;e>d;d++)c.push(arguments[d]);return Gb([_b(c,a),this]).concat()},Jb.takeLast=function(a){if(0>a)throw new ma;var b=this;return new vc(function(c){var d=[];return b.subscribe(function(b){d.push(b),d.length>a&&d.shift()},function(a){c.onError(a)},function(){for(;d.length>0;)c.onNext(d.shift());c.onCompleted()})},b)},Jb.takeLastBuffer=function(a){var b=this;return new vc(function(c){var d=[];return b.subscribe(function(b){d.push(b),d.length>a&&d.shift()},function(a){c.onError(a)},function(){c.onNext(d),c.onCompleted()})},b)},Jb.windowWithCount=function(a,b){var c=this;if(+a||(a=0),Math.abs(a)===1/0&&(a=0),0>=a)throw new ma;if(null==b&&(b=a),+b||(b=0),Math.abs(b)===1/0&&(b=0),0>=b)throw new ma;return new vc(function(d){function e(){var a=new yc;i.push(a),d.onNext(Za(a,g))}var f=new kb,g=new mb(f),h=0,i=[];return e(),f.setDisposable(c.subscribe(function(c){for(var d=0,f=i.length;f>d;d++)i[d].onNext(c);var g=h-a+1;g>=0&&g%b===0&&i.shift().onCompleted(),++h%b===0&&e()},function(a){for(;i.length>0;)i.shift().onError(a);d.onError(a)},function(){for(;i.length>0;)i.shift().onCompleted();d.onCompleted()})),g},c)},Jb.selectConcat=Jb.concatMap=function(a,b,c){return ea(a)&&ea(b)?this.concatMap(function(c,d){var e=a(c,d);return da(e)&&(e=Rb(e)),(ua(e)||ta(e))&&(e=Zb(e)),e.map(function(a,e){return b(c,a,d,e)})}):ea(a)?M(this,a,c):M(this,function(){return a})},Jb.concatMapObserver=Jb.selectConcatObserver=function(a,b,c,d){var e=this,f=wa(a,d,2),g=wa(b,d,1),h=wa(c,d,0);return new vc(function(a){var b=0;return e.subscribe(function(c){var d;try{d=f(c,b++)}catch(e){return void a.onError(e)}da(d)&&(d=Rb(d)),a.onNext(d)},function(b){var c;try{c=g(b)}catch(d){return void a.onError(d)}da(c)&&(c=Rb(c)),a.onNext(c),a.onCompleted()},function(){var b;try{b=h()}catch(c){return void a.onError(c)}da(b)&&(b=Rb(b)),a.onNext(b),a.onCompleted()})},this).concatAll()},Jb.defaultIfEmpty=function(b){var c=this;return b===a&&(b=null),new vc(function(a){var d=!1;return c.subscribe(function(b){d=!0,a.onNext(b)},function(b){a.onError(b)},function(){!d&&a.onNext(b),a.onCompleted()})},c)},O.prototype.push=function(a){var b=-1===N(this.set,a,this.comparer);return b&&this.set.push(a),b},Jb.distinct=function(a,b){var c=this;return b||(b=aa),new vc(function(d){var e=new O(b);return c.subscribe(function(b){var c=b;if(a)try{c=a(b)}catch(f){return void d.onError(f)}e.push(c)&&d.onNext(b)},function(a){d.onError(a)},function(){d.onCompleted()})},this)};var tc=function(a){function b(b,c,d){this.source=b,this.selector=wa(c,d,3),a.call(this)}return Xa(b,a),b.prototype.internalMap=function(a,c){var d=this;return new b(this.source,function(b,c,e){return a.call(this,d.selector(b,c,e),c,e)},c)},b.prototype.subscribeCore=function(a){return this.source.subscribe(new P(a,this.selector,this))},b}(Qb);P.prototype.onNext=function(a){if(!this.isStopped){var b=p(this.selector).call(this,a,this.i++,this.source);return b===$a?this.observer.onError(b.e):void this.observer.onNext(b)}},P.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.observer.onError(a))},P.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.observer.onCompleted())},P.prototype.dispose=function(){this.isStopped=!0},P.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.observer.onError(a),!0)},Jb.map=Jb.select=function(a,b){var c="function"==typeof a?a:function(){return a};return this instanceof tc?this.internalMap(c,b):new tc(this,c,b)},Jb.pluck=function(){var b=arguments,c=arguments.length;if(0===c)throw new Error("List of properties cannot be empty.");return this.map(function(d){for(var e=d,f=0;c>f;f++){var g=e[b[f]];if("undefined"==typeof g)return a;e=g}return e})},Jb.selectMany=Jb.flatMap=function(a,b,c){return ea(a)&&ea(b)?this.flatMap(function(c,d){var e=a(c,d);return da(e)&&(e=Rb(e)),(ua(e)||ta(e))&&(e=Zb(e)),e.map(function(a,e){return b(c,a,d,e)})},c):ea(a)?Q(this,a,c):Q(this,function(){return a})},Jb.flatMapObserver=Jb.selectManyObserver=function(a,b,c,d){var e=this;return new vc(function(f){var g=0;return e.subscribe(function(b){var c;try{c=a.call(d,b,g++)}catch(e){return void f.onError(e)}da(c)&&(c=Rb(c)),f.onNext(c)},function(a){var c;try{c=b.call(d,a)}catch(e){return void f.onError(e)}da(c)&&(c=Rb(c)),f.onNext(c),f.onCompleted()},function(){var a;try{a=c.call(d)}catch(b){return void f.onError(b)}da(a)&&(a=Rb(a)),f.onNext(a),f.onCompleted()})},e).mergeAll()},Jb.selectSwitch=Jb.flatMapLatest=Jb.switchMap=function(a,b){return this.select(a,b).switchLatest()},Jb.skip=function(a){if(0>a)throw new ma;var b=this;return new vc(function(c){var d=a;return b.subscribe(function(a){0>=d?c.onNext(a):d--},function(a){c.onError(a)},function(){c.onCompleted()})},b)},Jb.skipWhile=function(a,b){var c=this,d=wa(a,b,3);return new vc(function(a){var b=0,e=!1;return c.subscribe(function(f){if(!e)try{e=!d(f,b++,c)}catch(g){return void a.onError(g)}e&&a.onNext(f)},function(b){a.onError(b)},function(){a.onCompleted()})},c)},Jb.take=function(a,b){if(0>a)throw new ma;if(0===a)return Vb(b);var c=this;return new vc(function(b){var d=a;return c.subscribe(function(a){d-->0&&(b.onNext(a),0===d&&b.onCompleted())},function(a){b.onError(a)},function(){b.onCompleted()})},c)},Jb.takeWhile=function(a,b){var c=this,d=wa(a,b,3);return new vc(function(a){var b=0,e=!0;return c.subscribe(function(f){if(e){try{e=d(f,b++,c)}catch(g){return void a.onError(g)}e?a.onNext(f):a.onCompleted()}},function(b){a.onError(b)},function(){a.onCompleted()})},c)};var uc=function(a){function b(b,c,d){this.source=b,this.predicate=wa(c,d,3),a.call(this)}return Xa(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new R(a,this.predicate,this))},b.prototype.internalFilter=function(a,c){var d=this;return new b(this.source,function(b,c,e){return d.predicate(b,c,e)&&a.call(this,b,c,e)},c)},b}(Qb);R.prototype.onNext=function(a){if(!this.isStopped){var b=p(this.predicate).call(this,a,this.i++,this.source);return b===$a?this.observer.onError(b.e):void(b&&this.observer.onNext(a))}},R.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.observer.onError(a))},R.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.observer.onCompleted())},R.prototype.dispose=function(){this.isStopped=!0},R.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.observer.onError(a),!0)},Jb.filter=Jb.where=function(a,b){return this instanceof uc?this.internalFilter(a,b):new uc(this,a,b)},Jb.transduce=function(a){function b(a){return{"@@transducer/init":function(){return a},"@@transducer/step":function(a,b){return a.onNext(b)},"@@transducer/result":function(a){return a.onCompleted()}}}var c=this;return new vc(function(d){var e=a(b(d));return c.subscribe(function(a){try{e["@@transducer/step"](d,a)}catch(b){d.onError(b)}},function(a){d.onError(a)},function(){e["@@transducer/result"](d)})},c)};var vc=Y.AnonymousObservable=function(a){function b(a){return a&&ea(a.dispose)?a:ea(a)?gb(a):hb}function c(a,c){var d=c[0],e=c[1],f=p(e)(d);return f!==$a||d.fail($a.e)?void d.setDisposable(b(f)):q($a.e)}function d(b,d){function e(a){var d=new wc(a),e=[d,b];return ub.scheduleRequired()?ub.scheduleWithState(e,c):c(null,e),d}this.source=d,a.call(this,e)}return Xa(d,a),d}(Pb),wc=function(a){function b(b){a.call(this),this.observer=b,this.m=new kb}Xa(b,a);var c=b.prototype;return c.next=function(a){var b=p(this.observer.onNext).call(this.observer,a);b===$a&&(this.dispose(),q(b.e))},c.error=function(a){var b=p(this.observer.onError).call(this.observer,a);this.dispose(),b===$a&&q(b.e)},c.completed=function(){var a=p(this.observer.onCompleted).call(this.observer);this.dispose(),a===$a&&q(a.e)},c.setDisposable=function(a){this.m.setDisposable(a)},c.getDisposable=function(){return this.m.getDisposable()},c.dispose=function(){a.prototype.dispose.call(this),this.m.dispose()},b}(Kb),xc=function(a,b){this.subject=a,this.observer=b};xc.prototype.dispose=function(){if(!this.subject.isDisposed&&null!==this.observer){var a=this.subject.observers.indexOf(this.observer);this.subject.observers.splice(a,1),this.observer=null}};var yc=Y.Subject=function(a){function c(a){return jb(this),this.isStopped?this.hasError?(a.onError(this.error),hb):(a.onCompleted(),hb):(this.observers.push(a),new xc(this,a))}function d(){a.call(this,c),this.isDisposed=!1,this.isStopped=!1,this.observers=[],this.hasError=!1}return Xa(d,a),Ya(d.prototype,Hb.prototype,{hasObservers:function(){return this.observers.length>0},onCompleted:function(){if(jb(this),!this.isStopped){this.isStopped=!0;for(var a=0,c=b(this.observers),d=c.length;d>a;a++)c[a].onCompleted();this.observers.length=0}},onError:function(a){if(jb(this),!this.isStopped){this.isStopped=!0,this.error=a,this.hasError=!0;for(var c=0,d=b(this.observers),e=d.length;e>c;c++)d[c].onError(a);this.observers.length=0}},onNext:function(a){if(jb(this),!this.isStopped)for(var c=0,d=b(this.observers),e=d.length;e>c;c++)d[c].onNext(a)},dispose:function(){this.isDisposed=!0,this.observers=null}}),d.create=function(a,b){return new zc(a,b)},d}(Pb),zc=(Y.AsyncSubject=function(a){function c(a){return jb(this),this.isStopped?(this.hasError?a.onError(this.error):this.hasValue?(a.onNext(this.value),a.onCompleted()):a.onCompleted(),hb):(this.observers.push(a),new xc(this,a))}function d(){a.call(this,c),this.isDisposed=!1,this.isStopped=!1,this.hasValue=!1,this.observers=[],this.hasError=!1}return Xa(d,a),Ya(d.prototype,Hb,{hasObservers:function(){return jb(this),this.observers.length>0},onCompleted:function(){var a,c;if(jb(this),!this.isStopped){this.isStopped=!0;var d=b(this.observers),c=d.length;if(this.hasValue)for(a=0;c>a;a++){var e=d[a];e.onNext(this.value),e.onCompleted()}else for(a=0;c>a;a++)d[a].onCompleted();this.observers.length=0}},onError:function(a){if(jb(this),!this.isStopped){this.isStopped=!0,this.hasError=!0,this.error=a;for(var c=0,d=b(this.observers),e=d.length;e>c;c++)d[c].onError(a);this.observers.length=0}},onNext:function(a){jb(this),this.isStopped||(this.value=a,this.hasValue=!0)},dispose:function(){this.isDisposed=!0,this.observers=null,this.exception=null,this.value=null}}),d}(Pb),Y.AnonymousSubject=function(a){function b(a){return this.observable.subscribe(a)}function c(c,d){this.observer=c,this.observable=d,a.call(this,b)}return Xa(c,a),Ya(c.prototype,Hb.prototype,{onCompleted:function(){this.observer.onCompleted()},onError:function(a){this.observer.onError(a)},onNext:function(a){this.observer.onNext(a)}}),c}(Pb));"function"==typeof define&&"object"==typeof define.amd&&define.amd?(T.Rx=Y,define(function(){return Y})):U&&V?W?(V.exports=Y).Rx=Y:U.Rx=Y:T.Rx=Y;var Ac=g()}).call(this);
//# sourceMappingURL=rx.compat.map
/* Copyright (c) Microsoft Open Technologies, Inc. All rights reserved. See License.txt in the project root for license information.*/
(function(a){var b={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},c=b[typeof window]&&window||this,d=b[typeof exports]&&exports&&!exports.nodeType&&exports,e=b[typeof module]&&module&&!module.nodeType&&module,f=(e&&e.exports===d&&d,b[typeof global]&&global);!f||f.global!==f&&f.window!==f||(c=f),"function"==typeof define&&define.amd?define(["rx"],function(b,d){return a(c,d,b)}):"object"==typeof module&&module&&module.exports===d?module.exports=a(c,module.exports,require("./rx")):c.Rx=a(c,{},c.Rx)}).call(this,function(a,b,c,d){function e(a){for(var b=a.length,c=new Array(b),d=0;b>d;d++)c[d]=a[d];return c}var f=c.Observable,g=f.prototype,h=c.AnonymousObservable,i=c.Subject,j=c.AsyncSubject,k=c.Observer,l=c.internals.ScheduledObserver,m=c.Disposable.create,n=c.Disposable.empty,o=c.CompositeDisposable,p=c.Scheduler.currentThread,q=c.helpers.isFunction,r=c.internals.inherits,s=c.internals.addProperties,t=c.Disposable.checkDisposed;g.multicast=function(a,b){var c=this;return"function"==typeof a?new h(function(d){var e=c.multicast(a());return new o(b(e).subscribe(d),e.connect())},c):new x(c,a)},g.publish=function(a){return a&&q(a)?this.multicast(function(){return new i},a):this.multicast(new i)},g.share=function(){return this.publish().refCount()},g.publishLast=function(a){return a&&q(a)?this.multicast(function(){return new j},a):this.multicast(new j)},g.publishValue=function(a,b){return 2===arguments.length?this.multicast(function(){return new v(b)},a):this.multicast(new v(a))},g.shareValue=function(a){return this.publishValue(a).refCount()},g.replay=function(a,b,c,d){return a&&q(a)?this.multicast(function(){return new w(b,c,d)},a):this.multicast(new w(b,c,d))},g.shareReplay=function(a,b,c){return this.replay(null,a,b,c).refCount()};var u=function(a,b){this.subject=a,this.observer=b};u.prototype.dispose=function(){if(!this.subject.isDisposed&&null!==this.observer){var a=this.subject.observers.indexOf(this.observer);this.subject.observers.splice(a,1),this.observer=null}};var v=c.BehaviorSubject=function(a){function b(a){return t(this),this.isStopped?(this.hasError?a.onError(this.error):a.onCompleted(),n):(this.observers.push(a),a.onNext(this.value),new u(this,a))}function c(c){a.call(this,b),this.value=c,this.observers=[],this.isDisposed=!1,this.isStopped=!1,this.hasError=!1}return r(c,a),s(c.prototype,k,{getValue:function(){if(t(this),this.hasError)throw this.error;return this.value},hasObservers:function(){return this.observers.length>0},onCompleted:function(){if(t(this),!this.isStopped){this.isStopped=!0;for(var a=0,b=e(this.observers),c=b.length;c>a;a++)b[a].onCompleted();this.observers.length=0}},onError:function(a){if(t(this),!this.isStopped){this.isStopped=!0,this.hasError=!0,this.error=a;for(var b=0,c=e(this.observers),d=c.length;d>b;b++)c[b].onError(a);this.observers.length=0}},onNext:function(a){if(t(this),!this.isStopped){this.value=a;for(var b=0,c=e(this.observers),d=c.length;d>b;b++)c[b].onNext(a)}},dispose:function(){this.isDisposed=!0,this.observers=null,this.value=null,this.exception=null}}),c}(f),w=c.ReplaySubject=function(a){function b(a,b){return m(function(){b.dispose(),!a.isDisposed&&a.observers.splice(a.observers.indexOf(b),1)})}function c(a){var c=new l(this.scheduler,a),d=b(this,c);t(this),this._trim(this.scheduler.now()),this.observers.push(c);for(var e=0,f=this.q.length;f>e;e++)c.onNext(this.q[e].value);return this.hasError?c.onError(this.error):this.isStopped&&c.onCompleted(),c.ensureActive(),d}function d(b,d,e){this.bufferSize=null==b?f:b,this.windowSize=null==d?f:d,this.scheduler=e||p,this.q=[],this.observers=[],this.isStopped=!1,this.isDisposed=!1,this.hasError=!1,this.error=null,a.call(this,c)}var f=Math.pow(2,53)-1;return r(d,a),s(d.prototype,k.prototype,{hasObservers:function(){return this.observers.length>0},_trim:function(a){for(;this.q.length>this.bufferSize;)this.q.shift();for(;this.q.length>0&&a-this.q[0].interval>this.windowSize;)this.q.shift()},onNext:function(a){if(t(this),!this.isStopped){var b=this.scheduler.now();this.q.push({interval:b,value:a}),this._trim(b);for(var c=0,d=e(this.observers),f=d.length;f>c;c++){var g=d[c];g.onNext(a),g.ensureActive()}}},onError:function(a){if(t(this),!this.isStopped){this.isStopped=!0,this.error=a,this.hasError=!0;var b=this.scheduler.now();this._trim(b);for(var c=0,d=e(this.observers),f=d.length;f>c;c++){var g=d[c];g.onError(a),g.ensureActive()}this.observers.length=0}},onCompleted:function(){if(t(this),!this.isStopped){this.isStopped=!0;var a=this.scheduler.now();this._trim(a);for(var b=0,c=e(this.observers),d=c.length;d>b;b++){var f=c[b];f.onCompleted(),f.ensureActive()}this.observers.length=0}},dispose:function(){this.isDisposed=!0,this.observers=null}}),d}(f),x=c.ConnectableObservable=function(a){function b(b,c){var d,e=!1,f=b.asObservable();this.connect=function(){return e||(e=!0,d=new o(f.subscribe(c),m(function(){e=!1}))),d},a.call(this,function(a){return c.subscribe(a)})}return r(b,a),b.prototype.refCount=function(){var a,b=0,c=this;return new h(function(d){var e=1===++b,f=c.subscribe(d);return e&&(a=c.connect()),function(){f.dispose(),0===--b&&a.dispose()}})},b}(f);return g.singleInstance=function(){function a(){return d||(d=!0,b=c["finally"](function(){d=!1}).publish().refCount()),b}var b,c=this,d=!1;return new h(function(b){return a().subscribe(b)})},c});
//# sourceMappingURL=rx.binding.map
/**
    Module P: Generic Promises for TypeScript

    Project, documentation, and license: https://github.com/pragmatrix/Promise
*/
var P;
(function (P) {
    /**
        Returns a new "Deferred" value that may be resolved or rejected.
    */
    function defer() {
        return new DeferredI();
    }
    P.defer = defer;
    /**
        Converts a value to a resolved promise.
    */
    function resolve(v) {
        return defer().resolve(v).promise();
    }
    P.resolve = resolve;
    /**
        Returns a rejected promise.
    */
    function reject(err) {
        return defer().reject(err).promise();
    }
    P.reject = reject;
    /**
        http://en.wikipedia.org/wiki/Anamorphism

        Given a seed value, unfold calls the unspool function, waits for the returned promise to be resolved, and then
        calls it again if a next seed value was returned.

        All the values of all promise results are collected into the resulting promise which is resolved as soon
        the last generated element value is resolved.
    */
    function unfold(unspool, seed) {
        var d = defer();
        var elements = new Array();
        unfoldCore(elements, d, unspool, seed);
        return d.promise();
    }
    P.unfold = unfold;
    function unfoldCore(elements, deferred, unspool, seed) {
        var result = unspool(seed);
        if (!result) {
            deferred.resolve(elements);
            return;
        }
        while (result.next && result.promise.status == 2 /* Resolved */) {
            elements.push(result.promise.result);
            result = unspool(result.next);
            if (!result) {
                deferred.resolve(elements);
                return;
            }
        }
        result.promise.done(function (v) {
            elements.push(v);
            if (!result.next)
                deferred.resolve(elements);
            else
                unfoldCore(elements, deferred, unspool, result.next);
        }).fail(function (e) {
            deferred.reject(e);
        });
    }
    /**
        The status of a Promise. Initially a Promise is Unfulfilled and may
        change to Rejected or Resolved.
     
        Once a promise is either Rejected or Resolved, it can not change its
        status anymore.
    */
    (function (Status) {
        Status[Status["Unfulfilled"] = 0] = "Unfulfilled";
        Status[Status["Rejected"] = 1] = "Rejected";
        Status[Status["Resolved"] = 2] = "Resolved";
    })(P.Status || (P.Status = {}));
    var Status = P.Status;
    /**
        Creates a promise that gets resolved when all the promises in the argument list get resolved.
        As soon one of the arguments gets rejected, the resulting promise gets rejected.
        If no promises were provided, the resulting promise is immediately resolved.
    */
    function when() {
        var promises = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            promises[_i - 0] = arguments[_i];
        }
        var allDone = defer();
        if (!promises.length) {
            allDone.resolve([]);
            return allDone.promise();
        }
        var resolved = 0;
        var results = [];
        promises.forEach(function (p, i) {
            p.done(function (v) {
                results[i] = v;
                ++resolved;
                if (resolved === promises.length && allDone.status !== 1 /* Rejected */)
                    allDone.resolve(results);
            }).fail(function (e) {
                if (allDone.status !== 1 /* Rejected */)
                    allDone.reject(new Error("when: one or more promises were rejected"));
            });
        });
        return allDone.promise();
    }
    P.when = when;
    /**
        Implementation of a promise.

        The Promise<Value> instance is a proxy to the Deferred<Value> instance.
    */
    var PromiseI = (function () {
        function PromiseI(deferred) {
            this.deferred = deferred;
        }
        Object.defineProperty(PromiseI.prototype, "status", {
            get: function () {
                return this.deferred.status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PromiseI.prototype, "result", {
            get: function () {
                return this.deferred.result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PromiseI.prototype, "error", {
            get: function () {
                return this.deferred.error;
            },
            enumerable: true,
            configurable: true
        });
        PromiseI.prototype.done = function (f) {
            this.deferred.done(f);
            return this;
        };
        PromiseI.prototype.fail = function (f) {
            this.deferred.fail(f);
            return this;
        };
        PromiseI.prototype.always = function (f) {
            this.deferred.always(f);
            return this;
        };
        PromiseI.prototype.then = function (f) {
            return this.deferred.then(f);
        };
        return PromiseI;
    })();
    /**
        Implementation of a deferred.
    */
    var DeferredI = (function () {
        function DeferredI() {
            this._resolved = function (_) {
            };
            this._rejected = function (_) {
            };
            this._status = 0 /* Unfulfilled */;
            this._error = { message: "" };
            this._promise = new PromiseI(this);
        }
        DeferredI.prototype.promise = function () {
            return this._promise;
        };
        Object.defineProperty(DeferredI.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeferredI.prototype, "result", {
            get: function () {
                if (this._status != 2 /* Resolved */)
                    throw new Error("Promise: result not available");
                return this._result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeferredI.prototype, "error", {
            get: function () {
                if (this._status != 1 /* Rejected */)
                    throw new Error("Promise: rejection reason not available");
                return this._error;
            },
            enumerable: true,
            configurable: true
        });
        DeferredI.prototype.then = function (f) {
            var d = defer();
            this.done(function (v) {
                var promiseOrValue = f(v);
                // todo: need to find another way to check if r is really of interface
                // type Promise<any>, otherwise we would not support other 
                // implementations here.
                if (promiseOrValue instanceof PromiseI) {
                    var p = promiseOrValue;
                    p.done(function (v2) { return d.resolve(v2); }).fail(function (err) { return d.reject(err); });
                    return p;
                }
                d.resolve(promiseOrValue);
            }).fail(function (err) { return d.reject(err); });
            return d.promise();
        };
        DeferredI.prototype.done = function (f) {
            if (this.status === 2 /* Resolved */) {
                f(this._result);
                return this;
            }
            if (this.status !== 0 /* Unfulfilled */)
                return this;
            var prev = this._resolved;
            this._resolved = function (v) {
                prev(v);
                f(v);
            };
            return this;
        };
        DeferredI.prototype.fail = function (f) {
            if (this.status === 1 /* Rejected */) {
                f(this._error);
                return this;
            }
            if (this.status !== 0 /* Unfulfilled */)
                return this;
            var prev = this._rejected;
            this._rejected = function (e) {
                prev(e);
                f(e);
            };
            return this;
        };
        DeferredI.prototype.always = function (f) {
            this.done(function (v) { return f(v); }).fail(function (err) { return f(null, err); });
            return this;
        };
        DeferredI.prototype.resolve = function (result) {
            if (this._status !== 0 /* Unfulfilled */)
                throw new Error("tried to resolve a fulfilled promise");
            this._result = result;
            this._status = 2 /* Resolved */;
            this._resolved(result);
            this.detach();
            return this;
        };
        DeferredI.prototype.reject = function (err) {
            if (this._status !== 0 /* Unfulfilled */)
                throw new Error("tried to reject a fulfilled promise");
            this._error = err;
            this._status = 1 /* Rejected */;
            this._rejected(err);
            this.detach();
            return this;
        };
        DeferredI.prototype.detach = function () {
            this._resolved = function (_) {
            };
            this._rejected = function (_) {
            };
        };
        return DeferredI;
    })();
    function generator(g) {
        return function () { return iterator(g()); };
    }
    P.generator = generator;
    ;
    function iterator(f) {
        return new IteratorI(f);
    }
    P.iterator = iterator;
    var IteratorI = (function () {
        function IteratorI(f) {
            this.f = f;
            this.current = undefined;
        }
        IteratorI.prototype.advance = function () {
            var _this = this;
            var res = this.f();
            return res.then(function (value) {
                if (isUndefined(value))
                    return false;
                _this.current = value;
                return true;
            });
        };
        return IteratorI;
    })();
    /**
        Iterator functions.
    */
    function each(gen, f) {
        var d = defer();
        eachCore(d, gen(), f);
        return d.promise();
    }
    P.each = each;
    function eachCore(fin, it, f) {
        it.advance().done(function (hasValue) {
            if (!hasValue) {
                fin.resolve({});
                return;
            }
            f(it.current);
            eachCore(fin, it, f);
        }).fail(function (err) { return fin.reject(err); });
    }
    /**
        std
    */
    function isUndefined(v) {
        return typeof v === 'undefined';
    }
    P.isUndefined = isUndefined;
})(P || (P = {}));
//# sourceMappingURL=Promise.js.map
var Genesis;
(function (Genesis) {
    var NonReconnectingWebSocket = /** @class */ (function () {
        function NonReconnectingWebSocket(url, port, useTLS) {
            if (useTLS === void 0) { useTLS = false; }
            var _this = this;
            this._onclose = [];
            var prefix = useTLS ? "wss" : "ws";
            if (port !== -1) {
                this.ws = new WebSocket(prefix + "://" + url + ":" + port + "/");
            }
            else {
                this.ws = new WebSocket(prefix + "://" + url + "/");
            }
            this.ws.onopen =
                function (ev) {
                    if (_this._onopen) {
                        _this._onopen(ev);
                    }
                };
            this.ws.onclose =
                function (ev) {
                    // NB: scanning the _onclose array in reverse order since the last element is the handler that performs the cleanup 
                    for (var i = _this._onclose.length - 1; i >= 0; i--) {
                        _this._onclose[i](ev);
                    }
                };
        }
        Object.defineProperty(NonReconnectingWebSocket.prototype, "onmessage", {
            /** An event listener to be called when a message is received from the server. */
            set: function (fn) {
                this.ws.onmessage = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NonReconnectingWebSocket.prototype, "onerror", {
            /** An event listener to be called when an error occurs. */
            set: function (fn) {
                this.ws.onerror = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NonReconnectingWebSocket.prototype, "readyState", {
            get: function () {
                if (!this.ws) {
                    return Genesis.ConnectivityConsts.CLOSED;
                }
                return this.ws.readyState;
            },
            enumerable: true,
            configurable: true
        });
        NonReconnectingWebSocket.prototype.send = function (message) {
            this.ws.send(message);
        };
        NonReconnectingWebSocket.prototype.close = function (code, reason) {
            this.ws.close(code, reason);
        };
        NonReconnectingWebSocket.prototype.addOnCloseEvtHandler = function (handler) {
            this._onclose.push(handler);
        };
        NonReconnectingWebSocket.prototype.setOnOpenEvtHandler = function (handler) {
            this._onopen = handler;
        };
        return NonReconnectingWebSocket;
    }());
    Genesis.NonReconnectingWebSocket = NonReconnectingWebSocket;
    /**
     * This behaves like a WebSocket in every way, except if it fails to connect,
     * or it gets disconnected, it will repeatedly poll until it successfully connects
     * again.
     *
     * It is API compatible, so when you have:
     *   ws = new WebSocket('ws://....');
     * you can replace with:
     *   ws = new ReconnectingWebSocket('ws://....');
     *
     * The event stream will typically look like:
     *  onconnecting
     *  onopen
     *  onmessage
     *  onmessage
     *  onclose // lost connection
     *  onconnecting
     *  onopen  // sometime later...
     *  onmessage
     *  onmessage
     *  etc...
     *
     * It is API compatible with the standard WebSocket API, apart from the following members:
     *
     * - `bufferedAmount`
     * - `extensions`
     * - `binaryType`
     *
     * Latest version: https://github.com/joewalnes/reconnecting-websocket/
     * - Joe Walnes
     *
     * Syntax
     * ======
     * var socket = new ReconnectingWebSocket(url, protocols, options);
     *
     * Parameters
     * ==========
     * url - The url you are connecting to.
     * protocols - Optional string or array of protocols.
     * options - See below
     *
     * Options
     * =======
     * Options can either be passed upon instantiation or set after instantiation:
     *
     * var socket = new ReconnectingWebSocket(url, null, { debug: true, reconnectInterval: 4000 });
     *
     * or
     *
     * var socket = new ReconnectingWebSocket(url);
     * socket.debug = true;
     * socket.reconnectInterval = 4000;
     *
     * debug
     * - Whether this instance should log debug messages. Accepts true or false. Default: false.
     *
     * automaticOpen [NOT SUPPORTED]
     * - Whether or not the websocket should attempt to connect immediately upon instantiation. The socket can be manually opened or closed at any time using ws.open() and ws.close().
     *
     * reconnectInterval
     * - The number of milliseconds to delay before attempting to reconnect. Accepts integer. Default: 1000.
     *
     * maxReconnectInterval
     * - The maximum number of milliseconds to delay a reconnection attempt. Accepts integer. Default: 30000.
     *
     * reconnectDecay
     * - The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. Accepts integer or float. Default: 1.5.
     *
     * timeoutInterval
     * - The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. Accepts integer. Default: 2000.
     *
     */
    var ReconnectingWebSocket = /** @class */ (function () {
        function ReconnectingWebSocket(url, port, endpoint, options, useTLS) {
            if (useTLS === void 0) { useTLS = false; }
            this.url = url;
            this.port = port;
            this.endpoint = endpoint;
            // Default settings
            this.settings = {
                /** Whether this instance should log debug messages. */
                debug: false,
                /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
                //automaticOpen: true,
                /** The number of milliseconds to delay before attempting to reconnect. */
                reconnectInterval: 1000,
                /** The maximum number of milliseconds to delay a reconnection attempt. */
                maxReconnectInterval: 30000,
                /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
                reconnectDecay: 1.5,
                /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
                timeoutInterval: 2000,
                /** The maximum number of reconnection attempts to make. Unlimited if null. */
                maxReconnectAttempts: null
            };
            this.forcedClose = false;
            this.timedOut = false;
            // These should be treated as *read-only* properties
            /** The number of attempted reconnects since starting, or the last successful connection. Read only. */
            this.reconnectAttempts = 0;
            /**
             * The current state of the connection.
             * Can be one of: ConnectivityConsts.CONNECTING, ConnectivityConsts.OPEN, ConnectivityConsts.CLOSING, ConnectivityConsts.CLOSED
             * Read only.
             */
            this._readyState = Genesis.ConnectivityConsts.CONNECTING;
            /**
             * A string indicating the name of the sub-protocol the server selected; this will be one of
             * the strings specified in the protocols parameter when creating the WebSocket object.
             * Read only.
             */
            this.protocol = null;
            this._onclose = [];
            /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
            this.url = url;
            this.prefix =
                useTLS ? "wss" : "ws";
            if (!options) {
                options = {};
            }
            // Overwrite and define settings with options if they exist.
            for (var key in options) {
                if (options.hasOwnProperty(key)) {
                    this.settings[key] = options[key];
                }
            }
            this.open(false);
        }
        Object.defineProperty(ReconnectingWebSocket.prototype, "onmessage", {
            /** An event listener to be called when a message is received from the server. */
            set: function (fn) {
                this.ws.onmessage = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ReconnectingWebSocket.prototype, "onerror", {
            /** An event listener to be called when an error occurs. */
            set: function (fn) {
                this.ws.onerror = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
            get: function () {
                if (!this.ws) {
                    return Genesis.ConnectivityConsts.CLOSED;
                }
                return this.ws.readyState;
            },
            enumerable: true,
            configurable: true
        });
        // TODO: perhaps we can move the "waitForConnection" code here.
        /**
         * Transmits data to the server over the WebSocket connection.
         *
         * @param data a text string, ArrayBuffer or Blob to send to the server.
         */
        ReconnectingWebSocket.prototype.send = function (message) {
            if (this.ws) {
                this.log("send", message);
                this.ws.send(message);
            }
            else {
                throw "INVALID_STATE_ERR : Pausing to reconnect websocket";
            }
        };
        /**
         * Closes the WebSocket connection or connection attempt, if any.
         * If the connection is already CLOSED, this method does nothing.
         */
        ReconnectingWebSocket.prototype.close = function (code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == "undefined") {
                code = 1000;
            }
            this.forcedClose = true;
            if (this.ws) {
                this.ws.close(code, reason);
            }
        };
        ReconnectingWebSocket.prototype.addOnCloseEvtHandler = function (handler) {
            this._onclose.push(handler);
        };
        ReconnectingWebSocket.prototype.setOnOpenEvtHandler = function (handler) {
            this._onopen = handler;
        };
        ReconnectingWebSocket.prototype.open = function (reconnectAttempt) {
            var _this = this;
            if (this.endpoint) {
                if (this.port !== -1) {
                    throw new Error("Specifying a port is disabled when using endpoints");
                }
                else {
                    this.ws = new WebSocket(this.prefix + "://" + this.url + "/" + this.endpoint + "/");
                }
            }
            else {
                if (this.port !== -1) {
                    this.ws = new WebSocket(this.prefix + "://" + this.url + ":" + this.port + "/");
                }
                else {
                    this.ws = new WebSocket(this.prefix + "://" + this.url + "/");
                }
            }
            if (reconnectAttempt) {
                if (this.settings.maxReconnectAttempts && this.reconnectAttempts > this.settings.maxReconnectAttempts) {
                    return;
                }
            }
            else {
                this.reconnectAttempts = 0;
            }
            this.log("attempt-connect");
            var localWs = this.ws;
            var timeout = setTimeout(function () {
                _this.log("connection-timeout");
                _this.timedOut = true;
                localWs.close();
                _this.timedOut = false;
            }, this.settings.timeoutInterval);
            this.ws.onopen =
                function (event) {
                    clearTimeout(timeout);
                    _this.log("onopen");
                    _this.protocol = _this.ws.protocol;
                    _this.readyState = Genesis.ConnectivityConsts.OPEN;
                    _this.reconnectAttempts = 0;
                    if (_this._onopen) {
                        var e = _this.generateEvent("open");
                        e.isReconnect = reconnectAttempt;
                        _this._onopen(e);
                    }
                    reconnectAttempt = false;
                };
            this.ws.onclose =
                function (event) {
                    clearTimeout(timeout);
                    _this.ws = null;
                    if (_this.forcedClose) {
                        _this.readyState = Genesis.ConnectivityConsts.CLOSED;
                        _this._raiseOnCloseEvent();
                    }
                    else {
                        _this._readyState = Genesis.ConnectivityConsts.CONNECTING;
                        if (!reconnectAttempt && !_this.timedOut) {
                            _this.log("onclose");
                            _this._raiseOnCloseEvent();
                        }
                        var timeout = _this.settings.reconnectInterval * Math.pow(_this.settings.reconnectDecay, _this.reconnectAttempts);
                        setTimeout(function () {
                            _this.reconnectAttempts++;
                            _this.open(true);
                        }, timeout > _this.settings.maxReconnectInterval ? _this.settings.maxReconnectInterval : timeout);
                    }
                    // cleanup
                    _this._onclose = [];
                };
        };
        /**
         * This function generates an event that is compatible with standard
         * compliant browsers and IE9 - IE11
         *
         * This will prevent the error:
         * Object doesn't support this action
         *
         * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
         * @param s String The name that the event should use
         * @param args Object an optional object that the event will use
         */
        ReconnectingWebSocket.prototype.generateEvent = function (s, args) {
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(s, false, false, args);
            return evt;
        };
        ReconnectingWebSocket.prototype.log = function (msg, params) {
            if (this.settings.debug || ReconnectingWebSocket.debugAll) {
                if (params) {
                    console.debug("ReconnectingWebSocket", msg, this.url, params);
                }
                else {
                    console.debug("ReconnectingWebSocket", msg, this.url);
                }
            }
        };
        ReconnectingWebSocket.prototype._raiseOnCloseEvent = function () {
            var ev = this.generateEvent("close");
            // NB: scanning the _onclose array in reverse order since the last element is the handler that performs the cleanup
            for (var i = this._onclose.length - 1; i >= 0; i--) {
                this._onclose[i](ev);
            }
        };
        /**
         * Whether all instances of ReconnectingWebSocket should log debug messages.
         * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
         */
        ReconnectingWebSocket.debugAll = false;
        return ReconnectingWebSocket;
    }());
    Genesis.ReconnectingWebSocket = ReconnectingWebSocket;
    var HttpSubscriptionHandler = /** @class */ (function () {
        function HttpSubscriptionHandler() {
        }
        HttpSubscriptionHandler.onNewData = function (srcRef, data) {
            var _this = this;
            // check for new rows/updates
            var newRows = [];
            var modifiedRows = [];
            var deletedRows = [];
            if (!data.ROW) {
                // nothing has changed since the previous time we checked
                return {
                    MESSAGE_TYPE: "QUERY_UPDATE",
                    ROW: [],
                    SOURCE_REF: srcRef
                };
            }
            if (!this.state[srcRef]) { // this is the first time we see this srcRef, therefore everything is INSERT
                newRows = data.ROW;
            }
            else {
                data.ROW.forEach(function (row) {
                    var existing = _this.state[srcRef].ROW.find(function (el) {
                        return el.DETAILS.ROW_REF === row.DETAILS.ROW_REF;
                    });
                    if (!existing) { // new row => INSERT
                        newRows.push(row);
                    }
                    else {
                        modifiedRows.push(row);
                    }
                });
            }
            // always updating the "state" object so the next time we compare with updated data
            this.state[srcRef] = data;
            var result = {
                MESSAGE_TYPE: "QUERY_UPDATE",
                ROW: newRows.concat(modifiedRows).concat(deletedRows),
                SOURCE_REF: srcRef
            };
            return result;
        };
        // TODO: remember to clean up when unsubscribing
        HttpSubscriptionHandler.cleanup = function (srcRef) {
            delete this.state[srcRef];
        };
        HttpSubscriptionHandler.state = [];
        return HttpSubscriptionHandler;
    }());
    Genesis.HttpSubscriptionHandler = HttpSubscriptionHandler;
    var StatefulHttpChannel = /** @class */ (function () {
        function StatefulHttpChannel(endpoint, defaultPollingInterval, pollingIntervalMap, updateMap, httpOverride, defaultTimeout, timeoutMap) {
            this.endpoint = endpoint;
            this.defaultPollingInterval = defaultPollingInterval;
            this.pollingIntervalMap = pollingIntervalMap;
            this.updateMap = updateMap;
            this.httpOverride = httpOverride;
            this.defaultTimeout = defaultTimeout;
            this.timeoutMap = timeoutMap;
            // polling
            this.subscriptionsInfos = {};
            // we need to simulate DATA_LOGON messages, therefore we need to know whether we received the first reply
            this.logonAcks = {};
            this.srcRefToResourceMap = {};
            // we need to save all the active subscriptions along with the params to force a refresh (GET) when a TXN that might update the stream happens
            this.resourcesToParamsMap = {};
            this.txnToResources = null;
            if (updateMap) { // TODO: build txnToResources
                this.txnToResources = {};
            }
            if (!defaultPollingInterval) {
                this.defaultPollingInterval = 5000;
            }
            if (!defaultTimeout) {
                this.defaultTimeout = 10 * 1000;
            }
            if (!timeoutMap) {
                this.timeoutMap = {};
            }
            $.ajaxSetup({ cache: false });
        }
        StatefulHttpChannel.prototype.onmessage = function (event) { };
        StatefulHttpChannel.prototype.onerror = function (err) { };
        StatefulHttpChannel.prototype.send = function (message) {
            var timeout = this.defaultTimeout;
            var msg = JSON.parse(message);
            var apiEndpoint = msg.MESSAGE_TYPE.replace(/_/g, "-").toLowerCase();
            if (msg.MESSAGE_TYPE === "HEARTBEAT_PING") {
                this.sendHeartbeatPingMsg(message, msg);
            }
            else if (msg.MESSAGE_TYPE === "MORE_COLUMNS" || msg.MESSAGE_TYPE === "MORE_ROWS") {
                apiEndpoint =
                    this.srcRefToResourceMap[msg.DETAILS.SOURCE_REF].replace(/_/g, "-").toLowerCase();
                this.sendMoreRowsOrMoreColumnsMsg(apiEndpoint, message, msg);
                //} else if (msg.MESSAGE_TYPE.startsWith("TXN_")) { // breaks in IE 11
            }
            else if (msg.MESSAGE_TYPE.indexOf("TXN_") === 0) {
                if (this.timeoutMap[msg.MESSAGE_TYPE]) {
                    timeout = this.timeoutMap[msg.MESSAGE_TYPE];
                }
                this.sendTxnMsg(apiEndpoint, message, msg, timeout);
                // if TXN_LOGOUT we might need to cleanup all resources
                // subscriptionsInfos, logonAcks + clearing all the intervals
                if (msg.MESSAGE_TYPE === "TXN_LOGOUT") {
                    for (var srcRef in this.subscriptionsInfos) {
                        clearInterval(this.subscriptionsInfos[srcRef]);
                        // clean up resources
                        delete this.subscriptionsInfos[srcRef];
                        delete this.logonAcks[srcRef];
                    }
                    delete this.resourcesToParamsMap;
                }
                //} else if (msg.MESSAGE_TYPE.startsWith("DATA_LOGON")) { breaks in IE 11
            }
            else if (msg.MESSAGE_TYPE.indexOf("DATA_LOGON") === 0) {
                if (this.timeoutMap[msg.DETAILS.DATASOURCE_NAME]) {
                    timeout = this.timeoutMap[msg.DETAILS.DATASOURCE_NAME];
                }
                apiEndpoint =
                    msg.DETAILS.DATASOURCE_NAME.replace(/_/g, "-").toLowerCase();
                if (this.subscriptionsInfos[msg.SOURCE_REF]) {
                    return;
                }
                // DataLogon
                this.sendDataLogonMsg(apiEndpoint, message, msg, timeout);
                //} else if (msg.MESSAGE_TYPE.startsWith("DATA_LOGOFF")) { // breaks in IE 11
            }
            else if (msg.MESSAGE_TYPE.indexOf("DATA_LOGOFF") === 0) {
                // when the initial DATA_LOGON message fails (e.g. when the token in not valid) 
                // an error is raised because we haven't saved anything yet inside srcRefToResourceMap.
                // This was we can avoid displaying unwanted errors in the browser's console.
                if (this.srcRefToResourceMap[msg.SOURCE_REF]) {
                    apiEndpoint =
                        this.srcRefToResourceMap[msg.SOURCE_REF].replace(/_/g, "-").toLowerCase();
                    this.sendDataLogoffMsg(apiEndpoint, message, msg);
                    // unregister the timer!
                    clearInterval(this.subscriptionsInfos[msg.SOURCE_REF]);
                    // clean up resources
                    delete this.subscriptionsInfos[msg.SOURCE_REF];
                    delete this.logonAcks[msg.SOURCE_REF];
                    delete this.srcRefToResourceMap[msg.SOURCE_REF];
                    delete this.resourcesToParamsMap[msg.SOURCE_REF];
                    HttpSubscriptionHandler.cleanup(msg.SOURCE_REF);
                }
            }
            else {
                var msgType = msg.MESSAGE_TYPE.replace(/REQ_/g, "");
                if (this.timeoutMap[msgType]) {
                    timeout = this.timeoutMap[msgType];
                }
                this.sendGenericGetRequest(apiEndpoint, msg, timeout);
            }
            console.log("HttpChannel: message sent");
        };
        StatefulHttpChannel.prototype.close = function (code, reason) { };
        StatefulHttpChannel.prototype.setOnOpenEvtHandler = function (handler) { };
        StatefulHttpChannel.prototype.addOnCloseEvtHandler = function (handler) { };
        Object.defineProperty(StatefulHttpChannel.prototype, "readyState", {
            get: function () {
                return Genesis.ConnectivityConsts.OPEN;
            },
            enumerable: true,
            configurable: true
        });
        StatefulHttpChannel.prototype.sendHeartbeatPingMsg = function (message, msg) {
            var _this = this;
            $.ajax({
                url: this.endpoint + "/heartbeat-ping",
                type: "GET",
                data: msg,
                headers: {
                    SOURCE_REF: msg.SOURCE_REF
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .done(function (data) {
                _this.onmessage({
                    data: JSON.stringify(data)
                });
            })
                .fail(function (xhr, status, error) {
                _this.onmessage({
                    data: xhr.responseText
                });
            });
        };
        StatefulHttpChannel.prototype.sendMoreRowsOrMoreColumnsMsg = function (apiEndpoint, message, msg) {
            var type = this.httpOverride ? "POST" : "PUT";
            var headers = {
                SOURCE_REF: msg.SOURCE_REF,
                SUBSCRIPTION_REF: msg.DETAILS.SOURCE_REF,
                SESSION_AUTH_TOKEN: msg.SESSION_AUTH_TOKEN,
                USER_NAME: msg.USER_NAME
            };
            if (this.httpOverride) {
                headers["X-HTTP-Method-Override"] = "PUT";
            }
            $.ajax({
                url: this.endpoint + "/" + apiEndpoint,
                type: type,
                data: message,
                headers: headers,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .done(function () {
                console.log("MORE_ROWS|MORE_COLUMNS success");
            })
                .fail(function (xhr, status, error) {
                console.log("MORE_ROWS|MORE_COLUMNS failed");
            });
        };
        StatefulHttpChannel.prototype.sendTxnMsg = function (apiEndpoint, message, msg, timeout) {
            var _this = this;
            var headers = {
                SOURCE_REF: msg.SOURCE_REF,
                SESSION_AUTH_TOKEN: msg.SESSION_AUTH_TOKEN,
                HOSTNAME: msg.HOSTNAME,
                USER_NAME: msg.USER_NAME,
                TIMEOUT: timeout
            };
            if (apiEndpoint === "txn-logout") {
                headers.SESSION_ID = msg.SESSION_ID;
            }
            $.ajax({
                url: this.endpoint + "/" + apiEndpoint,
                type: "POST",
                data: message,
                headers: headers,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .done(function (data) {
                _this.onmessage({
                    data: JSON.stringify(data)
                });
                // we need to retrieve all the streams related, collect params and fire a GET request
                var resource;
                var key;
                if (_this.txnToResources) {
                    var toUpdate = _this.txnToResources[msg.MESSAGE_TYPE];
                    for (key in _this.resourcesToParamsMap) {
                        resource = _this.resourcesToParamsMap[key].DETAILS.DATASOURCE_NAME;
                        if (resource === toUpdate) {
                            _this.sendDataserverMsg(resource.replace(/_/g, "-").toLowerCase(), _this.resourcesToParamsMap[key], timeout);
                        }
                    }
                }
                else { // update all
                    for (key in _this.resourcesToParamsMap) {
                        resource = _this.resourcesToParamsMap[key].DETAILS.DATASOURCE_NAME;
                        _this.sendDataserverMsg(resource.replace(/_/g, "-").toLowerCase(), _this.resourcesToParamsMap[key], timeout);
                    }
                }
            })
                .fail(function (xhr, status, error) {
                switch (xhr.statusText) {
                    case "timeout":
                        _this.onmessage({
                            data: JSON.stringify({
                                DETAILS: {
                                    ERROR: "Timeout",
                                },
                                MESSAGE_TYPE: "WEBADAPTER_NACK",
                                SOURCE_REF: msg.SOURCE_REF,
                            })
                        });
                        break;
                    default:
                        _this.onmessage({
                            data: xhr.responseText
                        });
                        break;
                }
            });
        };
        StatefulHttpChannel.prototype.sendGenericGetRequest = function (apiEndpoint, msg, timeout) {
            var _this = this;
            $.ajax({
                url: this.endpoint + "/" + apiEndpoint,
                type: "GET",
                data: msg,
                headers: {
                    SOURCE_REF: msg.SOURCE_REF,
                    SESSION_AUTH_TOKEN: msg.SESSION_AUTH_TOKEN,
                    HOSTNAME: msg.HOSTNAME,
                    USER_NAME: msg.USER_NAME,
                    TIMEOUT: timeout
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .done(function (data) {
                _this.onmessage({
                    data: JSON.stringify(data)
                });
            })
                .fail(function (xhr, status, error) {
                var tmp = xhr.responseJSON;
                tmp.ERROR = [];
                tmp.ERROR.push({
                    CODE: tmp.DETAILS.ERROR
                });
                _this.onmessage({
                    data: JSON.stringify(tmp)
                });
            });
        };
        StatefulHttpChannel.prototype.sendDataLogoffMsg = function (apiEndpoint, message, msg) {
            var _this = this;
            var type = this.httpOverride ? "POST" : "DELETE";
            var headers = {
                SOURCE_REF: msg.SOURCE_REF,
                SESSION_AUTH_TOKEN: msg.SESSION_AUTH_TOKEN,
                USER_NAME: msg.USER_NAME
            };
            if (this.httpOverride) {
                headers["X-HTTP-Method-Override"] = "DELETE";
            }
            $.ajax({
                url: this.endpoint + "/" + apiEndpoint,
                type: type,
                data: message,
                headers: headers,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .done(function (data) {
                console.log("DATALOG_OFF OK!");
            })
                .fail(function (xhr, status, error) {
                console.log("DELETE failed on " + _this.srcRefToResourceMap[msg.SOURCE_REF] + " , srcRef=" + msg.SOURCE_REF);
                console.log(xhr);
                console.log(status);
                console.log(error);
            });
        };
        StatefulHttpChannel.prototype.sendDataLogonMsg = function (apiEndpoint, message, msg, timeout) {
            var _this = this;
            $.ajax({
                url: this.endpoint + "/" + apiEndpoint,
                type: "POST",
                data: message,
                headers: {
                    SOURCE_REF: msg.SOURCE_REF,
                    SESSION_AUTH_TOKEN: msg.SESSION_AUTH_TOKEN,
                    USER_NAME: msg.USER_NAME,
                    TIMEOUT: timeout
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .done(function (data) {
                if (!_this.logonAcks[msg.SOURCE_REF]) {
                    _this.logonAcks[msg.SOURCE_REF] = true;
                    _this.srcRefToResourceMap[msg.SOURCE_REF] = msg.DETAILS.DATASOURCE_NAME;
                    _this.resourcesToParamsMap[msg.SOURCE_REF] = msg;
                    // start polling
                    var pollingInterval = _this.pollingIntervalMap ?
                        (_this.pollingIntervalMap[msg.DETAILS.DATASOURCE_NAME] || _this.defaultPollingInterval) :
                        _this.defaultPollingInterval;
                    if (_this.timeoutMap[msg.DETAILS.DATASOURCE_NAME]) {
                        timeout = _this.timeoutMap[msg.DETAILS.DATASOURCE_NAME];
                    }
                    var request = function () {
                        _this.sendDataserverMsg(apiEndpoint, msg, timeout);
                    };
                    _this.subscriptionsInfos[msg.SOURCE_REF] = window.setInterval(request, pollingInterval);
                    _this.onmessage({
                        data: JSON.stringify({
                            MESSAGE_TYPE: "LOGON_ACK",
                            SOURCE_REF: msg.SOURCE_REF
                        })
                    });
                }
                // 11/01/2018 by GR: not sure if this is correct. For the time being I'm just checking whether data.ROW exists (if was raising a NullReferenceException)
                // That being said I don't see why we should reach this point as there should only be one active instance of stream at a given time.
                if (data.ROW && data.ROW.length > 0) {
                    _this.onmessage({
                        data: JSON.stringify(data)
                    });
                }
            })
                .fail(function (xhr, status, error) {
                if (xhr.statusText === "Unauthorized") {
                    _this.onmessage({
                        // GR: this one is from Portal BUT it does look wrong to me as the message structure differs from the rest.
                        // I am not sure if this is because the code that handles the token refresh event (inside the library) 
                        // truly expects a different structure OR this is a bug!
                        data: JSON.stringify({
                            DETAILS: {
                                ERROR: xhr.responseJSON.DETAILS.ERROR,
                                MESSAGE_TYPE: "WEBADAPTER_NACK",
                                SOURCE_REF: msg.SOURCE_REF
                            }
                        })
                        // This one is from the DTA library
                        /* data: JSON.stringify({
                            details: {
                                error: xhr.responsejson.details.error // "user is not logged in and supplied auth token is invalid." }
                            },
                            message_type: "webadapter_nack",
                            source_ref: msg.source_ref
                        })*/
                    });
                }
                else {
                    _this.onmessage({
                        data: JSON.stringify({
                            DETAILS: {
                                ERROR: "Resource '" + msg.DETAILS.DATASOURCE_NAME + "' does not exist."
                            },
                            MESSAGE_TYPE: "WEBADAPTER_NACK",
                            SOURCE_REF: msg.SOURCE_REF
                        })
                    });
                }
            });
        };
        StatefulHttpChannel.prototype.sendDataserverMsg = function (apiEndpoint, msg, timeout) {
            var _this = this;
            $.ajax({
                url: this.endpoint + "/" + apiEndpoint,
                type: "GET",
                //data: message, // NB: this is important otherwise we're not sending a JSON payload BUT a url encoded string
                data: msg,
                headers: {
                    SOURCE_REF: msg.SOURCE_REF,
                    SESSION_AUTH_TOKEN: msg.SESSION_AUTH_TOKEN,
                    USER_NAME: msg.USER_NAME,
                    TIMEOUT: timeout
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
                .done(function (data) {
                if (data.ROW && data.ROW.length > 0) {
                    _this.onmessage({
                        data: JSON.stringify(data)
                    });
                }
            })
                .fail(function (xhr, status, error) {
                if (xhr.status === 504) { // previously 408
                    _this.onmessage({
                        data: JSON.stringify({
                            DETAILS: {
                                ERROR: "Timeout while awaiting a response."
                            },
                            MESSAGE_TYPE: "WEBADAPTER_NACK",
                            SOURCE_REF: msg.SOURCE_REF
                        })
                    });
                }
                else {
                    if (error === "Unauthorized") {
                        _this.onmessage({
                            data: JSON.stringify({
                                DETAILS: {
                                    ERROR: xhr.responseJSON.DETAILS.ERROR
                                },
                                MESSAGE_TYPE: "WEBADAPTER_NACK",
                                SOURCE_REF: msg.SOURCE_REF
                            })
                        });
                    }
                    else {
                        _this.onmessage({
                            data: JSON.stringify({
                                DETAILS: {
                                    ERROR: "Resource '" + msg.DETAILS.DATASOURCE_NAME + "' does not exist."
                                },
                                MESSAGE_TYPE: "WEBADAPTER_NACK",
                                SOURCE_REF: msg.SOURCE_REF
                            })
                        });
                    }
                }
            });
        };
        return StatefulHttpChannel;
    }());
    Genesis.StatefulHttpChannel = StatefulHttpChannel;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=WebSocket.js.map
var Genesis;
(function (Genesis) {
    var AuthManager = /** @class */ (function () {
        function AuthManager(sourceRefGenerator, messageBuilder, networkManager) {
            this.sourceRefGenerator = sourceRefGenerator;
            this.messageBuilder = messageBuilder;
            this.networkManager = networkManager;
        }
        /**
         * Logs in to the server.
         *
         * @param {ILoginOptions} options
         * @param {boolean} useTLS [optional], set to true to request a secure connection. Default to 'false'.
         *
         * @returns {Promise<ILoginResult>}
         */
        AuthManager.prototype.login = function (options, useTLS) {
            if (useTLS === void 0) { useTLS = false; }
            var deferred = P.defer();
            if (options.credentials.password) {
                this._userName = options.credentials.userName;
                var sourceRef = this.sourceRefGenerator.newSourceRef();
                var msg = this.messageBuilder.createLoginMessage(sourceRef, options.credentials);
                this.doLogin(msg, deferred);
            }
            else {
                this._userName = options.credentials.userName;
                this._authToken = options.authToken;
                this._refreshToken = options.refreshToken;
                deferred.resolve({
                    authToken: this.authToken,
                    refreshToken: this._refreshToken,
                    roles: null,
                    permissions: null
                });
                return deferred.promise();
            }
            return deferred.promise();
        };
        /**
         * Logs out from the server.
         *
         * @returns {Promise<void>}
         */
        AuthManager.prototype.logout = function () {
            var _this = this;
            var msg = this.messageBuilder.createLogoutMessage(this.sourceRefGenerator.newSourceRef(), this.authToken, this.userName, this._sessionId);
            var deferred = P.defer();
            this.networkManager.send(msg, function (_) {
                _this._authToken = undefined;
                _this._userName = undefined;
                _this.networkManager.stop();
                _this.networkManager = null;
                deferred.resolve(undefined);
            }, function (err) { return deferred.reject(err); });
            return deferred.promise();
        };
        /**
         * Gets if the user is currently logged in.
         *
         * @returns {boolean} true if the user is currently logged in, false othewise.
         */
        AuthManager.prototype.isLoggedIn = function () {
            return this._authToken !== undefined;
        };
        /**
         * Changes the password for current user.
         *
         * @param {string} oldPassword
         * @param {string} newPassword
         *
         * @returns {Promise<void>}
         */
        AuthManager.prototype.changePassword = function (oldPassword, newPassword) {
            var msg = this.messageBuilder.createChangePasswordMessage(this.sourceRefGenerator.newSourceRef(), this.authToken, this.userName, oldPassword, newPassword);
            var deferred = P.defer();
            this.networkManager.send(msg, function (_) { return deferred.resolve(undefined); }, function (err) { return deferred.reject(err); });
            return deferred.promise();
        };
        AuthManager.prototype.refreshToken = function () {
            var deferred = P.defer();
            var sourceRef = this.sourceRefGenerator.newSourceRef();
            var msg = this.messageBuilder.createRefreshTokenMessage(sourceRef, this._userName, this._refreshToken);
            this.doLogin(msg, deferred);
            return deferred.promise();
        };
        Object.defineProperty(AuthManager.prototype, "userName", {
            /**
             * Gets the user name.
             *
             * @returns {string}
             */
            get: function () {
                return this._userName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AuthManager.prototype, "authToken", {
            /**
             * Gets the auth token.
             *
             * @returns {string}.
             */
            get: function () {
                return this._authToken;
            },
            enumerable: true,
            configurable: true
        });
        AuthManager.prototype.doLogin = function (msg, deferred) {
            var _this = this;
            this.networkManager.send(msg, function (message) {
                var messageType = message.MESSAGE_TYPE;
                switch (messageType) {
                    case Genesis.Consts.loginAck:
                        _this._authToken = message.SESSION_AUTH_TOKEN;
                        _this._refreshToken = message.REFRESH_AUTH_TOKEN;
                        _this._sessionId = message.SESSION_ID;
                        deferred.resolve({
                            authToken: message.SESSION_AUTH_TOKEN,
                            refreshToken: message.REFRESH_AUTH_TOKEN,
                            roles: message.PROFILE,
                            permissions: message.PERMISSION
                        });
                        break;
                    case Genesis.Consts.loginNack:
                    case Genesis.Consts.msgNack:
                        deferred.reject({ message: message.ERROR[0].CODE });
                        break;
                    default:
                        var tmp = message; // NB: the server is replying using a different format than the loginNack case.
                        deferred.reject({ message: tmp.DETAILS.ERROR });
                        break;
                }
            }, function (err) { return deferred.reject(err); });
        };
        return AuthManager;
    }());
    Genesis.AuthManager = AuthManager;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=AuthManager.js.map
var Genesis;
(function (Genesis) {
    /**
     * AuthZ-related DTA protocol constants.
     */
    var Consts = /** @class */ (function () {
        function Consts() {
        }
        // Profiles
        Consts.getAllProfilesMessageType = "ALL_PROFILES";
        Consts.insertProfileMessageType = "TXN_INSERT_PROFILE";
        Consts.amendProfileMessageType = "TXN_AMEND_PROFILE";
        Consts.deleteProfileMessageType = "TXN_DELETE_PROFILE";
        // Users
        Consts.getAllUsersMessageType = "ALL_USERS";
        Consts.insertUserMessageType = "TXN_INSERT_USER";
        Consts.amendUserMessageType = "TXN_AMEND_USER";
        Consts.deleteUserMessageType = "TXN_DELETE_USER";
        Consts.userProfiles = "TXN_USER_PROFILES";
        Consts.profilesUsers = "TXN_PROFILE_USERS";
        // Permissions (AKA "rights")
        Consts.permissionsUpdates = "USER_RIGHTS";
        Consts.getAllRightsForAProfile = "PROFILE_RIGHTS";
        // Values
        Consts.active = "ACTIVE";
        Consts.inactive = "INACTIVE";
        Consts.enabled = "ENABLED";
        Consts.disabled = "DISABLED";
        Consts.passwordExpired = "PASSWORD_EXPIRED";
        Consts.passwordReset = "PASSWORD_RESET";
        return Consts;
    }());
    var AuthZ = /** @class */ (function () {
        function AuthZ(dta, userName) {
            this.dta = dta;
            this.userName = userName;
            this._profiles = new Profiles(this.dta, this.userName);
            this._users = new Users(this.dta, this.userName);
        }
        AuthZ.prototype.permissionsUpdates = function () {
            return this.dta.stream(Consts.permissionsUpdates);
        };
        Object.defineProperty(AuthZ.prototype, "profiles", {
            get: function () {
                return this._profiles;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AuthZ.prototype, "users", {
            get: function () {
                return this._users;
            },
            enumerable: true,
            configurable: true
        });
        return AuthZ;
    }());
    Genesis.AuthZ = AuthZ;
    var Profiles = /** @class */ (function () {
        function Profiles(dta, userName) {
            this.dta = dta;
            this.userName = userName;
        }
        Profiles.prototype.all = function () {
            var _this = this;
            var result = P.defer();
            var stream = this.dta.stream(Consts.getAllProfilesMessageType).subscribeOnNext(function (data) {
                result.resolve(data.all.map(function (value) {
                    return _this.toProfile(value);
                }));
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            });
            return result.promise();
        };
        Profiles.prototype.insert = function (profile) {
            var status;
            switch (profile.status) {
                case ProfileStatus.Active:
                    status = Consts.active;
                    break;
                case ProfileStatus.Inactive:
                    status = Consts.inactive;
                    break;
            }
            var users = [];
            if (profile.users) {
                users = profile.users.map(function (item) {
                    return {
                        USER_NAME: item
                    };
                });
            }
            var rights = [];
            if (profile.rights) {
                rights = profile.rights.map(function (item) {
                    return {
                        CODE: item
                    };
                });
            }
            return this.dta.commit(Consts.insertProfileMessageType, {
                validate: false,
                ignoreWarnings: true,
                details: {
                    NAME: profile.name,
                    DESCRIPTION: profile.description,
                    STATUS: status,
                    USER: users,
                    RIGHT: rights
                }
            });
        };
        Profiles.prototype.byName = function (profileName) {
            return new ProfileApi(profileName, this.dta, this.userName);
        };
        Profiles.prototype.toProfile = function (data) {
            return {
                id: data.PROFILE_ID,
                name: data.NAME,
                description: data.DESCRIPTION,
                status: data.STATUS
            };
        };
        return Profiles;
    }());
    var Users = /** @class */ (function () {
        function Users(dta, userName) {
            this.dta = dta;
            this.userName = userName;
        }
        Users.prototype.all = function () {
            var _this = this;
            var result = P.defer();
            var stream = this.dta.stream(Consts.getAllUsersMessageType).subscribeOnNext(function (data) {
                result.resolve(data.all.map(function (value) {
                    return _this.toUser(value);
                }));
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            });
            return result.promise();
        };
        Users.prototype.insert = function (user) {
            var status;
            switch (user.status) {
                case UserStatus.Enabled:
                    status = Consts.enabled;
                    break;
                case UserStatus.Disabled:
                    status = Consts.disabled;
                    break;
                case UserStatus.PasswordExpired:
                    status = Consts.passwordExpired;
                    break;
                case UserStatus.PasswordReset:
                    status = Consts.passwordReset;
                    break;
            }
            var details = {
                EMAIL_ADDRESS: user.emailAddress,
                FIRST_NAME: user.firstName,
                LAST_NAME: user.lastName,
                USER_NAME: user.userName,
                STATUS: status
            };
            if (user.rights) {
                details.RIGHT =
                    user.rights.map(function (item) {
                        return {
                            CODE: item
                        };
                    });
            }
            return this.dta.commit(Consts.insertUserMessageType, {
                validate: false,
                ignoreWarnings: true,
                details: details
            });
        };
        Users.prototype.byName = function (userName) {
            return new UserApi(userName, this.dta);
        };
        Users.prototype.toUser = function (data) {
            return {
                id: data.USER_ID,
                userName: data.USER_NAME,
                email: data.EMAIL_ADDRESS,
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                lastLogin: parseInt(data.LAST_LOGIN),
                status: data.STATUS
            };
        };
        return Users;
    }());
    var UserStatus;
    (function (UserStatus) {
        UserStatus[UserStatus["Enabled"] = Consts.enabled] = "Enabled";
        UserStatus[UserStatus["Disabled"] = Consts.disabled] = "Disabled";
        UserStatus[UserStatus["PasswordExpired"] = Consts.passwordExpired] = "PasswordExpired";
        UserStatus[UserStatus["PasswordReset"] = Consts.passwordReset] = "PasswordReset";
    })(UserStatus = Genesis.UserStatus || (Genesis.UserStatus = {}));
    // http://stackoverflow.com/questions/15490560/create-an-enum-with-string-values-in-typescript
    var ProfileStatus;
    (function (ProfileStatus) {
        ProfileStatus[ProfileStatus["Active"] = Consts.active] = "Active";
        ProfileStatus[ProfileStatus["Inactive"] = Consts.inactive] = "Inactive";
    })(ProfileStatus = Genesis.ProfileStatus || (Genesis.ProfileStatus = {}));
    var ProfileApi = /** @class */ (function () {
        function ProfileApi(profileName, dta, userName) {
            this.profileName = profileName;
            this.dta = dta;
            this.userName = userName;
        }
        ProfileApi.prototype.get = function () {
            var _this = this;
            var result = P.defer();
            var stream = this.dta.stream(Consts.getAllProfilesMessageType, { criteria: "NAME == '" + this.profileName + "'" })
                .subscribeOnNext(function (data) {
                if (data.all.length === 0) {
                    result.reject({ message: "No profile has been found with the name '" + _this.profileName + "'" });
                }
                else {
                    result.resolve(_this.toProfile(data.all[0])); // <-- ASSUMPTION! Just one match!
                }
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            });
            return result.promise();
        };
        ProfileApi.prototype.amend = function (profile) {
            var users = [];
            if (profile.users) {
                users = profile.users.map(function (item) {
                    return {
                        USER_NAME: item
                    };
                });
            }
            var rights = [];
            if (profile.rights) {
                rights = profile.rights.map(function (item) {
                    return {
                        CODE: item
                    };
                });
            }
            return this.dta.commit(Consts.amendProfileMessageType, {
                validate: false,
                ignoreWarnings: true,
                details: {
                    NAME: profile.name,
                    DESCRIPTION: profile.description,
                    STATUS: profile.status,
                    USER: users,
                    RIGHT: rights
                }
            });
        };
        ProfileApi.prototype.delete = function () {
            return this.dta.commit(Consts.deleteProfileMessageType, {
                validate: false,
                ignoreWarnings: true,
                details: {
                    NAME: this.profileName
                }
            });
        };
        ProfileApi.prototype.users = function () {
            return this.dta.commit(Consts.profilesUsers, {
                validate: false,
                ignoreWarnings: true,
                details: {
                    NAME: this.profileName
                }
            });
        };
        ProfileApi.prototype.rights = function () {
            var result = P.defer();
            var stream = this.dta.stream(Consts.getAllRightsForAProfile, { criteria: "PROFILE_NAME == '" + this.profileName + "'" })
                .subscribeOnNext(function (data) {
                result.resolve(data.all.map(function (item) {
                    return item.RIGHT_ID;
                }));
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            });
            return result.promise();
        };
        ProfileApi.prototype.toProfile = function (data) {
            return {
                id: data.PROFILE_ID,
                name: data.NAME,
                description: data.DESCRIPTION,
                status: data.STATUS
            };
        };
        return ProfileApi;
    }());
    var UserApi = /** @class */ (function () {
        function UserApi(userName, dta) {
            this.userName = userName;
            this.dta = dta;
        }
        UserApi.prototype.get = function () {
            var _this = this;
            var result = P.defer();
            var stream = this.dta.stream(Consts.getAllUsersMessageType, { criteria: "USER_NAME == '" + this.userName + "'" })
                .subscribeOnNext(function (data) {
                if (data.all.length === 0) {
                    result.reject({ message: "No user has been found with the name '" + _this.userName + "'" });
                }
                else {
                    result.resolve(_this.toUser(data.all[0])); // <-- ASSUMPTION! Just one match!
                }
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            });
            return result.promise();
        };
        UserApi.prototype.amend = function (user) {
            var rights = [];
            if (user.rights) {
                rights = user.rights.map(function (item) {
                    return {
                        CODE: item
                    };
                });
            }
            return this.dta.commit(Consts.amendUserMessageType, {
                validate: false,
                ignoreWarnings: true,
                details: {
                    EMAIL_ADDRESS: user.emailAddress,
                    FIRST_NAME: user.firstName,
                    LAST_NAME: user.lastName,
                    USER_NAME: user.userName,
                    STATUS: user.status,
                    RIGHT: rights
                }
            });
        };
        UserApi.prototype.delete = function () {
            return this.dta.commit(Consts.deleteUserMessageType, {
                validate: false,
                ignoreWarnings: true,
                details: {
                    USER_NAME: this.userName
                }
            });
        };
        UserApi.prototype.rights = function () {
            var result = P.defer();
            var stream = this.dta.stream(Consts.permissionsUpdates, { criteria: "USER_NAME == '" + this.userName + "'" })
                .subscribeOnNext(function (data) {
                result.resolve(data.all.map(function (item) {
                    return item.CODE;
                }));
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            });
            return result.promise();
        };
        UserApi.prototype.profiles = function () {
            return this.dta.commit(Consts.userProfiles, {
                validate: false,
                ignoreWarnings: true,
                details: {
                    USER_NAME: this.userName
                }
            });
        };
        UserApi.prototype.toUser = function (data) {
            return {
                id: data.USER_ID,
                userName: data.USER_NAME,
                email: data.EMAIL_ADDRESS,
                firstName: data.FIRST_NAME,
                lastName: data.LAST_NAME,
                lastLogin: parseInt(data.LAST_LOGIN),
                status: data.STATUS
            };
        };
        return UserApi;
    }());
})(Genesis || (Genesis = {}));
//# sourceMappingURL=AuthZ.js.map
var Genesis;
(function (Genesis) {
    /**
     * DTA protocol constants.
     */
    var Consts = /** @class */ (function () {
        function Consts() {
        }
        // Login
        Consts.loginMessageType = "TXN_LOGIN_AUTH";
        Consts.loginServiceName = "AUTH_MANAGER";
        Consts.loginAck = "TXN_LOGIN_AUTH_ACK";
        Consts.loginNack = "TXN_LOGIN_AUTH_NACK";
        Consts.permissionsUpdate = "PERMISSIONS_UPDATE";
        // Logout
        Consts.logoutMessageType = "TXN_LOGOUT";
        Consts.logoutServiceName = "AUTH_MANAGER";
        // Metadata
        Consts.metadataMessageType = "META_REQUEST";
        Consts.metadataAck = "META_ACK";
        // Resource unknown
        Consts.msgNack = "MSG_NACK";
        // Resources
        Consts.resourcesMessageType = "RESOURCES_REQUEST";
        Consts.resourceAck = "RESOURCES_REQUEST_ACK";
        Consts.resourceNack = "RESOURCES_REQUEST_NACK";
        // Transaction
        Consts.transactionAck = "TXN_ACK";
        Consts.transactionNack = "TXN_NACK";
        // Password
        Consts.changePasswordMessageType = "TXN_CHANGE_USER_PASSWORD";
        // Data logon
        Consts.dataLogonMessageType = "DATA_LOGON";
        Consts.dataLogonParamsMaxRows = "MAX_ROWS";
        Consts.dataLogonParamsCriteria = "CRITERIA_MATCH";
        Consts.dataLogonParamsColumns = "FIELDS";
        Consts.dataLogonParamsOrderBy = "ORDER_BY";
        Consts.dataLogonAck = "LOGON_ACK";
        Consts.dataLogonNack = "LOGON_NACK";
        // Data logoff
        Consts.dataLogoffMessageType = "DATA_LOGOFF";
        // Query update
        Consts.queryUpdateMessageType = "QUERY_UPDATE";
        Consts.queryUpdateInsert = "INSERT";
        Consts.queryUpdateModify = "MODIFY";
        Consts.queryUpdateDelete = "DELETE";
        // Shutdown
        Consts.shutdown = "DATA_LOG_TERMINATED";
        // WaitForConnection
        Consts.waitForConnectionTimeout = 1000;
        return Consts;
    }());
    Genesis.Consts = Consts;
    var ConnectivityConsts = /** @class */ (function () {
        function ConnectivityConsts() {
        }
        ConnectivityConsts.CONNECTING = (typeof WebSocket === "undefined") ? 0 : WebSocket.CONNECTING;
        ConnectivityConsts.OPEN = (typeof WebSocket === "undefined") ? 1 : WebSocket.OPEN;
        ConnectivityConsts.CLOSING = (typeof WebSocket === "undefined") ? 2 : WebSocket.CLOSING;
        ConnectivityConsts.CLOSED = (typeof WebSocket === "undefined") ? 3 : WebSocket.CLOSED;
        return ConnectivityConsts;
    }());
    Genesis.ConnectivityConsts = ConnectivityConsts;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=Consts.js.map
var _this = this;
var Genesis;
(function (Genesis) {
    // http://www.elijahmanor.com/grunt-away-those-pesky-console-log-statements/
    // TODO: add a "debug" mode
    //const DEBUG = false;
    //------------------
    // Helper functions
    //------------------
    function newPromise() {
        var deferredResult = P.defer();
        return deferredResult.promise();
    }
    Genesis.newPromise = newPromise;
    function createGuid() {
        return 'xxxxxxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    Genesis.createGuid = createGuid;
    ;
    // TODO: avoid having a dependency on jQuery just for "$.extend(...)"
    // see http://youmightnotneedjquery.com/
    //export function extend(out: any) {
    //    out = out || {};
    //    for (var i = 1; i < arguments.length; i++) {
    //        if (!arguments[i])
    //            continue;
    //        for (var key in arguments[i]) {
    //            if (arguments[i].hasOwnProperty(key))
    //                out[key] = arguments[i][key];
    //        }
    //    }
    //    return out;
    //};
    function extend(a, b) {
        return $.extend(a, b);
    }
    Genesis.extend = extend;
    var ServerStatus;
    (function (ServerStatus) {
        ServerStatus[ServerStatus["Up"] = 0] = "Up";
        ServerStatus[ServerStatus["Down"] = 1] = "Down";
    })(ServerStatus = Genesis.ServerStatus || (Genesis.ServerStatus = {}));
})(Genesis || (Genesis = {}));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Browser_compatibility
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return _this.lastIndexOf(searchString, position) === position;
    };
}
// http://stackoverflow.com/questions/280634/endswith-in-javascript
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}
//# sourceMappingURL=Core.js.map
var Genesis;
(function (Genesis) {
    var DefaultResiliencyManager = /** @class */ (function () {
        function DefaultResiliencyManager(dta, sourceRefGenerator, networkManager, initialServerStatus, heartbeatInterval, heartbeatTimeout) {
            if (heartbeatInterval === void 0) { heartbeatInterval = Consts.heartbeatInterval; }
            if (heartbeatTimeout === void 0) { heartbeatTimeout = Consts.heartbeatTimeout; }
            var _this = this;
            this.dta = dta;
            this.sourceRefGenerator = sourceRefGenerator;
            this.networkManager = networkManager;
            this.heartbeatInterval = heartbeatInterval;
            this.heartbeatTimeout = heartbeatTimeout;
            this.suppressServerStatusChange = false;
            this._serverStatus = Genesis.ServerStatus.Up;
            this._onServerStatusSubject = new Rx.Subject();
            this._onResourcesStatusSubject = new Rx.Subject();
            this.messageBuilder = new Genesis.MessageBuilder();
            this._resourcesAvailable = {};
            if (heartbeatTimeout <= heartbeatInterval) {
                throw new Error("'heartbeatTimeout' must be greater than 'heartbeatInterval'");
            }
            this._serverStatus = initialServerStatus;
            // 28/01/16, memory leak, when closing the browser tab the active timer does not get removed.
            window.onbeforeunload = function () {
                if (_this._heartbeatsTimerId) {
                    clearInterval(_this._heartbeatsTimerId);
                }
            };
        }
        DefaultResiliencyManager.prototype.start = function (allProcessesStatus) {
            this._startHeartbeats();
            this._listenForResourceUpdates(allProcessesStatus);
        };
        DefaultResiliencyManager.prototype.stop = function () {
            clearInterval(this._heartbeatsTimerId);
            // Added for DTAWEB-953, the stream was never been disposed
            if (this.allProcessesStatusStream) {
                this.allProcessesStatusStream.dispose();
            }
        };
        Object.defineProperty(DefaultResiliencyManager.prototype, "onServerStatus", {
            get: function () {
                return this._onServerStatusSubject;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultResiliencyManager.prototype, "onResourcesStatus", {
            get: function () {
                return this._onResourcesStatusSubject;
            },
            enumerable: true,
            configurable: true
        });
        DefaultResiliencyManager.prototype.reset = function (networkManager) {
            this.suppressServerStatusChange = true;
            this.networkManager = networkManager;
            this._serverStatus = Genesis.ServerStatus.Up;
            this._startHeartbeats();
        };
        DefaultResiliencyManager.prototype._startHeartbeats = function () {
            var _this = this;
            var heartbeatMessage = this.messageBuilder.createHeartbeatMessage(this.sourceRefGenerator.newSourceRef());
            // NB: we need to store the timer's id to stop it when "stop" is being called.
            this._heartbeatsTimerId =
                setInterval(function () {
                    var received = false;
                    if (_this.dta.isLoggedIn()) { // NB: we're sending heartbeats *only* if the user is logged in.
                        _this.networkManager.send(heartbeatMessage, function () {
                            received = true;
                        });
                        setTimeout(function () {
                            if (!received && _this._serverStatus === Genesis.ServerStatus.Up) {
                                _this._serverStatus = Genesis.ServerStatus.Down;
                                _this.notifyServerStatusChange();
                            }
                            else if (received && _this._serverStatus === Genesis.ServerStatus.Down) {
                                _this._serverStatus = Genesis.ServerStatus.Up;
                                _this.notifyServerStatusChange();
                            }
                        }, _this.heartbeatTimeout);
                    }
                }, this.heartbeatInterval);
        };
        DefaultResiliencyManager.prototype.notifyServerStatusChange = function () {
            // when the network becomes available after migrating to a new node
            // we receive two event, "serverUp" and the event inside the fail over manager,
            // we need a way to skip an update.
            if (!this.suppressServerStatusChange) {
                this._onServerStatusSubject.onNext(this._serverStatus);
            }
            else {
                this.suppressServerStatusChange = false;
            }
        };
        DefaultResiliencyManager.prototype._listenForResourceUpdates = function (allProcessesStatus) {
            var _this = this;
            // NB: the initial update has to be skipped.
            var skipUpdate = true;
            this.allProcessesStatusStream =
                allProcessesStatus.subscribeOnNext(function (data) {
                    var result = [];
                    var updates = [];
                    // HOTFIX 08/09/15: fail-over patch #1
                    //  we have to discard resource updates coming from "non-primary" cluster nodes.
                    // NB: the primary cluster node is the node with the highest server node id.
                    data.all = data.all.sort(function (a, b) {
                        if (a.PROCESS_HOSTNAME < b.PROCESS_HOSTNAME)
                            return 1;
                        if (a.PROCESS_HOSTNAME > b.PROCESS_HOSTNAME)
                            return -1;
                        return 0;
                    });
                    var firstProcessHostName = data.all[0].PROCESS_HOSTNAME;
                    data.all = data.all.filter(function (value) {
                        return value.PROCESS_HOSTNAME === firstProcessHostName;
                    });
                    // end of HOTFIX
                    for (var i = 0; i < data.all.length; i++) {
                        _this._extractResources(data.all[i], function (resource, status) {
                            var tmp = {
                                resourceName: resource,
                                isAlive: status === "true"
                            };
                            result.push(tmp);
                            if (_this._resourcesAvailable[resource] === undefined) { // new resource
                                _this._resourcesAvailable[resource] = tmp.isAlive;
                            }
                            else if (tmp.isAlive !== _this._resourcesAvailable[resource]) {
                                _this._resourcesAvailable[resource] = tmp.isAlive;
                                if (tmp.isAlive) {
                                    updates.push(tmp.resourceName);
                                }
                            }
                        });
                    }
                    if (!skipUpdate && updates.length > 0) {
                        _this._onResourcesStatusSubject.onNext(updates);
                    }
                    else {
                        skipUpdate = false;
                    }
                });
        };
        DefaultResiliencyManager.prototype._extractResources = function (data, callback) {
            data.PROCESS_RESOURCES
                .split(",")
                .filter(function (resource) { return resource !== "null"; })
                .map(function (resource) { return resource.trim(); })
                .forEach(function (resource) {
                if (resource !== null && resource !== "") {
                    callback(resource, data.PROCESS_STATUS);
                }
            });
        };
        return DefaultResiliencyManager;
    }());
    Genesis.DefaultResiliencyManager = DefaultResiliencyManager;
    var Consts = /** @class */ (function () {
        function Consts() {
        }
        // Hearbeats
        Consts.heartbeatInterval = 1000 * 10;
        Consts.heartbeatTimeout = 1000 * 12;
        return Consts;
    }());
})(Genesis || (Genesis = {}));
//# sourceMappingURL=DefaultResiliencyManager.js.map
var Genesis;
(function (Genesis) {
    /**
     * The DTA facade.
     *
     * It comprises the following API sections:
     *  1) Management API
     *  2) Creation API
     *  3) AuthZ API
     *
     * Missing key features
     * ====================
     * - latency measurement
     * - dynamic throttling
     */
    var DTA = /** @class */ (function () {
        /**
         * Creates a new instance of the DTA object.
         *
         * @param {IDependencies} dependencies, an optional set of dependencies.
         *  Useful for testing purposes.
         */
        function DTA(dependencies, options) {
            this.debug = true;
            if (options) {
                this.options = options;
            }
            if (dependencies) {
                if (dependencies.webSocket) {
                    this.networkManager = new Genesis.NetworkManager(dependencies.webSocket);
                }
                if (dependencies.authManager) {
                    this.authManager = dependencies.authManager;
                }
                if (dependencies.networkManager) {
                    this.networkManager = dependencies.networkManager;
                }
                if (dependencies.sourceRefGenerator) {
                    this.sourceRefGenerator = dependencies.sourceRefGenerator;
                }
                else {
                    this.sourceRefGenerator = new Genesis.GuidSourceRefGenerator();
                }
                if (dependencies.resiliencyManager) {
                    this.resiliencyManager = dependencies.resiliencyManager;
                }
                if (dependencies.resourceManager) {
                    this.resourceManager = dependencies.resourceManager;
                }
                if (dependencies.messageBuilder) {
                    this.messageBuilder = dependencies.messageBuilder;
                }
                else {
                    this.messageBuilder = new Genesis.MessageBuilder();
                }
                if (dependencies.failoverManager) {
                    this.failoverManager = dependencies.failoverManager;
                }
            }
            else {
                this.sourceRefGenerator = new Genesis.GuidSourceRefGenerator();
                this.messageBuilder = new Genesis.MessageBuilder();
            }
            if (options) {
                if (this.options.http) {
                    if (this.options.suppressAuth) {
                        var endpoint = this.options.version ?
                            this.options.endpoint + "/" + this.options.version :
                            this.options.endpoint;
                        this.networkManager = new Genesis.NetworkManager(new Genesis.StatefulHttpChannel(endpoint, this.options.defaultPollingInterval, this.options.pollingIntervalMap, this.options.updateMap, this.options.httpOverride, this.options.defaultTimeout, this.options.timeoutMap));
                        this.networkManager.start();
                        if (!this.resiliencyManager) {
                            this.resiliencyManager =
                                new Genesis.DefaultResiliencyManager(this, this.sourceRefGenerator, this.networkManager, Genesis.ServerStatus.Up);
                        }
                        // NB: this is a special version of the AuthManager that always log users in
                        this.authManager = {
                            isLoggedIn: function () { return true; },
                            authToken: "TOKEN",
                            userName: "USERNAME",
                            login: null,
                            logout: null,
                            refreshToken: null,
                            changePassword: null
                        };
                        this.resourceManager =
                            new Genesis.ResourceManager(this.resiliencyManager.onResourcesStatus, this.resiliencyManager.onServerStatus, {
                                authToken: "TOKEN",
                                userName: "USERNAME" // not really needed
                            }, this.networkManager, this.sourceRefGenerator);
                    }
                }
                else {
                    // TODO: there is a lot of code duplication here. 
                    if (this.options.suppressAuth) {
                        // TODO: we're not passing params related to resiliency nor tls.
                        // I think it's worth start considering exposing a "connect" function so that we can move all the init code there remove
                        // duplication
                        this.networkManager =
                            this.networkManager || new Genesis.NetworkManager(new Genesis.ReconnectingWebSocket(this.options.wsEndpoint.url, this.options.wsEndpoint.port, null, null, false));
                        this.networkManager.start();
                        if (!this.resiliencyManager) {
                            this.resiliencyManager =
                                new Genesis.DefaultResiliencyManager(this, this.sourceRefGenerator, this.networkManager, Genesis.ServerStatus.Up);
                        }
                        // NB: this is a special version of the AuthManager that always log users in
                        this.authManager = {
                            isLoggedIn: function () { return true; },
                            authToken: "TOKEN",
                            userName: "USERNAME",
                            login: null,
                            logout: null,
                            refreshToken: null,
                            changePassword: null
                        };
                        this.resourceManager =
                            new Genesis.ResourceManager(this.resiliencyManager.onResourcesStatus, this.resiliencyManager.onServerStatus, {
                                authToken: "TOKEN",
                                userName: "USERNAME" // not really needed
                            }, this.networkManager, this.sourceRefGenerator);
                        // when using ws we do want to enable resiliency
                        this.startResiliencyManager();
                    }
                }
            }
        }
        //----------------
        // Management API
        //----------------
        /**
         * Logs in to the server.
         *
         * @param {ILoginOptions} options
         * @param {boolean} failover [optional], set to true to request failover & load-balancing. Default to 'false'.
         * @param {boolean} useTLS [optional], set to true to request a secure connection. Default to 'false'.
         *
         * @returns {Promise<ILoginResult>}
         */
        DTA.prototype.login = function (options, failover, useTLS, endpoint) {
            var _this = this;
            if (failover === void 0) { failover = false; }
            if (useTLS === void 0) { useTLS = false; }
            if (this.options && this.options.suppressAuth) {
                throw new Error("You can't invoke 'login' when suppressAuth is set to true");
            }
            if (this.options && this.options.http) {
                var endpoint = this.options.version ?
                    this.options.endpoint + "/" + this.options.version :
                    this.options.endpoint;
                this.networkManager = new Genesis.NetworkManager(
                //new HttpWs(endpoint, this.options.defaultPollingInterval, this.options.pollingIntervalMap));
                new Genesis.StatefulHttpChannel(endpoint, this.options.defaultPollingInterval, this.options.pollingIntervalMap, this.options.updateMap, this.options.httpOverride, this.options.defaultTimeout, this.options.timeoutMap));
                this.networkManager.start();
                if (!this.resiliencyManager) {
                    this.resiliencyManager =
                        new Genesis.DefaultResiliencyManager(this, this.sourceRefGenerator, this.networkManager, Genesis.ServerStatus.Up);
                }
                this.authManager =
                    this.authManager || new Genesis.AuthManager(this.sourceRefGenerator, this.messageBuilder, this.networkManager);
                return this.authManager.login(options)
                    .then(function (result) {
                    _this.createResourceManager();
                    _this.startResiliencyManager();
                    _this.failoverManager = new Genesis.DummyFailoverManager();
                    // TODO: it might be a good idea to skip this test, and act only when the first call fails returning a "token invalid code"
                    // this way we can speed up the login process.
                    var deferred = P.defer();
                    _this.snapshot("ALL_PROCESSES_STATUS", {
                        // we don't care about the actual data, this is just a way to see if we can get a response using the auth token
                        columns: "ROW_REF"
                    })
                        .then(function () {
                        deferred.resolve({
                            authToken: result.authToken,
                            refreshToken: result.refreshToken,
                            roles: result.roles,
                            permissions: result.permissions
                        });
                    })
                        .fail(function (err) {
                        if (err.DETAILS.ERROR === "User is not logged in and supplied auth token is invalid.") {
                            _this.authManager.refreshToken()
                                .then(function (r) {
                                deferred.resolve({
                                    authToken: r.authToken,
                                    refreshToken: r.refreshToken,
                                    roles: r.roles,
                                    permissions: r.permissions
                                });
                            })
                                .fail(function (e) {
                                console.log("token renewal failed!");
                                deferred.reject({ message: "token renewal failed" });
                            });
                        }
                        else {
                            deferred.resolve({
                                authToken: result.authToken,
                                refreshToken: result.refreshToken,
                                roles: result.roles,
                                permissions: result.permissions
                            });
                        }
                    });
                    return deferred.promise();
                })
                    .fail(function (err) {
                    // something went wrong: wrong credentials, server down
                    if (err.type && err.type === "error") {
                        // NB: we don't need to reset neither the sourceRefGenerator nor the messageBuilder
                        // as they do not depend on network stuff
                        _this.failoverManager = null;
                        _this.resourceManager = null;
                        _this.authManager = null;
                        _this.resiliencyManager.stop();
                        _this.resiliencyManager = null;
                        _this.networkManager.stop();
                        _this.networkManager = null;
                    }
                });
            }
            var resiliencyOptions = {
                /** The number of milliseconds to delay before attempting to reconnect. */
                reconnectInterval: 1000,
                /** The maximum number of milliseconds to delay a reconnection attempt. */
                maxReconnectInterval: 30000,
                /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
                reconnectDecay: 1.5,
                /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
                timeoutInterval: 2000,
                /** The maximum number of reconnection attempts to make. Unlimited if null. */
                maxReconnectAttempts: null
            };
            // if the user has overridden any of the resiliency options
            if (options.resiliencyOptions) {
                resiliencyOptions.reconnectInterval = options.resiliencyOptions.reconnectInterval;
                resiliencyOptions.maxReconnectInterval = options.resiliencyOptions.maxReconnectInterval;
                resiliencyOptions.reconnectDecay = options.resiliencyOptions.reconnectDecay;
                resiliencyOptions.timeoutInterval = options.resiliencyOptions.timeoutInterval;
                resiliencyOptions.maxReconnectAttempts = options.resiliencyOptions.maxReconnectAttempts;
            }
            if (failover) {
                // TODO: "endpoints" not yet supported in failover mode
                this.networkManager =
                    this.networkManager || new Genesis.NetworkManager(new Genesis.NonReconnectingWebSocket(options.url, options.port, useTLS));
            }
            else {
                if (endpoint) {
                    this.networkManager =
                        this.networkManager || new Genesis.NetworkManager(new Genesis.ReconnectingWebSocket(options.url, -1, endpoint, resiliencyOptions, useTLS));
                }
                else {
                    this.networkManager =
                        this.networkManager || new Genesis.NetworkManager(new Genesis.ReconnectingWebSocket(options.url, options.port, null, resiliencyOptions, useTLS));
                }
            }
            this.networkManager.start();
            if (!this.resiliencyManager) {
                this.resiliencyManager =
                    new Genesis.DefaultResiliencyManager(this, this.sourceRefGenerator, this.networkManager, Genesis.ServerStatus.Up);
            }
            this.authManager =
                this.authManager || new Genesis.AuthManager(this.sourceRefGenerator, this.messageBuilder, this.networkManager);
            return this.authManager.login(options)
                .then(function (result) {
                _this.createResourceManager();
                _this.startResiliencyManager();
                if (failover) {
                    _this.failoverManager =
                        _this.failoverManager || new Genesis.FailoverManager(_this, _this.sourceRefGenerator, _this.messageBuilder, _this.networkManager, _this.resourceManager, _this.resiliencyManager, _this.authManager, options.port);
                    _this.failoverManager.start();
                }
                else {
                    _this.failoverManager = new Genesis.DummyFailoverManager();
                }
                // TODO: it might be a good idea to skip this test, and act only when the first call fails returning a "token invalid code"
                // this way we can speed up the login process.
                var deferred = P.defer();
                _this.snapshot("ALL_PROCESSES_STATUS", {
                    // we don't care about the actual data, this is just a way to see if we can get a response using the auth token
                    columns: "ROW_REF"
                })
                    .then(function () {
                    deferred.resolve({
                        authToken: result.authToken,
                        refreshToken: result.refreshToken,
                        roles: result.roles,
                        permissions: result.permissions
                    });
                })
                    .fail(function (err) {
                    if (err.DETAILS.ERROR === "User is not logged in and supplied auth token is invalid.") {
                        _this.authManager.refreshToken()
                            .then(function (r) {
                            deferred.resolve({
                                authToken: r.authToken,
                                refreshToken: r.refreshToken,
                                roles: r.roles,
                                permissions: r.permissions
                            });
                        })
                            .fail(function (e) {
                            console.log("token renewal failed!");
                            deferred.reject({ message: "token renewal failed" });
                        });
                    }
                    else {
                        deferred.resolve({
                            authToken: result.authToken,
                            refreshToken: result.refreshToken,
                            roles: result.roles,
                            permissions: result.permissions
                        });
                    }
                });
                return deferred.promise();
            })
                .fail(function (err) {
                // something went wrong: wrong credentials, server down
                if (err.type && err.type === "error") {
                    // NB: we don't need to reset neither the sourceRefGenerator nor the messageBuilder
                    // as they do not depend on network stuff
                    _this.failoverManager = null;
                    _this.resourceManager = null;
                    _this.authManager = null;
                    _this.resiliencyManager.stop();
                    _this.resiliencyManager = null;
                    _this.networkManager.stop();
                    _this.networkManager = null;
                }
            });
        };
        /**
         * Logs out from the server.
         *
         * @returns {Promise<void>}
         */
        DTA.prototype.logout = function () {
            var _this = this;
            this.assertUserIsLoggedIn("User is not logged in so cannot log out");
            return this.authManager.logout()
                .then(function () {
                _this.failoverManager.stop();
                _this.failoverManager = null;
                // TODO: we should stop also the networkManager, 
                // but if we do so we have a bug, being that the webSocket is not recreated!
                // TODO: we need to make sure that the failoverManager updates also this
                //this.networkManager.stop();
                _this.networkManager = null;
                _this.authManager = null;
                _this.resourceManager = null;
                // sourceRefGenerator
                // messageBuilder
                _this.resiliencyManager.stop();
                _this.resiliencyManager = null;
            });
        };
        /**
         * Gets if the user is currently logged in.
         *
         * @returns {boolean} true if the user is currently logged in, false othewise.
         */
        DTA.prototype.isLoggedIn = function () {
            if (!this.authManager) {
                return false;
            }
            return this.authManager.isLoggedIn();
        };
        /**
         * Changes the password for current user.
         *
         * @param {string} oldPassword
         * @param {string} newPassword
         *
         * @returns {Promise<void>}
         */
        DTA.prototype.changePassword = function (oldPassword, newPassword) {
            this.assertUserIsLoggedIn("User is not logged in so cannot change his own password");
            return this.authManager.changePassword(oldPassword, newPassword);
        };
        //----------------
        // Resource API
        //----------------
        /**
         * Creates a stream for the specified resource using the given parameters.
         *
         * @param {string} resourceName
         * @param {ISubscribeParams}, params [optional]
         *
         * @returns {Rx.Observable<IDataServerResult>} an observable collection
         */
        DTA.prototype.stream = function (resourceName, params) {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            return this.resourceManager.createSubscription(resourceName, params);
        };
        DTA.prototype.snapshot = function (resourceName, params) {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            return this.resourceManager.createSnapshot(resourceName, params);
        };
        DTA.prototype.moreRows = function (stream) {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            this.resourceManager.moreRows(stream);
        };
        DTA.prototype.updateColumns = function (stream, columnsToAdd, columnsToRemove) {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            this.resourceManager.updateColumns(stream, columnsToAdd, columnsToRemove);
        };
        /**
         * Commits a transaction for the specified resource using the given parameters.
         *
         * @param {string} resourceName
         * @param {ICommitParams} params
         *
         * @returns {Promise<void>}
         */
        DTA.prototype.commit = function (resourceName, params) {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            return this.resourceManager.commit(resourceName, params);
        };
        /**
         * Requests a snapshot query of data for the specified resource using the given parameters.
         *
         * @param {string} resourceName
         * @param {IRequestParams} params
         *
         * @returns {Promise<void>}
         */
        DTA.prototype.request = function (resourceName, params) {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            return this.resourceManager.request(resourceName, params);
        };
        /**
         * Gets all the available resources.
         *
         * @returns {Promise<IResourceDetails[]>}
         */
        DTA.prototype.getResources = function () {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            return this.resourceManager.getResources();
        };
        /**
         * Gets the metadata for the specified resource.
         *
         * @param {string} resourceName
         *
         * @returns {Promise<IMetadata>}
         */
        DTA.prototype.getMetadata = function (resourceName) {
            this.assertUserIsLoggedIn("Invalid state exception. The user is not logged in.");
            return this.resourceManager.getMetadata(resourceName);
        };
        Object.defineProperty(DTA.prototype, "onServerReachable", {
            get: function () {
                return this.resiliencyManager.onServerStatus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTA.prototype, "onSubscriptionStatus", {
            get: function () {
                return this.resourceManager.onSubscriptionStatus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTA.prototype, "onBeforeFailover", {
            get: function () {
                return this.failoverManager.onBeforeFailover;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTA.prototype, "onAfterFailover", {
            get: function () {
                return this.failoverManager.onAfterFailover;
            },
            enumerable: true,
            configurable: true
        });
        //----------------
        // AuthZ API
        //----------------
        // The Authz API encompasses the logic required for: 
        //  - ACLs, 
        //  - Roles, 
        //  - Permissions for private content.
        //
        // It also takes on the notion of Group Membership, 
        // since permissions are propagated down a chain of group membership
        DTA.prototype.authz = function () {
            return new Genesis.AuthZ(this, this.authManager.userName);
        };
        //-------------
        // Logging API
        //-------------
        DTA.prototype.messages = function () {
            return this.networkManager.messages;
        };
        Object.defineProperty(DTA.prototype, "serverUrl", {
            //--------------
            // Failover API
            //--------------
            get: function () {
                // HACK just to print the node we are currently connected to
                var hack = this.resourceManager;
                return hack.networkManager._webSocket.ws.url;
            },
            enumerable: true,
            configurable: true
        });
        //--------------------------
        // Private methods & fields
        //--------------------------
        DTA.prototype.startResiliencyManager = function () {
            this.resiliencyManager.start(this.stream("ALL_PROCESSES_STATUS", {
                columns: "PROCESS_HOSTNAME PROCESS_RESOURCES PROCESS_STATUS"
            }));
        };
        DTA.prototype.createResourceManager = function () {
            this.resourceManager =
                new Genesis.ResourceManager(this.resiliencyManager.onResourcesStatus, this.resiliencyManager.onServerStatus, this.authManager, this.networkManager, this.sourceRefGenerator);
        };
        DTA.prototype.assertUserIsLoggedIn = function (errorMessage) {
            if (!this.isLoggedIn()) {
                throw new Error(errorMessage);
            }
        };
        return DTA;
    }());
    Genesis.DTA = DTA;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=DTA.js.map
var Genesis;
(function (Genesis) {
    var FailoverManager = /** @class */ (function () {
        function FailoverManager(dta, sourceRefGenerator, messageBuilder, networkManager, resourceManager, resiliencyManager, authManager, port) {
            this.dta = dta;
            this.sourceRefGenerator = sourceRefGenerator;
            this.messageBuilder = messageBuilder;
            this.networkManager = networkManager;
            this.resourceManager = resourceManager;
            this.resiliencyManager = resiliencyManager;
            this.authManager = authManager;
            this.port = port;
            this._onBeforeFailover = new Rx.Subject();
            this._onAfterFailover = new Rx.Subject();
            this.current = 0;
            this.nodes = [];
        }
        FailoverManager.prototype.start = function () {
            var _this = this;
            // intercepting when the WEB_ADAPTER goes down
            this.setOnCloseEventHandler();
            var msg = this.messageBuilder.createRequestNodesMessage(this.sourceRefGenerator.newSourceRef());
            this.updateNodes(msg);
            // NB: we need to store the timer's id to stop it when "stop" is being called.
            this.updateNodesTimerId =
                setInterval(function () {
                    _this.updateNodes(msg);
                }, Consts.requestNodesInterval);
        };
        FailoverManager.prototype.stop = function () {
            this._onBeforeFailover = null;
            this._onAfterFailover = null;
            clearInterval(this.updateNodesTimerId);
        };
        Object.defineProperty(FailoverManager.prototype, "onBeforeFailover", {
            get: function () {
                return this._onBeforeFailover;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FailoverManager.prototype, "onAfterFailover", {
            get: function () {
                return this._onAfterFailover;
            },
            enumerable: true,
            configurable: true
        });
        FailoverManager.prototype.updateNodes = function (msg) {
            var _this = this;
            this.networkManager.send(msg, function (result) {
                var nodes = result.AVAILABLE_NODES.split(",");
                for (var i = 0; i < nodes.length; i++) {
                    // NB: the port is the same of the primary node, since they are running in a cluster environment
                    _this.nodes.push({
                        url: nodes[i], port: _this.port
                    });
                }
            });
        };
        FailoverManager.prototype.reset = function (node) {
            var _this = this;
            var evt = new FailoverEvent(node.url, node.port);
            if (this._onBeforeFailover) {
                this._onBeforeFailover.onNext(evt);
            }
            this.resiliencyManager.stop();
            var webSocket = new Genesis.NonReconnectingWebSocket(node.url, node.port, false);
            this.networkManager =
                new Genesis.NetworkManager(webSocket);
            // TODO: also dta.networkManager should be updated
            //var hack: any = this.dta;
            //hack.networkManager = this.networkManager;
            this.networkManager.start();
            // intercepting when the WEB_ADAPTER goes down
            this.setOnCloseEventHandler();
            this.waitForConnection(webSocket, function () {
                _this.resiliencyManager.reset(_this.networkManager);
                // re-establish all the subscriptions, including ALL_RESOURCES_STATUS, used by the resiliency manager
                if (_this.dta.isLoggedIn()) {
                    _this.resourceManager.reset(_this.networkManager);
                }
                if (_this._onAfterFailover) {
                    _this._onAfterFailover.onNext(evt);
                }
            }, 100);
        };
        FailoverManager.prototype.waitForConnection = function (webSocket, callback, interval) {
            var _this = this;
            if (webSocket.readyState === Genesis.ConnectivityConsts.OPEN) {
                callback();
            }
            else {
                setTimeout(function () {
                    _this.waitForConnection(webSocket, callback, interval);
                }, interval);
            }
        };
        FailoverManager.prototype.getNextAvailableNode = function () {
            this.current++;
            if (this.current === this.nodes.length) {
                this.current = 0;
            }
            return this.nodes[this.current];
        };
        FailoverManager.prototype.setOnCloseEventHandler = function () {
            var _this = this;
            this.networkManager.onClose.subscribeOnNext(function (evt) {
                var node = _this.getNextAvailableNode();
                _this.reset(node);
            });
        };
        return FailoverManager;
    }());
    Genesis.FailoverManager = FailoverManager;
    var DummyFailoverManager = /** @class */ (function () {
        function DummyFailoverManager() {
            this._onBeforeFailover = new Rx.Subject();
            this._onAfterFailover = new Rx.Subject();
        }
        DummyFailoverManager.prototype.start = function () { };
        DummyFailoverManager.prototype.stop = function () { };
        Object.defineProperty(DummyFailoverManager.prototype, "onBeforeFailover", {
            get: function () {
                return this._onBeforeFailover;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DummyFailoverManager.prototype, "onAfterFailover", {
            get: function () {
                return this._onAfterFailover;
            },
            enumerable: true,
            configurable: true
        });
        return DummyFailoverManager;
    }());
    Genesis.DummyFailoverManager = DummyFailoverManager;
    var Consts = /** @class */ (function () {
        function Consts() {
        }
        // Request nodes
        Consts.requestNodesInterval = 60 * 1000;
        return Consts;
    }());
    var FailoverEvent = /** @class */ (function () {
        function FailoverEvent(url, port) {
            this.url = url;
            this.port = port;
        }
        return FailoverEvent;
    }());
    Genesis.FailoverEvent = FailoverEvent;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=FailoverManager.js.map
var Genesis;
(function (Genesis) {
    var GuidSourceRefGenerator = /** @class */ (function () {
        function GuidSourceRefGenerator() {
        }
        GuidSourceRefGenerator.prototype.newSourceRef = function () {
            return Genesis.createGuid();
        };
        return GuidSourceRefGenerator;
    }());
    Genesis.GuidSourceRefGenerator = GuidSourceRefGenerator;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=GuidSourceRefGenerator.js.map
var Genesis;
(function (Genesis) {
    var JsonParamsParser = /** @class */ (function () {
        function JsonParamsParser() {
            this._supportedParams = [
                Genesis.Params.maxRows,
                Genesis.Params.criteria,
                Genesis.Params.columns,
                Genesis.Params.requestFields,
                Genesis.Params.validate,
                Genesis.Params.ignoreWarnings,
                Genesis.Params.details,
                Genesis.Params.actAs,
                Genesis.Params.orderBy,
                Genesis.Params.reverse,
                Genesis.Params.maxView,
                Genesis.Params.movingView,
                Genesis.Params.retryInterval,
                Genesis.Params.maxRetryAttempts,
                Genesis.Params.isParentFn,
                Genesis.Params.drilldownFn,
                Genesis.Params.skipPostProcessing,
                Genesis.Params.hostname
            ];
        }
        JsonParamsParser.prototype.parseResourceName = function (resourceName, params) {
            var res = resourceName.split("|");
            var serviceName = res[0];
            var messageType = res[1];
            var opt = {
                serviceName: serviceName,
                messageType: messageType,
                unknown: []
            };
            if (params) {
                if (params.maxRows) {
                    opt[Genesis.Params.maxRows] = params.maxRows;
                }
                if (params.criteria) {
                    opt[Genesis.Params.criteria] = params.criteria;
                }
                if (params.columns) {
                    opt[Genesis.Params.columns] = params.columns;
                }
                if (params.actAs) {
                    opt[Genesis.Params.actAs] = params.actAs;
                }
                if (params.orderBy) {
                    opt[Genesis.Params.orderBy] = params.orderBy;
                }
                if (params.reverse) {
                    opt[Genesis.Params.reverse] = params.reverse;
                }
                if (params.maxView) {
                    opt[Genesis.Params.maxView] = params.maxView;
                }
                if (params.movingView) {
                    opt[Genesis.Params.movingView] = params.movingView;
                }
                if (params.retryInterval) {
                    opt[Genesis.Params.retryInterval] = params.retryInterval;
                }
                if (params.maxRetryAttempts) {
                    opt[Genesis.Params.maxRetryAttempts] = params.maxRetryAttempts;
                }
                if (params.requestFields) {
                    opt[Genesis.Params.requestFields] = params.requestFields;
                }
                if (params.details) {
                    opt[Genesis.Params.details] = params.details;
                }
                if (params.hasOwnProperty(Genesis.Params.ignoreWarnings)) {
                    opt[Genesis.Params.ignoreWarnings] = params.ignoreWarnings;
                }
                if (params.hasOwnProperty(Genesis.Params.validate)) {
                    opt[Genesis.Params.validate] = params.validate;
                }
                if (params.isParentFn) {
                    opt[Genesis.Params.isParentFn] = params.isParentFn;
                }
                if (params.drilldownFn) {
                    opt[Genesis.Params.drilldownFn] = params.drilldownFn;
                }
                if (params.hostname) {
                    opt[Genesis.Params.hostname] = params.hostname;
                }
                // check for unsupported params.
                this._checkForUnsupportedParams(params);
            }
            return {
                params: opt
            };
        };
        JsonParamsParser.prototype._checkForUnsupportedParams = function (params) {
            for (var property in params) {
                if (params.hasOwnProperty(property)) {
                    if (this._supportedParams.indexOf(property) === -1) {
                        throw new Error("'" + property + "' is not a supported DTA param.");
                    }
                }
            }
        };
        return JsonParamsParser;
    }());
    Genesis.JsonParamsParser = JsonParamsParser;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=JsonParamsParser.js.map
var Genesis;
(function (Genesis) {
    /**
     * The login options.
     */
    var LoginOptions = /** @class */ (function () {
        function LoginOptions(
        /**
         * The url.
         */
        url, 
        /**
         * The port.
         */
        port, 
        /**
         * The user credentials.
         */
        credentials, 
        /**
         * The resiliency options.
         */
        resiliencyOptions, 
        /**
         * The authentication token.
         */
        authToken) {
            this.url = url;
            this.port = port;
            this.credentials = credentials;
            this.resiliencyOptions = resiliencyOptions;
            this.authToken = authToken;
        }
        return LoginOptions;
    }());
    Genesis.LoginOptions = LoginOptions;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=LoginOptions.js.map
var Genesis;
(function (Genesis) {
    var MessageBuilder = /** @class */ (function () {
        function MessageBuilder() {
        }
        MessageBuilder.prototype.createLoginMessage = function (sourceRef, credentials) {
            return {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: Consts.loginMessageType,
                SERVICE_NAME: Consts.loginServiceName,
                DETAILS: {
                    USER_NAME: credentials.userName,
                    PASSWORD: credentials.password
                }
            };
        };
        MessageBuilder.prototype.createRefreshTokenMessage = function (sourceRef, userName, refreshToken) {
            return {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: Consts.loginMessageType,
                SERVICE_NAME: Consts.loginServiceName,
                DETAILS: {
                    USER_NAME: userName,
                    REFRESH_AUTH_TOKEN: refreshToken
                }
            };
        };
        MessageBuilder.prototype.createLogoutMessage = function (sourceRef, authToken, userName, sessionId) {
            return {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: Consts.logoutMessageType,
                SERVICE_NAME: Consts.logoutServiceName,
                USER_NAME: userName,
                SESSION_AUTH_TOKEN: authToken,
                SESSION_ID: sessionId
            };
        };
        MessageBuilder.prototype.createDataLogonMessage = function (sourceRef, authToken, userName, resourceName, params) {
            var msg = {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: Consts.dataLogonMessageType,
                USER_NAME: userName,
                DETAILS: {
                    DATASOURCE_NAME: resourceName
                },
                SESSION_AUTH_TOKEN: authToken
            };
            if (params) {
                if (params[Genesis.Params.maxRows]) {
                    msg.DETAILS[Consts.dataLogonParamsMaxRows] = params[Genesis.Params.maxRows];
                }
                if (params[Genesis.Params.criteria]) {
                    msg.DETAILS[Consts.dataLogonParamsCriteria] = params[Genesis.Params.criteria];
                }
                if (params[Genesis.Params.columns]) {
                    msg.DETAILS[Consts.dataLogonParamsColumns] = params[Genesis.Params.columns];
                }
                if (params[Genesis.Params.orderBy]) {
                    msg.DETAILS[Consts.dataLogonParamsOrderBy] = params[Genesis.Params.orderBy];
                }
                if (params[Genesis.Params.reverse]) {
                    msg.DETAILS[Consts.dataLogonParamsReverse] = params[Genesis.Params.reverse];
                }
                if (params[Genesis.Params.maxView]) {
                    msg.DETAILS[Consts.dataLogonParamsMaxView] = params[Genesis.Params.maxView];
                }
                if (params[Genesis.Params.movingView]) {
                    msg.DETAILS[Consts.dataLogonParamsMovingView] = params[Genesis.Params.movingView];
                }
            }
            return msg;
        };
        MessageBuilder.prototype.createMetadataMessage = function (sourceRef, authToken, resourceName) {
            return {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: Consts.metadataMessageType,
                DETAILS: {
                    FEATURE: resourceName
                },
                SESSION_AUTH_TOKEN: authToken
            };
        };
        MessageBuilder.prototype.createGetResourcesMessage = function (sourceRef, authToken) {
            return {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: Consts.resourcesMessageType,
                SESSION_AUTH_TOKEN: authToken
            };
        };
        MessageBuilder.prototype.createRequestMessage = function (sourceRef, authToken, userName, params) {
            var msg = {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: params.serviceName,
                USER_NAME: userName,
                REQUEST: {},
                DETAILS: {},
                SESSION_AUTH_TOKEN: authToken
            };
            delete params.messageType;
            for (var field in params) {
                if (params.hasOwnProperty(field)) {
                    msg[field] = params[field];
                }
            }
            if (params.hasOwnProperty(Genesis.Params.hostname)) {
                msg["HOSTNAME"] = msg[Genesis.Params.hostname];
                delete msg[Genesis.Params.hostname];
            }
            if (params.hasOwnProperty(Genesis.Params.requestFields)) {
                msg["REQUEST"] = msg[Genesis.Params.requestFields];
                delete msg[Genesis.Params.requestFields];
            }
            if (params.hasOwnProperty(Genesis.Params.maxRows)) {
                msg.DETAILS["MAX_ROWS"] = msg[Genesis.Params.maxRows];
                delete msg[Genesis.Params.maxRows];
            }
            else {
                delete msg.DETAILS;
            }
            // NB: special case, actAs does *NOT* require any additional message parameter to be set.
            if (params.hasOwnProperty(Genesis.Params.actAs)) {
                delete msg[Genesis.Params.actAs];
            }
            return msg;
        };
        MessageBuilder.prototype.createCommitMessage = function (sourceRef, authToken, userName, resourceName, params) {
            var msg = {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: resourceName,
                USER_NAME: userName,
                SESSION_AUTH_TOKEN: authToken
            };
            for (var field in params) {
                if (params.hasOwnProperty(field)) {
                    msg[field] = params[field];
                }
            }
            if (params.hasOwnProperty(Genesis.Params.hostname)) {
                msg["HOSTNAME"] = msg[Genesis.Params.hostname];
                delete msg[Genesis.Params.hostname];
            }
            if (params.hasOwnProperty(Genesis.Params.details)) {
                msg["DETAILS"] = msg[Genesis.Params.details];
                delete msg[Genesis.Params.details];
            }
            if (params.hasOwnProperty(Genesis.Params.validate)) {
                msg["VALIDATE"] = msg[Genesis.Params.validate];
                delete msg[Genesis.Params.validate];
            }
            if (params.hasOwnProperty(Genesis.Params.ignoreWarnings)) {
                msg["IGNORE_WARNINGS"] = msg[Genesis.Params.ignoreWarnings];
                delete msg[Genesis.Params.ignoreWarnings];
            }
            // NB: special case, actAs does *NOT* require any additional message parameter to be set.
            if (params.hasOwnProperty(Genesis.Params.actAs)) {
                delete msg[Genesis.Params.actAs];
            }
            return msg;
        };
        MessageBuilder.prototype.createDataLogoffMessage = function (sourceRef, authToken) {
            return {
                SOURCE_REF: sourceRef,
                MESSAGE_TYPE: Consts.dataLogoffMessageType,
                SESSION_AUTH_TOKEN: authToken
            };
        };
        MessageBuilder.prototype.createChangePasswordMessage = function (sourceRef, authToken, userName, oldPassword, newPassword) {
            return {
                MESSAGE_TYPE: Consts.changePasswordMessageType,
                SOURCE_REF: sourceRef,
                DETAILS: {
                    USER_NAME: userName,
                    OLD_PASSWORD: oldPassword,
                    NEW_PASSWORD: newPassword
                },
                SESSION_AUTH_TOKEN: authToken
            };
        };
        MessageBuilder.prototype.createHeartbeatMessage = function (sourceRef) {
            return {
                MESSAGE_TYPE: Consts.heartbeatMessageType,
                SOURCE_REF: sourceRef
            };
        };
        MessageBuilder.prototype.createRequestNodesMessage = function (sourceRef) {
            return {
                MESSAGE_TYPE: Consts.requestNodesMessageType,
                SOURCE_REF: sourceRef
            };
        };
        MessageBuilder.prototype.createMoreRowsMessage = function (sourceRef, streamSourceRef, authToken) {
            return {
                MESSAGE_TYPE: Consts.moreRowsMessageType,
                SOURCE_REF: sourceRef,
                SESSION_AUTH_TOKEN: authToken,
                DETAILS: {
                    SOURCE_REF: streamSourceRef
                }
            };
        };
        MessageBuilder.prototype.createUpdateColumnsMessage = function (sourceRef, streamSourceRef, columnsToAdd, columnsToRemove, authToken) {
            return {
                MESSAGE_TYPE: Consts.updateColumnsMessageType,
                SOURCE_REF: sourceRef,
                SESSION_AUTH_TOKEN: authToken,
                DETAILS: {
                    SOURCE_REF: streamSourceRef,
                    ADD_COLUMNS: columnsToAdd,
                    DROP_COLUMNS: columnsToRemove
                }
            };
        };
        return MessageBuilder;
    }());
    Genesis.MessageBuilder = MessageBuilder;
    var Consts = /** @class */ (function () {
        function Consts() {
        }
        // Login
        Consts.loginMessageType = "TXN_LOGIN_AUTH";
        Consts.loginServiceName = "AUTH_MANAGER";
        // Logout
        Consts.logoutMessageType = "TXN_LOGOUT";
        Consts.logoutServiceName = "AUTH_MANAGER";
        // Metadata
        Consts.metadataMessageType = "META_REQUEST";
        // Resources
        Consts.resourcesMessageType = "RESOURCES_REQUEST";
        // Password
        Consts.changePasswordMessageType = "TXN_CHANGE_USER_PASSWORD";
        // Data logon
        Consts.dataLogonMessageType = "DATA_LOGON";
        Consts.dataLogonParamsMaxRows = "MAX_ROWS";
        Consts.dataLogonParamsCriteria = "CRITERIA_MATCH";
        Consts.dataLogonParamsColumns = "FIELDS";
        Consts.dataLogonParamsOrderBy = "ORDER_BY";
        Consts.dataLogonParamsReverse = "REVERSE";
        Consts.dataLogonParamsMaxView = "MAX_VIEW";
        Consts.dataLogonParamsMovingView = "MOVING_VIEW";
        Consts.dataLogonAck = "LOGON_ACK";
        Consts.dataLogonNack = "LOGON_NACK";
        // Data logoff
        Consts.dataLogoffMessageType = "DATA_LOGOFF";
        // Shutdown
        Consts.shutdown = "DATA_LOG_TERMINATED";
        // Hearbeats
        Consts.heartbeatMessageType = "HEARTBEAT_PING";
        // Fail-over
        Consts.requestNodesMessageType = "REQUEST_NODES";
        Consts.moreRowsMessageType = "MORE_ROWS";
        Consts.updateColumnsMessageType = "MORE_COLUMNS";
        return Consts;
    }());
})(Genesis || (Genesis = {}));
//# sourceMappingURL=MessageBuilder.js.map
var Genesis;
(function (Genesis) {
    /**
     * Provides a message routing system using IWebSocket and SOURCE_REF
     */
    var NetworkManager = /** @class */ (function () {
        function NetworkManager(websocket) {
            this._onOpenSubject = new Rx.Subject();
            this._onCloseSubject = new Rx.Subject();
            this._messageListeners = {};
            this._loggingSubject = new Rx.ReplaySubject(3);
            if (websocket) {
                this._webSocket = websocket;
            }
        }
        NetworkManager.prototype.start = function () {
            this._setupWebSocketEventHandlers();
        };
        NetworkManager.prototype.stop = function () {
            this._webSocket.close(1000); // NB: "1000" means "CLOSE_NORMAL". See https://developer.mozilla.org/it/docs/Web/API/CloseEvent
            this._webSocket = undefined;
        };
        NetworkManager.prototype.send = function (msg, onSuccess, onError, keepAlive) {
            var _this = this;
            if (keepAlive === void 0) { keepAlive = false; }
            this.addMessageListener(msg.SOURCE_REF, onSuccess, onError, keepAlive);
            this._log({
                isOutgoing: true,
                message: msg
            });
            var jsonMsg = JSON.stringify(msg);
            this._waitForConnection(function () {
                _this._webSocket.send(jsonMsg);
            });
        };
        NetworkManager.prototype.addMessageListener = function (sourceRef, onSuccess, onError, keepAlive) {
            if (keepAlive === void 0) { keepAlive = false; }
            this._messageListeners[sourceRef] = new MessageHandlers(onSuccess, onError, keepAlive);
        };
        NetworkManager.prototype.removeMessageListener = function (sourceRef) {
            delete this._messageListeners[sourceRef];
        };
        Object.defineProperty(NetworkManager.prototype, "onOpen", {
            get: function () {
                return this._onOpenSubject;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetworkManager.prototype, "onClose", {
            get: function () {
                return this._onCloseSubject;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetworkManager.prototype, "messages", {
            get: function () {
                return this._loggingSubject;
            },
            enumerable: true,
            configurable: true
        });
        NetworkManager.prototype._setupWebSocketEventHandlers = function () {
            var _this = this;
            // NB: do NOT remove the following lines, it will make the tests fail
            this.setWebSocketOnMessageEventHandler();
            this.setWebSocketOnErrorEventHandler();
            // <---
            this._webSocket.addOnCloseEvtHandler(function (ev) {
                _this._onCloseSubject.onNext(ev);
                _this._messageListeners = {};
            });
            this._webSocket.setOnOpenEvtHandler(function (ev) {
                // when a new web socket is opened we need to set up its event handlers.
                _this.setWebSocketOnMessageEventHandler();
                _this.setWebSocketOnErrorEventHandler();
                // TODO: HACK, ensuring that just ONE onclose event handler is set.
                // we can change the IWebSocket interface so that instead of an "addOnCloseEvtHandler" we have "setOnCloseEvtHandler"
                var hack = _this._webSocket;
                if (hack._onclose.length === 0) {
                    _this._webSocket.addOnCloseEvtHandler(function (ev) {
                        _this._onCloseSubject.onNext(ev);
                        _this._messageListeners = {};
                    });
                }
                _this._onOpenSubject.onNext(ev);
            });
        };
        NetworkManager.prototype.setWebSocketOnMessageEventHandler = function () {
            var _this = this;
            this._webSocket.onmessage =
                function (event) {
                    var message = JSON.parse(event.data);
                    _this._log({
                        isOutgoing: false,
                        message: message
                    });
                    var sourceRef = message.SOURCE_REF;
                    if (sourceRef &&
                        _this._messageListeners[sourceRef] &&
                        _this._messageListeners[sourceRef].onSuccess) {
                        _this._messageListeners[sourceRef].onSuccess(message);
                    }
                    // when dealing with DS requests we want to keep the listener for future messages.
                    // NB: when onError/onCompleted is called at the higher level the observable is disposed, 
                    // and so the corresponding messageListener.
                    if (_this._messageListeners[sourceRef] && !_this._messageListeners[sourceRef].keepAlive) {
                        delete _this._messageListeners[sourceRef];
                    }
                };
        };
        NetworkManager.prototype.setWebSocketOnErrorEventHandler = function () {
            var _this = this;
            this._webSocket.onerror =
                function (err) {
                    if (_this._messageListeners) {
                        for (var i in _this._messageListeners) {
                            _this._messageListeners[i].onError(err);
                        }
                    }
                };
        };
        NetworkManager.prototype._waitForConnection = function (callback, interval) {
            var _this = this;
            // if the web socket has been disposed we don't need to send any message.
            if (!this._webSocket) {
                return;
            }
            if (this._webSocket.readyState === Genesis.ConnectivityConsts.OPEN) {
                callback();
            }
            else {
                setTimeout(function () {
                    _this._waitForConnection(callback, interval);
                }, interval);
            }
        };
        NetworkManager.prototype._log = function (event) {
            // add a timestamp
            event.timestamp = new Date().getTime();
            this._loggingSubject.onNext(event);
        };
        return NetworkManager;
    }());
    Genesis.NetworkManager = NetworkManager;
    var MessageHandlers = /** @class */ (function () {
        function MessageHandlers(onSuccessFn, onErrorFn, keepAlive) {
            this.onSuccessFn = onSuccessFn;
            this.onErrorFn = onErrorFn;
            this._keepAlive = keepAlive;
        }
        Object.defineProperty(MessageHandlers.prototype, "onSuccess", {
            get: function () {
                return this.onSuccessFn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MessageHandlers.prototype, "onError", {
            get: function () {
                return this.onErrorFn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MessageHandlers.prototype, "keepAlive", {
            get: function () {
                return this._keepAlive;
            },
            enumerable: true,
            configurable: true
        });
        return MessageHandlers;
    }());
})(Genesis || (Genesis = {}));
//# sourceMappingURL=NetworkManager.js.map
var Genesis;
(function (Genesis) {
    /**
     * DTA supported params.
     */
    var Params = /** @class */ (function () {
        function Params() {
        }
        Params.maxRows = "maxRows";
        Params.criteria = "criteria";
        Params.columns = "columns";
        Params.requestFields = "requestFields";
        Params.validate = "validate";
        Params.ignoreWarnings = "ignoreWarnings";
        Params.details = "details";
        Params.actAs = "actAs";
        Params.orderBy = "orderBy";
        Params.reverse = "reverse";
        Params.maxView = "maxView";
        Params.movingView = "movingView";
        Params.retryInterval = "retryInterval";
        Params.maxRetryAttempts = "maxRetryAttempts";
        Params.isParentFn = "isParentFn";
        Params.drilldownFn = "drilldownFn";
        Params.skipPostProcessing = "skipPostProcessing";
        Params.hostname = "hostname";
        return Params;
    }());
    Genesis.Params = Params;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=Params.js.map
var Genesis;
(function (Genesis) {
    var ResiliencyOptions = /** @class */ (function () {
        function ResiliencyOptions(reconnectInterval, maxReconnectInterval, reconnectDecay, timeoutInterval, maxReconnectAttempts) {
            if (reconnectInterval === void 0) { reconnectInterval = 1000; }
            if (maxReconnectInterval === void 0) { maxReconnectInterval = 30000; }
            if (reconnectDecay === void 0) { reconnectDecay = 1.5; }
            if (timeoutInterval === void 0) { timeoutInterval = 2000; }
            this.reconnectInterval = reconnectInterval;
            this.maxReconnectInterval = maxReconnectInterval;
            this.reconnectDecay = reconnectDecay;
            this.timeoutInterval = timeoutInterval;
            this.maxReconnectAttempts = maxReconnectAttempts;
        }
        return ResiliencyOptions;
    }());
    Genesis.ResiliencyOptions = ResiliencyOptions;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=ResiliencyOptions.js.map
var Genesis;
(function (Genesis) {
    // create and reestablish subscriptions
    var ResourceManager = /** @class */ (function () {
        function ResourceManager(onResourcesStatus, onServerStatus, authProvider, networkManager, sourceRefGenerator) {
            var _this = this;
            this.authProvider = authProvider;
            this._onSubscriptionStatus = new Rx.Subject();
            this._sourceRefsByResourceName = {};
            this.subscriptionsInfos = {};
            this._messageBuilder = new Genesis.MessageBuilder();
            this._parser = new Genesis.JsonParamsParser();
            this.networkManager = networkManager;
            this._sourceRefGenerator = sourceRefGenerator;
            onResourcesStatus.subscribeOnNext(function (resources) {
                for (var i = 0; i < resources.length; i++) {
                    _this._tryRestoreSubscriptions(resources[i]);
                }
            });
            onServerStatus.subscribeOnNext(function (value) {
                if (value === Genesis.ServerStatus.Up) {
                    // check resource availability before trying to re-establish the subscriptions
                    //  resources could have gone down when the WEB_ADAPTER was unavailable.
                    _this.getResources().then(function (data) {
                        var subscriptionsInfos = Genesis.extend({}, _this.subscriptionsInfos);
                        for (var k in subscriptionsInfos) {
                            if (subscriptionsInfos.hasOwnProperty(k)) {
                                if (data.some(function (resourceDetails) { return resourceDetails.RESOURCE_NAME === subscriptionsInfos[k].resourceName; })) {
                                    _this._restoreSubscription(subscriptionsInfos[k]);
                                    delete _this.subscriptionsInfos[k];
                                }
                            }
                        }
                    });
                }
            });
        }
        /**
         * Creates a stream for the specified resource using the given parameters.
         *
         * @param {string} resourceName
         * @param {ISubscribeParams}, params [optional]
         *
         * @returns {Rx.Observable<IDataServerResult>} an observable collection
         */
        ResourceManager.prototype.createSubscription = function (resourceName, params) {
            var _this = this;
            this._validateResourceName(resourceName);
            var tokens = this._parser.parseResourceName(resourceName, params);
            var userName;
            if (params && params.actAs) {
                userName = params.actAs;
            }
            else {
                userName = this.authProvider.userName;
            }
            // set default values for 'maxRetryAttempts' and 'retryInterval'.
            if (!params) {
                params = {
                    maxRetryAttempts: -1
                };
            }
            else {
                if (params.maxRetryAttempts === undefined || params.maxRetryAttempts === null) { // '0' is a valid value!
                    params.maxRetryAttempts = -1;
                }
            }
            params.retryInterval = params.retryInterval || 3000;
            var authToken = this.authProvider.authToken;
            var observable = Rx.Observable.create(function (obs) {
                var sourceRef = _this._sourceRefGenerator.newSourceRef();
                // NB: here we're fighting against javascript. 
                // In principle we should be doing something like the following but js doesn't allow objects to be used as keys
                //  http://stackoverflow.com/questions/194846/is-there-any-kind-of-hash-code-function-in-javascript
                //this._srcRefsByObserver[<any>(obs)] = sourceRef; // <-- hack to let the ts compiler accept this expression!
                // hence we're storing the srcRef as a private member of the observer
                obs.srcRef = sourceRef;
                var attempts = 0;
                var tryGetResource = function () {
                    // when dealing with the refresh token scenario (http) we have to update the token otherwise
                    // the requests keep failing.
                    // Originally the message was only created once before entering the tryGetResource loop.
                    var msg = _this._messageBuilder.createDataLogonMessage(sourceRef, _this.authProvider.authToken, userName, resourceName, tokens.params);
                    if (params.maxRetryAttempts === -1 || attempts <= params.maxRetryAttempts) {
                        attempts++;
                        _this.networkManager.send(msg, function (message) {
                            var messageType = message.MESSAGE_TYPE;
                            switch (messageType) {
                                case Genesis.Consts.dataLogonAck:
                                    // saving params for a later restore of the subscription.
                                    var subscriptionInfo = params.skipPostProcessing ?
                                        new Genesis.SkipPostProcessingSubscriptionInfo(resourceName, obs, sourceRef, params) :
                                        new Genesis.SubscriptionInfo(resourceName, obs, sourceRef, params);
                                    _this.subscriptionsInfos[sourceRef] = subscriptionInfo;
                                    // save the sourceRefs linked by resourceName, to be used when cleaning up during the restore subscription scenario.
                                    if (!_this._sourceRefsByResourceName[resourceName]) {
                                        _this._sourceRefsByResourceName[resourceName] = new Array();
                                    }
                                    _this._sourceRefsByResourceName[resourceName].push(subscriptionInfo);
                                    break;
                                case Genesis.Consts.dataLogonNack:
                                    obs.onError({
                                        kind: Genesis.Consts.dataLogonNack
                                    });
                                    break;
                                case Genesis.Consts.msgNack:
                                    obs.onError({ message: message.ERROR[0].CODE });
                                    break;
                                case Genesis.Consts.queryUpdateMessageType:
                                    try {
                                        _this.subscriptionsInfos[sourceRef].onNewData(message);
                                    }
                                    catch (err) {
                                    }
                                    break;
                                case Genesis.Consts.shutdown: // a process has been terminated OR as the final message after an unsubscribe.
                                    //obs.onCompleted(); // or obs.onError(...)
                                    _this._onSubscriptionStatus.onNext(new SubscriptionStatusChangedEvent(resourceName, params, false));
                                    break;
                                default:
                                    // TODO
                                    var hack = message;
                                    if (hack.DETAILS.ERROR.indexOf("does not exist")) {
                                        if (params.maxRetryAttempts !== -1 && attempts >= params.maxRetryAttempts) {
                                            obs.onError(message);
                                        }
                                        else {
                                            setTimeout(function () {
                                                tryGetResource();
                                            }, params.retryInterval);
                                        }
                                    }
                                    else {
                                        obs.onError(message);
                                    }
                                    break;
                            }
                        }, null, true);
                    }
                };
                tryGetResource();
                // Return way to unsubscribe
                return Rx.Disposable.create(function () {
                    _this._sendTermSignal(sourceRef);
                    // resource cleanup
                    delete _this.subscriptionsInfos[sourceRef];
                    for (var k in _this._sourceRefsByResourceName) {
                        for (var j = 0; j < _this._sourceRefsByResourceName[k].length; j++) {
                            if (_this._sourceRefsByResourceName[k][j].sourceRef === sourceRef) {
                                _this._sourceRefsByResourceName[k].splice(j, 1);
                            }
                        }
                    }
                    _this.networkManager.removeMessageListener(sourceRef);
                });
            });
            return observable;
        };
        Object.defineProperty(ResourceManager.prototype, "onSubscriptionStatus", {
            get: function () {
                return this._onSubscriptionStatus;
            },
            enumerable: true,
            configurable: true
        });
        ResourceManager.prototype.createSnapshot = function (resourceName, params) {
            var result = P.defer();
            if (params) {
                params.maxRetryAttempts = 0;
            }
            else {
                params = {
                    maxRetryAttempts: 0
                };
            }
            var stream = this.createSubscription(resourceName, params)
                .take(1)
                .subscribe(function (data) {
                result.resolve(data.all);
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            }, function (err) {
                result.reject(err);
                stream.dispose(); // we are interested in providing a one-shot view of the data.
            }, null);
            return result.promise();
        };
        ResourceManager.prototype.moreRows = function (stream) {
            var sourceRef = this._sourceRefGenerator.newSourceRef();
            // nasty way to retrieve the srcRef from the subscription
            var streamSourceRef = stream.srcRef;
            var msg = this._messageBuilder.createMoreRowsMessage(sourceRef, streamSourceRef, this.authProvider.authToken);
            // TODO: answer messages from the WEB_ADAPTER are not yet supported for MORE_ROWS
            //var result = P.defer<any>();
            //this.networkManager.send(msg, event => {
            //    result.resolve({});
            //}, err => result.reject(err));
            //return result.promise();
            this.networkManager.send(msg);
        };
        ResourceManager.prototype.updateColumns = function (stream, columnsToAdd, columnsToRemove) {
            if (columnsToAdd === "") {
                columnsToAdd = undefined;
            }
            if (columnsToRemove === "") {
                columnsToRemove = undefined;
            }
            var sourceRef = this._sourceRefGenerator.newSourceRef();
            // nasty way to retrieve the srcRef from the subscription
            var streamSourceRef = stream.srcRef;
            var msg = this._messageBuilder.createUpdateColumnsMessage(sourceRef, streamSourceRef, columnsToAdd, columnsToRemove, this.authProvider.authToken);
            // TODO: answer messages from the WEB_ADAPTER are not yet supported for UPDATE_COLUMNS
            //var result = P.defer<any>();
            //this.networkManager.send(msg, event => {
            //    result.resolve({});
            //}, err => result.reject(err));
            //return result.promise();
            this.networkManager.send(msg);
        };
        /**
         * Commits a transaction for the specified resource using the given parameters.
         *
         * @param {string} resourceName
         * @param {ICommitParams} params
         *
         * @returns {Promise<void>}
         */
        ResourceManager.prototype.commit = function (resourceName, params) {
            var _this = this;
            this._validateResourceName(resourceName);
            var checkParamsFn = function (tokens, deferred) {
                if (tokens.params[Genesis.Params.maxRows] ||
                    tokens.params[Genesis.Params.criteria] ||
                    tokens.params[Genesis.Params.columns]) {
                    deferred.reject({ message: "TransactionHandlers do not support 'maxRows', 'criteria', or 'columns' params." });
                    return false;
                }
                return true;
            };
            var buildMessageFn = function (tokens, sourceRef) {
                var userName;
                if (params && params.actAs) {
                    userName = params.actAs;
                }
                else {
                    userName = _this.authProvider.userName;
                }
                return _this._messageBuilder.createCommitMessage(sourceRef, _this.authProvider.authToken, userName, tokens.params.serviceName, params);
            };
            var onMessageFn = function (event, deferred) {
                var messageType = event.MESSAGE_TYPE;
                // HOTFIX: 20/10/2015, to also recognise TXN_PROFILE_ACK/NACK as txn return codes.
                var match = false;
                if (messageType) {
                    //if (messageType.startsWith("TXN_")) {
                    if (messageType.indexOf("TXN_") === 0) { // HOTFIX: on IE 11 startsWith does not work properly. String is passed as an object therefore it does not have "lastIndexOf"
                        if (messageType.endsWith("_ACK")) {
                            deferred.resolve(event);
                            match = true;
                        }
                        else if (messageType.endsWith("_NACK")) {
                            deferred.reject({
                                errors: event.ERROR,
                                warnings: event.WARNING
                            });
                            match = true;
                        }
                    }
                }
                if (!match) {
                    switch (messageType) {
                        //case Consts.transactionAck:
                        //    deferred.resolve(event);
                        //    break;
                        //case Consts.transactionNack:
                        //    deferred.reject({
                        //        errors: event.ERROR,
                        //        warnings: event.WARNING
                        //    });
                        //    break;
                        case Genesis.Consts.msgNack:
                            deferred.reject({ message: event.ERROR[0].CODE });
                            break;
                        default:
                            deferred.reject(event);
                            break;
                    }
                }
            };
            return this._sendRequest(resourceName, params, checkParamsFn, buildMessageFn, onMessageFn);
        };
        /**
         * Requests a snapshot query of data for the specified resource using the given parameters.
         *
         * @param {string} resourceName
         * @param {IRequestParams} params
         *
         * @returns {Promise<void>}
         */
        ResourceManager.prototype.request = function (resourceName, params) {
            var _this = this;
            this._validateResourceName(resourceName);
            var checkParamsFn = function (tokens, deferred) {
                if (tokens.params[Genesis.Params.criteria] ||
                    tokens.params[Genesis.Params.columns]) {
                    deferred.reject({ message: "RequestReplies do not support the 'criteria' or 'columns' params." });
                    return false;
                }
                return true;
            };
            var buildMessageFn = function (tokens, sourceRef) {
                var userName;
                if (params && params.actAs) {
                    userName = params.actAs;
                }
                else {
                    userName = _this.authProvider.userName;
                }
                return _this._messageBuilder.createRequestMessage(sourceRef, _this.authProvider.authToken, userName, tokens.params);
            };
            var onMessageFn = function (event, deferred, messageType) {
                var receivedMessageType = event.MESSAGE_TYPE;
                switch (receivedMessageType) {
                    case "REP" + messageType.slice(3):
                        deferred.resolve(event);
                        break;
                    default:
                        // Can be WEBADAPTER_NACK OR MSG_NACK
                        // DtaWebSocketAdapter errors, normally severe as the adapter acts as a bridge between WebAPI and the DTA services
                        // MSG_NACK error messages: for things like MetaData validation checks or UNKNOWN message types
                        deferred.reject({ message: event.ERROR[0].CODE });
                        break;
                }
            };
            return this._sendRequest("REQ_" + resourceName, params, checkParamsFn, buildMessageFn, onMessageFn);
        };
        /**
         * Gets all the available resources.
         *
         * @returns {Promise<IResourceDetails[]>}
         */
        ResourceManager.prototype.getResources = function () {
            var _this = this;
            var checkParamsFn = function () { return true; };
            var buildMessageFn = function (tokens, sourceRef) {
                return _this._messageBuilder.createGetResourcesMessage(sourceRef, _this.authProvider.authToken);
            };
            var onMessageFn = function (event, deferred) {
                var messageType = event.MESSAGE_TYPE;
                if (messageType === Genesis.Consts.resourceAck) {
                    deferred.resolve(event.RESOURCES);
                }
                else {
                    deferred.reject(event);
                }
            };
            return this._sendRequest(Genesis.Consts.resourcesMessageType, {}, checkParamsFn, buildMessageFn, onMessageFn);
        };
        /**
         * Gets the metadata for the specified resource.
         *
         * @param {string} resourceName
         *
         * @returns {Promise<IMetadata>}
         */
        ResourceManager.prototype.getMetadata = function (resourceName) {
            var _this = this;
            var checkParamsFn = function () { return true; };
            var buildMessageFn = function (tokens, sourceRef) {
                return _this._messageBuilder.createMetadataMessage(sourceRef, _this.authProvider.authToken, tokens.params.serviceName);
            };
            var onMessageFn = function (event, deferred) {
                var messageType = event.MESSAGE_TYPE;
                if (messageType === Genesis.Consts.metadataAck) {
                    deferred.resolve(event.DETAILS);
                }
                else {
                    deferred.reject(event);
                }
            };
            return this._sendRequest(resourceName, {}, checkParamsFn, buildMessageFn, onMessageFn);
        };
        ResourceManager.prototype.reset = function (networkManager) {
            this.networkManager = networkManager;
            // TODO: refactor code, from "ctor"
            var subscriptionsInfos = Genesis.extend({}, this.subscriptionsInfos);
            for (var k in subscriptionsInfos) {
                if (subscriptionsInfos.hasOwnProperty(k)) {
                    this._restoreSubscription(subscriptionsInfos[k]);
                    delete this.subscriptionsInfos[k];
                }
            }
        };
        ResourceManager.prototype._sendRequest = function (resourceName, params, checkParamsFn, buildMessageFn, onMessageFn) {
            var tokens = this._parser.parseResourceName(resourceName, params);
            var deferred = P.defer();
            for (var x in tokens.params.unknown) {
                if (tokens.params.unknown.hasOwnProperty(x)) {
                    deferred.reject({ message: "Unknown parameter in resource string: " + tokens.params.unknown[x] });
                    return deferred.promise();
                }
            }
            // TODO
            delete tokens.params.unknown;
            if (checkParamsFn(tokens, deferred)) {
                var sourceRef = this._sourceRefGenerator.newSourceRef();
                var message = buildMessageFn(tokens, sourceRef);
                // TODO
                delete message.serviceName;
                this.networkManager.send(message, function (event) {
                    onMessageFn(event, deferred, tokens.params.serviceName);
                }, function (err) { return deferred.reject(err); });
            }
            return deferred.promise();
        };
        ResourceManager.prototype._sendTermSignal = function (sourceRef) {
            var msg = this._messageBuilder.createDataLogoffMessage(sourceRef, this.authProvider.authToken);
            this.networkManager.send(msg);
            // since the DATA_LOGOFF message means we are terminating a stream, we are raising the onCompleted event.
            //this._observers[sourceRef].onCompleted();
        };
        ResourceManager.prototype._tryRestoreSubscriptions = function (resourceName) {
            var _this = this;
            if (this._sourceRefsByResourceName[resourceName]) {
                this._sourceRefsByResourceName[resourceName]
                    .forEach(function (p) {
                    _this._restoreSubscription(p);
                    delete _this.subscriptionsInfos[p.sourceRef];
                    _this.networkManager.removeMessageListener(p.sourceRef);
                });
            }
        };
        // re-establish subscriptions using the cached params.
        ResourceManager.prototype._restoreSubscription = function (p) {
            // cleanup data structures for the previous subscription(s).
            delete this._sourceRefsByResourceName[p.resourceName];
            // NB: we need to cheat reading the actual callbacks, otherwise a wrapper is created by Rx
            var hack = p.observer;
            var newObserver = Rx.Observer.create(hack.observer._onNext, hack.observer._onError, hack.observer._onCompleted);
            this.createSubscription(p.resourceName, p.params)
                //.subscribe(p.observer); // <-- NB: we CANNOT use "p.observer.OnNext" etc., it causes an infinite loop!
                .subscribe(newObserver);
            this._onSubscriptionStatus.onNext(new SubscriptionStatusChangedEvent(p.resourceName, p.params, true));
        };
        ResourceManager.prototype._validateResourceName = function (resourceName) {
            var tokens = resourceName.split("/");
            if (tokens.length > 2) {
                throw new Error("Resource string format not supported: more than 2-level nesting.");
            }
        };
        return ResourceManager;
    }());
    Genesis.ResourceManager = ResourceManager;
    var SubscriptionStatusChangedEvent = /** @class */ (function () {
        function SubscriptionStatusChangedEvent(resourceName, params, isUp) {
            this.resourceName = resourceName;
            this.params = params;
            this.isUp = isUp;
        }
        return SubscriptionStatusChangedEvent;
    }());
    Genesis.SubscriptionStatusChangedEvent = SubscriptionStatusChangedEvent;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=ResourceManager.js.map
var Genesis;
(function (Genesis) {
    /**
     * The user credentials.
     */
    var UserCredentials = /** @class */ (function () {
        function UserCredentials(
        /**
         * The username.
         */
        userName, 
        /**
         * The password.
         */
        password) {
            this.userName = userName;
            this.password = password;
        }
        return UserCredentials;
    }());
    Genesis.UserCredentials = UserCredentials;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=UserCredentials.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Genesis;
(function (Genesis) {
    var SubscriptionInfo = /** @class */ (function () {
        function SubscriptionInfo(resourceName, observer, sourceRef, params) {
            this.update = {};
            this.all = [];
            this._resourceName = resourceName;
            this._observer = observer;
            this._sourceRef = sourceRef;
            if (params) {
                this._params = params;
            }
        }
        Object.defineProperty(SubscriptionInfo.prototype, "resourceName", {
            get: function () {
                return this._resourceName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SubscriptionInfo.prototype, "observer", {
            get: function () {
                return this._observer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SubscriptionInfo.prototype, "sourceRef", {
            get: function () {
                return this._sourceRef;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SubscriptionInfo.prototype, "params", {
            get: function () {
                return this._params;
            },
            enumerable: true,
            configurable: true
        });
        SubscriptionInfo.prototype.onNewData = function (message) {
            var inserts = [];
            var modifies = [];
            var deletes = [];
            // no data 
            if (!message.ROW) {
                if (this.all.length === 0) {
                    this._observer.onNext({
                        all: []
                    });
                    return;
                }
                else {
                    this._observer.onNext({
                        all: this.all,
                        inserts: []
                    });
                    return;
                }
            }
            var i;
            for (i = 0; i < message.ROW.length; i++) {
                var rowType = message.ROW[i].DETAILS.OPERATION;
                // NB: it is possible to receive in the same message multiple type of updates (for instance 1 insert, and 1 modify)
                switch (rowType) {
                    case Genesis.Consts.queryUpdateInsert:
                        inserts.push(message.ROW[i]);
                        break;
                    case Genesis.Consts.queryUpdateModify:
                        modifies.push(message.ROW[i]);
                        break;
                    case Genesis.Consts.queryUpdateDelete:
                        deletes.push(message.ROW[i]);
                        break;
                    default:
                        this._observer.onError.bind(this._observer);
                        break;
                }
            }
            var updates = [];
            var rowRef;
            if (inserts.length > 0) {
                for (i = 0; i < inserts.length; i++) {
                    rowRef = inserts[i].DETAILS.ROW_REF;
                    delete inserts[i].DETAILS;
                    this.update[rowRef] = inserts[i]; // building internal "update" structure
                    var tmp = inserts[i];
                    tmp.ROW_REF = rowRef;
                    this.all.push(tmp); // buildind "bind" structure
                    updates.push(rowRef);
                }
                if (this.params.drilldownFn) {
                    for (var a = 0; a < inserts.length; a++) {
                        if (!this.params.isParentFn || this.params.isParentFn(inserts[a])) { // <-- The app level is requested to decide whether the row is a parent or child one
                            // TODO, find the correct index, or remove "index" from the callback fn
                            this.params.drilldownFn(this.all, inserts[a], -1, true);
                        }
                        if (inserts[a].DRILLDOWN) { // if the row has any drilldowns
                            for (var d = 0; d < inserts[a].DRILLDOWN.length; d++) {
                                if (inserts[a].DRILLDOWN[d].ROW) {
                                    for (var k = 0; k < inserts[a].DRILLDOWN[d].ROW.length; k++) {
                                        var operation = inserts[a].DRILLDOWN[d].ROW[k].DETAILS.OPERATION;
                                        if (operation === "INSERT" || operation === "MODIFY") {
                                            if (operation === "MODIFY") {
                                                console.log("Parent.INSERT + Child.MODIFY: check the server message, treating as Child.INSERT!");
                                            }
                                            var child = $.extend({}, inserts[a].DRILLDOWN[d].ROW[k]);
                                            child.ROW_REF = child.DETAILS.ROW_REF;
                                            child.PARENT_ROW_REF = inserts[a].ROW_REF; // NB: needed later on when cleaning up!
                                            delete child.DETAILS;
                                            this.update[child.ROW_REF] = child; // building internal "update" structure
                                            // find the parent index
                                            var parentFound = false;
                                            var parentIdx = 0;
                                            while (!parentFound) {
                                                if (this.all[parentIdx].ROW_REF === child.PARENT_ROW_REF) {
                                                    parentFound = true;
                                                }
                                                else {
                                                    parentIdx++;
                                                }
                                            }
                                            var index = parentIdx + k + 1;
                                            this.all.splice(index, 0, child); // add the new row after the parent
                                            updates.push(child.ROW_REF); // adding the ROW_REF of the child to the "inserts" set.
                                            this.params.drilldownFn(this.all, child, index, false);
                                        }
                                    }
                                }
                            }
                            delete inserts[a].DRILLDOWN;
                        }
                    }
                }
                this._observer.onNext({
                    all: this.all,
                    inserts: updates
                });
            }
            if (modifies.length > 0) {
                updates = [];
                for (i = 0; i < modifies.length; i++) {
                    rowRef = modifies[i].DETAILS.ROW_REF;
                    delete modifies[i].DETAILS;
                    for (var field in modifies[i]) {
                        var oldValue = this.update[rowRef][field];
                        this.update[rowRef][field] = modifies[i][field];
                        if (field !== "DRILLDOWN") {
                            updates.push({
                                ROW_REF: rowRef,
                                details: {
                                    field: field,
                                    oldValue: oldValue,
                                    newValue: modifies[i][field]
                                }
                            });
                        }
                        else { // DRILLDOWN
                            // TODO: refactor, create specific method
                            for (var d = 0; d < modifies[i].DRILLDOWN.length; d++) {
                                if (modifies[i].DRILLDOWN[d].ROW) {
                                    for (var k = 0; k < modifies[i].DRILLDOWN[d].ROW.length; k++) {
                                        if (modifies[i].DRILLDOWN[d].ROW[k].DETAILS.OPERATION === "INSERT") {
                                            var child = $.extend({}, modifies[i].DRILLDOWN[d].ROW[k]);
                                            child.ROW_REF = child.DETAILS.ROW_REF;
                                            child.PARENT_ROW_REF = rowRef; // NB: needed later on when cleaning up!
                                            delete child.DETAILS;
                                            // find the parent index
                                            var parentFound = false;
                                            var parentIdx = 1;
                                            while (!parentFound) {
                                                if (this.all[parentIdx].ROW_REF === rowRef) {
                                                    parentFound = true;
                                                }
                                                else {
                                                    parentIdx++;
                                                }
                                            }
                                            var index = parentIdx + k + 1;
                                            this.all.splice(index, 0, child); // add the new row after the parent
                                            this.update[child.ROW_REF] = child; // building internal "update" structure
                                            updates.push(child.ROW_REF); // adding the ROW_REF of the child to the "inserts" set.
                                            this.params.drilldownFn(this.all, child, index, false);
                                        }
                                        else { // MODIFY
                                            var rowRef = modifies[i].DRILLDOWN[d].ROW[k].DETAILS.ROW_REF;
                                            for (var field in modifies[i].DRILLDOWN[d].ROW[k]) {
                                                if (field !== "DETAILS") {
                                                    var oldValue = this.update[rowRef][field];
                                                    this.update[rowRef][field] = modifies[i].DRILLDOWN[d].ROW[k][field];
                                                    updates.push({
                                                        ROW_REF: rowRef,
                                                        details: {
                                                            field: field,
                                                            oldValue: oldValue,
                                                            newValue: modifies[i].DRILLDOWN[d].ROW[k][field]
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            delete modifies[i].DRILLDOWN;
                        }
                    }
                }
                this._observer.onNext({
                    all: this.all,
                    updates: updates
                });
            }
            if (deletes.length > 0) {
                updates = [];
                for (i = 0; i < deletes.length; i++) {
                    rowRef = deletes[i].DETAILS.ROW_REF;
                    // search for the children of the item being deleted
                    if (this.params.drilldownFn) {
                        for (var j = 0; j < this.all.length; j++) {
                            if (this.all[j].PARENT_ROW_REF === rowRef) {
                                updates.push(this.all[j].ROW_REF);
                                this.all.splice(j, 1);
                                ;
                            }
                        }
                    }
                    for (var j = 0; j < this.all.length; j++) {
                        if (this.all[j].ROW_REF === rowRef) {
                            this.all.splice(j, 1);
                        }
                    }
                    updates.push(rowRef);
                }
                this.observer.onNext({
                    all: this.all,
                    deletes: updates
                });
            }
        };
        return SubscriptionInfo;
    }());
    Genesis.SubscriptionInfo = SubscriptionInfo;
    var SkipPostProcessingSubscriptionInfo = /** @class */ (function (_super) {
        __extends(SkipPostProcessingSubscriptionInfo, _super);
        function SkipPostProcessingSubscriptionInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkipPostProcessingSubscriptionInfo.prototype.onNewData = function (message) {
            // no data 
            if (!message.ROW) {
                this.observer.onNext({
                    all: []
                });
                return;
            }
            // we've got data
            this.observer.onNext({
                all: message.ROW
            });
            return;
        };
        return SkipPostProcessingSubscriptionInfo;
    }(SubscriptionInfo));
    Genesis.SkipPostProcessingSubscriptionInfo = SkipPostProcessingSubscriptionInfo;
})(Genesis || (Genesis = {}));
//# sourceMappingURL=Subscription.js.map