import userCategorie from "../models/categoriesSchema.js";

//create new category
export const createCategory = async (req, res) => {
  const { userId, title } = req.body;
  if (!userId || !title) {
    return res.json({
      success: false,
      message: "Messing details",
    });
  }
  try {
    const category = await userCategorie.findOne({ userId, title });
    if (category) {
      return res.json({
        success: false,
        message: "caterogie already exsited",
      });
    }
    const newCtageroy = await new userCategorie({ userId, title });

    newCtageroy.save();

    res.json({
      success: true,
      message: "categorie has been created",
    });
  } catch (error) {
    return res.josn({
      success: false,
      message: error.message,
    });
  }
};

//delete category
export const deleteCategory = async (req, res) => {
  const { userId, categoryId } = req.body;
  if (!userId || !categoryId) {
    return res.json({
      success: false,
      message: "Messig details",
    });
  }
  try {
    const category = await userCategorie.findOneAndDelete({
      userId,
      _id:categoryId,
    });
    if (!category) {
      return res.json({
        success: false,
        message: "category not found",
      });
    }
    res.json({
      success: true,
      message: "category has been delete",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
