import { useState } from "react";

export default function Account() {
  const [account, setAccount] = useState({ amount: 0 })
  const [value, setValue] = useState(0)

  const increment = () => {
    setAccount({ amount: account.amount + 1 })
  }
  const decrement = () => {
    ''
    setAccount({ amount: account.amount - 1 })
  }
  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value })
  }

  return (
    <div>
      <h4><b>Account Component</b></h4>
      <h3>Amount: ${account.amount}</h3>
      <button onClick={increment}>increment +</button>
      <button onClick={decrement}>decrement +</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
      <button onClick={() => incrementByAmount(value)}>increment by {value}</button>

    </div>
  )
}