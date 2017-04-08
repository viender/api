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
/******/ 	return __webpack_require__(__webpack_require__.s = 279);
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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(42);

/***/ }),

/***/ 118:
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(118);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(117);

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
Vue.component('question-list', __webpack_require__(25));
Vue.component('question', __webpack_require__(48));
Vue.component('answer-create-form', __webpack_require__(43));
Vue.component('answer-create-modal', __webpack_require__(44));

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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);


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

/***/ 32:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'");

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

/***/ 36:
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



/* harmony default export */ __webpack_exports__["default"] = {

    mixins: [__webpack_require__(4)],

    data: function data() {
        return {
            requesting: false,
            showQuestionDetail: false
        };
    },


    computed: {
        content: function content() {
            return this.$store.state.editor.content;
        },
        question: function question() {
            return this.$store.state.editor.question;
        }
    },

    watch: {
        question: function question() {
            this.showQuestionDetail = false;
        }
    },

    mounted: function mounted() {
        var self = this;

        var popOver = document.getElementsByClassName('note-popover');

        for (var i = 0; i < popOver.length; i++) {
            var p = popOver[i];
            p.parentNode.removeChild(p);
        }

        $(document).ready(function () {
            $(self.$refs.editor).summernote({
                minHeight: 400,
                toolbar: [['style', ['bold', 'italic']], ['para', ['ul', 'ol']], ['insert', ['link', 'picture']]],
                callbacks: {
                    onChange: function onChange(contents, $editable) {
                        self.$store.commit('editor/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["d" /* UPDATE_EDITOR_CONTENT */], contents);
                        self.$emit('on-change', contents);
                    }
                }
            });
        });

        this.$store.commit('editor/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["f" /* SET_EDITOR_ELEMENT */], $(self.$refs.editor));
    },


    methods: {
        answer: function answer(event) {
            var self = this;

            if (event) event.preventDefault();

            if (self.requesting) return;

            if (!self.content.body) return;

            self.requesting = true;

            axios.post(this.getUrl('answers', this.question) + '?with=owner', self.content).then(function (response) {
                if (response.status == 200) {
                    self.$emit('answer-posted', response.data);
                    self.$store.commit('editor/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["d" /* UPDATE_EDITOR_CONTENT */], null);
                    self.$store.commit('questionList/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["i" /* SET_AS_ANSWERED */], self.question);
                    $(self.$refs.editor).summernote('code', '');
                }
                self.requesting = false;
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 401) {
                        document.location = url('login');
                    }
                }
                self.requesting = false;
            });
        },
        toggleQuestionDetail: function toggleQuestionDetail() {
            this.showQuestionDetail = !this.showQuestionDetail;
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 37:
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



/* harmony default export */ __webpack_exports__["default"] = {
    computed: {
        showModal: function showModal() {
            return this.$store.state.questionList.showAnswerCreateModal;
        }
    },

    watch: {
        showModal: function showModal() {
            var _this = this;

            if (this.showModal) {
                Vue.nextTick(function () {
                    // $(_this.$refs.form.$refs.editor).summernote('editor.focus');
                });
            }
        }
    },

    methods: {
        modalClickHandle: function modalClickHandle(event) {
            event.stopPropagation();
        },
        hideAnswerCreateModal: function hideAnswerCreateModal(answer) {
            this.$store.commit('questionList/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["m" /* SET_SHOW_ANSWER_CREATE_MODAL */], false);

            if (this.$store.state.feed) {
                this.$store.commit('feed/addAnswer', answer);
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

/***/ 41:
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
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    props: ['question', 'url', 'showDetail'],

    data: function data() {
        return {
            expandQuestionDetail: false,
            questionObj: null,
            requesting: false,
            upvoteCount: 0,
            commentCount: 0,
            showComments: false,
            staticPreloaders: document.getElementsByClassName('question-static-preloader'),
            answerText: {
                body: null
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        // if the argument is an question object, use it.
        // if the argument is an url, feth question from there.
        if (_this.question) {
            _this.questionObj = _this.question;
            _this.upvoteCount = _this.question.upvote_count;
            _this.commentCount = _this.question.comment_count;
            _this.hideStaticPreloaders();
        } else if (_this.url) {
            var url = _this.url;

            axios.get(url, {
                params: {
                    with: ['owner']
                }
            }).then(function (response) {
                _this.questionObj = response.data;
                _this.upvoteCount = response.data.upvote_count;
                _this.commentCount = response.data.comment_count;
                _this.hideStaticPreloaders();
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            throw 'question and url not defined.';
        }

        for (var i = 0; i < this.staticPreloaders.length; i++) {
            this.staticPreloaders[i].style.borderBottom = '0';
        }
    },


    methods: {
        hideStaticPreloaders: function hideStaticPreloaders() {
            for (var i = 0; i < this.staticPreloaders.length; i++) {
                this.staticPreloaders[i].style.display = 'none';
            }
        },
        showAnswerCreateModal: function showAnswerCreateModal() {
            this.$store.commit('questionList/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["m" /* SET_SHOW_ANSWER_CREATE_MODAL */], true);
            this.$store.dispatch('editor/setQuestion', {
                question: this.questionObj,
                answerText: this.answerText
            });
        },
        downvote: function downvote() {
            var _this = this;

            if (_this.requesting) return;

            _this.requesting = true;

            axios.post(this.$viender.helpers.getUrl('downvotes', _this.questionObj), {}).then(function (response) {
                if (response.status == 201) {
                    _this.questionObj.downvoted = true;
                }
                if (response.status == 204) {
                    _this.questionObj.downvoted = false;
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

/***/ 42:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/summernote/dist/summernote.js'");

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/answer-create-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] answer-create-form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77add2c8", Component.options)
  } else {
    hotAPI.reload("data-v-77add2c8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/answer-create-modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] answer-create-modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d3b9b24e", Component.options)
  } else {
    hotAPI.reload("data-v-d3b9b24e", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/socialite/resources/core/js/components/question.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] question.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73fc9870", Component.options)
  } else {
    hotAPI.reload("data-v-73fc9870", Component.options)
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row u-margin--none question"
  }, [_c('div', {
    staticClass: "col s12"
  }, [(!(_vm.questionObj ? _vm.questionObj.downvoted : true)) ? _c('div', {
    staticClass: "card u-margin--none u-box-shadow--none"
  }, [_c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "card-title"
  }, [_c('h4', [_c('a', {
    attrs: {
      "href": _vm.$viender.helpers.getUrl('self_html', _vm.questionObj)
    }
  }, [_vm._v(_vm._s(_vm.questionObj ? _vm.questionObj.title : ''))])])])]), _vm._v(" "), _c('div', {
    class: _vm.expandQuestionDetail ? 'answerCreateForm-questionDetail' : 'answerCreateForm-questionDetail shrinked',
    on: {
      "click": function($event) {
        _vm.expandQuestionDetail = !_vm.expandQuestionDetail
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.questionObj ? _vm.questionObj.body : '') + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [(!(_vm.questionObj ? _vm.questionObj.answered : true)) ? _c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.showAnswerCreateModal()
      }
    }
  }, [_vm._v("\n\t\t\t    \t\tAnswer\n\t\t\t    \t")]) : _c('a', {
    staticClass: "grey-text darken-3"
  }, [_vm._v("\n\t\t\t\t\t\tAnswered\n\t\t\t\t\t")]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.downvote
    }
  }, [_vm._v("Downvote")]), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        _vm.toggleComments()
      }
    }
  }, [_vm._v("Comments "), _c('span', [_vm._v("(" + _vm._s(_vm.commentCount) + ")")])]), _vm._v(" "), (_vm.showComments) ? _c('comment-list', {
    attrs: {
      "comments-url": _vm.$viender.helpers.getUrl('comments', _vm.questionObj)
    },
    on: {
      "comment-posted": function($event) {
        _vm.incrementCommentCount()
      }
    }
  }) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (_vm.questionObj ? _vm.questionObj.downvoted : false) ? _c('div', {
    staticClass: "card u-margin--none u-box-shadow--none"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    on: {
      "click": _vm.downvote
    }
  }, [_vm._v("Undo")])])]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-content"
  }, [_c('strong', [_vm._v("You downvoted this question")]), _vm._v(" "), _c('p', [_vm._v("Downvoting low-quality content improves Viender for everyone.")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73fc9870", module.exports)
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "padding-bottom": "20px"
    }
  }, [_c('h4', [_c('a', {
    attrs: {
      "href": _vm.question ? _vm.getUrl('self_html', _vm.question) : ''
    }
  }, [_vm._v(_vm._s(_vm.question ? _vm.question.title : ''))])]), _vm._v(" "), _c('div', {
    class: _vm.showQuestionDetail ? 'answerCreateForm-questionDetail' : 'answerCreateForm-questionDetail shrinked',
    on: {
      "click": function($event) {
        _vm.showQuestionDetail = !_vm.showQuestionDetail
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.question ? _vm.question.body : '') + "\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('ul', {
    staticClass: "collection"
  }, [_c('li', {
    staticClass: "collection-item avatar"
  }, [_c('img', {
    staticClass: "circle",
    attrs: {
      "src": _vm.$viender.treasure.user ? _vm.getUrl('avatar', _vm.$viender.treasure.user) : '',
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "card-title"
  }, [_vm._v("\n                    " + _vm._s(_vm.$viender.treasure.user ? _vm.$viender.treasure.user.name : '') + "\n                ")])])])]), _vm._v(" "), _c('div', {
    ref: "editor",
    staticClass: "answer-create-editor"
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": function($event) {
        _vm.answer($event)
      }
    }
  }, [_vm._v("Submit")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-77add2c8", module.exports)
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showModal),
      expression: "showModal"
    }],
    staticClass: "answerCreateModal-overlay",
    on: {
      "click": function($event) {
        _vm.hideAnswerCreateModal()
      }
    }
  }, [_c('div', {
    staticClass: "answerCreateModal",
    on: {
      "click": function($event) {
        _vm.modalClickHandle($event)
      }
    }
  }, [_c('div', {
    staticClass: "answerCreateModal-content"
  }, [_c('answer-create-form', {
    ref: "form",
    on: {
      "answer-posted": function($event) {
        _vm.hideAnswerCreateModal($event)
      }
    }
  })], 1)]), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-action"
  }, [_c('span', [_vm._v("X")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d3b9b24e", module.exports)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/NGJkYioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanM/NjE2ZCoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL3BhZ2VzL3F1ZXN0aW9uU2hvdy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9xdWVzdGlvblNob3cvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZWRpdG9yLmpzPzE4OWIqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9xdWVzdGlvbkxpc3QuanM/ZDA3MCoqKiIsIndlYnBhY2s6Ly8vYW5zd2VyLXByZXZpZXcudnVlPzFhYmMqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL3BhZ2VzL3F1ZXN0aW9uU2hvdy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT8yMDgzKioqIiwid2VicGFjazovLy9jb21tZW50LWxpc3QudnVlPzU4OTEqKioiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQudnVlPzc3ZmMqKioiLCJ3ZWJwYWNrOi8vL3F1ZXN0aW9uLWxpc3QudnVlP2JhZWUqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/MmJjNSoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWU/MGRjZCoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT85NjQ4KioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWU/ODJmMSoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZT85YjExKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlP2QzOTEqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWU/ZTljMioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT9jNTc3KioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWU/YjllMSoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWU/ZmIxZSoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZT8zMjQ0KioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZlZWQuanM/MzVkNyoqKiIsIndlYnBhY2s6Ly8vYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZT8zM2FlKioqIiwid2VicGFjazovLy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZT8zYTMxKioqIiwid2VicGFjazovLy9hbnN3ZXItc2hvdy1tb2RhbC52dWU/MWQ2YioqKiIsIndlYnBhY2s6Ly8vYW5zd2VyLnZ1ZT8zNWM4KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VybEhlbHBlci5qcz80MjkwKioqIiwid2VicGFjazovLy9mZWVkLWxpc3QudnVlP2IwN2QqKioiLCJ3ZWJwYWNrOi8vL3F1ZXN0aW9uLnZ1ZT82OTUxKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlPzI5ODkqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcz8zZjViKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWU/NWViOCoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWU/ODhiNyoqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWU/MDUxNioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlPzE2N2QqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWU/NWYzYyoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcz9hZmFhKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcz8wOWM1KioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcz8zNjIwKioqKiJdLCJuYW1lcyI6WyJTRVRfUkVRVUVTVElORyIsIlNFVF9TSE9XX1BBTkVMIiwiU0VUX1NIT1ciLCJTRVRfU0VBUkNIX1RFWFQiLCJTRVRfU0VBUkNIX1JFU1VMVFMiLCJTRVRfU0hPV19NT1JFX0ZJRUxEUyIsIlRPR0dMRV9TSE9XX01PUkVfRklFTERTIiwiQUREX1RPX1NFTEVDVEVEX1RPUElDUyIsIlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyIsIlNFVF9RVUVTVElPTl9ERVRBSUwiLCJyZXF1aXJlIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsInF1ZXN0aW9uTGlzdCIsImVkaXRvciIsImZlZWQiLCJhY3Rpb25zIiwibmFtZXNwYWNlZCIsInN0YXRlIiwiZWRpdG9yRWxlbWVudCIsInF1ZXN0aW9uIiwiY29udGVudCIsIm11dGF0aW9ucyIsImJvZHkiLCJzZXRRdWVzdGlvbiIsInBheWxvYWQiLCJjb21taXQiLCJyb290U3RhdGUiLCJhbnN3ZXJUZXh0Iiwic3VtbWVybm90ZSIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwicmVxdWVzdGluZyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uVXJsIiwic2hvd0Fuc3dlckNyZWF0ZU1vZGFsIiwiY29uY2F0Iiwic3BsaWNlIiwiaW5kZXhPZiIsImFuc3dlcmVkIiwidXJsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwib3ZlcmZsb3ciLCIkIiwic2Nyb2xsVG9wIiwibW9kYWwiLCJpbWFnZVBvcE92ZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzcGxheSIsInNldFF1ZXN0aW9uVXJsIiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJ3aXRoIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1ldGEiLCJwYWdpbmF0aW9uIiwidG90YWxfcGFnZXMiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlZ1ZSIsImNvbXBvbmVudCIsImVsIiwic3RvcmUiLCJBRERfUVVFU1RJT05TIiwiUkVNT1ZFX1FVRVNUSU9OIiwiU0VUX0FTX0FOU1dFUkVEIiwiU0VUX1FVRVNUSU9OU19VUkwiLCJJTkNSRU1FTlRfUEFHRSIsIlVQREFURV9SRVFVRVNUSU5HIiwiU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCIsIlNFVF9FRElUT1JfQ09OVEVOVCIsIlVQREFURV9FRElUT1JfQ09OVEVOVCIsIlNFVF9FRElUT1JfUVVFU1RJT04iLCJTRVRfRURJVE9SX0VMRU1FTlQiLCJTRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCIsIlNFVF9TSE9XRURfQU5TV0VSIiwiYW5zd2VycyIsImZlZWRVcmxzIiwic2hvd0Fuc3dlck1vZGFsIiwic2hvd2VkQW5zd2VyIiwiYWRkQW5zd2VycyIsInNldEZlZWRVcmwiLCJpbmNyZW1lbnRQYWdlIiwidXBkYXRlUmVxdWVzdGluZyIsImFuc3dlciIsInVuc2hpZnQiLCJzZXRTaG93ZWRBbnN3ZXIiLCJnZXRVcmwiLCJvbmx5IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGhvZHMiLCJyZWwiLCJvYmoiLCJsaW5rcyIsImZpbHRlciIsImxpbmsiLCJwYXRoIiwid2luZG93Iiwic2VhcmNoT3JBc2tQYW5lbCIsInNlYXJjaE9yQXNrT3ZlcmxheSIsInRvcGljUmVjb21tZW5kYXRpb24iLCJzaG93Iiwic2VhcmNoVGV4dCIsInF1ZXN0aW9uRGV0YWlsIiwic2VhcmNoUmVzdWx0cyIsInNob3dNb3JlRmllbGRzIiwic2VsZWN0ZWRUb3BpY3MiLCJwb3N0UXVlc3Rpb25VcmwiLCJwcm90b3R5cGUiLCIkdmllbmRlciIsImhlbHBlcnMiLCJhcGkiLCJvdmVyZmxvd1kiLCJ0b3BpYyIsInB1c2giLCJzZWxlY3RlZFRvcGljIiwiaWQiLCJwb3N0UXVlc3Rpb24iLCJwb3N0IiwidGl0bGUiLCJ0b3BpY3MiLCJsb2NhdGlvbiIsInNob3dQYW5lbCIsInNob3dUb3BpY1JlY29tbWVuZGF0aW9ucyIsInNldFRpbWVvdXQiLCJoaWRlVG9waWNSZWNvbW1lbmRhdGlvbnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFD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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDdERBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDNUJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0Es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ckJMLFlBcUJ3Q3hHLEtBckJ4QyxFQXFCK0N3RyxLQXJCL0MsRUFxQnNEO0FBQzlDeEcsY0FBTWlHLGNBQU4sR0FBdUJqRyxNQUFNaUcsY0FBTixDQUFxQlosTUFBckIsQ0FBNEI7QUFBQSxtQkFBaUJxQixjQUFjQyxFQUFkLEtBQXFCSCxNQUFNRyxFQUE1QztBQUFBLFNBQTVCLENBQXZCO0FBQ0gsS0F2QkwsY0FaVzs7QUFzQ1g3RyxhQUFTO0FBQ0xvSCxnQ0FESywwQ0FDcUM7QUFBQSxnQkFBaEJsSCxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVFEsTUFBUyxRQUFUQSxNQUFTOztBQUN0QzJHLHVCQUFXLFlBQU07QUFDYjNHLHVCQUFPLGlFQUFQLEVBQXVCLElBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSCxTQUxJO0FBT0w0RyxnQ0FQSywyQ0FPcUM7QUFBQSxnQkFBaEJwSCxLQUFnQixTQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVFEsTUFBUyxTQUFUQSxNQUFTOztBQUN0QzJHLHVCQUFXLFlBQU07QUFDYjNHLHVCQUFPLGlFQUFQLEVBQXVCLEtBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSDtBQVhJO0FBdENFLENBQWYsQyIsImZpbGUiOiJqcy92aWVuZGVyL3NvY2lhbGl0ZS9xdWVzdGlvblNob3cvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNzkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFjNzY1ZjZmOGEzYjdmM2Y0ODMwIiwiLy8gc2VhcmNoT3JBc2tQYW5lbFxuZXhwb3J0IGNvbnN0IFNFVF9SRVFVRVNUSU5HID0gJ1NFVF9SRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19QQU5FTCA9ICdTRVRfU0hPV19QQU5FTCc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1cgPSAnU0VUX1NIT1cnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfVEVYVCA9ICdTRVRfU0VBUkNIX1RFWFQnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfUkVTVUxUUyA9ICdTRVRfU0VBUkNIX1JFU1VMVFMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX01PUkVfRklFTERTID0gJ1NFVF9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyA9ICdUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX1NFTEVDVEVEX1RPUElDUyA9ICdBRERfVE9fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MgPSAnUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFU1RJT05fREVUQUlMID0gJ1NFVF9RVUVTVElPTl9ERVRBSUwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvYWN0aW9ucy5qcyIsInJlcXVpcmUoJ2Jvb3RzdHJhcC1zYXNzJyk7XG5yZXF1aXJlKCdzdW1tZXJub3RlJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvcGFnZXMvcXVlc3Rpb25TaG93L2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJpbXBvcnQgY29yZU1vZHVsZXMgZnJvbSAndmllbmRlcl9jb3JlL2pzL3N0b3JlL21vZHVsZXMuanMnO1xuaW1wb3J0IHF1ZXN0aW9uTGlzdCBmcm9tICd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvcXVlc3Rpb25MaXN0JztcbmltcG9ydCBlZGl0b3IgZnJvbSAndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2VkaXRvcic7XG5pbXBvcnQgZmVlZCBmcm9tICd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZmVlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczogT2JqZWN0LmFzc2lnbihjb3JlTW9kdWxlcywge1xuICAgIHF1ZXN0aW9uTGlzdDogcXVlc3Rpb25MaXN0LFxuICAgIGVkaXRvcjogZWRpdG9yLFxuICAgIGZlZWQ6IGZlZWQsXG4gIH0pLFxuXG4gIGFjdGlvbnM6IHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvL2FjdGlvbnMuanMnKSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL3BhZ2VzL3F1ZXN0aW9uU2hvdy9hc3NldHMvanMvc3RvcmUuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBlZGl0b3JFbGVtZW50OiBudWxsLFxuICAgICAgICBxdWVzdGlvbjogbnVsbCxcbiAgICAgICAgY29udGVudDogbnVsbFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5TRVRfRURJVE9SX0NPTlRFTlRdIChzdGF0ZSwgY29udGVudCkge1xuICAgICAgICAgICAgc3RhdGUuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlVQREFURV9FRElUT1JfQ09OVEVOVF0gKHN0YXRlLCBib2R5KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY29udGVudC5ib2R5ID0gYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX0VESVRPUl9RVUVTVElPTl0gKHN0YXRlLCBxdWVzdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX0VESVRPUl9FTEVNRU5UXSAoc3RhdGUsIGVkaXRvckVsZW1lbnQpIHtcbiAgICAgICAgICAgIHN0YXRlLmVkaXRvckVsZW1lbnQgPSBlZGl0b3JFbGVtZW50O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2V0UXVlc3Rpb24oeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9FRElUT1JfQ09OVEVOVCwgcGF5bG9hZC5hbnN3ZXJUZXh0KTtcbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfRURJVE9SX1FVRVNUSU9OLCBwYXlsb2FkLnF1ZXN0aW9uKTtcbiAgICAgICAgICAgIGlmKHN0YXRlLmVkaXRvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5lZGl0b3JFbGVtZW50LnN1bW1lcm5vdGUoJ2NvZGUnLCBwYXlsb2FkLmFuc3dlclRleHQuYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZWRpdG9yLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdG90YWxQYWdlczogMixcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHF1ZXN0aW9uczogW10sXG4gICAgICAgIHF1ZXN0aW9uVXJsOnt9LFxuICAgICAgICBzaG93QW5zd2VyQ3JlYXRlTW9kYWw6IGZhbHNlLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5BRERfUVVFU1RJT05TXSAoc3RhdGUsIHF1ZXN0aW9ucykge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25zID0gc3RhdGUucXVlc3Rpb25zLmNvbmNhdChxdWVzdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfUVVFU1RJT05dIChzdGF0ZSwgcXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9ucy5zcGxpY2Uoc3RhdGUucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pLCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX0FTX0FOU1dFUkVEXSAoc3RhdGUsIHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbnNbc3RhdGUucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pXS5hbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9RVUVTVElPTlNfVVJMXSAoc3RhdGUsIHVybCkge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25VcmwgPSB1cmw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLklOQ1JFTUVOVF9QQUdFXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UrKztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVVBEQVRFX1JFUVVFU1RJTkddIChzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUxdIChzdGF0ZSwgc2hvd0Fuc3dlckNyZWF0ZU1vZGFsKSB7XG4gICAgICAgICAgICBpZihzaG93QW5zd2VyQ3JlYXRlTW9kYWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5hbnN3ZXItY3JlYXRlLW1vZGFsLW92ZXJsYXknKS5zY3JvbGxUb3AoMCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgICAgICQoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbWFnZVBvcE92ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibm90ZS1pbWFnZS1wb3BvdmVyXCIpWzBdO1xuXG4gICAgICAgICAgICBpZihpbWFnZVBvcE92ZXIpIGltYWdlUG9wT3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBzdGF0ZS5zaG93QW5zd2VyQ3JlYXRlTW9kYWwgPSBzaG93QW5zd2VyQ3JlYXRlTW9kYWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2V0UXVlc3Rpb25VcmwoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSwgdXJsKSB7XG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1FVRVNUSU9OU19VUkwsIHVybCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmV0Y2hEYXRhKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlVQREFURV9SRVFVRVNUSU5HLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHN0YXRlLnF1ZXN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGg6IFsnb3duZXInLCAnYW5zd2VyJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWxQYWdlcyA9IHJlc3BvbnNlLmRhdGEubWV0YS5wYWdpbmF0aW9uLnRvdGFsX3BhZ2VzO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5BRERfUVVFU1RJT05TLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5JTkNSRU1FTlRfUEFHRSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlVQREFURV9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuVVBEQVRFX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3F1ZXN0aW9uTGlzdC5qcyIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyB1LW1hcmdpbi0tbm9uZSBhbnN3ZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIHMxMlwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIiBAY2xpY2s9XCJzaG93QW5zd2VyKClcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIiB2LWlmPVwic2hvd1F1ZXN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8aDQ+PGEgOmhyZWY9XCJnZXRVcmwoJ3NlbGZfaHRtbCcsIGFuc3dlci5xdWVzdGlvbilcIiBAY2xpY2s9XCJzdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiPnt7IGFuc3dlci5xdWVzdGlvbi50aXRsZSB9fTwvYT48L2g0PlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0ICBcdDx1bCBjbGFzcz1cImNvbGxlY3Rpb25cIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cblx0XHRcdFx0XHRcdFx0PGltZyA6c3JjPVwiZ2V0VXJsKCdhdmF0YXInLCBhbnN3ZXIub3duZXIpXCIgYWx0PVwiXCIgY2xhc3M9XCJjaXJjbGVcIj5cblx0XHRcdFx0XHRcdFx0PGEgOmhyZWY9XCJnZXRVcmwoJ3NlbGZfaHRtbCcsIGFuc3dlci5vd25lcilcIiBAY2xpY2s9XCJzdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGFuc3dlci5vd25lci5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFuc3dlci1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCIgdi1odG1sPVwiYW5zd2VyLnByZXZpZXdcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxhIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgdi1pZj1cImFuc3dlci5wcmV2aWV3Lmxlbmd0aCA+PSAyNThcIj4obW9yZSk8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cblx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIEBjbGljaz1cInVwdm90ZVwiPlxuXHRcdFx0XHQgICAgXHQ8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyB1cHZvdGVDb3VudCB9fTwvc3Bhbj5cblx0XHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl91cDwvYT5cblx0XHRcdCAgICBcdDwvc3Bhbj5cblx0XHRcdCAgICBcdDxhIDpzdHlsZT1cIiEgYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBAY2xpY2s9XCJkb3dudm90ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX2Rvd248L2E+XG5cdFx0XHQgICAgXHQ8YSBzdHlsZT1cImNvbG9yOiBncmV5O1wiIEBjbGljaz1cInRvZ2dsZUNvbW1lbnRzKClcIj5Db21tZW50cyA8c3Bhbj4oe3sgY29tbWVudENvdW50IH19KTwvc3Bhbj48L2E+XG5cdFx0XHRcdFx0PGNvbW1lbnQtbGlzdCA6Y29tbWVudHMtdXJsPVwiZ2V0VXJsKCdjb21tZW50cycsIGFuc3dlcilcIiBAY29tbWVudC1wb3N0ZWQ9XCJpbmNyZW1lbnRDb21tZW50Q291bnQoKVwiIHYtaWY9XCJzaG93Q29tbWVudHNcIj48L2NvbW1lbnQtbGlzdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiB7XG4gICAgXHRhbnN3ZXI6IHtcbiAgICBcdFx0dHlwZTogT2JqZWN0LFxuICAgIFx0XHRkZWZhdWx0OiBudWxsLFxuICAgIFx0fSxcbiAgICBcdHNob3dRdWVzdGlvbjoge1xuICAgIFx0XHR0eXBlOiBCb29sZWFuLFxuICAgIFx0XHRkZWZhdWx0OiB0cnVlLFxuICAgIFx0fSxcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgICBkYXRhKCkge1xuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0cmVxdWVzdGluZzogZmFsc2UsXG4gICAgXHRcdHNob3dDb21tZW50czogZmFsc2VcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICBcdHVwdm90ZUNvdW50KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy5hbnN3ZXIgPyB0aGlzLmFuc3dlci51cHZvdGVfY291bnQgOiAwO1xuICAgIFx0fSxcblxuICAgIFx0Y29tbWVudENvdW50KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy5hbnN3ZXIgPyB0aGlzLmFuc3dlci5jb21tZW50X2NvdW50IDogMDtcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgIFx0c3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcblxuICAgIFx0c2hvd0Fuc3dlcigpIHtcbiAgICBcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdmZWVkLycgKyB0eXBlcy5TRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCwgdHJ1ZSk7XG4gICAgXHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdmZWVkL3NldFNob3dlZEFuc3dlcicsIHRoaXMuYW5zd2VyKTtcbiAgICBcdH0sXG5cbiAgICBcdHVwdm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ3Vwdm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50ICs9IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gdHJ1ZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0ZG93bnZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0ICAgICAgICBcdGlmKF90aGlzLmFuc3dlci51cHZvdGVkKVxuXHRcdFx0ICAgICAgICBcdFx0X3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCAtPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gdHJ1ZTtcblx0XHRcdCAgICAgICAgfVxuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0dG9nZ2xlQ29tbWVudHMoKSB7XG4gICAgXHRcdHRoaXMuc2hvd0NvbW1lbnRzID0gIXRoaXMuc2hvd0NvbW1lbnRzO1xuICAgIFx0fSxcblxuICAgIFx0aW5jcmVtZW50Q29tbWVudENvdW50KCkge1xuICAgIFx0XHR0aGlzLmNvbW1lbnRDb3VudCsrO1xuICAgIFx0fVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci1wcmV2aWV3LnZ1ZT8xNTU0YWZmNiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlIFZ1ZSBhbmQgVnVlIFJlc291cmNlLiBUaGlzIGdpdmVzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgZm9yXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdjb21tZW50JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnY29tbWVudC1saXN0JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdjb21tZW50LWNyZWF0ZS1mb3JtJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlJykpO1xuVnVlLmNvbXBvbmVudCgnYW5zd2VyLXByZXZpZXcnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnZmVlZC1saXN0JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXInLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1zaG93LW1vZGFsJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3F1ZXN0aW9uLWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdxdWVzdGlvbicsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXItY3JlYXRlLWZvcm0nLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1jcmVhdGUtbW9kYWwnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWUnKSk7XG5cbmNvbnN0IGZlZWQgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuXG4gICAgc3RvcmU6IHN0b3JlLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvcGFnZXMvcXVlc3Rpb25TaG93L2Fzc2V0cy9qcy9hcHAuanMiLCI8dGVtcGxhdGU+XG5cdDxmb3JtIG1ldGhvZD1cIlBPU1RcIiA6YWN0aW9uPVwiY29tbWVudGFibGVDb21tZW50c1VybFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczlcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJvZHlcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHYtbW9kZWw9XCJmb3JtRGF0YS5ib2R5XCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczNcIj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiIEBjbGljaz1cInBvc3RDb21tZW50KCRldmVudClcIj5cblx0XHRcdFx0XHRDb21tZW50XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2NvbW1lbnRhYmxlQ29tbWVudHNVcmwnXSxcblxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcblx0XHRcdGZvcm1EYXRhOiB7XG5cdFx0XHRcdGJvZHk6IG51bGwsXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRwb3N0Q29tbWVudChldmVudCkge1xuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdFx0aWYoZXZlbnQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuXHRcdFx0aWYoICEgX3RoaXMuZm9ybURhdGEuYm9keSkgcmV0dXJuO1xuXG5cdFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmNvbW1lbnRhYmxlQ29tbWVudHNVcmwgKyAnP3dpdGg9b3duZXInLCB0aGlzLmZvcm1EYXRhKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy4kZW1pdCgnY29tbWVudC1wb3N0ZWQnLCByZXNwb25zZSk7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuZm9ybURhdGEuYm9keSA9IG51bGw7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT8wM2UyMjBlOSIsIjx0ZW1wbGF0ZT5cblx0PHVsIGNsYXNzPVwiY29sbGVjdGlvbiB1LWJvcmRlci0tbm9uZVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gY29sbGVjdGlvbi1pdGVtLWZvcm1cIj5cbiAgICAgICAgICAgIDxjb21tZW50LWNyZWF0ZS1mb3JtIDpjb21tZW50YWJsZS1jb21tZW50cy11cmw9XCJjb21tZW50c1VybFwiIEBjb21tZW50LXBvc3RlZD1cImFkZENvbW1lbnQoJGV2ZW50LmRhdGEpXCI+PC9jb21tZW50LWNyZWF0ZS1mb3JtPiAgICBcbiAgICAgICAgPC9saT5cblx0XHQ8Y29tbWVudCB2LWZvcj1cImNvbW1lbnQgaW4gY29tbWVudHNcIiA6Y29tbWVudD1cImNvbW1lbnRcIj48L2NvbW1lbnQ+XG5cdDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydjb21tZW50c1VybCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbW1lbnRzOiBbXSxcblx0XHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuXHRcdFx0cGFnZTogMVxuXHRcdH1cblx0fSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICBcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoX3RoaXMuY29tbWVudHNVcmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBfdGhpcy5wYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbW1lbnRzID0gX3RoaXMuY29tbWVudHMuY29uY2F0KHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRDb21tZW50KGNvbW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbW1lbnQtcG9zdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tbWVudC1saXN0LnZ1ZT81MWZjYmEyNCIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhciBhdmF0YXItLXNtYWxsIHUtYm9yZGVyLS1ub25lXCI+XG4gICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdhdmF0YXInLCBjb21tZW50Lm93bmVyKVwiIGFsdD1cIlwiIGNsYXNzPVwidS1kaW1lbnNpb24tLXNtYWxsIGNpcmNsZVwiPlxuICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIDxzdHJvbmc+XG4gICAgICAgIDxhIGNsYXNzPVwicHJvZmlsZS1saW5rXCIgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgY29tbWVudC5vd25lcilcIj57eyBjb21tZW50Lm93bmVyLm5hbWUgfX08L2E+XG4gICAgICA8L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICAgPHAgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgY29tbWVudC5ib2R5IH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbiB1LWJvcmRlci0tb25seS1ib3R0b21cIj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgdXB2b3RlQ291bnQgfX08L3NwYW4+XG4gICAgICAgICAgPGEgOnN0eWxlPVwiISBjb21tZW50LnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfdXA8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGEgOnN0eWxlPVwiISBjb21tZW50LmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBAY2xpY2s9XCJkb3dudm90ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX2Rvd248L2E+XG4gICAgICAgIDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cbiAgICAgIDxjb21tZW50LWxpc3QgOmNvbW1lbnRzLXVybD1cImdldFVybCgnY29tbWVudHMnLCBjb21tZW50KVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnY29tbWVudCddLFxuXG4gIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgdXB2b3RlQ291bnQ6IDAsXG4gICAgICBjb21tZW50Q291bnQ6IDAsXG4gICAgICBzaG93Q29tbWVudHM6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnVwdm90ZUNvdW50ID0gdGhpcy5jb21tZW50LnVwdm90ZV9jb3VudDtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IHRoaXMuY29tbWVudC5jb21tZW50X2NvdW50O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cHZvdGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCd1cHZvdGVzJywgdGhpcy5jb21tZW50KSwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgICAgICBfdGhpcy51cHZvdGVDb3VudCArPSAxO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQudXB2b3RlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC5kb3dudm90ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIF90aGlzLnVwdm90ZUNvdW50IC09IDE7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC51cHZvdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZG93bnZvdGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmNvbW1lbnQpLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb21tZW50LnVwdm90ZWQpIHsgX3RoaXMudXB2b3RlQ291bnQgLT0gMTsgfVxuICAgICAgICAgIF90aGlzLmNvbW1lbnQudXB2b3RlZCA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQuZG93bnZvdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQuZG93bnZvdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQ29tbWVudHMoKSB7XG4gICAgICB0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICB9LFxuXG4gICAgdXBkYXRlQ29tbWVudENvdW50KCkge1xuICAgICAgdGhpcy5jb21tZW50Q291bnQrKztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbW1lbnQudnVlP2E1NzM0OWZjIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgPHF1ZXN0aW9uIDpxdWVzdGlvbj1cInF1ZXN0aW9uXCIgdi1mb3I9XCJxdWVzdGlvbiBpbiBxdWVzdGlvbnNcIj48L3F1ZXN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiIHYtc2hvdz1cInJlcXVlc3RpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OiAwO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiZmV0Y2hEYXRhKClcIiB2LXNob3c9XCIgISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCI+TG9hZCBtb3JlPC9idXR0b24+XG4gICAgICAgIDxhbnN3ZXItY3JlYXRlLW1vZGFsPjwvYW5zd2VyLWNyZWF0ZS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydxdWVzdGlvblVybCddLFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcmVxdWVzdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3QucmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBxdWVzdGlvbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnF1ZXN0aW9ucztcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC5wYWdlIC0gMTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3RhbFBhZ2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC50b3RhbFBhZ2VzO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncXVlc3Rpb25MaXN0L3NldFF1ZXN0aW9uVXJsJywgdGhpcy5xdWVzdGlvblVybCk7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3F1ZXN0aW9uTGlzdC9mZXRjaERhdGEnKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbi1saXN0LnZ1ZT9jN2NmZDlkOCIsIi8vIHF1ZXN0aW9uTGlzdFxuZXhwb3J0IGNvbnN0IEFERF9RVUVTVElPTlMgPSAnQUREX1FVRVNUSU9OUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1FVRVNUSU9OID0gJ1JFTU9WRV9RVUVTVElPTic7XG5leHBvcnQgY29uc3QgU0VUX0FTX0FOU1dFUkVEID0gJ1NFVF9BU19BTlNXRVJFRCc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVNUSU9OU19VUkwgPSAnU0VUX1FVRVNUSU9OU19VUkwnO1xuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9QQUdFID0gJ0lOQ1JFTUVOVF9QQUdFJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUkVRVUVTVElORyA9ICdVUERBVEVfUkVRVUVTVElORyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCA9ICdTRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMJztcblxuLy8gZWRpdG9yXG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9DT05URU5UID0gJ1NFVF9FRElUT1JfQ09OVEVOVCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VESVRPUl9DT05URU5UID0gJ1VQREFURV9FRElUT1JfQ09OVEVOVCc7XG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9RVUVTVElPTiA9ICdTRVRfRURJVE9SX1FVRVNUSU9OJztcbmV4cG9ydCBjb25zdCBTRVRfRURJVE9SX0VMRU1FTlQgPSAnU0VUX0VESVRPUl9FTEVNRU5UJztcblxuLy8gZmVlZFxuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMID0gJ1NFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV0VEX0FOU1dFUiA9ICdTRVRfU0hPV0VEX0FOU1dFUic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYW5zd2VyLXByZXZpZXcudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVlMzk1ZjliIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXItcHJldmlldy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5zd2VyLXByZXZpZXcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlMzk1ZjliXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWUzOTVmOWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQxZGVmMTE1IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbW1lbnQtY3JlYXRlLWZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQxZGVmMTE1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDFkZWYxMTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01NWIzYjFhNCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29tbWVudC1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29tbWVudC1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NWIzYjFhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU1YjNiMWE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjBlZmZmZWQhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbW1lbnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29tbWVudC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjBlZmZmZWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMGVmZmZlZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9xdWVzdGlvbi1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1jODNjYjc5YSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcXVlc3Rpb24tbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbi1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jODNjYjc5YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM4M2NiNzlhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDE5IDIwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyIGF2YXRhci0tc21hbGwgdS1ib3JkZXItLW5vbmVcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LWRpbWVuc2lvbi0tc21hbGwgY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS5jb21tZW50Lm93bmVyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfYygnc3Ryb25nJywgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtbGlua1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uY29tbWVudC5vd25lcilcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tZW50Lm93bmVyLm5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudC5ib2R5KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvbiB1LWJvcmRlci0tb25seS1ib3R0b21cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXB2b3RlXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXB2b3RlQ291bnQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmNvbW1lbnQudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uY29tbWVudC5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl9kb3duXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImNvbG9yXCI6IFwiZ3JleVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLmNvbW1lbnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMGVmZmZlZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjBlZmZmZWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgXCJhY3Rpb25cIjogX3ZtLmNvbW1lbnRhYmxlQ29tbWVudHNVcmxcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzOVwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybURhdGEuYm9keSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLmJvZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwiYm9keVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLmJvZHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybURhdGEuYm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHMzXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwibmFtZVwiOiBcImFjdGlvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBvc3RDb21tZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRDb21tZW50XFxuXFx0XFx0XFx0XCIpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDFkZWYxMTVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQxZGVmMTE1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uIHUtYm9yZGVyLS1ub25lXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gY29sbGVjdGlvbi1pdGVtLWZvcm1cIlxuICB9LCBbX2MoJ2NvbW1lbnQtY3JlYXRlLWZvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudGFibGUtY29tbWVudHMtdXJsXCI6IF92bS5jb21tZW50c1VybFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hZGRDb21tZW50KCRldmVudC5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uY29tbWVudHMpLCBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgcmV0dXJuIF9jKCdjb21tZW50Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJjb21tZW50XCI6IGNvbW1lbnRcbiAgICAgIH1cbiAgICB9KVxuICB9KV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU1YjNiMWE0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01NWIzYjFhNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd0Fuc3dlcigpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5zaG93UXVlc3Rpb24pID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLnF1ZXN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5xdWVzdGlvbi50aXRsZSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS5hbnN3ZXIub3duZXIpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmFuc3dlci5vd25lcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3RvcFByb3BhZ2F0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5vd25lci5uYW1lKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJpbmxpbmVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0uYW5zd2VyLnByZXZpZXcpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5hbnN3ZXIucHJldmlldy5sZW5ndGggPj0gMjU4KSA/IF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIihtb3JlKVwiKV0pIDogX3ZtLl9lKCldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwdm90ZVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwdm90ZUNvdW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcInRodW1iX2Rvd25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCJncmV5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlQ29tbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbW1lbnRzIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jb21tZW50Q291bnQpICsgXCIpXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93Q29tbWVudHMpID8gX2MoJ2NvbW1lbnQtbGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50cy11cmxcIjogX3ZtLmdldFVybCgnY29tbWVudHMnLCBfdm0uYW5zd2VyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVlMzk1ZjliXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZTM5NWY5YiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHt9LCBbX3ZtLl9sKChfdm0ucXVlc3Rpb25zKSwgZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gX2MoJ3F1ZXN0aW9uJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJxdWVzdGlvblwiOiBxdWVzdGlvblxuICAgICAgfVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5yZXF1ZXN0aW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVxdWVzdGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiXG4gIH0sIFtfdm0uX20oMCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICBleHByZXNzaW9uOiBcIiAhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIwXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZmV0Y2hEYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2FkIG1vcmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Fuc3dlci1jcmVhdGUtbW9kYWwnKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2FwLXBhdGNoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciByaWdodFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWM4M2NiNzlhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1jODNjYjc5YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggMTkgMjAiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0b3RhbFBhZ2VzOiAyLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgYW5zd2VyczogW10sXG4gICAgICAgIGZlZWRVcmxzOnt9LFxuICAgICAgICBzaG93QW5zd2VyTW9kYWw6IGZhbHNlLFxuICAgICAgICBzaG93ZWRBbnN3ZXI6IG51bGwsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgYWRkQW5zd2VycyhzdGF0ZSwgYW5zd2Vycykge1xuICAgICAgICAgICAgc3RhdGUuYW5zd2VycyA9IHN0YXRlLmFuc3dlcnMuY29uY2F0KGFuc3dlcnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEZlZWRVcmwoc3RhdGUsIHVybCkge1xuICAgICAgICAgICAgc3RhdGUuZmVlZFVybHMgPSB1cmw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5jcmVtZW50UGFnZShzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUucGFnZSsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZVJlcXVlc3Rpbmcoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTF0gKHN0YXRlLCBzaG93QW5zd2VyTW9kYWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dBbnN3ZXJNb2RhbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0ZS5zaG93QW5zd2VyTW9kYWwgPSBzaG93QW5zd2VyTW9kYWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XRURfQU5TV0VSXSAoc3RhdGUsIHNob3dlZEFuc3dlcikge1xuICAgICAgICAgICAgc3RhdGUuc2hvd2VkQW5zd2VyID0gc2hvd2VkQW5zd2VyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEFuc3dlcihzdGF0ZSwgYW5zd2VyKSB7XG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXJzLnVuc2hpZnQoYW5zd2VyKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBmZXRjaERhdGEoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHN0YXRlLmZlZWRVcmxzLmFuc3dlcnMsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lcicsICdxdWVzdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdGFsUGFnZXMgPSByZXNwb25zZS5kYXRhLm1ldGEucGFnaW5hdGlvbi50b3RhbF9wYWdlcztcbiAgICAgICAgICAgICAgICBjb21taXQoJ2FkZEFuc3dlcnMnLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCgnaW5jcmVtZW50UGFnZScpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFNob3dlZEFuc3dlcih7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9LCBzaG93ZWRBbnN3ZXIpIHtcbiAgICAgICAgICAgIGlmKHNob3dlZEFuc3dlciA/ICEgc2hvd2VkQW5zd2VyLmJvZHkgOiBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGdldFVybCgnc2VsZicsIHNob3dlZEFuc3dlciksIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmx5OiBbJ2JvZHknXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dlZEFuc3dlci5ib2R5ID0gcmVzcG9uc2UuZGF0YS5ib2R5O1xuICAgICAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1dFRF9BTlNXRVIsIHNob3dlZEFuc3dlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPV0VEX0FOU1dFUiwgc2hvd2VkQW5zd2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mZWVkLmpzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMjBweDtcIj5cbiAgICAgICAgICAgIDxoND48YSA6aHJlZj1cInF1ZXN0aW9uID8gZ2V0VXJsKCdzZWxmX2h0bWwnLCBxdWVzdGlvbikgOiAnJ1wiPnt7IHF1ZXN0aW9uID8gcXVlc3Rpb24udGl0bGUgOiAnJyB9fTwvYT48L2g0PlxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJzaG93UXVlc3Rpb25EZXRhaWwgPyAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCcgOiAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCBzaHJpbmtlZCdcIiBAY2xpY2s9XCJzaG93UXVlc3Rpb25EZXRhaWwgPSAhc2hvd1F1ZXN0aW9uRGV0YWlsXCI+XG4gICAgICAgICAgICAgICAge3sgcXVlc3Rpb24gPyBxdWVzdGlvbi5ib2R5IDogJycgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiJHZpZW5kZXIudHJlYXN1cmUudXNlciA/IGdldFVybCgnYXZhdGFyJywgJHZpZW5kZXIudHJlYXN1cmUudXNlcikgOiAnJ1wiIGFsdD1cIlwiIGNsYXNzPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHZpZW5kZXIudHJlYXN1cmUudXNlciA/ICR2aWVuZGVyLnRyZWFzdXJlLnVzZXIubmFtZSA6ICcnIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXItY3JlYXRlLWVkaXRvclwiIHJlZj1cImVkaXRvclwiPjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cInN1Ym1pdFwiIEBjbGljaz1cImFuc3dlcigkZXZlbnQpXCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dRdWVzdGlvbkRldGFpbDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbnRlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWRpdG9yLmNvbnRlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcXVlc3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWRpdG9yLnF1ZXN0aW9uO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBxdWVzdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXN0aW9uRGV0YWlsID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBsZXQgcG9wT3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGUtcG9wb3ZlcicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wT3Zlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBwb3BPdmVyW2ldO1xuICAgICAgICAgICAgcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApO1xuICAgICAgICB9XG5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHNlbGYuJHJlZnMuZWRpdG9yKS5zdW1tZXJub3RlKHtcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ2JvbGQnLCAnaXRhbGljJ11dLFxuICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJ11dLFxuICAgICAgICAgICAgICAgICAgICBbJ2luc2VydCcsIFsnbGluaycsICdwaWN0dXJlJ11dLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbihjb250ZW50cywgJGVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5jb21taXQoJ2VkaXRvci8nICsgdHlwZXMuVVBEQVRFX0VESVRPUl9DT05URU5ULCBjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdvbi1jaGFuZ2UnLCBjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2VkaXRvci8nICsgdHlwZXMuU0VUX0VESVRPUl9FTEVNRU5ULCAkKHNlbGYuJHJlZnMuZWRpdG9yKSk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYW5zd2VyKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZihzZWxmLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgaWYoICEgc2VsZi5jb250ZW50LmJvZHkpIHJldHVybjtcblxuICAgICAgICAgICAgc2VsZi5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLmdldFVybCgnYW5zd2VycycsIHRoaXMucXVlc3Rpb24pICsgJz93aXRoPW93bmVyJywgc2VsZi5jb250ZW50KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ2Fuc3dlci1wb3N0ZWQnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHN0b3JlLmNvbW1pdCgnZWRpdG9yLycgKyB0eXBlcy5VUERBVEVfRURJVE9SX0NPTlRFTlQsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc3RvcmUuY29tbWl0KCdxdWVzdGlvbkxpc3QvJyArIHR5cGVzLlNFVF9BU19BTlNXRVJFRCwgc2VsZi5xdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHNlbGYuJHJlZnMuZWRpdG9yKS5zdW1tZXJub3RlKCdjb2RlJywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVRdWVzdGlvbkRldGFpbCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXN0aW9uRGV0YWlsID0gISB0aGlzLnNob3dRdWVzdGlvbkRldGFpbDtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci1jcmVhdGUtZm9ybS52dWU/NmQwOWU3MGMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFuc3dlckNyZWF0ZU1vZGFsLW92ZXJsYXlcIiBAY2xpY2s9XCJoaWRlQW5zd2VyQ3JlYXRlTW9kYWwoKVwiIHYtc2hvdz1cInNob3dNb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyQ3JlYXRlTW9kYWxcIiBAY2xpY2s9XCJtb2RhbENsaWNrSGFuZGxlKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJDcmVhdGVNb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGFuc3dlci1jcmVhdGUtZm9ybSByZWY9XCJmb3JtXCIgQGFuc3dlci1wb3N0ZWQ9XCJoaWRlQW5zd2VyQ3JlYXRlTW9kYWwoJGV2ZW50KVwiPjwvYW5zd2VyLWNyZWF0ZS1mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYWN0aW9uXCI+XG4gICAgICAgICAgICA8c3Bhbj5YPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnNob3dBbnN3ZXJDcmVhdGVNb2RhbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc2hvd01vZGFsKCkge1xuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYodGhpcy5zaG93TW9kYWwpIHtcbiAgICAgICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAkKF90aGlzLiRyZWZzLmZvcm0uJHJlZnMuZWRpdG9yKS5zdW1tZXJub3RlKCdlZGl0b3IuZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG1vZGFsQ2xpY2tIYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVBbnN3ZXJDcmVhdGVNb2RhbChhbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgncXVlc3Rpb25MaXN0LycgKyB0eXBlcy5TRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdmZWVkL2FkZEFuc3dlcicsIGFuc3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZT9iZmQyNmJmYyIsIjx0ZW1wbGF0ZT5cblx0PGRpdiByZWY9XCJtb2RhbFwiIGNsYXNzPVwiYW5zd2VyLXNob3ctbW9kYWwtb3ZlcmxheVwiIEBjbGljaz1cImhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXCIgdi1zaG93PVwic2hvd0Fuc3dlck1vZGFsXCI+XG5cdFx0PGRpdiBjbGFzcz1cImFuc3dlci1zaG93LW1vZGFsXCIgQGNsaWNrPVwibW9kYWxDbGlja0hhbmRsZSgkZXZlbnQpXCI+XG5cdFx0XHQ8YW5zd2VyIDphbnN3ZXI9XCJhbnN3ZXJcIiB2LWlmPVwiYW5zd2VyID8gYW5zd2VyLmJvZHkgOiBmYWxzZVwiPjwvYW5zd2VyPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyB0b3A6IGNhbGMoNTAlIC0gNzVweCk7IGxlZnQ6IGNhbGMoNTAlIC0gMThweCk7XCIgdi1lbHNlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYWN0aW9uXCI+XG4gICAgICAgICAgICA8c3Bhbj5YPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnYW5zd2VyJ10sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHRhbnN3ZXIoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnNob3dlZEFuc3dlcjtcbiAgICBcdH0sXG5cbiAgICBcdHNob3dBbnN3ZXJNb2RhbCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQuc2hvd0Fuc3dlck1vZGFsO1xuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG1vZGFsQ2xpY2tIYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpIHtcbiAgICAgICAgXHQkKHRoaXMuJHJlZnMubW9kYWwpLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC8nICsgdHlwZXMuU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItc2hvdy1tb2RhbC52dWU/YmY3OWRlZGEiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgdS1tYXJnaW4tLW5vbmUgYW5zd2VyXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCJhbnN3ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiIHYtaWY9XCJzaG93UXVlc3Rpb25cIj5cblx0XHRcdFx0XHRcdDxoND48YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLnF1ZXN0aW9uKVwiPnt7IGFuc3dlci5xdWVzdGlvbi50aXRsZSB9fTwvYT48L2g0PlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8aHIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzMHB4O1wiPlxuXHRcdFx0XHQgIFx0PHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJnZXRVcmwoJ2F2YXRhcicsIGFuc3dlci5vd25lcilcIiBhbHQ9XCJcIiBjbGFzcz1cImNpcmNsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLm93bmVyKVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGFuc3dlci5vd25lci5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFuc3dlci1jb250ZW50XCIgdi1odG1sPVwiYW5zd2VyLmJvZHlcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuXHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG5cdFx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IHVwdm90ZUNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX3VwPC9hPlxuXHRcdFx0ICAgIFx0PC9zcGFuPlxuXHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIEBjbGljaz1cImRvd252b3RlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfZG93bjwvYT5cblx0XHRcdCAgICBcdDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCJnZXRVcmwoJ2NvbW1lbnRzJywgYW5zd2VyKVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICBcdGFuc3dlcjoge1xuICAgIFx0XHR0eXBlOiBPYmplY3QsXG4gICAgXHRcdGRlZmF1bHQ6IG51bGwsXG4gICAgXHR9LFxuICAgIFx0c2hvd1F1ZXN0aW9uOiB7XG4gICAgXHRcdHR5cGU6IEJvb2xlYW4sXG4gICAgXHRcdGRlZmF1bHQ6IHRydWUsXG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIFx0XHRzaG93Q29tbWVudHM6IGZhbHNlXG4gICAgXHR9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHR1cHZvdGVDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IDogMDtcbiAgICBcdH0sXG5cbiAgICBcdGNvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIuY29tbWVudF9jb3VudCA6IDA7XG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdHVwdm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ3Vwdm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50ICs9IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gdHJ1ZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0ZG93bnZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0ICAgICAgICBcdGlmKF90aGlzLmFuc3dlci51cHZvdGVkKSBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHR0b2dnbGVDb21tZW50cygpIHtcbiAgICBcdFx0dGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XG4gICAgXHR9LFxuXG4gICAgXHRpbmNyZW1lbnRDb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHRoaXMuY29tbWVudENvdW50Kys7XG4gICAgXHR9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLnZ1ZT8zOWVjYzhiZSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRVcmwocmVsLCBvYmopIHtcblx0XHRcdHJldHVybiBvYmoubGlua3MuZmlsdGVyKGZ1bmN0aW9uKGxpbmspIHtcblx0XHRcdFx0cmV0dXJuIGxpbmsucmVsID09IHJlbDtcblx0XHRcdH0pWzBdLnVybDtcblx0XHR9LFxuXG5cdFx0dXJsKHBhdGgpIHtcblx0XHRcdHJldHVybiB3aW5kb3cudXJsKHBhdGgpO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VybEhlbHBlci5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgIDxhbnN3ZXItcHJldmlldyA6YW5zd2VyPVwiYW5zd2VyXCIgdi1mb3I9XCJhbnN3ZXIgaW4gYW5zd2Vyc1wiIHYtaWY9XCJhbnN3ZXJzWzBdID8gYW5zd2Vyc1swXS5wcmV2aWV3IDogdHJ1ZVwiIDpzaG93LXF1ZXN0aW9uPVwib3B0aW9ucy5hbnN3ZXJzLnNob3dRdWVzdGlvblwiPjwvYW5zd2VyLXByZXZpZXc+XG4gICAgICAgIDxhbnN3ZXIgOmFuc3dlcj1cImFuc3dlclwiIHYtZm9yPVwiYW5zd2VyIGluIGFuc3dlcnNcIiB2LWVsc2U+PC9hbnN3ZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIgdi1zaG93PVwicmVxdWVzdGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiPkxvYWQgbW9yZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBmZWVkVXJsczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2Vyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1ZXN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICByZXF1ZXN0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQucmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBhbnN3ZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQuYW5zd2VycztcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQucGFnZSAtIDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG90YWxQYWdlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnRvdGFsUGFnZXM7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC9zZXRGZWVkVXJsJywgdGhpcy5mZWVkVXJscyk7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZlZWQvZmV0Y2hEYXRhJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmZWVkLWxpc3QudnVlPzU0OWQ5ZDY3IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IHUtbWFyZ2luLS1ub25lIHF1ZXN0aW9uXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCIhIChxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IHRydWUpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj48aDQ+PGEgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcXVlc3Rpb25PYmopXCI+e3sgcXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai50aXRsZSA6ICcnIH19PC9hPjwvaDQ+PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImV4cGFuZFF1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnXCIgQGNsaWNrPVwiZXhwYW5kUXVlc3Rpb25EZXRhaWwgPSAhZXhwYW5kUXVlc3Rpb25EZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai5ib2R5IDogJycgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XG5cdFx0XHQgICAgXHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwic2hvd0Fuc3dlckNyZWF0ZU1vZGFsKClcIlxuXHRcdFx0ICAgIFx0XHR2LWlmPVwiICEgKHF1ZXN0aW9uT2JqID8gcXVlc3Rpb25PYmouYW5zd2VyZWQgOiB0cnVlKVwiPlxuXHRcdFx0ICAgIFx0XHRBbnN3ZXJcblx0XHRcdCAgICBcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiZ3JleS10ZXh0IGRhcmtlbi0zXCIgdi1lbHNlPlxuXHRcdFx0XHRcdFx0QW5zd2VyZWRcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHQgICAgXHQ8YSBAY2xpY2s9XCJkb3dudm90ZVwiPkRvd252b3RlPC9hPlxuXHRcdFx0ICAgIFx0PGEgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnY29tbWVudHMnLCBxdWVzdGlvbk9iailcIiBAY29tbWVudC1wb3N0ZWQ9XCJpbmNyZW1lbnRDb21tZW50Q291bnQoKVwiIHYtaWY9XCJzaG93Q29tbWVudHNcIj48L2NvbW1lbnQtbGlzdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCJxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IGZhbHNlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3Ryb25nPllvdSBkb3dudm90ZWQgdGhpcyBxdWVzdGlvbjwvc3Ryb25nPlxuXHRcdFx0XHRcdDxwPkRvd252b3RpbmcgbG93LXF1YWxpdHkgY29udGVudCBpbXByb3ZlcyBWaWVuZGVyIGZvciBldmVyeW9uZS48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cblx0XHRcdCAgICBcdDxhIEBjbGljaz1cImRvd252b3RlXCI+VW5kbzwvYT5cblx0XHRcdCAgICBcdDwhLS0gPGEgQGNsaWNrPVwiZG93bnZvdGVcIj5SZXBvcnQ8L2E+IC0tPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydxdWVzdGlvbicsICd1cmwnLCAnc2hvd0RldGFpbCddLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRRdWVzdGlvbkRldGFpbDogZmFsc2UsXG4gICAgICAgICAgICBxdWVzdGlvbk9iajogbnVsbCxcbiAgICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdXB2b3RlQ291bnQ6IDAsXG4gICAgICAgICAgICBjb21tZW50Q291bnQ6IDAsXG4gICAgICAgICAgICBzaG93Q29tbWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgc3RhdGljUHJlbG9hZGVyczogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVlc3Rpb24tc3RhdGljLXByZWxvYWRlcicpLFxuICAgICAgICAgICAgYW5zd2VyVGV4dDoge1xuICAgICAgICAgICAgICAgIGJvZHk6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICBcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gaWYgdGhlIGFyZ3VtZW50IGlzIGFuIHF1ZXN0aW9uIG9iamVjdCwgdXNlIGl0LlxuICAgICAgICAvLyBpZiB0aGUgYXJndW1lbnQgaXMgYW4gdXJsLCBmZXRoIHF1ZXN0aW9uIGZyb20gdGhlcmUuXG4gICAgXHRpZiAoX3RoaXMucXVlc3Rpb24pIHtcbiAgICBcdFx0X3RoaXMucXVlc3Rpb25PYmogPSBfdGhpcy5xdWVzdGlvbjtcblx0ICAgIFx0X3RoaXMudXB2b3RlQ291bnQgPSBfdGhpcy5xdWVzdGlvbi51cHZvdGVfY291bnQ7XG5cdCAgICBcdF90aGlzLmNvbW1lbnRDb3VudCA9IF90aGlzLnF1ZXN0aW9uLmNvbW1lbnRfY291bnQ7XG4gICAgICAgICAgICBfdGhpcy5oaWRlU3RhdGljUHJlbG9hZGVycygpO1xuICAgIFx0fSBlbHNlIGlmIChfdGhpcy51cmwpIHtcbiAgICBcdFx0dmFyIHVybCA9IF90aGlzLnVybDtcblxuXHRcdFx0YXhpb3MuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnF1ZXN0aW9uT2JqID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBfdGhpcy51cHZvdGVDb3VudCA9IHJlc3BvbnNlLmRhdGEudXB2b3RlX2NvdW50O1xuICAgIFx0XHRcdF90aGlzLmNvbW1lbnRDb3VudCA9IHJlc3BvbnNlLmRhdGEuY29tbWVudF9jb3VudDtcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWRlU3RhdGljUHJlbG9hZGVycygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHRocm93ICdxdWVzdGlvbiBhbmQgdXJsIG5vdCBkZWZpbmVkLic7XG4gICAgXHR9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRpY1ByZWxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGljUHJlbG9hZGVyc1tpXS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMCc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoaWRlU3RhdGljUHJlbG9hZGVycygpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0aWNQcmVsb2FkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNQcmVsb2FkZXJzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICBcdHNob3dBbnN3ZXJDcmVhdGVNb2RhbCgpIHtcbiAgICBcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdxdWVzdGlvbkxpc3QvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwsIHRydWUpO1xuICAgIFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZWRpdG9yL3NldFF1ZXN0aW9uJywge1xuICAgIFx0XHRcdHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uT2JqLFxuICAgIFx0XHRcdGFuc3dlclRleHQ6IHRoaXMuYW5zd2VyVGV4dFxuICAgIFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdGRvd252b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdkb3dudm90ZXMnLCBfdGhpcy5xdWVzdGlvbk9iaiksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0XHQgICAgXHRfdGhpcy5xdWVzdGlvbk9iai5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMucXVlc3Rpb25PYmouZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdHRvZ2dsZUNvbW1lbnRzKCkge1xuICAgIFx0XHR0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICBcdH0sXG5cbiAgICBcdGluY3JlbWVudENvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0dGhpcy5jb21tZW50Q291bnQrKztcbiAgICBcdH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbi52dWU/ZTFjYjcwZGMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzdhZGQyYzghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci1jcmVhdGUtZm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzdhZGQyYzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03N2FkZDJjOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kM2I5YjI0ZSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kM2I5YjI0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQzYjliMjRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItc2hvdy1tb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTJmNTM4ZGEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItc2hvdy1tb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTJmNTM4ZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MmY1MzhkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA3NTRkM2MwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA3NTRkM2MwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDc1NGQzYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZlZWQtbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTI5ZTU3MGEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZlZWQtbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZlZWQtbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTI5ZTU3MGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MjllNTcwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcXVlc3Rpb24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTczZmM5ODcwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9xdWVzdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcXVlc3Rpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTczZmM5ODcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzNmYzk4NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzMTJcIlxuICB9LCBbKF92bS5hbnN3ZXIpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gIH0sIFsoX3ZtLnNob3dRdWVzdGlvbikgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW19jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5hbnN3ZXIucXVlc3Rpb24pXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYW5zd2VyLnF1ZXN0aW9uLnRpdGxlKSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIzMHB4XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvblwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uYW5zd2VyLm93bmVyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5hbnN3ZXIub3duZXIpXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIub3duZXIubmFtZSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLWNvbnRlbnRcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5hbnN3ZXIuYm9keSlcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb25cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXB2b3RlXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXB2b3RlQ291bnQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJylcbiAgfSwgW192bS5fdihcInRodW1iX3VwXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJyksXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwidGh1bWJfZG93blwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjb2xvclwiOiBcImdyZXlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVDb21tZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tbWVudHMgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmNvbW1lbnRDb3VudCkgKyBcIilcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDb21tZW50cykgPyBfYygnY29tbWVudC1saXN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRzLXVybFwiOiBfdm0uZ2V0VXJsKCdjb21tZW50cycsIF92bS5hbnN3ZXIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKSA6IF92bS5fZSgpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wNzU0ZDNjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDc1NGQzYzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwiaW1wb3J0IHNlYXJjaE9yQXNrUGFuZWwgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwnO1xuaW1wb3J0IHNlYXJjaE9yQXNrT3ZlcmxheSBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5JztcbmltcG9ydCB0b3BpY1JlY29tbWVuZGF0aW9uIGZyb20gJy4vbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNlYXJjaE9yQXNrUGFuZWw6IHNlYXJjaE9yQXNrUGFuZWwsXG5cdHNlYXJjaE9yQXNrT3ZlcmxheTogc2VhcmNoT3JBc2tPdmVybGF5LFxuICAgIHRvcGljUmVjb21tZW5kYXRpb246IHRvcGljUmVjb21tZW5kYXRpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHt9LCBbX3ZtLl9sKChfdm0uYW5zd2VycyksIGZ1bmN0aW9uKGFuc3dlcikge1xuICAgIHJldHVybiAoX3ZtLmFuc3dlcnNbMF0gPyBfdm0uYW5zd2Vyc1swXS5wcmV2aWV3IDogdHJ1ZSkgPyBfYygnYW5zd2VyLXByZXZpZXcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImFuc3dlclwiOiBhbnN3ZXIsXG4gICAgICAgIFwic2hvdy1xdWVzdGlvblwiOiBfdm0ub3B0aW9ucy5hbnN3ZXJzLnNob3dRdWVzdGlvblxuICAgICAgfVxuICAgIH0pIDogX3ZtLl9sKChfdm0uYW5zd2VycyksIGZ1bmN0aW9uKGFuc3dlcikge1xuICAgICAgcmV0dXJuIF9jKCdhbnN3ZXInLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJhbnN3ZXJcIjogYW5zd2VyXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlcXVlc3RpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0aW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCJcbiAgfSwgW192bS5fbSgwKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ucmVxdWVzdGluZyAmJiBfdm0ucGFnZSA8IF92bS50b3RhbFBhZ2VzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZldGNoRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9hZCBtb3JlXCIpXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIGxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhcC1wYXRjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01MjllNTcwYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTI5ZTU3MGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dBbnN3ZXJNb2RhbCksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dBbnN3ZXJNb2RhbFwiXG4gICAgfV0sXG4gICAgcmVmOiBcIm1vZGFsXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLXNob3ctbW9kYWwtb3ZlcmxheVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGlkZUFuc3dlckNyZWF0ZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1zaG93LW1vZGFsXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5tb2RhbENsaWNrSGFuZGxlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoX3ZtLmFuc3dlciA/IF92bS5hbnN3ZXIuYm9keSA6IGZhbHNlKSA/IF9jKCdhbnN3ZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYW5zd2VyXCI6IF92bS5hbnN3ZXJcbiAgICB9XG4gIH0pIDogX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICBcInRvcFwiOiBcImNhbGMoNTAlIC0gNzVweClcIixcbiAgICAgIFwibGVmdFwiOiBcImNhbGMoNTAlIC0gMThweClcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIGxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhcC1wYXRjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIlhcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTJmNTM4ZGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTUyZjUzOGRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHUtbWFyZ2luLS1ub25lIHF1ZXN0aW9uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHMxMlwiXG4gIH0sIFsoIShfdm0ucXVlc3Rpb25PYmogPyBfdm0ucXVlc3Rpb25PYmouZG93bnZvdGVkIDogdHJ1ZSkpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW19jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLnF1ZXN0aW9uT2JqKVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLnRpdGxlIDogJycpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBfdm0uZXhwYW5kUXVlc3Rpb25EZXRhaWwgPyAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCcgOiAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCBzaHJpbmtlZCcsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5leHBhbmRRdWVzdGlvbkRldGFpbCA9ICFfdm0uZXhwYW5kUXVlc3Rpb25EZXRhaWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai5ib2R5IDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb25cIlxuICB9LCBbKCEoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLmFuc3dlcmVkIDogdHJ1ZSkpID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNob3dBbnN3ZXJDcmVhdGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0ICAgIFxcdFxcdEFuc3dlclxcblxcdFxcdFxcdCAgICBcXHRcIildKSA6IF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktdGV4dCBkYXJrZW4tM1wiXG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRBbnN3ZXJlZFxcblxcdFxcdFxcdFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb3dudm90ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnY29tbWVudHMnLCBfdm0ucXVlc3Rpb25PYmopXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IGZhbHNlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdhJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcIlVuZG9cIildKV0pXSkgOiBfdm0uX2UoKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIllvdSBkb3dudm90ZWQgdGhpcyBxdWVzdGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJEb3dudm90aW5nIGxvdy1xdWFsaXR5IGNvbnRlbnQgaW1wcm92ZXMgVmllbmRlciBmb3IgZXZlcnlvbmUuXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTczZmM5ODcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03M2ZjOTg3MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjIwcHhcIlxuICAgIH1cbiAgfSwgW19jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5xdWVzdGlvbiA/IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5xdWVzdGlvbikgOiAnJ1xuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnF1ZXN0aW9uID8gX3ZtLnF1ZXN0aW9uLnRpdGxlIDogJycpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IF92bS5zaG93UXVlc3Rpb25EZXRhaWwgPyAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCcgOiAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCBzaHJpbmtlZCcsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zaG93UXVlc3Rpb25EZXRhaWwgPSAhX3ZtLnNob3dRdWVzdGlvbkRldGFpbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5xdWVzdGlvbiA/IF92bS5xdWVzdGlvbi5ib2R5IDogJycpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb25cIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIgPyBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uJHZpZW5kZXIudHJlYXN1cmUudXNlcikgOiAnJyxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIgPyBfdm0uJHZpZW5kZXIudHJlYXN1cmUudXNlci5uYW1lIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcImVkaXRvclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1jcmVhdGUtZWRpdG9yXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFuc3dlcigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03N2FkZDJjOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzdhZGQyYzghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd01vZGFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd01vZGFsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXJDcmVhdGVNb2RhbC1vdmVybGF5XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5oaWRlQW5zd2VyQ3JlYXRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyQ3JlYXRlTW9kYWxcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm1vZGFsQ2xpY2tIYW5kbGUoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyQ3JlYXRlTW9kYWwtY29udGVudFwiXG4gIH0sIFtfYygnYW5zd2VyLWNyZWF0ZS1mb3JtJywge1xuICAgIHJlZjogXCJmb3JtXCIsXG4gICAgb246IHtcbiAgICAgIFwiYW5zd2VyLXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1hY3Rpb25cIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiWFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kM2I5YjI0ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZDNiOWIyNGUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgcXVlc3Rpb25EZXRhaWw6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgcG9zdFF1ZXN0aW9uVXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCcvcXVlc3Rpb25zJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBpZihzaG93KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSAhc3RhdGUuc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1FVRVNUSU9OX0RFVEFJTF0oc3RhdGUsIHF1ZXN0aW9uRGV0YWlsKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbkRldGFpbCA9IHF1ZXN0aW9uRGV0YWlsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHBvc3RRdWVzdGlvbih7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdChzdGF0ZS5wb3N0UXVlc3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICBib2R5OiBzdGF0ZS5xdWVzdGlvbkRldGFpbCxcbiAgICAgICAgICAgICAgICB0b3BpY3M6IHN0YXRlLnNlbGVjdGVkVG9waWNzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93UGFuZWw6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddIChzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX1BBTkVMXSAoc3RhdGUsIHNob3dQYW5lbCkge1xuICAgICAgICAgICAgaWYoc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3dQYW5lbCA9IHNob3dQYW5lbDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXSAoc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdIChzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgndG9waWNzJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd1RvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZVRvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==