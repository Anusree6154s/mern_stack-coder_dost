import Video from './Video';

function VideoList({videoArray, deleteVideo, updateVideo}) {
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
                        updateVideo={updateVideo}
                    ></Video>
                )
            }
        </>
    )
}

export default VideoList