
//avails model
module.exports = (sequelize, DataTypes) => {
    const avails = sequelize.define("avails", {
        package_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: mess,
                key: 'package_id'
            },
            type: DataTypes.STRING,
        },
        payment_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: payment,
                key: 'payment_id'
            },
            type: DataTypes.STRING,
        },
        hostel_resident_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: hostel_resident,
                key: 'hostel_resident_id'
            },
            type: DataTypes.INTEGER,
        },
        start_date: {
            allowNull: false,
            type: DataTypes.DATE
        },
        end_date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, { timestamps: true }, {freezeTableName: true});
    
    return avails 
}