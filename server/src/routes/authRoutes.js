import express from "express";
import {
  login,
  logout,
  register,
  sendEmailVerification,
} from "../controllers/authControllers.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-verification-email-otp", isAuth, sendEmailVerification);

export default router;
