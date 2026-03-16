import { LoanStatus } from "./loan";

export interface CreateLoanInput {
    applicant: string;
    amount: number;
    status: LoanStatus;
}