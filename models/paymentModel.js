
//payment model
module.exports = (sequelize, DataTypes) => {
    const payment = sequelize.define("payment", {
        payment_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        payment_description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        paymentAmt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, { timestamps: true },)
    return payment 
}