(self.webpackJsonp=self.webpackJsonp||[]).push([[2],{436:function(t,e,r){"use strict";r.r(e);var n=r(22),a=r(2),o=r(46),s=null;function i(t,e,r){null===s?s=e.meta.home?-1:0:s&&s--,r()}var u={components:{GPlayers:function(){return r.e(23).then(r.bind(null,439))}},data:function(){return{Shared:n.a,homeLink:this.$router.resolve("/").href}},computed:{title:function(){return this.$route.params.id&&a.Games[this.$route.params.id+"Game"]?a.Games[this.$route.params.id+"Game"].title:""}},destroyed:function(){s=null},beforeRouteUpdate:i,beforeRouteEnter:i,methods:{back:function(t){Object(o.a)(this.$store.state.full),s&&(t.preventDefault(),this.$router.go(s))}}},c=r(41),l=Object(c.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{staticClass:"elevation-0",style:{"background-color":this.$store.state.dark?this.$route.meta.home?"":"#303030":""},attrs:{color:this.$store.state.dark?"":this.$route.meta.home?"":"grey lighten-5",dense:"",app:""}},[r("v-btn",{attrs:{href:t.homeLink,icon:""},nativeOn:{click:function(e){return t.back(e)}}},[r("v-icon",[t._v("arrow_back")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("g-players"),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.Shared.drawer=!t.Shared.drawer}}},[r("v-icon",[t._v("settings")])],1)],1)},[],!1,null,null,null);e.default=l.exports}}]);