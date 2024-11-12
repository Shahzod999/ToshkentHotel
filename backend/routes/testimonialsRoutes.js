import express from "express";
import { addTestimonials, deleteTestimonials, fetchTestimonials } from "../controllers/testimonialController.js";

const router = express.Router();

router.route("/").get(fetchTestimonials).post(addTestimonials);
router.delete("/:id", deleteTestimonials);

export default router;
