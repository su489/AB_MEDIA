import express from "express";
import {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} from "../controllers/blogController.js"; // .js lagana zaroori hai ESM mein

const router = express.Router();

// Routes
router.get("/all-blog", getAllBlogsController); // GET all blogs
router.post("/create-blog", createBlogController); // POST create blog
router.put("/update-blog/:id", updateBlogController); // PUT update blog
router.get("/get-blog/:id", getBlogByIdController); // GET single blog
router.delete("/delete-blog/:id", deleteBlogController); // DELETE blog
router.get("/user-blog/:id", userBlogController); // GET user blogs (spelling fix bhi)

export default router;
