(self.webpackJsonp=self.webpackJsonp||[]).push([[17],{130:function(t,e,i){"use strict";i.r(e);var a=i(302),n=i.n(a),r=i(313),s={data:function(){return{translate:[],size:[]}},methods:{frameUpdate:function(){if(this.game&&this.frame&&this.margin){this.game.grid.scale=1;var t=this.game.grid.bounds(),e=Object(r.b)(t.maxX-t.minX,t.maxY-t.minY,this.frame[0],this.frame[1]);!this.game.grid.irregular&&this.round?(this.game.grid.scale=Math.round(e),this.game.grid.scale-=this.game.grid.scale%2):this.game.grid.scale=e,t=this.game.grid.bounds(),this.size=[t.maxX-t.minX+this.margin,t.maxY-t.minY+this.margin];var i=Math.floor(t.maxX-t.minX)%2?0:.5,a=Math.floor(t.maxY-t.minY)%2?0:.5;this.translate=[(this.size[0]-t.minX-t.maxX)/2+i,(this.size[1]-t.minY-t.maxY)/2+a]}},path:function(t){return this.game.grid.path(t)},irregularVertices:function(t){return this.game.grid.path(t).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")}},computed:{vertices:function(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(function(t){return t.x.toFixed(3)+","+t.y.toFixed(3)}).join(" ")}},watch:{frame:{handler:function(){this.frameUpdate()},immediate:!0}}},l=i(306),c={components:{GPolyLine:function(){return Promise.all([i.e(12),i.e(16)]).then(i.bind(null,424))}},mixins:[s],props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:function(){return{winning:null,lines:null,rulers:null,stones:null}},computed:{theme:function(){return Object(l.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.initStones()}},"game.moves.length":function(){this.updateStones()},"game.winner":function(t){this.winning=t&&this.game.winning?this.game.winning():null}},methods:{center:function(t,e){return e?this.game.grid.center(t).value.map(function(t){return""+t+e}):this.game.grid.center(t)},initStones:function(){if(this.stones=[],this.isMove){var t=!0,e=!1,i=void 0;try{for(var a,r=n()(this.game.grid.tiles);!(t=(a=r.next()).done);t=!0){var s=a.value;s.data&&this.stones.push({tile:s,data:s.data})}}catch(t){e=!0,i=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw i}}}},updateStones:function(){if(this.isMove&&this.game.moves.length){var t=this.game.moves[this.game.moves.length-1];this.stones.find(function(e){return e.tile===t[0]}).tile=t[1]}}}},o=i(65);var g=function(t){i(319)},m=Object(o.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{vertical:t.vertical,"read-only":!t.interactive},style:{width:t.size[t.vertical?1:0]+"px",height:t.size[t.vertical?0:1]+"px"}},[i("svg",{staticClass:"d-block",class:t.theme,attrs:{width:t.size[0],height:t.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("rect",{attrs:{x:t.margin/2+.5,y:t.margin/2+.5,width:t.size[0]-t.margin,height:t.size[1]-t.margin}}),t._v(" "),i("g",{attrs:{transform:"translate("+t.translate+")"}},[t._l(t.lines,function(e,a){return i("line",{key:a,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t._l(t.game.grid.tiles,function(e){return i("g",{key:e.key,attrs:{transform:"translate("+t.center(e)+")"}},[t.game.grid.irregular?i("path",t._g({staticClass:"tile",class:(a={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},a["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,a["value-"+(e.data||0)]=!0,a),attrs:{d:t.path(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null)):i("polygon",t._g({staticClass:"tile",class:(n={clickable:e.highlighted&&!t.waiting,possible:e.highlighted,odd:e.odd,animate:t.interactive,waiting:e.highlighted&&t.waiting},n["angle-"+Math.abs(t.game.grid.orientation*t.game.grid.angle)]=!0,n["value-"+(e.data||0)]=!0,n),attrs:{points:t.vertices||t.irregularVertices(e),transform:"rotate("+t.game.grid.orientation*t.game.grid.angle+")"}},t.interactive?{click:function(){return t.move(e)}}:null))]);var a,n}),t._v(" "),t._l(t.rulers,function(e,a){return i("line",{key:"r"+a,class:e[2]?"line-"+e[2]:"",attrs:{x1:t.center(e[0]).x,y1:t.center(e[0]).y,x2:t.center(e[1]).x,y2:t.center(e[1]).y}})}),t._v(" "),t.isMove?i("g",t._l(t.stones,function(e,a){return i("circle",t._g({key:"s"+a,staticClass:"stone",class:(n={animate:t.interactive,clickable:e.tile.highlighted&&!t.waiting},n["token-"+e.data]=!0,n),style:{transform:"translate("+t.center(e.tile,"px")+")"},attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e.tile)}}:null));var n})):i("g",t._l(t.game.grid.tiles,function(e){return i("g",{key:"c"+e.key,attrs:{transform:"translate("+t.center(e)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[e.data?i("circle",t._g({class:(a={animate:t.interactive,clickable:e.highlighted&&!t.waiting},a["token-"+e.data]=!0,a),attrs:{r:t.game.grid.radius*t.game.grid.scale*.85-2*t.round,cx:"0",cy:"0"}},t.interactive?{click:function(){return t.move(e)}}:null)):t._e()])],1);var a})),t._v(" "),t.winning?i("g-poly-line",{attrs:{tiles:t.winning,center:t.center,size:t.game.grid.scale,delay:200}}):t._e()],2)])])},[],!1,g,"data-v-76762a5c",null);e.default=m.exports},318:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"circle.animate[data-v-76762a5c],polygon.animate[data-v-76762a5c]{transition:fill .2s ease-in-out}.stone.animate[data-v-76762a5c]{transition:all .2s ease-in-out}.vertical[data-v-76762a5c]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-76762a5c]{transform:scale(0)}circle.scale-transition-enter-active[data-v-76762a5c]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-76762a5c]{transform:scale(1)}.clickable[data-v-76762a5c]:hover{cursor:pointer}.read-only[data-v-76762a5c]{pointer-events:none}",""])},319:function(t,e,i){var a=i(318);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(108).default)("002e112b",a,!0,{})}}]);