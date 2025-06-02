import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import express from "express";

import postRoute from "./routes/postRoute.js";
import { getConnection } from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", postRoute);
app.use("/api", userRoute);
app.use("/api", authRoute);

app.listen(5000, () => {
  //Call db connection
  // console.log("DB_CONNECTION_STRING:", process.env.DB_CONNECTION_STRING);

  getConnection();
  console.log("App listening on port 5000!");
});
