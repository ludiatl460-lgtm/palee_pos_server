import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";

const router = Router();
router.post("/category", CategoryController.createCategory);
router.get("/category", CategoryController.getAllCategories);
router.put("/category/:id", CategoryController.updateCategory);

export default router;