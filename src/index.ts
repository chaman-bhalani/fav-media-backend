import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import entriesRouter from "./routes/entries.js";


dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.use("/api/entries", entriesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
