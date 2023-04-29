//importing modules
const express = require('express')
const sequelize = require('sequelize')

//const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./models')
const applicantRoutes = require ('./routes/applicantRoutes')
const hostelRoutes = require ('./routes/hostelRoutes')
const messRoutes = require ('./routes/messRoutes')
const wardenRoutes = require ('./routes/wardenRoutes')
// const triggerQuerry = require('./middlewares/triggers')
const { raw } = require('mysql2')
//  const leaveRoutes = require ('./Routes/leaveRoutes')


//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re sync")
})

// Sequelize.query(triggerQuerry,{raw : true})
// .then(() => {
//     console.log('trigger created')
// })
// .catch(error => {
//     console.log('error creating trigger', error)
// });


//routes for the user API
app.use('/api/applicant', applicantRoutes)
app.use('/api/hostel', hostelRoutes)
app.use('/api/mess', messRoutes)
app.use('/api/warden',wardenRoutes)
// app.use('/api/worksOn',worksOnRoutes)
// app.use('/api/Leave',leaveRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
