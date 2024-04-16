const express = require('express')
const { createPaymentIntentCallback, webhookCallback } = require('../controller/Payment.js');

const router = express.Router()

router.post("/create-payment-intent", createPaymentIntentCallback)
  


exports.router = router