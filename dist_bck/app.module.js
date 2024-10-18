"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./modules/users/users.module");
const config_1 = require("@nestjs/config");
const users_model_1 = require("./modules/users/users.model");
const roles_module_1 = require("./modules/roles/roles.module");
const roles_model_1 = require("./modules/roles/roles.model");
const user_roles_model_1 = require("./modules/roles/user-roles.model");
const auth_module_1 = require("./modules/auth/auth.module");
const admin_list_module_1 = require("./modules/admin-list/admin-list.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                models: [users_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles],
                autoLoadModels: true,
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            admin_list_module_1.AdminListModule,
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map