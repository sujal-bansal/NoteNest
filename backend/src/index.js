import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRouter from "./routes/auth.route.js";
import noteRouter from "./routes/note.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT}`);
});
