//importing modules
const express = require('express')
const wardenController = require('../controllers/wardenController')
const {  getAllWarden ,   getCurrentWarden, createWarden , getVacancyBYWardenMail , getNewApplicants ,getAlllotRoomData ,getAvailableRoom} = wardenController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

router.get('/getAllWarden', getAllWarden)
router.get('/getCurrentWarden/:hostel_id',getCurrentWarden)
router.post('/createWarden',createWarden)
router.get('/getVacancyBYWardenMail/:email',getVacancyBYWardenMail)
router.get('/getNewApplicants/:application_status',getNewApplicants)
router.get('/getAvailableRoom/:hostel_id',getAvailableRoom)
router.get('/getAlllotRoomData',getAlllotRoomData)


module.exports = router