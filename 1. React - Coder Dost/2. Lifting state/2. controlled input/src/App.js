import React, { useState } from 'react';
import './styles/App.css'
import Video from './Components/Video';
import videos from './data/data';
import AddVideo from './Components/AddVideo';

// By lifting State
function App() {
  let [videoArray, setVideoArray] = useState(videos)
  let [i, setI] = useState(4)

  let obj = {
    title: "React JS",
    channel: "Coder Dost",
    views: "500",
    time: '1 month ago',
    verified: 'true'
  }

  const addVideo = (video) => {
    setVideoArray(prevItem =>[...prevItem, { ...video, id: i }])
    setI(item => item + 1)
  }

  return (
    <div className="App">
      <AddVideo addVideo={addVideo}></AddVideo>
      <br />
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
    </div>
  );
}


export default App;
