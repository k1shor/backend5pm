const Product = require('../models/productModel')

// to add new product
exports.addProduct = async (req, res) => {
    let product = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_image: req.file.path,
        category: req.body.category
    })
    product = await product.save()
    if (!product) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(product)
    }
}

// to view product list
exports.viewproducts = async (req, res) => {
    let product = await Product.find().populate('category')
    if (!product) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(product)
    }
}

// to view product details
exports.product_details = async (req, res) => {
    let product = await Product.findById(req.params.id).populate('category')
    if (!product) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(product)
    }
}

// to update product
exports.update_product = async (req, res) => {
    let product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_description: req.body.product_description,
            product_image: req.file.path,
            category: req.body.category
        },
        { new: true }
    )
    if (!product) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(product)
    }
}

// to delete product
exports.delete_product = (req,res) =>{
    Product.findByIdAndDelete(req.params.id, (error, product)=>{
        if(error){
            return res.status(400).json({error:error})
        }
        if(!product){
            return res.status(400).json({error:"product not found"})
        }
        else{
            return res.status(200).json({message: "product removed successfully"})
        }
        
    })
}