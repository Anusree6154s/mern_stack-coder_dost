import React, { useState } from 'react';
import './styles/App.css'
import Video from './Components/Video';
import videos from './data/data';

//without lifting function
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

  function handleClick() {
    let newVideo = {
      id: i,
      title: "React JS",
      channel: "Coder Dost",
      views: "500",
      time: '1 month ago',
      verified: 'true'
    }
    setVideoArray(prevItem=>[...prevItem, newVideo])
    setI(item => item+1)
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Add Video</button>
      </div>
      <br />

      {/* fixed data given by us */}
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
