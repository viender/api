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
/******/ 	return __webpack_require__(__webpack_require__.s = 274);
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

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(42);

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viender_socialite_core_js_store_modules_questionList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_viender_socialite_core_js_store_modules_editor__ = __webpack_require__(13);





/* harmony default export */ __webpack_exports__["a"] = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {
    questionList: __WEBPACK_IMPORTED_MODULE_1_viender_socialite_core_js_store_modules_questionList__["a" /* default */],
    editor: __WEBPACK_IMPORTED_MODULE_2_viender_socialite_core_js_store_modules_editor__["a" /* default */]
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(114);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(113);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('comment', __webpack_require__(24));
Vue.component('comment-list', __webpack_require__(23));
Vue.component('comment-create-form', __webpack_require__(22));
Vue.component('answer-preview', __webpack_require__(21));
Vue.component('question', __webpack_require__(48));
Vue.component('question-list', __webpack_require__(25));
Vue.component('answer-create-form', __webpack_require__(43));
Vue.component('answer-create-modal', __webpack_require__(44));

var app = new Vue({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */]
});

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

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/NGJkYioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL3BhZ2VzL2Fuc3dlci9hc3NldHMvanMvYm9vdHN0cmFwLmpzPzExY2MiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL3BhZ2VzL2Fuc3dlci9hc3NldHMvanMvc3RvcmUuanM/NjhjOCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2VkaXRvci5qcz8xODliKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvcXVlc3Rpb25MaXN0LmpzP2QwNzAqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL3BhZ2VzL2Fuc3dlci9hc3NldHMvanMvYXBwLW1vYmlsZS5qcyIsIndlYnBhY2s6Ly8vYW5zd2VyLXByZXZpZXcudnVlPzFhYmMqKioqKioiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlPzIwODMqKioqKioiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQtbGlzdC52dWU/NTg5MSoqKioqKiIsIndlYnBhY2s6Ly8vY29tbWVudC52dWU/NzdmYyoqKioqKiIsIndlYnBhY2s6Ly8vcXVlc3Rpb24tbGlzdC52dWU/YmFlZSoqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcz8yYmM1KioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlPzBkY2QqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT85NjQ4KioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZT84MmYxKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWU/OWIxMSoqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlP2QzOTEqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZT9lOWMyKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlP2M1NzcqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZT9iOWUxKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZT9mYjFlKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlPzMyNDQqKioqKioqIiwid2VicGFjazovLy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlPzMzYWUqKioqKioiLCJ3ZWJwYWNrOi8vL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlPzNhMzEqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXJsSGVscGVyLmpzPzQyOTAqKioqKioiLCJ3ZWJwYWNrOi8vL3F1ZXN0aW9uLnZ1ZT82OTUxKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZT82MTcxKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWU/MmNlMyoqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZT85NjcxKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcz8zZjViKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZT8wNTE2KioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWU/MTY3ZCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZT81ZjNjKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzP2FmYWEqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzPzA5YzUqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzPzM2MjAqKioqKioqIl0sIm5hbWVzIjpbIlNFVF9SRVFVRVNUSU5HIiwiU0VUX1NIT1dfUEFORUwiLCJTRVRfU0hPVyIsIlNFVF9TRUFSQ0hfVEVYVCIsIlNFVF9TRUFSQ0hfUkVTVUxUUyIsIlNFVF9TSE9XX01PUkVfRklFTERTIiwiVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMiLCJBRERfVE9fU0VMRUNURURfVE9QSUNTIiwiUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTIiwiU0VUX1FVRVNUSU9OX0RFVEFJTCIsInJlcXVpcmUiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicXVlc3Rpb25MaXN0IiwiZWRpdG9yIiwiYWN0aW9ucyIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsImVkaXRvckVsZW1lbnQiLCJxdWVzdGlvbiIsImNvbnRlbnQiLCJtdXRhdGlvbnMiLCJib2R5Iiwic2V0UXVlc3Rpb24iLCJwYXlsb2FkIiwiY29tbWl0Iiwicm9vdFN0YXRlIiwiYW5zd2VyVGV4dCIsInN1bW1lcm5vdGUiLCJwYWdlIiwidG90YWxQYWdlcyIsInJlcXVlc3RpbmciLCJxdWVzdGlvbnMiLCJxdWVzdGlvblVybCIsInNob3dBbnN3ZXJDcmVhdGVNb2RhbCIsImNvbmNhdCIsInNwbGljZSIsImluZGV4T2YiLCJhbnN3ZXJlZCIsInVybCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93IiwiJCIsInNjcm9sbFRvcCIsIm1vZGFsIiwiaW1hZ2VQb3BPdmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRpc3BsYXkiLCJzZXRRdWVzdGlvblVybCIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwid2l0aCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXRhIiwicGFnaW5hdGlvbiIsInRvdGFsX3BhZ2VzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJWdWUiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsInN0b3JlIiwiQUREX1FVRVNUSU9OUyIsIlJFTU9WRV9RVUVTVElPTiIsIlNFVF9BU19BTlNXRVJFRCIsIlNFVF9RVUVTVElPTlNfVVJMIiwiSU5DUkVNRU5UX1BBR0UiLCJVUERBVEVfUkVRVUVTVElORyIsIlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwiLCJTRVRfRURJVE9SX0NPTlRFTlQiLCJVUERBVEVfRURJVE9SX0NPTlRFTlQiLCJTRVRfRURJVE9SX1FVRVNUSU9OIiwiU0VUX0VESVRPUl9FTEVNRU5UIiwiU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwiLCJTRVRfU0hPV0VEX0FOU1dFUiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRob2RzIiwiZ2V0VXJsIiwicmVsIiwib2JqIiwibGlua3MiLCJmaWx0ZXIiLCJsaW5rIiwicGF0aCIsIndpbmRvdyIsInNlYXJjaE9yQXNrUGFuZWwiLCJzZWFyY2hPckFza092ZXJsYXkiLCJ0b3BpY1JlY29tbWVuZGF0aW9uIiwic2hvdyIsInNlYXJjaFRleHQiLCJxdWVzdGlvbkRldGFpbCIsInNlYXJjaFJlc3VsdHMiLCJzaG93TW9yZUZpZWxkcyIsInNlbGVjdGVkVG9waWNzIiwicG9zdFF1ZXN0aW9uVXJsIiwicHJvdG90eXBlIiwiJHZpZW5kZXIiLCJoZWxwZXJzIiwiYXBpIiwib3ZlcmZsb3dZIiwidG9waWMiLCJwdXNoIiwic2VsZWN0ZWRUb3BpYyIsImlkIiwicG9zdFF1ZXN0aW9uIiwicG9zdCIsInRpdGxlIiwidG9waWNzIiwibG9jYXRpb24iLCJzaG93UGFuZWwiLCJzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMiLCJzZXRUaW1lb3V0IiwiaGlkZVRvcGljUmVjb21t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Q0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3REQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNB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LEVBcUJzRDtBQUM5QzdGLGNBQU1zRixjQUFOLEdBQXVCdEYsTUFBTXNGLGNBQU4sQ0FBcUJaLE1BQXJCLENBQTRCO0FBQUEsbUJBQWlCcUIsY0FBY0MsRUFBZCxLQUFxQkgsTUFBTUcsRUFBNUM7QUFBQSxTQUE1QixDQUF2QjtBQUNILEtBdkJMLGNBWlc7O0FBc0NYbEcsYUFBUztBQUNMeUcsZ0NBREssMENBQ3FDO0FBQUEsZ0JBQWhCdkcsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsZ0JBQVRRLE1BQVMsUUFBVEEsTUFBUzs7QUFDdENnRyx1QkFBVyxZQUFNO0FBQ2JoRyx1QkFBTyxpRUFBUCxFQUF1QixJQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0gsU0FMSTtBQU9MaUcsZ0NBUEssMkNBT3FDO0FBQUEsZ0JBQWhCekcsS0FBZ0IsU0FBaEJBLEtBQWdCO0FBQUEsZ0JBQVRRLE1BQVMsU0FBVEEsTUFBUzs7QUFDdENnRyx1QkFBVyxZQUFNO0FBQ2JoRyx1QkFBTyxpRUFBUCxFQUF1QixLQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0g7QUFYSTtBQXRDRSxDQUFmLEMiLCJmaWxlIjoianMvdmllbmRlci9zb2NpYWxpdGUvYW5zd2VyL2FwcC1tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzAiLCIvLyBzZWFyY2hPckFza1BhbmVsXG5leHBvcnQgY29uc3QgU0VUX1JFUVVFU1RJTkcgPSAnU0VUX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX1BBTkVMID0gJ1NFVF9TSE9XX1BBTkVMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPVyA9ICdTRVRfU0hPVyc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9URVhUID0gJ1NFVF9TRUFSQ0hfVEVYVCc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9SRVNVTFRTID0gJ1NFVF9TRUFSQ0hfUkVTVUxUUyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfTU9SRV9GSUVMRFMgPSAnU0VUX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9TSE9XX01PUkVfRklFTERTID0gJ1RPR0dMRV9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fU0VMRUNURURfVE9QSUNTID0gJ0FERF9UT19TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyA9ICdSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTl9ERVRBSUwgPSAnU0VUX1FVRVNUSU9OX0RFVEFJTCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9hY3Rpb25zLmpzIiwicmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcbnJlcXVpcmUoJ3N1bW1lcm5vdGUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9hbnN3ZXIvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsImltcG9ydCBjb3JlTW9kdWxlcyBmcm9tICd2aWVuZGVyX2NvcmUvanMvc3RvcmUvbW9kdWxlcy5qcyc7XG5cbmltcG9ydCBxdWVzdGlvbkxpc3QgZnJvbSAndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3F1ZXN0aW9uTGlzdCc7XG5pbXBvcnQgZWRpdG9yIGZyb20gJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9lZGl0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIG1vZHVsZXM6IE9iamVjdC5hc3NpZ24oY29yZU1vZHVsZXMsIHtcbiAgICBxdWVzdGlvbkxpc3Q6IHF1ZXN0aW9uTGlzdCxcbiAgICBlZGl0b3I6IGVkaXRvclxuICB9KSxcblxuICBhY3Rpb25zOiByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlLy9hY3Rpb25zLmpzJyksXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9hbnN3ZXIvYXNzZXRzL2pzL3N0b3JlLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgZWRpdG9yRWxlbWVudDogbnVsbCxcbiAgICAgICAgcXVlc3Rpb246IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuU0VUX0VESVRPUl9DT05URU5UXSAoc3RhdGUsIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5VUERBVEVfRURJVE9SX0NPTlRFTlRdIChzdGF0ZSwgYm9keSkge1xuICAgICAgICAgICAgaWYoc3RhdGUuY29udGVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNvbnRlbnQuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9FRElUT1JfUVVFU1RJT05dIChzdGF0ZSwgcXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uID0gcXVlc3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9FRElUT1JfRUxFTUVOVF0gKHN0YXRlLCBlZGl0b3JFbGVtZW50KSB7XG4gICAgICAgICAgICBzdGF0ZS5lZGl0b3JFbGVtZW50ID0gZWRpdG9yRWxlbWVudDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNldFF1ZXN0aW9uKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0sIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfRURJVE9SX0NPTlRFTlQsIHBheWxvYWQuYW5zd2VyVGV4dCk7XG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX0VESVRPUl9RVUVTVElPTiwgcGF5bG9hZC5xdWVzdGlvbik7XG4gICAgICAgICAgICBpZihzdGF0ZS5lZGl0b3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuZWRpdG9yRWxlbWVudC5zdW1tZXJub3RlKCdjb2RlJywgcGF5bG9hZC5hbnN3ZXJUZXh0LmJvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2VkaXRvci5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHRvdGFsUGFnZXM6IDIsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBxdWVzdGlvbnM6IFtdLFxuICAgICAgICBxdWVzdGlvblVybDp7fSxcbiAgICAgICAgc2hvd0Fuc3dlckNyZWF0ZU1vZGFsOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuQUREX1FVRVNUSU9OU10gKHN0YXRlLCBxdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9ucyA9IHN0YXRlLnF1ZXN0aW9ucy5jb25jYXQocXVlc3Rpb25zKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX1FVRVNUSU9OXSAoc3RhdGUsIHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbnMuc3BsaWNlKHN0YXRlLnF1ZXN0aW9ucy5pbmRleE9mKHF1ZXN0aW9uKSwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9BU19BTlNXRVJFRF0gKHN0YXRlLCBxdWVzdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25zW3N0YXRlLnF1ZXN0aW9ucy5pbmRleE9mKHF1ZXN0aW9uKV0uYW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfUVVFU1RJT05TX1VSTF0gKHN0YXRlLCB1cmwpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uVXJsID0gdXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5JTkNSRU1FTlRfUEFHRV0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5wYWdlKys7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlVQREFURV9SRVFVRVNUSU5HXSAoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMXSAoc3RhdGUsIHNob3dBbnN3ZXJDcmVhdGVNb2RhbCkge1xuICAgICAgICAgICAgaWYoc2hvd0Fuc3dlckNyZWF0ZU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuYW5zd2VyLWNyZWF0ZS1tb2RhbC1vdmVybGF5Jykuc2Nyb2xsVG9wKDApO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW1hZ2VQb3BPdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5vdGUtaW1hZ2UtcG9wb3ZlclwiKVswXTtcblxuICAgICAgICAgICAgaWYoaW1hZ2VQb3BPdmVyKSBpbWFnZVBvcE92ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgc3RhdGUuc2hvd0Fuc3dlckNyZWF0ZU1vZGFsID0gc2hvd0Fuc3dlckNyZWF0ZU1vZGFsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNldFF1ZXN0aW9uVXJsKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0sIHVybCkge1xuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9RVUVTVElPTlNfVVJMLCB1cmwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZldGNoRGF0YSh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5VUERBVEVfUkVRVUVTVElORywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChzdGF0ZS5xdWVzdGlvblVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJywgJ2Fuc3dlciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdGFsUGFnZXMgPSByZXNwb25zZS5kYXRhLm1ldGEucGFnaW5hdGlvbi50b3RhbF9wYWdlcztcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuQUREX1FVRVNUSU9OUywgcmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuSU5DUkVNRU5UX1BBR0UpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5VUERBVEVfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlVQREFURV9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9xdWVzdGlvbkxpc3QuanMiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZSBWdWUgYW5kIFZ1ZSBSZXNvdXJjZS4gVGhpcyBnaXZlcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IGZvclxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuVnVlLmNvbXBvbmVudCgnY29tbWVudCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbW1lbnQtbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnY29tbWVudC1jcmVhdGUtZm9ybScsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1wcmV2aWV3JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3F1ZXN0aW9uJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3F1ZXN0aW9uLWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXItY3JlYXRlLWZvcm0nLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1jcmVhdGUtbW9kYWwnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWUnKSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgc3RvcmU6IHN0b3JlLFxufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9wYWdlcy9hbnN3ZXIvYXNzZXRzL2pzL2FwcC1tb2JpbGUuanMiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgdS1tYXJnaW4tLW5vbmUgYW5zd2VyXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCIgQGNsaWNrPVwic2hvd0Fuc3dlcigpXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCIgdi1pZj1cInNob3dRdWVzdGlvblwiPlxuXHRcdFx0XHRcdFx0PGg0PjxhIDpocmVmPVwiZ2V0VXJsKCdzZWxmX2h0bWwnLCBhbnN3ZXIucXVlc3Rpb24pXCIgQGNsaWNrPVwic3RvcFByb3BhZ2F0aW9uKCRldmVudClcIj57eyBhbnN3ZXIucXVlc3Rpb24udGl0bGUgfX08L2E+PC9oND5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCAgXHQ8dWwgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgOnNyYz1cImdldFVybCgnYXZhdGFyJywgYW5zd2VyLm93bmVyKVwiIGFsdD1cIlwiIGNsYXNzPVwiY2lyY2xlXCI+XG5cdFx0XHRcdFx0XHRcdDxhIDpocmVmPVwiZ2V0VXJsKCdzZWxmX2h0bWwnLCBhbnN3ZXIub3duZXIpXCIgQGNsaWNrPVwic3RvcFByb3BhZ2F0aW9uKCRldmVudClcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBhbnN3ZXIub3duZXIubmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhbnN3ZXItY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiIHYtaHRtbD1cImFuc3dlci5wcmV2aWV3XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiIHYtaWY9XCJhbnN3ZXIucHJldmlldy5sZW5ndGggPj0gMjU4XCI+KG1vcmUpPC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XG5cdFx0XHQgICAgXHQ8c3BhbiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBAY2xpY2s9XCJ1cHZvdGVcIj5cblx0XHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgdXB2b3RlQ291bnQgfX08L3NwYW4+XG5cdFx0XHRcdCAgICBcdDxhIDpzdHlsZT1cIiEgYW5zd2VyLnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfdXA8L2E+XG5cdFx0XHQgICAgXHQ8L3NwYW4+XG5cdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgQGNsaWNrPVwiZG93bnZvdGVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl9kb3duPC9hPlxuXHRcdFx0ICAgIFx0PGEgc3R5bGU9XCJjb2xvcjogZ3JleTtcIiBAY2xpY2s9XCJ0b2dnbGVDb21tZW50cygpXCI+Q29tbWVudHMgPHNwYW4+KHt7IGNvbW1lbnRDb3VudCB9fSk8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdDxjb21tZW50LWxpc3QgOmNvbW1lbnRzLXVybD1cImdldFVybCgnY29tbWVudHMnLCBhbnN3ZXIpXCIgQGNvbW1lbnQtcG9zdGVkPVwiaW5jcmVtZW50Q29tbWVudENvdW50KClcIiB2LWlmPVwic2hvd0NvbW1lbnRzXCI+PC9jb21tZW50LWxpc3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuICAgIFx0YW5zd2VyOiB7XG4gICAgXHRcdHR5cGU6IE9iamVjdCxcbiAgICBcdFx0ZGVmYXVsdDogbnVsbCxcbiAgICBcdH0sXG4gICAgXHRzaG93UXVlc3Rpb246IHtcbiAgICBcdFx0dHlwZTogQm9vbGVhbixcbiAgICBcdFx0ZGVmYXVsdDogdHJ1ZSxcbiAgICBcdH0sXG4gICAgfSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIFx0XHRzaG93Q29tbWVudHM6IGZhbHNlXG4gICAgXHR9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHR1cHZvdGVDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IDogMDtcbiAgICBcdH0sXG5cbiAgICBcdGNvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIuY29tbWVudF9jb3VudCA6IDA7XG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG5cbiAgICBcdHNob3dBbnN3ZXIoKSB7XG4gICAgXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC8nICsgdHlwZXMuU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwsIHRydWUpO1xuICAgIFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZmVlZC9zZXRTaG93ZWRBbnN3ZXInLCB0aGlzLmFuc3dlcik7XG4gICAgXHR9LFxuXG4gICAgXHR1cHZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCd1cHZvdGVzJywgdGhpcy5hbnN3ZXIpLCB7fSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdCAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCArPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IHRydWU7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdGRvd252b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmdldFVybCgnZG93bnZvdGVzJywgdGhpcy5hbnN3ZXIpLCB7fSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdCAgICAgICAgXHRpZihfdGhpcy5hbnN3ZXIudXB2b3RlZClcblx0XHRcdCAgICAgICAgXHRcdF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IHRydWU7XG5cdFx0XHQgICAgICAgIH1cblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdHRvZ2dsZUNvbW1lbnRzKCkge1xuICAgIFx0XHR0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICBcdH0sXG5cbiAgICBcdGluY3JlbWVudENvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0dGhpcy5jb21tZW50Q291bnQrKztcbiAgICBcdH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItcHJldmlldy52dWU/MTU1NGFmZjYiLCI8dGVtcGxhdGU+XG5cdDxmb3JtIG1ldGhvZD1cIlBPU1RcIiA6YWN0aW9uPVwiY29tbWVudGFibGVDb21tZW50c1VybFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczlcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJvZHlcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHYtbW9kZWw9XCJmb3JtRGF0YS5ib2R5XCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczNcIj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiIEBjbGljaz1cInBvc3RDb21tZW50KCRldmVudClcIj5cblx0XHRcdFx0XHRDb21tZW50XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2NvbW1lbnRhYmxlQ29tbWVudHNVcmwnXSxcblxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcblx0XHRcdGZvcm1EYXRhOiB7XG5cdFx0XHRcdGJvZHk6IG51bGwsXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRwb3N0Q29tbWVudChldmVudCkge1xuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdFx0aWYoZXZlbnQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuXHRcdFx0aWYoICEgX3RoaXMuZm9ybURhdGEuYm9keSkgcmV0dXJuO1xuXG5cdFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmNvbW1lbnRhYmxlQ29tbWVudHNVcmwgKyAnP3dpdGg9b3duZXInLCB0aGlzLmZvcm1EYXRhKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy4kZW1pdCgnY29tbWVudC1wb3N0ZWQnLCByZXNwb25zZSk7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuZm9ybURhdGEuYm9keSA9IG51bGw7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT8wM2UyMjBlOSIsIjx0ZW1wbGF0ZT5cblx0PHVsIGNsYXNzPVwiY29sbGVjdGlvbiB1LWJvcmRlci0tbm9uZVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gY29sbGVjdGlvbi1pdGVtLWZvcm1cIj5cbiAgICAgICAgICAgIDxjb21tZW50LWNyZWF0ZS1mb3JtIDpjb21tZW50YWJsZS1jb21tZW50cy11cmw9XCJjb21tZW50c1VybFwiIEBjb21tZW50LXBvc3RlZD1cImFkZENvbW1lbnQoJGV2ZW50LmRhdGEpXCI+PC9jb21tZW50LWNyZWF0ZS1mb3JtPiAgICBcbiAgICAgICAgPC9saT5cblx0XHQ8Y29tbWVudCB2LWZvcj1cImNvbW1lbnQgaW4gY29tbWVudHNcIiA6Y29tbWVudD1cImNvbW1lbnRcIj48L2NvbW1lbnQ+XG5cdDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydjb21tZW50c1VybCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbW1lbnRzOiBbXSxcblx0XHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuXHRcdFx0cGFnZTogMVxuXHRcdH1cblx0fSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICBcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoX3RoaXMuY29tbWVudHNVcmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBfdGhpcy5wYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbW1lbnRzID0gX3RoaXMuY29tbWVudHMuY29uY2F0KHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRDb21tZW50KGNvbW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbW1lbnQtcG9zdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tbWVudC1saXN0LnZ1ZT81MWZjYmEyNCIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhciBhdmF0YXItLXNtYWxsIHUtYm9yZGVyLS1ub25lXCI+XG4gICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdhdmF0YXInLCBjb21tZW50Lm93bmVyKVwiIGFsdD1cIlwiIGNsYXNzPVwidS1kaW1lbnNpb24tLXNtYWxsIGNpcmNsZVwiPlxuICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIDxzdHJvbmc+XG4gICAgICAgIDxhIGNsYXNzPVwicHJvZmlsZS1saW5rXCIgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgY29tbWVudC5vd25lcilcIj57eyBjb21tZW50Lm93bmVyLm5hbWUgfX08L2E+XG4gICAgICA8L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICAgPHAgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgY29tbWVudC5ib2R5IH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbiB1LWJvcmRlci0tb25seS1ib3R0b21cIj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgdXB2b3RlQ291bnQgfX08L3NwYW4+XG4gICAgICAgICAgPGEgOnN0eWxlPVwiISBjb21tZW50LnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfdXA8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGEgOnN0eWxlPVwiISBjb21tZW50LmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBAY2xpY2s9XCJkb3dudm90ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX2Rvd248L2E+XG4gICAgICAgIDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cbiAgICAgIDxjb21tZW50LWxpc3QgOmNvbW1lbnRzLXVybD1cImdldFVybCgnY29tbWVudHMnLCBjb21tZW50KVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnY29tbWVudCddLFxuXG4gIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgdXB2b3RlQ291bnQ6IDAsXG4gICAgICBjb21tZW50Q291bnQ6IDAsXG4gICAgICBzaG93Q29tbWVudHM6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnVwdm90ZUNvdW50ID0gdGhpcy5jb21tZW50LnVwdm90ZV9jb3VudDtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IHRoaXMuY29tbWVudC5jb21tZW50X2NvdW50O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cHZvdGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCd1cHZvdGVzJywgdGhpcy5jb21tZW50KSwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgICAgICBfdGhpcy51cHZvdGVDb3VudCArPSAxO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQudXB2b3RlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC5kb3dudm90ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIF90aGlzLnVwdm90ZUNvdW50IC09IDE7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC51cHZvdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZG93bnZvdGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmNvbW1lbnQpLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb21tZW50LnVwdm90ZWQpIHsgX3RoaXMudXB2b3RlQ291bnQgLT0gMTsgfVxuICAgICAgICAgIF90aGlzLmNvbW1lbnQudXB2b3RlZCA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQuZG93bnZvdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQuZG93bnZvdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQ29tbWVudHMoKSB7XG4gICAgICB0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICB9LFxuXG4gICAgdXBkYXRlQ29tbWVudENvdW50KCkge1xuICAgICAgdGhpcy5jb21tZW50Q291bnQrKztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbW1lbnQudnVlP2E1NzM0OWZjIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgPHF1ZXN0aW9uIDpxdWVzdGlvbj1cInF1ZXN0aW9uXCIgdi1mb3I9XCJxdWVzdGlvbiBpbiBxdWVzdGlvbnNcIj48L3F1ZXN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiIHYtc2hvdz1cInJlcXVlc3RpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OiAwO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiZmV0Y2hEYXRhKClcIiB2LXNob3c9XCIgISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCI+TG9hZCBtb3JlPC9idXR0b24+XG4gICAgICAgIDxhbnN3ZXItY3JlYXRlLW1vZGFsPjwvYW5zd2VyLWNyZWF0ZS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydxdWVzdGlvblVybCddLFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcmVxdWVzdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3QucmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBxdWVzdGlvbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnF1ZXN0aW9ucztcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC5wYWdlIC0gMTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3RhbFBhZ2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC50b3RhbFBhZ2VzO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncXVlc3Rpb25MaXN0L3NldFF1ZXN0aW9uVXJsJywgdGhpcy5xdWVzdGlvblVybCk7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3F1ZXN0aW9uTGlzdC9mZXRjaERhdGEnKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbi1saXN0LnZ1ZT9jN2NmZDlkOCIsIi8vIHF1ZXN0aW9uTGlzdFxuZXhwb3J0IGNvbnN0IEFERF9RVUVTVElPTlMgPSAnQUREX1FVRVNUSU9OUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1FVRVNUSU9OID0gJ1JFTU9WRV9RVUVTVElPTic7XG5leHBvcnQgY29uc3QgU0VUX0FTX0FOU1dFUkVEID0gJ1NFVF9BU19BTlNXRVJFRCc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVNUSU9OU19VUkwgPSAnU0VUX1FVRVNUSU9OU19VUkwnO1xuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9QQUdFID0gJ0lOQ1JFTUVOVF9QQUdFJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUkVRVUVTVElORyA9ICdVUERBVEVfUkVRVUVTVElORyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCA9ICdTRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMJztcblxuLy8gZWRpdG9yXG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9DT05URU5UID0gJ1NFVF9FRElUT1JfQ09OVEVOVCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VESVRPUl9DT05URU5UID0gJ1VQREFURV9FRElUT1JfQ09OVEVOVCc7XG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9RVUVTVElPTiA9ICdTRVRfRURJVE9SX1FVRVNUSU9OJztcbmV4cG9ydCBjb25zdCBTRVRfRURJVE9SX0VMRU1FTlQgPSAnU0VUX0VESVRPUl9FTEVNRU5UJztcblxuLy8gZmVlZFxuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMID0gJ1NFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV0VEX0FOU1dFUiA9ICdTRVRfU0hPV0VEX0FOU1dFUic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYW5zd2VyLXByZXZpZXcudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVlMzk1ZjliIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXItcHJldmlldy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5zd2VyLXByZXZpZXcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlMzk1ZjliXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWUzOTVmOWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQxZGVmMTE1IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbW1lbnQtY3JlYXRlLWZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQxZGVmMTE1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDFkZWYxMTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01NWIzYjFhNCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29tbWVudC1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29tbWVudC1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NWIzYjFhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU1YjNiMWE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjBlZmZmZWQhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbW1lbnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29tbWVudC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjBlZmZmZWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMGVmZmZlZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9xdWVzdGlvbi1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1jODNjYjc5YSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcXVlc3Rpb24tbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbi1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jODNjYjc5YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM4M2NiNzlhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDE5IDIwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyIGF2YXRhci0tc21hbGwgdS1ib3JkZXItLW5vbmVcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LWRpbWVuc2lvbi0tc21hbGwgY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS5jb21tZW50Lm93bmVyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfYygnc3Ryb25nJywgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtbGlua1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uY29tbWVudC5vd25lcilcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tZW50Lm93bmVyLm5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudC5ib2R5KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvbiB1LWJvcmRlci0tb25seS1ib3R0b21cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXB2b3RlXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXB2b3RlQ291bnQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmNvbW1lbnQudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uY29tbWVudC5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl9kb3duXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImNvbG9yXCI6IFwiZ3JleVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLmNvbW1lbnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMGVmZmZlZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjBlZmZmZWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgXCJhY3Rpb25cIjogX3ZtLmNvbW1lbnRhYmxlQ29tbWVudHNVcmxcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzOVwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybURhdGEuYm9keSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLmJvZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwiYm9keVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLmJvZHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybURhdGEuYm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHMzXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwibmFtZVwiOiBcImFjdGlvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBvc3RDb21tZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRDb21tZW50XFxuXFx0XFx0XFx0XCIpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDFkZWYxMTVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQxZGVmMTE1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uIHUtYm9yZGVyLS1ub25lXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gY29sbGVjdGlvbi1pdGVtLWZvcm1cIlxuICB9LCBbX2MoJ2NvbW1lbnQtY3JlYXRlLWZvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudGFibGUtY29tbWVudHMtdXJsXCI6IF92bS5jb21tZW50c1VybFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hZGRDb21tZW50KCRldmVudC5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uY29tbWVudHMpLCBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgcmV0dXJuIF9jKCdjb21tZW50Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJjb21tZW50XCI6IGNvbW1lbnRcbiAgICAgIH1cbiAgICB9KVxuICB9KV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU1YjNiMWE0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01NWIzYjFhNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd0Fuc3dlcigpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5zaG93UXVlc3Rpb24pID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLnF1ZXN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5xdWVzdGlvbi50aXRsZSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS5hbnN3ZXIub3duZXIpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmFuc3dlci5vd25lcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3RvcFByb3BhZ2F0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5vd25lci5uYW1lKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJpbmxpbmVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0uYW5zd2VyLnByZXZpZXcpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5hbnN3ZXIucHJldmlldy5sZW5ndGggPj0gMjU4KSA/IF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIihtb3JlKVwiKV0pIDogX3ZtLl9lKCldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwdm90ZVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwdm90ZUNvdW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcInRodW1iX2Rvd25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCJncmV5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlQ29tbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbW1lbnRzIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jb21tZW50Q291bnQpICsgXCIpXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93Q29tbWVudHMpID8gX2MoJ2NvbW1lbnQtbGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50cy11cmxcIjogX3ZtLmdldFVybCgnY29tbWVudHMnLCBfdm0uYW5zd2VyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVlMzk1ZjliXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZTM5NWY5YiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHt9LCBbX3ZtLl9sKChfdm0ucXVlc3Rpb25zKSwgZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gX2MoJ3F1ZXN0aW9uJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJxdWVzdGlvblwiOiBxdWVzdGlvblxuICAgICAgfVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5yZXF1ZXN0aW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVxdWVzdGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiXG4gIH0sIFtfdm0uX20oMCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICBleHByZXNzaW9uOiBcIiAhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIwXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZmV0Y2hEYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2FkIG1vcmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Fuc3dlci1jcmVhdGUtbW9kYWwnKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2FwLXBhdGNoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciByaWdodFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWM4M2NiNzlhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1jODNjYjc5YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggMTkgMjAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAyMHB4O1wiPlxuICAgICAgICAgICAgPGg0PjxhIDpocmVmPVwicXVlc3Rpb24gPyBnZXRVcmwoJ3NlbGZfaHRtbCcsIHF1ZXN0aW9uKSA6ICcnXCI+e3sgcXVlc3Rpb24gPyBxdWVzdGlvbi50aXRsZSA6ICcnIH19PC9hPjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cInNob3dRdWVzdGlvbkRldGFpbCA/ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsJyA6ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsIHNocmlua2VkJ1wiIEBjbGljaz1cInNob3dRdWVzdGlvbkRldGFpbCA9ICFzaG93UXVlc3Rpb25EZXRhaWxcIj5cbiAgICAgICAgICAgICAgICB7eyBxdWVzdGlvbiA/IHF1ZXN0aW9uLmJvZHkgOiAnJyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCIkdmllbmRlci50cmVhc3VyZS51c2VyID8gZ2V0VXJsKCdhdmF0YXInLCAkdmllbmRlci50cmVhc3VyZS51c2VyKSA6ICcnXCIgYWx0PVwiXCIgY2xhc3M9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdmllbmRlci50cmVhc3VyZS51c2VyID8gJHZpZW5kZXIudHJlYXN1cmUudXNlci5uYW1lIDogJycgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlci1jcmVhdGUtZWRpdG9yXCIgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiB0eXBlPVwic3VibWl0XCIgQGNsaWNrPVwiYW5zd2VyKCRldmVudClcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1F1ZXN0aW9uRGV0YWlsOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lZGl0b3IuY29udGVudDtcbiAgICAgICAgfSxcblxuICAgICAgICBxdWVzdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lZGl0b3IucXVlc3Rpb247XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHF1ZXN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UXVlc3Rpb25EZXRhaWwgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGxldCBwb3BPdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm90ZS1wb3BvdmVyJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3BPdmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IHBvcE92ZXJbaV07XG4gICAgICAgICAgICBwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoc2VsZi4kcmVmcy5lZGl0b3IpLnN1bW1lcm5vdGUoe1xuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICAgICAgICAgWydzdHlsZScsIFsnYm9sZCcsICdpdGFsaWMnXV0sXG4gICAgICAgICAgICAgICAgICAgIFsncGFyYScsIFsndWwnLCAnb2wnXV0sXG4gICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnXV0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKGNvbnRlbnRzLCAkZWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHN0b3JlLmNvbW1pdCgnZWRpdG9yLycgKyB0eXBlcy5VUERBVEVfRURJVE9SX0NPTlRFTlQsIGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ29uLWNoYW5nZScsIGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZWRpdG9yLycgKyB0eXBlcy5TRVRfRURJVE9SX0VMRU1FTlQsICQoc2VsZi4kcmVmcy5lZGl0b3IpKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhbnN3ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgaWYoZXZlbnQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmKHNlbGYucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggISBzZWxmLmNvbnRlbnQuYm9keSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzZWxmLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdhbnN3ZXJzJywgdGhpcy5xdWVzdGlvbikgKyAnP3dpdGg9b3duZXInLCBzZWxmLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnYW5zd2VyLXBvc3RlZCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc3RvcmUuY29tbWl0KCdlZGl0b3IvJyArIHR5cGVzLlVQREFURV9FRElUT1JfQ09OVEVOVCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5jb21taXQoJ3F1ZXN0aW9uTGlzdC8nICsgdHlwZXMuU0VUX0FTX0FOU1dFUkVELCBzZWxmLnF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoc2VsZi4kcmVmcy5lZGl0b3IpLnN1bW1lcm5vdGUoJ2NvZGUnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZVF1ZXN0aW9uRGV0YWlsKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UXVlc3Rpb25EZXRhaWwgPSAhIHRoaXMuc2hvd1F1ZXN0aW9uRGV0YWlsO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZT82ZDA5ZTcwYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyQ3JlYXRlTW9kYWwtb3ZlcmxheVwiIEBjbGljaz1cImhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXCIgdi1zaG93PVwic2hvd01vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJDcmVhdGVNb2RhbFwiIEBjbGljaz1cIm1vZGFsQ2xpY2tIYW5kbGUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlckNyZWF0ZU1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YW5zd2VyLWNyZWF0ZS1mb3JtIHJlZj1cImZvcm1cIiBAYW5zd2VyLXBvc3RlZD1cImhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgkZXZlbnQpXCI+PC9hbnN3ZXItY3JlYXRlLWZvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1hY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuPlg8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3Quc2hvd0Fuc3dlckNyZWF0ZU1vZGFsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZih0aGlzLnNob3dNb2RhbCkge1xuICAgICAgICAgICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoX3RoaXMuJHJlZnMuZm9ybS4kcmVmcy5lZGl0b3IpLnN1bW1lcm5vdGUoJ2VkaXRvci5mb2N1cycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbW9kYWxDbGlja0hhbmRsZShldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZUFuc3dlckNyZWF0ZU1vZGFsKGFuc3dlcikge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdxdWVzdGlvbkxpc3QvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwsIGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2ZlZWQvYWRkQW5zd2VyJywgYW5zd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci1jcmVhdGUtbW9kYWwudnVlP2JmZDI2YmZjIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0bWV0aG9kczoge1xuXHRcdGdldFVybChyZWwsIG9iaikge1xuXHRcdFx0cmV0dXJuIG9iai5saW5rcy5maWx0ZXIoZnVuY3Rpb24obGluaykge1xuXHRcdFx0XHRyZXR1cm4gbGluay5yZWwgPT0gcmVsO1xuXHRcdFx0fSlbMF0udXJsO1xuXHRcdH0sXG5cblx0XHR1cmwocGF0aCkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy51cmwocGF0aCk7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXJsSGVscGVyLmpzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IHUtbWFyZ2luLS1ub25lIHF1ZXN0aW9uXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCIhIChxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IHRydWUpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj48aDQ+PGEgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcXVlc3Rpb25PYmopXCI+e3sgcXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai50aXRsZSA6ICcnIH19PC9hPjwvaDQ+PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImV4cGFuZFF1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnXCIgQGNsaWNrPVwiZXhwYW5kUXVlc3Rpb25EZXRhaWwgPSAhZXhwYW5kUXVlc3Rpb25EZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai5ib2R5IDogJycgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XG5cdFx0XHQgICAgXHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwic2hvd0Fuc3dlckNyZWF0ZU1vZGFsKClcIlxuXHRcdFx0ICAgIFx0XHR2LWlmPVwiICEgKHF1ZXN0aW9uT2JqID8gcXVlc3Rpb25PYmouYW5zd2VyZWQgOiB0cnVlKVwiPlxuXHRcdFx0ICAgIFx0XHRBbnN3ZXJcblx0XHRcdCAgICBcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiZ3JleS10ZXh0IGRhcmtlbi0zXCIgdi1lbHNlPlxuXHRcdFx0XHRcdFx0QW5zd2VyZWRcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHQgICAgXHQ8YSBAY2xpY2s9XCJkb3dudm90ZVwiPkRvd252b3RlPC9hPlxuXHRcdFx0ICAgIFx0PGEgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnY29tbWVudHMnLCBxdWVzdGlvbk9iailcIiBAY29tbWVudC1wb3N0ZWQ9XCJpbmNyZW1lbnRDb21tZW50Q291bnQoKVwiIHYtaWY9XCJzaG93Q29tbWVudHNcIj48L2NvbW1lbnQtbGlzdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCJxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IGZhbHNlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3Ryb25nPllvdSBkb3dudm90ZWQgdGhpcyBxdWVzdGlvbjwvc3Ryb25nPlxuXHRcdFx0XHRcdDxwPkRvd252b3RpbmcgbG93LXF1YWxpdHkgY29udGVudCBpbXByb3ZlcyBWaWVuZGVyIGZvciBldmVyeW9uZS48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cblx0XHRcdCAgICBcdDxhIEBjbGljaz1cImRvd252b3RlXCI+VW5kbzwvYT5cblx0XHRcdCAgICBcdDwhLS0gPGEgQGNsaWNrPVwiZG93bnZvdGVcIj5SZXBvcnQ8L2E+IC0tPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydxdWVzdGlvbicsICd1cmwnLCAnc2hvd0RldGFpbCddLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRRdWVzdGlvbkRldGFpbDogZmFsc2UsXG4gICAgICAgICAgICBxdWVzdGlvbk9iajogbnVsbCxcbiAgICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdXB2b3RlQ291bnQ6IDAsXG4gICAgICAgICAgICBjb21tZW50Q291bnQ6IDAsXG4gICAgICAgICAgICBzaG93Q29tbWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgc3RhdGljUHJlbG9hZGVyczogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVlc3Rpb24tc3RhdGljLXByZWxvYWRlcicpLFxuICAgICAgICAgICAgYW5zd2VyVGV4dDoge1xuICAgICAgICAgICAgICAgIGJvZHk6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICBcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gaWYgdGhlIGFyZ3VtZW50IGlzIGFuIHF1ZXN0aW9uIG9iamVjdCwgdXNlIGl0LlxuICAgICAgICAvLyBpZiB0aGUgYXJndW1lbnQgaXMgYW4gdXJsLCBmZXRoIHF1ZXN0aW9uIGZyb20gdGhlcmUuXG4gICAgXHRpZiAoX3RoaXMucXVlc3Rpb24pIHtcbiAgICBcdFx0X3RoaXMucXVlc3Rpb25PYmogPSBfdGhpcy5xdWVzdGlvbjtcblx0ICAgIFx0X3RoaXMudXB2b3RlQ291bnQgPSBfdGhpcy5xdWVzdGlvbi51cHZvdGVfY291bnQ7XG5cdCAgICBcdF90aGlzLmNvbW1lbnRDb3VudCA9IF90aGlzLnF1ZXN0aW9uLmNvbW1lbnRfY291bnQ7XG4gICAgICAgICAgICBfdGhpcy5oaWRlU3RhdGljUHJlbG9hZGVycygpO1xuICAgIFx0fSBlbHNlIGlmIChfdGhpcy51cmwpIHtcbiAgICBcdFx0dmFyIHVybCA9IF90aGlzLnVybDtcblxuXHRcdFx0YXhpb3MuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnF1ZXN0aW9uT2JqID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBfdGhpcy51cHZvdGVDb3VudCA9IHJlc3BvbnNlLmRhdGEudXB2b3RlX2NvdW50O1xuICAgIFx0XHRcdF90aGlzLmNvbW1lbnRDb3VudCA9IHJlc3BvbnNlLmRhdGEuY29tbWVudF9jb3VudDtcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWRlU3RhdGljUHJlbG9hZGVycygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHRocm93ICdxdWVzdGlvbiBhbmQgdXJsIG5vdCBkZWZpbmVkLic7XG4gICAgXHR9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRpY1ByZWxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGljUHJlbG9hZGVyc1tpXS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMCc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoaWRlU3RhdGljUHJlbG9hZGVycygpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0aWNQcmVsb2FkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNQcmVsb2FkZXJzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICBcdHNob3dBbnN3ZXJDcmVhdGVNb2RhbCgpIHtcbiAgICBcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdxdWVzdGlvbkxpc3QvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwsIHRydWUpO1xuICAgIFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZWRpdG9yL3NldFF1ZXN0aW9uJywge1xuICAgIFx0XHRcdHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uT2JqLFxuICAgIFx0XHRcdGFuc3dlclRleHQ6IHRoaXMuYW5zd2VyVGV4dFxuICAgIFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdGRvd252b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdkb3dudm90ZXMnLCBfdGhpcy5xdWVzdGlvbk9iaiksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0XHQgICAgXHRfdGhpcy5xdWVzdGlvbk9iai5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMucXVlc3Rpb25PYmouZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdHRvZ2dsZUNvbW1lbnRzKCkge1xuICAgIFx0XHR0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICBcdH0sXG5cbiAgICBcdGluY3JlbWVudENvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0dGhpcy5jb21tZW50Q291bnQrKztcbiAgICBcdH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbi52dWU/ZTFjYjcwZGMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzdhZGQyYzghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci1jcmVhdGUtZm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzdhZGQyYzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03N2FkZDJjOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kM2I5YjI0ZSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kM2I5YjI0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQzYjliMjRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9xdWVzdGlvbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzNmYzk4NzAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3F1ZXN0aW9uLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzNmYzk4NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03M2ZjOTg3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJpbXBvcnQgc2VhcmNoT3JBc2tQYW5lbCBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbCc7XG5pbXBvcnQgc2VhcmNoT3JBc2tPdmVybGF5IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXknO1xuaW1wb3J0IHRvcGljUmVjb21tZW5kYXRpb24gZnJvbSAnLi9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2VhcmNoT3JBc2tQYW5lbDogc2VhcmNoT3JBc2tQYW5lbCxcblx0c2VhcmNoT3JBc2tPdmVybGF5OiBzZWFyY2hPckFza092ZXJsYXksXG4gICAgdG9waWNSZWNvbW1lbmRhdGlvbjogdG9waWNSZWNvbW1lbmRhdGlvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyB1LW1hcmdpbi0tbm9uZSBxdWVzdGlvblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzMTJcIlxuICB9LCBbKCEoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IHRydWUpKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5xdWVzdGlvbk9iailcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai50aXRsZSA6ICcnKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogX3ZtLmV4cGFuZFF1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZXhwYW5kUXVlc3Rpb25EZXRhaWwgPSAhX3ZtLmV4cGFuZFF1ZXN0aW9uRGV0YWlsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucXVlc3Rpb25PYmogPyBfdm0ucXVlc3Rpb25PYmouYm9keSA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgWyghKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai5hbnN3ZXJlZCA6IHRydWUpKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zaG93QW5zd2VyQ3JlYXRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdCAgICBcXHRcXHRBbnN3ZXJcXG5cXHRcXHRcXHQgICAgXFx0XCIpXSkgOiBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LXRleHQgZGFya2VuLTNcIlxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0QW5zd2VyZWRcXG5cXHRcXHRcXHRcXHRcXHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG93bnZvdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVDb21tZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tbWVudHMgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmNvbW1lbnRDb3VudCkgKyBcIilcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDb21tZW50cykgPyBfYygnY29tbWVudC1saXN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRzLXVybFwiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLnF1ZXN0aW9uT2JqKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai5kb3dudm90ZWQgOiBmYWxzZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvblwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmRvXCIpXSldKV0pIDogX3ZtLl9lKCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJZb3UgZG93bnZvdGVkIHRoaXMgcXVlc3Rpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiRG93bnZvdGluZyBsb3ctcXVhbGl0eSBjb250ZW50IGltcHJvdmVzIFZpZW5kZXIgZm9yIGV2ZXJ5b25lLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03M2ZjOTg3MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzNmYzk4NzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1ib3R0b21cIjogXCIyMHB4XCJcbiAgICB9XG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0ucXVlc3Rpb24gPyBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0ucXVlc3Rpb24pIDogJydcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5xdWVzdGlvbiA/IF92bS5xdWVzdGlvbi50aXRsZSA6ICcnKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBfdm0uc2hvd1F1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd1F1ZXN0aW9uRGV0YWlsID0gIV92bS5zaG93UXVlc3Rpb25EZXRhaWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucXVlc3Rpb24gPyBfdm0ucXVlc3Rpb24uYm9keSA6ICcnKSArIFwiXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS4kdmllbmRlci50cmVhc3VyZS51c2VyID8gX3ZtLmdldFVybCgnYXZhdGFyJywgX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIpIDogJycsXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdmllbmRlci50cmVhc3VyZS51c2VyID8gX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIubmFtZSA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHJlZjogXCJlZGl0b3JcIixcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItY3JlYXRlLWVkaXRvclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hbnN3ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzdhZGQyYzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc3YWRkMmM4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dNb2RhbCksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dNb2RhbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyQ3JlYXRlTW9kYWwtb3ZlcmxheVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGlkZUFuc3dlckNyZWF0ZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlckNyZWF0ZU1vZGFsXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5tb2RhbENsaWNrSGFuZGxlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlckNyZWF0ZU1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2Fuc3dlci1jcmVhdGUtZm9ybScsIHtcbiAgICByZWY6IFwiZm9ybVwiLFxuICAgIG9uOiB7XG4gICAgICBcImFuc3dlci1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5oaWRlQW5zd2VyQ3JlYXRlTW9kYWwoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIlhcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDNiOWIyNGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWQzYjliMjRlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHF1ZXN0aW9uRGV0YWlsOiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHBvc3RRdWVzdGlvblVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgnL3F1ZXN0aW9ucycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgaWYoc2hvdykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlRPR0dMRV9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gIXN0YXRlLnNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9RVUVTVElPTl9ERVRBSUxdKHN0YXRlLCBxdWVzdGlvbkRldGFpbCkge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25EZXRhaWwgPSBxdWVzdGlvbkRldGFpbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBwb3N0UXVlc3Rpb24oe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3Qoc3RhdGUucG9zdFF1ZXN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlLnNlYXJjaFRleHQsXG4gICAgICAgICAgICAgICAgYm9keTogc3RhdGUucXVlc3Rpb25EZXRhaWwsXG4gICAgICAgICAgICAgICAgdG9waWNzOiBzdGF0ZS5zZWxlY3RlZFRvcGljcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXSAoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19QQU5FTF0gKHN0YXRlLCBzaG93UGFuZWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dQYW5lbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93UGFuZWwgPSBzaG93UGFuZWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0gKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXSAoc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICB1cmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJ3RvcGljcycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgdHJ1ZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=