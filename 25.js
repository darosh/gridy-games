(self.webpackJsonp=self.webpackJsonp||[]).push([[25],{163:function(e,t,i){"use strict";i.r(t);var a=i(5),n=i(384),r=function(e,t,i){return(t[0]-e[0])*(i[1]-e[1])-(t[1]-e[1])*(i[0]-e[0])};function s(e,t){return e[0]-t[0]||e[1]-t[1]}function l(e){for(var t=e.length,i=[0,1],a=2,n=2;n<t;++n){for(;a>1&&r(e[i[a-2]],e[i[a-1]],e[n])<=0;)--a;i[a++]=n}return i.slice(0,a)}var o={props:{fixed:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},data:()=>({translate:[],size:[],hullPoints:"",resizing:!1}),methods:{frameUpdate(){if(!this.game||!this.frame||!this.margin)return;let e=this.rescaleToFrame();this.fixed?this.size=[e.maxX-e.minX+this.margin,this.frame[1]+this.margin]:this.size=[e.maxX-e.minX+this.margin,e.maxY-e.minY+this.margin],this.hullPoints=this.game.hull?function(e){if((i=e.length)<3)return null;var t,i,a=new Array(i),n=new Array(i);for(t=0;t<i;++t)a[t]=[+e[t][0],+e[t][1],t];for(a.sort(s),t=0;t<i;++t)n[t]=[a[t][0],-a[t][1]];var r=l(a),o=l(n),g=o[0]===r[0],d=o[o.length-1]===r[r.length-1],c=[];for(t=r.length-1;t>=0;--t)c.push(e[a[r[t]][2]]);for(t=+g;t<o.length-d;++t)c.push(e[a[o[t]][2]]);return c}(this.getHull()).map(e=>`${e[0].toFixed(3)} ${e[1].toFixed(3)}`).join(" "):"",this.translate=function(e,t){const i=Math.floor(e.maxX-e.minX)%2?0:.5,a=Math.floor(e.maxY-e.minY)%2?0:.5;return[((t[0]-e.minX-e.maxX)/2+i).toFixed(3),((t[1]-e.minY-e.maxY)/2+a).toFixed(3)]}(e,this.size)},path(e){return this.game.grid.path(e)},irregularVertices(e){return this.game.grid.path(e).map(e=>e.x.toFixed(3)+","+e.y.toFixed(3)).join(" ")},typedVertices(e){return this.game.grid.vertices(e,void 0,this.game.grid.getTileType(e)).map(e=>e.x.toFixed(3)+","+e.y.toFixed(3)).join(" ")},rescaleToFrame(){this.game.grid.scale=1;let e=this.game.grid.bounds(),t=Object(n.b)(e.maxX-e.minX,e.maxY-e.minY,this.frame[0],this.frame[1]);return!this.game.grid.irregular&&this.round?this.game.grid.scale=2*Math.floor(t/2):this.game.grid.scale=t,this.game.grid.bounds()},getHull(){const e=this.game.grid.vertices(this.game.grid.orientation);return this.game.grid.tiles.reduce((t,i)=>{const a=this.game.grid.center(i);for(const i of e)t.push([a.x+i.x,a.y+i.y]);return t},[])}},computed:{vertices(){return!this.game.grid.irregular&&this.game.grid.vertices(void 0,this.game.scale?2*Math.round(this.game.scale*this.game.grid.scale/2):this.game.grid.scale,1).map(e=>e.x.toFixed(3)+","+e.y.toFixed(3)).join(" ")},shift(){return(window.innerHeight-this.size[this.vertical?0:1])/2-64+10}},watch:{frame:{handler:function(){this.resizing=!0,this.frameUpdate(),a.a.nextTick(()=>{setTimeout(()=>{this.resizing=!1},200)})},immediate:!0}}};var g=i(360);let d=0;var c={components:{GPolyLine:()=>Promise.all([i.e(21),i.e(23)]).then(i.bind(null,614))},mixins:[o],model:{prop:"value",event:"change"},props:{game:{type:Object,required:!0},round:{type:Boolean,default:!0},interactive:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},waiting:{type:Boolean,default:!1},value:{type:Boolean,default:!1},coords:{type:Boolean,default:!1},frame:{type:Array,required:!0},margin:{type:Number,default:0},move:{type:Function,default:null}},data:()=>({winning:null,lines:null,dots:null,rulers:null,stones:null}),computed:{theme:function(){return Object(g.a)(this.game.constructor)},isMove:function(){return this.game.constructor.move}},watch:{game:{immediate:!0,handler:function(){this.lines=this.game.links?this.game.links():[],this.rulers=this.game.rulers?this.game.rulers():[],this.dots=this.game.dots?this.game.dots():[],this.initStones()}},"game.moves.length":function(e,t){e===t+1?this.animateStones():this.initStones()},"game.winner":{immediate:!0,handler(e){this.winning=e&&this.game.winning?this.game.winning():null}}},mounted(){this.$emit("change",!0)},methods:{center(e,t){return t?this.game.grid.center(e).value.map(e=>`${e.toFixed(3)}${t}`):this.game.grid.center(e)},initStones(){if(this.stones=[],this.isMove)for(const e of this.game.grid.tiles)e.data&&this.stones.push({tile:e,data:e.data,id:++d})},updateStones(){if(this.isMove&&this.game.moves.length){const e=this.game.moves[this.game.moves.length-1],t=e[0];let i=e[e.length-1];i=Array.isArray(i)?i[0]:i,this.stones.find(e=>e.tile===t).tile=i;for(let t=0;t<e.length;t++)if(Array.isArray(e[t])&&e[t][1]){const i=this.stones.findIndex(i=>i.tile===e[t][1]);this.stones.splice(i,1)}}},animateStones(){if(this.isMove&&this.game.moves.length){const e=this.game.moves[this.game.moves.length-1];if(!Array.isArray(e))return void this.stones.push({tile:e,data:e.data,id:++d});const t=e[0],i=this.stones.find(e=>e.tile===t);let a=1;const n=()=>{const t=e[a],r=Array.isArray(t)?t[0]:t;if(i.tile=r,Array.isArray(t)&&t[1]){const e=this.stones.findIndex(e=>e.tile===t[1]);this.stones.splice(e,1)}++a<e.length&&setTimeout(n,200)};n()}}}},m=i(91);var h=function(e){i(400)},u=Object(m.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{vertical:e.vertical,"read-only":!e.interactive},style:{width:e.size[e.vertical?1:0]+"px",height:e.size[e.vertical?0:1]+"px","margin-top":e.centered&&e.shift>0?e.shift+"px":""}},[i("svg",{staticClass:"d-block",class:e.theme,attrs:{width:e.size[0],height:e.size[1],xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e.hullPoints?i("polygon",{staticClass:"hull",attrs:{points:e.hullPoints,transform:"translate("+e.translate+")"}}):e._e(),e._v(" "),i("g",{attrs:{transform:"translate("+e.translate+")"}},[e._l(e.lines,function(t,a){return i("line",{key:a,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e._l(e.game.grid.tiles,function(t){return i("g",{key:t.key,attrs:{transform:"translate("+e.center(t)+")"}},[e.game.grid.irregular?i("path",e._g({staticClass:"tile",class:(a={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},a["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,a["value-"+(t.data||0)]=!0,a),attrs:{d:e.path(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null)):i("polygon",e._g({staticClass:"tile",class:(n={clickable:t.highlighted&&!e.waiting,possible:t.highlighted,odd:t.odd,animate:e.interactive,waiting:t.highlighted&&e.waiting},n["angle-"+Math.abs(e.game.grid.orientation*e.game.grid.angle)]=!0,n["value-"+(t.data||0)]=!0,n),attrs:{points:2===e.game.grid.tileTypes?e.typedVertices(t):e.vertices||e.irregularVertices(t),transform:"rotate("+e.game.grid.orientation*e.game.grid.angle+")"}},e.interactive?{click:function(){return e.move(t)}}:null))]);var a,n}),e._v(" "),e._l(e.rulers,function(t,a){return i("line",{key:"r"+a,class:t[2]?"line-"+t[2]:"",attrs:{x1:e.center(t[0]).x,y1:e.center(t[0]).y,x2:e.center(t[1]).x,y2:e.center(t[1]).y}})}),e._v(" "),e._l(e.dots,function(t){return i("g",{key:"dot"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[i("circle",{staticClass:"dot",staticStyle:{"pointer-events":"none"},attrs:{r:.085*e.game.grid.scale,cx:"0",cy:"0"}})])}),e._v(" "),e._l(e.game.grid.tiles,function(t){return i("g",{key:"text"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[e.coords?i("text",{attrs:{"font-size":.4*e.game.grid.scale,dy:.04*e.game.grid.scale,transform:e.vertical?"rotate(-90)":null,"alignment-baseline":"middle","text-anchor":"middle"}},[e._v("\n          "+e._s(e.game.moveToString(t))+" ")]):e._e()])}),e._v(" "),e.isMove?i("g",[i("transition-group",{attrs:{name:"remove",tag:"g"}},e._l(e.stones,function(t){return i("g",{key:"s"+t.id},[i("circle",e._g({staticClass:"stone",class:(a={animate:e.interactive&&!e.resizing,clickable:t.tile.highlighted&&!e.waiting},a["token-"+t.data]=!0,a),style:{transform:"translate("+e.center(t.tile,"px")+")"},attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t.tile)}}:null))]);var a}))],1):i("g",e._l(e.game.grid.tiles,function(t){return i("g",{key:"c"+t.key,attrs:{transform:"translate("+e.center(t)+")"}},[i("transition",{attrs:{name:"scale-transition"}},[t.data?i("circle",e._g({class:(a={animate:e.interactive,clickable:t.highlighted&&!e.waiting},a["token-"+t.data]=!0,a),attrs:{r:e.game.grid.radius*e.game.grid.scale*.85-2*e.round,cx:"0",cy:"0"}},e.interactive?{click:function(){return e.move(t)}}:null)):e._e()])],1);var a})),e._v(" "),e.winning?i("g-poly-line",{class:"winner-"+e.game.winner,style:{"stroke-width":Math.round(.5*(e.game.grid.radius*e.game.grid.scale*.85-2*e.round))},attrs:{tiles:e.winning,center:e.center,size:e.game.grid.scale,delay:200}}):e._e()],2)])])},[],!1,h,"data-v-3be1d1d7",null);t.default=u.exports},399:function(e,t,i){(e.exports=i(1)(!1)).push([e.i,"circle.animate[data-v-3be1d1d7],polygon.animate[data-v-3be1d1d7]{transition:fill .2s ease-in-out,stroke .2s ease-in-out,stroke-width .2s ease-in-out}.stone.animate[data-v-3be1d1d7]{transition:all .2s ease-in-out}.vertical[data-v-3be1d1d7]{transform-origin:100% 0;transform:rotate(90deg) translateX(100%)}circle.scale-transition-enter[data-v-3be1d1d7]{transform:scale(0)}circle.scale-transition-enter-active[data-v-3be1d1d7]{transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}circle.scale-transition-enter-to[data-v-3be1d1d7]{transform:scale(1)}.remove-leave-active[data-v-3be1d1d7]{transition:opacity .4s ease-out!important}.remove-leave-to[data-v-3be1d1d7]{opacity:0}.remove-leave[data-v-3be1d1d7]{opacity:1}.clickable[data-v-3be1d1d7]:hover{cursor:pointer}.read-only[data-v-3be1d1d7]{pointer-events:none;touch-action:none}",""])},400:function(e,t,i){var a=i(399);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(138).default)("2b34b20b",a,!0,{})}}]);