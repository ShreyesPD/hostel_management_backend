
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
        Hosteltype: {
            type: DataTypes.ENUM,
            values: ["Men_PG", "Men_PhD", "Women_PG", "Women_PhD"],
            allowNull: false
        },
        accommodationFee: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        securityDeposit: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        officeContact:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        hostelDescpt:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: true },)
    return hostel
}