webpackJsonp([19],{

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1371),
  /* template */
  __webpack_require__(1683),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide/config.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] config.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdfa76ce", Component.options)
  } else {
    hotAPI.reload("data-v-fdfa76ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1371:
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


exports.default = {
  data: function data() {
    return {};
  },

  methods: {},
  components: {}
};

/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("全局配置")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("在系统开发过程中，设定完整的字典库，以及集中autocomplete配置，tree配置，具体页面中，我们只使用调用。")]), _vm._v(" "), _c('h3', [_vm._v("全局字典")]), _vm._v(" "), _c('p', [_vm._v("我们的整体设计是从数据驱动交互，而在数据的交互过程中，去除简单的input输入，最多的是字典的选择。")]), _vm._v(" "), _c('h4', [_vm._v("字典定义")]), _vm._v(" "), _c('p', [_vm._v("系统中使用的字典，我们有两种方式可以定义字典。")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h4', [_vm._v("字典应用-组件")]), _vm._v(" "), _c('p', [_vm._v("我们将字典标准化，控件可以通过字典的key驱动，而交互无非是在通过不同的数据量选择不同的交互类型。")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h4', [_vm._v("字典应用-展示")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('ul', {
    staticClass: "text-ul"
  }, [_c('li', [_c('code', {
    domProps: {
      "innerHTML": _vm._s('{{value | dictMapping(key)}}')
    }
  }), _vm._v(": 展示对应的文本")])]), _vm._v(" "), _c('h4', [_vm._v("示例")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/demo2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("全局配置")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('h4', [_vm._v("dict")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "javascript"
    }
  }, [_vm._v("HeyUI.config('dict.keyName', \"key\");\nHeyUI.config('dict.titleName', \"title\");")]), _vm._v(" "), _c('h4', [_vm._v("tree")]), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/tree7"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("autocomplete")]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/autocomplete13"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("uploader, menu, modal, page, datepicker")]), _vm._v(" "), _vm._m(11)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("全局配置是属于"), _c('code', [_vm._v("HeyUI")]), _vm._v("最大的一个特性。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "text-ul"
  }, [_c('li', [_c('code', [_vm._v("HeyUI.initDict({key: value})")]), _vm._v(": 初始化字典对象")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("HeyUI.addDict(key, value)")]), _vm._v(" 添加字典")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("HeyUI.getDict(key)")]), _vm._v(": 获取字典值")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "text-ul"
  }, [_c('li', [_vm._v("1~5个选择项单选：Radio, 或者Select")]), _vm._v(" "), _c('li', [_vm._v("1~5个选择项多选：Checkbox, 或者Select(multiple)")]), _vm._v(" "), _c('li', [_vm._v("5~15个选择项单选/多选：Select")]), _vm._v(" "), _c('li', [_vm._v("15~40个选择项单选/多选：Select(filterable), 或者AutoComplete")]), _vm._v(" "), _c('li', [_vm._v("40个以上或者需要远程模糊查询：AutoComplete")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在一些展示的数据中，我们需要通过"), _c('code', [_vm._v("key/keys")]), _vm._v("获取对应的文本。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("通过"), _c('code', [_vm._v("HeyUI")]), _vm._v("可以对一些参数进行全局配置，具体配置项参考："), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui/blob/master/src/utils/config.js",
      "target": "_blank"
    }
  }, [_vm._v("config.js")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "text-ul"
  }, [_c('li', [_c('code', [_vm._v("HeyUI.config(key, value)")]), _vm._v(": 设置配置，"), _c('code', [_vm._v("key")]), _vm._v("可以是路径方式，例："), _c('code', [_vm._v("tree.default")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("HeyUI.getOption(key)")]), _vm._v(": 获取配置。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("设定全局字典的"), _c('code', [_vm._v("key")]), _vm._v(","), _c('code', [_vm._v("value")]), _vm._v("的命名。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("设定"), _c('code', [_vm._v("tree")]), _vm._v("的默认参数，以及定义系统中存在的不同tree的调用。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("系统化的配置请参考demo的"), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://github.com/heyui/heyui-demo/blob/master/src/js/config/tree-config.js"
    }
  }, [_vm._v("tree-config.js")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("设定"), _c('code', [_vm._v("autocomplete")]), _vm._v("的默认参数，以及定义系统中存在的不同autocomplete的调用。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("系统化的配置请参考demo的"), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://github.com/heyui/heyui-demo/blob/master/src/js/config/autocomplete-config.js"
    }
  }, [_vm._v("autocomplete-config.js")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("这些组件，我们都提供了一些参数可以进行配置，具体请查看"), _c('code', [_c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui/blob/master/src/utils/config.js",
      "target": "_blank"
    }
  }, [_vm._v("config.js")])]), _vm._v("文件")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fdfa76ce", module.exports)
  }
}

/***/ })

});