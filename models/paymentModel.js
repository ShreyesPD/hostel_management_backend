
//payment model
module.exports = (sequelize, DataTypes) => {
    const payment = sequelize.define("payments", {
        applicant_id : {
            primaryKey:true,
            type: DataTypes.INTEGER,
        },
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
        reciept:{
            type: DataTypes.BLOB('long'),
            allowNull: true,
        }
    }, { timestamps: true }, {freezeTableName: true})
    return payment 
}