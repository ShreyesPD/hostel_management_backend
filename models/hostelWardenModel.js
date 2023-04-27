
//hostelWarden model
module.exports = (sequelize, DataTypes) => {
    const hostelWarden = sequelize.define("hostelWarden", {
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            references: 'hostel', 
            referencesKey: 'hostel_id',
            type: DataTypes.INTEGER,
        },
        warden_id: {
            allowNull: false,
            primaryKey: true,
            references: 'warden', 
            referencesKey: 'warden_id',
            type: DataTypes.INTEGER,
        },
        joinDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, { timestamps: true },);
    //warden.belongsToMany(hostel, { through: 'hostelWarden' });
    //hostel.belongsToMany(warden, { through: 'hostelWarden' });
    return hostelWarden 
}
