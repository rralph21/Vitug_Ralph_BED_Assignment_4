import { Router } from 'express';
import { getAllLoans } from "../controllers/loanControllers";

const router: Router = Router();

router.get("/loans", getAllLoans)

router.post("/loan:id", (req, res) => {
    res.send("Create a new item");
});

router.put("/loan:id", (req, res) => {
    res.send("Update an item");
});

router.delete("/loan:id", (req, res) => {
    res.send("Delete an item");
});

export default router;