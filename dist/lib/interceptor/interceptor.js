"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseInterceptor = void 0;
const core_1 = require("../core");
// 整个路由匹配拦截
// 拦截器会在守卫之后执行
// 单独路由拦截
const UseInterceptor = (fn) => {
    return function (target, propertyKey) {
        core_1.ref.def(propertyKey, fn, target.constructor.prototype, ":interceptor");
    };
};
exports.UseInterceptor = UseInterceptor;
//# sourceMappingURL=interceptor.js.map