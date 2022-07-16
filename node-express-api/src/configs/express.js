const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

module.exports = async (app) => {
  require('./database')
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(morgan('dev'))

  app.use(require('../middleware/responseHandling'))
}