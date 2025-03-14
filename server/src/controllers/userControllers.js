import userCategorie from "../models/categoriesSchema.js";
import userTask from "../models/tasksSchema.js";
import userModel from "../models/userSchema.js";

//user data
export const userData = async (req, res) => {
  const { userId } = req;
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
        photo: user.photo,
      },
    });
  } catch (error) {
    return res.json({
      success: true,
      message: error.message,
    });
  }
};

//taskts list
export const tasksList = async (req, res) => {
  const { userId } = req;
  if (!userId) {
    return res.json({
      success: false,
      message: "Detail messing",
    });
  }

  try {
    const tasks = await userTask.find({ userId });
    if (!tasks) {
      return res.json({
        success: false,
        message: "not found",
      });
    }

    res.json({
      success: true,
      tasks,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//categories list
export const categoriesList = async (req, res) => {
  const { userId } = req;
  if (!userId) {
    return res.json({
      success: false,
      message: "Messing details",
    });
  }
  try {
    const categories = await userCategorie.find({ userId });
    if (!categories) {
      return res.json({
        success: false,
        message: "categories not found",
      });
    }
    res.json({
      success: true,
      categories,
    });
  } catch (error) {
    return res.josn({
      success: false,
      message: error.message,
    });
  }
};

//user change profile
export const userChangeProfile = async (req, res) => {
  const { userId, file } = req;
  if ((!userId, !file)) {
    return res.json({
      success: false,
      message: "Messing details",
    });
  }

  try {
    //find user
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json("User not logged in");
    }

    user.photo = file.filename;
    await user.save();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      profile: user.profile,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//user change name
export const userChangeName = async (req, res) => {
  const { userId } = req;
  const { newName } = req.body;
  if (!userId || !newName) {
    return res.json({
      success: false,
      message: "Messing details",
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
    user.name = newName;
    await user.save();
    return res.json({
      success: true,
      message: "name hase been change successfuly",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//user change name
export const userChangeEmail = async (req, res) => {
  const { userId } = req;
  const { newEmail } = req.body;
  if (!userId || !newEmail) {
    return res.json({
      success: false,
      message: "Messing details",
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
    user.email = newEmail;
    await user.save();
    return res.json({
      success: true,
      message: "email hase been change successfuly",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};