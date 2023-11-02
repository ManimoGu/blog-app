const User = require("../models/user.model");
const { genSalt, hash, compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, password, email, username } = req.body;
    const salt = await genSalt(10);
    const hashedpassword = await hash(password, salt);

    const existedUser = await User.findOne({ $or: [{username}, {email}] });
    if (existedUser) {
      return res.status(400).json({ message: 'User with this username already exists!'});
    }

    const user = await User.create({
      firstname,
      lastname,
      password: hashedpassword,
      email,
      username,
    });

    if (!user) {
      return res.status(404).json({ message: "user not added" });
    }
    res.status(200).json({ message: "user added" });
  } catch (error) {
    console.log(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ success: false, msg: "Email or Password is Incorrect" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
