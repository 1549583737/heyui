webpackJsonp([7],{

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1318),
  /* template */
  __webpack_require__(1619),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/affix1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] affix1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99c2bc3a", Component.options)
  } else {
    hotAPI.reload("data-v-99c2bc3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1319),
  /* template */
  __webpack_require__(1618),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/affix2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] affix2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99a68d38", Component.options)
  } else {
    hotAPI.reload("data-v-99a68d38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1320),
  /* template */
  __webpack_require__(1466),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/backtotop1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] backtotop1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2acd8c20", Component.options)
  } else {
    hotAPI.reload("data-v-2acd8c20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1321),
  /* template */
  __webpack_require__(1467),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/backtotop2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] backtotop2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2adba3a1", Component.options)
  } else {
    hotAPI.reload("data-v-2adba3a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1318:
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


exports.default = {
  data: function data() {
    return {
      status: {
        fixed1: false,
        fixed2: false,
        fixed3: false
      }
    };
  },

  methods: {
    onchange1: function onchange1(fixed) {
      this.status.fixed1 = fixed;
    },
    onchange2: function onchange2(fixed) {
      this.status.fixed2 = fixed;
    },
    onchange3: function onchange3(fixed) {
      this.status.fixed3 = fixed;
    }
  }
};

/***/ }),

/***/ 1319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//


exports.default = {
  data: function data() {
    return {
      fixed: false
    };
  },

  methods: {
    onchange: function onchange(fixed) {
      this.fixed = fixed;
    }
  }
};

/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//


exports.default = {
  methods: {
    getTarget: function getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};

/***/ }),

/***/ 1321:
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


exports.default = {
  methods: {
    getTarget: function getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};

/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('BackTop', {
    attrs: {
      "target": _vm.getTarget,
      "bottom": 0,
      "right": 50
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2acd8c20", module.exports)
  }
}

/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('BackTop', {
    attrs: {
      "target": _vm.getTarget,
      "bottom": 100,
      "right": 50,
      "class-name": "h-backtop-custom"
    }
  }, [_vm._v("\n  返回顶部\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2adba3a1", module.exports)
  }
}

/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Affix', {
    attrs: {
      "offset-bottom": 10
    },
    on: {
      "change": _vm.onchange
    }
  }, [_c('button', {
    staticClass: "h-btn",
    class: {
      'h-btn-red': _vm.fixed
    }
  }, [_vm._v("固定在距离底部偏移量10px的位置")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-99a68d38", module.exports)
  }
}

/***/ }),

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('Affix', {
    attrs: {
      "offset-top": 70
    },
    on: {
      "change": _vm.onchange1
    }
  }, [_c('button', {
    staticClass: "h-btn",
    class: {
      'h-btn-green': _vm.status.fixed1
    }
  }, [_vm._v("固定在距离顶部偏移量70px的位置")])])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (10),
      expression: "10"
    }]
  }), _vm._v(" "), _c('div', [_c('Affix', {
    attrs: {
      "offset-top": 120
    },
    on: {
      "change": _vm.onchange2
    }
  }, [_c('button', {
    staticClass: "h-btn",
    class: {
      'h-btn-yellow': _vm.status.fixed2
    }
  }, [_vm._v("固定在距离顶部偏移量120px的位置")])])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (10),
      expression: "10"
    }]
  }), _vm._v(" "), _c('div', [_c('Affix', {
    attrs: {
      "offset-top": 170
    },
    on: {
      "change": _vm.onchange3
    }
  }, [_c('button', {
    staticClass: "h-btn",
    class: {
      'h-btn-blue': _vm.status.fixed3
    }
  }, [_vm._v("固定在距离顶部偏移量190px的位置")])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-99c2bc3a", module.exports)
  }
}

/***/ })

});