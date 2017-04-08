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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzA/MzFlNyoqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanM/NGJkYioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvcG9zdFR1dG9yaW5nL2Fzc2V0cy9qcy9zdG9yZS5qcz8zMzY4Iiwid2VicGFjazovLy8uL2FwcHMvbXl0dXRvci9yZXNvdXJjZXMvcGFnZXMvcG9zdFR1dG9yaW5nL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vL3R1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHBzL215dHV0b3IvcmVzb3VyY2VzL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1jcmVhdGUtZm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlPzFhMDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzPzNmNWIqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zZWFyY2hPckFza092ZXJsYXkuanM/YWZhYSoqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3NlYXJjaE9yQXNrUGFuZWwuanM/MDljNSoqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3RvcGljUmVjb21tZW5kYXRpb24uanM/MzYyMCoqKioqKioqKioqKioqKioqKioqKioiXSwibmFtZXMiOlsiU0VUX1JFUVVFU1RJTkciLCJTRVRfU0hPV19QQU5FTCIsIlNFVF9TSE9XIiwiU0VUX1NFQVJDSF9URVhUIiwiU0VUX1NFQVJDSF9SRVNVTFRTIiwiU0VUX1NIT1dfTU9SRV9GSUVMRFMiLCJUT0dHTEVfU0hPV19NT1JFX0ZJRUxEUyIsIkFERF9UT19TRUxFQ1RFRF9UT1BJQ1MiLCJSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MiLCJTRVRfUVVFU1RJT05fREVUQUlMIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsIk9iamVjdCIsImFzc2lnbiIsInJlcXVpcmUiLCJWdWUiLCJjb21wb25lbnQiLCJwb3N0VHV0b3JpbmciLCJlbCIsInNlYXJjaE9yQXNrUGFuZWwiLCJzZWFyY2hPckFza092ZXJsYXkiLCJ0b3BpY1JlY29tbWVuZGF0aW9uIiwibmFtZXNwYWNlZCIsInN0YXRlIiwicmVxdWVzdGluZyIsInNob3ciLCJzZWFyY2hUZXh0IiwicXVlc3Rpb25EZXRhaWwiLCJzZWFyY2hSZXN1bHRzIiwic2hvd01vcmVGaWVsZHMiLCJzZWxlY3RlZFRvcGljcyIsInBvc3RRdWVzdGlvblVybCIsInByb3RvdHlwZSIsIiR2aWVuZGVyIiwiaGVscGVycyIsImFwaSIsIm11dGF0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInRvcGljIiwicHVzaCIsImZpbHRlciIsInNlbGVjdGVkVG9waWMiLCJpZCIsImFjdGlvbnMiLCJwb3N0UXVlc3Rpb24iLCJjb21taXQiLCJheGlvcyIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJ0b3BpY3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhdGlvbiIsImdldFVybCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic2hvd1BhbmVsIiwib3ZlcmZsb3ciLCJ1cmwiLCJzaG93VG9waWNSZWNvbW1lbmRhdGlvbnMiLCJzZXRUaW1lb3V0IiwiaGlkZVRvcGlj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QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFD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QWlCMENrQixLQWpCMUMsRUFpQmlEO0FBQ3pDbEIsY0FBTU8sY0FBTixDQUFxQlksSUFBckIsQ0FBMEJELEtBQTFCO0FBQ0gsS0FuQkwsK0JBcUJLLG9GQXJCTCxZQXFCd0NsQixLQXJCeEMsRUFxQitDa0IsS0FyQi9DLEVBcUJzRDtBQUM5Q2xCLGNBQU1PLGNBQU4sR0FBdUJQLE1BQU1PLGNBQU4sQ0FBcUJhLE1BQXJCLENBQTRCO0FBQUEsbUJBQWlCQyxjQUFjQyxFQUFkLEtBQXFCSixNQUFNSSxFQUE1QztBQUFBLFNBQTVCLENBQXZCO0FBQ0gsS0F2QkwsY0FaVzs7QUFzQ1hDLGFBQVM7QUFDTGtCLGdDQURLLDBDQUNxQztBQUFBLGdCQUFoQnpDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLGdCQUFUeUIsTUFBUyxRQUFUQSxNQUFTOztBQUN0Q2lCLHVCQUFXLFlBQU07QUFDYmpCLHVCQUFPLGlFQUFQLEVBQXVCLElBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHSCxTQUxJO0FBT0xrQixnQ0FQSywyQ0FPcUM7QUFBQSxnQkFBaEIzQyxLQUFnQixTQUFoQkEsS0FBZ0I7QUFBQSxnQkFBVHlCLE1BQVMsU0FBVEEsTUFBUzs7QUFDdENpQix1QkFBVyxZQUFNO0FBQ2JqQix1QkFBTyxpRUFBUCxFQUF1QixLQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0g7QUFYSTtBQXRDRSxDQUFmLEMiLCJmaWxlIjoianMvdmllbmRlci9teXR1dG9yL3Bvc3RUdXRvcmluZy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWM3NjVmNmY4YTNiN2YzZjQ4MzAiLCIvLyBzZWFyY2hPckFza1BhbmVsXG5leHBvcnQgY29uc3QgU0VUX1JFUVVFU1RJTkcgPSAnU0VUX1JFUVVFU1RJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9TSE9XX1BBTkVMID0gJ1NFVF9TSE9XX1BBTkVMJztcbmV4cG9ydCBjb25zdCBTRVRfU0hPVyA9ICdTRVRfU0hPVyc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9URVhUID0gJ1NFVF9TRUFSQ0hfVEVYVCc7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9SRVNVTFRTID0gJ1NFVF9TRUFSQ0hfUkVTVUxUUyc7XG5leHBvcnQgY29uc3QgU0VUX1NIT1dfTU9SRV9GSUVMRFMgPSAnU0VUX1NIT1dfTU9SRV9GSUVMRFMnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9TSE9XX01PUkVfRklFTERTID0gJ1RPR0dMRV9TSE9XX01PUkVfRklFTERTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fU0VMRUNURURfVE9QSUNTID0gJ0FERF9UT19TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDUyA9ICdSRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVTVElPTl9ERVRBSUwgPSAnU0VUX1FVRVNUSU9OX0RFVEFJTCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzIiwiaW1wb3J0IGNvcmVNb2R1bGVzIGZyb20gJ3ZpZW5kZXJfY29yZS9qcy9zdG9yZS9tb2R1bGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiBPYmplY3QuYXNzaWduKGNvcmVNb2R1bGVzLCB7XG5cbiAgfSksXG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9wb3N0VHV0b3JpbmcvYXNzZXRzL2pzL3N0b3JlLmpzIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGUgVnVlIGFuZCBWdWUgUmVzb3VyY2UuIFRoaXMgZ2l2ZXMgYSBncmVhdCBzdGFydGluZyBwb2ludCBmb3JcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cblZ1ZS5jb21wb25lbnQoJ3R1dG9yaW5nLWNyZWF0ZS1mb3JtJywgcmVxdWlyZSgndmllbmRlcl9teXR1dG9yL2NvcmUvanMvY29tcG9uZW50cy90dXRvcmluZy1jcmVhdGUtZm9ybS52dWUnKSk7XG5cblxuXG5jb25zdCBwb3N0VHV0b3JpbmcgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuXG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9wYWdlcy9wb3N0VHV0b3JpbmcvYXNzZXRzL2pzL2FwcC5qcyIsIjx0ZW1wbGF0ZT5cblx0PGZvcm0gcmVmPVwiZm9ybVwiIDphY3Rpb249XCJhY3Rpb25cIiBtZXRob2Q9XCJQT1NUXCIgQHN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl90b2tlblwiIDp2YWx1ZT1cImNzcmZUb2tlblwiPlxuXG5cdFx0PGRpdiA6Y2xhc3M9XCInZm9ybS1ncm91cCcgKyAoZXJyb3JzLnRpdGxlID8gJyBoYXMtZXJyb3InIDogJycpXCI+XG5cdFx0XHQ8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgdi1tb2RlbD1cImZvcm1EYXRhLnRpdGxlXCI+XG5cblx0XHRcdDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHYtaWY9XCJlcnJvcnMudGl0bGVcIiB2LWZvcj1cImVycm9yIGluIGVycm9ycy50aXRsZVwiPlxuXHQgICAgICAgICAgICA8c3Ryb25nPnt7IGVycm9yIH19PC9zdHJvbmc+XG5cdCAgICAgICAgPC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiA6Y2xhc3M9XCInZm9ybS1ncm91cCcgKyAoZXJyb3JzLnByaWNlID8gJyBoYXMtZXJyb3InIDogJycpXCI+XG5cdFx0XHQ8bGFiZWwgZm9yPVwicHJpY2VcIj5CdWRnZXQ8L2xhYmVsPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByaWNlXCIgbmFtZT1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJCdWRnZXRcIiB2LW1vZGVsPVwiZm9ybURhdGEucHJpY2VcIj5cblxuXHRcdFx0PHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgdi1pZj1cImVycm9ycy5wcmljZVwiIHYtZm9yPVwiZXJyb3IgaW4gZXJyb3JzLnByaWNlXCI+XG5cdCAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3IgfX08L3N0cm9uZz5cblx0ICAgICAgICA8L3NwYW4+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IDpjbGFzcz1cIidmb3JtLWdyb3VwJyArIChlcnJvcnMubnVtYmVyX29mX3dlZWsgPyAnIGhhcy1lcnJvcicgOiAnJylcIj5cblx0XHRcdDxsYWJlbCBmb3I9XCJudW1iZXJfb2Zfd2Vla1wiPk51bWJlciBvZiB3ZWVrPC9sYWJlbD5cblx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJudW1iZXJfb2Zfd2Vla1wiIG5hbWU9XCJudW1iZXJfb2Zfd2Vla1wiIHBsYWNlaG9sZGVyPVwiTnVtYmVyIG9mIHdlZWtcIiB2LW1vZGVsPVwiZm9ybURhdGEubnVtYmVyX29mX3dlZWtcIj5cblxuXHRcdFx0PHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgdi1pZj1cImVycm9ycy5udW1iZXJfb2Zfd2Vla1wiIHYtZm9yPVwiZXJyb3IgaW4gZXJyb3JzLm51bWJlcl9vZl93ZWVrXCI+XG5cdCAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3IgfX08L3N0cm9uZz5cblx0ICAgICAgICA8L3NwYW4+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IDpjbGFzcz1cIidmb3JtLWdyb3VwJyArIChlcnJvcnMuYm9keSA/ICcgaGFzLWVycm9yJyA6ICcnKVwiPlxuXHRcdFx0PGxhYmVsIGZvcj1cImJvZHlcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiMTBcIiBpZD1cImJvZHlcIiBuYW1lPVwiYm9keVwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiAgdi1tb2RlbD1cImZvcm1EYXRhLmJvZHlcIj48L3RleHRhcmVhPlxuXG5cdFx0XHQ8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiB2LWlmPVwiZXJyb3JzLmJvZHlcIiB2LWZvcj1cImVycm9yIGluIGVycm9ycy5ib2R5XCI+XG5cdCAgICAgICAgICAgIDxzdHJvbmc+e3sgZXJyb3IucmVwbGFjZSgnYm9keScsICdkZXNjcmlwdGlvbicpIH19PC9zdHJvbmc+XG5cdCAgICAgICAgPC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdCAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHQgICAgXHQ8bGFiZWw+U2NoZWR1bGU8L2xhYmVsPlxuXHRcdCAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWZvcj1cImRheSBpbiBkYXlzXCI+XG5cdFx0ICAgIFx0XG5cdFx0ICAgIFx0PGxhYmVsIGNsYXNzPVwiY29sLW1kLTIgY29sLWZvcm0tbGFiZWxcIiA6Zm9yPVwiZGF5XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIDppZD1cImRheVwiIDpuYW1lPVwiZGF5XCI+e3sgZGF5IH19PC9sYWJlbD5cblx0XHQgICAgXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIDpuYW1lPVwiJ3NjaGVkdWxlc1t7eycgKyBkYXlzLmluZGV4T2YoZGF5KSArICd9fV1bZGF5XSdcIiA6dmFsdWU9XCJkYXlcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLW1kLTEwIHJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIDpmb3I9XCJkYXkgKyAnX2Zyb20nXCI+RnJvbTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRpbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDppZD1cImRheSArICdfZnJvbSdcIiA6bmFtZT1cIidzY2hlZHVsZXNbe3snICsgZGF5cy5pbmRleE9mKGRheSkgKyAnfX1dW2Zyb21dJ1wiIHYtbW9kZWw9XCJmb3JtRGF0YS5zY2hlZHVsZXNbZGF5cy5pbmRleE9mKGRheSldLmZyb21cIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCA6Zm9yPVwiZGF5ICsgJ190bydcIj5UbzwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRpbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDppZD1cImRheSArICdfdG8nXCIgOm5hbWU9XCInc2NoZWR1bGVzW3t7JyArIGRheXMuaW5kZXhPZihkYXkpICsgJ319XVt0b10nXCIgdi1tb2RlbD1cImZvcm1EYXRhLnNjaGVkdWxlc1tkYXlzLmluZGV4T2YoZGF5KV0udG9cIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0ICAgIDwvZGl2PlxuXHQgICAgPC9kaXY+XG5cdFx0PGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHRcIiByZWY9XCJzdWJtaXQtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG5cdDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2FjdGlvbiddLFxuXG4gICAgZGF0YSgpIHtcbiAgICBcdHJldHVybiB7XG4gICAgICAgICAgICBjc3JmVG9rZW46IHdpbmRvdy5MYXJhdmVsID8gd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuIDogJycsXG5cbiAgICBcdFx0ZGF5czogWydtb25kYXknLCAndHVlc2RheScsICd3ZWRuZXNkYXknLCAndGh1cnNkYXknLCAnZnJpZGF5JywgJ3NhdHVyZGF5JywgJ3N1bmRheSddLFxuXG4gICAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICAgICAgICAgIHByaWNlOiBudWxsLFxuICAgICAgICAgICAgICAgIG51bWJlcl9vZl93ZWVrOiBudWxsLFxuICAgICAgICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJ21vbmRheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICd0dWVzZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJ3dlZG5lc2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICd0aHVyc2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICdmcmlkYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnc2F0dXJkYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnc3VuZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcblxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICBcdH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICBcdGNvbnNvbGUubG9nKCdoZWxsbyBmcm9tIHBvc3RUdXRvcmluZycpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHRzdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMuYWN0aW9uLCB0aGlzLmZvcm1EYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR1dG9yaW5nID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSB0dXRvcmluZy5saW5rcy5maWx0ZXIoZnVuY3Rpb24obGluaykgeyByZXR1cm4gbGluay5yZWwgPT0gJ3NlbGZfaHRtbCcgfSlbMF0udXJsO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoIChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcdH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlPzcxM2I5YTU4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90dXRvcmluZy1jcmVhdGUtZm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYjU0ZTVkMWEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3R1dG9yaW5nLWNyZWF0ZS1mb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvbnVncmFoYS9Db2RlL3ZpZW5kZXIvYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWI1NGU1ZDFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYjU0ZTVkMWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZm9ybScsIHtcbiAgICByZWY6IFwiZm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBfdm0uYWN0aW9uLFxuICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcIl90b2tlblwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uY3NyZlRva2VuXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2Zvcm0tZ3JvdXAnICsgKF92bS5lcnJvcnMudGl0bGUgPyAnIGhhcy1lcnJvcicgOiAnJylcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ0aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGl0bGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLnRpdGxlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEudGl0bGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImlkXCI6IFwidGl0bGVcIixcbiAgICAgIFwibmFtZVwiOiBcInRpdGxlXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVGl0bGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS50aXRsZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtRGF0YS50aXRsZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5lcnJvcnMudGl0bGUpLCBmdW5jdGlvbihlcnJvcikge1xuICAgIHJldHVybiAoX3ZtLmVycm9ycy50aXRsZSkgPyBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICAgIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoZXJyb3IpKV0pXSkgOiBfdm0uX2UoKVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnZm9ybS1ncm91cCcgKyAoX3ZtLmVycm9ycy5wcmljZSA/ICcgaGFzLWVycm9yJyA6ICcnKVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInByaWNlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCdWRnZXRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLnByaWNlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEucHJpY2VcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwibWluXCI6IFwiMFwiLFxuICAgICAgXCJpZFwiOiBcInByaWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJwcmljZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkJ1ZGdldFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLnByaWNlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm1EYXRhLnByaWNlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXJyb3JzLnByaWNlKSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gKF92bS5lcnJvcnMucHJpY2UpID8gX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrXCJcbiAgICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKGVycm9yKSldKV0pIDogX3ZtLl9lKClcbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogJ2Zvcm0tZ3JvdXAnICsgKF92bS5lcnJvcnMubnVtYmVyX29mX3dlZWsgPyAnIGhhcy1lcnJvcicgOiAnJylcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJudW1iZXJfb2Zfd2Vla1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTnVtYmVyIG9mIHdlZWtcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLm51bWJlcl9vZl93ZWVrKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEubnVtYmVyX29mX3dlZWtcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwibWluXCI6IFwiMFwiLFxuICAgICAgXCJpZFwiOiBcIm51bWJlcl9vZl93ZWVrXCIsXG4gICAgICBcIm5hbWVcIjogXCJudW1iZXJfb2Zfd2Vla1wiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIk51bWJlciBvZiB3ZWVrXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybURhdGEubnVtYmVyX29mX3dlZWspXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybURhdGEubnVtYmVyX29mX3dlZWsgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9LFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5lcnJvcnMubnVtYmVyX29mX3dlZWspLCBmdW5jdGlvbihlcnJvcikge1xuICAgIHJldHVybiAoX3ZtLmVycm9ycy5udW1iZXJfb2Zfd2VlaykgPyBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIlxuICAgIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3MoZXJyb3IpKV0pXSkgOiBfdm0uX2UoKVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAnZm9ybS1ncm91cCcgKyAoX3ZtLmVycm9ycy5ib2R5ID8gJyBoYXMtZXJyb3InIDogJycpXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiYm9keVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVzY3JpcHRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLmJvZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5ib2R5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb3dzXCI6IFwiMTBcIixcbiAgICAgIFwiaWRcIjogXCJib2R5XCIsXG4gICAgICBcIm5hbWVcIjogXCJib2R5XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRGVzY3JpcHRpb25cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5ib2R5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm1EYXRhLmJvZHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXJyb3JzLmJvZHkpLCBmdW5jdGlvbihlcnJvcikge1xuICAgIHJldHVybiAoX3ZtLmVycm9ycy5ib2R5KSA/IF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9ja1wiXG4gICAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhlcnJvci5yZXBsYWNlKCdib2R5JywgJ2Rlc2NyaXB0aW9uJykpKV0pXSkgOiBfdm0uX2UoKVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlNjaGVkdWxlXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmRheXMpLCBmdW5jdGlvbihkYXkpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCJcbiAgICB9LCBbX2MoJ2xhYmVsJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTIgY29sLWZvcm0tbGFiZWxcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IGRheVxuICAgICAgfVxuICAgIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgICBcImlkXCI6IGRheSxcbiAgICAgICAgXCJuYW1lXCI6IGRheVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoX3ZtLl9zKGRheSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgICBcIm5hbWVcIjogJ3NjaGVkdWxlc1t7eycgKyBfdm0uZGF5cy5pbmRleE9mKGRheSkgKyAnfX1dW2RheV0nXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBkYXlcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgY29sLW1kLTEwIHJvd1wiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gICAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IGRheSArICdfZnJvbSdcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRnJvbVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICB2YWx1ZTogKF92bS5mb3JtRGF0YS5zY2hlZHVsZXNbX3ZtLmRheXMuaW5kZXhPZihkYXkpXS5mcm9tKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5zY2hlZHVsZXNbZGF5cy5pbmRleE9mKGRheSldLmZyb21cIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInRpbWVcIixcbiAgICAgICAgXCJpZFwiOiBkYXkgKyAnX2Zyb20nLFxuICAgICAgICBcIm5hbWVcIjogJ3NjaGVkdWxlc1t7eycgKyBfdm0uZGF5cy5pbmRleE9mKGRheSkgKyAnfX1dW2Zyb21dJ1xuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5zY2hlZHVsZXNbX3ZtLmRheXMuaW5kZXhPZihkYXkpXS5mcm9tKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgIF92bS5mb3JtRGF0YS5zY2hlZHVsZXNbX3ZtLmRheXMuaW5kZXhPZihkYXkpXS5mcm9tID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgICB9LCBbX2MoJ2xhYmVsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJmb3JcIjogZGF5ICsgJ190bydcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiVG9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IChfdm0uZm9ybURhdGEuc2NoZWR1bGVzW192bS5kYXlzLmluZGV4T2YoZGF5KV0udG8pLFxuICAgICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLnNjaGVkdWxlc1tkYXlzLmluZGV4T2YoZGF5KV0udG9cIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInRpbWVcIixcbiAgICAgICAgXCJpZFwiOiBkYXkgKyAnX3RvJyxcbiAgICAgICAgXCJuYW1lXCI6ICdzY2hlZHVsZXNbe3snICsgX3ZtLmRheXMuaW5kZXhPZihkYXkpICsgJ319XVt0b10nXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLnNjaGVkdWxlc1tfdm0uZGF5cy5pbmRleE9mKGRheSldLnRvKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgIF92bS5mb3JtRGF0YS5zY2hlZHVsZXNbX3ZtLmRheXMuaW5kZXhPZihkYXkpXS50byA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSldKV0pXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwic3VibWl0LWJ1dHRvblwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIlN1Ym1pdFwiXG4gICAgfVxuICB9KV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWI1NGU1ZDFhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1iNTRlNWQxYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwcy9teXR1dG9yL3Jlc291cmNlcy9jb3JlL2pzL2NvbXBvbmVudHMvdHV0b3JpbmctY3JlYXRlLWZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAyNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsImltcG9ydCBzZWFyY2hPckFza1BhbmVsIGZyb20gJy4vbW9kdWxlcy9zZWFyY2hPckFza1BhbmVsJztcbmltcG9ydCBzZWFyY2hPckFza092ZXJsYXkgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE9yQXNrT3ZlcmxheSc7XG5pbXBvcnQgdG9waWNSZWNvbW1lbmRhdGlvbiBmcm9tICcuL21vZHVsZXMvdG9waWNSZWNvbW1lbmRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzZWFyY2hPckFza1BhbmVsOiBzZWFyY2hPckFza1BhbmVsLFxuXHRzZWFyY2hPckFza092ZXJsYXk6IHNlYXJjaE9yQXNrT3ZlcmxheSxcbiAgICB0b3BpY1JlY29tbWVuZGF0aW9uOiB0b3BpY1JlY29tbWVuZGF0aW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICAgICAgcXVlc3Rpb25EZXRhaWw6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzaG93TW9yZUZpZWxkczogZmFsc2UsXG4gICAgICAgIHNlbGVjdGVkVG9waWNzOiBbXSxcbiAgICAgICAgcG9zdFF1ZXN0aW9uVXJsOiBWdWUucHJvdG90eXBlLiR2aWVuZGVyLmhlbHBlcnMuYXBpKCcvcXVlc3Rpb25zJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBpZihzaG93KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzaG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1RFWFRdKHN0YXRlLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9SRVNVTFRTXShzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuVE9HR0xFX1NIT1dfTU9SRV9GSUVMRFNdIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSAhc3RhdGUuc2hvd01vcmVGaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLkFERF9UT19TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MucHVzaCh0b3BpYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlJFTU9WRV9GUk9NX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcyA9IHN0YXRlLnNlbGVjdGVkVG9waWNzLmZpbHRlcihzZWxlY3RlZFRvcGljID0+IHNlbGVjdGVkVG9waWMuaWQgIT09IHRvcGljLmlkKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1FVRVNUSU9OX0RFVEFJTF0oc3RhdGUsIHF1ZXN0aW9uRGV0YWlsKSB7XG4gICAgICAgICAgICBzdGF0ZS5xdWVzdGlvbkRldGFpbCA9IHF1ZXN0aW9uRGV0YWlsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHBvc3RRdWVzdGlvbih7c3RhdGUsIGNvbW1pdH0pIHtcbiAgICAgICAgICAgIGlmKHN0YXRlLnJlcXVlc3RpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCB0cnVlKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdChzdGF0ZS5wb3N0UXVlc3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICBib2R5OiBzdGF0ZS5xdWVzdGlvbkRldGFpbCxcbiAgICAgICAgICAgICAgICB0b3BpY3M6IHN0YXRlLnNlbGVjdGVkVG9waWNzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmdldFVybCgnc2VsZl9odG1sJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9SRVFVRVNUSU5HLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5TRVRfUkVRVUVTVElORywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tPdmVybGF5LmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBzaG93UGFuZWw6IGZhbHNlLFxuICAgICAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgc2hvd01vcmVGaWVsZHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddIChzdGF0ZSwgcmVxdWVzdGluZykge1xuICAgICAgICAgICAgc3RhdGUucmVxdWVzdGluZyA9IHJlcXVlc3Rpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TSE9XX1BBTkVMXSAoc3RhdGUsIHNob3dQYW5lbCkge1xuICAgICAgICAgICAgaWYoc2hvd1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLnNob3dQYW5lbCA9IHNob3dQYW5lbDtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXSAoc3RhdGUsIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0VBUkNIX1JFU1VMVFNdIChzdGF0ZSwgc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cy5zZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5TRVRfU0hPV19NT1JFX0ZJRUxEU10gKHN0YXRlLCBzaG93TW9yZUZpZWxkcykge1xuICAgICAgICAgICAgc3RhdGUuc2hvd01vcmVGaWVsZHMgPSBzaG93TW9yZUZpZWxkcztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuQUREX1RPX1NFTEVDVEVEX1RPUElDU10oc3RhdGUsIHRvcGljKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvcGljcy5wdXNoKHRvcGljKTtcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuUkVNT1ZFX0ZST01fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzID0gc3RhdGUuc2VsZWN0ZWRUb3BpY3MuZmlsdGVyKHNlbGVjdGVkVG9waWMgPT4gc2VsZWN0ZWRUb3BpYy5pZCAhPT0gdG9waWMuaWQpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhY3Rpb25zOiB7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc2VhcmNoT3JBc2tQYW5lbC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG5cbiAgICBzdGF0ZToge1xuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICBzZWxlY3RlZFRvcGljczogW10sXG4gICAgICAgIHVybDogVnVlLnByb3RvdHlwZS4kdmllbmRlci5oZWxwZXJzLmFwaSgndG9waWNzJyksXG4gICAgfSxcblxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBbdHlwZXMuU0VUX1JFUVVFU1RJTkddKHN0YXRlLCByZXF1ZXN0aW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXF1ZXN0aW5nID0gcmVxdWVzdGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NIT1ddKHN0YXRlLCBzaG93KSB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc2hvdztcbiAgICAgICAgfSxcblxuICAgICAgICBbdHlwZXMuU0VUX1NFQVJDSF9URVhUXShzdGF0ZSwgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgW3R5cGVzLlNFVF9TRUFSQ0hfUkVTVUxUU10oc3RhdGUsIHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5BRERfVE9fU0VMRUNURURfVE9QSUNTXShzdGF0ZSwgdG9waWMpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkVG9waWNzLnB1c2godG9waWMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIFt0eXBlcy5SRU1PVkVfRlJPTV9TRUxFQ1RFRF9UT1BJQ1NdKHN0YXRlLCB0b3BpYykge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb3BpY3MgPSBzdGF0ZS5zZWxlY3RlZFRvcGljcy5maWx0ZXIoc2VsZWN0ZWRUb3BpYyA9PiBzZWxlY3RlZFRvcGljLmlkICE9PSB0b3BpYy5pZCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd1RvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZVRvcGljUmVjb21tZW5kYXRpb25zKHtzdGF0ZSwgY29tbWl0fSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KHR5cGVzLlNFVF9TSE9XLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy90b3BpY1JlY29tbWVuZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==