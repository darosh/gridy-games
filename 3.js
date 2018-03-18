(self.webpackJsonp=self.webpackJsonp||[]).push([[3],{251:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(285),a=n.n(i),s=n(284),r=n.n(s),o=new(function(){function t(){a()(this,t)}return r()(t,[{key:"latency",get:function(){var t=this;return isNaN(this._latency)&&(Promise.all([n.e(9),n.e(10)]).then(n.bind(null,9)).then(function(e){var n=e.Tone;t._latency=n.supported&&!isNaN(n.context.baseLatency)?1e3*n.context.baseLatency*2:25}),this._latency=100),this._latency}},{key:"start",get:function(){return"+"+this.latency/1e3}},{key:"stop",get:function(){return"+"+this.latency/2/1e3}},{key:"last",set:function(t){this._last&&this._last.cancel&&(this._last.triggerRelease(this.stop),this._last=null),this._last=t}}]),t}())},254:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return r});var i=n(251),a=void 0;function s(t){a&&a.cancel(t)}function r(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,9)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(a||(a=new e({attack:.025,decay:.6,sustain:0,release:1}).toMaster(),new n({type:"sawtooth",frequency:"G3",volume:-12}).connect(a).start()),i.a.last=a,a.triggerAttack(i.a.start))})}},264:function(t,e,n){t.exports={default:n(282),__esModule:!0}},265:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(264),a=n.n(i),s=[["reversi",null,/Reversi/],["tactickle",/Tac-tickle/],["gomoku",/Gomoku|in-a-row/],["plastic",/Connect Four/],["hex-checkers",/Hex .* Checkers/],["hex",/Hex|Tic Tac Toe|Circular Four/],["checkers",/Checkers/],["qirkat",null,/Misc/],["mills",null,/Mills/]];function r(t){if(t.theme)return t.theme+"-theme";var e=!0,n=!1,i=void 0;try{for(var r,o=a()(s);!(e=(r=o.next()).done);e=!0){var c=r.value;if(c[1]&&c[1].test(t.title)||c[2]&&c[2].test(t.type))return c[0]+"-theme"}}catch(t){n=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw i}}}},272:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(254),a=n(251),s=void 0;function r(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,9)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,r=t.Panner;t.Tone.supported&&(s||(s=new r(-1).toMaster(),(s=new e({attack:.01,decay:.4,sustain:.1,release:.4}).connect(s)).attackCurve="exponential",new n({type:"sawtooth3",frequency:"B3",volume:-12}).connect(s).start()),Object(i.b)(a.a.stop),s.triggerAttackRelease(.2,a.a.start))})}},274:function(t,e,n){var i=n(76),a=n(261);t.exports=n(15).getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},282:function(t,e,n){n(263),n(262),t.exports=n(274)},284:function(t,e,n){"use strict";e.__esModule=!0;var i,a=n(88),s=(i=a)&&i.__esModule?i:{default:i};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,s.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},285:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},294:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var i=n(1);function a(t,e,n,i){return Math.min(n/t,i/e)}function s(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0===t[e]&&n&&t.original?i.Games[t.original][e]:t[e]}},295:function(t,e,n){"use strict";var i=n(272),a=n(254),s=n(251),r=void 0;function o(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,9)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,i=t.Panner;t.Tone.supported&&(r||(r=new i(1).toMaster(),(r=new e({attack:.01,decay:.4,sustain:.1,release:.4}).connect(r)).attackCurve="exponential",new n({type:"sawtooth3",frequency:"D4",volume:-12}).connect(r).start()),Object(a.b)(s.a.stop),r.triggerAttackRelease(.2,s.a.start))})}var c=void 0;function u(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,9)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(c||(c=new e({attack:.025,decay:1.2,sustain:0,release:1}).toMaster(),new n({type:"sawtooth",frequency:"C3",volume:-12}).connect(c).start()),s.a.last=c,c.triggerAttack(s.a.start))})}var l=void 0,h={"-1":["C2","E3","G3","C4"],1:["B2","G3","B3","D4"],2:["A2","F3","A3","D4"]};function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Promise.all([n.e(9),n.e(10)]).then(n.bind(null,9)).then(function(e){var n=e.PolySynth;e.Tone.supported&&(l||(l=new n(4).toMaster()).set({envelope:{attack:.01,decay:.4,sustain:.1,release:.4},oscillator:{type:"sawtooth3"},volume:-10}),Object(a.b)(s.a.stop),l.triggerAttackRelease(h[t],.8,s.a.start))})}n.d(e,"c",function(){return i.a}),n.d(e,"d",function(){return o}),n.d(e,"b",function(){return u}),n.d(e,"f",function(){return a.a}),n.d(e,"a",function(){return d}),n.d(e,"e",function(){return s.a})},296:function(t,e,n){"use strict";e.a={methods:{switchPlayer:function(){this.$store.commit("player",{1:this.$store.state.player[2],2:this.$store.state.player[1]})}}}},297:function(t,e,n){"use strict";var i=n(50);e.a={computed:{human:function(){return[void 0,Object(i.b)(this.$store.state.player[1]),Object(i.b)(this.$store.state.player[2])]},waiting:function(){return!this.human[this.game.player]&&!this.game.winner},canSwitch:function(){return!this.game.moves.length&&this.human[1]&&!this.human[2]},hotSeat:function(){return this.human[1]&&this.human[2]},robotMatch:function(){return!this.human[1]&&!this.human[2]},verdict:function(){var t=this.human[1],e=this.human[2];return t&&!e&&1===this.game.winner||!t&&e&&2===this.game.winner?"You won!":t&&!e&&2===this.game.winner||!t&&e&&1===this.game.winner?"You lost":t!==e&&-1===this.game.winner?"It's draw":t&&e&&this.expired?"Time out":"Game over!"}}}},298:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=void 0;function a(t,e){window.navigator.vibrate&&(i&&(clearTimeout(i),i=null),e?i=setTimeout(function(){window.navigator.vibrate(t)},e):window.navigator.vibrate(t))}},302:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=new(n(6).a)},375:function(t,e,n){t.exports=function(){return new Worker(n.p+"2be17e71be5a6655661d.worker.js")}},376:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".clickable[data-v-660d5b16]:hover{cursor:pointer}.mt-1-5[data-v-660d5b16]{margin-top:5px}.verdict-snack[data-v-660d5b16]{padding-top:62px}",""])},377:function(t,e,n){var i=n(376);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(79).default)("6f9e7bc2",i,!0,{})},433:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(50),s=n(302),r=n(100),o=n.n(r),c=n(331),u=n.n(c),l=n(285),h=n.n(l),d=n(284),m=n.n(d),f=n(375),v=function(){function t(e,n){h()(this,t),this.id=0,this.promises={},this.worker=new f,this.worker.onmessage=this.message.bind(this),this.worker.postMessage({player:e,game:n})}return m()(t,[{key:"message",value:function(t){var e=JSON.parse(t.data);this.promises[e.id].resolve(e),delete this.promises[e.id]}},{key:"select",value:function(t){return this.post({game:Object(i.stringify)(t).join(", ")}).then(function(e){return e.move=t.stringToMove(e.move),e})}},{key:"post",value:function(t){var e=this;this.id++;var n=new u.a(function(t,n){e.promises[e.id]={resolve:t,reject:n}});return this.worker.postMessage(o()({},t,{id:this.id})),n}},{key:"terminate",value:function(){this.worker.terminate(),delete this.worker}}]),t}(),b=n(265),g=n(24),p=n(294),w=n(295),y=n(298),k={data:function(){return{Shared:g.a,vertical:window.innerWidth<window.innerHeight}},watch:{"Shared.drawer":function(){this.onResize()}},methods:{onResize:function(){var t=this.game.grid.bounds(),e=window.innerWidth-(g.a.drawer&&window.innerWidth>=1264?300:0),n=window.innerHeight;if(this.game.landscape)this.vertical=!1;else{var i=(t.maxX-t.minX)/(t.maxY-t.minY);this.vertical=i>1&&e<n}this.vertical?this.frame=[n-64-16,e-32]:this.frame=n<800?[e-32,n-64-16]:[e-32,n-128],this.frame[0]=Math.max(180,this.frame[0]),this.frame[1]=Math.max(180,this.frame[1])}}},x=n(297),_=n(296),O={components:{GBoard:function(){return n.e(19).then(n.bind(null,63))},GPlayerDivider:function(){return n.e(13).then(n.bind(null,429))}},mixins:[k,x.a,_.a],data:function(){return{game:null,frame:null,margin:20,fab:!1,working:!1,robotPlayer:{},theme:null,snackbar:!1,rules:!1,showRules:!0,rulesText:!0}},watch:{"game.player":function(){this.robot()},"game.winner":function(t){t&&(this.snackbar=!0,this.update())},"$store.state.player":{handler:function(){this.initRobots(),this.initTimer(),this.robot()},deep:!0},"$store.state.timer":function(t){this.initTimer()},"$route.params.id":function(t){this.initGame(),this.initRobots(),this.onResize(),this.update()}},mounted:function(){document.body.scrollTop=document.documentElement.scrollTop=0},created:function(){this.initGame(),this.initRobots(),this.onResize(),this.update(),s.a.$on("game",this.update)},destroyed:function(){s.a.$off("game",this.update),this.destroyRobots(),this.game.dispose&&this.game.dispose()},methods:{initTimer:function(){this.game.limit=this.hotSeat?this.$store.state.timer:0},initGame:function(){var t=this;!this.human[1]&&this.human[2]&&this.switchPlayer();var e=this.$route.params.id+"Game",n=new i.Games[e];Object(i.initHighlight)(n);var a=new i.TimedProxy(n);this.game=g.a.game=a,this.theme=Object(b.a)(i.Games[e]),this.initTimer(),this.showRules&&(this.showRules=!1,setTimeout(function(){t.rulesText=Object(p.a)(n.constructor,"rules"),t.rules=!!t.rulesText},200))},initRobot:function(t){return!Object(a.b)(t)&&new v(t,this.$route.params.id)},destroyRobots:function(){this.robotPlayer[1]&&this.robotPlayer[1].terminate(),this.robotPlayer[2]&&this.robotPlayer[2].terminate()},initRobots:function(){this.destroyRobots(),this.robotPlayer={1:this.initRobot(this.$store.state.player[1]),2:this.initRobot(this.$store.state.player[2])}},kickSound:function(){this.$store.state.sound&&(this.game.winner?Object(w.a)(this.game.winner):1===this.game.player?Object(w.c)():Object(w.d)()),this.$store.state.vibration&&!this.robotMatch&&Object(y.a)(50,this.$store.state.sound?2*w.e.latency:0)},robot:function(){var t=this,e=this.robotPlayer[this.game.player];this.working||this.game.winner||!e||(this.working=!0,e.select(this.game).then(function(e){t.working=!1,Object(i.undoAction)(t.game),t.game.move(e.move),t.kickSound(),t.update(),t.robot()}))},move:function(t){if(this.rules=!1,!this.game.winner){var e=Object(i.selectAction)(this.game,t);!1!==e&&(e?(Object(i.undoAction)(this.game),this.game.move(e),this.kickSound(),this.update()):this.kickSound())}},update:function(){Object(i.undoAction)(this.game),this.game.winner||Object(i.initActions)(this.game,this.game.possible())},undo:function(){this.snackbar=!1,this.game.undo(),this.game.undo(),this.update()},reset:function(){this.fab=!1,this.snackbar=!1,this.initGame(),this.onResize(),this.initRobots(),this.update(),this.robot()}}},T=n(43);var R=function(t){n(377)},j=Object(T.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],class:t.theme},[n("v-layout",{attrs:{column:"",wrap:"","align-center":"","align-content-center":""}},[n("div",{staticClass:"mt-1-5",staticStyle:{"text-align":"center"}},[n("g-board",{attrs:{game:t.game,coords:t.$store.state.coords,frame:t.frame,margin:t.margin,move:t.move,vertical:t.vertical,waiting:t.waiting,interactive:"",centered:""}})],1)]),t._v(" "),t.game.moves.length&&t.game.score?n("v-layout",{staticClass:"text-xs-center",staticStyle:{position:"absolute",bottom:"12px",left:"2px",right:"0"},attrs:{"justify-center":"",row:""}},[n("v-flex",{staticClass:"subheading text-xs-right",staticStyle:{width:"60px"}},[t._v(t._s(t.game.score[1]))]),t._v(" "),n("g-player-divider",{staticClass:"player-divider mx-3 d-block"}),t._v(" "),n("v-flex",{staticClass:"subheading text-xs-left",staticStyle:{width:"60px"}},[t._v(t._s(t.game.score[2]))])],1):t._e(),t._v(" "),n("v-speed-dial",{staticStyle:{"z-index":"9"},attrs:{fixed:"",right:"",bottom:"",direction:"top",transition:"slide-y-reverse-transition"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-fab-transition",{attrs:{slot:"activator"},slot:"activator"},[t.game.moves.length?n("v-btn",{attrs:{color:t.$store.state.dark?"grey darken-4":"grey darken-3",dark:"",fab:"",hover:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-icon",{staticClass:"white--text"},[t._v("gamepad")]),t._v(" "),n("v-icon",{staticClass:"white--text"},[t._v("close")])],1):t._e()],1),t._v(" "),t.game.moves.length?n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"grey darken-3"},on:{click:function(e){e.stopPropagation(),t.undo()}}},[n("v-icon",{staticClass:"white--text"},[t._v("undo")])],1):t._e(),t._v(" "),t.game.moves.length?n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"grey darken-3"},on:{click:function(e){e.stopPropagation(),t.reset()}}},[n("v-icon",{staticClass:"white--text"},[t._v("refresh")])],1):t._e()],1),t._v(" "),n("v-snackbar",{staticClass:"verdict-snack",attrs:{timeout:12e3,color:"grey darken-3","auto-height":"",top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("v-flex",{on:{click:function(e){t.snackbar=!1}}},[t.game.winner?n("span",[t._v(t._s(t.verdict))]):t._e()]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"light-blue"},nativeOn:{click:function(e){t.snackbar=!1,t.reset()}}},[t._v("Restart")])],1),t._v(" "),n("v-snackbar",{staticClass:"info-snack",attrs:{timeout:12e3,"auto-height":"",color:"grey darken-3",bottom:""},model:{value:t.rules,callback:function(e){t.rules=e},expression:"rules"}},[n("v-flex",t._l(t.rulesText,function(e,i){return n("div",{key:i},[t._v(t._s(e))])})),t._v(" "),n("v-btn",{attrs:{flat:"",color:"light-blue"},nativeOn:{click:function(e){t.rules=!1}}},[t._v("OK")])],1)],1)},[],!1,R,"data-v-660d5b16",null);e.default=j.exports}}]);