import userTask from "../models/tasksSchema.js";

//add new task
export const addNewTask = async (req, res) => {
  const {userId} = req
  const { title, desc, categorie, date } = req.body;

  if (!userId || !title) {
    res.json({
      success: false,
      message: "Details are messsing",
    });
  }
  try {
    const task = new userTask({ userId, title, desc, categorie, date });
    await task.save();

    res.json({
      success: true,
      message: "you task created",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//delete task
export const deletTask = async (req, res) => {
  const {userId} = req

  const { postId } = req.body;

  if (!userId || !postId) {
    return res.json({
      success: false,
      message: "details are messsing!",
    });
  }
  try {
    const task = await userTask.findByIdAndDelete(postId);
    if (!task) {
      return res.json({
        success: false,
        message: "error post not exist",
      });
    }
    res.json({
      success: true,
      message: "your post has been delelet",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//edite task
export const editTask = async (req, res) => {
  const {userId} = req

  const { postId, title, desc, categorie, date } = req.body;

  if (!userId || !title || !postId) {
    return res.json({
      success: false,
      message: "Details are messsing",
    });
  }
  try {
    const task = await userTask.findByIdAndUpdate(postId, {
      title,
      desc,
      categorie,
      date
    });
    if (!task) {
      return res.json({
        success: false,
        message: "operatin not success",
      });
    }

    res.json({
      success: true,
      message: "your task update",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//complet task
export const completeTask = async (req, res) => {
  const {userId} = req
  const { postId } = req.body;
  if (!userId || !postId) {
    return res.json({
      status: false,
      message: "messing details",
    });
  }
  const task = await userTask.findByIdAndUpdate(postId, {
    status: "complete",
  });
  if (!task) {
    return res.json({
      success: false,
      message: "operation not success",
    });
  }

  res.json({
    success: true,
    message: "your task complete",
  });
  try {
  } catch (error) {
    return res.json({ status: false, message: error.message });
  }
};
