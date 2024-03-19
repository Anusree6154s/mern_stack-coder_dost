import { useState } from "react"

function useIsPLaying() {

    const [playing, setPlaying] = useState(false)
    const handleClick = () => {
        setPlaying(!playing)
    }
    return {playing, handleClick}
}

export default useIsPLaying