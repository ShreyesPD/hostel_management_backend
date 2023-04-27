//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const hostels = db.hostel;

const createHostel = async (req, res) => {
    try {
        const { hostel_id , capacity , hostel_type , accommodation_fee_per_day , security_deposit , location , office_contact ,office_email, hostel_descript } = req.body;
        const data = {
            hostel_id , 
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

        console.log("hostel record inserted", " " ,hostel )
    } catch (error) {
        console.log("hostel record were not inserted")
        console.log(error);
    }
}



module.exports = {
    createHostel
};