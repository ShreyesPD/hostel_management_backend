
//Hostel model
module.exports = (sequelize, DataTypes) => {
    const hostel = sequelize.define("hostels", {
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        //in terms of head count 
        capacity: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        hostel_type: {
            type: DataTypes.ENUM,
            values: ["Men_PG", "Men_PhD","Women_PG", "Women_PhD"],
            allowNull: false
        },
        accommodation_fee_per_day: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        security_deposit: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 3000.00
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        office_contact:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        office_email:{
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, 
            allowNull: false,
        },
        hostel_description:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return hostel
}
