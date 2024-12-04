'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupArgShare = exports.fetchScript = void 0;
const fetchScript = () => {
    return (resolve) => {
        const proxy = {
            get: (request) => () => () => "Inited arg shared",
            init: (...args) => {
                try {
                    window.setWebpaclArgShareSingleton(args);
                }
                catch (e) {
                    console.log("remote container already initialized", e);
                }
            },
        };
        resolve(proxy);
    };
};
exports.fetchScript = fetchScript;
const SetupArgShare = () => {
    return {
        InitialArgShare: "promise new Promise(" + (0, exports.fetchScript)() + ")"
    };
};
exports.SetupArgShare = SetupArgShare;
//# sourceMappingURL=WebpackArgShared.js.map
