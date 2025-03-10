import userCategorie from "../models/categoriesSchema.js";
import userTask from "../models/tasksSchema.js";
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
  const { userId } = req.body;
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
  const { userId } = req.body;
  if (!userId) {
    return res.json({
      success: false,
      message: "Messing details",
    });
  }
  try {
    const categories = await userCategorie.find({userId})
    if(!categories){
      return res.json({
        success:false,
        message:"categories not found"
      })
    }
    res.json({
      success:true,
      categories
    })
  } catch (error) {
    return res.josn({
      success: false,
      message: error.message,
    });
  }
};
