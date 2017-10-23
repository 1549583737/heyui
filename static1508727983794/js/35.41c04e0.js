webpackJsonp([35],{

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _manba = __webpack_require__(81);

var _manba2 = _interopRequireDefault(_manba);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return (0, _defineProperty3.default)({
      value1: {},
      value2: {},
      value3: {},
      value4: {},
      value7: {},
      value8: {},
      param7: {
        minuteStep: 4
      },
      value6: {},
      param6: {
        hours: function hours() {
          var hours = [];
          for (var i = 9; i <= 20; i++) {
            hours.push(i);
          }
          return hours;
        },
        minutes: function minutes(hour) {
          var minutes = [];
          if (hour < 12) {
            minutes.push(7, 15, 23, 17, 34, 47, 58);
          } else {
            minutes.push(1, 3, 34, 45, 46, 47, 52);
          }
          return minutes;
        }
      },
      value5: {},
      param2: {
        paramName: {
          start: 'min',
          end: 'max'
        }
      },
      param3: {
        start: (0, _manba2.default)().add(-1, _manba2.default.DAY),
        end: (0, _manba2.default)().add(46, _manba2.default.DAY)
      }
    }, 'param2', {
      shortcuts: [{
        title: '近三天',
        value: function value() {
          return {
            start: (0, _manba2.default)().add(-3, _manba2.default.DAY),
            end: (0, _manba2.default)()
          };
        }
      }]
    });
  },

  methods: {
    changeParam: function changeParam() {
      this.param.start = "2017-02-01 12:34";
      this.param.end = "2017-06-03 12:34";
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("DateTimePicker 日期范围控件")]), _vm._v(" "), _c('h3', [_vm._v("普通选择日期范围控件")]), _vm._v(" "), _c('p', [_vm._v("数据默认使用{start,end}的对象，同时也可以自定义参数。详情请参考"), _c('router-link', {
    attrs: {
      "to": "/guide/config"
    }
  }, [_vm._v("全局配置")])], 1), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/daterangepicker1"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("日期时间范围禁用")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/daterangepicker4"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("控件开始结束范围控制")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/daterangepicker5"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("快捷方式")]), _vm._v(" "), _c('p', [_vm._v("快捷方式定义与日期控件一致，同时也可以使用全局配置的方式使用。")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/daterangepicker6"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("日期控件单独选择开始结束")]), _vm._v(" "), _c('p', [_vm._v("针对一些可选开始或者结束日期的需求，可以通过start，end参数控制。")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/daterangepicker2"
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("选择日期时间范围控件")]), _vm._v(" "), _c('div', [_c('example', {
    attrs: {
      "demo": "dataplugins/daterangepicker3"
    }
  })], 1), _vm._v(" "), _c('h4', [_vm._v("超级日期选择器")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/daterangepicker8"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("DatePicker 参数")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("option 配置")]), _vm._v(" "), _vm._m(1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("类型")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("date")]), _vm._v(" "), _c('td', [_vm._v("date, datetime, datehour")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("option")]), _vm._v(" "), _c('td', [_vm._v("配置项，详细参见下面的option说明")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("format")]), _vm._v(" "), _c('td', [_vm._v("自定义数据的格式")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hasSeconds")]), _vm._v(" "), _c('td', [_vm._v("当选择日期时间时，是否自动格式化到秒")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("noBorder")]), _vm._v(" "), _c('td', [_vm._v("是否有边框，适用于文字的下拉选择")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("展示默认提示语")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("请选择")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("separate")]), _vm._v(" "), _c('td', [_vm._v("是否单独选择开始结束时间")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("start")]), _vm._v(" "), _c('td', [_vm._v("开始时间")]), _vm._v(" "), _c('td', [_vm._v("Function, Object, String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("end")]), _vm._v(" "), _c('td', [_vm._v("结束时间")]), _vm._v(" "), _c('td', [_vm._v("Function, Object, String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("不可选日期配置")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("shortcuts")]), _vm._v(" "), _c('td', [_vm._v("自定义快捷方式")]), _vm._v(" "), _c('td', [_vm._v("[String, Object]")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("minuteStep")]), _vm._v(" "), _c('td', [_vm._v("分钟的间隔")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("5")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hours")]), _vm._v(" "), _c('td', [_vm._v("自定义可选的小时")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("minutes")]), _vm._v(" "), _c('td', [_vm._v("自定义可选的分钟")]), _vm._v(" "), _c('td', [_vm._v("Function")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3164cbf2", module.exports)
  }
}

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1161),
  /* template */
  __webpack_require__(1472),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/plugin/daterange.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] daterange.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3164cbf2", Component.options)
  } else {
    hotAPI.reload("data-v-3164cbf2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});