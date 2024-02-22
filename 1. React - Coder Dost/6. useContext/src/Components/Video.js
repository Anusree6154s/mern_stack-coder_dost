import '../styles/Video.css'
import PlayButton from './Playbutton';

function Video({ id, title, channel = 'Coder Dost', views, time, verified, deleteVideo, findVideo }) {

    const handleClick = (e) => {
        e.target.innerText==='X'? deleteVideo(e) : findVideo(e)
    }

    return (
        <div className='container'>
            <img src={id ? `https://images.pexels.com/photos/674020${id}/pexels-photo-674020${id}.jpeg?auto=compress&cs=tinysrgb&w=600` : "https://images.pexels.com/photos/6740100/pexels-photo-6740100.jpeg?auto=compress&cs=tinysrgb&w=600"}></img>

            <div className='title'> {title}</div>
            <div className='channel'>{channel} {verified && '✅'}</div>
            <div className='views'><span>{views} views </span><span>{time} </span> </div>

            {/* METHOD 1 */}
            {/* <PlayButton name='Play'></PlayButton>
            <PlayButton onPause={() => console.log('pause')}>Pause</PlayButton> */}

            {/* METHOD 2 (useState) */}
            <PlayButton></PlayButton>
            <button id={id} onClick={handleClick}>Edit</button>
            <button id={id} onClick={handleClick}>X</button>

        </div>
    )
}

export default Video