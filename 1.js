(self.webpackJsonp=self.webpackJsonp||[]).push([[1],{404:function(e,a,t){e.exports=function(){return new Worker(t.p+"07ed5076333fab3b2a7c.worker.js")}},443:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t(22),s=t(334),o=t.n(s),i=t(329),c=t.n(i),h=t(2),l=new(t(404)),d=h.Info.games,u={},p=void 0,v=[],f=d;l.onmessage=function(e){var a=JSON.parse(e.data),t=v.pop(),n=a.map;f=n?c()(d.filter(function(e){return n[e.id]})):d,u[p]={items:f},t({items:f})};var g={components:{VTextField:function(){return t.e(15).then(function(){var e=t(448);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}},data:function(){return{Shared:r.a,input:null}},watch:{"Shared.search":function(){this.updateSearch(r.a.search)},"Shared.searching":function(){var e=this;n.a.nextTick(function(){e.updateSearch(r.a.searching?r.a.search:"")})}},methods:{updateSearch:function(e,a){var t;r.a.loading=!0,(t=e,t=(t||"").trim().toLowerCase()+"*",new o.a(function(e){if(u[t])return e({items:f=u[t].items});p=t,v.push(e),l.postMessage(t)})).then(function(e){var a=e.items;r.a.items=a,r.a.loading=!1})}}},S=t(41),m=Object(S.a)(g,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:this.$route.name,expression:"this.$route.name"}],staticClass:"elevation-1",attrs:{color:e.$store.state.dark?"grey darken-3":"grey lighten-3",dense:!e.Shared.searching,extended:e.Shared.searching,height:e.Shared.searching?82:null,tabs:"","scroll-off-screen":"",app:""}},[e.Shared.searching?e._e():t("v-btn",{attrs:{icon:""},on:{click:function(a){a.stopPropagation(),e.Shared.menu=!e.Shared.menu}}},[t("v-icon",[e._v("menu")])],1),e._v(" "),e.Shared.searching?e._e():t("v-toolbar-title",{staticClass:"hidden-xs-only"},[e._v("Gridy Games")]),e._v(" "),e.Shared.searching?e._e():t("v-spacer"),e._v(" "),e.Shared.searching?t("v-text-field",{staticClass:"mx-3",class:this.$store.state.dark?"grey darken-1":"white",attrs:{"append-icon-cb":function(){e.Shared.searching=!e.Shared.searching},loading:e.Shared.loading,label:"Search","prepend-icon":"search","append-icon":"close","browser-autocomplete":"off",spellcheck:"false",autocomplete:"",solo:"","hide-details":"","single-line":""},model:{value:e.Shared.search,callback:function(a){e.$set(e.Shared,"search",a)},expression:"Shared.search"}}):e._e(),e._v(" "),e.Shared.searching?e._e():t("v-btn",{attrs:{icon:""},on:{click:function(a){a.stopPropagation(),e.Shared.searching=!e.Shared.searching}}},[t("v-icon",[e._v("search")])],1),e._v(" "),e.Shared.searching?t("v-spacer",{attrs:{slot:"extension"},slot:"extension"}):e._e(),e._v(" "),t("div",{class:{"mr-3":e.Shared.searching},attrs:{slot:e.Shared.searching?"extension":null},slot:e.Shared.searching?"extension":null},[t("v-tabs",{attrs:{color:"transparent","slider-color":"light-blue"}},[t("v-tab",{attrs:{to:{path:"/"}}},[e._v("\n        Cards\n      ")]),e._v(" "),t("v-tab",{attrs:{to:{path:"/table"}}},[e._v("\n        Table\n      ")])],1)],1)],1)},[],!1,null,null,null);a.default=m.exports}}]);