import { useContext } from 'react'
import '../styles/PlayButton.css'
import ThemeContext from '../Context API/Contexts/ThemeContext'
import useIsPLaying from '../Hooks/IsPlaying'

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
    const {playing, handleClick} = useIsPLaying()
    const theme = useContext(ThemeContext)
    
    return (
        <button className={theme} onClick={handleClick}>{playing ? 'Pause' : 'Play'}</button>
    )
}
export default PlayButton