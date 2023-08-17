import { MedicalHistory } from './medical-history.entity';
export declare class MedicalDiagnostic {
    id: number;
    createdAt: string;
    medicalHistory: MedicalHistory;
    medicalHistoryId: number;
    description: string;
}
