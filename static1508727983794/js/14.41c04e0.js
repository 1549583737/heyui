webpackJsonp([14],{

/***/ 1383:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Extend 扩展")]), _vm._v(" "), _c('h3', [_vm._v("原生样式")]), _vm._v(" "), _c('p', [_vm._v("框架的样式除了一些基本标准格式，还输出一些基本的class调用。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/extend1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Directive 样式")]), _vm._v(" "), _c('p', [_vm._v("使用基本的directive调用实现简单的样式调整。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/extend2"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7084105e", module.exports)
  }
}

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1383)
}
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1573),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7084105e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/basic/extend.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] extend.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7084105e", Component.options)
  } else {
    hotAPI.reload("data-v-7084105e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});