import { MedicalHistory } from 'src/entities/medical-history.entity';
import { Repository } from 'typeorm';
export declare class MedicalHistoriesService {
    private medicalHistoryRepository;
    constructor(medicalHistoryRepository: Repository<MedicalHistory>);
    findAll(): Promise<MedicalHistory[]>;
    create(medicalHistory: MedicalHistory): Promise<MedicalHistory>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
