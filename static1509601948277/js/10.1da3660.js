webpackJsonp([10],{

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1383)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1376),
  /* template */
  __webpack_require__(1572),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6e6eea7a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e6eea7a", Component.options)
  } else {
    hotAPI.reload("data-v-6e6eea7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  data: function data() {
    return {
      pass: '',
      error: false
    };
  },

  methods: {},
  components: {}
};

/***/ }),

/***/ 1383:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1572:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-home"
  }, [_vm._m(0), _vm._v(" "), _c('com-foot')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-body"
  }, [_c('div', {
    staticClass: "part"
  }, [_c('h1', [_vm._v("HEYUI，快速构建前端工具。")]), _vm._v(" "), _c('h4', {
    staticClass: "gray-color"
  }, [_vm._v("\n        帮助您快速搭建网站。\n      ")]), _vm._v(" "), _c('h1', [_vm._v("简单，快速，可扩展。")]), _vm._v(" "), _c('h4', {
    staticClass: "gray-color"
  }, [_vm._v("\n        简单的调用，快速的开发，可扩展的接口\n      ")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6e6eea7a", module.exports)
  }
}

/***/ })

});