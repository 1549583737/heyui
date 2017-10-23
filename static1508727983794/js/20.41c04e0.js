webpackJsonp([20],{

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1369),
  /* template */
  __webpack_require__(1533),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58e3fe48", Component.options)
  } else {
    hotAPI.reload("data-v-58e3fe48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1369:
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


exports.default = {
  data: function data() {
    return {
      pass: '',
      error: false
    };
  },

  methods: {}
};

/***/ }),

/***/ 1533:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-start"
  }, [_c('com-frame', {
    staticClass: "page-body"
  }, [_c('div', {
    slot: "left-frame"
  }, [_c('ul', [_c('ul', [_c('li', {
    staticClass: "gray-color"
  }, [_vm._v("Version：1.0 beta")]), _vm._v(" "), _c('li', [_c('router-link', {
    class: {
      'router-link-active': _vm.$route.name == 'guide'
    },
    attrs: {
      "to": "/guide/guide"
    }
  }, [_vm._v("入门")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/guide/quickstart"
    }
  }, [_vm._v("快速上手")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/guide/themes"
    }
  }, [_vm._v("更换主题")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/guide/logs"
    }
  }, [_vm._v("更新日志")])], 1)])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-58e3fe48", module.exports)
  }
}

/***/ })

});