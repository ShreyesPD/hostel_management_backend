//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const payment = db.payment;
const enrolls = db.enroll;

const insertApplicantPaymentDetail = async (req, res) => {
    
    try {
        const { package_id, payment_id ,hostel_resident_id,start_date,end_date } = req.body;
        const data = {
            package_id, 
            payment_id ,
            hostel_resident_id,
            start_date,
            end_date
        }
        const packRes = await avai.create(data)
        
        return res.status(201).send(packRes);

    }catch(error){
        console.log(error)
    }

}

const getResidentPackageInfo = async(req,res) => {
    try{
        const appl = await db.avails.findAll({
            attributes:[package_id, payment_id ,start_date,end_date],
            where: {
                hostel_resident_id : req.params['hostel_resident_id'],
            }
        });
        res.status(200).send(appl);
    }catch (error){
        console.log(error);
    }
};


module.exports = {
    insertMessPackageOfResident,
    
};





module.exports = {
    
};