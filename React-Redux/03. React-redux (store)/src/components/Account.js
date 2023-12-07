import {increment, decrement, incrementByAmount} from '../actions'

//using keyword props
export default function Account({store, value, setValue}) {
  return (
    <div>
      <h4><b>Account Component</b></h4>
      <h3>Amount: ${store.getState().account.amount}</h3>
      <button onClick={()=>store.dispatch(increment())}>increment +</button>
      <button onClick={()=>store.dispatch(decrement())}>decrement +</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
      <button onClick={() => store.dispatch(incrementByAmount(value))}>increment by {value}</button>

    </div>
  )
}