(self.webpackJsonp=self.webpackJsonp||[]).push([[21],{247:function(t,e,n){var r=n(80)("wks"),i=n(77),a=n(29).Symbol,o="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=o&&a[t]||(o?a:i)("Symbol."+t))}).store=r},248:function(t,e){t.exports={}},249:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(283),i=n.n(r),a=n(282),o=n.n(a),s=new(function(){function t(){i()(this,t)}return o()(t,[{key:"latency",get:function(){var t=this;return isNaN(this._latency)&&(Promise.all([n.e(9),n.e(10)]).then(n.bind(null,72)).then(function(e){var n=e.Tone;t._latency=n.supported&&!isNaN(n.context.baseLatency)?1e3*n.context.baseLatency*2:25}),this._latency=100),this._latency}},{key:"start",get:function(){return"+"+this.latency/1e3}},{key:"stop",get:function(){return"+"+this.latency/2/1e3}},{key:"last",set:function(t){this._last&&this._last.cancel&&(this._last.triggerRelease(this.stop),this._last=null),this._last=t}}]),t}())},252:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o});var r=n(249),i=void 0;function a(t){i&&i.cancel(t)}function o(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,72)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(i||(i=new e({attack:.025,decay:.6,sustain:0,release:1}).toMaster(),new n({type:"sawtooth",frequency:"G3",volume:-12}).connect(i).start()),r.a.last=i,i.triggerAttack(r.a.start))})}},253:function(t,e,n){var r=n(41).f,i=n(71),a=n(247)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},255:function(t,e,n){"use strict";var r=n(266),i=n(30),a=n(277),o=n(69),s=n(71),c=n(248),u=n(276),l=n(253),f=n(274),p=n(247)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,m,y,g){u(n,e,d);var k,w,b,x=function(t){if(!h&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",S="values"==m,T=!1,C=t.prototype,O=C[p]||C["@@iterator"]||m&&C[m],L=!h&&O||x(m),A=m?S?x("entries"):L:void 0,M="Array"==e&&C.entries||O;if(M&&(b=f(M.call(new t)))!==Object.prototype&&b.next&&(l(b,_,!0),r||s(b,p)||o(b,p,v)),S&&O&&"values"!==O.name&&(T=!0,L=function(){return O.call(this)}),r&&!g||!h&&!T&&C[p]||o(C,p,L),c[e]=L,c[_]=v,m)if(k={values:S?L:x("values"),keys:y?L:x("keys"),entries:A},g)for(w in k)w in C||a(C,w,k[w]);else i(i.P+i.F*(h||T),e,k);return k}},258:function(t,e,n){var r=n(75),i=n(247)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},259:function(t,e,n){var r=n(258),i=n(247)("iterator"),a=n(248);t.exports=n(14).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||a[r(t)]}},260:function(t,e,n){"use strict";var r=n(273)(!0);n(255)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},261:function(t,e,n){n(279);for(var r=n(29),i=n(69),a=n(248),o=n(247)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],l=r[u],f=l&&l.prototype;f&&!f[o]&&i(f,o,u),a[u]=a.Array}},262:function(t,e,n){t.exports={default:n(280),__esModule:!0}},263:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(262),i=n.n(r),a=[["reversi",null,/Reversi/],["tactickle",/Tac-tickle/],["gomoku",/Gomoku|in-a-row/],["plastic",/Connect Four/],["hex-checkers",/Hex .* Checkers/],["hex",/Hex|Tic Tac Toe|Circular Four/],["checkers",/Checkers/],["qirkat",null,/Misc/],["mills",null,/Mills/]];function o(t){if(t.theme)return t.theme+"-theme";var e=!0,n=!1,r=void 0;try{for(var o,s=i()(a);!(e=(o=s.next()).done);e=!0){var c=o.value;if(c[1]&&c[1].test(t.title)||c[2]&&c[2].test(t.type))return c[0]+"-theme"}}catch(t){n=!0,r=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw r}}}},264:function(t,e,n){var r=n(29).document;t.exports=r&&r.documentElement},265:function(t,e,n){var r=n(70),i=n(275),a=n(79),o=n(73)("IE_PROTO"),s=function(){},c=function(){var t,e=n(78)("iframe"),r=a.length;for(e.style.display="none",n(264).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[a[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[o]=t):n=c(),void 0===e?n:i(n,e)}},266:function(t,e){t.exports=!0},267:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},270:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(252),i=n(249),a=void 0;function o(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,72)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,o=t.Panner;t.Tone.supported&&(a||(a=new o(-1).toMaster(),(a=new e({attack:.01,decay:.4,sustain:.1,release:.4}).connect(a)).attackCurve="exponential",new n({type:"sawtooth3",frequency:"B3",volume:-12}).connect(a).start()),Object(r.b)(i.a.stop),a.triggerAttackRelease(.2,i.a.start))})}},272:function(t,e,n){var r=n(70),i=n(259);t.exports=n(14).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},273:function(t,e,n){var r=n(43),i=n(44);t.exports=function(t){return function(e,n){var a,o,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?"":void 0:(a=s.charCodeAt(c))<55296||a>56319||c+1===u||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536}}},274:function(t,e,n){var r=n(71),i=n(42),a=n(73)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},275:function(t,e,n){var r=n(41),i=n(70),a=n(46);t.exports=n(22)?Object.defineProperties:function(t,e){i(t);for(var n,o=a(e),s=o.length,c=0;s>c;)r.f(t,n=o[c++],e[n]);return t}},276:function(t,e,n){"use strict";var r=n(265),i=n(81),a=n(253),o={};n(69)(o,n(247)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),a(t,e+" Iterator")}},277:function(t,e,n){t.exports=n(69)},278:function(t,e){t.exports=function(){}},279:function(t,e,n){"use strict";var r=n(278),i=n(267),a=n(248),o=n(45);t.exports=n(255)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},280:function(t,e,n){n(261),n(260),t.exports=n(272)},282:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(83),a=(r=i)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,a.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},283:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},293:function(t,e,n){"use strict";var r=n(270),i=n(252),a=n(249),o=void 0;function s(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,72)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,r=t.Panner;t.Tone.supported&&(o||(o=new r(1).toMaster(),(o=new e({attack:.01,decay:.4,sustain:.1,release:.4}).connect(o)).attackCurve="exponential",new n({type:"sawtooth3",frequency:"D4",volume:-12}).connect(o).start()),Object(i.b)(a.a.stop),o.triggerAttackRelease(.2,a.a.start))})}var c=void 0;function u(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,72)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(c||(c=new e({attack:.025,decay:1.2,sustain:0,release:1}).toMaster(),new n({type:"sawtooth",frequency:"C3",volume:-12}).connect(c).start()),a.a.last=c,c.triggerAttack(a.a.start))})}var l=void 0,f={"-1":["C2","E3","G3","C4"],1:["B2","G3","B3","D4"],2:["A2","F3","A3","D4"]};function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Promise.all([n.e(9),n.e(10)]).then(n.bind(null,72)).then(function(e){var n=e.PolySynth;e.Tone.supported&&(l||(l=new n(4).toMaster()).set({envelope:{attack:.01,decay:.4,sustain:.1,release:.4},oscillator:{type:"sawtooth3"},volume:-10}),Object(i.b)(a.a.stop),l.triggerAttackRelease(f[t],.8,a.a.start))})}n.d(e,"c",function(){return r.a}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return u}),n.d(e,"f",function(){return i.a}),n.d(e,"a",function(){return p}),n.d(e,"e",function(){return a.a})},294:function(t,e,n){"use strict";e.a={methods:{switchPlayer:function(){this.$store.commit("player",{1:this.$store.state.player[2],2:this.$store.state.player[1]})}}}},295:function(t,e,n){"use strict";var r=n(47);e.a={computed:{human:function(){return[void 0,Object(r.b)(this.$store.state.player[1]),Object(r.b)(this.$store.state.player[2])]},waiting:function(){return!this.human[this.game.player]&&!this.game.winner},canSwitch:function(){return!this.game.moves.length&&this.human[1]&&!this.human[2]},hotSeat:function(){return this.human[1]&&this.human[2]},robotMatch:function(){return!this.human[1]&&!this.human[2]},verdict:function(){var t=this.human[1],e=this.human[2];return t&&!e&&1===this.game.winner||!t&&e&&2===this.game.winner?"You won!":t&&!e&&2===this.game.winner||!t&&e&&1===this.game.winner?"You lost":t!==e&&-1===this.game.winner?"It's draw":t&&e&&this.expired?"Time out":"Game over!"}}}},337:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".theme--light .player-divider line,.theme--light .player-timer{stroke:#848484}.theme--dark .player-divider line,.theme--dark .player-timer{stroke:#fff}.info-position{top:19px;left:19px}",""])},338:function(t,e,n){var r=n(337);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(74).default)("185050ad",r,!0,{})},339:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".relative[data-v-018fc548]{position:relative}.absolute[data-v-018fc548]{position:absolute}.player[data-v-018fc548]{transition:transform .2s ease-out}.player circle[data-v-018fc548]{transition:fill .2s linear,stroke .2s linear}.player-timer[data-v-018fc548]{stroke-dasharray:141.371;stroke-dashoffset:141.371;stroke-linecap:round;stroke-width:3;stroke:#fff;fill:none}.clickable[data-v-018fc548]:hover{cursor:pointer}.count-transition-leave-active[data-v-018fc548],.count-transition-leave-to[data-v-018fc548],.count-transition-leave[data-v-018fc548]{display:none;animation:none;transition:none}.count-transition-enter[data-v-018fc548]{transform:scale(.5);opacity:.5}.count-transition-enter-active[data-v-018fc548]{transition:all .2s cubic-bezier(.175,.885,.32,1.275)}.count-transition-enter-to[data-v-018fc548]{transform:scale(1);opacity:1}.rotate-animation[data-v-018fc548]{animation:rotate-data-v-018fc548 2s ease-in-out infinite}@keyframes rotate-data-v-018fc548{0%{transform:rotate(0deg)}80%{transform:rotate(0deg)}to{transform:rotate(180deg)}}",""])},340:function(t,e,n){var r=n(339);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(74).default)("07c4ba56",r,!0,{})},429:function(t,e,n){"use strict";n.r(e);var r=n(23),i=n(263),a=n(294),o=n(293),s={data:function(){return{timer:-1,transition:0}},watch:{"game.player":function(){this.updateTimer()},"game.pending":function(){this.updateTimer()},"game.counterSignal":function(t){this.$store.state.sound&&(t>0?Object(o.f)():0===t&&Object(o.b)())}},methods:{updateTimer:function(){var t=this;this.game.pending&&this.value===this.game.player?(this.timer=-1,this.transition=0,setTimeout(function(){t.timer=0,t.transition=t.game.limit},50)):(this.timer=-1,this.transition=0)}}},c=n(295),u=2*Math.PI*22.5,l={components:{GPlayerDivider:function(){return n.e(13).then(n.bind(null,428))}},mixins:[c.a,a.a,s],data:function(){return{Shared:r.a,OFFSET:u}},computed:{game:function(){return r.a.game},value:function(){return r.a.game.winner||r.a.game.player},other:function(){return r.a.game.expired?-1:3-this.value},theme:function(){return Object(i.a)(r.a.game.constructor)},position:function(){return 0===r.a.game.moves.length?-42:1===this.value?-42:2===this.value?42:0}}},f=n(40);var p=function(t){n(340),n(338)},h=Object(f.a)(l,function(){var t,e,n=this,r=n.$createElement,i=n._self._c||r;return i("div",{staticClass:"relative text-xs-center",class:n.theme,staticStyle:{width:"64px",height:"48px"}},[i("g-player-divider",{staticClass:"player-divider d-inline-block",staticStyle:{"margin-top":"19px"},attrs:{value:!1}}),n._v(" "),i("div",{staticClass:"absolute player",class:"player-"+n.value,style:{top:0,transform:"translate("+n.position+"px,0)"}},[i("div",[i("svg",{staticClass:"d-block",attrs:{height:"64",width:"64"}},[i("circle",{class:"symbol-"+n.value,attrs:{cx:"31",cy:"31",r:"16.5"}}),n._v(" "),i("circle",{staticClass:"player-timer",style:{"stroke-dashoffset":n.timer>=0?n.timer:n.OFFSET,transition:"stroke-dashoffset "+n.transition+"ms linear"},attrs:{cx:"31",cy:"31",r:"22.5",transform:"rotate(-90 31 31)"}})]),n._v(" "),i("div",{staticClass:"absolute info-position"},[i("transition",{attrs:{name:"count-transition",mode:"out-in"}},[n.game.player===n.value&&n.game.counter>0?i("div",{key:n.game.counter,staticClass:"title counter",staticStyle:{width:"24px","margin-top":"2px","text-align":"center"}},[n._v(n._s(n.game.counter))]):n.game.player===n.value&&0===n.game.counter?i("v-icon",{key:n.game.counter,staticClass:"player-status"},[n._v("timer_off")]):n.waiting?i("div",{key:"b",staticStyle:{transform:"none"}},[i("div",[i("v-icon",{staticClass:"player-status rotate-animation"},[n._v("hourglass_empty")])],1)]):n.game.winner>0&&n.game.winner===n.value?i("v-icon",{key:"d",staticClass:"player-status"},[n._v("mood")]):-1===n.game.winner?i("v-icon",{key:"e",staticClass:"player-status"},[n._v("sentiment_very_dissatisfied")]):i("v-icon",{key:"c",staticClass:"player-status"},[n._v("play_arrow")])],1)],1)])]),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:n.canSwitch||n.game.expired,expression:"canSwitch || game.expired"}],staticClass:"absolute player",class:(t={clickable:n.canSwitch},t["player-"+n.other]=!0,t),style:{top:0,transform:"translate3d("+-n.position+"px,0,0)"},on:{click:function(t){n.canSwitch&&n.switchPlayer()}}},[i("div",[i("svg",{staticClass:"d-block",class:(e={},e[n.theme]=!0,e),attrs:{height:"64",width:"64"}},[i("circle",{class:"symbol-"+n.other,attrs:{cx:"31",cy:"31",r:"16.5"}})]),n._v(" "),i("div",{staticClass:"absolute info-position"},[n.canSwitch?i("v-icon",{staticClass:"player-status"},[n._v("swap_horiz")]):n.game.expired?i("v-icon",[n._v("timer_off")]):n._e()],1)])])],1)},[],!1,p,"data-v-018fc548",null);e.default=h.exports}}]);