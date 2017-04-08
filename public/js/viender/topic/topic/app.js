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
/******/ 	return __webpack_require__(__webpack_require__.s = 285);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/jquery/dist/jquery.js'");

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return INCREMENT_FOLLOWER_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DECREMENT_FOLLOWER_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_FOLLOWER_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INCREMENT_FOLLOWING_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DECREMENT_FOLLOWING_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_FOLLOWING_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INCREMENT_TOPIC_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DECREMENT_TOPIC_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_TOPIC_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ADD_FOLLOWINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_FOLLOWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ADD_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_URL; });
var INCREMENT_FOLLOWER_COUNT = 'INCREMENT_FOLLOWER_COUNT';
var DECREMENT_FOLLOWER_COUNT = 'DECREMENT_FOLLOWER_COUNT';
var SET_FOLLOWER_COUNT = 'SET_FOLLOWER_COUNT';
var INCREMENT_FOLLOWING_COUNT = 'INCREMENT_FOLLOWING_COUNT';
var DECREMENT_FOLLOWING_COUNT = 'DECREMENT_FOLLOWING_COUNT';
var SET_FOLLOWING_COUNT = 'SET_FOLLOWING_COUNT';
var INCREMENT_TOPIC_COUNT = 'INCREMENT_TOPIC_COUNT';
var DECREMENT_TOPIC_COUNT = 'DECREMENT_TOPIC_COUNT';
var SET_TOPIC_COUNT = 'SET_TOPIC_COUNT';
var ADD_FOLLOWINGS = 'ADD_FOLLOWINGS';
var ADD_FOLLOWERS = 'ADD_FOLLOWERS';
var ADD_TOPICS = 'ADD_TOPICS';
var SET_URL = 'SET_URL';

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/vuex/dist/vuex.esm.js'");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = {};

/***/ }),
/* 12 */,
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */,
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'");

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/summernote/dist/summernote.js'");

/***/ }),
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/vue/dist/vue.common.js'");

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    data: function data() {
        return {
            selectedMenu: null,
            notMounted: true,
            nav: null,
            scrollStorageName: null
        };
    },


    methods: {
        initTab: function initTab() {
            var nav = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var scrollStorageName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!nav) throw 'this.nav is not defined';
            if (!scrollStorageName) throw 'this.scrollStorageName is not defined';

            this.nav = nav;
            this.scrollStorageName = scrollStorageName;

            var selectedMenu = parseInt(this.nav.getAttribute('initial-menu'), 10);

            if (localStorage.getItem(this.scrollStorageName + '.scrollLeft')) {
                this.nav.scrollLeft = localStorage.getItem(this.scrollStorageName + '.scrollLeft');
            } else {
                this.nav.scrollLeft = 65 * selectedMenu;
            }

            this.setCurrentMenu(selectedMenu);

            if (this.$refs.profileContentMobile) this.$refs.profileContentMobile.style.display = 'block';
        },
        currentMenu: function currentMenu(menu) {
            return this.selectedMenu === menu;
        },
        setCurrentMenu: function setCurrentMenu(selectedMenu) {
            localStorage.setItem(this.scrollStorageName + '.scrollLeft', this.nav.scrollLeft);
            this.selectedMenu = selectedMenu;

            var page = this.nav.getElementsByClassName('navigationLink')[selectedMenu].getAttribute('page');
            var url = this.nav.getElementsByClassName('navigationLink')[selectedMenu].getAttribute('href');

            if (window.history ? window.history.pushState : false) {
                window.history.pushState({
                    Page: page,
                    Url: url
                }, page, url);
            }

            if (window.ga) {
                ga('set', 'page', relativeUrl(url));
                ga('send', 'pageview');
            }
        },
        hideBeforeMountedPreloaders: function hideBeforeMountedPreloaders() {
            this.notMounted = false;
        }
    }
};

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(9);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        page: 0,
        totalPages: 1,
        requesting: false,
        followers: [],
        url: ''
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* ADD_FOLLOWERS */], function (state, followers) {
        state.followers = state.followers.concat(followers);
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SET_URL */], function (state, url) {
        state.url = url;
    }), _mutations),

    actions: {
        fetchData: function fetchData(_ref) {
            var state = _ref.state,
                commit = _ref.commit,
                rootState = _ref.rootState;

            if (state.requesting || state.page + 1 > state.totalPages) return;

            state.requesting = true;

            axios.get(state.url, {
                params: {
                    page: state.page + 1
                }
            }).then(function (response) {
                state.totalPages = response.data.meta.pagination.total_pages;
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* ADD_FOLLOWERS */], response.data.data);
                state.page++;
                state.requesting = false;
            }).catch(function (error) {
                state.requesting = false;
            });
        },
        reset: function reset(_ref2) {
            var state = _ref2.state,
                commit = _ref2.commit,
                rootState = _ref2.rootState;

            state.followers = [];
            state.page = 1;
        }
    }
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(9);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = {
    namespaced: true,

    state: {
        followerCount: 0,
        followingCount: 0,
        topicCount: 0
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_FOLLOWER_COUNT */], function (state, followerCount) {
        state.followerCount = followerCount;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* INCREMENT_FOLLOWER_COUNT */], function (state) {
        state.followerCount++;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* DECREMENT_FOLLOWER_COUNT */], function (state) {
        state.followerCount--;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* SET_FOLLOWING_COUNT */], function (state, followingCount) {
        state.followingCount = followingCount;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* INCREMENT_FOLLOWING_COUNT */], function (state) {
        state.followingCount++;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* DECREMENT_FOLLOWING_COUNT */], function (state) {
        state.followingCount--;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* SET_TOPIC_COUNT */], function (state, topicCount) {
        state.topicCount = topicCount;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* INCREMENT_TOPIC_COUNT */], function (state) {
        state.topicCount++;
    }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["k" /* DECREMENT_TOPIC_COUNT */], function (state) {
        state.topicCount--;
    }), _mutations),

    actions: {}
};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_profile_core_js_store_mutation_types__ = __webpack_require__(9);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
	props: ['url', 'followee_id', 'followed'],

	data: function data() {
		return {
			requesting: false,

			user: {
				followed: false
			}
		};
	},
	created: function created() {
		this.user.followed = this.followed ? this.followed : false;
	},
	mounted: function mounted() {
		this.$emit('mounted');
	},


	methods: {
		follow: function follow() {
			var _this = this;

			if (_this.requesting) return;

			_this.requesting = true;

			axios.post(_this.url, { 'followee_id': _this.followee_id }).then(function (response) {
				_this.user.followed = !_this.user.followed;

				if (_this.user.followed) {
					_this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0_viender_profile_core_js_store_mutation_types__["d" /* INCREMENT_FOLLOWER_COUNT */]);
				} else {
					_this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0_viender_profile_core_js_store_mutation_types__["e" /* DECREMENT_FOLLOWER_COUNT */]);
				}

				_this.requesting = false;
			}).catch(function (error) {
				if (error.response.status == 401) {
					document.location = url('login');
				}
				_this.requesting = false;
			});
		},
		unfollow: function unfollow() {
			this.follow();
		}
	}
};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(9);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
	props: ['followerCount'],

	computed: {
		followerCountx: function followerCountx() {
			return this.$store.state.userStats.followerCount;
		}
	},

	mounted: function mounted() {
		this.$emit('mounted');
		this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["c" /* SET_FOLLOWER_COUNT */], this.followerCount);
	}
};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__ = __webpack_require__(9);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
	props: ['url'],

	computed: Object.assign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])('followerList', ['requesting', 'followers', 'page', 'totalPages'])),

	created: function created() {
		this.$store.commit('followerList/' + __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["b" /* SET_URL */], this.url);
		this.fetchData();
	},


	methods: Object.assign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('followerList', ['fetchData']))
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(9);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
	props: ['followingCount'],

	computed: {
		followingCountx: function followingCountx() {
			return this.$store.state.userStats.followingCount;
		}
	},

	mounted: function mounted() {
		this.$emit('mounted');
		this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["f" /* SET_FOLLOWING_COUNT */], this.followingCount);
	}
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__ = __webpack_require__(9);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
	props: ['url'],

	computed: Object.assign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])('followingList', ['requesting', 'followings', 'page', 'totalPages'])),

	created: function created() {
		this.$store.commit('followingList/' + __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["b" /* SET_URL */], this.url);
		this.fetchData();
	},


	methods: Object.assign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('followingList', ['fetchData']))
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(9);
//
//
//
//
//
//
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
  props: ['topic'],

  mixins: [__webpack_require__(4)],

  data: function data() {
    return {
      requesting: false,
      followed: true
    };
  },
  created: function created() {
    this.followed = this.topic.followed;
  },


  methods: {
    follow: function follow() {
      var _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(_this.$viender.helpers.getUrl('follow', _this.topic), { 'topic_id': _this.topic.id }).then(function (response) {
        _this.followed = !_this.followed;

        if (_this.followed) {
          _this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["j" /* INCREMENT_TOPIC_COUNT */]);
        } else {
          _this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["k" /* DECREMENT_TOPIC_COUNT */]);
        }

        _this.requesting = false;
      }).catch(function (error) {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },
    unfollow: function unfollow() {
      this.follow();
    }
  }
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(9);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
	props: ['topicCount'],

	computed: {
		topicCountx: function topicCountx() {
			return this.$store.state.userStats.topicCount;
		}
	},

	mounted: function mounted() {
		this.$emit('mounted');
		this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["i" /* SET_TOPIC_COUNT */], this.topicCount);
	}
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__ = __webpack_require__(9);
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
	props: ['url'],

	computed: Object.assign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])('topicList', ['page', 'totalPages', 'requesting', 'topics'])),

	created: function created() {
		this.$store.commit('topicList/' + __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["b" /* SET_URL */], this.url);
		this.$store.dispatch('topicList/fetchData');
	},


	methods: Object.assign(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('topicList', ['fetchData']))
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
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
	props: ['user'],

	mixins: [__webpack_require__(4)],

	data: function data() {
		return {
			requesting: false,
			followed: true
		};
	},
	created: function created() {
		this.followed = this.user.followed;
	},


	methods: {
		follow: function follow() {
			var _this = this;

			if (_this.requesting) return;

			_this.requesting = true;

			axios.post(_this.$viender.helpers.getUrl('follow', _this.user), { 'followee_id': _this.user.id }).then(function (response) {
				_this.followed = !_this.followed;

				if (_this.followed) {
					_this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["g" /* INCREMENT_FOLLOWING_COUNT */]);
				} else {
					_this.$store.commit('userStats/' + __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["h" /* DECREMENT_FOLLOWING_COUNT */]);
				}

				_this.requesting = false;
			}).catch(function (error) {
				if (error.response.status == 401) {
					document.location = url('login');
				}
				_this.requesting = false;
			});
		},
		unfollow: function unfollow() {
			this.follow();
		}
	}
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/follow/resources/core/js/components/follow-button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] follow-button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d41d6fe", Component.options)
  } else {
    hotAPI.reload("data-v-7d41d6fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/follower-count.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] follower-count.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c51165e", Component.options)
  } else {
    hotAPI.reload("data-v-4c51165e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/follower-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] follower-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ef90f1f", Component.options)
  } else {
    hotAPI.reload("data-v-2ef90f1f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/following-count.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] following-count.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16b5df85", Component.options)
  } else {
    hotAPI.reload("data-v-16b5df85", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/following-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] following-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fd30518", Component.options)
  } else {
    hotAPI.reload("data-v-7fd30518", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/topic-card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topic-card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44fbfea8", Component.options)
  } else {
    hotAPI.reload("data-v-44fbfea8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/topic-count.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topic-count.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-348b69a3", Component.options)
  } else {
    hotAPI.reload("data-v-348b69a3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/topic-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topic-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e34bf3a", Component.options)
  } else {
    hotAPI.reload("data-v-2e34bf3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/profile/resources/core/js/components/user-card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user-card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a9c516f8", Component.options)
  } else {
    hotAPI.reload("data-v-a9c516f8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "profileNavigation-value"
  }, [_vm._v(_vm._s(_vm.followingCountx))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16b5df85", module.exports)
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row topic-list"
  }, _vm._l((_vm.topics), function(topic) {
    return _c('div', {
      staticClass: "col s6"
    }, [_c('topic-card', {
      attrs: {
        "topic": topic
      }
    }), _vm._v(" "), _c('button', {
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
    }, [_vm._v("Load more")])], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e34bf3a", module.exports)
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.followers), function(user) {
    return _c('user-card', {
      attrs: {
        "user": user
      }
    })
  }), _vm._v(" "), _c('button', {
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ef90f1f", module.exports)
  }
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "profileNavigation-value"
  }, [_vm._v(_vm._s(_vm.topicCountx))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-348b69a3", module.exports)
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topicCard"
  }, [_c('img', {
    staticClass: "topicCard-thumbnail",
    attrs: {
      "src": _vm.$viender.helpers.getUrl('thumbnail', _vm.topic),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "topicCard-name"
  }, [_c('a', {
    attrs: {
      "href": _vm.$viender.helpers.getUrl('self_html', _vm.topic)
    }
  }, [_vm._v("\n      " + _vm._s(_vm.topic.name) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "topicCard-action"
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.followed),
      expression: "! followed"
    }],
    staticClass: "btn followButton",
    on: {
      "click": function($event) {
        _vm.follow()
      }
    }
  }, [_vm._v("Follow")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.followed),
      expression: "followed"
    }],
    staticClass: "btn unfollowButton",
    on: {
      "click": function($event) {
        _vm.unfollow()
      }
    }
  }, [_vm._v("Unfollow")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44fbfea8", module.exports)
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "profileNavigation-value"
  }, [_vm._v(_vm._s(_vm.followerCountx))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c51165e", module.exports)
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "followButton"
  }, [(!_vm.user.followed) ? _c('button', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        _vm.follow()
      }
    }
  }, [_vm._v("Follow")]) : _c('button', {
    staticClass: "btn followed",
    on: {
      "click": function($event) {
        _vm.unfollow()
      }
    }
  }, [_vm._v("Unfollow")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d41d6fe", module.exports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.followings), function(user) {
    return _c('user-card', {
      attrs: {
        "user": user
      }
    })
  }), _vm._v(" "), _c('button', {
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7fd30518", module.exports)
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "userCard"
  }, [_c('ul', {
    staticClass: "collection"
  }, [_c('li', {
    staticClass: "collection-item avatar"
  }, [_c('img', {
    staticClass: "circle",
    attrs: {
      "src": _vm.$viender.helpers.getUrl('avatar', _vm.user),
      "alt": ""
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "href": _vm.$viender.helpers.getUrl('self_html', _vm.user)
    }
  }, [_c('span', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.user.name))])]), _vm._v(" "), (_vm.$viender.user ? _vm.$viender.user.id !== _vm.user.id : false) ? _c('div', [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.followed),
      expression: "! followed"
    }],
    staticClass: "btn followButton",
    on: {
      "click": function($event) {
        _vm.follow()
      }
    }
  }, [_vm._v("Follow")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.followed),
      expression: "followed"
    }],
    staticClass: "btn unfollowButton",
    on: {
      "click": function($event) {
        _vm.unfollow()
      }
    }
  }, [_vm._v("Unfollow")])]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a9c516f8", module.exports)
  }
}

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(42);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    methods: {
        followSuccessHandle: function followSuccessHandle(response) {
            if (response.status === 201) {
                this.$refs.followTopicButton.$el.className += ' followed';
                this.$refs.followTopicButton.$el.innerHTML = 'Unfollow';
            } else if (response.status === 204) {
                this.$refs.followTopicButton.$el.className = this.$refs.followTopicButton.$el.className.replace(' followed', '');
                this.$refs.followTopicButton.$el.innerHTML = 'Follow';
            }
        }
    }
};

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_viender_core_js_store_modules_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_viender_socialite_core_js_store_modules_questionList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_viender_socialite_core_js_store_modules_editor__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_viender_socialite_core_js_store_modules_feed__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_viender_profile_core_js_store_modules_userStats__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_viender_profile_core_js_store_modules_followerList__ = __webpack_require__(67);










/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_2_viender_core_js_store_modules_js__["a" /* default */], {
    questionList: __WEBPACK_IMPORTED_MODULE_3_viender_socialite_core_js_store_modules_questionList__["a" /* default */],
    editor: __WEBPACK_IMPORTED_MODULE_4_viender_socialite_core_js_store_modules_editor__["a" /* default */],
    feed: __WEBPACK_IMPORTED_MODULE_5_viender_socialite_core_js_store_modules_feed__["a" /* default */],
    userStats: __WEBPACK_IMPORTED_MODULE_6_viender_profile_core_js_store_modules_userStats__["a" /* default */],
    followerList: __WEBPACK_IMPORTED_MODULE_7_viender_profile_core_js_store_modules_followerList__["a" /* default */]
  }),

  actions: __webpack_require__(11)
});

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viender_profile_core_js_mixins_changeableMenuMixin__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_followSuccessHandleMixin__ = __webpack_require__(124);




/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(123);

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

Vue.component('question', __webpack_require__(48));
Vue.component('question-list', __webpack_require__(25));
Vue.component('answer-create-form', __webpack_require__(43));
Vue.component('answer-create-modal', __webpack_require__(44));

Vue.component('follow-button', __webpack_require__(78));
Vue.component('follower-count', __webpack_require__(79));
Vue.component('following-count', __webpack_require__(81));
Vue.component('topic-count', __webpack_require__(84));
Vue.component('following-list', __webpack_require__(82));
Vue.component('follower-list', __webpack_require__(80));
Vue.component('topic-list', __webpack_require__(85));
Vue.component('user-card', __webpack_require__(86));
Vue.component('topic-card', __webpack_require__(83));

var feed = new Vue({
  el: '#app',

  mixins: [__WEBPACK_IMPORTED_MODULE_1_viender_profile_core_js_mixins_changeableMenuMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_followSuccessHandleMixin__["a" /* default */]],

  store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */],

  mounted: function mounted() {
    this.initTab(this.$refs.topicNav, 'profileNavigation');
  }
});

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcz80YmRiKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcz8yYmM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VybEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanM/M2Y1YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzP2FmYWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanM/MDljNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcz8zNjIwIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9hY3Rpb25zLmpzPzYxNmQiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9xdWVzdGlvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vL2Fuc3dlci1wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vY29tbWVudC1jcmVhdGUtZm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQtbGlzdC52dWUiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQudnVlIiwid2VicGFjazovLy9xdWVzdGlvbi1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZT8wZGNkIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWU/OTY0OCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWU/ODJmMSIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlPzliMTEiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZT9kMzkxIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWU/ZTljMiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlP2M1NzciLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlP2I5ZTEiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWU/ZmIxZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlPzMyNDQiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mZWVkLmpzIiwid2VicGFjazovLy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlIiwid2VicGFjazovLy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYW5zd2VyLXNob3ctbW9kYWwudnVlIiwid2VicGFjazovLy9hbnN3ZXIudnVlIiwid2VicGFjazovLy9mZWVkLWxpc3QudnVlIiwid2VicGFjazovLy9xdWVzdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlPzYxNzEiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZT8yY2UzIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlPzZkYzIiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlP2JlNzUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mZWVkLWxpc3QudnVlPzBkZGEiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWU/OTY3MSIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWU/Mjk4OSIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWU/NWViOCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZT84OGI3Iiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlPzA1MTYiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlPzE2N2QiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZT81ZjNjIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9taXhpbnMvY2hhbmdlYWJsZU1lbnVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mb2xsb3dlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvdXNlclN0YXRzLmpzIiwid2VicGFjazovLy9mb2xsb3ctYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vZm9sbG93ZXItY291bnQudnVlIiwid2VicGFjazovLy9mb2xsb3dlci1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vZm9sbG93aW5nLWNvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vZm9sbG93aW5nLWxpc3QudnVlIiwid2VicGFjazovLy90b3BpYy1jYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vdG9waWMtY291bnQudnVlIiwid2VicGFjazovLy90b3BpYy1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdXNlci1jYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL2ZvbGxvdy9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvdy1idXR0b24udnVlIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jb3VudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdXNlci1jYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlP2FiZjIiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtbGlzdC52dWU/NmExYyIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZT8zODE5Iiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNvdW50LnZ1ZT9iOTdkIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNhcmQudnVlPzM0MWEiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItY291bnQudnVlPzUxYzIiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9mb2xsb3cvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3ctYnV0dG9uLnZ1ZT81Nzk2Iiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1saXN0LnZ1ZT81ZWM4Iiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3VzZXItY2FyZC52dWU/N2RhMyIsIndlYnBhY2s6Ly8vLi9hcHBzL3RvcGljL3Jlc291cmNlcy9wYWdlcy90b3BpYy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2FwcHMvdG9waWMvcmVzb3VyY2VzL3BhZ2VzL3RvcGljL2Fzc2V0cy9qcy9taXhpbnMvZm9sbG93U3VjY2Vzc0hhbmRsZU1peGluLmpzIiwid2VicGFjazovLy8uL2FwcHMvdG9waWMvcmVzb3VyY2VzL3BhZ2VzL3RvcGljL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3RvcGljL3Jlc291cmNlcy9wYWdlcy90b3BpYy9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIlNFVF9SRVFVRVNUSU5HIiwiU0VUX1NIT1dfUEFORUwiLCJTRVRfU0hPVyIsIlNFVF9TRUFSQ0hfVEVYVCIsIlNFVF9TRUFSQ0hfUkVTVUxUUyIsIlNFVF9TSE9XX01PUkVfRklFTERTIiwiVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMiLCJBRERfVE9fU0VMRUNURURfVE9QSUNTIiwiUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTIiwiU0VUX1FVRVNUSU9OX0RFVEFJTCIsIkFERF9RVUVTVElPTlMiLCJSRU1PVkVfUVVFU1RJT04iLCJTRVRfQVNfQU5TV0VSRUQiLCJTRVRfUVVFU1RJT05TX1VSTCIsIklOQ1JFTUVOVF9QQUdFIiwiVVBEQVRFX1JFUVVFU1RJTkciLCJTRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMIiwiU0VUX0VESVRPUl9DT05URU5UIiwiVVBEQVRFX0VESVRPUl9DT05URU5UIiwiU0VUX0VESVRPUl9RVUVTVElPTiIsIlNFVF9FRElUT1JfRUxFTUVOVCIsIlNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMIiwiU0VUX1NIT1dFRF9BTlNXRVIiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0aG9kcyIsImdldFVybCIsInJlbCIsIm9iaiIsImxpbmtzIiwiZmlsdGVyIiwibGluayIsInVybCIsInBhdGgiLCJ3aW5kb3ciLCJzZWFyY2hPckFza1BhbmVsIiwic2VhcmNoT3JBc2tPdmVybGF5IiwidG9waWNSZWNvbW1lbmRhdGlvbiIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsInJlcXVlc3RpbmciLCJzaG93Iiwic2VhcmNoVGV4dCIsInF1ZXN0aW9uRGV0YWlsIiwic2VhcmNoUmVzdWx0cyIsInNob3dNb3JlRmllbGRzIiwic2VsZWN0ZWRUb3BpY3MiLCJwb3N0UXVlc3Rpb25VcmwiLCJWdWUiLCJwcm90b3R5cGUiLCIkdmllbmRlciIsImhlbHBlcnMiLCJhcGkiLCJtdXRhdGlvbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJ0b3BpYyIsInB1c2giLCJzZWxlY3RlZFRvcGljIiwiaWQiLCJhY3Rpb25zIiwicG9zdFF1ZXN0aW9uIiwiY29tbWl0IiwiYXhpb3MiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidG9waWNzIiwidGhlbiIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInNob3dQYW5lbCIsIm92ZXJmbG93Iiwic2hvd1RvcGljUmVjb21tZW5kYXRpb25zIiwic2V0VGltZW91dCIsImhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyIsIklOQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCIsIkRFQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCIsIlNFVF9GT0xMT1dFUl9DT1VOVCIsIklOQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQiLCJERUNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UIiwiU0VUX0ZPTExPV0lOR19DT1VOVCIsIklOQ1JFTUVOVF9UT1BJQ19DT1VOVCIsIkRFQ1JFTUVOVF9UT1BJQ19DT1VOVCIsIlNFVF9UT1BJQ19DT1VOVCIsIkFERF9GT0xMT1dJTkdTIiwiQUREX0ZPTExPV0VSUyIsIkFERF9UT1BJQ1MiLCJTRVRfVVJMIiwiZWRpdG9yRWxlbWVudCIsInF1ZXN0aW9uIiwiY29udGVudCIsInNldFF1ZXN0aW9uIiwicGF5bG9hZCIsInJvb3RTdGF0ZSIsImFuc3dlclRleHQiLCJzdW1tZXJub3RlIiwicGFnZSIsInRvdGFsUGFnZXMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvblVybCIsInNob3dBbnN3ZXJDcmVhdGVNb2RhbCIsImNvbmNhdCIsInNwbGljZSIsImluZGV4T2YiLCJhbnN3ZXJlZCIsIiQiLCJzY3JvbGxUb3AiLCJtb2RhbCIsImltYWdlUG9wT3ZlciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNwbGF5Iiwic2V0UXVlc3Rpb25VcmwiLCJmZXRjaERhdGEiLCJnZXQiLCJwYXJhbXMiLCJ3aXRoIiwibWV0YSIsInBhZ2luYXRpb24iLCJ0b3RhbF9wYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJhbnN3ZXJzIiwiZmVlZFVybHMiLCJzaG93QW5zd2VyTW9kYWwiLCJzaG93ZWRBbnN3ZXIiLCJhZGRBbnN3ZXJzIiwic2V0RmVlZFVybCIsImluY3JlbWVudFBhZ2UiLCJ1cGRhdGVSZXF1ZXN0aW5nIiwiYW5zd2VyIiwidW5zaGlmdCIsInNldFNob3dlZEFuc3dlciIsIm9ubHkiLCJzZWxlY3RlZE1lbnUiLCJub3RNb3VudGVkIiwibmF2Iiwic2Nyb2xsU3RvcmFnZU5hbWUiLCJpbml0VGFiIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Nyb2xsTGVmdCIsInNldEN1cnJlbnRNZW51IiwiJHJlZnMiLCJwcm9maWxlQ29udGVudE1vYmlsZSIsImN1cnJlbnRNZW51IiwibWVudSIsInNldEl0ZW0iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiUGFnZSIsIlVybCIsImdhIiwicmVsYXRpdmVVcmwiLCJoaWRlQmVmb3JlTW91bnRlZFByZWxvYWRlcnMiLCJmb2xsb3dlcnMiLCJyZXNldCIsImZvbGxvd2VyQ291bnQiLCJmb2xsb3dpbmdDb3VudCIsInRvcGljQ291bnQiLCJyZXF1aXJlIiwiZm9sbG93U3VjY2Vzc0hhbmRsZSIsInN0YXR1cyIsImZvbGxvd1RvcGljQnV0dG9uIiwiJGVsIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJxdWVzdGlvbkxpc3QiLCJlZGl0b3IiLCJmZWVkIiwidXNlclN0YXRzIiwiZm9sbG93ZXJMaXN0IiwiY29tcG9uZW50IiwiZWwiLCJtaXhpbnMiLCJzdG9yZSIsIm1vdW50ZWQiLCJ0b3BpY05hdiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFB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QUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FB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LENBQVIsQ0FBYixDIiwiZmlsZSI6ImpzL3ZpZW5kZXIvdG9waWMvdG9waWMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyODUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFjNzY1ZjZmOGEzYjdmM2Y0ODMwIiwiLy8gc2VhcmNoT3JBc2tQYW5lbFxuZXhwb3J0IGNvbnN0IFNFVF9SRVFVRVNUSU5HID0gJ1NFVF9SRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19QQU5FTCA9ICdTRVRfU0hPV19QQU5FTCc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1cgPSAnU0VUX1NIT1cnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfVEVYVCA9ICdTRVRfU0VBUkNIX1RFWFQnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfUkVTVUxUUyA9ICdTRVRfU0VBUkNIX1JFU1VMVFMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX01PUkVfRklFTERTID0gJ1NFVF9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyA9ICdUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX1NFTEVDVEVEX1RPUElDUyA9ICdBRERfVE9fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MgPSAnUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFU1RJT05fREVUQUlMID0gJ1NFVF9RVUVTVElPTl9ERVRBSUwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsIi8vIHF1ZXN0aW9uTGlzdFxuZXhwb3J0IGNvbnN0IEFERF9RVUVTVElPTlMgPSAnQUREX1FVRVNUSU9OUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1FVRVNUSU9OID0gJ1JFTU9WRV9RVUVTVElPTic7XG5leHBvcnQgY29uc3QgU0VUX0FTX0FOU1dFUkVEID0gJ1NFVF9BU19BTlNXRVJFRCc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVNUSU9OU19VUkwgPSAnU0VUX1FVRVNUSU9OU19VUkwnO1xuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9QQUdFID0gJ0lOQ1JFTUVOVF9QQUdFJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUkVRVUVTVElORyA9ICdVUERBVEVfUkVRVUVTVElORyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCA9ICdTRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMJztcblxuLy8gZWRpdG9yXG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9DT05URU5UID0gJ1NFVF9FRElUT1JfQ09OVEVOVCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VESVRPUl9DT05URU5UID0gJ1VQREFURV9FRElUT1JfQ09OVEVOVCc7XG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9RVUVTVElPTiA9ICdTRVRfRURJVE9SX1FVRVNUSU9OJztcbmV4cG9ydCBjb25zdCBTRVRfRURJVE9SX0VMRU1FTlQgPSAnU0VUX0VESVRPUl9FTEVNRU5UJztcblxuLy8gZmVlZFxuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMID0gJ1NFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV0VEX0FOU1dFUiA9ICdTRVRfU0hPV0VEX0FOU1dFUic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRVcmwocmVsLCBvYmopIHtcblx0XHRcdHJldHVybiBvYmoubGlua3MuZmlsdGVyKGZ1bmN0aW9uKGxpbmspIHtcblx0XHRcdFx0cmV0dXJuIGxpbmsucmVsID09IHJlbDtcblx0XHRcdH0pWzBdLnVybDtcblx0XHR9LFxuXG5cdFx0dXJsKHBhdGgpIHtcblx0XHRcdHJldHVybiB3aW5kb3cudXJsKHBhdGgpO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VybEhlbHBlci5qcyIsImltcG9ydCBzZWFyY2hPckFza1BhbmVsIGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsJztcbmltcG9ydCBzZWFyY2hPckFza092ZXJsYXkgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheSc7XG5pbXBvcnQgdG9waWNSZWNvbW1lbmRhdGlvbiBmcm9tICcuL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzZWFyY2hPckFza1BhbmVsOiBzZWFyY2hPckFza1BhbmVsLFxuXHRzZWFyY2hPckFza092ZXJsYXk6IHNlYXJjaE9yQXNrT3ZlcmxheSxcbiAgICB0b3BpY1JlY29tbWVuZGF0aW9uOiB0b3BpY1JlY29tbWVuZGF0aW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgcXVlc3Rpb25EZXRhaWw6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgcG9zdFF1ZXN0aW9uVXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCcvcXVlc3Rpb25zJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBpZihzaG93KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSAhc3RhdGUuc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1FVRVNUSU9OX0RFVEFJTF0oc3RhdGUsIHF1ZXN0aW9uRGV0YWlsKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbkRldGFpbCA9IHF1ZXN0aW9uRGV0YWlsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHBvc3RRdWVzdGlvbih7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdChzdGF0ZS5wb3N0UXVlc3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICBib2R5OiBzdGF0ZS5xdWVzdGlvbkRldGFpbCxcbiAgICAgICAgICAgICAgICB0b3BpY3M6IHN0YXRlLnNlbGVjdGVkVG9waWNzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93UGFuZWw6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddIChzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX1BBTkVMXSAoc3RhdGUsIHNob3dQYW5lbCkge1xuICAgICAgICAgICAgaWYoc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3dQYW5lbCA9IHNob3dQYW5lbDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXSAoc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdIChzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgndG9waWNzJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd1RvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZVRvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzIiwiZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCA9ICdJTkNSRU1FTlRfRk9MTE9XRVJfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCA9ICdERUNSRU1FTlRfRk9MTE9XRVJfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IFNFVF9GT0xMT1dFUl9DT1VOVCA9ICdTRVRfRk9MTE9XRVJfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQgPSAnSU5DUkVNRU5UX0ZPTExPV0lOR19DT1VOVCc7XG5leHBvcnQgY29uc3QgREVDUkVNRU5UX0ZPTExPV0lOR19DT1VOVCA9ICdERUNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UJztcbmV4cG9ydCBjb25zdCBTRVRfRk9MTE9XSU5HX0NPVU5UID0gJ1NFVF9GT0xMT1dJTkdfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9UT1BJQ19DT1VOVCA9ICdJTkNSRU1FTlRfVE9QSUNfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9UT1BJQ19DT1VOVCA9ICdERUNSRU1FTlRfVE9QSUNfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IFNFVF9UT1BJQ19DT1VOVCA9ICdTRVRfVE9QSUNfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IEFERF9GT0xMT1dJTkdTID0gJ0FERF9GT0xMT1dJTkdTJztcbmV4cG9ydCBjb25zdCBBRERfRk9MTE9XRVJTID0gJ0FERF9GT0xMT1dFUlMnO1xuZXhwb3J0IGNvbnN0IEFERF9UT1BJQ1MgPSAnQUREX1RPUElDUyc7XG5leHBvcnQgY29uc3QgU0VUX1VSTCA9ICdTRVRfVVJMJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvYWN0aW9ucy5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIGVkaXRvckVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHF1ZXN0aW9uOiBudWxsLFxuICAgICAgICBjb250ZW50OiBudWxsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgW3R5cGVzLlNFVF9FRElUT1JfQ09OVEVOVF0gKHN0YXRlLCBjb250ZW50KSB7XG4gICAgICAgICAgICBzdGF0ZS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVVBEQVRFX0VESVRPUl9DT05URU5UXSAoc3RhdGUsIGJvZHkpIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb250ZW50LmJvZHkgPSBib2R5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfRURJVE9SX1FVRVNUSU9OXSAoc3RhdGUsIHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfRURJVE9SX0VMRU1FTlRdIChzdGF0ZSwgZWRpdG9yRWxlbWVudCkge1xuICAgICAgICAgICAgc3RhdGUuZWRpdG9yRWxlbWVudCA9IGVkaXRvckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZXRRdWVzdGlvbih7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX0VESVRPUl9DT05URU5ULCBwYXlsb2FkLmFuc3dlclRleHQpO1xuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9FRElUT1JfUVVFU1RJT04sIHBheWxvYWQucXVlc3Rpb24pO1xuICAgICAgICAgICAgaWYoc3RhdGUuZWRpdG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmVkaXRvckVsZW1lbnQuc3VtbWVybm90ZSgnY29kZScsIHBheWxvYWQuYW5zd2VyVGV4dC5ib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9lZGl0b3IuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0b3RhbFBhZ2VzOiAyLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgcXVlc3Rpb25zOiBbXSxcbiAgICAgICAgcXVlc3Rpb25Vcmw6e30sXG4gICAgICAgIHNob3dBbnN3ZXJDcmVhdGVNb2RhbDogZmFsc2UsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgW3R5cGVzLkFERF9RVUVTVElPTlNdIChzdGF0ZSwgcXVlc3Rpb25zKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbnMgPSBzdGF0ZS5xdWVzdGlvbnMuY29uY2F0KHF1ZXN0aW9ucyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9RVUVTVElPTl0gKHN0YXRlLCBxdWVzdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25zLnNwbGljZShzdGF0ZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbiksIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfQVNfQU5TV0VSRURdIChzdGF0ZSwgcXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uc1tzdGF0ZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbildLmFuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1FVRVNUSU9OU19VUkxdIChzdGF0ZSwgdXJsKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvblVybCA9IHVybDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuSU5DUkVNRU5UX1BBR0VdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUucGFnZSsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5VUERBVEVfUkVRVUVTVElOR10gKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTF0gKHN0YXRlLCBzaG93QW5zd2VyQ3JlYXRlTW9kYWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dBbnN3ZXJDcmVhdGVNb2RhbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLmFuc3dlci1jcmVhdGUtbW9kYWwtb3ZlcmxheScpLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGltYWdlUG9wT3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJub3RlLWltYWdlLXBvcG92ZXJcIilbMF07XG5cbiAgICAgICAgICAgIGlmKGltYWdlUG9wT3ZlcikgaW1hZ2VQb3BPdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3dBbnN3ZXJDcmVhdGVNb2RhbCA9IHNob3dBbnN3ZXJDcmVhdGVNb2RhbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZXRRdWVzdGlvblVybCh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9LCB1cmwpIHtcbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUVVFU1RJT05TX1VSTCwgdXJsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBmZXRjaERhdGEoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQodHlwZXMuVVBEQVRFX1JFUVVFU1RJTkcsIHRydWUpO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoc3RhdGUucXVlc3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lcicsICdhbnN3ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogc3RhdGUucGFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFBhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXM7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLkFERF9RVUVTVElPTlMsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLklOQ1JFTUVOVF9QQUdFKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuVVBEQVRFX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5VUERBVEVfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvcXVlc3Rpb25MaXN0LmpzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiIEBjbGljaz1cInNob3dBbnN3ZXIoKVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiIHYtaWY9XCJzaG93UXVlc3Rpb25cIj5cblx0XHRcdFx0XHRcdDxoND48YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLnF1ZXN0aW9uKVwiIEBjbGljaz1cInN0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCI+e3sgYW5zd2VyLnF1ZXN0aW9uLnRpdGxlIH19PC9hPjwvaDQ+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQgIFx0PHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJnZXRVcmwoJ2F2YXRhcicsIGFuc3dlci5vd25lcilcIiBhbHQ9XCJcIiBjbGFzcz1cImNpcmNsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLm93bmVyKVwiIEBjbGljaz1cInN0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgYW5zd2VyLm93bmVyLm5hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYW5zd2VyLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIiB2LWh0bWw9XCJhbnN3ZXIucHJldmlld1wiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGEgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIiB2LWlmPVwiYW5zd2VyLnByZXZpZXcubGVuZ3RoID49IDI1OFwiPihtb3JlKTwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuXHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG5cdFx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IHVwdm90ZUNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX3VwPC9hPlxuXHRcdFx0ICAgIFx0PC9zcGFuPlxuXHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIEBjbGljaz1cImRvd252b3RlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfZG93bjwvYT5cblx0XHRcdCAgICBcdDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCJnZXRVcmwoJ2NvbW1lbnRzJywgYW5zd2VyKVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcbiAgICBcdGFuc3dlcjoge1xuICAgIFx0XHR0eXBlOiBPYmplY3QsXG4gICAgXHRcdGRlZmF1bHQ6IG51bGwsXG4gICAgXHR9LFxuICAgIFx0c2hvd1F1ZXN0aW9uOiB7XG4gICAgXHRcdHR5cGU6IEJvb2xlYW4sXG4gICAgXHRcdGRlZmF1bHQ6IHRydWUsXG4gICAgXHR9LFxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGRhdGEoKSB7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBcdFx0c2hvd0NvbW1lbnRzOiBmYWxzZVxuICAgIFx0fVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgIFx0dXB2b3RlQ291bnQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLmFuc3dlciA/IHRoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCA6IDA7XG4gICAgXHR9LFxuXG4gICAgXHRjb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLmFuc3dlciA/IHRoaXMuYW5zd2VyLmNvbW1lbnRfY291bnQgOiAwO1xuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHRzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuXG4gICAgXHRzaG93QW5zd2VyKCkge1xuICAgIFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2ZlZWQvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMLCB0cnVlKTtcbiAgICBcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZlZWQvc2V0U2hvd2VkQW5zd2VyJywgdGhpcy5hbnN3ZXIpO1xuICAgIFx0fSxcblxuICAgIFx0dXB2b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmdldFVybCgndXB2b3RlcycsIHRoaXMuYW5zd2VyKSwge30pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgKz0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSB0cnVlO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCAtPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHRkb3dudm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ2Rvd252b3RlcycsIHRoaXMuYW5zd2VyKSwge30pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG5cdFx0XHQgICAgICAgIFx0aWYoX3RoaXMuYW5zd2VyLnVwdm90ZWQpXG5cdFx0XHQgICAgICAgIFx0XHRfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHR0b2dnbGVDb21tZW50cygpIHtcbiAgICBcdFx0dGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XG4gICAgXHR9LFxuXG4gICAgXHRpbmNyZW1lbnRDb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHRoaXMuY29tbWVudENvdW50Kys7XG4gICAgXHR9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLXByZXZpZXcudnVlPzE1NTRhZmY2IiwiPHRlbXBsYXRlPlxuXHQ8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgOmFjdGlvbj1cImNvbW1lbnRhYmxlQ29tbWVudHNVcmxcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHM5XCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJib2R5XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiB2LW1vZGVsPVwiZm9ybURhdGEuYm9keVwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHMzXCI+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIiBAY2xpY2s9XCJwb3N0Q29tbWVudCgkZXZlbnQpXCI+XG5cdFx0XHRcdFx0Q29tbWVudFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydjb21tZW50YWJsZUNvbW1lbnRzVXJsJ10sXG5cblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVxdWVzdGluZzogZmFsc2UsXG5cdFx0XHRmb3JtRGF0YToge1xuXHRcdFx0XHRib2R5OiBudWxsLFxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0cG9zdENvbW1lbnQoZXZlbnQpIHtcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRcdGlmKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cblx0XHRcdGlmKCAhIF90aGlzLmZvcm1EYXRhLmJvZHkpIHJldHVybjtcblxuXHRcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5jb21tZW50YWJsZUNvbW1lbnRzVXJsICsgJz93aXRoPW93bmVyJywgdGhpcy5mb3JtRGF0YSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdCAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuJGVtaXQoJ2NvbW1lbnQtcG9zdGVkJywgcmVzcG9uc2UpO1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmZvcm1EYXRhLmJvZHkgPSBudWxsO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tbWVudC1jcmVhdGUtZm9ybS52dWU/MDNlMjIwZTkiLCI8dGVtcGxhdGU+XG5cdDx1bCBjbGFzcz1cImNvbGxlY3Rpb24gdS1ib3JkZXItLW5vbmVcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGNvbGxlY3Rpb24taXRlbS1mb3JtXCI+XG4gICAgICAgICAgICA8Y29tbWVudC1jcmVhdGUtZm9ybSA6Y29tbWVudGFibGUtY29tbWVudHMtdXJsPVwiY29tbWVudHNVcmxcIiBAY29tbWVudC1wb3N0ZWQ9XCJhZGRDb21tZW50KCRldmVudC5kYXRhKVwiPjwvY29tbWVudC1jcmVhdGUtZm9ybT4gICAgXG4gICAgICAgIDwvbGk+XG5cdFx0PGNvbW1lbnQgdi1mb3I9XCJjb21tZW50IGluIGNvbW1lbnRzXCIgOmNvbW1lbnQ9XCJjb21tZW50XCI+PC9jb21tZW50PlxuXHQ8L3VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsnY29tbWVudHNVcmwnXSxcblxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb21tZW50czogW10sXG5cdFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcblx0XHRcdHBhZ2U6IDFcblx0XHR9XG5cdH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgXHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgXHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KF90aGlzLmNvbW1lbnRzVXJsLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGg6IFsnb3duZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogX3RoaXMucGFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21tZW50cyA9IF90aGlzLmNvbW1lbnRzLmNvbmNhdChyZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2UrKztcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQ29tbWVudChjb21tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb21tZW50LXBvc3RlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbW1lbnQtbGlzdC52dWU/NTFmY2JhMjQiLCI8dGVtcGxhdGU+XG4gIDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXIgYXZhdGFyLS1zbWFsbCB1LWJvcmRlci0tbm9uZVwiPlxuICAgIDxpbWcgOnNyYz1cImdldFVybCgnYXZhdGFyJywgY29tbWVudC5vd25lcilcIiBhbHQ9XCJcIiBjbGFzcz1cInUtZGltZW5zaW9uLS1zbWFsbCBjaXJjbGVcIj5cbiAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICA8c3Ryb25nPlxuICAgICAgICA8YSBjbGFzcz1cInByb2ZpbGUtbGlua1wiIDpocmVmPVwiJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIGNvbW1lbnQub3duZXIpXCI+e3sgY29tbWVudC5vd25lci5uYW1lIH19PC9hPlxuICAgICAgPC9zdHJvbmc+XG4gICAgPC9zcGFuPlxuICAgIDxwIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IGNvbW1lbnQuYm9keSB9fTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb24gdS1ib3JkZXItLW9ubHktYm90dG9tXCI+XG4gICAgICAgIDxzcGFuIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIEBjbGljaz1cInVwdm90ZVwiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IHVwdm90ZUNvdW50IH19PC9zcGFuPlxuICAgICAgICAgIDxhIDpzdHlsZT1cIiEgY29tbWVudC51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX3VwPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxhIDpzdHlsZT1cIiEgY29tbWVudC5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgQGNsaWNrPVwiZG93bnZvdGVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl9kb3duPC9hPlxuICAgICAgICA8YSBzdHlsZT1cImNvbG9yOiBncmV5O1wiIEBjbGljaz1cInRvZ2dsZUNvbW1lbnRzKClcIj5Db21tZW50cyA8c3Bhbj4oe3sgY29tbWVudENvdW50IH19KTwvc3Bhbj48L2E+XG4gICAgICA8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCJnZXRVcmwoJ2NvbW1lbnRzJywgY29tbWVudClcIiBAY29tbWVudC1wb3N0ZWQ9XCJpbmNyZW1lbnRDb21tZW50Q291bnQoKVwiIHYtaWY9XCJzaG93Q29tbWVudHNcIj48L2NvbW1lbnQtbGlzdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbJ2NvbW1lbnQnXSxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgIHVwdm90ZUNvdW50OiAwLFxuICAgICAgY29tbWVudENvdW50OiAwLFxuICAgICAgc2hvd0NvbW1lbnRzOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy51cHZvdGVDb3VudCA9IHRoaXMuY29tbWVudC51cHZvdGVfY291bnQ7XG4gICAgdGhpcy5jb21tZW50Q291bnQgPSB0aGlzLmNvbW1lbnQuY29tbWVudF9jb3VudDtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdXB2b3RlKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgYXhpb3MucG9zdCh0aGlzLmdldFVybCgndXB2b3RlcycsIHRoaXMuY29tbWVudCksIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG4gICAgICAgICAgX3RoaXMudXB2b3RlQ291bnQgKz0gMTtcbiAgICAgICAgICBfdGhpcy5jb21tZW50LnVwdm90ZWQgPSB0cnVlO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQuZG93bnZvdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICBfdGhpcy51cHZvdGVDb3VudCAtPSAxO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQudXB2b3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGRvd252b3RlKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgYXhpb3MucG9zdCh0aGlzLmdldFVybCgnZG93bnZvdGVzJywgdGhpcy5jb21tZW50KSwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuY29tbWVudC51cHZvdGVkKSB7IF90aGlzLnVwdm90ZUNvdW50IC09IDE7IH1cbiAgICAgICAgICBfdGhpcy5jb21tZW50LnVwdm90ZWQgPSBmYWxzZTtcbiAgICAgICAgICBfdGhpcy5jb21tZW50LmRvd252b3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICBfdGhpcy5jb21tZW50LmRvd252b3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZUNvbW1lbnRzKCkge1xuICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XG4gICAgfSxcblxuICAgIHVwZGF0ZUNvbW1lbnRDb3VudCgpIHtcbiAgICAgIHRoaXMuY29tbWVudENvdW50Kys7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21tZW50LnZ1ZT9hNTczNDlmYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgIDxxdWVzdGlvbiA6cXVlc3Rpb249XCJxdWVzdGlvblwiIHYtZm9yPVwicXVlc3Rpb24gaW4gcXVlc3Rpb25zXCI+PC9xdWVzdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZWxvYWRlciBwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIiB2LXNob3c9XCJyZXF1ZXN0aW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLXBhdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHN0eWxlPVwid2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMDtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIEBjbGljaz1cImZldGNoRGF0YSgpXCIgdi1zaG93PVwiICEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiPkxvYWQgbW9yZTwvYnV0dG9uPlxuICAgICAgICA8YW5zd2VyLWNyZWF0ZS1tb2RhbD48L2Fuc3dlci1jcmVhdGUtbW9kYWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsncXVlc3Rpb25VcmwnXSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHJlcXVlc3RpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcXVlc3Rpb25zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC5xdWVzdGlvbnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3QucGFnZSAtIDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG90YWxQYWdlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3QudG90YWxQYWdlcztcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3F1ZXN0aW9uTGlzdC9zZXRRdWVzdGlvblVybCcsIHRoaXMucXVlc3Rpb25VcmwpO1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdxdWVzdGlvbkxpc3QvZmV0Y2hEYXRhJyk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcXVlc3Rpb24tbGlzdC52dWU/YzdjZmQ5ZDgiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci1wcmV2aWV3LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01ZTM5NWY5YiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLXByZXZpZXcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci1wcmV2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTM5NWY5YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMzk1ZjliXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00MWRlZjExNSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29tbWVudC1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MWRlZjExNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxZGVmMTE1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvbW1lbnQtbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTViM2IxYTQhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbW1lbnQtbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbW1lbnQtbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTViM2IxYTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01NWIzYjFhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvbW1lbnQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTIwZWZmZmVkIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jb21tZW50LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbW1lbnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIwZWZmZmVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjBlZmZmZWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcXVlc3Rpb24tbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYzgzY2I3OWEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3F1ZXN0aW9uLWxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcXVlc3Rpb24tbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYzgzY2I3OWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1jODNjYjc5YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCAxOSAyMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhciBhdmF0YXItLXNtYWxsIHUtYm9yZGVyLS1ub25lXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidS1kaW1lbnNpb24tLXNtYWxsIGNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uY29tbWVudC5vd25lciksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9maWxlLWxpbmtcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmNvbW1lbnQub3duZXIpXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudC5vd25lci5uYW1lKSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnQuYm9keSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb24gdS1ib3JkZXItLW9ubHktYm90dG9tXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwdm90ZVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwdm90ZUNvdW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5jb21tZW50LnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKVxuICB9LCBbX3ZtLl92KFwidGh1bWJfdXBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmNvbW1lbnQuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJyksXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwidGh1bWJfZG93blwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjb2xvclwiOiBcImdyZXlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVDb21tZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tbWVudHMgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmNvbW1lbnRDb3VudCkgKyBcIilcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDb21tZW50cykgPyBfYygnY29tbWVudC1saXN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRzLXVybFwiOiBfdm0uZ2V0VXJsKCdjb21tZW50cycsIF92bS5jb21tZW50KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjBlZmZmZWRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTIwZWZmZmVkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdmb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgIFwiYWN0aW9uXCI6IF92bS5jb21tZW50YWJsZUNvbW1lbnRzVXJsXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczlcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLmJvZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5ib2R5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImJvZHlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5ib2R5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm1EYXRhLmJvZHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzM1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcIm5hbWVcIjogXCJhY3Rpb25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wb3N0Q29tbWVudCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0Q29tbWVudFxcblxcdFxcdFxcdFwiKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQxZGVmMTE1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00MWRlZjExNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbiB1LWJvcmRlci0tbm9uZVwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGNvbGxlY3Rpb24taXRlbS1mb3JtXCJcbiAgfSwgW19jKCdjb21tZW50LWNyZWF0ZS1mb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRhYmxlLWNvbW1lbnRzLXVybFwiOiBfdm0uY29tbWVudHNVcmxcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNvbW1lbnQtcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYWRkQ29tbWVudCgkZXZlbnQuZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmNvbW1lbnRzKSwgZnVuY3Rpb24oY29tbWVudCkge1xuICAgIHJldHVybiBfYygnY29tbWVudCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiY29tbWVudFwiOiBjb21tZW50XG4gICAgICB9XG4gICAgfSlcbiAgfSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01NWIzYjFhNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTViM2IxYTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyB1LW1hcmdpbi0tbm9uZSBhbnN3ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNob3dBbnN3ZXIoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0uc2hvd1F1ZXN0aW9uKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX2MoJ2g0JywgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmFuc3dlci5xdWVzdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3RvcFByb3BhZ2F0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIucXVlc3Rpb24udGl0bGUpKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvblwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uYW5zd2VyLm93bmVyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5hbnN3ZXIub3duZXIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN0b3BQcm9wYWdhdGlvbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIub3duZXIubmFtZSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmFuc3dlci5wcmV2aWV3KVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uYW5zd2VyLnByZXZpZXcubGVuZ3RoID49IDI1OCkgPyBfYygnYScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIobW9yZSlcIildKSA6IF92bS5fZSgpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvblwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51cHZvdGVcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiNXB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51cHZvdGVDb3VudCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKVxuICB9LCBbX3ZtLl92KFwidGh1bWJfdXBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmFuc3dlci5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl9kb3duXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImNvbG9yXCI6IFwiZ3JleVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLmFuc3dlcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNvbW1lbnQtcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaW5jcmVtZW50Q29tbWVudENvdW50KClcbiAgICAgIH1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ZTM5NWY5YlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWUzOTVmOWIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7fSwgW192bS5fbCgoX3ZtLnF1ZXN0aW9ucyksIGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIF9jKCdxdWVzdGlvbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwicXVlc3Rpb25cIjogcXVlc3Rpb25cbiAgICAgIH1cbiAgICB9KVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ucmVxdWVzdGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInJlcXVlc3RpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInByZWxvYWRlciBwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIlxuICB9LCBbX3ZtLl9tKDApXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5yZXF1ZXN0aW5nICYmIF92bS5wYWdlIDwgX3ZtLnRvdGFsUGFnZXMpLFxuICAgICAgZXhwcmVzc2lvbjogXCIgISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZldGNoRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9hZCBtb3JlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhbnN3ZXItY3JlYXRlLW1vZGFsJyldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIGxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhcC1wYXRjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1jODNjYjc5YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYzgzY2I3OWEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDE5IDIwIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdG90YWxQYWdlczogMixcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIGFuc3dlcnM6IFtdLFxuICAgICAgICBmZWVkVXJsczp7fSxcbiAgICAgICAgc2hvd0Fuc3dlck1vZGFsOiBmYWxzZSxcbiAgICAgICAgc2hvd2VkQW5zd2VyOiBudWxsLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIGFkZEFuc3dlcnMoc3RhdGUsIGFuc3dlcnMpIHtcbiAgICAgICAgICAgIHN0YXRlLmFuc3dlcnMgPSBzdGF0ZS5hbnN3ZXJzLmNvbmNhdChhbnN3ZXJzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRGZWVkVXJsKHN0YXRlLCB1cmwpIHtcbiAgICAgICAgICAgIHN0YXRlLmZlZWRVcmxzID0gdXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluY3JlbWVudFBhZ2Uoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UrKztcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVSZXF1ZXN0aW5nKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUxdIChzdGF0ZSwgc2hvd0Fuc3dlck1vZGFsKSB7XG4gICAgICAgICAgICBpZihzaG93QW5zd2VyTW9kYWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3RhdGUuc2hvd0Fuc3dlck1vZGFsID0gc2hvd0Fuc3dlck1vZGFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV0VEX0FOU1dFUl0gKHN0YXRlLCBzaG93ZWRBbnN3ZXIpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dlZEFuc3dlciA9IHNob3dlZEFuc3dlcjtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRBbnN3ZXIoc3RhdGUsIGFuc3dlcikge1xuICAgICAgICAgICAgc3RhdGUuYW5zd2Vycy51bnNoaWZ0KGFuc3dlcik7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChzdGF0ZS5mZWVkVXJscy5hbnN3ZXJzLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGg6IFsnb3duZXInLCAncXVlc3Rpb24nXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogc3RhdGUucGFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFBhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXM7XG4gICAgICAgICAgICAgICAgY29tbWl0KCdhZGRBbnN3ZXJzJywgcmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQoJ2luY3JlbWVudFBhZ2UnKTtcbiAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRTaG93ZWRBbnN3ZXIoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSwgc2hvd2VkQW5zd2VyKSB7XG4gICAgICAgICAgICBpZihzaG93ZWRBbnN3ZXIgPyAhIHNob3dlZEFuc3dlci5ib2R5IDogZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChnZXRVcmwoJ3NlbGYnLCBzaG93ZWRBbnN3ZXIpLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25seTogWydib2R5J10sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBzaG93ZWRBbnN3ZXIuYm9keSA9IHJlc3BvbnNlLmRhdGEuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XRURfQU5TV0VSLCBzaG93ZWRBbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1dFRF9BTlNXRVIsIHNob3dlZEFuc3dlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZmVlZC5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1ib3R0b206IDIwcHg7XCI+XG4gICAgICAgICAgICA8aDQ+PGEgOmhyZWY9XCJxdWVzdGlvbiA/IGdldFVybCgnc2VsZl9odG1sJywgcXVlc3Rpb24pIDogJydcIj57eyBxdWVzdGlvbiA/IHF1ZXN0aW9uLnRpdGxlIDogJycgfX08L2E+PC9oND5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwic2hvd1F1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnXCIgQGNsaWNrPVwic2hvd1F1ZXN0aW9uRGV0YWlsID0gIXNob3dRdWVzdGlvbkRldGFpbFwiPlxuICAgICAgICAgICAgICAgIHt7IHF1ZXN0aW9uID8gcXVlc3Rpb24uYm9keSA6ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbGxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIgPyBnZXRVcmwoJ2F2YXRhcicsICR2aWVuZGVyLnRyZWFzdXJlLnVzZXIpIDogJydcIiBhbHQ9XCJcIiBjbGFzcz1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR2aWVuZGVyLnRyZWFzdXJlLnVzZXIgPyAkdmllbmRlci50cmVhc3VyZS51c2VyLm5hbWUgOiAnJyB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyLWNyZWF0ZS1lZGl0b3JcIiByZWY9XCJlZGl0b3JcIj48L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2s9XCJhbnN3ZXIoJGV2ZW50KVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgICBzaG93UXVlc3Rpb25EZXRhaWw6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjb250ZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVkaXRvci5jb250ZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIHF1ZXN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVkaXRvci5xdWVzdGlvbjtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcXVlc3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dRdWVzdGlvbkRldGFpbCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbGV0IHBvcE92ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdub3RlLXBvcG92ZXInKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcE92ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gcG9wT3ZlcltpXTtcbiAgICAgICAgICAgIHAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChzZWxmLiRyZWZzLmVkaXRvcikuc3VtbWVybm90ZSh7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWydib2xkJywgJ2l0YWxpYyddXSxcbiAgICAgICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdvbCddXSxcbiAgICAgICAgICAgICAgICAgICAgWydpbnNlcnQnLCBbJ2xpbmsnLCAncGljdHVyZSddXSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24oY29udGVudHMsICRlZGl0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc3RvcmUuY29tbWl0KCdlZGl0b3IvJyArIHR5cGVzLlVQREFURV9FRElUT1JfQ09OVEVOVCwgY29udGVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnb24tY2hhbmdlJywgY29udGVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdlZGl0b3IvJyArIHR5cGVzLlNFVF9FRElUT1JfRUxFTUVOVCwgJChzZWxmLiRyZWZzLmVkaXRvcikpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFuc3dlcihldmVudCkge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZihldmVudCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYoc2VsZi5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCAhIHNlbGYuY29udGVudC5ib2R5KSByZXR1cm47XG5cbiAgICAgICAgICAgIHNlbGYucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ2Fuc3dlcnMnLCB0aGlzLnF1ZXN0aW9uKSArICc/d2l0aD1vd25lcicsIHNlbGYuY29udGVudClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdhbnN3ZXItcG9zdGVkJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5jb21taXQoJ2VkaXRvci8nICsgdHlwZXMuVVBEQVRFX0VESVRPUl9DT05URU5ULCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHN0b3JlLmNvbW1pdCgncXVlc3Rpb25MaXN0LycgKyB0eXBlcy5TRVRfQVNfQU5TV0VSRUQsIHNlbGYucXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChzZWxmLiRyZWZzLmVkaXRvcikuc3VtbWVybm90ZSgnY29kZScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlUXVlc3Rpb25EZXRhaWwoKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dRdWVzdGlvbkRldGFpbCA9ICEgdGhpcy5zaG93UXVlc3Rpb25EZXRhaWw7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItY3JlYXRlLWZvcm0udnVlPzZkMDllNzBjIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJDcmVhdGVNb2RhbC1vdmVybGF5XCIgQGNsaWNrPVwiaGlkZUFuc3dlckNyZWF0ZU1vZGFsKClcIiB2LXNob3c9XCJzaG93TW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlckNyZWF0ZU1vZGFsXCIgQGNsaWNrPVwibW9kYWxDbGlja0hhbmRsZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyQ3JlYXRlTW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxhbnN3ZXItY3JlYXRlLWZvcm0gcmVmPVwiZm9ybVwiIEBhbnN3ZXItcG9zdGVkPVwiaGlkZUFuc3dlckNyZWF0ZU1vZGFsKCRldmVudClcIj48L2Fuc3dlci1jcmVhdGUtZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWFjdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4+WDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2hvd01vZGFsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC5zaG93QW5zd2VyQ3JlYXRlTW9kYWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuc2hvd01vZGFsKSB7XG4gICAgICAgICAgICAgICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gJChfdGhpcy4kcmVmcy5mb3JtLiRyZWZzLmVkaXRvcikuc3VtbWVybm90ZSgnZWRpdG9yLmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBtb2RhbENsaWNrSGFuZGxlKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlQW5zd2VyQ3JlYXRlTW9kYWwoYW5zd2VyKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3F1ZXN0aW9uTGlzdC8nICsgdHlwZXMuU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCwgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuZmVlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC9hZGRBbnN3ZXInLCBhbnN3ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWU/YmZkMjZiZmMiLCI8dGVtcGxhdGU+XG5cdDxkaXYgcmVmPVwibW9kYWxcIiBjbGFzcz1cImFuc3dlci1zaG93LW1vZGFsLW92ZXJsYXlcIiBAY2xpY2s9XCJoaWRlQW5zd2VyQ3JlYXRlTW9kYWwoKVwiIHYtc2hvdz1cInNob3dBbnN3ZXJNb2RhbFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJhbnN3ZXItc2hvdy1tb2RhbFwiIEBjbGljaz1cIm1vZGFsQ2xpY2tIYW5kbGUoJGV2ZW50KVwiPlxuXHRcdFx0PGFuc3dlciA6YW5zd2VyPVwiYW5zd2VyXCIgdi1pZj1cImFuc3dlciA/IGFuc3dlci5ib2R5IDogZmFsc2VcIj48L2Fuc3dlcj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgdG9wOiBjYWxjKDUwJSAtIDc1cHgpOyBsZWZ0OiBjYWxjKDUwJSAtIDE4cHgpO1wiIHYtZWxzZT5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYXAtcGF0Y2hcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWFjdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4+WDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2Fuc3dlciddLFxuXG4gICAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgIFx0YW5zd2VyKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZmVlZC5zaG93ZWRBbnN3ZXI7XG4gICAgXHR9LFxuXG4gICAgXHRzaG93QW5zd2VyTW9kYWwoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnNob3dBbnN3ZXJNb2RhbDtcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBtb2RhbENsaWNrSGFuZGxlKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlQW5zd2VyQ3JlYXRlTW9kYWwoKSB7XG4gICAgICAgIFx0JCh0aGlzLiRyZWZzLm1vZGFsKS5zY3JvbGxUb3AoMCk7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2ZlZWQvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLXNob3ctbW9kYWwudnVlP2JmNzlkZWRhIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIiB2LWlmPVwiYW5zd2VyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIiB2LWlmPVwic2hvd1F1ZXN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8aDQ+PGEgOmhyZWY9XCJnZXRVcmwoJ3NlbGZfaHRtbCcsIGFuc3dlci5xdWVzdGlvbilcIj57eyBhbnN3ZXIucXVlc3Rpb24udGl0bGUgfX08L2E+PC9oND5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PGhyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMzBweDtcIj5cblx0XHRcdFx0ICBcdDx1bCBjbGFzcz1cImNvbGxlY3Rpb25cIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cblx0XHRcdFx0XHRcdFx0PGltZyA6c3JjPVwiZ2V0VXJsKCdhdmF0YXInLCBhbnN3ZXIub3duZXIpXCIgYWx0PVwiXCIgY2xhc3M9XCJjaXJjbGVcIj5cblx0XHRcdFx0XHRcdFx0PGEgOmhyZWY9XCJnZXRVcmwoJ3NlbGZfaHRtbCcsIGFuc3dlci5vd25lcilcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBhbnN3ZXIub3duZXIubmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhbnN3ZXItY29udGVudFwiIHYtaHRtbD1cImFuc3dlci5ib2R5XCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cblx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIEBjbGljaz1cInVwdm90ZVwiPlxuXHRcdFx0XHQgICAgXHQ8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyB1cHZvdGVDb3VudCB9fTwvc3Bhbj5cblx0XHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl91cDwvYT5cblx0XHRcdCAgICBcdDwvc3Bhbj5cblx0XHRcdCAgICBcdDxhIDpzdHlsZT1cIiEgYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBAY2xpY2s9XCJkb3dudm90ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX2Rvd248L2E+XG5cdFx0XHQgICAgXHQ8YSBzdHlsZT1cImNvbG9yOiBncmV5O1wiIEBjbGljaz1cInRvZ2dsZUNvbW1lbnRzKClcIj5Db21tZW50cyA8c3Bhbj4oe3sgY29tbWVudENvdW50IH19KTwvc3Bhbj48L2E+XG5cdFx0XHRcdFx0PGNvbW1lbnQtbGlzdCA6Y29tbWVudHMtdXJsPVwiZ2V0VXJsKCdjb21tZW50cycsIGFuc3dlcilcIiBAY29tbWVudC1wb3N0ZWQ9XCJpbmNyZW1lbnRDb21tZW50Q291bnQoKVwiIHYtaWY9XCJzaG93Q29tbWVudHNcIj48L2NvbW1lbnQtbGlzdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgXHRhbnN3ZXI6IHtcbiAgICBcdFx0dHlwZTogT2JqZWN0LFxuICAgIFx0XHRkZWZhdWx0OiBudWxsLFxuICAgIFx0fSxcbiAgICBcdHNob3dRdWVzdGlvbjoge1xuICAgIFx0XHR0eXBlOiBCb29sZWFuLFxuICAgIFx0XHRkZWZhdWx0OiB0cnVlLFxuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGRhdGEoKSB7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBcdFx0c2hvd0NvbW1lbnRzOiBmYWxzZVxuICAgIFx0fVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgIFx0dXB2b3RlQ291bnQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLmFuc3dlciA/IHRoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCA6IDA7XG4gICAgXHR9LFxuXG4gICAgXHRjb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLmFuc3dlciA/IHRoaXMuYW5zd2VyLmNvbW1lbnRfY291bnQgOiAwO1xuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHR1cHZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCd1cHZvdGVzJywgdGhpcy5hbnN3ZXIpLCB7fSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdCAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCArPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IHRydWU7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdGRvd252b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmdldFVybCgnZG93bnZvdGVzJywgdGhpcy5hbnN3ZXIpLCB7fSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdCAgICAgICAgXHRpZihfdGhpcy5hbnN3ZXIudXB2b3RlZCkgX3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCAtPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gdHJ1ZTtcblx0XHRcdCAgICAgICAgfVxuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0dG9nZ2xlQ29tbWVudHMoKSB7XG4gICAgXHRcdHRoaXMuc2hvd0NvbW1lbnRzID0gIXRoaXMuc2hvd0NvbW1lbnRzO1xuICAgIFx0fSxcblxuICAgIFx0aW5jcmVtZW50Q29tbWVudENvdW50KCkge1xuICAgIFx0XHR0aGlzLmNvbW1lbnRDb3VudCsrO1xuICAgIFx0fVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci52dWU/MzllY2M4YmUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICA8YW5zd2VyLXByZXZpZXcgOmFuc3dlcj1cImFuc3dlclwiIHYtZm9yPVwiYW5zd2VyIGluIGFuc3dlcnNcIiB2LWlmPVwiYW5zd2Vyc1swXSA/IGFuc3dlcnNbMF0ucHJldmlldyA6IHRydWVcIiA6c2hvdy1xdWVzdGlvbj1cIm9wdGlvbnMuYW5zd2Vycy5zaG93UXVlc3Rpb25cIj48L2Fuc3dlci1wcmV2aWV3PlxuICAgICAgICA8YW5zd2VyIDphbnN3ZXI9XCJhbnN3ZXJcIiB2LWZvcj1cImFuc3dlciBpbiBhbnN3ZXJzXCIgdi1lbHNlPjwvYW5zd2VyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiIHYtc2hvdz1cInJlcXVlc3RpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdi1zaG93PVwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OiAwO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiZmV0Y2hEYXRhKClcIj5Mb2FkIG1vcmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgZmVlZFVybHM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWVzdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcmVxdWVzdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5zd2VycygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLmFuc3dlcnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnBhZ2UgLSAxO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvdGFsUGFnZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZmVlZC50b3RhbFBhZ2VzO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2ZlZWQvc2V0RmVlZFVybCcsIHRoaXMuZmVlZFVybHMpO1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdmZWVkL2ZldGNoRGF0YScpO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZmVlZC1saXN0LnZ1ZT81NDlkOWQ2NyIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyB1LW1hcmdpbi0tbm9uZSBxdWVzdGlvblwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIiB2LWlmPVwiISAocXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai5kb3dudm90ZWQgOiB0cnVlKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+PGg0PjxhIDpocmVmPVwiJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHF1ZXN0aW9uT2JqKVwiPnt7IHF1ZXN0aW9uT2JqID8gcXVlc3Rpb25PYmoudGl0bGUgOiAnJyB9fTwvYT48L2g0Pjwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJleHBhbmRRdWVzdGlvbkRldGFpbCA/ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsJyA6ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsIHNocmlua2VkJ1wiIEBjbGljaz1cImV4cGFuZFF1ZXN0aW9uRGV0YWlsID0gIWV4cGFuZFF1ZXN0aW9uRGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHF1ZXN0aW9uT2JqID8gcXVlc3Rpb25PYmouYm9keSA6ICcnIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuXHRcdFx0ICAgIFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIEBjbGljaz1cInNob3dBbnN3ZXJDcmVhdGVNb2RhbCgpXCJcblx0XHRcdCAgICBcdFx0di1pZj1cIiAhIChxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmFuc3dlcmVkIDogdHJ1ZSlcIj5cblx0XHRcdCAgICBcdFx0QW5zd2VyXG5cdFx0XHQgICAgXHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YSBjbGFzcz1cImdyZXktdGV4dCBkYXJrZW4tM1wiIHYtZWxzZT5cblx0XHRcdFx0XHRcdEFuc3dlcmVkXG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0ICAgIFx0PGEgQGNsaWNrPVwiZG93bnZvdGVcIj5Eb3dudm90ZTwvYT5cblx0XHRcdCAgICBcdDxhIEBjbGljaz1cInRvZ2dsZUNvbW1lbnRzKClcIj5Db21tZW50cyA8c3Bhbj4oe3sgY29tbWVudENvdW50IH19KTwvc3Bhbj48L2E+XG5cdFx0XHRcdFx0PGNvbW1lbnQtbGlzdCA6Y29tbWVudHMtdXJsPVwiJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2NvbW1lbnRzJywgcXVlc3Rpb25PYmopXCIgQGNvbW1lbnQtcG9zdGVkPVwiaW5jcmVtZW50Q29tbWVudENvdW50KClcIiB2LWlmPVwic2hvd0NvbW1lbnRzXCI+PC9jb21tZW50LWxpc3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIiB2LWlmPVwicXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai5kb3dudm90ZWQgOiBmYWxzZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PHN0cm9uZz5Zb3UgZG93bnZvdGVkIHRoaXMgcXVlc3Rpb248L3N0cm9uZz5cblx0XHRcdFx0XHQ8cD5Eb3dudm90aW5nIGxvdy1xdWFsaXR5IGNvbnRlbnQgaW1wcm92ZXMgVmllbmRlciBmb3IgZXZlcnlvbmUuPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XG5cdFx0XHQgICAgXHQ8YSBAY2xpY2s9XCJkb3dudm90ZVwiPlVuZG88L2E+XG5cdFx0XHQgICAgXHQ8IS0tIDxhIEBjbGljaz1cImRvd252b3RlXCI+UmVwb3J0PC9hPiAtLT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsncXVlc3Rpb24nLCAndXJsJywgJ3Nob3dEZXRhaWwnXSxcblxuICAgIGRhdGEoKSB7XG4gICAgXHRyZXR1cm4ge1xuICAgICAgICAgICAgZXhwYW5kUXVlc3Rpb25EZXRhaWw6IGZhbHNlLFxuICAgICAgICAgICAgcXVlc3Rpb25PYmo6IG51bGwsXG4gICAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHVwdm90ZUNvdW50OiAwLFxuICAgICAgICAgICAgY29tbWVudENvdW50OiAwLFxuICAgICAgICAgICAgc2hvd0NvbW1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIHN0YXRpY1ByZWxvYWRlcnM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1ZXN0aW9uLXN0YXRpYy1wcmVsb2FkZXInKSxcbiAgICAgICAgICAgIGFuc3dlclRleHQ6IHtcbiAgICAgICAgICAgICAgICBib2R5OiBudWxsXG4gICAgICAgICAgICB9XG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBxdWVzdGlvbiBvYmplY3QsIHVzZSBpdC5cbiAgICAgICAgLy8gaWYgdGhlIGFyZ3VtZW50IGlzIGFuIHVybCwgZmV0aCBxdWVzdGlvbiBmcm9tIHRoZXJlLlxuICAgIFx0aWYgKF90aGlzLnF1ZXN0aW9uKSB7XG4gICAgXHRcdF90aGlzLnF1ZXN0aW9uT2JqID0gX3RoaXMucXVlc3Rpb247XG5cdCAgICBcdF90aGlzLnVwdm90ZUNvdW50ID0gX3RoaXMucXVlc3Rpb24udXB2b3RlX2NvdW50O1xuXHQgICAgXHRfdGhpcy5jb21tZW50Q291bnQgPSBfdGhpcy5xdWVzdGlvbi5jb21tZW50X2NvdW50O1xuICAgICAgICAgICAgX3RoaXMuaGlkZVN0YXRpY1ByZWxvYWRlcnMoKTtcbiAgICBcdH0gZWxzZSBpZiAoX3RoaXMudXJsKSB7XG4gICAgXHRcdHZhciB1cmwgPSBfdGhpcy51cmw7XG5cblx0XHRcdGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lciddLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5xdWVzdGlvbk9iaiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgX3RoaXMudXB2b3RlQ291bnQgPSByZXNwb25zZS5kYXRhLnVwdm90ZV9jb3VudDtcbiAgICBcdFx0XHRfdGhpcy5jb21tZW50Q291bnQgPSByZXNwb25zZS5kYXRhLmNvbW1lbnRfY291bnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZVN0YXRpY1ByZWxvYWRlcnMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgXHR9IGVsc2Uge1xuICAgIFx0XHR0aHJvdyAncXVlc3Rpb24gYW5kIHVybCBub3QgZGVmaW5lZC4nO1xuICAgIFx0fVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0aWNQcmVsb2FkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRpY1ByZWxvYWRlcnNbaV0uc3R5bGUuYm9yZGVyQm90dG9tID0gJzAnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGlkZVN0YXRpY1ByZWxvYWRlcnMoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGljUHJlbG9hZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljUHJlbG9hZGVyc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgXHRzaG93QW5zd2VyQ3JlYXRlTW9kYWwoKSB7XG4gICAgXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgncXVlc3Rpb25MaXN0LycgKyB0eXBlcy5TRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMLCB0cnVlKTtcbiAgICBcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2VkaXRvci9zZXRRdWVzdGlvbicsIHtcbiAgICBcdFx0XHRxdWVzdGlvbjogdGhpcy5xdWVzdGlvbk9iaixcbiAgICBcdFx0XHRhbnN3ZXJUZXh0OiB0aGlzLmFuc3dlclRleHRcbiAgICBcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHRkb3dudm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnZG93bnZvdGVzJywgX3RoaXMucXVlc3Rpb25PYmopLCB7fSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMucXVlc3Rpb25PYmouZG93bnZvdGVkID0gdHJ1ZTtcblx0XHRcdCAgICAgICAgfVxuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG5cdFx0XHRcdCAgICBcdF90aGlzLnF1ZXN0aW9uT2JqLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHR0b2dnbGVDb21tZW50cygpIHtcbiAgICBcdFx0dGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XG4gICAgXHR9LFxuXG4gICAgXHRpbmNyZW1lbnRDb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHRoaXMuY29tbWVudENvdW50Kys7XG4gICAgXHR9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcXVlc3Rpb24udnVlP2UxY2I3MGRjIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItY3JlYXRlLWZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTc3YWRkMmM4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXItY3JlYXRlLWZvcm0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItY3JlYXRlLWZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc3YWRkMmM4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzdhZGQyYzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZDNiOWIyNGUhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDNiOWIyNGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kM2I5YjI0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYW5zd2VyLXNob3ctbW9kYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTUyZjUzOGRhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXItc2hvdy1tb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5zd2VyLXNob3ctbW9kYWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUyZjUzOGRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTJmNTM4ZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYW5zd2VyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wNzU0ZDNjMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5zd2VyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNzU0ZDNjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA3NTRkM2MwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mZWVkLWxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTUyOWU1NzBhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9mZWVkLWxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmZWVkLWxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUyOWU1NzBhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTI5ZTU3MGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mZWVkLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3F1ZXN0aW9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03M2ZjOTg3MCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcXVlc3Rpb24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHF1ZXN0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03M2ZjOTg3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTczZmM5ODcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyB1LW1hcmdpbi0tbm9uZSBhbnN3ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczEyXCJcbiAgfSwgWyhfdm0uYW5zd2VyKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbKF92bS5zaG93UXVlc3Rpb24pID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLnF1ZXN0aW9uKVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5xdWVzdGlvbi50aXRsZSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdocicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMzBweFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb25cIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmdldFVybCgnYXZhdGFyJywgX3ZtLmFuc3dlci5vd25lciksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLm93bmVyKVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYW5zd2VyLm93bmVyLm5hbWUpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1jb250ZW50XCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0uYW5zd2VyLmJvZHkpXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwdm90ZVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwdm90ZUNvdW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcInRodW1iX2Rvd25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCJncmV5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlQ29tbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbW1lbnRzIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jb21tZW50Q291bnQpICsgXCIpXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93Q29tbWVudHMpID8gX2MoJ2NvbW1lbnQtbGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50cy11cmxcIjogX3ZtLmdldFVybCgnY29tbWVudHMnLCBfdm0uYW5zd2VyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSkgOiBfdm0uX2UoKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMDc1NGQzYzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA3NTRkM2MwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWVcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge30sIFtfdm0uX2woKF92bS5hbnN3ZXJzKSwgZnVuY3Rpb24oYW5zd2VyKSB7XG4gICAgcmV0dXJuIChfdm0uYW5zd2Vyc1swXSA/IF92bS5hbnN3ZXJzWzBdLnByZXZpZXcgOiB0cnVlKSA/IF9jKCdhbnN3ZXItcHJldmlldycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYW5zd2VyXCI6IGFuc3dlcixcbiAgICAgICAgXCJzaG93LXF1ZXN0aW9uXCI6IF92bS5vcHRpb25zLmFuc3dlcnMuc2hvd1F1ZXN0aW9uXG4gICAgICB9XG4gICAgfSkgOiBfdm0uX2woKF92bS5hbnN3ZXJzKSwgZnVuY3Rpb24oYW5zd2VyKSB7XG4gICAgICByZXR1cm4gX2MoJ2Fuc3dlcicsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImFuc3dlclwiOiBhbnN3ZXJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ucmVxdWVzdGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInJlcXVlc3RpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInByZWxvYWRlciBwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIlxuICB9LCBbX3ZtLl9tKDApXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5yZXF1ZXN0aW5nICYmIF92bS5wYWdlIDwgX3ZtLnRvdGFsUGFnZXMpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIwXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZmV0Y2hEYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2FkIG1vcmVcIildKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2FwLXBhdGNoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciByaWdodFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTUyOWU1NzBhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01MjllNTcwYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mZWVkLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd0Fuc3dlck1vZGFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd0Fuc3dlck1vZGFsXCJcbiAgICB9XSxcbiAgICByZWY6IFwibW9kYWxcIixcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItc2hvdy1tb2RhbC1vdmVybGF5XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5oaWRlQW5zd2VyQ3JlYXRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLXNob3ctbW9kYWxcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm1vZGFsQ2xpY2tIYW5kbGUoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0uYW5zd2VyID8gX3ZtLmFuc3dlci5ib2R5IDogZmFsc2UpID8gX2MoJ2Fuc3dlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhbnN3ZXJcIjogX3ZtLmFuc3dlclxuICAgIH1cbiAgfSkgOiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgIFwidG9wXCI6IFwiY2FsYyg1MCUgLSA3NXB4KVwiLFxuICAgICAgXCJsZWZ0XCI6IFwiY2FsYyg1MCUgLSAxOHB4KVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2FwLXBhdGNoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciByaWdodFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1hY3Rpb25cIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiWFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01MmY1MzhkYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTJmNTM4ZGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgdS1tYXJnaW4tLW5vbmUgcXVlc3Rpb25cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczEyXCJcbiAgfSwgWyghKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai5kb3dudm90ZWQgOiB0cnVlKSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX2MoJ2g0JywgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0ucXVlc3Rpb25PYmopXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucXVlc3Rpb25PYmogPyBfdm0ucXVlc3Rpb25PYmoudGl0bGUgOiAnJykpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IF92bS5leHBhbmRRdWVzdGlvbkRldGFpbCA/ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsJyA6ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsIHNocmlua2VkJyxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmV4cGFuZFF1ZXN0aW9uRGV0YWlsID0gIV92bS5leHBhbmRRdWVzdGlvbkRldGFpbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLmJvZHkgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvblwiXG4gIH0sIFsoIShfdm0ucXVlc3Rpb25PYmogPyBfdm0ucXVlc3Rpb25PYmouYW5zd2VyZWQgOiB0cnVlKSkgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd0Fuc3dlckNyZWF0ZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHQgICAgXFx0XFx0QW5zd2VyXFxuXFx0XFx0XFx0ICAgIFxcdFwiKV0pIDogX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS10ZXh0IGRhcmtlbi0zXCJcbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdEFuc3dlcmVkXFxuXFx0XFx0XFx0XFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvd252b3RlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlQ29tbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbW1lbnRzIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jb21tZW50Q291bnQpICsgXCIpXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93Q29tbWVudHMpID8gX2MoJ2NvbW1lbnQtbGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50cy11cmxcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdjb21tZW50cycsIF92bS5xdWVzdGlvbk9iailcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNvbW1lbnQtcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaW5jcmVtZW50Q29tbWVudENvdW50KClcbiAgICAgIH1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ucXVlc3Rpb25PYmogPyBfdm0ucXVlc3Rpb25PYmouZG93bnZvdGVkIDogZmFsc2UpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb25cIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVW5kb1wiKV0pXSldKSA6IF92bS5fZSgpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiWW91IGRvd252b3RlZCB0aGlzIHF1ZXN0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIkRvd252b3RpbmcgbG93LXF1YWxpdHkgY29udGVudCBpbXByb3ZlcyBWaWVuZGVyIGZvciBldmVyeW9uZS5cIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzNmYzk4NzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTczZmM5ODcwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctYm90dG9tXCI6IFwiMjBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2g0JywgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLnF1ZXN0aW9uID8gX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLnF1ZXN0aW9uKSA6ICcnXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucXVlc3Rpb24gPyBfdm0ucXVlc3Rpb24udGl0bGUgOiAnJykpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogX3ZtLnNob3dRdWVzdGlvbkRldGFpbCA/ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsJyA6ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsIHNocmlua2VkJyxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNob3dRdWVzdGlvbkRldGFpbCA9ICFfdm0uc2hvd1F1ZXN0aW9uRGV0YWlsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnF1ZXN0aW9uID8gX3ZtLnF1ZXN0aW9uLmJvZHkgOiAnJykgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvblwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uJHZpZW5kZXIudHJlYXN1cmUudXNlciA/IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS4kdmllbmRlci50cmVhc3VyZS51c2VyKSA6ICcnLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHZpZW5kZXIudHJlYXN1cmUudXNlciA/IF92bS4kdmllbmRlci50cmVhc3VyZS51c2VyLm5hbWUgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICByZWY6IFwiZWRpdG9yXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLWNyZWF0ZS1lZGl0b3JcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYW5zd2VyKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTdWJtaXRcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTc3YWRkMmM4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03N2FkZDJjOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zaG93TW9kYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93TW9kYWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlckNyZWF0ZU1vZGFsLW92ZXJsYXlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXJDcmVhdGVNb2RhbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubW9kYWxDbGlja0hhbmRsZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXJDcmVhdGVNb2RhbC1jb250ZW50XCJcbiAgfSwgW19jKCdhbnN3ZXItY3JlYXRlLWZvcm0nLCB7XG4gICAgcmVmOiBcImZvcm1cIixcbiAgICBvbjoge1xuICAgICAgXCJhbnN3ZXItcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGlkZUFuc3dlckNyZWF0ZU1vZGFsKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWFjdGlvblwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJYXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWQzYjliMjRlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kM2I5YjI0ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdHNlbGVjdGVkTWVudTogbnVsbCxcbiAgICAgICAgICAgIG5vdE1vdW50ZWQ6IHRydWUsXG4gICAgICAgICAgICBuYXY6IG51bGwsXG4gICAgICAgICAgICBzY3JvbGxTdG9yYWdlTmFtZTogbnVsbCxcbiAgICBcdH07XG4gICAgfSxcblxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0VGFiKG5hdiA9IG51bGwsIHNjcm9sbFN0b3JhZ2VOYW1lID0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCAhIG5hdikgdGhyb3cgJ3RoaXMubmF2IGlzIG5vdCBkZWZpbmVkJztcbiAgICAgICAgICAgIGlmICggISBzY3JvbGxTdG9yYWdlTmFtZSkgdGhyb3cgJ3RoaXMuc2Nyb2xsU3RvcmFnZU5hbWUgaXMgbm90IGRlZmluZWQnO1xuXG4gICAgICAgICAgICB0aGlzLm5hdiA9IG5hdjtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsU3RvcmFnZU5hbWUgPSBzY3JvbGxTdG9yYWdlTmFtZTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNZW51ID0gcGFyc2VJbnQodGhpcy5uYXYuZ2V0QXR0cmlidXRlKCdpbml0aWFsLW1lbnUnKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5zY3JvbGxTdG9yYWdlTmFtZX0uc2Nyb2xsTGVmdGApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXYuc2Nyb2xsTGVmdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuc2Nyb2xsU3RvcmFnZU5hbWV9LnNjcm9sbExlZnRgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXYuc2Nyb2xsTGVmdCA9IDY1ICogc2VsZWN0ZWRNZW51O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRNZW51KHNlbGVjdGVkTWVudSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLnByb2ZpbGVDb250ZW50TW9iaWxlKVxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucHJvZmlsZUNvbnRlbnRNb2JpbGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3VycmVudE1lbnUobWVudSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNZW51ID09PSBtZW51O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEN1cnJlbnRNZW51KHNlbGVjdGVkTWVudSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5zY3JvbGxTdG9yYWdlTmFtZX0uc2Nyb2xsTGVmdGAsIHRoaXMubmF2LnNjcm9sbExlZnQpO1xuICAgIFx0XHR0aGlzLnNlbGVjdGVkTWVudSA9IHNlbGVjdGVkTWVudTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMubmF2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb25MaW5rJylbc2VsZWN0ZWRNZW51XS5nZXRBdHRyaWJ1dGUoJ3BhZ2UnKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMubmF2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb25MaW5rJylbc2VsZWN0ZWRNZW51XS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5ID8gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIDogZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBQYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICBVcmw6IHVybCxcbiAgICAgICAgICAgICAgICB9LCBwYWdlLCB1cmwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgICAgICAgICAgICBnYSgnc2V0JywgJ3BhZ2UnLCByZWxhdGl2ZVVybCh1cmwpKTtcbiAgICAgICAgICAgICAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xuICAgICAgICAgICAgfVxuICAgIFx0fSxcblxuICAgICAgICBoaWRlQmVmb3JlTW91bnRlZFByZWxvYWRlcnMoKSB7XG4gICAgICAgICAgICB0aGlzLm5vdE1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9taXhpbnMvY2hhbmdlYWJsZU1lbnVNaXhpbi5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIHBhZ2U6IDAsXG4gICAgICAgIHRvdGFsUGFnZXM6IDEsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBmb2xsb3dlcnM6IFtdLFxuICAgICAgICB1cmw6ICcnLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5BRERfRk9MTE9XRVJTXSAoc3RhdGUsIGZvbGxvd2Vycykge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93ZXJzID0gc3RhdGUuZm9sbG93ZXJzLmNvbmNhdChmb2xsb3dlcnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfVVJMXSAoc3RhdGUsIHVybCkge1xuICAgICAgICAgICAgc3RhdGUudXJsID0gdXJsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0aW5nIHx8IHN0YXRlLnBhZ2UgKyAxID4gc3RhdGUudG90YWxQYWdlcykgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHN0YXRlLnVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlICsgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFBhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXM7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLkFERF9GT0xMT1dFUlMsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgc3RhdGUucGFnZSsrO1xuICAgICAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZXQoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93ZXJzID0gW107XG4gICAgICAgICAgICBzdGF0ZS5wYWdlID0gMTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mb2xsb3dlckxpc3QuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBmb2xsb3dlckNvdW50OiAwLFxuICAgICAgICBmb2xsb3dpbmdDb3VudDogMCxcbiAgICAgICAgdG9waWNDb3VudDogMCxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuU0VUX0ZPTExPV0VSX0NPVU5UXSAoc3RhdGUsIGZvbGxvd2VyQ291bnQpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2VyQ291bnQgPSBmb2xsb3dlckNvdW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5JTkNSRU1FTlRfRk9MTE9XRVJfQ09VTlRdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93ZXJDb3VudCsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5ERUNSRU1FTlRfRk9MTE9XRVJfQ09VTlRdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93ZXJDb3VudC0tO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfRk9MTE9XSU5HX0NPVU5UXSAoc3RhdGUsIGZvbGxvd2luZ0NvdW50KSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dpbmdDb3VudCA9IGZvbGxvd2luZ0NvdW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5JTkNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2luZ0NvdW50Kys7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkRFQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlRdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93aW5nQ291bnQtLTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1RPUElDX0NPVU5UXSAoc3RhdGUsIHRvcGljQ291bnQpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvcGljQ291bnQgPSB0b3BpY0NvdW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5JTkNSRU1FTlRfVE9QSUNfQ09VTlRdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUudG9waWNDb3VudCsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5ERUNSRU1FTlRfVE9QSUNfQ09VTlRdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUudG9waWNDb3VudC0tO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy91c2VyU3RhdHMuanMiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJmb2xsb3dCdXR0b25cIj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiZm9sbG93KClcIiB2LWlmPVwiISB1c2VyLmZvbGxvd2VkXCI+Rm9sbG93PC9idXR0b24+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBmb2xsb3dlZFwiIEBjbGljaz1cInVuZm9sbG93KClcIiB2LWVsc2U+VW5mb2xsb3c8L2J1dHRvbj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAndmllbmRlcl9wcm9maWxlL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3VybCcsICdmb2xsb3dlZV9pZCcsICdmb2xsb3dlZCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuXG5cdFx0XHR1c2VyOiB7XG5cdFx0XHRcdGZvbGxvd2VkOiBmYWxzZSxcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLnVzZXIuZm9sbG93ZWQgPSB0aGlzLmZvbGxvd2VkID8gdGhpcy5mb2xsb3dlZCA6IGZhbHNlO1xuXHR9LFxuXG5cdG1vdW50ZWQoKSB7XG5cdFx0dGhpcy4kZW1pdCgnbW91bnRlZCcpO1xuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRmb2xsb3coKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYgKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdChfdGhpcy51cmwsIHsnZm9sbG93ZWVfaWQnOiBfdGhpcy5mb2xsb3dlZV9pZH0pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdF90aGlzLnVzZXIuZm9sbG93ZWQgPSAhIF90aGlzLnVzZXIuZm9sbG93ZWQ7XG5cblx0XHRcdFx0XHRpZiAoX3RoaXMudXNlci5mb2xsb3dlZCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5JTkNSRU1FTlRfRk9MTE9XRVJfQ09VTlQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLkRFQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHVuZm9sbG93KCkge1xuXHRcdFx0dGhpcy5mb2xsb3coKTtcblx0XHR9LFxuXHR9LFxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9sbG93LWJ1dHRvbi52dWU/NWU3MGZjNGEiLCI8dGVtcGxhdGU+XG5cdDxzcGFuIGNsYXNzPVwicHJvZmlsZU5hdmlnYXRpb24tdmFsdWVcIj57eyBmb2xsb3dlckNvdW50eCB9fTwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsnZm9sbG93ZXJDb3VudCddLFxuXG5cdGNvbXB1dGVkOiB7XG5cdFx0Zm9sbG93ZXJDb3VudHgoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudXNlclN0YXRzLmZvbGxvd2VyQ291bnQ7XG5cdFx0fVxuXHR9LFxuXG5cdG1vdW50ZWQoKSB7XG5cdFx0dGhpcy4kZW1pdCgnbW91bnRlZCcpO1xuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5TRVRfRk9MTE9XRVJfQ09VTlQsIHRoaXMuZm9sbG93ZXJDb3VudCk7XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvbGxvd2VyLWNvdW50LnZ1ZT85NDhjMWVhNCIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8dXNlci1jYXJkIHYtZm9yPVwidXNlciBpbiBmb2xsb3dlcnNcIiA6dXNlcj1cInVzZXJcIj48L3VzZXItY2FyZD5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiPkxvYWQgbW9yZTwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3VybCddLFxuXG5cdGNvbXB1dGVkOiBPYmplY3QuYXNzaWduKFxuXHRcdG1hcFN0YXRlKCdmb2xsb3dlckxpc3QnLCBbXG5cdFx0ICAncmVxdWVzdGluZycsXG5cdFx0ICAnZm9sbG93ZXJzJyxcblx0XHQgICdwYWdlJyxcblx0XHQgICd0b3RhbFBhZ2VzJyxcblx0XHRdKVxuXHQpLFxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdmb2xsb3dlckxpc3QvJyArIHR5cGVzLlNFVF9VUkwsIHRoaXMudXJsKTtcblx0XHR0aGlzLmZldGNoRGF0YSgpO1xuXHR9LFxuXG5cdG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oXG5cdFx0bWFwQWN0aW9ucygnZm9sbG93ZXJMaXN0JywgW1xuXHRcdFx0J2ZldGNoRGF0YScsXG5cdFx0XSlcblx0KSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvbGxvd2VyLWxpc3QudnVlPzg2MjE0OTA4IiwiPHRlbXBsYXRlPlxuXHQ8c3BhbiBjbGFzcz1cInByb2ZpbGVOYXZpZ2F0aW9uLXZhbHVlXCI+e3sgZm9sbG93aW5nQ291bnR4IH19PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydmb2xsb3dpbmdDb3VudCddLFxuXG5cdGNvbXB1dGVkOiB7XG5cdFx0Zm9sbG93aW5nQ291bnR4KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJTdGF0cy5mb2xsb3dpbmdDb3VudDtcblx0XHR9XG5cdH0sXG5cblx0bW91bnRlZCgpIHtcblx0XHR0aGlzLiRlbWl0KCdtb3VudGVkJyk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLlNFVF9GT0xMT1dJTkdfQ09VTlQsIHRoaXMuZm9sbG93aW5nQ291bnQpO1xuXHR9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb2xsb3dpbmctY291bnQudnVlPzBmYmMxNzAyIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDx1c2VyLWNhcmQgdi1mb3I9XCJ1c2VyIGluIGZvbGxvd2luZ3NcIiA6dXNlcj1cInVzZXJcIj48L3VzZXItY2FyZD5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiPkxvYWQgbW9yZTwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3VybCddLFxuXG5cdGNvbXB1dGVkOiBPYmplY3QuYXNzaWduKFxuXHRcdG1hcFN0YXRlKCdmb2xsb3dpbmdMaXN0JywgW1xuXHRcdCAgJ3JlcXVlc3RpbmcnLFxuXHRcdCAgJ2ZvbGxvd2luZ3MnLFxuXHRcdCAgJ3BhZ2UnLFxuXHRcdCAgJ3RvdGFsUGFnZXMnLFxuXHRcdF0pXG5cdCksXG5cblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2ZvbGxvd2luZ0xpc3QvJyArIHR5cGVzLlNFVF9VUkwsIHRoaXMudXJsKTtcblx0XHR0aGlzLmZldGNoRGF0YSgpO1xuXHR9LFxuXG5cdG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oXG5cdFx0bWFwQWN0aW9ucygnZm9sbG93aW5nTGlzdCcsIFtcblx0XHRcdCdmZXRjaERhdGEnLFxuXHRcdF0pXG5cdCksXG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb2xsb3dpbmctbGlzdC52dWU/MWZhNjE1MDAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0b3BpY0NhcmRcIj5cbiAgICA8aW1nIGNsYXNzPVwidG9waWNDYXJkLXRodW1ibmFpbFwiIDpzcmM9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgndGh1bWJuYWlsJywgdG9waWMpXCIgYWx0PVwiXCI+XG4gICAgPGRpdiBjbGFzcz1cInRvcGljQ2FyZC1uYW1lXCI+XG4gICAgICA8YSA6aHJlZj1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCB0b3BpYylcIj5cbiAgICAgICAge3sgdG9waWMubmFtZSB9fVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0b3BpY0NhcmQtYWN0aW9uXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGZvbGxvd0J1dHRvblwiIHYtc2hvdz1cIiEgZm9sbG93ZWRcIiBAY2xpY2s9XCJmb2xsb3coKVwiPkZvbGxvdzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB1bmZvbGxvd0J1dHRvblwiIHYtc2hvdz1cImZvbGxvd2VkXCIgQGNsaWNrPVwidW5mb2xsb3coKVwiPlVuZm9sbG93PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWyd0b3BpYyddLFxuXG4gICAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgIGZvbGxvd2VkOiB0cnVlLFxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZm9sbG93ZWQgPSB0aGlzLnRvcGljLmZvbGxvd2VkO1xuICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgZm9sbG93KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgICAgYXhpb3MucG9zdChfdGhpcy4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnZm9sbG93JywgX3RoaXMudG9waWMpLCB7J3RvcGljX2lkJzogX3RoaXMudG9waWMuaWR9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBfdGhpcy5mb2xsb3dlZCA9ICEgX3RoaXMuZm9sbG93ZWQ7XG5cbiAgICAgICAgICBpZiAoX3RoaXMuZm9sbG93ZWQpIHtcbiAgICAgICAgICAgIF90aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuSU5DUkVNRU5UX1RPUElDX0NPVU5UKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5ERUNSRU1FTlRfVE9QSUNfQ09VTlQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgdW5mb2xsb3coKSB7XG4gICAgICAgIHRoaXMuZm9sbG93KCk7XG4gICAgICB9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvcGljLWNhcmQudnVlPzg5MGViYTM4IiwiPHRlbXBsYXRlPlxuXHQ8c3BhbiBjbGFzcz1cInByb2ZpbGVOYXZpZ2F0aW9uLXZhbHVlXCI+e3sgdG9waWNDb3VudHggfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3RvcGljQ291bnQnXSxcblxuXHRjb21wdXRlZDoge1xuXHRcdHRvcGljQ291bnR4KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJTdGF0cy50b3BpY0NvdW50O1xuXHRcdH1cblx0fSxcblxuXHRtb3VudGVkKCkge1xuXHRcdHRoaXMuJGVtaXQoJ21vdW50ZWQnKTtcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuU0VUX1RPUElDX0NPVU5ULCB0aGlzLnRvcGljQ291bnQpO1xuXHR9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b3BpYy1jb3VudC52dWU/M2FlMGI4NGUiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgdG9waWMtbGlzdFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgczZcIiB2LWZvcj1cInRvcGljIGluIHRvcGljc1wiPlxuXHRcdFx0PHRvcGljLWNhcmQgOnRvcGljPVwidG9waWNcIj48L3RvcGljLWNhcmQ+XG5cdFx0XHQ8YnV0dG9uIHYtc2hvdz1cIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMDtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIEBjbGljaz1cImZldGNoRGF0YSgpXCI+TG9hZCBtb3JlPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsndXJsJ10sXG5cblx0Y29tcHV0ZWQ6IE9iamVjdC5hc3NpZ24oXG5cdFx0bWFwU3RhdGUoJ3RvcGljTGlzdCcsIFtcblx0XHQgICdwYWdlJyxcblx0XHQgICd0b3RhbFBhZ2VzJyxcblx0XHQgICdyZXF1ZXN0aW5nJyxcblx0XHQgICd0b3BpY3MnLFxuXHRcdF0pXG5cdCksXG5cblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3RvcGljTGlzdC8nICsgdHlwZXMuU0VUX1VSTCwgdGhpcy51cmwpO1xuXHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd0b3BpY0xpc3QvZmV0Y2hEYXRhJyk7XG5cdH0sXG5cblx0bWV0aG9kczogT2JqZWN0LmFzc2lnbihcblx0XHRtYXBBY3Rpb25zKCd0b3BpY0xpc3QnLCBbXG5cdFx0XHQnZmV0Y2hEYXRhJyxcblx0XHRdKVxuXHQpLFxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdG9waWMtbGlzdC52dWU/ODM4NjU4ZTYiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJ1c2VyQ2FyZFwiPlxuXHRcdDx1bCBjbGFzcz1cImNvbGxlY3Rpb25cIj5cblx0XHRcdDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cblx0XHRcdFx0PGltZyA6c3JjPVwiJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2F2YXRhcicsIHVzZXIpXCIgYWx0PVwiXCIgY2xhc3M9XCJjaXJjbGVcIj5cblx0XHRcdFx0PGEgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgdXNlcilcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyB1c2VyLm5hbWUgfX08L3NwYW4+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGRpdiB2LWlmPVwiJHZpZW5kZXIudXNlciA/ICR2aWVuZGVyLnVzZXIuaWQgIT09IHVzZXIuaWQgOiBmYWxzZVwiPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gZm9sbG93QnV0dG9uXCIgdi1zaG93PVwiISBmb2xsb3dlZFwiIEBjbGljaz1cImZvbGxvdygpXCI+Rm9sbG93PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biB1bmZvbGxvd0J1dHRvblwiIHYtc2hvdz1cImZvbGxvd2VkXCIgQGNsaWNrPVwidW5mb2xsb3coKVwiPlVuZm9sbG93PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsndXNlciddLFxuXG4gICAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgICBkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcblx0XHRcdGZvbGxvd2VkOiB0cnVlLFxuXHRcdH1cblx0fSxcblxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuZm9sbG93ZWQgPSB0aGlzLnVzZXIuZm9sbG93ZWQ7XG5cdH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHRmb2xsb3coKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYgKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgIFx0XHRheGlvcy5wb3N0KF90aGlzLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdmb2xsb3cnLCBfdGhpcy51c2VyKSwgeydmb2xsb3dlZV9pZCc6IF90aGlzLnVzZXIuaWR9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRfdGhpcy5mb2xsb3dlZCA9ICEgX3RoaXMuZm9sbG93ZWQ7XG5cblx0XHRcdFx0XHRpZiAoX3RoaXMuZm9sbG93ZWQpIHtcblx0XHRcdFx0XHRcdF90aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuSU5DUkVNRU5UX0ZPTExPV0lOR19DT1VOVCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF90aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuREVDUkVNRU5UX0ZPTExPV0lOR19DT1VOVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHR1bmZvbGxvdygpIHtcbiAgICBcdFx0dGhpcy5mb2xsb3coKTtcbiAgICBcdH0sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdXNlci1jYXJkLnZ1ZT80ZjRkMTliMyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZm9sbG93LWJ1dHRvbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2Q0MWQ2ZmUhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZvbGxvdy1idXR0b24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL2ZvbGxvdy9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvdy1idXR0b24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZm9sbG93LWJ1dHRvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2Q0MWQ2ZmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZDQxZDZmZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL2ZvbGxvdy9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvdy1idXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZvbGxvd2VyLWNvdW50LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00YzUxMTY1ZSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZm9sbG93ZXItY291bnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1jb3VudC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmb2xsb3dlci1jb3VudC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGM1MTE2NWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YzUxMTY1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1jb3VudC52dWVcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZm9sbG93ZXItbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmVmOTBmMWYhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZvbGxvd2VyLWxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZvbGxvd2VyLWxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJlZjkwZjFmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmVmOTBmMWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZm9sbG93aW5nLWNvdW50LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xNmI1ZGY4NSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZm9sbG93aW5nLWNvdW50LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWNvdW50LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZvbGxvd2luZy1jb3VudC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTZiNWRmODVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNmI1ZGY4NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZvbGxvd2luZy1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03ZmQzMDUxOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZm9sbG93aW5nLWxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmb2xsb3dpbmctbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZkMzA1MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmQzMDUxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9waWMtY2FyZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDRmYmZlYTghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvcGljLWNhcmQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvcGljLWNhcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ0ZmJmZWE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDRmYmZlYThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9waWMtY291bnQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM0OGI2OWEzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b3BpYy1jb3VudC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNvdW50LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvcGljLWNvdW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNDhiNjlhM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM0OGI2OWEzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b3BpYy1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yZTM0YmYzYSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9waWMtbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG9waWMtbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmUzNGJmM2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZTM0YmYzYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi91c2VyLWNhcmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWE5YzUxNmY4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2VyLWNhcmQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy91c2VyLWNhcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdXNlci1jYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hOWM1MTZmOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWE5YzUxNmY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3VzZXItY2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9maWxlTmF2aWdhdGlvbi12YWx1ZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5mb2xsb3dpbmdDb3VudHgpKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTE2YjVkZjg1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xNmI1ZGY4NSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWNvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHRvcGljLWxpc3RcIlxuICB9LCBfdm0uX2woKF92bS50b3BpY3MpLCBmdW5jdGlvbih0b3BpYykge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY29sIHM2XCJcbiAgICB9LCBbX2MoJ3RvcGljLWNhcmQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvcGljXCI6IHRvcGljXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICAgIGV4cHJlc3Npb246IFwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCJcbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjBcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmZldGNoRGF0YSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiTG9hZCBtb3JlXCIpXSldLCAxKVxuICB9KSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmUzNGJmM2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJlMzRiZjNhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX3ZtLl9sKChfdm0uZm9sbG93ZXJzKSwgZnVuY3Rpb24odXNlcikge1xuICAgIHJldHVybiBfYygndXNlci1jYXJkJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ1c2VyXCI6IHVzZXJcbiAgICAgIH1cbiAgICB9KVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICBleHByZXNzaW9uOiBcIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjBcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mZXRjaERhdGEoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvYWQgbW9yZVwiKV0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmVmOTBmMWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJlZjkwZjFmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2ZpbGVOYXZpZ2F0aW9uLXZhbHVlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRvcGljQ291bnR4KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNDhiNjlhM1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzQ4YjY5YTMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9waWNDYXJkXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9waWNDYXJkLXRodW1ibmFpbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3RodW1ibmFpbCcsIF92bS50b3BpYyksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b3BpY0NhcmQtbmFtZVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLnRvcGljKVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS50b3BpYy5uYW1lKSArIFwiXFxuICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9waWNDYXJkLWFjdGlvblwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0uZm9sbG93ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhIGZvbGxvd2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gZm9sbG93QnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb2xsb3coKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkZvbGxvd1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5mb2xsb3dlZCksXG4gICAgICBleHByZXNzaW9uOiBcImZvbGxvd2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gdW5mb2xsb3dCdXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVuZm9sbG93KClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmZvbGxvd1wiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NGZiZmVhOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDRmYmZlYTghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZmlsZU5hdmlnYXRpb24tdmFsdWVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZm9sbG93ZXJDb3VudHgpKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTRjNTExNjVlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00YzUxMTY1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb2xsb3dCdXR0b25cIlxuICB9LCBbKCFfdm0udXNlci5mb2xsb3dlZCkgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9sbG93KClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJGb2xsb3dcIildKSA6IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGZvbGxvd2VkXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51bmZvbGxvdygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVW5mb2xsb3dcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdkNDFkNmZlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZDQxZDZmZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9mb2xsb3cvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3ctYnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX3ZtLl9sKChfdm0uZm9sbG93aW5ncyksIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICByZXR1cm4gX2MoJ3VzZXItY2FyZCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidXNlclwiOiB1c2VyXG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5yZXF1ZXN0aW5nICYmIF92bS5wYWdlIDwgX3ZtLnRvdGFsUGFnZXMpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIwXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZmV0Y2hEYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2FkIG1vcmVcIildKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdmZDMwNTE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZmQzMDUxOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1c2VyQ2FyZFwiXG4gIH0sIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvblwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2F2YXRhcicsIF92bS51c2VyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLnVzZXIpXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uJHZpZW5kZXIudXNlciA/IF92bS4kdmllbmRlci51c2VyLmlkICE9PSBfdm0udXNlci5pZCA6IGZhbHNlKSA/IF9jKCdkaXYnLCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLmZvbGxvd2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiISBmb2xsb3dlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGZvbGxvd0J1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9sbG93KClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJGb2xsb3dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZm9sbG93ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb2xsb3dlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIHVuZm9sbG93QnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51bmZvbGxvdygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVW5mb2xsb3dcIildKV0pIDogX3ZtLl9lKCldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYTljNTE2ZjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWE5YzUxNmY4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy91c2VyLWNhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJyZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xucmVxdWlyZSgnc3VtbWVybm90ZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy90b3BpYy9yZXNvdXJjZXMvcGFnZXMvdG9waWMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZvbGxvd1N1Y2Nlc3NIYW5kbGUocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZm9sbG93VG9waWNCdXR0b24uJGVsLmNsYXNzTmFtZSArPSAnIGZvbGxvd2VkJztcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZvbGxvd1RvcGljQnV0dG9uLiRlbC5pbm5lckhUTUwgPSAnVW5mb2xsb3cnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZm9sbG93VG9waWNCdXR0b24uJGVsLmNsYXNzTmFtZSA9IHRoaXMuJHJlZnMuZm9sbG93VG9waWNCdXR0b24uJGVsLmNsYXNzTmFtZS5yZXBsYWNlKCcgZm9sbG93ZWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5mb2xsb3dUb3BpY0J1dHRvbi4kZWwuaW5uZXJIVE1MID0gJ0ZvbGxvdyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy90b3BpYy9yZXNvdXJjZXMvcGFnZXMvdG9waWMvYXNzZXRzL2pzL21peGlucy9mb2xsb3dTdWNjZXNzSGFuZGxlTWl4aW4uanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBjb3JlTW9kdWxlcyBmcm9tICd2aWVuZGVyX2NvcmUvanMvc3RvcmUvbW9kdWxlcy5qcyc7XG5cbmltcG9ydCBxdWVzdGlvbkxpc3QgZnJvbSAndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3F1ZXN0aW9uTGlzdCc7XG5pbXBvcnQgZWRpdG9yIGZyb20gJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9lZGl0b3InO1xuaW1wb3J0IGZlZWQgZnJvbSAndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZlZWQnO1xuaW1wb3J0IHVzZXJTdGF0cyBmcm9tICd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3VzZXJTdGF0cyc7XG5pbXBvcnQgZm9sbG93ZXJMaXN0IGZyb20gJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZm9sbG93ZXJMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiBPYmplY3QuYXNzaWduKGNvcmVNb2R1bGVzLCB7XG4gICAgcXVlc3Rpb25MaXN0OiBxdWVzdGlvbkxpc3QsXG4gICAgZWRpdG9yOiBlZGl0b3IsXG4gICAgZmVlZDogZmVlZCxcbiAgICB1c2VyU3RhdHM6IHVzZXJTdGF0cyxcbiAgICBmb2xsb3dlckxpc3Q6IGZvbGxvd2VyTGlzdCxcbiAgfSksXG5cbiAgYWN0aW9uczogcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS8vYWN0aW9ucy5qcycpLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3RvcGljL3Jlc291cmNlcy9wYWdlcy90b3BpYy9hc3NldHMvanMvc3RvcmUuanMiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgY2hhbmdlYWJsZU1lbnVNaXhpbiBmcm9tICd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9taXhpbnMvY2hhbmdlYWJsZU1lbnVNaXhpbic7XG5pbXBvcnQgZm9sbG93U3VjY2Vzc0hhbmRsZU1peGluIGZyb20gJy4vbWl4aW5zL2ZvbGxvd1N1Y2Nlc3NIYW5kbGVNaXhpbic7XG5cbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZSBWdWUgYW5kIFZ1ZSBSZXNvdXJjZS4gVGhpcyBnaXZlcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IGZvclxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuVnVlLmNvbXBvbmVudCgnY29tbWVudCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbW1lbnQtbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnY29tbWVudC1jcmVhdGUtZm9ybScsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1wcmV2aWV3JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2ZlZWQtbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9mZWVkLWxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnYW5zd2VyJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXItc2hvdy1tb2RhbCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWUnKSk7XG5cblZ1ZS5jb21wb25lbnQoJ3F1ZXN0aW9uJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3F1ZXN0aW9uLWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXItY3JlYXRlLWZvcm0nLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1jcmVhdGUtbW9kYWwnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWUnKSk7XG5cblZ1ZS5jb21wb25lbnQoJ2ZvbGxvdy1idXR0b24nLCByZXF1aXJlKCd2aWVuZGVyX2ZvbGxvdy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93LWJ1dHRvbi52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdmb2xsb3dlci1jb3VudCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItY291bnQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnZm9sbG93aW5nLWNvdW50JywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndG9waWMtY291bnQnLCByZXF1aXJlKCd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNvdW50LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2ZvbGxvd2luZy1saXN0JywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdmb2xsb3dlci1saXN0JywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3RvcGljLWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndXNlci1jYXJkJywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy91c2VyLWNhcmQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndG9waWMtY2FyZCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY2FyZC52dWUnKSk7XG5cbmNvbnN0IGZlZWQgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuXG4gICAgbWl4aW5zOiBbY2hhbmdlYWJsZU1lbnVNaXhpbiwgZm9sbG93U3VjY2Vzc0hhbmRsZU1peGluXSxcblxuICAgIHN0b3JlOiBzdG9yZSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgXHR0aGlzLmluaXRUYWIodGhpcy4kcmVmcy50b3BpY05hdiwgJ3Byb2ZpbGVOYXZpZ2F0aW9uJyk7XG4gICAgfSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy90b3BpYy9yZXNvdXJjZXMvcGFnZXMvdG9waWMvYXNzZXRzL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=