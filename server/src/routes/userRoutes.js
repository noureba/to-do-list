import express from "express";
import { categoriesList, tasksList, userData } from "../controllers/userControllers.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/data", isAuth, userData);
router.get("/tasks", isAuth, tasksList);
router.get("/categories", isAuth, categoriesList);



export default router;
