webpackJsonp([16],{

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1374),
  /* template */
  __webpack_require__(1574),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide/themes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] themes.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-713b0121", Component.options)
  } else {
    hotAPI.reload("data-v-713b0121", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1374:
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


exports.default = {
  data: function data() {
    return {};
  },

  methods: {},
  components: {}
};

/***/ }),

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("更换主题")]), _vm._v(" "), _c('p', [_vm._v("我们的样式使用的是less语言，我们定义了一些全局使用的变量")]), _vm._v(" "), _c('p', [_vm._v("您可以通过修改这些变量，达到变换样式的需求。")]), _vm._v(" "), _c('h3', [_vm._v("更换方法")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("全局变量说明")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', [_vm._v("下面代码中的参数，你可以按照自己的设计修改，达成设定系统主题的目的。")]), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "less"
    }
  }, [_vm._v("\n// Color\n@primary-color : #3399ff;\n@link-color : @primary-color;\n@blue-color : #3B91FF; //info\n@green-color : #13CE66; //success\n@yellow-color : #FFAE00; //warn\n@red-color : #E11617; //error\n@white-color : #ffffff;\n\n//Gray 1-4 more shallow\n@dark-color: #333333;\n@gray-color: #808080;\n@gray1-color: #d3d3d3;\n@gray2-color: #eeeeee;\n@gray3-color: #f3f3f3;\n@gray4-color: #f9f9f9;\n\n//hover\n@hover-background-color: lighten(@primary-color, 37%);\n\n//tag\n@tag-background-color: lighten(@primary-color, 37%);\n@tag-color: @primary-color;\n\n//font-size\n@font-size : 14px;\n@font-size-mini : 13px;\n@font-size-input : @font-size-mini;\n@font-size-input-tag : 12px;\n@font-size-badge : 12px;\n\n\n@font-family : \"Helvetica Neue\",Helvetica,\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei\",\"微软雅黑\",Arial,sans-serif;\n@line-height : 1.5;\n@line-height-computed : floor((@font-size * @line-height));\n\n// Input\n@input-height : 30px;\n\n//border\n@border-color: @gray2-color;\n@border: 1px solid @gray2-color;\n\n//disabled\n@disabled-cursor: not-allowed;\n@disabled-color: @gray-color;\n@disabled-border-color: @gray1-color;\n@disabled-background-color: @gray4-color;\n\n//radius\n@border-radius : 4px;\n@btn-border-radius: 4px;\n\n//box-shadow\n@box-shadow-button: 0 1px 1px 0 @gray2-color;\n@box-shadow-notify: 0 5px 10px rgba(0, 0, 0, 0.1);\n@box-shadow-dropdown : 0 5px 10px rgba(0, 0, 0, 0.1);\n@box-shadow-select-dropdown: 0 1px 6px rgba(0, 0, 0, .2);\n\n//switch\n@switch-hight: 26px;\n@min-switch-height: 18px;\n")]), _vm._v(" "), _c('h3', [_vm._v("示例")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("更换主题的方法已经在快速上手的文档中有详细的说明，如果有任何疑问，请参考"), _c('a', {
    attrs: {
      "href": "/guide/quickstart"
    }
  }, [_vm._v("快速上手")]), _vm._v("文档。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("我们的原始全局变量文件你可以在"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui/blob/master/themes/var.less",
      "target": "_blank"
    }
  }, [_vm._v("github")]), _vm._v("上查看。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("我们提供的"), _c('a', {
    attrs: {
      "href": "http://demo.heyui.top/",
      "target": "_blank"
    }
  }, [_vm._v("heyui-demo")]), _vm._v("就是一个完整的示例，我们修改了主色，并调整了一些参数，"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui-demo/blob/master/src/css/var.less"
    }
  }, [_vm._v("代码示例")]), _vm._v("。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("如果你还需要一些更细节化的调整，我们建议可以新建"), _c('code', [_vm._v("overwrite.less")]), _vm._v("对已有的class进行覆盖修改。")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-713b0121", module.exports)
  }
}

/***/ })

});