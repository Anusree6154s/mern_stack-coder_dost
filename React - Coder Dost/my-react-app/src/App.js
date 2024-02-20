import React from 'react';
import './App.css';
import Video from './Components/Video';
import videos from './data/data';

function App() {
  let obj = {
    title: "React JS", channel: "Coder Dost", views: "500",
    time: '1 month ago',
    verified: 'true'
  }

 

  return (
    <div className="App">
      <Video  {...obj} ></Video> {/**spread operator */}
      <Video
        title="Node JS" channel="Coder Dost" views="200"
        time='2months ago'
      ></Video>

      {/* dynamic data from database */}
      {
        videos.map(item =>
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
