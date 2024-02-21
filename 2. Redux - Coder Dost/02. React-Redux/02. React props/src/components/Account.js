//using keyword props
export default function Account(props) {
  return (
    <div>
      <h4><b>Account Component</b></h4>
      <h3>Amount: ${props.amount}</h3>
      <button onClick={props.increment}>increment +</button>
      <button onClick={props.decrement}>decrement +</button>
      <input type="text" onChange={(e) => props.setValue(+e.target.value)}></input>
      <button onClick={() => props.incrementByAmount(props.value)}>increment by {props.value}</button>

    </div>
  )
}