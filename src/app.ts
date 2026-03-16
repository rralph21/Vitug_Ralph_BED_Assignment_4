import express, { Express } from "express";
import  loanRoutes from "./api/v1/routes/loanRoutes";
import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";

import adminRoutes from "./api/v1/routes/adminRoutes";

// Initialize Express application
const app: Express = express();

// Logging middleware (should be applied early in the middleware stack)
if (process.env.NODE_ENV === "production") {
    // In production, log to files
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    // In development, log to console for immediate feedback
    app.use(consoleLogger);
}

app.use(express.json());


app.use("/api/v1", loanRoutes);
app.use("/api/v1", adminRoutes);

// Define a route
// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

export default app;