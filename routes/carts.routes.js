const express = require("express");
const { createCart } = require("../controllers/carts.controller");

const router = express.Router();

router.post("/", createCart);

module.exports = router;
