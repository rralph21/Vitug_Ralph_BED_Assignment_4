import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { createLoanService, getAllLoansService, updateLoanService, deleteLoanService } from "../services/loanServices";


export const getAllLoans = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const loans = getAllLoansService();

        res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Loans retrieved successfully",
            count: loans.length,
            data: loans,
        });

    } catch (error) {
        next(error);
    }
};


export const createLoan = (req: Request, res: Response, next: NextFunction): void => {
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

export const updateLoan = (req: Request, res: Response): void => {
    const loanId = Number(req.params.id);
    const { applicant, amount, status } = req.body;

    const updatedLoan = updateLoanService(loanId, {
        applicant,
        amount,
        status,
    });

    if (!updatedLoan) {
        res.status(404).json({
            success: false,
            message: "Loan not found",
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: "Loan updated successfully",
        data: updatedLoan,
    });
};

export const deleteLoan = (req: Request, res: Response): void => {
    const loanId = Number(req.params.id);

    const deletedLoan = deleteLoanService(loanId);

    if (!deletedLoan) {
        res.status(404).json({
            success: false,
            message: "Loan not found",
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: "Loan deleted successfully",
        data: deletedLoan,
    });
};