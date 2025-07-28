import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://mernsuraj:J6s8ufAnRdtM362i@cluster0.741skjw.mongodb.net/"
    );
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
}
