
//mess model
module.exports = (sequelize, DataTypes) => {
    const mess = sequelize.define("messes", {
        mess_id:{
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        mess_description:{
            allowNull: false,
            type: DataTypes.STRING 
        }
    }, { timestamps: true }, {freezeTableName: true})
    return mess 
}