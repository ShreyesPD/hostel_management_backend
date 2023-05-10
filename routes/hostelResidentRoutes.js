//importing modules
const express = require('express')
const hostelResidentController = require('../controllers/hostelResidentController')


const {createHostelResident}=hostelResidentController;

const router = express.Router()


router.post('/createHostelResident',createHostelResident);


module.exports = router