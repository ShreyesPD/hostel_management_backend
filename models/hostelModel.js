
//Hostel model
module.exports = (sequelize, DataTypes) => {
    const hostel = sequelize.define("hostel", {
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        capacity: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        hostel_type: {
            type: DataTypes.ENUM,
            values: ["Men_UG","Men_PG", "Men_PhD","Women_UG","Women_PG", "Women_PhD"],
            allowNull: false
        },
        accommodation_fee: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        security_deposit: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        office_contact:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        hostel_descript:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: true },)
    return hostel
}