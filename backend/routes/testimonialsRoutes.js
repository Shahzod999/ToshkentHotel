import express from "express";
import { addTestimonials, deleteTestimonials, fetchTestimonials } from "../controllers/testimonialController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(fetchTestimonials).post(authenticate, addTestimonials);
router.delete("/:id", authenticate, deleteTestimonials);

export default router;
