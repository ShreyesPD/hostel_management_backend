//importing modules
const express = require('express')
const wardenController = require('../controllers/wardenController')
const {  getAllWarden ,   getCurrentWarden, createWarden , getVacancyBYWardenMail} = wardenController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

router.get('/getAllWarden', getAllWarden)
router.get('/getCurrentWarden',getCurrentWarden)
router.post('/createWarden',createWarden)
router.get('/getVacancyBYWardenMail',getVacancyBYWardenMail)


module.exports = router