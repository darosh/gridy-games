(self.webpackJsonp=self.webpackJsonp||[]).push([[5],{429:function(e,t,i){"use strict";i.r(t);var n=i(23),a=i(6),s=[2,19],l=s[1]/96/2,r=s[0]-2.5*l*2+" "+(s[0]-2.5*l*2)+" "+(s[1]+2.5*l*4)+" "+(s[1]+2.5*l*4),o={name:"HomeCards",components:{GBoard:function(){return i.e(12).then(i.bind(null,63))},GIcon:function(){return i.e(11).then(i.bind(null,428))}},data:function(){return{iconSize:101,Shared:n.a,iconBox:r,initialized:{},rendered:{},show:!1}},watch:{"Shared.items":{immediate:!0,handler:function(e){var t=this;e.forEach(function(e){void 0===t.initialized[e.id]&&a.a.set(t.initialized,e.id,!1)})}}},activated:function(){var e=this;setTimeout(function(){e.show=!0},600)},deactivated:function(){var e=this;setTimeout(function(){e.show=!1},0)},methods:{visibilityChanged:function(e,t,i){this.show&&e&&!this.initialized[i]&&a.a.set(this.initialized,i,e)}}},d=i(42),c=Object(d.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{"grid-list-lg":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.Shared.items,function(t){return i("v-flex",{key:t.id,attrs:{xs12:"",sm6:"",md3:"",lg2:"","pt-3":"","pb-0":""}},[i("v-card",{staticClass:"gpu",attrs:{to:{name:"game",params:{id:t.id}},height:"100%"}},[i("v-layout",{attrs:{column:"","align-content-end":"","fill-height":""}},[i("v-flex",{attrs:{"py-0":""}},[i("v-card-title",[i("div",[i("div",{staticClass:"headline",class:{"red--text":t.wip},style:{"text-decoration":t.wip?"line-through":""}},[e._v(e._s(e._f("titled")(t.title)))]),e._v(" "),i("span",{staticClass:"grey--text"},[e._v(e._s(t.type))])])])],1),e._v(" "),i("v-flex",{attrs:{"py-0":""}},[i("div",{staticStyle:{"min-height":"112px",position:"relative"},attrs:{"fill-height":""}},[i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.show?function(i,n){return e.visibilityChanged(i,n,t.id)}:null,expression:"!show ? null : (isVisible, entry) => visibilityChanged(isVisible, entry, game.id)"},{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"text-xs-center",staticStyle:{"min-height":"112px"}},[e.initialized[t.id]?e._o(i("g-board",{staticClass:"preview d-inline-block",attrs:{game:t.instance,frame:[164,96],margin:4,fixed:""},model:{value:e.rendered[t.id],callback:function(i){e.$set(e.rendered,t.id,i)},expression:"rendered[game.id]"}}),0,t.id):e._e()],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.show||!e.rendered[t.id],expression:"!show || !rendered[game.id]"}],staticClass:"text-xs-center",staticStyle:{position:"absolute",top:"0",left:"0",right:"0"}},[i("g-icon",{staticClass:"preview preview-md d-inline-block",attrs:{game:t.instance,type:t.grid,size:e.iconSize,box:e.iconBox}})],1)])]),e._v(" "),i("v-flex",{attrs:{"d-flex":"","align-end":"","fill-height":"","align-content-end":"","py-0":""}},[i("v-card-text",[i("v-layout",{attrs:{row:"","fill-height":"","align-content-end":"","align-end":""}},[t.location?i("v-flex",{staticClass:"grey--text d-flex body-1"},[e._v(e._s(t.location))]):e._e(),e._v(" "),t.created?i("v-flex",{staticClass:"body-2 text-xs-right"},[e._v(e._s(e._f("era")(t.created))+"\n                ")]):e._e()],1)],1)],1)],1)],1)],1)}))],1)},[],!1,null,null,null);t.default=c.exports}}]);