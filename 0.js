(self.webpackJsonp=self.webpackJsonp||[]).push([[0],{463:function(e,a,n){e.exports=function(){return new Worker(n.p+"6c796ece6985e5f39ad9.worker.js")}},490:function(e,a,n){"use strict";n.r(a);var t=n(10),r=n(47),s=n(33),i=n.n(s),o=n(62),c=n.n(o),h=n(2),l=new(n(463)),d=h.Info.games,u={},p=void 0,v=[],f=d;l.onmessage=function(e){var a=JSON.parse(e.data),n=v.pop(),t=a.map;f=t?c()(d.filter(function(e){return t[e.id]})):d,u[p]={items:f},n({items:f})};var g={components:{VTextField:function(){return n.e(15).then(function(){var e=n(497);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}},data:function(){return{Shared:r.a,input:null,useFirebase:!1}},watch:{"Shared.search":function(){this.updateSearch(r.a.search)},"Shared.searching":function(){var e=this;t.a.nextTick(function(){e.updateSearch(r.a.searching?r.a.search:"")})}},methods:{updateSearch:function(e,a){var n;r.a.loading=!0,(n=e,n=(n||"").trim().toLowerCase()+"*",new i.a(function(e){if(u[n])return e({items:f=u[n].items});p=n,v.push(e),l.postMessage(n)})).then(function(e){var a=e.items;r.a.items=a,r.a.loading=!1})}}},S=n(93),m=Object(S.a)(g,function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:this.$route.name,expression:"this.$route.name"}],staticClass:"elevation-1",attrs:{color:e.$store.state.dark?"grey darken-3":"grey lighten-3",dense:!e.Shared.searching,extended:e.Shared.searching,height:e.Shared.searching?82:null,tabs:"","scroll-off-screen":"",app:""}},[e.Shared.searching?e._e():n("v-btn",{attrs:{"aria-label":"Menu",icon:""},on:{click:function(a){a.stopPropagation(),e.Shared.menu=!e.Shared.menu}}},[n("v-icon",[e._v("menu")])],1),e._v(" "),e.Shared.searching?e._e():n("v-toolbar-title",{staticClass:"hidden-xs-only"},[e._v("Gridy Games")]),e._v(" "),e.Shared.searching?e._e():n("v-spacer"),e._v(" "),e.Shared.searching?n("v-text-field",{staticClass:"mx-3",class:this.$store.state.dark?"grey darken-1":"white",attrs:{"append-icon-cb":function(){e.Shared.searching=!e.Shared.searching},loading:e.Shared.loading,label:"Search","prepend-icon":"search","append-icon":"close","browser-autocomplete":"off",spellcheck:"false",autocomplete:"",solo:"","hide-details":"","single-line":""},model:{value:e.Shared.search,callback:function(a){e.$set(e.Shared,"search",a)},expression:"Shared.search"}}):e._e(),e._v(" "),e.Shared.searching?e._e():n("v-btn",{attrs:{"aria-label":"Search",icon:""},on:{click:function(a){a.stopPropagation(),e.Shared.searching=!e.Shared.searching}}},[n("v-icon",[e._v("search")])],1),e._v(" "),e.Shared.searching?n("v-spacer",{attrs:{slot:"extension"},slot:"extension"}):e._e(),e._v(" "),n("div",{class:{"mr-3":e.Shared.searching},attrs:{slot:e.Shared.searching?"extension":null},slot:e.Shared.searching?"extension":null},[n("v-btn",{attrs:{icon:"",to:{path:"table"===e.$route.name?"/":"/table"}}},[n("v-icon",[e._v(e._s("table"===e.$route.name?"view_module":"view_stream"))])],1),e._v(" "),e.useFirebase?n("v-btn",{attrs:{icon:"",to:{path:"/online"}}},[n("v-icon",[e._v("earth")])],1):e._e()],1)],1)},[],!1,null,null,null);a.default=m.exports}}]);