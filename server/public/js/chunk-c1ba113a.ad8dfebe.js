(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1ba113a"],{a4fd:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",[a("div",[a("h2",[e._v(e._s(e.item.title))]),a("h4",[e._v(" posted by "),a("span",[e._v(e._s(e.item.author)+" ")]),e._v(" "),a("i",[e._v("on "+e._s(e.item.createdAt))])]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.item.image,expression:"item.image"}]}),a("h5",[e._v(e._s(e.item.category))]),a("p",{domProps:{innerHTML:e._s(e.item.description)}})])]),a("RelatedBlo",{attrs:{category:e.item.category}}),a("comment"),a("replied")],1)])},n=[],r=a("bc3a"),s=a.n(r),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("h1",[e._v("related post")]),a("div",{staticClass:"row"},e._l(e.items.slice(0,3).reverse(),(function(t){return a("div",{key:t._id,staticClass:"col-sm-4"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}]}),a("h4",[e._v(e._s(t.category))]),a("h3",[e._v(e._s(t.title))]),a("router-link",{staticClass:"readMore",attrs:{to:{name:"viewevent",params:{title:t._id}}}},[a("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[e._v("continue reading...")])])],1)})),0)])])},o=[],l=(a("96cf"),a("1da1")),d={props:{category:String},data:function(){return{items:[]}},watch:{$props:{handler:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("newProps.category",t.category),e.next=3,s.a.get("/api/blogpost/get_blog_by_category/".concat(t.category));case 3:a=e.sent,this.items=a.data.data,console.log(a);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deep:!0}}},u=d,m=(a("c7ec"),a("2877")),p=Object(m["a"])(u,c,o,!1,null,"711aaef0",null),v=p.exports,g=a("b2e5"),f=a("652a"),_=a("083f"),h={name:"viewblog",components:{RelatedBlo:v,Newsletter:g["a"],comment:f["a"],replied:_["a"]},data:function(){return{item:{},id:this.$route.params.title}},created:function(){var e=this,t="/api/blogpost/get_blog/".concat(this.id);s.a.get(t).then((function(t){e.item=t.data.data}))}},b=h,y=(a("dd3e"),Object(m["a"])(b,i,n,!1,null,"5fe6e09c",null));t["default"]=y.exports},bff5:function(e,t,a){},c7ec:function(e,t,a){"use strict";var i=a("bff5"),n=a.n(i);n.a},d663:function(e,t,a){},dd3e:function(e,t,a){"use strict";var i=a("d663"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-c1ba113a.ad8dfebe.js.map