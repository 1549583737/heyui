webpackJsonp([9],{

/***/ 1157:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Grid 布局")]), _vm._v(" "), _c('p', [_vm._v("我们采用标准的24格布局容器，利用容器完成简单的网络布局。")]), _vm._v(" "), _c('h3', [_vm._v("基本的排版")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/grid1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("组件排版")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('blockquote', [_vm._v("注意：当使用非字符串模式的时候，请使用"), _c('code', [_vm._v("h-row")]), _vm._v(","), _c('code', [_vm._v("h-col")]), _vm._v("，详情请参考"), _c('a', {
    attrs: {
      "href": "https://cn.vuejs.org/v2/guide/components.html#组件命名约定",
      "target": "_blank"
    }
  }, [_vm._v("vue组件命名约定")])]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/grid2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("区块间隔")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('blockquote', [_vm._v("我们使用的并非是栅格的排列布局，所以可以对循环的区块做布局。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/grid3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("横向，竖向区块间隔")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/grid4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Flex布局")]), _vm._v(" "), _c('p', [_vm._v("Flex布局主要使用在flex自适应的场景中。")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/grid5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("自适应布局")]), _vm._v(" "), _c('p', [_vm._v("实现响应式设计，利用五个尺寸：xs, sm, md, lg, xl。")]), _vm._v(" "), _c('p', [_vm._v("max-768px, 768px, 992px,1200px , min-1800px")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "basic/grid6"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Row 参数")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('h3', [_vm._v("Col 参数")]), _vm._v(" "), _vm._m(5)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("利用基本的class"), _c('code', [_vm._v(".h-col-{n}")]), _vm._v("进行排版布局。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("利用组件"), _c('code', [_vm._v("Row")]), _vm._v(","), _c('code', [_vm._v("Col")]), _vm._v("进行排版布局，通过"), _c('code', [_vm._v("width")]), _vm._v("设定宽度。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("通过给"), _c('code', [_vm._v("Row")]), _vm._v("添加"), _c('code', [_vm._v("space")]), _vm._v("属性，让"), _c('code', [_vm._v("Col")]), _vm._v("产生间距。间距可以设置为任意整数数值。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("通过给"), _c('code', [_vm._v("Row")]), _vm._v("添加"), _c('code', [_vm._v("space-x")]), _vm._v(","), _c('code', [_vm._v("space-y")]), _vm._v("属性，让"), _c('code', [_vm._v("Col")]), _vm._v("产生间距。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("模式")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("flex")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("space")]), _vm._v(" "), _c('td', [_vm._v("区块间隔")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("space-x")]), _vm._v(" "), _c('td', [_vm._v("横向区块间隔")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("space-y")]), _vm._v(" "), _c('td', [_vm._v("竖向区块间隔")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("direction")]), _vm._v(" "), _c('td', [_vm._v("flex布局区块方向")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("row, column, row-reverse, column-reverse")]), _vm._v(" "), _c('td', [_vm._v("row")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("justify")]), _vm._v(" "), _c('td', [_vm._v("flex布局区块排列方式")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("start, end, center, space-around, space-between")]), _vm._v(" "), _c('td', [_vm._v("start")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("align")]), _vm._v(" "), _c('td', [_vm._v("flex布局区块对齐方式")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("top, middle, bottom")]), _vm._v(" "), _c('td', [_vm._v("top")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("width")]), _vm._v(" "), _c('td', [_vm._v("比例")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("1至24")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("flex")]), _vm._v(" "), _c('td', [_vm._v("flex模式下的flex值")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("xs")]), _vm._v(" "), _c('td', [_vm._v("自适应模式下大屏幕的显示比例")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("sm")]), _vm._v(" "), _c('td', [_vm._v("自适应模式下中大屏幕的显示比例")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("md")]), _vm._v(" "), _c('td', [_vm._v("自适应模式下中小屏幕的显示比例")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("r-w")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("lg")]), _vm._v(" "), _c('td', [_vm._v("自适应模式下小屏幕的显示比例")]), _vm._v(" "), _c('td', [_vm._v("number")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("-")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bf33ec86", module.exports)
  }
}

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1157),
  /* template */
  __webpack_require__(1654),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/basic/grid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] grid.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bf33ec86", Component.options)
  } else {
    hotAPI.reload("data-v-bf33ec86", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});