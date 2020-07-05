const app = require('../../../starter')

const config = require('./config/index')

const routes = app.helpers.requireDir(`${__dirname}/routes`)
const services = app.helpers.requireDir(`${__dirname}/services`)

app
  .init({
    environment: config.environment,
    logger: config.logger,
    services,
    http: {
      ...config.http,
      routes
    }
  })
  .then(({ start }) => start())
