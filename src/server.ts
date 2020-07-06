import { PrismaClient } from '@prisma/client'
import app from '../../../starter'
import config from './config/index'
import { OptionsSkinePath } from './@types/skine/index'

const routes = app.helpers.requireDir(`${__dirname}/routes`)
const services = app.helpers.requireDir(`${__dirname}/services`)

app
  .init({
    environment: config.environment,
    logger: config.logger,
    services,
    database: {
      ...config.database,
      models: new PrismaClient()
    },
    http: {
      ...config.http,
      routes
    }
  })
  .then((options: OptionsSkinePath) : any => {
    return options.start()
  })
