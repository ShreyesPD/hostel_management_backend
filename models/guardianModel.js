
//guardian model
module.exports = (sequelize, DataTypes) => {
    const guardian = sequelize.define("guardian", {
        stud_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        gName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        sex: {
            type: DataTypes.ENUM,
            values: ['M','F','O'],
            allowNull: false
        },
        relation: {
            type: DataTypes.ENUM,
            values: ['Mother','Father','Guardian'],
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
    return guardian 
}


// wardenId:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     foreignKey: true,
// },
// unique: true,
// autoIncrement: true,