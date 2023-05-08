
//hostelWarden model

module.exports = (sequelize, DataTypes) => {
    const hostel_warden = sequelize.define("hostel_wardens", {
        hostel_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'hostels',
                key: 'hostel_id'
            },
            type: DataTypes.INTEGER,
        },
        warden_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'wardens',
                key: 'warden_id'
            },
            type: DataTypes.INTEGER,
        },
        join_date: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        end_date: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    }, { timestamps: true }, {freezeTableName: true});

    return hostel_warden 
}

