webpackJsonp([8],{

/***/ 1375:
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


exports.default = {
  data: function data() {
    return {};
  },

  methods: {},
  components: {}
};

/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("关于HeyUI")]), _vm._v(" "), _c('p', [_vm._v("HeyUI 是一套基于 Vue2.0 的开源 UI 组件库，主要服务于一些中后台产品。")]), _vm._v(" "), _c('h3', [_vm._v("特性")]), _vm._v(" "), _c('p', [_vm._v("HeyUI提供的是一整套解决方案，所有的组件提供全局的可配置模式。")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("安装")]), _vm._v(" "), _c('p', [_vm._v("推荐使用 npm 的方式安装。")]), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "sh"
    }
  }, [_vm._v("npm install heyui")]), _vm._v(" "), _c('h3', [_vm._v("示例")]), _vm._v(" "), _c('p', [_vm._v("通过引用HeyUI，我们可以简单的写出一个应用界面。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/demo"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("支持环境")]), _vm._v(" "), _c('p', [_vm._v("现代浏览器和 IE9 及以上。")]), _vm._v(" "), _c('h3', [_vm._v("兼容")]), _vm._v(" "), _c('p', [_vm._v("HeyUI支持 Vue.js 2.x版本")]), _vm._v(" "), _c('h3', [_vm._v("相关链接")]), _vm._v(" "), _vm._m(1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "text-ul"
  }, [_c('li', [_vm._v("真正的数据驱动")]), _vm._v(" "), _c('li', [_vm._v("全局的配置模式")]), _vm._v(" "), _c('li', [_vm._v("数据字典化")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "text-ul"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "https://vuejs.org/"
    }
  }, [_vm._v("Vue官方文档")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/heyui/hey-cli"
    }
  }, [_vm._v("Hey-Cli脚手架")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://demo.heyui.top"
    }
  }, [_vm._v("官方demo")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0b4ec816", module.exports)
  }
}

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1375),
  /* template */
  __webpack_require__(1405),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide/guide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b4ec816", Component.options)
  } else {
    hotAPI.reload("data-v-0b4ec816", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});