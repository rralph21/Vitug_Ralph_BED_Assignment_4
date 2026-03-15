import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Loan } from "../models/loan";
import { sampleLoans } from "../models/sampleLoans";


export const getAllLoans = async (req: Request, res: Response): Promise<void> => {
    // Logic to process all items from the database
    const loans: Loan[] = sampleLoans; // Replace with actual database call

    res.status(HTTP_STATUS.OK).json({
        message: "Loans application retrieved",
        count: loans.length,
        data: loans
    });
};

export const createLoan = (loan: string): string => {
    // Logic to add a new item to the database
    return "Item added";
};

export const updateLoan = (id: number, loan: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteLoan = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};