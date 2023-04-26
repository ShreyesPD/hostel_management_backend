//importing modules
const express = require('express')
const studentController = require('../controllers/studentController')
const { getStudent} = studentController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
// router.post('/create_user/', userAuth.saveUser, create_user)


// router.post('/login', login)

router.get('/getStudent', getStudent)

// router.get('/getUserbyId/:id', getUserbyId)

module.exports = router