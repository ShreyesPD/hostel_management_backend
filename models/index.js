//importing modules
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
 'hostel_management',
 'root',
 '1234!@#$',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

//checking if connection is done
sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.log('Unable to connect to the database: ', error);
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


//connecting to model
db.student = require('./studentModel')(sequelize, DataTypes)
db.student = require('./wardenModel')(sequelize, DataTypes)
db.student = require('./roomModel')(sequelize, DataTypes)
db.student = require('./roomAllotmentModel')(sequelize, DataTypes)
db.student = require('./paymentModel')(sequelize, DataTypes)
db.student = require('./messModel')(sequelize, DataTypes)
db.student = require('./hostelWardenModel')(sequelize, DataTypes)
db.student = require('./hostelResidentModel')(sequelize, DataTypes)
db.student = require('./hostelModel')(sequelize, DataTypes)
db.student = require('./guardianModel')(sequelize, DataTypes)
db.student = require('./availsModel')(sequelize, DataTypes)


//exporting the module
module.exports = db