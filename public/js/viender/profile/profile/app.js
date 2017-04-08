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
/******/ 	return __webpack_require__(__webpack_require__.s = 273);
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
/* 64 */,
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
/* 109 */
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
        followings: [],
        url: ''
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["m" /* ADD_FOLLOWINGS */], function (state, followings) {
        state.followings = state.followings.concat(followings);
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
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["m" /* ADD_FOLLOWINGS */], response.data.data);
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

            state.followings = [];
            state.page = 1;
        }
    }
};

/***/ }),
/* 110 */
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
        topics: [],
        url: ''
    },

    mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* ADD_TOPICS */], function (state, topics) {
        state.topics = state.topics.concat(topics);
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
                commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* ADD_TOPICS */], response.data.data);
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

            state.topics = [];
            state.page = 1;
        }
    }
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(42);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viender_socialite_core_js_store_modules_questionList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_viender_socialite_core_js_store_modules_editor__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_viender_socialite_core_js_store_modules_feed__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_viender_profile_core_js_store_modules_userStats__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_viender_profile_core_js_store_modules_followingList__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_viender_profile_core_js_store_modules_followerList__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_viender_profile_core_js_store_modules_topicList__ = __webpack_require__(110);










/* harmony default export */ __webpack_exports__["a"] = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {
    questionList: __WEBPACK_IMPORTED_MODULE_1_viender_socialite_core_js_store_modules_questionList__["a" /* default */],
    editor: __WEBPACK_IMPORTED_MODULE_2_viender_socialite_core_js_store_modules_editor__["a" /* default */],
    feed: __WEBPACK_IMPORTED_MODULE_3_viender_socialite_core_js_store_modules_feed__["a" /* default */],
    userStats: __WEBPACK_IMPORTED_MODULE_4_viender_profile_core_js_store_modules_userStats__["a" /* default */],
    followingList: __WEBPACK_IMPORTED_MODULE_5_viender_profile_core_js_store_modules_followingList__["a" /* default */],
    followerList: __WEBPACK_IMPORTED_MODULE_6_viender_profile_core_js_store_modules_followerList__["a" /* default */],
    topicList: __WEBPACK_IMPORTED_MODULE_7_viender_profile_core_js_store_modules_topicList__["a" /* default */]
  }),

  actions: __webpack_require__(11)
});

/***/ }),
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
/* 123 */,
/* 124 */,
/* 125 */,
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
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viender_profile_core_js_mixins_changeableMenuMixin__ = __webpack_require__(66);



/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(111);

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

  store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */],

  mixins: [__WEBPACK_IMPORTED_MODULE_1_viender_profile_core_js_mixins_changeableMenuMixin__["a" /* default */]],

  mounted: function mounted() {
    this.initTab(this.$refs.profileNav, 'profileNavigation');
  }
});

/***/ }),
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
/* 160 */,
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
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzPzRiZGIqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/MmJjNSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VybEhlbHBlci5qcz80MjkwKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanM/M2Y1YioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanM/YWZhYSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzPzA5YzUqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcz8zNjIwKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzP2RmOWIqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanM/NjE2ZCoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZWRpdG9yLmpzPzE4OWIqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvcXVlc3Rpb25MaXN0LmpzP2QwNzAqIiwid2VicGFjazovLy9hbnN3ZXItcHJldmlldy52dWU/MWFiYyoiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlPzIwODMqIiwid2VicGFjazovLy9jb21tZW50LWxpc3QudnVlPzU4OTEqIiwid2VicGFjazovLy9jb21tZW50LnZ1ZT83N2ZjKiIsIndlYnBhY2s6Ly8vcXVlc3Rpb24tbGlzdC52dWU/YmFlZSoiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWU/MGRjZCoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWU/OTY0OCoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZT84MmYxKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZT85YjExKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZT9kMzkxKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZT9lOWMyKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT9jNTc3KioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlP2I5ZTEqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZT9mYjFlKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZT8zMjQ0KioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mZWVkLmpzPzM1ZDcqIiwid2VicGFjazovLy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlPzMzYWUqIiwid2VicGFjazovLy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZT8zYTMxKiIsIndlYnBhY2s6Ly8vYW5zd2VyLXNob3ctbW9kYWwudnVlPzFkNmIqIiwid2VicGFjazovLy9hbnN3ZXIudnVlPzM1YzgqIiwid2VicGFjazovLy9mZWVkLWxpc3QudnVlP2IwN2QqIiwid2VicGFjazovLy9xdWVzdGlvbi52dWU/Njk1MSoiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlPzYxNzEqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlPzJjZTMqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZT82ZGMyKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlP2JlNzUqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWU/MGRkYSoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlPzk2NzEqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWU/Mjk4OSoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZT81ZWI4KioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWU/ODhiNyoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlPzA1MTYqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWU/MTY3ZCoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWU/NWYzYyoqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9taXhpbnMvY2hhbmdlYWJsZU1lbnVNaXhpbi5qcz9lZTA4KiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mb2xsb3dlckxpc3QuanM/ZDZhMSoiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvdXNlclN0YXRzLmpzP2ZhNTMqIiwid2VicGFjazovLy9mb2xsb3ctYnV0dG9uLnZ1ZT80ODE0KiIsIndlYnBhY2s6Ly8vZm9sbG93ZXItY291bnQudnVlPzU0OTQqIiwid2VicGFjazovLy9mb2xsb3dlci1saXN0LnZ1ZT8wOTAxKiIsIndlYnBhY2s6Ly8vZm9sbG93aW5nLWNvdW50LnZ1ZT9lNDYwKiIsIndlYnBhY2s6Ly8vZm9sbG93aW5nLWxpc3QudnVlPzVlNWMqIiwid2VicGFjazovLy90b3BpYy1jYXJkLnZ1ZT9iZDhhKiIsIndlYnBhY2s6Ly8vdG9waWMtY291bnQudnVlP2M0OTMqIiwid2VicGFjazovLy90b3BpYy1saXN0LnZ1ZT9iODhlKiIsIndlYnBhY2s6Ly8vdXNlci1jYXJkLnZ1ZT83ZmI5KiIsIndlYnBhY2s6Ly8vLi9hcHBzL2ZvbGxvdy9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvdy1idXR0b24udnVlPzkyZTAqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZT8wZTY1KiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZT85MTYxKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlPzBlNzcqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1saXN0LnZ1ZT80N2Q5KiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZT9iNGIyKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jb3VudC52dWU/MGYyYSoiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtbGlzdC52dWU/ZDI2YyoiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdXNlci1jYXJkLnZ1ZT9jNzlkKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlP2FiZjIqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1saXN0LnZ1ZT82YTFjKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItbGlzdC52dWU/MzgxOSoqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNvdW50LnZ1ZT9iOTdkKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY2FyZC52dWU/MzQxYSoqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZT81MWMyKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9mb2xsb3cvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3ctYnV0dG9uLnZ1ZT81Nzk2KioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWxpc3QudnVlPzVlYzgqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy91c2VyLWNhcmQudnVlPzdkYTMqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mb2xsb3dpbmdMaXN0LmpzIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3RvcGljTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL3BhZ2VzL3Byb2ZpbGUvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL3BhZ2VzL3Byb2ZpbGUvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvcGFnZXMvcHJvZmlsZS9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIlNFVF9SRVFVRVNUSU5HIiwiU0VUX1NIT1dfUEFORUwiLCJTRVRfU0hPVyIsIlNFVF9TRUFSQ0hfVEVYVCIsIlNFVF9TRUFSQ0hfUkVTVUxUUyIsIlNFVF9TSE9XX01PUkVfRklFTERTIiwiVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMiLCJBRERfVE9fU0VMRUNURURfVE9QSUNTIiwiUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTIiwiU0VUX1FVRVNUSU9OX0RFVEFJTCIsIkFERF9RVUVTVElPTlMiLCJSRU1PVkVfUVVFU1RJT04iLCJTRVRfQVNfQU5TV0VSRUQiLCJTRVRfUVVFU1RJT05TX1VSTCIsIklOQ1JFTUVOVF9QQUdFIiwiVVBEQVRFX1JFUVVFU1RJTkciLCJTRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMIiwiU0VUX0VESVRPUl9DT05URU5UIiwiVVBEQVRFX0VESVRPUl9DT05URU5UIiwiU0VUX0VESVRPUl9RVUVTVElPTiIsIlNFVF9FRElUT1JfRUxFTUVOVCIsIlNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMIiwiU0VUX1NIT1dFRF9BTlNXRVIiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0aG9kcyIsImdldFVybCIsInJlbCIsIm9iaiIsImxpbmtzIiwiZmlsdGVyIiwibGluayIsInVybCIsInBhdGgiLCJ3aW5kb3ciLCJzZWFyY2hPckFza1BhbmVsIiwic2VhcmNoT3JBc2tPdmVybGF5IiwidG9waWNSZWNvbW1lbmRhdGlvbiIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsInJlcXVlc3RpbmciLCJzaG93Iiwic2VhcmNoVGV4dCIsInF1ZXN0aW9uRGV0YWlsIiwic2VhcmNoUmVzdWx0cyIsInNob3dNb3JlRmllbGRzIiwic2VsZWN0ZWRUb3BpY3MiLCJwb3N0UXVlc3Rpb25VcmwiLCJWdWUiLCJwcm90b3R5cGUiLCIkdmllbmRlciIsImhlbHBlcnMiLCJhcGkiLCJtdXRhdGlvbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJ0b3BpYyIsInB1c2giLCJzZWxlY3RlZFRvcGljIiwiaWQiLCJhY3Rpb25zIiwicG9zdFF1ZXN0aW9uIiwiY29tbWl0IiwiYXhpb3MiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidG9waWNzIiwidGhlbiIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInNob3dQYW5lbCIsIm92ZXJmbG93Iiwic2hvd1RvcGljUmVjb21tZW5kYXRpb25zIiwic2V0VGltZW91dCIsImhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyIsIklOQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCIsIkRFQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCIsIlNFVF9GT0xMT1dFUl9DT1VOVCIsIklOQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQiLCJERUNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UIiwiU0VUX0ZPTExPV0lOR19DT1VOVCIsIklOQ1JFTUVOVF9UT1BJQ19DT1VOVCIsIkRFQ1JFTUVOVF9UT1BJQ19DT1VOVCIsIlNFVF9UT1BJQ19DT1VOVCIsIkFERF9GT0xMT1dJTkdTIiwiQUREX0ZPTExPV0VSUyIsIkFERF9UT1BJQ1MiLCJTRVRfVVJMIiwiZWRpdG9yRWxlbWVudCIsInF1ZXN0aW9uIiwiY29udGVudCIsInNldFF1ZXN0aW9uIiwicGF5bG9hZCIsInJvb3RTdGF0ZSIsImFuc3dlclRleHQiLCJzdW1tZXJub3RlIiwicGFnZSIsInRvdGFsUGFnZXMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvblVybCIsInNob3dBbnN3ZXJDcmVhdGVNb2RhbCIsImNvbmNhdCIsInNwbGljZSIsImluZGV4T2YiLCJhbnN3ZXJlZCIsIiQiLCJzY3JvbGxUb3AiLCJtb2RhbCIsImltYWdlUG9wT3ZlciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNwbGF5Iiwic2V0UXVlc3Rpb25VcmwiLCJmZXRjaERhdGEiLCJnZXQiLCJwYXJhbXMiLCJ3aXRoIiwibWV0YSIsInBhZ2luYXRpb24iLCJ0b3RhbF9wYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJhbnN3ZXJzIiwiZmVlZFVybHMiLCJzaG93QW5zd2VyTW9kYWwiLCJzaG93ZWRBbnN3ZXIiLCJhZGRBbnN3ZXJzIiwic2V0RmVlZFVybCIsImluY3JlbWVudFBhZ2UiLCJ1cGRhdGVSZXF1ZXN0aW5nIiwiYW5zd2VyIiwidW5zaGlmdCIsInNldFNob3dlZEFuc3dlciIsIm9ubHkiLCJzZWxlY3RlZE1lbnUiLCJub3RNb3VudGVkIiwibmF2Iiwic2Nyb2xsU3RvcmFnZU5hbWUiLCJpbml0VGFiIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Nyb2xsTGVmdCIsInNldEN1cnJlbnRNZW51IiwiJHJlZnMiLCJwcm9maWxlQ29udGVudE1vYmlsZSIsImN1cnJlbnRNZW51IiwibWVudSIsInNldEl0ZW0iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiUGFnZSIsIlVybCIsImdhIiwicmVsYXRpdmVVcmwiLCJoaWRlQmVmb3JlTW91bnRlZFByZWxvYWRlcnMiLCJmb2xsb3dlcnMiLCJyZXNldCIsImZvbGxvd2VyQ291bnQiLCJmb2xsb3dpbmdDb3VudCIsInRvcGljQ291bnQiLCJmb2xsb3dpbmdzIiwicmVxdWlyZSIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJxdWVzdGlvbkxpc3QiLCJlZGl0b3IiLCJmZWVkIiwidXNlclN0YXRzIiwiZm9sbG93aW5nTGlzdCIsImZvbGxvd2VyTGlzdCIsInRvcGljTGlzdCIsImNvbXBvbmVudCIsImVs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K0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkEsZ0JB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QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBLHdCQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFF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QztBQUNBeEgsSUFBSXFJLFNBQUosQ0FBYyxlQUFkLEVBQStCLG1CQUFBYixDQUFRLEVBQVIsQ0FBL0I7QUFDQXhILElBQUlxSSxTQUFKLENBQWMsWUFBZCxFQUE0QixtQkFBQWIsQ0FBUSxFQUFSLENBQTVCO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLFdBQWQsRUFBMkIsbUJBQUFiLENBQVEsRUFBUixDQUEzQjtBQUNBeEgsSUFBSXFJLFNBQUosQ0FBYyxZQUFkLEVBQTRCLG1CQUFBYixDQUFRLEVBQVIsQ0FBNUI7O0FBR0EsSUFBTVEsT0FBTyxJQUFJaEksR0FBSixDQUFRO0FBQ2pCc0ksTUFBSSxNQURhOztBQUdqQkMsU0FBTyx1REFIVTs7QUFLakJDLFVBQVEsQ0FBQyxtR0FBRCxDQUxTOztBQU9qQkMsU0FQaUIscUJBT1A7QUFDTixTQUFLMUMsT0FBTCxDQUFhLEtBQUtPLEtBQUwsQ0FBV29DLFVBQXhCLEVBQW9DLG1CQUFwQztBQUNIO0FBVGdCLENBQVIsQ0FBYixDIiwiZmlsZSI6ImpzL3ZpZW5kZXIvcHJvZmlsZS9wcm9maWxlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjczKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYzc2NWY2ZjhhM2I3ZjNmNDgzMCIsIi8vIHNlYXJjaE9yQXNrUGFuZWxcbmV4cG9ydCBjb25zdCBTRVRfUkVRVUVTVElORyA9ICdTRVRfUkVRVUVTVElORyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfUEFORUwgPSAnU0VUX1NIT1dfUEFORUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XID0gJ1NFVF9TSE9XJztcbmV4cG9ydCBjb25zdCBTRVRfU0VBUkNIX1RFWFQgPSAnU0VUX1NFQVJDSF9URVhUJztcbmV4cG9ydCBjb25zdCBTRVRfU0VBUkNIX1JFU1VMVFMgPSAnU0VUX1NFQVJDSF9SRVNVTFRTJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19NT1JFX0ZJRUxEUyA9ICdTRVRfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMgPSAnVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IEFERF9UT19TRUxFQ1RFRF9UT1BJQ1MgPSAnQUREX1RPX1NFTEVDVEVEX1RPUElDUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTID0gJ1JFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVNUSU9OX0RFVEFJTCA9ICdTRVRfUVVFU1RJT05fREVUQUlMJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCIvLyBxdWVzdGlvbkxpc3RcbmV4cG9ydCBjb25zdCBBRERfUVVFU1RJT05TID0gJ0FERF9RVUVTVElPTlMnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9RVUVTVElPTiA9ICdSRU1PVkVfUVVFU1RJT04nO1xuZXhwb3J0IGNvbnN0IFNFVF9BU19BTlNXRVJFRCA9ICdTRVRfQVNfQU5TV0VSRUQnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTlNfVVJMID0gJ1NFVF9RVUVTVElPTlNfVVJMJztcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfUEFHRSA9ICdJTkNSRU1FTlRfUEFHRSc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1JFUVVFU1RJTkcgPSAnVVBEQVRFX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwgPSAnU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCc7XG5cbi8vIGVkaXRvclxuZXhwb3J0IGNvbnN0IFNFVF9FRElUT1JfQ09OVEVOVCA9ICdTRVRfRURJVE9SX0NPTlRFTlQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FRElUT1JfQ09OVEVOVCA9ICdVUERBVEVfRURJVE9SX0NPTlRFTlQnO1xuZXhwb3J0IGNvbnN0IFNFVF9FRElUT1JfUVVFU1RJT04gPSAnU0VUX0VESVRPUl9RVUVTVElPTic7XG5leHBvcnQgY29uc3QgU0VUX0VESVRPUl9FTEVNRU5UID0gJ1NFVF9FRElUT1JfRUxFTUVOVCc7XG5cbi8vIGZlZWRcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCA9ICdTRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dFRF9BTlNXRVIgPSAnU0VUX1NIT1dFRF9BTlNXRVInO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0VXJsKHJlbCwgb2JqKSB7XG5cdFx0XHRyZXR1cm4gb2JqLmxpbmtzLmZpbHRlcihmdW5jdGlvbihsaW5rKSB7XG5cdFx0XHRcdHJldHVybiBsaW5rLnJlbCA9PSByZWw7XG5cdFx0XHR9KVswXS51cmw7XG5cdFx0fSxcblxuXHRcdHVybChwYXRoKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnVybChwYXRoKTtcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy91cmxIZWxwZXIuanMiLCJpbXBvcnQgc2VhcmNoT3JBc2tQYW5lbCBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbCc7XG5pbXBvcnQgc2VhcmNoT3JBc2tPdmVybGF5IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXknO1xuaW1wb3J0IHRvcGljUmVjb21tZW5kYXRpb24gZnJvbSAnLi9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2VhcmNoT3JBc2tQYW5lbDogc2VhcmNoT3JBc2tQYW5lbCxcblx0c2VhcmNoT3JBc2tPdmVybGF5OiBzZWFyY2hPckFza092ZXJsYXksXG4gICAgdG9waWNSZWNvbW1lbmRhdGlvbjogdG9waWNSZWNvbW1lbmRhdGlvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHF1ZXN0aW9uRGV0YWlsOiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHBvc3RRdWVzdGlvblVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgnL3F1ZXN0aW9ucycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgaWYoc2hvdykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlRPR0dMRV9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gIXN0YXRlLnNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9RVUVTVElPTl9ERVRBSUxdKHN0YXRlLCBxdWVzdGlvbkRldGFpbCkge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25EZXRhaWwgPSBxdWVzdGlvbkRldGFpbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBwb3N0UXVlc3Rpb24oe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3Qoc3RhdGUucG9zdFF1ZXN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlLnNlYXJjaFRleHQsXG4gICAgICAgICAgICAgICAgYm9keTogc3RhdGUucXVlc3Rpb25EZXRhaWwsXG4gICAgICAgICAgICAgICAgdG9waWNzOiBzdGF0ZS5zZWxlY3RlZFRvcGljcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXSAoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19QQU5FTF0gKHN0YXRlLCBzaG93UGFuZWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dQYW5lbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93UGFuZWwgPSBzaG93UGFuZWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0gKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXSAoc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICB1cmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJ3RvcGljcycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgdHJ1ZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcyIsImV4cG9ydCBjb25zdCBJTkNSRU1FTlRfRk9MTE9XRVJfQ09VTlQgPSAnSU5DUkVNRU5UX0ZPTExPV0VSX0NPVU5UJztcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfRk9MTE9XRVJfQ09VTlQgPSAnREVDUkVNRU5UX0ZPTExPV0VSX0NPVU5UJztcbmV4cG9ydCBjb25zdCBTRVRfRk9MTE9XRVJfQ09VTlQgPSAnU0VUX0ZPTExPV0VSX0NPVU5UJztcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UID0gJ0lOQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQgPSAnREVDUkVNRU5UX0ZPTExPV0lOR19DT1VOVCc7XG5leHBvcnQgY29uc3QgU0VUX0ZPTExPV0lOR19DT1VOVCA9ICdTRVRfRk9MTE9XSU5HX0NPVU5UJztcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfVE9QSUNfQ09VTlQgPSAnSU5DUkVNRU5UX1RPUElDX0NPVU5UJztcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfVE9QSUNfQ09VTlQgPSAnREVDUkVNRU5UX1RPUElDX0NPVU5UJztcbmV4cG9ydCBjb25zdCBTRVRfVE9QSUNfQ09VTlQgPSAnU0VUX1RPUElDX0NPVU5UJztcbmV4cG9ydCBjb25zdCBBRERfRk9MTE9XSU5HUyA9ICdBRERfRk9MTE9XSU5HUyc7XG5leHBvcnQgY29uc3QgQUREX0ZPTExPV0VSUyA9ICdBRERfRk9MTE9XRVJTJztcbmV4cG9ydCBjb25zdCBBRERfVE9QSUNTID0gJ0FERF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9VUkwgPSAnU0VUX1VSTCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG5cdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBlZGl0b3JFbGVtZW50OiBudWxsLFxuICAgICAgICBxdWVzdGlvbjogbnVsbCxcbiAgICAgICAgY29udGVudDogbnVsbFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5TRVRfRURJVE9SX0NPTlRFTlRdIChzdGF0ZSwgY29udGVudCkge1xuICAgICAgICAgICAgc3RhdGUuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlVQREFURV9FRElUT1JfQ09OVEVOVF0gKHN0YXRlLCBib2R5KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY29udGVudC5ib2R5ID0gYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX0VESVRPUl9RVUVTVElPTl0gKHN0YXRlLCBxdWVzdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX0VESVRPUl9FTEVNRU5UXSAoc3RhdGUsIGVkaXRvckVsZW1lbnQpIHtcbiAgICAgICAgICAgIHN0YXRlLmVkaXRvckVsZW1lbnQgPSBlZGl0b3JFbGVtZW50O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2V0UXVlc3Rpb24oeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9FRElUT1JfQ09OVEVOVCwgcGF5bG9hZC5hbnN3ZXJUZXh0KTtcbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfRURJVE9SX1FVRVNUSU9OLCBwYXlsb2FkLnF1ZXN0aW9uKTtcbiAgICAgICAgICAgIGlmKHN0YXRlLmVkaXRvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5lZGl0b3JFbGVtZW50LnN1bW1lcm5vdGUoJ2NvZGUnLCBwYXlsb2FkLmFuc3dlclRleHQuYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZWRpdG9yLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdG90YWxQYWdlczogMixcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHF1ZXN0aW9uczogW10sXG4gICAgICAgIHF1ZXN0aW9uVXJsOnt9LFxuICAgICAgICBzaG93QW5zd2VyQ3JlYXRlTW9kYWw6IGZhbHNlLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5BRERfUVVFU1RJT05TXSAoc3RhdGUsIHF1ZXN0aW9ucykge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25zID0gc3RhdGUucXVlc3Rpb25zLmNvbmNhdChxdWVzdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfUVVFU1RJT05dIChzdGF0ZSwgcXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9ucy5zcGxpY2Uoc3RhdGUucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pLCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX0FTX0FOU1dFUkVEXSAoc3RhdGUsIHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbnNbc3RhdGUucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pXS5hbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9RVUVTVElPTlNfVVJMXSAoc3RhdGUsIHVybCkge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25VcmwgPSB1cmw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLklOQ1JFTUVOVF9QQUdFXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UrKztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVVBEQVRFX1JFUVVFU1RJTkddIChzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUxdIChzdGF0ZSwgc2hvd0Fuc3dlckNyZWF0ZU1vZGFsKSB7XG4gICAgICAgICAgICBpZihzaG93QW5zd2VyQ3JlYXRlTW9kYWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5hbnN3ZXItY3JlYXRlLW1vZGFsLW92ZXJsYXknKS5zY3JvbGxUb3AoMCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgICAgICQoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbWFnZVBvcE92ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibm90ZS1pbWFnZS1wb3BvdmVyXCIpWzBdO1xuXG4gICAgICAgICAgICBpZihpbWFnZVBvcE92ZXIpIGltYWdlUG9wT3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBzdGF0ZS5zaG93QW5zd2VyQ3JlYXRlTW9kYWwgPSBzaG93QW5zd2VyQ3JlYXRlTW9kYWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2V0UXVlc3Rpb25VcmwoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSwgdXJsKSB7XG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1FVRVNUSU9OU19VUkwsIHVybCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmV0Y2hEYXRhKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlVQREFURV9SRVFVRVNUSU5HLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHN0YXRlLnF1ZXN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGg6IFsnb3duZXInLCAnYW5zd2VyJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWxQYWdlcyA9IHJlc3BvbnNlLmRhdGEubWV0YS5wYWdpbmF0aW9uLnRvdGFsX3BhZ2VzO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5BRERfUVVFU1RJT05TLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5JTkNSRU1FTlRfUEFHRSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlVQREFURV9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuVVBEQVRFX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3F1ZXN0aW9uTGlzdC5qcyIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyB1LW1hcmdpbi0tbm9uZSBhbnN3ZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIHMxMlwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIiBAY2xpY2s9XCJzaG93QW5zd2VyKClcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIiB2LWlmPVwic2hvd1F1ZXN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8aDQ+PGEgOmhyZWY9XCJnZXRVcmwoJ3NlbGZfaHRtbCcsIGFuc3dlci5xdWVzdGlvbilcIiBAY2xpY2s9XCJzdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiPnt7IGFuc3dlci5xdWVzdGlvbi50aXRsZSB9fTwvYT48L2g0PlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0ICBcdDx1bCBjbGFzcz1cImNvbGxlY3Rpb25cIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cblx0XHRcdFx0XHRcdFx0PGltZyA6c3JjPVwiZ2V0VXJsKCdhdmF0YXInLCBhbnN3ZXIub3duZXIpXCIgYWx0PVwiXCIgY2xhc3M9XCJjaXJjbGVcIj5cblx0XHRcdFx0XHRcdFx0PGEgOmhyZWY9XCJnZXRVcmwoJ3NlbGZfaHRtbCcsIGFuc3dlci5vd25lcilcIiBAY2xpY2s9XCJzdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGFuc3dlci5vd25lci5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFuc3dlci1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCIgdi1odG1sPVwiYW5zd2VyLnByZXZpZXdcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxhIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgdi1pZj1cImFuc3dlci5wcmV2aWV3Lmxlbmd0aCA+PSAyNThcIj4obW9yZSk8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cblx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIEBjbGljaz1cInVwdm90ZVwiPlxuXHRcdFx0XHQgICAgXHQ8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyB1cHZvdGVDb3VudCB9fTwvc3Bhbj5cblx0XHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl91cDwvYT5cblx0XHRcdCAgICBcdDwvc3Bhbj5cblx0XHRcdCAgICBcdDxhIDpzdHlsZT1cIiEgYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBAY2xpY2s9XCJkb3dudm90ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX2Rvd248L2E+XG5cdFx0XHQgICAgXHQ8YSBzdHlsZT1cImNvbG9yOiBncmV5O1wiIEBjbGljaz1cInRvZ2dsZUNvbW1lbnRzKClcIj5Db21tZW50cyA8c3Bhbj4oe3sgY29tbWVudENvdW50IH19KTwvc3Bhbj48L2E+XG5cdFx0XHRcdFx0PGNvbW1lbnQtbGlzdCA6Y29tbWVudHMtdXJsPVwiZ2V0VXJsKCdjb21tZW50cycsIGFuc3dlcilcIiBAY29tbWVudC1wb3N0ZWQ9XCJpbmNyZW1lbnRDb21tZW50Q291bnQoKVwiIHYtaWY9XCJzaG93Q29tbWVudHNcIj48L2NvbW1lbnQtbGlzdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiB7XG4gICAgXHRhbnN3ZXI6IHtcbiAgICBcdFx0dHlwZTogT2JqZWN0LFxuICAgIFx0XHRkZWZhdWx0OiBudWxsLFxuICAgIFx0fSxcbiAgICBcdHNob3dRdWVzdGlvbjoge1xuICAgIFx0XHR0eXBlOiBCb29sZWFuLFxuICAgIFx0XHRkZWZhdWx0OiB0cnVlLFxuICAgIFx0fSxcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgICBkYXRhKCkge1xuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0cmVxdWVzdGluZzogZmFsc2UsXG4gICAgXHRcdHNob3dDb21tZW50czogZmFsc2VcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICBcdHVwdm90ZUNvdW50KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy5hbnN3ZXIgPyB0aGlzLmFuc3dlci51cHZvdGVfY291bnQgOiAwO1xuICAgIFx0fSxcblxuICAgIFx0Y29tbWVudENvdW50KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy5hbnN3ZXIgPyB0aGlzLmFuc3dlci5jb21tZW50X2NvdW50IDogMDtcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgIFx0c3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcblxuICAgIFx0c2hvd0Fuc3dlcigpIHtcbiAgICBcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdmZWVkLycgKyB0eXBlcy5TRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCwgdHJ1ZSk7XG4gICAgXHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdmZWVkL3NldFNob3dlZEFuc3dlcicsIHRoaXMuYW5zd2VyKTtcbiAgICBcdH0sXG5cbiAgICBcdHVwdm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ3Vwdm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50ICs9IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gdHJ1ZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0ZG93bnZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0ICAgICAgICBcdGlmKF90aGlzLmFuc3dlci51cHZvdGVkKVxuXHRcdFx0ICAgICAgICBcdFx0X3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCAtPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gdHJ1ZTtcblx0XHRcdCAgICAgICAgfVxuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0dG9nZ2xlQ29tbWVudHMoKSB7XG4gICAgXHRcdHRoaXMuc2hvd0NvbW1lbnRzID0gIXRoaXMuc2hvd0NvbW1lbnRzO1xuICAgIFx0fSxcblxuICAgIFx0aW5jcmVtZW50Q29tbWVudENvdW50KCkge1xuICAgIFx0XHR0aGlzLmNvbW1lbnRDb3VudCsrO1xuICAgIFx0fVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci1wcmV2aWV3LnZ1ZT8xNTU0YWZmNiIsIjx0ZW1wbGF0ZT5cblx0PGZvcm0gbWV0aG9kPVwiUE9TVFwiIDphY3Rpb249XCJjb21tZW50YWJsZUNvbW1lbnRzVXJsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbCBzOVwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYm9keVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdi1tb2RlbD1cImZvcm1EYXRhLmJvZHlcIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbCBzM1wiPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiYWN0aW9uXCIgQGNsaWNrPVwicG9zdENvbW1lbnQoJGV2ZW50KVwiPlxuXHRcdFx0XHRcdENvbW1lbnRcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsnY29tbWVudGFibGVDb21tZW50c1VybCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuXHRcdFx0Zm9ybURhdGE6IHtcblx0XHRcdFx0Ym9keTogbnVsbCxcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdHBvc3RDb21tZW50KGV2ZW50KSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0XHRpZihldmVudCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG5cdFx0XHRpZiggISBfdGhpcy5mb3JtRGF0YS5ib2R5KSByZXR1cm47XG5cblx0XHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuY29tbWVudGFibGVDb21tZW50c1VybCArICc/d2l0aD1vd25lcicsIHRoaXMuZm9ybURhdGEpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLiRlbWl0KCdjb21tZW50LXBvc3RlZCcsIHJlc3BvbnNlKTtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5mb3JtRGF0YS5ib2R5ID0gbnVsbDtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbW1lbnQtY3JlYXRlLWZvcm0udnVlPzAzZTIyMGU5IiwiPHRlbXBsYXRlPlxuXHQ8dWwgY2xhc3M9XCJjb2xsZWN0aW9uIHUtYm9yZGVyLS1ub25lXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBjb2xsZWN0aW9uLWl0ZW0tZm9ybVwiPlxuICAgICAgICAgICAgPGNvbW1lbnQtY3JlYXRlLWZvcm0gOmNvbW1lbnRhYmxlLWNvbW1lbnRzLXVybD1cImNvbW1lbnRzVXJsXCIgQGNvbW1lbnQtcG9zdGVkPVwiYWRkQ29tbWVudCgkZXZlbnQuZGF0YSlcIj48L2NvbW1lbnQtY3JlYXRlLWZvcm0+ICAgIFxuICAgICAgICA8L2xpPlxuXHRcdDxjb21tZW50IHYtZm9yPVwiY29tbWVudCBpbiBjb21tZW50c1wiIDpjb21tZW50PVwiY29tbWVudFwiPjwvY29tbWVudD5cblx0PC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2NvbW1lbnRzVXJsJ10sXG5cblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29tbWVudHM6IFtdLFxuXHRcdFx0cmVxdWVzdGluZzogZmFsc2UsXG5cdFx0XHRwYWdlOiAxXG5cdFx0fVxuXHR9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgIFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChfdGhpcy5jb21tZW50c1VybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IF90aGlzLnBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29tbWVudHMgPSBfdGhpcy5jb21tZW50cy5jb25jYXQocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlKys7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZENvbW1lbnQoY29tbWVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY29tbWVudC1wb3N0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21tZW50LWxpc3QudnVlPzUxZmNiYTI0IiwiPHRlbXBsYXRlPlxuICA8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyIGF2YXRhci0tc21hbGwgdS1ib3JkZXItLW5vbmVcIj5cbiAgICA8aW1nIDpzcmM9XCJnZXRVcmwoJ2F2YXRhcicsIGNvbW1lbnQub3duZXIpXCIgYWx0PVwiXCIgY2xhc3M9XCJ1LWRpbWVuc2lvbi0tc21hbGwgY2lyY2xlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPHN0cm9uZz5cbiAgICAgICAgPGEgY2xhc3M9XCJwcm9maWxlLWxpbmtcIiA6aHJlZj1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBjb21tZW50Lm93bmVyKVwiPnt7IGNvbW1lbnQub3duZXIubmFtZSB9fTwvYT5cbiAgICAgIDwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgICA8cCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyBjb21tZW50LmJvZHkgfX08L3A+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uIHUtYm9yZGVyLS1vbmx5LWJvdHRvbVwiPlxuICAgICAgICA8c3BhbiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBAY2xpY2s9XCJ1cHZvdGVcIj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyB1cHZvdGVDb3VudCB9fTwvc3Bhbj5cbiAgICAgICAgICA8YSA6c3R5bGU9XCIhIGNvbW1lbnQudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl91cDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YSA6c3R5bGU9XCIhIGNvbW1lbnQuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIEBjbGljaz1cImRvd252b3RlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfZG93bjwvYT5cbiAgICAgICAgPGEgc3R5bGU9XCJjb2xvcjogZ3JleTtcIiBAY2xpY2s9XCJ0b2dnbGVDb21tZW50cygpXCI+Q29tbWVudHMgPHNwYW4+KHt7IGNvbW1lbnRDb3VudCB9fSk8L3NwYW4+PC9hPlxuICAgICAgPGNvbW1lbnQtbGlzdCA6Y29tbWVudHMtdXJsPVwiZ2V0VXJsKCdjb21tZW50cycsIGNvbW1lbnQpXCIgQGNvbW1lbnQtcG9zdGVkPVwiaW5jcmVtZW50Q29tbWVudENvdW50KClcIiB2LWlmPVwic2hvd0NvbW1lbnRzXCI+PC9jb21tZW50LWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydjb21tZW50J10sXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICB1cHZvdGVDb3VudDogMCxcbiAgICAgIGNvbW1lbnRDb3VudDogMCxcbiAgICAgIHNob3dDb21tZW50czogZmFsc2UsXG4gICAgfTtcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMudXB2b3RlQ291bnQgPSB0aGlzLmNvbW1lbnQudXB2b3RlX2NvdW50O1xuICAgIHRoaXMuY29tbWVudENvdW50ID0gdGhpcy5jb21tZW50LmNvbW1lbnRfY291bnQ7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHVwdm90ZSgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgIGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ3Vwdm90ZXMnLCB0aGlzLmNvbW1lbnQpLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuICAgICAgICAgIF90aGlzLnVwdm90ZUNvdW50ICs9IDE7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC51cHZvdGVkID0gdHJ1ZTtcbiAgICAgICAgICBfdGhpcy5jb21tZW50LmRvd252b3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG4gICAgICAgICAgX3RoaXMudXB2b3RlQ291bnQgLT0gMTtcbiAgICAgICAgICBfdGhpcy5jb21tZW50LnVwdm90ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkb3dudm90ZSgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgIGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ2Rvd252b3RlcycsIHRoaXMuY29tbWVudCksIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmNvbW1lbnQudXB2b3RlZCkgeyBfdGhpcy51cHZvdGVDb3VudCAtPSAxOyB9XG4gICAgICAgICAgX3RoaXMuY29tbWVudC51cHZvdGVkID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC5kb3dudm90ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC5kb3dudm90ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0b2dnbGVDb21tZW50cygpIHtcbiAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gIXRoaXMuc2hvd0NvbW1lbnRzO1xuICAgIH0sXG5cbiAgICB1cGRhdGVDb21tZW50Q291bnQoKSB7XG4gICAgICB0aGlzLmNvbW1lbnRDb3VudCsrO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tbWVudC52dWU/YTU3MzQ5ZmMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICA8cXVlc3Rpb24gOnF1ZXN0aW9uPVwicXVlc3Rpb25cIiB2LWZvcj1cInF1ZXN0aW9uIGluIHF1ZXN0aW9uc1wiPjwvcXVlc3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIgdi1zaG93PVwicmVxdWVzdGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiIHYtc2hvdz1cIiAhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIj5Mb2FkIG1vcmU8L2J1dHRvbj5cbiAgICAgICAgPGFuc3dlci1jcmVhdGUtbW9kYWw+PC9hbnN3ZXItY3JlYXRlLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ3F1ZXN0aW9uVXJsJ10sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICByZXF1ZXN0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC5yZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIHF1ZXN0aW9ucygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3QucXVlc3Rpb25zO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnBhZ2UgLSAxO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvdGFsUGFnZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnRvdGFsUGFnZXM7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdxdWVzdGlvbkxpc3Qvc2V0UXVlc3Rpb25VcmwnLCB0aGlzLnF1ZXN0aW9uVXJsKTtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncXVlc3Rpb25MaXN0L2ZldGNoRGF0YScpO1xuICAgICAgICB9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHF1ZXN0aW9uLWxpc3QudnVlP2M3Y2ZkOWQ4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItcHJldmlldy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWUzOTVmOWIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1wcmV2aWV3LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItcHJldmlldy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWUzOTVmOWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZTM5NWY5YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDFkZWYxMTUhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29tbWVudC1jcmVhdGUtZm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDFkZWYxMTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00MWRlZjExNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb21tZW50LWxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTU1YjNiMWE0IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jb21tZW50LWxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjb21tZW50LWxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU1YjNiMWE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTViM2IxYTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb21tZW50LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yMGVmZmZlZCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29tbWVudC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjb21tZW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMGVmZmZlZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIwZWZmZmVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3F1ZXN0aW9uLWxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWM4M2NiNzlhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9xdWVzdGlvbi1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHF1ZXN0aW9uLWxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWM4M2NiNzlhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYzgzY2I3OWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggMTkgMjAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBhdmF0YXIgYXZhdGFyLS1zbWFsbCB1LWJvcmRlci0tbm9uZVwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInUtZGltZW5zaW9uLS1zbWFsbCBjaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmdldFVybCgnYXZhdGFyJywgX3ZtLmNvbW1lbnQub3duZXIpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW19jKCdzdHJvbmcnLCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZmlsZS1saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5jb21tZW50Lm93bmVyKVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnQub3duZXIubmFtZSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiNXB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tZW50LmJvZHkpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uIHUtYm9yZGVyLS1vbmx5LWJvdHRvbVwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51cHZvdGVcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiNXB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51cHZvdGVDb3VudCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uY29tbWVudC51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJylcbiAgfSwgW192bS5fdihcInRodW1iX3VwXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5jb21tZW50LmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcInRodW1iX2Rvd25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCJncmV5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlQ29tbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbW1lbnRzIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jb21tZW50Q291bnQpICsgXCIpXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93Q29tbWVudHMpID8gX2MoJ2NvbW1lbnQtbGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50cy11cmxcIjogX3ZtLmdldFVybCgnY29tbWVudHMnLCBfdm0uY29tbWVudClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNvbW1lbnQtcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaW5jcmVtZW50Q29tbWVudENvdW50KClcbiAgICAgIH1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTIwZWZmZmVkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yMGVmZmZlZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICBcImFjdGlvblwiOiBfdm0uY29tbWVudGFibGVDb21tZW50c1VybFxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHM5XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtRGF0YS5ib2R5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuYm9keVwiXG4gICAgfV0sXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJib2R5XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybURhdGEuYm9keSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtRGF0YS5ib2R5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczNcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJuYW1lXCI6IFwiYWN0aW9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucG9zdENvbW1lbnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdENvbW1lbnRcXG5cXHRcXHRcXHRcIildKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00MWRlZjExNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDFkZWYxMTUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24gdS1ib3JkZXItLW5vbmVcIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBjb2xsZWN0aW9uLWl0ZW0tZm9ybVwiXG4gIH0sIFtfYygnY29tbWVudC1jcmVhdGUtZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50YWJsZS1jb21tZW50cy11cmxcIjogX3ZtLmNvbW1lbnRzVXJsXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFkZENvbW1lbnQoJGV2ZW50LmRhdGEpXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5jb21tZW50cyksIGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gX2MoJ2NvbW1lbnQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImNvbW1lbnRcIjogY29tbWVudFxuICAgICAgfVxuICAgIH0pXG4gIH0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTViM2IxYTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTU1YjNiMWE0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgdS1tYXJnaW4tLW5vbmUgYW5zd2VyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHMxMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zaG93QW5zd2VyKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoX3ZtLnNob3dRdWVzdGlvbikgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW19jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5hbnN3ZXIucXVlc3Rpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN0b3BQcm9wYWdhdGlvbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYW5zd2VyLnF1ZXN0aW9uLnRpdGxlKSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb25cIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmdldFVybCgnYXZhdGFyJywgX3ZtLmFuc3dlci5vd25lciksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLm93bmVyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYW5zd2VyLm93bmVyLm5hbWUpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1jb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcImlubGluZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5hbnN3ZXIucHJldmlldylcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmFuc3dlci5wcmV2aWV3Lmxlbmd0aCA+PSAyNTgpID8gX2MoJ2EnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiKG1vcmUpXCIpXSkgOiBfdm0uX2UoKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb25cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXB2b3RlXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXB2b3RlQ291bnQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJylcbiAgfSwgW192bS5fdihcInRodW1iX3VwXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJyksXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwidGh1bWJfZG93blwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjb2xvclwiOiBcImdyZXlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVDb21tZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tbWVudHMgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmNvbW1lbnRDb3VudCkgKyBcIilcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDb21tZW50cykgPyBfYygnY29tbWVudC1saXN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRzLXVybFwiOiBfdm0uZ2V0VXJsKCdjb21tZW50cycsIF92bS5hbnN3ZXIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWUzOTVmOWJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVlMzk1ZjliIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge30sIFtfdm0uX2woKF92bS5xdWVzdGlvbnMpLCBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgIHJldHVybiBfYygncXVlc3Rpb24nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInF1ZXN0aW9uXCI6IHF1ZXN0aW9uXG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlcXVlc3RpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0aW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCJcbiAgfSwgW192bS5fbSgwKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ucmVxdWVzdGluZyAmJiBfdm0ucGFnZSA8IF92bS50b3RhbFBhZ2VzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiICEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjBcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mZXRjaERhdGEoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvYWQgbW9yZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYW5zd2VyLWNyZWF0ZS1tb2RhbCcpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciBsZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXAtcGF0Y2hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYzgzY2I3OWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWM4M2NiNzlhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCAxOSAyMCIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHRvdGFsUGFnZXM6IDIsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBhbnN3ZXJzOiBbXSxcbiAgICAgICAgZmVlZFVybHM6e30sXG4gICAgICAgIHNob3dBbnN3ZXJNb2RhbDogZmFsc2UsXG4gICAgICAgIHNob3dlZEFuc3dlcjogbnVsbCxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBhZGRBbnN3ZXJzKHN0YXRlLCBhbnN3ZXJzKSB7XG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXJzID0gc3RhdGUuYW5zd2Vycy5jb25jYXQoYW5zd2Vycyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RmVlZFVybChzdGF0ZSwgdXJsKSB7XG4gICAgICAgICAgICBzdGF0ZS5mZWVkVXJscyA9IHVybDtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmNyZW1lbnRQYWdlKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5wYWdlKys7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlUmVxdWVzdGluZyhzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX0FOU1dFUl9TSE9XX01PREFMXSAoc3RhdGUsIHNob3dBbnN3ZXJNb2RhbCkge1xuICAgICAgICAgICAgaWYoc2hvd0Fuc3dlck1vZGFsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXRlLnNob3dBbnN3ZXJNb2RhbCA9IHNob3dBbnN3ZXJNb2RhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dFRF9BTlNXRVJdIChzdGF0ZSwgc2hvd2VkQW5zd2VyKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93ZWRBbnN3ZXIgPSBzaG93ZWRBbnN3ZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQW5zd2VyKHN0YXRlLCBhbnN3ZXIpIHtcbiAgICAgICAgICAgIHN0YXRlLmFuc3dlcnMudW5zaGlmdChhbnN3ZXIpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGZldGNoRGF0YSh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIHRydWUpO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoc3RhdGUuZmVlZFVybHMuYW5zd2Vycywge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJywgJ3F1ZXN0aW9uJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWxQYWdlcyA9IHJlc3BvbnNlLmRhdGEubWV0YS5wYWdpbmF0aW9uLnRvdGFsX3BhZ2VzO1xuICAgICAgICAgICAgICAgIGNvbW1pdCgnYWRkQW5zd2VycycsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KCdpbmNyZW1lbnRQYWdlJyk7XG4gICAgICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0U2hvd2VkQW5zd2VyKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0sIHNob3dlZEFuc3dlcikge1xuICAgICAgICAgICAgaWYoc2hvd2VkQW5zd2VyID8gISBzaG93ZWRBbnN3ZXIuYm9keSA6IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoZ2V0VXJsKCdzZWxmJywgc2hvd2VkQW5zd2VyKSwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubHk6IFsnYm9keSddLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd2VkQW5zd2VyLmJvZHkgPSByZXNwb25zZS5kYXRhLmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPV0VEX0FOU1dFUiwgc2hvd2VkQW5zd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KCd1cGRhdGVSZXF1ZXN0aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XRURfQU5TV0VSLCBzaG93ZWRBbnN3ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZlZWQuanMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAyMHB4O1wiPlxuICAgICAgICAgICAgPGg0PjxhIDpocmVmPVwicXVlc3Rpb24gPyBnZXRVcmwoJ3NlbGZfaHRtbCcsIHF1ZXN0aW9uKSA6ICcnXCI+e3sgcXVlc3Rpb24gPyBxdWVzdGlvbi50aXRsZSA6ICcnIH19PC9hPjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cInNob3dRdWVzdGlvbkRldGFpbCA/ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsJyA6ICdhbnN3ZXJDcmVhdGVGb3JtLXF1ZXN0aW9uRGV0YWlsIHNocmlua2VkJ1wiIEBjbGljaz1cInNob3dRdWVzdGlvbkRldGFpbCA9ICFzaG93UXVlc3Rpb25EZXRhaWxcIj5cbiAgICAgICAgICAgICAgICB7eyBxdWVzdGlvbiA/IHF1ZXN0aW9uLmJvZHkgOiAnJyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCIkdmllbmRlci50cmVhc3VyZS51c2VyID8gZ2V0VXJsKCdhdmF0YXInLCAkdmllbmRlci50cmVhc3VyZS51c2VyKSA6ICcnXCIgYWx0PVwiXCIgY2xhc3M9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdmllbmRlci50cmVhc3VyZS51c2VyID8gJHZpZW5kZXIudHJlYXN1cmUudXNlci5uYW1lIDogJycgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlci1jcmVhdGUtZWRpdG9yXCIgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiB0eXBlPVwic3VibWl0XCIgQGNsaWNrPVwiYW5zd2VyKCRldmVudClcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1F1ZXN0aW9uRGV0YWlsOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lZGl0b3IuY29udGVudDtcbiAgICAgICAgfSxcblxuICAgICAgICBxdWVzdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lZGl0b3IucXVlc3Rpb247XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHF1ZXN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UXVlc3Rpb25EZXRhaWwgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGxldCBwb3BPdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm90ZS1wb3BvdmVyJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3BPdmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IHBvcE92ZXJbaV07XG4gICAgICAgICAgICBwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoc2VsZi4kcmVmcy5lZGl0b3IpLnN1bW1lcm5vdGUoe1xuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICAgICAgICAgWydzdHlsZScsIFsnYm9sZCcsICdpdGFsaWMnXV0sXG4gICAgICAgICAgICAgICAgICAgIFsncGFyYScsIFsndWwnLCAnb2wnXV0sXG4gICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnXV0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKGNvbnRlbnRzLCAkZWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHN0b3JlLmNvbW1pdCgnZWRpdG9yLycgKyB0eXBlcy5VUERBVEVfRURJVE9SX0NPTlRFTlQsIGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ29uLWNoYW5nZScsIGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZWRpdG9yLycgKyB0eXBlcy5TRVRfRURJVE9SX0VMRU1FTlQsICQoc2VsZi4kcmVmcy5lZGl0b3IpKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhbnN3ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgaWYoZXZlbnQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmKHNlbGYucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggISBzZWxmLmNvbnRlbnQuYm9keSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzZWxmLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdhbnN3ZXJzJywgdGhpcy5xdWVzdGlvbikgKyAnP3dpdGg9b3duZXInLCBzZWxmLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnYW5zd2VyLXBvc3RlZCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc3RvcmUuY29tbWl0KCdlZGl0b3IvJyArIHR5cGVzLlVQREFURV9FRElUT1JfQ09OVEVOVCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5jb21taXQoJ3F1ZXN0aW9uTGlzdC8nICsgdHlwZXMuU0VUX0FTX0FOU1dFUkVELCBzZWxmLnF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoc2VsZi4kcmVmcy5lZGl0b3IpLnN1bW1lcm5vdGUoJ2NvZGUnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZVF1ZXN0aW9uRGV0YWlsKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UXVlc3Rpb25EZXRhaWwgPSAhIHRoaXMuc2hvd1F1ZXN0aW9uRGV0YWlsO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZT82ZDA5ZTcwYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyQ3JlYXRlTW9kYWwtb3ZlcmxheVwiIEBjbGljaz1cImhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXCIgdi1zaG93PVwic2hvd01vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJDcmVhdGVNb2RhbFwiIEBjbGljaz1cIm1vZGFsQ2xpY2tIYW5kbGUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlckNyZWF0ZU1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YW5zd2VyLWNyZWF0ZS1mb3JtIHJlZj1cImZvcm1cIiBAYW5zd2VyLXBvc3RlZD1cImhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgkZXZlbnQpXCI+PC9hbnN3ZXItY3JlYXRlLWZvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1hY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuPlg8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3Quc2hvd0Fuc3dlckNyZWF0ZU1vZGFsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZih0aGlzLnNob3dNb2RhbCkge1xuICAgICAgICAgICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoX3RoaXMuJHJlZnMuZm9ybS4kcmVmcy5lZGl0b3IpLnN1bW1lcm5vdGUoJ2VkaXRvci5mb2N1cycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbW9kYWxDbGlja0hhbmRsZShldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZUFuc3dlckNyZWF0ZU1vZGFsKGFuc3dlcikge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdxdWVzdGlvbkxpc3QvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwsIGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2ZlZWQvYWRkQW5zd2VyJywgYW5zd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci1jcmVhdGUtbW9kYWwudnVlP2JmZDI2YmZjIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IHJlZj1cIm1vZGFsXCIgY2xhc3M9XCJhbnN3ZXItc2hvdy1tb2RhbC1vdmVybGF5XCIgQGNsaWNrPVwiaGlkZUFuc3dlckNyZWF0ZU1vZGFsKClcIiB2LXNob3c9XCJzaG93QW5zd2VyTW9kYWxcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYW5zd2VyLXNob3ctbW9kYWxcIiBAY2xpY2s9XCJtb2RhbENsaWNrSGFuZGxlKCRldmVudClcIj5cblx0XHRcdDxhbnN3ZXIgOmFuc3dlcj1cImFuc3dlclwiIHYtaWY9XCJhbnN3ZXIgPyBhbnN3ZXIuYm9keSA6IGZhbHNlXCI+PC9hbnN3ZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIgc3R5bGU9XCJwb3NpdGlvbjogZml4ZWQ7IHRvcDogY2FsYyg1MCUgLSA3NXB4KTsgbGVmdDogY2FsYyg1MCUgLSAxOHB4KTtcIiB2LWVsc2U+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLXBhdGNoXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1hY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuPlg8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydhbnN3ZXInXSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICBcdGFuc3dlcigpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQuc2hvd2VkQW5zd2VyO1xuICAgIFx0fSxcblxuICAgIFx0c2hvd0Fuc3dlck1vZGFsKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZmVlZC5zaG93QW5zd2VyTW9kYWw7XG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbW9kYWxDbGlja0hhbmRsZShldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZUFuc3dlckNyZWF0ZU1vZGFsKCkge1xuICAgICAgICBcdCQodGhpcy4kcmVmcy5tb2RhbCkuc2Nyb2xsVG9wKDApO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdmZWVkLycgKyB0eXBlcy5TRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci1zaG93LW1vZGFsLnZ1ZT9iZjc5ZGVkYSIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyB1LW1hcmdpbi0tbm9uZSBhbnN3ZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIHMxMlwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCIgdi1pZj1cImFuc3dlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCIgdi1pZj1cInNob3dRdWVzdGlvblwiPlxuXHRcdFx0XHRcdFx0PGg0PjxhIDpocmVmPVwiZ2V0VXJsKCdzZWxmX2h0bWwnLCBhbnN3ZXIucXVlc3Rpb24pXCI+e3sgYW5zd2VyLnF1ZXN0aW9uLnRpdGxlIH19PC9hPjwvaDQ+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDxociBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDMwcHg7XCI+XG5cdFx0XHRcdCAgXHQ8dWwgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgOnNyYz1cImdldFVybCgnYXZhdGFyJywgYW5zd2VyLm93bmVyKVwiIGFsdD1cIlwiIGNsYXNzPVwiY2lyY2xlXCI+XG5cdFx0XHRcdFx0XHRcdDxhIDpocmVmPVwiZ2V0VXJsKCdzZWxmX2h0bWwnLCBhbnN3ZXIub3duZXIpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgYW5zd2VyLm93bmVyLm5hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYW5zd2VyLWNvbnRlbnRcIiB2LWh0bWw9XCJhbnN3ZXIuYm9keVwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XG5cdFx0XHQgICAgXHQ8c3BhbiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBAY2xpY2s9XCJ1cHZvdGVcIj5cblx0XHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgdXB2b3RlQ291bnQgfX08L3NwYW4+XG5cdFx0XHRcdCAgICBcdDxhIDpzdHlsZT1cIiEgYW5zd2VyLnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfdXA8L2E+XG5cdFx0XHQgICAgXHQ8L3NwYW4+XG5cdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgQGNsaWNrPVwiZG93bnZvdGVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl9kb3duPC9hPlxuXHRcdFx0ICAgIFx0PGEgc3R5bGU9XCJjb2xvcjogZ3JleTtcIiBAY2xpY2s9XCJ0b2dnbGVDb21tZW50cygpXCI+Q29tbWVudHMgPHNwYW4+KHt7IGNvbW1lbnRDb3VudCB9fSk8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdDxjb21tZW50LWxpc3QgOmNvbW1lbnRzLXVybD1cImdldFVybCgnY29tbWVudHMnLCBhbnN3ZXIpXCIgQGNvbW1lbnQtcG9zdGVkPVwiaW5jcmVtZW50Q29tbWVudENvdW50KClcIiB2LWlmPVwic2hvd0NvbW1lbnRzXCI+PC9jb21tZW50LWxpc3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgIFx0YW5zd2VyOiB7XG4gICAgXHRcdHR5cGU6IE9iamVjdCxcbiAgICBcdFx0ZGVmYXVsdDogbnVsbCxcbiAgICBcdH0sXG4gICAgXHRzaG93UXVlc3Rpb246IHtcbiAgICBcdFx0dHlwZTogQm9vbGVhbixcbiAgICBcdFx0ZGVmYXVsdDogdHJ1ZSxcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbcmVxdWlyZSgndmllbmRlcl9jb3JlL2pzL21peGlucy91cmxIZWxwZXInKV0sXG5cbiAgICBkYXRhKCkge1xuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0cmVxdWVzdGluZzogZmFsc2UsXG4gICAgXHRcdHNob3dDb21tZW50czogZmFsc2VcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICBcdHVwdm90ZUNvdW50KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy5hbnN3ZXIgPyB0aGlzLmFuc3dlci51cHZvdGVfY291bnQgOiAwO1xuICAgIFx0fSxcblxuICAgIFx0Y29tbWVudENvdW50KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy5hbnN3ZXIgPyB0aGlzLmFuc3dlci5jb21tZW50X2NvdW50IDogMDtcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgIFx0dXB2b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmdldFVybCgndXB2b3RlcycsIHRoaXMuYW5zd2VyKSwge30pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgKz0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSB0cnVlO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjA0KSB7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCAtPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHRkb3dudm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ2Rvd252b3RlcycsIHRoaXMuYW5zd2VyKSwge30pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG5cdFx0XHQgICAgICAgIFx0aWYoX3RoaXMuYW5zd2VyLnVwdm90ZWQpIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IHRydWU7XG5cdFx0XHQgICAgICAgIH1cblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdHRvZ2dsZUNvbW1lbnRzKCkge1xuICAgIFx0XHR0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICBcdH0sXG5cbiAgICBcdGluY3JlbWVudENvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0dGhpcy5jb21tZW50Q291bnQrKztcbiAgICBcdH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXIudnVlPzM5ZWNjOGJlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgPGFuc3dlci1wcmV2aWV3IDphbnN3ZXI9XCJhbnN3ZXJcIiB2LWZvcj1cImFuc3dlciBpbiBhbnN3ZXJzXCIgdi1pZj1cImFuc3dlcnNbMF0gPyBhbnN3ZXJzWzBdLnByZXZpZXcgOiB0cnVlXCIgOnNob3ctcXVlc3Rpb249XCJvcHRpb25zLmFuc3dlcnMuc2hvd1F1ZXN0aW9uXCI+PC9hbnN3ZXItcHJldmlldz5cbiAgICAgICAgPGFuc3dlciA6YW5zd2VyPVwiYW5zd2VyXCIgdi1mb3I9XCJhbnN3ZXIgaW4gYW5zd2Vyc1wiIHYtZWxzZT48L2Fuc3dlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZWxvYWRlciBwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIiB2LXNob3c9XCJyZXF1ZXN0aW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLXBhdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHYtc2hvdz1cIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMDtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIEBjbGljaz1cImZldGNoRGF0YSgpXCI+TG9hZCBtb3JlPC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGZlZWRVcmxzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93UXVlc3Rpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHJlcXVlc3RpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZmVlZC5yZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFuc3dlcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZmVlZC5hbnN3ZXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZmVlZC5wYWdlIC0gMTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3RhbFBhZ2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQudG90YWxQYWdlcztcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdmZWVkL3NldEZlZWRVcmwnLCB0aGlzLmZlZWRVcmxzKTtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZmVlZC9mZXRjaERhdGEnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZlZWQtbGlzdC52dWU/NTQ5ZDlkNjciLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgdS1tYXJnaW4tLW5vbmUgcXVlc3Rpb25cIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIHMxMlwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCIgdi1pZj1cIiEgKHF1ZXN0aW9uT2JqID8gcXVlc3Rpb25PYmouZG93bnZvdGVkIDogdHJ1ZSlcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPjxoND48YSA6aHJlZj1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBxdWVzdGlvbk9iailcIj57eyBxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLnRpdGxlIDogJycgfX08L2E+PC9oND48L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiZXhwYW5kUXVlc3Rpb25EZXRhaWwgPyAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCcgOiAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCBzaHJpbmtlZCdcIiBAY2xpY2s9XCJleHBhbmRRdWVzdGlvbkRldGFpbCA9ICFleHBhbmRRdWVzdGlvbkRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmJvZHkgOiAnJyB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cblx0XHRcdCAgICBcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJzaG93QW5zd2VyQ3JlYXRlTW9kYWwoKVwiXG5cdFx0XHQgICAgXHRcdHYtaWY9XCIgISAocXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai5hbnN3ZXJlZCA6IHRydWUpXCI+XG5cdFx0XHQgICAgXHRcdEFuc3dlclxuXHRcdFx0ICAgIFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJncmV5LXRleHQgZGFya2VuLTNcIiB2LWVsc2U+XG5cdFx0XHRcdFx0XHRBbnN3ZXJlZFxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdCAgICBcdDxhIEBjbGljaz1cImRvd252b3RlXCI+RG93bnZvdGU8L2E+XG5cdFx0XHQgICAgXHQ8YSBAY2xpY2s9XCJ0b2dnbGVDb21tZW50cygpXCI+Q29tbWVudHMgPHNwYW4+KHt7IGNvbW1lbnRDb3VudCB9fSk8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdDxjb21tZW50LWxpc3QgOmNvbW1lbnRzLXVybD1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdjb21tZW50cycsIHF1ZXN0aW9uT2JqKVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCIgdi1pZj1cInF1ZXN0aW9uT2JqID8gcXVlc3Rpb25PYmouZG93bnZvdGVkIDogZmFsc2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdDxzdHJvbmc+WW91IGRvd252b3RlZCB0aGlzIHF1ZXN0aW9uPC9zdHJvbmc+XG5cdFx0XHRcdFx0PHA+RG93bnZvdGluZyBsb3ctcXVhbGl0eSBjb250ZW50IGltcHJvdmVzIFZpZW5kZXIgZm9yIGV2ZXJ5b25lLjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuXHRcdFx0ICAgIFx0PGEgQGNsaWNrPVwiZG93bnZvdGVcIj5VbmRvPC9hPlxuXHRcdFx0ICAgIFx0PCEtLSA8YSBAY2xpY2s9XCJkb3dudm90ZVwiPlJlcG9ydDwvYT4gLS0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ3F1ZXN0aW9uJywgJ3VybCcsICdzaG93RGV0YWlsJ10sXG5cbiAgICBkYXRhKCkge1xuICAgIFx0cmV0dXJuIHtcbiAgICAgICAgICAgIGV4cGFuZFF1ZXN0aW9uRGV0YWlsOiBmYWxzZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uT2JqOiBudWxsLFxuICAgICAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgICAgICB1cHZvdGVDb3VudDogMCxcbiAgICAgICAgICAgIGNvbW1lbnRDb3VudDogMCxcbiAgICAgICAgICAgIHNob3dDb21tZW50czogZmFsc2UsXG4gICAgICAgICAgICBzdGF0aWNQcmVsb2FkZXJzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWVzdGlvbi1zdGF0aWMtcHJlbG9hZGVyJyksXG4gICAgICAgICAgICBhbnN3ZXJUZXh0OiB7XG4gICAgICAgICAgICAgICAgYm9keTogbnVsbFxuICAgICAgICAgICAgfVxuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgIFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBpZiB0aGUgYXJndW1lbnQgaXMgYW4gcXVlc3Rpb24gb2JqZWN0LCB1c2UgaXQuXG4gICAgICAgIC8vIGlmIHRoZSBhcmd1bWVudCBpcyBhbiB1cmwsIGZldGggcXVlc3Rpb24gZnJvbSB0aGVyZS5cbiAgICBcdGlmIChfdGhpcy5xdWVzdGlvbikge1xuICAgIFx0XHRfdGhpcy5xdWVzdGlvbk9iaiA9IF90aGlzLnF1ZXN0aW9uO1xuXHQgICAgXHRfdGhpcy51cHZvdGVDb3VudCA9IF90aGlzLnF1ZXN0aW9uLnVwdm90ZV9jb3VudDtcblx0ICAgIFx0X3RoaXMuY29tbWVudENvdW50ID0gX3RoaXMucXVlc3Rpb24uY29tbWVudF9jb3VudDtcbiAgICAgICAgICAgIF90aGlzLmhpZGVTdGF0aWNQcmVsb2FkZXJzKCk7XG4gICAgXHR9IGVsc2UgaWYgKF90aGlzLnVybCkge1xuICAgIFx0XHR2YXIgdXJsID0gX3RoaXMudXJsO1xuXG5cdFx0XHRheGlvcy5nZXQodXJsLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGg6IFsnb3duZXInXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucXVlc3Rpb25PYmogPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIF90aGlzLnVwdm90ZUNvdW50ID0gcmVzcG9uc2UuZGF0YS51cHZvdGVfY291bnQ7XG4gICAgXHRcdFx0X3RoaXMuY29tbWVudENvdW50ID0gcmVzcG9uc2UuZGF0YS5jb21tZW50X2NvdW50O1xuICAgICAgICAgICAgICAgIF90aGlzLmhpZGVTdGF0aWNQcmVsb2FkZXJzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0dGhyb3cgJ3F1ZXN0aW9uIGFuZCB1cmwgbm90IGRlZmluZWQuJztcbiAgICBcdH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGljUHJlbG9hZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdGF0aWNQcmVsb2FkZXJzW2ldLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcwJztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhpZGVTdGF0aWNQcmVsb2FkZXJzKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRpY1ByZWxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1ByZWxvYWRlcnNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgIFx0c2hvd0Fuc3dlckNyZWF0ZU1vZGFsKCkge1xuICAgIFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3F1ZXN0aW9uTGlzdC8nICsgdHlwZXMuU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCwgdHJ1ZSk7XG4gICAgXHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdlZGl0b3Ivc2V0UXVlc3Rpb24nLCB7XG4gICAgXHRcdFx0cXVlc3Rpb246IHRoaXMucXVlc3Rpb25PYmosXG4gICAgXHRcdFx0YW5zd2VyVGV4dDogdGhpcy5hbnN3ZXJUZXh0XG4gICAgXHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0ZG93bnZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2Rvd252b3RlcycsIF90aGlzLnF1ZXN0aW9uT2JqKSwge30pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0ICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG5cdFx0XHRcdCAgICBcdF90aGlzLnF1ZXN0aW9uT2JqLmRvd252b3RlZCA9IHRydWU7XG5cdFx0XHQgICAgICAgIH1cblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgXHRfdGhpcy5xdWVzdGlvbk9iai5kb3dudm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0dG9nZ2xlQ29tbWVudHMoKSB7XG4gICAgXHRcdHRoaXMuc2hvd0NvbW1lbnRzID0gIXRoaXMuc2hvd0NvbW1lbnRzO1xuICAgIFx0fSxcblxuICAgIFx0aW5jcmVtZW50Q29tbWVudENvdW50KCkge1xuICAgIFx0XHR0aGlzLmNvbW1lbnRDb3VudCsrO1xuICAgIFx0fVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHF1ZXN0aW9uLnZ1ZT9lMWNiNzBkYyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03N2FkZDJjOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03N2FkZDJjOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc3YWRkMmM4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWQzYjliMjRlIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci1jcmVhdGUtbW9kYWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWQzYjliMjRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDNiOWIyNGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01MmY1MzhkYSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLXNob3ctbW9kYWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci1zaG93LW1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01MmY1MzhkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTUyZjUzOGRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDc1NGQzYzAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDc1NGQzYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNzU0ZDNjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWVcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmVlZC1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01MjllNTcwYSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZmVlZC1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mZWVkLWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZmVlZC1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01MjllNTcwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTUyOWU1NzBhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9xdWVzdGlvbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzNmYzk4NzAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3F1ZXN0aW9uLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzNmYzk4NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03M2ZjOTg3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgdS1tYXJnaW4tLW5vbmUgYW5zd2VyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHMxMlwiXG4gIH0sIFsoX3ZtLmFuc3dlcikgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgfSwgWyhfdm0uc2hvd1F1ZXN0aW9uKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX2MoJ2g0JywgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmFuc3dlci5xdWVzdGlvbilcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIucXVlc3Rpb24udGl0bGUpKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjMwcHhcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS5hbnN3ZXIub3duZXIpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmFuc3dlci5vd25lcilcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5vd25lci5uYW1lKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItY29udGVudFwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmFuc3dlci5ib2R5KVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvblwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS51cHZvdGVcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiNXB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51cHZvdGVDb3VudCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKVxuICB9LCBbX3ZtLl92KFwidGh1bWJfdXBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmFuc3dlci5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl9kb3duXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImNvbG9yXCI6IFwiZ3JleVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLmFuc3dlcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNvbW1lbnQtcG9zdGVkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaW5jcmVtZW50Q29tbWVudENvdW50KClcbiAgICAgIH1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKV0pIDogX3ZtLl9lKCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTA3NTRkM2MwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wNzU0ZDNjMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHt9LCBbX3ZtLl9sKChfdm0uYW5zd2VycyksIGZ1bmN0aW9uKGFuc3dlcikge1xuICAgIHJldHVybiAoX3ZtLmFuc3dlcnNbMF0gPyBfdm0uYW5zd2Vyc1swXS5wcmV2aWV3IDogdHJ1ZSkgPyBfYygnYW5zd2VyLXByZXZpZXcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImFuc3dlclwiOiBhbnN3ZXIsXG4gICAgICAgIFwic2hvdy1xdWVzdGlvblwiOiBfdm0ub3B0aW9ucy5hbnN3ZXJzLnNob3dRdWVzdGlvblxuICAgICAgfVxuICAgIH0pIDogX3ZtLl9sKChfdm0uYW5zd2VycyksIGZ1bmN0aW9uKGFuc3dlcikge1xuICAgICAgcmV0dXJuIF9jKCdhbnN3ZXInLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJhbnN3ZXJcIjogYW5zd2VyXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlcXVlc3RpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0aW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCJcbiAgfSwgW192bS5fbSgwKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ucmVxdWVzdGluZyAmJiBfdm0ucGFnZSA8IF92bS50b3RhbFBhZ2VzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZldGNoRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9hZCBtb3JlXCIpXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIGxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhcC1wYXRjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01MjllNTcwYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTI5ZTU3MGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dBbnN3ZXJNb2RhbCksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dBbnN3ZXJNb2RhbFwiXG4gICAgfV0sXG4gICAgcmVmOiBcIm1vZGFsXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLXNob3ctbW9kYWwtb3ZlcmxheVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGlkZUFuc3dlckNyZWF0ZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1zaG93LW1vZGFsXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5tb2RhbENsaWNrSGFuZGxlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoX3ZtLmFuc3dlciA/IF92bS5hbnN3ZXIuYm9keSA6IGZhbHNlKSA/IF9jKCdhbnN3ZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYW5zd2VyXCI6IF92bS5hbnN3ZXJcbiAgICB9XG4gIH0pIDogX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcmVsb2FkZXItd3JhcHBlciBzbWFsbCBhY3RpdmVcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICBcInRvcFwiOiBcImNhbGMoNTAlIC0gNzVweClcIixcbiAgICAgIFwibGVmdFwiOiBcImNhbGMoNTAlIC0gMThweClcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIGxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdhcC1wYXRjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIlhcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTJmNTM4ZGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTUyZjUzOGRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHUtbWFyZ2luLS1ub25lIHF1ZXN0aW9uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHMxMlwiXG4gIH0sIFsoIShfdm0ucXVlc3Rpb25PYmogPyBfdm0ucXVlc3Rpb25PYmouZG93bnZvdGVkIDogdHJ1ZSkpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW19jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLnF1ZXN0aW9uT2JqKVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLnRpdGxlIDogJycpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBfdm0uZXhwYW5kUXVlc3Rpb25EZXRhaWwgPyAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCcgOiAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCBzaHJpbmtlZCcsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5leHBhbmRRdWVzdGlvbkRldGFpbCA9ICFfdm0uZXhwYW5kUXVlc3Rpb25EZXRhaWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai5ib2R5IDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb25cIlxuICB9LCBbKCEoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLmFuc3dlcmVkIDogdHJ1ZSkpID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNob3dBbnN3ZXJDcmVhdGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0ICAgIFxcdFxcdEFuc3dlclxcblxcdFxcdFxcdCAgICBcXHRcIildKSA6IF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktdGV4dCBkYXJrZW4tM1wiXG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRBbnN3ZXJlZFxcblxcdFxcdFxcdFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb3dudm90ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnY29tbWVudHMnLCBfdm0ucXVlc3Rpb25PYmopXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IGZhbHNlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdhJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcIlVuZG9cIildKV0pXSkgOiBfdm0uX2UoKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIllvdSBkb3dudm90ZWQgdGhpcyBxdWVzdGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJEb3dudm90aW5nIGxvdy1xdWFsaXR5IGNvbnRlbnQgaW1wcm92ZXMgVmllbmRlciBmb3IgZXZlcnlvbmUuXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTczZmM5ODcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03M2ZjOTg3MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjIwcHhcIlxuICAgIH1cbiAgfSwgW19jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5xdWVzdGlvbiA/IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5xdWVzdGlvbikgOiAnJ1xuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnF1ZXN0aW9uID8gX3ZtLnF1ZXN0aW9uLnRpdGxlIDogJycpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IF92bS5zaG93UXVlc3Rpb25EZXRhaWwgPyAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCcgOiAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCBzaHJpbmtlZCcsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zaG93UXVlc3Rpb25EZXRhaWwgPSAhX3ZtLnNob3dRdWVzdGlvbkRldGFpbFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5xdWVzdGlvbiA/IF92bS5xdWVzdGlvbi5ib2R5IDogJycpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb25cIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIgPyBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uJHZpZW5kZXIudHJlYXN1cmUudXNlcikgOiAnJyxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIgPyBfdm0uJHZpZW5kZXIudHJlYXN1cmUudXNlci5uYW1lIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcImVkaXRvclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1jcmVhdGUtZWRpdG9yXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFuc3dlcigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03N2FkZDJjOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzdhZGQyYzghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd01vZGFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd01vZGFsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXJDcmVhdGVNb2RhbC1vdmVybGF5XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5oaWRlQW5zd2VyQ3JlYXRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyQ3JlYXRlTW9kYWxcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm1vZGFsQ2xpY2tIYW5kbGUoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyQ3JlYXRlTW9kYWwtY29udGVudFwiXG4gIH0sIFtfYygnYW5zd2VyLWNyZWF0ZS1mb3JtJywge1xuICAgIHJlZjogXCJmb3JtXCIsXG4gICAgb246IHtcbiAgICAgIFwiYW5zd2VyLXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1hY3Rpb25cIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiWFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kM2I5YjI0ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZDNiOWIyNGUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRzZWxlY3RlZE1lbnU6IG51bGwsXG4gICAgICAgICAgICBub3RNb3VudGVkOiB0cnVlLFxuICAgICAgICAgICAgbmF2OiBudWxsLFxuICAgICAgICAgICAgc2Nyb2xsU3RvcmFnZU5hbWU6IG51bGwsXG4gICAgXHR9O1xuICAgIH0sXG5cblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdFRhYihuYXYgPSBudWxsLCBzY3JvbGxTdG9yYWdlTmFtZSA9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICggISBuYXYpIHRocm93ICd0aGlzLm5hdiBpcyBub3QgZGVmaW5lZCc7XG4gICAgICAgICAgICBpZiAoICEgc2Nyb2xsU3RvcmFnZU5hbWUpIHRocm93ICd0aGlzLnNjcm9sbFN0b3JhZ2VOYW1lIGlzIG5vdCBkZWZpbmVkJztcblxuICAgICAgICAgICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFN0b3JhZ2VOYW1lID0gc2Nyb2xsU3RvcmFnZU5hbWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWVudSA9IHBhcnNlSW50KHRoaXMubmF2LmdldEF0dHJpYnV0ZSgnaW5pdGlhbC1tZW51JyksIDEwKTtcblxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuc2Nyb2xsU3RvcmFnZU5hbWV9LnNjcm9sbExlZnRgKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2LnNjcm9sbExlZnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLnNjcm9sbFN0b3JhZ2VOYW1lfS5zY3JvbGxMZWZ0YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2LnNjcm9sbExlZnQgPSA2NSAqIHNlbGVjdGVkTWVudTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TWVudShzZWxlY3RlZE1lbnUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5wcm9maWxlQ29udGVudE1vYmlsZSlcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnByb2ZpbGVDb250ZW50TW9iaWxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9LFxuXG4gICAgICAgIGN1cnJlbnRNZW51KG1lbnUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTWVudSA9PT0gbWVudTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRDdXJyZW50TWVudShzZWxlY3RlZE1lbnUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuc2Nyb2xsU3RvcmFnZU5hbWV9LnNjcm9sbExlZnRgLCB0aGlzLm5hdi5zY3JvbGxMZWZ0KTtcbiAgICBcdFx0dGhpcy5zZWxlY3RlZE1lbnUgPSBzZWxlY3RlZE1lbnU7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZpZ2F0aW9uTGluaycpW3NlbGVjdGVkTWVudV0uZ2V0QXR0cmlidXRlKCdwYWdlJyk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLm5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZpZ2F0aW9uTGluaycpW3NlbGVjdGVkTWVudV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeSA/IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA6IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgUGFnZTogcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgVXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgfSwgcGFnZSwgdXJsKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmdhKSB7XG4gICAgICAgICAgICAgICAgZ2EoJ3NldCcsICdwYWdlJywgcmVsYXRpdmVVcmwodXJsKSk7XG4gICAgICAgICAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcbiAgICAgICAgICAgIH1cbiAgICBcdH0sXG5cbiAgICAgICAgaGlkZUJlZm9yZU1vdW50ZWRQcmVsb2FkZXJzKCkge1xuICAgICAgICAgICAgdGhpcy5ub3RNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvbWl4aW5zL2NoYW5nZWFibGVNZW51TWl4aW4uanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBwYWdlOiAwLFxuICAgICAgICB0b3RhbFBhZ2VzOiAxLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgZm9sbG93ZXJzOiBbXSxcbiAgICAgICAgdXJsOiAnJyxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuQUREX0ZPTExPV0VSU10gKHN0YXRlLCBmb2xsb3dlcnMpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2VycyA9IHN0YXRlLmZvbGxvd2Vycy5jb25jYXQoZm9sbG93ZXJzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1VSTF0gKHN0YXRlLCB1cmwpIHtcbiAgICAgICAgICAgIHN0YXRlLnVybCA9IHVybDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGZldGNoRGF0YSh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9KSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdGluZyB8fCBzdGF0ZS5wYWdlICsgMSA+IHN0YXRlLnRvdGFsUGFnZXMpIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChzdGF0ZS51cmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogc3RhdGUucGFnZSArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWxQYWdlcyA9IHJlc3BvbnNlLmRhdGEubWV0YS5wYWdpbmF0aW9uLnRvdGFsX3BhZ2VzO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5BRERfRk9MTE9XRVJTLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnBhZ2UrKztcbiAgICAgICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0KHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2VycyA9IFtdO1xuICAgICAgICAgICAgc3RhdGUucGFnZSA9IDE7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZm9sbG93ZXJMaXN0LmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgZm9sbG93ZXJDb3VudDogMCxcbiAgICAgICAgZm9sbG93aW5nQ291bnQ6IDAsXG4gICAgICAgIHRvcGljQ291bnQ6IDAsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgW3R5cGVzLlNFVF9GT0xMT1dFUl9DT1VOVF0gKHN0YXRlLCBmb2xsb3dlckNvdW50KSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dlckNvdW50ID0gZm9sbG93ZXJDb3VudDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuSU5DUkVNRU5UX0ZPTExPV0VSX0NPVU5UXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2VyQ291bnQrKztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuREVDUkVNRU5UX0ZPTExPV0VSX0NPVU5UXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2VyQ291bnQtLTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX0ZPTExPV0lOR19DT1VOVF0gKHN0YXRlLCBmb2xsb3dpbmdDb3VudCkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93aW5nQ291bnQgPSBmb2xsb3dpbmdDb3VudDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuSU5DUkVNRU5UX0ZPTExPV0lOR19DT1VOVF0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dpbmdDb3VudCsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5ERUNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2luZ0NvdW50LS07XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9UT1BJQ19DT1VOVF0gKHN0YXRlLCB0b3BpY0NvdW50KSB7XG4gICAgICAgICAgICBzdGF0ZS50b3BpY0NvdW50ID0gdG9waWNDb3VudDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuSU5DUkVNRU5UX1RPUElDX0NPVU5UXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvcGljQ291bnQrKztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuREVDUkVNRU5UX1RPUElDX0NPVU5UXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvcGljQ291bnQtLTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvdXNlclN0YXRzLmpzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiZm9sbG93QnV0dG9uXCI+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cImZvbGxvdygpXCIgdi1pZj1cIiEgdXNlci5mb2xsb3dlZFwiPkZvbGxvdzwvYnV0dG9uPlxuXHRcdDxidXR0b24gY2xhc3M9XCJidG4gZm9sbG93ZWRcIiBAY2xpY2s9XCJ1bmZvbGxvdygpXCIgdi1lbHNlPlVuZm9sbG93PC9idXR0b24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd1cmwnLCAnZm9sbG93ZWVfaWQnLCAnZm9sbG93ZWQnXSxcblxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcblxuXHRcdFx0dXNlcjoge1xuXHRcdFx0XHRmb2xsb3dlZDogZmFsc2UsXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy51c2VyLmZvbGxvd2VkID0gdGhpcy5mb2xsb3dlZCA/IHRoaXMuZm9sbG93ZWQgOiBmYWxzZTtcblx0fSxcblxuXHRtb3VudGVkKCkge1xuXHRcdHRoaXMuJGVtaXQoJ21vdW50ZWQnKTtcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0Zm9sbG93KCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QoX3RoaXMudXJsLCB7J2ZvbGxvd2VlX2lkJzogX3RoaXMuZm9sbG93ZWVfaWR9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRfdGhpcy51c2VyLmZvbGxvd2VkID0gISBfdGhpcy51c2VyLmZvbGxvd2VkO1xuXG5cdFx0XHRcdFx0aWYgKF90aGlzLnVzZXIuZm9sbG93ZWQpIHtcblx0XHRcdFx0XHRcdF90aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuSU5DUkVNRU5UX0ZPTExPV0VSX0NPVU5UKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X3RoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5ERUNSRU1FTlRfRk9MTE9XRVJfQ09VTlQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHR1bmZvbGxvdygpIHtcblx0XHRcdHRoaXMuZm9sbG93KCk7XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvbGxvdy1idXR0b24udnVlPzVlNzBmYzRhIiwiPHRlbXBsYXRlPlxuXHQ8c3BhbiBjbGFzcz1cInByb2ZpbGVOYXZpZ2F0aW9uLXZhbHVlXCI+e3sgZm9sbG93ZXJDb3VudHggfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2ZvbGxvd2VyQ291bnQnXSxcblxuXHRjb21wdXRlZDoge1xuXHRcdGZvbGxvd2VyQ291bnR4KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJTdGF0cy5mb2xsb3dlckNvdW50O1xuXHRcdH1cblx0fSxcblxuXHRtb3VudGVkKCkge1xuXHRcdHRoaXMuJGVtaXQoJ21vdW50ZWQnKTtcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuU0VUX0ZPTExPV0VSX0NPVU5ULCB0aGlzLmZvbGxvd2VyQ291bnQpO1xuXHR9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb2xsb3dlci1jb3VudC52dWU/OTQ4YzFlYTQiLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHVzZXItY2FyZCB2LWZvcj1cInVzZXIgaW4gZm9sbG93ZXJzXCIgOnVzZXI9XCJ1c2VyXCI+PC91c2VyLWNhcmQ+XG4gICAgICAgIDxidXR0b24gdi1zaG93PVwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OiAwO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiZmV0Y2hEYXRhKClcIj5Mb2FkIG1vcmU8L2J1dHRvbj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd1cmwnXSxcblxuXHRjb21wdXRlZDogT2JqZWN0LmFzc2lnbihcblx0XHRtYXBTdGF0ZSgnZm9sbG93ZXJMaXN0JywgW1xuXHRcdCAgJ3JlcXVlc3RpbmcnLFxuXHRcdCAgJ2ZvbGxvd2VycycsXG5cdFx0ICAncGFnZScsXG5cdFx0ICAndG90YWxQYWdlcycsXG5cdFx0XSlcblx0KSxcblxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZm9sbG93ZXJMaXN0LycgKyB0eXBlcy5TRVRfVVJMLCB0aGlzLnVybCk7XG5cdFx0dGhpcy5mZXRjaERhdGEoKTtcblx0fSxcblxuXHRtZXRob2RzOiBPYmplY3QuYXNzaWduKFxuXHRcdG1hcEFjdGlvbnMoJ2ZvbGxvd2VyTGlzdCcsIFtcblx0XHRcdCdmZXRjaERhdGEnLFxuXHRcdF0pXG5cdCksXG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb2xsb3dlci1saXN0LnZ1ZT84NjIxNDkwOCIsIjx0ZW1wbGF0ZT5cblx0PHNwYW4gY2xhc3M9XCJwcm9maWxlTmF2aWdhdGlvbi12YWx1ZVwiPnt7IGZvbGxvd2luZ0NvdW50eCB9fTwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsnZm9sbG93aW5nQ291bnQnXSxcblxuXHRjb21wdXRlZDoge1xuXHRcdGZvbGxvd2luZ0NvdW50eCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyU3RhdHMuZm9sbG93aW5nQ291bnQ7XG5cdFx0fVxuXHR9LFxuXG5cdG1vdW50ZWQoKSB7XG5cdFx0dGhpcy4kZW1pdCgnbW91bnRlZCcpO1xuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5TRVRfRk9MTE9XSU5HX0NPVU5ULCB0aGlzLmZvbGxvd2luZ0NvdW50KTtcblx0fVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9sbG93aW5nLWNvdW50LnZ1ZT8wZmJjMTcwMiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8dXNlci1jYXJkIHYtZm9yPVwidXNlciBpbiBmb2xsb3dpbmdzXCIgOnVzZXI9XCJ1c2VyXCI+PC91c2VyLWNhcmQ+XG4gICAgICAgIDxidXR0b24gdi1zaG93PVwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OiAwO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiZmV0Y2hEYXRhKClcIj5Mb2FkIG1vcmU8L2J1dHRvbj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd1cmwnXSxcblxuXHRjb21wdXRlZDogT2JqZWN0LmFzc2lnbihcblx0XHRtYXBTdGF0ZSgnZm9sbG93aW5nTGlzdCcsIFtcblx0XHQgICdyZXF1ZXN0aW5nJyxcblx0XHQgICdmb2xsb3dpbmdzJyxcblx0XHQgICdwYWdlJyxcblx0XHQgICd0b3RhbFBhZ2VzJyxcblx0XHRdKVxuXHQpLFxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdmb2xsb3dpbmdMaXN0LycgKyB0eXBlcy5TRVRfVVJMLCB0aGlzLnVybCk7XG5cdFx0dGhpcy5mZXRjaERhdGEoKTtcblx0fSxcblxuXHRtZXRob2RzOiBPYmplY3QuYXNzaWduKFxuXHRcdG1hcEFjdGlvbnMoJ2ZvbGxvd2luZ0xpc3QnLCBbXG5cdFx0XHQnZmV0Y2hEYXRhJyxcblx0XHRdKVxuXHQpLFxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9sbG93aW5nLWxpc3QudnVlPzFmYTYxNTAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidG9waWNDYXJkXCI+XG4gICAgPGltZyBjbGFzcz1cInRvcGljQ2FyZC10aHVtYm5haWxcIiA6c3JjPVwiJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3RodW1ibmFpbCcsIHRvcGljKVwiIGFsdD1cIlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b3BpY0NhcmQtbmFtZVwiPlxuICAgICAgPGEgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgdG9waWMpXCI+XG4gICAgICAgIHt7IHRvcGljLm5hbWUgfX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidG9waWNDYXJkLWFjdGlvblwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBmb2xsb3dCdXR0b25cIiB2LXNob3c9XCIhIGZvbGxvd2VkXCIgQGNsaWNrPVwiZm9sbG93KClcIj5Gb2xsb3c8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gdW5mb2xsb3dCdXR0b25cIiB2LXNob3c9XCJmb2xsb3dlZFwiIEBjbGljaz1cInVuZm9sbG93KClcIj5VbmZvbGxvdzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsndG9waWMnXSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICBmb2xsb3dlZDogdHJ1ZSxcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmZvbGxvd2VkID0gdGhpcy50b3BpYy5mb2xsb3dlZDtcbiAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGZvbGxvdygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgIGF4aW9zLnBvc3QoX3RoaXMuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2ZvbGxvdycsIF90aGlzLnRvcGljKSwgeyd0b3BpY19pZCc6IF90aGlzLnRvcGljLmlkfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgX3RoaXMuZm9sbG93ZWQgPSAhIF90aGlzLmZvbGxvd2VkO1xuXG4gICAgICAgICAgaWYgKF90aGlzLmZvbGxvd2VkKSB7XG4gICAgICAgICAgICBfdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLklOQ1JFTUVOVF9UT1BJQ19DT1VOVCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuREVDUkVNRU5UX1RPUElDX0NPVU5UKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIHVuZm9sbG93KCkge1xuICAgICAgICB0aGlzLmZvbGxvdygpO1xuICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b3BpYy1jYXJkLnZ1ZT84OTBlYmEzOCIsIjx0ZW1wbGF0ZT5cblx0PHNwYW4gY2xhc3M9XCJwcm9maWxlTmF2aWdhdGlvbi12YWx1ZVwiPnt7IHRvcGljQ291bnR4IH19PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd0b3BpY0NvdW50J10sXG5cblx0Y29tcHV0ZWQ6IHtcblx0XHR0b3BpY0NvdW50eCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyU3RhdHMudG9waWNDb3VudDtcblx0XHR9XG5cdH0sXG5cblx0bW91bnRlZCgpIHtcblx0XHR0aGlzLiRlbWl0KCdtb3VudGVkJyk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLlNFVF9UT1BJQ19DT1VOVCwgdGhpcy50b3BpY0NvdW50KTtcblx0fVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdG9waWMtY291bnQudnVlPzNhZTBiODRlIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IHRvcGljLWxpc3RcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIHM2XCIgdi1mb3I9XCJ0b3BpYyBpbiB0b3BpY3NcIj5cblx0XHRcdDx0b3BpYy1jYXJkIDp0b3BpYz1cInRvcGljXCI+PC90b3BpYy1jYXJkPlxuXHRcdFx0PGJ1dHRvbiB2LXNob3c9XCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiPkxvYWQgbW9yZTwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3VybCddLFxuXG5cdGNvbXB1dGVkOiBPYmplY3QuYXNzaWduKFxuXHRcdG1hcFN0YXRlKCd0b3BpY0xpc3QnLCBbXG5cdFx0ICAncGFnZScsXG5cdFx0ICAndG90YWxQYWdlcycsXG5cdFx0ICAncmVxdWVzdGluZycsXG5cdFx0ICAndG9waWNzJyxcblx0XHRdKVxuXHQpLFxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCd0b3BpY0xpc3QvJyArIHR5cGVzLlNFVF9VUkwsIHRoaXMudXJsKTtcblx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgndG9waWNMaXN0L2ZldGNoRGF0YScpO1xuXHR9LFxuXG5cdG1ldGhvZHM6IE9iamVjdC5hc3NpZ24oXG5cdFx0bWFwQWN0aW9ucygndG9waWNMaXN0JywgW1xuXHRcdFx0J2ZldGNoRGF0YScsXG5cdFx0XSlcblx0KSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvcGljLWxpc3QudnVlPzgzODY1OGU2IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwidXNlckNhcmRcIj5cblx0XHQ8dWwgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XG5cdFx0XHQ8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG5cdFx0XHRcdDxpbWcgOnNyYz1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdhdmF0YXInLCB1c2VyKVwiIGFsdD1cIlwiIGNsYXNzPVwiY2lyY2xlXCI+XG5cdFx0XHRcdDxhIDpocmVmPVwiJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHVzZXIpXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgdXNlci5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxkaXYgdi1pZj1cIiR2aWVuZGVyLnVzZXIgPyAkdmllbmRlci51c2VyLmlkICE9PSB1c2VyLmlkIDogZmFsc2VcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGZvbGxvd0J1dHRvblwiIHYtc2hvdz1cIiEgZm9sbG93ZWRcIiBAY2xpY2s9XCJmb2xsb3coKVwiPkZvbGxvdzwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gdW5mb2xsb3dCdXR0b25cIiB2LXNob3c9XCJmb2xsb3dlZFwiIEBjbGljaz1cInVuZm9sbG93KClcIj5VbmZvbGxvdzwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbGk+XG5cdFx0PC91bD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3VzZXInXSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVxdWVzdGluZzogZmFsc2UsXG5cdFx0XHRmb2xsb3dlZDogdHJ1ZSxcblx0XHR9XG5cdH0sXG5cblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmZvbGxvd2VkID0gdGhpcy51c2VyLmZvbGxvd2VkO1xuXHR9LFxuXG4gICAgbWV0aG9kczoge1xuICAgIFx0Zm9sbG93KCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICBcdFx0YXhpb3MucG9zdChfdGhpcy4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnZm9sbG93JywgX3RoaXMudXNlciksIHsnZm9sbG93ZWVfaWQnOiBfdGhpcy51c2VyLmlkfSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0X3RoaXMuZm9sbG93ZWQgPSAhIF90aGlzLmZvbGxvd2VkO1xuXG5cdFx0XHRcdFx0aWYgKF90aGlzLmZvbGxvd2VkKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLklOQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLkRFQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0dW5mb2xsb3coKSB7XG4gICAgXHRcdHRoaXMuZm9sbG93KCk7XG4gICAgXHR9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHVzZXItY2FyZC52dWU/NGY0ZDE5YjMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZvbGxvdy1idXR0b24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdkNDFkNmZlIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9mb2xsb3ctYnV0dG9uLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9mb2xsb3cvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3ctYnV0dG9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZvbGxvdy1idXR0b24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdkNDFkNmZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2Q0MWQ2ZmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9mb2xsb3cvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3ctYnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mb2xsb3dlci1jb3VudC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGM1MTE2NWUhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZvbGxvd2VyLWNvdW50LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItY291bnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZm9sbG93ZXItY291bnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRjNTExNjVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGM1MTE2NWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZvbGxvd2VyLWxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJlZjkwZjFmIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9mb2xsb3dlci1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmb2xsb3dlci1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZWY5MGYxZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJlZjkwZjFmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZvbGxvd2luZy1jb3VudC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTZiNWRmODUhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZvbGxvd2luZy1jb3VudC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1jb3VudC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmb2xsb3dpbmctY291bnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE2YjVkZjg1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTZiNWRmODVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWNvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mb2xsb3dpbmctbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2ZkMzA1MTghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZvbGxvd2luZy1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZm9sbG93aW5nLWxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmZDMwNTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2ZkMzA1MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvcGljLWNhcmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ0ZmJmZWE4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b3BpYy1jYXJkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY2FyZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b3BpYy1jYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NGZiZmVhOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ0ZmJmZWE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvcGljLWNvdW50LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNDhiNjlhMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9waWMtY291bnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jb3VudC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b3BpYy1jb3VudC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzQ4YjY5YTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNDhiNjlhM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jb3VudC52dWVcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9waWMtbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmUzNGJmM2EhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvcGljLWxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvcGljLWxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJlMzRiZjNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmUzNGJmM2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNlci1jYXJkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hOWM1MTZmOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdXNlci1jYXJkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdXNlci1jYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHVzZXItY2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTljNTE2ZjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hOWM1MTZmOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy91c2VyLWNhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZmlsZU5hdmlnYXRpb24tdmFsdWVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZm9sbG93aW5nQ291bnR4KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xNmI1ZGY4NVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTZiNWRmODUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1jb3VudC52dWVcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyB0b3BpYy1saXN0XCJcbiAgfSwgX3ZtLl9sKChfdm0udG9waWNzKSwgZnVuY3Rpb24odG9waWMpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzNlwiXG4gICAgfSwgW19jKCd0b3BpYy1jYXJkJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b3BpY1wiOiB0b3BpY1xuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgIHZhbHVlOiAoIV92bS5yZXF1ZXN0aW5nICYmIF92bS5wYWdlIDwgX3ZtLnRvdGFsUGFnZXMpLFxuICAgICAgICBleHByZXNzaW9uOiBcIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIwXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5mZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIkxvYWQgbW9yZVwiKV0pXSwgMSlcbiAgfSkpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJlMzRiZjNhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yZTM0YmYzYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW192bS5fbCgoX3ZtLmZvbGxvd2VycyksIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICByZXR1cm4gX2MoJ3VzZXItY2FyZCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidXNlclwiOiB1c2VyXG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5yZXF1ZXN0aW5nICYmIF92bS5wYWdlIDwgX3ZtLnRvdGFsUGFnZXMpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIwXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZmV0Y2hEYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2FkIG1vcmVcIildKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJlZjkwZjFmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yZWY5MGYxZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9maWxlTmF2aWdhdGlvbi12YWx1ZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50b3BpY0NvdW50eCkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzQ4YjY5YTNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM0OGI2OWEzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jb3VudC52dWVcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvcGljQ2FyZFwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvcGljQ2FyZC10aHVtYm5haWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCd0aHVtYm5haWwnLCBfdm0udG9waWMpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9waWNDYXJkLW5hbWVcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS50b3BpYylcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0udG9waWMubmFtZSkgKyBcIlxcbiAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvcGljQ2FyZC1hY3Rpb25cIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLmZvbGxvd2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiISBmb2xsb3dlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGZvbGxvd0J1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9sbG93KClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJGb2xsb3dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZm9sbG93ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb2xsb3dlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIHVuZm9sbG93QnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51bmZvbGxvdygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVW5mb2xsb3dcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDRmYmZlYThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ0ZmJmZWE4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2ZpbGVOYXZpZ2F0aW9uLXZhbHVlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmZvbGxvd2VyQ291bnR4KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00YzUxMTY1ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGM1MTE2NWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9sbG93QnV0dG9uXCJcbiAgfSwgWyghX3ZtLnVzZXIuZm9sbG93ZWQpID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvbGxvdygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRm9sbG93XCIpXSkgOiBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBmb2xsb3dlZFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udW5mb2xsb3coKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlVuZm9sbG93XCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ZDQxZDZmZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2Q0MWQ2ZmUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvZm9sbG93L3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93LWJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW192bS5fbCgoX3ZtLmZvbGxvd2luZ3MpLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgcmV0dXJuIF9jKCd1c2VyLWNhcmQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInVzZXJcIjogdXNlclxuICAgICAgfVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ucmVxdWVzdGluZyAmJiBfdm0ucGFnZSA8IF92bS50b3RhbFBhZ2VzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZldGNoRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9hZCBtb3JlXCIpXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ZmQzMDUxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2ZkMzA1MTghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidXNlckNhcmRcIlxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb25cIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdhdmF0YXInLCBfdm0udXNlciksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS51c2VyKVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLiR2aWVuZGVyLnVzZXIgPyBfdm0uJHZpZW5kZXIudXNlci5pZCAhPT0gX3ZtLnVzZXIuaWQgOiBmYWxzZSkgPyBfYygnZGl2JywgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5mb2xsb3dlZCksXG4gICAgICBleHByZXNzaW9uOiBcIiEgZm9sbG93ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBmb2xsb3dCdXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvbGxvdygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRm9sbG93XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvbGxvd2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9sbG93ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biB1bmZvbGxvd0J1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udW5mb2xsb3coKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlVuZm9sbG93XCIpXSldKSA6IF92bS5fZSgpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWE5YzUxNmY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hOWM1MTZmOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdXNlci1jYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgcGFnZTogMCxcbiAgICAgICAgdG90YWxQYWdlczogMSxcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIGZvbGxvd2luZ3M6IFtdLFxuICAgICAgICB1cmw6ICcnLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5BRERfRk9MTE9XSU5HU10gKHN0YXRlLCBmb2xsb3dpbmdzKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dpbmdzID0gc3RhdGUuZm9sbG93aW5ncy5jb25jYXQoZm9sbG93aW5ncyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9VUkxdIChzdGF0ZSwgdXJsKSB7XG4gICAgICAgICAgICBzdGF0ZS51cmwgPSB1cmw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBmZXRjaERhdGEoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RpbmcgfHwgc3RhdGUucGFnZSArIDEgPiBzdGF0ZS50b3RhbFBhZ2VzKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoc3RhdGUudXJsLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UgKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdGFsUGFnZXMgPSByZXNwb25zZS5kYXRhLm1ldGEucGFnaW5hdGlvbi50b3RhbF9wYWdlcztcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuQUREX0ZPTExPV0lOR1MsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgc3RhdGUucGFnZSsrO1xuICAgICAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZXQoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93aW5ncyA9IFtdO1xuICAgICAgICAgICAgc3RhdGUucGFnZSA9IDE7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZm9sbG93aW5nTGlzdC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIHBhZ2U6IDAsXG4gICAgICAgIHRvdGFsUGFnZXM6IDEsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICB0b3BpY3M6IFtdLFxuICAgICAgICB1cmw6ICcnLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5BRERfVE9QSUNTXSAoc3RhdGUsIHRvcGljcykge1xuICAgICAgICAgICAgc3RhdGUudG9waWNzID0gc3RhdGUudG9waWNzLmNvbmNhdCh0b3BpY3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfVVJMXSAoc3RhdGUsIHVybCkge1xuICAgICAgICAgICAgc3RhdGUudXJsID0gdXJsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0aW5nIHx8IHN0YXRlLnBhZ2UgKyAxID4gc3RhdGUudG90YWxQYWdlcykgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHN0YXRlLnVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlICsgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFBhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXM7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLkFERF9UT1BJQ1MsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgc3RhdGUucGFnZSsrO1xuICAgICAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZXQoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgc3RhdGUudG9waWNzID0gW107XG4gICAgICAgICAgICBzdGF0ZS5wYWdlID0gMTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy90b3BpY0xpc3QuanMiLCJyZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xucmVxdWlyZSgnc3VtbWVybm90ZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9wYWdlcy9wcm9maWxlL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJpbXBvcnQgY29yZU1vZHVsZXMgZnJvbSAndmllbmRlcl9jb3JlL2pzL3N0b3JlL21vZHVsZXMuanMnO1xuXG5pbXBvcnQgcXVlc3Rpb25MaXN0IGZyb20gJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9xdWVzdGlvbkxpc3QnO1xuaW1wb3J0IGVkaXRvciBmcm9tICd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZWRpdG9yJztcbmltcG9ydCBmZWVkIGZyb20gJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mZWVkJztcbmltcG9ydCB1c2VyU3RhdHMgZnJvbSAndmllbmRlcl9wcm9maWxlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy91c2VyU3RhdHMnO1xuaW1wb3J0IGZvbGxvd2luZ0xpc3QgZnJvbSAndmllbmRlcl9wcm9maWxlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mb2xsb3dpbmdMaXN0JztcbmltcG9ydCBmb2xsb3dlckxpc3QgZnJvbSAndmllbmRlcl9wcm9maWxlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mb2xsb3dlckxpc3QnO1xuaW1wb3J0IHRvcGljTGlzdCBmcm9tICd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3RvcGljTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczogT2JqZWN0LmFzc2lnbihjb3JlTW9kdWxlcywge1xuICAgIHF1ZXN0aW9uTGlzdDogcXVlc3Rpb25MaXN0LFxuICAgIGVkaXRvcjogZWRpdG9yLFxuICAgIGZlZWQ6IGZlZWQsXG4gICAgdXNlclN0YXRzOiB1c2VyU3RhdHMsXG4gICAgZm9sbG93aW5nTGlzdDogZm9sbG93aW5nTGlzdCxcbiAgICBmb2xsb3dlckxpc3Q6IGZvbGxvd2VyTGlzdCxcbiAgICB0b3BpY0xpc3Q6IHRvcGljTGlzdCxcbiAgfSksXG5cbiAgYWN0aW9uczogcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS8vYWN0aW9ucy5qcycpLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL3BhZ2VzL3Byb2ZpbGUvYXNzZXRzL2pzL3N0b3JlLmpzIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IGNoYW5nZWFibGVNZW51TWl4aW4gZnJvbSAndmllbmRlcl9wcm9maWxlL2NvcmUvanMvbWl4aW5zL2NoYW5nZWFibGVNZW51TWl4aW4nO1xuXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGUgVnVlIGFuZCBWdWUgUmVzb3VyY2UuIFRoaXMgZ2l2ZXMgYSBncmVhdCBzdGFydGluZyBwb2ludCBmb3JcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ2NvbW1lbnQnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdjb21tZW50LWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2NvbW1lbnQtY3JlYXRlLWZvcm0nLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXItcHJldmlldycsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdmZWVkLWxpc3QnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlcicsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnYW5zd2VyLXNob3ctbW9kYWwnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXNob3ctbW9kYWwudnVlJykpO1xuXG5WdWUuY29tcG9uZW50KCdxdWVzdGlvbicsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdxdWVzdGlvbi1saXN0JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnYW5zd2VyLWNyZWF0ZS1mb3JtJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXItY3JlYXRlLW1vZGFsJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlJykpO1xuXG5WdWUuY29tcG9uZW50KCdmb2xsb3ctYnV0dG9uJywgcmVxdWlyZSgndmllbmRlcl9mb2xsb3cvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvdy1idXR0b24udnVlJykpO1xuVnVlLmNvbXBvbmVudCgnZm9sbG93ZXItY291bnQnLCByZXF1aXJlKCd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2ZvbGxvd2luZy1jb3VudCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWNvdW50LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3RvcGljLWNvdW50JywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jb3VudC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdmb2xsb3dpbmctbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnZm9sbG93ZXItbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0b3BpYy1saXN0JywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1saXN0LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3VzZXItY2FyZCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvdXNlci1jYXJkLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3RvcGljLWNhcmQnLCByZXF1aXJlKCd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNhcmQudnVlJykpO1xuXG5cbmNvbnN0IGZlZWQgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuXG4gICAgc3RvcmU6IHN0b3JlLFxuXG4gICAgbWl4aW5zOiBbY2hhbmdlYWJsZU1lbnVNaXhpbl0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmluaXRUYWIodGhpcy4kcmVmcy5wcm9maWxlTmF2LCAncHJvZmlsZU5hdmlnYXRpb24nKTtcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvcGFnZXMvcHJvZmlsZS9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==