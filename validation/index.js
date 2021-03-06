const {check, validationResult} = require('express-validator')
const { filecheck } = require('../utils/fileUpload')

exports.categoryRules = [
    check('category_name','category name is required').notEmpty()
    .isLength({min:3}).withMessage('Category name must be at least 3 characters')
]

exports.userRules =[
    check('username','user name is required').notEmpty(),
    check('email','email is required').notEmpty(),
    check('password','password is required').notEmpty(),

]

exports.productRules = [
    check('product_name','product name is required').notEmpty(),
    check('product_price','price is required').notEmpty()
    .isNumeric().withMessage('price must be a number'),
    check('product_description', 'description is required').notEmpty()
    .isLength({min:20}).withMessage('description must be at least 20 characters'),
    check('count_in_stock','count in stock is required').notEmpty()
    .isNumeric().withMessage('count must be only numbers'),
    check('category','category is required').notEmpty()
]

exports.validation = (req,res,next) =>{
    const errors = validationResult(req)
    if(errors.isEmpty()){
        next()
    }
    else{
        return res.status(400).json({error:errors.array()[0].msg})
    }
}

// module.exports = validation