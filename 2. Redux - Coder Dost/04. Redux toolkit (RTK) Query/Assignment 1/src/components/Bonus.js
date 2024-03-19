import { increment } from "../slices/bonusSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Bonus() {
  const points = useSelector(state=>state.bonus.points)
  const dispatch=useDispatch()

  return (
    <div>
      <h4><b>Bonus Component</b></h4>
      <h3>points: {points}</h3>
      <button onClick={()=>dispatch(increment())}>increment +</button>

    </div>
  )
}