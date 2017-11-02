webpackJsonp([46],{

/***/ 1617:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Tree 树")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多选，选择模式为ALL")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多选，选择模式为SOME")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多选，选择模式为INDEPENDENT")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree8"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("搜索")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("全部数据异步加载")]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("分步异步加载")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree6"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("全局配置调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree7"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Tree 参数")]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('h3', [_vm._v("Tree 事件")]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('h3', [_vm._v("option 配置")]), _vm._v(" "), _vm._m(10)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在传递的param参数中，定义基本的数据字段："), _c('code', [_vm._v("keyName")]), _vm._v(", "), _c('code', [_vm._v("parentName")]), _vm._v(", "), _c('code', [_vm._v("titleName")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("设定数据模式："), _c('code', [_vm._v("dataMode")]), _vm._v(", 当传递的数据为有key,parent字段的list，则传递"), _c('code', [_vm._v("list")]), _vm._v("，组件会根据key,parent字段自动计算树模型(parent可以是数组对应)，如果传递的数据本身就是树模型，则传递"), _c('code', [_vm._v("tree")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('code', [_vm._v("chooseMode")]), _vm._v(": all, 只有子集全选的时候，才会选中父级，如果父级选择，返回数据则只返回父级，子集不返回。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('code', [_vm._v("chooseMode")]), _vm._v(": some, 只要子集选中，父级即选中，返回数据为所有选中数据。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('code', [_vm._v("chooseMode")]), _vm._v(": independent, 父级子级的选择不相关，最终中返回已选择的数据。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在传递的param参数中，定义字段："), _c('code', [_vm._v("getTotalDatas")]), _vm._v("获取异步返回的数据，这里的数据属于一次性返回。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在传递的param参数中，定义字段："), _c('code', [_vm._v("getDatas")]), _vm._v("获取异步返回的数据，这里的数据属于每个层级返回。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("分步异步加载不推荐有"), _c('code', [_vm._v("multiple")]), _vm._v("模式，分步异步加载请尽量使用在单个选择模式下。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("chooseMode")]), _vm._v(" "), _c('td', [_vm._v("checkbox选择模式")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("all, some, independent")]), _vm._v(" "), _c('td', [_vm._v("all")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("option")]), _vm._v(" "), _c('td', [_vm._v("配置项，详细参见下面的option说明")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("multiple")]), _vm._v(" "), _c('td', [_vm._v("多选")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("filterable")]), _vm._v(" "), _c('td', [_vm._v("是否可以搜索")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("config")]), _vm._v(" "), _c('td', [_vm._v("使用全局配置的方法")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("input")]), _vm._v(" "), _c('td', [_vm._v("v-model值变化")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("choose")]), _vm._v(" "), _c('td', [_vm._v("checkbox选择变化")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("select")]), _vm._v(" "), _c('td', [_vm._v("tree的select变化")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("open")]), _vm._v(" "), _c('td', [_vm._v("当tree打开变化")]), _vm._v(" "), _c('td')])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("keyName")]), _vm._v(" "), _c('td', [_vm._v("数据的key对应字段")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置"), _c('code', [_vm._v("tree.default.keyName")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("titleName")]), _vm._v(" "), _c('td', [_vm._v("数据的title对应字段")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置"), _c('code', [_vm._v("tree.default.titleName")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("parentName")]), _vm._v(" "), _c('td', [_vm._v("数据的parent对应字段")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置"), _c('code', [_vm._v("tree.default.parentName")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dataMode")]), _vm._v(" "), _c('td', [_vm._v("提供的数据类型，是平铺需要解析的列表，还是已经生成好的tree数据")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("list, tree")]), _vm._v(" "), _c('td', [_vm._v("list")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("用于tree展示的数据")]), _vm._v(" "), _c('td', [_vm._v("Array, Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("[]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getTotalDatas")]), _vm._v(" "), _c('td', [_vm._v("异步获取用于tree展示的数据，一次性全部加载")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("getDatas")]), _vm._v(" "), _c('td', [_vm._v("异步获取用于tree展示的数据，每一次单击获取子集")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-951c6f98", module.exports)
  }
}

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1617),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/plugin/tree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-951c6f98", Component.options)
  } else {
    hotAPI.reload("data-v-951c6f98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});