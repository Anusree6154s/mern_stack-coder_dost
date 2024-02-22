import Video from './Video';

function VideoList({videoArray, obj}) {
    return (
        <>
            <Video  {...obj} ></Video> {/**spread operator */}
            <Video
                title="Node JS" channel="Coder Dost" views="200"
                time='2months ago'
            ></Video>

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