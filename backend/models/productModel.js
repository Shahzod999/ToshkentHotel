import mongoose from "mongoose";

// const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, ref: "Room", required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, default: 0, min: 0, max: 5 },
    price: { type: Number, required: true, default: 0, min: 0 },
    mainRoom: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
