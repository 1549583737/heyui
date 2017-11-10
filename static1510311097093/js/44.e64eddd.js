webpackJsonp([44],{

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Badge 徽标数")]), _vm._v(" "), _c('h3', [_vm._v("基本应用")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/badge1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("最大显示数")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/badge2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("数字为0的时候也展示")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/badge3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("提示小红点")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/badge4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不同展示方式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/badge5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Badge 参数")]), _vm._v(" "), _vm._m(1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("一般"), _c('code', [_vm._v("count")]), _vm._v("为0的时候不展示")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("count")]), _vm._v(" "), _c('td', [_vm._v("显示的值")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("maxCount")]), _vm._v(" "), _c('td', [_vm._v("最大显示的值")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("99")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("showZero")]), _vm._v(" "), _c('td', [_vm._v("当值为0的时候也显示")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("position")]), _vm._v(" "), _c('td', [_vm._v("显示在parent的右侧")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("right")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0619f7ef", module.exports)
  }
}

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1400),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/view/badge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] badge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0619f7ef", Component.options)
  } else {
    hotAPI.reload("data-v-0619f7ef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});