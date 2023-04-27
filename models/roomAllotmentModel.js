
//roomAllot model
module.exports = (sequelize, DataTypes) => {
    const roomAllot = sequelize.define("roomAllot", {
        roomNo: {
            allowNull: false,
            primaryKey: true,
            references: 'room', 
            referencesKey: 'roomNo',
            type: DataTypes.INTEGER,
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
        warden_id: {
            allowNull: false,
            primaryKey: true,
            references: 'warden', 
            referencesKey: 'payment_id',
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
    }, { timestamps: true },)
    return roomAllot 
}
