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
/******/ 	return __webpack_require__(__webpack_require__.s = 264);
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

/***/ 101:
/***/ (function(module, exports) {



/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);


/* unused harmony default export */ var _unused_webpack_default_export = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {})

});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(102);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(101);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('tutoring-table', __webpack_require__(60));
Vue.component('tutoring-row', __webpack_require__(59));

var feed = new Vue({
  el: '#app'
});

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/nugraha/Code/viender/node_modules/vue-style-loader/lib/addStylesClient.js'");

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

/***/ 56:
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: ['tutoring', 'selfUrl', 'bidUrl', 'bidded'],

	data: function data() {
		return {
			mouseover: false
		};
	},


	methods: {
		hover: function hover() {
			this.mouseover = true;
		},
		leave: function leave() {
			this.mouseover = false;
		},
		click: function click() {
			window.location = this.selfUrl;
		}
	}
};

/***/ }),

/***/ 57:
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

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['tutorings']
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
exports.push([module.i, "\ntr {\n\theight: 90px;\n}\n.tutoring-row {\n\tcursor: pointer;\n}\n", "", {"version":3,"sources":["tutoring-row.vue?5155fe4a"],"names":[],"mappings":";AA+CA;CACA,aAAA;CACA;AAEA;CACA,gBAAA;CACA","file":"tutoring-row.vue","sourcesContent":["<template>\n    <tr class=\"tutoring-row\" @mouseover=\"hover()\" @mouseleave=\"leave()\" @click=\"click()\" v-show=\"tutoring ? (tutoring.auction ? true : false) : false\">\n        <td width=\"50%\">\n            <div>\n                {{ tutoring ? (tutoring.auction ? tutoring.auction.title : '') : '' }}\n            </div>\n            <div>\n                {{ tutoring ? (tutoring.auction ? tutoring.auction.body : '') : '' }}\n            </div>\n        </td>\n        <td width=\"15%\">{{ tutoring ? (tutoring.auction ? tutoring.auction.bids.length : '') : '' }}</td>\n        <td width=\"15%\">{{ tutoring ? tutoring.number_of_week : 0 }}</td>\n        <td width=\"20%\">\n        \t<div>{{ 'Rp. ' + new Intl.NumberFormat('id-ID').format(tutoring ? (tutoring.auction ? tutoring.auction.price : 0) : 0) }}</div>\n        \t<a :href=\"bidUrl\" class=\"btn btn-default\" v-show=\"mouseover\" v-if=\"! bidded\">Bid now</a>\n        \t<span class=\"label label-success\" v-else>Bidded</span>\n        </td>\n    </tr>\n</template>\n\n<script>\nexport default {\n\tprops: ['tutoring', 'selfUrl', 'bidUrl', 'bidded'],\n\n\tdata() {\n\t\treturn {\n\t\t\tmouseover: false,\n\t\t}\n\t},\n\n\tmethods: {\n\t\thover() {\n\t\t\tthis.mouseover = true;\n\t\t},\n\n\t\tleave() {\n\t\t\tthis.mouseover = false;\n\t\t},\n\n\t\tclick() {\n\t\t\twindow.location = this.selfUrl;\n\t\t}\n\t}\n}\n</script>\n\n<style>\n\ttr {\n\t\theight: 90px;\n\t}\n\n\t.tutoring-row {\n\t\tcursor: pointer;\n\t}\n</style>"]}]);

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(61),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/mytutor/resources/core/js/components/tutoring-row.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tutoring-row.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17988bd8", Component.options)
  } else {
    hotAPI.reload("data-v-17988bd8", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/mytutor/resources/core/js/components/tutoring-table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tutoring-table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fb7724c", Component.options)
  } else {
    hotAPI.reload("data-v-1fb7724c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tutoring ? (_vm.tutoring.auction ? true : false) : false),
      expression: "tutoring ? (tutoring.auction ? true : false) : false"
    }],
    staticClass: "tutoring-row",
    on: {
      "mouseover": function($event) {
        _vm.hover()
      },
      "mouseleave": function($event) {
        _vm.leave()
      },
      "click": function($event) {
        _vm.click()
      }
    }
  }, [_c('td', {
    attrs: {
      "width": "50%"
    }
  }, [_c('div', [_vm._v("\n            " + _vm._s(_vm.tutoring ? (_vm.tutoring.auction ? _vm.tutoring.auction.title : '') : '') + "\n        ")]), _vm._v(" "), _c('div', [_vm._v("\n            " + _vm._s(_vm.tutoring ? (_vm.tutoring.auction ? _vm.tutoring.auction.body : '') : '') + "\n        ")])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v(_vm._s(_vm.tutoring ? (_vm.tutoring.auction ? _vm.tutoring.auction.bids.length : '') : ''))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v(_vm._s(_vm.tutoring ? _vm.tutoring.number_of_week : 0))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('div', [_vm._v(_vm._s('Rp. ' + new Intl.NumberFormat('id-ID').format(_vm.tutoring ? (_vm.tutoring.auction ? _vm.tutoring.auction.price : 0) : 0)))]), _vm._v(" "), (!_vm.bidded) ? _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mouseover),
      expression: "mouseover"
    }],
    staticClass: "btn btn-default",
    attrs: {
      "href": _vm.bidUrl
    }
  }, [_vm._v("Bid now")]) : _c('span', {
    staticClass: "label label-success"
  }, [_vm._v("Bidded")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17988bd8", module.exports)
  }
}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table table-hover table-responsive"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.tutorings.data), function(tutoring) {
    return _c('tutoring-row', {
      attrs: {
        "tutoring": tutoring
      }
    })
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', {
    staticClass: "thead-inverse"
  }, [_c('tr', [_c('th', [_vm._v("Title")]), _vm._v(" "), _c('th', [_vm._v("Bids")]), _vm._v(" "), _c('th', [_vm._v("Number of week")]), _vm._v(" "), _c('th', [_vm._v("Price")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1fb7724c", module.exports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(31)("3ab4eb71", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-17988bd8!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutoring-row.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-17988bd8!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutoring-row.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/NGJkYioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvcG9zdEJpZC9hc3NldHMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9wb3N0QmlkL2Fzc2V0cy9qcy9hcHAtbW9iaWxlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcz8zZjViKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vdHV0b3Jpbmctcm93LnZ1ZT9iNWExKioiLCJ3ZWJwYWNrOi8vL3R1dG9yaW5nLXRhYmxlLnZ1ZT8zYWFmKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZT85MTdlKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWU/OWE0NSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanM/YWZhYSoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWU/NWJkMSoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWU/MWFiOSoqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlP2JmMTEqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanM/MDljNSoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanM/MzYyMCoqKioqKioqKioqKioiXSwibmFtZXMiOlsiU0VUX1JFUVVFU1RJTkciLCJTRVRfU0hPV19QQU5FTCIsIlNFVF9TSE9XIiwiU0VUX1NFQVJDSF9URVhUIiwiU0VUX1NFQVJDSF9SRVNVTFRTIiwiU0VUX1NIT1dfTU9SRV9GSUVMRFMiLCJUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyIsIkFERF9UT19TRUxFQ1RFRF9UT1BJQ1MiLCJSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MiLCJTRVRfUVVFU1RJT05fREVUQUlMIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsInJlcXVpcmUiLCJWdWUiLCJjb21wb25lbnQiLCJmZWVkIiwiZWwiLCJzZWFyY2hPckFza1BhbmVsIiwic2VhcmNoT3JBc2tPdmVybGF5IiwidG9waWNSZWNvbW1lbmRhdGlvbiIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsInJlcXVlc3RpbmciLCJzaG93Iiwic2VhcmNoVGV4dCIsInF1ZXN0aW9uRGV0YWlsIiwic2VhcmNoUmVzdWx0cyIsInNob3dNb3JlRmllbGRzIiwic2VsZWN0ZWRUb3BpY3MiLCJwb3N0UXVlc3Rpb25VcmwiLCJwcm90b3R5cGUiLCIkdmllbmRlciIsImhlbHBlcnMiLCJhcGkiLCJtdXRhdGlvbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJ0b3BpYyIsInB1c2giLCJmaWx0ZXIiLCJzZWxlY3RlZFRvcGljIiwiaWQiLCJhY3Rpb25zIiwicG9zdFF1ZXN0aW9uIiwiY29tbWl0IiwiYXhpb3MiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidG9waWNzIiwidGhlbiIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJnZXRVcmwiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInNob3dQYW5lbCIsIm92ZXJmbG93IiwidXJsIiwic2hvd1RvcGljUmVjb21tZW5kYXRpb25zIiwic2V0VGltZW91dCIsImhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUNPLElBQU1BLGlCQUFpQixnQkFBdkI7QUFDQSxJQUFNQyxpQkFBaUIsZ0JBQXZCO0FBQ0EsSUFBTUMsV0FBVyxVQUFqQjtBQUNBLElBQU1DLGtCQUFrQixpQkFBeEI7QUFDQSxJQUFNQyxxQkFBcUIsb0JBQTNCO0FBQ0EsSUFBTUMsdUJBQXVCLHNCQUE3QjtBQUNBLElBQU1DLDBCQUEwQix5QkFBaEM7QUFDQSxJQUFNQyx5QkFBeUIsd0JBQS9CO0FBQ0EsSUFBTUMsOEJBQThCLDZC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QUFBQSxnQkFBaEIzQyxLQUFnQixTQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVHlCLE1BQVMsU0FBVEEsTUFBUzs7QUFDdENpQix1QkFBVyxZQUFNO0FBQ2JqQix1QkFBTyxpRUFBUCxFQUF1QixLQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0g7QUFYSTtBQXRDRSxDQUFmLEMiLCJmaWxlIjoianMvdmllbmRlci9teXR1dG9yL3Bvc3RCaWQvYXBwLW1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjY0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYzc2NWY2ZjhhM2I3ZjNmNDgzMCIsIi8vIHNlYXJjaE9yQXNrUGFuZWxcbmV4cG9ydCBjb25zdCBTRVRfUkVRVUVTVElORyA9ICdTRVRfUkVRVUVTVElORyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfUEFORUwgPSAnU0VUX1NIT1dfUEFORUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XID0gJ1NFVF9TSE9XJztcbmV4cG9ydCBjb25zdCBTRVRfU0VBUkNIX1RFWFQgPSAnU0VUX1NFQVJDSF9URVhUJztcbmV4cG9ydCBjb25zdCBTRVRfU0VBUkNIX1JFU1VMVFMgPSAnU0VUX1NFQVJDSF9SRVNVTFRTJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19NT1JFX0ZJRUxEUyA9ICdTRVRfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMgPSAnVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IEFERF9UT19TRUxFQ1RFRF9UT1BJQ1MgPSAnQUREX1RPX1NFTEVDVEVEX1RPUElDUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTID0gJ1JFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVNUSU9OX0RFVEFJTCA9ICdTRVRfUVVFU1RJT05fREVUQUlMJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJpbXBvcnQgY29yZU1vZHVsZXMgZnJvbSAndmllbmRlcl9jb3JlL2pzL3N0b3JlL21vZHVsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIG1vZHVsZXM6IE9iamVjdC5hc3NpZ24oY29yZU1vZHVsZXMsIHtcblxuICB9KSxcblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL3BhZ2VzL3Bvc3RCaWQvYXNzZXRzL2pzL3N0b3JlLmpzIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGUgVnVlIGFuZCBWdWUgUmVzb3VyY2UuIFRoaXMgZ2l2ZXMgYSBncmVhdCBzdGFydGluZyBwb2ludCBmb3JcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ3R1dG9yaW5nLXRhYmxlJywgcmVxdWlyZSgndmllbmRlcl9teXR1dG9yL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0dXRvcmluZy1yb3cnLCByZXF1aXJlKCd2aWVuZGVyX215dHV0b3IvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWUnKSk7XG5cbmNvbnN0IGZlZWQgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9wb3N0QmlkL2Fzc2V0cy9qcy9hcHAtbW9iaWxlLmpzIiwiaW1wb3J0IHNlYXJjaE9yQXNrUGFuZWwgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwnO1xuaW1wb3J0IHNlYXJjaE9yQXNrT3ZlcmxheSBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5JztcbmltcG9ydCB0b3BpY1JlY29tbWVuZGF0aW9uIGZyb20gJy4vbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNlYXJjaE9yQXNrUGFuZWw6IHNlYXJjaE9yQXNrUGFuZWwsXG5cdHNlYXJjaE9yQXNrT3ZlcmxheTogc2VhcmNoT3JBc2tPdmVybGF5LFxuICAgIHRvcGljUmVjb21tZW5kYXRpb246IHRvcGljUmVjb21tZW5kYXRpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanMiLCI8dGVtcGxhdGU+XG4gICAgPHRyIGNsYXNzPVwidHV0b3Jpbmctcm93XCIgQG1vdXNlb3Zlcj1cImhvdmVyKClcIiBAbW91c2VsZWF2ZT1cImxlYXZlKClcIiBAY2xpY2s9XCJjbGljaygpXCIgdi1zaG93PVwidHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHRydWUgOiBmYWxzZSkgOiBmYWxzZVwiPlxuICAgICAgICA8dGQgd2lkdGg9XCI1MCVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24udGl0bGUgOiAnJykgOiAnJyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLmJvZHkgOiAnJykgOiAnJyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjE1JVwiPnt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLmJpZHMubGVuZ3RoIDogJycpIDogJycgfX08L3RkPlxuICAgICAgICA8dGQgd2lkdGg9XCIxNSVcIj57eyB0dXRvcmluZyA/IHR1dG9yaW5nLm51bWJlcl9vZl93ZWVrIDogMCB9fTwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiPlxuICAgICAgICBcdDxkaXY+e3sgJ1JwLiAnICsgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdpZC1JRCcpLmZvcm1hdCh0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi5wcmljZSA6IDApIDogMCkgfX08L2Rpdj5cbiAgICAgICAgXHQ8YSA6aHJlZj1cImJpZFVybFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdi1zaG93PVwibW91c2VvdmVyXCIgdi1pZj1cIiEgYmlkZGVkXCI+QmlkIG5vdzwvYT5cbiAgICAgICAgXHQ8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIiB2LWVsc2U+QmlkZGVkPC9zcGFuPlxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd0dXRvcmluZycsICdzZWxmVXJsJywgJ2JpZFVybCcsICdiaWRkZWQnXSxcblxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtb3VzZW92ZXI6IGZhbHNlLFxuXHRcdH1cblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0aG92ZXIoKSB7XG5cdFx0XHR0aGlzLm1vdXNlb3ZlciA9IHRydWU7XG5cdFx0fSxcblxuXHRcdGxlYXZlKCkge1xuXHRcdFx0dGhpcy5tb3VzZW92ZXIgPSBmYWxzZTtcblx0XHR9LFxuXG5cdFx0Y2xpY2soKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLnNlbGZVcmw7XG5cdFx0fVxuXHR9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHR0ciB7XG5cdFx0aGVpZ2h0OiA5MHB4O1xuXHR9XG5cblx0LnR1dG9yaW5nLXJvdyB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0dXRvcmluZy1yb3cudnVlPzUxNTVmZTRhIiwiPHRlbXBsYXRlPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzPVwidGhlYWQtaW52ZXJzZVwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkJpZHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2Ygd2VlazwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0dXRvcmluZy1yb3cgdi1mb3I9XCJ0dXRvcmluZyBpbiB0dXRvcmluZ3MuZGF0YVwiIDp0dXRvcmluZz1cInR1dG9yaW5nXCI+PC90dXRvcmluZy1yb3c+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogWyd0dXRvcmluZ3MnXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0dXRvcmluZy10YWJsZS52dWU/MDY5YjRlZmMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG50ciB7XFxuXFx0aGVpZ2h0OiA5MHB4O1xcbn1cXG4udHV0b3Jpbmctcm93IHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ0dXRvcmluZy1yb3cudnVlPzUxNTVmZTRhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErQ0E7Q0FDQSxhQUFBO0NBQ0E7QUFFQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcInR1dG9yaW5nLXJvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8dHIgY2xhc3M9XFxcInR1dG9yaW5nLXJvd1xcXCIgQG1vdXNlb3Zlcj1cXFwiaG92ZXIoKVxcXCIgQG1vdXNlbGVhdmU9XFxcImxlYXZlKClcXFwiIEBjbGljaz1cXFwiY2xpY2soKVxcXCIgdi1zaG93PVxcXCJ0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlXFxcIj5cXG4gICAgICAgIDx0ZCB3aWR0aD1cXFwiNTAlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICB7eyB0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi50aXRsZSA6ICcnKSA6ICcnIH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAge3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYm9keSA6ICcnKSA6ICcnIH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3RkPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIxNSVcXFwiPnt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLmJpZHMubGVuZ3RoIDogJycpIDogJycgfX08L3RkPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIxNSVcXFwiPnt7IHR1dG9yaW5nID8gdHV0b3JpbmcubnVtYmVyX29mX3dlZWsgOiAwIH19PC90ZD5cXG4gICAgICAgIDx0ZCB3aWR0aD1cXFwiMjAlXFxcIj5cXG4gICAgICAgIFxcdDxkaXY+e3sgJ1JwLiAnICsgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdpZC1JRCcpLmZvcm1hdCh0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi5wcmljZSA6IDApIDogMCkgfX08L2Rpdj5cXG4gICAgICAgIFxcdDxhIDpocmVmPVxcXCJiaWRVcmxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHYtc2hvdz1cXFwibW91c2VvdmVyXFxcIiB2LWlmPVxcXCIhIGJpZGRlZFxcXCI+QmlkIG5vdzwvYT5cXG4gICAgICAgIFxcdDxzcGFuIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1zdWNjZXNzXFxcIiB2LWVsc2U+QmlkZGVkPC9zcGFuPlxcbiAgICAgICAgPC90ZD5cXG4gICAgPC90cj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcblxcdHByb3BzOiBbJ3R1dG9yaW5nJywgJ3NlbGZVcmwnLCAnYmlkVXJsJywgJ2JpZGRlZCddLFxcblxcblxcdGRhdGEoKSB7XFxuXFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRtb3VzZW92ZXI6IGZhbHNlLFxcblxcdFxcdH1cXG5cXHR9LFxcblxcblxcdG1ldGhvZHM6IHtcXG5cXHRcXHRob3ZlcigpIHtcXG5cXHRcXHRcXHR0aGlzLm1vdXNlb3ZlciA9IHRydWU7XFxuXFx0XFx0fSxcXG5cXG5cXHRcXHRsZWF2ZSgpIHtcXG5cXHRcXHRcXHR0aGlzLm1vdXNlb3ZlciA9IGZhbHNlO1xcblxcdFxcdH0sXFxuXFxuXFx0XFx0Y2xpY2soKSB7XFxuXFx0XFx0XFx0d2luZG93LmxvY2F0aW9uID0gdGhpcy5zZWxmVXJsO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXHR0ciB7XFxuXFx0XFx0aGVpZ2h0OiA5MHB4O1xcblxcdH1cXG5cXG5cXHQudHV0b3Jpbmctcm93IHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0fVxcbjwvc3R5bGU+XCJdfV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiAxMyAxNCAxNSAxNiAxNyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xNzk4OGJkOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHR1dG9yaW5nLXJvdy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTc5ODhiZDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNzk4OGJkOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgcXVlc3Rpb25EZXRhaWw6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgcG9zdFF1ZXN0aW9uVXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCcvcXVlc3Rpb25zJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBpZihzaG93KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSAhc3RhdGUuc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1FVRVNUSU9OX0RFVEFJTF0oc3RhdGUsIHF1ZXN0aW9uRGV0YWlsKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbkRldGFpbCA9IHF1ZXN0aW9uRGV0YWlsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHBvc3RRdWVzdGlvbih7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdChzdGF0ZS5wb3N0UXVlc3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICBib2R5OiBzdGF0ZS5xdWVzdGlvbkRldGFpbCxcbiAgICAgICAgICAgICAgICB0b3BpY3M6IHN0YXRlLnNlbGVjdGVkVG9waWNzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90dXRvcmluZy10YWJsZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWZiNzcyNGMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3R1dG9yaW5nLXRhYmxlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdHV0b3JpbmctdGFibGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFmYjc3MjRjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWZiNzcyNGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0cicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHV0b3JpbmcgPyAoX3ZtLnR1dG9yaW5nLmF1Y3Rpb24gPyB0cnVlIDogZmFsc2UpIDogZmFsc2UpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0dXRvcmluZy1yb3dcIixcbiAgICBvbjoge1xuICAgICAgXCJtb3VzZW92ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5ob3ZlcigpXG4gICAgICB9LFxuICAgICAgXCJtb3VzZWxlYXZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubGVhdmUoKVxuICAgICAgfSxcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbGljaygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3RkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNTAlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2JywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IF92bS50dXRvcmluZy5hdWN0aW9uLnRpdGxlIDogJycpIDogJycpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IF92bS50dXRvcmluZy5hdWN0aW9uLmJvZHkgOiAnJykgOiAnJykgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTUlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IF92bS50dXRvcmluZy5hdWN0aW9uLmJpZHMubGVuZ3RoIDogJycpIDogJycpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxNSVcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnR1dG9yaW5nID8gX3ZtLnR1dG9yaW5nLm51bWJlcl9vZl93ZWVrIDogMCkpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ3aWR0aFwiOiBcIjIwJVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIFtfdm0uX3YoX3ZtLl9zKCdScC4gJyArIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnaWQtSUQnKS5mb3JtYXQoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24ucHJpY2UgOiAwKSA6IDApKSldKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uYmlkZGVkKSA/IF9jKCdhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5tb3VzZW92ZXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJtb3VzZW92ZXJcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmJpZFVybFxuICAgIH1cbiAgfSwgW192bS5fdihcIkJpZCBub3dcIildKSA6IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIlxuICB9LCBbX3ZtLl92KFwiQmlkZGVkXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTE3OTg4YmQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xNzk4OGJkOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiAxMyAxNCAxNSAxNiAxNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtcmVzcG9uc2l2ZVwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCd0Ym9keScsIF92bS5fbCgoX3ZtLnR1dG9yaW5ncy5kYXRhKSwgZnVuY3Rpb24odHV0b3JpbmcpIHtcbiAgICByZXR1cm4gX2MoJ3R1dG9yaW5nLXJvdycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHV0b3JpbmdcIjogdHV0b3JpbmdcbiAgICAgIH1cbiAgICB9KVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0aGVhZCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aGVhZC1pbnZlcnNlXCJcbiAgfSwgW19jKCd0cicsIFtfYygndGgnLCBbX3ZtLl92KFwiVGl0bGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIkJpZHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIk51bWJlciBvZiB3ZWVrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcsIFtfdm0uX3YoXCJQcmljZVwiKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFmYjc3MjRjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xZmI3NzI0YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2FiNGViNzFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93UGFuZWw6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddIChzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX1BBTkVMXSAoc3RhdGUsIHNob3dQYW5lbCkge1xuICAgICAgICAgICAgaWYoc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3dQYW5lbCA9IHNob3dQYW5lbDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXSAoc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdIChzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgndG9waWNzJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd1RvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZVRvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==