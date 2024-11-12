import mongoose from "mongoose";

const testimonials = mongoose.Schema(
  {
    text: { type: String, require: true },
    userName: { type: String, require: true },
  },
  { timestamps: true }
);

const Testimonials = mongoose.model("Testimonials", testimonials);
export default Testimonials
