import { MedicalHistoriesService } from '../../services/medical-histories.service';
export declare class MedicalHistoriesController {
    private medicalHistoriesService;
    constructor(medicalHistoriesService: MedicalHistoriesService);
    getHello(): Promise<import("../../entities/medical-history.entity").MedicalHistory[]>;
    create(payload: any): Promise<import("../../entities/medical-history.entity").MedicalHistory>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
