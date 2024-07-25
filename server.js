import express from "express";

const app = express();
const PORT = 5362;

app.get("/", (req, res) => {
  res.json({ message: "Hello server" });
});

// CRUD functionality of eCommerce

// R - For Reading products
app.get("/products", () => {});

// C - For Creating products 
app.post("/products", () => {});

// U - For Updating products
app.put("/products/:id", () => {});

// D - For Deleting product
app.delete("/products/:id", () => {});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
