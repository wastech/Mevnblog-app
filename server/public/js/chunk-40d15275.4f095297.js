(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d15275"],{"4de7":function(a,t,s){"use strict";s.r(t);var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},a._l(a.articles.slice().reverse(),(function(t){return s("div",{key:t.id,staticClass:"col-sm-3"},[s("div",{staticClass:"card mt-3"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"article.image"}],staticClass:"card-img-top",attrs:{alt:"..."}}),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[a._v(a._s(t.title))]),s("router-link",{staticClass:"readMore",attrs:{to:{name:"viewpost",params:{title:t._id}}}},[s("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[a._v("continue reading...")])])],1)])])})),0),a._m(0)])},e=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[s("span",{attrs:{"aria-hidden":"true"}},[a._v("«")]),s("span",{staticClass:"sr-only"},[a._v("Previous")])])]),s("li",{staticClass:"page-item active"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v("1")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v("2")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v("3")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[s("span",{attrs:{"aria-hidden":"true"}},[a._v("»")]),s("span",{staticClass:"sr-only"},[a._v("Next")])])])])])}],r=s("bc3a"),l=s.n(r),n={data:function(){return{articles:[]}},mounted:function(){var a=this,t="api/article/get_articles";l.a.get(t).then((function(t){a.articles=t.data.data}))}},c=n,o=(s("c69d"),s("2877")),u=Object(o["a"])(c,i,e,!1,null,"fb49bfa6",null);t["default"]=u.exports},"8cab":function(a,t,s){},c69d:function(a,t,s){"use strict";var i=s("8cab"),e=s.n(i);e.a}}]);
//# sourceMappingURL=chunk-40d15275.4f095297.js.map