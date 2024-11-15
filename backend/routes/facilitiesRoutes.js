import express from "express";
import formidable from "express-formidable";
import { addFacilities, fetchFacilities, removeFacilities, updateFacilities } from "../controllers/facilitiesController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(fetchFacilities).post(authenticate, formidable(), addFacilities);
router.route("/:id").delete(authenticate, removeFacilities).put(authenticate, formidable(), updateFacilities);

export default router;
