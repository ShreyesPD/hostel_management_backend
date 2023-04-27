
//hostelResident model
module.exports = (sequelize, DataTypes) => {
    const hostel_resident = sequelize.define("hostel_resident", {
        hostel_resident_id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
<<<<<<<< HEAD:models/applicantModel.js
        applicant_Name: {
========
        hostel_resident_name: {
>>>>>>>> d9d0fee5cf3fdb8e358f86db433e3d9d8942bedc:models/hostelResidentModel.js
            allowNull: false,
            type: DataTypes.STRING,
        },
        course_type: {
            type: DataTypes.ENUM,
            values: ["UG","PG","PhD"],
            allowNull: false
        },
        hostel_resident_course: {
            type: DataTypes.STRING,
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
        distance:{
            type: DataTypes.INTEGER,
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