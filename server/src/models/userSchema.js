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
    default: "https://avatars.githubusercontent.com/u/19819005?v=4",
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
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default userModel;
