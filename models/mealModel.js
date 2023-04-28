//meal model
module.exports = (sequelize, DataTypes) => {
    const meal = sequelize.define("meals", {
        meal_Type: {
            type: DataTypes.ENUM,
            primaryKey: true,
            values: ["breakfast" , "veg_lunch","nonveg_lunch","veg_dinner","nonveg_dinner"],
            allowNull: false,
        },
        amt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return meal 
}