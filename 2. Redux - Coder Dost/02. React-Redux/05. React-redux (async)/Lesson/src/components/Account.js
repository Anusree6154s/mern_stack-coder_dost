import { useState } from 'react'
import {increment, decrement, incrementByAmount, getUser} from '../actions'

//using keyword props
export default function Account({amount, dispatch}) {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)

  return (
    <div>
      <h4><b>Account Component</b></h4>
      <h3>Amount: ${amount}</h3>
      <button onClick={()=>dispatch(increment('amount'))}>increment +</button>
      <button onClick={()=>dispatch(decrement())}>decrement -</button>
      <input type="text" placeholder="Amount to add" onChange={(e) => setValue1(+e.target.value)}></input>
      <button onClick={() =>dispatch(incrementByAmount(value1))}>increment by {value1}</button>
      <input type="text" placeholder="Account Id" onChange={(e) => setValue2(+e.target.value)}></input>
      <button onClick={() =>dispatch(getUser(value2))}>Initialise</button>
    </div>
  )
}