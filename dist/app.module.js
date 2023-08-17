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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./services/user.service");
const user_entity_1 = require("./entities/user.entity");
const medical_history_entity_1 = require("./entities/medical-history.entity");
const medical_histories_controller_1 = require("./controller/medical-histories/medical-histories.controller");
const medical_histories_service_1 = require("./services/medical-histories.service");
const medical_diagnostic_entity_1 = require("./entities/medical-diagnostic.entity");
const medical_diagnostic_controller_1 = require("./controller/medical-diagnostic/medical-diagnostic.controller");
const medical_diagnostic_service_1 = require("./services/medical-diagnostic.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.development.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, medical_history_entity_1.MedicalHistory, medical_diagnostic_entity_1.MedicalDiagnostic]),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('HOST'),
                    port: +configService.get('PORT'),
                    username: configService.get('USERNAME'),
                    password: configService.get('PASSWORD'),
                    database: configService.get('DATABASE'),
                    autoLoadEntities: true,
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            medical_histories_controller_1.MedicalHistoriesController,
            medical_diagnostic_controller_1.MedicalDiagnosticController,
        ],
        providers: [
            app_service_1.AppService,
            user_service_1.UserService,
            medical_histories_service_1.MedicalHistoriesService,
            medical_diagnostic_service_1.MedicalDiagnosticService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map