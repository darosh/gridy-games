(self.webpackJsonp=self.webpackJsonp||[]).push([[8],{423:function(t,e,s){"use strict";s.r(e);var a=s(34),i=s.n(a),l=s(2),r=s(54),n={data:function(){return{meta:[{title:"Version",value:"0.1.119"},{title:"Build",value:new Date("2018-03-15T14:36:45.189Z").toLocaleString("en")},{title:"Games",value:l.Info.games.length},{title:"Source",value:"github.com",link:"https://github.com/darosh/gridy-games"}],dependencies:i()({"@tweenjs/tween.js":"^17.2.0","d3-scale":"^2.0.0",fscreen:"^1.0.2",gridy:"github:darosh/gridy","intersection-observer":"^0.5.0",lunr:"^2.1.6","material-icons-bundle":"github:darosh/material-icons-bundle",tone:"^0.12.72",vue:"^2.5.16","vue-observe-visibility":"^0.3.1","vue-router":"^3.0.1",vuetify:"^1.0.8",vuex:"^3.0.1"}).map(function(t){var e={"@tweenjs/tween.js":"^17.2.0","d3-scale":"^2.0.0",fscreen:"^1.0.2",gridy:"github:darosh/gridy","intersection-observer":"^0.5.0",lunr:"^2.1.6","material-icons-bundle":"github:darosh/material-icons-bundle",tone:"^0.12.72",vue:"^2.5.16","vue-observe-visibility":"^0.3.1","vue-router":"^3.0.1",vuetify:"^1.0.8",vuex:"^3.0.1"}[t];return{link:e.startsWith("github")?"https://github.com/"+e.replace("github:",""):"https://www.npmjs.com/package/"+t,text:t.replace(/@.*\//,""),version:e.replace(/\^/,"").replace(/github:.*/,"")}}).sort(function(t,e){return t.text.localeCompare(e.text)})}},computed:{useDark:{get:function(){return this.$store.state.dark},set:function(t){this.$store.commit("dark",t)}},useFullscreen:{get:function(){return this.$store.state.full},set:function(t){this.$store.commit("full",t),Object(r.a)(t)}}}},o=s(46),c=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mb-3"},[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Options")])],1),t._v(" "),s("div",{staticClass:"mx-3"},[s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Dark")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useDark,callback:function(e){t.useDark=e},expression:"useDark"}})],1)],1)],1),t._v(" "),s("div",{staticClass:"mx-3"},[s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Fullscreen")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useFullscreen,callback:function(e){t.useFullscreen=e},expression:"useFullscreen"}})],1)],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Application")])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},t._l(t.meta,function(e){return s("v-layout",{key:e.title,attrs:{row:"","mx-3":"","align-center":"","mb-3":""}},[s("v-flex",{staticClass:"body-2"},[t._v(t._s(e.title))]),t._v(" "),e.link?s("div",{staticClass:"body-1"},[s("a",{staticClass:"light-blue--text",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[t._v(t._s(e.value))])]):s("div",{staticClass:"body-1"},[t._v(t._s(e.value))])],1)})),t._v(" "),s("v-divider"),t._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Acknowledgement")])],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},t._l(t.dependencies,function(e){return s("v-layout",{key:e.text,attrs:{row:"","mx-3":"","align-center":"","mb-3":""}},[s("div",{staticClass:"body-1 pr-3"},[s("a",{staticClass:"light-blue--text",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[t._v(t._s(e.text))])]),t._v(" "),s("v-divider"),t._v(" "),e.version?s("div",{staticClass:"pl-3"},[t._v(t._s(e.version))]):t._e()],1)}))],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-xs-center",staticStyle:{margin:"0 0 16px 0"}},[e("img",{staticClass:"gpu",attrs:{src:"static/img/icons/icon-web.svg",alt:"Logo",width:"112"}})])}],!1,null,null,null);e.default=c.exports}}]);