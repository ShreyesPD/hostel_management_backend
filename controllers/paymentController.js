//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const payment = db.payment;
const enrolls = db.enroll;

const insertApplicantPaymentDetail = async (req, res) => {
    
    try {
        const { payment_id, payment_description ,payment_amt,reciept} = req.body;
        const data = {
            payment_id, payment_description ,payment_amt,reciept
        }
        const appPayDet = await avai.create(data)
        
        return res.status(201).send(appPayDet);

    }catch(error){
        console.log(error)
    }

}

const getApplicantPaymentInfo = async(req,res) => {
    try{
        const appl = await db.avails.findAll({
            attributes:[payment_description ,payment_amt,reciept],
            where: {
                payment_id : req.params['payment_id'],
            }
        });
        res.status(200).send(appl);
    }catch (error){
        console.log(error);
    }
};


module.exports = {
    insertApplicantPaymentDetail,
    getApplicantPaymentInfo
};
