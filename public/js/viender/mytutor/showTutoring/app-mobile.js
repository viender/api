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
/******/ 	return __webpack_require__(__webpack_require__.s = 270);
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

/***/ 107:
/***/ (function(module, exports) {



/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);


/* unused harmony default export */ var _unused_webpack_default_export = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {})

});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(108);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(107);

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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzPzRiZGIqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9zaG93VHV0b3JpbmcvYXNzZXRzL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvc2hvd1R1dG9yaW5nL2Fzc2V0cy9qcy9hcHAtbW9iaWxlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcz8zZjViKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3R1dG9yaW5nLXJvdy52dWUiLCJ3ZWJwYWNrOi8vL3R1dG9yaW5nLXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlPzkxN2UiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZT85YTQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanM/YWZhYSoqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXRhYmxlLnZ1ZT83M2E5Iiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWU/NWJkMSIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWU/MWFiOSIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlP2JmMTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanM/MDljNSoqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzPzM2MjAqKioqKioqKioqKiJdLCJuYW1lcyI6WyJTRVRfUkVRVUVTVElORyIsIlNFVF9TSE9XX1BBTkVMIiwiU0VUX1NIT1ciLCJTRVRfU0VBUkNIX1RFWFQiLCJTRVRfU0VBUkNIX1JFU1VMVFMiLCJTRVRfU0hPV19NT1JFX0ZJRUxEUyIsIlRPR0dMRV9TSE9XX01PUkVfRklFTERTIiwiQUREX1RPX1NFTEVDVEVEX1RPUElDUyIsIlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyIsIlNFVF9RVUVTVElPTl9ERVRBSUwiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsImZlZWQiLCJlbCIsInNlYXJjaE9yQXNrUGFuZWwiLCJzZWFyY2hPckFza092ZXJsYXkiLCJ0b3BpY1JlY29tbWVuZGF0aW9uIiwibmFtZXNwYWNlZCIsInN0YXRlIiwicmVxdWVzdGluZyIsInNob3ciLCJzZWFyY2hUZXh0IiwicXVlc3Rpb25EZXRhaWwiLCJzZWFyY2hSZXN1bHRzIiwic2hvd01vcmVGaWVsZHMiLCJzZWxlY3RlZFRvcGljcyIsInBvc3RRdWVzdGlvblVybCIsInByb3RvdHlwZSIsIiR2aWVuZGVyIiwiaGVscGVycyIsImFwaSIsIm11dGF0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInRvcGljIiwicHVzaCIsImZpbHRlciIsInNlbGVjdGVkVG9waWMiLCJpZCIsImFjdGlvbnMiLCJwb3N0UXVlc3Rpb24iLCJjb21taXQiLCJheGlvcyIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJ0b3BpY3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhdGlvbiIsImdldFVybCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic2hvd1BhbmVsIiwib3ZlcmZsb3ciLCJ1cmwiLCJzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMiLCJzZXRUaW1lb3V0IiwiaGlkZVRvcGljUmVjb21tZW5kYXRpb25zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQ08sSUFBTUEsaUJBQWlCLGdCQUF2QjtBQUNBLElBQU1DLGlCQUFpQixnQkFBdkI7QUFDQSxJQUFNQyxXQUFXLFVBQWpCO0FBQ0EsSUFBTUMsa0JBQWtCLGlCQUF4QjtBQUNBLElBQU1DLHFCQUFxQixvQkFBM0I7QUFDQSxJQUFNQyx1QkFBdUIsc0JBQTdCO0FBQ0EsSUFBTUMsMEJBQTBCLHlCQUFoQztBQUNBLElBQU1DLHlCQUF5Qix3QkFBL0I7QUFDQSxJQUFNQyw4QkFBOEIsNkJBQXBDO0FBQ0EsSUFBTUMsc0JBQXNCLHFC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QSxLQUFnQjtBQUFBLGdCQUFUeUIsTUFBUyxTQUFUQSxNQUFTOztBQUN0Q2lCLHVCQUFXLFlBQU07QUFDYmpCLHVCQUFPLGlFQUFQLEVBQXVCLEtBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSDtBQVhJO0FBdENFLENBQWYsQyIsImZpbGUiOiJqcy92aWVuZGVyL215dHV0b3Ivc2hvd1R1dG9yaW5nL2FwcC1tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzAiLCIvLyBzZWFyY2hPckFza1BhbmVsXG5leHBvcnQgY29uc3QgU0VUX1JFUVVFU1RJTkcgPSAnU0VUX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX1BBTkVMID0gJ1NFVF9TSE9XX1BBTkVMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPVyA9ICdTRVRfU0hPVyc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9URVhUID0gJ1NFVF9TRUFSQ0hfVEVYVCc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9SRVNVTFRTID0gJ1NFVF9TRUFSQ0hfUkVTVUxUUyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfTU9SRV9GSUVMRFMgPSAnU0VUX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9TSE9XX01PUkVfRklFTERTID0gJ1RPR0dMRV9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fU0VMRUNURURfVE9QSUNTID0gJ0FERF9UT19TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyA9ICdSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTl9ERVRBSUwgPSAnU0VUX1FVRVNUSU9OX0RFVEFJTCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwiaW1wb3J0IGNvcmVNb2R1bGVzIGZyb20gJ3ZpZW5kZXJfY29yZS9qcy9zdG9yZS9tb2R1bGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiBPYmplY3QuYXNzaWduKGNvcmVNb2R1bGVzLCB7XG5cbiAgfSksXG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9zaG93VHV0b3JpbmcvYXNzZXRzL2pzL3N0b3JlLmpzIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGUgVnVlIGFuZCBWdWUgUmVzb3VyY2UuIFRoaXMgZ2l2ZXMgYSBncmVhdCBzdGFydGluZyBwb2ludCBmb3JcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ3R1dG9yaW5nLXRhYmxlJywgcmVxdWlyZSgndmllbmRlcl9teXR1dG9yL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd0dXRvcmluZy1yb3cnLCByZXF1aXJlKCd2aWVuZGVyX215dHV0b3IvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWUnKSk7XG5cbmNvbnN0IGZlZWQgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9zaG93VHV0b3JpbmcvYXNzZXRzL2pzL2FwcC1tb2JpbGUuanMiLCJpbXBvcnQgc2VhcmNoT3JBc2tQYW5lbCBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbCc7XG5pbXBvcnQgc2VhcmNoT3JBc2tPdmVybGF5IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXknO1xuaW1wb3J0IHRvcGljUmVjb21tZW5kYXRpb24gZnJvbSAnLi9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2VhcmNoT3JBc2tQYW5lbDogc2VhcmNoT3JBc2tQYW5lbCxcblx0c2VhcmNoT3JBc2tPdmVybGF5OiBzZWFyY2hPckFza092ZXJsYXksXG4gICAgdG9waWNSZWNvbW1lbmRhdGlvbjogdG9waWNSZWNvbW1lbmRhdGlvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8dHIgY2xhc3M9XCJ0dXRvcmluZy1yb3dcIiBAbW91c2VvdmVyPVwiaG92ZXIoKVwiIEBtb3VzZWxlYXZlPVwibGVhdmUoKVwiIEBjbGljaz1cImNsaWNrKClcIiB2LXNob3c9XCJ0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlXCI+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjUwJVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7eyB0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi50aXRsZSA6ICcnKSA6ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYm9keSA6ICcnKSA6ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIHdpZHRoPVwiMTUlXCI+e3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYmlkcy5sZW5ndGggOiAnJykgOiAnJyB9fTwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjE1JVwiPnt7IHR1dG9yaW5nID8gdHV0b3JpbmcubnVtYmVyX29mX3dlZWsgOiAwIH19PC90ZD5cbiAgICAgICAgPHRkIHdpZHRoPVwiMjAlXCI+XG4gICAgICAgIFx0PGRpdj57eyAnUnAuICcgKyBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2lkLUlEJykuZm9ybWF0KHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLnByaWNlIDogMCkgOiAwKSB9fTwvZGl2PlxuICAgICAgICBcdDxhIDpocmVmPVwiYmlkVXJsXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiB2LXNob3c9XCJtb3VzZW92ZXJcIiB2LWlmPVwiISBiaWRkZWRcIj5CaWQgbm93PC9hPlxuICAgICAgICBcdDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiIHYtZWxzZT5CaWRkZWQ8L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3R1dG9yaW5nJywgJ3NlbGZVcmwnLCAnYmlkVXJsJywgJ2JpZGRlZCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1vdXNlb3ZlcjogZmFsc2UsXG5cdFx0fVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRob3ZlcigpIHtcblx0XHRcdHRoaXMubW91c2VvdmVyID0gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0bGVhdmUoKSB7XG5cdFx0XHR0aGlzLm1vdXNlb3ZlciA9IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRjbGljaygpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuc2VsZlVybDtcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdHRyIHtcblx0XHRoZWlnaHQ6IDkwcHg7XG5cdH1cblxuXHQudHV0b3Jpbmctcm93IHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHR1dG9yaW5nLXJvdy52dWU/NTE1NWZlNGEiLCI8dGVtcGxhdGU+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0aGVhZC1pbnZlcnNlXCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+QmlkczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiB3ZWVrPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHR1dG9yaW5nLXJvdyB2LWZvcj1cInR1dG9yaW5nIGluIHR1dG9yaW5ncy5kYXRhXCIgOnR1dG9yaW5nPVwidHV0b3JpbmdcIj48L3R1dG9yaW5nLXJvdz5cbiAgICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ3R1dG9yaW5ncyddXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHR1dG9yaW5nLXRhYmxlLnZ1ZT8wNjliNGVmYyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbnRyIHtcXG5cXHRoZWlnaHQ6IDkwcHg7XFxufVxcbi50dXRvcmluZy1yb3cge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInR1dG9yaW5nLXJvdy52dWU/NTE1NWZlNGFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStDQTtDQUNBLGFBQUE7Q0FDQTtBQUVBO0NBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidHV0b3Jpbmctcm93LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx0ciBjbGFzcz1cXFwidHV0b3Jpbmctcm93XFxcIiBAbW91c2VvdmVyPVxcXCJob3ZlcigpXFxcIiBAbW91c2VsZWF2ZT1cXFwibGVhdmUoKVxcXCIgQGNsaWNrPVxcXCJjbGljaygpXFxcIiB2LXNob3c9XFxcInR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0cnVlIDogZmFsc2UpIDogZmFsc2VcXFwiPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCI1MCVcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIHt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLnRpdGxlIDogJycpIDogJycgfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICB7eyB0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi5ib2R5IDogJycpIDogJycgfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvdGQ+XFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjE1JVxcXCI+e3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYmlkcy5sZW5ndGggOiAnJykgOiAnJyB9fTwvdGQ+XFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjE1JVxcXCI+e3sgdHV0b3JpbmcgPyB0dXRvcmluZy5udW1iZXJfb2Zfd2VlayA6IDAgfX08L3RkPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIyMCVcXFwiPlxcbiAgICAgICAgXFx0PGRpdj57eyAnUnAuICcgKyBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2lkLUlEJykuZm9ybWF0KHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLnByaWNlIDogMCkgOiAwKSB9fTwvZGl2PlxcbiAgICAgICAgXFx0PGEgOmhyZWY9XFxcImJpZFVybFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdi1zaG93PVxcXCJtb3VzZW92ZXJcXFwiIHYtaWY9XFxcIiEgYmlkZGVkXFxcIj5CaWQgbm93PC9hPlxcbiAgICAgICAgXFx0PHNwYW4gY2xhc3M9XFxcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcXFwiIHYtZWxzZT5CaWRkZWQ8L3NwYW4+XFxuICAgICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuXFx0cHJvcHM6IFsndHV0b3JpbmcnLCAnc2VsZlVybCcsICdiaWRVcmwnLCAnYmlkZGVkJ10sXFxuXFxuXFx0ZGF0YSgpIHtcXG5cXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdG1vdXNlb3ZlcjogZmFsc2UsXFxuXFx0XFx0fVxcblxcdH0sXFxuXFxuXFx0bWV0aG9kczoge1xcblxcdFxcdGhvdmVyKCkge1xcblxcdFxcdFxcdHRoaXMubW91c2VvdmVyID0gdHJ1ZTtcXG5cXHRcXHR9LFxcblxcblxcdFxcdGxlYXZlKCkge1xcblxcdFxcdFxcdHRoaXMubW91c2VvdmVyID0gZmFsc2U7XFxuXFx0XFx0fSxcXG5cXG5cXHRcXHRjbGljaygpIHtcXG5cXHRcXHRcXHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLnNlbGZVcmw7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcdHRyIHtcXG5cXHRcXHRoZWlnaHQ6IDkwcHg7XFxuXFx0fVxcblxcblxcdC50dXRvcmluZy1yb3cge1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR9XFxuPC9zdHlsZT5cIl19XSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xNzk4OGJkOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3R1dG9yaW5nLXJvdy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdHV0b3Jpbmctcm93LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNzk4OGJkOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE3OTg4YmQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBxdWVzdGlvbkRldGFpbDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICBwb3N0UXVlc3Rpb25Vcmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJy9xdWVzdGlvbnMnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIGlmKHNob3cpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5UT0dHTEVfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9ICFzdGF0ZS5zaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfUVVFU1RJT05fREVUQUlMXShzdGF0ZSwgcXVlc3Rpb25EZXRhaWwpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uRGV0YWlsID0gcXVlc3Rpb25EZXRhaWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgcG9zdFF1ZXN0aW9uKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIHRydWUpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHN0YXRlLnBvc3RRdWVzdGlvblVybCwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdGF0ZS5zZWFyY2hUZXh0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHN0YXRlLnF1ZXN0aW9uRGV0YWlsLFxuICAgICAgICAgICAgICAgIHRvcGljczogc3RhdGUuc2VsZWN0ZWRUb3BpY3MsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3R1dG9yaW5nLXRhYmxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xZmI3NzI0YyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdHV0b3JpbmctdGFibGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0dXRvcmluZy10YWJsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWZiNzcyNGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZmI3NzI0Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IHRydWUgOiBmYWxzZSkgOiBmYWxzZSksXG4gICAgICBleHByZXNzaW9uOiBcInR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0cnVlIDogZmFsc2UpIDogZmFsc2VcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInR1dG9yaW5nLXJvd1wiLFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhvdmVyKClcbiAgICAgIH0sXG4gICAgICBcIm1vdXNlbGVhdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sZWF2ZSgpXG4gICAgICB9LFxuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNsaWNrKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygndGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogXCI1MCVcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24udGl0bGUgOiAnJykgOiAnJykgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24uYm9keSA6ICcnKSA6ICcnKSArIFwiXFxuICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxNSVcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24uYmlkcy5sZW5ndGggOiAnJykgOiAnJykpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ3aWR0aFwiOiBcIjE1JVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udHV0b3JpbmcgPyBfdm0udHV0b3JpbmcubnVtYmVyX29mX3dlZWsgOiAwKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMjAlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2JywgW192bS5fdihfdm0uX3MoJ1JwLiAnICsgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdpZC1JRCcpLmZvcm1hdChfdm0udHV0b3JpbmcgPyAoX3ZtLnR1dG9yaW5nLmF1Y3Rpb24gPyBfdm0udHV0b3JpbmcuYXVjdGlvbi5wcmljZSA6IDApIDogMCkpKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5iaWRkZWQpID8gX2MoJ2EnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm1vdXNlb3ZlciksXG4gICAgICBleHByZXNzaW9uOiBcIm1vdXNlb3ZlclwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uYmlkVXJsXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQmlkIG5vd1wiKV0pIDogX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoXCJCaWRkZWRcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTc5ODhiZDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1yZXNwb25zaXZlXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Rib2R5JywgX3ZtLl9sKChfdm0udHV0b3JpbmdzLmRhdGEpLCBmdW5jdGlvbih0dXRvcmluZykge1xuICAgIHJldHVybiBfYygndHV0b3Jpbmctcm93Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0dXRvcmluZ1wiOiB0dXRvcmluZ1xuICAgICAgfVxuICAgIH0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RoZWFkJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRoZWFkLWludmVyc2VcIlxuICB9LCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJUaXRsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnLCBbX3ZtLl92KFwiQmlkc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnLCBbX3ZtLl92KFwiTnVtYmVyIG9mIHdlZWtcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIlByaWNlXCIpXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWZiNzcyNGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFmYjc3MjRjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzYWI0ZWI3MVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xNzk4OGJkOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3R1dG9yaW5nLXJvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xNzk4OGJkOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10gKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfUEFORUxdIChzdGF0ZSwgc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICBpZihzaG93UGFuZWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvd1BhbmVsID0gc2hvd1BhbmVsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdIChzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10gKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgdXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCd0b3BpY3MnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIHRydWUpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlVG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9