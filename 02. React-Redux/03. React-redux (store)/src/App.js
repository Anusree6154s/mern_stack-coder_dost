//update values in App.js, Account.js and Bonus.js
import "./styles.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useState } from "react";

export default function App({store}) {
  const [account, setAccount] = useState({ amount: 0 })
  const [value, setValue] = useState(0)
  const [bonus, setBonus] = useState({ points: 0 })

  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <h3>App Component</h3>
      <span>Amount: ${store.getState().account.amount}</span>
      <br />
      <span>Bonus: {store.getState().bonus.points}</span>
      <hr />
      <Account store={store} value={value} setValue={setValue} ></Account>
      <hr />
      <Bonus store={store}></Bonus>
    </div>
  );
}
