//importing modules
const express = require('express')
const availsController = require('../controllers/availsController')
const {  insertMessPackageOfResident , getResidentPackageInfo } = availsController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//router.post('/createHostel/id/:hostel_id/capacity/:capacity/h_type/:hostel_type/fee/:accommodation_fee_per_day/deposit/:security_deposit/location/:location/cont/:office_contact/email/:office_email/descr/:hostel_descript', createHostel)
router.post('/insertMessPackageOfResident', insertMessPackageOfResident)
router.get('/getResidentPackageInfo/hostel_resident_id', getResidentPackageInfo)


module.exports = router