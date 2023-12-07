//update values in App.js, Account.js and Bonus.js
//with props (Account) and without props (Bonus)
import "./styles.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const amount = useSelector(state => state.account.amount)
  const points = useSelector(state => state.bonus.points)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <h3>App Component</h3>
      <span>Amount: ${amount}</span>
      <br />
      <span>Bonus: {points}</span>
      <hr />
      <Account amount={amount} dispatch={dispatch}></Account>
      <hr />
      <Bonus ></Bonus>
    </div>
  );
}
