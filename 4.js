(self.webpackJsonp=self.webpackJsonp||[]).push([[4],{481:function(i,e,t){"use strict";t.r(e);var s=t(47),a=t(10),n=[2,19],r=n[1]/96/2,o=n[0]-2.5*r*2+" "+(n[0]-2.5*r*2)+" "+(n[1]+2.5*r*4)+" "+(n[1]+2.5*r*4),l=void 0,d={name:"HomeCards",components:{GBoard:function(){return t.e(12).then(t.bind(null,163))},GIcon:function(){return t.e(11).then(t.bind(null,486))}},data:function(){return{iconSize:101,Shared:s.a,iconBox:o,initialized:{},rendered:{},show:!1}},watch:{"Shared.items":{immediate:!0,handler:function(i){var e=this;i.forEach(function(i){void 0===e.initialized[i.id]&&a.a.set(e.initialized,i.id,!1)})}}},activated:function(){var i=this;this.cancelTimeout(),l=setTimeout(function(){i.show=!0},600)},deactivated:function(){var i=this;this.cancelTimeout(),l=setTimeout(function(){i.show=!1},0)},methods:{cancelTimeout:function(){l&&(clearTimeout(l),l=null)},visibilityChanged:function(i,e,t){this.show&&i&&!this.initialized[t]&&a.a.set(this.initialized,t,i)}}},c=t(93),v=Object(c.a)(d,function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-container",{attrs:{"grid-list-lg":"",fluid:""}},[t("v-layout",{attrs:{row:"",wrap:""}},i._l(i.Shared.items,function(e){return t("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md3:"",lg2:"","pt-2":"","pb-2":""}},[t("v-card",{staticClass:"gpu",attrs:{to:{name:"game",params:{id:e.id}},height:"100%"}},[t("v-card-title",[t("div",[t("div",{staticClass:"headline",class:{"red--text":e.wip},style:{"text-decoration":e.wip?"line-through":""}},[i._v(i._s(i._f("titled")(e.title)))]),i._v(" "),t("span",{staticClass:"grey--text"},[i._v(i._s(e.group))])])]),i._v(" "),t("div",{staticStyle:{"min-height":"116px",position:"relative"}},[t("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:i.show?function(t,s){return i.visibilityChanged(t,s,e.id)}:null,expression:"!show ? null : (isVisible, entry) => visibilityChanged(isVisible, entry, game.id)"},{name:"show",rawName:"v-show",value:i.show,expression:"show"}],staticClass:"text-xs-center",staticStyle:{"min-height":"116px"}},[i.initialized[e.id]?i._o(t("g-board",{staticClass:"preview d-inline-block",attrs:{game:e.instance,frame:[164,96],margin:4,fixed:""},model:{value:i.rendered[e.id],callback:function(t){i.$set(i.rendered,e.id,t)},expression:"rendered[game.id]"}}),0,e.id):i._e()],1),i._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!i.show||!i.rendered[e.id],expression:"!show || !rendered[game.id]"}],staticClass:"text-xs-center",staticStyle:{position:"absolute",top:"0",left:"0",right:"0"}},[t("g-icon",{staticClass:"preview preview-md d-inline-block",attrs:{game:e.instance,type:e.grid,size:i.iconSize,box:i.iconBox}})],1)]),i._v(" "),t("v-layout",{staticClass:"px-3 pb-2",attrs:{row:""}},[e.originals.original&&e.location?t("v-flex",{staticClass:"d-flex body-1 mb-1"},[i._v(i._s(e.location))]):e.originals.original?i._e():t("v-flex",{staticClass:"grey--text text-xs-center d-flex body-1 mb-1"},[t("i",[i._v(i._s(e.original)+" variation")])]),i._v(" "),e.originals.original&&e.created?t("v-flex",{staticClass:"body-2 text-xs-right mb-1"},[i._v(i._s(i._f("era")(e.created))+"\n          ")]):i._e()],1)],1)],1)}))],1)},[],!1,null,null,null);e.default=v.exports}}]);