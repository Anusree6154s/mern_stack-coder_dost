//without using the word 'props'
export default function Bonus({points, increment}) {
  return (
    <div>
      <h4><b>Bonus Component</b></h4>
      <h3>points: {points}</h3>
      <button onClick={increment}>increment +</button>

    </div>
  )
}