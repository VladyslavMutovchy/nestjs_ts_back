"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_list_datum_model_1 = require("./admin-list-datum.model");
const admin_list_datum_skills_model_1 = require("./admin-list-datum-skills.model");
const create_datum_dto_1 = require("./dto/create-datum.dto");
const create_skill_dto_1 = require("./dto/create-skill.dto");
let AdminListController = class AdminListController {
    async create(userDto) {
        const newDatum = await admin_list_datum_model_1.Datum.create(userDto);
        return newDatum;
    }
    async getAll() {
        return await admin_list_datum_model_1.Datum.findAll({ include: [admin_list_datum_skills_model_1.DatumSkills] });
    }
    async getOne(id) {
        return await admin_list_datum_model_1.Datum.findByPk(id, { include: [admin_list_datum_skills_model_1.DatumSkills] });
    }
    async update(id, userDto) {
        await admin_list_datum_model_1.Datum.update(userDto, { where: { id } });
        return this.getOne(id);
    }
    async delete(id) {
        await admin_list_datum_model_1.Datum.destroy({ where: { id } });
    }
    async addSkill(skillDto) {
        const newSkill = await admin_list_datum_skills_model_1.DatumSkills.create(skillDto);
        return newSkill;
    }
    async updateSkill(id, skillDto) {
        await admin_list_datum_skills_model_1.DatumSkills.update(skillDto, { where: { id } });
        return admin_list_datum_skills_model_1.DatumSkills.findByPk(id);
    }
    async getAllSkills() {
        return await admin_list_datum_skills_model_1.DatumSkills.findAll();
    }
    async deleteSkill(id) {
        await admin_list_datum_skills_model_1.DatumSkills.destroy({ where: { id } });
    }
};
exports.AdminListController = AdminListController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание персонажа' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: admin_list_datum_model_1.Datum }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_datum_dto_1.CreateDatumDto]),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех персонажей' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [admin_list_datum_model_1.Datum] }),
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение персонажа по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_list_datum_model_1.Datum }),
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление персонажа' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_list_datum_model_1.Datum }),
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_datum_dto_1.CreateDatumDto]),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление персонажа по ID' }),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    (0, common_1.Delete)('/deleteById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание скилла' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: admin_list_datum_skills_model_1.DatumSkills }),
    (0, common_1.Post)('/addSkill'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_skill_dto_1.CreateSkillDto]),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "addSkill", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление cкилла' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_list_datum_skills_model_1.DatumSkills }),
    (0, common_1.Put)('/update-skill/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_skill_dto_1.CreateSkillDto]),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "updateSkill", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех скиллов' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [admin_list_datum_skills_model_1.DatumSkills] }),
    (0, common_1.Get)('/getSkills'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "getAllSkills", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление скилла по ID' }),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    (0, common_1.Delete)('/deleteSkillById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminListController.prototype, "deleteSkill", null);
exports.AdminListController = AdminListController = __decorate([
    (0, common_1.Controller)('admin-list')
], AdminListController);
//# sourceMappingURL=admin-list.controller.js.map