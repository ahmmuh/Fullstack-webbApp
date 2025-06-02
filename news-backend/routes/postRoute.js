import express from "express";
import {
  addPost,
  deletePost,
  getAllPost,
  getPost,
  updatePost,
} from "../controllers/PostController.js";
import { getToken } from "../middleware/authMiddleware.js";

const postRoute = express.Router();

postRoute.delete("/posts/:postId", getToken, deletePost);
postRoute.patch("/posts/:postId", getToken, updatePost);
postRoute.get("/posts/:postId", getToken, getPost);
postRoute.get("/posts", getToken, getAllPost);
postRoute.post("/posts", getToken, addPost);

export default postRoute;
