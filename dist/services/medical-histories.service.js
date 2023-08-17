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
exports.MedicalHistoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medical_history_entity_1 = require("../entities/medical-history.entity");
const typeorm_2 = require("typeorm");
let MedicalHistoriesService = exports.MedicalHistoriesService = class MedicalHistoriesService {
    constructor(medicalHistoryRepository) {
        this.medicalHistoryRepository = medicalHistoryRepository;
    }
    findAll() {
        return this.medicalHistoryRepository.find();
    }
    create(medicalHistory) {
        return this.medicalHistoryRepository.save(medicalHistory);
    }
    delete(id) {
        return this.medicalHistoryRepository.delete(id);
    }
};
exports.MedicalHistoriesService = MedicalHistoriesService = __decorate([
    (0, common_1.Injectable)({
        scope: common_1.Scope.DEFAULT,
    }),
    __param(0, (0, typeorm_1.InjectRepository)(medical_history_entity_1.MedicalHistory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicalHistoriesService);
//# sourceMappingURL=medical-histories.service.js.map