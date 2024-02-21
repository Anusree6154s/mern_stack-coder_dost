import { useState } from 'react'
import { increment, decrement, decrementByAmount, incrementByAmount, getUser } from '../actions'
import { useSelector } from 'react-redux'

//using keyword props
export default function Account({ amount, dispatch }) {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const account = useSelector(state => state.account)

  return (
    <div>
      <h4><b>Account Component</b></h4>
      {
          account.pending ? <p>loading...</p> : account.error ? <p>{account.error}</p> : <h3>Amount: ${amount}</h3>
        }
      
      <button onClick={() => dispatch(increment('amount'))}>increment +</button>
      <button onClick={() => dispatch(decrement())}>decrement -</button>

      <p>
        <input type="text" placeholder="Amount to add" onChange={(e) => setValue1(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value1))}>increment by {value1}</button>
      </p>

      <p>
        <input type="text" placeholder="Amount to reduce" onChange={(e) => setValue2(+e.target.value)}></input>
        <button onClick={() => dispatch(decrementByAmount(value2))}>decrement by {value2}</button>
      </p>

      <p>
        <input type="text" placeholder="Account Id" onChange={(e) => setValue3(e.target.value)}></input>
        <button onClick={() => dispatch(getUser(value3))}>initialise account</button>
      </p>


    </div>
  )
}