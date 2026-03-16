import { Loan } from "../models/loan";
import { CreateLoanInput } from "../models/createLoan";
import { sampleLoans } from "../models/sampleLoans";


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

export const updateLoan = (id: number, loan: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteLoan = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};