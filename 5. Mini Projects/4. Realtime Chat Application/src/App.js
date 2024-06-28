import { useEffect, useState } from 'react'
import './App.css'
import { getDatabase, push, ref, set, onChildAdded } from 'firebase/database'

export default function App() {
    const [name, setName] = useState('')
    const [chats, setChats] = useState([])
    const [msg, setMsg] = useState('')

    const db = getDatabase()
    const chatListRef = ref(db, 'chats')

    function sendChat() {
        const chatRef = push(chatListRef)
        set(chatRef, {
            name: name, message: msg
        })
        // setChats('')
    }

    useEffect(() => {
        onChildAdded(chatListRef, (data) => {
            console.log(data.val(), 'right from dattabase')
            setChats((chats) => [...chats, data.val()])
        })
        console.log(chats, 'after database update')
    }, [])

    return (
        <div className="App">
            {!name && <div className='findUser'>
                <input type="text" placeholder='Enter your name to start' onKeyDown={(e) => e.key === 'Enter' && setName(e.target.value)} />
            </div>}
            {name && <div className='chat-section'>
                <h1>User: {name}</h1>
                <div className='chat-container'>
                    {chats && chats.map((item, index) => <div  key={index} className={`container ${item.name == name ? 'me' : ''}`}>
                        <p className='chatbox'>
                            <strong>{item.name}: </strong>
                            <span>{item.message}</span>
                        </p>
                    </div>)}
                </div>
            </div>}

            <div className='input-section'>
                <input type="text" placeholder='Enter you message' onInput={(e) => setMsg(e.target.value)} />
                <button onClick={() => sendChat()}>Send</button>
            </div>
        </div>
    )
}
