const express = require("express");
const app = express();

// Enable JSON parsing for request bodies
app.use(express.json());

// Mock user data
const mockUser = {
  username: "admin",
  password: "password123",
};

// Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === mockUser.username && password === mockUser.password) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.get("/api/products", (req, res) => {
  const products = require("./mock_data/products.json");
  res.json(products);
});

app.get("/api/location", (req, res) => {
  const locations = require("./mock_data/location.json");
  res.json(locations);
});

app.get("/api/company", (req, res) => {
  const company = require("./mock_data/company.json");
  res.json(company);
});

app.get("/api/productWarehouse", (req, res) => {
  const productWarehouse = require("./mock_data/productWarehouse.json");
  res.json(productWarehouse);
});

app.get("/api/purchaseOrder", (req, res) => {
  const purchaseOrder = require("./mock_data/purchaseOrder.json");
  res.json(purchaseOrder);
});

// Start the server
app.listen(5000, () => {
  console.log("Mock API server is running on port 5000");
});
