//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const avai = db.avails;


const insertMessPackageOfResident = async (req, res) => {
    
    try {
        const { package_id, payment_id ,hostel_resident_id } = req.body;
        const data = {
            package_id, 
            payment_id ,
            hostel_resident_id,
            start_date:"2022-08-01T00:00:00.000Z",
            end_date:"2026-05-31T00:00:00.000Z"
        }


        const packRes = await avai.create(data)
        
        const {start_date,end_date} = await db.avails.findAll({
            attributes:[start_date,end_date],
            where: {    
                hostel_resident_id : data.hostel_resident_id
            }
        });

        const packRes1= await avai.update({ start_date: start_date ,end_date: end_date  }, {
            where: {
                hostel_resident_id: data.hostel_resident_id
            }
        });

        return res.status(200).send(packRes);

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
    getResidentPackageInfo
};