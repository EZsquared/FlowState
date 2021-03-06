import logo from './logo.svg';
import './App.css';
import Player from './Components/NewPlayer/NewPlayer.js';
import FullPlayer from './Components/FullPlayer/FullPlayer.js';
import './Components/fonts/icomoon.css';
import Playlist from './Components/Playlist/Playlist.js';

function App() {
  return (
    <div className="App">
      <div className="logo-top">Flow<span>State</span></div>
      <div className="page-container">
        <Player/>
        <Playlist/>
      </div>
    </div>
  
  );
}

export default App;
