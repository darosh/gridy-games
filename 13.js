(self.webpackJsonp=self.webpackJsonp||[]).push([[13,23],{251:function(t,e,i){var n=i(88)("wks"),r=i(78),a=i(30).Symbol,o="function"==typeof a;(t.exports=function(t){return n[t]||(n[t]=o&&a[t]||(o?a:r)("Symbol."+t))}).store=n},258:function(t,e){t.exports={}},262:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i(2);function r(t){return n.Theme[t.theme].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+"-theme"}},268:function(t,e,i){var n=i(43).f,r=i(75),a=i(251)("toStringTag");t.exports=function(t,e,i){t&&!r(t=i?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},273:function(t,e,i){"use strict";var n=i(290),r=i(32),a=i(309),o=i(74),s=i(75),c=i(258),l=i(308),u=i(268),g=i(306),d=i(251)("iterator"),f=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,i,h,v,p,y){l(i,e,h);var x,b,w,k=function(t){if(!f&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},_=e+" Iterator",S="values"==v,L=!1,T=t.prototype,F=T[d]||T["@@iterator"]||v&&T[v],M=!f&&F||k(v),O=v?S?k("entries"):M:void 0,A="Array"==e&&T.entries||F;if(A&&(w=g(A.call(new t)))!==Object.prototype&&w.next&&(u(w,_,!0),n||s(w,d)||o(w,d,m)),S&&F&&"values"!==F.name&&(L=!0,M=function(){return F.call(this)}),n&&!y||!f&&!L&&T[d]||o(T,d,M),c[e]=M,c[_]=m,v)if(x={values:S?M:k("values"),keys:p?M:k("keys"),entries:O},y)for(b in x)b in T||a(T,b,x[b]);else r(r.P+r.F*(f||L),e,x);return x}},278:function(t,e,i){var n=i(79),r=i(251)("toStringTag"),a="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,i,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?i:a?n(e):"Object"==(o=n(e))&&"function"==typeof e.callee?"Arguments":o}},279:function(t,e,i){var n=i(278),r=i(251)("iterator"),a=i(258);t.exports=i(15).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||a[n(t)]}},280:function(t,e,i){"use strict";var n=i(305)(!0);i(273)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})})},281:function(t,e,i){i(311);for(var n=i(30),r=i(74),a=i(258),o=i(251)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var l=s[c],u=n[l],g=u&&u.prototype;g&&!g[o]&&r(g,o,l),a[l]=a.Array}},287:function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return a});var n=i(2);function r(t,e,i,n){return Math.min(i/t,n/e)}function a(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0===t[e]&&i&&t.original?function(t,e,i){if(void 0===n.Games[t.original][e])return a(n.Games[t.original],e,i);return n.Games[t.original][e]}(t,e,i):t[e]}},288:function(t,e,i){var n=i(30).document;t.exports=n&&n.documentElement},289:function(t,e,i){var n=i(73),r=i(307),a=i(87),o=i(80)("IE_PROTO"),s=function(){},c=function(){var t,e=i(85)("iframe"),n=a.length;for(e.style.display="none",i(288).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[a[n]];return c()};t.exports=Object.create||function(t,e){var i;return null!==t?(s.prototype=n(t),i=new s,s.prototype=null,i[o]=t):i=c(),void 0===e?i:r(i,e)}},290:function(t,e){t.exports=!0},291:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},304:function(t,e,i){var n=i(73),r=i(279);t.exports=i(15).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},305:function(t,e,i){var n=i(48),r=i(49);t.exports=function(t){return function(e,i){var a,o,s=String(r(e)),c=n(i),l=s.length;return c<0||c>=l?t?"":void 0:(a=s.charCodeAt(c))<55296||a>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536}}},306:function(t,e,i){var n=i(75),r=i(45),a=i(80)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),n(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},307:function(t,e,i){var n=i(43),r=i(73),a=i(51);t.exports=i(24)?Object.defineProperties:function(t,e){r(t);for(var i,o=a(e),s=o.length,c=0;s>c;)n.f(t,i=o[c++],e[i]);return t}},308:function(t,e,i){"use strict";var n=i(289),r=i(89),a=i(268),o={};i(74)(o,i(251)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=n(o,{next:r(1,i)}),a(t,e+" Iterator")}},309:function(t,e,i){t.exports=i(74)},310:function(t,e){t.exports=function(){}},311:function(t,e,i){"use strict";var n=i(310),r=i(291),a=i(258),o=i(50);t.exports=i(273)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])},"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},312:function(t,e,i){i(281),i(280),t.exports=i(304)},313:function(t,e,i){t.exports={default:i(312),__esModule:!0}},314:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"circle.animate[data-v-08cdfcb0],polygon.animate[data-v-08cdfcb0]{transition:fill .2s ease-in-out,stroke .2s ease-in-out,stroke-width .2s ease-in-out}.stone.animate[data-v-08cdfcb0]{transition:all .2s ease-in-out}.vertical[data-v-08cdfcb0]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-08cdfcb0]{transform:scale(0)}circle.scale-transition-enter-active[data-v-08cdfcb0]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-08cdfcb0]{transform:scale(1)}.clickable[data-v-08cdfcb0]:hover{cursor:pointer}.read-only[data-v-08cdfcb0]{pointer-events:none;touch-action:none}",""])},315:function(t,e,i){var n=i(314);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(76).default)("75dfd724",n,!0,{})},60:function(t,e,i){"use strict";i.r(e);var n=i(313),r=i.n(n),a=i(6),o=i(287),s={props:{fixed:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},data:function(){return{translate:[],size:[],rect:[],resizing:!1}},methods:{frameUpdate:function(){if(this.game&&this.frame&&this.margin){var t=this.rescaleToFrame();this.rect=[t.maxX-t.minX+this.margin,t.maxY-t.minY+this.margin],this.fixed?this.size=[t.maxX-t.minX+this.margin,this.frame[1]+this.margin]:this.size=this.rect,this.translate=function(t,e){var i=Math.floor(t.maxX-t.minX)%2?0:.5,n=Math.floor(t.maxY-t.minY)%2?0:.5;return[((e[0]-t.minX-t.maxX)/2+i).toFixed(3),((e[1]-t.minY-t.maxY)/2+n).toFixed(3)]}(t,this.size)}},path:function(t){return this.game.grid.path(t)},irregularVertices:function(t){return this.game.grid.path(t).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},typedVertices:function(t){return this.game.grid.vertices(t,void 0,this.game.grid.getTileType(t)).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},rescaleToFrame:function(){this.game.grid.scale=1;var t=this.game.grid.bounds(),e=Object(o.b)(t.maxX-t.minX,t.maxY-t.minY,this.frame[0],this.frame[1]);return!this.game.grid.irregular&&this.round?this.game.grid.scale=2*Math.floor(e/2):this.game.grid.scale=e,this.game.grid.bounds()}},computed:{vertices:function(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},shift:function(){return(window.innerHeight-this.size[this.vertical?0:1])/2-64+10}},watch:{frame:{handler:function(){var t=this;this.resizing=!0,this.frameUpdate(),a.a.nextTick(function(){setTimeout(function(){t.resizing=!1},200)})},immediate:!0}}};var c=i(262),l=0,u={components:{GPolyLine:function(){return Promise.all([i.e(19),i.e(21)]).then(i.bind(null,443))}},mixins:[s],model:{prop:"value",event:"change"},props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},value:{type:Boolean,default:!1},coords:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:function(){return{winning:null,lines:null,rulers:null,stones:null}},computed:{theme:function(){return Object(c.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.initStones()}},"game.moves.length":function(t,e){t===e+1?this.updateStones():this.initStones()},"game.winner":{immediate:!0,handler:function(t){this.winning=t&&this.game.winning?this.game.winning():null}}},mounted:function(){this.$emit("change",!0)},methods:{center:function(t,e){return e?this.game.grid.center(t).value.map(function(t){return""+t.toFixed(3)+e}):this.game.grid.center(t)},initStones:function(){if(this.stones=[],this.isMove){var t=!0,e=!1,i=void 0;try{for(var n,a=r()(this.game.grid.tiles);!(t=(n=a.next()).done);t=!0){var o=n.value;o.data&&this.stones.push({tile:o,data:o.data,id:++l})}}catch(t){e=!0,i=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}}},updateStones:function(){var t=this;this.isMove&&this.game.moves.length&&function(){var e=t.game.moves[t.game.moves.length-1],i=e[0],n=e[e.length-1];n=Array.isArray(n)?n[0]:n,t.stones.find(function(t){return t.tile===i}).tile=n;for(var r=function(i){if(Array.isArray(e[i])&&e[i][1]){var n=t.stones.findIndex(function(t){return t.tile===e[i][1]});t.stones.splice(n,1)}},a=0;a<e.length;a++)r(a)}()}}},g=i(42);var d=function(t){i(315)},f=Object(g.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{vertical:t.vertical,"read-only":!t.interactive},style:{width:t.size[t.vertical?1:0]+"px",height:t.size[t.vertical?0:1]+"px","margin-top":t.centered&&t.shift>0?t.shift+"px":""}},[i("svg",{staticClass:"d-block",class:t.theme,attrs:{width:t.size[0],height:t.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("rect",{attrs:{x:(t.margin/2).toFixed(3),y:((t.margin+t.size[1]-t.rect[1])/2+.5).toFixed(3),width:(t.rect[0]-t.margin).toFixed(3),height:(t.rect[1]-t.margin).toFixed(3)}}),t._v(" "),i("g",{attrs:{transform:"translate("+t.translate+")"}},[t._l(t.lines,function(e,n){return i("line",{key:n,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t._l(t.game.grid.tiles,function(e){return i("g",{key:e.key,attrs:{transform:"translate("+t.center(e)+")"}},[t.game.grid.irregular?i("path",t._g({staticClass:"tile",class:(n={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},n["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,n["value-"+(e.data||0)]=!0,n),attrs:{d:t.path(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null)):i("polygon",t._g({staticClass:"tile",class:(r={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},r["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,r["value-"+(e.data||0)]=!0,r),attrs:{points:2===t.game.grid.tileTypes?t.typedVertices(e):t.vertices||t.irregularVertices(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null))]);var n,r}),t._v(" "),t._l(t.rulers,function(e,n){return i("line",{key:"r"+n,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t._l(t.game.grid.tiles,function(e){return i("g",{key:"text"+e.key,attrs:{transform:"translate("+t.center(e)+")"}},[t.coords?i("text",{attrs:{"font-size":.4*t.game.grid.scale,dy:.04*t.game.grid.scale,transform:t.vertical?"rotate(-90)":null,"alignment-baseline":"middle","text-anchor":"middle"}},[t._v("\n          "+t._s(t.game.moveToString(e))+" ")]):t._e()])}),t._v(" "),t.isMove?i("g",t._l(t.stones,function(e){return i("circle",t._g({key:"s"+e.id,staticClass:"stone",class:(n={animate:t.interactive&&!t.resizing,clickable:e.tile.highlighted&&!t.waiting},n["token-"+e.data]=!0,n),style:{transform:"translate("+t.center(e.tile,"px")+")"},attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e.tile)}}:null));var n})):i("g",t._l(t.game.grid.tiles,function(e){return i("g",{key:"c"+e.key,attrs:{transform:"translate("+t.center(e)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[e.data?i("circle",t._g({class:(n={animate:t.interactive,clickable:e.highlighted&&!t.waiting},n["token-"+e.data]=!0,n),attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e)}}:null)):t._e()])],1);var n})),t._v(" "),t.winning?i("g-poly-line",{class:"winner-"+t.game.winner,style:{"stroke-width":Math.round(.5*(t.game.grid.radius*t.game.grid.scale*.85-2*t.round))},attrs:{tiles:t.winning,center:t.center,size:t.game.grid.scale,delay:200}}):t._e()],2),t._v(" "),i("rect",{staticStyle:{fill:"none"},attrs:{x:(t.margin/2).toFixed(3),y:((t.margin+t.size[1]-t.rect[1])/2+.5).toFixed(3),width:(t.rect[0]-t.margin).toFixed(3),height:(t.rect[1]-t.margin).toFixed(3)}})])])},[],!1,d,"data-v-08cdfcb0",null);e.default=f.exports}}]);