import { useState } from 'react';
import '../styles/AddVideo.css'

/*uncontrolled input example */
function AddVideo({ addVideo}) {
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
        addVideo(newVideo)
        setNewVideo(initialState)
    }
    return (
        <div>
            <form>
                <input type="text" placeholder='title' name='title' onChange={handleChange} />
                <input type="text" placeholder='channel' name='channel' onChange={handleChange} />
                <button onClick={handleClick}>Add Video</button>
            </form>

        </div>
    )
}




export default AddVideo