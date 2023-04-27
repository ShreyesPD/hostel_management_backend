
//payment model
module.exports = (sequelize, DataTypes) => {
    const payment = sequelize.define("payments", {
        payment_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        payment_description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        payment_amt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, { timestamps: true }, {freezeTableName: true})
    return payment 
}