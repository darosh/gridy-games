(self.webpackJsonp=self.webpackJsonp||[]).push([[3],{255:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var i=n(274),s=n.n(i),a=n(273),o=n.n(a),r=n(257),c=r.a.MILLISECONDS,u=r.a.LATENCY_DEFAULT,l=r.a.LATENCY_RATIO,h=new(function(){function t(){s()(this,t)}return o()(t,[{key:"latency",get:function(){var t=this;return isNaN(this._latency)&&(Promise.all([n.e(9),n.e(10)]).then(n.bind(null,15)).then(function(e){var n=e.Tone;t._latency=n.supported&&!isNaN(n.context.baseLatency)?n.context.baseLatency*c*l:u}),this._latency=u),this._latency}},{key:"start",get:function(){return"+"+this.latency/c}},{key:"stop",get:function(){return"+"+this.latency/l/c}},{key:"last",set:function(t){this._last&&this._last.cancel&&(this._last.triggerRelease(this.stop),this._last=null),this._last=t}}]),t}())},257:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(269),s={MILLISECONDS:1e3,LATENCY_DEFAULT:25,LATENCY_RATIO:2,SOUND_POLY:4,PLAYER_DRAW:-1,PLAYER_1:1,PLAYER_2:2,PAN_LEFT:-1,PAN_RIGHT:1,SOUND_CHORD_TIME:.8,SOUND_KICK_TIME:.2,SOUND_CHORD:{envelope:{attack:.01,decay:.4,sustain:.1,release:.4},oscillator:{type:"sawtooth3"},volume:-10},SOUND_FAIL_ENV:{attack:.025,decay:1.2,sustain:0,release:1},SOUND_FAIL_OSC:{type:"sawtooth",frequency:"C3",volume:-12},SOUND_TICK_ENV:{attack:.025,decay:.6,sustain:0,release:1},SOUND_TICK_OSC:{type:"sawtooth",frequency:"G3",volume:-12},SOUND_KICK_ENV:{attack:.01,decay:.4,sustain:.1,release:.4},SOUND_KICK_1:{type:"sawtooth3",frequency:"B3",volume:-12},SOUND_KICK_2:{type:"sawtooth3",frequency:"D4",volume:-12}};n.n(i)()(s)},259:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u});var i=n(255),s=n(257),a=s.a.SOUND_TICK_ENV,o=s.a.SOUND_TICK_OSC,r=void 0;function c(t){r&&r.cancel(t)}function u(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,15)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(r||(r=new e(a).toMaster(),new n(o).connect(r).start()),i.a.last=r,r.triggerAttack(i.a.start))})}},265:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(2);function s(t){return i.Theme[t.theme].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+"-theme"}},268:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var i=n(259),s=n(255),a=n(257),o=a.a.PAN_LEFT,r=a.a.SOUND_KICK_ENV,c=a.a.SOUND_KICK_1,u=a.a.SOUND_KICK_TIME,l=void 0;function h(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,15)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,a=t.Panner;t.Tone.supported&&(l||(l=new a(o).toMaster(),(l=new e(r).connect(l)).attackCurve="exponential",new n(c).connect(l).start()),Object(i.b)(s.a.stop),l.triggerAttackRelease(u,s.a.start))})}},273:function(t,e,n){"use strict";e.__esModule=!0;var i,s=n(84),a=(i=s)&&i.__esModule?i:{default:i};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,a.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},274:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},287:function(t,e,n){"use strict";var i=n(44),s=n(2);function a(t,e,n){var i=t[1],s=t[2];return i&&!s&&e===(n?1:2)||!i&&s&&e===(n?2:1)}e.a={computed:{sessionHuman:function(){return{1:Object(i.b)(this.$store.state.player[1]),2:Object(i.b)(this.$store.state.player[2])}},sessionWaiting:function(){return!this.sessionHuman[this.game.player]&&!this.game.winner},sessionCanSwitch:function(){return!this.game.moves.length&&this.sessionHuman[1]&&!this.sessionHuman[2]},sessionHotSeat:function(){return this.sessionHuman[1]&&this.sessionHuman[2]},sessionSolo:function(){return this.sessionHuman[1]!==this.sessionHuman[2]},sessionRobotMatch:function(){return!this.sessionHuman[1]&&!this.sessionHuman[2]},sessionOther:function(){return 3-this.game.player},sessionHumanWin:function(){return a(this.sessionHuman,this.game.winner,!0)},sessionHumanLost:function(){return a(this.sessionHuman,this.game.winner,!1)},sessionNames:function(){return s.StoneNames[s.ThemeStones[this.game.constructor.theme]]},sessionSoloDraw:function(){return this.sessionSolo&&-1===this.game.winner},sessionTimedOut:function(){return this.sessionHotSeat&&this.game.expired}}}},291:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return a});var i=n(2);function s(t,e,n,i){return Math.min(n/t,i/e)}function a(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0===t[e]&&n&&t.original?function(t,e,n){if(void 0===i.Games[t.original][e])return a(i.Games[t.original],e,n);return i.Games[t.original][e]}(t,e,n):t[e]}},296:function(t,e,n){"use strict";var i=n(268),s=n(259),a=n(255),o=n(257),r=o.a.PAN_RIGHT,c=o.a.SOUND_KICK_ENV,u=o.a.SOUND_KICK_2,l=o.a.SOUND_KICK_TIME,h=void 0;function d(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,15)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator,i=t.Panner;t.Tone.supported&&(h||(h=new i(r).toMaster(),(h=new e(c).connect(h)).attackCurve="exponential",new n(u).connect(h).start()),Object(s.b)(a.a.stop),h.triggerAttackRelease(l,a.a.start))})}var m=o.a.SOUND_FAIL_ENV,f=o.a.SOUND_FAIL_OSC,v=void 0;function p(){Promise.all([n.e(9),n.e(10)]).then(n.bind(null,15)).then(function(t){var e=t.AmplitudeEnvelope,n=t.Oscillator;t.Tone.supported&&(v||(v=new e(m).toMaster(),new n(f).connect(v).start()),a.a.last=v,v.triggerAttack(a.a.start))})}var _,g=n(4),b=n.n(g),w=o.a.SOUND_POLY,y=o.a.PLAYER_DRAW,O=o.a.PLAYER_1,R=o.a.PLAYER_2,A=o.a.SOUND_CHORD_TIME,E=o.a.SOUND_CHORD,S=void 0,k=(_={},b()(_,y,["C2","E3","G3","C4"]),b()(_,O,["B2","G3","B3","D4"]),b()(_,R,["A2","F3","A3","D4"]),_);function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;Promise.all([n.e(9),n.e(10)]).then(n.bind(null,15)).then(function(e){var n=e.PolySynth;e.Tone.supported&&(S||(S=new n(w).toMaster()).set(E),Object(s.b)(a.a.stop),S.triggerAttackRelease(k[t],A,a.a.start))})}n.d(e,"c",function(){return i.a}),n.d(e,"d",function(){return d}),n.d(e,"b",function(){return p}),n.d(e,"f",function(){return s.a}),n.d(e,"a",function(){return I}),n.d(e,"e",function(){return a.a})},297:function(t,e,n){"use strict";e.a={methods:{playerSwitch:function(){this.$store.commit("player",{1:this.$store.state.player[2],2:this.$store.state.player[1]})}}}},298:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=void 0;function s(t,e){window.navigator.vibrate&&(i&&(clearTimeout(i),i=null),e?i=setTimeout(function(){window.navigator.vibrate(t)},e):window.navigator.vibrate(t))}},302:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=new(n(6).a)},391:function(t,e,n){t.exports=function(){return new Worker(n.p+"dbf2cb3a78f85e886569.worker.js")}},392:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".clickable[data-v-6ff68b30]:hover{cursor:pointer}.mt-1-5[data-v-6ff68b30]{margin-top:5px}.divider-large[data-v-6ff68b30],.icon-large>svg[data-v-6ff68b30]{width:96px;height:96px;margin:12px}.icon-large[data-v-6ff68b30]{display:block}.relative[data-v-6ff68b30]{position:relative}.absolute[data-v-6ff68b30]{position:absolute}",""])},393:function(t,e,n){var i=n(392);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(78).default)("0b093eba",i,!0,{})},449:function(t,e,n){"use strict";n.r(e);var i=n(2),s=n(44),a=n(302),o=n(106),r=n.n(o),c=n(340),u=n.n(c),l=n(274),h=n.n(l),d=n(273),m=n.n(d),f=n(391),v=function(){function t(e,n){h()(this,t),this.id=0,this.promises={},this.worker=new f,this.worker.onmessage=this.message.bind(this),this.worker.postMessage({player:e,game:n})}return m()(t,[{key:"message",value:function(t){var e=JSON.parse(t.data);this.promises[e.id].resolve(e),delete this.promises[e.id]}},{key:"select",value:function(t){return this.post({game:Object(i.stringify)(t).join(", ")}).then(function(e){return e.move=t.stringToMove(e.move),e})}},{key:"post",value:function(t){var e=this;this.id++;var n=new u.a(function(t,n){e.promises[e.id]={resolve:t,reject:n}});return this.worker.postMessage(r()({},t,{id:this.id})),n}},{key:"terminate",value:function(){this.worker.terminate(),delete this.worker}}]),t}(),p=n(265),_=n(23),g=n(291),b=n(296),w=n(298),y=n(269),O={AXE_X:0,AXE_Y:1,MINIMAL_GAME_BOARD:180,MOBILE_BREAKPOINT:1264,RESIZE_REFRESH_DELAY:100,SQUARE_RATIO:1,DRAWER_WIDTH:300,ZERO_WIDTH:0,SHORT_BREAKPOINT:800,GAME_MARGIN_X:32,GAME_MARGIN_Y:128,GAME_MARGIN_Y_SHORT:80,GAME_FOOTER:16};n.n(y)()(O);var R=O.AXE_X,A=O.AXE_Y,E=O.MINIMAL_GAME_BOARD,S=O.MOBILE_BREAKPOINT,k=O.RESIZE_REFRESH_DELAY,I=O.SQUARE_RATIO,T=O.DRAWER_WIDTH,N=O.ZERO_WIDTH,x=O.SHORT_BREAKPOINT,C=O.GAME_MARGIN_X,D=O.GAME_MARGIN_Y,M=O.GAME_MARGIN_Y_SHORT,H=O.GAME_FOOTER,P=null,G={data:function(){return{Shared:_.a,vertical:window.innerWidth<window.innerHeight}},watch:{"Shared.drawer":function(){this.onResize()}},methods:{onResize:function(){var t=this;this.onResizeUpdated(),P&&(clearTimeout(P),P=null),P=setTimeout(function(){P=null,t.onResizeUpdated()},k)},onResizeUpdated:function(){var t,e=this.game.grid.bounds(),n=window.innerWidth-(_.a.drawer&&window.innerWidth>=S?T:N),i=window.innerHeight;if(this.game.landscape)this.vertical=!1;else{var s=(e.maxX-e.minX)/(e.maxY-e.minY);this.vertical=s>I&&n<i}this.frame=function(t,e,n,i){return t?[e-M-i,n-C]:e<x?[n-C,e-M-i]:[n-C,e-D]}(this.vertical,i,n,this.game.score?H:0),(t=this.frame)[R]=Math.max(E,t[R]),t[A]=Math.max(E,t[A])}}};var L=n(287),U=n(297),j=0,K={components:{GBoard:function(){return n.e(23).then(n.bind(null,108))},GPlayerDivider:function(){return n.e(11).then(n.bind(null,445))},GVerdict:function(){return n.e(22).then(n.bind(null,444))},GInfo:function(){return n.e(15).then(n.bind(null,441))},VDialog:function(){return n.e(14).then(function(){var t=n(451);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})}},mixins:[G,L.a,U.a],data:function(){return{game:null,info:null,frame:null,margin:20,fab:!1,working:!1,robotPlayer:{},theme:null,showVerdict:!1,rules:!1,showRules:!0,rulesText:!0,rulesInfo:!1,passConfirm:!1}},computed:{sample:function(){var t=new this.game.constructor;return Object(i.update)(t,this.game.constructor.sample),t}},watch:{"game.player":function(){this.robot()},"game.winner":function(t){t&&(this.showVerdict=!0,this.update())},"game.moves.length":function(t){t&&this.sessionHotSeat&&!this.game.moves[t-1]&&(this.passConfirm=!0)},"$store.state.player":{handler:function(){this.initRobots(),this.initTimer(),this.robot()},deep:!0},"$store.state.timer":function(t){this.initTimer()},"$route.params.id":function(t){this.initGame(),this.initRobots(),this.onResize(),this.update()}},mounted:function(){document.body.scrollTop=document.documentElement.scrollTop=0},created:function(){this.initGame(),this.initRobots(),this.onResize(),this.update(),a.a.$on("game",this.update)},destroyed:function(){a.a.$off("game",this.update),this.destroyRobots(),this.game.dispose&&this.game.dispose()},methods:{initTimer:function(){this.game.limit=this.sessionHotSeat?this.$store.state.timer:0},initGame:function(){var t=this;!this.sessionHuman[1]&&this.sessionHuman[2]&&this.playerSwitch(),this.info=i.Info.game(this.$route.params.id);var e=this.$route.params.id+"Game",n=new i.Games[e];Object(i.initHighlight)(n);var s=new i.TimedProxy(n);this.game=_.a.game=s,this.theme=Object(p.a)(i.Games[e]),this.initTimer(),this.showRules&&!this.sessionRobotMatch&&this.$store.state.rules&&(this.showRules=!1,setTimeout(function(){t.rulesText=Object(g.a)(n.constructor,"rules"),t.rules=!!t.rulesText},200))},initRobot:function(t){return!Object(s.b)(t)&&new v(t,this.$route.params.id)},destroyRobots:function(){this.robotPlayer[1]&&(this.robotPlayer[1].terminate(),this.working=!1),this.robotPlayer[2]&&(this.robotPlayer[2].terminate(),this.working=!1)},initRobots:function(){this.destroyRobots(),this.robotPlayer={1:this.initRobot(this.$store.state.player[1]),2:this.initRobot(this.$store.state.player[2])}},kickSound:function(){this.$store.state.sound&&(this.game.winner?Object(b.a)(this.game.winner):1===this.game.player?Object(b.c)():Object(b.d)()),this.$store.state.vibration&&!this.sessionRobotMatch&&Object(w.a)(50,this.$store.state.sound?2*b.e.latency:0)},robot:function(){var t=this.robotPlayer[this.game.player];this.working||this.game.winner||!t||(this.working=!0,j++,this.runRobot(t,j))},runRobot:function(t,e){var n=this,s=Date.now();t.select(this.game).then(function(t){setTimeout(function(){e===j&&(n.working=!1,Object(i.undoAction)(n.game),n.game.move(t.move),n.kickSound(),n.update(),n.robot())},Math.max(0,400-Date.now()+s))})},move:function(t){if(this.rules=!1,!this.game.winner&&!this.working){var e=Object(i.selectAction)(this.game,t);!1!==e&&(e?(Object(i.undoAction)(this.game),this.game.move(e),this.kickSound(),this.update()):this.kickSound())}},update:function(){Object(i.undoAction)(this.game),this.game.winner||Object(i.initActions)(this.game,this.game.possible())},undo:function(){this.showVerdict=!1;var t=this.sessionHotSeat?Object(i.other)(this.game.player):this.game.player;Object(i.undoFor)(this.game,t),this.update()},reset:function(){this.fab=!1,this.showVerdict=!1,this.initGame(),this.onResize(),this.initRobots(),this.update(),this.robot()}}},$=n(42);var Y=function(t){n(393)},V=Object($.a)(K,function(){var t,e,n=this,i=n.$createElement,s=n._self._c||i;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:n.onResize,expression:"onResize"}],class:n.theme},[s("v-layout",{staticStyle:{"margin-bottom":"-36px"},attrs:{column:"",wrap:"","align-center":"","align-content-center":""}},[s("div",{staticClass:"mt-1-5",staticStyle:{"text-align":"center"}},[s("g-board",{attrs:{game:n.game,coords:n.$store.state.coords,frame:n.frame,margin:n.margin,move:n.move,vertical:n.vertical,waiting:n.sessionWaiting,interactive:"",centered:""}})],1)]),n._v(" "),n.game.moves.length&&n.game.score?s("v-footer",{staticClass:"pb-2",attrs:{app:"",fixed:"",height:"auto",color:"transparent"}},[s("v-flex",{staticClass:"title text-xs-right",staticStyle:{width:"60px"}},[n._v(n._s(n.game.score[1]))]),n._v(" "),s("g-player-divider",{staticClass:"mx-3 d-block"}),n._v(" "),s("v-flex",{staticClass:"title text-xs-left",staticStyle:{width:"60px"}},[n._v(n._s(n.game.score[2]))])],1):n._e(),n._v(" "),s("v-speed-dial",{staticStyle:{"z-index":"9"},attrs:{fixed:"",right:"",bottom:"",direction:"top",transition:"slide-y-reverse-transition"},model:{value:n.fab,callback:function(t){n.fab=t},expression:"fab"}},[s("v-fab-transition",{attrs:{slot:"activator"},slot:"activator"},[n.game.moves.length?s("v-btn",{attrs:{color:n.$store.state.dark?"grey darken-4":"grey darken-3",dark:"",fab:"",hover:""},model:{value:n.fab,callback:function(t){n.fab=t},expression:"fab"}},[s("v-icon",{staticClass:"white--text"},[n._v("gamepad")]),n._v(" "),s("v-icon",{staticClass:"white--text"},[n._v("close")])],1):n._e()],1),n._v(" "),n.game.moves.length?s("v-btn",{attrs:{fab:"",dark:"",small:"",color:"grey darken-3"},on:{click:function(t){t.stopPropagation(),n.undo()}}},[s("v-icon",{staticClass:"white--text"},[n._v("undo")])],1):n._e(),n._v(" "),n.game.moves.length?s("v-btn",{attrs:{fab:"",dark:"",small:"",color:"grey darken-3"},on:{click:function(t){t.stopPropagation(),n.reset()}}},[s("v-icon",{staticClass:"white--text"},[n._v("refresh")])],1):n._e()],1),n._v(" "),s("g-verdict",{attrs:{reset:n.reset,game:n.game,theme:n.theme},model:{value:n.showVerdict,callback:function(t){n.showVerdict=t},expression:"showVerdict"}}),n._v(" "),s("v-dialog",{attrs:{value:n.rules,"max-width":"280px"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"title pa-2"},[n._v(n._s(n._f("titled")(n.game.constructor.title)))])]),n._v(" "),n.rulesInfo?n._e():s("v-card-text",{staticClass:"pt-0 pb-4"},n._l(n.rulesText,function(t,e){return s("div",{key:e,staticClass:"px-2"},[n._v(n._s(t))])})),n._v(" "),n.rulesInfo?n._e():s("div",{staticClass:"text-xs-center"},[s("g-board",{staticClass:"preview d-inline-block",attrs:{game:n.sample,frame:[240,164],margin:4}})],1),n._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:n.rulesInfo,expression:"rulesInfo"}]},[s("g-info",{staticClass:"mx-2",attrs:{game:n.info}})],1),n._v(" "),s("v-card-actions",[s("v-spacer"),n._v(" "),s("v-btn",{staticStyle:{"min-width":"0"},attrs:{flat:""},on:{click:function(t){n.rulesInfo=!n.rulesInfo}}},[n._v(n._s(n.rulesInfo?"Rules":"Info"))]),n._v(" "),s("v-btn",{staticStyle:{"min-width":"0"},attrs:{flat:""},on:{click:function(t){n.rules=!1}}},[n._v("Ok")])],1)],1)],1),n._v(" "),s("v-dialog",{attrs:{value:n.passConfirm,"max-width":"280px",persistent:""}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"title pa-2"},[n._v("No moves available")])]),n._v(" "),s("div",{staticClass:"text-xs-center",class:(t={},t[n.theme]=!0,t)},[s("div",{staticClass:"d-inline-block relative player",class:(e={},e["player-"+n.sessionOther]=!0,e),staticStyle:{height:"120px",width:"120px"}},[s("svg",{staticClass:"d-block absolute",attrs:{height:"120",width:"120"}},[s("circle",{class:"symbol-"+n.sessionOther,attrs:{cx:"60",cy:"60",r:"60"}})]),n._v(" "),s("v-icon",{staticClass:"absolute player-status icon-large"},[n._v("close")])],1)]),n._v(" "),s("v-card-actions",[s("v-spacer"),n._v(" "),s("v-btn",{staticStyle:{"min-width":"0"},attrs:{flat:""},on:{click:function(t){n.game.start(),n.passConfirm=!1}}},[n._v("Pass")])],1)],1)],1)],1)},[],!1,Y,"data-v-6ff68b30",null);e.default=V.exports}}]);