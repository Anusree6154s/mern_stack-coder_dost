import { useState } from "react"
import ThemeContext from "./ThemeContext"

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')
    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const contextValue = {theme, handleTheme}
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>

    )
}

export default ThemeProvider