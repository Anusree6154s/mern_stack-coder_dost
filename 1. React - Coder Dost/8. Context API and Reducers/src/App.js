import React, { useContext } from 'react';
import './styles/App.css'
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';
import ThemeContext from './Context API/Contexts/ThemeContext';

function App() {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <button onClick={handleTheme}>Mode</button>
      <AddVideo></AddVideo> <br />
      <VideoList></VideoList>
    </div>
  );
}
export default App;
