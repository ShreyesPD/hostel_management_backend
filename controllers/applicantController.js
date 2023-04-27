//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const applicants = db.applicant;

const createApplicant = async (req, res) => {
    try {
        const { applicant_id , applicant_Name , course_type , applicant_course , sex , aadhar , address , contact , photo , email} = req.body;
        const data = {
            applicant_id , 
            applicant_Name ,
            course_type ,
            applicant_course ,
            sex ,
            aadhar ,
            address ,
            contact ,
            photo ,
            email
        };

        const allApp = await db.applicants.create(data)

        if (allApp) {
            let token = jwt.sign({ id: allApp.id }, process.env.secretKey, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
            console.log("applicants", JSON.stringify(project, null, 2));
            console.log(token);
        
            return res.status(201).send("application recieved");
        } else {
            return res.status(409).send("Details are not correct");
        }
    } catch (error) {
        console.log(error);
    }
}


const getAllApplicant = async(req,res) => {
    console.log('hello')
    try{
        const allStd = await applicants.findAll();
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
            app_name : req.params['applicant_name'],
            app_course : req.params['applicant_course']
          } 
          });
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