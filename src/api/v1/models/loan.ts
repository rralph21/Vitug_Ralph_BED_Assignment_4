export interface Loan {
    id: number;
    applicant: string
    amount: number;
    status: "pending" | "under_review" | "flagged";
    createdAt: Date;
}

