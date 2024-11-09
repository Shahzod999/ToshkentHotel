import asyncHandler from "../middleware/asyncHandler.js";
import Facilities from "../models/facilitiesModel.js";

const addFacilities = asyncHandler(async (req, res) => {
  try {
    const { text, img } = req.fields;

    if (!text || !img) return res.status(400).json("All fields required");

    const existingFacilities = await Facilities.findOne({ text });
    if (existingFacilities) return res.status(409).json("same Facilitie exists");

    const facilities = new Facilities({ ...req.fields });
    await facilities.save();
    res.status(201).json(facilities);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

const fetchFacilities = asyncHandler(async (req, res) => {
  try {
    const facilities = await Facilities.find({});
    res.status(201).json(facilities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
const removeFacilities = asyncHandler(async (req, res) => {
  try {
    const facilities = await Facilities.findByIdAndDelete(req.params.id);

    if (!facilities) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product deleted successfully", facilities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
});

const updateFacilities = asyncHandler(async (req, res) => {
  try {
    const { text, img } = req.fields;
    if (!text || !img) return res.status(400).json("All fields required");

    const facilities = await Facilities.findByIdAndUpdate(req.params.id, { ...req.fields }, { new: true });

    if (!facilities) return res.status(404).json("Product not found");
    await facilities.save();
    res.status(201).json(facilities);
  } catch (error) {
    console.error(error);
    res.json(400).json(error.message);
  }
});

export { fetchFacilities, addFacilities, removeFacilities, updateFacilities };
