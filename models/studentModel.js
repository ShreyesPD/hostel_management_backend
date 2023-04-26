
//student model
module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define("student", {
        stud_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        sName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        stud_type: {
            type: DataTypes.ENUM,
            values: ["UG","PG","PhD"],
            allowNull: false
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
    return student 
}