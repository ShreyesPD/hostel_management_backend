//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const applicantController = require('../controllers/applicantController')

// const { updateApplicationStatus } = applicantController

// const jwt = require("jsonwebtoken");

const hostelResidents = db.hostelResident;
const applicants = db.applicant;
const guardians = db.guardian;
const roomAllotments= db.roomAllotment;
const rooms = db.room;

const createHostelResident = async (req, res) => {
    try {

        const {room_no,applicant_id} = req.body;

        const applicantData = await applicants.findOne({
            where : {
                applicant_id : applicant_id
            }
        });

        console.log('@@@@@@@@@@@@@@@@@@@@@@@',typeof(applicantData),applicantData)
        
        const hostel_resident_id = applicantData.applicant_id;
        const hostel_resident_name= applicantData.applicant_name;
        const course_type  = applicantData.course_type ;
        const hostel_resident_course = applicantData.applicant_course;
        const sex =applicantData.sex;
        const aadhar =applicantData.aadhar;
        const address =applicantData.address;
        const contact =applicantData.contact;
        const distance =applicantData.distance;
        const photo =applicantData.photo;
        const email =applicantData.email;
        const medical_certificate=applicantData.medical_certificate;
        const bonified_certificate=applicantData.bonified_certificate;

        // const application_status= applicantData.application_status ;

        console.log({req:req.body})
        const data = {
            hostel_resident_id,
            hostel_resident_name ,
            course_type ,
            hostel_resident_course ,
            sex ,
            aadhar ,
            address ,
            contact ,
            distance ,
            photo ,
            email ,
            medical_certificate,
            bonified_certificate,
        };

        console.log('*****************',data)

        const hosR = await hostelResidents.create(data)
        
        console.log("hostel record inserted")

        //call guardian record insert function
        const guarR=createGuardian(applicantData);
        console.log("guardian record inserted")

        //call room allotment function
        const roomA=allotResidentRoom(applicantData,room_no);
        console.log("room allotment details inserted")

        //deleting applicant record
        const deleteApp = await applicants.destroy({
            where: {
                applicant_id: hostel_resident_id
            }
          });

        console.log("applicant record deleted")

        return res.status(200).send(hosR);
  
    } catch (error) {
        console.log("applicant record were not inserted")
        console.log(error);
    }
}


const createGuardian = async (applicantData) => {

    try {
        const hostel_resident_id = applicantData.applicant_id;
        const guardian_name= applicantData.guardian_name ;
        const relation = applicantData.relation ; 
        const aadhar =  applicantData.guardian_aadhar ; 
        const address = applicantData.guardian_address  ;
        const contact = applicantData.guardian_contact ; 
        const email = applicantData.guardian_email ;

        const data ={
            hostel_resident_id,
            guardian_name,
            relation,
            aadhar,
            address,
            contact,
            email
        }
        const guarR = await guardians.create(data)

        return guarR

    } catch (error) {
        console.log("guardian record were not inserted")
        console.log(error);
    }
}

const allotResidentRoom = async(applicantData,room_no) =>{
    try{

        const hostel_resident_id= applicantData.applicant_id;
        const start_date =applicantData.start_date;
        const end_date = applicantData.end_date;

        data ={
            room_no,
            hostel_resident_id,
            start_date,
            end_date
        }

        const roomA = await roomAllotments.create(data);

        //updating vaccancies
        const no = await rooms.findOne({
            attributes : ['no_of_available_beds'],
            where :{
                room_no:room_no
            }
        });

        console.log('@@@@@@@@@@@@@@@@@@@%%%%%%%%',no,no.no_of_available_beds)

        no.no_of_available_beds=no.no_of_available_beds-1;
        no.no_of_available_beds.toString();

        console.log('@@@@@@@@@@@@@@@@@@@%%%%%%%%',no,no.no_of_available_beds)


        const app2 = await rooms.update({ no_of_available_beds: no.no_of_available_beds}, {
            where: {
              room_no: room_no
            }
          });

          console.log('@@@@@@@@@@@@@@@@@@@%%%%%%%%',app2)

        return app2

    }catch (error) {
        console.log("room was not alloted")
        console.log(error);
    }
}

// const updateStatusAndCreateResident =  ()=> {
    
//     updateApplicationStatus();
    
//     const cHR = createHostelResident();

//     return res.status(200).send(cHR);
    
// }

module.exports = {
    createHostelResident  
};