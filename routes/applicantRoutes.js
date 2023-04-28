//importing modules
const express = require('express')
const applicantController = require('../controllers/applicantController')
const { getAllApplicant , createApplicant , findApplicantByNameCourse , sortApplicantByDistance} = applicantController
// const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
// router.post('/create_user/', userAuth.saveUser, create_user)


// router.post('/login', login)

router.get('/getAllApplicant', getAllApplicant)
router.post('/createApplicant', createApplicant)
///name/:applicant_name/c_type/:course_type/course/:applicant_course/sex/:sex/aadhar/:aadhar/adr/:address/cont/:contact/distance/:distance/photo/:photo/email/:email/med_cerf/:medical_certificate/bona_cerf/:bonified_certificate/start_date/:start_date/end_date/:end_date/g_name/:guardian_name/relation/:relation/g_aadhar/:guardian_aadhar/g_address/:guardian_address/g_contact/:guardian_contact/g_email/:guardian_email/app_stat/:application_status
router.get('/findApplicantByNameCourse/:applicant_name/:applicant_course', findApplicantByNameCourse)
router.get('/sortApplicantByDistance', sortApplicantByDistance)



// router.get('/getUserbyId/:id', getUserbyId)

module.exports = router



// name/:adroy/c_type/:PhD/course/:Physics/sex/:M/aadhar/:678901234567/adr/:987ElmSt/cont/:678-901-2345/distance/:80/photo/:null/email/:fuhk@em.com/med_cerf/:null/bona_cerf/:null/start_date/:2023-01-01T00:00:00.000Z/end_date/:2027-12-31T00:00:00.000Z/g_name/:gggdr/relation/:Father/g_aadhar/:432109876543/g_address/:eertrt/g_contact/:34565/g_email/:45654@dgrd.com/app_stat/:application_status

// {
//     "name": "adroy",
//     "c_type": "UG",
//     "course": "English",
//     "sex": "M",
//     "aadhar": 567890123456,
//     "adr": "654 Pine St",
//     "cont": "567-890-1234",
//     "distance": 5,
//     "photo": null,
//     "email": "adroy@example.com",
//     "med_cerf": null,
//     "bona_cerf": null,
//     "start_date": "2022-08-01T00:00:00.000Z",
//     "end_date": "2026-05-31T00:00:00.000Z",
//     "g_name": "Emily Davis",
//     "relation": "Mother",
//     "g_aadhar": 543210987654,
//     "g_address": "456 Oak St",
//     "g_contact": "876-543-2109",
//     "g_email": "emils@example.com",
//     "application_status": "waiting",
//     "createdAt": "2023-04-28T06:06:48.000Z",
//     "updatedAt": "2023-04-28T06:06:48.000Z"
// }