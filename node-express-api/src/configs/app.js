const appConfig = {
  port: process.env.PORT || 4000,
  apiVersion: process.env.API_VERSION || 1,
  mongoHost: process.env.MONGODB_HOST || 'localhost',
  mongoPort: process.env.MONGODB_PORT || 27017,
  mongoDatabase: process.env.MONGODB_DATABASE || 'mern-db'
}

module.exports = appConfig