import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signUp = async (req, res, next) => {
  const { name, username, email, password } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).json({ message: "User already  exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    return res.status(500).json({ message: "User Could not be created " });
  }
};

export const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "Invalid Credentials" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

  const token = await jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  res.status(200).json({ token });
};

export const logOut = (req, res) => {
  
}