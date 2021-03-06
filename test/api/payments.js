import { knex, serverReady, test, user } from '../_imports'
import payments from '../../api/payments.helper'

function token (id = 'tok_visa') {
  return { id, object: 'token' }
}

test('A customer can be created, upgraded and deleted', async t => {
  await serverReady
  const { customerId, subscriptionId } = await payments.createLimitedCustomer(user.email)
  await payments.setSubscription(user.email, customerId, payments.planIds.PREMIUM, token(), knex)
  await payments.deleteAllCustomerData(customerId, subscriptionId)
})

test('A customer can be created, payment method added, and deleted', async t => {
  await serverReady
  const { customerId, subscriptionId } = await payments.createLimitedCustomer(user.email)
  await payments.setSubscription(user.email, customerId, payments.planIds.LIMITED, token(), knex)
  await payments.deleteAllCustomerData(customerId, subscriptionId)
})
