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
/******/ 	return __webpack_require__(__webpack_require__.s = 267);
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

/***/ 103:
/***/ (function(module, exports) {



/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__ = __webpack_require__(5);


/* unused harmony default export */ var _unused_webpack_default_export = new Vuex.Store({
  modules: Object.assign(__WEBPACK_IMPORTED_MODULE_0_viender_core_js_store_modules_js__["a" /* default */], {})

});

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(104);


/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(103);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('tutoring-create-form', __webpack_require__(238));

var postTutoring = new Vue({
  el: '#app'

});

/***/ }),

/***/ 212:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['action'],

    data: function data() {
        return {
            csrfToken: window.Laravel ? window.Laravel.csrfToken : '',

            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],

            formData: {
                title: null,
                price: null,
                number_of_week: null,
                body: null,
                schedules: [{
                    day: 'monday',
                    from: '',
                    to: ''
                }, {
                    day: 'tuesday',
                    from: '',
                    to: ''
                }, {
                    day: 'wednesday',
                    from: '',
                    to: ''
                }, {
                    day: 'thursday',
                    from: '',
                    to: ''
                }, {
                    day: 'friday',
                    from: '',
                    to: ''
                }, {
                    day: 'saturday',
                    from: '',
                    to: ''
                }, {
                    day: 'sunday',
                    from: '',
                    to: ''
                }]
            },

            errors: {},

            loading: false
        };
    },
    mounted: function mounted() {
        console.log('hello from postTutoring');
    },


    methods: {
        submit: function submit(event) {
            var _this = this;

            if (event) event.preventDefault();

            if (this.loading) return;

            this.loading = true;

            axios.post(this.action, this.formData).then(function (response) {
                var tutoring = response.data;
                document.location = tutoring.links.filter(function (link) {
                    return link.rel == 'self_html';
                })[0].url;
            }).catch(function (error) {
                if (error.response.status == 422) {
                    _this.errors = error.response.data;
                }
                _this.loading = false;
            });
        }
    }
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(253),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/nugraha/Code/viender/apps/mytutor/resources/core/js/components/tutoring-create-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tutoring-create-form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b54e5d1a", Component.options)
  } else {
    hotAPI.reload("data-v-b54e5d1a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    ref: "form",
    attrs: {
      "action": _vm.action,
      "method": "POST"
    },
    on: {
      "submit": function($event) {
        _vm.submit($event)
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "name": "_token"
    },
    domProps: {
      "value": _vm.csrfToken
    }
  }), _vm._v(" "), _c('div', {
    class: 'form-group' + (_vm.errors.title ? ' has-error' : '')
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Title")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.title),
      expression: "formData.title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "title",
      "name": "title",
      "placeholder": "Title"
    },
    domProps: {
      "value": (_vm.formData.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.title = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._l((_vm.errors.title), function(error) {
    return (_vm.errors.title) ? _c('span', {
      staticClass: "help-block"
    }, [_c('strong', [_vm._v(_vm._s(error))])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    class: 'form-group' + (_vm.errors.price ? ' has-error' : '')
  }, [_c('label', {
    attrs: {
      "for": "price"
    }
  }, [_vm._v("Budget")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.price),
      expression: "formData.price"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "min": "0",
      "id": "price",
      "name": "price",
      "placeholder": "Budget"
    },
    domProps: {
      "value": (_vm.formData.price)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.price = $event.target.value
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _vm._l((_vm.errors.price), function(error) {
    return (_vm.errors.price) ? _c('span', {
      staticClass: "help-block"
    }, [_c('strong', [_vm._v(_vm._s(error))])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    class: 'form-group' + (_vm.errors.number_of_week ? ' has-error' : '')
  }, [_c('label', {
    attrs: {
      "for": "number_of_week"
    }
  }, [_vm._v("Number of week")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.number_of_week),
      expression: "formData.number_of_week"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "min": "0",
      "id": "number_of_week",
      "name": "number_of_week",
      "placeholder": "Number of week"
    },
    domProps: {
      "value": (_vm.formData.number_of_week)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.number_of_week = $event.target.value
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _vm._l((_vm.errors.number_of_week), function(error) {
    return (_vm.errors.number_of_week) ? _c('span', {
      staticClass: "help-block"
    }, [_c('strong', [_vm._v(_vm._s(error))])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    class: 'form-group' + (_vm.errors.body ? ' has-error' : '')
  }, [_c('label', {
    attrs: {
      "for": "body"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.body),
      expression: "formData.body"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "10",
      "id": "body",
      "name": "body",
      "placeholder": "Description"
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
  }), _vm._v(" "), _vm._l((_vm.errors.body), function(error) {
    return (_vm.errors.body) ? _c('span', {
      staticClass: "help-block"
    }, [_c('strong', [_vm._v(_vm._s(error.replace('body', 'description')))])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Schedule")]), _vm._v(" "), _vm._l((_vm.days), function(day) {
    return _c('div', {
      staticClass: "form-group row"
    }, [_c('label', {
      staticClass: "col-md-2 col-form-label",
      attrs: {
        "for": day
      }
    }, [_c('input', {
      attrs: {
        "type": "checkbox",
        "id": day,
        "name": day
      }
    }), _vm._v(_vm._s(day))]), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": 'schedules[{{' + _vm.days.indexOf(day) + '}}][day]'
      },
      domProps: {
        "value": day
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "form-group col-md-10 row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('label', {
      attrs: {
        "for": day + '_from'
      }
    }, [_vm._v("From")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.formData.schedules[_vm.days.indexOf(day)].from),
        expression: "formData.schedules[days.indexOf(day)].from"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "time",
        "id": day + '_from',
        "name": 'schedules[{{' + _vm.days.indexOf(day) + '}}][from]'
      },
      domProps: {
        "value": (_vm.formData.schedules[_vm.days.indexOf(day)].from)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.formData.schedules[_vm.days.indexOf(day)].from = $event.target.value
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('label', {
      attrs: {
        "for": day + '_to'
      }
    }, [_vm._v("To")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.formData.schedules[_vm.days.indexOf(day)].to),
        expression: "formData.schedules[days.indexOf(day)].to"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "time",
        "id": day + '_to',
        "name": 'schedules[{{' + _vm.days.indexOf(day) + '}}][to]'
      },
      domProps: {
        "value": (_vm.formData.schedules[_vm.days.indexOf(day)].to)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.formData.schedules[_vm.days.indexOf(day)].to = $event.target.value
        }
      }
    })])])])
  })], 2), _vm._v(" "), _c('input', {
    ref: "submit-button",
    staticClass: "btn btn-default pull-right",
    attrs: {
      "type": "submit",
      "value": "Submit"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b54e5d1a", module.exports)
  }
}

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjA5ZTkwNmRiZDg3NTQ5NGNjYzc/MWM3ZCoqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzPzRiZGIqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL3BhZ2VzL3Bvc3RUdXRvcmluZy9hc3NldHMvanMvc3RvcmUuanM/MzM2OCIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL3BhZ2VzL3Bvc3RUdXRvcmluZy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy90dXRvcmluZy1jcmVhdGUtZm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZT8xYTAxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcz8zZjViKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzP2FmYWEqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsLmpzPzA5YzUqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzPzM2MjAqKioqKioqKioqKioqKioqKioqKioqIl0sIm5hbWVzIjpbIlNFVF9SRVFVRVNUSU5HIiwiU0VUX1NIT1dfUEFORUwiLCJTRVRfU0hPVyIsIlNFVF9TRUFSQ0hfVEVYVCIsIlNFVF9TRUFSQ0hfUkVTVUxUUyIsIlNFVF9TSE9XX01PUkVfRklFTERTIiwiVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFMiLCJBRERfVE9fU0VMRUNURURfVE9QSUNTIiwiUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTIiwiU0VUX1FVRVNUSU9OX0RFVEFJTCIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXF1aXJlIiwiVnVlIiwiY29tcG9uZW50IiwicG9zdFR1dG9yaW5nIiwiZWwiLCJzZWFyY2hPckFza1BhbmVsIiwic2VhcmNoT3JBc2tPdmVybGF5IiwidG9waWNSZWNvbW1lbmRhdGlvbiIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsInJlcXVlc3RpbmciLCJzaG93Iiwic2VhcmNoVGV4dCIsInF1ZXN0aW9uRGV0YWlsIiwic2VhcmNoUmVzdWx0cyIsInNob3dNb3JlRmllbGRzIiwic2VsZWN0ZWRUb3BpY3MiLCJwb3N0UXVlc3Rpb25VcmwiLCJwcm90b3R5cGUiLCIkdmllbmRlciIsImhlbHBlcnMiLCJhcGkiLCJtdXRhdGlvbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJ0b3BpYyIsInB1c2giLCJmaWx0ZXIiLCJzZWxlY3RlZFRvcGljIiwiaWQiLCJhY3Rpb25zIiwicG9zdFF1ZXN0aW9uIiwiY29tbWl0IiwiYXhpb3MiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwidG9waWNzIiwidGhlbiIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJnZXRVcmwiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInNob3dQYW5lbCIsIm92ZXJmbG93IiwidXJsIiwic2hvd1RvcGljUmVjb21tZW5kYXRpb25zIiwic2V0VGltZW91dCIsImhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQ08sSUFBTUEsaUJBQWlCLGdCQUF2QjtBQUNBLElBQU1DLGlCQUFpQixnQkFBdkI7QUFDQSxJQUFNQyxXQUFXLFVBQWpCO0FBQ0EsSUFBTUMsa0JBQWtCLGlCQUF4QjtBQUNBLElBQU1DLHFCQUFxQixvQkFBM0I7QUFDQSxJQUFNQyx1QkFBdUIsc0JBQTdCO0FBQ0EsSUFBTUMsMEJBQTBCLHlCQUFoQztBQUNBLElBQU1DLHlCQUF5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RyxHQUZIO0FBR0g7QUFYSTtBQXRDRSxDQUFmLEMiLCJmaWxlIjoianMvdmllbmRlci9teXR1dG9yL3Bvc3RUdXRvcmluZy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjA5ZTkwNmRiZDg3NTQ5NGNjYzciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIzIDI0IDI1IiwiLy8gc2VhcmNoT3JBc2tQYW5lbFxuZXhwb3J0IGNvbnN0IFNFVF9SRVFVRVNUSU5HID0gJ1NFVF9SRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPV19QQU5FTCA9ICdTRVRfU0hPV19QQU5FTCc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1cgPSAnU0VUX1NIT1cnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfVEVYVCA9ICdTRVRfU0VBUkNIX1RFWFQnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfUkVTVUxUUyA9ICdTRVRfU0VBUkNIX1JFU1VMVFMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX01PUkVfRklFTERTID0gJ1NFVF9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyA9ICdUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX1NFTEVDVEVEX1RPUElDUyA9ICdBRERfVE9fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MgPSAnUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFU1RJT05fREVUQUlMID0gJ1NFVF9RVUVTVElPTl9ERVRBSUwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyIsImltcG9ydCBjb3JlTW9kdWxlcyBmcm9tICd2aWVuZGVyX2NvcmUvanMvc3RvcmUvbW9kdWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczogT2JqZWN0LmFzc2lnbihjb3JlTW9kdWxlcywge1xuXG4gIH0pLFxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvcG9zdFR1dG9yaW5nL2Fzc2V0cy9qcy9zdG9yZS5qcyIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlIFZ1ZSBhbmQgVnVlIFJlc291cmNlLiBUaGlzIGdpdmVzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgZm9yXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCd0dXRvcmluZy1jcmVhdGUtZm9ybScsIHJlcXVpcmUoJ3ZpZW5kZXJfbXl0dXRvci9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlJykpO1xuXG5cblxuY29uc3QgcG9zdFR1dG9yaW5nID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcblxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvcG9zdFR1dG9yaW5nL2Fzc2V0cy9qcy9hcHAuanMiLCI8dGVtcGxhdGU+XG5cdDxmb3JtIHJlZj1cImZvcm1cIiA6YWN0aW9uPVwiYWN0aW9uXCIgbWV0aG9kPVwiUE9TVFwiIEBzdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJjc3JmVG9rZW5cIj5cblxuXHRcdDxkaXYgOmNsYXNzPVwiJ2Zvcm0tZ3JvdXAnICsgKGVycm9ycy50aXRsZSA/ICcgaGFzLWVycm9yJyA6ICcnKVwiPlxuXHRcdFx0PGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHYtbW9kZWw9XCJmb3JtRGF0YS50aXRsZVwiPlxuXG5cdFx0XHQ8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiB2LWlmPVwiZXJyb3JzLnRpdGxlXCIgdi1mb3I9XCJlcnJvciBpbiBlcnJvcnMudGl0bGVcIj5cblx0ICAgICAgICAgICAgPHN0cm9uZz57eyBlcnJvciB9fTwvc3Ryb25nPlxuXHQgICAgICAgIDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgOmNsYXNzPVwiJ2Zvcm0tZ3JvdXAnICsgKGVycm9ycy5wcmljZSA/ICcgaGFzLWVycm9yJyA6ICcnKVwiPlxuXHRcdFx0PGxhYmVsIGZvcj1cInByaWNlXCI+QnVkZ2V0PC9sYWJlbD5cblx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcmljZVwiIG5hbWU9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwiQnVkZ2V0XCIgdi1tb2RlbD1cImZvcm1EYXRhLnByaWNlXCI+XG5cblx0XHRcdDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHYtaWY9XCJlcnJvcnMucHJpY2VcIiB2LWZvcj1cImVycm9yIGluIGVycm9ycy5wcmljZVwiPlxuXHQgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9yIH19PC9zdHJvbmc+XG5cdCAgICAgICAgPC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiA6Y2xhc3M9XCInZm9ybS1ncm91cCcgKyAoZXJyb3JzLm51bWJlcl9vZl93ZWVrID8gJyBoYXMtZXJyb3InIDogJycpXCI+XG5cdFx0XHQ8bGFiZWwgZm9yPVwibnVtYmVyX29mX3dlZWtcIj5OdW1iZXIgb2Ygd2VlazwvbGFiZWw+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibnVtYmVyX29mX3dlZWtcIiBuYW1lPVwibnVtYmVyX29mX3dlZWtcIiBwbGFjZWhvbGRlcj1cIk51bWJlciBvZiB3ZWVrXCIgdi1tb2RlbD1cImZvcm1EYXRhLm51bWJlcl9vZl93ZWVrXCI+XG5cblx0XHRcdDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHYtaWY9XCJlcnJvcnMubnVtYmVyX29mX3dlZWtcIiB2LWZvcj1cImVycm9yIGluIGVycm9ycy5udW1iZXJfb2Zfd2Vla1wiPlxuXHQgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9yIH19PC9zdHJvbmc+XG5cdCAgICAgICAgPC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiA6Y2xhc3M9XCInZm9ybS1ncm91cCcgKyAoZXJyb3JzLmJvZHkgPyAnIGhhcy1lcnJvcicgOiAnJylcIj5cblx0XHRcdDxsYWJlbCBmb3I9XCJib2R5XCI+RGVzY3JpcHRpb248L2xhYmVsPlxuXHRcdFx0PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjEwXCIgaWQ9XCJib2R5XCIgbmFtZT1cImJvZHlcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgIHYtbW9kZWw9XCJmb3JtRGF0YS5ib2R5XCI+PC90ZXh0YXJlYT5cblxuXHRcdFx0PHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgdi1pZj1cImVycm9ycy5ib2R5XCIgdi1mb3I9XCJlcnJvciBpbiBlcnJvcnMuYm9keVwiPlxuXHQgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9yLnJlcGxhY2UoJ2JvZHknLCAnZGVzY3JpcHRpb24nKSB9fTwvc3Ryb25nPlxuXHQgICAgICAgIDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblxuXHQgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0ICAgIFx0PGxhYmVsPlNjaGVkdWxlPC9sYWJlbD5cblx0XHQgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgdi1mb3I9XCJkYXkgaW4gZGF5c1wiPlxuXHRcdCAgICBcdFxuXHRcdCAgICBcdDxsYWJlbCBjbGFzcz1cImNvbC1tZC0yIGNvbC1mb3JtLWxhYmVsXCIgOmZvcj1cImRheVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6aWQ9XCJkYXlcIiA6bmFtZT1cImRheVwiPnt7IGRheSB9fTwvbGFiZWw+XG5cdFx0ICAgIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIidzY2hlZHVsZXNbe3snICsgZGF5cy5pbmRleE9mKGRheSkgKyAnfX1dW2RheV0nXCIgOnZhbHVlPVwiZGF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1tZC0xMCByb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCA6Zm9yPVwiZGF5ICsgJ19mcm9tJ1wiPkZyb208L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0aW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6aWQ9XCJkYXkgKyAnX2Zyb20nXCIgOm5hbWU9XCInc2NoZWR1bGVzW3t7JyArIGRheXMuaW5kZXhPZihkYXkpICsgJ319XVtmcm9tXSdcIiB2LW1vZGVsPVwiZm9ybURhdGEuc2NoZWR1bGVzW2RheXMuaW5kZXhPZihkYXkpXS5mcm9tXCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgOmZvcj1cImRheSArICdfdG8nXCI+VG88L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0aW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6aWQ9XCJkYXkgKyAnX3RvJ1wiIDpuYW1lPVwiJ3NjaGVkdWxlc1t7eycgKyBkYXlzLmluZGV4T2YoZGF5KSArICd9fV1bdG9dJ1wiIHYtbW9kZWw9XCJmb3JtRGF0YS5zY2hlZHVsZXNbZGF5cy5pbmRleE9mKGRheSldLnRvXCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdCAgICA8L2Rpdj5cblx0ICAgIDwvZGl2PlxuXHRcdDxpbnB1dCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCIgcmVmPVwic3VibWl0LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuXHQ8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydhY3Rpb24nXSxcblxuICAgIGRhdGEoKSB7XG4gICAgXHRyZXR1cm4ge1xuICAgICAgICAgICAgY3NyZlRva2VuOiB3aW5kb3cuTGFyYXZlbCA/IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbiA6ICcnLFxuXG4gICAgXHRcdGRheXM6IFsnbW9uZGF5JywgJ3R1ZXNkYXknLCAnd2VkbmVzZGF5JywgJ3RodXJzZGF5JywgJ2ZyaWRheScsICdzYXR1cmRheScsICdzdW5kYXknXSxcblxuICAgICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmljZTogbnVsbCxcbiAgICAgICAgICAgICAgICBudW1iZXJfb2Zfd2VlazogbnVsbCxcbiAgICAgICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjaGVkdWxlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICdtb25kYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAndHVlc2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICd3ZWRuZXNkYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAndGh1cnNkYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnZnJpZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJ3NhdHVyZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJ3N1bmRheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGVycm9yczoge30sXG5cbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgXHR9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgXHRjb25zb2xlLmxvZygnaGVsbG8gZnJvbSBwb3N0VHV0b3JpbmcnKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgIFx0c3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLmFjdGlvbiwgdGhpcy5mb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0dXRvcmluZyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdHV0b3JpbmcubGlua3MuZmlsdGVyKGZ1bmN0aW9uKGxpbmspIHsgcmV0dXJuIGxpbmsucmVsID09ICdzZWxmX2h0bWwnIH0pWzBdLnVybDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCAoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXHR9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHR1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZT83MTNiOWE1OCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWI1NGU1ZDFhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90dXRvcmluZy1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL251Z3JhaGEvQ29kZS92aWVuZGVyL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHR1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iNTRlNWQxYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWI1NGU1ZDFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgcmVmOiBcImZvcm1cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogX3ZtLmFjdGlvbixcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJfdG9rZW5cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmNzcmZUb2tlblxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdmb3JtLWdyb3VwJyArIChfdm0uZXJyb3JzLnRpdGxlID8gJyBoYXMtZXJyb3InIDogJycpXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRpdGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtRGF0YS50aXRsZSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLnRpdGxlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJpZFwiOiBcInRpdGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ0aXRsZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlRpdGxlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybURhdGEudGl0bGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybURhdGEudGl0bGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXJyb3JzLnRpdGxlKSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gKF92bS5lcnJvcnMudGl0bGUpID8gX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKGVycm9yKSldKV0pIDogX3ZtLl9lKClcbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2Zvcm0tZ3JvdXAnICsgKF92bS5lcnJvcnMucHJpY2UgPyAnIGhhcy1lcnJvcicgOiAnJylcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJwcmljZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQnVkZ2V0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtRGF0YS5wcmljZSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLnByaWNlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwiaWRcIjogXCJwcmljZVwiLFxuICAgICAgXCJuYW1lXCI6IFwicHJpY2VcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJCdWRnZXRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5wcmljZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtRGF0YS5wcmljZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmVycm9ycy5wcmljZSksIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIChfdm0uZXJyb3JzLnByaWNlKSA/IF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gICAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhlcnJvcikpXSldKSA6IF92bS5fZSgpXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICdmb3JtLWdyb3VwJyArIChfdm0uZXJyb3JzLm51bWJlcl9vZl93ZWVrID8gJyBoYXMtZXJyb3InIDogJycpXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibnVtYmVyX29mX3dlZWtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk51bWJlciBvZiB3ZWVrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtRGF0YS5udW1iZXJfb2Zfd2VlayksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLm51bWJlcl9vZl93ZWVrXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwiaWRcIjogXCJudW1iZXJfb2Zfd2Vla1wiLFxuICAgICAgXCJuYW1lXCI6IFwibnVtYmVyX29mX3dlZWtcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJOdW1iZXIgb2Ygd2Vla1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLm51bWJlcl9vZl93ZWVrKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm1EYXRhLm51bWJlcl9vZl93ZWVrID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXJyb3JzLm51bWJlcl9vZl93ZWVrKSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gKF92bS5lcnJvcnMubnVtYmVyX29mX3dlZWspID8gX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKGVycm9yKSldKV0pIDogX3ZtLl9lKClcbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2Zvcm0tZ3JvdXAnICsgKF92bS5lcnJvcnMuYm9keSA/ICcgaGFzLWVycm9yJyA6ICcnKVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImJvZHlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlc2NyaXB0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtRGF0YS5ib2R5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuYm9keVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm93c1wiOiBcIjEwXCIsXG4gICAgICBcImlkXCI6IFwiYm9keVwiLFxuICAgICAgXCJuYW1lXCI6IFwiYm9keVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkRlc2NyaXB0aW9uXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybURhdGEuYm9keSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtRGF0YS5ib2R5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmVycm9ycy5ib2R5KSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gKF92bS5lcnJvcnMuYm9keSkgPyBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICAgIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoZXJyb3IucmVwbGFjZSgnYm9keScsICdkZXNjcmlwdGlvbicpKSldKV0pIDogX3ZtLl9lKClcbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJTY2hlZHVsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5kYXlzKSwgZnVuY3Rpb24oZGF5KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiXG4gICAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yIGNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImZvclwiOiBkYXlcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2lucHV0Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgICAgXCJpZFwiOiBkYXksXG4gICAgICAgIFwibmFtZVwiOiBkYXlcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KF92bS5fcyhkYXkpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgICAgXCJuYW1lXCI6ICdzY2hlZHVsZXNbe3snICsgX3ZtLmRheXMuaW5kZXhPZihkYXkpICsgJ319XVtkYXldJ1xuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogZGF5XG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGNvbC1tZC0xMCByb3dcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICAgIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImZvclwiOiBkYXkgKyAnX2Zyb20nXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIkZyb21cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IChfdm0uZm9ybURhdGEuc2NoZWR1bGVzW192bS5kYXlzLmluZGV4T2YoZGF5KV0uZnJvbSksXG4gICAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuc2NoZWR1bGVzW2RheXMuaW5kZXhPZihkYXkpXS5mcm9tXCJcbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJ0aW1lXCIsXG4gICAgICAgIFwiaWRcIjogZGF5ICsgJ19mcm9tJyxcbiAgICAgICAgXCJuYW1lXCI6ICdzY2hlZHVsZXNbe3snICsgX3ZtLmRheXMuaW5kZXhPZihkYXkpICsgJ319XVtmcm9tXSdcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IChfdm0uZm9ybURhdGEuc2NoZWR1bGVzW192bS5kYXlzLmluZGV4T2YoZGF5KV0uZnJvbSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0uZm9ybURhdGEuc2NoZWR1bGVzW192bS5kYXlzLmluZGV4T2YoZGF5KV0uZnJvbSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gICAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IGRheSArICdfdG8nXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlRvXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLnNjaGVkdWxlc1tfdm0uZGF5cy5pbmRleE9mKGRheSldLnRvKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5zY2hlZHVsZXNbZGF5cy5pbmRleE9mKGRheSldLnRvXCJcbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJ0aW1lXCIsXG4gICAgICAgIFwiaWRcIjogZGF5ICsgJ190bycsXG4gICAgICAgIFwibmFtZVwiOiAnc2NoZWR1bGVzW3t7JyArIF92bS5kYXlzLmluZGV4T2YoZGF5KSArICd9fV1bdG9dJ1xuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5zY2hlZHVsZXNbX3ZtLmRheXMuaW5kZXhPZihkYXkpXS50bylcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0uZm9ybURhdGEuc2NoZWR1bGVzW192bS5kYXlzLmluZGV4T2YoZGF5KV0udG8gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KV0pXSldKVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgcmVmOiBcInN1Ym1pdC1idXR0b25cIixcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwidmFsdWVcIjogXCJTdWJtaXRcIlxuICAgIH1cbiAgfSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iNTRlNWQxYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYjU0ZTVkMWEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvY29yZS9qcy9jb21wb25lbnRzL3R1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjQiLCJpbXBvcnQgc2VhcmNoT3JBc2tQYW5lbCBmcm9tICcuL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbCc7XG5pbXBvcnQgc2VhcmNoT3JBc2tPdmVybGF5IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXknO1xuaW1wb3J0IHRvcGljUmVjb21tZW5kYXRpb24gZnJvbSAnLi9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2VhcmNoT3JBc2tQYW5lbDogc2VhcmNoT3JBc2tQYW5lbCxcblx0c2VhcmNoT3JBc2tPdmVybGF5OiBzZWFyY2hPckFza092ZXJsYXksXG4gICAgdG9waWNSZWNvbW1lbmRhdGlvbjogdG9waWNSZWNvbW1lbmRhdGlvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHF1ZXN0aW9uRGV0YWlsOiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHBvc3RRdWVzdGlvblVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgnL3F1ZXN0aW9ucycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgaWYoc2hvdykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlRPR0dMRV9TSE9XX01PUkVfRklFTERTXSAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gIXN0YXRlLnNob3dNb3JlRmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9RVUVTVElPTl9ERVRBSUxdKHN0YXRlLCBxdWVzdGlvbkRldGFpbCkge1xuICAgICAgICAgICAgc3RhdGUucXVlc3Rpb25EZXRhaWwgPSBxdWVzdGlvbkRldGFpbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuICAgICAgICBwb3N0UXVlc3Rpb24oe3N0YXRlLCBjb21taXR9KSB7XG4gICAgICAgICAgICBpZihzdGF0ZS5yZXF1ZXN0aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3Qoc3RhdGUucG9zdFF1ZXN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlLnNlYXJjaFRleHQsXG4gICAgICAgICAgICAgICAgYm9keTogc3RhdGUucXVlc3Rpb25EZXRhaWwsXG4gICAgICAgICAgICAgICAgdG9waWNzOiBzdGF0ZS5zZWxlY3RlZFRvcGljcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5nZXRVcmwoJ3NlbGZfaHRtbCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21taXQodHlwZXMuU0VUX1JFUVVFU1RJTkcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheS5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgIHNob3dNb3JlRmllbGRzOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXSAoc3RhdGUsIHJlcXVlc3RpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlcXVlc3RpbmcgPSByZXF1ZXN0aW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19QQU5FTF0gKHN0YXRlLCBzaG93UGFuZWwpIHtcbiAgICAgICAgICAgIGlmKHNob3dQYW5lbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5zaG93UGFuZWwgPSBzaG93UGFuZWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0gKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXSAoc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMuc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSwgc2hvd01vcmVGaWVsZHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNob3dNb3JlRmllbGRzID0gc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYWN0aW9uczoge1xuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRUb3BpY3M6IFtdLFxuICAgICAgICB1cmw6IFZ1ZS5wcm90b3R5cGUuJHZpZW5kZXIuaGVscGVycy5hcGkoJ3RvcGljcycpLFxuICAgIH0sXG5cbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW3R5cGVzLlNFVF9SRVFVRVNUSU5HXShzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XXShzdGF0ZSwgc2hvdykge1xuICAgICAgICAgICAgc3RhdGUuc2hvdyA9IHNob3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfVEVYVF0oc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdKHN0YXRlLCBzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgdHJ1ZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGVUb3BpY1JlY29tbWVuZGF0aW9ucyh7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfU0hPVywgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=