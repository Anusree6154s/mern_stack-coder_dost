// just used for combining all providers (aka global value logics)

import { useReducer } from "react"
import videos from '../../data/data'
import DispatchContext from "../Contexts/DispatchContext"
import { videoReducer } from "../../reducers/videoReducer"

function DispatchProvider({ children }) {

    // Initial state
    const initialState = videos

    // useReducer hook
    const [videoArray, dispatch] = useReducer(videoReducer, initialState)

    const contextValue = { videoArray, dispatch }

    return (
        <DispatchContext.Provider value={contextValue}>
            {children}
        </DispatchContext.Provider>
    )
}

export default DispatchProvider