import express, { Express } from "express";

const app: Express = express();

app.get("/api/v1/loan", (req, res) => {
    res.send("Get all items");
});

app.post("/api/v1/loan", (req, res) => {
    res.send("Create a new item");
});

app.put("/api/v1/loan/:id", (req, res) => {
    res.send("Update an item");
});

app.delete("/api/v1/loan/:id", (req, res) => {
    res.send("Delete an item");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});