(self.webpackJsonp=self.webpackJsonp||[]).push([[18],{347:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,".capital[data-v-28f423de]{text-transform:uppercase}.animate[data-v-28f423de]{transition:all .2s ease-in-out}.title[data-v-28f423de],body-2[data-v-28f423de]{vertical-align:middle}.rotate-animation[data-v-28f423de]{animation:rotate-data-v-28f423de .5s ease-in-out .4s infinite}@keyframes rotate-data-v-28f423de{0%{transform:rotate(0deg)}20%{transform:rotate(0deg)}to{transform:rotate(180deg)}}.count-transition-leave-active[data-v-28f423de],.count-transition-leave-to[data-v-28f423de],.count-transition-leave[data-v-28f423de]{display:none;animation:none;transition:none}.count-transition-enter[data-v-28f423de]{transform:scale(.5);opacity:.5}.count-transition-enter-active[data-v-28f423de]{transition:all .2s cubic-bezier(.175,.885,.32,1.275)}.count-transition-enter-to[data-v-28f423de]{transform:scale(1);opacity:1}",""])},348:function(t,e,a){var i=a(347);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(108).default)("26e92150",i,!0,{})},419:function(t,e,a){"use strict";a.r(e);var i=a(4),n=a.n(i),s=a(325),r={props:{value:{type:Number,default:1},game:{type:Object,default:null},waiting:{type:Boolean,default:!1},switcher:{type:Boolean,default:!1}},data:function(){return{timer:-1,transition:0}},computed:{classes:function(){var t;return t={},n()(t,"player-"+this.value,!0),n()(t,"waiting",this.waiting&&!this.game.winner&&this.game.player===this.value),n()(t,"elevation-2 active",!this.game.winner&&this.game.player===this.value),n()(t,"elevation-1",!(!this.game.winner&&this.game.player===this.value)),n()(t,"win",this.game.winner===this.value),n()(t,"draw",-1===this.game.winner),t}},watch:{"game.player":function(){this.updateTimer()},"game.pending":function(){this.updateTimer()},"game.counterSignal":function(t){this.$store.state.sound&&(t>0?Object(s.f)():0===t&&Object(s.b)())}},methods:{updateTimer:function(){this.game.pending&&this.value===this.game.player?(this.timer=0,this.transition=this.game.limit):(this.timer=-1,this.transition=0)}}},o=a(65);var l=function(t){a(348)},c=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"player animate",class:t.classes},[a("v-layout",{staticClass:"py-2 px-1",attrs:{reverse:2===t.value,row:"","align-center":""}},[a("svg",{staticClass:"d-block mx-1",attrs:{height:"24",width:"24"}},[a("circle",{class:"symbol-"+t.value,attrs:{cx:"12",cy:"12",r:"8"}})]),t._v(" "),a("v-flex",{staticStyle:{position:"relative: top: 2px"},attrs:{"text-xs-center":""}},[a("transition",{attrs:{name:"count-transition",mode:"out-in"}},[t.game.player===t.value&&t.game.counter>0?a("div",{key:t.game.counter,staticClass:"title"},[t._v(t._s(t.game.counter))]):t.game.player===t.value&&0===t.game.counter?a("v-icon",{key:t.game.counter},[t._v("timer_off")]):t.switcher?a("v-icon",{key:"a",attrs:{color:t.$store.state.dark?"grey lighten-3":"grey darken-3"}},[t._v("swap_horiz")]):!t.game.winner&&t.game.player===t.value&&t.waiting?a("v-icon",{key:"b",staticClass:"rotate-animation",attrs:{color:t.$store.state.dark?"grey lighten-3":"grey darken-3"}},[t._v("hourglass_empty")]):t.game.winner||t.game.player!==t.value?t.game.winner===t.value?a("v-icon",{key:"d",attrs:{color:t.$store.state.dark?"grey lighten-3":"grey darken-3"}},[t._v("mood")]):-1===t.game.winner?a("v-icon",{key:"e",attrs:{color:t.$store.state.dark?"grey lighten-3":"grey darken-3"}},[t._v("sentiment_very_dissatisfied")]):a("div",{key:"f"}):a("v-icon",{key:"c",attrs:{color:t.$store.state.dark?"grey lighten-3":"grey darken-3"}},[t._v("play_arrow")])],1)],1),t._v(" "),t.game.score?a("span",{staticClass:"px-2 body-2"},[t._v(t._s(t.game.score[t.value]))]):a("span",{staticClass:"mx-3"})],1),t._v(" "),a("div",{staticClass:"timer-wrap"},[a("div",{staticClass:"timer",style:{width:t.timer>=0?t.timer+"%":"100%",transition:"background-color 0.2s ease-in-out, height 0.2s ease-in-out, margin 0.2s ease-in-out, width "+t.transition+"ms linear"}})])],1)},[],!1,l,"data-v-28f423de",null);e.default=c.exports}}]);