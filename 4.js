(self.webpackJsonp=self.webpackJsonp||[]).push([[4],{585:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,".table--fixed[data-v-73d7f974] .table{table-layout:fixed!important}.nowrap[data-v-73d7f974]{white-space:nowrap}",""])},586:function(t,e,a){var i=a(585);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(142).default)("0370ed6f",i,!0,{})},609:function(t,e,a){"use strict";a.r(e);var i=a(48),s={name:"HomeTable",components:{VDataTable:function(){return a.e(20).then(function(){var t=a(625);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VProgressCircular:function(){return Promise.resolve().then(function(){var t=a(283);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},GBoard:function(){return a.e(16).then(a.bind(null,125))},GIcon:function(){return a.e(15).then(a.bind(null,608))}},data:function(){return{Shared:i.a,show:!1,headers:[{text:"",value:null,sortable:!1,width:"48px"},{text:"Title",value:"title",width:"160px"},{text:"Original",value:"original",width:"160px"},{text:"Type",value:"group",width:"120px"},{text:"Created",value:"created",width:"80px"},{text:"Location",value:"location",width:"80px"},{text:"Authors",value:"authors",width:"120px"},{text:"Tiles",value:"tiles",width:"60px"},{text:"Info",value:"link",width:"120px"}]}},mounted:function(){var t=this;setTimeout(function(){t.show=!0},400)}},r=a(93);var n=function(t){a(586)},l=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"elevation-1 ma-3 table--fixed",attrs:{headers:t.headers,loading:t.Shared.loading,items:t.Shared.items,"hide-actions":"","disable-initial-sort":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("g-icon",{staticClass:"preview preview-md d-block",attrs:{game:e.item.instance,type:e.item.grid}})],1),t._v(" "),a("td",{staticClass:"py-3"},[a("router-link",{staticClass:"nowrap",class:e.item.wip?"red--text":"light-blue--text",attrs:{to:{name:"game",params:{id:e.item.id}}}},[t._v(t._s(t._f("titled")(e.item.title)))]),t._v(" "),e.item.originals.aliases?t._e():a("span",t._l(e.item.aliasesArray,function(e,i){return a("span",{key:i,staticClass:"nowrap"},[a("br"),t._v(t._s(e))])}))],1),t._v(" "),a("td",{class:{"grey--text":e.item.originals.original}},[t._v(t._s(e.item.original))]),t._v(" "),a("td",{staticClass:"nowrap"},[t._v(t._s(e.item.group))]),t._v(" "),a("td",{staticClass:"nowrap",class:{"grey--text":e.item.originals.created}},[t._v(t._s(t._f("era")(e.item.created)))]),t._v(" "),a("td",{staticClass:"nowrap",class:{"grey--text":e.item.originals.loaction}},[t._v(t._s(e.item.location))]),t._v(" "),a("td",{staticClass:"py-3",class:{"grey--text":e.item.originals.authors}},[e.item.originals.authors?t._e():a("span",t._l(e.item.authorsArray,function(e,i){return a("span",{key:i,staticClass:"nowrap"},[i?a("br"):t._e(),t._v(t._s(e))])}))]),t._v(" "),a("td",[t._v(t._s(e.item.tiles))]),t._v(" "),a("td",[a("a",{staticClass:"light-blue--text",attrs:{href:e.item.link,target:"_blank",rel:"noopener"}},[t._v(t._s(t._f("link")(e.item.link)))])])]}}])}),t._v(" "),t.show?t._e():a("div",{staticClass:"text-xs-center mt-3"},[a("v-progress-circular",{attrs:{color:"light-blue",indeterminate:""}})],1)],1)},[],!1,n,"data-v-73d7f974",null);e.default=l.exports}}]);