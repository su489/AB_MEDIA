import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express(); // ✅ Define app FIRST

app.use(cors());       // ✅ Then use middleware
app.use(express.json());

const port = process.env.PORT || 5000;

// Routes
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

// Connect DB first, then start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
});
