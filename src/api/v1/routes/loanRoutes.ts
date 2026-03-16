import { Router } from 'express';
import { createLoan, deleteLoan, getAllLoans, updateLoan } from "../controllers/loanControllers";
import { validateRequest } from "../middleware/validate";
import {
    createLoanSchema,
    updateLoanSchema,
    loanIdSchema,
} from "../ulits/loanValidation";

const router: Router = Router();

router.get("/loans", getAllLoans)

router.post("/loans", validateRequest(createLoanSchema), createLoan);

router.put("/loan/:id", validateRequest(updateLoanSchema), updateLoan);

router.delete("/loan/:id", validateRequest(loanIdSchema), deleteLoan);

export default router;