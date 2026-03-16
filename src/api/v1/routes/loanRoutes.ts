import { Router } from 'express';
import { createLoan, deleteLoan, getAllLoans, updateLoan } from "../controllers/loanControllers";

const router: Router = Router();

router.get("/loans", getAllLoans)

router.post("/loans", createLoan);

router.put("/loan/:id", updateLoan);

router.delete("/loan/:id", deleteLoan);

export default router;