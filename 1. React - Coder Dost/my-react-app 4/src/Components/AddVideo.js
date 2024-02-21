import { useState } from 'react';
import '../styles/AddVideo.css'

/*uncontrolled input example */
// function AddVideo({ setVideoArray, setI, i }) {

//     let newVideo = {
//         id: i,
//         views: "500",
//         time: '1 month ago',
//         verified: 'true'
//     }

//     const handleChange = (e) => {
//         newVideo = {
//             ...newVideo,
//             [e.target.name]: e.target.value,
//         }
//     }

//     function handleClick(e) {
//         e.preventDefault()

//         setVideoArray((prevItem) => {
//             return [...prevItem, newVideo]
//         })
//         setI(item => item + 1)
//     }

//     return (
//         <div>
//             <form>
//                 <input type="text" placeholder='title' name='title' onChange={handleChange} />
//                 <input type="text" placeholder='channel' name='channel' onChange={handleChange} />
//                 <button onClick={handleClick}>Add Video</button>
//             </form>

//         </div>
//     )
// }


/*Controlled Input Example */
function AddVideo({ setVideoArray, setI, i }) {

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
            id: i,
        }));
    }


    function handleClick(e) {
        e.preventDefault()

        setVideoArray((prevItem) => {
            return [...prevItem, newVideo]
        })
        setI(item => item + 1)
        setNewVideo(initialState)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder='title' name='title' onChange={handleChange}
                    value={newVideo.title}
                />
                <input type="text" placeholder='channel' name='channel' onChange={handleChange} value={newVideo.channel} />
                <button onClick={handleClick}>Add Video</button>
            </form>

        </div>
    )
}

export default AddVideo