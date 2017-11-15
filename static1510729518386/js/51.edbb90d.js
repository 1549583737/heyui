webpackJsonp([51],{

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Tooltip 气泡提示")]), _vm._v(" "), _c('h3', [_vm._v("普通的提示")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/tooltip1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不同位置的提示")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/tooltip2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("通过点击触发")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/tooltip3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义内容")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/tooltip4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Tooltip 参数")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("content")]), _vm._v(" "), _c('td', [_vm._v("显示的内容")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placement")]), _vm._v(" "), _c('td', [_vm._v("提示的方向")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("theme")]), _vm._v(" "), _c('td', [_vm._v("主题")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("white")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("trigger")]), _vm._v(" "), _c('td', [_vm._v("触发事件")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("loading, info, warn, success, error")]), _vm._v(" "), _c('td', [_vm._v("info")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2dcef7b5", module.exports)
  }
}

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1471),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/message/tooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2dcef7b5", Component.options)
  } else {
    hotAPI.reload("data-v-2dcef7b5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});