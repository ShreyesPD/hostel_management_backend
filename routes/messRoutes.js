//importing modules
const express = require('express')
const messController = require('../controllers/messController')
const { createMess, getMessFeePerDay, getMessFeePerMeal, getMessPackageFee } = messController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

router.post('/createMess', createMess)
router.get('/getMessFeePerDay/:5_day_veg', getMessFeePerDay) //:package_discription
router.get('/getMessFeePerMeal/:meal_type', getMessFeePerMeal)
router.get('/getMessPackageFee', getMessPackageFee)


module.exports = router