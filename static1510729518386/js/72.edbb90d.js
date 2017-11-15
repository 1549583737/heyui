webpackJsonp([72],{

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Button 按钮")]), _vm._v(" "), _c('h3', [_vm._v("原生class")]), _vm._v(" "), _c('p', [_vm._v("利用基本的class实现各种button的样式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/button1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("组件调用")]), _vm._v(" "), _c('p', [_vm._v("使用基本的Button组件实现各种button的样式。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/button2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("class 集合")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("Button 参数")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h3', [_vm._v("ButtonGroup 参数")]), _vm._v(" "), _vm._m(2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("class")]), _vm._v(" "), _c('th', [_vm._v("说明")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn")]), _vm._v(" "), _c('td', [_vm._v("默认的按钮样式")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-{color}")]), _vm._v(" "), _c('td', [_vm._v("有背景色的按钮，red,green,blue,yellow,primary")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-text-{color}")]), _vm._v(" "), _c('td', [_vm._v("hover下，文字与边框变色的按钮，red,green,blue,yellow")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-circle")]), _vm._v(" "), _c('td', [_vm._v("圆角按钮")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-icon-circle")]), _vm._v(" "), _c('td', [_vm._v("圆形的图标按钮")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-{size}")]), _vm._v(" "), _c('td', [_vm._v("图标的大小，l, s, xs")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-loading")]), _vm._v(" "), _c('td', [_vm._v("loading状态下的按钮")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-group")]), _vm._v(" "), _c('td', [_vm._v("按钮组")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-group-circle")]), _vm._v(" "), _c('td', [_vm._v("圆角的按钮组")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".h-btn-group-{size}")]), _vm._v(" "), _c('td', [_vm._v("按钮组的大小，l, s, xs")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("color")]), _vm._v(" "), _c('td', [_vm._v("背景有颜色的按钮")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("red,green,blue,yellow,primary")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("text-color")]), _vm._v(" "), _c('td', [_vm._v("hover下，文字与边框变色的按钮")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("red,green,blue,yellow")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("circle")]), _vm._v(" "), _c('td', [_vm._v("是否是圆角边框")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("loading")]), _vm._v(" "), _c('td', [_vm._v("是否加载中，将覆盖原有的图标")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("按钮大小")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("l, s, xs")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("no-border")]), _vm._v(" "), _c('td', [_vm._v("是否有边框")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("text")]), _vm._v(" "), _c('td', [_vm._v("是否是单纯的文字按钮")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("icon")]), _vm._v(" "), _c('td', [_vm._v("引用icon")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("现有的icon库")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("circle")]), _vm._v(" "), _c('td', [_vm._v("是否是圆角边框")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("按钮大小")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("l, s, xs")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-49d393e9", module.exports)
  }
}

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1525),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/basic/button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49d393e9", Component.options)
  } else {
    hotAPI.reload("data-v-49d393e9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});