import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, getUserId } from "../slices/accountSlice";

export default function Account() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)
  const amount = useSelector(state => state.account.amount)
  const dispatch = useDispatch()

  return (
    <div>
      <h4><b>Account Component</b></h4>
      <h3>Amount: ${amount}</h3>
      <button onClick={() => dispatch(increment())}>increment +</button>
      <button onClick={() => dispatch(decrement())}>decrement +</button>
      <p>
      <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
      <button onClick={() => dispatch(incrementByAmount(value))}>increment by {value}</button>
      </p>
     <p>
     <input type="text" onChange={(e) => setValue2(+e.target.value)}></input>
      <button onClick={() => dispatch(getUserId(value2))}>Get User</button>
     </p>
  

    </div>
  )
}