import axios from 'axios';

//action by name: to reduce errors
export const incAm = 'incrementAmount'
export const incPnt = 'incrementPoints'
export const dec = 'decrement'
export const incByAmount = 'incrementByAmount'
export const getUserAccFulfilled = 'getUserAccFulfilled'
export const getUserAccRejected = 'getUserAccRejected'
export const getUserAccPending = 'getUserAccPending'

// action creators
export function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending())
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
      dispatch(getUserAccountFulfilled(data.amount))
    } catch (error) {
      dispatch(getUserAccountRejected(error.message))
    }

  }
}
export function increment(parameter) {
  switch (parameter) {
    case 'amount':
    return { type: incAm }
    case 'points':
    return { type: incPnt }
    default:
      break;
  }
}
export function decrement() {
  return { type: dec }
}
export function incrementByAmount(value) {
  return { type: incByAmount, payload: value }
}
export function getUserAccountFulfilled(value) {
  return { type: getUserAccFulfilled, payload: value }
}
export function getUserAccountRejected(error) {
  return { type: getUserAccRejected, error: error }
}
export function getUserAccountPending() {
  return { type: getUserAccPending }
}


