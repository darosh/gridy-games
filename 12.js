(self.webpackJsonp=self.webpackJsonp||[]).push([[12],{263:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var r=s(2);function a(t){return r.Theme[t.theme].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+"-theme"}},438:function(t,e,s){"use strict";s.r(e);var r=s(263),a={props:{game:{type:Object,required:!0},type:{type:String,required:!0},size:{type:Number,default:24},box:{type:String,default:"-0.5 -0.5 24 24"}},computed:{theme:function(){return Object(r.a)(this.game.constructor)}}},i=s(41),n=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticClass:"preview-icon",class:t.theme,attrs:{width:1.2*t.size,height:t.size,viewBox:t.box,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},["Rectangular"===t.type?s("rect",{staticClass:"tile",attrs:{width:"19",height:"19",x:"2",y:"2"}}):"Hexagonal"===t.type?s("polygon",{staticClass:"tile",attrs:{points:"10.97,0 5.485,9.5 -5.485,9.5 -10.97,0 -5.485,-9.5 5.485,-9.5",transform:"translate(11.5,11.5)"}}):"Radial"===t.type?s("circle",{staticClass:"tile",attrs:{r:"9.5",cx:"11.5",cy:"11.5"}}):"Triangular"===t.type?s("polygon",{staticClass:"tile",attrs:{points:"0,0 21.939,0 10.970,-19",transform:"translate(0.501,21)"}}):t._e()])},[],!1,null,null,null);e.default=n.exports}}]);