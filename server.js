import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database.js";
import admissionRoutes from "./routes/admissionRoutes.js";

dotenv.config();
const app = express();
connectDB()

app.use(cors());
app.use(express.json());

app.use("/api/admissions", admissionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
