module.exports = (sequelize, DataTypes) => {
    const mess_provides_meals = sequelize.define("mess_provides_meals", {
        meal_Type: {
            type: DataTypes.ENUM,
            primaryKey: true,
            values: ["breakfast" , "veg_lunch","nonveg_lunch","veg_dinner","nonveg_dinner"],
            references: {
                model: 'meal_Type',
                key: 'meals'
            },
            allowNull: false,
        },
        mess_id:{
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'messes',
                key: 'mess_id'
            },
            type: DataTypes.STRING
        },
    }, { timestamps: true }, {freezeTableName: true})
    return mess_has_package 
}