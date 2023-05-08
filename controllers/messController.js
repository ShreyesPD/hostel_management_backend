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
                package_description : req.params['5_day_veg'] //"5_day_veg"
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
        res.status(200).send(messFee);
    }catch (error){
        console.log(error);
    }
};


const getMessPackageFee = async(req,res) => {

    try{
        const {messFeeVegFiveDay , packagePeriod5} = await messP.findOne({
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

        const final_messFeeVegFiveDay = messFeeVegFiveDay * packagePeriod5;

        const { messFeeVegSevenDay , packagePeriod7} = await messP.findOne({
            attributes :['amt_per_day' , 'package_period'] ,
            where : {
                package_description : '7_day_veg'
            }
        })

        const final_messFeeVegSevenDay = messFeeVegSevenDay * packagePeriod7;

        const {messFeeNonVegFiveDay , packagePeriodNV5} = await messP.findOne({
            attributes :['amt_per_day' , 'package_period'] ,
            where : {
                package_description : '5_day_nonveg'
            }
        })
 
        const final_messFeeNonVegFiveDay = messFeeNonVegFiveDay * packagePeriodNV5;

        const {messFeeNonVegSevenDay , packagePeriodNV7} = await messP.findOne({
            attributes :['amt_per_day', 'package_period'] ,
            where : {
                package_description : '7_day_nonveg'
            }
        })
        
        const final_messFeeNonVegSevenDay = messFeeNonVegSevenDay * packagePeriodNV7;

        console.log({final_messFeeVegFiveDay,final_messFeeVegSevenDay,final_messFeeNonVegFiveDay,final_messFeeNonVegSevenDay});
        res.status(200).send(final_messFeeVegFiveDay,final_messFeeVegSevenDay,final_messFeeNonVegFiveDay,final_messFeeNonVegSevenDay);
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