(self.webpackJsonp=self.webpackJsonp||[]).push([[22],{354:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,".divider-large[data-v-4effbb32],.icon-large>svg[data-v-4effbb32]{width:96px;height:96px;margin:12px}.icon-large[data-v-4effbb32]{display:block}.relative[data-v-4effbb32]{position:relative}.absolute[data-v-4effbb32]{position:absolute}.shake[data-v-4effbb32]{animation:shake-animation-data-v-4effbb32 alternate .6s ease-in-out infinite}@keyframes shake-animation-data-v-4effbb32{0%{transform:rotate(-15deg)}to{transform:rotate(15deg)}}.shift[data-v-4effbb32]{animation:shift-animation-data-v-4effbb32 alternate .6s ease-in-out infinite}@keyframes shift-animation-data-v-4effbb32{0%{transform:translate(-16px)}to{transform:translate(16px)}}.jump[data-v-4effbb32]{animation:jump-animation-data-v-4effbb32 alternate .3s ease-out infinite}@keyframes jump-animation-data-v-4effbb32{0%{transform:translateY(12px)}to{transform:translateY(-12px)}}",""])},355:function(t,e,a){var i=a(354);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(73).default)("136cfdc0",i,!0,{})},440:function(t,e,a){"use strict";a.r(e);var i=a(6),n={components:{VDialog:function(){return a.e(14).then(function(){var t=a(447);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},GPlayerDivider:function(){return a.e(11).then(a.bind(null,441))}},mixins:[a(283).a,{computed:{verdictIcon:function(){return this.game.winner?this.game.winner>0?1:-1:null},verdictAnimation:function(){return-1===this.game.winner?"shift":this.sessionHumanWin?"jump":"shake"},verdict:function(){return this.sessionHumanWin?"You won!":this.sessionHumanLost?"You lost":this.sessionSoloDraw?"It's draw":this.sessionTimedOut?"Time out, "+this.sessionNames[this.game.winner-1]+" won!":this.game.winner>0?this.sessionNames[this.game.winner-1]+" won!":-1===this.game.winner?"It's draw":void 0}}}],model:{prop:"value",event:"change"},props:{value:{type:Boolean,required:!0},reset:{type:Function,required:!0},game:{type:Object,required:!0},theme:{type:String,required:!0}},watch:{value:function(){var t=this;this.value&&i.a.nextTick(function(){t.$refs.dlg.$el.parentElement.parentElement.id="top-dialog"})}}},s=a(41);var r=function(t){a(355)},o=Object(s.a)(n,function(){var t,e,a=this,i=a.$createElement,n=a._self._c||i;return n("v-dialog",{attrs:{value:a.value,transition:"slide-y-transition","max-width":"288px"}},[a.game.winner?n("v-card",{ref:"dlg"},[n("v-card-title",[n("span",{staticClass:"title pa-2"},[a._v(a._s(a.verdict))])]),a._v(" "),n("div",{staticClass:"text-xs-center mb-2",class:(t={},t[a.theme]=!0,t)},[n("div",{staticClass:"d-inline-block relative player",class:(e={},e["player-"+a.game.winner]=!0,e[a.verdictAnimation]=!0,e),staticStyle:{height:"120px",width:"120px"}},[n("svg",{staticClass:"d-block absolute",attrs:{height:"120",width:"120"}},[n("circle",{class:"symbol-"+(a.game.winner||-1),attrs:{cx:"60",cy:"60",r:"60"}})]),a._v(" "),-1===a.verdictIcon?n("g-player-divider",{staticClass:"absolute d-block divider-large",attrs:{value:"0"}}):1===a.verdictIcon?n("v-icon",{staticClass:"absolute player-status icon-large"},[a._v("mood")]):0===a.verdictIcon?n("v-icon",{staticClass:"absolute player-status icon-large"},[a._v("mood_bad")]):a._e()],1)]),a._v(" "),n("v-card-actions",[n("v-spacer"),a._v(" "),n("v-btn",{staticStyle:{"min-width":"0"},attrs:{flat:""},on:{click:function(t){a.$emit("change",!1)}}},[a._v("Cancel")]),a._v(" "),n("v-btn",{staticStyle:{"min-width":"0"},attrs:{flat:""},on:{click:function(t){a.reset()}}},[a._v("Restart")])],1)],1):a._e()],1)},[],!1,r,"data-v-4effbb32",null);e.default=o.exports}}]);