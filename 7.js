(self.webpackJsonp=self.webpackJsonp||[]).push([[7],{403:function(t,e,s){(t.exports=s(1)(!1)).push([t.i,"@media screen and (max-width:1263px){.touch-bottom[data-v-6b6074eb]{margin-bottom:14px}}",""])},404:function(t,e,s){var a=s(403);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(143).default)("15c2b9d4",a,!0,{})},484:function(t,e,s){"use strict";s.r(e);var a=s(62),r=s.n(a),i=s(2),l=s(95),o={components:{VSwitch:function(){return s.e(16).then(function(){var t=s(496);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VSubheader:function(){return Promise.resolve().then(function(){var t=s(131);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})},VDivider:function(){return Promise.resolve().then(function(){var t=s(132);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})})}},data:function(){return{contacts:[{title:"Twitter",value:"@GridyGames",link:"https://twitter.com/GridyGames"}],meta:[{title:"Version",value:"0.41.230"},{title:"Build",value:new Date("2018-04-09T17:19:56.111Z").toLocaleString("en")},{title:"Games",value:i.Info.games.length},{title:"Source",value:"github.com",link:"https://github.com/darosh/gridy-games"}],dependencies:r()({"@tweenjs/tween.js":"^17.2.0",clipboard:"^2.0.0","d3-polygon":"^1.0.3","d3-scale":"^2.0.0",firebase:"^4.12.1",fscreen:"^1.0.2","gridy-avatars":"^1.1.3","html-webpack-plugin":"^3.2.0","idle-js":"^0.1.3","intersection-observer":"^0.5.0",lunr:"^2.1.6","material-icons-bundle":"github:darosh/material-icons-bundle:1.0.0","pretty-date":"^0.2.0",superheroes:"^1.0.0",tone:"^0.12.80",vue:"^2.5.16","vue-observe-visibility":"^0.3.1","vue-router":"^3.0.1",vuefire:"^1.4.5",vuetify:"^1.0.13",vuex:"^3.0.1",gridy:"github:darosh/gridy:0.4.4","gridy-games-lib":"github:darosh/gridy-games-lib:0.1.0"}).map(function(t){var e={"@tweenjs/tween.js":"^17.2.0",clipboard:"^2.0.0","d3-polygon":"^1.0.3","d3-scale":"^2.0.0",firebase:"^4.12.1",fscreen:"^1.0.2","gridy-avatars":"^1.1.3","html-webpack-plugin":"^3.2.0","idle-js":"^0.1.3","intersection-observer":"^0.5.0",lunr:"^2.1.6","material-icons-bundle":"github:darosh/material-icons-bundle:1.0.0","pretty-date":"^0.2.0",superheroes:"^1.0.0",tone:"^0.12.80",vue:"^2.5.16","vue-observe-visibility":"^0.3.1","vue-router":"^3.0.1",vuefire:"^1.4.5",vuetify:"^1.0.13",vuex:"^3.0.1",gridy:"github:darosh/gridy:0.4.4","gridy-games-lib":"github:darosh/gridy-games-lib:0.1.0"}[t];return{link:e.startsWith("github")?"https://github.com/"+e.replace("github:","").replace(/:.*/,""):"https://www.npmjs.com/package/"+t,text:t.replace(/@.*\//,""),version:e.replace(/\^/,"").replace(/github:.*:/,"")}}).sort(function(t,e){return t.text.localeCompare(e.text)})}},computed:{useDark:{get:function(){return this.$store.state.dark},set:function(t){this.$store.commit("dark",t)}},useFullscreen:{get:function(){return this.$store.state.full},set:function(t){this.$store.commit("full",t),Object(l.a)(t)}}},methods:{checkForUpdate:function(){window.$registration.update()}}},n=s(92);var c=function(t){s(404)},u=Object(n.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mb-3"},[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Options")])],1),t._v(" "),s("div",{staticClass:"mx-3"},[s("v-layout",{staticClass:"touch-bottom",attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Dark")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useDark,callback:function(e){t.useDark=e},expression:"useDark"}})],1)],1)],1),t._v(" "),s("div",{staticClass:"mx-3"},[s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[t._v("Full screen")]),t._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:t.useFullscreen,callback:function(e){t.useFullscreen=e},expression:"useFullscreen"}})],1)],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Contact")])],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},t._l(t.contacts,function(e){return s("v-layout",{key:e.title,attrs:{row:"","mx-3":"","align-center":"","mb-1":""}},[s("v-flex",{staticClass:"body-2"},[t._v(t._s(e.title))]),t._v(" "),e.link?s("div",{staticClass:"body-1"},[s("a",{staticClass:"light-blue--text",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[t._v(t._s(e.value))])]):s("div",{staticClass:"body-1"},[t._v(t._s(e.value))])],1)})),t._v(" "),s("v-divider"),t._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Application")])],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},[t._l(t.meta,function(e){return s("v-layout",{key:e.title,attrs:{row:"","mx-3":"","align-center":"","mb-1":""}},[s("v-flex",{staticClass:"body-2"},[t._v(t._s(e.title))]),t._v(" "),e.link?s("div",{staticClass:"body-1"},[s("a",{staticClass:"light-blue--text",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[t._v(t._s(e.value))])]):s("div",{staticClass:"body-1"},[t._v(t._s(e.value))])],1)}),t._v(" "),t.$store.state.registration?s("div",{staticClass:"px-3 mb-3 mt-3"},[s("v-btn",{attrs:{flat:"",color:"light-blue",small:"",block:""},on:{click:function(e){t.checkForUpdate()}}},[t._v("Check for update")])],1):t._e()],2),t._v(" "),s("v-divider"),t._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[t._v("Acknowledgement")])],1),t._v(" "),s("div",{staticClass:"mx-3 mb-3"},t._l(t.dependencies,function(e){return s("v-layout",{key:e.text,attrs:{row:"","mx-3":"","align-center":"","mb-1":""}},[s("div",{staticClass:"body-1 pr-3"},[s("a",{staticClass:"light-blue--text",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[t._v(t._s(e.text))])]),t._v(" "),s("v-divider"),t._v(" "),e.version?s("div",{staticClass:"pl-3"},[t._v(t._s(e.version))]):t._e()],1)}))],1)},[],!1,c,"data-v-6b6074eb",null);e.default=u.exports}}]);