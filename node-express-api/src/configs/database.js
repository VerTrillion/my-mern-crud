const mongoose = require('mongoose')
const config = require('./app')

const connection = mongoose.connect(`mongodb://${config.mongoHost}:${config.mongoPort}/${config.mongoDatabase}`, { useNewUrlParser: true }, error => {
  if (error) console.error('MongoDB error: ', error)
  console.log("MongoDB connected")
})

module.exports = connection