//importing modules
const express = require('express')
const hostelResidentController = require('../controllers/hostelResidentController')


const {createHostelResident,getResidentInfo,getResidentPayment}=hostelResidentController;

const router = express.Router()


router.post('/createHostelResident',createHostelResident);
router.get('/getResidentInfo/:hostel_resident_id',getResidentInfo);
router.get('/getResidentPayment/:hostel_resident_id',getResidentPayment);



module.exports = router