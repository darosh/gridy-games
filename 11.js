(self.webpackJsonp=self.webpackJsonp||[]).push([[11],{253:function(t,e,r){var n=r(92)("wks"),i=r(88),o=r(31).Symbol,s="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=n},256:function(t,e){t.exports={}},260:function(t,e,r){var n=r(46).f,i=r(82),o=r(253)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},262:function(t,e,r){"use strict";var n=r(277),i=r(32),o=r(286),s=r(81),u=r(82),c=r(256),a=r(285),l=r(260),f=r(283),p=r(253)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,r,y,d,g,x){a(r,e,y);var m,S,L,k=function(t){if(!h&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},T=e+" Iterator",b="values"==d,O=!1,_=t.prototype,C=_[p]||_["@@iterator"]||d&&_[d],w=!h&&C||k(d),A=d?b?k("entries"):w:void 0,M="Array"==e&&_.entries||C;if(M&&(L=f(M.call(new t)))!==Object.prototype&&L.next&&(l(L,T,!0),n||u(L,p)||s(L,p,v)),b&&C&&"values"!==C.name&&(O=!0,w=function(){return C.call(this)}),n&&!x||!h&&!O&&_[p]||s(_,p,w),c[e]=w,c[T]=v,d)if(m={values:b?w:k("values"),keys:g?w:k("keys"),entries:A},x)for(S in m)S in _||o(_,S,m[S]);else i(i.P+i.F*(h||O),e,m);return m}},267:function(t,e,r){var n=r(85),i=r(253)("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},268:function(t,e,r){var n=r(267),i=r(253)("iterator"),o=r(256);t.exports=r(13).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},269:function(t,e,r){"use strict";var n=r(282)(!0);r(262)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},270:function(t,e,r){r(288);for(var n=r(31),i=r(81),o=r(256),s=r(253)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var a=u[c],l=n[a],f=l&&l.prototype;f&&!f[s]&&i(f,s,a),o[a]=o.Array}},271:function(t,e,r){t.exports={default:r(289),__esModule:!0}},274:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(271),i=r.n(n),o=[["reversi",null,/Reversi/],["tactickle",/Tac-tickle/],["gomoku",/Gomoku|in-a-row/],["plastic",/Connect Four/],["hex-checkers",/Hex .* Checkers/],["hex",/Hex|Tic Tac Toe|Circular Four/],["checkers",/Checkers/],["qirkat",null,/Misc/],["mills",null,/Mills/]];function s(t){if(t.theme)return t.theme+"-theme";var e=!0,r=!1,n=void 0;try{for(var s,u=i()(o);!(e=(s=u.next()).done);e=!0){var c=s.value;if(c[1]&&c[1].test(t.title)||c[2]&&c[2].test(t.type))return c[0]+"-theme"}}catch(t){r=!0,n=t}finally{try{!e&&u.return&&u.return()}finally{if(r)throw n}}}},275:function(t,e,r){var n=r(31).document;t.exports=n&&n.documentElement},276:function(t,e,r){var n=r(80),i=r(284),o=r(91),s=r(84)("IE_PROTO"),u=function(){},c=function(){var t,e=r(89)("iframe"),n=o.length;for(e.style.display="none",r(275).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[o[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[s]=t):r=c(),void 0===e?r:i(r,e)}},277:function(t,e){t.exports=!0},278:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},281:function(t,e,r){var n=r(80),i=r(268);t.exports=r(13).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},282:function(t,e,r){var n=r(48),i=r(49);t.exports=function(t){return function(e,r){var o,s,u=String(i(e)),c=n(r),a=u.length;return c<0||c>=a?t?"":void 0:(o=u.charCodeAt(c))<55296||o>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):o:t?u.slice(c,c+2):s-56320+(o-55296<<10)+65536}}},283:function(t,e,r){var n=r(82),i=r(47),o=r(84)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},284:function(t,e,r){var n=r(46),i=r(80),o=r(51);t.exports=r(22)?Object.defineProperties:function(t,e){i(t);for(var r,s=o(e),u=s.length,c=0;u>c;)n.f(t,r=s[c++],e[r]);return t}},285:function(t,e,r){"use strict";var n=r(276),i=r(94),o=r(260),s={};r(81)(s,r(253)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:i(1,r)}),o(t,e+" Iterator")}},286:function(t,e,r){t.exports=r(81)},287:function(t,e){t.exports=function(){}},288:function(t,e,r){"use strict";var n=r(287),i=r(278),o=r(256),s=r(50);t.exports=r(262)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},289:function(t,e,r){r(270),r(269),t.exports=r(281)},421:function(t,e,r){"use strict";r.r(e);var n=r(274),i={props:{game:{type:Object,required:!0},type:{type:String,required:!0},size:{type:Number,default:24},box:{type:String,default:"0 0 24 24"}},computed:{theme:function(){return Object(n.a)(this.game.constructor)}}},o=r(45),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{class:t.theme,attrs:{width:t.size,height:t.size,viewBox:t.box}},["Rectangular"===t.type?r("rect",{staticClass:"tile",attrs:{width:"20",height:"20",x:"2.5",y:"2.5"}}):"Hexagonal"===t.type?r("polygon",{staticClass:"tile",attrs:{points:"10,0 5,8.66 -5,8.66 -10,0 -5,-8.66 5,-8.66",transform:"translate(12.5,12.5)"}}):"Radial"===t.type?r("circle",{staticClass:"tile",attrs:{r:"10",cx:"12.5",cy:"12.5"}}):t._e()])},[],!1,null,null,null);e.default=s.exports}}]);