//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const mess = db.mess;
const messP = db.mess_package;
const meals = db.meal;


const createMess = async (req, res) => {
    try {
        const { mess_id , mess_description } = req.body;
        const data = {
            mess_id , 
            mess_description
        };

        const messs = await mess.create(data)

        console.log("mess record inserted" )
        res.status(200).send(messs);
    } catch (error) {
        console.log("mess record were not inserted")
        console.log(error);
    }
}

const getMessFeePerDay = async(req,res) => {

    try{
        const messFeeVeg = await messP.findOne({
            attributes :['amt_per_day'] ,
            where : {
                package_description : req.params['package_description'] //"5_day_veg"
            }
        })
        // const messFeeNonVeg = await messP.findOne({
        //     attributes :['amt_per_day'] ,
        //     where : {
        //         package_description : req.params['5_day_nonveg']
        //     }
        // })

        console.log(messFeeVeg);
        res.status(200).send(messFeeVeg);
    }catch (error){
        console.log(error);
    }
};


const getMessFeePerMeal = async(req,res) => {

    try{
        const messFee = await meals.findOne({
            attributes :['amt'] ,
            where : {
                meal_Type : req.params['meal_type']
            }
        })
        // const messFeeVegLunch = await meals.findOne({
        //     attributes :['amt'] ,
        //     where : {
        //         meal_Type : 'veg_lunch'
        //     }
        // })
        // const messFeeNonVegLunch = await meals.findOne({
        //     attributes :['amt'] ,
        //     where : {
        //         meal_Type : 'nonveg_lunch'
        //     }
        // })

        console.log(messFee);
        console.log("#################################$$$$$$$$$$$$$$$$$$$$$$")
        res.status(200).send(messFee);
    }catch (error){
        console.log(error);
    }
};


const getMessPackageFee = async(req,res) => {

    try{
        const data = await messP.findOne({
            attributes :['amt_per_day','package_period'] ,
            where : {
                package_description : '5_day_veg'
            }
        })

        // const packagePeriod = await messP.findOne({
        //     attributes :['package_period'],
        //     where : {
        //         package_description : '5_day_veg'
        //     }
        // })
        console.log(typeof(data))
        console.log("#################################")
        console.log(data.amt_per_day , data.package_period)
        const final_messFeeVegFiveDay = data.amt_per_day * data.package_period; //messFeeVegFiveDay * packagePeriod5;

        const data1 = await messP.findOne({
            attributes :['amt_per_day' , 'package_period'] ,
            where : {
                package_description : '7_day_veg'
            }
        })

        const final_messFeeVegSevenDay = data1.amt_per_day * data1.package_period;

        const data2 = await messP.findOne({
            attributes :['amt_per_day' , 'package_period'] ,
            where : {
                package_description : '5_day_nonveg'
            }
        })
 
        const final_messFeeNonVegFiveDay = data2.amt_per_day * data2.package_period;

        const data3 = await messP.findOne({
            attributes :['amt_per_day', 'package_period'] ,
            where : {
                package_description : '7_day_nonveg'
            }
        })
        
        const final_messFeeNonVegSevenDay = data3.amt_per_day * data3.package_period;
        const data4 ={
            final_messFeeVegFiveDay,
            final_messFeeVegSevenDay,
            final_messFeeNonVegFiveDay,
            final_messFeeNonVegSevenDay
        }
        console.log("#################################")
        console.log({final_messFeeVegFiveDay,final_messFeeVegSevenDay,final_messFeeNonVegFiveDay,final_messFeeNonVegSevenDay});
        res.status(200).send(data4);
    }catch (error){
        console.log(error);
    }
};



module.exports = {
    createMess,
    getMessFeePerDay,
    getMessFeePerMeal,
    getMessPackageFee
};