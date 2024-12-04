"use strict";
(self["webpackChunkapp_remote2"] = self["webpackChunkapp_remote2"] || []).push([["src_App_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Adapter: () => (/* binding */ Adapter),
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ReactAdapterProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactAdapterProvider */ "./src/ReactAdapterProvider.tsx");
/* harmony import */ var core_mfe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-mfe-module */ "webpack/sharing/consume/default/core-mfe-module/core-mfe-module");
/* harmony import */ var core_mfe_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_mfe_module__WEBPACK_IMPORTED_MODULE_2__);



const test = (0,core_mfe_module__WEBPACK_IMPORTED_MODULE_2__.CreateAccessoryGlobal)({});
console.log(test.GetValue("hello1"));
const App = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Hello,Remote 2 React with TypeScript and Webpack!"),
        "Hello1:",
        JSON.stringify(test.GetValue("hello1"))));
};
const Adapter = (0,_ReactAdapterProvider__WEBPACK_IMPORTED_MODULE_1__.CreateAdater)(App).Adapter;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/ReactAdapterProvider.tsx":
/*!**************************************!*\
  !*** ./src/ReactAdapterProvider.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateAdater: () => (/* binding */ CreateAdater),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable @typescript-eslint/no-explicit-any */


class ReactAdapterProvider extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        this.refHold = null;
        this.init = (hydrate) => {
            (() => __awaiter(this, void 0, void 0, function* () {
                const _a = this.props, { component, children } = _a, rest = __rest(_a, ["component", "children"]);
                if (hydrate && this.refHold) {
                    react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate(react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, rest, children), this.refHold);
                }
                else {
                    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, rest, children), this.refHold);
                }
            }))();
        };
        this.refHold;
    }
    componentDidUpdate() {
        this.init(true);
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: 'flex', flex: 1 }, ref: (ref) => (this.refHold = ref) });
    }
}
const CreateAdater = (Compoenent) => {
    const Adapter = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactAdapterProvider, Object.assign({}, props, { component: Compoenent, ref: ref }));
    });
    return { Adapter };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactAdapterProvider);


/***/ })

}]);
//# sourceMappingURL=src_App_tsx.bundle.js.map