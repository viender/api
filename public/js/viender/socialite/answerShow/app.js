/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 277);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_SHOW_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_SEARCH_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_SHOW_MORE_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TOGGLE_SHOW_MORE_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_TO_SELECTED_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_FROM_SELECTED_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_QUESTION_DETAIL; });
// searchOrAskPanel
var SET_REQUESTING = 'SET_REQUESTING';
var SET_SHOW_PANEL = 'SET_SHOW_PANEL';
var SET_SHOW = 'SET_SHOW';
var SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
var SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
var SET_SHOW_MORE_FIELDS = 'SET_SHOW_MORE_FIELDS';
var TOGGLE_SHOW_MORE_FIELDS = 'TOGGLE_SHOW_MORE_FIELDS';
var ADD_TO_SELECTED_TOPICS = 'ADD_TO_SELECTED_TOPICS';
var REMOVE_FROM_SELECTED_TOPICS = 'REMOVE_FROM_SELECTED_TOPICS';
var SET_QUESTION_DETAIL = 'SET_QUESTION_DETAIL';

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = {};

/***/ }),

/***/ 115:
/***/ (function(module, exports) {



/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);


/* unused harmony default export */ var _unused_webpack_default_export = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {}),

  actions: __webpack_require__(11)
});

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(116);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(115);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('question-list', __webpack_require__(25));

var feed = new Vue({
  el: '#app'
});

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    props: ['questionUrl'],

    data: function data() {
        return {
            showModal: false
        };
    },


    computed: {
        requesting: function requesting() {
            return this.$store.state.questionList.requesting;
        },
        questions: function questions() {
            return this.$store.state.questionList.questions;
        },
        page: function page() {
            return this.$store.state.questionList.page - 1;
        },
        totalPages: function totalPages() {
            return this.$store.state.questionList.totalPages;
        }
    },

    mounted: function mounted() {
        this.$store.dispatch('questionList/setQuestionUrl', this.questionUrl);
        this.fetchData();
    },


    methods: {
        fetchData: function fetchData() {
            this.$store.dispatch('questionList/fetchData');
        }
    }
};

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_QUESTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REMOVE_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_AS_ANSWERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_QUESTIONS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INCREMENT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UPDATE_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_SHOW_ANSWER_CREATE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_EDITOR_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_EDITOR_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_EDITOR_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_EDITOR_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_SHOW_ANSWER_SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_SHOWED_ANSWER; });
// questionList
var ADD_QUESTIONS = 'ADD_QUESTIONS';
var REMOVE_QUESTION = 'REMOVE_QUESTION';
var SET_AS_ANSWERED = 'SET_AS_ANSWERED';
var SET_QUESTIONS_URL = 'SET_QUESTIONS_URL';
var INCREMENT_PAGE = 'INCREMENT_PAGE';
var UPDATE_REQUESTING = 'UPDATE_REQUESTING';
var SET_SHOW_ANSWER_CREATE_MODAL = 'SET_SHOW_ANSWER_CREATE_MODAL';

// editor
var SET_EDITOR_CONTENT = 'SET_EDITOR_CONTENT';
var UPDATE_EDITOR_CONTENT = 'UPDATE_EDITOR_CONTENT';
var SET_EDITOR_QUESTION = 'SET_EDITOR_QUESTION';
var SET_EDITOR_ELEMENT = 'SET_EDITOR_ELEMENT';

// feed
var SET_SHOW_ANSWER_SHOW_MODAL = 'SET_SHOW_ANSWER_SHOW_MODAL';
var SET_SHOWED_ANSWER = 'SET_SHOWED_ANSWER';

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(30),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/question-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] question-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c83cb79a", Component.options)
  } else {
    hotAPI.reload("data-v-c83cb79a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_vm._l((_vm.questions), function(question) {
    return _c('question', {
      attrs: {
        "question": question
      }
    })
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.requesting),
      expression: "requesting"
    }],
    staticClass: "preloader preloader-wrapper small active"
  }, [_vm._m(0)]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.requesting && _vm.page < _vm.totalPages),
      expression: " ! requesting && page < totalPages"
    }],
    staticClass: "btn btn-default",
    staticStyle: {
      "width": "100%",
      "padding-left": "0"
    },
    on: {
      "click": function($event) {
        _vm.fetchData()
      }
    }
  }, [_vm._v("Load more")]), _vm._v(" "), _c('answer-create-modal')], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "spinner-layer spinner-blue-only"
  }, [_c('div', {
    staticClass: "circle-clipper left"
  }, [_c('div', {
    staticClass: "circle"
  })]), _vm._v(" "), _c('div', {
    staticClass: "gap-patch"
  }, [_c('div', {
    staticClass: "circle"
  })]), _vm._v(" "), _c('div', {
    staticClass: "circle-clipper right"
  }, [_c('div', {
    staticClass: "circle"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c83cb79a", module.exports)
  }
}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_searchOrAskPanel__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_searchOrAskOverlay__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_topicRecommendation__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = {
    searchOrAskPanel: __WEBPACK_IMPORTED_MODULE_0__modules_searchOrAskPanel__["a" /* default */],
    searchOrAskOverlay: __WEBPACK_IMPORTED_MODULE_1__modules_searchOrAskOverlay__["a" /* default */],
    topicRecommendation: __WEBPACK_IMPORTED_MODULE_2__modules_topicRecommendation__["a" /* default */]
};

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(1);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        requesting: false,
        show: false,
        searchText: null,
        questionDetail: null,
        searchResults: [],
        showMoreFields: false,
        selectedTopics: [],
        postQuestionUrl: Vue.prototype.$viender.helpers.api('/questions')
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_REQUESTING */], function (state, requesting) {
        state.requesting = requesting;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_SHOW */], function (state, show) {
        if (show) {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        } else {
            document.getElementsByTagName('body')[0].style.overflowY = 'auto';
        }

        state.show = show;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_SEARCH_TEXT */], function (state, searchText) {
        state.searchText = searchText;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* SET_SEARCH_RESULTS */], function (state, searchResults) {
        state.searchResults.searchResults;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* SET_SHOW_MORE_FIELDS */], function (state, showMoreFields) {
        state.showMoreFields = showMoreFields;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* TOGGLE_SHOW_MORE_FIELDS */], function (state) {
        state.showMoreFields = !state.showMoreFields;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* ADD_TO_SELECTED_TOPICS */], function (state, topic) {
        state.selectedTopics.push(topic);
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* REMOVE_FROM_SELECTED_TOPICS */], function (state, topic) {
        state.selectedTopics = state.selectedTopics.filter(function (selectedTopic) {
            return selectedTopic.id !== topic.id;
        });
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* SET_QUESTION_DETAIL */], function (state, questionDetail) {
        state.questionDetail = questionDetail;
    }), _mutations),

    actions: {
        postQuestion: function postQuestion(_ref) {
            var state = _ref.state,
                commit = _ref.commit;

            if (state.requesting) return;

            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_REQUESTING */], true);

            axios.post(state.postQuestionUrl, {
                title: state.searchText,
                body: state.questionDetail,
                topics: state.selectedTopics
            }).then(function (response) {
                document.location = Vue.prototype.$viender.helpers.getUrl('self_html', response.data);
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_REQUESTING */], false);
            }).catch(function (error) {
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_REQUESTING */], false);
            });
        }
    }
};

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(1);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        requesting: false,
        showPanel: false,
        searchText: null,
        searchResults: [],
        showMoreFields: false,
        selectedTopics: []
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_REQUESTING */], function (state, requesting) {
        state.requesting = requesting;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* SET_SHOW_PANEL */], function (state, showPanel) {
        if (showPanel) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        } else {
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }

        state.showPanel = showPanel;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_SEARCH_TEXT */], function (state, searchText) {
        state.searchText = searchText;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* SET_SEARCH_RESULTS */], function (state, searchResults) {
        state.searchResults.searchResults;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* SET_SHOW_MORE_FIELDS */], function (state, showMoreFields) {
        state.showMoreFields = showMoreFields;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* ADD_TO_SELECTED_TOPICS */], function (state, topic) {
        state.selectedTopics.push(topic);
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* REMOVE_FROM_SELECTED_TOPICS */], function (state, topic) {
        state.selectedTopics = state.selectedTopics.filter(function (selectedTopic) {
            return selectedTopic.id !== topic.id;
        });
    }), _mutations),

    actions: {}
};

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(1);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        requesting: false,
        show: false,
        searchText: null,
        searchResults: [],
        selectedTopics: [],
        url: Vue.prototype.$viender.helpers.api('topics')
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_REQUESTING */], function (state, requesting) {
        state.requesting = requesting;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_SHOW */], function (state, show) {
        state.show = show;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_SEARCH_TEXT */], function (state, searchText) {
        state.searchText = searchText;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* SET_SEARCH_RESULTS */], function (state, searchResults) {
        state.searchResults = searchResults;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* ADD_TO_SELECTED_TOPICS */], function (state, topic) {
        state.selectedTopics.push(topic);
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* REMOVE_FROM_SELECTED_TOPICS */], function (state, topic) {
        state.selectedTopics = state.selectedTopics.filter(function (selectedTopic) {
            return selectedTopic.id !== topic.id;
        });
    }), _mutations),

    actions: {
        showTopicRecommendations: function showTopicRecommendations(_ref) {
            var state = _ref.state,
                commit = _ref.commit;

            setTimeout(function () {
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_SHOW */], true);
            }, 100);
        },
        hideTopicRecommendations: function hideTopicRecommendations(_ref2) {
            var state = _ref2.state,
                commit = _ref2.commit;

            setTimeout(function () {
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_SHOW */], false);
            }, 200);
        }
    }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjA5ZTkwNmRiZDg3NTQ5NGNjYzc/MWM3ZCoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcz80YmRiKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanM/NjE2ZCoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvcGFnZXMvYW5zd2VyU2hvdy9hc3NldHMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL3BhZ2VzL2Fuc3dlclNob3cvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vcXVlc3Rpb24tbGlzdC52dWU/YmFlZSoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/MmJjNSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlP2QzOTEqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWU/MzI0NCoqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcz8zZjViKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcz9hZmFhKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanM/MDljNSoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzPzM2MjAqKioqKioqKioqKioqKioqKiJdLCJuYW1lcyI6WyJTRVRfUkVRVUVTVElORyIsIlNFVF9TSE9XX1BBTkVMIiwiU0VUX1NIT1ciLCJTRVRfU0VBUkNIX1RFWFQiLCJTRVRfU0VBUkNIX1JFU1VMVFMiLCJTRVRfU0hPV19NT1JFX0ZJRUxEUyIsIlRPR0dMRV9TSE9XX01PUkVfRklFTERTIiwiQUREX1RPX1NFTEVDVEVEX1RPUElDUyIsIlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyIsIlNFVF9RVUVTVElPTl9ERVRBSUwiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiYWN0aW9ucyIsInJlcXVpcmUiLCJWdWUiLCJjb21wb25lbnQiLCJmZWVkIiwiZWwiLCJBRERfUVVFU1RJT05TIiwiUkVNT1ZFX1FVRVNUSU9OIiwiU0VUX0FTX0FOU1dFUkVEIiwiU0VUX1FVRVNUSU9OU19VUkwiLCJJTkNSRU1FTlRfUEFHRSIsIlVQREFURV9SRVFVRVNUSU5HIiwiU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCIsIlNFVF9FRElUT1JfQ09OVEVOVCIsIlVQREFURV9FRElUT1JfQ09OVEVOVCIsIlNFVF9FRElUT1JfUVVFU1RJT04iLCJTRVRfRURJVE9SX0VMRU1FTlQiLCJTRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCIsIlNFVF9TSE9XRURfQU5TV0VSIiwic2VhcmNoT3JBc2tQYW5lbCIsInNlYXJjaE9yQXNrT3ZlcmxheSIsInRvcGljUmVjb21tZW5kYXRpb24iLCJuYW1lc3BhY2VkIiwic3RhdGUiLCJyZXF1ZXN0aW5nIiwic2hvdyIsInNlYXJjaFRleHQiLCJxdWVzdGlvbkRldGFpbCIsInNlYXJjaFJlc3VsdHMiLCJzaG93TW9yZUZpZWxkcyIsInNlbGVjdGVkVG9waWNzIiwicG9zdFF1ZXN0aW9uVXJsIiwicHJvdG90eXBlIiwiJHZpZW5kZXIiLCJoZWxwZXJzIiwiYXBpIiwibXV0YXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwib3ZlcmZsb3dZIiwidG9waWMiLCJwdXNoIiwiZmlsdGVyIiwic2VsZWN0ZWRUb3BpYyIsImlkIiwicG9zdFF1ZXN0aW9uIiwiY29tbWl0IiwiYXhpb3MiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidG9waWNzIiwidGhlbiIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJnZXRVcmwiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInNob3dQYW5lbCIsIm92ZXJmbG93IiwidXJsIiwic2hvd1RvcGljUmVjb21tZW5kYXRpb25zIiwic2V0VGltZW91dCIsImhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQ08sSUFBTUEsaUJBQWlCLGdCQUF2QjtBQUNBLElBQU1DLGlCQUFpQixnQkFBdkI7QUFDQSxJQUFNQyxXQUFXLFVBQWpCO0FBQ0EsSUFBTUMsa0JBQWtCLGlCQUF4QjtBQUNBLElBQU1DLHFCQUFxQixvQkFBM0I7QUFDQSxJQUFNQyx1QkFBdUIsc0JBQTdCO0FBQ0EsSUFBTUMsMEJBQTBCLHlCQUFoQztBQUNBLElBQU1DLHlCQUF5Qix3QkFBL0I7QUFDQSxJQUFNQyw4QkFBOEIsNkJBQXBDO0FBQ0EsSUFBTUMsc0JBQXNCLHFCQUE1QixDOzs7Ozs7Ozs7QUNWUCw4REFBZSxFQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQSx5RUFBZSxJQUFJQyxLQUFLQyxLQUFULENBQWU7QUFDNUJDLFdBQVNDLE9BQU9DLE1BQVAsQ0FBYyxpRkFBZCxFQUEyQixFQUEzQixDQURtQjs7QUFLNUJDLFdBQVMsbUJBQUFDLENBQVEsRUFBUjtBQUxtQixDQUFmLENBQWYsQzs7Ozs7Ozs7OztBQ0ZBOztBQUVBOzs7Ozs7QUFNQSxtQkFBQUEsQ0FBUSxHQUFSOztBQUVBOzs7Ozs7QUFNQUMsSUFBSUMsU0FBSixDQUFjLGVBQWQsRUFBK0IsbUJBQUFGLENBQVEsRUFBUixDQUEvQjs7QUFFQSxJQUFNRyxPQUFPLElBQUlGLEdBQUosQ0FBUTtBQUNqQkcsTUFBSTtBQURhLENBQVIsQ0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lBOztBQUVBO1lBR0E7OzBCQUNBOzt1QkFHQTtBQUZBO0FBSUE7Ozs7MENBRUE7a0RBQ0E7QUFFQTt3Q0FDQTtrREFDQTtBQUVBOzhCQUNBO3lEQUNBO0FBRUE7MENBQ0E7a0RBQ0E7QUFHQTtBQWpCQTs7Z0NBa0JBO2lFQUNBO2FBQ0E7QUFFQTs7Ozt3Q0FFQTtpQ0FDQTtBQUVBO0FBSkE7QUFoQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUNPLElBQU1DLGdCQUFnQixlQUF0QjtBQUNBLElBQU1DLGtCQUFrQixpQkFBeEI7QUFDQSxJQUFNQyxrQkFBa0IsaUJBQXhCO0FBQ0EsSUFBTUMsb0JBQW9CLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixnQkFBdkI7QUFDQSxJQUFNQyxvQkFBb0IsbUJBQTFCO0FBQ0EsSUFBTUMsK0JBQStCLDhCQUFyQzs7QUFFUDtBQUNPLElBQU1DLHFCQUFxQixvQkFBM0I7QUFDQSxJQUFNQyx3QkFBd0IsdUJBQTlCO0FBQ0EsSUFBTUMsc0JBQXNCLHFCQUE1QjtBQUNBLElBQU1DLHFCQUFxQixvQkFBM0I7O0FBRVA7QUFDTyxJQUFNQyw2QkFBNkIsNEJBQW5DO0FBQ0EsSUFBTUMsb0JBQW9CLG1CQUExQixDOzs7Ozs7O0FDakJQO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUUscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQWU7QUFDWEMsc0JBQWtCLDBFQURQO0FBRWRDLHdCQUFvQiw0RUFGTjtBQUdYQyx5QkFBcUIsNkVBQUFBO0FBSFYsQ0FBZixDOzs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRUEsd0RBQWU7QUFDWEMsZ0JBQVksSUFERDs7QUFHWEMsV0FBTztBQUNIQyxvQkFBWSxLQURUO0FBRUhDLGNBQU0sS0FGSDtBQUdIQyxvQkFBWSxJQUhUO0FBSUhDLHdCQUFnQixJQUpiO0FBS0hDLHVCQUFlLEVBTFo7QUFNSEMsd0JBQWdCLEtBTmI7QUFPSEMsd0JBQWdCLEVBUGI7QUFRSEMseUJBQWlCN0IsSUFBSThCLFNBQUosQ0FBY0MsUUFBZCxDQUF1QkMsT0FBdkIsQ0FBK0JDLEdBQS9CLENBQW1DLFlBQW5DO0FBUmQsS0FISTs7QUFjWEMsNkRBQ0ssdUVBREwsWUFDMkJiLEtBRDNCLEVBQ2tDQyxVQURsQyxFQUM4QztBQUN0Q0QsY0FBTUMsVUFBTixHQUFtQkEsVUFBbkI7QUFDSCxLQUhMLCtCQUtLLGlFQUxMLFlBS3FCRCxLQUxyQixFQUs0QkUsSUFMNUIsRUFLa0M7QUFDMUIsWUFBR0EsSUFBSCxFQUFTO0FBQ0xZLHFCQUFTQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NDLFNBQS9DLEdBQTJELFFBQTNEO0FBQ0gsU0FGRCxNQUVPO0FBQ0hILHFCQUFTQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NDLFNBQS9DLEdBQTJELE1BQTNEO0FBQ0g7O0FBRURqQixjQUFNRSxJQUFOLEdBQWFBLElBQWI7QUFDSCxLQWJMLCtCQWVLLHdFQWZMLFlBZTRCRixLQWY1QixFQWVtQ0csVUFmbkMsRUFlK0M7QUFDdkNILGNBQU1HLFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0gsS0FqQkwsK0JBbUJLLDJFQW5CTCxZQW1CK0JILEtBbkIvQixFQW1Cc0NLLGFBbkJ0QyxFQW1CcUQ7QUFDN0NMLGNBQU1LLGFBQU4sQ0FBb0JBLGFBQXBCO0FBQ0gsS0FyQkwsK0JBdUJLLDZFQXZCTCxZQXVCa0NMLEtBdkJsQyxFQXVCeUNNLGNBdkJ6QyxFQXVCeUQ7QUFDakROLGNBQU1NLGNBQU4sR0FBdUJBLGNBQXZCO0FBQ0gsS0F6QkwsK0JBMkJLLGdGQTNCTCxZQTJCcUNOLEtBM0JyQyxFQTJCNEM7QUFDcENBLGNBQU1NLGNBQU4sR0FBdUIsQ0FBQ04sTUFBTU0sY0FBOUI7QUFDSCxLQTdCTCwrQkErQkssK0VBL0JMLFlBK0JtQ04sS0EvQm5DLEVBK0IwQ2tCLEtBL0IxQyxFQStCaUQ7QUFDekNsQixjQUFNTyxjQUFOLENBQXFCWSxJQUFyQixDQUEwQkQsS0FBMUI7QUFDSCxLQWpDTCwrQkFtQ0ssb0ZBbkNMLFlBbUN3Q2xCLEtBbkN4QyxFQW1DK0NrQixLQW5DL0MsRUFtQ3NEO0FBQzlDbEIsY0FBTU8sY0FBTixHQUF1QlAsTUFBTU8sY0FBTixDQUFxQmEsTUFBckIsQ0FBNEI7QUFBQSxtQkFBaUJDLGNBQWNDLEVBQWQsS0FBcUJKLE1BQU1JLEVBQTVDO0FBQUEsU0FBNUIsQ0FBdkI7QUFDSCxLQXJDTCwrQkF1Q0ssNEVBdkNMLFlBdUNnQ3RCLEtBdkNoQyxFQXVDdUNJLGNBdkN2QyxFQXVDdUQ7QUFDL0NKLGNBQU1JLGNBQU4sR0FBdUJBLGNBQXZCO0FBQ0gsS0F6Q0wsY0FkVzs7QUEwRFgzQixhQUFTO0FBQ0w4QyxvQkFESyw4QkFDeUI7QUFBQSxnQkFBaEJ2QixLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVHdCLE1BQVMsUUFBVEEsTUFBUzs7QUFDMUIsZ0JBQUd4QixNQUFNQyxVQUFULEVBQXFCOztBQUVyQnVCLG1CQUFPLHVFQUFQLEVBQTZCLElBQTdCOztBQUVBQyxrQkFBTUMsSUFBTixDQUFXMUIsTUFBTVEsZUFBakIsRUFBa0M7QUFDOUJtQix1QkFBTzNCLE1BQU1HLFVBRGlCO0FBRTlCeUIsc0JBQU01QixNQUFNSSxjQUZrQjtBQUc5QnlCLHdCQUFRN0IsTUFBTU87QUFIZ0IsYUFBbEMsRUFLQ3VCLElBTEQsQ0FLTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCakIseUJBQVNrQixRQUFULEdBQW9CckQsSUFBSThCLFNBQUosQ0FBY0MsUUFBZCxDQUF1QkMsT0FBdkIsQ0FBK0JzQixNQUEvQixDQUFzQyxXQUF0QyxFQUFtREYsU0FBU0csSUFBNUQsQ0FBcEI7QUFDQVYsdUJBQU8sdUVBQVAsRUFBNkIsS0FBN0I7QUFDSCxhQVJELEVBU0NXLEtBVEQsQ0FTTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BCWix1QkFBTyx1RUFBUCxFQUE2QixLQUE3QjtBQUNILGFBWEQ7QUFZSDtBQWxCSTtBQTFERSxDQUFmLEM7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQSx3REFBZTtBQUNYekIsZ0JBQVksSUFERDs7QUFHWEMsV0FBTztBQUNIQyxvQkFBWSxLQURUO0FBRUhvQyxtQkFBVyxLQUZSO0FBR0hsQyxvQkFBWSxJQUhUO0FBSUhFLHVCQUFlLEVBSlo7QUFLSEMsd0JBQWdCLEtBTGI7QUFNSEMsd0JBQWdCO0FBTmIsS0FISTs7QUFZWE0sNkRBQ0ssdUVBREwsWUFDNEJiLEtBRDVCLEVBQ21DQyxVQURuQyxFQUMrQztBQUN2Q0QsY0FBTUMsVUFBTixHQUFtQkEsVUFBbkI7QUFDSCxLQUhMLCtCQUtLLHVFQUxMLFlBSzRCRCxLQUw1QixFQUttQ3FDLFNBTG5DLEVBSzhDO0FBQ3RDLFlBQUdBLFNBQUgsRUFBYztBQUNWdkIscUJBQVNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDQyxLQUF6QyxDQUErQ3NCLFFBQS9DLEdBQTBELFFBQTFEO0FBQ0gsU0FGRCxNQUVPO0FBQ0h4QixxQkFBU0Msb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLEtBQXpDLENBQStDc0IsUUFBL0MsR0FBMEQsUUFBMUQ7QUFDSDs7QUFFRHRDLGNBQU1xQyxTQUFOLEdBQWtCQSxTQUFsQjtBQUNILEtBYkwsK0JBZUssd0VBZkwsWUFlNkJyQyxLQWY3QixFQWVvQ0csVUFmcEMsRUFlZ0Q7QUFDeENILGNBQU1HLFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0gsS0FqQkwsK0JBbUJLLDJFQW5CTCxZQW1CZ0NILEtBbkJoQyxFQW1CdUNLLGFBbkJ2QyxFQW1Cc0Q7QUFDOUNMLGNBQU1LLGFBQU4sQ0FBb0JBLGFBQXBCO0FBQ0gsS0FyQkwsK0JBdUJLLDZFQXZCTCxZQXVCa0NMLEtBdkJsQyxFQXVCeUNNLGNBdkJ6QyxFQXVCeUQ7QUFDakROLGNBQU1NLGNBQU4sR0FBdUJBLGNBQXZCO0FBQ0gsS0F6QkwsK0JBMkJLLCtFQTNCTCxZQTJCbUNOLEtBM0JuQyxFQTJCMENrQixLQTNCMUMsRUEyQmlEO0FBQ3pDbEIsY0FBTU8sY0FBTixDQUFxQlksSUFBckIsQ0FBMEJELEtBQTFCO0FBQ0gsS0E3QkwsK0JBK0JLLG9GQS9CTCxZQStCd0NsQixLQS9CeEMsRUErQitDa0IsS0EvQi9DLEVBK0JzRDtBQUM5Q2xCLGNBQU1PLGNBQU4sR0FBdUJQLE1BQU1PLGNBQU4sQ0FBcUJhLE1BQXJCLENBQTRCO0FBQUEsbUJBQWlCQyxjQUFjQyxFQUFkLEtBQXFCSixNQUFNSSxFQUE1QztBQUFBLFNBQTVCLENBQXZCO0FBQ0gsS0FqQ0wsY0FaVzs7QUFnRFg3QyxhQUFTO0FBaERFLENBQWYsQzs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBLHdEQUFlO0FBQ1hzQixnQkFBWSxJQUREOztBQUdYQyxXQUFPO0FBQ0hDLG9CQUFZLEtBRFQ7QUFFSEMsY0FBTSxLQUZIO0FBR0hDLG9CQUFZLElBSFQ7QUFJSEUsdUJBQWUsRUFKWjtBQUtIRSx3QkFBZ0IsRUFMYjtBQU1IZ0MsYUFBSzVELElBQUk4QixTQUFKLENBQWNDLFFBQWQsQ0FBdUJDLE9BQXZCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQztBQU5GLEtBSEk7O0FBWVhDLDZEQUNLLHVFQURMLFlBQzJCYixLQUQzQixFQUNrQ0MsVUFEbEMsRUFDOEM7QUFDdENELGNBQU1DLFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0gsS0FITCwrQkFLSyxpRUFMTCxZQUtxQkQsS0FMckIsRUFLNEJFLElBTDVCLEVBS2tDO0FBQzFCRixjQUFNRSxJQUFOLEdBQWFBLElBQWI7QUFDSCxLQVBMLCtCQVNLLHdFQVRMLFlBUzRCRixLQVQ1QixFQVNtQ0csVUFUbkMsRUFTK0M7QUFDdkNILGNBQU1HLFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0gsS0FYTCwrQkFhSywyRUFiTCxZQWErQkgsS0FiL0IsRUFhc0NLLGFBYnRDLEVBYXFEO0FBQzdDTCxjQUFNSyxhQUFOLEdBQXNCQSxhQUF0QjtBQUNILEtBZkwsK0JBaUJLLCtFQWpCTCxZQWlCbUNMLEtBakJuQyxFQWlCMENrQixLQWpCMUMsRUFpQmlEO0FBQ3pDbEIsY0FBTU8sY0FBTixDQUFxQlksSUFBckIsQ0FBMEJELEtBQTFCO0FBQ0gsS0FuQkwsK0JBcUJLLG9GQXJCTCxZQXFCd0NsQixLQXJCeEMsRUFxQitDa0IsS0FyQi9DLEVBcUJzRDtBQUM5Q2xCLGNBQU1PLGNBQU4sR0FBdUJQLE1BQU1PLGNBQU4sQ0FBcUJhLE1BQXJCLENBQTRCO0FBQUEsbUJBQWlCQyxjQUFjQyxFQUFkLEtBQXFCSixNQUFNSSxFQUE1QztBQUFBLFNBQTVCLENBQXZCO0FBQ0gsS0F2QkwsY0FaVzs7QUFzQ1g3QyxhQUFTO0FBQ0wrRCxnQ0FESywwQ0FDcUM7QUFBQSxnQkFBaEJ4QyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVHdCLE1BQVMsUUFBVEEsTUFBUzs7QUFDdENpQix1QkFBVyxZQUFNO0FBQ2JqQix1QkFBTyxpRUFBUCxFQUF1QixJQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0gsU0FMSTtBQU9Ma0IsZ0NBUEssMkNBT3FDO0FBQUEsZ0JBQWhCMUMsS0FBZ0IsU0FBaEJBLEtBQWdCO0FBQUEsZ0JBQVR3QixNQUFTLFNBQVRBLE1BQVM7O0FBQ3RDaUIsdUJBQVcsWUFBTTtBQUNiakIsdUJBQU8saUVBQVAsRUFBdUIsS0FBdkI7QUFDSCxhQUZELEVBRUcsR0FGSDtBQUdIO0FBWEk7QUF0Q0UsQ0FBZixDIiwiZmlsZSI6ImpzL3ZpZW5kZXIvc29jaWFsaXRlL2Fuc3dlclNob3cvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNzcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIwOWU5MDZkYmQ4NzU0OTRjY2M3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMyAyNCAyNSIsIi8vIHNlYXJjaE9yQXNrUGFuZWxcbmV4cG9ydCBjb25zdCBTRVRfUkVRVUVTVElORyA9ICdTRVRfUkVRVUVTVElORyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfUEFORUwgPSAnU0VUX1NIT1dfUEFORUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XID0gJ1NFVF9TSE9XJztcbmV4cG9ydCBjb25zdCBTRVRfU0VBUkNIX1RFWFQgPSAnU0VUX1NFQVJDSF9URVhUJztcbmV4cG9ydCBjb25zdCBTRVRfU0VBUkNIX1JFU1VMVFMgPSAnU0VUX1NFQVJDSF9SRVNVTFRTJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19NT1JFX0ZJRUxEUyA9ICdTRVRfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMgPSAnVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IEFERF9UT19TRUxFQ1RFRF9UT1BJQ1MgPSAnQUREX1RPX1NFTEVDVEVEX1RPUElDUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTID0gJ1JFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVNUSU9OX0RFVEFJTCA9ICdTRVRfUVVFU1RJT05fREVUQUlMJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG5cdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanMiLCJpbXBvcnQgY29yZU1vZHVsZXMgZnJvbSAndmllbmRlcl9jb3JlL2pzL3N0b3JlL21vZHVsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIG1vZHVsZXM6IE9iamVjdC5hc3NpZ24oY29yZU1vZHVsZXMsIHtcblxuICB9KSxcblxuICBhY3Rpb25zOiByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlLy9hY3Rpb25zLmpzJyksXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9hbnN3ZXJTaG93L2Fzc2V0cy9qcy9zdG9yZS5qcyIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlIFZ1ZSBhbmQgVnVlIFJlc291cmNlLiBUaGlzIGdpdmVzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgZm9yXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdxdWVzdGlvbi1saXN0JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlJykpO1xuXG5jb25zdCBmZWVkID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9hbnN3ZXJTaG93L2Fzc2V0cy9qcy9hcHAuanMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICA8cXVlc3Rpb24gOnF1ZXN0aW9uPVwicXVlc3Rpb25cIiB2LWZvcj1cInF1ZXN0aW9uIGluIHF1ZXN0aW9uc1wiPjwvcXVlc3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIgdi1zaG93PVwicmVxdWVzdGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiIHYtc2hvdz1cIiAhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIj5Mb2FkIG1vcmU8L2J1dHRvbj5cbiAgICAgICAgPGFuc3dlci1jcmVhdGUtbW9kYWw+PC9hbnN3ZXItY3JlYXRlLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ3F1ZXN0aW9uVXJsJ10sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICByZXF1ZXN0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC5yZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIHF1ZXN0aW9ucygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3QucXVlc3Rpb25zO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnBhZ2UgLSAxO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvdGFsUGFnZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnRvdGFsUGFnZXM7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdxdWVzdGlvbkxpc3Qvc2V0UXVlc3Rpb25VcmwnLCB0aGlzLnF1ZXN0aW9uVXJsKTtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncXVlc3Rpb25MaXN0L2ZldGNoRGF0YScpO1xuICAgICAgICB9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHF1ZXN0aW9uLWxpc3QudnVlP2M3Y2ZkOWQ4IiwiLy8gcXVlc3Rpb25MaXN0XG5leHBvcnQgY29uc3QgQUREX1FVRVNUSU9OUyA9ICdBRERfUVVFU1RJT05TJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUVVFU1RJT04gPSAnUkVNT1ZFX1FVRVNUSU9OJztcbmV4cG9ydCBjb25zdCBTRVRfQVNfQU5TV0VSRUQgPSAnU0VUX0FTX0FOU1dFUkVEJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFU1RJT05TX1VSTCA9ICdTRVRfUVVFU1RJT05TX1VSTCc7XG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX1BBR0UgPSAnSU5DUkVNRU5UX1BBR0UnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9SRVFVRVNUSU5HID0gJ1VQREFURV9SRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMID0gJ1NFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwnO1xuXG4vLyBlZGl0b3JcbmV4cG9ydCBjb25zdCBTRVRfRURJVE9SX0NPTlRFTlQgPSAnU0VUX0VESVRPUl9DT05URU5UJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRURJVE9SX0NPTlRFTlQgPSAnVVBEQVRFX0VESVRPUl9DT05URU5UJztcbmV4cG9ydCBjb25zdCBTRVRfRURJVE9SX1FVRVNUSU9OID0gJ1NFVF9FRElUT1JfUVVFU1RJT04nO1xuZXhwb3J0IGNvbnN0IFNFVF9FRElUT1JfRUxFTUVOVCA9ICdTRVRfRURJVE9SX0VMRU1FTlQnO1xuXG4vLyBmZWVkXG5leHBvcnQgY29uc3QgU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwgPSAnU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XRURfQU5TV0VSID0gJ1NFVF9TSE9XRURfQU5TV0VSJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9xdWVzdGlvbi1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1jODNjYjc5YSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcXVlc3Rpb24tbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbi1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jODNjYjc5YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM4M2NiNzlhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDE5IDIwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7fSwgW192bS5fbCgoX3ZtLnF1ZXN0aW9ucyksIGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIF9jKCdxdWVzdGlvbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwicXVlc3Rpb25cIjogcXVlc3Rpb25cbiAgICAgIH1cbiAgICB9KVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ucmVxdWVzdGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInJlcXVlc3RpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInByZWxvYWRlciBwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIlxuICB9LCBbX3ZtLl9tKDApXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5yZXF1ZXN0aW5nICYmIF92bS5wYWdlIDwgX3ZtLnRvdGFsUGFnZXMpLFxuICAgICAgZXhwcmVzc2lvbjogXCIgISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZldGNoRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9hZCBtb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhbnN3ZXItY3JlYXRlLW1vZGFsJyldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIGxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhcC1wYXRjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1jODNjYjc5YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYzgzY2I3OWEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDE5IDIwIiwiaW1wb3J0IHNlYXJjaE9yQXNrUGFuZWwgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwnO1xuaW1wb3J0IHNlYXJjaE9yQXNrT3ZlcmxheSBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5JztcbmltcG9ydCB0b3BpY1JlY29tbWVuZGF0aW9uIGZyb20gJy4vbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNlYXJjaE9yQXNrUGFuZWw6IHNlYXJjaE9yQXNrUGFuZWwsXG5cdHNlYXJjaE9yQXNrT3ZlcmxheTogc2VhcmNoT3JBc2tPdmVybGF5LFxuICAgIHRvcGljUmVjb21tZW5kYXRpb246IHRvcGljUmVjb21tZW5kYXRpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBxdWVzdGlvbkRldGFpbDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICBwb3N0UXVlc3Rpb25Vcmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJy9xdWVzdGlvbnMnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIGlmKHNob3cpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5UT0dHTEVfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9ICFzdGF0ZS5zaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfUVVFU1RJT05fREVUQUlMXShzdGF0ZSwgcXVlc3Rpb25EZXRhaWwpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uRGV0YWlsID0gcXVlc3Rpb25EZXRhaWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgcG9zdFF1ZXN0aW9uKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIHRydWUpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHN0YXRlLnBvc3RRdWVzdGlvblVybCwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdGF0ZS5zZWFyY2hUZXh0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHN0YXRlLnF1ZXN0aW9uRGV0YWlsLFxuICAgICAgICAgICAgICAgIHRvcGljczogc3RhdGUuc2VsZWN0ZWRUb3BpY3MsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10gKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfUEFORUxdIChzdGF0ZSwgc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICBpZihzaG93UGFuZWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvd1BhbmVsID0gc2hvd1BhbmVsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdIChzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10gKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgdXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCd0b3BpY3MnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIHRydWUpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlVG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9