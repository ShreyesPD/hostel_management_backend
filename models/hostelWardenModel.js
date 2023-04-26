
//hostelWarden model
module.exports = (sequelize, DataTypes) => {
    const hostelWarden = sequelize.define("hostelWarden", {
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.STRING,
        },
        warden_id: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.STRING,
        },
        joinDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, { timestamps: true },)
    return hostelWarden 
}
