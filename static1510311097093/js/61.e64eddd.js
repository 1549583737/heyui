webpackJsonp([61],{

/***/ 1403:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Input, Textarea 输入框")]), _vm._v(" "), _c('h3', [_vm._v("基本")]), _vm._v(" "), _c('p', [_vm._v("Hey UI将统一所有的input样式。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/input1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("只读")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/input2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("禁用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/input3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("带Icon")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/input4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自动适用高度的输入框")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/input5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("复合型输入框")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/input6"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("只需要在textarea添加"), _c('code', [_vm._v("v-autosize")]), _vm._v("即可完成自适应高度的功能。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("设置textarea的"), _c('code', [_vm._v("rows")]), _vm._v("属性可以设定原始的高度。")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0b938016", module.exports)
  }
}

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1403),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/form/input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b938016", Component.options)
  } else {
    hotAPI.reload("data-v-0b938016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});