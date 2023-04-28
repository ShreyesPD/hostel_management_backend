//importing modules
const express = require('express')
const messController = require('../controllers/messController')
const { getMessFeePerDay, getMessFeePerMeal, getMessPackageFee } = messController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

router.get('/getMessFeePerDay/:5_day_veg/:5_day_nonveg', getMessFeePerDay) //:package_discription
router.get('/getMessFeePerMeal/:meal_Type/', getMessFeePerMeal)
router.get('/getMessPackageFee/:package_description', getMessPackageFee)


module.exports = router