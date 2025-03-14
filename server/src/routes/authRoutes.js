import express from "express";
import {
  deleteAccount,
  emailVerficationotp,
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
router.post("/verified-otp", isAuth, emailVerficationotp);
router.delete("/delete-account", isAuth, deleteAccount);



export default router;
