(self.webpackJsonp=self.webpackJsonp||[]).push([[24],{426:function(t,s,a){"use strict";a.r(s);var r=a(1),e={props:{game:{type:Object,required:!0}},computed:{similar:function(){return r.Info.similar(this.game.originalId||this.game.id,this.game.id)}}},l=a(40),i=Object(l.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mx-3 mb-1"},[a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Title")]),t._v(" "),a("div",{staticClass:"body-1"},[t._v("\n      "+t._s(t._f("titled")(t.game.title))+"\n    ")])],1),t._v(" "),a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Type")]),t._v(" "),a("div",{staticClass:"body-1"},[t._v(t._s(t.game.type))])],1),t._v(" "),t.game.created?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Created")]),t._v(" "),a("div",{staticClass:"body-1"},[t._v(t._s(t._f("era")(t.game.created)))])],1):t._e(),t._v(" "),t.game.location?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Location")]),t._v(" "),a("div",{staticClass:"body-1"},[t._v(t._s(t.game.location))])],1):t._e(),t._v(" "),t.game.authorsArray?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v(t._s(t.game.authorsArray.length>1?"Authors":"Author"))]),t._v(" "),a("div",{staticClass:"body-1",domProps:{innerHTML:t._s(t.game.authorsArray.join(", <br/>"))}})],1):t._e(),t._v(" "),t.game.aliasesArray?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v(t._s(t.game.aliasesArray.length>1?"Aliases":"Alias"))]),t._v(" "),a("div",{staticClass:"body-1",domProps:{innerHTML:t._s(t.game.aliasesArray.join(", <br />"))}})],1):t._e(),t._v(" "),t.game.link?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Info")]),t._v(" "),a("div",{staticClass:"body-1"},[a("a",{staticClass:"light-blue--text",attrs:{href:t.game.link,target:"_blank",rel:"noopener"}},[t._v(t._s(t._f("link")(t.game.link)))])])],1):t._e(),t._v(" "),t.game.rulesArray?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v(t._s(t.game.rulesArray.length>1?"Rules":"Rule"))]),t._v(" "),a("div",{staticClass:"body-1",domProps:{innerHTML:t._s(t.game.rulesArray.join(", <br />"))}})],1):t._e(),t._v(" "),a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Tiles")]),t._v(" "),a("div",{staticClass:"body-1"},[t._v(t._s(t.game.tiles))])],1),t._v(" "),t.game.originalId?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Original")]),t._v(" "),a("div",{staticClass:"body-1"},[a("router-link",{staticClass:"light-blue--text",attrs:{to:{name:"game",params:{id:t.game.originalId}}}},[t._v(t._s(t._f("titled")(t.game.original)))])],1)],1):t._e(),t._v(" "),t.similar.length?a("v-layout",{attrs:{row:"","mx-3":"","mb-1":""}},[a("v-flex",{staticClass:"body-2 mr-3",attrs:{xs3:""}},[t._v("Similar")]),t._v(" "),a("div",{staticClass:"body-1"},t._l(t.similar,function(s){return a("div",{key:s.id,staticClass:"pb-1"},[a("router-link",{staticClass:"light-blue--text",attrs:{to:{name:"game",params:{id:s.id}}}},[t._v(t._s(t._f("titled")(s.title)))])],1)}))],1):t._e()],1)},[],!1,null,null,null);s.default=i.exports}}]);