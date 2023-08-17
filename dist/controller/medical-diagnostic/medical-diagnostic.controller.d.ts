import { MedicalDiagnosticService } from 'src/services/medical-diagnostic.service';
export declare class MedicalDiagnosticController {
    private medicalDiagnosticService;
    constructor(medicalDiagnosticService: MedicalDiagnosticService);
    getHello(): Promise<import("../../entities/medical-diagnostic.entity").MedicalDiagnostic[]>;
    create(payload: any): Promise<import("../../entities/medical-diagnostic.entity").MedicalDiagnostic>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, payload: any): Promise<import("typeorm").UpdateResult>;
}
