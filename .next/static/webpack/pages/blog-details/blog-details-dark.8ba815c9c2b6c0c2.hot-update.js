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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_blog3_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/blog3.json */ \"./src/data/blog3.json\");\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Blog_details_blog_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Blog-details/blog-details */ \"./src/components/Blog-details/blog-details.jsx\");\n/* harmony import */ var _components_Page_header_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Page-header/page-header */ \"./src/components/Page-header/page-header.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _data_blog1_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/blog1.json */ \"./src/data/blog1.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/c_i__a/Desktop/.JOBS/cybector_frontend/src/pages/blog-details/blog-details-dark.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar BlogDetailsDark = function BlogDetailsDark() {\n  _s();\n\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var id = router.query.id;\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    var navbar = navbarRef.current,\n        logo = logoRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n      }\n    });\n  }, [navbarRef]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: \"circle-bg\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        className: \"circle-color fixed\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          className: \"gradient-circle\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          className: \"gradient-circle two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Page_header_page_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      title: \"Blog Details.\",\n      paragraph: \"All the most current news and events of our creative team.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Blog_details_blog_details__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      blog: (0,_data_blog1_json__WEBPACK_IMPORTED_MODULE_8__.blogData)()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BlogDetailsDark, \"w57B5ZFou1E0j5KciHxsT8zb73Q=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = BlogDetailsDark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetailsDark);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogDetailsDark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlscy1kYXJrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsU0FBUyxHQUFHVixtREFBQSxDQUFhLElBQWIsQ0FBbEI7QUFDQSxNQUFNWSxPQUFPLEdBQUdaLG1EQUFBLENBQWEsSUFBYixDQUFoQjtBQUNBLE1BQU1hLE1BQU0sR0FBR04sa0VBQVMsRUFBeEI7QUFDQSxNQUFPTyxFQUFQLEdBQWFELE1BQU0sQ0FBQ0UsS0FBcEIsQ0FBT0QsRUFBUDtBQUVBZCxFQUFBQSxzREFBQSxDQUFnQixZQUFNO0FBQ3BCLFFBQUlpQixNQUFNLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBdkI7QUFBQSxRQUNFQyxJQUFJLEdBQUdQLE9BQU8sQ0FBQ00sT0FEakI7O0FBRUEsUUFBSUUsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEdBQXpCLEVBQThCO0FBQzVCSixNQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFlBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLE1BQUFBLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsWUFBeEI7QUFDRDs7QUFDREosSUFBQUEsTUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLFVBQUlMLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUF6QixFQUE4QjtBQUM1QkosUUFBQUEsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixZQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMTixRQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLFlBQXhCO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FmRCxFQWVHLENBQUNkLFNBQUQsQ0FmSDtBQWdCQSxzQkFDRSw4REFBQyxxREFBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxpRUFBRDtBQUFRLFFBQUUsRUFBRUEsU0FBWjtBQUF1QixRQUFFLEVBQUVFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFLDhEQUFDLDJFQUFEO0FBQ0UsV0FBSyxFQUFDLGVBRFI7QUFFRSxlQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFZTSw4REFBQyw2RUFBRDtBQUFhLFVBQUksRUFBRUosMERBQVE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpOLGVBYU0sOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBdkNEOztHQUFNQztVQUdXRjs7O0tBSFhFO0FBeUNOLCtEQUFlQSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ibG9nLWRldGFpbHMvYmxvZy1kZXRhaWxzLWRhcmsuanN4P2ExNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYmxvZzNEYXRhIGZyb20gXCIuLi8uLi9kYXRhL2Jsb2czLmpzb25cIjtcclxuaW1wb3J0IERhcmtUaGVtZSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9EYXJrXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgQmxvZ0RldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlsc1wiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdlLWhlYWRlci9wYWdlLWhlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7YmxvZ0RhdGF9IGZyb20gXCIuLi8uLi9kYXRhL2Jsb2cxLmpzb25cIlxyXG5cclxuY29uc3QgQmxvZ0RldGFpbHNEYXJrID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmJhclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBuYXZiYXIgPSBuYXZiYXJSZWYuY3VycmVudCxcclxuICAgICAgbG9nbyA9IGxvZ29SZWYuY3VycmVudDtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW25hdmJhclJlZl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGFya1RoZW1lPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1iZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNvbG9yIGZpeGVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRpZW50LWNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkaWVudC1jaXJjbGUgdHdvXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2YmFyIG5yPXtuYXZiYXJSZWZ9IGxyPXtsb2dvUmVmfSAvPlxyXG4gICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgIHRpdGxlPVwiQmxvZyBEZXRhaWxzLlwiXHJcbiAgICAgICAgcGFyYWdyYXBoPVwiQWxsIHRoZSBtb3N0IGN1cnJlbnQgbmV3cyBhbmQgZXZlbnRzIG9mIG91ciBjcmVhdGl2ZSB0ZWFtLlwiXHJcbiAgICAgIC8+XHJcbiAgICAgICAgICA8QmxvZ0RldGFpbHMgYmxvZz17YmxvZ0RhdGEoKX0gLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvRGFya1RoZW1lPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlsc0Rhcms7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImJsb2czRGF0YSIsIkRhcmtUaGVtZSIsIk5hdmJhciIsIkJsb2dEZXRhaWxzIiwiUGFnZUhlYWRlciIsIkZvb3RlciIsInVzZVJvdXRlciIsImJsb2dEYXRhIiwiQmxvZ0RldGFpbHNEYXJrIiwibmF2YmFyUmVmIiwidXNlUmVmIiwibG9nb1JlZiIsInJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJuYXZiYXIiLCJjdXJyZW50IiwibG9nbyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog-details/blog-details-dark.jsx\n");

/***/ })

});