(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"041e":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"list"},t._l(t.list,(function(n){return e("v-uni-text",[t._v(t._s(n.title))])})),1)],1)},o=[]},"34d3":function(t,n,e){"use strict";e.r(n);var i=e("bf2a"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"63e9":function(t,n,e){var i=e("98c2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("d98b3156",i,!0,{sourceMap:!1,shadowMode:!1})},8565:function(t,n,e){"use strict";var i=e("63e9"),a=e.n(i);a.a},"98c2":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".container[data-v-3015985e]{font-size:%?28?%}.list uni-text[data-v-3015985e]{display:block;padding:10px;border-bottom:1px solid #eee}",""]),t.exports=n},"9bc4":function(t,n,e){"use strict";e.r(n);var i=e("041e"),a=e("34d3");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("8565");var s,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3015985e",null,!1,i["a"],s);n["default"]=r.exports},bf2a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=1,a={data:function(){return{list:[]}},methods:{getData:function(t){var n=this;uni.showLoading({title:"加载中"}),uni.request({url:"http://jsonplaceholder.typicode.com/posts",data:{_page:t,_limit:20},success:function(t){if(uni.hideLoading(),console.log(t),t.data.length>0)for(var e=0;e<t.data.length;e++)n.list.push(t.data[e]);else uni.showToast({title:"已加载全部",icon:"none"})}})}},onLoad:function(){this.getData(i)},onReachBottom:function(){i++,this.getData(i)},onPullDownRefresh:function(){i=1,this.list=[],uni.stopPullDownRefresh(),this.getData(i)}};n.default=a}}]);