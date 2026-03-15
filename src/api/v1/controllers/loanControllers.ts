import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import {getAllLoansService} from "../services/loanServices";


export const getAllLoans = (req: Request, res: Response): void => {
    const loans = getAllLoansService();

    res.status(200).json({
        success: true,
        message: "Loans retrieved successfully",
        count: loans.length,
        data: loans,
    });
};


export const createLoan = (req: Request, res: Response) => {
    // Logic to create a new item
    res.status(201).send("Create a new item");
};

export const updateLoan = (req: Request, res: Response) => {
    // Logic to update an item
    res.status(200).send("Update an item");
};

export const deleteLoan = (req: Request, res: Response) => {
    // Logic to delete an item
    res.status(200).send("Delete an item");
};