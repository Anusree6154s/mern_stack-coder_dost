import React, { useState } from 'react';
import './styles/App.css'
import videos from './data/data';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';

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
      <AddVideo addVideo={addVideo} setI={setI} i={i}></AddVideo>
      <br />
      <VideoList videoArray={videoArray} obj={obj}></VideoList>
    </div>
  );
}
export default App;
