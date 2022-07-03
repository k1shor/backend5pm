const express = require('express')
const { addProduct, viewproducts, product_details, update_product, delete_product, filterProduct, findRelated } = require('../controllers/productController')
const { requireSignin } = require('../controllers/userController')
const { upload, filecheck } = require('../utils/fileUpload')
const { productRules, validation } = require('../validation')
const router = express.Router()

// router.post('/addproduct', upload.single('product_image'),productRules, validation, requireSignin, addProduct)
router.post('/addproduct', upload.single('product_image'),productRules, validation, requireSignin, addProduct)
router.get('/products',viewproducts)
router.get('/product/details/:id',product_details)
router.put('/product/update/:id', update_product)
router.delete('/product/delete/:id',delete_product)
router.post('/filterproduct',filterProduct)
router.get('/findrelated/:id', findRelated)


module.exports = router 