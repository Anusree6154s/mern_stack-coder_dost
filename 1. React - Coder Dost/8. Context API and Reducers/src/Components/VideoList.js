import { useContext } from 'react';
import Video from './Video';
import DispatchContext from '../Context API/Contexts/DispatchContext';

function VideoList({findVideo}) {
const {videoArray} = useContext(DispatchContext)

    return (
        <>
            {/* dynamic data from database */}
            {
                videoArray.map(item =>
                    <Video
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        channel={item.channel}
                        views={item.views}
                        time={item.time}
                    ></Video>
                )
            }
        </>
    )
}

export default VideoList