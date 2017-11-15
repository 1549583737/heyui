webpackJsonp([45],{

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("TreePicker 树下拉选择")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/treepicker1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多选")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/treepicker2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("全局")]), _vm._v(" "), _c('blockquote', [_vm._v("使用的是treeconfig中的配置项")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/treepicker3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("TreePicker 参数")]), _vm._v(" "), _c('blockquote', [_vm._v("multiple, option, config, filterable等配置参照Tree的配置")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("TreePicker 方法")]), _vm._v(" "), _vm._m(1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("multiple")]), _vm._v(" "), _c('td', [_vm._v("是否多选")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("model的类型，注意：key模式不支持初始化传入数据，因为对应的title展示不出来")]), _vm._v(" "), _c('td', [_vm._v("key, object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("key")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("chooseMode")]), _vm._v(" "), _c('td', [_vm._v("choose的类型，具体请参考tree的文档")]), _vm._v(" "), _c('td', [_vm._v("all, some")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("all")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("展示默认提示语")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("请选择")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("toggleOnSelect")]), _vm._v(" "), _c('td', [_vm._v("是否在选中文本的时候折叠内容")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("方法名")]), _vm._v(" "), _c('th', [_vm._v("说明")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("updateShow")]), _vm._v(" "), _c('td', [_vm._v("由于tree大多数是异步加载数据，所以可以用于更新展示的文本")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getChoose")]), _vm._v(" "), _c('td', [_vm._v("按照当前模式选中的数据")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getFullChoose")]), _vm._v(" "), _c('td', [_vm._v("获取所有checkbox选中的数据")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6107967c", module.exports)
  }
}

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1544),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/plugin/treepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] treepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6107967c", Component.options)
  } else {
    hotAPI.reload("data-v-6107967c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});