import React, { useContext, useReducer, useState } from 'react';
import './styles/App.css'
import videos from './data/data';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';
import ThemeContext from './context/ThemeContext';


// Action types
const ADD = 'add';
const DELETE = 'delete';
const UPDATE = 'update';

// Action creators
const add = (value) => ({ type: ADD, payload: value });
const del = (value) => ({ type: DELETE, payload: parseInt(value.target.id) });
const update = (value) => ({ type: UPDATE, payload: value });

// Reducer function
const videoReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { ...action.payload, id: state.length + 1 }]

    case DELETE:
      return state.filter(item => item.id !== action.payload)

    case UPDATE:
      const index = state.findIndex(item => item.id === action.payload.id)
      const copy = [...state]
      copy.splice(index, 1, action.payload)
      return copy

    default:
      return state;
  }
};


function App() {
  let [foundVideo, setFoundVideo] = useState(null)
  const { theme, handleTheme } = useContext(ThemeContext)

  // Initial state
  const initialState = videos;

  // useReducer hook
  const [videoArray, dispatch] = useReducer(videoReducer, initialState);

  const addVideo = (video) => dispatch(add(video))
  const deleteVideo = (e) => dispatch(del(e))
  const updateVideo = (video) => dispatch(update(video))
  const findVideo = (e) => {
    const targetId = parseInt(e.target.id)
    setFoundVideo(videoArray.find(item => item.id === targetId))
  }


  return (
    <div className={`App ${theme}`}>
      <button onClick={handleTheme}>Mode</button>
      <AddVideo addVideo={addVideo} foundVideo={foundVideo} updateVideo={updateVideo}></AddVideo>
      <br />
      <VideoList deleteVideo={deleteVideo} findVideo={findVideo} videoArray={videoArray}></VideoList>
    </div>

  );
}
export default App;
