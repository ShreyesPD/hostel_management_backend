
//roomAllot model
module.exports = (sequelize, DataTypes) => {
    const enroll = sequelize.define("enrolls", {
        payment_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'payments',
                key: 'payment_id'
            },
            type: DataTypes.STRING,
        },
        applicant_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'applicants',
                key: 'applicant_id'
            },
            type: DataTypes.INTEGER,
        },
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'hostels',
                key: 'hostel_id'
            },
            type: DataTypes.INTEGER,
        }
    }, { timestamps: true }, {freezeTableName: true})
    return enroll 
}
