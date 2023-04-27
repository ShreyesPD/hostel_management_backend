
//room model
module.exports = (sequelize, DataTypes) => {
    const room = sequelize.define("rooms", {
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
                model: 'hostels',
                key: 'hostel_id'
            },
            type: DataTypes.INTEGER,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return room 
}