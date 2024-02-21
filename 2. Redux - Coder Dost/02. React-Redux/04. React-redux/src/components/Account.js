import { useState } from 'react'
import {increment, decrement, incrementByAmount} from '../actions'

//using keyword props
export default function Account({amount, dispatch}) {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h4><b>Account Component</b></h4>
      <h3>Amount: ${amount}</h3>
      <button onClick={()=>dispatch(increment('amount'))}>increment +</button>
      <button onClick={()=>dispatch(decrement())}>decrement -</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
      <button onClick={() =>dispatch(incrementByAmount(value))}>increment by {value}</button>

    </div>
  )
}