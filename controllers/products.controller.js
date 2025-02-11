const ProductManager = require("../models/ProductManager");
const productManager = new ProductManager();

exports.getAllProducts = async (req, res) => {
    res.json(await productManager.getProducts());
};

exports.createProduct = async (req, res) => {
    let { title, description, price, stock } = req.body;
    let newProduct = await productManager.addProduct({ title, description, price, stock, thumbnail: req.file?.path });
    res.status(201).json(newProduct);
};
