const express = require("express");
const app = express();

const productRoute = require("./routes/product");

app.use("/products", productRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
