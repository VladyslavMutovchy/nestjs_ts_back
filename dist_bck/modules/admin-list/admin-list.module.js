"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminListModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_list_controller_1 = require("./admin-list.controller");
const admin_list_service_1 = require("./admin-list.service");
const admin_list_datum_model_1 = require("./admin-list-datum.model");
const admin_list_datum_skills_model_1 = require("./admin-list-datum-skills.model");
let AdminListModule = class AdminListModule {
};
exports.AdminListModule = AdminListModule;
exports.AdminListModule = AdminListModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([admin_list_datum_model_1.Datum, admin_list_datum_skills_model_1.DatumSkills])
        ],
        controllers: [admin_list_controller_1.AdminListController],
        providers: [admin_list_service_1.AdminListService],
    })
], AdminListModule);
//# sourceMappingURL=admin-list.module.js.map