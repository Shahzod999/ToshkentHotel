import express from "express";
import formidable from "express-formidable";
// для получения запросов в виде формы
import { fetchProducts, addProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.route("/").get(fetchProducts).post(formidable(), addProduct);

export default router;
