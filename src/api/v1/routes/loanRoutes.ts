import express, { Express } from "express";
import { Router } from 'express';

const router: Router = Router();


const app: Express = express();

app.get("/", (req, res) => {
    res.send("Get all items");
});

app.post("/", (req, res) => {
    res.send("Create a new item");
});

app.put("/", (req, res) => {
    res.send("Update an item");
});

app.delete("/", (req, res) => {
    res.send("Delete an item");
});

export default router;