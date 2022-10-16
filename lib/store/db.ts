import { ref } from "../ioc/ref";

// target: Object,
// propertyKey: string | symbol,
// descriptor: PropertyDescriptor

const CreateDb = (dbname: string): MethodDecorator => {
  return function (
    target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const val = descriptor.value();
    ref.def(dbname, val, target.constructor.prototype);
  };
};

export { CreateDb };