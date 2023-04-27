
//room model
module.exports = (sequelize, DataTypes) => {
    const room = sequelize.define("room", {
        room_no: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        key_no: {
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
            references: {
                model: hostel,
                key: 'hostel_id'
            },
            type: DataTypes.INTEGER,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return room 
}