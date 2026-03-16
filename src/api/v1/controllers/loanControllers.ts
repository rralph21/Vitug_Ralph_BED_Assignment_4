import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { createLoanService, getAllLoansService } from "../services/loanServices";


export const getAllLoans = (req: Request, res: Response): void => {
    const loans = getAllLoansService();

    res.status(200).json({
        message: "Loans retrieved successfully",
        count: loans.length,
        data: loans,
    });
};


export const createLoan = (req: Request, res: Response): void => {
    const { applicant, amount, status } = req.body;

    const newLoan = createLoanService({
        applicant,
        amount,
        status,
    });

    res.status(201).json({
        success: true,
        message: "Loan created successfully",
        data: newLoan,
    });
};

export const updateLoan = (req: Request, res: Response) => {
    // Logic to update an item
    res.status(200).send("Update an item");
};

export const deleteLoan = (req: Request, res: Response) => {
    // Logic to delete an item
    res.status(200).send("Delete an item");
};