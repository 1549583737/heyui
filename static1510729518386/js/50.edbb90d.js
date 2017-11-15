webpackJsonp([50],{

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("DropdownMenu 下拉菜单")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('blockquote', [_vm._v("由于该样式应用在组件中，所以在调用的"), _c('code', [_vm._v("vue")]), _vm._v("文件中，"), _c('code', [_vm._v("style")]), _vm._v("的"), _c('code', [_vm._v("scope")]), _vm._v("属性将无效。")]), _vm._v(" "), _c('h3', [_vm._v("基本调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不同参数调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("组合调用")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu9"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不同位置")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不同的触发方式")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不默认添加右侧的icon")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("和dom同样宽度")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu6"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自定义宽度")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu7"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("添加未读数")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "plugins/dropdownmenu8"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("DropdownMenu 参数")]), _vm._v(" "), _vm._m(4)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("DropdownCustom可以添加自定义的"), _c('code', [_vm._v("className")]), _vm._v("定义各种不同的模式的下拉菜单，"), _c('code', [_vm._v("className")]), _vm._v("将应用在"), _c('code', [_vm._v(".h-dropdownmenu-show")]), _vm._v("上，该dom为触发下拉的元素，包含自定义的内容以及右侧展示状态的icon。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("提示：系统自带一个"), _c('code', [_vm._v("h-text-dropdown")]), _vm._v("的样式。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('code', [_vm._v("placement")]), _vm._v(": top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('code', [_vm._v("trigger")]), _vm._v(": hover, click")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("datas")]), _vm._v(" "), _c('td', [_vm._v("选择的数据")]), _vm._v(" "), _c('td', [_vm._v("Array, Object")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("dict")]), _vm._v(" "), _c('td', [_vm._v("调用全局定义的字典")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("trigger")]), _vm._v(" "), _c('td', [_vm._v("触发方式")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("click, hover, focus")]), _vm._v(" "), _c('td', [_vm._v("click")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("equalWidth")]), _vm._v(" "), _c('td', [_vm._v("是否和触发的dom等宽")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("是否禁用")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("toggleIcon")]), _vm._v(" "), _c('td', [_vm._v("是否显示展示状态的icon")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("true")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("width")]), _vm._v(" "), _c('td', [_vm._v("自定义menu的宽度")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placement")]), _vm._v(" "), _c('td', [_vm._v("menu显示的位置")]), _vm._v(" "), _c('td', [_vm._v("Stirng")]), _vm._v(" "), _c('td', [_vm._v("top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end")]), _vm._v(" "), _c('td', [_vm._v("bottom-start")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("showCount")]), _vm._v(" "), _c('td', [_vm._v("menu是否显示未读标志数")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("maxCount")]), _vm._v(" "), _c('td', [_vm._v("未读标志数最大数字")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("99")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("className")]), _vm._v(" "), _c('td', [_vm._v("为点击触发的dom添加class")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6b3b32f4", module.exports)
  }
}

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1574),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/plugin/dropdownmenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropdownmenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b3b32f4", Component.options)
  } else {
    hotAPI.reload("data-v-6b3b32f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});