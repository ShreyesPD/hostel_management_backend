
//roomAllot model
module.exports = (sequelize, DataTypes) => {
    const room_allot = sequelize.define("room_allots", {
        room_no: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'rooms',
                key: 'room_no'
            },
            type: DataTypes.INTEGER,
        },
        hostel_resident_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'hostel_residents',
                key: 'hostel_resident_id'
            },
            type: DataTypes.INTEGER,
        },
        start_date: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        end_date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return room_allot 
}
