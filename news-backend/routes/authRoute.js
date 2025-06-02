// @ts-ignore
import express from "express";
import { signIn, signUp } from "../controllers/AuthController.js";

const authRoute = express.Router();

authRoute.post("/signup", signUp);
authRoute.post("/users/auth/login", signIn);

export default authRoute;
