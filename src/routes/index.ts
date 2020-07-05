module.exports = ({ services, logger }) => ({
  test: {
    path: '/test',
    method: 'GET',
    permissions: [],
    publicRoute: true,
    handler: async (req, res) => {
      console.log(await services.test.test())
      res.status(200).json({ msg: 'Rota protegida' })
    }
  }
})
