import asyncHandler from "../middleware/asyncHandler.js";
import Testimonials from "../models/testimonials.js";

const addTestimonials = asyncHandler(async (req, res) => {
  try {
    const { text, userName } = req.body;

    if (!text || !userName) return res.status(400).json("All fields required");

    const existingFacilities = await Testimonials.findOne({ text, userName });
    if (existingFacilities) return res.status(409).json("same Testimonials exists");

    const testimonials = new Testimonials({ ...req.body });
    await testimonials.save();
    res.status(201).json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
const fetchTestimonials = asyncHandler(async (req, res) => {
  try {
    const testimonials = await Testimonials.find({});
    res.status(201).json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
const deleteTestimonials = asyncHandler(async (req, res) => {
  try {
    const testimonials = await Testimonials.findByIdAndDelete(req.params.id);
    if (!testimonials) return res.status(404).json({ error: "Testimonial not found" });

    res.status(201).json({ message: "Deleted successfully", testimonials });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
});

export { deleteTestimonials, addTestimonials, fetchTestimonials };
