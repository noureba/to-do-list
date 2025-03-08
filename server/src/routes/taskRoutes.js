import express from "express";
import { addNewTask, completeTask, deletTask, editTask } from "../controllers/taskController.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/add-new-task", isAuth, addNewTask);
router.delete("/delete-task", isAuth, deletTask);
router.put("/edit-task", isAuth, editTask)
router.put("/add-complete-task", isAuth, completeTask)

export default router;
