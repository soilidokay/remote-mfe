'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateActionSingle = exports.getWindowHandler = void 0;
const GWindow = globalThis;
const getWindowHandler = (key) => {
    if (!GWindow[key]) {
        GWindow[key] = {};
    }
    return GWindow[key];
};
exports.getWindowHandler = getWindowHandler;
const handerlActions = (0, exports.getWindowHandler)('z_c1z_1rr');
const CreateActionSingle = (key, action) => {
    if (!handerlActions[key]) {
        handerlActions[key] = action;
    }
    return handerlActions[key];
};
exports.CreateActionSingle = CreateActionSingle;
//# sourceMappingURL=Helper.js.map
