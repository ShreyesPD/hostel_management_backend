module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
        s_id: {
            allowNull: false,
            // autoIncrement: true,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        s_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        }
    }, { timestamps: true },)
    return Student
}