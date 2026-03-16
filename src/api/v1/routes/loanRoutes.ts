import { Router } from 'express';
import { createLoan, deleteLoan, getAllLoans, updateLoan } from "../controllers/loanControllers";
import { validateRequest } from "../middleware/validate";
import {
    createLoanSchema,
    updateLoanSchema,
    loanIdSchema,
} from "../ulits/loanValidation";
import authenticate from '../middleware/authenticate';
import isAuthorized from '../middleware/authorize';


const router: Router = Router();

router.get("/loans", authenticate,isAuthorized({ hasRole: ["officer" , "manager" , "admin"] }), getAllLoans);

router.post("/loans", authenticate,isAuthorized({ hasRole: [ "manager"] }), validateRequest(createLoanSchema), createLoan);

router.put("/loan/:id", authenticate,isAuthorized({ hasRole: ["officer" , "manager"] }), validateRequest(updateLoanSchema), updateLoan);

router.delete("/loan/:id", authenticate,isAuthorized({ hasRole: ["officer" , "manager" , "admin"] }), validateRequest(loanIdSchema), deleteLoan);

export default router;