(self.webpackJsonp=self.webpackJsonp||[]).push([[8],{359:function(t,e,s){"use strict";var a=s(5);function i(t,e=50,s=300){return{data:()=>({showDialog:!1}),watch:{[t]:{immediate:!0,handler(t){t&&a.a.nextTick(()=>{setTimeout(()=>{this.showDialog=!0},e)})}},showDialog:function(e){e||setTimeout(()=>{!function(t,e){const s=e.split("."),a=s.pop();let i=t;for(;s.length;)i=i[s.shift()];return function(t){i[a]=t}}(this,t)(!1)},s)}}}}s.d(e,"a",function(){return i})},616:function(t,e,s){"use strict";s.r(e);var a=s(94),i=s(359),n={components:{VDialog:()=>s.e(14).then(function(){var t=s(632);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},mixins:[Object(i.a)("state.error")],data:()=>({state:a.c})},o=s(93),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{light:"","max-width":"360"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[s("v-card",{attrs:{light:""}},[s("v-card-title",{staticClass:"title red white--text"},[s("span",{staticClass:"pl-2"},[t._v("Error")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-icon",{staticClass:"white--text mr-2"},[t._v("warning")])],1),t._v(" "),s("v-card-text",{staticClass:"body-2 pb-0 px-4"},[t._v("\n      "+t._s(t.state.error.code)+"\n    ")]),t._v(" "),s("v-card-text",{staticClass:"pb-0 px-4"},[t._v("\n      "+t._s(t.state.error.message)+"\n    ")]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{flat:"",light:""},on:{click:function(e){t.showDialog=!1}}},[t._v("Dismiss")])],1)],1)],1)},[],!1,null,null,null);e.default=r.exports}}]);