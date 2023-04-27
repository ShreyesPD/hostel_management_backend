//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const applicants = db.applicant;

const createApplicant = async (req, res) => {
    try {
        const { applicant_id , applicant_Name , course_type , applicant_course , sex , aadhar , address , contact , distance , photo , email , medical_certificate, bonified_certificate ,start_date , end_date , guardian_name , relation , guardian_aadhar , guardian_address , guardian_contact , guardian_email } = req.body;
        const data = {
            applicant_id , 
            applicant_Name ,
            course_type ,
            applicant_course ,
            sex ,
            aadhar ,
            address ,
            contact ,
            distance ,
            photo ,
            email ,
            medical_certificate,
            bonified_certificate,
            start_date,
            end_date,
            guardian_name ,
            relation , 
            guardian_aadhar , 
            guardian_address , 
            guardian_contact , 
            guardian_email
        };

        const appl = await applicants.create(data)
    
        console.log("applicant record inserted", " " ,appl )

    } catch (error) {
        console.log("applicant record were not inserted")
        console.log(error);
    }
}


const getAllApplicant = async(req,res) => {
    console.log('hello')
    try{
        const allApp = await applicants.findAll();
        console.log({allApp});
        res.status(200).send(allApp);
    }catch (error){
        console.log(error);
    }
};


const findApplicantByNameCourse = async(req,res) => {
    console.log('hello')
    try{
        const user = await applicants.findOne({
            where: {
                app_course : req.params['applicant_course'],
                app_name : req.params['applicant_name']
            } 
        });
        res.status(200).send(user);
    }catch (error){
        console.log(error);
    }
};


// const getStudent = async(req,res) => {
//     console.log('hello')
//     try{
//         const std = await studentdb.findOne()
//         res.status(200).send(std);
//     }catch (error){
//         console.log(error);
//     }
// }


module.exports = {
    getAllApplicant,
    createApplicant,
    findApplicantByNameCourse
};
