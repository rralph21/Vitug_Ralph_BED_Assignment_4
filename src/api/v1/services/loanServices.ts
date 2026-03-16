import { Loan } from "../models/loan";
import { CreateLoanInput } from "../models/createLoan";
import { sampleLoans } from "../models/sampleLoans";
import { UpdateLoanInput } from "../models/updateLoan";


export const getAllLoansService = (): Loan[] => {
    return sampleLoans;

};

export const createLoanService = (loanData: CreateLoanInput): Loan => {
    const newLoan: Loan = {
        id: sampleLoans.length + 1,
        applicant: loanData.applicant,
        amount: loanData.amount,
        status: loanData.status,
        createdAt: new Date().toISOString(),
    };

    sampleLoans.push(newLoan);

    return newLoan;
};

export const updateLoanService = (
    id: number,
    updateData: UpdateLoanInput
): Loan | null => {
    const loanIndex = sampleLoans.findIndex((loan) => loan.id === id);

    if (loanIndex === -1) {
        return null;
    }

    sampleLoans[loanIndex] = {
        ...sampleLoans[loanIndex],
        ...updateData,
    };

    return sampleLoans[loanIndex];
};

export const deleteLoan = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};