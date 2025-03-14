import express from "express";
import { categoriesList, tasksList, userChangeName,userChangeEmail, userChangeProfile, userData } from "../controllers/userControllers.js";
import isAuth from "../middlewares/isAuth.js";
import {upload} from "../middlewares/multer.js"

const router = express.Router();

router.get("/data", isAuth, userData);
router.get("/tasks", isAuth, tasksList);
router.get("/categories", isAuth, categoriesList);
router.post("/profile",isAuth, upload.single("file"), userChangeProfile);
router.post("/change-name",isAuth, userChangeName);
router.post("/change-email",isAuth, userChangeEmail);



export default router;
