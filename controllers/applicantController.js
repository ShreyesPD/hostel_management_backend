//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const applicants = db.applicant;

const createApplicant = async (req, res) => {
    try {
        const { applicant_name , course_type , applicant_course , sex , aadhar , address , contact , distance , photo , email , medical_certificate, bonified_certificate ,start_date , end_date , guardian_name , relation , guardian_aadhar , guardian_address , guardian_contact , guardian_email , application_status} = req.body;
        const data = {
            applicant_name ,
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
            guardian_email ,
            application_status
        };

        const appl = await applicants.create(data)
        
        console.log("applicant record inserted")
        return res.status(201).send("user added");


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
        const appl = await applicants.findAll({
            where: {
                applicant_course : req.params['applicant_course'],
                applicant_name : req.params['applicant_name']
            } 
        });
        res.status(200).send(appl);
    }catch (error){
        console.log(error);
    }
};

const sortApplicantByDistance = async(req,res) => {
    try{

        const sort =await applicants.findAll({
            order: [
              ['distance', 'DESC']
            ]
        });
        res.status(200).send(sort);

    }catch (error){
        console.log(error);
    }
}

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
    findApplicantByNameCourse,
    sortApplicantByDistance
};
