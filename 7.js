(self.webpackJsonp=self.webpackJsonp||[]).push([[7],{249:function(t,e,s){"use strict";s.d(e,"a",function(){return o});var n=s(283),a=s.n(n),r=s(282),i=s.n(r),o=new(function(){function t(){a()(this,t)}return i()(t,[{key:"latency",get:function(){var t=this;return isNaN(this._latency)&&(Promise.all([s.e(9),s.e(10)]).then(s.bind(null,72)).then(function(e){var s=e.Tone;t._latency=s.supported&&!isNaN(s.context.baseLatency)?1e3*s.context.baseLatency*2:25}),this._latency=100),this._latency}},{key:"start",get:function(){return"+"+this.latency/1e3}},{key:"stop",get:function(){return"+"+this.latency/2/1e3}},{key:"last",set:function(t){this._last&&this._last.cancel&&(this._last.triggerRelease(this.stop),this._last=null),this._last=t}}]),t}())},252:function(t,e,s){"use strict";s.d(e,"b",function(){return r}),s.d(e,"a",function(){return i});var n=s(249),a=void 0;function r(t){a&&a.cancel(t)}function i(){Promise.all([s.e(9),s.e(10)]).then(s.bind(null,72)).then(function(t){var e=t.AmplitudeEnvelope,s=t.Oscillator;t.Tone.supported&&(a||(a=new e({attack:.025,decay:.6,sustain:0,release:1}).toMaster(),new s({type:"sawtooth",frequency:"G3",volume:-12}).connect(a).start()),n.a.last=a,a.triggerAttack(n.a.start))})}},270:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var n=s(252),a=s(249),r=void 0;function i(){Promise.all([s.e(9),s.e(10)]).then(s.bind(null,72)).then(function(t){var e=t.AmplitudeEnvelope,s=t.Oscillator,i=t.Panner;t.Tone.supported&&(r||(r=new i(-1).toMaster(),(r=new e({attack:.01,decay:.4,sustain:.1,release:.4}).connect(r)).attackCurve="exponential",new s({type:"sawtooth3",frequency:"B3",volume:-12}).connect(r).start()),Object(n.b)(a.a.stop),r.triggerAttackRelease(.2,a.a.start))})}},282:function(t,e,s){"use strict";e.__esModule=!0;var n,a=s(83),r=(n=a)&&n.__esModule?n:{default:n};e.default=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r.default)(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}()},283:function(t,e,s){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},296:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var n=void 0;function a(t,e){window.navigator.vibrate&&(n&&(clearTimeout(n),n=null),e?n=setTimeout(function(){window.navigator.vibrate(t)},e):window.navigator.vibrate(t))}},300:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var n=new(s(6).a)},424:function(t,e,s){"use strict";s.r(e);var n=s(32),a=s.n(n),r=s(47),i=s(23),o=s(1),l=s(300),c=s(270),u=s(296),v=s(48),d={components:{VSwitch:function(){return s.e(14).then(function(){var t=s(433);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VSubheader:function(){return Promise.resolve().then(function(){var t=s(144);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VDivider:function(){return Promise.resolve().then(function(){var t=s(159);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},GInfo:function(){return s.e(22).then(s.bind(null,423))}},data:function(){return{game:o.Info.game(this.$route.params.id),players:a()(r.c).map(function(t){return{text:t,value:t}}),Shared:i.a,timers:[{text:"No timer",value:0},{text:"10 seconds",value:1e4},{text:"30 seconds",value:3e4},{text:"1 minute",value:6e4},{text:"2 minutes",value:12e4}],canVibrate:!!window.navigator.vibrate}},computed:{timer:{get:function(){return this.$store.state.timer},set:function(t){this.$store.commit("timer",t)}},player1:{get:function(){return this.$store.state.player[1]},set:function(t){this.$store.commit("player",{1:t,2:this.$store.state.player[2]})}},player2:{get:function(){return this.$store.state.player[2]},set:function(t){this.$store.commit("player",{1:this.$store.state.player[1],2:t})}},record:{get:function(){return this.Shared.game?Object(o.stringify)(this.Shared.game).join(", "):""},set:function(t){Object(o.reset)(this.Shared.game),Object(o.update)(this.Shared.game,t),l.a.$emit("game")}},useSound:{get:function(){return this.$store.state.sound},set:function(t){t&&setTimeout(c.a),this.$store.commit("sound",t)}},useVibration:{get:function(){return this.$store.state.vibration},set:function(t){t&&setTimeout(u.a),this.$store.commit("vibration",t)}},useDark:{get:function(){return this.$store.state.dark},set:function(t){this.$store.commit("dark",t)}},useFullscreen:{get:function(){return this.$store.state.full},set:function(t){this.$store.commit("full",t),Object(v.a)(t)}},useCoords:{get:function(){return this.$store.state.coords},set:function(t){this.$store.commit("coords",t)}}},methods:{isHuman:r.b,switchOponents:function(){this.$store.commit("player",{1:this.$store.state.player[2],2:this.$store.state.player[1]})}}},f=s(40),m=Object(f.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-0"},[t._v("Players")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.switchOponents()}}},[s("v-icon",[t._v("swap_vert")])],1)],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3 "},[s("v-select",{staticClass:"mb-2",class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{items:t.players,label:"Player 1",solo:"","single-line":"",bottom:"","hide-details":""},model:{value:t.player1,callback:function(e){t.player1=e},expression:"player1"}}),t._v(" "),s("v-select",{staticClass:"mb-2",class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{items:t.players,label:"Plaayer 2",solo:"","single-line":"",bottom:"","hide-details":""},model:{value:t.player2,callback:function(e){t.player2=e},expression:"player2"}})],1),t._v(" "),s("v-divider"),t._v(" "),s("div",[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Options")])],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},[t.isHuman(this.$store.state.player[1])&&t.isHuman(this.$store.state.player[2])?s("v-layout",{staticStyle:{"margin-top":"-16px"},attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Timer")]),t._v(" "),s("div",[s("v-select",{staticClass:"mb-3",attrs:{items:t.timers,"single-line":"",bottom:"","hide-details":""},model:{value:t.timer,callback:function(e){t.timer=e},expression:"timer"}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Sound")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useSound,callback:function(e){t.useSound=e},expression:"useSound"}})],1)],1),t._v(" "),t.canVibrate?s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Vibration")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useVibration,callback:function(e){t.useVibration=e},expression:"useVibration"}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Dark")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useDark,callback:function(e){t.useDark=e},expression:"useDark"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Full screen")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useFullscreen,callback:function(e){t.useFullscreen=e},expression:"useFullscreen"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Coordinates")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useCoords,callback:function(e){t.useCoords=e},expression:"useCoords"}})],1)],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-0 ml-0"},[t._v("Turns")]),t._v(" "),s("v-spacer"),t._v(" "),t.Shared.game.moves.length?s("div",{staticClass:"body-2"},[t._v(t._s(t.Shared.game.moves.length))]):t._e()],1),t._v(" "),s("v-text-field",{class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{solo:"",spellcheck:"false",name:"input-turns",placeholder:"Insert turns","multi-line":"","auto-grow":"",rows:"3"},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}})],1),t._v(" "),s("v-divider"),t._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Info")])],1),t._v(" "),s("g-info",{attrs:{game:t.game}})],1)},[],!1,null,null,null);e.default=m.exports}}]);