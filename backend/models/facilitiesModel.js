import mongoose from "mongoose";

const facilitiesSchema = mongoose.Schema(
  {
    text: { type: String, require: true },
    img: { type: String, require: true },
  },
  { timestamps: true }
);

const Facilities = mongoose.model("Facilities", facilitiesSchema);
export default Facilities;