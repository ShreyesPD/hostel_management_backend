
//Hostel model
module.exports = (sequelize, DataTypes) => {
    const warden = sequelize.define("warden", {
        warden_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        wName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        sex: {
            type: DataTypes.ENUM,
            values: ['M','F','O'],
            allowNull: false
        },
        aadhar: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        photo:{
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, 
            allowNull: false
        },
    }, { timestamps: true },)
    return warden
}


// wardenId:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     foreignKey: true,
// },
// unique: true,
// autoIncrement: true,