import { AdoOrmBaseEnity } from "../core";
declare const Enity: (dbname: string) => (target: typeof AdoOrmBaseEnity) => void;
declare const Key: PropertyDecorator;
declare const Keyword: PropertyDecorator;
declare const EnityTable: Map<any, any>;
export { Enity, Key, Keyword, EnityTable };
