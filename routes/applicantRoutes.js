//importing modules
const express = require('express')
const applicantController = require('../controllers/applicantController')
const { getAllApplicant , createApplicant , findApplicantByNameCourse} = applicantController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
// router.post('/create_user/', userAuth.saveUser, create_user)


// router.post('/login', login)

router.get('/getAllApplicant', getAllApplicant)
router.post('/createApplicant/id/:applicant_id/name/:applicant_name/c_type/:course_type/course/:applicant_course/sex/:sex/aadhar/:aadhar/adr/:address/cont/:contact/distance/:distance/photo/:photo/email/:email/g_name/:guardian_name/g_sex/:guardian_sex/relation/:relation/g_aadhar/:guardian_aadhar/g_address/:guardian_address/g_contact/:guardian_contact/g_email/:guardian_email', createApplicant)
router.get('/findApplicantByNameCourse/:applicant_name/:applicant_course', findApplicantByNameCourse)


// router.get('/getUserbyId/:id', getUserbyId)

module.exports = router