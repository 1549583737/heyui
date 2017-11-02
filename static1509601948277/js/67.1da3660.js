webpackJsonp([67],{

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Uploader 上传")]), _vm._v(" "), _c('p', [_vm._v("HeyUI的上传，将提供一组样式，并提供七牛上传的demo。")]), _vm._v(" "), _c('p', [_vm._v("不同的系统可以根据自己的上传实现来开发。")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("同时，我们将提供一个使用plupload七牛上传的demo，由于大家实现上传的封装都不太一致，所以这里会提供一个封装示例。")]), _vm._v(" "), _c('h3', [_vm._v("七牛的通用示例")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h3', [_vm._v("单图片上传-file对象")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/uploader1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多图片上传-file对象数组")]), _vm._v(" "), _c('p', [_vm._v("添加limit参数可以限制上传的总数量")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/uploader2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("单图片上传-url")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/uploader3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多图片上传-url数组")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/uploader4"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("单文件上传")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/uploader5"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("多文件上传")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/uploader6"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("拖拽上传")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "dataplugins/uploader7"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("所有的示例将使用"), _c('a', {
    attrs: {
      "href": "https://github.com/moxiecode/plupload",
      "target": "_blank"
    }
  }, [_vm._v("plupload")]), _vm._v("配套使用，因为组件已经将拖拽以及上传功能实现，这里也不做扩展了。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("本示例写明了通用的处理方案，如果使用其他上传方式，请参照该文件修改。"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui/blob/master/doc/components/common/qiniu.vue",
      "target": "_blank"
    }
  }, [_vm._v("示例")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d46e2d24", module.exports)
  }
}

/***/ }),

/***/ 880:
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
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/data/plugin/upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d46e2d24", Component.options)
  } else {
    hotAPI.reload("data-v-d46e2d24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});