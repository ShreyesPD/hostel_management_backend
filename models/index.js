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
db.applicant = require('./applicantModel')(sequelize, DataTypes)
db.warden = require('./wardenModel')(sequelize, DataTypes)
db.room = require('./roomModel')(sequelize, DataTypes)
db.roomAllotment = require('./roomAllotmentModel')(sequelize, DataTypes)
db.payment = require('./paymentModel')(sequelize, DataTypes)
db.mess = require('./messModel')(sequelize, DataTypes)
db.hostelWarden = require('./hostelWardenModel')(sequelize, DataTypes)
db.hostel = require('./hostelModel')(sequelize, DataTypes)
db.guardian = require('./guardianModel')(sequelize, DataTypes)
db.avails = require('./availsModel')(sequelize, DataTypes)
db.hostelResident = require('./hostelResidentModel')(sequelize, DataTypes)


//exporting the module
module.exports = db