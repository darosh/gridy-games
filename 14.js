(self.webpackJsonp=self.webpackJsonp||[]).push([[14],{488:function(t,a,s){"use strict";s.r(a);var e=s(2),r={props:{game:{type:Object,required:!0},title:{type:Boolean,default:!1}},computed:{similar:function(){return e.Info.similar(this.game.originalId||this.game.id,this.game.id)}}},l=s(92),i=Object(l.a)(r,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mb-1"},[t.title?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Title")]),t._v(" "),s("div",{staticClass:"body-1"},[t._v("\n      "+t._s(t._f("titled")(t.game.title))+"\n    ")])],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Type")]),t._v(" "),s("div",{staticClass:"body-1"},[t._v(t._s(t.game.group))])],1),t._v(" "),t.game.created?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Created")]),t._v(" "),s("div",{staticClass:"body-1"},[t._v(t._s(t._f("era")(t.game.created)))])],1):t._e(),t._v(" "),t.game.location?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Location")]),t._v(" "),s("div",{staticClass:"body-1"},[t._v(t._s(t.game.location))])],1):t._e(),t._v(" "),t.game.authorsArray?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v(t._s(t.game.authorsArray.length>1?"Authors":"Author"))]),t._v(" "),s("div",{staticClass:"body-1",domProps:{innerHTML:t._s(t.game.authorsArray.join(", <br/>"))}})],1):t._e(),t._v(" "),t.game.aliasesArray?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v(t._s(t.game.aliasesArray.length>1?"Aliases":"Alias"))]),t._v(" "),s("div",{staticClass:"body-1",domProps:{innerHTML:t._s(t.game.aliasesArray.join(", <br />"))}})],1):t._e(),t._v(" "),t.game.link?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Info")]),t._v(" "),s("div",{staticClass:"body-1"},[s("a",{staticClass:"light-blue--text",attrs:{href:t.game.link,target:"_blank",rel:"noopener"}},[t._v(t._s(t._f("link")(t.game.link)))])])],1):t._e(),t._v(" "),t.title&&t.game.rulesArray?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v(t._s(t.game.rulesArray.length>1?"Rules":"Rule"))]),t._v(" "),s("div",{staticClass:"body-1",domProps:{innerHTML:t._s(t.game.rulesArray.join(", <br />"))}})],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Tiles")]),t._v(" "),s("div",{staticClass:"body-1"},[t._v(t._s(t.game.tiles))])],1),t._v(" "),t.game.originalId?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Original")]),t._v(" "),s("div",{staticClass:"body-1"},[s("router-link",{staticClass:"light-blue--text",attrs:{to:{name:"game",params:{id:t.game.originalId}}}},[t._v(t._s(t._f("titled")(t.game.original)))])],1)],1):t._e(),t._v(" "),t.similar.length?s("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[s("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Similar")]),t._v(" "),s("div",{staticClass:"body-1"},t._l(t.similar,function(a){return s("div",{key:a.id,staticClass:"pb-1"},[s("router-link",{staticClass:"light-blue--text",attrs:{to:{name:"game",params:{id:a.id}}}},[t._v(t._s(t._f("titled")(a.title)))])],1)}))],1):t._e()],1)},[],!1,null,null,null);a.default=i.exports}}]);