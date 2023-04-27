//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const hostelResident = db.hostelResident;

const getVacancy = async(req,res) => {
    console.log('hello')
    try{
        const allApp = await applicants.findAll();
        console.log({allApp});
        res.status(200).send(allApp);
    }catch (error){
        console.log(error);
    }
};



module.exports = {
    
};