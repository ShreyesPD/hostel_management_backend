
//room model
module.exports = (sequelize, DataTypes) => {
    const room = sequelize.define("room", {
        roomNo: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        keyNo: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        no_of_beds: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        no_of_tables: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        hostel_id: {
            allowNull: false,
            foreignKey: true,
            type: DataTypes.INTEGER,
        },
    }, { timestamps: true },)
    return room 
}