import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.listen(port, () => console.log(`Server running on port: ${port}`));


app.get("/", (req, res) => {
  res.json({ message: "backConnected" });
});
