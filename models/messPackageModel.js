
//mess_package model
module.exports = (sequelize, DataTypes) => {
    const mess_package = sequelize.define("mess_packages", {
        package_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        package_description: {
            type: DataTypes.ENUM,
            values: ["5_day_veg","5_day_nonveg","7_day_veg","7_day_nonveg"],
            defaultValue: "5_day_veg"
        },
        amt_per_day: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        package_period: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 125,
        }   
    }, { timestamps: true }, {freezeTableName: true})
    return mess_package 
}