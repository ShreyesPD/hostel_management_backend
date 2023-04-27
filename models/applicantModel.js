//applicant model
module.exports = (sequelize, DataTypes) => {
    const applicant = sequelize.define("applicants", {
        applicant_id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        applicant_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        course_type: {
            type: DataTypes.ENUM,
            values: ["UG","PG","PhD"],
            allowNull: false
        },
        applicant_course: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.ENUM,
            values: ['M','F','O'],
            allowNull: false
        },
        aadhar: {
            type: DataTypes.BIGINT(12),
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
        medical_certificate:{
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        bonified_certificate:{
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        start_date: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        end_date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        guardian_name: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        relation: {
            type: DataTypes.ENUM,
            values: ['Mother','Father','Guardian'],
            allowNull: false
        },
        guardian_aadhar: {
            type: DataTypes.BIGINT(12),
            allowNull: false,
        },
        guardian_address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        guardian_contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        guardian_email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, 
            allowNull: false
        },
        application_status:{
            type: DataTypes.ENUM,
            values: ["waiting","aproved","rejected","admitted"],
            defaultValue: "waiting"
        }
    }, { timestamps: true },  {freezeTableName: true})
    return applicant 
}