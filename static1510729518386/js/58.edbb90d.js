webpackJsonp([58],{

/***/ 1499:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Slider 滑块")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/slider1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("readonly")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/slider2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("step")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/slider3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义展示")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/slider4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("隐藏提示项")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/slider5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Silder 参数")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("step")]), _vm._v(" "), _c('td', [_vm._v("每个节点大小")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("readonly")]), _vm._v(" "), _c('td', [_vm._v("只读，只用于展示")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("show")]), _vm._v(" "), _c('td', [_vm._v("自定义tip展示的内容")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("showtip")]), _vm._v(" "), _c('td', [_vm._v("是否展示tip")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3e79fac6", module.exports)
  }
}

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1499),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/form/slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e79fac6", Component.options)
  } else {
    hotAPI.reload("data-v-3e79fac6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});