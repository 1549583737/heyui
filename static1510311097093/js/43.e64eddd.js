webpackJsonp([43],{

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Menu 菜单")]), _vm._v(" "), _c('h3', [_vm._v("基本黑色")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/menu1"
    }
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('codes', {
    attrs: {
      "src": "/codes/menu1.txt",
      "type": "javascript"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("白色")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/menu2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义")]), _vm._v(" "), _c('p', [_vm._v("该样式是自己的设置的class，可以做任意调整。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/menu3"
    }
  }), _vm._v(" "), _c('p', [_vm._v("样式：")]), _vm._v(" "), _c('codes', {
    attrs: {
      "src": "/codes/menu.txt",
      "type": "less"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Menu 参数")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h3', [_vm._v("Menu 事件")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('h3', [_vm._v("Option 参数")]), _vm._v(" "), _vm._m(4)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("选中的方法主要是针对于"), _c('code', [_vm._v("vue-router")]), _vm._v("等单页应用的选中逻辑。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("配合"), _c('code', [_vm._v("vue-router")]), _vm._v("：")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("menu的数据")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("[]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("option")]), _vm._v(" "), _c('td', [_vm._v("针对datas提供数据的参数名")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置"), _c('code', [_vm._v("config.menu")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("className")]), _vm._v(" "), _c('td', [_vm._v("自定义class")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("h-menu-dark")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("事件")]), _vm._v(" "), _c('th', [_vm._v("说明")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("click")]), _vm._v(" "), _c('td', [_vm._v("每个menu的点击事件")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("select")]), _vm._v(" "), _c('td', [_vm._v("menu的选中事件")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("titleName")]), _vm._v(" "), _c('td', [_vm._v("menu的数据titleName")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("title")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("keyName")]), _vm._v(" "), _c('td', [_vm._v("menu的数据keyName")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("key")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("childrenName")]), _vm._v(" "), _c('td', [_vm._v("menu的数据childrenName")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("children")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-226796c3", module.exports)
  }
}

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1436),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/view/menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-226796c3", Component.options)
  } else {
    hotAPI.reload("data-v-226796c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});