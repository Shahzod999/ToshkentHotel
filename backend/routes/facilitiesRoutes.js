import express from "express";
import formidable from "express-formidable";
import { addFacilities, fetchFacilities, removeFacilities, updateFacilities } from "../controllers/facilitiesController.js";

const router = express.Router();

router.route("/").get(fetchFacilities).post(formidable(), addFacilities);
router.route("/:id").delete(removeFacilities).put(formidable(), updateFacilities);

export default router;
