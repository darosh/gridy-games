(self.webpackJsonp=self.webpackJsonp||[]).push([[4],{386:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"table{table-layout:fixed!important}",""])},387:function(t,e,i){var a=i(386);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(86).default)("4ae7862e",a,!0,{})},423:function(t,e,i){"use strict";i.r(e);var a=i(23),s={name:"HomeTable",components:{VDataTable:function(){return i.e(13).then(function(){var t=i(428);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},GBoard:function(){return i.e(12).then(i.bind(null,106))},GIcon:function(){return i.e(11).then(i.bind(null,421))}},data:function(){return{Shared:a.a,show:!1,headers:[{text:"",value:null,sortable:!1,width:"48px"},{text:"Title",value:"title",width:"160px"},{text:"Original",value:"original",width:"160px"},{text:"Type",value:"type",width:"120px"},{text:"Created",value:"created",width:"80px"},{text:"Location",value:"location",width:"80px"},{text:"Authors",value:"authors",width:"120px"},{text:"Tiles",value:"tiles",width:"60px"},{text:"Info",value:"link",width:"120px"}]}},mounted:function(){var t=this;setTimeout(function(){t.show=!0},500)}},n=i(45);var l=function(t){i(387)},r=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-data-table",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"elevation-1 ma-3",attrs:{headers:t.headers,loading:t.Shared.loading,items:t.Shared.items,"hide-actions":"","disable-initial-sort":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",[i("g-icon",{staticClass:"preview preview-md d-block",attrs:{game:e.item.instance,type:e.item.grid}})],1),t._v(" "),i("td",[i("router-link",{class:e.item.wip?"red--text":"light-blue--text",attrs:{to:{name:"game",params:{id:e.item.id}}}},[t._v(t._s(t._f("titled")(e.item.title)))])],1),t._v(" "),i("td",{class:{"grey--text":e.item.originals.original}},[t._v(t._s(e.item.original))]),t._v(" "),i("td",[t._v(t._s(e.item.type))]),t._v(" "),i("td",{class:{"grey--text":e.item.originals.created}},[t._v(t._s(t._f("era")(e.item.created)))]),t._v(" "),i("td",{class:{"grey--text":e.item.originals.loaction}},[t._v(t._s(e.item.location))]),t._v(" "),i("td",{class:{"grey--text":e.item.originals.authors}},[t._v(t._s(e.item.authors))]),t._v(" "),i("td",[t._v(t._s(e.item.tiles))]),t._v(" "),i("td",[i("a",{staticClass:"light-blue--text",attrs:{href:e.item.link,target:"_blank",rel:"noopener"}},[t._v(t._s(e.item.linkText))])])]}}])}),t._v(" "),t.show?t._e():i("div",{staticClass:"text-xs-center mt-3"},[i("v-progress-circular",{attrs:{color:"light-blue",indeterminate:""}})],1)],1)},[],!1,l,null,null);e.default=r.exports}}]);