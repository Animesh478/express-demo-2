const path = require("path");

const getAllProducts = (req, res) => {
  res.sendFile(path.join(`${__dirname}`, "..", "view", "product.html"));
};

const addProduct = (req, res) => {
  const data = req.body;
  res.send({ value: data.productName });
};

module.exports = {
  getAllProducts,
  addProduct,
};
