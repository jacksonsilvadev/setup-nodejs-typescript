
test('it should be ok', () => {
  const user = {
    name: ''
  }

  user.name = 'Jackson'

  expect(user.name).toEqual('Jackson')
})
