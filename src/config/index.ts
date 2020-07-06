const environment = process.env.NODE_ENV || 'development'
const serviceName = 'Authentication'

if (environment === 'development') {
  // eslint-disable-next-line global-require
  require('dotenv').config()
} else if (environment === 'test') {
  // eslint-disable-next-line global-require
  require('dotenv').config({
    // eslint-disable-next-line global-require
    path: require('path').resolve(process.cwd(), '.env.test')
  })
}

module.exports = {
  nodeEnv: environment,
  environment,
  secret: process.env.SECRET,
  http: {
    name: serviceName,
    port: process.env.API_PORT
  },
  database: {
    provider: process.env.DATABASE_PROVIDER
  },
  logger: {
    environment,
    name: serviceName,
    level: process.env.LOG_LEVEL,
    deployedLevel: process.env.LOG_DEPLOYED_LEVEL
  }
}
