import express from "express";
import { addFacilities, fetchFacilities, removeFacilities, updateFacilities } from "../controllers/facilitiesController.js";

const router = express.Router();

router.route("/").get(fetchFacilities).post(addFacilities);
router.route("/:id").delete(removeFacilities).put(updateFacilities);

export default router;
