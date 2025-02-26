import express from "express";
import { userData } from "../controllers/userControllers.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/data", isAuth, userData);

export default router;
