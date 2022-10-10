import { CONSTANT } from "../constant/constant";
import { ref } from "../ioc/ref";
import { OberServer } from "../ober/oberserver";

export const CreateCache = (cacheName: string): MethodDecorator => {
  return function (
    target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const val = descriptor.value;
    ref.def(cacheName, val, target.constructor.prototype);
  };
};

export const UseCache = (cacheName: string): PropertyDecorator => {
  return async function (target: Object, propertyKey: string | symbol) {
    let OberInst = ref.get(
      CONSTANT.Observer,
      OberServer.prototype
    ) as OberServer;
    const CommonClass = OberInst.get(CONSTANT.Config)?.value;
    const CacheInst = ref.get(cacheName, CommonClass.prototype);
    target.constructor.prototype[propertyKey] = CacheInst;
    CacheInst().then((res: any) => {
      target.constructor.prototype[propertyKey] = res;
    });
  };
};

export function getCachekey(type: string, table: string, options: any) {
  if (type == "list") {
    if (options.key && options.page && options.size) {
      return `list&table:${table}&key:${options.key}&page:${options.page}&size:${options.size}`;
    }
    if (!options.key && options.page && options.size) {
      return `list&table:${table}&key:null&page:${options.page}&size:${options.size}`;
    }
    if (options.key && !options.page && !options.size) {
      return `list&table:${table}&key:${options.key}&page:1&size:10`;
    }
    if (!options.key && !options.page && !options.size) {
      return `list&table:${table}&key:null&page:1&size:10`;
    }
  }
  if (type == "get") {
    return `get&table:${table}&${options.key}:${options.value}`;
  }

  if (type == "update") {
    return `get&table:${table}&${options.key}:${options.value}`;
  }
  return "";
}