'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccessoryGlobalSingle = exports.CreateAccessoryGlobal = exports.AccessoryGlobal = void 0;
const Helper_1 = require("./Helper");
const whandler = (0, Helper_1.getWindowHandler)('z___y3y__1_f');
class AccessoryGlobal extends Map {
    constructor() {
        super(...arguments);
        this.GetValue = (key) => {
            return this.get(key);
        };
        this.SetValue = (key, value) => {
            return this.set(key, value);
        };
    }
}
exports.AccessoryGlobal = AccessoryGlobal;
let handler = {};
const CreateAccessoryGlobal = (options) => {
    if ((options === null || options === void 0 ? void 0 : options.attachToWindow) === true) {
        handler = whandler;
    }
    let inst = handler.instanse;
    if (!inst) {
        inst = new AccessoryGlobal();
        handler.instanse = inst;
    }
    return inst;
};
exports.CreateAccessoryGlobal = CreateAccessoryGlobal;
exports.CreateAccessoryGlobalSingle = (0, Helper_1.CreateActionSingle)("cag", exports.CreateAccessoryGlobal);
//# sourceMappingURL=AccessoryGlobal.js.map
