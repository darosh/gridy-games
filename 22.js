(self.webpackJsonp=self.webpackJsonp||[]).push([[22],{103:function(e,t,i){"use strict";i.r(t);var n=i(305),a=i.n(n),r=i(6),s=i(279),o={props:{fixed:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},data:function(){return{translate:[],size:[],rect:[],resizing:!1}},methods:{frameUpdate:function(){if(this.game&&this.frame&&this.margin){var e=this.rescaleToFrame();this.rect=[e.maxX-e.minX+this.margin,e.maxY-e.minY+this.margin],this.fixed?this.size=[e.maxX-e.minX+this.margin,this.frame[1]+this.margin]:this.size=this.rect,this.translate=function(e,t){var i=Math.floor(e.maxX-e.minX)%2?0:.5,n=Math.floor(e.maxY-e.minY)%2?0:.5;return[((t[0]-e.minX-e.maxX)/2+i).toFixed(3),((t[1]-e.minY-e.maxY)/2+n).toFixed(3)]}(e,this.size)}},path:function(e){return this.game.grid.path(e)},irregularVertices:function(e){return this.game.grid.path(e).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},typedVertices:function(e){return this.game.grid.vertices(e,void 0,this.game.grid.getTileType(e)).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},rescaleToFrame:function(){this.game.grid.scale=1;var e=this.game.grid.bounds(),t=Object(s.b)(e.maxX-e.minX,e.maxY-e.minY,this.frame[0],this.frame[1]);return!this.game.grid.irregular&&this.round?this.game.grid.scale=2*Math.floor(t/2):this.game.grid.scale=t,this.game.grid.bounds()}},computed:{vertices:function(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},shift:function(){return(window.innerHeight-this.size[this.vertical?0:1])/2-64+10}},watch:{frame:{handler:function(){var e=this;this.resizing=!0,this.frameUpdate(),r.a.nextTick(function(){setTimeout(function(){e.resizing=!1},200)})},immediate:!0}}};var l=i(256),c={components:{GPolyLine:function(){return Promise.all([i.e(18),i.e(20)]).then(i.bind(null,435))}},mixins:[o],model:{prop:"value",event:"change"},props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},value:{type:Boolean,default:!1},coords:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:function(){return{winning:null,lines:null,rulers:null,stones:null}},computed:{theme:function(){return Object(l.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.initStones()}},"game.moves.length":function(){this.updateStones()},"game.winner":{immediate:!0,handler:function(e){this.winning=e&&this.game.winning?this.game.winning():null}}},mounted:function(){this.$emit("change",!0)},methods:{center:function(e,t){return t?this.game.grid.center(e).value.map(function(e){return""+e.toFixed(3)+t}):this.game.grid.center(e)},initStones:function(){if(this.stones=[],this.isMove){var e=!0,t=!1,i=void 0;try{for(var n,r=a()(this.game.grid.tiles);!(e=(n=r.next()).done);e=!0){var s=n.value;s.data&&this.stones.push({tile:s,data:s.data,id:this.stones.length})}}catch(e){t=!0,i=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw i}}}},updateStones:function(){var e=this;this.isMove&&this.game.moves.length&&function(){var t=e.game.moves[e.game.moves.length-1],i=t[0],n=t[t.length-1];n=Array.isArray(n)?n[0]:n,e.stones.find(function(e){return e.tile===i}).tile=n;for(var a=function(i){if(Array.isArray(t[i])&&t[i][1]){var n=e.stones.findIndex(function(e){return e.tile===t[i][1]});e.stones.splice(n,1)}},r=0;r<t.length;r++)a(r)}()}}},g=i(40);var d=function(e){i(307)},m=Object(g.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{vertical:e.vertical,"read-only":!e.interactive},style:{width:e.size[e.vertical?1:0]+"px",height:e.size[e.vertical?0:1]+"px","margin-top":e.centered&&e.shift>0?e.shift+"px":""}},[i("svg",{staticClass:"d-block",class:e.theme,attrs:{width:e.size[0],height:e.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("rect",{attrs:{x:(e.margin/2).toFixed(3),y:((e.margin+e.size[1]-e.rect[1])/2+.5).toFixed(3),width:(e.rect[0]-e.margin).toFixed(3),height:(e.rect[1]-e.margin).toFixed(3)}}),e._v(" "),i("g",{attrs:{transform:"translate("+e.translate+")"}},[e._l(e.lines,function(t,n){return i("line",{key:n,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e._l(e.game.grid.tiles,function(t){return i("g",{key:t.key,attrs:{transform:"translate("+e.center(t)+")"}},[e.game.grid.irregular?i("path",e._g({staticClass:"tile",class:(n={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},n["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,n["value-"+(t.data||0)]=!0,n),attrs:{d:e.path(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null)):i("polygon",e._g({staticClass:"tile",class:(a={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},a["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,a["value-"+(t.data||0)]=!0,a),attrs:{points:2===e.game.grid.tileTypes?e.typedVertices(t):e.vertices||e.irregularVertices(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null))]);var n,a}),e._v(" "),e._l(e.rulers,function(t,n){return i("line",{key:"r"+n,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e._l(e.game.grid.tiles,function(t){return i("g",{key:"text"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[e.coords?i("text",{attrs:{"font-size":.4*e.game.grid.scale,dy:.04*e.game.grid.scale,transform:e.vertical?"rotate(-90)":null,"alignment-baseline":"middle","text-anchor":"middle"}},[e._v("\n          "+e._s(e.game.moveToString(t))+" ")]):e._e()])}),e._v(" "),e.isMove?i("g",e._l(e.stones,function(t){return i("circle",e._g({key:"s"+t.id,staticClass:"stone",class:(n={animate:e.interactive&&!e.resizing,clickable:t.tile.highlighted&&!e.waiting},n["token-"+t.data]=!0,n),style:{transform:"translate("+e.center(t.tile,"px")+")"},attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t.tile)}}:null));var n})):i("g",e._l(e.game.grid.tiles,function(t){return i("g",{key:"c"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[t.data?i("circle",e._g({class:(n={animate:e.interactive,clickable:t.highlighted&&!e.waiting},n["token-"+t.data]=!0,n),attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t)}}:null)):e._e()])],1);var n})),e._v(" "),e.winning?i("g-poly-line",{class:"winner-"+e.game.winner,style:{"stroke-width":Math.round(.5*(e.game.grid.radius*e.game.grid.scale*.85-2*e.round))},attrs:{tiles:e.winning,center:e.center,size:e.game.grid.scale,delay:200}}):e._e()],2),e._v(" "),i("rect",{staticStyle:{fill:"none"},attrs:{x:(e.margin/2).toFixed(3),y:((e.margin+e.size[1]-e.rect[1])/2+.5).toFixed(3),width:(e.rect[0]-e.margin).toFixed(3),height:(e.rect[1]-e.margin).toFixed(3)}})])])},[],!1,d,"data-v-3d8dc27f",null);t.default=m.exports},296:function(e,t,i){var n=i(69),a=i(270);e.exports=i(14).getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},304:function(e,t,i){i(272),i(271),e.exports=i(296)},305:function(e,t,i){e.exports={default:i(304),__esModule:!0}},306:function(e,t,i){(e.exports=i(2)(!1)).push([e.i,"circle.animate[data-v-3d8dc27f],polygon.animate[data-v-3d8dc27f]{transition:fill .2s ease-in-out,stroke .2s ease-in-out,stroke-width .2s ease-in-out}.stone.animate[data-v-3d8dc27f]{transition:all .2s ease-in-out}.vertical[data-v-3d8dc27f]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-3d8dc27f]{transform:scale(0)}circle.scale-transition-enter-active[data-v-3d8dc27f]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-3d8dc27f]{transform:scale(1)}.clickable[data-v-3d8dc27f]:hover{cursor:pointer}.read-only[data-v-3d8dc27f]{pointer-events:none;touch-action:none}",""])},307:function(e,t,i){var n=i(306);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(71).default)("e60c552a",n,!0,{})}}]);