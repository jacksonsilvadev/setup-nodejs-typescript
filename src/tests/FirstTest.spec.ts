import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Jackson'

  expect(user.name).toEqual('Jackson')
})
