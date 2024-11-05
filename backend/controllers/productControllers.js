import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const addProduct = asyncHandler(async (req, res) => {
  try {
    const { name, image, category, description, rating, price } = req.fields;

    switch (true) {
      case !name:
        return res.json({ error: "Name is required" });
      case !image:
        return res.json({ error: "Image is required" });
      case !category:
        return res.json({ error: "Category is required" });
      case !description:
        return res.json({ error: "Description is required" });
      case !rating:
        return res.json({ error: "Rating is required" });
      case !price:
        return res.json({ error: "Price is required" });
    }

    const existingProduct = await Product.findOne({ name: name });
    if (existingProduct) {
      return res.status(409).json("Product with this name and category already exists");
    }

    const product = new Product({ ...req.fields });
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

const fetchProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    // .populate("category");
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const removeProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { name, image, category, description, rating, price } = req.fields;

    switch (true) {
      case !name:
        return res.json({ error: "Name is required" });
      case !image:
        return res.json({ error: "Image is required" });
      case !category:
        return res.json({ error: "Category is required" });
      case !description:
        return res.json({ error: "Description is required" });
      case !rating:
        return res.json({ error: "Rating is required" });
      case !price:
        return res.json({ error: "Price is required" });
    }

    const product = await Product.findByIdAndUpdate(req.params.id, { ...req.fields }, { new: true });
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.json(400).json(error.message);
  }
});

export { fetchProducts, addProduct, removeProduct, updateProduct };
