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
/******/ 	return __webpack_require__(__webpack_require__.s = 272);
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
/* 147 */
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
Vue.component('following-list', __webpack_require__(82));
Vue.component('follower-list', __webpack_require__(80));
Vue.component('user-card', __webpack_require__(86));
Vue.component('topic-count', __webpack_require__(84));
Vue.component('topic-list', __webpack_require__(85));
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
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcz80YmRiKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcz8yYmM1KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3VybEhlbHBlci5qcz80MjkwKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzPzNmNWIqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcz9hZmFhKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzPzA5YzUqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanM/MzYyMCoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/ZGY5YioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanM/NjE2ZCoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2VkaXRvci5qcz8xODliKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9xdWVzdGlvbkxpc3QuanM/ZDA3MCoqIiwid2VicGFjazovLy9hbnN3ZXItcHJldmlldy52dWU/MWFiYyoqIiwid2VicGFjazovLy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT8yMDgzKioiLCJ3ZWJwYWNrOi8vL2NvbW1lbnQtbGlzdC52dWU/NTg5MSoqIiwid2VicGFjazovLy9jb21tZW50LnZ1ZT83N2ZjKioiLCJ3ZWJwYWNrOi8vL3F1ZXN0aW9uLWxpc3QudnVlP2JhZWUqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1wcmV2aWV3LnZ1ZT8wZGNkKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1jcmVhdGUtZm9ybS52dWU/OTY0OCoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWU/ODJmMSoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlPzliMTEqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZT9kMzkxKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWU/ZTljMioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlP2M1NzcqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlP2I5ZTEqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWU/ZmIxZSoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QudnVlPzMyNDQqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mZWVkLmpzPzM1ZDcqKiIsIndlYnBhY2s6Ly8vYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZT8zM2FlKioiLCJ3ZWJwYWNrOi8vL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlPzNhMzEqKiIsIndlYnBhY2s6Ly8vYW5zd2VyLXNob3ctbW9kYWwudnVlPzFkNmIqKiIsIndlYnBhY2s6Ly8vYW5zd2VyLnZ1ZT8zNWM4KioiLCJ3ZWJwYWNrOi8vL2ZlZWQtbGlzdC52dWU/YjA3ZCoqIiwid2VicGFjazovLy9xdWVzdGlvbi52dWU/Njk1MSoqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZT82MTcxKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWU/MmNlMyoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZT82ZGMyKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZT9iZTc1KioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZT8wZGRhKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlPzk2NzEqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlPzI5ODkqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mZWVkLWxpc3QudnVlPzVlYjgqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWU/ODhiNyoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3F1ZXN0aW9uLnZ1ZT8wNTE2KioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZT8xNjdkKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWU/NWYzYyoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvbWl4aW5zL2NoYW5nZWFibGVNZW51TWl4aW4uanM/ZWUwOCoqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZvbGxvd2VyTGlzdC5qcz9kNmExKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvdXNlclN0YXRzLmpzP2ZhNTMqKiIsIndlYnBhY2s6Ly8vZm9sbG93LWJ1dHRvbi52dWU/NDgxNCoqIiwid2VicGFjazovLy9mb2xsb3dlci1jb3VudC52dWU/NTQ5NCoqIiwid2VicGFjazovLy9mb2xsb3dlci1saXN0LnZ1ZT8wOTAxKioiLCJ3ZWJwYWNrOi8vL2ZvbGxvd2luZy1jb3VudC52dWU/ZTQ2MCoqIiwid2VicGFjazovLy9mb2xsb3dpbmctbGlzdC52dWU/NWU1YyoqIiwid2VicGFjazovLy90b3BpYy1jYXJkLnZ1ZT9iZDhhKioiLCJ3ZWJwYWNrOi8vL3RvcGljLWNvdW50LnZ1ZT9jNDkzKioiLCJ3ZWJwYWNrOi8vL3RvcGljLWxpc3QudnVlP2I4OGUqKiIsIndlYnBhY2s6Ly8vdXNlci1jYXJkLnZ1ZT83ZmI5KioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9mb2xsb3cvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3ctYnV0dG9uLnZ1ZT85MmUwKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItY291bnQudnVlPzBlNjUqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZT85MTYxKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWNvdW50LnZ1ZT8wZTc3KioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWxpc3QudnVlPzQ3ZDkqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZT9iNGIyKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY291bnQudnVlPzBmMmEqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1saXN0LnZ1ZT9kMjZjKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdXNlci1jYXJkLnZ1ZT9jNzlkKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWNvdW50LnZ1ZT9hYmYyKioqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWxpc3QudnVlPzZhMWMqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItbGlzdC52dWU/MzgxOSoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jb3VudC52dWU/Yjk3ZCoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZT8zNDFhKioqIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZT81MWMyKioqIiwid2VicGFjazovLy8uL2FwcHMvZm9sbG93L3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93LWJ1dHRvbi52dWU/NTc5NioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctbGlzdC52dWU/NWVjOCoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy91c2VyLWNhcmQudnVlPzdkYTMqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZm9sbG93aW5nTGlzdC5qcz83MGE4Iiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3RvcGljTGlzdC5qcz9iYTNmIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvcGFnZXMvcHJvZmlsZS9hc3NldHMvanMvYm9vdHN0cmFwLmpzPzIyZWYiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9wYWdlcy9wcm9maWxlL2Fzc2V0cy9qcy9zdG9yZS5qcz83M2RkIiwid2VicGFjazovLy8uL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvcGFnZXMvcHJvZmlsZS9hc3NldHMvanMvYXBwLW1vYmlsZS5qcyJdLCJuYW1lcyI6WyJTRVRfUkVRVUVTVElORyIsIlNFVF9TSE9XX1BBTkVMIiwiU0VUX1NIT1ciLCJTRVRfU0VBUkNIX1RFWFQiLCJTRVRfU0VBUkNIX1JFU1VMVFMiLCJTRVRfU0hPV19NT1JFX0ZJRUxEUyIsIlRPR0dMRV9TSE9XX01PUkVfRklFTERTIiwiQUREX1RPX1NFTEVDVEVEX1RPUElDUyIsIlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyIsIlNFVF9RVUVTVElPTl9ERVRBSUwiLCJBRERfUVVFU1RJT05TIiwiUkVNT1ZFX1FVRVNUSU9OIiwiU0VUX0FTX0FOU1dFUkVEIiwiU0VUX1FVRVNUSU9OU19VUkwiLCJJTkNSRU1FTlRfUEFHRSIsIlVQREFURV9SRVFVRVNUSU5HIiwiU0VUX1NIT1dfQU5TV0VSX0NSRUFURV9NT0RBTCIsIlNFVF9FRElUT1JfQ09OVEVOVCIsIlVQREFURV9FRElUT1JfQ09OVEVOVCIsIlNFVF9FRElUT1JfUVVFU1RJT04iLCJTRVRfRURJVE9SX0VMRU1FTlQiLCJTRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTCIsIlNFVF9TSE9XRURfQU5TV0VSIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGhvZHMiLCJnZXRVcmwiLCJyZWwiLCJvYmoiLCJsaW5rcyIsImZpbHRlciIsImxpbmsiLCJ1cmwiLCJwYXRoIiwid2luZG93Iiwic2VhcmNoT3JBc2tQYW5lbCIsInNlYXJjaE9yQXNrT3ZlcmxheSIsInRvcGljUmVjb21tZW5kYXRpb24iLCJuYW1lc3BhY2VkIiwic3RhdGUiLCJyZXF1ZXN0aW5nIiwic2hvdyIsInNlYXJjaFRleHQiLCJxdWVzdGlvbkRldGFpbCIsInNlYXJjaFJlc3VsdHMiLCJzaG93TW9yZUZpZWxkcyIsInNlbGVjdGVkVG9waWNzIiwicG9zdFF1ZXN0aW9uVXJsIiwiVnVlIiwicHJvdG90eXBlIiwiJHZpZW5kZXIiLCJoZWxwZXJzIiwiYXBpIiwibXV0YXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwib3ZlcmZsb3dZIiwidG9waWMiLCJwdXNoIiwic2VsZWN0ZWRUb3BpYyIsImlkIiwiYWN0aW9ucyIsInBvc3RRdWVzdGlvbiIsImNvbW1pdCIsImF4aW9zIiwicG9zdCIsInRpdGxlIiwiYm9keSIsInRvcGljcyIsInRoZW4iLCJyZXNwb25zZSIsImxvY2F0aW9uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJzaG93UGFuZWwiLCJvdmVyZmxvdyIsInNob3dUb3BpY1JlY29tbWVuZGF0aW9ucyIsInNldFRpbWVvdXQiLCJoaWRlVG9waWNSZWNvbW1lbmRhdGlvbnMiLCJJTkNSRU1FTlRfRk9MTE9XRVJfQ09VTlQiLCJERUNSRU1FTlRfRk9MTE9XRVJfQ09VTlQiLCJTRVRfRk9MTE9XRVJfQ09VTlQiLCJJTkNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UIiwiREVDUkVNRU5UX0ZPTExPV0lOR19DT1VOVCIsIlNFVF9GT0xMT1dJTkdfQ09VTlQiLCJJTkNSRU1FTlRfVE9QSUNfQ09VTlQiLCJERUNSRU1FTlRfVE9QSUNfQ09VTlQiLCJTRVRfVE9QSUNfQ09VTlQiLCJBRERfRk9MTE9XSU5HUyIsIkFERF9GT0xMT1dFUlMiLCJBRERfVE9QSUNTIiwiU0VUX1VSTCIsImVkaXRvckVsZW1lbnQiLCJxdWVzdGlvbiIsImNvbnRlbnQiLCJzZXRRdWVzdGlvbiIsInBheWxvYWQiLCJyb290U3RhdGUiLCJhbnN3ZXJUZXh0Iiwic3VtbWVybm90ZSIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwicXVlc3Rpb25zIiwicXVlc3Rpb25VcmwiLCJzaG93QW5zd2VyQ3JlYXRlTW9kYWwiLCJjb25jYXQiLCJzcGxpY2UiLCJpbmRleE9mIiwiYW5zd2VyZWQiLCIkIiwic2Nyb2xsVG9wIiwibW9kYWwiLCJpbWFnZVBvcE92ZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzcGxheSIsInNldFF1ZXN0aW9uVXJsIiwiZmV0Y2hEYXRhIiwiZ2V0IiwicGFyYW1zIiwid2l0aCIsIm1ldGEiLCJwYWdpbmF0aW9uIiwidG90YWxfcGFnZXMiLCJjb25zb2xlIiwibG9nIiwiYW5zd2VycyIsImZlZWRVcmxzIiwic2hvd0Fuc3dlck1vZGFsIiwic2hvd2VkQW5zd2VyIiwiYWRkQW5zd2VycyIsInNldEZlZWRVcmwiLCJpbmNyZW1lbnRQYWdlIiwidXBkYXRlUmVxdWVzdGluZyIsImFuc3dlciIsInVuc2hpZnQiLCJzZXRTaG93ZWRBbnN3ZXIiLCJvbmx5Iiwic2VsZWN0ZWRNZW51Iiwibm90TW91bnRlZCIsIm5hdiIsInNjcm9sbFN0b3JhZ2VOYW1lIiwiaW5pdFRhYiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNjcm9sbExlZnQiLCJzZXRDdXJyZW50TWVudSIsIiRyZWZzIiwicHJvZmlsZUNvbnRlbnRNb2JpbGUiLCJjdXJyZW50TWVudSIsIm1lbnUiLCJzZXRJdGVtIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsIlBhZ2UiLCJVcmwiLCJnYSIsInJlbGF0aXZlVXJsIiwiaGlkZUJlZm9yZU1vdW50ZWRQcmVsb2FkZXJzIiwiZm9sbG93ZXJzIiwicmVzZXQiLCJmb2xsb3dlckNvdW50IiwiZm9sbG93aW5nQ291bnQiLCJ0b3BpY0NvdW50IiwiZm9sbG93aW5ncyIsInJlcXVpcmUiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicXVlc3Rpb25MaXN0IiwiZWRpdG9yIiwiZmVlZCIsInVzZXJTdGF0cyIsImZvbGxvd2luZ0xpc3QiLCJmb2xsb3dlckxpc3QiLCJ0b3BpY0xpc3QiLCJjb21wb25lbnQiLCJlbCIsInN0b3JlIiwibWl4aW5zIiwibW91bnRlZCIsInByb2ZpbGVOYXYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQ08sSUFBTUEsaUJBQWlCLGdCQUF2QjtBQUNBLElBQU1DLGlCQUFpQixnQkFBdkI7QUFDQSxJQUFNQyxXQUFXLFVBQWpCO0FBQ0EsSUFBTUMsa0JBQWtCLGlCQUF4QjtBQUNBLElBQU1DLHFCQUFxQixvQkFBM0I7QUFDQSxJQUFNQyx1QkFBdUIsc0JBQTdCO0FBQ0EsSUFBTUMsMEJBQTBCLHlCQUFoQztBQUNBLElBQU1DLHlCQUF5Qix3QkFBL0I7QUFDQSxJQUFNQyw4QkFBOEIsNkJBQXBDO0FBQ0EsSUFBTUMsc0JBQXNCLHFCQUE1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFBQTtBQUNPLElBQU1DLGdCQUFnQixlQUF0QjtBQUNBLElBQU1DLGtCQUFrQixpQkFBeEI7QUFDQSxJQUFNQyxrQkFBa0IsaUJBQXhCO0FBQ0EsSUFBTUMsb0JBQW9CLG1CQUExQjtB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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDdERBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUM1QkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLCtDQUErQztBQUMvQyxHQUFHO0FBQ0g7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQzNHQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBOztBQUVBLHdEQUFlO0FBQ1gxQixnQkFBWSxJQUREOztBQUdYQyxXQUFPO0FBQ0grRCxjQUFNLENBREg7QUFFSEMsb0JBQVksQ0FGVDtBQUdIL0Qsb0JBQVksS0FIVDtBQUlIdUYsaUJBQVMsRUFKTjtBQUtIQyxrQkFBUyxFQUxOO0FBTUhDLHlCQUFpQixLQU5kO0FBT0hDLHNCQUFjO0FBUFgsS0FISTs7QUFhWDdFO0FBQ0k4RSxrQkFESixzQkFDZTVGLEtBRGYsRUFDc0J3RixPQUR0QixFQUMrQjtBQUN2QnhGLGtCQUFNd0YsT0FBTixHQUFnQnhGLE1BQU13RixPQUFOLENBQWNwQixNQUFkLENBQXFCb0IsT0FBckIsQ0FBaEI7QUFDSCxTQUhMO0FBS0lLLGtCQUxKLHNCQUtlN0YsS0FMZixFQUtzQlAsR0FMdEIsRUFLMkI7QUFDbkJPLGtCQUFNeUYsUUFBTixHQUFpQmhHLEdBQWpCO0FBQ0gsU0FQTDtBQVNJcUcscUJBVEoseUJBU2tCOUYsS0FUbEIsRUFTeUI7QUFDakJBLGtCQUFNK0QsSUFBTjtBQUNILFNBWEw7QUFhSWdDLHdCQWJKLDRCQWFxQi9GLEtBYnJCLEVBYTRCQyxVQWI1QixFQWF3QztBQUNoQ0Qsa0JBQU1DLFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0g7QUFmTCxtQ0FpQkssbUZBakJMLFlBaUJ3Q0QsS0FqQnhDLEVBaUIrQzBGLGVBakIvQyxFQWlCZ0U7QUFDeEQsWUFBR0EsZUFBSCxFQUFvQjtBQUNoQjNFLHFCQUFTQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NxQixRQUEvQyxHQUEwRCxRQUExRDtBQUVILFNBSEQsTUFHTztBQUNIdkIscUJBQVNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDQyxLQUF6QyxDQUErQ3FCLFFBQS9DLEdBQTBELFFBQTFEO0FBQ0g7O0FBRUR0QyxjQUFNMEYsZUFBTixHQUF3QkEsZUFBeEI7QUFDSCxLQTFCTCwrQkE0QkssMEVBNUJMLFlBNEIrQjFGLEtBNUIvQixFQTRCc0MyRixZQTVCdEMsRUE0Qm9EO0FBQzVDM0YsY0FBTTJGLFlBQU4sR0FBcUJBLFlBQXJCO0FBQ0gsS0E5QkwsK0RBZ0NjM0YsS0FoQ2QsRUFnQ3FCZ0csTUFoQ3JCLEVBZ0M2QjtBQUNyQmhHLGNBQU13RixPQUFOLENBQWNTLE9BQWQsQ0FBc0JELE1BQXRCO0FBQ0gsS0FsQ0wsY0FiVzs7QUFrRFh6RSxhQUFTO0FBQ0x3RCxpQkFESywyQkFDbUM7QUFBQSxnQkFBNUIvRSxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxnQkFBckJ5QixNQUFxQixRQUFyQkEsTUFBcUI7QUFBQSxnQkFBYm1DLFNBQWEsUUFBYkEsU0FBYTs7QUFDcEMsZ0JBQUc1RCxNQUFNQyxVQUFULEVBQXFCOztBQUVyQndCLG1CQUFPLGtCQUFQLEVBQTJCLElBQTNCOztBQUVBQyxrQkFBTXNELEdBQU4sQ0FBVWhGLE1BQU15RixRQUFOLENBQWVELE9BQXpCLEVBQWtDO0FBQzlCUCx3QkFBUTtBQUNKQywwQkFBTSxDQUFDLE9BQUQsRUFBVSxVQUFWLENBREY7QUFFSm5CLDBCQUFNL0QsTUFBTStEO0FBRlI7QUFEc0IsYUFBbEMsRUFNQ2hDLElBTkQsQ0FNTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCaEMsc0JBQU1nRSxVQUFOLEdBQW1CaEMsU0FBU0UsSUFBVCxDQUFjaUQsSUFBZCxDQUFtQkMsVUFBbkIsQ0FBOEJDLFdBQWpEO0FBQ0E1RCx1QkFBTyxZQUFQLEVBQXFCTyxTQUFTRSxJQUFULENBQWNBLElBQW5DO0FBQ0FULHVCQUFPLGVBQVA7QUFDQUEsdUJBQU8sa0JBQVAsRUFBMkIsS0FBM0I7QUFDSCxhQVhELEVBWUNVLEtBWkQsQ0FZTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BCa0Qsd0JBQVFDLEdBQVIsQ0FBWW5ELEtBQVo7QUFDQVgsdUJBQU8sa0JBQVAsRUFBMkIsS0FBM0I7QUFDSCxhQWZEO0FBZ0JILFNBdEJJO0FBd0JMeUUsdUJBeEJLLGtDQXdCeUNQLFlBeEJ6QyxFQXdCdUQ7QUFBQSxnQkFBMUMzRixLQUEwQyxTQUExQ0EsS0FBMEM7QUFBQSxnQkFBbkN5QixNQUFtQyxTQUFuQ0EsTUFBbUM7QUFBQSxnQkFBM0JtQyxTQUEyQixTQUEzQkEsU0FBMkI7O0FBQ3hELGdCQUFHK0IsZUFBZSxDQUFFQSxhQUFhOUQsSUFBOUIsR0FBcUMsS0FBeEMsRUFBK0M7QUFDM0Msb0JBQUc3QixNQUFNQyxVQUFULEVBQXFCOztBQUVyQndCLHVCQUFPLGtCQUFQLEVBQTJCLElBQTNCOztBQUVBQyxzQkFBTXNELEdBQU4sQ0FBVTdGLE9BQU8sTUFBUCxFQUFld0csWUFBZixDQUFWLEVBQXdDO0FBQ3BDViw0QkFBUTtBQUNKa0IsOEJBQU0sQ0FBQyxNQUFEO0FBREY7QUFENEIsaUJBQXhDLEVBS0NwRSxJQUxELENBS00sVUFBVUMsUUFBVixFQUFvQjtBQUN0QjJELGlDQUFhOUQsSUFBYixHQUFvQkcsU0FBU0UsSUFBVCxDQUFjTCxJQUFsQztBQUNBSiwyQkFBTywwRUFBUCxFQUFnQ2tFLFlBQWhDO0FBQ0FsRSwyQkFBTyxrQkFBUCxFQUEyQixLQUEzQjtBQUNILGlCQVRELEVBVUNVLEtBVkQsQ0FVTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BCa0QsNEJBQVFDLEdBQVIsQ0FBWW5ELEtBQVo7QUFDQVgsMkJBQU8sa0JBQVAsRUFBMkIsS0FBM0I7QUFDSCxpQkFiRDtBQWNILGFBbkJELE1BbUJPO0FBQ0hBLHVCQUFPLDBFQUFQLEVBQWdDa0UsWUFBaEM7QUFDSDtBQUVKO0FBaERJO0FBbERFLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQkE7O0FBRUE7O2lDQUlBOzswQkFDQTs7d0JBRUE7Z0NBRUE7QUFIQTtBQUtBOzs7O29DQUVBOzRDQUNBO0FBRUE7c0NBQ0E7NENBQ0E7QUFHQTtBQVRBOzs7c0NBV0E7c0NBQ0E7QUFHQTtBQUxBOztnQ0FNQTttQkFFQTs7c0RBRUE7O2lEQUNBOzRCQUNBO3FDQUNBO0FBRUE7O3NDQUNBOzsyQkFFQTt5QkFDQSxvQkFDQSw0QkFDQSw0QkFFQTs7cUVBRUE7NklBQ0E7Z0RBQ0E7QUFHQTtBQU5BO0FBUEE7QUFlQTs7dUlBQ0E7QUFFQTs7Ozt1Q0FFQTt1QkFFQTs7NkJBRUE7O2lDQUVBOztvQ0FFQTs7OEJBRUE7O21GQUNBLGtDQUNBOzRDQUNBO3lEQUNBO3lJQUNBOzhJQUNBOzREQUNBO0FBQ0E7a0NBQ0E7QUFDQSxzQ0FDQTtvQ0FDQTtzREFDQTtnREFDQTtBQUNBO0FBQ0E7a0NBQ0E7QUFDQTtBQUVBOzhEQUNBOzRDQUNBO0FBRUE7QUFuQ0E7QUF4REEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7O3dDQUdBO2tEQUNBO0FBR0E7QUFMQTs7O3dDQU9BO3dCQUVBOztnQ0FDQTt5Q0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBWEE7OzsyREFhQTtrQkFDQTtBQUVBO3NFQUNBOzhJQUVBOzt3Q0FDQTtxREFDQTtBQUNBO0FBRUE7QUFaQTtBQW5CQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUE7O0FBRUE7WUFHQTs7aUNBRUE7OztrQ0FFQTswQ0FDQTtBQUVBO29EQUNBOzBDQUNBO0FBR0E7QUFUQTs7OzJEQVdBO2tCQUNBO0FBRUE7Z0VBQ0E7MENBQ0E7b0lBQ0E7QUFFQTtBQVRBO0FBZkEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BOzs7WUFJQTtlQUVBO0FBSEE7O1lBS0E7ZUFJQTtBQUxBO0FBTEE7OytCQVlBOzt3QkFDQTs7a0JBRUE7b0JBRUE7QUFIQTtBQUtBOzs7O3dDQUVBO3NEQUNBO0FBRUE7MENBQ0E7dURBQ0E7QUFHQTtBQVRBOzs7OEJBV0E7a0JBRUE7OzRCQUVBOzt5QkFFQTs7c0RBQ0EsNkJBQ0E7b0NBQ0E7dUNBQ0E7aUNBQ0E7bUNBQ0E7QUFDQTtvQ0FDQTt1Q0FDQTtpQ0FDQTtBQUNBOzJCQUNBO0FBQ0EsZ0NBQ0E7MENBQ0E7a0NBQ0E7QUFDQTsyQkFDQTtBQUNBO0FBRUE7a0NBQ0E7a0JBRUE7OzRCQUVBOzt5QkFFQTs7d0RBQ0EsNkJBQ0E7b0NBQ0E7aUVBQ0E7aUNBQ0E7bUNBQ0E7QUFDQTtvQ0FDQTttQ0FDQTtBQUNBOzJCQUNBO0FBQ0EsZ0NBQ0E7MENBQ0E7a0NBQ0E7QUFDQTsyQkFDQTtBQUNBO0FBRUE7OENBQ0E7Z0NBQ0E7QUFFQTs0REFDQTtXQUNBO0FBRUE7QUEvREE7QUEvQkEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7OztrQkFJQTtxQkFFQTtBQUhBOztrQkFLQTt5Q0FDQTs7O3NDQUtBO0FBSEE7QUFEQTtBQVFBO0FBWEE7QUFMQTs7OzBDQWtCQTswQ0FDQTtBQUVBO29DQUNBOzBDQUNBO0FBRUE7OEJBQ0E7aURBQ0E7QUFFQTswQ0FDQTswQ0FDQTtBQUdBO0FBakJBOztnQ0FrQkE7bURBQ0E7YUFDQTtBQUVBOzs7O3dDQUVBO2lDQUNBO0FBRUE7QUFKQTtBQXpDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2VBOztBQUVBOytCQUdBOzswQkFDQTs7a0NBRUE7eUJBQ0E7d0JBQ0E7eUJBQ0E7MEJBQ0E7MEJBQ0E7OERBQ0E7O3NCQUlBO0FBSEE7QUFSQTtBQWFBO2dDQUNBO29CQUVBOztBQUNBO0FBQ0E7NEJBQ0E7c0NBQ0E7K0NBQ0E7Z0RBQ0E7a0JBQ0E7OEJBQ0E7NEJBRUE7Ozs7MkJBS0E7QUFIQTtBQURBLHdDQUtBOzZDQUNBO2tEQUNBO21EQUNBO3NCQUNBO0FBQ0Esc0NBQ0E7NEJBQ0E7QUFDQTtlQUNBO2tCQUNBO0FBRUE7OytEQUNBOzBEQUNBO0FBQ0E7QUFFQTs7Ozs4REFFQTttRUFDQTt5REFDQTtBQUNBO0FBRUE7Z0VBQ0E7OElBQ0E7OytCQUVBO2lDQUVBO0FBSEE7QUFLQTtzQ0FDQTt3QkFFQTs7a0NBRUE7OytCQUVBOztxRkFDQSw2QkFDQTs0Q0FDQTtrREFDQTtBQUNBOzRDQUNBO2tEQUNBO0FBQ0E7bUNBQ0E7QUFDQSxzQ0FDQTtrREFDQTs0Q0FDQTtBQUNBO21DQUNBO0FBQ0E7QUFFQTtrREFDQTtzQ0FDQTtBQUVBO2dFQUNBO2lCQUNBO0FBRUE7QUEvQ0E7QUF0REEsRTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FB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QTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSx3QkFBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDWEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ3BDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDaENBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDWEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNuREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNYQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDekJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNoQ0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBOztBQUVBLHdEQUFlO0FBQ1h4QixnQkFBWSxJQUREOztBQUdYQyxXQUFPO0FBQ0grRCxjQUFNLENBREg7QUFFSEMsb0JBQVksQ0FGVDtBQUdIL0Qsb0JBQVksS0FIVDtBQUlIK0gsb0JBQVksRUFKVDtBQUtIdkksYUFBSztBQUxGLEtBSEk7O0FBV1hxQiw2REFDSyx1RUFETCxZQUM0QmQsS0FENUIsRUFDbUNnSSxVQURuQyxFQUMrQztBQUN2Q2hJLGNBQU1nSSxVQUFOLEdBQW1CaEksTUFBTWdJLFVBQU4sQ0FBaUI1RCxNQUFqQixDQUF3QjRELFVBQXhCLENBQW5CO0FBQ0gsS0FITCwrQkFLSyxnRUFMTCxZQUtxQmhJLEtBTHJCLEVBSzRCUCxHQUw1QixFQUtpQztBQUN6Qk8sY0FBTVAsR0FBTixHQUFZQSxHQUFaO0FBQ0gsS0FQTCxjQVhXOztBQXFCWDhCLGFBQVM7QUFDTHdELGlCQURLLDJCQUNtQztBQUFBLGdCQUE1Qi9FLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLGdCQUFyQnlCLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLGdCQUFibUMsU0FBYSxRQUFiQSxTQUFhOztBQUNwQyxnQkFBSTVELE1BQU1DLFVBQU4sSUFBb0JELE1BQU0rRCxJQUFOLEdBQWEsQ0FBYixHQUFpQi9ELE1BQU1nRSxVQUEvQyxFQUEyRDs7QUFFM0RoRSxrQkFBTUMsVUFBTixHQUFtQixJQUFuQjs7QUFFQXlCLGtCQUFNc0QsR0FBTixDQUFVaEYsTUFBTVAsR0FBaEIsRUFBcUI7QUFDakJ3Rix3QkFBUTtBQUNKbEIsMEJBQU0vRCxNQUFNK0QsSUFBTixHQUFhO0FBRGY7QUFEUyxhQUFyQixFQUtDaEMsSUFMRCxDQUtNLFVBQVVDLFFBQVYsRUFBb0I7QUFDdEJoQyxzQkFBTWdFLFVBQU4sR0FBbUJoQyxTQUFTRSxJQUFULENBQWNpRCxJQUFkLENBQW1CQyxVQUFuQixDQUE4QkMsV0FBakQ7QUFDQTVELHVCQUFPLHVFQUFQLEVBQTZCTyxTQUFTRSxJQUFULENBQWNBLElBQTNDO0FBQ0FsQyxzQkFBTStELElBQU47QUFDQS9ELHNCQUFNQyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0gsYUFWRCxFQVdDa0MsS0FYRCxDQVdPLFVBQVVDLEtBQVYsRUFBaUI7QUFDcEJwQyxzQkFBTUMsVUFBTixHQUFtQixLQUFuQjtBQUNILGFBYkQ7QUFjSCxTQXBCSTtBQXNCTDJILGFBdEJLLHdCQXNCK0I7QUFBQSxnQkFBNUI1SCxLQUE0QixTQUE1QkEsS0FBNEI7QUFBQSxnQkFBckJ5QixNQUFxQixTQUFyQkEsTUFBcUI7QUFBQSxnQkFBYm1DLFNBQWEsU0FBYkEsU0FBYTs7QUFDaEM1RCxrQkFBTWdJLFVBQU4sR0FBbUIsRUFBbkI7QUFDQWhJLGtCQUFNK0QsSUFBTixHQUFhLENBQWI7QUFDSDtBQXpCSTtBQXJCRSxDQUFmLEM7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBLHdEQUFlO0FBQ1hoRSxnQkFBWSxJQUREOztBQUdYQyxXQUFPO0FBQ0grRCxjQUFNLENBREg7QUFFSEMsb0JBQVksQ0FGVDtBQUdIL0Qsb0JBQVksS0FIVDtBQUlINkIsZ0JBQVEsRUFKTDtBQUtIckMsYUFBSztBQUxGLEtBSEk7O0FBV1hxQiw2REFDSyxtRUFETCxZQUN3QmQsS0FEeEIsRUFDK0I4QixNQUQvQixFQUN1QztBQUMvQjlCLGNBQU04QixNQUFOLEdBQWU5QixNQUFNOEIsTUFBTixDQUFhc0MsTUFBYixDQUFvQnRDLE1BQXBCLENBQWY7QUFDSCxLQUhMLCtCQUtLLGdFQUxMLFlBS3FCOUIsS0FMckIsRUFLNEJQLEdBTDVCLEVBS2lDO0FBQ3pCTyxjQUFNUCxHQUFOLEdBQVlBLEdBQVo7QUFDSCxLQVBMLGNBWFc7O0FBcUJYOEIsYUFBUztBQUNMd0QsaUJBREssMkJBQ21DO0FBQUEsZ0JBQTVCL0UsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsZ0JBQXJCeUIsTUFBcUIsUUFBckJBLE1BQXFCO0FBQUEsZ0JBQWJtQyxTQUFhLFFBQWJBLFNBQWE7O0FBQ3BDLGdCQUFJNUQsTUFBTUMsVUFBTixJQUFvQkQsTUFBTStELElBQU4sR0FBYSxDQUFiLEdBQWlCL0QsTUFBTWdFLFVBQS9DLEVBQTJEOztBQUUzRGhFLGtCQUFNQyxVQUFOLEdBQW1CLElBQW5COztBQUVBeUIsa0JBQU1zRCxHQUFOLENBQVVoRixNQUFNUCxHQUFoQixFQUFxQjtBQUNqQndGLHdCQUFRO0FBQ0psQiwwQkFBTS9ELE1BQU0rRCxJQUFOLEdBQWE7QUFEZjtBQURTLGFBQXJCLEVBS0NoQyxJQUxELENBS00sVUFBVUMsUUFBVixFQUFvQjtBQUN0QmhDLHNCQUFNZ0UsVUFBTixHQUFtQmhDLFNBQVNFLElBQVQsQ0FBY2lELElBQWQsQ0FBbUJDLFVBQW5CLENBQThCQyxXQUFqRDtBQUNBNUQsdUJBQU8sbUVBQVAsRUFBeUJPLFNBQVNFLElBQVQsQ0FBY0EsSUFBdkM7QUFDQWxDLHNCQUFNK0QsSUFBTjtBQUNBL0Qsc0JBQU1DLFVBQU4sR0FBbUIsS0FBbkI7QUFDSCxhQVZELEVBV0NrQyxLQVhELENBV08sVUFBVUMsS0FBVixFQUFpQjtBQUNwQnBDLHNCQUFNQyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0gsYUFiRDtBQWNILFNBcEJJO0FBc0JMMkgsYUF0Qkssd0JBc0IrQjtBQUFBLGdCQUE1QjVILEtBQTRCLFNBQTVCQSxLQUE0QjtBQUFBLGdCQUFyQnlCLE1BQXFCLFNBQXJCQSxNQUFxQjtBQUFBLGdCQUFibUMsU0FBYSxTQUFiQSxTQUFhOztBQUNoQzVELGtCQUFNOEIsTUFBTixHQUFlLEVBQWY7QUFDQTlCLGtCQUFNK0QsSUFBTixHQUFhLENBQWI7QUFDSDtBQXpCSTtBQXJCRSxDQUFmLEM7Ozs7OztBQ0ZBLG1CQUFBa0UsQ0FBUSxFQUFSO0FBQ0EsbUJBQUFBLENBQVEsRUFBUixFOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBZSxJQUFJQyxLQUFLQyxLQUFULENBQWU7QUFDNUJDLFdBQVNDLE9BQU9DLE1BQVAsQ0FBYyxpRkFBZCxFQUEyQjtBQUNsQ0Msa0JBQWMscUdBRG9CO0FBRWxDQyxZQUFRLCtGQUYwQjtBQUdsQ0MsVUFBTSw2RkFINEI7QUFJbENDLGVBQVcsZ0dBSnVCO0FBS2xDQyxtQkFBZSxvR0FMbUI7QUFNbENDLGtCQUFjLG1HQU5vQjtBQU9sQ0MsZUFBVyxnR0FBQUE7QUFQdUIsR0FBM0IsQ0FEbUI7O0FBVzVCdEgsV0FBUyxtQkFBQTBHLENBQVEsRUFBUjtBQVhtQixDQUFmLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxtQkFBQUEsQ0FBUSxHQUFSOztBQUVBOzs7Ozs7QUFNQXhILElBQUlxSSxTQUFKLENBQWMsU0FBZCxFQUF5QixtQkFBQWIsQ0FBUSxFQUFSLENBQXpCO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLGNBQWQsRUFBOEIsbUJBQUFiLENBQVEsRUFBUixDQUE5QjtBQUNBeEgsSUFBSXFJLFNBQUosQ0FBYyxxQkFBZCxFQUFxQyxtQkFBQWIsQ0FBUSxFQUFSLENBQXJDO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLGdCQUFkLEVBQWdDLG1CQUFBYixDQUFRLEVBQVIsQ0FBaEM7QUFDQXhILElBQUlxSSxTQUFKLENBQWMsV0FBZCxFQUEyQixtQkFBQWIsQ0FBUSxFQUFSLENBQTNCO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLFFBQWQsRUFBd0IsbUJBQUFiLENBQVEsRUFBUixDQUF4QjtBQUNBeEgsSUFBSXFJLFNBQUosQ0FBYyxtQkFBZCxFQUFtQyxtQkFBQWIsQ0FBUSxFQUFSLENBQW5DOztBQUVBeEgsSUFBSXFJLFNBQUosQ0FBYyxVQUFkLEVBQTBCLG1CQUFBYixDQUFRLEVBQVIsQ0FBMUI7QUFDQXhILElBQUlxSSxTQUFKLENBQWMsZUFBZCxFQUErQixtQkFBQWIsQ0FBUSxFQUFSLENBQS9CO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLG9CQUFkLEVBQW9DLG1CQUFBYixDQUFRLEVBQVIsQ0FBcEM7QUFDQXhILElBQUlxSSxTQUFKLENBQWMscUJBQWQsRUFBcUMsbUJBQUFiLENBQVEsRUFBUixDQUFyQzs7QUFFQXhILElBQUlxSSxTQUFKLENBQWMsZUFBZCxFQUErQixtQkFBQWIsQ0FBUSxFQUFSLENBQS9CO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLGdCQUFkLEVBQWdDLG1CQUFBYixDQUFRLEVBQVIsQ0FBaEM7QUFDQXhILElBQUlxSSxTQUFKLENBQWMsaUJBQWQsRUFBaUMsbUJBQUFiLENBQVEsRUFBUixDQUFqQztBQUNBeEgsSUFBSXFJLFNBQUosQ0FBYyxnQkFBZCxFQUFnQyxtQkFBQWIsQ0FBUSxFQUFSLENBQWhDO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLGVBQWQsRUFBK0IsbUJBQUFiLENBQVEsRUFBUixDQUEvQjtBQUNBeEgsSUFBSXFJLFNBQUosQ0FBYyxXQUFkLEVBQTJCLG1CQUFBYixDQUFRLEVBQVIsQ0FBM0I7QUFDQXhILElBQUlxSSxTQUFKLENBQWMsYUFBZCxFQUE2QixtQkFBQWIsQ0FBUSxFQUFSLENBQTdCO0FBQ0F4SCxJQUFJcUksU0FBSixDQUFjLFlBQWQsRUFBNEIsbUJBQUFiLENBQVEsRUFBUixDQUE1QjtBQUNBeEgsSUFBSXFJLFNBQUosQ0FBYyxZQUFkLEVBQTRCLG1CQUFBYixDQUFRLEVBQVIsQ0FBNUI7O0FBRUEsSUFBTVEsT0FBTyxJQUFJaEksR0FBSixDQUFRO0FBQ2pCc0ksTUFBSSxNQURhOztBQUdqQkMsU0FBTyx1REFIVTs7QUFLakJDLFVBQVEsQ0FBQyxtR0FBRCxDQUxTOztBQU9qQkMsU0FQaUIscUJBT1A7QUFDTixTQUFLMUMsT0FBTCxDQUFhLEtBQUtPLEtBQUwsQ0FBV29DLFVBQXhCLEVBQW9DLG1CQUFwQztBQUNIO0FBVGdCLENBQVIsQ0FBYixDIiwiZmlsZSI6ImpzL3ZpZW5kZXIvcHJvZmlsZS9wcm9maWxlL2FwcC1tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzAiLCIvLyBzZWFyY2hPckFza1BhbmVsXG5leHBvcnQgY29uc3QgU0VUX1JFUVVFU1RJTkcgPSAnU0VUX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX1BBTkVMID0gJ1NFVF9TSE9XX1BBTkVMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPVyA9ICdTRVRfU0hPVyc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9URVhUID0gJ1NFVF9TRUFSQ0hfVEVYVCc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9SRVNVTFRTID0gJ1NFVF9TRUFSQ0hfUkVTVUxUUyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfTU9SRV9GSUVMRFMgPSAnU0VUX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9TSE9XX01PUkVfRklFTERTID0gJ1RPR0dMRV9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fU0VMRUNURURfVE9QSUNTID0gJ0FERF9UT19TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyA9ICdSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTl9ERVRBSUwgPSAnU0VUX1FVRVNUSU9OX0RFVEFJTCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwiLy8gcXVlc3Rpb25MaXN0XG5leHBvcnQgY29uc3QgQUREX1FVRVNUSU9OUyA9ICdBRERfUVVFU1RJT05TJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUVVFU1RJT04gPSAnUkVNT1ZFX1FVRVNUSU9OJztcbmV4cG9ydCBjb25zdCBTRVRfQVNfQU5TV0VSRUQgPSAnU0VUX0FTX0FOU1dFUkVEJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFU1RJT05TX1VSTCA9ICdTRVRfUVVFU1RJT05TX1VSTCc7XG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX1BBR0UgPSAnSU5DUkVNRU5UX1BBR0UnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9SRVFVRVNUSU5HID0gJ1VQREFURV9SRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMID0gJ1NFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwnO1xuXG4vLyBlZGl0b3JcbmV4cG9ydCBjb25zdCBTRVRfRURJVE9SX0NPTlRFTlQgPSAnU0VUX0VESVRPUl9DT05URU5UJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRURJVE9SX0NPTlRFTlQgPSAnVVBEQVRFX0VESVRPUl9DT05URU5UJztcbmV4cG9ydCBjb25zdCBTRVRfRURJVE9SX1FVRVNUSU9OID0gJ1NFVF9FRElUT1JfUVVFU1RJT04nO1xuZXhwb3J0IGNvbnN0IFNFVF9FRElUT1JfRUxFTUVOVCA9ICdTRVRfRURJVE9SX0VMRU1FTlQnO1xuXG4vLyBmZWVkXG5leHBvcnQgY29uc3QgU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwgPSAnU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XRURfQU5TV0VSID0gJ1NFVF9TSE9XRURfQU5TV0VSJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0bWV0aG9kczoge1xuXHRcdGdldFVybChyZWwsIG9iaikge1xuXHRcdFx0cmV0dXJuIG9iai5saW5rcy5maWx0ZXIoZnVuY3Rpb24obGluaykge1xuXHRcdFx0XHRyZXR1cm4gbGluay5yZWwgPT0gcmVsO1xuXHRcdFx0fSlbMF0udXJsO1xuXHRcdH0sXG5cblx0XHR1cmwocGF0aCkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy51cmwocGF0aCk7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXJsSGVscGVyLmpzIiwiaW1wb3J0IHNlYXJjaE9yQXNrUGFuZWwgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwnO1xuaW1wb3J0IHNlYXJjaE9yQXNrT3ZlcmxheSBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5JztcbmltcG9ydCB0b3BpY1JlY29tbWVuZGF0aW9uIGZyb20gJy4vbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNlYXJjaE9yQXNrUGFuZWw6IHNlYXJjaE9yQXNrUGFuZWwsXG5cdHNlYXJjaE9yQXNrT3ZlcmxheTogc2VhcmNoT3JBc2tPdmVybGF5LFxuICAgIHRvcGljUmVjb21tZW5kYXRpb246IHRvcGljUmVjb21tZW5kYXRpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBxdWVzdGlvbkRldGFpbDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICBwb3N0UXVlc3Rpb25Vcmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJy9xdWVzdGlvbnMnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIGlmKHNob3cpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5UT0dHTEVfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9ICFzdGF0ZS5zaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfUVVFU1RJT05fREVUQUlMXShzdGF0ZSwgcXVlc3Rpb25EZXRhaWwpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uRGV0YWlsID0gcXVlc3Rpb25EZXRhaWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgcG9zdFF1ZXN0aW9uKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIHRydWUpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHN0YXRlLnBvc3RRdWVzdGlvblVybCwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdGF0ZS5zZWFyY2hUZXh0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHN0YXRlLnF1ZXN0aW9uRGV0YWlsLFxuICAgICAgICAgICAgICAgIHRvcGljczogc3RhdGUuc2VsZWN0ZWRUb3BpY3MsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10gKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfUEFORUxdIChzdGF0ZSwgc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICBpZihzaG93UGFuZWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvd1BhbmVsID0gc2hvd1BhbmVsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdIChzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10gKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgdXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCd0b3BpY3MnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIHRydWUpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlVG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanMiLCJleHBvcnQgY29uc3QgSU5DUkVNRU5UX0ZPTExPV0VSX0NPVU5UID0gJ0lOQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCc7XG5leHBvcnQgY29uc3QgREVDUkVNRU5UX0ZPTExPV0VSX0NPVU5UID0gJ0RFQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCc7XG5leHBvcnQgY29uc3QgU0VUX0ZPTExPV0VSX0NPVU5UID0gJ1NFVF9GT0xMT1dFUl9DT1VOVCc7XG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX0ZPTExPV0lOR19DT1VOVCA9ICdJTkNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UJztcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UID0gJ0RFQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlQnO1xuZXhwb3J0IGNvbnN0IFNFVF9GT0xMT1dJTkdfQ09VTlQgPSAnU0VUX0ZPTExPV0lOR19DT1VOVCc7XG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX1RPUElDX0NPVU5UID0gJ0lOQ1JFTUVOVF9UT1BJQ19DT1VOVCc7XG5leHBvcnQgY29uc3QgREVDUkVNRU5UX1RPUElDX0NPVU5UID0gJ0RFQ1JFTUVOVF9UT1BJQ19DT1VOVCc7XG5leHBvcnQgY29uc3QgU0VUX1RPUElDX0NPVU5UID0gJ1NFVF9UT1BJQ19DT1VOVCc7XG5leHBvcnQgY29uc3QgQUREX0ZPTExPV0lOR1MgPSAnQUREX0ZPTExPV0lOR1MnO1xuZXhwb3J0IGNvbnN0IEFERF9GT0xMT1dFUlMgPSAnQUREX0ZPTExPV0VSUyc7XG5leHBvcnQgY29uc3QgQUREX1RPUElDUyA9ICdBRERfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBTRVRfVVJMID0gJ1NFVF9VUkwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9hY3Rpb25zLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgZWRpdG9yRWxlbWVudDogbnVsbCxcbiAgICAgICAgcXVlc3Rpb246IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuU0VUX0VESVRPUl9DT05URU5UXSAoc3RhdGUsIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5VUERBVEVfRURJVE9SX0NPTlRFTlRdIChzdGF0ZSwgYm9keSkge1xuICAgICAgICAgICAgaWYoc3RhdGUuY29udGVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNvbnRlbnQuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9FRElUT1JfUVVFU1RJT05dIChzdGF0ZSwgcXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uID0gcXVlc3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9FRElUT1JfRUxFTUVOVF0gKHN0YXRlLCBlZGl0b3JFbGVtZW50KSB7XG4gICAgICAgICAgICBzdGF0ZS5lZGl0b3JFbGVtZW50ID0gZWRpdG9yRWxlbWVudDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNldFF1ZXN0aW9uKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0sIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfRURJVE9SX0NPTlRFTlQsIHBheWxvYWQuYW5zd2VyVGV4dCk7XG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX0VESVRPUl9RVUVTVElPTiwgcGF5bG9hZC5xdWVzdGlvbik7XG4gICAgICAgICAgICBpZihzdGF0ZS5lZGl0b3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuZWRpdG9yRWxlbWVudC5zdW1tZXJub3RlKCdjb2RlJywgcGF5bG9hZC5hbnN3ZXJUZXh0LmJvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2VkaXRvci5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHRvdGFsUGFnZXM6IDIsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBxdWVzdGlvbnM6IFtdLFxuICAgICAgICBxdWVzdGlvblVybDp7fSxcbiAgICAgICAgc2hvd0Fuc3dlckNyZWF0ZU1vZGFsOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuQUREX1FVRVNUSU9OU10gKHN0YXRlLCBxdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9ucyA9IHN0YXRlLnF1ZXN0aW9ucy5jb25jYXQocXVlc3Rpb25zKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX1FVRVNUSU9OXSAoc3RhdGUsIHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbnMuc3BsaWNlKHN0YXRlLnF1ZXN0aW9ucy5pbmRleE9mKHF1ZXN0aW9uKSwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9BU19BTlNXRVJFRF0gKHN0YXRlLCBxdWVzdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25zW3N0YXRlLnF1ZXN0aW9ucy5pbmRleE9mKHF1ZXN0aW9uKV0uYW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfUVVFU1RJT05TX1VSTF0gKHN0YXRlLCB1cmwpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uVXJsID0gdXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5JTkNSRU1FTlRfUEFHRV0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5wYWdlKys7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlVQREFURV9SRVFVRVNUSU5HXSAoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMXSAoc3RhdGUsIHNob3dBbnN3ZXJDcmVhdGVNb2RhbCkge1xuICAgICAgICAgICAgaWYoc2hvd0Fuc3dlckNyZWF0ZU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuYW5zd2VyLWNyZWF0ZS1tb2RhbC1vdmVybGF5Jykuc2Nyb2xsVG9wKDApO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW1hZ2VQb3BPdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5vdGUtaW1hZ2UtcG9wb3ZlclwiKVswXTtcblxuICAgICAgICAgICAgaWYoaW1hZ2VQb3BPdmVyKSBpbWFnZVBvcE92ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgc3RhdGUuc2hvd0Fuc3dlckNyZWF0ZU1vZGFsID0gc2hvd0Fuc3dlckNyZWF0ZU1vZGFsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNldFF1ZXN0aW9uVXJsKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0sIHVybCkge1xuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9RVUVTVElPTlNfVVJMLCB1cmwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZldGNoRGF0YSh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5VUERBVEVfUkVRVUVTVElORywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChzdGF0ZS5xdWVzdGlvblVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJywgJ2Fuc3dlciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdGFsUGFnZXMgPSByZXNwb25zZS5kYXRhLm1ldGEucGFnaW5hdGlvbi50b3RhbF9wYWdlcztcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuQUREX1FVRVNUSU9OUywgcmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuSU5DUkVNRU5UX1BBR0UpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5VUERBVEVfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlVQREFURV9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9xdWVzdGlvbkxpc3QuanMiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgdS1tYXJnaW4tLW5vbmUgYW5zd2VyXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCIgQGNsaWNrPVwic2hvd0Fuc3dlcigpXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCIgdi1pZj1cInNob3dRdWVzdGlvblwiPlxuXHRcdFx0XHRcdFx0PGg0PjxhIDpocmVmPVwiZ2V0VXJsKCdzZWxmX2h0bWwnLCBhbnN3ZXIucXVlc3Rpb24pXCIgQGNsaWNrPVwic3RvcFByb3BhZ2F0aW9uKCRldmVudClcIj57eyBhbnN3ZXIucXVlc3Rpb24udGl0bGUgfX08L2E+PC9oND5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCAgXHQ8dWwgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgOnNyYz1cImdldFVybCgnYXZhdGFyJywgYW5zd2VyLm93bmVyKVwiIGFsdD1cIlwiIGNsYXNzPVwiY2lyY2xlXCI+XG5cdFx0XHRcdFx0XHRcdDxhIDpocmVmPVwiZ2V0VXJsKCdzZWxmX2h0bWwnLCBhbnN3ZXIub3duZXIpXCIgQGNsaWNrPVwic3RvcFByb3BhZ2F0aW9uKCRldmVudClcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBhbnN3ZXIub3duZXIubmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhbnN3ZXItY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiIHYtaHRtbD1cImFuc3dlci5wcmV2aWV3XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiIHYtaWY9XCJhbnN3ZXIucHJldmlldy5sZW5ndGggPj0gMjU4XCI+KG1vcmUpPC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XG5cdFx0XHQgICAgXHQ8c3BhbiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBAY2xpY2s9XCJ1cHZvdGVcIj5cblx0XHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgdXB2b3RlQ291bnQgfX08L3NwYW4+XG5cdFx0XHRcdCAgICBcdDxhIDpzdHlsZT1cIiEgYW5zd2VyLnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfdXA8L2E+XG5cdFx0XHQgICAgXHQ8L3NwYW4+XG5cdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgQGNsaWNrPVwiZG93bnZvdGVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRwNDhcIj50aHVtYl9kb3duPC9hPlxuXHRcdFx0ICAgIFx0PGEgc3R5bGU9XCJjb2xvcjogZ3JleTtcIiBAY2xpY2s9XCJ0b2dnbGVDb21tZW50cygpXCI+Q29tbWVudHMgPHNwYW4+KHt7IGNvbW1lbnRDb3VudCB9fSk8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdDxjb21tZW50LWxpc3QgOmNvbW1lbnRzLXVybD1cImdldFVybCgnY29tbWVudHMnLCBhbnN3ZXIpXCIgQGNvbW1lbnQtcG9zdGVkPVwiaW5jcmVtZW50Q29tbWVudENvdW50KClcIiB2LWlmPVwic2hvd0NvbW1lbnRzXCI+PC9jb21tZW50LWxpc3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuICAgIFx0YW5zd2VyOiB7XG4gICAgXHRcdHR5cGU6IE9iamVjdCxcbiAgICBcdFx0ZGVmYXVsdDogbnVsbCxcbiAgICBcdH0sXG4gICAgXHRzaG93UXVlc3Rpb246IHtcbiAgICBcdFx0dHlwZTogQm9vbGVhbixcbiAgICBcdFx0ZGVmYXVsdDogdHJ1ZSxcbiAgICBcdH0sXG4gICAgfSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIFx0XHRzaG93Q29tbWVudHM6IGZhbHNlXG4gICAgXHR9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHR1cHZvdGVDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IDogMDtcbiAgICBcdH0sXG5cbiAgICBcdGNvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIuY29tbWVudF9jb3VudCA6IDA7XG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG5cbiAgICBcdHNob3dBbnN3ZXIoKSB7XG4gICAgXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC8nICsgdHlwZXMuU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwsIHRydWUpO1xuICAgIFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZmVlZC9zZXRTaG93ZWRBbnN3ZXInLCB0aGlzLmFuc3dlcik7XG4gICAgXHR9LFxuXG4gICAgXHR1cHZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCd1cHZvdGVzJywgdGhpcy5hbnN3ZXIpLCB7fSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdCAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuYW5zd2VyLnVwdm90ZV9jb3VudCArPSAxO1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIudXB2b3RlZCA9IHRydWU7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdGRvd252b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmdldFVybCgnZG93bnZvdGVzJywgdGhpcy5hbnN3ZXIpLCB7fSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdCAgICAgICAgXHRpZihfdGhpcy5hbnN3ZXIudXB2b3RlZClcblx0XHRcdCAgICAgICAgXHRcdF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IHRydWU7XG5cdFx0XHQgICAgICAgIH1cblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgXHRfdGhpcy5hbnN3ZXIuZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdHRvZ2dsZUNvbW1lbnRzKCkge1xuICAgIFx0XHR0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICBcdH0sXG5cbiAgICBcdGluY3JlbWVudENvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0dGhpcy5jb21tZW50Q291bnQrKztcbiAgICBcdH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItcHJldmlldy52dWU/MTU1NGFmZjYiLCI8dGVtcGxhdGU+XG5cdDxmb3JtIG1ldGhvZD1cIlBPU1RcIiA6YWN0aW9uPVwiY29tbWVudGFibGVDb21tZW50c1VybFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczlcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJvZHlcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHYtbW9kZWw9XCJmb3JtRGF0YS5ib2R5XCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczNcIj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiIEBjbGljaz1cInBvc3RDb21tZW50KCRldmVudClcIj5cblx0XHRcdFx0XHRDb21tZW50XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2NvbW1lbnRhYmxlQ29tbWVudHNVcmwnXSxcblxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXF1ZXN0aW5nOiBmYWxzZSxcblx0XHRcdGZvcm1EYXRhOiB7XG5cdFx0XHRcdGJvZHk6IG51bGwsXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRwb3N0Q29tbWVudChldmVudCkge1xuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdFx0aWYoZXZlbnQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuXHRcdFx0aWYoICEgX3RoaXMuZm9ybURhdGEuYm9keSkgcmV0dXJuO1xuXG5cdFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLmNvbW1lbnRhYmxlQ29tbWVudHNVcmwgKyAnP3dpdGg9b3duZXInLCB0aGlzLmZvcm1EYXRhKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy4kZW1pdCgnY29tbWVudC1wb3N0ZWQnLCByZXNwb25zZSk7XG5cdFx0XHRcdCAgICAgICAgX3RoaXMuZm9ybURhdGEuYm9keSA9IG51bGw7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZT8wM2UyMjBlOSIsIjx0ZW1wbGF0ZT5cblx0PHVsIGNsYXNzPVwiY29sbGVjdGlvbiB1LWJvcmRlci0tbm9uZVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjb2xsZWN0aW9uLWl0ZW0gY29sbGVjdGlvbi1pdGVtLWZvcm1cIj5cbiAgICAgICAgICAgIDxjb21tZW50LWNyZWF0ZS1mb3JtIDpjb21tZW50YWJsZS1jb21tZW50cy11cmw9XCJjb21tZW50c1VybFwiIEBjb21tZW50LXBvc3RlZD1cImFkZENvbW1lbnQoJGV2ZW50LmRhdGEpXCI+PC9jb21tZW50LWNyZWF0ZS1mb3JtPiAgICBcbiAgICAgICAgPC9saT5cblx0XHQ8Y29tbWVudCB2LWZvcj1cImNvbW1lbnQgaW4gY29tbWVudHNcIiA6Y29tbWVudD1cImNvbW1lbnRcIj48L2NvbW1lbnQ+XG5cdDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydjb21tZW50c1VybCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbW1lbnRzOiBbXSxcblx0XHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuXHRcdFx0cGFnZTogMVxuXHRcdH1cblx0fSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICBcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoX3RoaXMuY29tbWVudHNVcmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBfdGhpcy5wYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbW1lbnRzID0gX3RoaXMuY29tbWVudHMuY29uY2F0KHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRDb21tZW50KGNvbW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbW1lbnQtcG9zdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tbWVudC1saXN0LnZ1ZT81MWZjYmEyNCIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhciBhdmF0YXItLXNtYWxsIHUtYm9yZGVyLS1ub25lXCI+XG4gICAgPGltZyA6c3JjPVwiZ2V0VXJsKCdhdmF0YXInLCBjb21tZW50Lm93bmVyKVwiIGFsdD1cIlwiIGNsYXNzPVwidS1kaW1lbnNpb24tLXNtYWxsIGNpcmNsZVwiPlxuICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIDxzdHJvbmc+XG4gICAgICAgIDxhIGNsYXNzPVwicHJvZmlsZS1saW5rXCIgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgY29tbWVudC5vd25lcilcIj57eyBjb21tZW50Lm93bmVyLm5hbWUgfX08L2E+XG4gICAgICA8L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICAgPHAgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgY29tbWVudC5ib2R5IH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbiB1LWJvcmRlci0tb25seS1ib3R0b21cIj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCI+e3sgdXB2b3RlQ291bnQgfX08L3NwYW4+XG4gICAgICAgICAgPGEgOnN0eWxlPVwiISBjb21tZW50LnVwdm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfdXA8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGEgOnN0eWxlPVwiISBjb21tZW50LmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJydcIiBAY2xpY2s9XCJkb3dudm90ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX2Rvd248L2E+XG4gICAgICAgIDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cbiAgICAgIDxjb21tZW50LWxpc3QgOmNvbW1lbnRzLXVybD1cImdldFVybCgnY29tbWVudHMnLCBjb21tZW50KVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnY29tbWVudCddLFxuXG4gIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgdXB2b3RlQ291bnQ6IDAsXG4gICAgICBjb21tZW50Q291bnQ6IDAsXG4gICAgICBzaG93Q29tbWVudHM6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnVwdm90ZUNvdW50ID0gdGhpcy5jb21tZW50LnVwdm90ZV9jb3VudDtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IHRoaXMuY29tbWVudC5jb21tZW50X2NvdW50O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cHZvdGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCd1cHZvdGVzJywgdGhpcy5jb21tZW50KSwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgICAgICBfdGhpcy51cHZvdGVDb3VudCArPSAxO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQudXB2b3RlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC5kb3dudm90ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIF90aGlzLnVwdm90ZUNvdW50IC09IDE7XG4gICAgICAgICAgX3RoaXMuY29tbWVudC51cHZvdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZG93bnZvdGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmNvbW1lbnQpLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb21tZW50LnVwdm90ZWQpIHsgX3RoaXMudXB2b3RlQ291bnQgLT0gMTsgfVxuICAgICAgICAgIF90aGlzLmNvbW1lbnQudXB2b3RlZCA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQuZG93bnZvdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIF90aGlzLmNvbW1lbnQuZG93bnZvdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQ29tbWVudHMoKSB7XG4gICAgICB0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICB9LFxuXG4gICAgdXBkYXRlQ29tbWVudENvdW50KCkge1xuICAgICAgdGhpcy5jb21tZW50Q291bnQrKztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbW1lbnQudnVlP2E1NzM0OWZjIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgPHF1ZXN0aW9uIDpxdWVzdGlvbj1cInF1ZXN0aW9uXCIgdi1mb3I9XCJxdWVzdGlvbiBpbiBxdWVzdGlvbnNcIj48L3F1ZXN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiIHYtc2hvdz1cInJlcXVlc3RpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OiAwO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiZmV0Y2hEYXRhKClcIiB2LXNob3c9XCIgISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCI+TG9hZCBtb3JlPC9idXR0b24+XG4gICAgICAgIDxhbnN3ZXItY3JlYXRlLW1vZGFsPjwvYW5zd2VyLWNyZWF0ZS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydxdWVzdGlvblVybCddLFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcmVxdWVzdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5xdWVzdGlvbkxpc3QucmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBxdWVzdGlvbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnF1ZXN0aW9ucztcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC5wYWdlIC0gMTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3RhbFBhZ2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXN0aW9uTGlzdC50b3RhbFBhZ2VzO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncXVlc3Rpb25MaXN0L3NldFF1ZXN0aW9uVXJsJywgdGhpcy5xdWVzdGlvblVybCk7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3F1ZXN0aW9uTGlzdC9mZXRjaERhdGEnKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbi1saXN0LnZ1ZT9jN2NmZDlkOCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYW5zd2VyLXByZXZpZXcudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVlMzk1ZjliIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXItcHJldmlldy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5zd2VyLXByZXZpZXcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlMzk1ZjliXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWUzOTVmOWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQxZGVmMTE1IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbW1lbnQtY3JlYXRlLWZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQxZGVmMTE1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDFkZWYxMTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01NWIzYjFhNCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29tbWVudC1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29tbWVudC1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NWIzYjFhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU1YjNiMWE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjBlZmZmZWQhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbW1lbnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29tbWVudC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjBlZmZmZWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMGVmZmZlZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9xdWVzdGlvbi1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1jODNjYjc5YSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcXVlc3Rpb24tbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbi1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jODNjYjc5YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM4M2NiNzlhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDE5IDIwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyIGF2YXRhci0tc21hbGwgdS1ib3JkZXItLW5vbmVcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LWRpbWVuc2lvbi0tc21hbGwgY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS5jb21tZW50Lm93bmVyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfYygnc3Ryb25nJywgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2ZpbGUtbGlua1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uY29tbWVudC5vd25lcilcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tZW50Lm93bmVyLm5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudC5ib2R5KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvbiB1LWJvcmRlci0tb25seS1ib3R0b21cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXB2b3RlXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXB2b3RlQ291bnQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmNvbW1lbnQudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uY29tbWVudC5kb3dudm90ZWQgPyAnY29sb3I6IGdyZXk7JyA6ICcnKSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl9kb3duXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImNvbG9yXCI6IFwiZ3JleVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvZ2dsZUNvbW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDb21tZW50cyBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uY29tbWVudENvdW50KSArIFwiKVwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NvbW1lbnRzKSA/IF9jKCdjb21tZW50LWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudHMtdXJsXCI6IF92bS5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLmNvbW1lbnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMGVmZmZlZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjBlZmZmZWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvY29tbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgXCJhY3Rpb25cIjogX3ZtLmNvbW1lbnRhYmxlQ29tbWVudHNVcmxcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzOVwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybURhdGEuYm9keSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLmJvZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwiYm9keVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLmJvZHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybURhdGEuYm9keSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHMzXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwibmFtZVwiOiBcImFjdGlvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBvc3RDb21tZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRDb21tZW50XFxuXFx0XFx0XFx0XCIpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDFkZWYxMTVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQxZGVmMTE1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uIHUtYm9yZGVyLS1ub25lXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gY29sbGVjdGlvbi1pdGVtLWZvcm1cIlxuICB9LCBbX2MoJ2NvbW1lbnQtY3JlYXRlLWZvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29tbWVudGFibGUtY29tbWVudHMtdXJsXCI6IF92bS5jb21tZW50c1VybFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hZGRDb21tZW50KCRldmVudC5kYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uY29tbWVudHMpLCBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgcmV0dXJuIF9jKCdjb21tZW50Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJjb21tZW50XCI6IGNvbW1lbnRcbiAgICAgIH1cbiAgICB9KVxuICB9KV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU1YjNiMWE0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01NWIzYjFhNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9jb21tZW50LWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd0Fuc3dlcigpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5zaG93UXVlc3Rpb24pID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0uYW5zd2VyLnF1ZXN0aW9uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5xdWVzdGlvbi50aXRsZSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5nZXRVcmwoJ2F2YXRhcicsIF92bS5hbnN3ZXIub3duZXIpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmdldFVybCgnc2VsZl9odG1sJywgX3ZtLmFuc3dlci5vd25lcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3RvcFByb3BhZ2F0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5vd25lci5uYW1lKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJpbmxpbmVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0uYW5zd2VyLnByZXZpZXcpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5hbnN3ZXIucHJldmlldy5sZW5ndGggPj0gMjU4KSA/IF9jKCdhJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIihtb3JlKVwiKV0pIDogX3ZtLl9lKCldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwdm90ZVxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwdm90ZUNvdW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIudXB2b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpXG4gIH0sIFtfdm0uX3YoXCJ0aHVtYl91cFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIGRwNDhcIixcbiAgICBzdHlsZTogKCFfdm0uYW5zd2VyLmRvd252b3RlZCA/ICdjb2xvcjogZ3JleTsnIDogJycpLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dudm90ZVxuICAgIH1cbiAgfSwgW192bS5fdihcInRodW1iX2Rvd25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCJncmV5XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlQ29tbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbW1lbnRzIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jb21tZW50Q291bnQpICsgXCIpXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93Q29tbWVudHMpID8gX2MoJ2NvbW1lbnQtbGlzdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb21tZW50cy11cmxcIjogX3ZtLmdldFVybCgnY29tbWVudHMnLCBfdm0uYW5zd2VyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVlMzk1ZjliXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZTM5NWY5YiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHt9LCBbX3ZtLl9sKChfdm0ucXVlc3Rpb25zKSwgZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gX2MoJ3F1ZXN0aW9uJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJxdWVzdGlvblwiOiBxdWVzdGlvblxuICAgICAgfVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5yZXF1ZXN0aW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVxdWVzdGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiXG4gIH0sIFtfdm0uX20oMCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICBleHByZXNzaW9uOiBcIiAhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIwXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZmV0Y2hEYXRhKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2FkIG1vcmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Fuc3dlci1jcmVhdGUtbW9kYWwnKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyLWxheWVyIHNwaW5uZXItYmx1ZS1vbmx5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2FwLXBhdGNoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciByaWdodFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiXG4gIH0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWM4M2NiNzlhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1jODNjYjc5YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggMTkgMjAiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0b3RhbFBhZ2VzOiAyLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgYW5zd2VyczogW10sXG4gICAgICAgIGZlZWRVcmxzOnt9LFxuICAgICAgICBzaG93QW5zd2VyTW9kYWw6IGZhbHNlLFxuICAgICAgICBzaG93ZWRBbnN3ZXI6IG51bGwsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgYWRkQW5zd2VycyhzdGF0ZSwgYW5zd2Vycykge1xuICAgICAgICAgICAgc3RhdGUuYW5zd2VycyA9IHN0YXRlLmFuc3dlcnMuY29uY2F0KGFuc3dlcnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEZlZWRVcmwoc3RhdGUsIHVybCkge1xuICAgICAgICAgICAgc3RhdGUuZmVlZFVybHMgPSB1cmw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5jcmVtZW50UGFnZShzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUucGFnZSsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZVJlcXVlc3Rpbmcoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19BTlNXRVJfU0hPV19NT0RBTF0gKHN0YXRlLCBzaG93QW5zd2VyTW9kYWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dBbnN3ZXJNb2RhbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0ZS5zaG93QW5zd2VyTW9kYWwgPSBzaG93QW5zd2VyTW9kYWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XRURfQU5TV0VSXSAoc3RhdGUsIHNob3dlZEFuc3dlcikge1xuICAgICAgICAgICAgc3RhdGUuc2hvd2VkQW5zd2VyID0gc2hvd2VkQW5zd2VyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEFuc3dlcihzdGF0ZSwgYW5zd2VyKSB7XG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXJzLnVuc2hpZnQoYW5zd2VyKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBmZXRjaERhdGEoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHN0YXRlLmZlZWRVcmxzLmFuc3dlcnMsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aDogWydvd25lcicsICdxdWVzdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdGFsUGFnZXMgPSByZXNwb25zZS5kYXRhLm1ldGEucGFnaW5hdGlvbi50b3RhbF9wYWdlcztcbiAgICAgICAgICAgICAgICBjb21taXQoJ2FkZEFuc3dlcnMnLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCgnaW5jcmVtZW50UGFnZScpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFNob3dlZEFuc3dlcih7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9LCBzaG93ZWRBbnN3ZXIpIHtcbiAgICAgICAgICAgIGlmKHNob3dlZEFuc3dlciA/ICEgc2hvd2VkQW5zd2VyLmJvZHkgOiBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGdldFVybCgnc2VsZicsIHNob3dlZEFuc3dlciksIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmx5OiBbJ2JvZHknXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dlZEFuc3dlci5ib2R5ID0gcmVzcG9uc2UuZGF0YS5ib2R5O1xuICAgICAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1dFRF9BTlNXRVIsIHNob3dlZEFuc3dlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlUmVxdWVzdGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb21taXQoJ3VwZGF0ZVJlcXVlc3RpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPV0VEX0FOU1dFUiwgc2hvd2VkQW5zd2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvbW9kdWxlcy9mZWVkLmpzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMjBweDtcIj5cbiAgICAgICAgICAgIDxoND48YSA6aHJlZj1cInF1ZXN0aW9uID8gZ2V0VXJsKCdzZWxmX2h0bWwnLCBxdWVzdGlvbikgOiAnJ1wiPnt7IHF1ZXN0aW9uID8gcXVlc3Rpb24udGl0bGUgOiAnJyB9fTwvYT48L2g0PlxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJzaG93UXVlc3Rpb25EZXRhaWwgPyAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCcgOiAnYW5zd2VyQ3JlYXRlRm9ybS1xdWVzdGlvbkRldGFpbCBzaHJpbmtlZCdcIiBAY2xpY2s9XCJzaG93UXVlc3Rpb25EZXRhaWwgPSAhc2hvd1F1ZXN0aW9uRGV0YWlsXCI+XG4gICAgICAgICAgICAgICAge3sgcXVlc3Rpb24gPyBxdWVzdGlvbi5ib2R5IDogJycgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiJHZpZW5kZXIudHJlYXN1cmUudXNlciA/IGdldFVybCgnYXZhdGFyJywgJHZpZW5kZXIudHJlYXN1cmUudXNlcikgOiAnJ1wiIGFsdD1cIlwiIGNsYXNzPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHZpZW5kZXIudHJlYXN1cmUudXNlciA/ICR2aWVuZGVyLnRyZWFzdXJlLnVzZXIubmFtZSA6ICcnIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXItY3JlYXRlLWVkaXRvclwiIHJlZj1cImVkaXRvclwiPjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cInN1Ym1pdFwiIEBjbGljaz1cImFuc3dlcigkZXZlbnQpXCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dRdWVzdGlvbkRldGFpbDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbnRlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWRpdG9yLmNvbnRlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcXVlc3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWRpdG9yLnF1ZXN0aW9uO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBxdWVzdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXN0aW9uRGV0YWlsID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBsZXQgcG9wT3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGUtcG9wb3ZlcicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wT3Zlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBwb3BPdmVyW2ldO1xuICAgICAgICAgICAgcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApO1xuICAgICAgICB9XG5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHNlbGYuJHJlZnMuZWRpdG9yKS5zdW1tZXJub3RlKHtcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ2JvbGQnLCAnaXRhbGljJ11dLFxuICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJ11dLFxuICAgICAgICAgICAgICAgICAgICBbJ2luc2VydCcsIFsnbGluaycsICdwaWN0dXJlJ11dLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbihjb250ZW50cywgJGVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5jb21taXQoJ2VkaXRvci8nICsgdHlwZXMuVVBEQVRFX0VESVRPUl9DT05URU5ULCBjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdvbi1jaGFuZ2UnLCBjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2VkaXRvci8nICsgdHlwZXMuU0VUX0VESVRPUl9FTEVNRU5ULCAkKHNlbGYuJHJlZnMuZWRpdG9yKSk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYW5zd2VyKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZihzZWxmLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgaWYoICEgc2VsZi5jb250ZW50LmJvZHkpIHJldHVybjtcblxuICAgICAgICAgICAgc2VsZi5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLmdldFVybCgnYW5zd2VycycsIHRoaXMucXVlc3Rpb24pICsgJz93aXRoPW93bmVyJywgc2VsZi5jb250ZW50KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ2Fuc3dlci1wb3N0ZWQnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHN0b3JlLmNvbW1pdCgnZWRpdG9yLycgKyB0eXBlcy5VUERBVEVfRURJVE9SX0NPTlRFTlQsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc3RvcmUuY29tbWl0KCdxdWVzdGlvbkxpc3QvJyArIHR5cGVzLlNFVF9BU19BTlNXRVJFRCwgc2VsZi5xdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHNlbGYuJHJlZnMuZWRpdG9yKS5zdW1tZXJub3RlKCdjb2RlJywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVRdWVzdGlvbkRldGFpbCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1F1ZXN0aW9uRGV0YWlsID0gISB0aGlzLnNob3dRdWVzdGlvbkRldGFpbDtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFuc3dlci1jcmVhdGUtZm9ybS52dWU/NmQwOWU3MGMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFuc3dlckNyZWF0ZU1vZGFsLW92ZXJsYXlcIiBAY2xpY2s9XCJoaWRlQW5zd2VyQ3JlYXRlTW9kYWwoKVwiIHYtc2hvdz1cInNob3dNb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyQ3JlYXRlTW9kYWxcIiBAY2xpY2s9XCJtb2RhbENsaWNrSGFuZGxlKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJDcmVhdGVNb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGFuc3dlci1jcmVhdGUtZm9ybSByZWY9XCJmb3JtXCIgQGFuc3dlci1wb3N0ZWQ9XCJoaWRlQW5zd2VyQ3JlYXRlTW9kYWwoJGV2ZW50KVwiPjwvYW5zd2VyLWNyZWF0ZS1mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYWN0aW9uXCI+XG4gICAgICAgICAgICA8c3Bhbj5YPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlc3Rpb25MaXN0LnNob3dBbnN3ZXJDcmVhdGVNb2RhbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc2hvd01vZGFsKCkge1xuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYodGhpcy5zaG93TW9kYWwpIHtcbiAgICAgICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAkKF90aGlzLiRyZWZzLmZvcm0uJHJlZnMuZWRpdG9yKS5zdW1tZXJub3RlKCdlZGl0b3IuZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG1vZGFsQ2xpY2tIYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVBbnN3ZXJDcmVhdGVNb2RhbChhbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgncXVlc3Rpb25MaXN0LycgKyB0eXBlcy5TRVRfU0hPV19BTlNXRVJfQ1JFQVRFX01PREFMLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdmZWVkL2FkZEFuc3dlcicsIGFuc3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZT9iZmQyNmJmYyIsIjx0ZW1wbGF0ZT5cblx0PGRpdiByZWY9XCJtb2RhbFwiIGNsYXNzPVwiYW5zd2VyLXNob3ctbW9kYWwtb3ZlcmxheVwiIEBjbGljaz1cImhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXCIgdi1zaG93PVwic2hvd0Fuc3dlck1vZGFsXCI+XG5cdFx0PGRpdiBjbGFzcz1cImFuc3dlci1zaG93LW1vZGFsXCIgQGNsaWNrPVwibW9kYWxDbGlja0hhbmRsZSgkZXZlbnQpXCI+XG5cdFx0XHQ8YW5zd2VyIDphbnN3ZXI9XCJhbnN3ZXJcIiB2LWlmPVwiYW5zd2VyID8gYW5zd2VyLmJvZHkgOiBmYWxzZVwiPjwvYW5zd2VyPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyB0b3A6IGNhbGMoNTAlIC0gNzVweCk7IGxlZnQ6IGNhbGMoNTAlIC0gMThweCk7XCIgdi1lbHNlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBzcGlubmVyLWJsdWUtb25seVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYWN0aW9uXCI+XG4gICAgICAgICAgICA8c3Bhbj5YPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnYW5zd2VyJ10sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHRhbnN3ZXIoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnNob3dlZEFuc3dlcjtcbiAgICBcdH0sXG5cbiAgICBcdHNob3dBbnN3ZXJNb2RhbCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQuc2hvd0Fuc3dlck1vZGFsO1xuICAgIFx0fVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG1vZGFsQ2xpY2tIYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpIHtcbiAgICAgICAgXHQkKHRoaXMuJHJlZnMubW9kYWwpLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC8nICsgdHlwZXMuU0VUX1NIT1dfQU5TV0VSX1NIT1dfTU9EQUwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhbnN3ZXItc2hvdy1tb2RhbC52dWU/YmY3OWRlZGEiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgdS1tYXJnaW4tLW5vbmUgYW5zd2VyXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCJhbnN3ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiIHYtaWY9XCJzaG93UXVlc3Rpb25cIj5cblx0XHRcdFx0XHRcdDxoND48YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLnF1ZXN0aW9uKVwiPnt7IGFuc3dlci5xdWVzdGlvbi50aXRsZSB9fTwvYT48L2g0PlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8aHIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzMHB4O1wiPlxuXHRcdFx0XHQgIFx0PHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJnZXRVcmwoJ2F2YXRhcicsIGFuc3dlci5vd25lcilcIiBhbHQ9XCJcIiBjbGFzcz1cImNpcmNsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSA6aHJlZj1cImdldFVybCgnc2VsZl9odG1sJywgYW5zd2VyLm93bmVyKVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGFuc3dlci5vd25lci5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFuc3dlci1jb250ZW50XCIgdi1odG1sPVwiYW5zd2VyLmJvZHlcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuXHRcdFx0ICAgIFx0PHNwYW4gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgQGNsaWNrPVwidXB2b3RlXCI+XG5cdFx0XHRcdCAgICBcdDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IHVwdm90ZUNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHQgICAgXHQ8YSA6c3R5bGU9XCIhIGFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiPnRodW1iX3VwPC9hPlxuXHRcdFx0ICAgIFx0PC9zcGFuPlxuXHRcdFx0ICAgIFx0PGEgOnN0eWxlPVwiISBhbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJ1wiIEBjbGljaz1cImRvd252b3RlXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkcDQ4XCI+dGh1bWJfZG93bjwvYT5cblx0XHRcdCAgICBcdDxhIHN0eWxlPVwiY29sb3I6IGdyZXk7XCIgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCJnZXRVcmwoJ2NvbW1lbnRzJywgYW5zd2VyKVwiIEBjb21tZW50LXBvc3RlZD1cImluY3JlbWVudENvbW1lbnRDb3VudCgpXCIgdi1pZj1cInNob3dDb21tZW50c1wiPjwvY29tbWVudC1saXN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICBcdGFuc3dlcjoge1xuICAgIFx0XHR0eXBlOiBPYmplY3QsXG4gICAgXHRcdGRlZmF1bHQ6IG51bGwsXG4gICAgXHR9LFxuICAgIFx0c2hvd1F1ZXN0aW9uOiB7XG4gICAgXHRcdHR5cGU6IEJvb2xlYW4sXG4gICAgXHRcdGRlZmF1bHQ6IHRydWUsXG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1peGluczogW3JlcXVpcmUoJ3ZpZW5kZXJfY29yZS9qcy9taXhpbnMvdXJsSGVscGVyJyldLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgXHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIFx0XHRzaG93Q29tbWVudHM6IGZhbHNlXG4gICAgXHR9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgXHR1cHZvdGVDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IDogMDtcbiAgICBcdH0sXG5cbiAgICBcdGNvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuYW5zd2VyID8gdGhpcy5hbnN3ZXIuY29tbWVudF9jb3VudCA6IDA7XG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdHVwdm90ZSgpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZihfdGhpcy5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICBcdFx0X3RoaXMucmVxdWVzdGluZyA9IHRydWU7XG5cblx0XHRcdGF4aW9zLnBvc3QodGhpcy5nZXRVcmwoJ3Vwdm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0ICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcblx0XHRcdFx0ICAgICAgICBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50ICs9IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gdHJ1ZTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwNCkge1xuXHRcdFx0XHQgICAgICAgIF90aGlzLmFuc3dlci51cHZvdGVfY291bnQgLT0gMTtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLnVwdm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0XHQgICAgXHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybCgnbG9naW4nKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuICAgIFx0fSxcblxuICAgIFx0ZG93bnZvdGUoKSB7XG4gICAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBcdFx0aWYoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KHRoaXMuZ2V0VXJsKCdkb3dudm90ZXMnLCB0aGlzLmFuc3dlciksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0ICAgICAgICBcdGlmKF90aGlzLmFuc3dlci51cHZvdGVkKSBfdGhpcy5hbnN3ZXIudXB2b3RlX2NvdW50IC09IDE7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci51cHZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICBcdF90aGlzLmFuc3dlci5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMuYW5zd2VyLmRvd252b3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdCAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRcdCAgICBcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG4gICAgXHR9LFxuXG4gICAgXHR0b2dnbGVDb21tZW50cygpIHtcbiAgICBcdFx0dGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XG4gICAgXHR9LFxuXG4gICAgXHRpbmNyZW1lbnRDb21tZW50Q291bnQoKSB7XG4gICAgXHRcdHRoaXMuY29tbWVudENvdW50Kys7XG4gICAgXHR9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYW5zd2VyLnZ1ZT8zOWVjYzhiZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgIDxhbnN3ZXItcHJldmlldyA6YW5zd2VyPVwiYW5zd2VyXCIgdi1mb3I9XCJhbnN3ZXIgaW4gYW5zd2Vyc1wiIHYtaWY9XCJhbnN3ZXJzWzBdID8gYW5zd2Vyc1swXS5wcmV2aWV3IDogdHJ1ZVwiIDpzaG93LXF1ZXN0aW9uPVwib3B0aW9ucy5hbnN3ZXJzLnNob3dRdWVzdGlvblwiPjwvYW5zd2VyLXByZXZpZXc+XG4gICAgICAgIDxhbnN3ZXIgOmFuc3dlcj1cImFuc3dlclwiIHYtZm9yPVwiYW5zd2VyIGluIGFuc3dlcnNcIiB2LWVsc2U+PC9hbnN3ZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXIgcHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIgdi1zaG93PVwicmVxdWVzdGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB2LXNob3c9XCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDA7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBAY2xpY2s9XCJmZXRjaERhdGEoKVwiPkxvYWQgbW9yZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBmZWVkVXJsczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2Vyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1ZXN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICByZXF1ZXN0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQucmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBhbnN3ZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQuYW5zd2VycztcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZlZWQucGFnZSAtIDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG90YWxQYWdlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5mZWVkLnRvdGFsUGFnZXM7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZmVlZC9zZXRGZWVkVXJsJywgdGhpcy5mZWVkVXJscyk7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZlZWQvZmV0Y2hEYXRhJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmZWVkLWxpc3QudnVlPzU0OWQ5ZDY3IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IHUtbWFyZ2luLS1ub25lIHF1ZXN0aW9uXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCIhIChxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IHRydWUpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj48aDQ+PGEgOmhyZWY9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcXVlc3Rpb25PYmopXCI+e3sgcXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai50aXRsZSA6ICcnIH19PC9hPjwvaDQ+PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImV4cGFuZFF1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnXCIgQGNsaWNrPVwiZXhwYW5kUXVlc3Rpb25EZXRhaWwgPSAhZXhwYW5kUXVlc3Rpb25EZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcXVlc3Rpb25PYmogPyBxdWVzdGlvbk9iai5ib2R5IDogJycgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XG5cdFx0XHQgICAgXHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwic2hvd0Fuc3dlckNyZWF0ZU1vZGFsKClcIlxuXHRcdFx0ICAgIFx0XHR2LWlmPVwiICEgKHF1ZXN0aW9uT2JqID8gcXVlc3Rpb25PYmouYW5zd2VyZWQgOiB0cnVlKVwiPlxuXHRcdFx0ICAgIFx0XHRBbnN3ZXJcblx0XHRcdCAgICBcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiZ3JleS10ZXh0IGRhcmtlbi0zXCIgdi1lbHNlPlxuXHRcdFx0XHRcdFx0QW5zd2VyZWRcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHQgICAgXHQ8YSBAY2xpY2s9XCJkb3dudm90ZVwiPkRvd252b3RlPC9hPlxuXHRcdFx0ICAgIFx0PGEgQGNsaWNrPVwidG9nZ2xlQ29tbWVudHMoKVwiPkNvbW1lbnRzIDxzcGFuPih7eyBjb21tZW50Q291bnQgfX0pPC9zcGFuPjwvYT5cblx0XHRcdFx0XHQ8Y29tbWVudC1saXN0IDpjb21tZW50cy11cmw9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnY29tbWVudHMnLCBxdWVzdGlvbk9iailcIiBAY29tbWVudC1wb3N0ZWQ9XCJpbmNyZW1lbnRDb21tZW50Q291bnQoKVwiIHYtaWY9XCJzaG93Q29tbWVudHNcIj48L2NvbW1lbnQtbGlzdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiIHYtaWY9XCJxdWVzdGlvbk9iaiA/IHF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IGZhbHNlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3Ryb25nPllvdSBkb3dudm90ZWQgdGhpcyBxdWVzdGlvbjwvc3Ryb25nPlxuXHRcdFx0XHRcdDxwPkRvd252b3RpbmcgbG93LXF1YWxpdHkgY29udGVudCBpbXByb3ZlcyBWaWVuZGVyIGZvciBldmVyeW9uZS48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cblx0XHRcdCAgICBcdDxhIEBjbGljaz1cImRvd252b3RlXCI+VW5kbzwvYT5cblx0XHRcdCAgICBcdDwhLS0gPGEgQGNsaWNrPVwiZG93bnZvdGVcIj5SZXBvcnQ8L2E+IC0tPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydxdWVzdGlvbicsICd1cmwnLCAnc2hvd0RldGFpbCddLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRRdWVzdGlvbkRldGFpbDogZmFsc2UsXG4gICAgICAgICAgICBxdWVzdGlvbk9iajogbnVsbCxcbiAgICAgICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdXB2b3RlQ291bnQ6IDAsXG4gICAgICAgICAgICBjb21tZW50Q291bnQ6IDAsXG4gICAgICAgICAgICBzaG93Q29tbWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgc3RhdGljUHJlbG9hZGVyczogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVlc3Rpb24tc3RhdGljLXByZWxvYWRlcicpLFxuICAgICAgICAgICAgYW5zd2VyVGV4dDoge1xuICAgICAgICAgICAgICAgIGJvZHk6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICBcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gaWYgdGhlIGFyZ3VtZW50IGlzIGFuIHF1ZXN0aW9uIG9iamVjdCwgdXNlIGl0LlxuICAgICAgICAvLyBpZiB0aGUgYXJndW1lbnQgaXMgYW4gdXJsLCBmZXRoIHF1ZXN0aW9uIGZyb20gdGhlcmUuXG4gICAgXHRpZiAoX3RoaXMucXVlc3Rpb24pIHtcbiAgICBcdFx0X3RoaXMucXVlc3Rpb25PYmogPSBfdGhpcy5xdWVzdGlvbjtcblx0ICAgIFx0X3RoaXMudXB2b3RlQ291bnQgPSBfdGhpcy5xdWVzdGlvbi51cHZvdGVfY291bnQ7XG5cdCAgICBcdF90aGlzLmNvbW1lbnRDb3VudCA9IF90aGlzLnF1ZXN0aW9uLmNvbW1lbnRfY291bnQ7XG4gICAgICAgICAgICBfdGhpcy5oaWRlU3RhdGljUHJlbG9hZGVycygpO1xuICAgIFx0fSBlbHNlIGlmIChfdGhpcy51cmwpIHtcbiAgICBcdFx0dmFyIHVybCA9IF90aGlzLnVybDtcblxuXHRcdFx0YXhpb3MuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoOiBbJ293bmVyJ10sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnF1ZXN0aW9uT2JqID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBfdGhpcy51cHZvdGVDb3VudCA9IHJlc3BvbnNlLmRhdGEudXB2b3RlX2NvdW50O1xuICAgIFx0XHRcdF90aGlzLmNvbW1lbnRDb3VudCA9IHJlc3BvbnNlLmRhdGEuY29tbWVudF9jb3VudDtcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWRlU3RhdGljUHJlbG9hZGVycygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHRocm93ICdxdWVzdGlvbiBhbmQgdXJsIG5vdCBkZWZpbmVkLic7XG4gICAgXHR9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRpY1ByZWxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGljUHJlbG9hZGVyc1tpXS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMCc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoaWRlU3RhdGljUHJlbG9hZGVycygpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0aWNQcmVsb2FkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNQcmVsb2FkZXJzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICBcdHNob3dBbnN3ZXJDcmVhdGVNb2RhbCgpIHtcbiAgICBcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdxdWVzdGlvbkxpc3QvJyArIHR5cGVzLlNFVF9TSE9XX0FOU1dFUl9DUkVBVEVfTU9EQUwsIHRydWUpO1xuICAgIFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZWRpdG9yL3NldFF1ZXN0aW9uJywge1xuICAgIFx0XHRcdHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uT2JqLFxuICAgIFx0XHRcdGFuc3dlclRleHQ6IHRoaXMuYW5zd2VyVGV4dFxuICAgIFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdGRvd252b3RlKCkge1xuICAgIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgXHRcdGlmKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgIFx0XHRfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0YXhpb3MucG9zdCh0aGlzLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdkb3dudm90ZXMnLCBfdGhpcy5xdWVzdGlvbk9iaiksIHt9KVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuXHRcdFx0XHQgICAgXHRfdGhpcy5xdWVzdGlvbk9iai5kb3dudm90ZWQgPSB0cnVlO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpIHtcblx0XHRcdFx0ICAgIFx0X3RoaXMucXVlc3Rpb25PYmouZG93bnZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0ICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdHRvZ2dsZUNvbW1lbnRzKCkge1xuICAgIFx0XHR0aGlzLnNob3dDb21tZW50cyA9ICF0aGlzLnNob3dDb21tZW50cztcbiAgICBcdH0sXG5cbiAgICBcdGluY3JlbWVudENvbW1lbnRDb3VudCgpIHtcbiAgICBcdFx0dGhpcy5jb21tZW50Q291bnQrKztcbiAgICBcdH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbi52dWU/ZTFjYjcwZGMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzdhZGQyYzghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1mb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFuc3dlci1jcmVhdGUtZm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzdhZGQyYzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03N2FkZDJjOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kM2I5YjI0ZSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kM2I5YjI0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQzYjliMjRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLWNyZWF0ZS1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXItc2hvdy1tb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTJmNTM4ZGEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXItc2hvdy1tb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTJmNTM4ZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MmY1MzhkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbnN3ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA3NTRkM2MwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hbnN3ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbnN3ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA3NTRkM2MwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDc1NGQzYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDkgMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZlZWQtbGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTI5ZTU3MGEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZlZWQtbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZmVlZC1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZlZWQtbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTI5ZTU3MGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MjllNTcwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcXVlc3Rpb24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTczZmM5ODcwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9xdWVzdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcXVlc3Rpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTczZmM5ODcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzNmYzk4NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHUtbWFyZ2luLS1ub25lIGFuc3dlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzMTJcIlxuICB9LCBbKF92bS5hbnN3ZXIpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHUtbWFyZ2luLS1ub25lIHUtYm94LXNoYWRvdy0tbm9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gIH0sIFsoX3ZtLnNob3dRdWVzdGlvbikgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW19jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5hbnN3ZXIucXVlc3Rpb24pXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYW5zd2VyLnF1ZXN0aW9uLnRpdGxlKSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIzMHB4XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvblwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZ2V0VXJsKCdhdmF0YXInLCBfdm0uYW5zd2VyLm93bmVyKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5hbnN3ZXIub3duZXIpXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hbnN3ZXIub3duZXIubmFtZSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyLWNvbnRlbnRcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5hbnN3ZXIuYm9keSlcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb25cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXB2b3RlXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXB2b3RlQ291bnQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBkcDQ4XCIsXG4gICAgc3R5bGU6ICghX3ZtLmFuc3dlci51cHZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJylcbiAgfSwgW192bS5fdihcInRodW1iX3VwXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgZHA0OFwiLFxuICAgIHN0eWxlOiAoIV92bS5hbnN3ZXIuZG93bnZvdGVkID8gJ2NvbG9yOiBncmV5OycgOiAnJyksXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwidGh1bWJfZG93blwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjb2xvclwiOiBcImdyZXlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVDb21tZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tbWVudHMgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmNvbW1lbnRDb3VudCkgKyBcIilcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDb21tZW50cykgPyBfYygnY29tbWVudC1saXN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRzLXVybFwiOiBfdm0uZ2V0VXJsKCdjb21tZW50cycsIF92bS5hbnN3ZXIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjb21tZW50LXBvc3RlZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudENvbW1lbnRDb3VudCgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSldKSA6IF92bS5fZSgpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wNzU0ZDNjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDc1NGQzYzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA5IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7fSwgW192bS5fbCgoX3ZtLmFuc3dlcnMpLCBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICByZXR1cm4gKF92bS5hbnN3ZXJzWzBdID8gX3ZtLmFuc3dlcnNbMF0ucHJldmlldyA6IHRydWUpID8gX2MoJ2Fuc3dlci1wcmV2aWV3Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhbnN3ZXJcIjogYW5zd2VyLFxuICAgICAgICBcInNob3ctcXVlc3Rpb25cIjogX3ZtLm9wdGlvbnMuYW5zd2Vycy5zaG93UXVlc3Rpb25cbiAgICAgIH1cbiAgICB9KSA6IF92bS5fbCgoX3ZtLmFuc3dlcnMpLCBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICAgIHJldHVybiBfYygnYW5zd2VyJywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiYW5zd2VyXCI6IGFuc3dlclxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5yZXF1ZXN0aW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVxdWVzdGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicHJlbG9hZGVyIHByZWxvYWRlci13cmFwcGVyIHNtYWxsIGFjdGl2ZVwiXG4gIH0sIFtfdm0uX20oMCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICBleHByZXNzaW9uOiBcIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjBcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mZXRjaERhdGEoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvYWQgbW9yZVwiKV0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciBsZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXAtcGF0Y2hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTI5ZTU3MGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTUyOWU1NzBhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zaG93QW5zd2VyTW9kYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93QW5zd2VyTW9kYWxcIlxuICAgIH1dLFxuICAgIHJlZjogXCJtb2RhbFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlci1zaG93LW1vZGFsLW92ZXJsYXlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhpZGVBbnN3ZXJDcmVhdGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItc2hvdy1tb2RhbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubW9kYWxDbGlja0hhbmRsZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5hbnN3ZXIgPyBfdm0uYW5zd2VyLmJvZHkgOiBmYWxzZSkgPyBfYygnYW5zd2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFuc3dlclwiOiBfdm0uYW5zd2VyXG4gICAgfVxuICB9KSA6IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJlbG9hZGVyLXdyYXBwZXIgc21hbGwgYWN0aXZlXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgXCJ0b3BcIjogXCJjYWxjKDUwJSAtIDc1cHgpXCIsXG4gICAgICBcImxlZnRcIjogXCJjYWxjKDUwJSAtIDE4cHgpXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1ibHVlLW9ubHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGUtY2xpcHBlciBsZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJnYXAtcGF0Y2hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCJcbiAgfSldKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWFjdGlvblwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJYXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTUyZjUzOGRhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01MmY1MzhkYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItc2hvdy1tb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgOSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyB1LW1hcmdpbi0tbm9uZSBxdWVzdGlvblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzMTJcIlxuICB9LCBbKCEoX3ZtLnF1ZXN0aW9uT2JqID8gX3ZtLnF1ZXN0aW9uT2JqLmRvd252b3RlZCA6IHRydWUpKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB1LW1hcmdpbi0tbm9uZSB1LWJveC1zaGFkb3ctLW5vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIF92bS5xdWVzdGlvbk9iailcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai50aXRsZSA6ICcnKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogX3ZtLmV4cGFuZFF1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZXhwYW5kUXVlc3Rpb25EZXRhaWwgPSAhX3ZtLmV4cGFuZFF1ZXN0aW9uRGV0YWlsXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucXVlc3Rpb25PYmogPyBfdm0ucXVlc3Rpb25PYmouYm9keSA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9uXCJcbiAgfSwgWyghKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai5hbnN3ZXJlZCA6IHRydWUpKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zaG93QW5zd2VyQ3JlYXRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdCAgICBcXHRcXHRBbnN3ZXJcXG5cXHRcXHRcXHQgICAgXFx0XCIpXSkgOiBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LXRleHQgZGFya2VuLTNcIlxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0QW5zd2VyZWRcXG5cXHRcXHRcXHRcXHRcXHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRvd252b3RlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG93bnZvdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVDb21tZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ29tbWVudHMgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmNvbW1lbnRDb3VudCkgKyBcIilcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDb21tZW50cykgPyBfYygnY29tbWVudC1saXN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbW1lbnRzLXVybFwiOiBfdm0uJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2NvbW1lbnRzJywgX3ZtLnF1ZXN0aW9uT2JqKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY29tbWVudC1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pbmNyZW1lbnRDb21tZW50Q291bnQoKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5xdWVzdGlvbk9iaiA/IF92bS5xdWVzdGlvbk9iai5kb3dudm90ZWQgOiBmYWxzZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdS1tYXJnaW4tLW5vbmUgdS1ib3gtc2hhZG93LS1ub25lXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWFjdGlvblwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZG93bnZvdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmRvXCIpXSldKV0pIDogX3ZtLl9lKCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJZb3UgZG93bnZvdGVkIHRoaXMgcXVlc3Rpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiRG93bnZvdGluZyBsb3ctcXVhbGl0eSBjb250ZW50IGltcHJvdmVzIFZpZW5kZXIgZm9yIGV2ZXJ5b25lLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03M2ZjOTg3MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzNmYzk4NzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZy1ib3R0b21cIjogXCIyMHB4XCJcbiAgICB9XG4gIH0sIFtfYygnaDQnLCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0ucXVlc3Rpb24gPyBfdm0uZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0ucXVlc3Rpb24pIDogJydcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5xdWVzdGlvbiA/IF92bS5xdWVzdGlvbi50aXRsZSA6ICcnKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBfdm0uc2hvd1F1ZXN0aW9uRGV0YWlsID8gJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwnIDogJ2Fuc3dlckNyZWF0ZUZvcm0tcXVlc3Rpb25EZXRhaWwgc2hyaW5rZWQnLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd1F1ZXN0aW9uRGV0YWlsID0gIV92bS5zaG93UXVlc3Rpb25EZXRhaWxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucXVlc3Rpb24gPyBfdm0ucXVlc3Rpb24uYm9keSA6ICcnKSArIFwiXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS4kdmllbmRlci50cmVhc3VyZS51c2VyID8gX3ZtLmdldFVybCgnYXZhdGFyJywgX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIpIDogJycsXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdmllbmRlci50cmVhc3VyZS51c2VyID8gX3ZtLiR2aWVuZGVyLnRyZWFzdXJlLnVzZXIubmFtZSA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHJlZjogXCJlZGl0b3JcIixcbiAgICBzdGF0aWNDbGFzczogXCJhbnN3ZXItY3JlYXRlLWVkaXRvclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hbnN3ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzdhZGQyYzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc3YWRkMmM4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtZm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dNb2RhbCksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dNb2RhbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYW5zd2VyQ3JlYXRlTW9kYWwtb3ZlcmxheVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGlkZUFuc3dlckNyZWF0ZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlckNyZWF0ZU1vZGFsXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5tb2RhbENsaWNrSGFuZGxlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFuc3dlckNyZWF0ZU1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2Fuc3dlci1jcmVhdGUtZm9ybScsIHtcbiAgICByZWY6IFwiZm9ybVwiLFxuICAgIG9uOiB7XG4gICAgICBcImFuc3dlci1wb3N0ZWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5oaWRlQW5zd2VyQ3JlYXRlTW9kYWwoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYWN0aW9uXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIlhcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDNiOWIyNGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWQzYjliMjRlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3NvY2lhbGl0ZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1jcmVhdGUtbW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0c2VsZWN0ZWRNZW51OiBudWxsLFxuICAgICAgICAgICAgbm90TW91bnRlZDogdHJ1ZSxcbiAgICAgICAgICAgIG5hdjogbnVsbCxcbiAgICAgICAgICAgIHNjcm9sbFN0b3JhZ2VOYW1lOiBudWxsLFxuICAgIFx0fTtcbiAgICB9LFxuXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXRUYWIobmF2ID0gbnVsbCwgc2Nyb2xsU3RvcmFnZU5hbWUgPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoICEgbmF2KSB0aHJvdyAndGhpcy5uYXYgaXMgbm90IGRlZmluZWQnO1xuICAgICAgICAgICAgaWYgKCAhIHNjcm9sbFN0b3JhZ2VOYW1lKSB0aHJvdyAndGhpcy5zY3JvbGxTdG9yYWdlTmFtZSBpcyBub3QgZGVmaW5lZCc7XG5cbiAgICAgICAgICAgIHRoaXMubmF2ID0gbmF2O1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxTdG9yYWdlTmFtZSA9IHNjcm9sbFN0b3JhZ2VOYW1lO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1lbnUgPSBwYXJzZUludCh0aGlzLm5hdi5nZXRBdHRyaWJ1dGUoJ2luaXRpYWwtbWVudScpLCAxMCk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLnNjcm9sbFN0b3JhZ2VOYW1lfS5zY3JvbGxMZWZ0YCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdi5zY3JvbGxMZWZ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5zY3JvbGxTdG9yYWdlTmFtZX0uc2Nyb2xsTGVmdGApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdi5zY3JvbGxMZWZ0ID0gNjUgKiBzZWxlY3RlZE1lbnU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudE1lbnUoc2VsZWN0ZWRNZW51KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMucHJvZmlsZUNvbnRlbnRNb2JpbGUpXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wcm9maWxlQ29udGVudE1vYmlsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSxcblxuICAgICAgICBjdXJyZW50TWVudShtZW51KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE1lbnUgPT09IG1lbnU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Q3VycmVudE1lbnUoc2VsZWN0ZWRNZW51KSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLnNjcm9sbFN0b3JhZ2VOYW1lfS5zY3JvbGxMZWZ0YCwgdGhpcy5uYXYuc2Nyb2xsTGVmdCk7XG4gICAgXHRcdHRoaXMuc2VsZWN0ZWRNZW51ID0gc2VsZWN0ZWRNZW51O1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gdGhpcy5uYXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbkxpbmsnKVtzZWxlY3RlZE1lbnVdLmdldEF0dHJpYnV0ZSgncGFnZScpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5uYXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbkxpbmsnKVtzZWxlY3RlZE1lbnVdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICAgICAgICBpZiAod2luZG93Lmhpc3RvcnkgPyB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgOiBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIFBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIFVybDogdXJsLFxuICAgICAgICAgICAgICAgIH0sIHBhZ2UsIHVybClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5nYSkge1xuICAgICAgICAgICAgICAgIGdhKCdzZXQnLCAncGFnZScsIHJlbGF0aXZlVXJsKHVybCkpO1xuICAgICAgICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgICAgICAgICB9XG4gICAgXHR9LFxuXG4gICAgICAgIGhpZGVCZWZvcmVNb3VudGVkUHJlbG9hZGVycygpIHtcbiAgICAgICAgICAgIHRoaXMubm90TW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL21peGlucy9jaGFuZ2VhYmxlTWVudU1peGluLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBcbiAgICBzdGF0ZTogeyBcbiAgICAgICAgcGFnZTogMCxcbiAgICAgICAgdG90YWxQYWdlczogMSxcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIGZvbGxvd2VyczogW10sXG4gICAgICAgIHVybDogJycsXG4gICAgfSxcblxuICAgIG11dGF0aW9uczogeyBcbiAgICAgICAgW3R5cGVzLkFERF9GT0xMT1dFUlNdIChzdGF0ZSwgZm9sbG93ZXJzKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dlcnMgPSBzdGF0ZS5mb2xsb3dlcnMuY29uY2F0KGZvbGxvd2Vycyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9VUkxdIChzdGF0ZSwgdXJsKSB7XG4gICAgICAgICAgICBzdGF0ZS51cmwgPSB1cmw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBmZXRjaERhdGEoeyBzdGF0ZSwgY29tbWl0LCByb290U3RhdGUgfSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RpbmcgfHwgc3RhdGUucGFnZSArIDEgPiBzdGF0ZS50b3RhbFBhZ2VzKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoc3RhdGUudXJsLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UgKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdGFsUGFnZXMgPSByZXNwb25zZS5kYXRhLm1ldGEucGFnaW5hdGlvbi50b3RhbF9wYWdlcztcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuQUREX0ZPTExPV0VSUywgcmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wYWdlKys7XG4gICAgICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldCh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9KSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UgPSAxO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZvbGxvd2VyTGlzdC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIGZvbGxvd2VyQ291bnQ6IDAsXG4gICAgICAgIGZvbGxvd2luZ0NvdW50OiAwLFxuICAgICAgICB0b3BpY0NvdW50OiAwLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHsgXG4gICAgICAgIFt0eXBlcy5TRVRfRk9MTE9XRVJfQ09VTlRdIChzdGF0ZSwgZm9sbG93ZXJDb3VudCkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93ZXJDb3VudCA9IGZvbGxvd2VyQ291bnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLklOQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVF0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dlckNvdW50Kys7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkRFQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVF0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dlckNvdW50LS07XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9GT0xMT1dJTkdfQ09VTlRdIChzdGF0ZSwgZm9sbG93aW5nQ291bnQpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2luZ0NvdW50ID0gZm9sbG93aW5nQ291bnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLklOQ1JFTUVOVF9GT0xMT1dJTkdfQ09VTlRdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93aW5nQ291bnQrKztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuREVDUkVNRU5UX0ZPTExPV0lOR19DT1VOVF0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb2xsb3dpbmdDb3VudC0tO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfVE9QSUNfQ09VTlRdIChzdGF0ZSwgdG9waWNDb3VudCkge1xuICAgICAgICAgICAgc3RhdGUudG9waWNDb3VudCA9IHRvcGljQ291bnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLklOQ1JFTUVOVF9UT1BJQ19DT1VOVF0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS50b3BpY0NvdW50Kys7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkRFQ1JFTUVOVF9UT1BJQ19DT1VOVF0gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS50b3BpY0NvdW50LS07XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL3VzZXJTdGF0cy5qcyIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImZvbGxvd0J1dHRvblwiPlxuXHRcdDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJmb2xsb3coKVwiIHYtaWY9XCIhIHVzZXIuZm9sbG93ZWRcIj5Gb2xsb3c8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGZvbGxvd2VkXCIgQGNsaWNrPVwidW5mb2xsb3coKVwiIHYtZWxzZT5VbmZvbGxvdzwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsndXJsJywgJ2ZvbGxvd2VlX2lkJywgJ2ZvbGxvd2VkJ10sXG5cblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVxdWVzdGluZzogZmFsc2UsXG5cblx0XHRcdHVzZXI6IHtcblx0XHRcdFx0Zm9sbG93ZWQ6IGZhbHNlLFxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMudXNlci5mb2xsb3dlZCA9IHRoaXMuZm9sbG93ZWQgPyB0aGlzLmZvbGxvd2VkIDogZmFsc2U7XG5cdH0sXG5cblx0bW91bnRlZCgpIHtcblx0XHR0aGlzLiRlbWl0KCdtb3VudGVkJyk7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdGZvbGxvdygpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZiAoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRheGlvcy5wb3N0KF90aGlzLnVybCwgeydmb2xsb3dlZV9pZCc6IF90aGlzLmZvbGxvd2VlX2lkfSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0X3RoaXMudXNlci5mb2xsb3dlZCA9ICEgX3RoaXMudXNlci5mb2xsb3dlZDtcblxuXHRcdFx0XHRcdGlmIChfdGhpcy51c2VyLmZvbGxvd2VkKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLklOQ1JFTUVOVF9GT0xMT1dFUl9DT1VOVCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF90aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuREVDUkVNRU5UX0ZPTExPV0VSX0NPVU5UKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0dW5mb2xsb3coKSB7XG5cdFx0XHR0aGlzLmZvbGxvdygpO1xuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb2xsb3ctYnV0dG9uLnZ1ZT81ZTcwZmM0YSIsIjx0ZW1wbGF0ZT5cblx0PHNwYW4gY2xhc3M9XCJwcm9maWxlTmF2aWdhdGlvbi12YWx1ZVwiPnt7IGZvbGxvd2VyQ291bnR4IH19PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydmb2xsb3dlckNvdW50J10sXG5cblx0Y29tcHV0ZWQ6IHtcblx0XHRmb2xsb3dlckNvdW50eCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyU3RhdHMuZm9sbG93ZXJDb3VudDtcblx0XHR9XG5cdH0sXG5cblx0bW91bnRlZCgpIHtcblx0XHR0aGlzLiRlbWl0KCdtb3VudGVkJyk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLlNFVF9GT0xMT1dFUl9DT1VOVCwgdGhpcy5mb2xsb3dlckNvdW50KTtcblx0fVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9sbG93ZXItY291bnQudnVlPzk0OGMxZWE0IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDx1c2VyLWNhcmQgdi1mb3I9XCJ1c2VyIGluIGZvbGxvd2Vyc1wiIDp1c2VyPVwidXNlclwiPjwvdXNlci1jYXJkPlxuICAgICAgICA8YnV0dG9uIHYtc2hvdz1cIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMDtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIEBjbGljaz1cImZldGNoRGF0YSgpXCI+TG9hZCBtb3JlPC9idXR0b24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsndXJsJ10sXG5cblx0Y29tcHV0ZWQ6IE9iamVjdC5hc3NpZ24oXG5cdFx0bWFwU3RhdGUoJ2ZvbGxvd2VyTGlzdCcsIFtcblx0XHQgICdyZXF1ZXN0aW5nJyxcblx0XHQgICdmb2xsb3dlcnMnLFxuXHRcdCAgJ3BhZ2UnLFxuXHRcdCAgJ3RvdGFsUGFnZXMnLFxuXHRcdF0pXG5cdCksXG5cblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2ZvbGxvd2VyTGlzdC8nICsgdHlwZXMuU0VUX1VSTCwgdGhpcy51cmwpO1xuXHRcdHRoaXMuZmV0Y2hEYXRhKCk7XG5cdH0sXG5cblx0bWV0aG9kczogT2JqZWN0LmFzc2lnbihcblx0XHRtYXBBY3Rpb25zKCdmb2xsb3dlckxpc3QnLCBbXG5cdFx0XHQnZmV0Y2hEYXRhJyxcblx0XHRdKVxuXHQpLFxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9sbG93ZXItbGlzdC52dWU/ODYyMTQ5MDgiLCI8dGVtcGxhdGU+XG5cdDxzcGFuIGNsYXNzPVwicHJvZmlsZU5hdmlnYXRpb24tdmFsdWVcIj57eyBmb2xsb3dpbmdDb3VudHggfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2ZvbGxvd2luZ0NvdW50J10sXG5cblx0Y29tcHV0ZWQ6IHtcblx0XHRmb2xsb3dpbmdDb3VudHgoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudXNlclN0YXRzLmZvbGxvd2luZ0NvdW50O1xuXHRcdH1cblx0fSxcblxuXHRtb3VudGVkKCkge1xuXHRcdHRoaXMuJGVtaXQoJ21vdW50ZWQnKTtcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJTdGF0cy8nICsgdHlwZXMuU0VUX0ZPTExPV0lOR19DT1VOVCwgdGhpcy5mb2xsb3dpbmdDb3VudCk7XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvbGxvd2luZy1jb3VudC52dWU/MGZiYzE3MDIiLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHVzZXItY2FyZCB2LWZvcj1cInVzZXIgaW4gZm9sbG93aW5nc1wiIDp1c2VyPVwidXNlclwiPjwvdXNlci1jYXJkPlxuICAgICAgICA8YnV0dG9uIHYtc2hvdz1cIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMDtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIEBjbGljaz1cImZldGNoRGF0YSgpXCI+TG9hZCBtb3JlPC9idXR0b24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsndXJsJ10sXG5cblx0Y29tcHV0ZWQ6IE9iamVjdC5hc3NpZ24oXG5cdFx0bWFwU3RhdGUoJ2ZvbGxvd2luZ0xpc3QnLCBbXG5cdFx0ICAncmVxdWVzdGluZycsXG5cdFx0ICAnZm9sbG93aW5ncycsXG5cdFx0ICAncGFnZScsXG5cdFx0ICAndG90YWxQYWdlcycsXG5cdFx0XSlcblx0KSxcblxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZm9sbG93aW5nTGlzdC8nICsgdHlwZXMuU0VUX1VSTCwgdGhpcy51cmwpO1xuXHRcdHRoaXMuZmV0Y2hEYXRhKCk7XG5cdH0sXG5cblx0bWV0aG9kczogT2JqZWN0LmFzc2lnbihcblx0XHRtYXBBY3Rpb25zKCdmb2xsb3dpbmdMaXN0JywgW1xuXHRcdFx0J2ZldGNoRGF0YScsXG5cdFx0XSlcblx0KSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvbGxvd2luZy1saXN0LnZ1ZT8xZmE2MTUwMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRvcGljQ2FyZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJ0b3BpY0NhcmQtdGh1bWJuYWlsXCIgOnNyYz1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCd0aHVtYm5haWwnLCB0b3BpYylcIiBhbHQ9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidG9waWNDYXJkLW5hbWVcIj5cbiAgICAgIDxhIDpocmVmPVwiJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHRvcGljKVwiPlxuICAgICAgICB7eyB0b3BpYy5uYW1lIH19XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRvcGljQ2FyZC1hY3Rpb25cIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZm9sbG93QnV0dG9uXCIgdi1zaG93PVwiISBmb2xsb3dlZFwiIEBjbGljaz1cImZvbGxvdygpXCI+Rm9sbG93PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHVuZm9sbG93QnV0dG9uXCIgdi1zaG93PVwiZm9sbG93ZWRcIiBAY2xpY2s9XCJ1bmZvbGxvdygpXCI+VW5mb2xsb3c8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbJ3RvcGljJ10sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgZm9sbG93ZWQ6IHRydWUsXG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5mb2xsb3dlZCA9IHRoaXMudG9waWMuZm9sbG93ZWQ7XG4gIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBmb2xsb3coKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF90aGlzLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICBheGlvcy5wb3N0KF90aGlzLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdmb2xsb3cnLCBfdGhpcy50b3BpYyksIHsndG9waWNfaWQnOiBfdGhpcy50b3BpYy5pZH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIF90aGlzLmZvbGxvd2VkID0gISBfdGhpcy5mb2xsb3dlZDtcblxuICAgICAgICAgIGlmIChfdGhpcy5mb2xsb3dlZCkge1xuICAgICAgICAgICAgX3RoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5JTkNSRU1FTlRfVE9QSUNfQ09VTlQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyU3RhdHMvJyArIHR5cGVzLkRFQ1JFTUVOVF9UT1BJQ19DT1VOVCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsKCdsb2dpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICB1bmZvbGxvdygpIHtcbiAgICAgICAgdGhpcy5mb2xsb3coKTtcbiAgICAgIH0sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdG9waWMtY2FyZC52dWU/ODkwZWJhMzgiLCI8dGVtcGxhdGU+XG5cdDxzcGFuIGNsYXNzPVwicHJvZmlsZU5hdmlnYXRpb24tdmFsdWVcIj57eyB0b3BpY0NvdW50eCB9fTwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsndG9waWNDb3VudCddLFxuXG5cdGNvbXB1dGVkOiB7XG5cdFx0dG9waWNDb3VudHgoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudXNlclN0YXRzLnRvcGljQ291bnQ7XG5cdFx0fVxuXHR9LFxuXG5cdG1vdW50ZWQoKSB7XG5cdFx0dGhpcy4kZW1pdCgnbW91bnRlZCcpO1xuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5TRVRfVE9QSUNfQ09VTlQsIHRoaXMudG9waWNDb3VudCk7XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvcGljLWNvdW50LnZ1ZT8zYWUwYjg0ZSIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyB0b3BpYy1saXN0XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBzNlwiIHYtZm9yPVwidG9waWMgaW4gdG9waWNzXCI+XG5cdFx0XHQ8dG9waWMtY2FyZCA6dG9waWM9XCJ0b3BpY1wiPjwvdG9waWMtY2FyZD5cblx0XHRcdDxidXR0b24gdi1zaG93PVwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OiAwO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiZmV0Y2hEYXRhKClcIj5Mb2FkIG1vcmU8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd1cmwnXSxcblxuXHRjb21wdXRlZDogT2JqZWN0LmFzc2lnbihcblx0XHRtYXBTdGF0ZSgndG9waWNMaXN0JywgW1xuXHRcdCAgJ3BhZ2UnLFxuXHRcdCAgJ3RvdGFsUGFnZXMnLFxuXHRcdCAgJ3JlcXVlc3RpbmcnLFxuXHRcdCAgJ3RvcGljcycsXG5cdFx0XSlcblx0KSxcblxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgndG9waWNMaXN0LycgKyB0eXBlcy5TRVRfVVJMLCB0aGlzLnVybCk7XG5cdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3RvcGljTGlzdC9mZXRjaERhdGEnKTtcblx0fSxcblxuXHRtZXRob2RzOiBPYmplY3QuYXNzaWduKFxuXHRcdG1hcEFjdGlvbnMoJ3RvcGljTGlzdCcsIFtcblx0XHRcdCdmZXRjaERhdGEnLFxuXHRcdF0pXG5cdCksXG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b3BpYy1saXN0LnZ1ZT84Mzg2NThlNiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInVzZXJDYXJkXCI+XG5cdFx0PHVsIGNsYXNzPVwiY29sbGVjdGlvblwiPlxuXHRcdFx0PGxpIGNsYXNzPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuXHRcdFx0XHQ8aW1nIDpzcmM9XCIkdmllbmRlci5oZWxwZXJzLmdldFVybCgnYXZhdGFyJywgdXNlcilcIiBhbHQ9XCJcIiBjbGFzcz1cImNpcmNsZVwiPlxuXHRcdFx0XHQ8YSA6aHJlZj1cIiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCB1c2VyKVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IHVzZXIubmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8ZGl2IHYtaWY9XCIkdmllbmRlci51c2VyID8gJHZpZW5kZXIudXNlci5pZCAhPT0gdXNlci5pZCA6IGZhbHNlXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBmb2xsb3dCdXR0b25cIiB2LXNob3c9XCIhIGZvbGxvd2VkXCIgQGNsaWNrPVwiZm9sbG93KClcIj5Gb2xsb3c8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIHVuZm9sbG93QnV0dG9uXCIgdi1zaG93PVwiZm9sbG93ZWRcIiBAY2xpY2s9XCJ1bmZvbGxvdygpXCI+VW5mb2xsb3c8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2xpPlxuXHRcdDwvdWw+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd1c2VyJ10sXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCd2aWVuZGVyX2NvcmUvanMvbWl4aW5zL3VybEhlbHBlcicpXSxcblxuICAgIGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcXVlc3Rpbmc6IGZhbHNlLFxuXHRcdFx0Zm9sbG93ZWQ6IHRydWUsXG5cdFx0fVxuXHR9LFxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5mb2xsb3dlZCA9IHRoaXMudXNlci5mb2xsb3dlZDtcblx0fSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdGZvbGxvdygpIHtcbiAgICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICAgIFx0XHRpZiAoX3RoaXMucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgXHRcdF90aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgXHRcdGF4aW9zLnBvc3QoX3RoaXMuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ2ZvbGxvdycsIF90aGlzLnVzZXIpLCB7J2ZvbGxvd2VlX2lkJzogX3RoaXMudXNlci5pZH0pXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdF90aGlzLmZvbGxvd2VkID0gISBfdGhpcy5mb2xsb3dlZDtcblxuXHRcdFx0XHRcdGlmIChfdGhpcy5mb2xsb3dlZCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5JTkNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X3RoaXMuJHN0b3JlLmNvbW1pdCgndXNlclN0YXRzLycgKyB0eXBlcy5ERUNSRU1FTlRfRk9MTE9XSU5HX0NPVU5UKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0ICAgIF90aGlzLnJlcXVlc3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHQgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdFx0ICAgIFx0ZG9jdW1lbnQubG9jYXRpb24gPSB1cmwoJ2xvZ2luJyk7XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBfdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcbiAgICBcdH0sXG5cbiAgICBcdHVuZm9sbG93KCkge1xuICAgIFx0XHR0aGlzLmZvbGxvdygpO1xuICAgIFx0fSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB1c2VyLWNhcmQudnVlPzRmNGQxOWIzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mb2xsb3ctYnV0dG9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03ZDQxZDZmZSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZm9sbG93LWJ1dHRvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvZm9sbG93L3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93LWJ1dHRvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmb2xsb3ctYnV0dG9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZDQxZDZmZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdkNDFkNmZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvZm9sbG93L3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93LWJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZm9sbG93ZXItY291bnQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRjNTExNjVlIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9mb2xsb3dlci1jb3VudC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZvbGxvd2VyLWNvdW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00YzUxMTY1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRjNTExNjVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWNvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mb2xsb3dlci1saXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yZWY5MGYxZiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZm9sbG93ZXItbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZm9sbG93ZXItbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmVmOTBmMWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZWY5MGYxZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mb2xsb3dpbmctY291bnQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTE2YjVkZjg1IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9mb2xsb3dpbmctY291bnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZm9sbG93aW5nLWNvdW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNmI1ZGY4NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE2YjVkZjg1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1jb3VudC52dWVcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZm9sbG93aW5nLWxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmZDMwNTE4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9mb2xsb3dpbmctbGlzdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZvbGxvd2luZy1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZmQzMDUxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdmZDMwNTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b3BpYy1jYXJkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NGZiZmVhOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9waWMtY2FyZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWNhcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG9waWMtY2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDRmYmZlYThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NGZiZmVhOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b3BpYy1jb3VudC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzQ4YjY5YTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvcGljLWNvdW50LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY291bnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG9waWMtY291bnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM0OGI2OWEzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzQ4YjY5YTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvcGljLWxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJlMzRiZjNhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b3BpYy1saXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b3BpYy1saXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZTM0YmYzYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJlMzRiZjNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VzZXItY2FyZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTljNTE2ZjghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3VzZXItY2FyZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3VzZXItY2FyZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB1c2VyLWNhcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE5YzUxNmY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTljNTE2ZjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdXNlci1jYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2ZpbGVOYXZpZ2F0aW9uLXZhbHVlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmZvbGxvd2luZ0NvdW50eCkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTZiNWRmODVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTE2YjVkZjg1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgdG9waWMtbGlzdFwiXG4gIH0sIF92bS5fbCgoX3ZtLnRvcGljcyksIGZ1bmN0aW9uKHRvcGljKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb2wgczZcIlxuICAgIH0sIFtfYygndG9waWMtY2FyZCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9waWNcIjogdG9waWNcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICB2YWx1ZTogKCFfdm0ucmVxdWVzdGluZyAmJiBfdm0ucGFnZSA8IF92bS50b3RhbFBhZ2VzKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCIhIHJlcXVlc3RpbmcgJiYgcGFnZSA8IHRvdGFsUGFnZXNcIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMFwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZmV0Y2hEYXRhKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJMb2FkIG1vcmVcIildKV0sIDEpXG4gIH0pKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yZTM0YmYzYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmUzNGJmM2EhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3RvcGljLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfdm0uX2woKF92bS5mb2xsb3dlcnMpLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgcmV0dXJuIF9jKCd1c2VyLWNhcmQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInVzZXJcIjogdXNlclxuICAgICAgfVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ucmVxdWVzdGluZyAmJiBfdm0ucGFnZSA8IF92bS50b3RhbFBhZ2VzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiISByZXF1ZXN0aW5nICYmIHBhZ2UgPCB0b3RhbFBhZ2VzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZldGNoRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9hZCBtb3JlXCIpXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yZWY5MGYxZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmVmOTBmMWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2VyLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZmlsZU5hdmlnYXRpb24tdmFsdWVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udG9waWNDb3VudHgpKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM0OGI2OWEzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNDhiNjlhMyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b3BpY0NhcmRcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b3BpY0NhcmQtdGh1bWJuYWlsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgndGh1bWJuYWlsJywgX3ZtLnRvcGljKSxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvcGljQ2FyZC1uYW1lXCJcbiAgfSwgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0udG9waWMpXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRvcGljLm5hbWUpICsgXCJcXG4gICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b3BpY0NhcmQtYWN0aW9uXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5mb2xsb3dlZCksXG4gICAgICBleHByZXNzaW9uOiBcIiEgZm9sbG93ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBmb2xsb3dCdXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvbGxvdygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRm9sbG93XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvbGxvd2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9sbG93ZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biB1bmZvbGxvd0J1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udW5mb2xsb3coKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlVuZm9sbG93XCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ0ZmJmZWE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NGZiZmVhOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9maWxlTmF2aWdhdGlvbi12YWx1ZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5mb2xsb3dlckNvdW50eCkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGM1MTE2NWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRjNTExNjVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1jb3VudC52dWVcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvbGxvd0J1dHRvblwiXG4gIH0sIFsoIV92bS51c2VyLmZvbGxvd2VkKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb2xsb3coKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkZvbGxvd1wiKV0pIDogX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gZm9sbG93ZWRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVuZm9sbG93KClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmZvbGxvd1wiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2Q0MWQ2ZmVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdkNDFkNmZlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL2ZvbGxvdy9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvdy1idXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfdm0uX2woKF92bS5mb2xsb3dpbmdzKSwgZnVuY3Rpb24odXNlcikge1xuICAgIHJldHVybiBfYygndXNlci1jYXJkJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ1c2VyXCI6IHVzZXJcbiAgICAgIH1cbiAgICB9KVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLnJlcXVlc3RpbmcgJiYgX3ZtLnBhZ2UgPCBfdm0udG90YWxQYWdlcyksXG4gICAgICBleHByZXNzaW9uOiBcIiEgcmVxdWVzdGluZyAmJiBwYWdlIDwgdG90YWxQYWdlc1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjBcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mZXRjaERhdGEoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvYWQgbW9yZVwiKV0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2ZkMzA1MThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdmZDMwNTE4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL3Byb2ZpbGUvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dpbmctbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVzZXJDYXJkXCJcbiAgfSwgW19jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnYXZhdGFyJywgX3ZtLnVzZXIpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCBfdm0udXNlcilcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS4kdmllbmRlci51c2VyID8gX3ZtLiR2aWVuZGVyLnVzZXIuaWQgIT09IF92bS51c2VyLmlkIDogZmFsc2UpID8gX2MoJ2RpdicsIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0uZm9sbG93ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhIGZvbGxvd2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gZm9sbG93QnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb2xsb3coKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkZvbGxvd1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5mb2xsb3dlZCksXG4gICAgICBleHByZXNzaW9uOiBcImZvbGxvd2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJidG4gdW5mb2xsb3dCdXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVuZm9sbG93KClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVbmZvbGxvd1wiKV0pXSkgOiBfdm0uX2UoKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hOWM1MTZmOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTljNTE2ZjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3VzZXItY2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgXG4gICAgc3RhdGU6IHsgXG4gICAgICAgIHBhZ2U6IDAsXG4gICAgICAgIHRvdGFsUGFnZXM6IDEsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBmb2xsb3dpbmdzOiBbXSxcbiAgICAgICAgdXJsOiAnJyxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuQUREX0ZPTExPV0lOR1NdIChzdGF0ZSwgZm9sbG93aW5ncykge1xuICAgICAgICAgICAgc3RhdGUuZm9sbG93aW5ncyA9IHN0YXRlLmZvbGxvd2luZ3MuY29uY2F0KGZvbGxvd2luZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfVVJMXSAoc3RhdGUsIHVybCkge1xuICAgICAgICAgICAgc3RhdGUudXJsID0gdXJsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgZmV0Y2hEYXRhKHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0aW5nIHx8IHN0YXRlLnBhZ2UgKyAxID4gc3RhdGUudG90YWxQYWdlcykgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHN0YXRlLnVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlICsgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFBhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXM7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLkFERF9GT0xMT1dJTkdTLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnBhZ2UrKztcbiAgICAgICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0KHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIHN0YXRlLmZvbGxvd2luZ3MgPSBbXTtcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UgPSAxO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2ZvbGxvd2luZ0xpc3QuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIFxuICAgIHN0YXRlOiB7IFxuICAgICAgICBwYWdlOiAwLFxuICAgICAgICB0b3RhbFBhZ2VzOiAxLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgdG9waWNzOiBbXSxcbiAgICAgICAgdXJsOiAnJyxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7IFxuICAgICAgICBbdHlwZXMuQUREX1RPUElDU10gKHN0YXRlLCB0b3BpY3MpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvcGljcyA9IHN0YXRlLnRvcGljcy5jb25jYXQodG9waWNzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1VSTF0gKHN0YXRlLCB1cmwpIHtcbiAgICAgICAgICAgIHN0YXRlLnVybCA9IHVybDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGZldGNoRGF0YSh7IHN0YXRlLCBjb21taXQsIHJvb3RTdGF0ZSB9KSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdGluZyB8fCBzdGF0ZS5wYWdlICsgMSA+IHN0YXRlLnRvdGFsUGFnZXMpIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChzdGF0ZS51cmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogc3RhdGUucGFnZSArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWxQYWdlcyA9IHJlc3BvbnNlLmRhdGEubWV0YS5wYWdpbmF0aW9uLnRvdGFsX3BhZ2VzO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5BRERfVE9QSUNTLCByZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnBhZ2UrKztcbiAgICAgICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0KHsgc3RhdGUsIGNvbW1pdCwgcm9vdFN0YXRlIH0pIHtcbiAgICAgICAgICAgIHN0YXRlLnRvcGljcyA9IFtdO1xuICAgICAgICAgICAgc3RhdGUucGFnZSA9IDE7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL21vZHVsZXMvdG9waWNMaXN0LmpzIiwicmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcbnJlcXVpcmUoJ3N1bW1lcm5vdGUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvcHJvZmlsZS9yZXNvdXJjZXMvcGFnZXMvcHJvZmlsZS9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiaW1wb3J0IGNvcmVNb2R1bGVzIGZyb20gJ3ZpZW5kZXJfY29yZS9qcy9zdG9yZS9tb2R1bGVzLmpzJztcblxuaW1wb3J0IHF1ZXN0aW9uTGlzdCBmcm9tICd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvcXVlc3Rpb25MaXN0JztcbmltcG9ydCBlZGl0b3IgZnJvbSAndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9zdG9yZS9tb2R1bGVzL2VkaXRvcic7XG5pbXBvcnQgZmVlZCBmcm9tICd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZmVlZCc7XG5pbXBvcnQgdXNlclN0YXRzIGZyb20gJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvdXNlclN0YXRzJztcbmltcG9ydCBmb2xsb3dpbmdMaXN0IGZyb20gJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZm9sbG93aW5nTGlzdCc7XG5pbXBvcnQgZm9sbG93ZXJMaXN0IGZyb20gJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL3N0b3JlL21vZHVsZXMvZm9sbG93ZXJMaXN0JztcbmltcG9ydCB0b3BpY0xpc3QgZnJvbSAndmllbmRlcl9wcm9maWxlL2NvcmUvanMvc3RvcmUvbW9kdWxlcy90b3BpY0xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIG1vZHVsZXM6IE9iamVjdC5hc3NpZ24oY29yZU1vZHVsZXMsIHtcbiAgICBxdWVzdGlvbkxpc3Q6IHF1ZXN0aW9uTGlzdCxcbiAgICBlZGl0b3I6IGVkaXRvcixcbiAgICBmZWVkOiBmZWVkLFxuICAgIHVzZXJTdGF0czogdXNlclN0YXRzLFxuICAgIGZvbGxvd2luZ0xpc3Q6IGZvbGxvd2luZ0xpc3QsXG4gICAgZm9sbG93ZXJMaXN0OiBmb2xsb3dlckxpc3QsXG4gICAgdG9waWNMaXN0OiB0b3BpY0xpc3QsXG4gIH0pLFxuXG4gIGFjdGlvbnM6IHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvL2FjdGlvbnMuanMnKSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9wYWdlcy9wcm9maWxlL2Fzc2V0cy9qcy9zdG9yZS5qcyIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBjaGFuZ2VhYmxlTWVudU1peGluIGZyb20gJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL21peGlucy9jaGFuZ2VhYmxlTWVudU1peGluJztcblxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlIFZ1ZSBhbmQgVnVlIFJlc291cmNlLiBUaGlzIGdpdmVzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgZm9yXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdjb21tZW50JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnY29tbWVudC1saXN0JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdjb21tZW50LWNyZWF0ZS1mb3JtJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2NvbW1lbnQtY3JlYXRlLWZvcm0udnVlJykpO1xuVnVlLmNvbXBvbmVudCgnYW5zd2VyLXByZXZpZXcnLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnZmVlZC1saXN0JywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2ZlZWQtbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdhbnN3ZXInLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvYW5zd2VyLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1zaG93LW1vZGFsJywgcmVxdWlyZSgndmllbmRlcl9zb2NpYWxpdGUvY29yZS9qcy9jb21wb25lbnRzL2Fuc3dlci1zaG93LW1vZGFsLnZ1ZScpKTtcblxuVnVlLmNvbXBvbmVudCgncXVlc3Rpb24nLCByZXF1aXJlKCd2aWVuZGVyX3NvY2lhbGl0ZS9jb3JlL2pzL2NvbXBvbmVudHMvcXVlc3Rpb24udnVlJykpO1xuVnVlLmNvbXBvbmVudCgncXVlc3Rpb24tbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2Fuc3dlci1jcmVhdGUtZm9ybScsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLWZvcm0udnVlJykpO1xuVnVlLmNvbXBvbmVudCgnYW5zd2VyLWNyZWF0ZS1tb2RhbCcsIHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvY29tcG9uZW50cy9hbnN3ZXItY3JlYXRlLW1vZGFsLnZ1ZScpKTtcblxuVnVlLmNvbXBvbmVudCgnZm9sbG93LWJ1dHRvbicsIHJlcXVpcmUoJ3ZpZW5kZXJfZm9sbG93L2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3ctYnV0dG9uLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ2ZvbGxvd2VyLWNvdW50JywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy9mb2xsb3dlci1jb3VudC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdmb2xsb3dpbmctY291bnQnLCByZXF1aXJlKCd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9jb21wb25lbnRzL2ZvbGxvd2luZy1jb3VudC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdmb2xsb3dpbmctbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93aW5nLWxpc3QudnVlJykpO1xuVnVlLmNvbXBvbmVudCgnZm9sbG93ZXItbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvZm9sbG93ZXItbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd1c2VyLWNhcmQnLCByZXF1aXJlKCd2aWVuZGVyX3Byb2ZpbGUvY29yZS9qcy9jb21wb25lbnRzL3VzZXItY2FyZC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0b3BpYy1jb3VudCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtY291bnQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndG9waWMtbGlzdCcsIHJlcXVpcmUoJ3ZpZW5kZXJfcHJvZmlsZS9jb3JlL2pzL2NvbXBvbmVudHMvdG9waWMtbGlzdC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0b3BpYy1jYXJkJywgcmVxdWlyZSgndmllbmRlcl9wcm9maWxlL2NvcmUvanMvY29tcG9uZW50cy90b3BpYy1jYXJkLnZ1ZScpKTtcblxuY29uc3QgZmVlZCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG5cbiAgICBzdG9yZTogc3RvcmUsXG5cbiAgICBtaXhpbnM6IFtjaGFuZ2VhYmxlTWVudU1peGluXSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhYih0aGlzLiRyZWZzLnByb2ZpbGVOYXYsICdwcm9maWxlTmF2aWdhdGlvbicpO1xuICAgIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9wcm9maWxlL3Jlc291cmNlcy9wYWdlcy9wcm9maWxlL2Fzc2V0cy9qcy9hcHAtbW9iaWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==