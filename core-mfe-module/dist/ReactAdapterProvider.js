'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdater = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = tslib_1.__importDefault(require("react"));
const client_1 = tslib_1.__importDefault(require("react-dom/client"));
class ReactAdapterProvider extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.refHold = null;
        this.init = (hydrate) => {
            (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const _a = this.props, { component, children } = _a, rest = tslib_1.__rest(_a, ["component", "children"]);
                if (hydrate && this.refHold) {
                    client_1.default.hydrateRoot(this.refHold, react_1.default.createElement(component, rest, children));
                }
                else {
                    client_1.default.createRoot(this.refHold).render(react_1.default.createElement(component, rest, children));
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
        return react_1.default.createElement("div", { style: { display: 'flex', flex: 1 }, ref: (ref) => (this.refHold = ref) });
    }
}
const CreateAdater = (Compoenent) => {
    const Adapter = react_1.default.forwardRef((props, ref) => {
        return react_1.default.createElement(ReactAdapterProvider, Object.assign({}, props, { component: Compoenent, ref: ref }));
    });
    return { Adapter };
};
exports.CreateAdater = CreateAdater;
exports.default = ReactAdapterProvider;
//# sourceMappingURL=ReactAdapterProvider.js.map
