import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../Context API/Contexts/ThemeContext';
import DispatchContext from '../Context API/Contexts/DispatchContext';
import { add, update } from '../reducers/videoReducer';
import '../styles/AddVideo.css'
import FindVideoContext from '../Context API/Contexts/FindVideoContext';

/*Controlled Input Example */
function AddVideo() {
    const { theme } = useContext(ThemeContext)
    const { dispatch } = useContext(DispatchContext)
    const { foundVideo } = useContext(FindVideoContext)

    const initialState = {
        views: "500",
        time: '1 month ago',
        verified: 'true',
        title: '',
        channel: ''
    }
    const [newVideo, setNewVideo] = useState(initialState);


    const handleChange = (e) => {
        setNewVideo(prevVideo => ({
            ...prevVideo,
            [e.target.name]: e.target.value,
        }));
    }

    function handleClick(e) {
        e.preventDefault()
        e.target.innerText === 'Add Video' ? dispatch(add(newVideo)) : dispatch(update(newVideo))
        setNewVideo(initialState)
        e.target.innerText = 'Add Video'
    }

    useEffect(() => {
        foundVideo && setNewVideo(foundVideo)
    }, [foundVideo])


    return (
        <div>
            <form>
                <input type="text" placeholder='title' name='title' onChange={handleChange}
                    value={newVideo.title}
                />
                <input type="text" placeholder='channel' name='channel' onChange={handleChange} value={newVideo.channel} />
                <button className={theme} onClick={handleClick}>{foundVideo !== null ? 'Edit Video' : 'Add Video'}</button>
            </form>
        </div>
    )
}

export default AddVideo