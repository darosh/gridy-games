(self.webpackJsonp=self.webpackJsonp||[]).push([[22],{296:function(e,t,i){var a=i(74),n=i(270);e.exports=i(14).getIterator=function(e){var t=n(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},304:function(e,t,i){i(272),i(271),e.exports=i(296)},305:function(e,t,i){e.exports={default:i(304),__esModule:!0}},306:function(e,t,i){(e.exports=i(2)(!1)).push([e.i,"circle.animate[data-v-4a49802a],polygon.animate[data-v-4a49802a]{transition:fill .2s ease-in-out}.stone.animate[data-v-4a49802a]{transition:all .2s ease-in-out}.vertical[data-v-4a49802a]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-4a49802a]{transform:scale(0)}circle.scale-transition-enter-active[data-v-4a49802a]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-4a49802a]{transform:scale(1)}.clickable[data-v-4a49802a]:hover{cursor:pointer}.read-only[data-v-4a49802a]{pointer-events:none;touch-action:none}",""])},307:function(e,t,i){var a=i(306);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(76).default)("588c7bee",a,!0,{})},38:function(e,t,i){"use strict";i.r(t);var a=i(305),n=i.n(a),r=i(279),s={props:{fixed:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},data:function(){return{translate:[],size:[],rect:[]}},methods:{frameUpdate:function(){if(this.game&&this.frame&&this.margin){this.game.grid.scale=1;var e=this.game.grid.bounds(),t=Object(r.b)(e.maxX-e.minX,e.maxY-e.minY,this.frame[0],this.frame[1]);!this.game.grid.irregular&&this.round?this.game.grid.scale=2*Math.floor(t/2):this.game.grid.scale=t,e=this.game.grid.bounds(),this.rect=[e.maxX-e.minX+this.margin,e.maxY-e.minY+this.margin],this.fixed?this.size=[e.maxX-e.minX+this.margin,this.frame[1]+this.margin]:this.size=this.rect;var i=Math.floor(e.maxX-e.minX)%2?0:.5,a=Math.floor(e.maxY-e.minY)%2?0:.5;this.translate=[((this.size[0]-e.minX-e.maxX)/2+i).toFixed(3),((this.size[1]-e.minY-e.maxY)/2+a).toFixed(3)]}},path:function(e){return this.game.grid.path(e)},irregularVertices:function(e){return this.game.grid.path(e).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},typedVertices:function(e){return this.game.grid.vertices(e,void 0,this.game.grid.getTileType(e)).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")}},computed:{vertices:function(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(function(e){return e.x.toFixed(3)+","+e.y.toFixed(3)}).join(" ")},shift:function(){return(window.innerHeight-this.size[this.vertical?0:1])/2-64+10}},watch:{frame:{handler:function(){this.frameUpdate()},immediate:!0}}},o=i(256),l={components:{GPolyLine:function(){return Promise.all([i.e(18),i.e(20)]).then(i.bind(null,436))}},mixins:[s],model:{prop:"value",event:"change"},props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},value:{type:Boolean,default:!1},coords:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:function(){return{winning:null,lines:null,rulers:null,stones:null}},computed:{theme:function(){return Object(o.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.initStones()}},"game.moves.length":function(){this.updateStones()},"game.winner":{immediate:!0,handler:function(e){this.winning=e&&this.game.winning?this.game.winning():null}}},mounted:function(){this.$emit("change",!0)},methods:{center:function(e,t){return t?this.game.grid.center(e).value.map(function(e){return""+e.toFixed(3)+t}):this.game.grid.center(e)},initStones:function(){if(this.stones=[],this.isMove){var e=!0,t=!1,i=void 0;try{for(var a,r=n()(this.game.grid.tiles);!(e=(a=r.next()).done);e=!0){var s=a.value;s.data&&this.stones.push({tile:s,data:s.data})}}catch(e){t=!0,i=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw i}}}},updateStones:function(){if(this.isMove&&this.game.moves.length){var e=this.game.moves[this.game.moves.length-1];this.stones.find(function(t){return t.tile===e[0]}).tile=e[1]}}}},c=i(42);var g=function(e){i(307)},d=Object(c.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{vertical:e.vertical,"read-only":!e.interactive},style:{width:e.size[e.vertical?1:0]+"px",height:e.size[e.vertical?0:1]+"px","margin-top":e.centered&&e.shift>0?e.shift+"px":""}},[i("svg",{staticClass:"d-block",class:e.theme,attrs:{width:e.size[0],height:e.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("rect",{attrs:{x:(e.margin/2+.5).toFixed(3),y:((e.margin+e.size[1]-e.rect[1])/2+.5).toFixed(3),width:(e.rect[0]-e.margin).toFixed(3),height:(e.rect[1]-e.margin).toFixed(3)}}),e._v(" "),i("g",{attrs:{transform:"translate("+e.translate+")"}},[e._l(e.lines,function(t,a){return i("line",{key:a,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e._l(e.game.grid.tiles,function(t){return i("g",{key:t.key,attrs:{transform:"translate("+e.center(t)+")"}},[e.game.grid.irregular?i("path",e._g({staticClass:"tile",class:(a={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},a["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,a["value-"+(t.data||0)]=!0,a),attrs:{d:e.path(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null)):i("polygon",e._g({staticClass:"tile",class:(n={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},n["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,n["value-"+(t.data||0)]=!0,n),attrs:{points:2===e.game.grid.tileTypes?e.typedVertices(t):e.vertices||e.irregularVertices(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null)),e._v(" "),e.coords?i("text",{attrs:{"font-size":.4*e.game.grid.scale,dy:.04*e.game.grid.scale,transform:e.vertical?"rotate(-90)":null,"alignment-baseline":"middle","text-anchor":"middle"}},[e._v("\n          "+e._s(e.game.moveToString(t))+" ")]):e._e()]);var a,n}),e._v(" "),e._l(e.rulers,function(t,a){return i("line",{key:"r"+a,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e.isMove?i("g",e._l(e.stones,function(t,a){return i("circle",e._g({key:"s"+a,staticClass:"stone",class:(n={animate:e.interactive,clickable:t.tile.highlighted&&!e.waiting},n["token-"+t.data]=!0,n),style:{transform:"translate("+e.center(t.tile,"px")+")"},attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t.tile)}}:null));var n})):i("g",e._l(e.game.grid.tiles,function(t){return i("g",{key:"c"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[t.data?i("circle",e._g({class:(a={animate:e.interactive,clickable:t.highlighted&&!e.waiting},a["token-"+t.data]=!0,a),attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t)}}:null)):e._e()])],1);var a})),e._v(" "),e.winning?i("g-poly-line",{class:"winner-"+e.game.winner,style:{"stroke-width":Math.round(.5*(e.game.grid.radius*e.game.grid.scale*.85-2*e.round))},attrs:{tiles:e.winning,center:e.center,size:e.game.grid.scale,delay:200}}):e._e()],2)])])},[],!1,g,"data-v-4a49802a",null);t.default=d.exports}}]);