webpackJsonp([68],{

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("TimePicker 时间控件")]), _vm._v(" "), _c('h3', [_vm._v("普通选择时间控件")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/timepicker1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("时间控件禁用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/timepicker2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("控件选择范围控制")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/timepicker3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("DatePicker 参数")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("option 配置")]), _vm._v(" "), _vm._m(1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("类型")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("date")]), _vm._v(" "), _c('td', [_vm._v("year, month, week, datetime, datehour")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("option")]), _vm._v(" "), _c('td', [_vm._v("配置项，详细参见下面的option说明")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("format")]), _vm._v(" "), _c('td', [_vm._v("自定义数据的格式")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasSeconds")]), _vm._v(" "), _c('td', [_vm._v("当选择日期时间时，是否自动格式化到秒")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("noBorder")]), _vm._v(" "), _c('td', [_vm._v("是否有边框，适用于文字的下拉选择")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("展示默认提示语")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("请选择")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("start")]), _vm._v(" "), _c('td', [_vm._v("开始时间")]), _vm._v(" "), _c('td', [_vm._v("Function, Object, String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("end")]), _vm._v(" "), _c('td', [_vm._v("结束时间")]), _vm._v(" "), _c('td', [_vm._v("Function, Object, String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("不可选日期配置")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("shortcuts")]), _vm._v(" "), _c('td', [_vm._v("自定义快捷方式")]), _vm._v(" "), _c('td', [_vm._v("[String, Object]")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("minuteStep")]), _vm._v(" "), _c('td', [_vm._v("分钟的间隔")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("5")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hours")]), _vm._v(" "), _c('td', [_vm._v("自定义可选的小时")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("minutes")]), _vm._v(" "), _c('td', [_vm._v("自定义可选的分钟")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c77b8d0c", module.exports)
  }
}

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1656),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/plugin/time.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] time.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c77b8d0c", Component.options)
  } else {
    hotAPI.reload("data-v-c77b8d0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});