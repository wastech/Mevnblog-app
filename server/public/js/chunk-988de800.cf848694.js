(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-988de800"],{"26d7":function(t,e,o){},"777f":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h4",[t._v("Article a New Event")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("form",[o("div",{staticClass:"form-group required"},[o("label",{staticClass:"control-label",attrs:{for:""}},[t._v("author")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.author,expression:"post.author"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"textHelp",placeholder:"author name"},domProps:{value:t.post.author},on:{input:function(e){e.target.composing||t.$set(t.post,"author",e.target.value)}}})]),o("div",{staticClass:"form-group required"},[o("label",{staticClass:"control-label",attrs:{for:"exampleInputPassword1"}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"title goes here"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),o("div",{staticClass:"form-group required mt-2"},[o("label",{staticClass:"control-label",attrs:{for:"exampleInputPassword1"}},[t._v("category")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.category,expression:"post.category"}],staticClass:"form-control",attrs:{type:"text",placeholder:"category of the post"},domProps:{value:t.post.category},on:{input:function(e){e.target.composing||t.$set(t.post,"category",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputFile"}},[t._v("image")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.image,expression:"post.image"}],staticClass:"form-control-file",attrs:{type:"text",id:"exampleInputFile","aria-describedby":"fileHelp"},domProps:{value:t.post.image},on:{input:function(e){e.target.composing||t.$set(t.post,"image",e.target.value)}}})]),o("wysiwyg",{model:{value:t.post.description,callback:function(e){t.$set(t.post,"description",e)},expression:"post.description"}}),o("button",{staticClass:"btn btn-primary btn-lg btn-block mt-5",attrs:{type:"button"},on:{click:t.addPost}},[t._v("submit")])],1)])])])},s=[],r=o("bc3a"),i=o.n(r),l={data:function(){return{post:{}}},methods:{addPost:function(){var t="api/eventroute/event/";i.a.post(t,this.post).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},n=l,c=(o("bfc0"),o("2877")),p=Object(c["a"])(n,a,s,!1,null,"337cb0a0",null);e["default"]=p.exports},bfc0:function(t,e,o){"use strict";var a=o("26d7"),s=o.n(a);s.a}}]);
//# sourceMappingURL=chunk-988de800.cf848694.js.map