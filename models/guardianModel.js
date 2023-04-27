
//guardian model
module.exports = (sequelize, DataTypes) => {
    const guardian = sequelize.define("guardian", {
        applicant_id: {
            allowNull: false,
            primaryKey: true,
            references: 'applicant', 
            referencesKey: 'applicant_id',
            type: DataTypes.INTEGER,
        },
        gName: {
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
    }, { timestamps: true },);
  //  applicant.hasOne(guardian);
    return guardian 
}