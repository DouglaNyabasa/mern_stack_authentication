import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser"; // Import cookie-parser

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

app.use("/api/auth", authRoutes); // Set up routes

const startServer = async () => {
    await connectDB(); 
    app.listen(PORT, () => {
        console.log("Server is running on port:", PORT);
    });
};

startServer();
