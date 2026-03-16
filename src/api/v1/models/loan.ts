export type LoanStatus = "pending" | "under_review" | "flagged" | "approved" | "rejected";

export interface Loan {
    id: number;
    applicant: string
    amount: number;
    status: LoanStatus;
    createdAt: string;
}


