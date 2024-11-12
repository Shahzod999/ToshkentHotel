import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import facilitiesRoutes from "./routes/facilitiesRoutes.js";
import testimonialsRoutes from "./routes/testimonialsRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 5001;

connectDB();

const app = express();

const allowedOrigins = ["https://toshkent-hotel.vercel.app", "http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// для получения запросов в виде формы
app.use(cookieParser());

app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/facilities", facilitiesRoutes);
app.use("/api/testimonials", testimonialsRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.get("/", (req, res) => {
  res.json({ message: "backConnected" });
});
