(function(t){function a(a){for(var s,o,l=a[0],r=a[1],c=a[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(a);while(m.length)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,l=1;l<e.length;l++){var r=e[l];0!==n[r]&&(s=!1)}s&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},i=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/TheF2E-Vue-NoteApp/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1:function(t,a){},4796:function(t,a,e){"use strict";var s=e("5c2b"),n=e.n(s);n.a},"4a69":function(t,a,e){"use strict";(function(t){a["a"]={name:"Collections",props:{msg:String},data:function(){return{value:!0,activeNames:["1","2"],newCollectionName:"",collectionDatas:[]}},methods:{changeTheme:function(){this.$store.commit("setTheme")},handleChange:function(t){console.log(t)},addCollection:function(){this.newCollectionName.trim()&&(this.collectionDatas.push({title:this.newCollectionName}),localStorage.setItem("collectionDatas",JSON.stringify(this.collectionDatas)),this.newCollectionName="",t("#modalCollection").modal("hide"))}}}}).call(this,e("1157"))},5531:function(t,a,e){"use strict";var s=e("b5f0"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],o=(e("5c0b"),e("2877")),l={},r=Object(o["a"])(l,n,i,!1,null,null,null),c=r.exports,d=e("5c96"),u=e.n(d),m=(e("0fae"),e("4989"),e("ab8b"),e("8c4f")),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home",class:{dark:"dark"===t.changeTheme}},[e("Collections"),e("NoteLists"),e("MarkDown")],1)},f=[],p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collections-container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[t._v("BLANK")]),e("el-switch",{attrs:{"active-color":"#FFFFFF","inactive-color":"#FFFFFF"},on:{change:t.changeTheme},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),e("div",{staticClass:"body"},[e("el-collapse",{on:{change:t.handleChange},model:{value:t.activeNames,callback:function(a){t.activeNames=a},expression:"activeNames"}},[e("el-collapse-item",{attrs:{title:"STARRED",name:"1"}},[e("a",{staticClass:"nav-item",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("star")]),t._v("\n          Note with star\n        ")]),e("a",{staticClass:"nav-item",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("star")]),t._v("\n          Note with star 2\n        ")]),e("a",{staticClass:"nav-item",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("star")]),t._v("\n          Note with star 3\n        ")])]),e("el-collapse-item",{attrs:{title:"COLLECTIONS",name:"2"}},[e("a",{staticClass:"nav-item",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("library_books")]),t._v("\n          Home\n        ")]),e("a",{staticClass:"nav-item",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("library_books")]),t._v("\n          Work\n        ")]),e("a",{staticClass:"nav-item active",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("library_books")]),t._v("\n          Project\n        ")])]),e("el-collapse-item",{attrs:{title:"TRASH",name:"3"}})],1)],1),t._m(0),e("div",{staticClass:"modal fade",attrs:{id:"modalCollection",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCollectionName,expression:"newCollectionName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Please enter a name"},domProps:{value:t.newCollectionName},on:{input:function(a){a.target.composing||(t.newCollectionName=a.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addCollection}},[t._v("Add")])])])])])])},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("button",{staticClass:"btn-new",attrs:{type:"button","data-toggle":"modal","data-target":"#modalCollection"}},[e("i",{staticClass:"material-icons"},[t._v("library_add")]),t._v("\n      NEW COLLECTION\n    ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("NEW COLLECTION")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],C=e("4a69"),b=C["a"],_=(e("bb74"),Object(o["a"])(b,p,h,!1,null,"42a08b48",null)),g=_.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lists-container"},[t._m(0),e("div",{staticClass:"body"},t._l(t.noteDatas,(function(a){return e("a",{key:a.id,staticClass:"item",attrs:{href:"javascript:;"}},[e("div",{staticClass:"title"},[e("h3",{staticClass:"name"},[t._v(" "+t._s(a.title)+" ")]),e("i",{staticClass:"material-icons starred",class:{active:a.isStarred}},[t._v("star")])]),e("p",{staticClass:"content"},[t._v("The note with a star would be organized to the category named “STARRED”.")])])})),0),t._m(1),e("div",{staticClass:"modal fade",attrs:{id:"modalNote",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newNoteName,expression:"newNoteName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Please enter a name"},domProps:{value:t.newNoteName},on:{input:function(a){a.target.composing||(t.newNoteName=a.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addNote}},[t._v("Add")])])])])])])},w=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticClass:"views"},[e("a",{staticClass:"btn btn-list",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("view_stream")])]),e("a",{staticClass:"btn btn-thumbnail disabled",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("view_comfy")])])]),e("div",{staticClass:"controls"},[e("a",{staticClass:"btn btn-delete",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("delete")])]),e("a",{staticClass:"btn btn-delete",attrs:{href:"javascript:;"}},[e("i",{staticClass:"material-icons"},[t._v("star")])]),e("a",{staticClass:"btn btn-delete",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#modalNote"}},[e("i",{staticClass:"material-icons"},[t._v("add")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"search"},[e("i",{staticClass:"material-icons"},[t._v("search")]),e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"SEARCH"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("NOTE TITLE")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],y=e("a4c3"),j=y["a"],O=(e("8811"),Object(o["a"])(j,N,w,!1,null,"1d3f86f7",null)),S=O.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"markdown-container"},[e("vue-simplemde",{ref:"markdownEditor",attrs:{highlight:!0,configs:t.configs},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1)},E=[],x=e("1487"),T=e.n(x),D=e("623c");window.hljs=T.a;var F={name:"MarkDown",components:{VueSimplemde:D["a"]},props:{msg:String},data:function(){return{content:"",configs:{toolbar:["bold","italic","heading","|","quote","unordered-list","ordered-list","|","link","image","|","preview"],spellChecker:!1}}}},$=F,L=(e("4796"),Object(o["a"])($,k,E,!1,null,"746d6ab6",null)),P=L.exports,A={name:"home",components:{Collections:g,NoteLists:S,MarkDown:P},data:function(){return{}},computed:{changeTheme:function(){return this.$store.state.theme}},methods:{}},I=A,M=(e("5531"),Object(o["a"])(I,v,f,!1,null,"3dc424e4",null)),R=M.exports;s["default"].use(m["a"]);var J=new m["a"]({mode:"history",base:"/TheF2E-Vue-NoteApp/",routes:[{path:"/",name:"home",component:R}]}),H=e("2f62");s["default"].use(H["a"]);var V=new H["a"].Store({state:{theme:"light"},mutations:{setTheme:function(t){"light"===t.theme?t.theme="dark":"dark"===t.theme&&(t.theme="light")}},actions:{}});s["default"].config.productionTip=!1,s["default"].use(u.a),new s["default"]({router:J,store:V,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("e332"),n=e.n(s);n.a},"5c2b":function(t,a,e){},"6d0d":function(t,a,e){},8811:function(t,a,e){"use strict";var s=e("6d0d"),n=e.n(s);n.a},a4c3:function(t,a,e){"use strict";(function(t){var e=[{title:"Test",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",isStarred:!0}];a["a"]={name:"NoteLists",props:{msg:String},data:function(){return{newNoteName:"",noteDatas:[],isStarred:!1}},created:function(){this.noteDatas=JSON.parse(localStorage.getItem("noteDatas"))||e},computed:{},methods:{addNote:function(){this.newNoteName.trim()&&(this.noteDatas.push({title:this.newNoteName,content:"",isStarred:!1}),localStorage.setItem("noteDatas",JSON.stringify(this.noteDatas)),this.newNoteName="",t("#modalNote").modal("hide"))}}}}).call(this,e("1157"))},b5f0:function(t,a,e){},bb74:function(t,a,e){"use strict";var s=e("c2a5"),n=e.n(s);n.a},c2a5:function(t,a,e){},e332:function(t,a,e){}});
//# sourceMappingURL=app.e92e0983.js.map