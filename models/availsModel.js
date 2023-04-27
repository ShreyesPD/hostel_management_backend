
//avails model
module.exports = (sequelize, DataTypes) => {
    const avails = sequelize.define("avails", {
        package_id: {
            allowNull: false,
            primaryKey: true,
            references: 'mess', 
            referencesKey: 'package_id',
            type: DataTypes.STRING,
        },
        payment_id: {
            allowNull: false,
            primaryKey: true,
            references: 'payment', 
            referencesKey: 'payment_id',
            type: DataTypes.STRING,
        },
        applicant_id: {
            allowNull: false,
            primaryKey: true,
            references: 'applicant', 
            referencesKey: 'applicant_id',
            type: DataTypes.INTEGER,
        },
        startDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        endDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, { timestamps: true },);
    
    return avails 
}