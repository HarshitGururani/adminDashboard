import mongoose from "mongoose";

export const connectDb = async () => {
  const connection = {};
  try {
    if (connection.connected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.connected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error.message);
  }
};
