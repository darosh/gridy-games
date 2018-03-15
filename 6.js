(self.webpackJsonp=self.webpackJsonp||[]).push([[6],{299:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var s=a(316),n=a.n(s),r=a(315),i=a.n(r),o=new(function(){function t(){n()(this,t)}return i()(t,[{key:"latency",get:function(){var t=this;return isNaN(this._latency)&&(Promise.all([a.e(8),a.e(9)]).then(a.bind(null,24)).then(function(e){var a=e.Tone;t._latency=a.supported&&!isNaN(a.context.baseLatency)?1e3*a.context.baseLatency*2:25}),this._latency=100),this._latency}},{key:"start",get:function(){return"+"+this.latency/1e3}},{key:"stop",get:function(){return"+"+this.latency/2/1e3}},{key:"last",set:function(t){this._last&&this._last.cancel&&(this._last.triggerRelease(this.stop),this._last=null),this._last=t}}]),t}())},303:function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"a",function(){return i});var s=a(299),n=void 0;function r(t){n&&n.cancel(t)}function i(){Promise.all([a.e(8),a.e(9)]).then(a.bind(null,24)).then(function(t){var e=t.AmplitudeEnvelope,a=t.Oscillator;t.Tone.supported&&(n||(n=new e({attack:.025,decay:.6,sustain:0,release:1}).toMaster(),new a({type:"sawtooth",frequency:"G3",volume:-12}).connect(n).start()),s.a.last=n,n.triggerAttack(s.a.start))})}},314:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var s=a(303),n=a(299),r=void 0;function i(){Promise.all([a.e(8),a.e(9)]).then(a.bind(null,24)).then(function(t){var e=t.AmplitudeEnvelope,a=t.Oscillator,i=t.Panner;t.Tone.supported&&(r||(r=new i(-1).toMaster(),(r=new e({attack:.01,decay:.4,sustain:.1,release:.4}).connect(r)).attackCurve="exponential",new a({type:"sawtooth3",frequency:"B3",volume:-12}).connect(r).start()),Object(s.b)(n.a.stop),r.triggerAttackRelease(.2,n.a.start))})}},315:function(t,e,a){"use strict";e.__esModule=!0;var s,n=a(113),r=(s=n)&&s.__esModule?s:{default:s};e.default=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,r.default)(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}()},316:function(t,e,a){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},318:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var s=void 0;function n(t,e){window.navigator.vibrate&&(s&&(clearTimeout(s),s=null),e?s=setTimeout(function(){window.navigator.vibrate(t)},e):window.navigator.vibrate(t))}},322:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s=new(a(6).a)},421:function(t,e,a){"use strict";a.r(e);var s=a(117),n=a.n(s),r=a(66),i=a(22),o=a(2),l=a(322),c=a(314),u=a(318),v=a(67),d={components:{GInfo:function(){return a.e(18).then(a.bind(null,416))}},data:function(){return{game:Object(v.a)(this.$route.params.id),players:n()(r.c).map(function(t){return{text:t,value:t}}),Shared:i.a,timers:[{text:"No timer",value:0},{text:"5 seconds",value:5e3},{text:"15 seconds",value:15e3},{text:"30 seconds",value:3e4},{text:"1 minute",value:6e4}],canVibrate:!!window.navigator.vibrate}},computed:{timer:{get:function(){return this.$store.state.timer},set:function(t){this.$store.commit("timer",t)}},player1:{get:function(){return this.$store.state.player[1]},set:function(t){this.$store.commit("assignPlayer",{1:t})}},player2:{get:function(){return this.$store.state.player[2]},set:function(t){this.$store.commit("assignPlayer",{2:t})}},record:{get:function(){return this.Shared.game?Object(o.l)(this.Shared.game).join(", "):""},set:function(t){Object(o.j)(this.Shared.game),Object(o.o)(this.Shared.game,t),l.a.$emit("game")}},useSound:{get:function(){return this.$store.state.sound},set:function(t){t&&setTimeout(c.a),this.$store.commit("sound",t)}},useVibration:{get:function(){return this.$store.state.vibration},set:function(t){t&&setTimeout(u.a),this.$store.commit("vibration",t)}},useDark:{get:function(){return this.$store.state.dark},set:function(t){this.$store.commit("dark",t)}}},methods:{isHuman:r.b,switchOponents:function(){this.$store.commit("setPlayer",{1:this.$store.state.player[2],2:this.$store.state.player[1]})}}},m=a(65),f=Object(m.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[a("v-subheader",{staticClass:"pl-0"},[t._v("Players")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.switchOponents()}}},[a("v-icon",[t._v("swap_vert")])],1)],1),t._v(" "),a("div",{staticClass:"mx-3 mb-3 "},[a("v-select",{staticClass:"mb-2",class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{items:t.players,label:"Player 1",solo:"","single-line":"",bottom:"","hide-details":""},model:{value:t.player1,callback:function(e){t.player1=e},expression:"player1"}}),t._v(" "),a("v-select",{staticClass:"mb-2",class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{items:t.players,label:"Plaayer 2",solo:"","single-line":"",bottom:"","hide-details":""},model:{value:t.player2,callback:function(e){t.player2=e},expression:"player2"}})],1),t._v(" "),a("v-divider"),t._v(" "),a("div",[a("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[a("v-subheader",{staticClass:"pl-3"},[t._v("Options")])],1),t._v(" "),a("div",{staticClass:"mx-3 mb-3"},[t.isHuman(this.$store.state.player[1])&&t.isHuman(this.$store.state.player[2])?a("v-layout",{staticStyle:{"margin-top":"-16px"},attrs:{row:"","mx-3":"","align-center":""}},[a("v-flex",{staticClass:"body-1"},[t._v("Timer")]),t._v(" "),a("div",[a("v-select",{staticClass:"mb-3",attrs:{items:t.timers,"single-line":"",bottom:"","hide-details":""},model:{value:t.timer,callback:function(e){t.timer=e},expression:"timer"}})],1)],1):t._e(),t._v(" "),a("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[a("v-flex",{staticClass:"body-1"},[t._v("Sound")]),t._v(" "),a("div",[a("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useSound,callback:function(e){t.useSound=e},expression:"useSound"}})],1)],1),t._v(" "),t.canVibrate?a("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[a("v-flex",{staticClass:"body-1"},[t._v("Vibration")]),t._v(" "),a("div",[a("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useVibration,callback:function(e){t.useVibration=e},expression:"useVibration"}})],1)],1):t._e(),t._v(" "),a("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[a("v-flex",{staticClass:"body-1"},[t._v("Dark")]),t._v(" "),a("div",[a("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useDark,callback:function(e){t.useDark=e},expression:"useDark"}})],1)],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("div",{staticClass:"mx-3 mb-3"},[a("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[a("v-subheader",{staticClass:"pl-0 ml-0"},[t._v("Turns")]),t._v(" "),a("v-spacer"),t._v(" "),t.Shared.game.moves.length?a("div",{staticClass:"body-2"},[t._v(t._s(t.Shared.game.moves.length))]):t._e()],1),t._v(" "),a("v-text-field",{class:t.$store.state.dark?"grey darken-2":"grey lighten-4",attrs:{solo:"",spellcheck:"false",name:"input-turns",placeholder:"Insert turns","multi-line":"","auto-grow":"",rows:"3"},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}})],1),t._v(" "),a("v-divider"),t._v(" "),a("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[a("v-subheader",{staticClass:"pl-3"},[t._v("Info")])],1),t._v(" "),a("g-info",{attrs:{game:t.game}})],1)},[],!1,null,null,null);e.default=f.exports}}]);