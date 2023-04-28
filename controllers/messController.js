//importing modules
// const bcrypt = require("bcrypt");
const db = require("../models");
// const jwt = require("jsonwebtoken");

const messP = db.mess_package;
const meals = db.meal;
 

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

        console.log(messFeeVeg,messFeeNonVeg);
        res.status(200).send(messFeeVeg,messFeeNonVeg);
    }catch (error){
        console.log(error);
    }
};


const getMessFeePerMeal = async(req,res) => {

    try{
        const messFeeVegBreakFast = await meals.findOne({
            attributes :['amt'] ,
            where : {
                meal_Type : req.params['breakfast']
            }
        })
        const messFeeVegLunch = await meals.findOne({
            attributes :['amt'] ,
            where : {
                meal_Type : req.params['veg_lunch']
            }
        })
        const messFeeNonVegLunch = await meals.findOne({
            attributes :['amt'] ,
            where : {
                meal_Type : req.params['nonveg_lunch']
            }
        })

        console.log(messFeeVegBreakFast,messFeeVegLunch,messFeeNonVegLunch);
        res.status(200).send(messFeeVegBreakFast,messFeeVegLunch,messFeeNonVegLunch);
    }catch (error){
        console.log(error);
    }
};


const getMessPackageFee = async(req,res) => {

    try{
        const messFeeVegFiveDay = await messP.findOne({
            attributes :['amt_per_day'] ,
            where : {
                package_description : req.params['5_day_veg']
            }
        })
        const final_messFeeVegFiveDay = messFeeVegFiveDay *  req.params['package_period_five_day'];

        const messFeeVegSevenDay = await messP.findOne({
            attributes :['amt_per_day'] ,
            where : {
                package_description : req.params['7_day_veg']
            }
        })

        const final_messFeeVegSevenDay = messFeeVegSevenDay * req.params['package_period_seven_day'];

        const messFeeNonVegFiveDay = await messP.findOne({
            attributes :['amt_per_day'] ,
            where : {
                package_description : req.params['5_day_nonveg']
            }
        })
 
        const final_messFeeNonVegFiveDay = messFeeNonVegFiveDay * req.params['package_period_five_day'];

        const messFeeNonVegSevenDay = await messP.findOne({
            attributes :['amt_per_day'] ,
            where : {
                package_description : req.params['7_day_nonveg']
            }
        })
        
        const final_messFeeNonVegSevenDay = messFeeNonVegSevenDay *  req.params['package_period_seven_day'];

        console.log({final_messFeeVegFiveDay,final_messFeeVegSevenDay,final_messFeeNonVegFiveDay,final_messFeeNonVegSevenDay});
        res.status(200).send(final_messFeeVegFiveDay,final_messFeeVegSevenDay,final_messFeeNonVegFiveDay,final_messFeeNonVegSevenDay);
    }catch (error){
        console.log(error);
    }
};



module.exports = {
    getMessFeePerDay,
    getMessFeePerMeal,
    getMessPackageFee
};