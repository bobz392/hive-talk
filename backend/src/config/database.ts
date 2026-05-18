import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Mongo DB connected successfully");
  } catch (error) {
    console.log("Mongo DB connected failed, error = ", error);
    process.exit(1); /// 1 means failure
  }
};
