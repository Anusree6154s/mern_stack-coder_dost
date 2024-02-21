//update values only in Account.js and Bonus.js
import "./styles.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

export default function App() {
  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <h3>App Component</h3>
      <span>Amount: $</span>
      <br />
      <span>Bonus: </span>
      <hr />
      <Account></Account>
      <hr />
      <Bonus></Bonus>
    </div>
  );
}
