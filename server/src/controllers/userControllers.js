import userModel from "../models/userSchema.js";

export const userData = async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.json({
      success: false,
      message: "User not found",
    });
  }

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({
        success: fasle,
        message: "user not found",
      });
    }
    res.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
        photo: user.photo
      },
    });
  } catch (error) {
    return res.json({
      success: true,
      message: error.message,
    });
  }
};
