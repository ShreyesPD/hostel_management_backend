
//guardian model
module.exports = (sequelize, DataTypes) => {
    const guardian = sequelize.define("guardian", {
        hostel_resident_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: hostel_resident,
                key: 'hostel_resident_id'
            },
            type: DataTypes.INTEGER,
        },
        guardian_name: {
            allowNull: false,
            primaryKey: true,
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
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, 
            allowNull: false
        },
    }, { timestamps: true }, {freezeTableName: true});
    return guardian 
}