webpackJsonp([1],{B3Fg:function(t,s){},Bjvs:function(t,s){},JQAz:function(t,s){},LRrv:function(t,s){},Mjt3:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fold"}},[s("router-view",{staticClass:"view"})],1),this._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:this.isMaskShow,expression:"isMaskShow"}],staticClass:"mask",on:{touchmove:function(t){t.preventDefault()}}},[s("span",{staticClass:"mask-text"},[this._v("Loading ...")])])],1)},staticRenderFns:[]},i=e("VU/8")({computed:{isMaskShow:function(){return this.$store.state.isMaskShow}}},n,!1,function(t){e("RaL4")},"data-v-3556533a",null).exports,o=e("/ocq"),c={data:function(){return{name:"",avater:""}},props:{user:Object},created:function(){this.getUserData()},computed:{soId:function(){return this.$store.state.id}},methods:{getUserData:function(){var t=this;this.$http.get("/userData.json").then(function(s){console.log(s),console.log("成功"),t.name=s.data.name,t.avater=s.data.avater},function(t){console.log(t),console.log("失败")})}}},r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:this.avater,alt:"",width:"35",height:"35"}})]),this._v(" "),s("div",{staticClass:"soNum"},[this._v("\n\t\t"+this._s(this.soId)+"\n\t")]),this._v(" "),s("router-link",{staticClass:"search",attrs:{to:"/Search"}},[s("i",{staticClass:"netappIcon icon-search"})])],1)},staticRenderFns:[]},l=e("VU/8")(c,r,!1,function(t){e("Mjt3")},"data-v-6c46093b",null).exports,u=e("porf"),d=e.n(u),v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{to:"/ServiceDesc"}},[e("i",{staticClass:"netappIcon icon-tab-list-1"}),t._v(" "),e("p",[t._v("Service Desc")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:"/ETAOnsite"}},[e("i",{staticClass:"netappIcon icon-tab-check"}),t._v(" "),e("p",[t._v("ETA/Onsite")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:"/RepairInfo"}},[e("i",{staticClass:"netappIcon icon-tab-edit"}),t._v(" "),e("p",[t._v("Repair Info")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:"/Complete"}},[e("i",{staticClass:"netappIcon icon-tab-list-2"}),t._v(" "),e("p",[t._v("Complete")])])],1)},staticRenderFns:[]},h=function(t){e("s8CV")},p={data:function(){return{}},created:function(){this.getSoData()},methods:{getSoData:function(){var t=this,s=this.$store.state.id,e=localStorage.id;s!=e&&void 0!=e&&this.$http.get("/soData.json").then(function(s){var a=s.data.so.filter(function(t){return t.soNo.includes(e)})[0];t.$store.state.id=e,t.$store.state.soData=a,t.$store.state.isInfo=!0,console.log("get")}).catch(function(t){console.log(t)})}},components:{vHeader:l,vTab:e("VU/8")(d.a,v,!1,h,"data-v-7c059608",null).exports}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main"},[s("vHeader"),this._v(" "),s("router-view",{staticClass:"container"}),this._v(" "),s("vTab")],1)},staticRenderFns:[]},m=e("VU/8")(p,f,!1,function(t){e("ytJn")},"data-v-51f366c0",null).exports,_=e("Dd8w"),C=e.n(_),g=e("NYxO"),D={data:function(){return{filter:["soNo","contactPerson","customer","address"]}},computed:C()({},Object(g.b)({soData:function(t){return t.soData}}),{isInfo:function(){return console.log(this.$store.state.isInfo),this.$store.state.isInfo}}),methods:{soDataFilter:function(t){return this.filter.every(function(s){return!(t==s)})}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"service-container"},[t.isInfo?e("div",[e("div",{staticClass:"customer-top"},[e("div",{staticClass:"customer-soId"},[t._v("\n\t\t    \t\t"+t._s(t.soData.soNo)+"\n\t\t    \t")]),t._v(" "),e("div",{staticClass:"customer-nameMain"},[e("div",{staticClass:"name"},[t._v(t._s(t.soData.contactPerson))]),t._v(" "),e("div",{staticClass:"code"},[t._v(t._s(t.soData.customer))])]),t._v(" "),e("router-link",{staticClass:"customer-address",attrs:{to:"/Map"}},[e("div",{staticClass:"text"},[t._v("\n\t\t    \t\t\t"+t._s(t.soData.address)+"\n\t\t    \t\t")]),t._v(" "),e("i",{staticClass:"netappIcon icon-greater-than"})])],1),t._v(" "),e("div",{staticClass:"hr"}),t._v(" "),e("div",{staticClass:"customer-info"},t._l(t.soData,function(s,a){return t.soDataFilter(a)?e("div",{staticClass:"info-main"},[e("div",{staticClass:"key"},[t._v(t._s(a))]),t._v(" "),e("div",{staticClass:"value"},[t._v(t._s(s))])]):t._e()}))]):t._e()])},staticRenderFns:[]},S=e("VU/8")(D,b,!1,function(t){e("JQAz")},"data-v-be016fb4",null).exports,k=e("T4PD"),w=e.n(k),I={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("ETA/Onsite")])},staticRenderFns:[]},$=function(t){e("Zukw")},x=e("VU/8")(w.a,I,!1,$,null,null).exports,M=e("zTPO"),R=e.n(M),A={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Repair Info")])},staticRenderFns:[]},E=function(t){e("Bjvs")},F=e("VU/8")(R.a,A,!1,E,null,null).exports,T=e("ZeHC"),U=e.n(T),O={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Complete")])},staticRenderFns:[]},V=function(t){e("tAhj")},j=e("VU/8")(U.a,O,!1,V,null,null).exports,P={data:function(){return{title:"查询列表",search:"",listDatas:[]}},created:function(){this.getListData()},computed:{searchData:function(){var t=this;return this.search?this.listDatas.filter(function(s){return s.number.toLowerCase().includes(t.search)}):this.listDatas}},methods:{getListData:function(){var t=this;this.$http.get("/listData.json").then(function(s){t.listDatas=s.data.list},function(t){console.log(t)})},getSoId:function(t){localStorage.id=t,this.$router.push({path:"/ServiceDesc"})},back:function(){this.$router.go(-1)}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search-container"},[e("div",{staticClass:"search-header"},[e("div",{staticClass:"left",on:{click:t.back}},[e("i",{staticClass:"netappIcon icon-left"})]),t._v(" "),e("div",{staticClass:"title"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"right"})]),t._v(" "),e("div",{staticClass:"search-main"},[e("i",{staticClass:"netappIcon icon-search"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search-text",attrs:{type:"text",placeholder:"请输入Vendor No."},domProps:{value:t.search},on:{input:function(s){s.target.composing||(t.search=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"list-main"},t._l(t.searchData,function(s){return e("div",{staticClass:"list-content clearfix",on:{click:function(e){t.getSoId(s.number)}}},[e("div",{staticClass:"list-number"},[t._v(t._s(s.number))]),t._v(" "),e("div",{staticClass:"list-user"},[t._v(t._s(s.user))]),t._v(" "),e("div",{staticClass:"list-map"},[t._v(t._s(s.map))])])}))])},staticRenderFns:[]},B=e("VU/8")(P,y,!1,function(t){e("LRrv")},"data-v-e973baac",null).exports,N=e("//Fk"),L=e.n(N),H={data:function(){return{title:"地图",address:" ",distance:" "}},computed:{},created:function(){this.map(),this.saveAddress()},beforeDestroy:function(){this.removeAddress()},methods:{back:function(){this.$router.go(-1)},saveAddress:function(){localStorage.address||(localStorage.address=this.$store.state.soData.address),this.address=localStorage.address},removeAddress:function(){localStorage.removeItem("address")},map:function(){var t=this,s=this;this.$nextTick(function(){console.log(t.address);var e=new BMap.Map("allmap",{enableMapClick:!1}),a=new BMap.Point(116.331398,39.897445);e.centerAndZoom(a,12),e.enableScrollWheelZoom(!0);var n,i,o=new BMap.Geolocation,c=new BMap.Geocoder;L.a.all([new L.a(function(t,a){c.getPoint(s.address,function(s){s?(e.centerAndZoom(s,16),e.addOverlay(new BMap.Marker(s)),i=s,t()):alert("没有搜索到结果!")})}),new L.a(function(t,s){o.getCurrentPosition(function(s){this.getStatus()==BMAP_STATUS_SUCCESS?(n=s.point,t()):n=!1},{enableHighAccuracy:!0})})]).then(function(){n&&i&&(s.distance=e.getDistance(n,i).toFixed(0)/1e3+"KM")}),setTimeout(function(){console.log(i),console.log(n)},3e3)})}}},Z={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"map-container"},[s("div",{staticClass:"map-header"},[s("div",{staticClass:"left",on:{click:this.back}},[s("i",{staticClass:"netappIcon icon-left"})]),this._v(" "),s("div",{staticClass:"title"},[this._v("\n            "+this._s(this.title)+"\n        ")]),this._v(" "),s("div",{staticClass:"right"})]),this._v(" "),s("div",{staticClass:"map",attrs:{id:"allmap"}}),this._v(" "),s("div",{staticClass:"map-info"},[s("div",{staticClass:"address valignCenter"},[s("i",{staticClass:"netappIcon icon-mappin"}),this._v(this._s(this.address)+"\n         ")]),this._v(" "),s("div",{staticClass:"distance"},[s("i",{staticClass:"netappIcon icon-cc-location"}),this._v(this._s(this.distance)+"\n         ")])])])},staticRenderFns:[]},J=e("VU/8")(H,Z,!1,function(t){e("B3Fg")},"data-v-c64d62c4",null).exports;a.a.use(o.a);var z=new o.a({linkExactActiveClass:"active",routes:[{path:"/",redirect:"/ServiceDesc"},{path:"/Home",name:"home",component:m,children:[{path:"/ServiceDesc",name:"ServiceDesc",component:S},{path:"/ETAOnsite",name:"ETAOnsite",component:x},{path:"/RepairInfo",name:"RepairInfo",component:F},{path:"/Complete",name:"Complete",component:j}]},{path:"/Search",name:"Search",component:B},{path:"/Map",name:"map",component:J}]});a.a.use(g.a);var W=new g.a.Store({state:{id:"请选择SO单",isMaskShow:!1,isInfo:!1,soData:{}}}),G=e("mtWM"),Q=e.n(G);e("gERx");a.a.prototype.$http=Q.a,a.a.prototype.$http.defaults.baseURL="https://abc62470.github.io/netapp/static/data",a.a.config.productionTip=!1;var q=new a.a({el:"#app",router:z,store:W,template:"<App/>",components:{App:i}});console.log(q)},RaL4:function(t,s){},T4PD:function(t,s){},ZeHC:function(t,s){},Zukw:function(t,s){},gERx:function(t,s){},porf:function(t,s){},s8CV:function(t,s){},tAhj:function(t,s){},ytJn:function(t,s){},zTPO:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.e668d55937c299bae64f.js.map