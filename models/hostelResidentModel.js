
//hostelResident model
module.exports = (sequelize, DataTypes) => {
    const hostel_resident = sequelize.define("hostel_residents", {
        hostel_resident_id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            type: DataTypes.INTEGER,
        },
        hostel_resident_name: {
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
    }, { timestamps: true },  {freezeTableName: true})
    return hostel_resident 
}