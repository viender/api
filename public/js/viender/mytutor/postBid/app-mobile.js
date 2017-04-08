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

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjA5ZTkwNmRiZDg3NTQ5NGNjYzc/MWM3ZCoqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/NGJkYioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvcG9zdEJpZC9hc3NldHMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9wb3N0QmlkL2Fzc2V0cy9qcy9hcHAtbW9iaWxlLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanM/ZGEwNCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanM/NmIyYioqKioiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanM/ZTZhYyoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzPzNmNWIqKioqKioqKioqKioqIiwid2VicGFjazovLy90dXRvcmluZy1yb3cudnVlP2I1YTEqKiIsIndlYnBhY2s6Ly8vdHV0b3JpbmctdGFibGUudnVlPzNhYWYqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlPzkxN2UqKioiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZT85YTQ1KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcz9hZmFhKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy10YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZT81YmQxKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXRhYmxlLnZ1ZT8xYWI5KioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXJvdy52dWU/YmYxMSoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcz8wOWM1KioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcz8zNjIwKioqKioqKioqKioqKiJdLCJuYW1lcyI6WyJTRVRfUkVRVUVTVElORyIsIlNFVF9TSE9XX1BBTkVMIiwiU0VUX1NIT1ciLCJTRVRfU0VBUkNIX1RFWFQiLCJTRVRfU0VBUkNIX1JFU1VMVFMiLCJTRVRfU0hPV19NT1JFX0ZJRUxEUyIsIlRPR0dMRV9TSE9XX01PUkVfRklFTERTIiwiQUREX1RPX1NFTEVDVEVEX1RPUElDUyIsIlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyIsIlNFVF9RVUVTVElPTl9ERVRBSUwiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCIsImZlZWQiLCJlbCIsInNlYXJjaE9yQXNrUGFuZWwiLCJzZWFyY2hPckFza092ZXJsYXkiLCJ0b3BpY1JlY29tbWVuZGF0aW9uIiwibmFtZXNwYWNlZCIsInN0YXRlIiwicmVxdWVzdGluZyIsInNob3ciLCJzZWFyY2hUZXh0IiwicXVlc3Rpb25EZXRhaWwiLCJzZWFyY2hSZXN1bHRzIiwic2hvd01vcmVGaWVsZHMiLCJzZWxlY3RlZFRvcGljcyIsInBvc3RRdWVzdGlvblVybCIsInByb3RvdHlwZSIsIiR2aWVuZGVyIiwiaGVscGVycyIsImFwaSIsIm11dGF0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInRvcGljIiwicHVzaCIsImZpbHRlciIsInNlbGVjdGVkVG9waWMiLCJpZCIsImFjdGlvbnMiLCJwb3N0UXVlc3Rpb24iLCJjb21taXQiLCJheGlvcyIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJ0b3BpY3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhdGlvbiIsImdldFVybCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic2hvd1BhbmVsIiwib3ZlcmZsb3ciLCJ1cmwiLCJzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMiLCJzZXRUaW1lb3V0IiwiaGlkZVRvcGljUmVjb21tZW5kYXRpb25zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7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LEVBaUJpRDtBQUN6Q2xCLGNBQU1PLGNBQU4sQ0FBcUJZLElBQXJCLENBQTBCRCxLQUExQjtBQUNILEtBbkJMLCtCQXFCSyxvRkFyQkwsWUFxQndDbEIsS0FyQnhDLEVBcUIrQ2tCLEtBckIvQyxFQXFCc0Q7QUFDOUNsQixjQUFNTyxjQUFOLEdBQXVCUCxNQUFNTyxjQUFOLENBQXFCYSxNQUFyQixDQUE0QjtBQUFBLG1CQUFpQkMsY0FBY0MsRUFBZCxLQUFxQkosTUFBTUksRUFBNUM7QUFBQSxTQUE1QixDQUF2QjtBQUNILEtBdkJMLGNBWlc7O0FBc0NYQyxhQUFTO0FBQ0xrQixnQ0FESywwQ0FDcUM7QUFBQSxnQkFBaEJ6QyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVHlCLE1BQVMsUUFBVEEsTUFBUzs7QUFDdENpQix1QkFBVyxZQUFNO0FBQ2JqQix1QkFBTyxpRUFBUCxFQUF1QixJQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0gsU0FMSTtBQU9Ma0IsZ0NBUEssMkNBT3FDO0FBQUEsZ0JBQWhCM0MsS0FBZ0IsU0FBaEJBLEtBQWdCO0FBQUEsZ0JBQVR5QixNQUFTLFNBQVRBLE1BQVM7O0FBQ3RDaUIsdUJBQVcsWUFBTTtBQUNiakIsdUJBQU8saUVBQVAsRUFBdUIsS0FBdkI7QUFDSCxhQUZELEVBRUcsR0FGSDtBQUdIO0FBWEk7QUF0Q0UsQ0FBZixDIiwiZmlsZSI6ImpzL3ZpZW5kZXIvbXl0dXRvci9wb3N0QmlkL2FwcC1tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjA5ZTkwNmRiZDg3NTQ5NGNjYzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIzIDI0IDI1IiwiLy8gc2VhcmNoT3JBc2tQYW5lbFxuZXhwb3J0IGNvbnN0IFNFVF9SRVFVRVNUSU5HID0gJ1NFVF9SRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19QQU5FTCA9ICdTRVRfU0hPV19QQU5FTCc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1cgPSAnU0VUX1NIT1cnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfVEVYVCA9ICdTRVRfU0VBUkNIX1RFWFQnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfUkVTVUxUUyA9ICdTRVRfU0VBUkNIX1JFU1VMVFMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX01PUkVfRklFTERTID0gJ1NFVF9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyA9ICdUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX1NFTEVDVEVEX1RPUElDUyA9ICdBRERfVE9fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MgPSAnUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFU1RJT05fREVUQUlMID0gJ1NFVF9RVUVTVElPTl9ERVRBSUwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsImltcG9ydCBjb3JlTW9kdWxlcyBmcm9tICd2aWVuZGVyX2NvcmUvanMvc3RvcmUvbW9kdWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczogT2JqZWN0LmFzc2lnbihjb3JlTW9kdWxlcywge1xuXG4gIH0pLFxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvcG9zdEJpZC9hc3NldHMvanMvc3RvcmUuanMiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZSBWdWUgYW5kIFZ1ZSBSZXNvdXJjZS4gVGhpcyBnaXZlcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IGZvclxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuVnVlLmNvbXBvbmVudCgndHV0b3JpbmctdGFibGUnLCByZXF1aXJlKCd2aWVuZGVyX215dHV0b3IvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLXRhYmxlLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3R1dG9yaW5nLXJvdycsIHJlcXVpcmUoJ3ZpZW5kZXJfbXl0dXRvci9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZScpKTtcblxuY29uc3QgZmVlZCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL3BhZ2VzL3Bvc3RCaWQvYXNzZXRzL2pzL2FwcC1tb2JpbGUuanMiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTgiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0geyBjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcCB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOjAnXG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydC5pZCA9IHBhcmVudElkICsgJzonICsgbmV3U3R5bGVzW2lkXS5wYXJ0cy5sZW5ndGhcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG4gIHZhciBoYXNTU1IgPSBzdHlsZUVsZW1lbnQgIT0gbnVsbFxuXG4gIC8vIGlmIGluIHByb2R1Y3Rpb24gbW9kZSBhbmQgc3R5bGUgaXMgYWxyZWFkeSBwcm92aWRlZCBieSBTU1IsXG4gIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICBpZiAoaGFzU1NSICYmIGlzUHJvZHVjdGlvbikge1xuICAgIHJldHVybiBub29wXG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudCB8fCBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmICghaGFzU1NSKSB7XG4gICAgdXBkYXRlKG9iailcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IiwiaW1wb3J0IHNlYXJjaE9yQXNrUGFuZWwgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwnO1xuaW1wb3J0IHNlYXJjaE9yQXNrT3ZlcmxheSBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5JztcbmltcG9ydCB0b3BpY1JlY29tbWVuZGF0aW9uIGZyb20gJy4vbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNlYXJjaE9yQXNrUGFuZWw6IHNlYXJjaE9yQXNrUGFuZWwsXG5cdHNlYXJjaE9yQXNrT3ZlcmxheTogc2VhcmNoT3JBc2tPdmVybGF5LFxuICAgIHRvcGljUmVjb21tZW5kYXRpb246IHRvcGljUmVjb21tZW5kYXRpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMuanMiLCI8dGVtcGxhdGU+XG4gICAgPHRyIGNsYXNzPVwidHV0b3Jpbmctcm93XCIgQG1vdXNlb3Zlcj1cImhvdmVyKClcIiBAbW91c2VsZWF2ZT1cImxlYXZlKClcIiBAY2xpY2s9XCJjbGljaygpXCIgdi1zaG93PVwidHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHRydWUgOiBmYWxzZSkgOiBmYWxzZVwiPlxuICAgICAgICA8dGQgd2lkdGg9XCI1MCVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24udGl0bGUgOiAnJykgOiAnJyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLmJvZHkgOiAnJykgOiAnJyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjE1JVwiPnt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLmJpZHMubGVuZ3RoIDogJycpIDogJycgfX08L3RkPlxuICAgICAgICA8dGQgd2lkdGg9XCIxNSVcIj57eyB0dXRvcmluZyA/IHR1dG9yaW5nLm51bWJlcl9vZl93ZWVrIDogMCB9fTwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiPlxuICAgICAgICBcdDxkaXY+e3sgJ1JwLiAnICsgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdpZC1JRCcpLmZvcm1hdCh0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi5wcmljZSA6IDApIDogMCkgfX08L2Rpdj5cbiAgICAgICAgXHQ8YSA6aHJlZj1cImJpZFVybFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdi1zaG93PVwibW91c2VvdmVyXCIgdi1pZj1cIiEgYmlkZGVkXCI+QmlkIG5vdzwvYT5cbiAgICAgICAgXHQ8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIiB2LWVsc2U+QmlkZGVkPC9zcGFuPlxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWyd0dXRvcmluZycsICdzZWxmVXJsJywgJ2JpZFVybCcsICdiaWRkZWQnXSxcblxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtb3VzZW92ZXI6IGZhbHNlLFxuXHRcdH1cblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0aG92ZXIoKSB7XG5cdFx0XHR0aGlzLm1vdXNlb3ZlciA9IHRydWU7XG5cdFx0fSxcblxuXHRcdGxlYXZlKCkge1xuXHRcdFx0dGhpcy5tb3VzZW92ZXIgPSBmYWxzZTtcblx0XHR9LFxuXG5cdFx0Y2xpY2soKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLnNlbGZVcmw7XG5cdFx0fVxuXHR9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHR0ciB7XG5cdFx0aGVpZ2h0OiA5MHB4O1xuXHR9XG5cblx0LnR1dG9yaW5nLXJvdyB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0dXRvcmluZy1yb3cudnVlPzUxNTVmZTRhIiwiPHRlbXBsYXRlPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzPVwidGhlYWQtaW52ZXJzZVwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkJpZHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2Ygd2VlazwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0dXRvcmluZy1yb3cgdi1mb3I9XCJ0dXRvcmluZyBpbiB0dXRvcmluZ3MuZGF0YVwiIDp0dXRvcmluZz1cInR1dG9yaW5nXCI+PC90dXRvcmluZy1yb3c+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogWyd0dXRvcmluZ3MnXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0dXRvcmluZy10YWJsZS52dWU/MDY5YjRlZmMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG50ciB7XFxuXFx0aGVpZ2h0OiA5MHB4O1xcbn1cXG4udHV0b3Jpbmctcm93IHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ0dXRvcmluZy1yb3cudnVlPzUxNTVmZTRhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErQ0E7Q0FDQSxhQUFBO0NBQ0E7QUFFQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcInR1dG9yaW5nLXJvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8dHIgY2xhc3M9XFxcInR1dG9yaW5nLXJvd1xcXCIgQG1vdXNlb3Zlcj1cXFwiaG92ZXIoKVxcXCIgQG1vdXNlbGVhdmU9XFxcImxlYXZlKClcXFwiIEBjbGljaz1cXFwiY2xpY2soKVxcXCIgdi1zaG93PVxcXCJ0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlXFxcIj5cXG4gICAgICAgIDx0ZCB3aWR0aD1cXFwiNTAlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICB7eyB0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi50aXRsZSA6ICcnKSA6ICcnIH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAge3sgdHV0b3JpbmcgPyAodHV0b3JpbmcuYXVjdGlvbiA/IHR1dG9yaW5nLmF1Y3Rpb24uYm9keSA6ICcnKSA6ICcnIH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3RkPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIxNSVcXFwiPnt7IHR1dG9yaW5nID8gKHR1dG9yaW5nLmF1Y3Rpb24gPyB0dXRvcmluZy5hdWN0aW9uLmJpZHMubGVuZ3RoIDogJycpIDogJycgfX08L3RkPlxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIxNSVcXFwiPnt7IHR1dG9yaW5nID8gdHV0b3JpbmcubnVtYmVyX29mX3dlZWsgOiAwIH19PC90ZD5cXG4gICAgICAgIDx0ZCB3aWR0aD1cXFwiMjAlXFxcIj5cXG4gICAgICAgIFxcdDxkaXY+e3sgJ1JwLiAnICsgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdpZC1JRCcpLmZvcm1hdCh0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHV0b3JpbmcuYXVjdGlvbi5wcmljZSA6IDApIDogMCkgfX08L2Rpdj5cXG4gICAgICAgIFxcdDxhIDpocmVmPVxcXCJiaWRVcmxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHYtc2hvdz1cXFwibW91c2VvdmVyXFxcIiB2LWlmPVxcXCIhIGJpZGRlZFxcXCI+QmlkIG5vdzwvYT5cXG4gICAgICAgIFxcdDxzcGFuIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1zdWNjZXNzXFxcIiB2LWVsc2U+QmlkZGVkPC9zcGFuPlxcbiAgICAgICAgPC90ZD5cXG4gICAgPC90cj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcblxcdHByb3BzOiBbJ3R1dG9yaW5nJywgJ3NlbGZVcmwnLCAnYmlkVXJsJywgJ2JpZGRlZCddLFxcblxcblxcdGRhdGEoKSB7XFxuXFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRtb3VzZW92ZXI6IGZhbHNlLFxcblxcdFxcdH1cXG5cXHR9LFxcblxcblxcdG1ldGhvZHM6IHtcXG5cXHRcXHRob3ZlcigpIHtcXG5cXHRcXHRcXHR0aGlzLm1vdXNlb3ZlciA9IHRydWU7XFxuXFx0XFx0fSxcXG5cXG5cXHRcXHRsZWF2ZSgpIHtcXG5cXHRcXHRcXHR0aGlzLm1vdXNlb3ZlciA9IGZhbHNlO1xcblxcdFxcdH0sXFxuXFxuXFx0XFx0Y2xpY2soKSB7XFxuXFx0XFx0XFx0d2luZG93LmxvY2F0aW9uID0gdGhpcy5zZWxmVXJsO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXHR0ciB7XFxuXFx0XFx0aGVpZ2h0OiA5MHB4O1xcblxcdH1cXG5cXG5cXHQudHV0b3Jpbmctcm93IHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0fVxcbjwvc3R5bGU+XCJdfV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiAxMyAxNCAxNSAxNiAxNyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xNzk4OGJkOCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHR1dG9yaW5nLXJvdy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTc5ODhiZDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNzk4OGJkOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgcXVlc3Rpb25EZXRhaWw6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgcG9zdFF1ZXN0aW9uVXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCcvcXVlc3Rpb25zJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBpZihzaG93KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSAhc3RhdGUuc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1FVRVNUSU9OX0RFVEFJTF0oc3RhdGUsIHF1ZXN0aW9uRGV0YWlsKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbkRldGFpbCA9IHF1ZXN0aW9uRGV0YWlsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHBvc3RRdWVzdGlvbih7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdChzdGF0ZS5wb3N0UXVlc3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICBib2R5OiBzdGF0ZS5xdWVzdGlvbkRldGFpbCxcbiAgICAgICAgICAgICAgICB0b3BpY3M6IHN0YXRlLnNlbGVjdGVkVG9waWNzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90dXRvcmluZy10YWJsZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWZiNzcyNGMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3R1dG9yaW5nLXRhYmxlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdHV0b3JpbmctdGFibGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFmYjc3MjRjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWZiNzcyNGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0cicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udHV0b3JpbmcgPyAoX3ZtLnR1dG9yaW5nLmF1Y3Rpb24gPyB0cnVlIDogZmFsc2UpIDogZmFsc2UpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0dXRvcmluZyA/ICh0dXRvcmluZy5hdWN0aW9uID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0dXRvcmluZy1yb3dcIixcbiAgICBvbjoge1xuICAgICAgXCJtb3VzZW92ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5ob3ZlcigpXG4gICAgICB9LFxuICAgICAgXCJtb3VzZWxlYXZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubGVhdmUoKVxuICAgICAgfSxcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbGljaygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3RkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNTAlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2JywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IF92bS50dXRvcmluZy5hdWN0aW9uLnRpdGxlIDogJycpIDogJycpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IF92bS50dXRvcmluZy5hdWN0aW9uLmJvZHkgOiAnJykgOiAnJykgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTUlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50dXRvcmluZyA/IChfdm0udHV0b3JpbmcuYXVjdGlvbiA/IF92bS50dXRvcmluZy5hdWN0aW9uLmJpZHMubGVuZ3RoIDogJycpIDogJycpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxNSVcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnR1dG9yaW5nID8gX3ZtLnR1dG9yaW5nLm51bWJlcl9vZl93ZWVrIDogMCkpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ3aWR0aFwiOiBcIjIwJVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIFtfdm0uX3YoX3ZtLl9zKCdScC4gJyArIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnaWQtSUQnKS5mb3JtYXQoX3ZtLnR1dG9yaW5nID8gKF92bS50dXRvcmluZy5hdWN0aW9uID8gX3ZtLnR1dG9yaW5nLmF1Y3Rpb24ucHJpY2UgOiAwKSA6IDApKSldKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uYmlkZGVkKSA/IF9jKCdhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5tb3VzZW92ZXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJtb3VzZW92ZXJcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLmJpZFVybFxuICAgIH1cbiAgfSwgW192bS5fdihcIkJpZCBub3dcIildKSA6IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIlxuICB9LCBbX3ZtLl92KFwiQmlkZGVkXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTE3OTg4YmQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xNzk4OGJkOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3Jpbmctcm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiAxMyAxNCAxNSAxNiAxNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtcmVzcG9uc2l2ZVwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCd0Ym9keScsIF92bS5fbCgoX3ZtLnR1dG9yaW5ncy5kYXRhKSwgZnVuY3Rpb24odHV0b3JpbmcpIHtcbiAgICByZXR1cm4gX2MoJ3R1dG9yaW5nLXJvdycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHV0b3JpbmdcIjogdHV0b3JpbmdcbiAgICAgIH1cbiAgICB9KVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0aGVhZCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aGVhZC1pbnZlcnNlXCJcbiAgfSwgW19jKCd0cicsIFtfYygndGgnLCBbX3ZtLl92KFwiVGl0bGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIkJpZHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIk51bWJlciBvZiB3ZWVrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcsIFtfdm0uX3YoXCJQcmljZVwiKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFmYjc3MjRjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xZmI3NzI0YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctdGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2FiNGViNzFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90dXRvcmluZy1yb3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE3OTg4YmQ4IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdHV0b3Jpbmctcm93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTc5ODhiZDghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1yb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDEzIDE0IDE1IDE2IDE3IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93UGFuZWw6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddIChzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX1BBTkVMXSAoc3RhdGUsIHNob3dQYW5lbCkge1xuICAgICAgICAgICAgaWYoc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3dQYW5lbCA9IHNob3dQYW5lbDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXSAoc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdIChzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgndG9waWNzJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd1RvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZVRvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==