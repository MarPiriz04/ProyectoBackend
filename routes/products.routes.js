const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/products.controller");
const upload = require("../middlewares/multerConfig");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", upload.single("image"), createProduct);

module.exports = router;
