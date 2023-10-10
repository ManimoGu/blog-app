const express = require("express");
const router = express.Router();
const {addPost,getUserPosts} = require('../controllers/post.controller');
const accessJwt = require('../middlewares/jwtVerification');

router.use(accessJwt)

router.post("/addpost", addPost);
router.get("/userposts",getUserPosts)

module.exports = router;