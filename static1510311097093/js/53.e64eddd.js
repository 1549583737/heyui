webpackJsonp([53],{

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Notice 通知")]), _vm._v(" "), _c('h3', [_vm._v("普通的通知")]), _vm._v(" "), _c('blockquote', [_vm._v("这里写了两种调用，实际是同一个方法对象，下面的用例都使用vue调用做示例，js调用模式与vue调用一样。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/notice1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不同类型的通知")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/notice2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("设置timeout时间")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/notice4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义通知")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/notice3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("设置全局自动关闭时间")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/notice5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Notice 参数")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("content")]), _vm._v(" "), _c('td', [_vm._v("提示的文本")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("提示的标题")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("提示类型")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("loading, info, warn, success, error")]), _vm._v(" "), _c('td', [_vm._v("info")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("timeout")]), _vm._v(" "), _c('td', [_vm._v("显示多少毫秒后自动关闭")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置timeout")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-452098d4", module.exports)
  }
}

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1505),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/message/notice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] notice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-452098d4", Component.options)
  } else {
    hotAPI.reload("data-v-452098d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});