webpackJsonp([47],{

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Steps 步骤条")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/step1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义Icon, 说明")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/step2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("使用key值识别第几步")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/step3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Steps 参数")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("选择的数据")]), _vm._v(" "), _c('td', [_vm._v("Array, Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dict")]), _vm._v(" "), _c('td', [_vm._v("调用全局定义的字典")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("step")]), _vm._v(" "), _c('td', [_vm._v("当前第几步，可以是key")]), _vm._v(" "), _c('td', [_vm._v("Number,String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("0")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4ab61901", module.exports)
  }
}

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1526),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/plugin/steps.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] steps.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ab61901", Component.options)
  } else {
    hotAPI.reload("data-v-4ab61901", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});