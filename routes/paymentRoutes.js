
//importing modules
const express = require('express')
const paymentController = require('../controllers/paymentController')
const {  insertApplicantPaymentDetail , getApplicantPaymentInfo } = paymentController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

router.post('/insertApplicantPaymentDetail', insertApplicantPaymentDetail )
router.get('/getApplicantPaymentInfo/asgdf',getApplicantPaymentInfo)



module.exports = router