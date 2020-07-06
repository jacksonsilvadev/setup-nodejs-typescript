import { skineService } from '../../types/skine/index'

module.exports = (options: skineService) => ({
  test: async () => {
    const { models, services } = options

    console.log('to testado')
  }
})
