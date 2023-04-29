//importing modules
const express = require('express')
const wardenController = require('../controllers/wardenController')
const {  getAllWarden ,   getCurrentWarden, createWarden} = wardenController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

router.get('/getAllWarden', getAllWarden)
router.get('/getCurrentWarden',getCurrentWarden)
router.post('/createWarden',createWarden)



module.exports = router