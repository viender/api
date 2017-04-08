!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=277)}({0:function(e,t){e.exports=function(e,t,n,i){var s,o=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(s=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),i){var c=u.computed||(u.computed={});Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}})}return{esModule:s,exports:o,options:u}}},1:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"j",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return u}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return a}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return f}),n.d(t,"i",function(){return d});var i="SET_REQUESTING",s="SET_SHOW_PANEL",o="SET_SHOW",r="SET_SEARCH_TEXT",u="SET_SEARCH_RESULTS",c="SET_SHOW_MORE_FIELDS",a="TOGGLE_SHOW_MORE_FIELDS",l="ADD_TO_SELECTED_TOPICS",f="REMOVE_FROM_SELECTED_TOPICS",d="SET_QUESTION_DETAIL"},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},115:function(e,t){},116:function(e,t,n){"use strict";var i=n(5);new Vuex.Store({modules:Object.assign(i.a,{}),actions:n(11)})},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(116);n(115),Vue.component("question-list",n(25));new Vue({el:"#app"})},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2);t.default={props:["questionUrl"],data:function(){return{showModal:!1}},computed:{requesting:function(){return this.$store.state.questionList.requesting},questions:function(){return this.$store.state.questionList.questions},page:function(){return this.$store.state.questionList.page-1},totalPages:function(){return this.$store.state.questionList.totalPages}},mounted:function(){this.$store.dispatch("questionList/setQuestionUrl",this.questionUrl),this.fetchData()},methods:{fetchData:function(){this.$store.dispatch("questionList/fetchData")}}}},2:function(e,t,n){"use strict";n.d(t,"g",function(){return i}),n.d(t,"h",function(){return s}),n.d(t,"i",function(){return o}),n.d(t,"j",function(){return r}),n.d(t,"k",function(){return u}),n.d(t,"l",function(){return c}),n.d(t,"m",function(){return a}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return p}),n.d(t,"a",function(){return h}),n.d(t,"b",function(){return E});var i="ADD_QUESTIONS",s="REMOVE_QUESTION",o="SET_AS_ANSWERED",r="SET_QUESTIONS_URL",u="INCREMENT_PAGE",c="UPDATE_REQUESTING",a="SET_SHOW_ANSWER_CREATE_MODAL",l="SET_EDITOR_CONTENT",f="UPDATE_EDITOR_CONTENT",d="SET_EDITOR_QUESTION",p="SET_EDITOR_ELEMENT",h="SET_SHOW_ANSWER_SHOW_MODAL",E="SET_SHOWED_ANSWER"},25:function(e,t,n){var i=n(0)(n(19),n(30),null,null);e.exports=i.exports},277:function(e,t,n){e.exports=n(152)},30:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._l(e.questions,function(e){return n("question",{attrs:{question:e}})}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.requesting,expression:"requesting"}],staticClass:"preloader preloader-wrapper small active"},[e._m(0)]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.requesting&&e.page<e.totalPages,expression:" ! requesting && page < totalPages"}],staticClass:"btn btn-default",staticStyle:{width:"100%","padding-left":"0"},on:{click:function(t){e.fetchData()}}},[e._v("Load more")]),e._v(" "),n("answer-create-modal")],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-layer spinner-blue-only"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),e._v(" "),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),e._v(" "),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])])}]}},5:function(e,t,n){"use strict";var i=n(7),s=n(6),o=n(8);t.a={searchOrAskPanel:i.a,searchOrAskOverlay:s.a,topicRecommendation:o.a}},6:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s,o=n(1);t.a={namespaced:!0,state:{requesting:!1,show:!1,searchText:null,questionDetail:null,searchResults:[],showMoreFields:!1,selectedTopics:[],postQuestionUrl:Vue.prototype.$viender.helpers.api("/questions")},mutations:(s={},i(s,o.a,function(e,t){e.requesting=t}),i(s,o.b,function(e,t){document.getElementsByTagName("body")[0].style.overflowY=t?"hidden":"auto",e.show=t}),i(s,o.c,function(e,t){e.searchText=t}),i(s,o.d,function(e,t){e.searchResults.searchResults}),i(s,o.g,function(e,t){e.showMoreFields=t}),i(s,o.h,function(e){e.showMoreFields=!e.showMoreFields}),i(s,o.e,function(e,t){e.selectedTopics.push(t)}),i(s,o.f,function(e,t){e.selectedTopics=e.selectedTopics.filter(function(e){return e.id!==t.id})}),i(s,o.i,function(e,t){e.questionDetail=t}),s),actions:{postQuestion:function(e){var t=e.state,n=e.commit;t.requesting||(n(o.a,!0),axios.post(t.postQuestionUrl,{title:t.searchText,body:t.questionDetail,topics:t.selectedTopics}).then(function(e){document.location=Vue.prototype.$viender.helpers.getUrl("self_html",e.data),n(o.a,!1)}).catch(function(e){n(o.a,!1)}))}}}},7:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s,o=n(1);t.a={namespaced:!0,state:{requesting:!1,showPanel:!1,searchText:null,searchResults:[],showMoreFields:!1,selectedTopics:[]},mutations:(s={},i(s,o.a,function(e,t){e.requesting=t}),i(s,o.j,function(e,t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"scroll",e.showPanel=t}),i(s,o.c,function(e,t){e.searchText=t}),i(s,o.d,function(e,t){e.searchResults.searchResults}),i(s,o.g,function(e,t){e.showMoreFields=t}),i(s,o.e,function(e,t){e.selectedTopics.push(t)}),i(s,o.f,function(e,t){e.selectedTopics=e.selectedTopics.filter(function(e){return e.id!==t.id})}),s),actions:{}}},8:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s,o=n(1);t.a={namespaced:!0,state:{requesting:!1,show:!1,searchText:null,searchResults:[],selectedTopics:[],url:Vue.prototype.$viender.helpers.api("topics")},mutations:(s={},i(s,o.a,function(e,t){e.requesting=t}),i(s,o.b,function(e,t){e.show=t}),i(s,o.c,function(e,t){e.searchText=t}),i(s,o.d,function(e,t){e.searchResults=t}),i(s,o.e,function(e,t){e.selectedTopics.push(t)}),i(s,o.f,function(e,t){e.selectedTopics=e.selectedTopics.filter(function(e){return e.id!==t.id})}),s),actions:{showTopicRecommendations:function(e){var t=(e.state,e.commit);setTimeout(function(){t(o.b,!0)},100)},hideTopicRecommendations:function(e){var t=(e.state,e.commit);setTimeout(function(){t(o.b,!1)},200)}}}}});