webpackJsonp([42],{

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Panel 面板")]), _vm._v(" "), _c('h3', [_vm._v("基础调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/panel1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Panel头部自定义")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/panel2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("无边框")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/panel3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("头部单独调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/panel4"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2fcf4dd0", module.exports)
  }
}

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1470),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/view/panel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fcf4dd0", Component.options)
  } else {
    hotAPI.reload("data-v-2fcf4dd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});