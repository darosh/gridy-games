(self.webpackJsonp=self.webpackJsonp||[]).push([[18],{101:function(t,e,i){"use strict";i.r(e);var a=i(264),n=i.n(a),r=i(294),s={props:{fixed:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},data:function(){return{translate:[],size:[],rect:[]}},methods:{frameUpdate:function(){if(this.game&&this.frame&&this.margin){this.game.grid.scale=1;var t=this.game.grid.bounds(),e=Object(r.b)(t.maxX-t.minX,t.maxY-t.minY,this.frame[0],this.frame[1]);!this.game.grid.irregular&&this.round?this.game.grid.scale=2*Math.floor(e/2):this.game.grid.scale=e,t=this.game.grid.bounds(),this.rect=[t.maxX-t.minX+this.margin,t.maxY-t.minY+this.margin],this.fixed?this.size=[t.maxX-t.minX+this.margin,this.frame[1]+this.margin]:this.size=this.rect;var i=Math.floor(t.maxX-t.minX)%2?0:.5,a=Math.floor(t.maxY-t.minY)%2?0:.5;this.translate=[((this.size[0]-t.minX-t.maxX)/2+i).toFixed(3),((this.size[1]-t.minY-t.maxY)/2+a).toFixed(3)]}},path:function(t){return this.game.grid.path(t)},irregularVertices:function(t){return this.game.grid.path(t).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},typedVertices:function(t){return this.game.grid.vertices(t,void 0,this.game.grid.getTileType(t)).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")}},computed:{vertices:function(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")},shift:function(){return(window.innerHeight-this.size[this.vertical?0:1])/2-64+10}},watch:{frame:{handler:function(){this.frameUpdate()},immediate:!0}}},l=i(265),o={components:{GPolyLine:function(){return Promise.all([i.e(15),i.e(17)]).then(i.bind(null,430))}},mixins:[s],model:{prop:"value",event:"change"},props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},value:{type:Boolean,default:!1},coords:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:function(){return{winning:null,lines:null,rulers:null,stones:null}},computed:{theme:function(){return Object(l.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.initStones()}},"game.moves.length":function(){this.updateStones()},"game.winner":function(t){this.winning=t&&this.game.winning?this.game.winning():null}},mounted:function(){this.$emit("change",!0)},methods:{center:function(t,e){return e?this.game.grid.center(t).value.map(function(t){return""+t.toFixed(3)+e}):this.game.grid.center(t)},initStones:function(){if(this.stones=[],this.isMove){var t=!0,e=!1,i=void 0;try{for(var a,r=n()(this.game.grid.tiles);!(t=(a=r.next()).done);t=!0){var s=a.value;s.data&&this.stones.push({tile:s,data:s.data})}}catch(t){e=!0,i=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw i}}}},updateStones:function(){if(this.isMove&&this.game.moves.length){var t=this.game.moves[this.game.moves.length-1];this.stones.find(function(e){return e.tile===t[0]}).tile=t[1]}}}},c=i(43);var g=function(t){i(309)},d=Object(c.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{vertical:t.vertical,"read-only":!t.interactive},style:{width:t.size[t.vertical?1:0]+"px",height:t.size[t.vertical?0:1]+"px","margin-top":t.centered&&t.shift>0?t.shift+"px":""}},[i("svg",{staticClass:"d-block",class:t.theme,attrs:{width:t.size[0],height:t.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("rect",{attrs:{x:(t.margin/2+.5).toFixed(3),y:((t.margin+t.size[1]-t.rect[1])/2+.5).toFixed(3),width:(t.rect[0]-t.margin).toFixed(3),height:(t.rect[1]-t.margin).toFixed(3)}}),t._v(" "),i("g",{attrs:{transform:"translate("+t.translate+")"}},[t._l(t.lines,function(e,a){return i("line",{key:a,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t._l(t.game.grid.tiles,function(e){return i("g",{key:e.key,attrs:{transform:"translate("+t.center(e)+")"}},[t.game.grid.irregular?i("path",t._g({staticClass:"tile",class:(a={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},a["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,a["value-"+(e.data||0)]=!0,a),attrs:{d:t.path(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null)):i("polygon",t._g({staticClass:"tile",class:(n={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},n["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,n["value-"+(e.data||0)]=!0,n),attrs:{points:2===t.game.grid.tileTypes?t.typedVertices(e):t.vertices||t.irregularVertices(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null)),t._v(" "),t.coords?i("text",{attrs:{"font-size":.4*t.game.grid.scale,dy:.04*t.game.grid.scale,transform:t.vertical?"rotate(-90)":null,"alignment-baseline":"middle","text-anchor":"middle"}},[t._v("\n          "+t._s(t.game.moveToString(e))+" ")]):t._e()]);var a,n}),t._v(" "),t._l(t.rulers,function(e,a){return i("line",{key:"r"+a,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t.isMove?i("g",t._l(t.stones,function(e,a){return i("circle",t._g({key:"s"+a,staticClass:"stone",class:(n={animate:t.interactive,clickable:e.tile.highlighted&&!t.waiting},n["token-"+e.data]=!0,n),style:{transform:"translate("+t.center(e.tile,"px")+")"},attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e.tile)}}:null));var n})):i("g",t._l(t.game.grid.tiles,function(e){return i("g",{key:"c"+e.key,attrs:{transform:"translate("+t.center(e)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[e.data?i("circle",t._g({class:(a={animate:t.interactive,clickable:e.highlighted&&!t.waiting},a["token-"+e.data]=!0,a),attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e)}}:null)):t._e()])],1);var a})),t._v(" "),t.winning?i("g-poly-line",{attrs:{tiles:t.winning,center:t.center,size:t.game.grid.scale,delay:200}}):t._e()],2)])])},[],!1,g,"data-v-558d5573",null);e.default=d.exports},308:function(t,e,i){(t.exports=i(2)(!1)).push([t.i,"circle.animate[data-v-558d5573],polygon.animate[data-v-558d5573]{transition:fill .2s ease-in-out}.stone.animate[data-v-558d5573]{transition:all .2s ease-in-out}.vertical[data-v-558d5573]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-558d5573]{transform:scale(0)}circle.scale-transition-enter-active[data-v-558d5573]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-558d5573]{transform:scale(1)}.clickable[data-v-558d5573]:hover{cursor:pointer}.read-only[data-v-558d5573]{pointer-events:none;touch-action:none}",""])},309:function(t,e,i){var a=i(308);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(78).default)("434c0d78",a,!0,{})}}]);