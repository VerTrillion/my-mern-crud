const config = require('./configs/app')
const routes =  require('./routes')
const express = require('express')
const app = express()

require('./configs/express')(app)

app.use(routes)

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`)
})