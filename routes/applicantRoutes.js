//importing modules
const express = require('express')
const studentController = require('../controllers/applicantController')
const { getAllApplicant , createApplicant , findApplicantByNameCourse} = studentController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
// router.post('/create_user/', userAuth.saveUser, create_user)


// router.post('/login', login)

router.get('/getAllStudent', getAllApplicant)
router.post('/createApplicant/id/:applicant_id/name/:applicant_name/type/:course_type/course/:applicant_course/sex/:sex/aadhar/:aadhar/adr/:address/cont/:contact/photo/:photo/email/:email', createApplicant)
router.get('/findApplicantByNameCourse/:app_name:app_name', findApplicantByNameCourse)


// router.get('/getUserbyId/:id', getUserbyId)

module.exports = router