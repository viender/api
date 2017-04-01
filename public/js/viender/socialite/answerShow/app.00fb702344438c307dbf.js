!function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=265)}({0:function(t,e){t.exports=function(t,e,n,r){var s,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),r){var c=o.computed||(o.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:s,exports:i,options:o}}},1:function(t,e,n){"use strict";n.d(e,"g",function(){return r}),n.d(e,"h",function(){return s}),n.d(e,"i",function(){return i}),n.d(e,"j",function(){return u}),n.d(e,"k",function(){return o}),n.d(e,"l",function(){return c}),n.d(e,"m",function(){return a}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return p}),n.d(e,"a",function(){return _}),n.d(e,"b",function(){return E});var r="ADD_QUESTIONS",s="REMOVE_QUESTION",i="SET_AS_ANSWERED",u="SET_QUESTIONS_URL",o="INCREMENT_PAGE",c="UPDATE_REQUESTING",a="SET_SHOW_ANSWER_CREATE_MODAL",l="SET_EDITOR_CONTENT",f="UPDATE_EDITOR_CONTENT",d="SET_EDITOR_QUESTION",p="SET_EDITOR_ELEMENT",_="SET_SHOW_ANSWER_SHOW_MODAL",E="SET_SHOWED_ANSWER"},13:function(t,e,n){var r=n(0)(n(17),n(18),null,null);t.exports=r.exports},138:function(t,e){},139:function(t,e,n){"use strict";var r=n(6);new Vuex.Store({modules:Object.assign(r.a,{}),actions:n(9)})},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(1);e.default={props:["questionUrl"],data:function(){return{showModal:!1}},computed:{requesting:function(){return this.$store.state.questionList.requesting},questions:function(){return this.$store.state.questionList.questions},page:function(){return this.$store.state.questionList.page-1},totalPages:function(){return this.$store.state.questionList.totalPages}},mounted:function(){this.$store.dispatch("questionList/setQuestionUrl",this.questionUrl),this.fetchData()},methods:{fetchData:function(){this.$store.dispatch("questionList/fetchData")}}}},18:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._l(t.questions,function(t){return n("question",{attrs:{question:t}})}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.requesting,expression:"requesting"}],staticClass:"preloader preloader-wrapper small active"},[t._m(0)]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.requesting&&t.page<t.totalPages,expression:" ! requesting && page < totalPages"}],staticClass:"btn btn-default",staticStyle:{width:"100%","padding-left":"0"},on:{click:function(e){t.fetchData()}}},[t._v("Load more")]),t._v(" "),n("answer-create-modal")],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-layer spinner-blue-only"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),t._v(" "),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),t._v(" "),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])])}]}},184:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(139);n(138),Vue.component("question-list",n(13));new Vue({el:"#app"})},265:function(t,e,n){t.exports=n(184)},3:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return u});var r="SET_REQUESTING",s="SET_SHOW_PANEL",i="SET_SEARCH_TEXT",u="SET_SEARCH_RESULTS"},6:function(t,e,n){"use strict";var r=n(7);e.a={searchOrAskPanel:r.a}},7:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s,i=n(3);e.a={namespaced:!0,state:{requesting:!1,showPanel:!1,searchText:null,searchResults:[]},mutations:(s={},r(s,i.a,function(t,e){t.requesting=e}),r(s,i.b,function(t,e){document.getElementsByTagName("body")[0].style.overflow=e?"hidden":"scroll",t.showPanel=e}),r(s,i.c,function(t,e){t.searchText=e}),r(s,i.d,function(t,e){t.searchResults.searchResults}),s),actions:{}}},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}});