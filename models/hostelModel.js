
//Hostel model
module.exports = (sequelize, DataTypes) => {
    const hostel = sequelize.define("hostel", {
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
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

// email: {
//     type: DataTypes.STRING,
//     unique: true,
//     isEmail: true, //checks for email format
//     allowNull: false
// },
// wardenId:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     foreignKey: true,
// },
// unique: true,
// autoIncrement: true,