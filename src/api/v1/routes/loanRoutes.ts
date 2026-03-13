import express, { Express } from "express";
import { Router } from 'express';

const router: Router = Router();


const app: Express = express();

router.get("/loan", (req, res) => {
    res.send("Get all items");
});

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