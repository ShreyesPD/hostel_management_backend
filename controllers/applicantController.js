//importing modules
// const bcrypt = require("bcrypt");
const sequelize = require('sequelize')
const db = require("../models");
// const jwt = require("jsonwebtoken");

const applicants = db.applicant;

const createApplicant = async (req, res) => {
    try {
        console.log({req:req.body})
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
        console.log({applicant_name})
        const appl = await applicants.create(data)
        
        console.log("applicant record inserted")
        return res.status(200).send(appl);

    } catch (error) {
        console.log("applicant record were not inserted")
        console.log(error);
    }
}


const getAllApplicant = async(req,res) => {
    console.log('hello')
    try{
        const allApp = await applicants.findAll({
            where : {
                application_status : 'waiting'
            }
        });
        console.log({allApp});
        res.status(200).send(allApp);
    }catch (error){
        console.log(error);
    }
};



const findApplicantByNameCourse = async(req,res) => {
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

const showWaitingList = async(req,res) => {
    try{

        const [resu,data] = await db.sequelize.query(
           `CREATE VIEW wait_list AS  select applicant_name, distance from applicants order by distance desc`
        );
          res.status(200).send(resu);
    }catch(error){
        console.log("failed to e waiting list",error);
    }
}



const updateApplicationStatus = async(req,res) => {
    try{
        const {applicant_id,application_status} = req.body;

        console.log("$$$$$$$$$$$$$$$$$$$$$$$" , applicant_id,application_status)
        const updateStatus = await applicants.update({ application_status : application_status}, {
            where: {
                applicant_id: applicant_id
            }
          });
          res.status(200).send(updateStatus);
    }catch(error){
        console.log(error);
    }
}

const deleteApplicant = async(req,res) => {
    try{

        const deleteApp = await applicants.destroy({
            where: {
                applicant_id:req.params['applicant_id']
            }
          });
          res.status(200).send(deleteApp);
    }catch(error){
        console.log("failed to delete");
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
    sortApplicantByDistance,
    showWaitingList,
    updateApplicationStatus,
    deleteApplicant
};
