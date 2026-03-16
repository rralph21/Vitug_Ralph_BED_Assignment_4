import { LoanStatus } from "./loan";

export interface UpdateLoanInput {
    applicant?: string;
    amount?: number;
    status?: LoanStatus;
}