//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const hostels = db.hostel;
const hostelResidents = db.hostelResident;
const rooms = db.room;


const createHostel = async (req, res) => {
    try {
        const { capacity , hostel_type , accommodation_fee_per_day , security_deposit , location , office_contact ,office_email, hostel_descript } = req.body;
        const data = {
            capacity ,
            hostel_type ,
            accommodation_fee_per_day ,
            security_deposit , 
            location , 
            office_contact , 
            office_email ,
            hostel_descript
        };

        const hostel = await hostels.create(data)
        res.status(200).send("records inserted")

        console.log("hostel record inserted" )
    } catch (error) {
        console.log("hostel record were not inserted")
        console.log(error);
    }
}

const getVacancy = async(req,res) => {
    console.log('hello')
    try{
        const host_type = req.params['hostel_type']
        const [resu,data] = await db.sequelize.query(`select sum(no_of_available_beds) as vacancy from rooms,hostels where rooms.hostel_id=hostels.hostel_id and hostels.hostel_type='${host_type}'`)
        
        // const hostResd = await hostelResidents.count({
        //     where : {
        //         hostel_type : host_type
        //     }
        // })
        // const capacity = await hostels.sum('capacity', 
        // {
        //     where :{
        //         hostel_type : host_type
        //     }
        // })
        // const vacc = capacity - hostResd 

        console.log({data});
        res.status(200).send(resu);
    }catch (error){
        console.log(error);
    }
};


const getAccomodationFee = async(req,res) => {
    console.log('hello')
    try{

        const host_type = req.params['hostel_type']
        const hostFee = await hostels.findOne({
            attributes :['accommodation_fee_per_day'] ,
            where : {
                hostel_type : host_type
            }
        })
    
        console.log({hostFee});
        res.status(200).send(hostFee);
    }catch (error){
        console.log(error);
    }
};



module.exports = {
    createHostel,
    getVacancy,
    getAccomodationFee
};