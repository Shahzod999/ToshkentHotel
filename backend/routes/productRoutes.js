import express from "express";
import formidable from "express-formidable";
import { fetchProducts, addProduct, removeProduct, updateProduct, getSingleProduct } from "../controllers/productControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(fetchProducts).post(authenticate, formidable(), addProduct);
router.route("/:id").delete(authenticate, removeProduct).put(authenticate, formidable(), updateProduct).get(getSingleProduct);

export default router;
