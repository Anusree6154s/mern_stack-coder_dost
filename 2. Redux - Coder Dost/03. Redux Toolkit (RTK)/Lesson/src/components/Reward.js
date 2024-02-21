import { useState } from "react";
import { increment, incrementByAmount } from "../reducers/reward";
import { useDispatch, useSelector } from "react-redux";

export default function Reward() {
  const [value, setValue] = useState(0)
  const points = useSelector(state=>state.reward.points)
  const dispatch=useDispatch()

  return (
    <div>
      <h4><b>Reward Component</b></h4>
      <h3>points: {points}</h3>
      <button onClick={()=>dispatch(increment())}>increment +</button><br/>
      <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
      <button onClick={() => dispatch(incrementByAmount(value))}>increment by {value}</button>

    </div>
  )
}