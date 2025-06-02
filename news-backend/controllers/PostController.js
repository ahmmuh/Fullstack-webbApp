import Post from "../models/Post.js";

export const addPost = async (req, res) => {
  const { title, content } = req.body;

  if (!title | !content) {
    return res.status(400).json({
      message: "Title & content är obligatoriska",
    });
  }

  try {
    const post = new Post({ title, content });
    await post.save();
    return res.status(201).json({ message: "Post has been created" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid skapande av ny post" });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid hämtning av ny post lista" });
  }
};

export const getPost = async (req, res) => {
  const { postId } = req.params;
  if (!postId) return res.status(400).json({ message: "Post not found" });

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ message: "Post not found" });
    }

    return res.status(200).json({ message: `${post} was founded` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid hämtning av singel post" });
  }
};

export const updatePost = async (req, res) => {
  const { postId } = req.params;
  if (!postId) return res.status(400).json({ message: "Post not found" });

  try {
    const post = await Post.findByIdAndUpdate(postId, req.body);
    return res.status(200).json({ message: "Post has been updated" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid updating av ny post" });
  }
};

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  if (!postId) return res.status(400).json({ message: "Post not found" });

  try {
    const post = await Post.findByIdAndDelete(postId);
    return res.status(200).json({ message: "Post has been deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Serverfel vid deleting av  post " });
  }
};
