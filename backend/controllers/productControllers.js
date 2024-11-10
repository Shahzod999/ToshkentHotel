import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const addProduct = asyncHandler(async (req, res) => {
  try {
    const { name, category, description, rating, price, image } = req.fields;

    console.log(req.fields);
    if (!name || !image || !category || !description || !rating || !price) {
      return res.status(400).json("All fields are required");
    }

    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(409).json("Product with this same name and category already exists");
    }

    const product = new Product({ ...req.fields });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

const fetchProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    // .populate("category");
    res.status(201).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const getSingleProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const removeProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { name, category, description, rating, price, image } = req.fields;

    if (!name || !image || !category || !description || !rating || !price) {
      return res.status(400).json("All fields are required");
    }

    const product = await Product.findByIdAndUpdate(req.params.id, { ...req.fields }, { new: true });
    if (!product) {
      return res.status(404).json("Product not found");
    }
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.json(400).json(error.message);
  }
});

export { fetchProducts, addProduct, removeProduct, updateProduct, getSingleProduct };
