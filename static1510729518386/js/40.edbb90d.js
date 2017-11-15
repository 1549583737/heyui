webpackJsonp([40],{

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Timeline 时间轴")]), _vm._v(" "), _c('p', [_vm._v("时间线的方式展示信息。")]), _vm._v(" "), _c('h3', [_vm._v("示例")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/timeline1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("示例2")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/timeline2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Timeline 参数")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h3', [_vm._v("TimelineItem 参数")]), _vm._v(" "), _vm._m(3)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("展示时间轴，可以通过"), _c('code', [_vm._v("color")]), _vm._v("自定义标志颜色，"), _c('code', [_vm._v("icon")]), _vm._v("自定义icon，父级"), _c('code', [_vm._v("pending")]), _vm._v("设定最后一个加载样式。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("展示带左侧时间的时间轴，可以通过"), _c('code', [_vm._v(":time=\"true\"")]), _vm._v("设定展示左侧样式，"), _c('code', [_vm._v(":time-width=\"200\"")]), _vm._v("设定左侧宽度。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("time")]), _vm._v(" "), _c('td', [_vm._v("是否显示左侧")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("true,false")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("pending")]), _vm._v(" "), _c('td', [_vm._v("最后一个显示加载样式")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("true,false")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("timeWidth")]), _vm._v(" "), _c('td', [_vm._v("显示左侧的宽度")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("100")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("color")]), _vm._v(" "), _c('td', [_vm._v("时间轴颜色")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("blue,green,yellow,red,#******")]), _vm._v(" "), _c('td', [_vm._v("blue")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("icon")]), _vm._v(" "), _c('td', [_vm._v("图标")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("icon图标")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bd79e2b6", module.exports)
  }
}

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1658),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/view/timeline.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timeline.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd79e2b6", Component.options)
  } else {
    hotAPI.reload("data-v-bd79e2b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});