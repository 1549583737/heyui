webpackJsonp([25],{

/***/ 1173:
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


exports.default = {
  data: function data() {
    return {};
  },

  methods: {
    getTarget: function getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};

/***/ }),

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("BackTop 返回顶部")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "other/backtotop1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义样式与内容")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "other/backtotop2"
    }
  }), _vm._v(" "), _c('p', [_vm._v("样式：")]), _vm._v(" "), _c('codes', {
    attrs: {
      "src": "/codes/backtop1.txt",
      "type": "less"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (10),
      expression: "10"
    }]
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (1000),
      expression: "1000"
    }, {
      name: "bg-color",
      rawName: "v-bg-color:gray4",
      arg: "gray4"
    }, {
      name: "padding",
      rawName: "v-padding",
      value: (20),
      expression: "20"
    }],
    staticClass: "text-center"
  }, [_vm._v("\n    撑高页面\n  ")]), _vm._v(" "), _c('h3', [_vm._v("BackTop 参数")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("target")]), _vm._v(" "), _c('td', [_vm._v("针对的对象")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("window.document")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("bottom")]), _vm._v(" "), _c('td', [_vm._v("底部的位移")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("50")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("right")]), _vm._v(" "), _c('td', [_vm._v("右侧的位移")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("50")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5544396e", module.exports)
  }
}

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1173),
  /* template */
  __webpack_require__(1534),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/other/backtop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] backtop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5544396e", Component.options)
  } else {
    hotAPI.reload("data-v-5544396e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});