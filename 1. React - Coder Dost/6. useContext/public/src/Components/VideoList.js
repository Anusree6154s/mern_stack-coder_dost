import Video from './Video';

function VideoList({videoArray, deleteVideo, findVideo}) {
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
                        deleteVideo={deleteVideo}
                        findVideo={findVideo}
                    ></Video>
                )
            }
        </>
    )
}

export default VideoList