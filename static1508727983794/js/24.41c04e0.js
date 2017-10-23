webpackJsonp([24],{

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


/***/ }),

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Category 分类选择")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/category1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("对象调用")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/category2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("字典配置")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/category3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Category 参数")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('h3', [_vm._v("option 配置")]), _vm._v(" "), _vm._m(5)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在传递的param参数中，定义基本的数据字段："), _c('code', [_vm._v("keyName")]), _vm._v(", "), _c('code', [_vm._v("parentName")]), _vm._v(", "), _c('code', [_vm._v("titleName")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("设定数据模式："), _c('code', [_vm._v("dataMode")]), _vm._v(", 当传递的数据为有key,parent字段的list，则传递"), _c('code', [_vm._v("list")]), _vm._v("，组件会根据key,parent字段自动计算树模型(parent可以是数组对应)，如果传递的数据本身就是树模型，则传递"), _c('code', [_vm._v("tree")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在传递的param参数中，定义基本的数据字段："), _c('code', [_vm._v("keyName")]), _vm._v(", "), _c('code', [_vm._v("parentName")]), _vm._v(", "), _c('code', [_vm._v("titleName")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("设定数据模式："), _c('code', [_vm._v("dataMode")]), _vm._v(", 当传递的数据为有key,parent字段的list，则传递"), _c('code', [_vm._v("list")]), _vm._v("，组件会根据key,parent字段自动计算树模型，如果传递的数据本身就是树模型，则传递"), _c('code', [_vm._v("tree")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("数据类型")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("key,object")]), _vm._v(" "), _c('td', [_vm._v("key")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("option")]), _vm._v(" "), _c('td', [_vm._v("配置项，详细参见下面的option说明")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("multiple")]), _vm._v(" "), _c('td', [_vm._v("多选")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("filterable")]), _vm._v(" "), _c('td', [_vm._v("是否可以搜索")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("config")]), _vm._v(" "), _c('td', [_vm._v("使用全局配置的方法")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("keyName")]), _vm._v(" "), _c('td', [_vm._v("数据的key对应字段")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置"), _c('code', [_vm._v("category.default.keyName")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("titleName")]), _vm._v(" "), _c('td', [_vm._v("数据的title对应字段")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置"), _c('code', [_vm._v("category.default.titleName")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("parentName")]), _vm._v(" "), _c('td', [_vm._v("数据的parent对应字段")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置"), _c('code', [_vm._v("category.default.parentName")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dataMode")]), _vm._v(" "), _c('td', [_vm._v("提供的数据类型，是平铺需要解析的列表，还是已经生成好的tree数据")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("list, tree")]), _vm._v(" "), _c('td', [_vm._v("list")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("用于tree展示的数据")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("[]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getTotalDatas")]), _vm._v(" "), _c('td', [_vm._v("异步获取用于tree展示的数据，一次性全部加载")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getDatas")]), _vm._v(" "), _c('td', [_vm._v("异步获取用于tree展示的数据，每一次单击获取子集")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f65b294", module.exports)
  }
}

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1172),
  /* template */
  __webpack_require__(1468),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/plugin/category.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] category.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f65b294", Component.options)
  } else {
    hotAPI.reload("data-v-2f65b294", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});