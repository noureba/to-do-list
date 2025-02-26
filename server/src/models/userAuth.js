import mongoose from "mongoose";

const userAuthSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const UserAuth = mongoose.models.UserAuth || mongoose.model("UserAuth", userAuthSchema);

export default UserAuth;
