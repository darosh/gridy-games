(self.webpackJsonp=self.webpackJsonp||[]).push([[8],{425:function(e,t,s){"use strict";s.r(t);var a=s(32),r=s.n(a),i=s(1),l=s(49),n={components:{VSwitch:function(){return s.e(15).then(function(){var e=s(436);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},VSubheader:function(){return Promise.resolve().then(function(){var e=s(147);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},VDivider:function(){return Promise.resolve().then(function(){var e=s(160);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}},data:function(){return{meta:[{title:"Version",value:"0.1.151"},{title:"Build",value:new Date("2018-03-20T21:04:08.289Z").toLocaleString("en")},{title:"Games",value:i.Info.games.length},{title:"Source",value:"github.com",link:"https://github.com/darosh/gridy-games"}],dependencies:r()({"@tweenjs/tween.js":"^17.2.0","d3-scale":"^2.0.0",fscreen:"^1.0.2",gridy:"github:darosh/gridy:0.4.3","intersection-observer":"^0.5.0",lunr:"^2.1.6","material-icons-bundle":"github:darosh/material-icons-bundle:1.0.0",tone:"^0.12.72",vue:"^2.5.16","vue-observe-visibility":"^0.3.1","vue-router":"^3.0.1",vuetify:"^1.0.8",vuex:"^3.0.1"}).map(function(e){var t={"@tweenjs/tween.js":"^17.2.0","d3-scale":"^2.0.0",fscreen:"^1.0.2",gridy:"github:darosh/gridy:0.4.3","intersection-observer":"^0.5.0",lunr:"^2.1.6","material-icons-bundle":"github:darosh/material-icons-bundle:1.0.0",tone:"^0.12.72",vue:"^2.5.16","vue-observe-visibility":"^0.3.1","vue-router":"^3.0.1",vuetify:"^1.0.8",vuex:"^3.0.1"}[e];return{link:t.startsWith("github")?"https://github.com/"+t.replace("github:","").replace(/:.*/,""):"https://www.npmjs.com/package/"+e,text:e.replace(/@.*\//,""),version:t.replace(/\^/,"").replace(/github:.*:/,"")}}).sort(function(e,t){return e.text.localeCompare(t.text)})}},computed:{useDark:{get:function(){return this.$store.state.dark},set:function(e){this.$store.commit("dark",e)}},useFullscreen:{get:function(){return this.$store.state.full},set:function(e){this.$store.commit("full",e),Object(l.a)(e)}}},methods:{checkForUpdate:function(){window.$registration.update()}}},o=s(40),c=Object(o.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"mb-3"},[s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[e._v("Options")])],1),e._v(" "),s("div",{staticClass:"mx-3"},[s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[e._v("Dark")]),e._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:e.useDark,callback:function(t){e.useDark=t},expression:"useDark"}})],1)],1)],1),e._v(" "),s("div",{staticClass:"mx-3"},[s("v-layout",{attrs:{row:"","mx-3":"","align-center":""}},[s("v-flex",{staticClass:"body-1"},[e._v("Full screen")]),e._v(" "),s("div",[s("v-switch",{attrs:{"hide-details":"",color:"light-blue"},model:{value:e.useFullscreen,callback:function(t){e.useFullscreen=t},expression:"useFullscreen"}})],1)],1)],1)],1),e._v(" "),s("v-divider"),e._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[e._v("Application")])],1),e._v(" "),s("div",{staticClass:"mx-3 mb-3"},[e._l(e.meta,function(t){return s("v-layout",{key:t.title,attrs:{row:"","mx-3":"","align-center":"","mb-1":""}},[s("v-flex",{staticClass:"body-2"},[e._v(e._s(t.title))]),e._v(" "),t.link?s("div",{staticClass:"body-1"},[s("a",{staticClass:"light-blue--text",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[e._v(e._s(t.value))])]):s("div",{staticClass:"body-1"},[e._v(e._s(t.value))])],1)}),e._v(" "),e.$store.state.registration?s("div",{staticClass:"px-3 mb-3 mt-3"},[s("v-btn",{attrs:{flat:"",color:"light-blue",small:"",block:""},on:{click:function(t){e.checkForUpdate()}}},[e._v("Check for update")])],1):e._e()],2),e._v(" "),s("v-divider"),e._v(" "),s("v-toolbar",{attrs:{dense:"",flat:"",color:"transparent"}},[s("v-subheader",{staticClass:"pl-3"},[e._v("Acknowledgement")])],1),e._v(" "),s("div",{staticClass:"mx-3 mb-3"},e._l(e.dependencies,function(t){return s("v-layout",{key:t.text,attrs:{row:"","mx-3":"","align-center":"","mb-1":""}},[s("div",{staticClass:"body-1 pr-3"},[s("a",{staticClass:"light-blue--text",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[e._v(e._s(t.text))])]),e._v(" "),s("v-divider"),e._v(" "),t.version?s("div",{staticClass:"pl-3"},[e._v(e._s(t.version))]):e._e()],1)}))],1)},[],!1,null,null,null);t.default=c.exports}}]);