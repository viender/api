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
/******/ 	return __webpack_require__(__webpack_require__.s = 280);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/vue-loader/lib/component-normalizer.js'");

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

/***/ 119:
/***/ (function(module, exports) {



/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viender_socialite_core_js_store_modules_questionList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_viender_socialite_core_js_store_modules_editor__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_viender_socialite_core_js_store_modules_feed__ = __webpack_require__(35);





/* harmony default export */ __webpack_exports__["a"] = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {
    questionList: __WEBPACK_IMPORTED_MODULE_1_viender_socialite_core_js_store_modules_questionList__["a" /* default */],
    editor: __WEBPACK_IMPORTED_MODULE_2_viender_socialite_core_js_store_modules_editor__["a" /* default */],
    feed: __WEBPACK_IMPORTED_MODULE_3_viender_socialite_core_js_store_modules_feed__["a" /* default */]
  }),

  actions: __webpack_require__(11)
});

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(2);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        editorElement: null,
        question: null,
        content: null
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_EDITOR_CONTENT */], function (state, content) {
        state.content = content;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* UPDATE_EDITOR_CONTENT */], function (state, body) {
        if (state.content) {
            state.content.body = body;
        }
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* SET_EDITOR_QUESTION */], function (state, question) {
        state.question = question;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* SET_EDITOR_ELEMENT */], function (state, editorElement) {
        state.editorElement = editorElement;
    }), _mutations),

    actions: {
        setQuestion: function setQuestion(_ref, payload) {
            var state = _ref.state,
                commit = _ref.commit,
                rootState = _ref.rootState;

            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_EDITOR_CONTENT */], payload.answerText);
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* SET_EDITOR_QUESTION */], payload.question);
            if (state.editorElement) {
                state.editorElement.summernote('code', payload.answerText.body);
            }
        }
    }
};

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(2);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        page: 1,
        totalPages: 2,
        requesting: false,
        questions: [],
        questionUrl: {},
        showAnswerCreateModal: false
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* ADD_QUESTIONS */], function (state, questions) {
        state.questions = state.questions.concat(questions);
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* REMOVE_QUESTION */], function (state, question) {
        state.questions.splice(state.questions.indexOf(question), 1);
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* SET_AS_ANSWERED */], function (state, question) {
        state.questions[state.questions.indexOf(question)].answered = true;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* SET_QUESTIONS_URL */], function (state, url) {
        state.questionUrl = url;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["k" /* INCREMENT_PAGE */], function (state) {
        state.page++;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_REQUESTING */], function (state, requesting) {
        state.requesting = requesting;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["m" /* SET_SHOW_ANSWER_CREATE_MODAL */], function (state, showAnswerCreateModal) {
        if (showAnswerCreateModal) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        } else {
            $('.answer-create-modal-overlay').scrollTop(0);
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
            $('.modal').modal('hide');
        }

        var imagePopOver = document.getElementsByClassName("note-image-popover")[0];

        if (imagePopOver) imagePopOver.style.display = 'none';

        state.showAnswerCreateModal = showAnswerCreateModal;
    }), _mutations),

    actions: {
        setQuestionUrl: function setQuestionUrl(_ref, url) {
            var state = _ref.state,
                commit = _ref.commit,
                rootState = _ref.rootState;

            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* SET_QUESTIONS_URL */], url);
        },
        fetchData: function fetchData(_ref2) {
            var state = _ref2.state,
                commit = _ref2.commit,
                rootState = _ref2.rootState;

            if (state.requesting) return;

            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_REQUESTING */], true);

            axios.get(state.questionUrl, {
                params: {
                    with: ['owner', 'answer'],
                    page: state.page
                }
            }).then(function (response) {
                state.totalPages = response.data.meta.pagination.total_pages;
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* ADD_QUESTIONS */], response.data.data);
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["k" /* INCREMENT_PAGE */]);
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_REQUESTING */], false);
            }).catch(function (error) {
                console.log(error);
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_REQUESTING */], false);
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 15:
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
  props: {
    answer: {
      type: Object,
      default: null
    },
    showQuestion: {
      type: Boolean,
      default: true
    }
  },

  mixins: [__webpack_require__(4)],

  data: function data() {
    return {
      requesting: false,
      showComments: false
    };
  },


  computed: {
    upvoteCount: function upvoteCount() {
      return this.answer ? this.answer.upvote_count : 0;
    },
    commentCount: function commentCount() {
      return this.answer ? this.answer.comment_count : 0;
    }
  },

  methods: {
    stopPropagation: function stopPropagation(event) {
      event.stopPropagation();
    },
    showAnswer: function showAnswer() {
      this.$store.commit('feed/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["a" /* SET_SHOW_ANSWER_SHOW_MODAL */], true);
      this.$store.dispatch('feed/setShowedAnswer', this.answer);
    },
    upvote: function upvote() {
      var _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('upvotes', this.answer), {}).then(function (response) {
        if (response.status == 201) {
          _this.answer.upvote_count += 1;
          _this.answer.upvoted = true;
          _this.answer.downvoted = false;
        }
        if (response.status == 204) {
          _this.answer.upvote_count -= 1;
          _this.answer.upvoted = false;
        }
        _this.requesting = false;
      }).catch(function (error) {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },
    downvote: function downvote() {
      var _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('downvotes', this.answer), {}).then(function (response) {
        if (response.status == 201) {
          if (_this.answer.upvoted) _this.answer.upvote_count -= 1;
          _this.answer.upvoted = false;
          _this.answer.downvoted = true;
        }
        if (response.status == 204) {
          _this.answer.downvoted = false;
        }
        _this.requesting = false;
      }).catch(function (error) {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },
    toggleComments: function toggleComments() {
      this.showComments = !this.showComments;
    },
    incrementCommentCount: function incrementCommentCount() {
      this.commentCount++;
    }
  }
};

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(120);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(119);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('comment', __webpack_require__(24));
Vue.component('comment-list', __webpack_require__(23));
Vue.component('comment-create-form', __webpack_require__(22));
Vue.component('answer-preview', __webpack_require__(21));
Vue.component('feed-list', __webpack_require__(47));
Vue.component('answer', __webpack_require__(46));
Vue.component('answer-show-modal', __webpack_require__(45));

var feed = new Vue({
  el: '#app',

  store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */]
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
	props: ['commentableCommentsUrl'],

	data: function data() {
		return {
			requesting: false,
			formData: {
				body: null
			}
		};
	},


	methods: {
		postComment: function postComment(event) {
			var _this = this;

			if (event) event.preventDefault();

			if (_this.requesting) return;

			if (!_this.formData.body) return;

			_this.requesting = true;

			axios.post(this.commentableCommentsUrl + '?with=owner', this.formData).then(function (response) {
				if (response.status == 200) {
					_this.$emit('comment-posted', response);
					_this.formData.body = null;
				}
				_this.requesting = false;
			}).catch(function (error) {
				if (error.response.status == 401) {
					document.location = url('login');
				}
				_this.requesting = false;
			});
		}
	}
};

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: ['commentsUrl'],

    data: function data() {
        return {
            comments: [],
            requesting: false,
            page: 1
        };
    },
    mounted: function mounted() {
        this.fetchData();
    },


    methods: {
        fetchData: function fetchData() {
            var _this = this;

            if (_this.requesting) return;

            _this.requesting = true;

            axios.get(_this.commentsUrl, {
                params: {
                    with: ['owner'],
                    page: _this.page
                }
            }).then(function (response) {
                _this.comments = _this.comments.concat(response.data.data);
                _this.page++;
                _this.requesting = false;
            }).catch(function (error) {
                console.log(error);
                _this.requesting = false;
            });
        },
        addComment: function addComment(comment) {
            this.comments.push(comment);
            this.$emit('comment-posted');
        }
    }
};

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  props: ['comment'],

  mixins: [__webpack_require__(4)],

  data: function data() {
    return {
      requesting: false,
      upvoteCount: 0,
      commentCount: 0,
      showComments: false
    };
  },
  mounted: function mounted() {
    this.upvoteCount = this.comment.upvote_count;
    this.commentCount = this.comment.comment_count;
  },


  methods: {
    upvote: function upvote() {
      var _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('upvotes', this.comment), {}).then(function (response) {
        if (response.status == 201) {
          _this.upvoteCount += 1;
          _this.comment.upvoted = true;
          _this.comment.downvoted = false;
        }
        if (response.status == 204) {
          _this.upvoteCount -= 1;
          _this.comment.upvoted = false;
        }
        _this.requesting = false;
      }).catch(function (error) {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },
    downvote: function downvote() {
      var _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('downvotes', this.comment), {}).then(function (response) {
        if (response.status == 201) {
          if (_this.comment.upvoted) {
            _this.upvoteCount -= 1;
          }
          _this.comment.upvoted = false;
          _this.comment.downvoted = true;
        }
        if (response.status == 204) {
          _this.comment.downvoted = false;
        }
        _this.requesting = false;
      }).catch(function (error) {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },
    toggleComments: function toggleComments() {
      this.showComments = !this.showComments;
    },
    updateCommentCount: function updateCommentCount() {
      this.commentCount++;
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(29),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/answer-preview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] answer-preview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e395f9b", Component.options)
  } else {
    hotAPI.reload("data-v-5e395f9b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/comment-create-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comment-create-form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41def115", Component.options)
  } else {
    hotAPI.reload("data-v-41def115", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/comment-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comment-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55b3b1a4", Component.options)
  } else {
    hotAPI.reload("data-v-55b3b1a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20efffed", Component.options)
  } else {
    hotAPI.reload("data-v-20efffed", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "collection-item avatar avatar--small u-border--none"
  }, [_c('img', {
    staticClass: "u-dimension--small circle",
    attrs: {
      "src": _vm.getUrl('avatar', _vm.comment.owner),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_c('strong', [_c('a', {
    staticClass: "profile-link",
    attrs: {
      "href": _vm.$viender.helpers.getUrl('self_html', _vm.comment.owner)
    }
  }, [_vm._v(_vm._s(_vm.comment.owner.name))])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "padding-right": "5px"
    }
  }, [_vm._v(_vm._s(_vm.comment.body))]), _vm._v(" "), _c('div', {
    staticClass: "card-action u-border--only-bottom"
  }, [_c('span', {
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": _vm.upvote
    }
  }, [_c('span', {
    staticStyle: {
      "padding-right": "5px"
    }
  }, [_vm._v(_vm._s(_vm.upvoteCount))]), _vm._v(" "), _c('a', {
    staticClass: "material-icons dp48",
    style: (!_vm.comment.upvoted ? 'color: grey;' : '')
  }, [_vm._v("thumb_up")])]), _vm._v(" "), _c('a', {
    staticClass: "material-icons dp48",
    style: (!_vm.comment.downvoted ? 'color: grey;' : ''),
    on: {
      "click": _vm.downvote
    }
  }, [_vm._v("thumb_down")]), _vm._v(" "), _c('a', {
    staticStyle: {
      "color": "grey"
    },
    on: {
      "click": function($event) {
        _vm.toggleComments()
      }
    }
  }, [_vm._v("Comments "), _c('span', [_vm._v("(" + _vm._s(_vm.commentCount) + ")")])]), _vm._v(" "), (_vm.showComments) ? _c('comment-list', {
    attrs: {
      "comments-url": _vm.getUrl('comments', _vm.comment)
    },
    on: {
      "comment-posted": function($event) {
        _vm.incrementCommentCount()
      }
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20efffed", module.exports)
  }
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    attrs: {
      "method": "POST",
      "action": _vm.commentableCommentsUrl
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.body),
      expression: "formData.body"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "text",
      "name": "body"
    },
    domProps: {
      "value": (_vm.formData.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.body = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col s3"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    attrs: {
      "type": "submit",
      "name": "action"
    },
    on: {
      "click": function($event) {
        _vm.postComment($event)
      }
    }
  }, [_vm._v("\n\t\t\t\tComment\n\t\t\t")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41def115", module.exports)
  }
}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "collection u-border--none"
  }, [_c('li', {
    staticClass: "collection-item collection-item-form"
  }, [_c('comment-create-form', {
    attrs: {
      "commentable-comments-url": _vm.commentsUrl
    },
    on: {
      "comment-posted": function($event) {
        _vm.addComment($event.data)
      }
    }
  })], 1), _vm._v(" "), _vm._l((_vm.comments), function(comment) {
    return _c('comment', {
      attrs: {
        "comment": comment
      }
    })
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55b3b1a4", module.exports)
  }
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row u-margin--none answer"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('div', {
    staticClass: "card u-margin--none u-box-shadow--none"
  }, [_c('div', {
    staticClass: "card-content",
    on: {
      "click": function($event) {
        _vm.showAnswer()
      }
    }
  }, [(_vm.showQuestion) ? _c('span', {
    staticClass: "card-title"
  }, [_c('h4', [_c('a', {
    attrs: {
      "href": _vm.getUrl('self_html', _vm.answer.question)
    },
    on: {
      "click": function($event) {
        _vm.stopPropagation($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.answer.question.title))])])]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "collection"
  }, [_c('li', {
    staticClass: "collection-item avatar"
  }, [_c('img', {
    staticClass: "circle",
    attrs: {
      "src": _vm.getUrl('avatar', _vm.answer.owner),
      "alt": ""
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "href": _vm.getUrl('self_html', _vm.answer.owner)
    },
    on: {
      "click": function($event) {
        _vm.stopPropagation($event)
      }
    }
  }, [_c('span', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.answer.owner.name))])])])]), _vm._v(" "), _c('div', {
    staticClass: "answer-content"
  }, [_c('div', {
    staticStyle: {
      "display": "inline"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.answer.preview)
    }
  }), _vm._v(" "), (_vm.answer.preview.length >= 258) ? _c('a', {
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_vm._v("(more)")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('span', {
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": _vm.upvote
    }
  }, [_c('span', {
    staticStyle: {
      "padding-right": "5px"
    }
  }, [_vm._v(_vm._s(_vm.upvoteCount))]), _vm._v(" "), _c('a', {
    staticClass: "material-icons dp48",
    style: (!_vm.answer.upvoted ? 'color: grey;' : '')
  }, [_vm._v("thumb_up")])]), _vm._v(" "), _c('a', {
    staticClass: "material-icons dp48",
    style: (!_vm.answer.downvoted ? 'color: grey;' : ''),
    on: {
      "click": _vm.downvote
    }
  }, [_vm._v("thumb_down")]), _vm._v(" "), _c('a', {
    staticStyle: {
      "color": "grey"
    },
    on: {
      "click": function($event) {
        _vm.toggleComments()
      }
    }
  }, [_vm._v("Comments "), _c('span', [_vm._v("(" + _vm._s(_vm.commentCount) + ")")])]), _vm._v(" "), (_vm.showComments) ? _c('comment-list', {
    attrs: {
      "comments-url": _vm.getUrl('comments', _vm.answer)
    },
    on: {
      "comment-posted": function($event) {
        _vm.incrementCommentCount()
      }
    }
  }) : _vm._e()], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e395f9b", module.exports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(2);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        page: 1,
        totalPages: 2,
        requesting: false,
        answers: [],
        feedUrls: {},
        showAnswerModal: false,
        showedAnswer: null
    },

    mutations: (_mutations = {
        addAnswers: function addAnswers(state, answers) {
            state.answers = state.answers.concat(answers);
        },
        setFeedUrl: function setFeedUrl(state, url) {
            state.feedUrls = url;
        },
        incrementPage: function incrementPage(state) {
            state.page++;
        },
        updateRequesting: function updateRequesting(state, requesting) {
            state.requesting = requesting;
        }
    }, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_SHOW_ANSWER_SHOW_MODAL */], function (state, showAnswerModal) {
        if (showAnswerModal) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        } else {
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }

        state.showAnswerModal = showAnswerModal;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_SHOWED_ANSWER */], function (state, showedAnswer) {
        state.showedAnswer = showedAnswer;
    }), _defineProperty(_mutations, 'addAnswer', function addAnswer(state, answer) {
        state.answers.unshift(answer);
    }), _mutations),

    actions: {
        fetchData: function fetchData(_ref) {
            var state = _ref.state,
                commit = _ref.commit,
                rootState = _ref.rootState;

            if (state.requesting) return;

            commit('updateRequesting', true);

            axios.get(state.feedUrls.answers, {
                params: {
                    with: ['owner', 'question'],
                    page: state.page
                }
            }).then(function (response) {
                state.totalPages = response.data.meta.pagination.total_pages;
                commit('addAnswers', response.data.data);
                commit('incrementPage');
                commit('updateRequesting', false);
            }).catch(function (error) {
                console.log(error);
                commit('updateRequesting', false);
            });
        },
        setShowedAnswer: function setShowedAnswer(_ref2, showedAnswer) {
            var state = _ref2.state,
                commit = _ref2.commit,
                rootState = _ref2.rootState;

            if (showedAnswer ? !showedAnswer.body : false) {
                if (state.requesting) return;

                commit('updateRequesting', true);

                axios.get(getUrl('self', showedAnswer), {
                    params: {
                        only: ['body']
                    }
                }).then(function (response) {
                    showedAnswer.body = response.data.body;
                    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_SHOWED_ANSWER */], showedAnswer);
                    commit('updateRequesting', false);
                }).catch(function (error) {
                    console.log(error);
                    commit('updateRequesting', false);
                });
            } else {
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_SHOWED_ANSWER */], showedAnswer);
            }
        }
    }
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    props: ['answer'],

    mixins: [__webpack_require__(4)],

    computed: {
        answer: function answer() {
            return this.$store.state.feed.showedAnswer;
        },
        showAnswerModal: function showAnswerModal() {
            return this.$store.state.feed.showAnswerModal;
        }
    },

    methods: {
        modalClickHandle: function modalClickHandle(event) {
            event.stopPropagation();
        },
        hideAnswerCreateModal: function hideAnswerCreateModal() {
            $(this.$refs.modal).scrollTop(0);
            this.$store.commit('feed/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["a" /* SET_SHOW_ANSWER_SHOW_MODAL */], false);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  props: {
    answer: {
      type: Object,
      default: null
    },
    showQuestion: {
      type: Boolean,
      default: true
    }
  },

  mixins: [__webpack_require__(4)],

  data: function data() {
    return {
      requesting: false,
      showComments: false
    };
  },


  computed: {
    upvoteCount: function upvoteCount() {
      return this.answer ? this.answer.upvote_count : 0;
    },
    commentCount: function commentCount() {
      return this.answer ? this.answer.comment_count : 0;
    }
  },

  methods: {
    upvote: function upvote() {
      var _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('upvotes', this.answer), {}).then(function (response) {
        if (response.status == 201) {
          _this.answer.upvote_count += 1;
          _this.answer.upvoted = true;
          _this.answer.downvoted = false;
        }
        if (response.status == 204) {
          _this.answer.upvote_count -= 1;
          _this.answer.upvoted = false;
        }
        _this.requesting = false;
      }).catch(function (error) {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },
    downvote: function downvote() {
      var _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('downvotes', this.answer), {}).then(function (response) {
        if (response.status == 201) {
          if (_this.answer.upvoted) _this.answer.upvote_count -= 1;
          _this.answer.upvoted = false;
          _this.answer.downvoted = true;
        }
        if (response.status == 204) {
          _this.answer.downvoted = false;
        }
        _this.requesting = false;
      }).catch(function (error) {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },
    toggleComments: function toggleComments() {
      this.showComments = !this.showComments;
    },
    incrementCommentCount: function incrementCommentCount() {
      this.commentCount++;
    }
  }
};

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = {

	methods: {
		getUrl: function getUrl(rel, obj) {
			return obj.links.filter(function (link) {
				return link.rel == rel;
			})[0].url;
		},
		url: function url(path) {
			return window.url(path);
		}
	}
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: {
        feedUrls: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: function _default() {
                return {
                    answers: {
                        showQuestion: true
                    }
                };
            }
        }
    },

    computed: {
        requesting: function requesting() {
            return this.$store.state.feed.requesting;
        },
        answers: function answers() {
            return this.$store.state.feed.answers;
        },
        page: function page() {
            return this.$store.state.feed.page - 1;
        },
        totalPages: function totalPages() {
            return this.$store.state.feed.totalPages;
        }
    },

    mounted: function mounted() {
        this.$store.commit('feed/setFeedUrl', this.feedUrls);
        this.fetchData();
    },


    methods: {
        fetchData: function fetchData() {
            this.$store.dispatch('feed/fetchData');
        }
    }
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/answer-show-modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] answer-show-modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52f538da", Component.options)
  } else {
    hotAPI.reload("data-v-52f538da", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/answer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] answer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0754d3c0", Component.options)
  } else {
    hotAPI.reload("data-v-0754d3c0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/feed-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] feed-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-529e570a", Component.options)
  } else {
    hotAPI.reload("data-v-529e570a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row u-margin--none answer"
  }, [_c('div', {
    staticClass: "col s12"
  }, [(_vm.answer) ? _c('div', {
    staticClass: "card u-margin--none u-box-shadow--none"
  }, [_c('div', {
    staticClass: "card-content"
  }, [(_vm.showQuestion) ? _c('span', {
    staticClass: "card-title"
  }, [_c('h4', [_c('a', {
    attrs: {
      "href": _vm.getUrl('self_html', _vm.answer.question)
    }
  }, [_vm._v(_vm._s(_vm.answer.question.title))])])]) : _vm._e(), _vm._v(" "), _c('hr', {
    staticStyle: {
      "margin-bottom": "30px"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "collection"
  }, [_c('li', {
    staticClass: "collection-item avatar"
  }, [_c('img', {
    staticClass: "circle",
    attrs: {
      "src": _vm.getUrl('avatar', _vm.answer.owner),
      "alt": ""
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "href": _vm.getUrl('self_html', _vm.answer.owner)
    }
  }, [_c('span', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.answer.owner.name))])])])]), _vm._v(" "), _c('div', {
    staticClass: "answer-content",
    domProps: {
      "innerHTML": _vm._s(_vm.answer.body)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('span', {
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": _vm.upvote
    }
  }, [_c('span', {
    staticStyle: {
      "padding-right": "5px"
    }
  }, [_vm._v(_vm._s(_vm.upvoteCount))]), _vm._v(" "), _c('a', {
    staticClass: "material-icons dp48",
    style: (!_vm.answer.upvoted ? 'color: grey;' : '')
  }, [_vm._v("thumb_up")])]), _vm._v(" "), _c('a', {
    staticClass: "material-icons dp48",
    style: (!_vm.answer.downvoted ? 'color: grey;' : ''),
    on: {
      "click": _vm.downvote
    }
  }, [_vm._v("thumb_down")]), _vm._v(" "), _c('a', {
    staticStyle: {
      "color": "grey"
    },
    on: {
      "click": function($event) {
        _vm.toggleComments()
      }
    }
  }, [_vm._v("Comments "), _c('span', [_vm._v("(" + _vm._s(_vm.commentCount) + ")")])]), _vm._v(" "), (_vm.showComments) ? _c('comment-list', {
    attrs: {
      "comments-url": _vm.getUrl('comments', _vm.answer)
    },
    on: {
      "comment-posted": function($event) {
        _vm.incrementCommentCount()
      }
    }
  }) : _vm._e()], 1)]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0754d3c0", module.exports)
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_vm._l((_vm.answers), function(answer) {
    return (_vm.answers[0] ? _vm.answers[0].preview : true) ? _c('answer-preview', {
      attrs: {
        "answer": answer,
        "show-question": _vm.options.answers.showQuestion
      }
    }) : _vm._l((_vm.answers), function(answer) {
      return _c('answer', {
        attrs: {
          "answer": answer
        }
      })
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
      expression: "! requesting && page < totalPages"
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
  }, [_vm._v("Load more")])], 2)
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
     require("vue-hot-reload-api").rerender("data-v-529e570a", module.exports)
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showAnswerModal),
      expression: "showAnswerModal"
    }],
    ref: "modal",
    staticClass: "answer-show-modal-overlay",
    on: {
      "click": function($event) {
        _vm.hideAnswerCreateModal()
      }
    }
  }, [_c('div', {
    staticClass: "answer-show-modal",
    on: {
      "click": function($event) {
        _vm.modalClickHandle($event)
      }
    }
  }, [(_vm.answer ? _vm.answer.body : false) ? _c('answer', {
    attrs: {
      "answer": _vm.answer
    }
  }) : _c('div', {
    staticClass: "preloader-wrapper small active",
    staticStyle: {
      "position": "fixed",
      "top": "calc(50% - 75px)",
      "left": "calc(50% - 18px)"
    }
  }, [_c('div', {
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
  })])])])], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-action"
  }, [_c('span', [_vm._v("X")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52f538da", module.exports)
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcz80YmRiKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9hY3Rpb25zLmpzPzYxNmQqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvcGFnZXMvcmVhZC9hc3NldHMvanMvc3RvcmUuanM/YTM0MyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2VkaXRvci5qcz8xODliKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9xdWVzdGlvbkxpc3QuanM/ZDA3MCoqKioqKioqIiwid2VicGFjazovLy9hbnN3ZXItcHJldmlldy52dWU/MWFiYyoqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9yZWFkL2Fzc2V0cy9qcy9hcHAtbW9iaWxlLmpzIiwid2VicGFjazovLy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT8yMDgzKioqKioqKioiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQtbGlzdC52dWU/NTg5MSoqKioqKioqIiwid2VicGFjazovLy9jb21tZW50LnZ1ZT83N2ZjKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/MmJjNSoqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlPzBkY2QqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlPzk2NDgqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWU/ODJmMSoqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWU/OWIxMSoqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWU/ZTljMioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlP2M1NzcqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlP2I5ZTEqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWU/ZmIxZSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZlZWQuanM/MzVkNyoqKioqKiIsIndlYnBhY2s6Ly8vYW5zd2VyLXNob3ctbW9kYWwudnVlPzFkNmIqKioqKioiLCJ3ZWJwYWNrOi8vL2Fuc3dlci52dWU/MzVjOCoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91cmxIZWxwZXIuanM/NDI5MCoqKioqKioqIiwid2VicGFjazovLy9mZWVkLWxpc3QudnVlP2IwN2QqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWU/NmRjMioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWU/YmU3NSoqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWU/MGRkYSoqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWU/Mjk4OSoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzPzNmNWIqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mZWVkLWxpc3QudnVlPzVlYjgqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlPzg4YjcqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanM/YWZhYSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcz8wOWM1KioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzPzM2MjAqKioqKioqKioiXSwibmFtZXMiOlsiU0VUX1JFUVVFU1RJTkciLCJTRVRfU0hPV19QQU5FTCIsIlNFVF9TSE9XIiwiU0VUX1NFQVJDSF9URVhUIiwiU0VUX1NFQVJDSF9SRVNVTFRTIiwiU0VUX1NIT1dfTU9SRV9GSUVMRFMiLCJUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyIsIkFERF9UT19TRUxFQ1RFRF9UT1BJQ1MiLCJSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MiLCJTRVRfUVVFU1RJT05fREVUQUlMIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsInF1ZXN0aW9uTGlzdCIsImVkaXRvciIsImZlZWQiLCJhY3Rpb25zIiwicmVxdWlyZSIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsImVkaXRvckVsZW1lbnQiLCJxdWVzdGlvbiIsImNvbnRlbnQiLCJtdXRhdGlvbnMiLCJib2R5Iiwic2V0UXVlc3Rpb24iLCJwYXlsb2FkIiwiY29tbWl0Iiwicm9vdFN0YXRlIiwiYW5zd2VyVGV4dCIsInN1bW1lcm5vdGUiLCJwYWdlIiwidG90YWxQYWdlcyIsInJlcXVlc3RpbmciLCJxdWVzdGlvbnMiLCJxdWVzdGlvblVybCIsInNob3dBbnN3ZXJDcmVhdGVNb2RhbCIsImNvbmNhdCIsInNwbGljZSIsImluZGV4T2YiLCJhbnN3ZXJlZCIsInVybCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93IiwiJCIsInNjcm9sbFRvcCIsIm1vZGFsIiwiaW1hZ2VQb3BPdmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRpc3BsYXkiLCJzZXRRdWVzdGlvblVybCIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwid2l0aCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXRhIiwicGFnaW5hdGlvbiIsInRvdGFsX3BhZ2VzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJWdWUiLCJjb21wb25lbnQiLCJlbCIsInN0b3JlIiwiQUREX1FVRVNUSU9OUyIsIlJFTU9WRV9RVUVTVElPTiIsIlNFVF9BU19BTlNXRVJFRCIsIlNFVF9RVUVTVElPTlNfVVJMIiwiSU5DUkVNRU5UX1BBR0UiLCJVUERBVEVfUkVRVUVTVElORyIsIlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwiLCJTRVRfRURJVE9SX0NPTlRFTlQiLCJVUERBVEVfRURJVE9SX0NPTlRFTlQiLCJTRVRfRURJVE9SX1FVRVNUSU9OIiwiU0VUX0VESVRPUl9FTEVNRU5UIiwiU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwiLCJTRVRfU0hPV0VEX0FOU1dFUiIsImFuc3dlcnMiLCJmZWVkVXJscyIsInNob3dBbnN3ZXJNb2RhbCIsInNob3dlZEFuc3dlciIsImFkZEFuc3dlcnMiLCJzZXRGZWVkVXJsIiwiaW5jcmVtZW50UGFnZSIsInVwZGF0ZVJlcXVlc3RpbmciLCJhbnN3ZXIiLCJ1bnNoaWZ0Iiwic2V0U2hvd2VkQW5zd2VyIiwiZ2V0VXJsIiwib25seSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRob2RzIiwicmVsIiwib2JqIiwibGlua3MiLCJmaWx0ZXIiLCJsaW5rIiwicGF0aCIsIndpbmRvdyIsInNlYXJjaE9yQXNrUGFuZWwiLCJzZWFyY2hPckFza092ZXJsYXkiLCJ0b3BpY1JlY29tbWVuZGF0aW9uIiwic2hvdyIsInNlYXJjaFRleHQiLCJxdWVzdGlvbkRldGFpbCIsInNlYXJjaFJlc3VsdHMiLCJzaG93TW9yZUZpZWxkcyIsInNlbGVjdGVkVG9waWNzIiwicG9zdFF1ZXN0aW9uVXJsIiwicHJvdG90eXBlIiwiJHZpZW5kZXIiLCJoZWxwZXJzIiwiYXBpIiwib3ZlcmZsb3dZIiwidG9waWMiLCJwdXNoIiwic2VsZWN0ZWRUb3BpYyIsImlkIiwicG9zdFF1ZXN0aW9uIiwicG9zdCIsInRpdGxlIiwidG9waWNzIiwibG9jYXRpb24iLCJzaG93UGFuZWwiLCJzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMiLCJzZXRUaW1lb3V0IiwiaGlkZVRvcGljUmVjb21tZW5kYXRpb25zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNB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LElBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSCxTQUxJO0FBT0w0RyxnQ0FQSywyQ0FPcUM7QUFBQSxnQkFBaEJwSCxLQUFnQixTQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVFEsTUFBUyxTQUFUQSxNQUFTOztBQUN0QzJHLHVCQUFXLFlBQU07QUFDYjNHLHVCQUFPLGlFQUFQLEVBQXVCLEtBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSDtBQVhJO0FBdENFLENBQWYsQyIsImZpbGUiOiJqcy92aWVuZGVyL3NvY2lhbGl0ZS9yZWFkL2FwcC1tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI4MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzAiLCIvLyBzZWFyY2hPckFza1BhbmVsXG5leHBvcnQgY29uc3QgU0VUX1JFUVVFU1RJTkcgPSAnU0VUX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX1BBTkVMID0gJ1NFVF9TSE9XX1BBTkVMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPVyA9ICdTRVRfU0hPVyc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9URVhUID0gJ1NFVF9TRUFSQ0hfVEVYVCc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9SRVNVTFRTID0gJ1NFVF9TRUFSQ0hfUkVTVUxUUyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfTU9SRV9GSUVMRFMgPSAnU0VUX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9TSE9XX01PUkVfRklFTERTID0gJ1RPR0dMRV9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fU0VMRUNURURfVE9QSUNTID0gJ0FERF9UT19TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyA9ICdSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTl9ERVRBSUwgPSAnU0VUX1FVRVNUSU9OX0RFVEFJTCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9hY3Rpb25zLmpzIiwiaW1wb3J0IGNvcmVNb2R1bGVzIGZyb20gJ3ZpZW5kZXJfY29yZS9qcy9zdG9yZS9tb2R1bGVzLmpzJztcbmltcG9ydCBxdWVzdGlvbkxpc3QgZnJvbSAndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3F1ZXN0aW9uTGlzdCc7XG5pbXBvcnQgZWRpdG9yIGZyb20gJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9lZGl0b3InO1xuaW1wb3J0IGZlZWQgZnJvbSAndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZlZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIG1vZHVsZXM6IE9iamVjdC5hc3NpZ24oY29yZU1vZHVsZXMsIHtcbiAgICBxdWVzdGlvbkxpc3Q6IHF1ZXN0aW9uTGlzdCxcbiAgICBlZGl0b3I6IGVkaXRvcixcbiAgICBmZWVkOiBmZWVkLFxuICB9KSxcblxuICBhY3Rpb25zOiByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlLy9hY3Rpb25zLmpzJyksXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9yZWFkL2Fzc2V0cy9qcy9zdG9yZS5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIGVkaXRvckVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHF1ZXN0aW9uOiBudWxsLFxuICAgICAgICBjb250ZW50OiBudWxsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgW3R5cGVzLlNFVF9FRElUT1JfQ09OVEVOVF0gKHN0YXRlLCBjb250ZW50KSB7XG4gICAgICAgICAgICBzdGF0ZS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVVBEQVRFX0VESVRPUl9DT05URU5UXSAoc3RhdGUsIGJvZHkpIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb250ZW50LmJvZHkgPSBib2R5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfRURJVE9SX1FVRVNUSU9OXSAoc3RhdGUsIHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfRURJVE9SX0VMRU1FTlRdIChzdGF0ZSwgZWRpdG9yRWxlbWVudCkge1xuICAgICAgICAgICAgc3RhdGUuZWRpdG9yRWxlbWVudCA9IGVkaXRvckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZXRRdWVzdGlvbih7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX0VESVRPUl9DT05URU5ULCBwYXlsb2FkLmFuc3dlclRleHQpO1xuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9FRElUT1JfUVVFU1RJT04sIHBheWxvYWQucXVlc3Rpb24pO1xuICAgICAgICAgICAgaWYoc3RhdGUuZWRpdG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmVkaXRvckVsZW1lbnQuc3VtbWVybm90ZSgnY29kZScsIHBheWxvYWQuYW5zd2VyVGV4dC5ib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9lZGl0b3IuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0b3RhbFBhZ2VzOiAyLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgcXVlc3Rpb25zOiBbXSxcbiAgICAgICAgcXVlc3Rpb25Vcmw6e30sXG4gICAgICAgIHNob3dBbnN3ZXJDcmVhdGVNb2RhbDogZmFsc2UsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgW3R5cGVzLkFERF9RVUVTVElPTlNdIChzdGF0ZSwgcXVlc3Rpb25zKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbnMgPSBzdGF0ZS5xdWVzdGlvbnMuY29uY2F0KHF1ZXN0aW9ucyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9RVUVTVElPTl0gKHN0YXRlLCBxdWVzdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25zLnNwbGljZShzdGF0ZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbiksIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfQVNfQU5TV0VSRURdIChzdGF0ZSwgcXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uc1tzdGF0ZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbildLmFuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1FVRVNUSU9OU19VUkxdIChzdGF0ZSwgdXJsKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvblVybCA9IHVybDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuSU5DUkVNRU5UX1BBR0VdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUucGFnZSsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5VUERBVEVfUkVRVUVTVElOR10gKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTF0gKHN0YXRlLCBzaG93QW5zd2VyQ3JlYXRlTW9kYWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dBbnN3ZXJDcmVhdGVNb2RhbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLmFuc3dlci1jcmVhdGUtbW9kYWwtb3ZlcmxheScpLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGltYWdlUG9wT3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJub3RlLWltYWdlLXBvcG92ZXJcIilbMF07XG5cbiAgICAgICAgICAgIGlmKGltYWdlUG9wT3ZlcikgaW1hZ2VQb3BPdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3dBbnN3ZXJDcmVhdGVNb2RhbCA9IHNob3dBbnN3ZXJDcmVhdGVNb2RhbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZXRRdWVzdGlvblVybCh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9LCB1cmwpIHtcbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUVVFU1RJT05TX1VSTCwgdXJsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBmZXRjaERhdGEoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQodHlwZXMuVVBEQVRFX1JFUVVFU1RJTkcsIHRydWUpO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoc3RhdGUucXVlc3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lcicsICdhbnN3ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogc3RhdGUucGFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFBhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXM7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLkFERF9RVUVTVElPTlMsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLklOQ1JFTUVOVF9QQUdFKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuVVBEQVRFX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5VUERBVEVfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvcXVlc3Rpb25MaXN0LmpzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiIEBjbGljaz1cInNob3dBbnN3ZXIoKVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiIHYtaWY9XCJzaG93UXVlc3Rpb25cIj5cblx0XHRcdFx0XHRcdDxoND48YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLnF1ZXN0aW9uKVwiIEBjbGljaz1cInN0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCI+e3sgYW5zd2VyLnF1ZXN0aW9uLnRpdGxlIH19PC9hPjwvaDQ+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQgIFx0PHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJnZXRVcmwoJ2F2YXRhcicsIGFuc3dlci5vd25lcilcIiBhbHQ9XCJcIiBjbGFzcz1cImNpcmNsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLm93bmVyKVwiIEBjbGljaz1cInN0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgYW5zd2VyLm93bmVyLm5hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYW5zd2VyLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIiB2LWh0bWw9XCJhbnN3ZXIucHJldmlld1wiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGEgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIiB2LWlmPVwiYW5zd2VyLnByZXZpZXcubGVuZ3RoID49IDI1OFwiPihtb3JlKTwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuXHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG5cdFx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IHVwdm90ZUNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX3VwPC9hPlxuXHRcdFx0ICAgIFx0PC9zcGFuPlxuXHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIEBjbGljaz1cImRvd252b3RlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfZG93bjwvYT5cblx0XHRcdCAgICBcdDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCJnZXRVcmwoJ2NvbW1lbnRzJywgYW5zd2VyKVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcbiAgICBcdGFuc3dlcjoge1xuICAgIFx0XHR0eXBlOiBPYmplY3QsXG4gICAgXHRcdGRlZmF1bHQ6IG51bGwsXG4gICAgXHR9LFxuICAgIFx0c2hvd1F1ZXN0aW9uOiB7XG4gICAgXHRcdHR5cGU6IEJvb2xlYW4sXG4gICAgXHRcdGRlZmF1bHQ6IHRydWUsXG4gICAgXHR9LFxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGRhdGEoKSB7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBcdFx0c2hvd0NvbW1lbnRzOiBmYWxzZVxuICAgIFx0fVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgIFx0dXB2b3RlQ291bnQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLmFuc3dlciA/IHRoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCA6IDA7XG4gICAgXHR9LFxuXG4gICAgXHRjb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLmFuc3dlciA/IHRoaXMuYW5zd2VyLmNvbW1lbnRfY291bnQgOiAwO1xuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHRzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuXG4gICAgXHRzaG93QW5zd2VyKCkge1xuICAgIFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2ZlZWQvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMLCB0cnVlKTtcbiAgICBcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZlZWQvc2V0U2hvd2VkQW5zd2VyJywgdGhpcy5hbnN3ZXIpO1xuICAgIFx0fSxcblxuICAgIFx0dXB2b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmdldFVybCgndXB2b3RlcycsIHRoaXMuYW5zd2VyKSwge30pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgKz0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSB0cnVlO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCAtPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHRkb3dudm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ2Rvd252b3RlcycsIHRoaXMuYW5zd2VyKSwge30pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG5cdFx0XHQgICAgICAgIFx0aWYoX3RoaXMuYW5zd2VyLnVwdm90ZWQpXG5cdFx0XHQgICAgICAgIFx0XHRfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHR0b2dnbGVDb21tZW50cygpIHtcbiAgICBcdFx0dGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XG4gICAgXHR9LFxuXG4gICAgXHRpbmNyZW1lbnRDb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHRoaXMuY29tbWVudENvdW50Kys7XG4gICAgXHR9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLXByZXZpZXcudnVlPzE1NTRhZmY2IiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGUgVnVlIGFuZCBWdWUgUmVzb3VyY2UuIFRoaXMgZ2l2ZXMgYSBncmVhdCBzdGFydGluZyBwb2ludCBmb3JcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ2NvbW1lbnQnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdjb21tZW50LWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbW1lbnQtY3JlYXRlLWZvcm0nLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXItcHJldmlldycsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdmZWVkLWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlcicsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnYW5zd2VyLXNob3ctbW9kYWwnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlJykpO1xuXG5jb25zdCBmZWVkID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcblxuICAgIHN0b3JlOiBzdG9yZVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvcGFnZXMvcmVhZC9hc3NldHMvanMvYXBwLW1vYmlsZS5qcyIsIjx0ZW1wbGF0ZT5cblx0PGZvcm0gbWV0aG9kPVwiUE9TVFwiIDphY3Rpb249XCJjb21tZW50YWJsZUNvbW1lbnRzVXJsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbCBzOVwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYm9keVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdi1tb2RlbD1cImZvcm1EYXRhLmJvZHlcIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbCBzM1wiPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiYWN0aW9uXCIgQGNsaWNrPVwicG9zdENvbW1lbnQoJGV2ZW50KVwiPlxuXHRcdFx0XHRcdENvbW1lbnRcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsnY29tbWVudGFibGVDb21tZW50c1VybCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuXHRcdFx0Zm9ybURhdGE6IHtcblx0XHRcdFx0Ym9keTogbnVsbCxcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdHBvc3RDb21tZW50KGV2ZW50KSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0XHRpZihldmVudCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG5cdFx0XHRpZiggISBfdGhpcy5mb3JtRGF0YS5ib2R5KSByZXR1cm47XG5cblx0XHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuY29tbWVudGFibGVDb21tZW50c1VybCArICc/d2l0aD1vd25lcicsIHRoaXMuZm9ybURhdGEpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLiRlbWl0KCdjb21tZW50LXBvc3RlZCcsIHJlc3BvbnNlKTtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5mb3JtRGF0YS5ib2R5ID0gbnVsbDtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbW1lbnQtY3JlYXRlLWZvcm0udnVlPzAzZTIyMGU5IiwiPHRlbXBsYXRlPlxuXHQ8dWwgY2xhc3M9XCJjb2xsZWN0aW9uIHUtYm9yZGVyLS1ub25lXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBjb2xsZWN0aW9uLWl0ZW0tZm9ybVwiPlxuICAgICAgICAgICAgPGNvbW1lbnQtY3JlYXRlLWZvcm0gOmNvbW1lbnRhYmxlLWNvbW1lbnRzLXVybD1cImNvbW1lbnRzVXJsXCIgQGNvbW1lbnQtcG9zdGVkPVwiYWRkQ29tbWVudCgkZXZlbnQuZGF0YSlcIj48L2NvbW1lbnQtY3JlYXRlLWZvcm0+ICAgIFxuICAgICAgICA8L2xpPlxuXHRcdDxjb21tZW50IHYtZm9yPVwiY29tbWVudCBpbiBjb21tZW50c1wiIDpjb21tZW50PVwiY29tbWVudFwiPjwvY29tbWVudD5cblx0PC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2NvbW1lbnRzVXJsJ10sXG5cblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29tbWVudHM6IFtdLFxuXHRcdFx0cmVxdWVzdGluZzogZmFsc2UsXG5cdFx0XHRwYWdlOiAxXG5cdFx0fVxuXHR9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgIFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChfdGhpcy5jb21tZW50c1VybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IF90aGlzLnBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29tbWVudHMgPSBfdGhpcy5jb21tZW50cy5jb25jYXQocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlKys7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZENvbW1lbnQoY29tbWVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY29tbWVudC1wb3N0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21tZW50LWxpc3QudnVlPzUxZmNiYTI0IiwiPHRlbXBsYXRlPlxuICA8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyIGF2YXRhci0tc21hbGwgdS1ib3JkZXItLW5vbmVcIj5cbiAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ2F2YXRhcicsIGNvbW1lbnQub3duZXIpXCIgYWx0PVwiXCIgY2xhc3M9XCJ1LWRpbWVuc2lvbi0tc21hbGwgY2lyY2xlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPHN0cm9uZz5cbiAgICAgICAgPGEgY2xhc3M9XCJwcm9maWxlLWxpbmtcIiA6aHJlZj1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBjb21tZW50Lm93bmVyKVwiPnt7IGNvbW1lbnQub3duZXIubmFtZSB9fTwvYT5cbiAgICAgIDwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgICA8cCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyBjb21tZW50LmJvZHkgfX08L3A+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uIHUtYm9yZGVyLS1vbmx5LWJvdHRvbVwiPlxuICAgICAgICA8c3BhbiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBAY2xpY2s9XCJ1cHZvdGVcIj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyB1cHZvdGVDb3VudCB9fTwvc3Bhbj5cbiAgICAgICAgICA8YSA6c3R5bGU9XCIhIGNvbW1lbnQudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl91cDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YSA6c3R5bGU9XCIhIGNvbW1lbnQuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIEBjbGljaz1cImRvd252b3RlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfZG93bjwvYT5cbiAgICAgICAgPGEgc3R5bGU9XCJjb2xvcjogZ3JleTtcIiBAY2xpY2s9XCJ0b2dnbGVDb21tZW50cygpXCI+Q29tbWVudHMgPHNwYW4+KHt7IGNvbW1lbnRDb3VudCB9fSk8L3NwYW4+PC9hPlxuICAgICAgPGNvbW1lbnQtbGlzdCA6Y29tbWVudHMtdXJsPVwiZ2V0VXJsKCdjb21tZW50cycsIGNvbW1lbnQpXCIgQGNvbW1lbnQtcG9zdGVkPVwiaW5jcmVtZW50Q29tbWVudENvdW50KClcIiB2LWlmPVwic2hvd0NvbW1lbnRzXCI+PC9jb21tZW50LWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydjb21tZW50J10sXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICB1cHZvdGVDb3VudDogMCxcbiAgICAgIGNvbW1lbnRDb3VudDogMCxcbiAgICAgIHNob3dDb21tZW50czogZmFsc2UsXG4gICAgfTtcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMudXB2b3RlQ291bnQgPSB0aGlzLmNvbW1lbnQudXB2b3RlX2NvdW50O1xuICAgIHRoaXMuY29tbWVudENvdW50ID0gdGhpcy5jb21tZW50LmNvbW1lbnRfY291bnQ7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHVwdm90ZSgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgIGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ3Vwdm90ZXMnLCB0aGlzLmNvbW1lbnQpLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuICAgICAgICAgIF90aGlzLnVwdm90ZUNvdW50ICs9IDE7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC51cHZvdGVkID0gdHJ1ZTtcbiAgICAgICAgICBfdGhpcy5jb21tZW50LmRvd252b3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG4gICAgICAgICAgX3RoaXMudXB2b3RlQ291bnQgLT0gMTtcbiAgICAgICAgICBfdGhpcy5jb21tZW50LnVwdm90ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkb3dudm90ZSgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgIGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ2Rvd252b3RlcycsIHRoaXMuY29tbWVudCksIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmNvbW1lbnQudXB2b3RlZCkgeyBfdGhpcy51cHZvdGVDb3VudCAtPSAxOyB9XG4gICAgICAgICAgX3RoaXMuY29tbWVudC51cHZvdGVkID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC5kb3dudm90ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC5kb3dudm90ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0b2dnbGVDb21tZW50cygpIHtcbiAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gIXRoaXMuc2hvd0NvbW1lbnRzO1xuICAgIH0sXG5cbiAgICB1cGRhdGVDb21tZW50Q291bnQoKSB7XG4gICAgICB0aGlzLmNvbW1lbnRDb3VudCsrO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tbWVudC52dWU/YTU3MzQ5ZmMiLCIvLyBxdWVzdGlvbkxpc3RcbmV4cG9ydCBjb25zdCBBRERfUVVFU1RJT05TID0gJ0FERF9RVUVTVElPTlMnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9RVUVTVElPTiA9ICdSRU1PVkVfUVVFU1RJT04nO1xuZXhwb3J0IGNvbnN0IFNFVF9BU19BTlNXRVJFRCA9ICdTRVRfQVNfQU5TV0VSRUQnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTlNfVVJMID0gJ1NFVF9RVUVTVElPTlNfVVJMJztcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfUEFHRSA9ICdJTkNSRU1FTlRfUEFHRSc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1JFUVVFU1RJTkcgPSAnVVBEQVRFX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwgPSAnU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCc7XG5cbi8vIGVkaXRvclxuZXhwb3J0IGNvbnN0IFNFVF9FRElUT1JfQ09OVEVOVCA9ICdTRVRfRURJVE9SX0NPTlRFTlQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FRElUT1JfQ09OVEVOVCA9ICdVUERBVEVfRURJVE9SX0NPTlRFTlQnO1xuZXhwb3J0IGNvbnN0IFNFVF9FRElUT1JfUVVFU1RJT04gPSAnU0VUX0VESVRPUl9RVUVTVElPTic7XG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9FTEVNRU5UID0gJ1NFVF9FRElUT1JfRUxFTUVOVCc7XG5cbi8vIGZlZWRcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCA9ICdTRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dFRF9BTlNXRVIgPSAnU0VUX1NIT1dFRF9BTlNXRVInO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci1wcmV2aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01ZTM5NWY5YiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLXByZXZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci1wcmV2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTM5NWY5YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMzk1ZjliXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00MWRlZjExNSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29tbWVudC1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MWRlZjExNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxZGVmMTE1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvbW1lbnQtbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTViM2IxYTQhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbW1lbnQtbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbW1lbnQtbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTViM2IxYTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01NWIzYjFhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvbW1lbnQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTIwZWZmZmVkIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jb21tZW50LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbW1lbnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIwZWZmZmVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjBlZmZmZWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhciBhdmF0YXItLXNtYWxsIHUtYm9yZGVyLS1ub25lXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidS1kaW1lbnNpb24tLXNtYWxsIGNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uY29tbWVudC5vd25lciksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9maWxlLWxpbmtcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmNvbW1lbnQub3duZXIpXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudC5vd25lci5uYW1lKSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnQuYm9keSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb24gdS1ib3JkZXItLW9ubHktYm90dG9tXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwdm90ZVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwdm90ZUNvdW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5jb21tZW50LnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKVxuICB9LCBbX3ZtLl92KFwidGh1bWJfdXBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmNvbW1lbnQuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJyksXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwidGh1bWJfZG93blwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjb2xvclwiOiBcImdyZXlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVDb21tZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tbWVudHMgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmNvbW1lbnRDb3VudCkgKyBcIilcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDb21tZW50cykgPyBfYygnY29tbWVudC1saXN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRzLXVybFwiOiBfdm0uZ2V0VXJsKCdjb21tZW50cycsIF92bS5jb21tZW50KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjBlZmZmZWRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTIwZWZmZmVkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdmb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgIFwiYWN0aW9uXCI6IF92bS5jb21tZW50YWJsZUNvbW1lbnRzVXJsXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczlcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLmJvZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5ib2R5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImJvZHlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5ib2R5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm1EYXRhLmJvZHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzM1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcIm5hbWVcIjogXCJhY3Rpb25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wb3N0Q29tbWVudCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0Q29tbWVudFxcblxcdFxcdFxcdFwiKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQxZGVmMTE1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00MWRlZjExNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbiB1LWJvcmRlci0tbm9uZVwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGNvbGxlY3Rpb24taXRlbS1mb3JtXCJcbiAgfSwgW19jKCdjb21tZW50LWNyZWF0ZS1mb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRhYmxlLWNvbW1lbnRzLXVybFwiOiBfdm0uY29tbWVudHNVcmxcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNvbW1lbnQtcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYWRkQ29tbWVudCgkZXZlbnQuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmNvbW1lbnRzKSwgZnVuY3Rpb24oY29tbWVudCkge1xuICAgIHJldHVybiBfYygnY29tbWVudCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiY29tbWVudFwiOiBjb21tZW50XG4gICAgICB9XG4gICAgfSlcbiAgfSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01NWIzYjFhNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTViM2IxYTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyB1LW1hcmdpbi0tbm9uZSBhbnN3ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNob3dBbnN3ZXIoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0uc2hvd1F1ZXN0aW9uKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX2MoJ2g0JywgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmFuc3dlci5xdWVzdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3RvcFByb3BhZ2F0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIucXVlc3Rpb24udGl0bGUpKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvblwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uYW5zd2VyLm93bmVyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5hbnN3ZXIub3duZXIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN0b3BQcm9wYWdhdGlvbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIub3duZXIubmFtZSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmFuc3dlci5wcmV2aWV3KVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uYW5zd2VyLnByZXZpZXcubGVuZ3RoID49IDI1OCkgPyBfYygnYScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIobW9yZSlcIildKSA6IF92bS5fZSgpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvblwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51cHZvdGVcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiNXB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51cHZvdGVDb3VudCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKVxuICB9LCBbX3ZtLl92KFwidGh1bWJfdXBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmFuc3dlci5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl9kb3duXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImNvbG9yXCI6IFwiZ3JleVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLmFuc3dlcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNvbW1lbnQtcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaW5jcmVtZW50Q29tbWVudENvdW50KClcbiAgICAgIH1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ZTM5NWY5YlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWUzOTVmOWIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdG90YWxQYWdlczogMixcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIGFuc3dlcnM6IFtdLFxuICAgICAgICBmZWVkVXJsczp7fSxcbiAgICAgICAgc2hvd0Fuc3dlck1vZGFsOiBmYWxzZSxcbiAgICAgICAgc2hvd2VkQW5zd2VyOiBudWxsLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIGFkZEFuc3dlcnMoc3RhdGUsIGFuc3dlcnMpIHtcbiAgICAgICAgICAgIHN0YXRlLmFuc3dlcnMgPSBzdGF0ZS5hbnN3ZXJzLmNvbmNhdChhbnN3ZXJzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRGZWVkVXJsKHN0YXRlLCB1cmwpIHtcbiAgICAgICAgICAgIHN0YXRlLmZlZWRVcmxzID0gdXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluY3JlbWVudFBhZ2Uoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UrKztcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVSZXF1ZXN0aW5nKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUxdIChzdGF0ZSwgc2hvd0Fuc3dlck1vZGFsKSB7XG4gICAgICAgICAgICBpZihzaG93QW5zd2VyTW9kYWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3RhdGUuc2hvd0Fuc3dlck1vZGFsID0gc2hvd0Fuc3dlck1vZGFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV0VEX0FOU1dFUl0gKHN0YXRlLCBzaG93ZWRBbnN3ZXIpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dlZEFuc3dlciA9IHNob3dlZEFuc3dlcjtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRBbnN3ZXIoc3RhdGUsIGFuc3dlcikge1xuICAgICAgICAgICAgc3RhdGUuYW5zd2Vycy51bnNoaWZ0KGFuc3dlcik7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChzdGF0ZS5mZWVkVXJscy5hbnN3ZXJzLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGg6IFsnb3duZXInLCAncXVlc3Rpb24nXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogc3RhdGUucGFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFBhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXM7XG4gICAgICAgICAgICAgICAgY29tbWl0KCdhZGRBbnN3ZXJzJywgcmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQoJ2luY3JlbWVudFBhZ2UnKTtcbiAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRTaG93ZWRBbnN3ZXIoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSwgc2hvd2VkQW5zd2VyKSB7XG4gICAgICAgICAgICBpZihzaG93ZWRBbnN3ZXIgPyAhIHNob3dlZEFuc3dlci5ib2R5IDogZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChnZXRVcmwoJ3NlbGYnLCBzaG93ZWRBbnN3ZXIpLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25seTogWydib2R5J10sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBzaG93ZWRBbnN3ZXIuYm9keSA9IHJlc3BvbnNlLmRhdGEuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XRURfQU5TV0VSLCBzaG93ZWRBbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1dFRF9BTlNXRVIsIHNob3dlZEFuc3dlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZmVlZC5qcyIsIjx0ZW1wbGF0ZT5cblx0PGRpdiByZWY9XCJtb2RhbFwiIGNsYXNzPVwiYW5zd2VyLXNob3ctbW9kYWwtb3ZlcmxheVwiIEBjbGljaz1cImhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXCIgdi1zaG93PVwic2hvd0Fuc3dlck1vZGFsXCI+XG5cdFx0PGRpdiBjbGFzcz1cImFuc3dlci1zaG93LW1vZGFsXCIgQGNsaWNrPVwibW9kYWxDbGlja0hhbmRsZSgkZXZlbnQpXCI+XG5cdFx0XHQ8YW5zd2VyIDphbnN3ZXI9XCJhbnN3ZXJcIiB2LWlmPVwiYW5zd2VyID8gYW5zd2VyLmJvZHkgOiBmYWxzZVwiPjwvYW5zd2VyPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyB0b3A6IGNhbGMoNTAlIC0gNzVweCk7IGxlZnQ6IGNhbGMoNTAlIC0gMThweCk7XCIgdi1lbHNlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYWN0aW9uXCI+XG4gICAgICAgICAgICA8c3Bhbj5YPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnYW5zd2VyJ10sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHRhbnN3ZXIoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnNob3dlZEFuc3dlcjtcbiAgICBcdH0sXG5cbiAgICBcdHNob3dBbnN3ZXJNb2RhbCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQuc2hvd0Fuc3dlck1vZGFsO1xuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG1vZGFsQ2xpY2tIYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpIHtcbiAgICAgICAgXHQkKHRoaXMuJHJlZnMubW9kYWwpLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC8nICsgdHlwZXMuU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItc2hvdy1tb2RhbC52dWU/YmY3OWRlZGEiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgdS1tYXJnaW4tLW5vbmUgYW5zd2VyXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCJhbnN3ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiIHYtaWY9XCJzaG93UXVlc3Rpb25cIj5cblx0XHRcdFx0XHRcdDxoND48YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLnF1ZXN0aW9uKVwiPnt7IGFuc3dlci5xdWVzdGlvbi50aXRsZSB9fTwvYT48L2g0PlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8aHIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzMHB4O1wiPlxuXHRcdFx0XHQgIFx0PHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJnZXRVcmwoJ2F2YXRhcicsIGFuc3dlci5vd25lcilcIiBhbHQ9XCJcIiBjbGFzcz1cImNpcmNsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLm93bmVyKVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGFuc3dlci5vd25lci5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFuc3dlci1jb250ZW50XCIgdi1odG1sPVwiYW5zd2VyLmJvZHlcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuXHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG5cdFx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IHVwdm90ZUNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX3VwPC9hPlxuXHRcdFx0ICAgIFx0PC9zcGFuPlxuXHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIEBjbGljaz1cImRvd252b3RlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfZG93bjwvYT5cblx0XHRcdCAgICBcdDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCJnZXRVcmwoJ2NvbW1lbnRzJywgYW5zd2VyKVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICBcdGFuc3dlcjoge1xuICAgIFx0XHR0eXBlOiBPYmplY3QsXG4gICAgXHRcdGRlZmF1bHQ6IG51bGwsXG4gICAgXHR9LFxuICAgIFx0c2hvd1F1ZXN0aW9uOiB7XG4gICAgXHRcdHR5cGU6IEJvb2xlYW4sXG4gICAgXHRcdGRlZmF1bHQ6IHRydWUsXG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIFx0XHRzaG93Q29tbWVudHM6IGZhbHNlXG4gICAgXHR9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHR1cHZvdGVDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IDogMDtcbiAgICBcdH0sXG5cbiAgICBcdGNvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIuY29tbWVudF9jb3VudCA6IDA7XG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdHVwdm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ3Vwdm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50ICs9IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gdHJ1ZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0ZG93bnZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0ICAgICAgICBcdGlmKF90aGlzLmFuc3dlci51cHZvdGVkKSBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHR0b2dnbGVDb21tZW50cygpIHtcbiAgICBcdFx0dGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XG4gICAgXHR9LFxuXG4gICAgXHRpbmNyZW1lbnRDb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHRoaXMuY29tbWVudENvdW50Kys7XG4gICAgXHR9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLnZ1ZT8zOWVjYzhiZSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRVcmwocmVsLCBvYmopIHtcblx0XHRcdHJldHVybiBvYmoubGlua3MuZmlsdGVyKGZ1bmN0aW9uKGxpbmspIHtcblx0XHRcdFx0cmV0dXJuIGxpbmsucmVsID09IHJlbDtcblx0XHRcdH0pWzBdLnVybDtcblx0XHR9LFxuXG5cdFx0dXJsKHBhdGgpIHtcblx0XHRcdHJldHVybiB3aW5kb3cudXJsKHBhdGgpO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VybEhlbHBlci5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgIDxhbnN3ZXItcHJldmlldyA6YW5zd2VyPVwiYW5zd2VyXCIgdi1mb3I9XCJhbnN3ZXIgaW4gYW5zd2Vyc1wiIHYtaWY9XCJhbnN3ZXJzWzBdID8gYW5zd2Vyc1swXS5wcmV2aWV3IDogdHJ1ZVwiIDpzaG93LXF1ZXN0aW9uPVwib3B0aW9ucy5hbnN3ZXJzLnNob3dRdWVzdGlvblwiPjwvYW5zd2VyLXByZXZpZXc+XG4gICAgICAgIDxhbnN3ZXIgOmFuc3dlcj1cImFuc3dlclwiIHYtZm9yPVwiYW5zd2VyIGluIGFuc3dlcnNcIiB2LWVsc2U+PC9hbnN3ZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIgdi1zaG93PVwicmVxdWVzdGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiPkxvYWQgbW9yZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBmZWVkVXJsczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2Vyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1ZXN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICByZXF1ZXN0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQucmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBhbnN3ZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQuYW5zd2VycztcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQucGFnZSAtIDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG90YWxQYWdlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnRvdGFsUGFnZXM7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC9zZXRGZWVkVXJsJywgdGhpcy5mZWVkVXJscyk7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZlZWQvZmV0Y2hEYXRhJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmZWVkLWxpc3QudnVlPzU0OWQ5ZDY3IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItc2hvdy1tb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTJmNTM4ZGEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItc2hvdy1tb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTJmNTM4ZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MmY1MzhkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA3NTRkM2MwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA3NTRkM2MwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDc1NGQzYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZlZWQtbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTI5ZTU3MGEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZlZWQtbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZlZWQtbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTI5ZTU3MGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MjllNTcwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyB1LW1hcmdpbi0tbm9uZSBhbnN3ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczEyXCJcbiAgfSwgWyhfdm0uYW5zd2VyKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbKF92bS5zaG93UXVlc3Rpb24pID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLnF1ZXN0aW9uKVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5xdWVzdGlvbi50aXRsZSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdocicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMzBweFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb25cIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmdldFVybCgnYXZhdGFyJywgX3ZtLmFuc3dlci5vd25lciksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLm93bmVyKVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYW5zd2VyLm93bmVyLm5hbWUpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1jb250ZW50XCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0uYW5zd2VyLmJvZHkpXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwdm90ZVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwdm90ZUNvdW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcInRodW1iX2Rvd25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCJncmV5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlQ29tbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbW1lbnRzIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jb21tZW50Q291bnQpICsgXCIpXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93Q29tbWVudHMpID8gX2MoJ2NvbW1lbnQtbGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50cy11cmxcIjogX3ZtLmdldFVybCgnY29tbWVudHMnLCBfdm0uYW5zd2VyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSkgOiBfdm0uX2UoKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMDc1NGQzYzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA3NTRkM2MwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWVcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsImltcG9ydCBzZWFyY2hPckFza1BhbmVsIGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsJztcbmltcG9ydCBzZWFyY2hPckFza092ZXJsYXkgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheSc7XG5pbXBvcnQgdG9waWNSZWNvbW1lbmRhdGlvbiBmcm9tICcuL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzZWFyY2hPckFza1BhbmVsOiBzZWFyY2hPckFza1BhbmVsLFxuXHRzZWFyY2hPckFza092ZXJsYXk6IHNlYXJjaE9yQXNrT3ZlcmxheSxcbiAgICB0b3BpY1JlY29tbWVuZGF0aW9uOiB0b3BpY1JlY29tbWVuZGF0aW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7fSwgW192bS5fbCgoX3ZtLmFuc3dlcnMpLCBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICByZXR1cm4gKF92bS5hbnN3ZXJzWzBdID8gX3ZtLmFuc3dlcnNbMF0ucHJldmlldyA6IHRydWUpID8gX2MoJ2Fuc3dlci1wcmV2aWV3Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhbnN3ZXJcIjogYW5zd2VyLFxuICAgICAgICBcInNob3ctcXVlc3Rpb25cIjogX3ZtLm9wdGlvbnMuYW5zd2Vycy5zaG93UXVlc3Rpb25cbiAgICAgIH1cbiAgICB9KSA6IF92bS5fbCgoX3ZtLmFuc3dlcnMpLCBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICAgIHJldHVybiBfYygnYW5zd2VyJywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiYW5zd2VyXCI6IGFuc3dlclxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5yZXF1ZXN0aW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVxdWVzdGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiXG4gIH0sIFtfdm0uX20oMCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICBleHByZXNzaW9uOiBcIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjBcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mZXRjaERhdGEoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvYWQgbW9yZVwiKV0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciBsZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXAtcGF0Y2hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTI5ZTU3MGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTUyOWU1NzBhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zaG93QW5zd2VyTW9kYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93QW5zd2VyTW9kYWxcIlxuICAgIH1dLFxuICAgIHJlZjogXCJtb2RhbFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1zaG93LW1vZGFsLW92ZXJsYXlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItc2hvdy1tb2RhbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubW9kYWxDbGlja0hhbmRsZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5hbnN3ZXIgPyBfdm0uYW5zd2VyLmJvZHkgOiBmYWxzZSkgPyBfYygnYW5zd2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFuc3dlclwiOiBfdm0uYW5zd2VyXG4gICAgfVxuICB9KSA6IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgXCJ0b3BcIjogXCJjYWxjKDUwJSAtIDc1cHgpXCIsXG4gICAgICBcImxlZnRcIjogXCJjYWxjKDUwJSAtIDE4cHgpXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciBsZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXAtcGF0Y2hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWFjdGlvblwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJYXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTUyZjUzOGRhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01MmY1MzhkYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHF1ZXN0aW9uRGV0YWlsOiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHBvc3RRdWVzdGlvblVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgnL3F1ZXN0aW9ucycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgaWYoc2hvdykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlRPR0dMRV9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gIXN0YXRlLnNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9RVUVTVElPTl9ERVRBSUxdKHN0YXRlLCBxdWVzdGlvbkRldGFpbCkge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25EZXRhaWwgPSBxdWVzdGlvbkRldGFpbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBwb3N0UXVlc3Rpb24oe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3Qoc3RhdGUucG9zdFF1ZXN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlLnNlYXJjaFRleHQsXG4gICAgICAgICAgICAgICAgYm9keTogc3RhdGUucXVlc3Rpb25EZXRhaWwsXG4gICAgICAgICAgICAgICAgdG9waWNzOiBzdGF0ZS5zZWxlY3RlZFRvcGljcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXSAoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19QQU5FTF0gKHN0YXRlLCBzaG93UGFuZWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dQYW5lbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93UGFuZWwgPSBzaG93UGFuZWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0gKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXSAoc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICB1cmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJ3RvcGljcycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgdHJ1ZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=