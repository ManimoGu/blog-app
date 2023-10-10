require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const session = require("express-session");
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: true,
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser())

app.use(userRoutes);
app.use(postRoutes);

const PORT = 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
