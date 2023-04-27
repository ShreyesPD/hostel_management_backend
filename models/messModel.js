
//mess model
module.exports = (sequelize, DataTypes) => {
    const mess = sequelize.define("mess", {
        package_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        package_description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        amt_per_day: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return mess 
}