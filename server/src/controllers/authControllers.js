import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userSchema.js";
import transport from "../config/nodemailer.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { randomInt } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(
  __dirname,
  "../templates/emailVerification.html"
);
const emailTemplate = fs.readFileSync(templatePath, "utf-8");
//register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({
      success: false,
      message: "Messing details",
    });
  }
  try {
    //check if user already exist
    const userCheck = await userModel.findOne({ email });
    if (userCheck) {
      return res.json({
        success: false,
        message: "Email already exist",
      });
    }
    //hach password
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashPassword });
    await user.save();

    res.json({
      success: true,
      message: "Your acount has been created successuly",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//login
export const login = async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    return res.json({
      success: false,
      message: "Details are messing",
    });
  }

  try {
    //check email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Email or password not correct",
      });
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Email or password not correct",
      });
    }

    //create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    if (!token) {
      return res.json({ success: false, message: "Token not generated" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.MODE === "production",
      sameSite: process.env.MODE === "production" ? "none" : "Lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      message: "you login successfuly",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//logout
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.MODE == "production",
      sameSite: process.env.MODE === "production" ? "none" : "Lax",
    });
    res.json({
      success: true,
      message: "Logout succes",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//send email Verification
export const sendEmailVerification = async (req, res) => {
  const { userId } = req;
  if (!userId) {
    return res.json({
      success: false,
      message: "Messing details",
    });
  }
  try {
    //user
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "user not found",
      });
    }

    if (user.isVerified) {
      return res.json({
        success: false,
        message: "user already verifyed",
      });
    }

    //generate roandom number
    const otp = String(Math.floor(1000000 + Math.random() * 900000));
    user.otp = otp;
    user.otpExpiredAt = Date.now() + 60 * 60 * 1000;
    await user.save();
    const filledTemplate = emailTemplate.replace("{{otpCode}}", otp);

    const email = {
      from: process.env.STMP_EMAIL,
      to: user.email,
      subject: "Your OTP Code for Email Verification",
      html: filledTemplate,
    };
    await transport.sendMail(email);

    return res.json({
      success: true,
      message: "please check you email",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//verfy email otp
export const emailVerficationotp = async (req, res) => {
  const { userId } = req;
  const { otp } = req.body;

  if (!userId || !otp) {
    return res.json({
      success: false,
      message: "messing details",
    });
  }

  try {
    //find user
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "user not found",
      });
    }
    // check otp
    if (user.otp != otp) {
      return res.json({
        success: false,
        message: "otp not true",
      });
    }
    //check otp time
    if (user.otpExpiredAt <= Date.now()) {
      return res.json({
        success: false,
        message: "your otp expired",
      });
    }
    (user.isVerified = true), (user.otpExpiredAt = 0);
    user.otp = "";
    await user.save();
    return res.json({
      success: true,
      message: "your account is verified",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//delet acount
export const deleteAccount = async (req, res) => {
  const { userId } = req;
  if (!userId) {
    return res.json({
      success: false,
      message: "messing details",
    });
  }
  try {
    //user
    const user = await userModel.findByIdAndDelete(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "your account not deleted",
      });
    }
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.MODE == "production",
      sameSite: process.env.MODE === "production" ? "none" : "Lax",
    });
    return res.json({
      success: true,
      message: "your account  deleted",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
