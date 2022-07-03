const express = require('express')
const router = express.Router()
const { processPayment, sendStripeKey } = require('../controllers/paymentController')

router.post('/processpayment', processPayment)
router.get('/stripeapikey', sendStripeKey)

module.exports = router