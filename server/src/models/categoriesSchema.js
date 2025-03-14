import mongoose from "mongoose";

const categorieSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const userCategorie = mongoose.models.Categorie || mongoose.model("Categorie",categorieSchema)

export default userCategorie
