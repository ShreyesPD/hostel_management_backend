//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const students = db.student;

const getStudent = async(req,res) => {
    console.log('hello')
    try{
        const allStd = await students.findAll();
        console.log({allStd});
        res.status(200).send(allStd);
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
    getStudent
};