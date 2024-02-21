//action by name: to reduce errors
export const incAm = 'incrementAmount'
export const incPnt = 'incrementPoints'
export const dec = 'decrement'
export const incByAmount = 'incrementByAmount'

// action creators

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


