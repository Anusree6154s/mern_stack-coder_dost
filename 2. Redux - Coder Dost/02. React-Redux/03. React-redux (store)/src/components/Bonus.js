//without using the word 'props'
export default function Bonus({store}) {
  return (
    <div>
      <h4><b>Bonus Component</b></h4>
      <h3>points: {store.getState().bonus.points}</h3>
      <button onClick={()=>store.dispatch(increment())}>increment +</button>

    </div>
  )
}