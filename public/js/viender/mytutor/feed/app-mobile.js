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
/******/ 	return __webpack_require__(__webpack_require__.s = 262);
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

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);


/* unused harmony default export */ var _unused_webpack_default_export = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {})

});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(100);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(99);

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

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(33)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
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

/***/ }),

/***/ 99:
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjA5ZTkwNmRiZDg3NTQ5NGNjYzc/MWM3ZCoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzPzRiZGIqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvZmVlZC9hc3NldHMvanMvc3RvcmUuanM/ZTJmZSIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL3BhZ2VzL2ZlZWQvYXNzZXRzL2pzL2FwcC1tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz9kYTA0KioqKioqIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzPzZiMmIqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanM/ZTZhYyoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanM/M2Y1YioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vdHV0b3Jpbmctcm93LnZ1ZT9iNWExKioqKiIsIndlYnBhY2s6Ly8vdHV0b3JpbmctdGFibGUudnVlPzNhYWYqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWU/OTE3ZSoqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWU/OWE0NSoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcz9hZmFhKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXRhYmxlLnZ1ZT83M2E5KioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlPzViZDEqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWU/MWFiOSoqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWU/YmYxMSoqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzPzA5YzUqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanM/MzYyMCoqKioqKioqKioqKioqKiJdLCJuYW1lcyI6WyJTRVRfUkVRVUVTVElORyIsIlNFVF9TSE9XX1BBTkVMIiwiU0VUX1NIT1ciLCJTRVRfU0VBUkNIX1RFWFQiLCJTRVRfU0VBUkNIX1JFU1VMVFMiLCJTRVRfU0hPV19NT1JFX0ZJRUxEUyIsIlRPR0dMRV9TSE9XX01PUkVfRklFTERTIiwiQUREX1RPX1NFTEVDVEVEX1RPUElDUyIsIlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyIsIlNFVF9RVUVTVElPTl9ERVRBSUwiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsImZlZWQiLCJlbCIsInNlYXJjaE9yQXNrUGFuZWwiLCJzZWFyY2hPckFza092ZXJsYXkiLCJ0b3BpY1JlY29tbWVuZGF0aW9uIiwibmFtZXNwYWNlZCIsInN0YXRlIiwicmVxdWVzdGluZyIsInNob3ciLCJzZWFyY2hUZXh0IiwicXVlc3Rpb25EZXRhaWwiLCJzZWFyY2hSZXN1bHRzIiwic2hvd01vcmVGaWVsZHMiLCJzZWxlY3RlZFRvcGljcyIsInBvc3RRdWVzdGlvblVybCIsInByb3RvdHlwZSIsIiR2aWVuZGVyIiwiaGVscGVycyIsImFwaSIsIm11dGF0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInRvcGljIiwicHVzaCIsImZpbHRlciIsInNlbGVjdGVkVG9waWMiLCJpZCIsImFjdGlvbnMiLCJwb3N0UXVlc3Rpb24iLCJjb21taXQiLCJheGlvcyIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJ0b3BpY3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhdGlvbiIsImdldFVybCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic2hvd1BhbmVsIiwib3ZlcmZsb3ciLCJ1cmwiLCJzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMiLCJzZXRUaW1lb3V0IiwiaGlkZVRvcGljUmVjb21tZW5kYXRpb25zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7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QWpCTCxZQWlCbUNMLEtBakJuQyxFQWlCMENrQixLQWpCMUMsRUFpQmlEO0FBQ3pDbEIsY0FBTU8sY0FBTixDQUFxQlksSUFBckIsQ0FBMEJELEtBQTFCO0FBQ0gsS0FuQkwsK0JBcUJLLG9GQXJCTCxZQXFCd0NsQixLQXJCeEMsRUFxQitDa0IsS0FyQi9DLEVBcUJzRDtBQUM5Q2xCLGNBQU1PLGNBQU4sR0FBdUJQLE1BQU1PLGNBQU4sQ0FBcUJhLE1BQXJCLENBQTRCO0FBQUEsbUJBQWlCQyxjQUFjQyxFQUFkLEtBQXFCSixNQUFNSSxFQUE1QztBQUFBLFNBQTVCLENBQXZCO0FBQ0gsS0F2QkwsY0FaVzs7QUFzQ1hDLGFBQVM7QUFDTGtCLGdDQURLLDBDQUNxQztBQUFBLGdCQUFoQnpDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLGdCQUFUeUIsTUFBUyxRQUFUQSxNQUFTOztBQUN0Q2lCLHVCQUFXLFlBQU07QUFDYmpCLHVCQUFPLGlFQUFQLEVBQXVCLElBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSCxTQUxJO0FBT0xrQixnQ0FQSywyQ0FPcUM7QUFBQSxnQkFBaEIzQyxLQUFnQixTQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVHlCLE1BQVMsU0FBVEEsTUFBUzs7QUFDdENpQix1QkFBVyxZQUFNO0FBQ2JqQix1QkFBTyxpRUFBUCxFQUF1QixLQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0g7QUFYSTtBQXRDRSxDQUFmLEMiLCJmaWxlIjoianMvdmllbmRlci9teXR1dG9yL2ZlZWQvYXBwLW1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMDllOTA2ZGJkODc1NDk0Y2NjNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjMgMjQgMjUiLCIvLyBzZWFyY2hPckFza1BhbmVsXG5leHBvcnQgY29uc3QgU0VUX1JFUVVFU1RJTkcgPSAnU0VUX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX1BBTkVMID0gJ1NFVF9TSE9XX1BBTkVMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPVyA9ICdTRVRfU0hPVyc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9URVhUID0gJ1NFVF9TRUFSQ0hfVEVYVCc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9SRVNVTFRTID0gJ1NFVF9TRUFSQ0hfUkVTVUxUUyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfTU9SRV9GSUVMRFMgPSAnU0VUX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9TSE9XX01PUkVfRklFTERTID0gJ1RPR0dMRV9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fU0VMRUNURURfVE9QSUNTID0gJ0FERF9UT19TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyA9ICdSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTl9ERVRBSUwgPSAnU0VUX1FVRVNUSU9OX0RFVEFJTCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwiaW1wb3J0IGNvcmVNb2R1bGVzIGZyb20gJ3ZpZW5kZXJfY29yZS9qcy9zdG9yZS9tb2R1bGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiBPYmplY3QuYXNzaWduKGNvcmVNb2R1bGVzLCB7XG5cbiAgfSksXG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9mZWVkL2Fzc2V0cy9qcy9zdG9yZS5qcyIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlIFZ1ZSBhbmQgVnVlIFJlc291cmNlLiBUaGlzIGdpdmVzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgZm9yXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCd0dXRvcmluZy10YWJsZScsIHJlcXVpcmUoJ3ZpZW5kZXJfbXl0dXRvci9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlJykpO1xuVnVlLmNvbXBvbmVudCgndHV0b3Jpbmctcm93JywgcmVxdWlyZSgndmllbmRlcl9teXR1dG9yL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlJykpO1xuXG5jb25zdCBmZWVkID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvZmVlZC9hc3NldHMvanMvYXBwLW1vYmlsZS5qcyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7IGNzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6MCdcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOicgKyBuZXdTdHlsZXNbaWRdLnBhcnRzLmxlbmd0aFxuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcbiAgdmFyIGhhc1NTUiA9IHN0eWxlRWxlbWVudCAhPSBudWxsXG5cbiAgLy8gaWYgaW4gcHJvZHVjdGlvbiBtb2RlIGFuZCBzdHlsZSBpcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IFNTUixcbiAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gIGlmIChoYXNTU1IgJiYgaXNQcm9kdWN0aW9uKSB7XG4gICAgcmV0dXJuIG5vb3BcbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50IHx8IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYXNTU1IpIHtcbiAgICB1cGRhdGUob2JqKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTgiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTgiLCJpbXBvcnQgc2VhcmNoT3JBc2tQYW5lbCBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbCc7XG5pbXBvcnQgc2VhcmNoT3JBc2tPdmVybGF5IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXknO1xuaW1wb3J0IHRvcGljUmVjb21tZW5kYXRpb24gZnJvbSAnLi9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2VhcmNoT3JBc2tQYW5lbDogc2VhcmNoT3JBc2tQYW5lbCxcblx0c2VhcmNoT3JBc2tPdmVybGF5OiBzZWFyY2hPckFza092ZXJsYXksXG4gICAgdG9waWNSZWNvbW1lbmRhdGlvbjogdG9waWNSZWNvbW1lbmRhdGlvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8dHIgY2xhc3M9XCJ0dXRvcmluZy1yb3dcIiBAbW91c2VvdmVyPVwiaG92ZXIoKVwiIEBtb3VzZWxlYXZlPVwibGVhdmUoKVwiIEBjbGljaz1cImNsaWNrKClcIiB2LXNob3c9XCJ0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlXCI+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjUwJVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7eyB0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi50aXRsZSA6ICcnKSA6ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYm9keSA6ICcnKSA6ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIHdpZHRoPVwiMTUlXCI+e3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYmlkcy5sZW5ndGggOiAnJykgOiAnJyB9fTwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjE1JVwiPnt7IHR1dG9yaW5nID8gdHV0b3JpbmcubnVtYmVyX29mX3dlZWsgOiAwIH19PC90ZD5cbiAgICAgICAgPHRkIHdpZHRoPVwiMjAlXCI+XG4gICAgICAgIFx0PGRpdj57eyAnUnAuICcgKyBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2lkLUlEJykuZm9ybWF0KHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLnByaWNlIDogMCkgOiAwKSB9fTwvZGl2PlxuICAgICAgICBcdDxhIDpocmVmPVwiYmlkVXJsXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiB2LXNob3c9XCJtb3VzZW92ZXJcIiB2LWlmPVwiISBiaWRkZWRcIj5CaWQgbm93PC9hPlxuICAgICAgICBcdDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiIHYtZWxzZT5CaWRkZWQ8L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ3R1dG9yaW5nJywgJ3NlbGZVcmwnLCAnYmlkVXJsJywgJ2JpZGRlZCddLFxuXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1vdXNlb3ZlcjogZmFsc2UsXG5cdFx0fVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRob3ZlcigpIHtcblx0XHRcdHRoaXMubW91c2VvdmVyID0gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0bGVhdmUoKSB7XG5cdFx0XHR0aGlzLm1vdXNlb3ZlciA9IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRjbGljaygpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuc2VsZlVybDtcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdHRyIHtcblx0XHRoZWlnaHQ6IDkwcHg7XG5cdH1cblxuXHQudHV0b3Jpbmctcm93IHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHR1dG9yaW5nLXJvdy52dWU/NTE1NWZlNGEiLCI8dGVtcGxhdGU+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0aGVhZC1pbnZlcnNlXCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+QmlkczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiB3ZWVrPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHR1dG9yaW5nLXJvdyB2LWZvcj1cInR1dG9yaW5nIGluIHR1dG9yaW5ncy5kYXRhXCIgOnR1dG9yaW5nPVwidHV0b3JpbmdcIj48L3R1dG9yaW5nLXJvdz5cbiAgICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ3R1dG9yaW5ncyddXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHR1dG9yaW5nLXRhYmxlLnZ1ZT8wNjliNGVmYyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbnRyIHtcXG5cXHRoZWlnaHQ6IDkwcHg7XFxufVxcbi50dXRvcmluZy1yb3cge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInR1dG9yaW5nLXJvdy52dWU/NTE1NWZlNGFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStDQTtDQUNBLGFBQUE7Q0FDQTtBQUVBO0NBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidHV0b3Jpbmctcm93LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx0ciBjbGFzcz1cXFwidHV0b3Jpbmctcm93XFxcIiBAbW91c2VvdmVyPVxcXCJob3ZlcigpXFxcIiBAbW91c2VsZWF2ZT1cXFwibGVhdmUoKVxcXCIgQGNsaWNrPVxcXCJjbGljaygpXFxcIiB2LXNob3c9XFxcInR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0cnVlIDogZmFsc2UpIDogZmFsc2VcXFwiPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCI1MCVcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIHt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLnRpdGxlIDogJycpIDogJycgfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICB7eyB0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi5ib2R5IDogJycpIDogJycgfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvdGQ+XFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjE1JVxcXCI+e3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYmlkcy5sZW5ndGggOiAnJykgOiAnJyB9fTwvdGQ+XFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjE1JVxcXCI+e3sgdHV0b3JpbmcgPyB0dXRvcmluZy5udW1iZXJfb2Zfd2VlayA6IDAgfX08L3RkPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIyMCVcXFwiPlxcbiAgICAgICAgXFx0PGRpdj57eyAnUnAuICcgKyBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2lkLUlEJykuZm9ybWF0KHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLnByaWNlIDogMCkgOiAwKSB9fTwvZGl2PlxcbiAgICAgICAgXFx0PGEgOmhyZWY9XFxcImJpZFVybFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdi1zaG93PVxcXCJtb3VzZW92ZXJcXFwiIHYtaWY9XFxcIiEgYmlkZGVkXFxcIj5CaWQgbm93PC9hPlxcbiAgICAgICAgXFx0PHNwYW4gY2xhc3M9XFxcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcXFwiIHYtZWxzZT5CaWRkZWQ8L3NwYW4+XFxuICAgICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuXFx0cHJvcHM6IFsndHV0b3JpbmcnLCAnc2VsZlVybCcsICdiaWRVcmwnLCAnYmlkZGVkJ10sXFxuXFxuXFx0ZGF0YSgpIHtcXG5cXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdG1vdXNlb3ZlcjogZmFsc2UsXFxuXFx0XFx0fVxcblxcdH0sXFxuXFxuXFx0bWV0aG9kczoge1xcblxcdFxcdGhvdmVyKCkge1xcblxcdFxcdFxcdHRoaXMubW91c2VvdmVyID0gdHJ1ZTtcXG5cXHRcXHR9LFxcblxcblxcdFxcdGxlYXZlKCkge1xcblxcdFxcdFxcdHRoaXMubW91c2VvdmVyID0gZmFsc2U7XFxuXFx0XFx0fSxcXG5cXG5cXHRcXHRjbGljaygpIHtcXG5cXHRcXHRcXHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLnNlbGZVcmw7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcdHRyIHtcXG5cXHRcXHRoZWlnaHQ6IDkwcHg7XFxuXFx0fVxcblxcblxcdC50dXRvcmluZy1yb3cge1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR9XFxuPC9zdHlsZT5cIl19XSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xNzk4OGJkOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3R1dG9yaW5nLXJvdy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdHV0b3Jpbmctcm93LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNzk4OGJkOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE3OTg4YmQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBxdWVzdGlvbkRldGFpbDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICBwb3N0UXVlc3Rpb25Vcmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJy9xdWVzdGlvbnMnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIGlmKHNob3cpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5UT0dHTEVfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9ICFzdGF0ZS5zaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfUVVFU1RJT05fREVUQUlMXShzdGF0ZSwgcXVlc3Rpb25EZXRhaWwpIHtcbiAgICAgICAgICAgIHN0YXRlLnF1ZXN0aW9uRGV0YWlsID0gcXVlc3Rpb25EZXRhaWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgcG9zdFF1ZXN0aW9uKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgaWYoc3RhdGUucmVxdWVzdGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIHRydWUpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHN0YXRlLnBvc3RRdWVzdGlvblVybCwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdGF0ZS5zZWFyY2hUZXh0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHN0YXRlLnF1ZXN0aW9uRGV0YWlsLFxuICAgICAgICAgICAgICAgIHRvcGljczogc3RhdGUuc2VsZWN0ZWRUb3BpY3MsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuZ2V0VXJsKCdzZWxmX2h0bWwnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3R1dG9yaW5nLXRhYmxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xZmI3NzI0YyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdHV0b3JpbmctdGFibGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9udWdyYWhhL0NvZGUvdmllbmRlci9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0dXRvcmluZy10YWJsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWZiNzcyNGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZmI3NzI0Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IHRydWUgOiBmYWxzZSkgOiBmYWxzZSksXG4gICAgICBleHByZXNzaW9uOiBcInR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0cnVlIDogZmFsc2UpIDogZmFsc2VcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInR1dG9yaW5nLXJvd1wiLFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhvdmVyKClcbiAgICAgIH0sXG4gICAgICBcIm1vdXNlbGVhdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sZWF2ZSgpXG4gICAgICB9LFxuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNsaWNrKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygndGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogXCI1MCVcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24udGl0bGUgOiAnJykgOiAnJykgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24uYm9keSA6ICcnKSA6ICcnKSArIFwiXFxuICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxNSVcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24uYmlkcy5sZW5ndGggOiAnJykgOiAnJykpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ3aWR0aFwiOiBcIjE1JVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udHV0b3JpbmcgPyBfdm0udHV0b3JpbmcubnVtYmVyX29mX3dlZWsgOiAwKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMjAlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2JywgW192bS5fdihfdm0uX3MoJ1JwLiAnICsgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdpZC1JRCcpLmZvcm1hdChfdm0udHV0b3JpbmcgPyAoX3ZtLnR1dG9yaW5nLmF1Y3Rpb24gPyBfdm0udHV0b3JpbmcuYXVjdGlvbi5wcmljZSA6IDApIDogMCkpKV0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5iaWRkZWQpID8gX2MoJ2EnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm1vdXNlb3ZlciksXG4gICAgICBleHByZXNzaW9uOiBcIm1vdXNlb3ZlclwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uYmlkVXJsXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQmlkIG5vd1wiKV0pIDogX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoXCJCaWRkZWRcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTc5ODhiZDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1yZXNwb25zaXZlXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Rib2R5JywgX3ZtLl9sKChfdm0udHV0b3JpbmdzLmRhdGEpLCBmdW5jdGlvbih0dXRvcmluZykge1xuICAgIHJldHVybiBfYygndHV0b3Jpbmctcm93Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0dXRvcmluZ1wiOiB0dXRvcmluZ1xuICAgICAgfVxuICAgIH0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RoZWFkJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRoZWFkLWludmVyc2VcIlxuICB9LCBbX2MoJ3RyJywgW19jKCd0aCcsIFtfdm0uX3YoXCJUaXRsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnLCBbX3ZtLl92KFwiQmlkc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnLCBbX3ZtLl92KFwiTnVtYmVyIG9mIHdlZWtcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIlByaWNlXCIpXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWZiNzcyNGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFmYjc3MjRjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzYWI0ZWI3MVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xNzk4OGJkOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3R1dG9yaW5nLXJvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xNzk4OGJkOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMTMgMTQgMTUgMTYgMTciLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10gKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfUEFORUxdIChzdGF0ZSwgc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICBpZihzaG93UGFuZWwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc2hvd1BhbmVsID0gc2hvd1BhbmVsO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdIChzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10gKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUsIHNob3dNb3JlRmllbGRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93TW9yZUZpZWxkcyA9IHNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgdXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCd0b3BpY3MnKSxcbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFt0eXBlcy5TRVRfUkVRVUVTVElOR10oc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV10oc3RhdGUsIHNob3cpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIHRydWUpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlVG9waWNSZWNvbW1lbmRhdGlvbnMoe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1NIT1csIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9