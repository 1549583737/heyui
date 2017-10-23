webpackJsonp([33],{

/***/ 1163:
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

  methods: {},
  components: {}
};

/***/ }),

/***/ 1497:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Select 下拉选择")]), _vm._v(" "), _c('h3', [_vm._v("普通下拉选择")]), _vm._v(" "), _c('p', [_vm._v("对于对象数组的解析，系统默认使用"), _c('code', [_vm._v("key")]), _vm._v(", "), _c('code', [_vm._v("title")]), _vm._v("两个参数进行识别。可以通过全局配置修改两个参数名称，详情请参考"), _c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")])], 1), _vm._v(" "), _c('blockquote', [_vm._v("注意：如果datas传入的是"), _c('code', [_vm._v("{ 1:'a', 2:'b' }")]), _vm._v("这种数字key，选中的key值将全部转换为String, 建议使用"), _c('code', [_vm._v("[{ key: 1, title: 'a' }]")]), _vm._v("对象数据模式。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("禁用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select10"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("没有默认“请选择”选项")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多选")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("选择对象值")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多选对象值")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("限制数量")]), _vm._v(" "), _c('p', [_vm._v("最多选中2个")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select6"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select7"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("可筛选")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select11"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("可筛选多选")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select12"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("使用全局Dict")]), _vm._v(" "), _c('p', [_vm._v("Hey UI将提供数据字典的调用方式模型，并内置"), _c('code', [_vm._v("dictMapping")]), _vm._v("方法做展示。详情请至"), _c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")]), _vm._v("。")], 1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select8"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("文本类型的下拉")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/select9"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Select 参数")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("readonly")]), _vm._v(" "), _c('td', [_vm._v("是否只读")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("multiple")]), _vm._v(" "), _c('td', [_vm._v("是否多选")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("数据的格式")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("key, object")]), _vm._v(" "), _c('td', [_vm._v("key")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("选择的数据")]), _vm._v(" "), _c('td', [_vm._v("Array, Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dict")]), _vm._v(" "), _c('td', [_vm._v("调用全局定义的字典")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("limit")]), _vm._v(" "), _c('td', [_vm._v("限制只能选择多少个")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("nullOption")]), _vm._v(" "), _c('td', [_vm._v("是否有“请选择”选项")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("nullOptionText")]), _vm._v(" "), _c('td', [_vm._v("“请选择”文本选项")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("请选择")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("nullOptionText")]), _vm._v(" "), _c('td', [_vm._v("“请选择”文本选项")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("请选择")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("filterable")]), _vm._v(" "), _c('td', [_vm._v("是否有搜索框")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("autosize")]), _vm._v(" "), _c('td', [_vm._v("是否根据文字自适应宽度，默认为100%宽度")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("render")]), _vm._v(" "), _c('td', [_vm._v("下拉菜单的展示自定义")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("展示默认提示语")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("请选择")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41921ae9", module.exports)
  }
}

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1163),
  /* template */
  __webpack_require__(1497),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/plugin/select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41921ae9", Component.options)
  } else {
    hotAPI.reload("data-v-41921ae9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});