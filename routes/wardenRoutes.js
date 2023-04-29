//importing modules
const express = require('express')
const wardenController = require('../controllers/wardenController')
const {  getAllWarden ,   getCurrentWarden, createWarden} = wardenController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//router.post('/createHostel/id/:hostel_id/capacity/:capacity/h_type/:hostel_type/fee/:accommodation_fee_per_day/deposit/:security_deposit/location/:location/cont/:office_contact/email/:office_email/descr/:hostel_descript', createHostel)
// router.post('/createHostel', createHostel)
router.get('/getAllWarden', getAllWarden)
router.get('/getCurrentWarden',getCurrentWarden)
router.post('/createWarden',createWarden)
// router.get('/getAccomodationFee/:hostel_type/', getAccomodationFee)


module.exports = router