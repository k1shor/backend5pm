const express = require('express')
const { addProduct, viewproducts, product_details, update_product, delete_product } = require('../controllers/productController')
const { upload } = require('../utils/fileUpload')
const { productRules, validation } = require('../validation')
const router = express.Router()

router.post('/addproduct',upload.single('product_image'),addProduct)
router.get('/products',viewproducts)
router.get('/product/details/:id',product_details)
router.put('/product/update/:id', update_product)
router.delete('/product/delete/:id',delete_product)

module.exports = router