(self.webpackJsonp=self.webpackJsonp||[]).push([[7],{252:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var a=s(268),n=s.n(a),o=s(267),r=s.n(o),i=new(function(){function t(){n()(this,t)}return r()(t,[{key:"latency",get:function(){var t=this;return isNaN(this._latency)&&(Promise.all([s.e(9),s.e(10)]).then(s.bind(null,43)).then(function(e){var s=e.Tone;t._latency=s.supported&&!isNaN(s.context.baseLatency)?1e3*s.context.baseLatency*2:25}),this._latency=100),this._latency}},{key:"start",get:function(){return"+"+this.latency/1e3}},{key:"stop",get:function(){return"+"+this.latency/2/1e3}},{key:"last",set:function(t){this._last&&this._last.cancel&&(this._last.triggerRelease(this.stop),this._last=null),this._last=t}}]),t}())},255:function(t,e,s){"use strict";s.d(e,"b",function(){return o}),s.d(e,"a",function(){return r});var a=s(252),n=void 0;function o(t){n&&n.cancel(t)}function r(){Promise.all([s.e(9),s.e(10)]).then(s.bind(null,43)).then(function(t){var e=t.AmplitudeEnvelope,s=t.Oscillator;t.Tone.supported&&(n||(n=new e({attack:.025,decay:.6,sustain:0,release:1}).toMaster(),new s({type:"sawtooth",frequency:"G3",volume:-12}).connect(n).start()),a.a.last=n,n.triggerAttack(a.a.start))})}},263:function(t,e,s){"use strict";s.d(e,"a",function(){return r});var a=s(255),n=s(252),o=void 0;function r(){Promise.all([s.e(9),s.e(10)]).then(s.bind(null,43)).then(function(t){var e=t.AmplitudeEnvelope,s=t.Oscillator,r=t.Panner;t.Tone.supported&&(o||(o=new r(-1).toMaster(),(o=new e({attack:.01,decay:.4,sustain:.1,release:.4}).connect(o)).attackCurve="exponential",new s({type:"sawtooth3",frequency:"B3",volume:-12}).connect(o).start()),Object(a.b)(n.a.stop),o.triggerAttackRelease(.2,n.a.start))})}},267:function(t,e,s){"use strict";e.__esModule=!0;var a,n=s(80),o=(a=n)&&a.__esModule?a:{default:a};e.default=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o.default)(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}()},268:function(t,e,s){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},290:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var a=void 0;function n(t,e){window.navigator.vibrate&&(a&&(clearTimeout(a),a=null),e?a=setTimeout(function(){window.navigator.vibrate(t)},e):window.navigator.vibrate(t))}},294:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var a=new(s(6).a)},339:function(t,e,s){(t.exports=s(1)(!1)).push([t.i,"@media screen and (max-width:1263px){.touch-bottom[data-v-e10e9104]{margin-bottom:14px}}",""])},340:function(t,e,s){var a=s(339);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(73).default)("56dedb5f",a,!0,{})},432:function(t,e,s){"use strict";s.r(e);var a=s(32),n=s.n(a),o=s(44),r=s(22),i=s(2),l=s(294),c=s(263),u=s(290),v=s(46),d={components:{VSwitch:function(){return s.e(16).then(function(){var t=s(445);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VSubheader:function(){return Promise.resolve().then(function(){var t=s(160);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VTextField:function(){return s.e(15).then(function(){var t=s(448);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VDivider:function(){return Promise.resolve().then(function(){var t=s(173);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},GInfo:function(){return s.e(24).then(s.bind(null,434))}},data:function(){return{game:i.Info.game(this.$route.params.id),players:n()(o.c).map(function(t){return{text:t,value:t}}),Shared:r.a,timers:[{text:"No timer",value:0},{text:"10 seconds",value:1e4},{text:"30 seconds",value:3e4},{text:"1 minute",value:6e4},{text:"2 minutes",value:12e4}],canVibrate:!!window.navigator.vibrate}},computed:{timer:{get:function(){return this.$store.state.timer},set:function(t){this.$store.commit("timer",t)}},player1:{get:function(){return this.$store.state.player[1]},set:function(t){this.$store.commit("player",{1:t,2:this.$store.state.player[2]})}},player2:{get:function(){return this.$store.state.player[2]},set:function(t){this.$store.commit("player",{1:this.$store.state.player[1],2:t})}},record:{get:function(){return this.Shared.game?Object(i.stringify)(this.Shared.game).join(", "):""},set:function(t){Object(i.reset)(this.Shared.game),Object(i.update)(this.Shared.game,t),l.a.$emit("game")}},useSound:{get:function(){return this.$store.state.sound},set:function(t){t&&setTimeout(c.a),this.$store.commit("sound",t)}},useVibration:{get:function(){return this.$store.state.vibration},set:function(t){t&&setTimeout(u.a),this.$store.commit("vibration",t)}},useDark:{get:function(){return this.$store.state.dark},set:function(t){this.$store.commit("dark",t)}},useFullscreen:{get:function(){return this.$store.state.full},set:function(t){this.$store.commit("full",t),Object(v.a)(t)}},useCoords:{get:function(){return this.$store.state.coords},set:function(t){this.$store.commit("coords",t)}},useRules:{get:function(){return this.$store.state.rules},set:function(t){this.$store.commit("rules",t)}}},methods:{isHuman:o.b,switchOponents:function(){this.$store.commit("player",{1:this.$store.state.player[2],2:this.$store.state.player[1]})}}},f=s(41);var m=function(t){s(340)},h=Object(f.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-0"},[t._v("Players")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.switchOponents()}}},[s("v-icon",[t._v("swap_vert")])],1)],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3 "},[s("v-select",{staticClass:"mb-2",class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{items:t.players,label:"Player 1",solo:"","single-line":"",bottom:"","hide-details":""},model:{value:t.player1,callback:function(e){t.player1=e},expression:"player1"}}),t._v(" "),s("v-select",{staticClass:"mb-2",class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{items:t.players,label:"Plaayer 2",solo:"","single-line":"",bottom:"","hide-details":""},model:{value:t.player2,callback:function(e){t.player2=e},expression:"player2"}})],1),t._v(" "),s("v-divider"),t._v(" "),s("div",[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Options")])],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},[t.isHuman(this.$store.state.player[1])&&t.isHuman(this.$store.state.player[2])?s("v-layout",{staticStyle:{"margin-top":"-16px"},attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Timer")]),t._v(" "),s("div",[s("v-select",{staticClass:"mb-3",attrs:{items:t.timers,"single-line":"",bottom:"","hide-details":""},model:{value:t.timer,callback:function(e){t.timer=e},expression:"timer"}})],1)],1):t._e(),t._v(" "),s("v-layout",{staticClass:"touch-bottom",attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Sound")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useSound,callback:function(e){t.useSound=e},expression:"useSound"}})],1)],1),t._v(" "),t.canVibrate?s("v-layout",{staticClass:"touch-bottom",attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Vibration")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useVibration,callback:function(e){t.useVibration=e},expression:"useVibration"}})],1)],1):t._e(),t._v(" "),s("v-layout",{staticClass:"touch-bottom",attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Dark")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useDark,callback:function(e){t.useDark=e},expression:"useDark"}})],1)],1),t._v(" "),s("v-layout",{staticClass:"touch-bottom",attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Full screen")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useFullscreen,callback:function(e){t.useFullscreen=e},expression:"useFullscreen"}})],1)],1),t._v(" "),s("v-layout",{staticClass:"touch-bottom",attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Coordinates")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useCoords,callback:function(e){t.useCoords=e},expression:"useCoords"}})],1)],1),t._v(" "),s("v-layout",{staticClass:"touch-bottom",attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Rules")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useRules,callback:function(e){t.useRules=e},expression:"useRules"}})],1)],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-0 ml-0"},[t._v("Turns")]),t._v(" "),s("v-spacer"),t._v(" "),t.Shared.game.moves.length?s("div",{staticClass:"body-2"},[t._v(t._s(t.Shared.game.moves.length))]):t._e()],1),t._v(" "),s("v-text-field",{class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{solo:"",spellcheck:"false",name:"input-turns",placeholder:"Insert turns","multi-line":"","auto-grow":"",rows:"3"},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}})],1),t._v(" "),s("v-divider"),t._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Info")])],1),t._v(" "),s("g-info",{attrs:{game:t.game}})],1)},[],!1,m,"data-v-e10e9104",null);e.default=h.exports}}]);