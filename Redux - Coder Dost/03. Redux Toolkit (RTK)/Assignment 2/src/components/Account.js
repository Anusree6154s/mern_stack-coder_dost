import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as acc from "../slices/accountSlice";

export default function Account() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState()
  const [value3, setValue3] = useState()
  const [value4, setValue4] = useState("")
  const [select, setSelect] = useState(false)
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(acc.getUser());
  }, [dispatch])

  function resetInput() {
    setValue('')
    setValue2('')
    setValue3('')
    setValue4('')
  }

  let found = {}
  if (account.array && (account.name || account.ID)) {
    if (select === true) {
      found = account.array.find((item) => item.name === account.name || item.id === account.ID);
    } else {
      found = '';
    }

  }

  return (
    <div className="account">

      <div className="account-left">
        <h4><b>Account Component</b></h4>
        {account.amount ? <p>Account ID: #{account.id}</p> : ''}
        <p>Amount: ${account.amount}</p>

        <button onClick={() => dispatch(acc.increment())}>increment +</button>
        <button onClick={() => dispatch(acc.decrement())}>decrement +</button>
        <p>
          <input type="text" placeholder="amount" onChange={(e) => setValue(+e.target.value)}></input><br />
          <button onClick={() => dispatch(acc.incrementByAmount(value))}>increment by {value}</button>
        </p>
        <p>
          <input type="text" placeholder="id" onChange={(e) => setValue2(+e.target.value)}></input><br />
          <button onClick={() => dispatch(acc.getUser(value2))}>Get Account</button>
        </p>
      </div>
      <div className="account-right">
        {account.array ?
          <ul>
            {account.array.map((data, index) => (
              <li key={index} style={{ color: found && data.name == found.name ? 'red' : 'black' }}>{index + 1}. {data.name}</li>
            ))}
          </ul> : ''}
        <div className="input">
          <p>
            <input type="text" value={value2} placeholder="id" onChange={(e) => setValue2(+e.target.value)}></input><br />
            <input type="text" value={value4} placeholder="name" onChange={(e) => setValue4(e.target.value)}></input><br />
            <input type="text" value={value3} placeholder="amount" onChange={(e) => setValue3(+e.target.value)}></input><br /><br />
            <button onClick={async () => {
              await dispatch(acc.createUser({ name: value4, amount: value3 }))
              dispatch(acc.getUser());
              resetInput()
            }}>Add Account</button>
          </p>
          <p>
            <button onClick={() => {
              dispatch(acc.deleteUser(value2))
              dispatch(acc.getUser());
              resetInput()
            }}>Delete Account</button>
          </p>
          <p>
            <button onClick={async () => {
              await dispatch(acc.updateUser({ id: value2, name: value4, amount: value3 }))
              dispatch(acc.getUser());
              resetInput()
            }}>Update Account</button>
          </p>
          <p>
            <button onClick={() => {
              dispatch(acc.selectUser({ id: value2, name: value4 }))
              dispatch(acc.getUser());
              resetInput()
              if (select === false) {
                setSelect(true)
              } else {
                setSelect(false)
              }
            }}>{select === false ? 'Select Account' : 'Deselect Account'}</button>
          </p>
        </div>

      </div>

    </div >
  )
}