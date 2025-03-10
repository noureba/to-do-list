import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import taskRoutes from "./src/routes/taskRoutes.js";
import categorieRoutes from "./src/routes/categorieRoutes.js";
import { mongoDB } from "./src/helpers/connectDB.js";

const app = express();

mongoDB(process.env.MONGO_DB_URL);

// use middlewares
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//routes
app.get("/", (rea, res) => {
  res.send("Hi, server is runing");
});
app.use("/api/auth/", authRoutes);
app.use("/api/user/", userRoutes);
app.use("/api/task/", taskRoutes);
app.use("/api/category/", categorieRoutes);

//server listen
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server run at ${port}`));
