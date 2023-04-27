//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const mess = db.mess;
const hostelResidents = db.hostelResident


// const getMessFeePerday = async(req,res) => {
//     console.log('hello')
//     try{

//         const host_type = req.params['hostel_type']
//         const hostFee = await hostels.findOne({
//             attributes :['accommodation_fee_per_day'] ,
//             where : {
//                 hostel_type : host_type
//             }
//         })
    
//         console.log({hostFee});
//         res.status(200).send(hostFee);
//     }catch (error){
//         console.log(error);
//     }
// };



module.exports = {
    
};