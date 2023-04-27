//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const wardens = db.warden;


const getAllWarden = async(req,res) => {
    console.log('hello')
    try{
        const allWard = await wardens.findAll();
        console.log({allWard});
        res.status(200).send(allWard);
    }catch (error){
        console.log(error);
    }
};

const getCurrentWarden = async(req,res) => {

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
    getAllWarden ,
    getCurrentWarden
};