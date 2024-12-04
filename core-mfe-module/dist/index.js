'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.__CORE_MFE_SINGLETON__ = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./LoadingCompoenent"), exports);
tslib_1.__exportStar(require("./Helper"), exports);
tslib_1.__exportStar(require("./AccessoryGlobal"), exports);
tslib_1.__exportStar(require("./DynamicLoader"), exports);
if (!globalThis.__CORE_MFE_SINGLETON__) {
    globalThis.__CORE_MFE_SINGLETON__ = { instance: "core-mfe-module instance" };
    console.log("Singleton instance created!");
}
else {
    console.log("Reused existing singleton instance.");
}
exports.__CORE_MFE_SINGLETON__ = globalThis.__CORE_MFE_SINGLETON__;
//# sourceMappingURL=index.js.map
