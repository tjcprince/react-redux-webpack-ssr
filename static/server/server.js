module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 2 */
/*!*************************************!*\
  !*** ./src/app/pages/Home/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeContainers = __webpack_require__(/*! ./containers/HomeContainers */ 37);

var _HomeContainers2 = _interopRequireDefault(_HomeContainers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _HomeContainers2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/index.js');
}();

;

/***/ }),
/* 3 */
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 4 */
/*!********************************************!*\
  !*** ./src/app/pages/Home/modules/home.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.doubleAsync = exports.increment = exports.HOME_DOUBLE_ASYNC = exports.HOME_INCREMENT = exports.key = undefined;

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 5);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 3);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 1);

var _promise2 = _interopRequireDefault(_promise);

var _ACTION_HANLDERS;

var _reducerUtils = __webpack_require__(/*! ../../../store/reducerUtils */ 17);

var _reducerUtils2 = _interopRequireDefault(_reducerUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var key = exports.key = 'home';

var HOME_INCREMENT = exports.HOME_INCREMENT = key + '/HOME_INCREMENT';
var HOME_DOUBLE_ASYNC = exports.HOME_DOUBLE_ASYNC = key + '/HOME_DOUBLE_ASYNC';

var increment = exports.increment = function increment() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: HOME_INCREMENT,
    payload: value
  };
};

var doubleAsync = exports.doubleAsync = function doubleAsync() {
  return function (dispatch) {
    return new _promise2.default(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: HOME_DOUBLE_ASYNC,
          payload: null
        });
        resolve();
      }, 200);
    });
  };
};

var actions = exports.actions = {
  increment: increment,
  doubleAsync: doubleAsync
};

var ACTION_HANLDERS = (_ACTION_HANLDERS = {}, (0, _defineProperty3.default)(_ACTION_HANLDERS, HOME_INCREMENT, function (state, action) {
  console.log(action);
  return (0, _extends3.default)({}, state, {
    count: state.count + action.payload
  });
}), (0, _defineProperty3.default)(_ACTION_HANLDERS, HOME_DOUBLE_ASYNC, function (state) {
  return (0, _extends3.default)({}, state, {
    count: state.count * 2
  });
}), _ACTION_HANLDERS);

var initalState = {
  count: 0
};

var _default = (0, _reducerUtils2.default)(initalState, ACTION_HANLDERS);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(key, 'key', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(HOME_INCREMENT, 'HOME_INCREMENT', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(HOME_DOUBLE_ASYNC, 'HOME_DOUBLE_ASYNC', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(increment, 'increment', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(doubleAsync, 'doubleAsync', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(actions, 'actions', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(ACTION_HANLDERS, 'ACTION_HANLDERS', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(initalState, 'initalState', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/modules/home.js');
}();

;

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/defineProperty" ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 6 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 9 */
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 10 */
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 11 */
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 12 */
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 13 */
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 14 */
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/*!*********************************!*\
  !*** ./src/app/config/index.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 3);

var _extends3 = _interopRequireDefault(_extends2);

var _default2 = __webpack_require__(/*! ./default */ 32);

var _default3 = _interopRequireDefault(_default2);

var _environment = __webpack_require__(/*! ./environment */ 33);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _extends3.default)({}, _default3.default, _environment2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/config/index.js');
}();

;

/***/ }),
/* 16 */
/*!***************************!*\
  !*** ./src/app/routes.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 1);

var _promise2 = _interopRequireDefault(_promise);

var _path2 = __webpack_require__(/*! path */ 6);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(/*! babel-plugin-universal-import/importCss.js */ 34);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(/*! babel-plugin-universal-import/universalImport.js */ 35);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _reactUniversalComponent = __webpack_require__(/*! react-universal-component */ 36);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _home = __webpack_require__(/*! ./pages/Home/modules/home */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  exact: true,
  component: (0, _reactUniversalComponent2.default)(function () {
    return (0, _universalImport3.default)({
      id: './pages/Home',
      file: '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/routes.js',
      load: function load() {
        return _promise2.default.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, /*! ./pages/Home */ 2)), (0, _importCss3.default)('pages/Home')]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, './pages/Home');
      },
      resolve: function resolve() {
        return /*require.resolve*/(/*! ./pages/Home */ 2);
      },
      chunkName: function chunkName() {
        return 'pages/Home';
      }
    });
  })
}, {
  path: '/home',
  component: (0, _reactUniversalComponent2.default)(function () {
    return (0, _universalImport3.default)({
      id: './pages/Home',
      file: '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/routes.js',
      load: function load() {
        return _promise2.default.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, /*! ./pages/Home */ 2)), (0, _importCss3.default)('pages/Home')]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, './pages/Home');
      },
      resolve: function resolve() {
        return /*require.resolve*/(/*! ./pages/Home */ 2);
      },
      chunkName: function chunkName() {
        return 'pages/Home';
      }
    });
  }),
  fetchData: function fetchData(store) {
    return store.dispatch((0, _home.increment)());
  } // 预加载
}, {
  path: '/list',
  component: (0, _reactUniversalComponent2.default)(function () {
    return (0, _universalImport3.default)({
      id: './pages/List',
      file: '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/routes.js',
      load: function load() {
        return _promise2.default.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, /*! ./pages/List */ 18)), (0, _importCss3.default)('pages/List')]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, './pages/List');
      },
      resolve: function resolve() {
        return /*require.resolve*/(/*! ./pages/List */ 18);
      },
      chunkName: function chunkName() {
        return 'pages/List';
      }
    });
  })
}, {
  path: '/detail',
  component: (0, _reactUniversalComponent2.default)(function () {
    return (0, _universalImport3.default)({
      id: './pages/Detail',
      file: '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/routes.js',
      load: function load() {
        return _promise2.default.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, /*! ./pages/Detail */ 19)), (0, _importCss3.default)('pages/Detail')]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, './pages/Detail');
      },
      resolve: function resolve() {
        return /*require.resolve*/(/*! ./pages/Detail */ 19);
      },
      chunkName: function chunkName() {
        return 'pages/Detail';
      }
    });
  })
}, {
  path: '*',
  component: (0, _reactUniversalComponent2.default)(function () {
    return (0, _universalImport3.default)({
      id: './notfound',
      file: '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/routes.js',
      load: function load() {
        return _promise2.default.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, /*! ./notfound */ 20)), (0, _importCss3.default)('notfound')]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, './notfound');
      },
      resolve: function resolve() {
        return /*require.resolve*/(/*! ./notfound */ 20);
      },
      chunkName: function chunkName() {
        return 'notfound';
      }
    });
  })
}];

var _default = routes;
exports.default = _default;

// import universal from 'react-universal-component';
// import Home from './pages/Home';
// import List from './pages/List';
// import Detail from './pages/Detail';
// import NotFound from './notfound';

// const routes = [
//   {
//     path: '/',
//     exact: true,
//     component: Home
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/list',
//     component: List
//   },
//   {
//     path: '/detail',
//     component: Detail
//   },
//   {
//     path: '*',
//     component: NotFound
//   }
// ];

// export default routes;

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/routes.js');
}();

;

/***/ }),
/* 17 */
/*!***************************************!*\
  !*** ./src/app/store/reducerUtils.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createReducer = function createReducer(initState, handlers) {
  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    var handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
  return reducer;
};

var _default = createReducer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createReducer, "createReducer", "/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/store/reducerUtils.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/store/reducerUtils.js");
}();

;

/***/ }),
/* 18 */
/*!*************************************!*\
  !*** ./src/app/pages/List/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _List = __webpack_require__(/*! ./compoments/List */ 41);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _List2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/List/index.js');
}();

;

/***/ }),
/* 19 */
/*!***************************************!*\
  !*** ./src/app/pages/Detail/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Detail = __webpack_require__(/*! ./compoments/Detail */ 42);

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Detail2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Detail/index.js');
}();

;

/***/ }),
/* 20 */
/*!*****************************!*\
  !*** ./src/app/notfound.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(_reactRouterDom.Route, {
    render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 404;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          '404 : Not Found'
        )
      );
    }
  });
};

var _default = NotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFound, 'NotFound', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/notfound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/notfound.js');
}();

;

/***/ }),
/* 21 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 23 */
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(/*! path */ 6);

var _path2 = _interopRequireDefault(_path);

var _compression = __webpack_require__(/*! compression */ 24);

var _compression2 = _interopRequireDefault(_compression);

var _express = __webpack_require__(/*! express */ 25);

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = __webpack_require__(/*! serve-favicon */ 26);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _createSSR = __webpack_require__(/*! ./SSR/createSSR */ 27);

var _createSSR2 = _interopRequireDefault(_createSSR);

var _config = __webpack_require__(/*! ../app/config */ 15);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _appConfig$server = _config2.default.server,
    host = _appConfig$server.host,
    port = _appConfig$server.port;

var app = (0, _express2.default)();

var _default = function _default(parameters) {
  if (_config2.default.isProd) {
    app.use((0, _compression2.default)());
    app.use('/', _express2.default.static('static'));
  }

  app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '..', 'favicon.ico')));
  app.get('*', (0, _createSSR2.default)(parameters.chunks()));

  app.listen(port, function (err) {
    if (err) {
      return console.error(err);
    }

    console.info('Listening at ' + host + ':' + port);
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(host, 'host', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/server.js');

  __REACT_HOT_LOADER__.register(port, 'port', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/server.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/server.js');
}();

;

/***/ }),
/* 24 */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 25 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 26 */
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 27 */
/*!*************************************!*\
  !*** ./src/server/SSR/createSSR.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 1);

var _promise2 = _interopRequireDefault(_promise);

exports.default = createSSR;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ 28);

var _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ 29);

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _reactRedux = __webpack_require__(/*! react-redux */ 7);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 8);

var _html = __webpack_require__(/*! ./html */ 30);

var _html2 = _interopRequireDefault(_html);

var _routes = __webpack_require__(/*! ../../app/routes */ 16);

var _routes2 = _interopRequireDefault(_routes);

var _Root = __webpack_require__(/*! ../../app/pages/Root */ 43);

var _Root2 = _interopRequireDefault(_Root);

var _createStore = __webpack_require__(/*! ../../app/store/createStore */ 46);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _createStore2.default)();

function createSSR(assets) {
  return function (req, res) {
    var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
    var promises = branch.map(function (_ref) {
      var route = _ref.route;

      var fetchData = route.fetchData; // 预加载
      return fetchData instanceof Function ? fetchData(store) : _promise2.default.resolve(null);
    });
    return _promise2.default.all(promises).then(function (data) {
      var context = {};
      var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _StaticRouter2.default,
          { location: req.url, context: context },
          _react2.default.createElement(_Root2.default, null)
        )
      ));
      if (context.status === 404) {
        res.status(404);
      }
      var renderContent = (0, _server.renderToString)(_react2.default.createElement(_html2.default, { store: store, content: content, assets: assets }));

      res.send('<!doctype html>\n' + renderContent);
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/SSR/createSSR.js');

  __REACT_HOT_LOADER__.register(createSSR, 'createSSR', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/SSR/createSSR.js');
}();

;

/***/ }),
/* 28 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 29 */
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/StaticRouter");

/***/ }),
/* 30 */
/*!********************************!*\
  !*** ./src/server/SSR/html.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 31);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = __webpack_require__(/*! ../../app/config */ 15);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function (_React$PureComponent) {
  (0, _inherits3.default)(Html, _React$PureComponent);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          assets = _props.assets,
          content = _props.content;
      var isProd = _config2.default.isProd;

      var initialState = 'window.__INITIAL_STATE__ = ' + (0, _stringify2.default)(store.getState());

      return _react2.default.createElement(
        'html',
        { lang: 'en' },
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('link', {
            href: assets.styles.main,
            media: 'screen, projection',
            rel: 'stylesheet',
            type: 'text/css',
            charSet: 'UTF-8'
          })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: content } }),
          _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: initialState } }),
          isProd && _react2.default.createElement('script', { src: assets.javascript.vendor }),
          _react2.default.createElement('script', { src: assets.javascript.main })
        )
      );
    }
  }]);
  return Html;
}(_react2.default.PureComponent);

Html.propTypes = {
  store: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  assets: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  content: _propTypes2.default.string.isRequired
};
var _default = Html;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/SSR/html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/server/SSR/html.js');
}();

;

/***/ }),
/* 31 */
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 32 */
/*!***********************************!*\
  !*** ./src/app/config/default.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = {
  server: {
    host: 'http://localhost',
    port: 3005
  },

  webpack: {
    server: {
      host: 'http://localhost',
      port: 3001
    }
  }
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/config/default.js');
}();

;

/***/ }),
/* 33 */
/*!***************************************!*\
  !*** ./src/app/config/environment.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = {
  development: {
    isProd: false
  },
  production: {
    isProd: true
  }
}[process.env.NODE_ENV || 'development'];
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/config/environment.js');
}();

;

/***/ }),
/* 34 */
/*!*************************************************************!*\
  !*** external "babel-plugin-universal-import/importCss.js" ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss.js");

/***/ }),
/* 35 */
/*!*******************************************************************!*\
  !*** external "babel-plugin-universal-import/universalImport.js" ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport.js");

/***/ }),
/* 36 */
/*!********************************************!*\
  !*** external "react-universal-component" ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-universal-component");

/***/ }),
/* 37 */
/*!*********************************************************!*\
  !*** ./src/app/pages/Home/containers/HomeContainers.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ 7);

var _Home = __webpack_require__(/*! ../compoments/Home */ 38);

var _Home2 = _interopRequireDefault(_Home);

var _home = __webpack_require__(/*! ../modules/home */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state[_home.key].count
  };
};

var mapDispatchTpProps = {
  increment: function increment() {
    return (0, _home.increment)(1);
  },
  doubleAsync: _home.doubleAsync
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchTpProps)(_Home2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/containers/HomeContainers.js');

  __REACT_HOT_LOADER__.register(mapDispatchTpProps, 'mapDispatchTpProps', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/containers/HomeContainers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/containers/HomeContainers.js');
}();

;

/***/ }),
/* 38 */
/*!***********************************************!*\
  !*** ./src/app/pages/Home/compoments/Home.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = __webpack_require__(/*! antd */ 44);

var _Duck = __webpack_require__(/*! ../../../../assets/images/Duck.jpg */ 39);

var _Duck2 = _interopRequireDefault(_Duck);

var _Home = __webpack_require__(/*! ./Home.scss */ 40);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.props.increment();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          count = _props.count,
          doubleAsync = _props.doubleAsync;

      return _react2.default.createElement(
        'div',
        { className: 'home__container' },
        _react2.default.createElement(
          _antd.Button,
          { type: 'primary' },
          'Primary'
        ),
        _react2.default.createElement('img', { src: _Duck2.default, alt: '\u9E2D\u5B50' }),
        _react2.default.createElement(
          'h3',
          { className: _Home2.default.bg },
          'Counter: ',
          count
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.props.increment, id: 'btn' },
          'Increment11'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { onClick: doubleAsync },
          'Double(Async)'
        )
      );
    }
  }]);
  return Home;
}(_react2.default.Component);

Home.propTypes = {
  count: _propTypes2.default.number.isRequired,
  increment: _propTypes2.default.func.isRequired,
  doubleAsync: _propTypes2.default.func.isRequired
};
var _default = Home;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/compoments/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Home/compoments/Home.js');
}();

;

/***/ }),
/* 39 */
/*!************************************!*\
  !*** ./src/assets/images/Duck.jpg ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAKAAA/+4ADkFkb2JlAGTAAAAAAf/bAEMADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBcSFBQUFBIXFxscHhwbFyQkJyckJDUzMzM1Ozs7Ozs7Ozs7O//bAEMBDQsLDQ4NEA4OEBQODw4UFBARERAUHRQUFRQUHSUaFxcXFxolICMeHh4jICgoJSUoKDIyMDIyOzs7Ozs7Ozs7O//AABEIARgBEAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APVaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiqdxqMUZ2x/O3r2FUpLueX7zHHoOBXJXx1GldX5pLpH/MuNKUvI1ZLiGIfO4Ht1NZ9xqjk4iG1f7x61WpCARivNxGaVZ+7T/dry3+82jRit9RxnlflnJ/GkWRweGII96TaAoHek6CvPlWq813N+tzVRj2RZh1OWI4k/eL+v51ft7uGfhDhv7p61iOpPtSb3UhkOCOhFdeGzWtBqNT95D/yb7yJ0IvbRnR0VXsroXMIY/wCsHDj3qxX0EZKUVKLupK6ZytNOzCiiiqEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACMyqpZjgDkk1k3moNKSkXyx+vc0zUL4zP5UZ/dL39TVQV5GOx7bdKk9NpSXXyR0UqX2pfJDxUiio1qVeleYldmzFxSU6mE1M426ggpDQc4yASPYE00MG6GspQkrXTV9roaAmmGnmmkVFhixTPDIJIzgj9a3LW6S5j3rwRwy+hrnyKktbl7aYOvToy+or0suxzpSVOb/dy/8AJX3M6tLmV18R0VFNR1kQOhyrDINOr6I4wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArO1W88tPIQ/M4+Y+g/+vV6WRYo2kb7qjJrmppmmlaRvvMcmuLMMR7Klyx+Kei9OppRhzS12QA05ajFSrXg9TrJFqQGoxThVrRCY7NCvDGktzP8A6mBS7++O34001T1ssPD+pbPvLD5n4IwY/oK6MBGE8XTjU+G7/AzqtqnJx3schqHxU1u11V0gitzZxnAg2nOPTzAev4V3ui6ppvibS01C2Gxj8si8b45B1U+teBTOWkZicliSfxrv/g9fSJqd7YZ/dTQiYD/ajYLn8mr6KcYVFKMopxfRnFFyjZ3dzvZI3icxv1Hf1HrUZrS1CMGMSd0OD9DWeRXy2PwvsKzjH4X70fQ9ClPmjfr1IzTDUhFMIrj6mhbsNWtbaeDT55Csl1vaDI+XKEAru9TurbrzvxlDL/ZKX0OfM0+VZSR18t/kf8jtNdX4U1xNa0iO4LZnjwk/+8B978a+twclUwtKcekeWXqtDgqXjVkn11Rs0UUVsSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBla3c7UW3Xq3zN9B0rHB5qbUZ/Ou5HByAdq/QcVAtfO5hWc68tdI+6vkdlGNoLz1JFqZaiWplFc0S2PApwFCinVrayJGmm4UhkkG6N1KOp6FWGGH5U4001j7SUJqcXaUHdMdrqz6njviXwvfaJqDx+W0tm5JtrgAlWXsrEdGHQiu5+FPhy6tBPrF3G0JmTyrdXG0lSQzPg9uOK6tJHQ5U49uo/EVaTUJAPmQMfY4r3sPm1Ccfffs521TV18rHLLDyT01RYviBbsP72APzrNIqWe4eYgtgAdFHSsbU9bhtMxxYkm7jsPrXm4+usRWXslzRirX7nVhqFSXuxV5M0JZI40LyMFUdSeKpDVNPdtqzDP0OP5VzVzf3V22Z3LDsvRR+FMVuaxWFTXvPXyPUhl6Uffk+b+7sdeBBMjRyASwSqUlXqGRhtYfkaw/BdnfeHvFFxo0wZ7S4jaS2nwdrxr8yPnpnsfeoba9ki+65Wtq18SSQw7HXzlXkbR8w/KvWy29CEqcpxcJarXZ9Tz8Zl9S6lBc1jsKZLNFCu+V1jUfxMQB+tctceNXki2WcGybHzPIQVUevFcxf38945aaVp37ux4/4CvaumpiIxV17xOHyutUf7z91H739x6MmtaS77FvIS3pvFXAQwBByD0IryHHatbRfEF7pUqgMZbUn95CTxj1X0NZ08Xd2nHlv1R0Vsmai3SnzSX2ZK1/RnpNFRW1xDdQJcQNvilAZWHoalrrPHaadno0FFFFABRRRQAUUUUAFFFFABRRRQAVHcSeVBJJ/dUn8hUlU9XfZp8vvgfmRUzlyxlLsm/uGldpHNE805TURbmlDV8rUbcm33PQS0sWUNTKaqK9TJJShITRbU8UZFRB80u6tJTVibDyaTNNzSg1hIY4UjMFBZjgDkk0yWVIkMjnaq8k1zmqapJckopKxdl7n61tRoSqbaRW76G1DDyqystF1ZY1TXiQ0NocL0aXuf8AdrC+Zzk/nTmU43NSB+3Su+FGMFbY9ijShSjaC9WAXFOFKBupCQpwDknsKHCW/cu44YHJ6U5n4wx2Ke3fHrUUj+Vww3S9k6hfdvf2qH5mJZjljySaqNNJ3kuaXbovUXLfVksku4bEG2MdF9T6tUdGKQmtWm9WO66BQCaTNJmpsO52XgXUmPnadIeAPNhz27OP5GuvrzfwpKYtdtSP4yyH6Mpr0ivRw8nKmr9ND5zNKahiW19tKXz6hRRRWpwhRRRQAUUUUAFFFFABRRRQAVn65n+z3I7MufzrQqrqcZk0+dR12lh/wH5v6VFRc1OaXWLX4Djo16nIk0BqYx5pA1fMTjqz0UTB6lSSqoanK9Q4jLqy1KHzVFXqVJKzd0KxbBzTiwUZPAHWoFlAGScAdTVee7EiHyzlR0x3NdOCwssRO20Y/Exxg5PyKOr34J254H3F/qaw2kJbcTzVi5huZJiSpJNN/s+5PVcfU4r1ZUpaQpwahHb/ADPYoxp04JXRAzk96buxUzW6x/62VEHcA7j+Qpn2m2i/1EfmuP8AlpJ0/Baj2Tv77UfXV/ca866a+n+Y6OKV13nEcXeRuB/9eka4jjBFvkt3nbr/AMBHaq8s8kzbpWLnsOw+gphJNVdL4f8AwJ7/AC7Ak3v939bjt4HTr3NIXPrTc0mamxY7e3rSiQ96ZRTE0iTdmlBqLJBqVFJpW6ES0NnwrE0uuWuP4WLn6KpNelVyXgfSmjEmoyjAYeXDnuM/M36Yrra9KjBxgk/U+dzKqqmIdtoJR+YUUUVocQUUUUAFFFFABRRRQAUUUUAFIyhlKnoRg/jS0UAcPdRGGd4j1Riv5VXzW34ktfLuVuFHyzDB/wB5f/rVhtXgYqlyVpLzv8md9KXNBMcGpQ1R5pQa5nE0JQ1SB6r7qUNUOIx19I/2OYIeSprmFuriP7jsv0JrpmwylT0PBrm7uB7acp0HVT7V14J2vFaPc7MHNJSg+uo06ncngzt+dRNdM335Cfxp/mbv9YqyfUc/mKTZak8xlT7EH+ddzd9236nWvJr8iMSKenNOy3pTwsA+6SPqP/r0AJ2NQ9OhrFeaGjNOC+tPAoxU3NEhu0UbRTttGKVxjNgppUjpUuKMU+YVkOsbK6vpxBbRNK/UhRnA9TXY6R4KYMsuoEKo58pTlj9T2rmdJvbvT7rz7R/LfHzf3WA52sPSvSNI1SHVLNbiP5W4Eiehrtwqg1e15eZ5GaVcRTso2VN6cy+K/mXI40iRY41CogwqjgACnUUV1HhBRRRQAUUUUAFFFFABRVeTULONtrSrkdhz/KnRXdtMcRyqx9M8/lUqcW7KSb7XHZ72JqKKKoQUUUUAVNTsxeWbwj7/AN6M/wC0On59K4lwVJBGCOCD616DXKeI7HyLr7Qg/dz8n2fv+fWvPzKjzQVVLWOkvQ6MNOz5X129THzRmkNJmvJOxIdmlzTc0uaVh2HZqrqFp9pjyv8ArF+7/hVgGlpxbi010HFuLut0cywKkqwwR1FIDW5d6fHcfOvyyevr9ayZbeSFtsgwa7qddTXn2O+lUjNdpdiLNFO20uKq5skNB/Cnhj60baNtJ2KTkupKjRn72V9xz+nFTCNcfI8cmezfK364/nVULTgrUJpdCuZ9yR0KnlNv45FMwPSlAf0qe2sru6bZBC8jHsoJpfE7R69BupGKvJpEAJxgcCuz8CJMUuZSCIPlRT6sMk/kKraX4JnkZZNRbyo+piU5c/U9BXY29vDbQrBAgjiQYVR0ruw1CcHzS002PIzLH0p03Sp++29ZdFbsSUUUV1HjBRRRQAUUUUAFYmp6mZCYYDiMcMw/iP8AhVrWLwwxCFDiSXqfRf8A69YJrzMxxbh+6g7Nr3n+hvRp3957dBGJpu4ig03FePzNO51W0L1tq13BgB96j+F+R/jWpba3bS4WX903qeV/OuewacqntXbQx9aGjfOu0jKdGD8mdgrKwDKQQehHIpa5m1muLc5SQqO69QfwqxLqV1J1faPReK9FZhS5btNPsYOjK+jTNx5I0GXYL9Tis/VZLG5spIWkG7G5CAThh0rLMjE5JyfU1HKSVPvWFXMVKLioKzVve1LjRs077GMwIpuDVqSA5pnkmvL5kdiZBg0YNWBCaUQmjnQ7lfmlqx5BoNuaXOguQ02SKOVdsi7hU/kEUeUaXMujGpW2MuXSFPMT49m/xqq+nXSfwhvoa3dlBStY4ia8/U3jiqi3d/U577LODzG35U4W8ndG/I1usKSr+svsafW5fyoyEtyT9xvyrodF8MLeqJpg0cPrxlj/ALIqBcccV1uiTxyWEaKfmj+Vl/HNdWAcatVqdtFdRfU5MXi6ih7nu3e4lt4f0i2A2WyOw/ikG8/+PVfRERdqKFUdlGB+lOor11GMVaKS9Dy5TlLWUnL1dwooopkhRRRQAUUUUAFIzBVLMcBRkn2FLWdrdx5Vp5YPzTHb/wABHJqKk1CEpvaKuNK7SXUx7m4a5uHmPRj8o9AOlRGhelKRXzM5yqSlKW8ndndFJJJdBm2gLTqWhRXUdwCinDjpSUU722JFpRSAU4Cp5mOwtGKXFGKlyYDDEppvkCpwKXFSO5CIFp3kr6VLiloTFci8lfSkMQqfFG2hyYXKzQj0qNoaubaQpWbv3KUjPaE1G0RrRMYpjRCkpSRakZjRGm+W1aLQg1GYatVWWpFNVIPNW7aeWBw8bFGHcUeXQFxVwrNSTi7NdhStJao3bTW0cBbkbT/fHT8RWmjpIoZGDKehHNciKmguJoW3RMVPt0P4V62HzOSsqq5l/MtzkqYZbw08jqqKzLTWY3wlwNjf3x90/X0rSBBGQcg9CK9SnVhUjzQakjllFxdmrC0UUVYgooooAK5vWbjzr5kBysI2D69WroJ5RDC8rdEUt+VcluLMXblmOSfc15+Z1LUlBfbevojahG8r9h4p4XNNWpFNeSopHQ2MKGjaalBFGaTS7hcjANOCE08GlBqNAGiM04RmnZpc0m12DUb5dG2nZpahyV7DGUtFFOwAKWkFOosAopaQClosIKKKKloY0imkU+kqGh3IytNKVLikIqbDuQFKaUqwRTStFiuYg20YqUrSEVabQXGYq3ZahNanafni7of6VWxSYrpo4mdKScXZkTgpKzOngninjEkZyp/MfWpK5q1upbWTenQ/eXsRXQwTxzxCWM5B/MH0Ne/hcVGvHtJfEv1RxVKbg/IkooorpIM3XZvLstg6ysF/AfMf5Vz68VqeIZd1xFF2RdxHux/+tWRvrxswnetb+RJfPc6aC931Jg1O31X8ylEgrz3I2sWN9KGquHp6tUthYnBpwNQhqeDUgSinCmA08Cq5RDsUUtIamUdQEooop2ABS0UtOwC0UlGaGAtJRmioYwoopaloBKTFOoxRyBcYRSEVJikIp8oXI8U0ipCKTFKw7kZWm4qTFIRQFyPFW9NuzbzgMf3T8MPT0NVsU010YavOlUjJdP6sTOKkrM6qiqel3Hn2wDHLx/Kf6Vcr6aE1OKktpK5xNWbXY5XVpfM1GY/3TtH/AAEYqmSDT7l91xK/dnY/qahzXz+Kk5VJvvJnZTVor0Hjb6UoxUeaXNcupZJxSg1HmnA0hkgNPVqiBpwNK4icNUqNVZWqRGp81hNFjNBNM3Um6mpCsPzS5qPdS7qdwH5ozTN1G6lzBYfmjNMzRmk5DsPzRmm5pc1IDs04UylzVJCH0UgNKDWiQgpDS0hpNANpDSmkrNoY0ikNOptSMQ0w0800imhlvR5vLuth+7IMfiORW7XMROY5kkH8LA/rXTV9BllTmocr+w/wZyV1aV+5xMmdzfU1HVi6Ty7iaM/wuw/I1XNeZiI2nLybOiD0XoGaUGkoFczLHClBpKKQx4NPBqIGnA0gJQaepqEGng1EgJ93FNL0zdSZouFiUPTg1Q5pQ1FxWJd1G6o80uam4x+6lzUefWlBouIkBp2ajBp1UgY4GnA0wGlqkIeDSg0zNLmq5hWH5pM03NFDYWFzSE0maKljDNJQTSZpALTTTqQ00gGEV0sB3QRt6qp/Subro7Xi2i/3F/kK9rKtqn/bpz4joc3rcJi1ByOkgDj8eD+orOJ9RXReIrbfAlwo5iO1v91v/r1z7DvWeOpuNSTS0l7xdF3ivLQZkUUuBRgV5716GwUCiipaYxc0oNNpakBwPNSA1EKeDxSaAcTzRmmZoBpWAkzSg0wGnCpsA/NLmmUoNJoB2aXNNzS0rAPBpwNRinCncCQGlzTBS5p3EPzRmm0tO4C0uabS0XAKTNFBoQCE03vSmkqkA4GlNIBSE00tRCqCzBR1Y4H410qqFUKOigD8qwtLi828Un7sfzH+n61v17uWQtScv5n+COau/eS7DJokmieJxlXBU/jXHXMD207wSfeQ4z6jsa7SsvXNONzF9oiGZohyB1ZfT8K3xVH2kLr4ok0p8rt0ZzVFICCOKWvGlCzOoSiijms2igooxSgVm0MUUE0oFNPWpAWlptLRYBwNOBplOFKwD80tNFLU2AUGlpKUUmgHA04GmUopWAkpaYDTqAHZoBpuaXNADqWm5ozTFYdSUmaM0XAKKTNIWppgOJpjNSM1XdJsTcSedIP3KHgf3m/+tXRh6Mqs1GPXfyXcmUlFNs0dJtjDb73GHl+Y+w7Cr1FFfSQgoRUVtFWOJtttvqFFFFUIxNW8P+e7XNiwjnPLxN9xz6/7JrnZZHt5fIu42gl/uvxn3U9D+Fd7UN1Z2t5EYbqJZoz/AAuM/l6Vy18HCpqnyS/BmsKzjo9V+JxQdT0OacMVo3vgsDL6XctCevkzZdPwb7w/WsS7s9e0/JurN3jH/LWD96uP+A/MPxFedVwVaG0eZd0dMalOXW3roW+KXisqHV7eQ7Q4DDqp4I/CrS3SN0Oa5JQmtGrGli0TSVCJlPenhwai1hWH0tNBpwxSYCinCminCkwFFOpoNLmlYBwpabml3UhjgaXNMzS5pWAdmnA0zdSbqXoKxLmjNR7qTfSaY7E26jdUW+kLUWYWJSwpN9RFwOpxT4obic/uYnk9wDj8zxWkKU5O0U5eiuJ2W+gFqaWrRg0K7k5mZYR6D5m/wrTttKs7chgvmOP435P4DpXdRy2tLWS9mv72/wBxlKvBbe8/IyLHS57pg8gMcHUseCf90V0McaRIscY2oowAKdRXr4fDQoRtHd7ye7OadRzev3BRRRW5AUUUUAFFFFABRRRQBUvNJ0y+H+mWsU5P8ToC3/fXWsifwLoUmTAJrU/9MpDj/vmTeKKKifs/t8v/AG8XHn+zf5FKTwJcpza6m3ss0Qb9UZf5VAfCniKL7sltOPZnQ/qpH60UVx1fqP2rf9um0fb/APDjDpHiKP71lv8AdJEb+bA037PqyffsJx9E3f8AoOaKK45/UentPlY1XtevL+Im66X79tOv1icf+y0huCOqOPqjD+Yoornl9X+zz/gWubrYb9sQHByPqDSi9iP8VFFZv2X94Yv2yL+8KUXSHoc/Siip/d/3hjxMT0Vj9FJ/pUiCd/uwyH6I3+FFFNex68/ysJ38iUWt833baX/vgj+dSLpuqP0t2H+8VH8zRRWsfqX2va/LlJftOnL+JMuiam3VET6v/wDEg1Mnh68P35o1+gLf4UUV0U/7N68//b1//bTOXt+nL8v+CTp4cT/lpcMfZVC/z3VYTQdPX7weT/eY/wDsuKKK7af9n/Y9n/29/wDbGUvrHXm+X/ALMVhZw/6uFFPrgE/masUUV2R5be5a393Yxd763+YUUUVQgooooAKKKKAP/9k="

/***/ }),
/* 40 */
/*!*************************************************!*\
  !*** ./src/app/pages/Home/compoments/Home.scss ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"bg":"src-app-pages-Home-compoments-Home__bg--1xv0D"};
    if(false) {
      // 1521511072441
      var cssReload = require("../../../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 41 */
/*!***********************************************!*\
  !*** ./src/app/pages/List/compoments/List.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List() {
  return _react2.default.createElement(
    'div',
    null,
    'list\u9875\u9762'
  );
};

var _default = List;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(List, 'List', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/List/compoments/List.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/List/compoments/List.js');
}();

;

/***/ }),
/* 42 */
/*!***************************************************!*\
  !*** ./src/app/pages/Detail/compoments/Detail.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detail = function Detail() {
  return _react2.default.createElement(
    'div',
    null,
    'detail\u9875\u9762'
  );
};

var _default = Detail;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Detail, 'Detail', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Detail/compoments/Detail.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Detail/compoments/Detail.js');
}();

;

/***/ }),
/* 43 */
/*!*******************************!*\
  !*** ./src/app/pages/Root.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ 44);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 21);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 8);

var _routes = __webpack_require__(/*! ../routes */ 16);

var _routes2 = _interopRequireDefault(_routes);

var _Root = __webpack_require__(/*! ./Root.scss */ 45);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;


var Root = function Root() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: _Root2.default.div },
      'bbbaa'
    ),
    _react2.default.createElement(
      _antd.Layout,
      {
        style: {
          minHeight: '100vh'
        }
      },
      _react2.default.createElement(
        Sider,
        { collapsible: true },
        _react2.default.createElement('div', { className: 'logo' }),
        _react2.default.createElement(
          _antd.Menu,
          { theme: 'dark', defaultSelectedKeys: ['/home'], mode: 'inline' },
          _react2.default.createElement(
            _antd.Menu.Item,
            { key: '/home' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/home' },
              _react2.default.createElement(_antd.Icon, { type: 'pie-chart' }),
              _react2.default.createElement(
                'span',
                null,
                '\u9996\u9875'
              )
            )
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            { key: '/list' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/list' },
              _react2.default.createElement(_antd.Icon, { type: 'pie-chart' }),
              _react2.default.createElement(
                'span',
                null,
                '\u5217\u8868'
              )
            )
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            { key: '/detail' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/detail' },
              _react2.default.createElement(_antd.Icon, { type: 'pie-chart' }),
              _react2.default.createElement(
                'span',
                null,
                '\u8BE6\u60C5'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _antd.Layout,
        null,
        _react2.default.createElement(Header, {
          style: {
            background: '#fff',
            padding: 0
          }
        }),
        _react2.default.createElement(
          Content,
          {
            style: {
              margin: '0 16px'
            }
          },
          _react2.default.createElement(
            _antd.Breadcrumb,
            {
              style: {
                margin: '12px 0'
              }
            },
            _react2.default.createElement(
              _antd.Breadcrumb.Item,
              null,
              'User'
            ),
            _react2.default.createElement(
              _antd.Breadcrumb.Item,
              null,
              'Bill'
            )
          ),
          _react2.default.createElement(
            'div',
            {
              style: {
                padding: 24,
                background: '#fff',
                minHeight: 360
              }
            },
            (0, _reactRouterConfig.renderRoutes)(_routes2.default)
          )
        ),
        _react2.default.createElement(
          Footer,
          {
            style: {
              textAlign: 'center'
            }
          },
          'Ant Design \xA92016 Created by Ant UED'
        )
      )
    )
  );
};
var _default = Root;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Root.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Root.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Root.js');

  __REACT_HOT_LOADER__.register(Sider, 'Sider', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Root.js');

  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Root.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/Root.js');
}();

;

/***/ }),
/* 44 */
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 45 */
/*!*********************************!*\
  !*** ./src/app/pages/Root.scss ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"div":"src-app-pages-Root__div--3Syx-"};
    if(false) {
      // 1521511072381
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 46 */
/*!**************************************!*\
  !*** ./src/app/store/createStore.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ 22);

var _reduxThunk = __webpack_require__(/*! redux-thunk */ 47);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(/*! ./reducer */ 48);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var middlewares = [_reduxThunk2.default];

  var enhancers = [];

  // if (process.env.NODE_ENV === 'development') {
  //   const devToolsExtension = window.devToolsExtension;
  //   if (typeof devToolsExtension === 'function') {
  //     enhancers.push(devToolsExtension());
  //   }
  // }

  var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, middlewares)].concat(enhancers)));

  if (false) {
    module.hot.accept('./reducer', function () {
      /* eslint-disable global-require */
      var createNextReducer = require('./reducer');
      var nextReducer = createNextReducer();

      store.replaceReducer(nextReducer);
    });
  }
  return store;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/store/createStore.js');
}();

;

/***/ }),
/* 47 */
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 48 */
/*!**********************************!*\
  !*** ./src/app/store/reducer.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 5);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _combineReducers;

var _redux = __webpack_require__(/*! redux */ 22);

var _rootReducer = __webpack_require__(/*! ../pages/rootReducer */ 49);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _home = __webpack_require__(/*! ../pages/Home/modules/home */ 4);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)((_combineReducers = {}, (0, _defineProperty3.default)(_combineReducers, _rootReducer.key, _rootReducer2.default), (0, _defineProperty3.default)(_combineReducers, _home.key, _home2.default), _combineReducers));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/store/reducer.js');
}();

;

/***/ }),
/* 49 */
/*!**************************************!*\
  !*** ./src/app/pages/rootReducer.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.auth = exports.ROOT_AUTH = exports.key = undefined;

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 5);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 3);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 1);

var _promise2 = _interopRequireDefault(_promise);

var _reducerUtils = __webpack_require__(/*! ../store/reducerUtils */ 17);

var _reducerUtils2 = _interopRequireDefault(_reducerUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var key = exports.key = 'root';

var ROOT_AUTH = exports.ROOT_AUTH = key + '/ROOT_AUTH';

var auth = exports.auth = function auth() {
  return function (dispatch) {
    return new _promise2.default(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: ROOT_AUTH,
          payload: true
        });
        resolve();
      }, 300);
    });
  };
};

var actions = exports.actions = {
  auth: auth
};

var ACTION_HANLDERS = (0, _defineProperty3.default)({}, ROOT_AUTH, function (state, action) {
  return (0, _extends3.default)({}, state, {
    auth: action.payload
  });
});

var initalState = {
  auth: false
};

var _default = (0, _reducerUtils2.default)(initalState, ACTION_HANLDERS);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(key, 'key', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/rootReducer.js');

  __REACT_HOT_LOADER__.register(ROOT_AUTH, 'ROOT_AUTH', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/rootReducer.js');

  __REACT_HOT_LOADER__.register(auth, 'auth', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/rootReducer.js');

  __REACT_HOT_LOADER__.register(actions, 'actions', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/rootReducer.js');

  __REACT_HOT_LOADER__.register(ACTION_HANLDERS, 'ACTION_HANLDERS', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/rootReducer.js');

  __REACT_HOT_LOADER__.register(initalState, 'initalState', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/rootReducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tanjianchao/study/ssrrr/react-redux-webpack/src/app/pages/rootReducer.js');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map