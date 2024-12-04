'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRemoteComponent = CreateRemoteComponent;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const runtime_1 = require("@module-federation/runtime");
tslib_1.__exportStar(require("@module-federation/runtime"), exports);
function CreateRemoteComponent(optiops) {
    const ComponentLazy = react_1.default.lazy(() => {
        let container;
        let pathFull = '';
        if ('loading' in optiops) {
            pathFull = typeof optiops.loading;
            container = optiops.loading;
        }
        else {
            pathFull = typeof optiops.modulePath === 'object' ? `${optiops.modulePath.scope}/${optiops.modulePath.module}` : optiops.modulePath;
            container = (0, runtime_1.loadRemote)(pathFull);
        }
        try {
            return container.then((module) => {
                return module.Adapter ? { default: module.Adapter } : module;
            });
        }
        catch (error) {
            console.error(`Error loading remote module ${pathFull}:`, error);
            return Promise.resolve(react_1.default.createElement(react_1.default.Fragment, null));
        }
    });
    const LoadingMFE = (props) => {
        var _a;
        return (react_1.default.createElement(react_1.Suspense, { fallback: (_a = optiops.loadingFallback) !== null && _a !== void 0 ? _a : 'loading...' },
            react_1.default.createElement(ComponentLazy, Object.assign({}, props))));
    };
    return LoadingMFE;
}
//# sourceMappingURL=LoadingCompoenent.js.map
