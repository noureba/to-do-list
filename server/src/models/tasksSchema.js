import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    default: "",
  },
  categorie: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  status:{
    type:String,
    enum:["new", "complete"],
    default:"new"
  }
});

const userTask = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default userTask;
