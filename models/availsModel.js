
//avails model
module.exports = (sequelize, DataTypes) => {
    const avails = sequelize.define("avails", {
        package_id: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.STRING,
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
        startDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        endDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, { timestamps: true },)
    return avails 
}