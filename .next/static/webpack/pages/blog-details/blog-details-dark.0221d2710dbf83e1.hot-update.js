"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog-details/blog-details-dark",{

/***/ "./src/pages/blog-details/blog-details-dark.jsx":
/*!******************************************************!*\
  !*** ./src/pages/blog-details/blog-details-dark.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Blog_details_blog_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Blog-details/blog-details */ \"./src/components/Blog-details/blog-details.jsx\");\n/* harmony import */ var _components_Page_header_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Page-header/page-header */ \"./src/components/Page-header/page-header.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_blog1_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/blog1.json */ \"./src/data/blog1.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/c_i__a/Desktop/.JOBS/cybector_frontend/src/pages/blog-details/blog-details-dark.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar BlogDetailsDark = function BlogDetailsDark() {\n  _s();\n\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n\n  var _ref = router.query || 1,\n      id = _ref.id;\n\n  var selectedBlog = _data_blog1_json__WEBPACK_IMPORTED_MODULE_7__.find(function (blog) {\n    return blog.id === parseInt(id, 10);\n  });\n  console.log(selectedBlog);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    var navbar = navbarRef.current,\n        logo = logoRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n      }\n    });\n  }, [navbarRef]);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    if (!id || !selectedBlog) {\n      router.push(\"/blog/blog-dark\");\n    }\n  }, [id, router, selectedBlog]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"circle-bg\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"circle-color fixed\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"gradient-circle\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"gradient-circle two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Page_header_page_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Blog Details.\",\n      paragraph: \"All the most current news and events of our creative team.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Blog_details_blog_details__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      blogData: selectedBlog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BlogDetailsDark, \"8BpXEv6WJDYv9B8y+mRQVsFyoQ0=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c = BlogDetailsDark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetailsDark);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogDetailsDark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlscy1kYXJrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsU0FBUyxHQUFHVCxtREFBQSxDQUFhLElBQWIsQ0FBbEI7QUFDQSxNQUFNVyxPQUFPLEdBQUdYLG1EQUFBLENBQWEsSUFBYixDQUFoQjtBQUNBLE1BQU1ZLE1BQU0sR0FBR04sa0VBQVMsRUFBeEI7O0FBQ0EsYUFBZU0sTUFBTSxDQUFDQyxLQUFQLElBQWdCLENBQS9CO0FBQUEsTUFBUUMsRUFBUixRQUFRQSxFQUFSOztBQUVBLE1BQU1DLFlBQVksR0FBR1Isa0RBQUEsQ0FBVyxVQUFDVSxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDSCxFQUFMLEtBQVlJLFFBQVEsQ0FBQ0osRUFBRCxFQUFLLEVBQUwsQ0FBOUI7QUFBQSxHQUFYLENBQXJCO0FBRUFLLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFaO0FBRUFmLEVBQUFBLHNEQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSXNCLE1BQU0sR0FBR2IsU0FBUyxDQUFDYyxPQUF2QjtBQUFBLFFBQ0VDLElBQUksR0FBR2IsT0FBTyxDQUFDWSxPQURqQjs7QUFFQSxRQUFJRSxNQUFNLENBQUNDLFdBQVAsR0FBcUIsR0FBekIsRUFBOEI7QUFDNUJKLE1BQUFBLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsWUFBckI7QUFDRCxLQUZELE1BRU87QUFDTE4sTUFBQUEsTUFBTSxDQUFDSyxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixZQUF4QjtBQUNEOztBQUNESixJQUFBQSxNQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdEMsVUFBSUwsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEdBQXpCLEVBQThCO0FBQzVCSixRQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFlBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xOLFFBQUFBLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsWUFBeEI7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQWZELEVBZUcsQ0FBQ3BCLFNBQUQsQ0FmSDtBQWlCQVQsRUFBQUEsc0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFJLENBQUNjLEVBQUQsSUFBTyxDQUFDQyxZQUFaLEVBQTBCO0FBQ3hCSCxNQUFBQSxNQUFNLENBQUNtQixJQUFQLENBQVksaUJBQVo7QUFDRDtBQUNGLEdBSkQsRUFJRyxDQUFDakIsRUFBRCxFQUFLRixNQUFMLEVBQWFHLFlBQWIsQ0FKSDtBQUtBLHNCQUNFLDhEQUFDLHFEQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLDhEQUFDLGlFQUFEO0FBQVEsUUFBRSxFQUFFTixTQUFaO0FBQXVCLFFBQUUsRUFBRUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUUsOERBQUMsMkVBQUQ7QUFDRSxXQUFLLEVBQUMsZUFEUjtBQUVFLGVBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVlFLDhEQUFDLDZFQUFEO0FBQWEsY0FBUSxFQUFFSTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFhRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0FqREQ7O0dBQU1QO1VBR1dGOzs7S0FIWEU7QUFtRE4sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2ctZGV0YWlscy9ibG9nLWRldGFpbHMtZGFyay5qc3g/YTE3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXJrVGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvRGFya1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IEJsb2dEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2ctZGV0YWlscy9ibG9nLWRldGFpbHNcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZS1oZWFkZXIvcGFnZS1oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgYmxvZ3MgZnJvbSBcIi4uLy4uL2RhdGEvYmxvZzEuanNvblwiO1xyXG5cclxuY29uc3QgQmxvZ0RldGFpbHNEYXJrID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeSB8fCAxO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZEJsb2cgPSBibG9ncy5maW5kKChibG9nKSA9PiBibG9nLmlkID09PSBwYXJzZUludChpZCwgMTApKTtcclxuXHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRCbG9nKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBuYXZiYXIgPSBuYXZiYXJSZWYuY3VycmVudCxcclxuICAgICAgbG9nbyA9IGxvZ29SZWYuY3VycmVudDtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW25hdmJhclJlZl0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpZCB8fCAhc2VsZWN0ZWRCbG9nKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Jsb2cvYmxvZy1kYXJrXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtpZCwgcm91dGVyLCBzZWxlY3RlZEJsb2ddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERhcmtUaGVtZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtYmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jb2xvciBmaXhlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkaWVudC1jaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGllbnQtY2lyY2xlIHR3b1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmJhciBucj17bmF2YmFyUmVmfSBscj17bG9nb1JlZn0gLz5cclxuICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICB0aXRsZT1cIkJsb2cgRGV0YWlscy5cIlxyXG4gICAgICAgIHBhcmFncmFwaD1cIkFsbCB0aGUgbW9zdCBjdXJyZW50IG5ld3MgYW5kIGV2ZW50cyBvZiBvdXIgY3JlYXRpdmUgdGVhbS5cIlxyXG4gICAgICAvPlxyXG4gICAgICA8QmxvZ0RldGFpbHMgYmxvZ0RhdGE9e3NlbGVjdGVkQmxvZ30gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9EYXJrVGhlbWU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWxzRGFyaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGFya1RoZW1lIiwiTmF2YmFyIiwiQmxvZ0RldGFpbHMiLCJQYWdlSGVhZGVyIiwiRm9vdGVyIiwidXNlUm91dGVyIiwiYmxvZ3MiLCJCbG9nRGV0YWlsc0RhcmsiLCJuYXZiYXJSZWYiLCJ1c2VSZWYiLCJsb2dvUmVmIiwicm91dGVyIiwicXVlcnkiLCJpZCIsInNlbGVjdGVkQmxvZyIsImZpbmQiLCJibG9nIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibmF2YmFyIiwiY3VycmVudCIsImxvZ28iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog-details/blog-details-dark.jsx\n");

/***/ })

});