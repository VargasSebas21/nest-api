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
exports.MedicalDiagnostic = void 0;
const typeorm_1 = require("typeorm");
const medical_history_entity_1 = require("./medical-history.entity");
let MedicalDiagnostic = exports.MedicalDiagnostic = class MedicalDiagnostic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MedicalDiagnostic.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at' }),
    __metadata("design:type", String)
], MedicalDiagnostic.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medical_history_entity_1.MedicalHistory),
    (0, typeorm_1.JoinColumn)({ name: 'medical_history_id' }),
    __metadata("design:type", medical_history_entity_1.MedicalHistory)
], MedicalDiagnostic.prototype, "medicalHistory", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medical_history_id' }),
    __metadata("design:type", Number)
], MedicalDiagnostic.prototype, "medicalHistoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], MedicalDiagnostic.prototype, "description", void 0);
exports.MedicalDiagnostic = MedicalDiagnostic = __decorate([
    (0, typeorm_1.Entity)({ name: 'medical_diagnostics', schema: 'public' })
], MedicalDiagnostic);
//# sourceMappingURL=medical-diagnostic.entity.js.map