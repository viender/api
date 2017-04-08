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
/******/ 	return __webpack_require__(__webpack_require__.s = 260);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(98);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(97);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var feed = new Vue({
  el: '#app',

  store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */]
});

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


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

/***/ }),

/***/ 97:
/***/ (function(module, exports) {



/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {}),

  actions: __webpack_require__(11)
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjA5ZTkwNmRiZDg3NTQ5NGNjYzc/MWM3ZCoqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/NGJkYioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvc29jaWFsaXRlL3Jlc291cmNlcy9jb3JlL2pzL3N0b3JlL2FjdGlvbnMuanM/NjE2ZCoqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvZm9sbG93L3Jlc291cmNlcy9wYWdlcy9leGFtcGxlLXBhZ2UvYXNzZXRzL2pzL2FwcC1tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzPzNmNWIqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanM/YWZhYSoqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanM/MDljNSoqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanM/MzYyMCoqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9mb2xsb3cvcmVzb3VyY2VzL3BhZ2VzL2V4YW1wbGUtcGFnZS9hc3NldHMvanMvc3RvcmUuanM/YjdmZiJdLCJuYW1lcyI6WyJTRVRfUkVRVUVTVElORyIsIlNFVF9TSE9XX1BBTkVMIiwiU0VUX1NIT1ciLCJTRVRfU0VBUkNIX1RFWFQiLCJTRVRfU0VBUkNIX1JFU1VMVFMiLCJTRVRfU0hPV19NT1JFX0ZJRUxEUyIsIlRPR0dMRV9TSE9XX01PUkVfRklFTERTIiwiQUREX1RPX1NFTEVDVEVEX1RPUElDUyIsIlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyIsIlNFVF9RVUVTVElPTl9ERVRBSUwiLCJyZXF1aXJlIiwiZmVlZCIsIlZ1ZSIsImVsIiwic3RvcmUiLCJzZWFyY2hPckFza1BhbmVsIiwic2VhcmNoT3JBc2tPdmVybGF5IiwidG9waWNSZWNvbW1lbmRhdGlvbiIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsInJlcXVlc3RpbmciLCJzaG93Iiwic2VhcmNoVGV4dCIsInF1ZXN0aW9uRGV0YWlsIiwic2VhcmNoUmVzdWx0cyIsInNob3dNb3JlRmllbGRzIiwic2VsZWN0ZWRUb3BpY3MiLCJwb3N0UXVlc3Rpb25VcmwiLCJwcm90b3R5cGUiLCIkdmllbmRlciIsImhlbHBlcnMiLCJhcGkiLCJtdXRhdGlvbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJ0b3BpYyIsInB1c2giLCJmaWx0ZXIiLCJzZWxlY3RlZFRvcGljIiwiaWQiLCJhY3Rpb25zIiwicG9zdFF1ZXN0aW9uIiwiY29tbWl0IiwiYXhpb3MiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidG9waWNzIiwidGhlbiIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJnZXRVcmwiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInNob3dQYW5lbCIsIm92ZXJmbG93IiwidXJsIiwic2hvd1RvcGljUmVjb21tZW5kYXRpb25zIiwic2V0VGltZW91dCIsImhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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O0FBQ0gsS0FmTCwrQkFpQkssK0VBakJMLFlBaUJtQ0wsS0FqQm5DLEVBaUIwQ2tCLEtBakIxQyxFQWlCaUQ7QUFDekNsQixjQUFNTyxjQUFOLENBQXFCWSxJQUFyQixDQUEwQkQsS0FBMUI7QUFDSCxLQW5CTCwrQkFxQkssb0ZBckJMLFlBcUJ3Q2xCLEtBckJ4QyxFQXFCK0NrQixLQXJCL0MsRUFxQnNEO0FBQzlDbEIsY0FBTU8sY0FBTixHQUF1QlAsTUFBTU8sY0FBTixDQUFxQmEsTUFBckIsQ0FBNEI7QUFBQSxtQkFBaUJDLGNBQWNDLEVBQWQsS0FBcUJKLE1BQU1JLEVBQTVDO0FBQUEsU0FBNUIsQ0FBdkI7QUFDSCxLQXZCTCxjQVpXOztBQXNDWEMsYUFBUztBQUNMa0IsZ0NBREssMENBQ3FDO0FBQUEsZ0JBQWhCekMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsZ0JBQVR5QixNQUFTLFFBQVRBLE1BQVM7O0FBQ3RDaUIsdUJBQVcsWUFBTTtBQUNiakIsdUJBQU8saUVBQVAsRUFBdUIsSUFBdkI7QUFDSCxhQUZELEVBRUcsR0FGSDtBQUdILFNBTEk7QUFPTGtCLGdDQVBLLDJDQU9xQztBQUFBLGdCQUFoQjNDLEtBQWdCLFNBQWhCQSxLQUFnQjtBQUFBLGdCQUFUeUIsTUFBUyxTQUFUQSxNQUFTOztBQUN0Q2lCLHVCQUFXLFlBQU07QUFDYmpCLHVCQUFPLGlFQUFQLEVBQXVCLEtBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSDtBQVhJO0FBdENFLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBLHdEQUFlLElBQUltQixLQUFLQyxLQUFULENBQWU7QUFDNUJDLFdBQVNDLE9BQU9DLE1BQVAsQ0FBYyxpRkFBZCxFQUEyQixFQUEzQixDQURtQjs7QUFLNUJ6QixXQUFTLG1CQUFBaEMsQ0FBUSxFQUFSO0FBTG1CLENBQWYsQ0FBZixDIiwiZmlsZSI6ImpzL3ZpZW5kZXIvZm9sbG93L2V4YW1wbGUtcGFnZS9hcHAtbW9iaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNjApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIwOWU5MDZkYmQ4NzU0OTRjY2M3IiwiLy8gc2VhcmNoT3JBc2tQYW5lbFxuZXhwb3J0IGNvbnN0IFNFVF9SRVFVRVNUSU5HID0gJ1NFVF9SRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19QQU5FTCA9ICdTRVRfU0hPV19QQU5FTCc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1cgPSAnU0VUX1NIT1cnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfVEVYVCA9ICdTRVRfU0VBUkNIX1RFWFQnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfUkVTVUxUUyA9ICdTRVRfU0VBUkNIX1JFU1VMVFMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX01PUkVfRklFTERTID0gJ1NFVF9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyA9ICdUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX1NFTEVDVEVEX1RPUElDUyA9ICdBRERfVE9fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MgPSAnUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFU1RJT05fREVUQUlMID0gJ1NFVF9RVUVTVElPTl9ERVRBSUwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcblx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zb2NpYWxpdGUvcmVzb3VyY2VzL2NvcmUvanMvc3RvcmUvYWN0aW9ucy5qcyIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlIFZ1ZSBhbmQgVnVlIFJlc291cmNlLiBUaGlzIGdpdmVzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgZm9yXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5cbmNvbnN0IGZlZWQgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuXG4gICAgc3RvcmU6IHN0b3JlXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvZm9sbG93L3Jlc291cmNlcy9wYWdlcy9leGFtcGxlLXBhZ2UvYXNzZXRzL2pzL2FwcC1tb2JpbGUuanMiLCJpbXBvcnQgc2VhcmNoT3JBc2tQYW5lbCBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbCc7XG5pbXBvcnQgc2VhcmNoT3JBc2tPdmVybGF5IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXknO1xuaW1wb3J0IHRvcGljUmVjb21tZW5kYXRpb24gZnJvbSAnLi9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2VhcmNoT3JBc2tQYW5lbDogc2VhcmNoT3JBc2tQYW5lbCxcblx0c2VhcmNoT3JBc2tPdmVybGF5OiBzZWFyY2hPckFza092ZXJsYXksXG4gICAgdG9waWNSZWNvbW1lbmRhdGlvbjogdG9waWNSZWNvbW1lbmRhdGlvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHF1ZXN0aW9uRGV0YWlsOiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHBvc3RRdWVzdGlvblVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgnL3F1ZXN0aW9ucycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgaWYoc2hvdykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlRPR0dMRV9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gIXN0YXRlLnNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9RVUVTVElPTl9ERVRBSUxdKHN0YXRlLCBxdWVzdGlvbkRldGFpbCkge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25EZXRhaWwgPSBxdWVzdGlvbkRldGFpbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBwb3N0UXVlc3Rpb24oe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3Qoc3RhdGUucG9zdFF1ZXN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlLnNlYXJjaFRleHQsXG4gICAgICAgICAgICAgICAgYm9keTogc3RhdGUucXVlc3Rpb25EZXRhaWwsXG4gICAgICAgICAgICAgICAgdG9waWNzOiBzdGF0ZS5zZWxlY3RlZFRvcGljcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXSAoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19QQU5FTF0gKHN0YXRlLCBzaG93UGFuZWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dQYW5lbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93UGFuZWwgPSBzaG93UGFuZWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0gKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXSAoc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICB1cmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJ3RvcGljcycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgdHJ1ZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcyIsImltcG9ydCBjb3JlTW9kdWxlcyBmcm9tICd2aWVuZGVyX2NvcmUvanMvc3RvcmUvbW9kdWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczogT2JqZWN0LmFzc2lnbihjb3JlTW9kdWxlcywge1xuXG4gIH0pLFxuXG4gIGFjdGlvbnM6IHJlcXVpcmUoJ3ZpZW5kZXJfc29jaWFsaXRlL2NvcmUvanMvc3RvcmUvL2FjdGlvbnMuanMnKSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9mb2xsb3cvcmVzb3VyY2VzL3BhZ2VzL2V4YW1wbGUtcGFnZS9hc3NldHMvanMvc3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9