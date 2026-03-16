import { Router } from 'express';
import { createLoan, getAllLoans, updateLoan } from "../controllers/loanControllers";

const router: Router = Router();

router.get("/loans", getAllLoans)

router.post("/loans", createLoan);

router.put("/loan/:id", updateLoan);

router.delete("/loan:id", (req, res) => {
    res.send("Delete an item");
});

export default router;