webpackJsonp([71],{

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("DatePicker 日期控件")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("普通选择日期控件")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker1"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("日期控件禁用")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker2"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("日期格式自定义")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker3"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("不同类型的选择控件")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker5"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("选择周控件")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker10"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("快捷方式")]), _vm._v(" "), _c('p', [_vm._v("可以通过全局定义配置好快捷方式，这里只做key的调用，或者自己定义函数返回。全局配置详情请参考"), _c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")])], 1), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker6"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("控件范围控制")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker7"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("文本选择")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker8"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("Inline模式")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/datepicker9"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("DatePicker 参数")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h3', [_vm._v("option 配置")]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("日期控件使用了基本日期工具"), _c('a', {
    attrs: {
      "href": "http://manba.ch-un.com",
      "target": "_blank"
    }
  }, [_vm._v("manba")]), _vm._v("，支持option的参数"), _c('code', [_vm._v("start")]), _vm._v("，"), _c('code', [_vm._v("end")]), _vm._v("使用manba日期对象。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("类型")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("date")]), _vm._v(" "), _c('td', [_vm._v("year, month, week, datetime, datehour, week")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("option")]), _vm._v(" "), _c('td', [_vm._v("配置项，详细参见下面的option说明")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("format")]), _vm._v(" "), _c('td', [_vm._v("自定义数据的格式")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasSeconds")]), _vm._v(" "), _c('td', [_vm._v("当选择日期时间时，是否自动格式化到秒")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("noBorder")]), _vm._v(" "), _c('td', [_vm._v("是否有边框，适用于文字的下拉选择")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("展示默认提示语")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("请选择")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("startWeek")]), _vm._v(" "), _c('td', [_vm._v("选择周的时候，设定星期的开始日")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("1, 2, 3, 4, 5, 6, 7")]), _vm._v(" "), _c('td', [_vm._v("1")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("readonly")]), _vm._v(" "), _c('td', [_vm._v("输入框是否只读")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("start")]), _vm._v(" "), _c('td', [_vm._v("开始时间")]), _vm._v(" "), _c('td', [_vm._v("Function, Object, String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("end")]), _vm._v(" "), _c('td', [_vm._v("结束时间")]), _vm._v(" "), _c('td', [_vm._v("Function, Object, String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("不可选日期配置")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("shortcuts")]), _vm._v(" "), _c('td', [_vm._v("自定义快捷方式")]), _vm._v(" "), _c('td', [_vm._v("[String, Object]")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fa21044a", module.exports)
  }
}

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1677),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/plugin/date.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] date.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa21044a", Component.options)
  } else {
    hotAPI.reload("data-v-fa21044a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});