import mongoose from "mongoose";

export const getConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(`Connection seccessfull ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`Failed to connect to MongoDB, error: ${error}`);
  }
};
