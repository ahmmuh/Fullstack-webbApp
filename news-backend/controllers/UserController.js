import User from "../models/User.js";
import jwt from "jsonwebtoken";
export const addUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({
      message: "username, password är obligatoriska",
    });
  }

  try {
    const user = new User({ name, username, email, password });
    await user.save();
    return res.status(201).json({ message: "User has been created" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid skapande av ny USER" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid hämtning av ny user lista" });
  }
};
//Current User (Logged in user)

export const getCurrentUser = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Ingen token" });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token hittades ej" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-password");
    res.json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid hämtning av användarens info" });
  }
};
// export const getUser = async (req, res) => {
//   const { userId } = req.params;
//   if (!userId) return res.status(400).json({ message: "User not found" });

//   try {
//     const user = await User.findById(userId).select("-password");
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     return res.status(200).json({ message: `${user} was founded` });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Serverfel vid hämtning av singel User" });
//   }
// };

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  if (!userId) return res.status(400).json({ message: "User not found" });

  try {
    const user = await User.findByIdAndUpdate(userId, req.body);
    return res.status(200).json({ message: "User has been updated" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid updating av ny User" });
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  if (!userId) return res.status(400).json({ message: "User not found" });

  try {
    const user = await User.findByIdAndDelete(userId);
    return res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid deleting av  user " });
  }
};
