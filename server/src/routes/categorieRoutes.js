import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { createCategory, deleteCategory } from "../controllers/categorieController.js"

const router = express.Router()

router.post("/add-category", isAuth, createCategory)
router.delete("/delete-category", isAuth, deleteCategory)


export default router