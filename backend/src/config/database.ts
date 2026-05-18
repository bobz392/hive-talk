import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not set");
    }

    await mongoose.connect(uri);
    console.log("Mongo DB connected successfully");
  } catch (error) {
    console.log("Mongo DB connected failed, error = ", error);
    process.exit(1); /// 1 means failure
  }
};
