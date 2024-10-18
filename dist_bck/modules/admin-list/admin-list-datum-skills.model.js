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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatumSkills = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const admin_list_datum_model_1 = require("./admin-list-datum.model");
let DatumSkills = class DatumSkills extends sequelize_typescript_1.Model {
};
exports.DatumSkills = DatumSkills;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], DatumSkills.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => admin_list_datum_model_1.Datum),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], DatumSkills.prototype, "datum_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], DatumSkills.prototype, "skill", void 0);
exports.DatumSkills = DatumSkills = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'datum_skills', createdAt: false, updatedAt: false })
], DatumSkills);
//# sourceMappingURL=admin-list-datum-skills.model.js.map