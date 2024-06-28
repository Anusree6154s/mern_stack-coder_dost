import { useEffect, useState } from 'react'
import './App.css'
import nations from './nations.js'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function App() {
    const [country, setCountry] = useState([])
    const [answer, setAnswer] = useState([])
    const [displayAnswer, setDisplayAnswer] = useState('none')
    const [scores, setScores] = useState({ total: 0, correct: 0, incorrect: 0 })
    const [color, setColor] = useState('')

    const generateRandomNations = () => {
        const randomNationsArray = []
        for (let i = 0; i < 4; i++) {
            let randomIndex = Math.floor(Math.random() * nations.length) //to get random numbers between 0 to nations.length-1
            randomNationsArray.push(nations[randomIndex])
        }
        setCountry(randomNationsArray)

        const randomFlagIndex = Math.floor(Math.random() * randomNationsArray.length)
        setDisplayAnswer('none')
        setAnswer([randomNationsArray[randomFlagIndex], randomNationsArray[randomFlagIndex]["alpha-2"].toLowerCase()])

    }

    useEffect(() => {
        generateRandomNations()
    }, [])

    const checkAnswer = (answerCountry) => {
        setDisplayAnswer('block');

        let prevScores = { ...scores }
        if (answerCountry["alpha-2"].toLowerCase() === answer[1]) {
            setScores({ total: prevScores.total + 1, correct: prevScores.correct + 1, incorrect: prevScores.incorrect })
            setColor('green')
            // alert('Correct Answer')
        } else {
            setScores({ total: prevScores.total + 1, correct: prevScores.correct, incorrect: prevScores.incorrect + 1 })
            setColor('red')
            // alert('Incorrect Answer')

        }
    }

    return (
        <div className="App">
            <div>
                <p><span className='scoreboard'>Total: {scores.total}</span>    <span className='scoreboard'>Correct: {scores.correct}</span>    <span className='scoreboard'>Incorrect:{scores.incorrect}</span> </p>
            </div>
            <span className={`fi fi-${answer[1]}`}></span>
            <div>
                {country.map(item => <button key={item.name} onClick={(e) => checkAnswer(item)}>{item.name}</button>)}
            </div>
            <p style={{ display: displayAnswer, color: color, fontWeight: 'bold' }}>{color == 'red' ? 'Incorrect' : 'Correct'}</p>
            <p style={{ display: displayAnswer }}>{answer[0] && answer[0].name}</p>
            <div className='next'>
                <button onClick={() => generateRandomNations()}>Next →</button>
            </div>
            <div className='restart'>
                <button onClick={() => location.reload()}>Restart</button>
            </div>
        </div>
    )
}
