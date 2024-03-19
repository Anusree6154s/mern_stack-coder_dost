// just used for combining all providers (aka global value logics)

import { useContext, useState } from "react"
import FindVideoContext from "../Contexts/FindVideoContext"
import DispatchContext from "../Contexts/DispatchContext"

function FindVideoProvider({ children }) {

    const [foundVideo, setFoundVideo] = useState(null)
    const {videoArray} = useContext(DispatchContext)

    const findVideo = (e) => {
        const targetId = parseInt(e.target.id)
        setFoundVideo(videoArray.find(item => item.id === targetId))
    }

    const contextValue = {foundVideo, findVideo}

    return (
        <FindVideoContext.Provider value={contextValue}>
            {children}
        </FindVideoContext.Provider>
    )
}

export default FindVideoProvider