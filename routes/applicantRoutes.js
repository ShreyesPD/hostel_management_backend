//importing modules
const express = require('express')
const studentController = require('../controllers/applicantController')
const { getAllStudent , createStudent , findStudentByNameCourse} = studentController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
// router.post('/create_user/', userAuth.saveUser, create_user)


// router.post('/login', login)

router.get('/getAllStudent', getAllStudent)
router.post('/createStudent/id/:stud_id/name/:sName/type/:stud_type/course/:stud_course/sex/:sex/aadhar/:aadhar/adr/:address/cont/:contact/photo/:photo/email/:email', createStudent)
router.get('/findStudentByNameCourse/:s_name:stud_course', findStudentByNameCourse)


// router.get('/getUserbyId/:id', getUserbyId)

module.exports = router