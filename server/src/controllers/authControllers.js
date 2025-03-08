import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userSchema.js";

//register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if ((!name || !email || !password)) {
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
    return res.josn({
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
