(self.webpackJsonp=self.webpackJsonp||[]).push([[22],{162:function(e,t,i){"use strict";i.r(t);var n=i(49),a=i.n(n),r=i(9),s=i(366),o=function(e,t,i){return(t[0]-e[0])*(i[1]-e[1])-(t[1]-e[1])*(i[0]-e[0])};function l(e,t){return e[0]-t[0]||e[1]-t[1]}function c(e){for(var t=e.length,i=[0,1],n=2,a=2;a<t;++a){for(;n>1&&o(e[i[n-2]],e[i[n-1]],e[a])<=0;)--n;i[n++]=a}return i.slice(0,n)}var g={props:{fixed:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},data:function(){return{translate:[],size:[],hullPoints:"",resizing:!1}},methods:{frameUpdate:function(){if(this.game&&this.frame&&this.margin){var e=this.rescaleToFrame();this.fixed?this.size=[e.maxX-e.minX+this.margin,this.frame[1]+this.margin]:this.size=[e.maxX-e.minX+this.margin,e.maxY-e.minY+this.margin],this.hullPoints=this.game.hull?function(e){if((i=e.length)<3)return null;var t,i,n=new Array(i),a=new Array(i);for(t=0;t<i;++t)n[t]=[+e[t][0],+e[t][1],t];for(n.sort(l),t=0;t<i;++t)a[t]=[n[t][0],-n[t][1]];var r=c(n),s=c(a),o=s[0]===r[0],g=s[s.length-1]===r[r.length-1],d=[];for(t=r.length-1;t>=0;--t)d.push(e[n[r[t]][2]]);for(t=+o;t<s.length-g;++t)d.push(e[n[s[t]][2]]);return d}(this.getHull()).map(function(e){return e[0].toFixed(3)+" "+e[1].toFixed(3)}).join(" "):"",this.translate=function(e,t){var i=Math.floor(e.maxX-e.minX)%2?0:.5,n=Math.floor(e.maxY-e.minY)%2?0:.5;return[((t[0]-e.minX-e.maxX)/2+i).toFixed(3),((t[1]-e.minY-e.maxY)/2+n).toFixed(3)]}(e,this.size)}},path:function(e){return this.game.grid.path(e)},irregularVertices:function(e){return this.game.grid.path(e).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},typedVertices:function(e){return this.game.grid.vertices(e,void 0,this.game.grid.getTileType(e)).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},rescaleToFrame:function(){this.game.grid.scale=1;var e=this.game.grid.bounds(),t=Object(s.b)(e.maxX-e.minX,e.maxY-e.minY,this.frame[0],this.frame[1]);return!this.game.grid.irregular&&this.round?this.game.grid.scale=2*Math.floor(t/2):this.game.grid.scale=t,this.game.grid.bounds()},getHull:function(){var e=this,t=this.game.grid.vertices(this.game.grid.orientation);return this.game.grid.tiles.reduce(function(i,n){var r=e.game.grid.center(n),s=!0,o=!1,l=void 0;try{for(var c,g=a()(t);!(s=(c=g.next()).done);s=!0){var d=c.value;i.push([r.x+d.x,r.y+d.y])}}catch(e){o=!0,l=e}finally{try{!s&&g.return&&g.return()}finally{if(o)throw l}}return i},[])}},computed:{vertices:function(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},shift:function(){return(window.innerHeight-this.size[this.vertical?0:1])/2-64+10}},watch:{frame:{handler:function(){var e=this;this.resizing=!0,this.frameUpdate(),r.a.nextTick(function(){setTimeout(function(){e.resizing=!1},200)})},immediate:!0}}};var d=i(353),u=0,m={components:{GPolyLine:function(){return Promise.all([i.e(18),i.e(20)]).then(i.bind(null,490))}},mixins:[g],model:{prop:"value",event:"change"},props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},value:{type:Boolean,default:!1},coords:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:function(){return{winning:null,lines:null,rulers:null,stones:null}},computed:{theme:function(){return Object(d.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.initStones()}},"game.moves.length":function(e,t){e===t+1?this.animateStones():this.initStones()},"game.winner":{immediate:!0,handler:function(e){this.winning=e&&this.game.winning?this.game.winning():null}}},mounted:function(){this.$emit("change",!0)},methods:{center:function(e,t){return t?this.game.grid.center(e).value.map(function(e){return""+e.toFixed(3)+t}):this.game.grid.center(e)},initStones:function(){if(this.stones=[],this.isMove){var e=!0,t=!1,i=void 0;try{for(var n,r=a()(this.game.grid.tiles);!(e=(n=r.next()).done);e=!0){var s=n.value;s.data&&this.stones.push({tile:s,data:s.data,id:++u})}}catch(e){t=!0,i=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw i}}}},updateStones:function(){var e=this;this.isMove&&this.game.moves.length&&function(){var t=e.game.moves[e.game.moves.length-1],i=t[0],n=t[t.length-1];n=Array.isArray(n)?n[0]:n,e.stones.find(function(e){return e.tile===i}).tile=n;for(var a=function(i){if(Array.isArray(t[i])&&t[i][1]){var n=e.stones.findIndex(function(e){return e.tile===t[i][1]});e.stones.splice(n,1)}},r=0;r<t.length;r++)a(r)}()},animateStones:function(){var e=this;if(this.isMove&&this.game.moves.length){var t=this.game.moves[this.game.moves.length-1];if(!Array.isArray(t))return void this.stones.push({tile:t,data:t.data,id:++u});var i=t[0],n=this.stones.find(function(e){return e.tile===i}),a=1;!function i(){var r=t[a],s=Array.isArray(r)?r[0]:r;if(n.tile=s,Array.isArray(r)&&r[1]){var o=e.stones.findIndex(function(e){return e.tile===r[1]});e.stones.splice(o,1)}++a<t.length&&setTimeout(i,200)}()}}}},h=i(93);var f=function(e){i(375)},v=Object(h.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{vertical:e.vertical,"read-only":!e.interactive},style:{width:e.size[e.vertical?1:0]+"px",height:e.size[e.vertical?0:1]+"px","margin-top":e.centered&&e.shift>0?e.shift+"px":""}},[i("svg",{staticClass:"d-block",class:e.theme,attrs:{width:e.size[0],height:e.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e.hullPoints?i("polygon",{staticClass:"hull",attrs:{points:e.hullPoints,transform:"translate("+e.translate+")"}}):e._e(),e._v(" "),i("g",{attrs:{transform:"translate("+e.translate+")"}},[e._l(e.lines,function(t,n){return i("line",{key:n,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e._l(e.game.grid.tiles,function(t){return i("g",{key:t.key,attrs:{transform:"translate("+e.center(t)+")"}},[e.game.grid.irregular?i("path",e._g({staticClass:"tile",class:(n={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},n["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,n["value-"+(t.data||0)]=!0,n),attrs:{d:e.path(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null)):i("polygon",e._g({staticClass:"tile",class:(a={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},a["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,a["value-"+(t.data||0)]=!0,a),attrs:{points:2===e.game.grid.tileTypes?e.typedVertices(t):e.vertices||e.irregularVertices(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null))]);var n,a}),e._v(" "),e._l(e.rulers,function(t,n){return i("line",{key:"r"+n,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e._l(e.game.grid.tiles,function(t){return i("g",{key:"text"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[e.coords?i("text",{attrs:{"font-size":.4*e.game.grid.scale,dy:.04*e.game.grid.scale,transform:e.vertical?"rotate(-90)":null,"alignment-baseline":"middle","text-anchor":"middle"}},[e._v("\n          "+e._s(e.game.moveToString(t))+" ")]):e._e()])}),e._v(" "),e.isMove?i("g",[i("transition-group",{attrs:{name:"remove",tag:"g"}},e._l(e.stones,function(t){return i("g",{key:"s"+t.id},[i("circle",e._g({staticClass:"stone",class:(n={animate:e.interactive&&!e.resizing,clickable:t.tile.highlighted&&!e.waiting},n["token-"+t.data]=!0,n),style:{transform:"translate("+e.center(t.tile,"px")+")"},attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t.tile)}}:null))]);var n}))],1):i("g",e._l(e.game.grid.tiles,function(t){return i("g",{key:"c"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[t.data?i("circle",e._g({class:(n={animate:e.interactive,clickable:t.highlighted&&!e.waiting},n["token-"+t.data]=!0,n),attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t)}}:null)):e._e()])],1);var n})),e._v(" "),e.winning?i("g-poly-line",{class:"winner-"+e.game.winner,style:{"stroke-width":Math.round(.5*(e.game.grid.radius*e.game.grid.scale*.85-2*e.round))},attrs:{tiles:e.winning,center:e.center,size:e.game.grid.scale,delay:200}}):e._e()],2)])])},[],!1,f,"data-v-3d2ee59d",null);t.default=v.exports},374:function(e,t,i){(e.exports=i(1)(!1)).push([e.i,"circle.animate[data-v-3d2ee59d],polygon.animate[data-v-3d2ee59d]{transition:fill .2s ease-in-out,stroke .2s ease-in-out,stroke-width .2s ease-in-out}.stone.animate[data-v-3d2ee59d]{transition:all .2s ease-in-out}.vertical[data-v-3d2ee59d]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-3d2ee59d]{transform:scale(0)}circle.scale-transition-enter-active[data-v-3d2ee59d]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-3d2ee59d]{transform:scale(1)}.remove-leave-active[data-v-3d2ee59d]{transition:opacity .4s ease-out!important}.remove-leave-to[data-v-3d2ee59d]{opacity:0}.remove-leave[data-v-3d2ee59d]{opacity:1}.clickable[data-v-3d2ee59d]:hover{cursor:pointer}.read-only[data-v-3d2ee59d]{pointer-events:none;touch-action:none}",""])},375:function(e,t,i){var n=i(374);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(138).default)("25545f22",n,!0,{})}}]);