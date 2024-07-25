import express from "express";
import productRoutes from './routes/products/products.routes.js';
import connectDB from "./lib/db.js";
const app = express();
const PORT = 5000;

// Connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello server" });
});

app.use("/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
