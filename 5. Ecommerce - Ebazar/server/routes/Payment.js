const express = require('express')
const { createPaymentIntentCallback, webhookCallback } = require('../controller/Payment.js');

const router = express.Router()

router.post("/create-payment-intent", createPaymentIntentCallback)
    // .post('/webhook', express.raw({ type: 'application/json' }), webhookCallback)



exports.router = router