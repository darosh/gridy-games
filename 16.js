(self.webpackJsonp=self.webpackJsonp||[]).push([[16,25],{125:function(t,e,i){"use strict";i.r(e);var n=i(50),r=i.n(n),a=i(6),s=i(389),o=function(t,e,i){return(e[0]-t[0])*(i[1]-t[1])-(e[1]-t[1])*(i[0]-t[0])};function l(t,e){return t[0]-e[0]||t[1]-e[1]}function c(t){for(var e=t.length,i=[0,1],n=2,r=2;r<e;++r){for(;n>1&&o(t[i[n-2]],t[i[n-1]],t[r])<=0;)--n;i[n++]=r}return i.slice(0,n)}var g={props:{fixed:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},data:function(){return{translate:[],size:[],hullPoints:"",resizing:!1}},methods:{frameUpdate:function(){if(this.game&&this.frame&&this.margin){var t=this.rescaleToFrame();this.fixed?this.size=[t.maxX-t.minX+this.margin,this.frame[1]+this.margin]:this.size=[t.maxX-t.minX+this.margin,t.maxY-t.minY+this.margin],this.hullPoints=this.game.hull?function(t){if((i=t.length)<3)return null;var e,i,n=new Array(i),r=new Array(i);for(e=0;e<i;++e)n[e]=[+t[e][0],+t[e][1],e];for(n.sort(l),e=0;e<i;++e)r[e]=[n[e][0],-n[e][1]];var a=c(n),s=c(r),o=s[0]===a[0],g=s[s.length-1]===a[a.length-1],d=[];for(e=a.length-1;e>=0;--e)d.push(t[n[a[e]][2]]);for(e=+o;e<s.length-g;++e)d.push(t[n[s[e]][2]]);return d}(this.getHull()).map(function(t){return t[0].toFixed(3)+" "+t[1].toFixed(3)}).join(" "):"",this.translate=function(t,e){var i=Math.floor(t.maxX-t.minX)%2?0:.5,n=Math.floor(t.maxY-t.minY)%2?0:.5;return[((e[0]-t.minX-t.maxX)/2+i).toFixed(3),((e[1]-t.minY-t.maxY)/2+n).toFixed(3)]}(t,this.size)}},path:function(t){return this.game.grid.path(t)},irregularVertices:function(t){return this.game.grid.path(t).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},typedVertices:function(t){return this.game.grid.vertices(t,void 0,this.game.grid.getTileType(t)).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},rescaleToFrame:function(){this.game.grid.scale=1;var t=this.game.grid.bounds(),e=Object(s.b)(t.maxX-t.minX,t.maxY-t.minY,this.frame[0],this.frame[1]);return!this.game.grid.irregular&&this.round?this.game.grid.scale=2*Math.floor(e/2):this.game.grid.scale=e,this.game.grid.bounds()},getHull:function(){var t=this,e=this.game.grid.vertices(this.game.grid.orientation);return this.game.grid.tiles.reduce(function(i,n){var a=t.game.grid.center(n),s=!0,o=!1,l=void 0;try{for(var c,g=r()(e);!(s=(c=g.next()).done);s=!0){var d=c.value;i.push([a.x+d.x,a.y+d.y])}}catch(t){o=!0,l=t}finally{try{!s&&g.return&&g.return()}finally{if(o)throw l}}return i},[])}},computed:{vertices:function(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},shift:function(){return(window.innerHeight-this.size[this.vertical?0:1])/2-64+10}},watch:{frame:{handler:function(){var t=this;this.resizing=!0,this.frameUpdate(),a.a.nextTick(function(){setTimeout(function(){t.resizing=!1},200)})},immediate:!0}}};var d=i(363),u=0,m={components:{GPolyLine:function(){return Promise.all([i.e(21),i.e(23)]).then(i.bind(null,617))}},mixins:[g],model:{prop:"value",event:"change"},props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},value:{type:Boolean,default:!1},coords:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:function(){return{winning:null,lines:null,dots:null,rulers:null,stones:null}},computed:{theme:function(){return Object(d.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.dots=this.game.dots?this.game.dots():[],this.initStones()}},"game.moves.length":function(t,e){t===e+1?this.animateStones():this.initStones()},"game.winner":{immediate:!0,handler:function(t){this.winning=t&&this.game.winning?this.game.winning():null}}},mounted:function(){this.$emit("change",!0)},methods:{center:function(t,e){return e?this.game.grid.center(t).value.map(function(t){return""+t.toFixed(3)+e}):this.game.grid.center(t)},initStones:function(){if(this.stones=[],this.isMove){var t=!0,e=!1,i=void 0;try{for(var n,a=r()(this.game.grid.tiles);!(t=(n=a.next()).done);t=!0){var s=n.value;s.data&&this.stones.push({tile:s,data:s.data,id:++u})}}catch(t){e=!0,i=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}}},updateStones:function(){var t=this;this.isMove&&this.game.moves.length&&function(){var e=t.game.moves[t.game.moves.length-1],i=e[0],n=e[e.length-1];n=Array.isArray(n)?n[0]:n,t.stones.find(function(t){return t.tile===i}).tile=n;for(var r=function(i){if(Array.isArray(e[i])&&e[i][1]){var n=t.stones.findIndex(function(t){return t.tile===e[i][1]});t.stones.splice(n,1)}},a=0;a<e.length;a++)r(a)}()},animateStones:function(){var t=this;if(this.isMove&&this.game.moves.length){var e=this.game.moves[this.game.moves.length-1];if(!Array.isArray(e))return void this.stones.push({tile:e,data:e.data,id:++u});var i=e[0],n=this.stones.find(function(t){return t.tile===i}),r=1;!function i(){var a=e[r],s=Array.isArray(a)?a[0]:a;if(n.tile=s,Array.isArray(a)&&a[1]){var o=t.stones.findIndex(function(t){return t.tile===a[1]});t.stones.splice(o,1)}++r<e.length&&setTimeout(i,200)}()}}}},h=i(93);var f=function(t){i(405)},v=Object(h.a)(m,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{vertical:t.vertical,"read-only":!t.interactive},style:{width:t.size[t.vertical?1:0]+"px",height:t.size[t.vertical?0:1]+"px","margin-top":t.centered&&t.shift>0?t.shift+"px":""}},[i("svg",{staticClass:"d-block",class:t.theme,attrs:{width:t.size[0],height:t.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[t.hullPoints?i("polygon",{staticClass:"hull",attrs:{points:t.hullPoints,transform:"translate("+t.translate+")"}}):t._e(),t._v(" "),i("g",{attrs:{transform:"translate("+t.translate+")"}},[t._l(t.lines,function(e,n){return i("line",{key:n,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t._l(t.game.grid.tiles,function(e){return i("g",{key:e.key,attrs:{transform:"translate("+t.center(e)+")"}},[t.game.grid.irregular?i("path",t._g({staticClass:"tile",class:(n={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},n["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,n["value-"+(e.data||0)]=!0,n),attrs:{d:t.path(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null)):i("polygon",t._g({staticClass:"tile",class:(r={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},r["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,r["value-"+(e.data||0)]=!0,r),attrs:{points:2===t.game.grid.tileTypes?t.typedVertices(e):t.vertices||t.irregularVertices(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null))]);var n,r}),t._v(" "),t._l(t.rulers,function(e,n){return i("line",{key:"r"+n,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t._l(t.dots,function(e){return i("g",{key:"dot"+e.key,attrs:{transform:"translate("+t.center(e)+")"}},[i("circle",{staticClass:"dot",staticStyle:{"pointer-events":"none"},attrs:{r:.085*t.game.grid.scale,cx:"0",cy:"0"}})])}),t._v(" "),t._l(t.game.grid.tiles,function(e){return i("g",{key:"text"+e.key,attrs:{transform:"translate("+t.center(e)+")"}},[t.coords?i("text",{attrs:{"font-size":.4*t.game.grid.scale,dy:.04*t.game.grid.scale,transform:t.vertical?"rotate(-90)":null,"alignment-baseline":"middle","text-anchor":"middle"}},[t._v("\n          "+t._s(t.game.moveToString(e))+" ")]):t._e()])}),t._v(" "),t.isMove?i("g",[i("transition-group",{attrs:{name:"remove",tag:"g"}},t._l(t.stones,function(e){return i("g",{key:"s"+e.id},[i("circle",t._g({staticClass:"stone",class:(n={animate:t.interactive&&!t.resizing,clickable:e.tile.highlighted&&!t.waiting},n["token-"+e.data]=!0,n),style:{transform:"translate("+t.center(e.tile,"px")+")"},attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e.tile)}}:null))]);var n}))],1):i("g",t._l(t.game.grid.tiles,function(e){return i("g",{key:"c"+e.key,attrs:{transform:"translate("+t.center(e)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[e.data?i("circle",t._g({class:(n={animate:t.interactive,clickable:e.highlighted&&!t.waiting},n["token-"+e.data]=!0,n),attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e)}}:null)):t._e()])],1);var n})),t._v(" "),t.winning?i("g-poly-line",{class:"winner-"+t.game.winner,style:{"stroke-width":Math.round(.5*(t.game.grid.radius*t.game.grid.scale*.85-2*t.round))},attrs:{tiles:t.winning,center:t.center,size:t.game.grid.scale,delay:200}}):t._e()],2)])])},[],!1,f,"data-v-3be1d1d7",null);e.default=v.exports},363:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i(2);function r(t){return n.Theme[t.theme].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+"-theme"}},389:function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return a});var n=i(2);function r(t,e,i,n){return Math.min(i/t,n/e)}function a(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0===t[e]&&i&&t.original?function(t,e,i){if(void 0===n.Games[t.original][e])return a(n.Games[t.original],e,i);return n.Games[t.original][e]}(t,e,i):t[e]}},404:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"circle.animate[data-v-3be1d1d7],polygon.animate[data-v-3be1d1d7]{transition:fill .2s ease-in-out,stroke .2s ease-in-out,stroke-width .2s ease-in-out}.stone.animate[data-v-3be1d1d7]{transition:all .2s ease-in-out}.vertical[data-v-3be1d1d7]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-3be1d1d7]{transform:scale(0)}circle.scale-transition-enter-active[data-v-3be1d1d7]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-3be1d1d7]{transform:scale(1)}.remove-leave-active[data-v-3be1d1d7]{transition:opacity .4s ease-out!important}.remove-leave-to[data-v-3be1d1d7]{opacity:0}.remove-leave[data-v-3be1d1d7]{opacity:1}.clickable[data-v-3be1d1d7]:hover{cursor:pointer}.read-only[data-v-3be1d1d7]{pointer-events:none;touch-action:none}",""])},405:function(t,e,i){var n=i(404);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(142).default)("2b34b20b",n,!0,{})}}]);