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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Blog_details_blog_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Blog-details/blog-details */ \"./src/components/Blog-details/blog-details.jsx\");\n/* harmony import */ var _components_Page_header_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Page-header/page-header */ \"./src/components/Page-header/page-header.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_blog1_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/blog1.json */ \"./src/data/blog1.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/c_i__a/Desktop/.JOBS/cybector_frontend/src/pages/blog-details/blog-details-dark.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar BlogDetailsDark = function BlogDetailsDark() {\n  _s();\n\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  var id = router.query.id;\n  var selectedBlog = _data_blog1_json__WEBPACK_IMPORTED_MODULE_7__.find(function (blog) {\n    return blog.id === id;\n  });\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    var navbar = navbarRef.current,\n        logo = logoRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n      }\n    });\n  }, [navbarRef]);\n  useEffect(function () {\n    if (!id) {\n      router.push(\"/path-to-another-page\"); // Replace with the actual path\n    }\n  }, [id, router]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"circle-bg\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"circle-color fixed\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"gradient-circle\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"gradient-circle two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Page_header_page_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Blog Details.\",\n      paragraph: \"All the most current news and events of our creative team.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Blog_details_blog_details__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      blog: _data_blog1_json__WEBPACK_IMPORTED_MODULE_7__[id]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BlogDetailsDark, \"8BpXEv6WJDYv9B8y+mRQVsFyoQ0=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c = BlogDetailsDark;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetailsDark);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogDetailsDark\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlscy1kYXJrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsU0FBUyxHQUFHVCxtREFBQSxDQUFhLElBQWIsQ0FBbEI7QUFDQSxNQUFNVyxPQUFPLEdBQUdYLG1EQUFBLENBQWEsSUFBYixDQUFoQjtBQUNBLE1BQU1ZLE1BQU0sR0FBR04sa0VBQVMsRUFBeEI7QUFDQSxNQUFRTyxFQUFSLEdBQWVELE1BQU0sQ0FBQ0UsS0FBdEIsQ0FBUUQsRUFBUjtBQUVBLE1BQU1FLFlBQVksR0FBR1Isa0RBQUEsQ0FBVyxVQUFDVSxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDSixFQUFMLEtBQVlBLEVBQXRCO0FBQUEsR0FBWCxDQUFyQjtBQUVBYixFQUFBQSxzREFBQSxDQUFnQixZQUFNO0FBQ3BCLFFBQUltQixNQUFNLEdBQUdWLFNBQVMsQ0FBQ1csT0FBdkI7QUFBQSxRQUNFQyxJQUFJLEdBQUdWLE9BQU8sQ0FBQ1MsT0FEakI7O0FBRUEsUUFBSUUsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEdBQXpCLEVBQThCO0FBQzVCSixNQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFlBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLE1BQUFBLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsWUFBeEI7QUFDRDs7QUFDREosSUFBQUEsTUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLFVBQUlMLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUF6QixFQUE4QjtBQUM1QkosUUFBQUEsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixZQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMTixRQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLFlBQXhCO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FmRCxFQWVHLENBQUNqQixTQUFELENBZkg7QUFnQkFTLEVBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDTCxFQUFMLEVBQVM7QUFDUEQsTUFBQUEsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZLHVCQUFaLEVBRE8sQ0FDK0I7QUFDdkM7QUFDRixHQUpRLEVBSU4sQ0FBQ2YsRUFBRCxFQUFLRCxNQUFMLENBSk0sQ0FBVDtBQUtBLHNCQUNFLDhEQUFDLHFEQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLDhEQUFDLGlFQUFEO0FBQVEsUUFBRSxFQUFFSCxTQUFaO0FBQXVCLFFBQUUsRUFBRUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUUsOERBQUMsMkVBQUQ7QUFDRSxXQUFLLEVBQUMsZUFEUjtBQUVFLGVBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVlFLDhEQUFDLDZFQUFEO0FBQWEsVUFBSSxFQUFFSiw2Q0FBSyxDQUFDTSxFQUFEO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWFFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQTlDRDs7R0FBTUw7VUFHV0Y7OztLQUhYRTtBQWdETiwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlscy1kYXJrLmpzeD9hMTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhcmtUaGVtZSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9EYXJrXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgQmxvZ0RldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlsc1wiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdlLWhlYWRlci9wYWdlLWhlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBibG9ncyBmcm9tIFwiLi4vLi4vZGF0YS9ibG9nMS5qc29uXCI7XHJcblxyXG5jb25zdCBCbG9nRGV0YWlsc0RhcmsgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBzZWxlY3RlZEJsb2cgPSBibG9ncy5maW5kKChibG9nKSA9PiBibG9nLmlkID09PSBpZCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQsXHJcbiAgICAgIGxvZ28gPSBsb2dvUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtuYXZiYXJSZWZdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wYXRoLXRvLWFub3RoZXItcGFnZVwiKTsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgcGF0aFxyXG4gICAgfVxyXG4gIH0sIFtpZCwgcm91dGVyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXJrVGhlbWU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY29sb3IgZml4ZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGllbnQtY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRpZW50LWNpcmNsZSB0d29cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZiYXIgbnI9e25hdmJhclJlZn0gbHI9e2xvZ29SZWZ9IC8+XHJcbiAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9XCJCbG9nIERldGFpbHMuXCJcclxuICAgICAgICBwYXJhZ3JhcGg9XCJBbGwgdGhlIG1vc3QgY3VycmVudCBuZXdzIGFuZCBldmVudHMgb2Ygb3VyIGNyZWF0aXZlIHRlYW0uXCJcclxuICAgICAgLz5cclxuICAgICAgPEJsb2dEZXRhaWxzIGJsb2c9e2Jsb2dzW2lkXX0gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9EYXJrVGhlbWU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWxzRGFyaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGFya1RoZW1lIiwiTmF2YmFyIiwiQmxvZ0RldGFpbHMiLCJQYWdlSGVhZGVyIiwiRm9vdGVyIiwidXNlUm91dGVyIiwiYmxvZ3MiLCJCbG9nRGV0YWlsc0RhcmsiLCJuYXZiYXJSZWYiLCJ1c2VSZWYiLCJsb2dvUmVmIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInNlbGVjdGVkQmxvZyIsImZpbmQiLCJibG9nIiwidXNlRWZmZWN0IiwibmF2YmFyIiwiY3VycmVudCIsImxvZ28iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog-details/blog-details-dark.jsx\n");

/***/ })

});