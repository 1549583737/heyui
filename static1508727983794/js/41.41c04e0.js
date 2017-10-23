webpackJsonp([41],{

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Tabs 标签页")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tabs1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("使用内置的样式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tabs2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("使用内置的样式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tabs3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义Tabs")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tabs5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义样式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tabs4"
    }
  }), _vm._v(" "), _c('p', [_vm._v("样式：")]), _vm._v(" "), _c('codes', {
    attrs: {
      "src": "/codes/tabs.txt",
      "type": "less"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Tabs 参数")]), _vm._v(" "), _vm._m(2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Tabs控件只支持简单的tab生成，点击切换。默认给"), _c('code', [_vm._v("h-tabs-default")]), _vm._v("样式，可以自己做自定义Tabs。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("tab选中时添加class"), _c('code', [_vm._v("h-tabs-selected")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("切换Tab触发的事件")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("选择的数据")]), _vm._v(" "), _c('td', [_vm._v("Array, Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dict")]), _vm._v(" "), _c('td', [_vm._v("调用全局定义的字典")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-11608d62", module.exports)
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
  __webpack_require__(1410),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/view/tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11608d62", Component.options)
  } else {
    hotAPI.reload("data-v-11608d62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});