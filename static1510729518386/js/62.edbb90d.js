webpackJsonp([62],{

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Form 表单")]), _vm._v(" "), _c('h3', [_vm._v("基本")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/form1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("三种排版以及验证")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('blockquote', [_vm._v("注意：当使用"), _c('code', [_vm._v("for")]), _vm._v("循环组件的时候，请使用"), _c('code', [_vm._v("FormItemList")]), _vm._v("组件对"), _c('code', [_vm._v("FormItem")]), _vm._v("添加一层嵌套，防止"), _c('code', [_vm._v("FormItem")]), _vm._v("在同一个parent下没有使用key作为唯一值引用而产生BUG。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/form3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("只读的表单")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/form2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("修改密码验证")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/form4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Inline模式")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/form5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("不同的组合样式2")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "form/form6"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Form 参数")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h3', [_vm._v("Form 方法")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('h3', [_vm._v("FormItem 参数")]), _vm._v(" "), _vm._m(4)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Form提供三种排列方式: "), _c('code', [_vm._v("single")]), _vm._v("一个FormItem一行, "), _c('code', [_vm._v("block")]), _vm._v("标题独立一行, "), _c('code', [_vm._v("twocolumn")]), _vm._v("两列一行。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在"), _c('code', [_vm._v("twocolumn")]), _vm._v("的排列的方式下，对"), _c('code', [_vm._v("FormItem")]), _vm._v("添加"), _c('code', [_vm._v("block")]), _vm._v("参数即可列为一行，主要针对"), _c('code', [_vm._v("textarea")]), _vm._v("这种不定行高的对象。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("mode")]), _vm._v(" "), _c('td', [_vm._v("排版模式")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("inline,single,twocolumn")]), _vm._v(" "), _c('td', [_vm._v("single")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("model")]), _vm._v(" "), _c('td', [_vm._v("关联的model模型，用于数据validator。详情至"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/hey-validator",
      "target": "_blank"
    }
  }, [_vm._v("hey-validator")])]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("labelWidth")]), _vm._v(" "), _c('td', [_vm._v("说明文字的宽度")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("80")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("no-valid")]), _vm._v(" "), _c('td', [_vm._v("只读的表单")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("rules")]), _vm._v(" "), _c('td', [_vm._v("数据validator规则。详情至"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/hey-validator",
      "target": "_blank"
    }
  }, [_vm._v("hey-validator")])]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("labelPosition")]), _vm._v(" "), _c('td', [_vm._v("说明文字的位置")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("left,right")]), _vm._v(" "), _c('td', [_vm._v("right")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("top")]), _vm._v(" "), _c('td', [_vm._v("错误的时候滑动到错误input的位置")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("0-1，百分比")]), _vm._v(" "), _c('td', [_vm._v("0.5")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("topOffset")]), _vm._v(" "), _c('td', [_vm._v("错误的时候滑动到错误input的位置的高度位移")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("0")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("方法名")]), _vm._v(" "), _c('th', [_vm._v("说明")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("valid")]), _vm._v(" "), _c('td', [_vm._v("valid( ): 整体验证表单")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("validField")]), _vm._v(" "), _c('td', [_vm._v("validField( prop ): 整体个体字段")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("reset")]), _vm._v(" "), _c('td', [_vm._v("reset( ): 重置验证")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("label")]), _vm._v(" "), _c('td', [_vm._v("文字")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("prop")]), _vm._v(" "), _c('td', [_vm._v("关联的model中对应的字段，可以自动做required属性判断，用于数据validator。详情至"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/hey-validator",
      "target": "_blank"
    }
  }, [_vm._v("hey-validator")])]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("showLabel")]), _vm._v(" "), _c('td', [_vm._v("是否显示label")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("required")]), _vm._v(" "), _c('td', [_vm._v("当一个label针对的输入比较复杂时，可以单独设置，只做必填样式的展示。")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("single")]), _vm._v(" "), _c('td', [_vm._v("是否为独立一行，主要是在"), _c('code', [_vm._v("twocolumn")]), _vm._v("模式下使用，适用于"), _c('code', [_vm._v("textarea")]), _vm._v("这种不定高度的模块。")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("false")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a54f172e", module.exports)
  }
}

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(1624),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/form/form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a54f172e", Component.options)
  } else {
    hotAPI.reload("data-v-a54f172e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});