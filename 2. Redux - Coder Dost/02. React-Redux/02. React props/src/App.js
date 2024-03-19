//update values in App.js, Account.js and Bonus.js
import "./styles.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useState } from "react";

export default function App() {
  const [account, setAccount] = useState({ amount: 0 })
  const [value, setValue] = useState(0)
  const [bonus, setBonus] = useState({ points: 0 })


  const incrementAmount = () => {
    setAccount({ amount: account.amount + 1 })
  }
  const decrementAmount = () => {
    ''
    setAccount({ amount: account.amount - 1 })
  }
  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value })
  }

  const incrementBonus = () => {
    setBonus({ points: bonus.points + 1 })
  }

  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <h3>App Component</h3>
      <span>Amount: ${account.amount}</span>
      <br />
      <span>Bonus: {bonus.points}</span>
      <hr />
      <Account amount={account.amount} value={value} setValue={setValue} increment={incrementAmount} decrement={decrementAmount} incrementByAmount={incrementByAmount} ></Account>
      <hr />
      <Bonus points={bonus.points} increment={incrementBonus}></Bonus>
    </div>
  );
}
