//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
const { Op } = require("sequelize");

// const jwt = require("jsonwebtoken");

const wardens = db.warden;
const hostelWardens  = db.hostelWarden
const applicants = db.applicant;
const payments = db.payment;
const rooms = db.room;
const residents = db.hostelResident;
const hostels = db.hostel;

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
        console.log({currWard1});


        const currWard = await wardens.findOne({
            
            where : {
                warden_id : currWard1.warden_id     
            }
        });

        console.log({currWard});
        res.status(200).send(currWard);
    }catch (error){
        console.log(error);
    }
};

const getMyProfile = async(req,res) => {
    try{
        const currWard1 = await hostelWardens.findOne({
            // attributes : ['warden_name','contact','email' ],
            where : {
                email : req.params['email'],
                end_date : null
            }
        })

        // const currWard = await wardens.findOne({
            
        //     where : {
        //         warden_id : currWard1.warden_id 
        //     }
        // });

        console.log({currWard1});
        res.status(200).send(currWard1);
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


const getVacancyBYWardenMail = async(req,res) => {
    console.log('hello')
    try{

        const wardenEmail = req.params['email']

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@",wardenEmail);

        const wardenId = await wardens.findOne({
            attributes : ['warden_id'],
            where : {
                    email : wardenEmail
            }
        });

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@",wardenId);
        console.log(wardenId.warden_id)
        const hostelId = await hostelWardens.findOne({
            attributes : ['hostel_id'],
            where : {
                warden_id : wardenId.warden_id , 
                end_date : null
            }
        })
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@",hostelId.hostel_id);


        const [resu,data] = await db.sequelize.query(`select sum(no_of_available_beds) as vacancy from rooms,hostels where rooms.hostel_id=hostels.hostel_id and hostels.hostel_id='${hostelId.hostel_id}'`)
        
        console.log({data});
        res.status(200).send(resu);
    }catch (error){
        console.log(error);
    }
};

/////////////////////////////////////
const getWardenBYMail = async(req,res) => {
    console.log('hello')
    try{

        const wardenEmail = req.params['email']

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@",wardenEmail);

        const wardenName = await wardens.findOne({
            attributes : ['warden_name'],
            where : {
                    email : wardenEmail
            }
        });

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@",wardenName);
        res.status(200).send(wardenName);
    }catch (error){
        console.log(error);
    }
};



// const getNewApplicants = async(req,res) => {
//     try{
//         const appl = await applicants.count({
//             where: {
//                 application_status : req.params['application_status'],
//             } 
//         });
//         res.status(200).send(appl);
//     }catch (error){
//         console.log(error);
//     }
// };

const getAlllotRoomData = async(req,res) => {
    try{
        // const data= await payments.findAll({
        //     attributes:['applicant_id','payment_id','payment_amt']
        // })
        const [resu,data] = await db.sequelize.query(`select payments.applicant_id, payment_id, payment_amt from payments, applicants where payments.applicant_id=applicants.applicant_id and application_status='aproved'`)
        console.log(data)
        res.status(200).send(resu);

    }catch (error){
        console.log(error)
    }
}


const getAvailableRoom = async(req,res) => {
    try{

        
        const data= await rooms.findAll({
            attributes:['room_no','no_of_available_beds'],
            where :{
                // no_of_available_beds: {
                //     [Op.gt] : 0,
                //     [Op.lt] : 3 
                // },
                hostel_id:req.params['hostel_id']
            }
        })

        var data1=[];

        data.forEach(element => {
            const availB = parseInt(element.no_of_available_beds);
            if(availB>0 && availB<3){
                data1.push(element)
            }
            
    });
        
    //    const applicant_name = await applicants.findOne 
    console.log('$$$$$$$$$$$',data)
    console.log('$$$$$$$$$$$',data1)
    res.status(200).send(data1);
        
    }catch (error){
        console.log(error)
    }
}

const getAllResidents = async (req,res)=>{
    try{
       // const allRes = await residents.findAll({});

       const [resu,data] = await db.sequelize.query(`select * from hostel_residents, room_allots where room_allots.hostel_resident_id=hostel_residents.hostel_resident_id and sex='M'`)
        
        console.log({data});
        res.status(200).send(resu);
    }catch (error){
        console.log(error);
    }
}

const getApprovedApplicant = async(req,res) => {
    console.log('hello')
    try{
        const allApp = await applicants.findAll({
            where : {
                application_status : 'approved'
            }
        });
        console.log({allApp});
        res.status(200).send(allApp);
    }catch (error){
        console.log(error);
    }
};

const roomAllotments= db.roomAllotment;


// const allocateRoom = async (req,res)=>{
//     try{
//         const {room_no , applicant_id}=req.body
//         const data={
//             room_no,
//             applicant_id
//         }

//         const appl = await roomAllotments.create(data)

//         const no = await residents.findOne({
//             attributes:[no_of_available_beds],
//             where :{
//                 room_no:room_no
//             }
//         });

//         const app2 = await rooms.update({ no_of_available_beds: no.no_of_available_beds-1 }, {
//             where: {
//               room_no: room_no
//             }
//           });


//         res.status(200).send(app2);
//     }catch (error){
//         console.log(error);
//     }
// }

const getNewApplicationCount = async(req,res)=>{
    try{

        const wardenEmail = req.params['email']

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@",wardenEmail);

        const wardenId = await wardens.findOne({
            attributes : ['warden_id'],
            where : {
                    email : wardenEmail
            }
        });
        const hostelId = await hostelWardens.findOne({
            attributes : ['hostel_id'],
            where : {
                warden_id : wardenId.warden_id , 
                end_date : null
            }
        })

        const hostelType = await hostels.findOne({
            attributes : ['hostel_type'],
            where : {
                hostel_id : hostelId.hostel_id , 
            }
        })
        console.log('^^^^^^^^^^^^',hostelType.hostel_type,'+++++++')


        var applC;
        if(hostelType.hostel_type=='Men_PG'){
            applC = await applicants.count({
                where : {
                    sex : 'M',
                    course_type: 'UG',
                    application_status : 'waiting',
                }
            });
        }
        data={
            applicationCount : applC
        }

        const appl = await applicants.count({
            where: {
                application_status : 'waiting',
                
            } 
        });
        // var sex , cType
    //     if(hostelType.hostel_type=='Men_PG'){
    //         console.log("inside");
    //         sex='M';
    //         // cType='PG'
    //  }

    //  const [resu,data] = await db.sequelize.query(`select sum(applicant_id) as applicationCount from applicants where sex='${sex}' and  application_status = 'waiting' `)
     console.log('^^^^^^^^^^^^',data,'XXXXXXXXXXXXXXXXXXXXXXXXX')
     res.status(200).send(data);
        
    }catch (error){
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
    createWarden,
    getVacancyBYWardenMail,
    // getNewApplicants,
    getAlllotRoomData,
    getAvailableRoom,
    getAllResidents,
    // allocateRoom,
    getApprovedApplicant,
    getNewApplicationCount,
    getMyProfile
};
