"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const ref_1 = require("../ioc/ref");
const Error = (e) => {
    return function (_target, _propertyKey, descriptor) {
        if (e.force) {
            descriptor.value = function (_req, res) {
                const { message, code } = e;
                res.json({ message, code });
            };
        }
        ref_1.ref.def("error", e, descriptor.value);
    };
};
exports.Error = Error;
//# sourceMappingURL=error.js.map