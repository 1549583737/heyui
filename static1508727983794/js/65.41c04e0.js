webpackJsonp([65],{

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Pagination 分页")]), _vm._v(" "), _c('h3', [_vm._v("普通分页")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataview/pagination1"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("迷你分页")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataview/pagination2"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("自定义分页")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataview/pagination3"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("自定义示例")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataview/pagination4"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("居中对齐")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataview/pagination5"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("居右对齐")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataview/pagination6"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("Pagination 参数")]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("分页控件由四个部分组成："), _c('code', [_vm._v("total")]), _vm._v("总数,"), _c('code', [_vm._v("sizes")]), _vm._v("每页条数选择,"), _c('code', [_vm._v("pager")]), _vm._v("翻页,"), _c('code', [_vm._v("jumper")]), _vm._v("跳页，可以自定义"), _c('code', [_vm._v("layout")]), _vm._v("属性定义组件，以及排列顺序。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("每页条数")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置size")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("sizes")]), _vm._v(" "), _c('td', [_vm._v("每页条数选择器")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置sizes, 例：[10, 20, 50, 100]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("align")]), _vm._v(" "), _c('td', [_vm._v("排列方向")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("left,center,right")]), _vm._v(" "), _c('td', [_vm._v("left")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("cur")]), _vm._v(" "), _c('td', [_vm._v("当前页")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("1")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("total")]), _vm._v(" "), _c('td', [_vm._v("总共条数")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("small")]), _vm._v(" "), _c('td', [_vm._v("是否是迷你版本")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置small")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("layout")]), _vm._v(" "), _c('td', [_vm._v("翻页器排列")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("total,pager,jumper,sizes")]), _vm._v(" "), _c('td', [_vm._v("全局配置layout")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2a7bf16c", module.exports)
  }
}

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1462),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/view/page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a7bf16c", Component.options)
  } else {
    hotAPI.reload("data-v-2a7bf16c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});