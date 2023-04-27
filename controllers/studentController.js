//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const students = db.student;

const createStudent = async (req, res) => {
    try {
        const { stud_id , sName , stud_type , stud_course , sex , aadhar , address , contact , photo , email} = req.body;
        const data = {
            stud_id , 
            sName ,
            stud_type ,
            stud_course ,
            sex ,
            aadhar ,
            address ,
            contact ,
            photo ,
            email
        };

        const allStu = await db.students.create(data)

        if (allStu) {
            let token = jwt.sign({ id: allStu.id }, process.env.secretKey, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
            console.log("project", JSON.stringify(project, null, 2));
            console.log(token);
        
            return res.status(201).send("project added");
        } else {
            return res.status(409).send("Details are not correct");
        }
    } catch (error) {
        console.log(error);
    }
}


const getAllStudent = async(req,res) => {
    console.log('hello')
    try{
        const allStd = await students.findAll();
        console.log({allStd});
        res.status(200).send(allStd);
    }catch (error){
        console.log(error);
    }
};

const findStudentByNameCourse = async(req,res) => {
    console.log('hello')
    try{
        const user = await students.findOne({
        where: {
            std_name : req.params['s_name'],
            std_course : req.params['stud_course']
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
    getAllStudent,
    createStudent,
    findStudentByNameCourse
};