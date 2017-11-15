webpackJsonp([12],{

/***/ 1160:
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

exports.default = {
  data: function data() {
    return {
      list: ['h-icon-info', 'h-icon-warn', 'h-icon-success', 'h-icon-error', 'h-icon-close', 'h-icon-down', 'h-icon-left', 'h-icon-top', 'h-icon-right', 'h-icon-inbox', 'h-icon-outbox', 'h-icon-plus', 'h-icon-minus', 'h-icon-check', 'h-icon-calendar', 'h-icon-loading', 'h-icon-spinner', 'h-icon-completed', 'h-icon-refresh', 'h-icon-home', 'h-icon-user', 'h-icon-task', 'h-icon-message', 'h-icon-fullscreen', 'h-icon-menu', 'h-icon-link', 'h-icon-trash', 'h-icon-users', 'h-icon-complete', 'h-icon-bell', 'h-icon-search', 'h-icon-star', 'h-icon-star-on', 'h-icon-setting', 'h-icon-calendar', 'h-icon-upload', 'h-icon-github', 'h-icon-edit', 'h-icon-location']
    };
  }
};

/***/ }),

/***/ 1385:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Icon 图标")]), _vm._v(" "), _c('p', [_vm._v("我们采用了一套最基本的icon库。")]), _vm._v(" "), _c('h3', [_vm._v("简单的调用")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/icon"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("图标库")]), _vm._v(" "), _c('Row', {
    attrs: {
      "space": 15
    }
  }, _vm._l((_vm.list), function(n) {
    return _c('Col', {
      key: n,
      attrs: {
        "xs": 12,
        "sm": 12,
        "md": 6,
        "lg": 4,
        "xl": 3
      }
    }, [_c('div', [_c('p', [_c('i', {
      class: n
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(n))])])])
  }))], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("利用基本的class"), _c('code', [_vm._v(".h-icon-{name}")]), _vm._v("进行调用")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6174e970", module.exports)
  }
}

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1385)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1160),
  /* template */
  __webpack_require__(1548),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6174e970",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/basic/icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6174e970", Component.options)
  } else {
    hotAPI.reload("data-v-6174e970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});