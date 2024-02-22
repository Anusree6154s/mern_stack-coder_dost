import { useState } from 'react';
import '../styles/AddVideo.css'

/*Controlled Input Example */
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
                <input type="text" placeholder='title' name='title' onChange={handleChange} 
                // controlled using this ⬇️
                value={newVideo.title} 
                />
                <input type="text" placeholder='channel' name='channel' onChange={handleChange} value={newVideo.channel} />
                <button onClick={handleClick}>Add Video</button>
            </form>

        </div>
    )
}

export default AddVideo