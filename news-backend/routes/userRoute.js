import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  getCurrentUser,
  // getUser,
  updateUser,
} from "../controllers/UserController.js";
import { getToken } from "../middleware/authMiddleware.js";
import { signUp } from "../controllers/AuthController.js";

const userRoute = express.Router();

// userRoute.get("/users/:userId",);

userRoute.delete("/users/:userId", getToken, deleteUser);
userRoute.patch("/users/:userId", getToken, updateUser);
// userRoute.get("/users/:userId", getToken, getUser);
userRoute.get("/users", getToken, getAllUsers);

userRoute.get("/users/me", getToken, getCurrentUser);

export default userRoute;
