'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.setWebpaclArgShareSingleton = exports.getWebpaclArgShareSingleton = void 0;
exports.dynamicImport = dynamicImport;
const tslib_1 = require("tslib");
const Helper_1 = require("./Helper");
const GWindow = window;
const remoteContainer = (0, Helper_1.getWindowHandler)('z_rtctn');
const setRemoteLink = (remoteName, module) => {
    const remotes = remoteContainer;
    remotes[remoteName] = module;
};
const loadScripts = (module, remoteUrl) => {
    if (remoteContainer[module]) {
        return Promise.resolve(remoteContainer[module]);
    }
    return new Promise((resolve, reject) => {
        // This part depends on how you plan on hosting and versioning your federated modules
        const script = document.createElement("script");
        script.onerror = () => {
            document.head.removeChild(script);
            reject("loading " + remoteUrl + " failed!");
        };
        script.async = false;
        script.src = remoteUrl + "?v=" + new Date().getTime();
        script.onload = () => {
            // the injected script has loaded and is available on window
            // we can now resolve this Promise
            const proxy = {
                get: (request) => GWindow[module].get(request),
                init: () => {
                    try {
                        const args = (0, exports.getWebpaclArgShareSingleton)();
                        if (!args.data) {
                            args.data = [];
                        }
                        else if (!Array.isArray(args.data)) {
                            args.data = [args.data];
                        }
                        const res = GWindow[module].init(...args.data);
                        return res;
                    }
                    catch (e) {
                        console.log("remote container already initialized");
                    }
                },
            };
            setRemoteLink(module, GWindow[module]);
            resolve(proxy);
        };
        // inject this script with the src set to the versioned remoteEntry.js
        document.head.appendChild(script);
    });
};
function dynamicImport(modulePath, remoteUrl) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const [remoteName, module] = modulePath.split("/");
        const container = yield loadScripts(remoteName, remoteUrl);
        yield container.init();
        const factory = yield container.get(`./${module}`);
        return factory();
    });
}
const webpackShared = {};
const getWebpaclArgShare = () => {
    return webpackShared;
};
exports.getWebpaclArgShareSingleton = (0, Helper_1.CreateActionSingle)('_zzd1', getWebpaclArgShare);
const setWebpaclArgShare = (data) => {
    webpackShared.data = data;
};
exports.setWebpaclArgShareSingleton = (0, Helper_1.CreateActionSingle)('_zzd2', setWebpaclArgShare);
window.setWebpaclArgShareSingleton = exports.setWebpaclArgShareSingleton;
// export const InitialArgShare = () => {
//     import("InitialArgShare" as any)
//     return "InitialArgShare"
// }
//# sourceMappingURL=DynamicLoader.js.map
