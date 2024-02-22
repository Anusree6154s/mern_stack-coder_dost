import { useState } from 'react'
import '../styles/PlayButton.css'

/* Method 1 
function PlayButton({ children, name, onPause }) {
   return (
       // events as props
       // children props
       <button onClick={children === 'Pause' ? onPause : () => console.log('play')}>{name ? name : children}</button>
   )
}
*/

/*METHOD 2 (useSatae) */
function PlayButton() {
    const [playing, setPlaying] = useState(false)
    const handleClick = () => {
        setPlaying(!playing)
    }
    return (
        <button onClick={handleClick}>{playing ? 'Pause' : 'Play'}</button>
    )
}
export default PlayButton