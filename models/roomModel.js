
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
        no_of_available_beds: {
            type: DataTypes.ENUM,
            values: ["0","1","2"],
            defaultValue: "2"
        },
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'hostels',
                key: 'hostel_id'
            },
            type: DataTypes.INTEGER,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return room 
}