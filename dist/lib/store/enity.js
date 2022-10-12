"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnityTable = exports.Keyword = exports.Key = exports.Enity = void 0;
const ref_1 = require("../ioc/ref");
const Enity = (dbname) => {
    return function (target) {
        const targetInst = new target();
        targetInst.BaseEnity = target;
        targetInst.getConn(dbname);
        ref_1.ref.def(target.name, targetInst, target.prototype);
    };
};
exports.Enity = Enity;
const Key = (target, propertyKey) => {
    ref_1.ref.def("key", propertyKey, target.constructor.prototype);
};
exports.Key = Key;
const Keyword = (target, propertyKey) => {
    ref_1.ref.def("keyword", propertyKey, target.constructor.prototype);
};
exports.Keyword = Keyword;
const EnityTable = new Map();
exports.EnityTable = EnityTable;
//# sourceMappingURL=enity.js.map