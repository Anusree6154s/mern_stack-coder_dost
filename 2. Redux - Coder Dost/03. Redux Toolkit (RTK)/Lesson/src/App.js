//update values only in Account.js and Bonus.js
import "./styles.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
import Reward from "./components/Reward";

export default function App() {
  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)


  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <h3>App Component</h3>
      <span>Amount: ${amount}</span>
      <br />
      <span>Bonus: {points}</span>
      <hr />
      <Account></Account>
      <hr />
      <Bonus></Bonus>
      <hr/>
      <Reward></Reward>
    </div>
  );
}
