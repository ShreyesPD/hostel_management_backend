//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const wardens = db.warden;
const hostelWardens  = db.hostelWarden

const getAllWarden = async(req,res) => {
    try{
        const allWard = await wardens.findAll();
        console.log({allWard});
        res.status(200).send(allWard);
    }catch (error){
        console.log(error);
    }
};

const getCurrentWarden = async(req,res) => {
    try{
        const currWard1 = await hostelWardens.findOne({
            attributes : ['warden_id'],
            where : {
                hostel_id : req.params['hostel_id'],
                end_date : null
            }
        })

        const currWard = await wardens.findOne({
            
            where : {
                warden_id : currWard1    
            }
        });

        console.log({currWard});
        res.status(200).send(currWard);
    }catch (error){
        console.log(error);
    }
};

const createWarden = async (req, res) => {
    try {
        const { warden_id , warden_name , sex , aadhar , address , contact ,photo, email ,hostel_id, join_date , end_date } = req.body;
        const data = {
            warden_id , 
            warden_name , 
            sex , 
            aadhar , 
            address , 
            contact ,
            photo, 
            email,
        };

        const data1= {
            hostel_id, 
            join_date , 
            end_date
        }

        const ward = await db.wardens.create(data)
        res.status(200).send("records inserted")
        const ward1 = await hostelWardens.create(data1)

        console.log("hostel record inserted" )
    } catch (error) {
        console.log("hostel record were not inserted")
        console.log(error);
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
    getAllWarden ,
    getCurrentWarden,
    createWarden
};
