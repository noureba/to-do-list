import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please add a valid email"],
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "1741873670059_icon.webp",
  },
  bio: {
    type: String,
    default: "I am a new user.",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  otp :{
    type: String,
    default:""
  },
  otpExpiredAt:{
    type:Number,
    default:0
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default userModel;
