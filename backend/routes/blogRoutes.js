import express from "express";
import {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} from "../controllers/blogController.js";

const router = express.Router();

// Routes
router.get("/all-blog", getAllBlogsController); 
router.post("/create-blog", createBlogController);
router.put("/update-blog/:id", updateBlogController);
router.get("/get-blog/:id", getBlogByIdController); 
router.delete("/delete-blog/:id", deleteBlogController); 
router.get("/user-blog/:id", userBlogController);

export default router;
