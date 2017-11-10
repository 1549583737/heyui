webpackJsonp([54],{

/***/ 1430:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Modal 弹出框")]), _vm._v(" "), _c('h3', [_vm._v("Js调用")]), _vm._v(" "), _c('h4', [_vm._v("使用方法调用Confirm")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal5"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("使用方法调用Modal")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal6"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("使用方法定义全屏的Modal")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal12"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("使用方法定义复杂的Modal")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal7"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Vue调用")]), _vm._v(" "), _c('h3', [_vm._v("普通的调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义的弹出框")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal10"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("无遮罩弹出框")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("点击遮罩无法关闭")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal3"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("打开垂直居中的弹出框")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal4"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("打开有分割线的弹出框")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal9"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("打开全屏的Modal")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal13"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Vue调用组件式的Modal")]), _vm._v(" "), _c('p', [_vm._v("系统开发中，我们经常使用到新增，编辑等功能性以及复用性很强的模块，这里我们提供modal的组件式调用，帮助开发中更好的编写。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal8"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Js调用组件式的Modal")]), _vm._v(" "), _c('p', [_vm._v("使用js调用弹出的组件式Modal，这样不仅方便参数的使用，还可以将js代码集成调用。")]), _vm._v(" "), _c('blockquote', [_vm._v("弹出框中使用的组件和上方Vue调用的组件是同一个，两种方式都能兼容。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "message/modal11"
    }
  }), _vm._v(" "), _c('blockquote', [_vm._v("弹出框中使用的代码")]), _vm._v(" "), _c('codes', {
    attrs: {
      "src": "/message/modalTest.vue",
      "type": "html"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Modal方法 参数")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("Modal组件 参数")]), _vm._v(" "), _vm._m(1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasCloseIcon")]), _vm._v(" "), _c('td', [_vm._v("是否有关闭的Icon")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasMask")]), _vm._v(" "), _c('td', [_vm._v("是否有遮罩层")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("content")]), _vm._v(" "), _c('td', [_vm._v("设定内容")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("width")]), _vm._v(" "), _c('td', [_vm._v("设定宽度")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasDivider")]), _vm._v(" "), _c('td', [_vm._v("是否有线条分割头部以及尾部")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置modal.hasDivider")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("closeOnMask")]), _vm._v(" "), _c('td', [_vm._v("是否点击遮罩层关闭modal")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("middle")]), _vm._v(" "), _c('td', [_vm._v("是否垂直居中展示")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("fullScreen")]), _vm._v(" "), _c('td', [_vm._v("是否全屏")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("buttons")]), _vm._v(" "), _c('td', [_vm._v("设定底层按钮")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("['cancel']")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("events")]), _vm._v(" "), _c('td', [_vm._v("事件监听")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasCloseIcon")]), _vm._v(" "), _c('td', [_vm._v("是否有关闭的Icon")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasMask")]), _vm._v(" "), _c('td', [_vm._v("是否有遮罩层")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasDivider")]), _vm._v(" "), _c('td', [_vm._v("是否有线条分割头部以及尾部")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("全局配置modal.hasDivider")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("closeOnMask")]), _vm._v(" "), _c('td', [_vm._v("是否点击遮罩层关闭modal")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("middle")]), _vm._v(" "), _c('td', [_vm._v("是否垂直居中展示")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("fullScreen")]), _vm._v(" "), _c('td', [_vm._v("是否全屏")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-173c9bdf", module.exports)
  }
}

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1430),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/message/modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-173c9bdf", Component.options)
  } else {
    hotAPI.reload("data-v-173c9bdf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});