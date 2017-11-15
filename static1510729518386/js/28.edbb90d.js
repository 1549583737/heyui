webpackJsonp([28],{

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  data: function data() {
    return {};
  },

  methods: {}
};

/***/ }),

/***/ 1591:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Table 表格")]), _vm._v(" "), _c('h3', [_vm._v("Columns定义模式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/table1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("TableItem定义模式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/table2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义模式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/table5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("固定的table")]), _vm._v(" "), _c('p', [_vm._v("固定的高度和宽度，内部内容超出时使用scroll。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/table3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("固定的列")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/table4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Table 参数")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("Table 事件")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h3', [_vm._v("Table 方法")]), _vm._v(" "), _vm._m(2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("columns")]), _vm._v(" "), _c('td', [_vm._v("定义table的header")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("[]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("列表展示需要的数据")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("[]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("height")]), _vm._v(" "), _c('td', [_vm._v("Table固定的高度")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("checkbox")]), _vm._v(" "), _c('td', [_vm._v("是否使用checkbox选择器")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("stripe")]), _vm._v(" "), _c('td', [_vm._v("table使用栅格背景")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("sort")]), _vm._v(" "), _c('td', [_vm._v("当排序的时候触发的事件")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("select")]), _vm._v(" "), _c('td', [_vm._v("当checkbox有变动的时候触发的事件")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("selectAll")]), _vm._v(" "), _c('td', [_vm._v("当checkbox全选的时候")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("clearSort")]), _vm._v(" "), _c('td', [_vm._v("清空排序")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("clearSelection")]), _vm._v(" "), _c('td', [_vm._v("清空选中")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("setSelection")]), _vm._v(" "), _c('td', [_vm._v("设置选中的值")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-762c8bba", module.exports)
  }
}

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1170),
  /* template */
  __webpack_require__(1591),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/view/table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-762c8bba", Component.options)
  } else {
    hotAPI.reload("data-v-762c8bba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});