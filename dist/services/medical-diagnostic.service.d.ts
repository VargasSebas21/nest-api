import { MedicalDiagnostic } from 'src/entities/medical-diagnostic.entity';
import { Repository } from 'typeorm';
export declare class MedicalDiagnosticService {
    private medicalDiagnosticRepository;
    constructor(medicalDiagnosticRepository: Repository<MedicalDiagnostic>);
    findAll(): Promise<MedicalDiagnostic[]>;
    create(medicalDiagnostic: MedicalDiagnostic): Promise<MedicalDiagnostic>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, medicalDiagnostic: MedicalDiagnostic): Promise<import("typeorm").UpdateResult>;
}
