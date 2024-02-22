import React, { useReducer, useState } from 'react';
import './styles/App.css'
import videos from './data/data';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';


// Action types
const ADD = 'add';

// Action creators
const add = (value) => ({ type: ADD, payload: value });

// Reducer function
const videoReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { ...action.payload, id: state.length + 1 }]
    default:
      return state;
  }
};


function App() {
  let [videoArray, setVideoArray] = useState(videos)
  let [i, setI] = useState(4)
  let [foundVideo, setFoundVideo] = useState(null)

  // Initial state
  const initialState = videos;

  // useReducer hook
  const [state, dispatch] = useReducer(videoReducer, initialState);


  const addVideo = (video) => {
    dispatch(add(video))
  }

  const deleteVideo = (e) => {
    const targetId = parseInt(e.target.id)
    let filteredArray = videoArray.filter(item => item.id !== targetId)
    setVideoArray(filteredArray)
  }

  const updateVideo = (e) => {
    const targetId = parseInt(e.target.id)
    setFoundVideo(videoArray.find(item => item.id === targetId))
  }

  const editVideo = (video) => {
    const index = videoArray.findIndex(item => item.id === video.id)
    const videoArrayCopy = [...videoArray]
    videoArrayCopy.splice(index, 1, video)
    setVideoArray(videoArrayCopy)
  }

  return (
    <div className="App">
      <AddVideo addVideo={addVideo} foundVideo={foundVideo} editVideo={editVideo}></AddVideo>
      <br />
      <VideoList deleteVideo={deleteVideo} updateVideo={updateVideo} videoArray={videoArray}></VideoList>
    </div>
  );
}
export default App;
