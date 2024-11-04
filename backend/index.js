import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// для получения запросов в виде формы
app.use(cookieParser());

app.use("/auth", userRoutes);
app.use("/product", productRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.get("/", (req, res) => {
  res.json({ message: "backConnected" });
});
