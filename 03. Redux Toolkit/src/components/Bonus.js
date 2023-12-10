import { useState } from "react";

export default function Bonus() {
  const [bonus, setBonus] = useState({ points: 0 })

  const increment = () => {
    setBonus({ points: bonus.points + 1 })
  }
  const decrement = () => {
    setBonus({ points: bonus.points - 1 })
  }
  const incrementBypoints = (value) => {
    setBonus({ points: bonus.points + value })
  }

  return (
    <div>
      <h4><b>Bonus Component</b></h4>
      <h3>points: {bonus.points}</h3>
      <button onClick={increment}>increment +</button>

    </div>
  )
}