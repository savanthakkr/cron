const express = require('express');
const router = express.Router();
const { updateCategory } = require("../controller/mail");


// Update a product 
router.get('/updateProduct', updateCategory);

module.exports = router;
