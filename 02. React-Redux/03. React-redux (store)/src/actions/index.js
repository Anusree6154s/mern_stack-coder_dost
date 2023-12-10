import axios from 'axios';

//action by name: to reduce errors
export const init = 'init'
export const inc = 'increment'
export const dec = 'decrement'
export const incByAmount = 'incrementByAmount'

// action creators

export function increment() {
  return { type: inc }
}
export function decrement() {
  return { type: dec }
}
export function incrementByAmount(amount) {
  return { type: incByAmount, payload: amount }
}


