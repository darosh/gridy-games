(self.webpackJsonp=self.webpackJsonp||[]).push([[23],{346:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var a=n(361),s=n.n(a),i=n(360),r=n.n(i),o=n(348),c=o.a.MILLISECONDS,u=o.a.LATENCY_DEFAULT,l=o.a.LATENCY_RATIO,m=new(function(){function t(){s()(this,t)}return r()(t,[{key:"latency",get:function(){var t=this;return isNaN(this._latency)&&(Promise.all([n.e(8),n.e(9)]).then(n.bind(null,93)).then(function(e){var n=e.Tone;t._latency=n.supported&&!isNaN(n.context.baseLatency)?n.context.baseLatency*c*l:u}),this._latency=u),this._latency}},{key:"start",get:function(){return"+"+this.latency/c}},{key:"stop",get:function(){return"+"+this.latency/l/c}},{key:"last",set:function(t){this._last&&this._last.cancel&&(this._last.triggerRelease(this.stop),this._last=null),this._last=t}}]),t}())},348:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(61),s={MILLISECONDS:1e3,LATENCY_DEFAULT:25,LATENCY_RATIO:2,SOUND_POLY:4,PLAYER_DRAW:-1,PLAYER_1:1,PLAYER_2:2,PAN_LEFT:-1,PAN_RIGHT:1,SOUND_CHORD_TIME:.8,SOUND_KICK_TIME:.2,SOUND_CHORD:{envelope:{attack:.01,decay:.4,sustain:.1,release:.4},oscillator:{type:"sawtooth3"},volume:-10},SOUND_FAIL_ENV:{attack:.025,decay:1.2,sustain:0,release:1},SOUND_FAIL_OSC:{type:"sawtooth",frequency:"C3",volume:-12},SOUND_TICK_ENV:{attack:.025,decay:.6,sustain:0,release:1},SOUND_TICK_OSC:{type:"sawtooth",frequency:"G3",volume:-12},SOUND_KICK_ENV:{attack:.01,decay:.4,sustain:.1,release:.4},SOUND_KICK_1:{type:"sawtooth3",frequency:"B3",volume:-12},SOUND_KICK_2:{type:"sawtooth3",frequency:"D4",volume:-12}};n.n(a)()(s)},350:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u});var a=n(346),s=n(348),i=s.a.SOUND_TICK_ENV,r=s.a.SOUND_TICK_OSC,o=void 0;function c(t){o&&o.cancel(t)}function u(){Promise.all([n.e(8),n.e(9)]).then(n.bind(null,93)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(o||(o=new e(i).toMaster(),new n(r).connect(o).start()),a.a.last=o,o.triggerAttack(a.a.start))})}},354:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(2);function s(t){return a.Theme[t.theme].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+"-theme"}},357:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var a=n(350),s=n(346),i=n(348),r=i.a.PAN_LEFT,o=i.a.SOUND_KICK_ENV,c=i.a.SOUND_KICK_1,u=i.a.SOUND_KICK_TIME,l=void 0;function m(){Promise.all([n.e(8),n.e(9)]).then(n.bind(null,93)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,i=t.Panner;t.Tone.supported&&(l||(l=new i(r).toMaster(),(l=new e(o).connect(l)).attackCurve="exponential",new n(c).connect(l).start()),Object(a.b)(s.a.stop),l.triggerAttackRelease(u,s.a.start))})}},360:function(t,e,n){"use strict";e.__esModule=!0;var a,s=n(31),i=(a=s)&&a.__esModule?a:{default:a};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,i.default)(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}()},361:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},365:function(t,e,n){"use strict";var a=n(94),s=n(2);function i(t,e,n){var a=t[1],s=t[2];return a&&!s&&e===(n?1:2)||!a&&s&&e===(n?2:1)}e.a={computed:{sessionHuman:function(){return{1:Object(a.b)(this.$store.state.player[1]),2:Object(a.b)(this.$store.state.player[2])}},sessionWaiting:function(){return!this.sessionHuman[this.game.player]&&!this.game.winner},sessionCanSwitch:function(){return!this.game.moves.length&&this.sessionHuman[1]&&!this.sessionHuman[2]},sessionHotSeat:function(){return this.sessionHuman[1]&&this.sessionHuman[2]},sessionSolo:function(){return this.sessionHuman[1]!==this.sessionHuman[2]},sessionRobotMatch:function(){return!this.sessionHuman[1]&&!this.sessionHuman[2]},sessionOther:function(){return 3-this.game.player},sessionHumanWin:function(){return i(this.sessionHuman,this.game.winner,!0)},sessionHumanLost:function(){return i(this.sessionHuman,this.game.winner,!1)},sessionNames:function(){return s.StoneNames[s.ThemeStones[this.game.constructor.theme]]},sessionSoloDraw:function(){return this.sessionSolo&&-1===this.game.winner},sessionTimedOut:function(){return this.sessionHotSeat&&this.game.expired}}}},368:function(t,e,n){"use strict";var a=n(357),s=n(350),i=n(346),r=n(348),o=r.a.PAN_RIGHT,c=r.a.SOUND_KICK_ENV,u=r.a.SOUND_KICK_2,l=r.a.SOUND_KICK_TIME,m=void 0;function d(){Promise.all([n.e(8),n.e(9)]).then(n.bind(null,93)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,a=t.Panner;t.Tone.supported&&(m||(m=new a(o).toMaster(),(m=new e(c).connect(m)).attackCurve="exponential",new n(u).connect(m).start()),Object(s.b)(i.a.stop),m.triggerAttackRelease(l,i.a.start))})}var f=r.a.SOUND_FAIL_ENV,h=r.a.SOUND_FAIL_OSC,v=void 0;function p(){Promise.all([n.e(8),n.e(9)]).then(n.bind(null,93)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(v||(v=new e(f).toMaster(),new n(h).connect(v).start()),i.a.last=v,v.triggerAttack(i.a.start))})}var _,y=n(5),g=n.n(y),C=r.a.SOUND_POLY,S=r.a.PLAYER_DRAW,O=r.a.PLAYER_1,w=r.a.PLAYER_2,b=r.a.SOUND_CHORD_TIME,N=r.a.SOUND_CHORD,k=void 0,T=(_={},g()(_,S,["C2","E3","G3","C4"]),g()(_,O,["B2","G3","B3","D4"]),g()(_,w,["A2","F3","A3","D4"]),_);function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;Promise.all([n.e(8),n.e(9)]).then(n.bind(null,93)).then(function(e){var n=e.PolySynth;e.Tone.supported&&(k||(k=new n(C).toMaster()).set(N),Object(s.b)(i.a.stop),k.triggerAttackRelease(T[t],b,i.a.start))})}n.d(e,"c",function(){return a.a}),n.d(e,"d",function(){return d}),n.d(e,"b",function(){return p}),n.d(e,"f",function(){return s.a}),n.d(e,"a",function(){return D}),n.d(e,"e",function(){return i.a})},369:function(t,e,n){"use strict";e.a={methods:{playerSwitch:function(){this.$store.commit("player",{1:this.$store.state.player[2],2:this.$store.state.player[1]})}}}},405:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".relative[data-v-982d4630]{position:relative}.absolute[data-v-982d4630]{position:absolute}.player[data-v-982d4630]{transition:transform .2s ease-out}.player circle[data-v-982d4630]{transition:fill .2s linear,stroke .2s linear}.player-timer[data-v-982d4630]{stroke-dasharray:141.371;stroke-dashoffset:141.371;stroke-linecap:round;stroke-width:3;stroke:#fff;fill:none}.clickable[data-v-982d4630]:hover{cursor:pointer}.count-transition-leave-active[data-v-982d4630],.count-transition-leave-to[data-v-982d4630],.count-transition-leave[data-v-982d4630]{display:none;animation:none;transition:none}.count-transition-enter[data-v-982d4630]{transform:scale(.5);opacity:.5}.count-transition-enter-active[data-v-982d4630]{transition:all .2s cubic-bezier(.175,.885,.32,1.275)}.count-transition-enter-to[data-v-982d4630]{transform:scale(1);opacity:1}.rotate-animation[data-v-982d4630]{animation:rotate-data-v-982d4630 2s ease-in-out infinite}@keyframes rotate-data-v-982d4630{0%{transform:rotate(0deg)}80%{transform:rotate(0deg)}to{transform:rotate(180deg)}}.theme--light .player-timer[data-v-982d4630]{stroke:#848484}.theme--dark .player-timer[data-v-982d4630]{stroke:#fff}.info-position[data-v-982d4630]{top:19px;left:19px}",""])},406:function(t,e,n){var a=n(405);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(143).default)("2948a140",a,!0,{})},494:function(t,e,n){"use strict";n.r(e);var a=n(9),s=n(46),i=n(354),r=n(369),o=n(368),c={data:function(){return{timer:-1,timerTransition:0}},watch:{"game.moves.length":function(){this.updateTimer()},"game.pending":function(){this.updateTimer()},"game.counterSignal":function(t){this.$store.state.sound&&(t>0?Object(o.f)():0===t&&Object(o.b)())}},methods:{updateTimer:function(){var t=this;this.game.pending&&this.value===this.game.player?(this.timerTransition=0,this.timer=-1,a.a.nextTick(function(){requestAnimationFrame(function(){t.timer=0,t.timerTransition=t.game.limit})})):(this.timer=-1,this.timerTransition=0)}}},u=n(365),l=2*Math.PI*22.5,m={components:{GPlayerDivider:function(){return n.e(10).then(n.bind(null,492))}},mixins:[u.a,r.a,c],data:function(){return{Shared:s.a,OFFSET:l,starting:!0}},computed:{game:function(){return s.a.game},value:function(){return s.a.game.winner||s.a.game.player},other:function(){return s.a.game.expired?-1:3-this.value},theme:function(){return Object(i.a)(s.a.game.constructor)},position:function(){return 0===s.a.game.moves.length?-42:1===this.value?-42:2===this.value?42:0}},watch:{"game.moves.length":{immediate:!0,handler:function(t){var e=this;t?this.starting=!1:(this.starting=!0,a.a.nextTick(function(){requestAnimationFrame(function(){e.starting=!1})}))}}}},d=n(92);var f=function(t){n(406)},h=Object(d.a)(m,function(){var t,e,n=this,a=n.$createElement,s=n._self._c||a;return s("div",{staticClass:"relative text-xs-center",class:n.theme,staticStyle:{width:"64px",height:"48px"}},[s("g-player-divider",{staticClass:"d-inline-block",staticStyle:{"margin-top":"19px"},attrs:{value:-1===n.game.winner?"0":"-1"}}),n._v(" "),s("div",{staticClass:"absolute player",class:"player-"+n.value,style:{transition:n.starting?"none":null,top:0,transform:"translate("+n.position+"px,0)"}},[s("div",[s("svg",{staticClass:"d-block",attrs:{height:"64",width:"64"}},[s("circle",{class:"symbol-"+n.value,style:{transition:n.starting?"none":null},attrs:{cx:"31",cy:"31",r:"16.5"}}),n._v(" "),s("circle",{staticClass:"player-timer",style:{"stroke-dashoffset":n.timer>=0?n.timer:n.OFFSET,transition:"stroke-dashoffset "+n.timerTransition+"ms linear"},attrs:{cx:"31",cy:"31",r:"22.5",transform:"rotate(-90 31 31)"}})]),n._v(" "),s("div",{staticClass:"absolute info-position"},[s("transition",{attrs:{name:"count-transition",mode:"out-in"}},[n.game.player===n.value&&n.game.counter>0?s("div",{key:n.game.counter,staticClass:"title counter",staticStyle:{width:"24px","margin-top":"2px","text-align":"center"}},[n._v(n._s(n.game.counter))]):n.game.player===n.value&&0===n.game.counter?s("v-icon",{key:n.game.counter,staticClass:"player-status"},[n._v("timer_off")]):n.sessionWaiting?s("div",{key:"b",staticStyle:{transform:"none"}},[s("div",[s("v-icon",{staticClass:"player-status rotate-animation"},[n._v("hourglass_empty")])],1)]):n.game.winner>0&&n.game.winner===n.value?s("v-icon",{key:"d",staticClass:"player-status"},[n._v("mood")]):-1===n.game.winner?s("div",{key:"e",staticClass:"player-draw-status"}):s("v-icon",{key:"c",staticClass:"player-status"},[n._v("play_arrow")])],1)],1)])]),n._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:n.sessionCanSwitch||n.game.expired,expression:"sessionCanSwitch || game.expired"}],staticClass:"absolute player",class:(t={clickable:n.sessionCanSwitch},t["player-"+n.other]=!0,t),style:{top:0,transform:"translate3d("+-n.position+"px,0,0)"},on:{click:function(t){n.sessionCanSwitch&&n.playerSwitch()}}},[s("div",[s("svg",{staticClass:"d-block",class:(e={},e[n.theme]=!0,e),attrs:{height:"64",width:"64"}},[s("circle",{class:"symbol-"+n.other,attrs:{cx:"31",cy:"31",r:"16.5"}})]),n._v(" "),s("div",{staticClass:"absolute info-position"},[n.sessionCanSwitch?s("v-icon",{staticClass:"player-status"},[n._v("swap_horiz")]):n.game.expired?s("v-icon",[n._v("timer_off")]):n._e()],1)])])],1)},[],!1,f,"data-v-982d4630",null);e.default=h.exports}}]);