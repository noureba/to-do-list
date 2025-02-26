import mongoose from "mongoose";

export const mongoDB = async (url) => {
  mongoose.connection.on("connected", () => console.log("Db is connected"));

  await mongoose.connect(url);
};
