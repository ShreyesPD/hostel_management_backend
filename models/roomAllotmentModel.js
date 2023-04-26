
//roomAllot model
module.exports = (sequelize, DataTypes) => {
    const roomAllot = sequelize.define("roomAllot", {
        roomNo: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.INTEGER,
        },
        payment_id: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.STRING,
        },
        stud_id: {
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
