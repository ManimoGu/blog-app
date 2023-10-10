const Post = require("../models/post.model");

exports.addPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const { title, description } = req.body;

    const newPost = await Post.create({
      title,
      description,
      iduser: userId,
    });

    res.status(201).json({ post: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error " });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const userId = req.user._id;
    const userPosts = await Post.find({ iduser: userId });
    res.status(200).json(userPosts);
  } catch (error) {
    res.status(404).json({ message: "Posts not Found" });
  }
};
