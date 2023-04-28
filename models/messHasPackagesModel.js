module.exports = (sequelize, DataTypes) => {
    const mess_has_package = sequelize.define("mess_has_package", {
        package_id: {
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'mess_packages',
                key: 'package_id'
            },
            type: DataTypes.STRING,
        },
        mess_id:{
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'mess',
                key: 'mess_id'
            },
            type: DataTypes.STRING
        },
    }, { timestamps: true }, {freezeTableName: true})
    return mess_has_package 
}