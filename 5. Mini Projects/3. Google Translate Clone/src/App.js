import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import translate from "translate";

export default function App() {
    const [option, setOptions] = useState('')
    const [fromLang, setFromLang] = useState('')
    const [toLang, setToLang] = useState('')
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')


    async function fetchData() {
        try {
            let res = await axios.get('https://libretranslate.com/languages')
            let data = await res.data
            setOptions(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function translateText(input) {
        try {
            const text = await translate(input, { from: fromLang, to: toLang });
            setOutput(text)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="App">
            <div>

                <label htmlFor="from">From:</label>
                <select name="from" id="from" onChange={(e) => setFromLang(e.target.value)}>
                    <option value=''>--select--</option>
                    {option && option.map(item => <option key={item.name} value={item.code}>{item.name}</option>)}
                </select>

                <label htmlFor="to">To:</label>
                <select name="to"  onChange={(e) => setToLang(e.target.value)}>
                    <option value=''>--select--</option>
                    {option && option.map(item => <option key={item.name} value={item.code}>{item.name}</option>)}
                </select>
            </div>
            <div>
                <textarea name="from" id="from" cols={50} rows={8} placeholder='Enter Text Here' onInput={(e) => setInput(e.target.value)}></textarea>
            </div>
            <div>
                <textarea name="to" id="to" cols={50} rows={8} placeholder='Translated Text Here' value={output} readOnly></textarea>
            </div>
            <button onClick={() => translateText(input)}>Translate</button>


        </div>
    )
}
