import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

let rootDiv = document.getElementById('root')
let root = ReactDOM.createRoot(rootDiv)

root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)
