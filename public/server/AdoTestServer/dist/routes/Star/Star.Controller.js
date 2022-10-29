"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarController = void 0;
const ado_node_1 = require("ado-node");
const Star_Service_1 = require("./Star.Service");
let StarController = class StarController extends ado_node_1.AdoNodeController {
    StarService;
    hello() {
        return {
            data: "hello world",
            code: 0,
        };
    }
};
__decorate([
    (0, ado_node_1.Inject)(Star_Service_1.StarService)
], StarController.prototype, "StarService", void 0);
__decorate([
    (0, ado_node_1.Get)("")
], StarController.prototype, "hello", null);
StarController = __decorate([
    (0, ado_node_1.Controller)("/star")
], StarController);
exports.StarController = StarController;
//# sourceMappingURL=Star.Controller.js.map