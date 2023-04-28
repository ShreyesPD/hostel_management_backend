//importing modules
const express = require('express')
const hostelController = require('../controllers/hostelController')
const {  createHostel , getVacancy , getAccomodationFee} = hostelController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//router.post('/createHostel/id/:hostel_id/capacity/:capacity/h_type/:hostel_type/fee/:accommodation_fee_per_day/deposit/:security_deposit/location/:location/cont/:office_contact/email/:office_email/descr/:hostel_descript', createHostel)
router.post('/createHostel', createHostel)
router.get('/getVacancy/:hostel_type/', getVacancy)
router.get('/getAccomodationFee/:hostel_type/', getAccomodationFee)


module.exports = router