let mongoose = require('mongoose')
const connectionString = 'mongodb://student1:Hotties1@ds031108.mlab.com:31108/christmaslist'

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})


connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})


connection.once('open', () => {
  console.log("Connected to Database")
})
