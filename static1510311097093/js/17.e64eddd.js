webpackJsonp([17],{

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1374),
  /* template */
  __webpack_require__(1412),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide/quickstart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] quickstart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12869a28", Component.options)
  } else {
    hotAPI.reload("data-v-12869a28", Component.options)
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


exports.default = {
  data: function data() {
    return {};
  },

  methods: {},
  components: {}
};

/***/ }),

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("快速上手")]), _vm._v(" "), _c('p', [_vm._v("我们建议使用webpack进行系统构建。")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("Hey-Cli 是我们开源的脚手架，支持单纯的ES6项目开发，也支持Vue, React项目开发。集成了开发与打包等一系列功能。")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h4', [_vm._v("全局less变量定义引用")]), _vm._v(" "), _c('p', [_vm._v("在自己定义的 var.less 文件中引用 heyui 的 var.less 文件，并按照自己的需求重新定义更换主题，然后在hey.js脚手架配置文件中设定全局引用文件。")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "less"
    }
  }, [_vm._v("@import (less) \"~/heyui/themes/var.less\";\n//重新定义主题\n@primary-color: #FDA729;\n@red-color: #D64244;\n@green-color: #3cb357;\n@yellow-color: #EAC12C;\n@blue-color: #77A2DC;")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (10),
      expression: "10"
    }]
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "javascript"
    }
  }, [_vm._v("globalVars: './src/css/var.less',")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (10),
      expression: "10"
    }]
  }), _vm._v(" "), _c('h4', [_vm._v("样式引用")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "less"
    }
  }, [_vm._v("@import (less) \"~heyui/themes/common.less\";")]), _vm._v(" "), _c('h4', [_vm._v("引入 HeyUI")]), _vm._v(" "), _c('p', [_vm._v("一般，我们在webpack 入口页面引用。")]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "less"
    }
  }, [_vm._v("import Vue from 'vue';\nimport HeyUI from 'heyui';\nVue.use(HeyUI);\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});")]), _vm._v(" "), _c('h3', [_vm._v("使用 Vue-Cli / 自己搭建webpack")]), _vm._v(" "), _c('p', [_vm._v("这里的引用有一些差别，主要在于样式的引用上。")]), _vm._v(" "), _c('p', [_vm._v("对于 less 变量的定义，我们并没有写入common.less文件，所以需要自己定义一个less文件做引用。")]), _vm._v(" "), _c('codes', {
    attrs: {
      "type": "less"
    }
  }, [_vm._v("@import (less) \"~heyui/themes/var.less\";\n//重新定义主题\n@primary-color: #FDA729;\n@red-color: #D64244;\n@green-color: #3cb357;\n@yellow-color: #EAC12C;\n@blue-color: #77A2DC;\n@import (less) \"~heyui/themes/common.less\";\n\n//使用这种方式引用，可以在自己的less文件中使用var.less定义的变量。\n@import (less) \"自己的less文件\";\n")]), _vm._v(" "), _c('p', [_vm._v("注意：使用这种引用方式，在 Vue 文件中将无法使用 var.less 文件中的变量。")]), _vm._v(" "), _c('h3', [_vm._v("快速搭建")]), _vm._v(" "), _c('p', [_vm._v("如果你需要搭建一个新的项目，我们建议你直接使用我们的heyui-demo进行基础搭建。")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_vm._v("使用 "), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/hey-cli",
      "target": "_blank"
    }
  }, [_vm._v("Hey-Cli")]), _vm._v(" 脚手架(推荐)")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("使用 Hey-Cli 可以设定全局的 "), _c('code', [_vm._v("var.less")]), _vm._v(" 文件，文件中定义的变量可以使用在任意"), _c('code', [_vm._v("less")]), _vm._v("文件中，以及"), _c('code', [_vm._v("vue")]), _vm._v("文件的less样式中。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("var.less，"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui-demo/blob/master/src/css/var.less",
      "target": "_blank"
    }
  }, [_vm._v("示例")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Hey-Cli 配置文件 hey.js ，"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui-demo/blob/master/hey.js",
      "target": "_blank"
    }
  }, [_vm._v("示例")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("对于样式引用，您可以在入口js文件中import，也可以直接在app.less中引用。 "), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui-demo/blob/master/src/css/app.less",
      "target": "_blank"
    }
  }, [_vm._v("示例")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("同时，HeyUI 也可以设置为全局引用，因为 HeyUI 拥有Message, Loadding等全局可以调用的方法。"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui-demo/blob/master/src/app.js",
      "target": "_blank"
    }
  }, [_vm._v("示例")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("在线地址: "), _c('a', {
    attrs: {
      "href": "http://demo.heyui.top/",
      "target": "_blank"
    }
  }, [_vm._v("http://demo.heyui.top")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("github地址: "), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui-demo",
      "target": "_blank"
    }
  }, [_vm._v("https://github.com/heyui/heyui-demo")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-12869a28", module.exports)
  }
}

/***/ })

});