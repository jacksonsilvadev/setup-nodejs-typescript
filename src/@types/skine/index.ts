import { PrismaClient } from '@prisma/client'

class PrismaTypes extends PrismaClient {}

export interface OptionsSkinePath {
  value?: void
  instances: {
    logger: any,
    http: any,
    database: {
      models: PrismaTypes
    },
    jobs: any,
    services: any,
    queue: any
  },
  start: Function
}
