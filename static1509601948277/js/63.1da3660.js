webpackJsonp([63],{

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Checkbox 多选框")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("对于对象数组的解析，系统默认使用"), _c('code', [_vm._v("key")]), _vm._v(", "), _c('code', [_vm._v("title")]), _vm._v("两个参数进行识别。可以通过全局配置修改两个参数名称，详情请参考"), _c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")])], 1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/checkbox3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("独立调用")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/checkbox2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("组件式数据字典调用")]), _vm._v(" "), _c('p', [_vm._v("Hey UI将提供数据字典的调用方式模型，并内置"), _c('code', [_vm._v("dictMapping")]), _vm._v("方法做展示。详情请至"), _c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")]), _vm._v("。")], 1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/checkbox4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Checkbox 参数")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dict")]), _vm._v(" "), _c('td', [_vm._v("调用配置好的字典库，详情请至"), _c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")])], 1), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("推荐使用数据模式的checkbox选择器，使用js实现整个交互，兼容性更高。使用 "), _c('code', [_vm._v("v-model")]), _vm._v(" 以及 "), _c('code', [_vm._v("datas")]), _vm._v("参数完成整体的调用。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("当使用"), _c('code', [_vm._v("value")]), _vm._v("属性时，"), _c('code', [_vm._v("checkbox")]), _vm._v("将作为单个"), _c('code', [_vm._v("checkbox")]), _vm._v("使用。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("数据字典")]), _vm._v(" "), _c('td', [_vm._v("Array,Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("checked")]), _vm._v(" "), _c('td', [_vm._v("是否选中，针对true,false的多选框")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("indeterminate")]), _vm._v(" "), _c('td', [_vm._v("不明确的，针对true,false的多选框")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-38ccc530", module.exports)
  }
}

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1492),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/form/checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38ccc530", Component.options)
  } else {
    hotAPI.reload("data-v-38ccc530", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});