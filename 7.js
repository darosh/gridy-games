(self.webpackJsonp=self.webpackJsonp||[]).push([[7],{611:function(t,e,a){"use strict";a.r(e);var s=a(95),n=a(6),r={components:{VDialog:function(){return a.e(13).then(function(){var t=a(624);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})}},data:function(){return{showDialog:!1,state:s.c}},watch:{"state.error":{immediate:!0,handler:function(t){var e=this;t&&n.a.nextTick(function(){e.showDialog=!0})}}}},i=a(93),c=Object(i.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:t.showDialog,light:"",persistent:"","max-width":"360"}},[a("v-card",{attrs:{light:""}},[a("v-card-title",{staticClass:"title red white--text"},[a("span",{staticClass:"pl-2"},[t._v("Error")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-icon",{staticClass:"white--text mr-2"},[t._v("warning")])],1),t._v(" "),a("v-card-text",{staticClass:"body-2 pb-0 px-4"},[t._v("\n      "+t._s(t.state.error.code)+"\n    ")]),t._v(" "),a("v-card-text",{staticClass:"pb-0 px-4"},[t._v("\n      "+t._s(t.state.error.message)+"\n    ")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",light:""},on:{click:function(e){t.showDialog=!1}}},[t._v("Dismiss")])],1)],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);