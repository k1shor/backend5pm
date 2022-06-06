const express = require('express')
const router = express.Router()
const { placeOrder, orders, orderDetails, userOrders, deleteOrder, updateOrder } = require('../controllers/orderController')

router.post('/placeorder', placeOrder)
router.get('/orders',orders)
router.get('/orderdetails/:id',orderDetails)
router.get('/userorders/:userid',userOrders)
router.put('/updateorder/:orderId', updateOrder)
router.delete('/deleteorder/:order_id',deleteOrder)

module.exports = router